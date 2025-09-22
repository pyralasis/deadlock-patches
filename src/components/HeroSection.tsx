import React from 'react';
import Box from '@mui/material/Box';
import { ListItemIcon, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SectionDefinition } from '../SectionDefinitions';
import { Patchnote } from '../PatchData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';

type SortedPatchnotes = {
    general: Patchnote[];
    ability1: Patchnote[];
    ability2: Patchnote[];
    ability3: Patchnote[];
    ability4: Patchnote[];
}

function sortPatchnotes(patchnotes: Patchnote[]): SortedPatchnotes {
    const sorted: SortedPatchnotes = {
        general: [],
        ability1: [],
        ability2: [],
        ability3: [],
        ability4: [],
    };

    for (const patch of patchnotes) {
        if (patch.type === "general") {
            sorted.general.push(patch);
        } else if (patch.ability != null) {
            const slotKey = `ability${patch.ability.slot}` as keyof SortedPatchnotes;
            sorted[slotKey].push(patch);
        }
    }

    return sorted;
}

interface SectionProps {
    id: string;
    type: string;
    heroDefinition: SectionDefinition;
    heroData: Patchnote[];
}

export function Section({ id, type, heroDefinition, heroData }: SectionProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const sortedPatchnotes = sortPatchnotes(heroData);

    let nameElement;
    if (type === "hero") {
        nameElement = (
            <Box component="img" src={heroDefinition.nameplate} alt={heroDefinition.name} sx={{ width: "75%" }} />
        );
    } else {
        nameElement = (
            <Typography fontFamily={"DecoturalCG"} fontSize={196}>{heroDefinition.name}</Typography>
        );
    }
    if (!isMobile)
        return (
            <Box
                component="section"
                className="section hero-section-snap"
                id={id}
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
                    {/* <List >
                        {heroData.map((item: Patchnote, index: number) => (
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
                        ))}
                    </List> */}
                    {sortedPatchnotes.general.length != 0 &&
                        <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Box component={"img"} src={heroDefinition.icon} alt="" width={"100px"} />
                            <Typography
                                fontFamily={"DecoturaICG"}
                                fontSize={"1em"}
                                sx={{ paddingLeft: "1em" }}
                            >
                                {heroDefinition.name}
                            </Typography>
                        </Box>

                    }
                    {
                        sortedPatchnotes.general.map((item: Patchnote, index: number) => (
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
                    <AbilitySection ability={sortedPatchnotes.ability1} ability_icon={heroDefinition.ability1} />
                    <AbilitySection ability={sortedPatchnotes.ability2} ability_icon={heroDefinition.ability2} />
                    <AbilitySection ability={sortedPatchnotes.ability3} ability_icon={heroDefinition.ability3} />
                    <AbilitySection ability={sortedPatchnotes.ability4} ability_icon={heroDefinition.ability4} />
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
                    {nameElement}
                </Box>
            </Box>
        );
    else {
        const patchNotesRef = React.useRef<HTMLDivElement>(null);
        return (
            <Box
                component="section"
                className="hero-section-snap"
                id={id}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '100%',
                    scrollSnapAlign: 'start',
                }}
            >
                <Box
                    // className="hero-section-left"
                    tabIndex={-1}
                    ref={patchNotesRef}
                    sx={{
                        width: '100%',
                        height: '100%',
                        overflowY: "scroll",
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        paddingLeft: '1em',
                        paddingRight: '1em',
                        boxSizing: 'border-box',
                        outline: 'none',
                        // scrollbarWidth: 'none',
                        // '&::-webkit-scrollbar': {
                        //     display: 'none',
                        // },
                        backgroundColor: '#12121277',
                    }}
                >
                    <List>
                        {heroData.map((item: Patchnote, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon >
                                    {
                                        item.change === "buff" ?
                                            <AddIcon sx={{ color: "green", width: "50px", height: "50px" }} /> : item.change === "nerf" ?
                                                <RemoveIcon sx={{ color: "red", width: "50px", height: "50px" }} /> :
                                                <CircleIcon sx={{ width: "50px", height: "25px" }} />
                                    }
                                </ListItemIcon>
                                <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: '24px', color: "white" } } }} primary={item.description} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        );
    }
}


function AbilitySection({ ability, ability_icon }: { ability: Patchnote[], ability_icon: string }) {
    return (
        <Box>
            {ability.length != 0 &&
                <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Box component={"img"} src={ability_icon} alt={ability[0].ability.name} width={"100px"} />
                    <Typography
                        fontFamily={"DecoturaICG"}
                        fontSize={"1em"}
                        sx={{ paddingLeft: "1em" }}
                    >
                        {ability[0].ability.name}
                    </Typography>
                </Box>

            }
            {
                ability.map((item: Patchnote, index: number) => (
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
        </Box>
    )
}