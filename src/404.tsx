import { Link } from "react-router-dom";
import { Button, Container, Main, Page, SvgIcon } from "@yakad/ui";
import { ReactComponent as LogoIcon } from "./assets/svg/logoicon.svg";

export default function NotFound() {
    return (
        <Page>
            <Main>
                <Container
                    align="center"
                    maxWidth="sm"
                    style={{ marginTop: "5rem", gap: "2rem" }}
                >
                    <SvgIcon size={14}>
                        <LogoIcon />
                    </SvgIcon>
                    <h1>404 Not Found</h1>
                    <Link to="/">
                        <Button variant="outlined">Back to home</Button>
                    </Link>
                </Container>
            </Main>
        </Page>
    );
}
