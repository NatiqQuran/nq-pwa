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

export default function NavigationList(props: {
    config: QuranConfigProps;
    setConfig: any;
}) {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickcollapseList = (index: number) =>
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

    return (
        <List direction="column">
            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickcollapseList(0)}
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
                                        {surah.number + " - " + surah.name}
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
                    onClick={() => handleClickcollapseList(1)}
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
                    onClick={() => handleClickcollapseList(2)}
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
                    onClick={() => handleClickcollapseList(3)}
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
                            {translationListFetch.isResponseBodyReady ? (
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
