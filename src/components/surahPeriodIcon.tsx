import { SvgIcon } from "@yakad/ui";
import { ReactComponent as Madineh } from "assets/svg/madineh - filled.svg";
import { ReactComponent as Makkah } from "assets/svg/makkah - filled.svg";

export const SurahPeriodIcon = (props: { period: "makki" | "madani" | null }) =>
    props.period ? (
        props.period === "makki" ? (
            <SvgIcon title="Makki" style={{ cursor: "help" }}>
                <Makkah />
            </SvgIcon>
        ) : (
            <SvgIcon title="Madani" style={{ cursor: "help" }}>
                <Madineh />
            </SvgIcon>
        )
    ) : null;
