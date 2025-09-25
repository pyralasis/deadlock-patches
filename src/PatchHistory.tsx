import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';
import { useLocation, useNavigate } from "react-router-dom";
import { HERO_DEFINITIONS } from "./SectionDefinitions";
import { useEffect, useState } from "react";
import { PatchData, Patchnote } from "./PatchData";
import { SectionData } from "./SectionTypes";
import { AbilitySection } from "./components/PatchSection";
import HomeIcon from '@mui/icons-material/Home';
import { sortHeroPatchnotes } from "./utils";

function getHeroPatches(hero: string, jsonData: PatchData[]): Record<string, Patchnote[]> {
    let heroPatches: Record<string, Patchnote[]> = {};
    jsonData.forEach(patch => {
        heroPatches[patch.date] = patch.characters[hero];
    });
    return heroPatches;
}
interface PatchHistoryProps {

}

function PatchHistory({ }: PatchHistoryProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const hero: string | null = query.get("hero");

    const navigate = useNavigate();

    const [sectionData, setSectionData] = useState<SectionData[]>([]);

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


    if (!isMobile)
        return (
            <Box
                sx={{
                    backgroundImage: HERO_DEFINITIONS[hero ? hero : "Abrams"].background,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    height: '100vh',
                    overflowY: 'auto',
                    scrollSnapType: 'y mandatory',
                }}
            >
                <Box
                    component="section"
                    className="section hero-section-snap"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        minHeight: '100vh',
                        scrollSnapAlign: 'start',
                    }}
                >
                    <Box
                        className="hero-section-left"
                        tabIndex={-1}
                        sx={{
                            width: '50%',
                            height: '100%',
                            maxHeight: '100vh',
                            overflowY: 'auto',
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            paddingLeft: '2em',
                            paddingRight: '2em',
                            boxSizing: 'border-box',
                            outline: 'none',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            backgroundColor: '#12121233',
                        }}
                    >
                        {
                            sectionData.map((section) => {
                                if (section.id == hero)
                                    return (Object.keys(section.patches).map((date) => {
                                        const sortedPatches = sortHeroPatchnotes(section.patches[date])
                                        if (section.patches[date].length != 0)
                                            return (
                                                <>
                                                    <Typography
                                                        fontFamily={"DecoturalCG"}
                                                        fontSize={"2em"}
                                                    >
                                                        {date}
                                                    </Typography>
                                                    {sortedPatches.general.length != 0 &&
                                                        <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                                            <Box component={"img"} src={HERO_DEFINITIONS[hero ? hero : ""].icon} alt="" width={"100px"} />
                                                            <Typography
                                                                fontFamily={"DecoturalCG"}
                                                                fontSize={"1em"}
                                                                sx={{ paddingLeft: "1em" }}
                                                            >
                                                                {HERO_DEFINITIONS[hero ? hero : ""].name}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    {
                                                        sortedPatches.general.map((item: Patchnote, index: number) => (
                                                            <List>
                                                                <ListItem key={index}>
                                                                    <ListItemIcon>
                                                                        {
                                                                            item.change === "buff" ?
                                                                                <AddIcon sx={{ color: "green" }} /> : item.change === "nerf" ?
                                                                                    <RemoveIcon sx={{ color: "red" }} /> : <CircleIcon />
                                                                        }
                                                                    </ListItemIcon>
                                                                    <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: '24px', color: "white" } } }} primary={item.description} />
                                                                </ListItem>
                                                            </List>
                                                        ))
                                                    }
                                                    <AbilitySection ability={sortedPatches.ability1} ability_icon={HERO_DEFINITIONS[hero ? hero : ""].ability1} />
                                                    <AbilitySection ability={sortedPatches.ability2} ability_icon={HERO_DEFINITIONS[hero ? hero : ""].ability2} />
                                                    <AbilitySection ability={sortedPatches.ability3} ability_icon={HERO_DEFINITIONS[hero ? hero : ""].ability3} />
                                                    <AbilitySection ability={sortedPatches.ability4} ability_icon={HERO_DEFINITIONS[hero ? hero : ""].ability4} />
                                                    <br />

                                                </>
                                            )
                                    }))
                            })
                        }

                    </Box>
                    <Box
                        className="hero-section-right"
                        sx={{
                            width: '50%',
                            position: 'sticky',
                            top: 0,
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box component="img" src={HERO_DEFINITIONS[hero ? hero : ""].nameplate} alt={HERO_DEFINITIONS[hero ? hero : ""].name} sx={{ width: "75%" }} />

                    </Box>
                </Box>
                <Box position={"fixed"} right={"20px"} bottom={"20px"} display={'flex'} flexDirection={'column-reverse'}>
                    <Tooltip title="Home">
                        <IconButton size="large" onClick={() => { navigate("/") }}>
                            <HomeIcon sx={{ color: "lightblue" }} />
                        </IconButton>
                    </Tooltip>
                </Box>

            </Box >

        );
    // else {
    //     return (
    //         <Box height={"100%"}>
    //             <Box
    //                 className="container hero-section-container"
    //                 ref={containerRef}
    //                 sx={{
    //                     backgroundImage: activeSectionBackground,
    //                     backgroundRepeat: 'no-repeat',
    //                     height: 'calc(100% - 50px)',
    //                     overflowY: "hidden",
    //                     scrollSnapType: 'y mandatory',
    //                     backgroundSize: '200% 100%',
    //                     backgroundPosition: 'right'
    //                 }}
    //             >
    //                 {sectionData.map((section) => (
    //                     section.patches[date] && section.patches[date].length !== 0 ? (
    //                         <Section
    //                             key={section.id}
    //                             id={section.id}
    //                             type={section.type}
    //                             heroDefinition={section.definition}
    //                             heroData={section.patches[date] ?? []}
    //                         />
    //                     ) : null
    //                 ))}
    //             </Box>
    //             <Box width={"100%"} height={"50px"} display={"flex"} flexDirection={"row"}>
    //                 {
    //                     (() => {
    //                         const currentIdx = sectionData.findIndex(section => section.id === activeSection);
    //                         let prevIdx = currentIdx - 1;
    //                         while (prevIdx >= 0) {
    //                             const s = sectionData[prevIdx];

    //                             if (s.patches[date] && s.patches[date].length !== 0) {

    //                                 return (
    //                                     <Button
    //                                         key={s.id}
    //                                         onClick={() => handleChangeSection(s.id)}
    //                                         sx={{ width: "100%" }}
    //                                     >
    //                                         <Box
    //                                             component={"img"}
    //                                             src={s.definition.icon}
    //                                             height={"50px"}
    //                                         />
    //                                     </Button>
    //                                 );
    //                             }
    //                             prevIdx--;
    //                         }
    //                         return null;
    //                     })()
    //                 }
    //                 {
    //                     (() => {
    //                         const currentIdx = sectionData.findIndex(section => section.id === activeSection);
    //                         let nextIdx = currentIdx + 1;
    //                         while (nextIdx < sectionData.length) {
    //                             const s = sectionData[nextIdx];
    //                             if (s.patches[date] && s.patches[date].length !== 0) {
    //                                 return (
    //                                     <Button
    //                                         key={s.id}
    //                                         onClick={() => handleChangeSection(s.id)}
    //                                         sx={{ width: "100%" }}
    //                                     >
    //                                         <Box
    //                                             component={"img"}
    //                                             src={s.definition.icon}
    //                                             height={"50px"}
    //                                         />
    //                                     </Button>
    //                                 );
    //                             }
    //                             nextIdx++;
    //                         }
    //                         return null;
    //                     })()
    //                 }
    //             </Box>
    //         </Box >
    //     );
    // }
}

export default PatchHistory
