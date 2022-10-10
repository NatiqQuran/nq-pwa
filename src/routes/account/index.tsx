import React, { useState } from "react";
import { Page, Main, Header, Button, SvgIcon, Container } from "ui";
import { Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";

function Account() {
    return (
        <Page>
            <Header
                style={{
                    height: "15rem ",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "flex-end",
                    alignItems: "flex-end",
                }}
            >
                <SvgIcon color="onHeader" size={5.5}>
                    <LogoIcon />
                </SvgIcon>
                <h1>Natigh</h1>
            </Header>
            <Main>
                <Container
                    maxWidth="xs"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
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
