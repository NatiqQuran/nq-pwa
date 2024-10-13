import React, { useContext, useEffect, useState } from "react";
import {
    SurahListResponseData,
    TranslationListResponseData,
    ControllerSurah,
    ControllerTranslation,
    getLangNameFromCode,
} from "@ntq/sdk";
import {
    List,
    ListItem,
    Button,
    Spacer,
    Row,
    Loading,
    Select,
} from "@yakad/ui";

import { QuranConfigProps } from ".";
import { selectDefaultTranslationUUIDFromList } from "./config";
import { ConnectionContext } from "contexts";

interface CollapseList {
    [n: number]: boolean;
}

export default function NavigationList(props: {
    config: QuranConfigProps;
    setConfig: any;
}) {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickCollapseList = (index: number) =>
        setcollapsedList((object) => ({
            ...object,
            [index]: object[index] ? !object[index] : true,
        }));

    const listObjects = [
        {
            name: "Quran",
            navListItems: (
                <NavListItemsQuran
                    config={props.config}
                    setConfig={props.setConfig}
                />
            ),
        },
        {
            name: "Arabic Text",
            navListItems: (
                <NavListItemsArabicText
                    config={props.config}
                    setConfig={props.setConfig}
                />
            ),
        },
        {
            name: "Translation",
            navListItems: (
                <NavListItemsTranslation
                    config={props.config}
                    setConfig={props.setConfig}
                />
            ),
        },
    ];

    return (
        <List direction="column">
            {listObjects.map((item, index) => (
                <ListItem>
                    <Button
                        size="medium"
                        variant={collapsedList[index] ? "text" : "elevated"}
                        borderStyle="semi"
                        onClick={() => handleClickCollapseList(index)}
                    >
                        {item.name}
                        <Spacer />
                    </Button>
                    <List
                        collapsed={collapsedList[index]}
                        direction="column"
                        style={{ marginInlineStart: "2rem" }}
                    >
                        {item.navListItems}
                        <div style={{ height: "2rem" }} />
                    </List>
                </ListItem>
            ))}
        </List>
    );
}

function NavListItemsQuran(props: {
    config: QuranConfigProps;
    setConfig: any;
}) {
    const [surahList, setSurahList] = useState<SurahListResponseData | null>(
        null
    );
    const conn = useContext(ConnectionContext);

    useEffect(() => {
        new ControllerSurah(conn!)
            .list({ params: { mushaf: "hafs" } })
            .then((response) => {
                setSurahList(response.data);
            });
    }, []); // eslint-disable-line

    return (
        <ListItem>
            {surahList ? (
                <Select
                    variant="filled"
                    name="surahUUID"
                    placeholder="Surah"
                    defaultValue={
                        props.config.surahUUID
                            ? props.config.surahUUID
                            : undefined
                    }
                    onChange={(e) =>
                        props.setConfig({
                            ...props.config,
                            surahUUID: e.target.value,
                        })
                    }
                >
                    {surahList.map((surah) => (
                        <option value={surah.uuid}>
                            {surah.number + " - " + surah.names[0].arabic}
                        </option>
                    ))}
                </Select>
            ) : (
                <Loading variant="dots" />
            )}
        </ListItem>
    );
}

function NavListItemsArabicText(props: {
    config: QuranConfigProps;
    setConfig: any;
}) {
    return (
        <>
            <ListItem>
                <Row style={{ height: "3.2rem" }}>
                    <span>Show:</span>
                    <Spacer />
                    <input type="checkbox" name="showArabic" />
                </Row>
            </ListItem>
            <ListItem>
                <Row style={{ height: "3.2rem" }}>
                    <span>Tajweed:</span>
                    <Spacer />
                    <input type="checkbox" name="showArabic" />
                </Row>
            </ListItem>
            <ListItem>
                <Select variant="filled" placeholder="Font:" disabled>
                    <option value="1">FontName</option>
                </Select>
            </ListItem>
        </>
    );
}

function NavListItemsTranslation(props: {
    config: QuranConfigProps;
    setConfig: any;
}) {
    const [translationList, setTranslationList] =
        useState<TranslationListResponseData | null>(null);

    const conn = useContext(ConnectionContext);

    useEffect(() => {
        new ControllerTranslation(conn!)
            .list({ params: { mushaf: "hafs" } })
            .then((response) => {
                setTranslationList(response.data);
            });
    }, []); // eslint-disable-line

    //Set a Translation as Default if no one selected before
    useEffect(() => {
        if (translationList) {
            if (props.config.translationUUID === undefined)
                props.setConfig({
                    ...props.config,
                    translationUUID:
                        selectDefaultTranslationUUIDFromList(translationList),
                });
        }
    }, [translationList]);

    return (
        <>
            <ListItem>
                <Row style={{ height: "3.2rem" }}>
                    <span>Show:</span>
                    <Spacer />
                    <input
                        type="checkbox"
                        name="translationView"
                        defaultChecked={props.config.translationView}
                        onChange={(e) =>
                            props.setConfig({
                                ...props.config,
                                translationView: e.target.checked,
                            })
                        }
                    />
                </Row>
            </ListItem>
            <ListItem>
                {translationList && props.config.translationUUID ? (
                    <Select
                        variant="filled"
                        placeholder="Translation"
                        defaultValue={
                            props.config.translationUUID
                                ? props.config.translationUUID
                                : undefined
                        }
                        onChange={(e) =>
                            props.setConfig({
                                ...props.config,
                                translationUUID: e.target.value,
                            })
                        }
                    >
                        {translationList.map((translation) => (
                            <option value={translation.uuid}>
                                {getLangNameFromCode(translation.language) +
                                    " - " +
                                    translation.translator.username}
                            </option>
                        ))}
                    </Select>
                ) : (
                    <Loading variant="dots" />
                )}
            </ListItem>
        </>
    );
}
