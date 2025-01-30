import { useNavigate } from "react-router-dom";
import { SurahListResponseData } from "@ntq/sdk";
import { Button } from "@yakad/ui";

interface RandomSurahButtonProps {
    surahList: SurahListResponseData;
    surahNumber: number;
}

const GoToSurahButton = (props: RandomSurahButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quran/" + props.surahList[props.surahNumber - 1].uuid);
    };

    return (
        <Button variant="outlined" onClick={handleClick}>
            {props.surahList[props.surahNumber - 1].names[0].arabic}
        </Button>
    );
};

export default GoToSurahButton;
