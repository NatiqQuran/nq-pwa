import { Page, Main, AppBar, SvgIcon, Hr, Stack, Card } from "@yakad/ui";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import styles from "./account.module.css";

function Account() {
  return (
    <Page className={styles.page}>
      <AppBar className={styles.header}></AppBar>
      <Main className={styles.main}>
        <Card className={styles.card}>
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
        </Card>
      </Main>
    </Page>
  );
}

export default Account;
