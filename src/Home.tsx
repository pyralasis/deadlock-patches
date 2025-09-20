import Masonry from "@mui/lab/Masonry";
import { Box, Button, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { HERO_DEFINITIONS, SectionDefinition } from "./SectionDefinitions";
import { useNavigate } from "react-router-dom";

export function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const navigate = useNavigate();
    const handleClick = (date: string) => {
        navigate(`/patch-notes?date=${date}`);
    };

    const [fileList, setFileList] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/json/index.json`);
                const files: string[] = await res.json();
                console.log(files);
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
                backgroundImage: 'url("/backgrounds/city.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maskImage: `${isMobile ? "" : "linear-gradient(to right, transparent, black 20%, black 80%, transparent);"}`,
                maskRepeat: "no-repeat",
                overflowX: "hidden",
                overflowY: "scroll"
            }}>
            <Box
                width={`${isMobile ? "100%" : "80vh"}`}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <Typography
                    fontFamily={"DecoturaICG"}
                    fontSize={"3em"}
                    sx={{
                        color: "white",
                        padding: "2em"
                    }}>
                    Deadlock Patches
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
                                        backgroundImage: `${a[index % 32].background}`,
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


            </Box>

        </Box >
    )
}