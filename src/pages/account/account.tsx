import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";

interface AccountVerify {
    email?: string;
    code?: number;
}

function Account() {
    const [data, setData] = useState<AccountVerify>({});
    return (
        <Routes>
            <Route
                path="/login"
                element={<Login data={data} setData={setData} />}
            />
            <Route
                path="/verify"
                element={<Verify data={data} setData={setData} />}
            />
        </Routes>
    );
}

export default Account;
