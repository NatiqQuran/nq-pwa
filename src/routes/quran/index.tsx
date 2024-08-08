import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "@yakad/lib";
import { Button, Card, Container, Loading } from "@yakad/ui";

import NavigationList from "./navigationList";
import Symbol from "@yakad/symbols";
import { Xpanel } from "@yakad/x";

import SurahHeader from "./surahHeader";

interface Verse {
    number: number;
    content: {
        text: string;
    };
}

export interface Surah {
    surah_uuid: string;
    surah_name: string;
    surah_period: "makki" | "madani" | null;
    surah_number: number;

    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;

    ayahs: Verse[];
}

export default function Quran() {
    const { id } = useParams();
    const surahFetch = useFetch<Surah>(
        process.env.REACT_APP_API_URL + `/surah/${id}?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
    }, []);

    const appbarName = surahFetch.isResponseBodyReady
        ? "Quran " +
          surahFetch.responseBody.surah_number +
          ":" +
          surahFetch.responseBody.surah_name
        : "Quran";

    return (
        <Xpanel
            name={appbarName}
            navigationChildren={<NavigationList />}
            appbarChildren={
                <Link to="/search">
                    <Button icon={<Symbol icon="search" />} />
                </Link>
            }
        >
            {!surahFetch.isResponseBodyReady ? (
                <Loading size="large" />
            ) : (
                <>
                    <SurahHeader surahData={surahFetch.responseBody} />
                    <Surah surahData={surahFetch.responseBody} />
                </>
            )}
        </Xpanel>
    );
}

function Surah(props: { surahData: Surah }) {
    return (
        <Container maxWidth="md" dir="rtl" style={{ padding: "0.5rem" }}>
            <span
                style={{
                    fontSize: "3.5rem",
                    fontFamily: "hafs",
                    textAlign: "justify",
                }}
            >
                {props.surahData.bismillah_as_first_ayah
                    ? props.surahData.ayahs
                          .slice(1)
                          .map((ayah) => <Ayah ayah={ayah} />)
                    : props.surahData.ayahs.map((ayah) => <Ayah ayah={ayah} />)}
            </span>
        </Container>
    );
}

const toArabic = (input: any) => input.toLocaleString("ar-EG");
function Ayah(props: { ayah: Verse }) {
    return (
        <span>
            {props.ayah.content.text}
            <span> ﴿{toArabic(props.ayah.number)}﴾ </span>
        </span>
    );
}
