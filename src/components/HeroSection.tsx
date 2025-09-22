import React from 'react';
import Box from '@mui/material/Box';
import { ListItemIcon, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SectionDefinition, SPIRIT_ITEM_DEFINITIONS, VITALITY_ITEM_DEFINITIONS, WEAPON_ITEM_DEFINITIONS } from '../SectionDefinitions';
import { Patchnote } from '../PatchData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';

export type SortedHeroPatchnotes = {
    general: Patchnote[];
    ability1: Patchnote[];
    ability2: Patchnote[];
    ability3: Patchnote[];
    ability4: Patchnote[];
}

export function sortHeroPatchnotes(patchnotes: Patchnote[]): SortedHeroPatchnotes {
    const sorted: SortedHeroPatchnotes = {
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
            const slotKey = `ability${patch.ability.slot}` as keyof SortedHeroPatchnotes;
            sorted[slotKey].push(patch);
        }
    }

    return sorted;
}

export function sortItemPatchnotes(patchnotes: Patchnote[]): Record<string, Patchnote[]> {
    const sorted: Record<string, Patchnote[]> = {};
    for (const patch of patchnotes) {
        if (patch.type === "item" && patch.item_name !== undefined) {
            if (!sorted[patch.item_name]) {
                sorted[patch.item_name] = [];
            }
            sorted[patch.item_name].push(patch);
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

    const sortedHeroPatchnotes = sortHeroPatchnotes(heroData);
    const sortedItemPatchnotes = sortItemPatchnotes(heroData);

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
                    {sortedHeroPatchnotes.general.length != 0 &&
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
                        sortedHeroPatchnotes.general.map((item: Patchnote, index: number) => (
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
                    <AbilitySection ability={sortedHeroPatchnotes.ability1} ability_icon={heroDefinition.ability1} />
                    <AbilitySection ability={sortedHeroPatchnotes.ability2} ability_icon={heroDefinition.ability2} />
                    <AbilitySection ability={sortedHeroPatchnotes.ability3} ability_icon={heroDefinition.ability3} />
                    <AbilitySection ability={sortedHeroPatchnotes.ability4} ability_icon={heroDefinition.ability4} />
                    {
                        Object.keys(sortedItemPatchnotes).map((item) => {
                            console.log(item);
                            return (

                                <>
                                    <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                        <Box component={"img"} src={WEAPON_ITEM_DEFINITIONS[item]?.icon || VITALITY_ITEM_DEFINITIONS[item]?.icon || SPIRIT_ITEM_DEFINITIONS[item]?.icon} alt={item} width={"100px"} />
                                        <Typography
                                            fontFamily={"DecoturaICG"}
                                            fontSize={"1em"}
                                            sx={{ paddingLeft: "1em" }}
                                        >
                                            {item}
                                        </Typography>

                                    </Box>
                                    {
                                        sortedItemPatchnotes[item].map((item: Patchnote, index: number) => (
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
                                </>
                            )
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


export function AbilitySection({ ability, ability_icon }: { ability: Patchnote[], ability_icon: string }) {
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