import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";

import {
    AppBar,
    Main,
    Page,
    Spacer,
    Button,
    Container,
    GridContainer,
    GridItem,
    SvgIcon,
    Stack,
    Footer,
    Navigation,
    List,
    ListItem,
} from "@yakad/ui";
import fatihah from '../../assets/mp3/abdolbasetFatihah.mp3';


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
        <div>
            {!surahFetch.isResponseBodyReady ? (
                "loading..."
            ) :
                (
                    <Stack style={{ width: "100%", alignItems: "center" }}>
                        <span style={{
                            fontSize: "3rem",
                            fontFamily: "Hafs",
                            textAlign: "justify",
                            textAlignLast: "center"
                        }}>
                            {surahFetch.responseBody.ayahs.map(
                                ayah => <Ayah ayah={ayah} />
                            )}
                        </span>
                        <p
                            style={{
                                textAlign: "justify",
                                textAlignLast: "center",
                                fontSize: "1.6rem",
                                lineHeight: "2.8rem",
                            }}
                        >
                            In the name of Allah, the Entirely Merciful, the Especially Merciful [1]
                            <br />
                            [All] praise is [due] to Allah, Lord of the worlds [2]
                            The Entirely Merciful, the Especially Merciful [3]
                            Sovereign of the Day of Recompense [4]
                            It is You we worship and You we ask for help [5]
                            Guide us to the straight path [6]
                            The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray [7]
                        </p>
                        <audio src={fatihah} controls />
                    </Stack >
                )
            }
        </div>
    );
}

export default IntroSurah;
