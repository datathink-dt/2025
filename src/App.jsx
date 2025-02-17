import { IconButton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";

import About from "./About.jsx";
import ImageIcon from "@mui/icons-material/Image";

export default function App() {
    const [selectedValue, setSelectedValue] = useState("home");

    const btns = ["home"];

    return (
        <>
            <Box
                className="info_btns"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {btns.map((btn) => (
                    <IconButton
                        style={{
                            padding: 12,
                            marginBottom: "10px",
                        }}
                        className={
                            btn === selectedValue
                                ? "info_btn btnSelected"
                                : "info_btn btnNonSelected"
                        }
                        onClick={() => {
                            setSelectedValue(btn);
                            console.log(btn);
                        }}
                    >
                        {(btn === "home" && (
                            <HomeIcon
                                sx={{
                                    padding: "2px",
                                    margin: 0,
                                    fontSize: "2rem",
                                }}
                            />
                        )) ||
                            (btn === "map" && (
                                <MapIcon
                                    sx={{
                                        padding: "2px",
                                        margin: 0,
                                        fontSize: "2rem",
                                    }}
                                />
                            )) ||
                            (btn === "images" && (
                                <ImageIcon
                                    sx={{
                                        padding: "2px",
                                        margin: 0,
                                        fontSize: "2rem",
                                    }}
                                />
                            ))}
                    </IconButton>
                ))}
            </Box>

            {selectedValue == "home" && <About />}
        </>
    );
}
