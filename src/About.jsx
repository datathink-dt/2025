import { Box, IconButton } from "@mui/material";

import Colophon from "./Colophon.jsx";
import Steps from "./Steps.jsx";
import EmailIcon from "@mui/icons-material/MailOutline";

export default function About() {
    const large = "80%";
    const medium = "50%";
    const small = "30%";

    const sTitle = {
        paddingTop: 100,
        width: large,
        textAlign: "center",
        margin: "50px auto",
        fontSize: "10rem",
    };

    const sIntro = {
        marginTop: 300,
        width: medium,
        margin: "50px auto ",

        textAlign: "justify",
        textJustify: "inter-word",
        // marginBottom: 100,
    };

    const sDiagram = {
        height: 700,
        width: large,

        margin: "50px auto",
    };

    const sContainer = {
        overflow: "auto",
    };

    const sUl = {
        listStyleType: "square",
    };

    const sLi = {
        paddingBottom: "15px",
        paddingLeft: "60px",
        paddingRight: "60px",
        fontStyle: "italic",
    };

    const sColophon = {
        width: "60%",
        margin: "50px auto",
        marginTop: "50px",
    };

    return (
        <>
            <Box
                className="full_screen"
                sx={{
                    ...sContainer,
                }}
            >
                <Box style={{ ...sTitle }}>
                    DATATHINK
                    <p style={{ fontSize: "1.5rem", padding: 0, margin: 0 }}>
                        Governing AI & Cities | Visualizing AI & Cities / 2025
                    </p>
                </Box>

                <Box style={{ ...sIntro }}>
                    <p>
                        Digitalization and AI have become ubiquitous and
                        pervasive, shaping the ways we think, design, and
                        experience our urban environments. As the fields of
                        architecture, urban history, design, and social sciences
                        grapple with these rapid changes, we see an urgent need
                        to engage critically and proactively with these
                        transformations—assessing both the limitations and the
                        potential of emerging digital tools and practices.
                    </p>
                    <p>
                        This new edition of our block course, involves lectures,
                        presentations, visits, and a collaborative hackathon.
                        Participants will work with theme-oriented scenarios and
                        urban visual data in hands-on and participatory
                        sessions.__The course will highlight how AI, machine
                        learning, and advanced digital infrastructures can be
                        harnessed more responsibly, with an emphasis on
                        governance, spatial justice, and citizen participation.
                    </p>
                    <p style={{ marginTop: "50px", marginBottom: "35px" }}>
                        <span style={{ fontWeight: "bold" }}>
                            AI & Cities: Key Tracks and Themes:
                        </span>
                        <ul style={{ ...sUl }}>
                            <li style={{ ...sLi }}>
                                Governance and Responsibility
                            </li>
                            <li style={{ ...sLi }}>
                                Spatial Justice and AI (ecological, mobility,
                                and social dimensions)
                            </li>
                            <li style={{ ...sLi }}>
                                Understanding and Experiencing Urban
                                Environments (analysis, art, aesthetics)
                            </li>
                            <li style={{ ...sLi }}>Form and Design</li>
                            <li style={{ ...sLi }}>
                                Infrastructure and Compute
                            </li>
                        </ul>
                    </p>
                    <p>
                        A central element of this edition will be a
                        collaborative hackathon in alignment with the above
                        tracks. The aim is to create a tangible outcome—better
                        data for professional and citizen communities—while
                        discussing critical issues such as algorithmic
                        alignment, interpretability, and the ethical use of AI
                        models.
                    </p>

                    <p style={{ marginTop: "50px", marginBottom: "35px" }}>
                        <span style={{ fontWeight: "bold" }}>
                            Course Format and Schedule Highlights:
                        </span>
                        <ul style={{ ...sUl }}>
                            <li style={{ ...sLi }}>
                                <span style={{ fontWeight: "bold" }}>
                                    Monday (9 am – 1 pm):
                                </span>
                                <br />
                                Introduction, Governance & Responsibility, “AI &
                                Cities,” “Spatial Justice,” and “AI Fresco”
                                sessions.
                            </li>
                            <li style={{ ...sLi }}>
                                <span style={{ fontWeight: "bold" }}>
                                    Tuesday (9 am – 1 pm):
                                </span>
                                <br />
                                Understanding & Experiencing, including “Urban
                                Models,” talks on Art/Aesthetics, and a visit to
                                IAAC and Barcelona’s Superblock.
                            </li>
                            <li style={{ ...sLi }}>
                                <span style={{ fontWeight: "bold" }}>
                                    Wednesday (9 am – 6 pm):
                                </span>
                                <br />
                                Form & Design, Infrastructure & Compute, and a
                                visit to the Barcelona Supercomputing Center,
                                featuring a lecture by the Barcelona Digital
                                Rights Alliance.
                            </li>
                            <li style={{ ...sLi }}>
                                <span style={{ fontWeight: "bold" }}>
                                    Thursday:
                                </span>
                                <br />
                                Off (free day).
                            </li>
                            <li style={{ ...sLi }}>
                                <span style={{ fontWeight: "bold" }}>
                                    Friday (9 am – 1 pm):
                                </span>
                                <br />
                                Presentations, round table, and closing
                                aperitif.
                            </li>
                        </ul>
                    </p>

                    <p>
                        The course is co-organized by Digital Visual Studies (a
                        Max Planck Society project hosted at the University of
                        Zurich), the UNESCO Chair in Urban Landscape at the
                        University of Montreal, and the Institute for Advanced
                        Architecture of Catalonia (IAAC) in Barcelona. We are
                        joined by presenters from various international
                        institutions. No prior programming or coding skills are
                        required (though familiarity with Python may be
                        beneficial). Participants should bring a laptop and a
                        smartphone or camera for data collection.
                    </p>

                    <p>
                        Participants are responsible for covering their own
                        travel, accommodation, and meals, and participation fee
                        of 500€. Spaces are limited, and selection will be based
                        on the relevance of applicants’ backgrounds to the
                        course’s themes. We welcome graduate students,
                        researchers, and professionals interested in exploring
                        the intersections of AI, digital urban studies, design,
                        and social science research. Join us in Barcelona for a
                        unique opportunity to collaboratively shape new digital
                        approaches for more equitable and inclusive urban
                        futures.
                    </p>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        ...sDiagram,
                        width: "100%",
                        marginTop: "100px",
                        // marginBottom: "100px",
                    }}
                >
                    <img
                        src="poster.png"
                        alt="process diagram"
                        width="500px"
                        height="auto"
                        className="shadow"
                    ></img>
                </Box>
                <Box
                    sx={{
                        alignItems: "center",
                        marginBottom: "100px",
                        ...sColophon,

                        marginTop: "100px",
                    }}
                >
                    <Box
                        style={{ ...sIntro, textAlign: "center" }}
                        textAlign="center"
                    >
                        <Box style={{ width: "100%" }}>
                            To apply please send an expression of interest (max.
                            250 words), and a brief CV
                            <br />
                            <span style={{ textDecoration: "underline" }}>
                                AIandCities@proton.me
                            </span>
                            <br />
                            <br />
                            <p
                                style={{
                                    textAlign: "center",
                                    textJustify: "inter-word",
                                    fontStyle: "italic",
                                    padding: "0 0",
                                }}
                            >
                                <span style={{ fontWeight: "bold" }}>
                                    Deadline for Applications: <br />
                                </span>
                                Feb 20th
                                <br />
                                <br />
                                <span style={{ fontWeight: "bold" }}>
                                    Notification of Acceptance: <br />
                                </span>
                                Feb 21st
                            </p>
                            <br />
                        </Box>
                        {/* <Box>
                            <IconButton
                                style={{
                                    padding: 12,
                                    marginBottom: "10px",
                                }}
                                className="info_btn btnSelected"
                                target="_blank"
                                href={
                                    "mailto:AIandCities@proton.me?subject=Datathink 2025 Candidature"
                                }
                            >
                                <EmailIcon
                                    sx={{
                                        padding: "2px",
                                        margin: 0,
                                        fontSize: "2rem",
                                    }}
                                />
                            </IconButton>
                        </Box> */}
                    </Box>
                </Box>
                <Colophon />
            </Box>
        </>
    );
}
