import { Spacer, Container, Row } from "@yakad/ui";
import { QuranConfigProps } from ".";
import SurahPeriodIcon from "components/surahPeriodIcon";
import { SurahViewResponseData } from "@ntq/sdk";

const toArabic = (input: any) => input.toLocaleString("ar-EG");

const SurahHeader = (props: {
    config: QuranConfigProps;
    surahData: SurahViewResponseData;
    bismillahTranslation: string;
}) => (
    <Container
        align="center"
        size="sm"
        style={{
            padding: "2rem",
            marginBottom: "2rem",
        }}
    >
        <Row>
            <span
                style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "2rem",
                }}
            >
                {"Surah: " + props.surahData.number}
            </span>
            <Spacer />
            <h3
                style={{
                    fontFamily: "hafs",
                    fontSize: "3rem",
                }}
            >
                {props.surahData.names[0].arabic}
            </h3>
            <SurahPeriodIcon period={props.surahData.period} />
        </Row>
        {props.surahData.bismillah_as_first_ayah ? (
            <>
                <h3
                    style={{
                        fontFamily: "hafs",
                        textAlign: "center",
                        direction: "rtl",
                        fontSize: "4rem",
                        lineHeight: "4rem",
                        margin: "0",
                    }}
                >
                    {props.surahData.ayahs[0].text}
                    {" ﴿"}
                    {toArabic(props.surahData.ayahs[0].number)}
                    {"﴾"}
                </h3>
                {props.config.translationView ? (
                    <h4
                        style={{
                            direction: "ltr",
                            fontFamily: "sans-serif",
                            opacity: "0.8",
                        }}
                    >
                        {props.bismillahTranslation}
                        {" (" + props.surahData.ayahs[0].number + ")"}
                    </h4>
                ) : null}
            </>
        ) : props.surahData.bismillah_status ? (
            <>
                <h3
                    style={{
                        fontFamily: "hafs",
                        textAlign: "center",
                        direction: "rtl",
                        fontSize: "4rem",
                        lineHeight: "4rem",
                        margin: "0",
                    }}
                >
                    {props.surahData.bismillah_text}
                </h3>
                {props.config.translationView ? (
                    <h4
                        style={{
                            direction: "ltr",
                            fontFamily: "sans-serif",
                            opacity: "0.8",
                        }}
                    >
                        {props.bismillahTranslation}
                    </h4>
                ) : null}
            </>
        ) : null}
    </Container>
);

export default SurahHeader;
