import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "@yakad/lib";
import { Button, Loading } from "@yakad/ui";

import NavigationList from "./navigationList";
import Symbol from "@yakad/symbols";
import { Xpanel } from "@yakad/x";

import SurahHeader from "./surahHeader";
import SurahText, { TranslationProps } from "./text";
import { SurahProps } from "./text";

export interface QuranConfigProps {
    translationView: boolean;
}

export default function Quran() {
    const [config, setConfig] = React.useState<QuranConfigProps>({
        translationView: true,
    });
    const setConfigFromChild = (data: QuranConfigProps) => {
        setConfig(data);
    };

    const { id } = useParams();
    const surahFetch = useFetch<SurahProps>(
        process.env.REACT_APP_API_URL + `/surah/${id}?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    const translationFetch = useFetch<TranslationProps>(
        process.env.REACT_APP_API_URL +
            `/translation/b2ac38a8-c123-4f02-a558-508d414a0e54?surah_uuid=${id}`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
        translationFetch.send();
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
                <Loading size="large" />
            )}
        </Xpanel>
    );
}
