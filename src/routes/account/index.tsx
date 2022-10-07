import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Verify from "./verify";

function Account() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to={`/account/login`} replace />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
        </Routes>
    );
}

export default Account;
