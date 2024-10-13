import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    SurahViewResponseData,
    TranslationViewResponseData,
    ControllerSurah,
    ControllerTranslation,
} from "@ntq/sdk";
import { Loading } from "@yakad/ui";

import { QuranConfigProps } from ".";
import SurahHeader from "./surahHeader";
import SurahText from "./text";
import { ConnectionContext } from "contexts";

export default function Quran(props: { config: QuranConfigProps }) {
    const navigate = useNavigate();

    const [surah, setSurah] = useState<SurahViewResponseData | null>(null);
    const [translation, setTranslation] =
        useState<TranslationViewResponseData | null>(null);

    const conn = useContext(ConnectionContext);

    useEffect(() => {
        if (props.config.translationUUID)
            new ControllerTranslation(conn!)
                .view(props.config.translationUUID, {
                    params: {
                        surah_uuid: props.config.surahUUID,
                    },
                })
                .then((response) => {
                    setTranslation(response.data);
                });
    }, [props.config.surahUUID, props.config.translationUUID]);

    useEffect(() => {
        navigate("/quran/" + props.config.surahUUID);
        setSurah(null);
        setTranslation(null);
        new ControllerSurah(conn!)
            .view(props.config.surahUUID, {})
            .then((response) => {
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
                        bismillahTranslation={translation.bismillah}
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
