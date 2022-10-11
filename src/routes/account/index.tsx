import React, { useState } from "react";
import { Page, Main, Header, SvgIcon, Container, Stack, Hr, Row } from "ui";
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
            <Main gap={1.5} className={styles.main}>
                <Row
                    style={{
                        justifyContent: "center",
                    }}
                >
                    <SvgIcon size={6}>
                        <LogoIcon />
                    </SvgIcon>
                    <h1 style={{ margin: "1rem" }}>Natigh</h1>
                </Row>
                <Hr />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={`/account/login`} replace />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/verify" element={<Verify />} />
                </Routes>
            </Main>
        </Page>
    );
}

export default Account;
