import React from "react";
import {
    Container,
    GridContainer,
    GridItem,
    SvgIcon,
} from "@yakad/ui";
import styles from "./Xintro.module.css";

interface XintroProps extends React.HTMLAttributes<HTMLElement> {
    logo?: any;
    //what type we should choose for logo?
}

function Xintro(props: XintroProps) {
    return (
        <Container maxWidth="lg" {...props} className={styles.introArea} style={{ padding: "3rem 0" }}>
            {/* remove class and choose background */}
            <GridContainer style={{ rowGap: "8rem" }}>
                <GridItem md={12} xl={5}>
                    <SvgIcon style={{ maxWidth: "40rem", margin: "auto" }}>
                        {props.logo ? props.logo : null}
                    </SvgIcon>
                </GridItem>
                <GridItem
                    md={12}
                    xl={7}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 2rem",
                    }}
                >
                    {props.children}
                </GridItem>
            </GridContainer>
        </Container>
    );
}

export default Xintro;
