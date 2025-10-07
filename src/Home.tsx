import Masonry from "@mui/lab/Masonry";
import { Box, Button, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { HERO_DEFINITIONS, SectionDefinition } from "./SectionDefinitions";
import { useNavigate } from "react-router-dom";

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const navigate = useNavigate();
    const handleClick = useCallback((date: string) => {
        navigate(`/patch-notes?date=${date}`);
    }, [navigate]);

    const [fileList, setFileList] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/json/index.json`);
                const files: string[] = await res.json();
                files.reverse();
                setFileList(files);
            } catch (error) {
                console.error('Failed to fetch JSON data:', error);
            }
        };
        fetchData();
    }, []);

    const a: SectionDefinition[] = Object.values(HERO_DEFINITIONS);
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            sx={{
                backgroundImage: 'url("/backgrounds/city.webp")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maskImage: `${isMobile ? "none" : "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"}`,
                maskRepeat: "no-repeat",
                overflowX: "hidden",
                overflowY: "scroll"
            }}>
            <Box
                width={`${isMobile ? "100%" : "80dvh"}`}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <Typography
                    fontFamily={"DecoturaICG"}
                    fontSize={"5em"}
                    sx={{
                        color: "white",
                        paddingTop: "5.em"
                    }}>
                    Deadlock Patches
                </Typography>
                <Typography
                    fontFamily={"DecoturaICG"}
                    fontSize={"3em"}
                    sx={{
                        color: "white",
                        paddingTop: "1em",
                        paddingBottom: ".5em"
                    }}>
                    Patch List
                </Typography>

                <Masonry
                    columns={`${isMobile ? 2 : 4}`}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={4}
                    defaultSpacing={1}
                >
                    {
                        fileList.map((file, index) => {
                            return (
                                <Card
                                    key={file}
                                    id={file}
                                    sx={{
                                        width: "10em",
                                        height: "10em",
                                        backgroundImage: `image-set(url(${a[index % 32].background}_sm.webp), url(${a[index % 32].background}_sm.png))`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: '250% 100%',
                                        backgroundPosition: 'right',
                                    }}
                                >
                                    <Button
                                        onClick={() => handleClick(file.replace(/\.json$/, ''))}
                                        sx={{ width: "100%", height: "100%", padding: "0" }}>
                                        <Typography
                                            fontFamily={"RetailDemo"}
                                            fontSize={"2em"}
                                            sx={{
                                                color: "white",
                                                backgroundColor: "#12121277",
                                                width: "100%",
                                                height: "40%",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >
                                            {file.replace(/\.json$/, '')}
                                        </Typography>

                                    </Button>
                                </Card>

                            )
                        })
                    }
                </Masonry>
                <Typography
                    fontFamily={"DecoturaICG"}
                    fontSize={"3em"}
                    sx={{
                        color: "white",
                        paddingTop: "1em",
                        paddingBottom: ".5em"
                    }}>
                    Hero History
                </Typography>
                <Masonry
                    columns={`${isMobile ? 2 : 4}`}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={4}
                    defaultSpacing={1}
                >
                    {
                        Object.keys(HERO_DEFINITIONS).map((hero) => {
                            return (
                                <Card
                                    key={hero}
                                    id={hero}
                                    sx={{
                                        width: "10em",
                                        height: "10em",
                                        position: "relative", // Needed for absolute background image
                                        overflow: "hidden",   // Ensure background doesn't overflow
                                        // borderRadius: 2,      // Optional, if you want rounded corners
                                    }}
                                >
                                    {/* Background image layer */}
                                    <Box
                                        component="picture"
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            zIndex: 0, // Behind the content
                                        }}
                                    >
                                        <source
                                            srcSet={`${HERO_DEFINITIONS[hero].background}_sm.webp`}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={`${HERO_DEFINITIONS[hero].background}_sm.png`}
                                            type="image/png"
                                        />
                                        <Box
                                            component="img"
                                            loading="lazy"
                                            src={`${HERO_DEFINITIONS[hero].background}_sm.png`}
                                            alt={`${HERO_DEFINITIONS[hero].name} background`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                objectPosition: "-50px",
                                                transform: "scaleX(2.5) scaleY(1.5)", // mimics backgroundSize: '250% 100%'
                                            }}
                                        />
                                    </Box>

                                    {/* Foreground content */}
                                    <Box sx={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                                        <Button
                                            onClick={() => navigate(`/hero-history?hero=${encodeURIComponent(hero)}`)}
                                            sx={{ width: "100%", height: "100%", padding: "0" }}
                                        >
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                alignItems={"center"}
                                                width={"100%"}
                                                height={"100%"}
                                            >
                                                <Box
                                                    height={"60%"}
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Box
                                                        component="picture"
                                                        paddingTop={"1em"}
                                                        sx={{ width: "75px" }}
                                                    >
                                                        <source
                                                            srcSet={`${HERO_DEFINITIONS[hero].icon}.webp`}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={`${HERO_DEFINITIONS[hero].icon}.png`}
                                                            type="image/png"
                                                        />
                                                        <Box
                                                            component="img"
                                                            src={`${HERO_DEFINITIONS[hero].icon}.png`}
                                                            alt={HERO_DEFINITIONS[hero].name}
                                                            sx={{
                                                                width: "100%",
                                                                height: "100%",
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>

                                                <Box
                                                    height={"40%"}
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={HERO_DEFINITIONS[hero].nameplate}
                                                        alt=""
                                                        loading="lazy"
                                                        width={"90%"}
                                                        height={"90%"}
                                                        display={"block"}
                                                        paddingBottom={"1em"}
                                                    />
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Box>
                                </Card>
                            )
                        })
                    }
                </Masonry>

            </Box>

        </Box >
    )
}

export default Home
