import React from "react";
import { Page, Main, Header, SvgIcon, Hr, Stack, Container } from "ui";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import styles from "./accound.module.css";

function Account() {
    return (
        <Page
            className={styles.page}
            style={{
                position: "fixed",
                alignItems: "center",
                minHeight: "100%",
            }}
        >
            <Header className={styles.header}></Header>
            <Main className={styles.main}>
                <Container
                    maxWidth="xs"
                    className={styles.gapOnSmallScreen}
                    style={{ padding: "2rem" }}
                >
                    <Stack
                        className={styles.logoholder}
                        style={{
                            justifyContent: "center",
                            gap: "0",
                        }}
                    >
                        <SvgIcon size={6}>
                            <LogoIcon />
                        </SvgIcon>
                        <h1>Natigh</h1>
                    </Stack>
                    <Hr />
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to={`/account/login`} replace />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/verify" element={<Verify />} />
                    </Routes>
                </Container>
            </Main>
        </Page>
    );
}

export default Account;
