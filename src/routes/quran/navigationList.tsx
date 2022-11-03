import React from "react";
import { List, ListItem, Button, Spacer, Row } from "@yakad/ui";

function NavigationList() {
    const [collapsedListRsitation, setcollapsedListRsitation] = React.useState(
        true
    );
    const [
        collapsedListArabicText,
        setcollapsedListArabicText,
    ] = React.useState(true);
    const [collapsedListByWord, setcollapsedListByWord] = React.useState(true);
    const [
        collapsedListTraslation,
        setcollapsedListTraslation,
    ] = React.useState(true);
    const [collapsedListTafsir, setcollapsedListTafsir] = React.useState(true);
    const [collapsedListQuran, setcollapsedListQuran] = React.useState(true);

    const handleClickQuran = () => {
        setcollapsedListQuran(!collapsedListQuran);
    };
    const handleClickRsitation = () => {
        setcollapsedListRsitation(!collapsedListRsitation);
    };
    const handleClickArabicText = () => {
        setcollapsedListArabicText(!collapsedListArabicText);
    };
    const handleClickByWord = () => {
        setcollapsedListByWord(!collapsedListByWord);
    };
    const handleClickTraslation = () => {
        setcollapsedListTraslation(!collapsedListTraslation);
    };
    const handleClickTafsir = () => {
        setcollapsedListTafsir(!collapsedListTafsir);
    };

    return (
        <List direction="column">
            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={handleClickQuran}
                >
                    Quran
                    <Spacer />
                </Button>
                <List
                    collapsed={collapsedListQuran}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Surah:
                            <Spacer />
                            <select>
                                <option value="1">1 - </option>
                                <option value="2">2 - </option>
                                <option value="3">3 - </option>
                                <option value="4">4 - </option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Verse:
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
                    <ListItem>
                        <Row>
                            Juz:
                            <Spacer />
                            <select name="">
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
                    <ListItem>
                        <Row>
                            {" "}
                            Page:
                            <Spacer />
                            <select name="">
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
                    onClick={handleClickRsitation}
                >
                    Rsitation
                </Button>
                <List
                    collapsed={collapsedListRsitation}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Gari:
                            <Spacer />
                            <select>
                                <option value="1">Al-Afasy</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Play:
                            <Spacer />
                            <select>
                                <option value="1">Countinues</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Delay:
                            <Spacer />
                            <select>
                                <option value="1">1 sec</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Repeat:
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
                    onClick={handleClickArabicText}
                >
                    Arabic Text
                </Button>
                <List
                    collapsed={collapsedListArabicText}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Show:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Tajweed:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Font:
                            <Spacer />
                            <select name="">
                                <option value="">Hafs</option>
                            </select>
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Test:
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
                    onClick={handleClickByWord}
                >
                    By Word
                </Button>
                <List
                    collapsed={collapsedListByWord}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Show:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Language:
                            <Spacer />
                            <select name="">
                                <option value="">Arabic</option>
                                <option value="">English</option>
                                <option value="">Persian</option>
                                <option value="">Turkish</option>
                            </select>
                        </Row>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={handleClickTraslation}
                >
                    Translation
                </Button>
                <List
                    collapsed={collapsedListTraslation}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Show:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                    <ListItem>
                        <Row>
                            Play:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem>
                <Button
                    size="medium"
                    borderStyle="semi"
                    onClick={handleClickTafsir}
                >
                    Tafsir
                </Button>
                <List
                    collapsed={collapsedListTafsir}
                    direction="column"
                    style={{ padding: "0 2rem" }}
                >
                    <ListItem>
                        <Row>
                            Show:
                            <Spacer />
                            <input type="checkbox" name="showArabic" />
                        </Row>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}

export default NavigationList;
