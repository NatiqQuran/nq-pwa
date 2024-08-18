import React from "react";
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

    const [config, setConfig] = React.useState<QuranConfigProps>({
        surahUUID: id as string,
        translationView: true,
        translationUUID: undefined,
    });
    const setConfigFromChild = (data: QuranConfigProps) => {
        setConfig(data);
    };

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
