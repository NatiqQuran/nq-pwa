import { Spacer, Container, Stack, Row, SvgIcon } from "@yakad/ui";
import { Surah } from "./index";
import { ReactComponent as Madineh } from "../../assets/svg/madineh - filled.svg";
import { ReactComponent as Makkah } from "../../assets/svg/makkah - filled.svg";

const toArabic = (input: any) => input.toLocaleString("ar-EG");

const SurahPeriodIcon = (props: { period: "makki" | "madani" | null }) =>
    props.period ? (
        <SvgIcon>{props.period === "makki" ? <Makkah /> : <Madineh />}</SvgIcon>
    ) : null;

export default function SurahHeader(props: { surahData: Surah }) {
    return (
        <Container
            align="center"
            maxWidth="sm"
            style={{
                padding: "2rem",
            }}
        >
            <Stack style={{ width: "100%" }}>
                <Row>
                    <span
                        style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "2rem",
                        }}
                    >
                        {"Surah: " + props.surahData.surah_number}
                    </span>
                    <Spacer />
                    <h3
                        style={{
                            fontFamily: "hafs",
                            fontSize: "3rem",
                        }}
                    >
                        {props.surahData.surah_name}
                    </h3>
                    <SurahPeriodIcon period={props.surahData.surah_period} />
                </Row>
                <h3
                    style={{
                        fontFamily: "hafs",
                        textAlign: "center",
                        direction: "rtl",
                        fontSize: "4rem",
                        margin: "0",
                    }}
                >
                    {props.surahData.bismillah_as_first_ayah
                        ? `${props.surahData.ayahs[0].content.text} ﴿${toArabic(
                              props.surahData.ayahs[0].number
                          )}﴾`
                        : props.surahData.bismillah_status
                        ? `${props.surahData.bismillah_text}`
                        : ""}
                </h3>
            </Stack>
        </Container>
    );
}
