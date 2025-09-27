import { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Popover, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { HERO_DEFINITIONS } from './SectionDefinitions';
import { SectionData } from './SectionTypes';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'; import { getHeroPatches } from './utils';
import { HistorySection } from './components/HistorySection';
import { HistorySectionStepper } from './components/HistorySectionStepper';
import { MobileHistoryNavigation } from './components/MobileHistoryNavigation';

function PatchHistory() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const hero: string | null = query.get("hero");
    const date: string | null = query.get("date") || "";

    const navigate = useNavigate();

    const [sectionData, setSectionData] = useState<SectionData[]>([]);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeSection = (sectionId: string) => {
        console.log(sectionId);
        navigate(`/hero-history?hero=${sectionId}&date=${date}`)
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/json/index.json`);
                const files = await res.json();
                files.reverse();

                const allData = await Promise.all(
                    files.map((file: string) =>
                        fetch(`/data/json/${file}`).then(res => res.json())
                    )
                );

                const tempSectionData: SectionData[] = [];


                Object.keys(HERO_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "hero",
                        definition: HERO_DEFINITIONS[key],
                        patches: getHeroPatches(key, allData)
                    });
                });
                setSectionData(tempSectionData);
            } catch (error) {
                console.error('Failed to fetch JSON data:', error);
            }
        };

        fetchData();
    }, []);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            {isMobile &&
                <Box id="mobile-header" display={"flex"} flexDirection={"row"} sx={{ height: "100px" }}>
                    <Button sx={{ width: "100px" }} onClick={handleClick} >
                        <Box component={"img"} src={`${HERO_DEFINITIONS[hero || ""].icon}.webp`} height={"100%"}></Box>
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}

                    >
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                            {sectionData.map((section, _index) => (

                                <Button onClick={() => handleChangeSection(section.id)}>
                                    <Box component={"img"} src={`${section.definition.icon}.webp`} height={"80px"}></Box>
                                </Button>

                            ))}
                        </Box>
                    </Popover>
                    <Box component={"img"} src={HERO_DEFINITIONS[hero || ""].nameplate} height={"90%"} width={"calc(100% - 100px)"}></Box>
                </Box>
            }

            <Grid container>
                <Grid size={!isMobile ? 11.5 : 12} height={!isMobile ? "100dvh" : "calc(100dvh - 150px)"}>
                    <Box
                        width={"100%"}
                        height={"100%"}
                        sx={{
                            backgroundImage: `url(${HERO_DEFINITIONS[hero || "Abrams"].background}.png), url(${HERO_DEFINITIONS[hero || "Abrams"].background}.webp)`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <HistorySection id={''} type={'hero'} sectionData={sectionData} hero={hero || ""} />
                    </Box>
                </Grid>
                {isMobile &&
                    <MobileHistoryNavigation sectionData={sectionData} activeSection={hero || ""} handleChangeSection={handleChangeSection} />
                }
                {!isMobile &&
                    <Grid size={0.5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100dvh',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            overflow: "hidden"
                        }}
                    >
                        <HistorySectionStepper
                            sectionData={sectionData}
                            activeSection={hero || ""}
                            onStepperClick={(hero: string) => {
                                navigate(`/hero-history?hero=${encodeURIComponent(hero)}`)
                            }}
                        />
                    </Grid>
                }


                <Box position={"fixed"} right={"5%"} bottom={!isMobile ? "20px" : "50px"} display={'flex'} flexDirection={'column-reverse'}>
                    <Tooltip title="Home">
                        <IconButton size="large" onClick={() => { navigate("/") }}>
                            <HomeIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Return to Patch">
                        <IconButton sx={{ display: date != "" ? "flex-inline" : "none" }} size="large"
                            onClick={() => {
                                navigate(`/patch-notes?date=${encodeURIComponent(date)}&section=${encodeURIComponent(hero || "")}`)
                            }}>
                            <KeyboardReturnIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid >
        </>
    );
}

export default PatchHistory;