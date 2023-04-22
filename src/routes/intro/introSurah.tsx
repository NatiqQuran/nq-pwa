import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";

interface Verse {
    number: number;
    content: {
        text: string;
    };
}

interface Surah {
    id: number;
    name: string;
    period: string;
    bismillah_status: "in_ayah" | "true" | "false";
    bismillah_text: string | null;

    ayahs: Verse[];
}

const Ayah = (props: { ayah: Verse }) => (
    <span>
        {props.ayah.content.text}
        <span> {toArabic(props.ayah.number)} </span>
        {props.ayah.number == 1 ? (<br />) : null}
    </span>
);

const toArabic = (input: any) => input.toLocaleString("ar-EG");



function IntroSurah() {
    const surahFetch = useFetch<Surah>(
        process.env.REACT_APP_API_URL + `/surah/1?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
    }, []);

    return (
        <span style={{
            fontSize: "3rem",
            fontFamily: "Hafs",
            textAlign: "justify",
            textAlignLast: "center"
        }}>
            {!surahFetch.isResponseBodyReady ? (
                "loading..."
            ) :
                surahFetch.responseBody.ayahs.map(
                    ayah => <Ayah ayah={ayah} />
                )
            }
        </span>
    );
}

export default IntroSurah;
