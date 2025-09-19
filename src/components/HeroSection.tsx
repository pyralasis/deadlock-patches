import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { SectionDefinition } from '../SectionDefinitions';


interface SectionProps {
    id: string;
    type: string;
    heroDefinition: SectionDefinition;
    heroData: any[];
}

export function Section({ id, type, heroDefinition, heroData }: SectionProps) {
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
                <List>
                    {heroData.map((item: any, index: number) => (
                        <ListItem key={index}>
                            <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: '24px', color: "white" } } }} primary={item} />
                        </ListItem>
                    ))}
                </List>
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
}
