import React, { useEffect } from "react";
import { useFetch } from "@yakad/lib";
import {
    List,
    ListItem,
    Button,
    Spacer,
    Row,
    Loading,
    Select,
    Stack,
} from "@yakad/ui";

import { getLangNameFromCode } from "../../assets/ts/langCode";
import { SurahInListProps, TranslationInListProps } from "assets/ts/interface";
import { QuranConfigProps } from ".";
import { selectDefaultTranslationUUIDFromList } from "./config";

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
    const surahListFetch = useFetch<SurahInListProps[]>(
        `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahListFetch.send();
    }, []);

    return (
        <ListItem>
            {surahListFetch.isResponseBodyReady ? (
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
                    {surahListFetch.responseBody.map((surah) => (
                        <option value={surah.uuid}>
                            {surah.number + " - " + surah.name[0].arabic}
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
    const translationListFetch = useFetch<TranslationInListProps[]>(
        process.env.REACT_APP_API_URL + `/translation?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        translationListFetch.send();
    }, []);

    //Set a Translation as Default if no one selected before
    useEffect(() => {
        if (translationListFetch.isResponseBodyReady) {
            if (props.config.translationUUID === undefined)
                props.setConfig({
                    ...props.config,
                    translationUUID: selectDefaultTranslationUUIDFromList(
                        translationListFetch.responseBody
                    ),
                });
        }
    }, [translationListFetch.isResponseBodyReady]);

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
                {translationListFetch.isResponseBodyReady &&
                props.config.translationUUID ? (
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
                        {translationListFetch.responseBody.map(
                            (translation) => (
                                <option value={translation.uuid}>
                                    {getLangNameFromCode(translation.language) +
                                        " - " +
                                        translation.translator.username}
                                </option>
                            )
                        )}
                    </Select>
                ) : (
                    <Loading variant="dots" />
                )}
            </ListItem>
        </>
    );
}
