import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SurahViewResponseData, TranslationViewResponseData } from "@ntq/sdk";
import { Loading } from "@yakad/ui";

import { controllerSurah, controllerTranslation } from "connection";
import { QuranConfigProps } from ".";
import SurahHeader from "./surahHeader";
import SurahText from "./text";

const QuranView = (props: { config: QuranConfigProps }) => {
    const navigate = useNavigate();

    const [surah, setSurah] = useState<SurahViewResponseData | null>(null);
    const [translation, setTranslation] =
        useState<TranslationViewResponseData | null>(null);

    useEffect(() => {
        navigate("/quran/" + props.config.surahUUID);
        setSurah(null);
        setTranslation(null);
        controllerSurah
            .view(props.config.surahUUID, {})
            .then((response) => {
                setSurah(response.data);
            })
            .catch((error) => {
                if (error.status === 404) localStorage.clear();
                navigate("/error/" + error.status);
            });
    }, [props.config.surahUUID]); //eslint-disable-line

    useEffect(() => {
        if (props.config.translationUUID)
            controllerTranslation
                .view(props.config.translationUUID, {
                    params: {
                        surah_uuid: props.config.surahUUID,
                    },
                })
                .then((response) => {
                    setTranslation(response.data);
                })
                .catch((error) => {
                    if (error.status === 404) localStorage.clear();
                    navigate("/error/" + error.status);
                });
    }, [props.config.surahUUID, props.config.translationUUID]); //eslint-disable-line

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
};

export default QuranView;
