import { useNavigate } from "react-router-dom";
import { Button } from "@yakad/ui";

import { QuranConfigProps } from "routes/quran";

export function LastReadingButton() {
    const navigate = useNavigate();

    const configFromLocalStorageString: string | null =
        localStorage.getItem("config");
    const configFromLocalStorage: QuranConfigProps =
        configFromLocalStorageString
            ? JSON.parse(configFromLocalStorageString)
            : false;

    return (
        <Button
            variant="filledtonal"
            disabled={!configFromLocalStorage}
            onClick={() => {
                navigate("/quran/" + configFromLocalStorage.surahUUID);
            }}
        >
            Last reading
        </Button>
    );
}
