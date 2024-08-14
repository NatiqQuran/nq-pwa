import React from "react";
import { Container, Stack } from "@yakad/ui";
import { QuranConfigProps } from ".";

interface Verse {
    number: number;
    uuid: string;
    sajdeh: null | "vajib" | "mustahab";
    text: string;
}
export interface SurahProps {
    surah_uuid: string;
    surah_name: string;
    surah_period: "makki" | "madani" | null;
    surah_number: number;

    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;

    ayahs: Verse[];
}

interface TranslationTextProps {
    number: number;
    surah_number: number;
    text: string;
    text_uuid: string;
    uuid: string;
}
export interface TranslationProps {
    language: string;
    mushaf_uuid: string;
    release_date: string | null;
    source: string;
    status: string;
    translator_account_uuid: string;
    ayahs: TranslationTextProps[];
}

const toArabic = (string: any) => string.toLocaleString("ar-EG");

export default function SurahText(props: {
    config: QuranConfigProps;
    surahData: SurahProps;
    translationData: TranslationProps;
}) {
    return (
        <Container
            maxWidth="md"
            dir="rtl"
            style={{
                textAlign: "justify",
            }}
        >
            <div style={{ width: "100%" }}>
                {props.surahData.ayahs
                    .slice(props.surahData.bismillah_as_first_ayah ? 1 : 0)
                    .map((ayah) =>
                        props.config.translationView ? (
                            <AyahBox>
                                <AyahText ayah={ayah} />
                                <AyahTranslation
                                    translationText={
                                        props.translationData.ayahs[
                                            ayah.number - 1
                                        ]
                                    }
                                />
                            </AyahBox>
                        ) : (
                            <AyahText ayah={ayah} />
                        )
                    )}
            </div>
        </Container>
    );
}

function AyahBox(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Stack
            style={{
                width: "100%",
                padding: "1rem",
                borderInlineEnd: "0.3rem solid #7d7d7d40",
                marginBottom: "5rem",
            }}
        >
            {props.children}
        </Stack>
    );
}

function AyahText(props: { ayah: Verse }) {
    return (
        <span
            style={{
                fontFamily: "hafs",
                fontSize: "3.5rem",
                lineHeight: "7rem",
            }}
        >
            {props.ayah.text}
            {props.ayah.sajdeh === "vajib" ? (
                <span
                    title="Vajib Sajdah"
                    style={{ cursor: "help", fontWeight: "bold" }}
                >
                    ۩
                </span>
            ) : null}
            {props.ayah.sajdeh === "mustahab" ? (
                <span title="Mustahab Sajdah" style={{ cursor: "help" }}>
                    ۩
                </span>
            ) : null}
            <span> ﴿{toArabic(props.ayah.number)}﴾ </span>
        </span>
    );
}

function AyahTranslation(props: { translationText: TranslationTextProps }) {
    return (
        <span
            style={{
                direction: "ltr",
                fontFamily: "sans-serif",
                fontSize: "1.8rem",
                lineHeight: "3rem",
                textAlign: "justify",
                textAlignLast: "right",
                opacity: "0.8",
            }}
        >
            <span>{props.translationText.text}</span>
            <span> ({props.translationText.number})</span>
        </span>
    );
}
