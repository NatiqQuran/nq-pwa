import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Intro from "routes/intro";
import Pwa from "routes/pwa";
import Offline from "routes/offline";
import Next from "routes/next";
import Quran from "routes/quran";
import Error from "error";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Intro />} />
            <Route path="/pwa" element={<Pwa />} />
            <Route path="/offline" element={<Offline />} />
            <Route path="/next" element={<Next />} />
            <Route path="/quran" element={<Navigate replace to="/" />} />
            <Route path="/quran/:id" element={<Quran />} />
            <Route path="error/:status" element={<Error />} />
            <Route path="*" element={<Error status={404} />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
