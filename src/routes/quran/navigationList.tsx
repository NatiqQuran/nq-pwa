import React from "react";
import { List, ListItem, Button, Spacer, Row } from "@yakad/ui";

interface CollapseList {
    [n: number]: boolean;
}

export default function NavigationList() {
    const [collapsedList, setcollapsedList] = React.useState<CollapseList>({});

    const handleClickcollapseList = (index: number) =>
        setcollapsedList((object) => ({
            ...object,
            [index]: object[index] ? !object[index] : true,
        }));

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
                    collapsed={!collapsedList[0]}
                    direction="column"
                    style={{ paddingInlineStart: "2rem" }}
                >
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span>Surah:</span>
                            <Spacer />
                            <select>
                                <option value="1">1 - الفاتحه</option>
                                <option value="2">2 - </option>
                                <option value="3">3 - </option>
                                <option value="4">4 - </option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row style={{ height: "3.2rem" }}>
                            <span>Verse:</span>
                            <Spacer />
                            <select name="verse">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                            </select>
                        </Row>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickcollapseList(1)}
                >
                    Rsitation
                </Button>
                <List
                    collapsed={!collapsedList[1]}
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

            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={() => handleClickcollapseList(2)}
                >
                    Arabic Text
                </Button>
                <List
                    collapsed={!collapsedList[2]}
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
                    collapsed={!collapsedList[3]}
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
                            <span>Play:</span>
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
