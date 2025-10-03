import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, IconButton, Popover, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, ITEM_DEFINITIONS } from './SectionDefinitions';
import { PatchSectionStepper } from './components/PatchSectionStepper';
import { PatchSectionScroller } from './components/PatchSectionScroller';
import { SectionData } from './SectionTypes';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import { getGeneralPatches, getHeroPatches, getItemPatches } from './utils';
import { MobilePatchNavigation } from './components/MobilePatchNavigation';

function PatchNotes() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const date = query.get("date") || "";
    const sectionQuery = query.get("section") || "";


    const navigate = useNavigate();

    const [sectionData, setSectionData] = useState<SectionData[]>([]);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSectionId, setActiveSectionId] = useState("");

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const handleChangeSection = useCallback((sectionId: string) => {
        setActiveSectionId(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        handleClose();
    }, [handleClose, setActiveSectionId]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/json/index.json`);
                const files = await res.json();

                const allData = await Promise.all(
                    files.map((file: string) =>
                        fetch(`/data/json/${file}`).then(res => res.json())
                    )
                );

                const tempSectionData: SectionData[] = [];

                Object.keys(GENERAL_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "general",
                        definition: GENERAL_DEFINITIONS[key],
                        patches: getGeneralPatches(key, allData)
                    });
                });

                Object.keys(HERO_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "hero",
                        definition: HERO_DEFINITIONS[key],
                        patches: getHeroPatches(key, allData)
                    });
                });

                Object.keys(ITEM_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "item",
                        definition: ITEM_DEFINITIONS[key],
                        patches: getItemPatches(key, allData)
                    });
                });
                setSectionData(tempSectionData);

            } catch (error) {
                console.error('Failed to fetch JSON data:', error);
            }
        };

        fetchData();
    }, [setActiveSectionId, setSectionData]);

    useEffect(() => {
        if (sectionData.length > 0) {
            let currentSection = 0;
            let searching = true;
            while (searching) {
                if (sectionData[currentSection].patches[date].length > 0) {
                    setActiveSectionId(sectionData[currentSection].id);
                    searching = false;
                }
                currentSection++;
            }
        }

        if (sectionQuery != "" && sectionQuery != null) {
            setActiveSectionId(sectionQuery);
            document.getElementById(sectionQuery)?.scrollIntoView({ behavior: "instant" });
        }
    }, [sectionData, sectionQuery]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSectionId(entry.target.id);
                }
            });
        }, {
            root: containerRef.current,
            threshold: 0.5,
        });

        const sections = containerRef.current?.querySelectorAll('section') ?? [];
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionData]);


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
                <Box id="mobile-header" display={"flex"} flexDirection={"row"} borderBottom={"1px solid #3c3c3c"} sx={{ height: "100px" }}>
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
                <Grid size={!isMobile ? 11.5 : 12} height={!isMobile ? "100dvh" : "calc(100dvh - 150px)"}>
                    <PatchSectionScroller sectionData={sectionData} containerRef={containerRef} activeSection={activeSectionId} date={date} />
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
                            height: '100dvh',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            overflow: "hidden"
                        }}
                    >
                        <PatchSectionStepper
                            sectionData={sectionData}
                            activeSection={activeSectionId}
                            date={date}
                            onStepperClick={(sectionId: string) => {
                                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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

                    <Tooltip title="Patch History">
                        <IconButton sx={{ display: Object.keys(HERO_DEFINITIONS).includes(activeSectionId) ? "flex-inline" : "none" }} size="large"
                            onClick={() => {
                                navigate(`/hero-history?hero=${encodeURIComponent(activeSectionId)}&date=${encodeURIComponent(date)}`)
                            }}>
                            <HistoryIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid >
        </>
    );
}

export default PatchNotes;