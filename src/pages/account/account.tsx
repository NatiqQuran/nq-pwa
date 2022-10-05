import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";

function Account() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
        </Routes>
    );
}

export default Account;
