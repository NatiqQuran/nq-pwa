import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";

function Intro() {
    return (
        <div>
            <h1>Intro Page</h1>
            <Link to="/quran">
                <Button id="" className="">
                    Go to Quran
                </Button>
            </Link>
        </div>
    );
}

export default Intro;
