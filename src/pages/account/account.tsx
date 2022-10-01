import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";

interface SendCodeData {
    email?: string;
}

function Account() {
    const [data, setData] = useState<SendCodeData>({});
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
