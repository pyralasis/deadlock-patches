import Box from '@mui/material/Box';
import { ListItemIcon, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SectionDefinition, SPIRIT_ITEM_DEFINITIONS, VITALITY_ITEM_DEFINITIONS, WEAPON_ITEM_DEFINITIONS } from '../SectionDefinitions';
import { Patchnote } from '../PatchData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';
import { sortHeroPatchnotes, sortItemPatchnotes } from '../utils';

export type SortedHeroPatchnotes = {
    general: Patchnote[];
    ability1: Patchnote[];
    ability2: Patchnote[];
    ability3: Patchnote[];
    ability4: Patchnote[];
}

interface SectionProps {
    id: string;
    type: string;
    heroDefinition: SectionDefinition;
    heroData: Patchnote[];
}

export function PatchSection({ id, type, heroDefinition, heroData }: SectionProps) {
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
            <Typography fontFamily={"DecoturaICG"} fontSize={196}>{heroDefinition.name}</Typography>
        );
    }
    return (
        <Box
            component="section"
            className="section hero-section-snap"
            id={id}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '100%',
                maxHeight: '100%',
                scrollSnapAlign: 'start',
            }}
        >
            <Box
                className="hero-section-left"
                tabIndex={-1}
                sx={{
                    width: !isMobile ? "50%" : "100%",
                    height: '100%',
                    maxHeight: '100%',
                    overflowY: 'auto',
                    padding: !isMobile ? '2em' : ".5em",
                    paddingTop: !isMobile ? '5dvh' : ".5em",
                    paddingBottom: !isMobile ? '5dvh' : ".5em",
                    boxSizing: 'border-box',
                    outline: 'none',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    backgroundColor: '#12121299',
                }}
            >

                {!isMobile &&
                    <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'} paddingBottom={"1em"}>
                        <Box component="picture">
                            <source srcSet={`${heroDefinition.icon}.webp`} type="image/webp" />
                            <Box
                                component="img"
                                src={`${heroDefinition.icon}.png`}
                                alt={heroDefinition.name}
                                width="100px"
                                loading="lazy"
                                borderRadius={20}
                            />
                        </Box>
                        <Typography
                            fontFamily={"DecoturaICG"}
                            fontSize={"2em"}
                            sx={{ paddingLeft: "1em" }}
                        >
                            {heroDefinition.name}
                        </Typography>
                    </Box>
                }


                {
                    sortedHeroPatchnotes.general.map((item: Patchnote, index: number) => (
                        <List key={index} disablePadding>
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {
                                        item.change === "buff" ?
                                            <AddIcon fontSize='large' sx={{ color: "green" }} /> : item.change === "nerf" ?
                                                <RemoveIcon fontSize='large' sx={{ color: "red" }} /> : <CircleIcon fontSize='small' sx={{ ml: 0.9 }} />
                                    }
                                </ListItemIcon>
                                <ListItemText sx={{ wordWrap: "break-word" }} slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: !isMobile ? '.6em' : '.4em', color: "white" } } }} primary={item.description} />
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
                        const iconBase =
                            WEAPON_ITEM_DEFINITIONS[item]?.icon ||
                            VITALITY_ITEM_DEFINITIONS[item]?.icon ||
                            SPIRIT_ITEM_DEFINITIONS[item]?.icon;
                        return (

                            <>
                                <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'} key={item} pt={"1em"}>
                                    <Box component="picture" borderRadius={10}>
                                        <source srcSet={`${iconBase}.webp`} type="image/webp" />
                                        <Box
                                            component="img"
                                            src={`${iconBase}.png`}
                                            alt={item}
                                            width={!isMobile ? "70px" : "50px"}
                                            loading="lazy"
                                            borderRadius={2}
                                        />
                                    </Box>
                                    <Typography
                                        fontFamily={"DecoturaICG"}
                                        fontSize={"1em"}
                                        sx={{ paddingLeft: "1em" }}
                                    >
                                        {item}
                                    </Typography>
                                </Box >
                                {
                                    sortedItemPatchnotes[item].length > 0 &&
                                    <List disablePadding>
                                        {
                                            sortedItemPatchnotes[item].map((item: Patchnote, index: number) => (

                                                <ListItem key={index}>
                                                    <ListItemIcon>
                                                        {
                                                            item.change === "buff" ?
                                                                <AddIcon fontSize='large' sx={{ color: "green" }} /> : item.change === "nerf" ?
                                                                    <RemoveIcon fontSize='large' sx={{ color: "red" }} /> : <CircleIcon fontSize='small' sx={{ ml: 0.9 }} />
                                                        }
                                                    </ListItemIcon>
                                                    <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: !isMobile ? '.6em' : '.4em', color: "white" } } }} primary={item.description} />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                }

                            </>
                        )
                    }
                    )
                }
            </Box>
            {
                !isMobile &&
                <Box
                    className="hero-section-right"
                    sx={{
                        width: '50%',
                        position: 'sticky',
                        top: 0,
                        height: '100dvh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {nameElement}
                </Box>
            }

        </Box >
    );
}


export function AbilitySection({ ability, ability_icon }: { ability: Patchnote[], ability_icon: string }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Box>
            {ability.length != 0 &&
                <>
                    <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'} pt={"1em"}>
                        <Box component="picture" display={'flex'} alignItems={'center'}>
                            <source srcSet={`${ability_icon}.webp`} type="image/webp" />
                            <Box
                                component="img"
                                src={`${ability_icon}.png`}
                                alt={ability[0].ability.name}
                                width={!isMobile ? "70px" : "50px"}
                                loading="lazy"
                            />
                        </Box>
                        <Typography
                            fontFamily={"DecoturaICG"}
                            fontSize={"1em"}
                            sx={{ paddingLeft: "0.5em" }}
                        >
                            {ability[0].ability.name}
                        </Typography>
                    </Box>
                    <List disablePadding>
                        {
                            ability.map((item: Patchnote, index: number) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        {
                                            item.change === "buff" ?
                                                <AddIcon fontSize='large' sx={{ color: "green" }} /> : item.change === "nerf" ?
                                                    <RemoveIcon fontSize='large' sx={{ color: "red" }} /> : <CircleIcon fontSize='small' sx={{ ml: 0.9 }} />
                                        }
                                    </ListItemIcon>
                                    <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: !isMobile ? '.6em' : '.4em', color: "white" } } }} primary={item.description} />
                                </ListItem>

                            ))
                        }
                    </List>
                </>

            }

        </Box>
    )
}