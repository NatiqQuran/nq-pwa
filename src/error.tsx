import { Link, useParams } from "react-router-dom";
import { Button, Container, Main, Page, SvgIcon } from "@yakad/ui";
import { ReactComponent as LogoIcon } from "./assets/svg/logoicon.svg";

export default function Error(props: { status?: number }) {
    const params = useParams();

    return (
        <Page>
            <Main>
                <Container
                    align="center"
                    size="sm"
                    style={{ marginTop: "5rem", gap: "2rem" }}
                >
                    <SvgIcon size={14}>
                        <LogoIcon />
                    </SvgIcon>
                    <h1>Error Accord: {params.status || props.status}</h1>
                    <Link to="/">
                        <Button variant="outlined">Back to home</Button>
                    </Link>
                </Container>
            </Main>
        </Page>
    );
}
