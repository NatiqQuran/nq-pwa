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

import { QuranConfigProps } from ".";
import { getLangNameFromCode } from "../../assets/ts/langCode";
import { SurahInListProps, TranslationInListProps } from "assets/ts/interface";

interface CollapseList {
    [n: number]: boolean;
}

function selectDefaultTranslationUUIDFromList(
    translationList: TranslationInListProps[]
): string {
    const language = "en";
    const defaultTranslation = translationList.find(
        (translation) => translation.language === language
    );
    return defaultTranslation ? defaultTranslation.uuid : "No Translation Find";
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

    const surahListFetch = useFetch<SurahInListProps[]>(
        `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
        {
            method: "GET",
        }
    );
    const translationListFetch = useFetch<TranslationInListProps[]>(
        process.env.REACT_APP_API_URL + `/translation?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahListFetch.send();
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
        <List direction="column">
            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickCollapseList(0)}
                >
                    Quran
                    <Spacer />
                </Button>
                <List
                    collapsed={collapsedList[0]}
                    direction="column"
                    style={{ paddingInlineStart: "2rem" }}
                >
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
                                        {surah.number +
                                            " - " +
                                            surah.name[0].arabic}
                                    </option>
                                ))}
                            </Select>
                        ) : (
                            <Loading variant="dots" />
                        )}
                    </ListItem>
                </List>
            </ListItem>

            <ListItem style={{ display: "none" }}>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickCollapseList(1)}
                >
                    Rsitation
                </Button>
                <List
                    collapsed={collapsedList[1]}
                    direction="column"
                    style={{ paddingInlineStart: "2rem" }}
                >
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span> Gari:</span>
                            <Spacer />
                            <select>
                                <option value="1">Al-Afasy</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span>Play:</span>
                            <Spacer />
                            <select>
                                <option value="1">Countinues</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span>Delay:</span>
                            <Spacer />
                            <select>
                                <option value="1">1 sec</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span>Repeat:</span>
                            <Spacer />
                            <select>
                                <option value="1">1 time</option>
                            </select>
                        </Row>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem style={{ display: "none" }}>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickCollapseList(2)}
                >
                    Arabic Text
                </Button>
                <List
                    collapsed={collapsedList[2]}
                    direction="column"
                    style={{ paddingInlineStart: "2rem" }}
                >
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
                        <Row style={{ height: "3.2rem" }}>
                            <span>Font:</span>
                            <Spacer />
                            <select name="">
                                <option value="">Hafs</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span> Test:</span>
                            <Spacer />
                            <select name="">
                                <option value="">Uthmani</option>
                            </select>
                        </Row>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickCollapseList(3)}
                >
                    Translation
                </Button>
                <List
                    collapsed={collapsedList[3]}
                    direction="column"
                    style={{ paddingInlineStart: "2rem" }}
                >
                    <ListItem>
                        <Stack>
                            <Row style={{ height: "3.2rem" }}>
                                <span>Show:</span>
                                <Spacer />
                                <input
                                    type="checkbox"
                                    name="translationView"
                                    defaultChecked={
                                        props.config.translationView
                                    }
                                    onChange={(e) =>
                                        props.setConfig({
                                            ...props.config,
                                            translationView: e.target.checked,
                                        })
                                    }
                                />
                            </Row>
                            {translationListFetch.isResponseBodyReady &&
                            props.config.translationUUID ? (
                                <Select
                                    variant="filled"
                                    placeholder="Translator"
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
                                                {getLangNameFromCode(
                                                    translation.language
                                                ) +
                                                    " - " +
                                                    translation.translator
                                                        .username}
                                            </option>
                                        )
                                    )}
                                </Select>
                            ) : (
                                <Loading variant="dots" />
                            )}
                        </Stack>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
