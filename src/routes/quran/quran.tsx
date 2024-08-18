import react from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "@yakad/lib";
import { Loading } from "@yakad/ui";
import { SurahViewProps, TranslationViewProps } from "assets/ts/interface";

import { QuranConfigProps } from ".";
import SurahHeader from "./surahHeader";
import SurahText from "./text";

export default function Quran(props: { config: QuranConfigProps }) {
    const navigate = useNavigate();

    const surahFetch = useFetch<SurahViewProps>(
        process.env.REACT_APP_API_URL + `/surah/${props.config.surahUUID}`,
        {
            method: "GET",
        }
    );
    const translationFetch = useFetch<TranslationViewProps>(
        process.env.REACT_APP_API_URL +
            `/translation/${
                props.config.translationUUID
                    ? props.config.translationUUID
                    : "5f859558-fdb2-49db-afa4-6a0286932121"
            }?surah_uuid=${props.config.surahUUID}`,
        {
            method: "GET",
        }
    );

    react.useEffect(() => {
        translationFetch.send();
    }, [props.config.translationUUID]);

    react.useEffect(() => {
        navigate("/quran/" + props.config.surahUUID);
        surahFetch.send();
        translationFetch.send();
    }, [props.config.surahUUID]);

    return (
        <>
            {surahFetch.isResponseBodyReady &&
            translationFetch.isResponseBodyReady &&
            !surahFetch.error &&
            !translationFetch.error ? (
                <>
                    <SurahHeader
                        config={props.config}
                        surahData={surahFetch.responseBody}
                        bismillahTranslation={
                            translationFetch.responseBody.bismillah_text
                        }
                    />
                    <SurahText
                        config={props.config}
                        surahData={surahFetch.responseBody}
                        translationData={translationFetch.responseBody}
                    />
                </>
            ) : (
                <Loading size="extraLarge" variant="scaleOut" />
            )}
        </>
    );
}
