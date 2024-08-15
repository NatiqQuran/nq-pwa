import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFetch } from "@yakad/lib";
import { Button, Loading } from "@yakad/ui";

import NavigationList from "./navigationList";
import Symbol from "@yakad/symbols";
import { Xpanel } from "@yakad/x";

import SurahHeader from "./surahHeader";
import SurahText, { TranslationProps } from "./text";
import { SurahProps } from "./text";

export interface QuranConfigProps {
    surahUUID: string;
    translationView: boolean;
    translatorUUID: string | undefined;
}

export default function Quran() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [config, setConfig] = React.useState<QuranConfigProps>({
        surahUUID: id as string,
        translationView: true,
        translatorUUID: undefined,
    });
    const setConfigFromChild = (data: QuranConfigProps) => {
        setConfig(data);
    };

    const surahFetch = useFetch<SurahProps>(
        process.env.REACT_APP_API_URL +
            `/surah/${config.surahUUID}?mushaf=hafs`,
        {
            method: "GET",
        }
    );
    const translationFetch = useFetch<TranslationProps>(
        process.env.REACT_APP_API_URL +
            `/translation/${
                config.translatorUUID
                    ? config.translatorUUID
                    : "b2ac38a8-c123-4f02-a558-508d414a0e54"
            }?surah_uuid=${id}`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
        translationFetch.send();
    }, [config.translatorUUID]);

    useEffect(() => {
        navigate("/quran/" + config.surahUUID);
        surahFetch.send();
        translationFetch.send();
    }, [config.surahUUID]);

    const appbarName = surahFetch.isResponseBodyReady
        ? "Quran " + surahFetch.responseBody.surah_number + ":"
        : "Quran";

    return (
        <Xpanel
            name={appbarName}
            navigationChildren={
                <NavigationList
                    config={config}
                    setConfig={setConfigFromChild}
                />
            }
            appbarChildren={
                <Link to="/search">
                    <Button icon={<Symbol icon="search" />} />
                </Link>
            }
        >
            {surahFetch.isResponseBodyReady &&
            translationFetch.isResponseBodyReady ? (
                <>
                    <SurahHeader
                        config={config}
                        surahData={surahFetch.responseBody}
                        bismilaaaahTranslation="tewst"
                    />
                    <SurahText
                        config={config}
                        surahData={surahFetch.responseBody}
                        translationData={translationFetch.responseBody}
                    />
                </>
            ) : (
                <Loading size="large" variant="scaleOut" />
            )}
        </Xpanel>
    );
}
