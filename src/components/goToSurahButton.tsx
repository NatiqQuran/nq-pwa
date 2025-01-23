import { useNavigate } from "react-router-dom";
import { SurahListResponseData } from "@ntq/sdk";
import { Button } from "@yakad/ui";

interface RandomSurahButtonProps {
    surahList: SurahListResponseData;
    surahNumber: number;
}

export function GoToSurahButton(props: RandomSurahButtonProps) {
    const navigate = useNavigate();

    return (
        <Button
            variant="outlined"
            onClick={() => {
                navigate(
                    "/quran/" + props.surahList[props.surahNumber - 1].uuid
                );
            }}
        >
            {props.surahList[props.surahNumber - 1].names[0].arabic}
        </Button>
    );
}
