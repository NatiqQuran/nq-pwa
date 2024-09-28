import React from "react";
import { SurahViewProps, TranslationViewProps } from "@ntq/sdk/types";
import { Container, Stack } from "@yakad/ui";

import { QuranConfigProps } from ".";

const toArabic = (string: any) => string.toLocaleString("ar-EG");

export default function SurahText(props: {
    config: QuranConfigProps;
    surahData: SurahViewProps;
    translationData: TranslationViewProps;
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

function AyahText(props: { ayah: SurahViewProps["ayahs"][0] }) {
    return (
        <span
            style={{
                fontFamily: "hafs",
                fontSize: "3.5rem",
                lineHeight: "7rem",
            }}
        >
            {props.ayah.text}
            {props.ayah.sajdah === "vajib" ? (
                <span
                    title="Vajib Sajdah"
                    style={{ cursor: "help", fontWeight: "bold" }}
                >
                    ۩
                </span>
            ) : null}
            {props.ayah.sajdah === "mustahab" ? (
                <span title="Mustahab Sajdah" style={{ cursor: "help" }}>
                    ۩
                </span>
            ) : null}
            <span> ﴿{toArabic(props.ayah.number)}﴾ </span>
        </span>
    );
}

function AyahTranslation(props: {
    translationText: TranslationViewProps["ayahs"][0];
}) {
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
