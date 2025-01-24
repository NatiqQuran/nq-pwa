import { Button } from "@yakad/ui";
import Symbol from "@yakad/symbols";

const JumpToSearchFieldButton = () => (
    <Button
        variant="filledtonal"
        onClick={() => {
            const searchField = document.getElementById("searchField");
            searchField?.focus();
            searchField?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }}
        icon={<Symbol icon="search" />}
    >
        Search
    </Button>
);

export default JumpToSearchFieldButton;
