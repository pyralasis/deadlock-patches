import Box from '@mui/material/Box';
import { ListItemIcon, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import { HERO_DEFINITIONS, SectionDefinition } from '../SectionDefinitions';
import { Patchnote } from '../PatchData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircleIcon from '@mui/icons-material/Circle';
import { sortHeroPatchnotes } from '../utils';
import { SectionData } from '../SectionTypes';
import { useNavigate } from 'react-router-dom';

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
    sectionData: SectionData[];
    hero: string | "";
}

export function HistorySection({ id, type, sectionData, hero }: SectionProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const heroDefinition: SectionDefinition = HERO_DEFINITIONS[hero];
    const navigate = useNavigate();


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
                    paddingLeft: !isMobile ? '2em' : ".5em",
                    paddingRight: !isMobile ? '2em' : ".5em",
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
                        if (section.id == hero) {
                            return (Object.keys(section.patches).map((date) => {
                                const sortedPatches = sortHeroPatchnotes(section.patches[date])
                                if (section.patches[date].length != 0)
                                    return (
                                        <>
                                            <Button size='large' onClick={() => navigate(`/patch-notes?date=${date}&section=${hero}`)}>
                                                <Typography
                                                    fontFamily={"DecoturaICG"}
                                                    fontSize={"5em"}

                                                >
                                                    {date}
                                                </Typography>
                                            </Button>

                                            {

                                                sortedPatches.general.map((item: Patchnote, index: number) => (
                                                    <List key={index}>
                                                        <ListItem key={index}>
                                                            <ListItemIcon>
                                                                {
                                                                    item.change === "buff" ?
                                                                        <AddIcon sx={{ color: "green" }} /> : item.change === "nerf" ?
                                                                            <RemoveIcon sx={{ color: "red" }} /> : <CircleIcon />
                                                                }
                                                            </ListItemIcon>
                                                            <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: !isMobile ? '.6em' : '.5em', color: "white" } } }} primary={item.description} />
                                                        </ListItem>
                                                    </List>
                                                ))
                                            }
                                            < AbilitySection ability={sortedPatches.ability1} ability_icon={heroDefinition.ability1} />
                                            <AbilitySection ability={sortedPatches.ability2} ability_icon={heroDefinition.ability2} />
                                            <AbilitySection ability={sortedPatches.ability3} ability_icon={heroDefinition.ability3} />
                                            <AbilitySection ability={sortedPatches.ability4} ability_icon={heroDefinition.ability4} />
                                        </>
                                    )
                            }
                            )
                            )
                        }
                    })
                }


            </Box>
            {!isMobile &&
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

        </Box>
    );
}


export function AbilitySection({ ability, ability_icon }: { ability: Patchnote[], ability_icon: string }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Box>
            {ability.length != 0 &&
                <Box width={"100%"} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Box component="picture">
                        <source srcSet={`${ability_icon}.webp`} type="image/webp" />
                        <Box
                            component="img"
                            src={`${ability_icon}.png`}
                            alt={ability[0].ability.name}
                            width="100px"
                            loading="lazy"
                        />
                    </Box>
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
                    <List key={index}>
                        <ListItem key={index}>
                            <ListItemIcon>
                                {
                                    item.change === "buff" ?
                                        <AddIcon sx={{ color: "green" }} /> : item.change === "nerf" ?
                                            <RemoveIcon sx={{ color: "red" }} /> : <CircleIcon />
                                }
                            </ListItemIcon>
                            <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: !isMobile ? '.6em' : '.5em', color: "white" } } }} primary={item.description} />
                        </ListItem>
                    </List>
                ))
            }
        </Box>
    )
}