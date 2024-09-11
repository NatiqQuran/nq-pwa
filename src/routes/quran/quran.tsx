import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSurah, getTranslation } from "@ntq/sdk";
import { SurahViewProps, TranslationViewProps } from "@ntq/sdk/types";
import { Loading } from "@yakad/ui";

import { QuranConfigProps } from ".";
import SurahHeader from "./surahHeader";
import SurahText from "./text";

export default function Quran(props: { config: QuranConfigProps }) {
    const navigate = useNavigate();

    const [surah, setSurah] = useState<SurahViewProps | null>(null);
    const [translation, setTranslation] = useState<TranslationViewProps | null>(
        null
    );

    useEffect(() => {
        if (props.config.translationUUID)
            getTranslation(props.config.translationUUID, {
                surah_uuid: props.config.surahUUID,
            }).then((response) => {
                setTranslation(response.data);
            });
    }, [props.config.surahUUID, props.config.translationUUID]);

    useEffect(() => {
        navigate("/quran/" + props.config.surahUUID);
        setSurah(null);
        getSurah(props.config.surahUUID).then((response) => {
            setSurah(response.data);
        });
    }, [props.config.surahUUID]);

    return (
        <>
            {surah && translation ? (
                <>
                    <SurahHeader
                        config={props.config}
                        surahData={surah}
                        bismillahTranslation={translation.bismillah_text}
                    />
                    <SurahText
                        config={props.config}
                        surahData={surah}
                        translationData={translation}
                    />
                </>
            ) : (
                <Loading size="large" variant="dots" />
            )}
        </>
    );
}
