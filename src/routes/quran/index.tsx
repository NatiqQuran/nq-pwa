import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@yakad/ui";
import { Xpanel } from "@yakad/x";
import Symbol from "@yakad/symbols";

import NavigationList from "./navigationList";
import Quran from "./quran";

export interface QuranConfigProps {
    surahUUID: string;
    translationView: boolean;
    translationUUID: string | undefined;
}

export default function QuranPage() {
    const { id } = useParams();

    const configFromLocalStorageString: string | null =
        localStorage.getItem("config");
    const configFromLocalStorage: QuranConfigProps =
        configFromLocalStorageString
            ? JSON.parse(configFromLocalStorageString)
            : false;

    const [config, setConfig] = React.useState<QuranConfigProps>(
        configFromLocalStorage
            ? {
                  surahUUID: id as string,
                  translationView: configFromLocalStorage.translationView,
                  translationUUID: configFromLocalStorage.translationUUID,
              }
            : {
                  surahUUID: id as string,
                  translationView: true,
                  translationUUID: "c3d978e7-91b9-4c08-acd0-fae592c8475b",
              }
    );
    const setConfigFromChild = (data: QuranConfigProps) => {
        setConfig(data);
    };
    useEffect(() => {
        localStorage.setItem("config", JSON.stringify(config));
    }, [config]);

    return (
        <Xpanel
            name="Quran"
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
            <Quran config={config} />
        </Xpanel>
    );
}
