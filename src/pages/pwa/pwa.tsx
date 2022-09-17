import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Stack } from "ui";
import { Header } from "components";

const pwaIntroPagePassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
    return (
        <div>
            <Header title="Pwa Intro Page" button={"menu"}>
                <Link to="/quran">
                    <button onClick={pwaIntroPagePassed}>Go to Quran</button>
                </Link>
                <Link to="/">
                    <button>Go to Intro</button>
                </Link>
            </Header>
            <Container maxWidth={"60rem"} style={{ padding: "5rem" }}>
                <h1>Container</h1>
            </Container>
            <Container maxWidth={"70rem"}>
                <Grid>
                    <Grid>Grid A</Grid>
                    <Grid>Grid B</Grid>
                </Grid>
            </Container>
            <Container maxWidth={"80rem"}>
                <Stack>
                    <div>Stack 1</div>
                    <div>Stack 2</div>
                    <div>Stack 3</div>
                </Stack>
            </Container>
        </div>
    );
}

export default Pwa;
