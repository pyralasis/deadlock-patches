import { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Popover, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, ITEM_DEFINITIONS } from './SectionDefinitions';
import { SectionStepper } from './components/SectionStepper';
import { SectionScroller } from './components/SectionScroller';
import { SectionData } from './SectionTypes';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import { getGeneralPatches, getHeroPatches, getItemPatches, sortHeroPatchnotes } from './utils';
import { MobilePatchNavigation } from './components/MobilePatchNavigation';
import { Patchnote } from './PatchData';
import { AbilitySection } from './components/PatchSection';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';
import { HistorySection } from './components/HistorySection';

function PatchHistory() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const hero: string | null = query.get("hero");
    const date = query.get("date") || "";

    const navigate = useNavigate();

    const [sectionData, setSectionData] = useState<SectionData[]>([]);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSectionId, setActiveSectionId] = useState("");

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeSection = (sectionId: string) => {
        setActiveSectionId(sectionId);
        handleClose();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
    const activeSectionIcon = sectionData.find((section) => section.id === activeSectionId)?.definition.icon;
    const activeSectionNameplate = sectionData.find((section) => section.id === activeSectionId)?.definition.nameplate;
    const activeSectionType = sectionData.find((section) => section.id === activeSectionId)?.type;
    const activeSectionName = sectionData.find((section) => section.id === activeSectionId)?.definition.name;

    let nameElement;
    if (activeSectionType === "hero") {
        nameElement = (
            <Box component={"img"} src={activeSectionNameplate} height={"90%"} width={"calc(100% - 100px)"}></Box>
        );
    } else {
        nameElement = (
            <Typography fontFamily={"DecoturaICG"} fontSize={64}>{activeSectionName} </Typography>
        );
    }

    return (
        <>
            {isMobile &&
                <Box id="mobile-header" display={"flex"} flexDirection={"row"} sx={{ height: "100px" }}>
                    <Button sx={{ width: "100px" }} onClick={handleClick} >
                        <Box component={"img"} src={`${activeSectionIcon}.webp`} height={"100%"}></Box>
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

                                section.patches[date] && section.patches[date].length !== 0 ? (
                                    <Button onClick={() => handleChangeSection(section.id)}>
                                        <Box component={"img"} src={`${section.definition.icon}.webp`} height={"80px"}></Box>
                                    </Button>
                                ) : null
                            ))}
                        </Box>
                    </Popover>
                    {nameElement}

                </Box>
            }

            <Grid container>
                <Grid size={!isMobile ? 11.5 : 12} height={!isMobile ? "100vh" : "calc(100vh - 150px)"}>
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
                    <MobilePatchNavigation sectionData={sectionData} activeSection={activeSectionId} date={date} handleChangeSection={handleChangeSection} />
                }
                {!isMobile &&
                    <Grid size={0.5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100vh',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            overflow: "hidden"
                        }}
                    >
                        <SectionStepper
                            sectionData={sectionData}
                            activeSection={activeSectionId}
                            date={date}
                            onStepperClick={(sectionId: string) => {
                                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    </Grid>
                }


                <Box position={"fixed"} right={"5%"} bottom={"20px"} display={'flex'} flexDirection={'column-reverse'}>
                    <Tooltip title="Home">
                        <IconButton size="large" onClick={() => { navigate("/") }}>
                            <HomeIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Patch History">
                        <IconButton sx={{ display: Object.keys(HERO_DEFINITIONS).includes(activeSectionId) ? "flex-inline" : "none" }} size="large"
                            onClick={() => {
                                navigate(`/hero-history?hero=${encodeURIComponent(activeSectionId)}`)
                            }}>
                            <HistoryIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid >
        </>
    );
}

export default PatchHistory;