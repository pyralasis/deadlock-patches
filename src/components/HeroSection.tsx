import Box from '@mui/material/Box';
import { HeroDefinition } from '../HeroDefinitions';
import { List, ListItem, ListItemText } from '@mui/material';

export function HeroSection({ id, heroDefinition, heroData }: { id: string, heroDefinition: HeroDefinition, heroData: any[] }) {
    return (
        <Box component="section" className="section" id={id}>
            <Box sx={{ width: "50%", paddingLeft: "2em", paddingRight: "10em" }}>
                <List>
                    {heroData.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: '24px' } } }} primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ width: "50%" }}>
                <Box component="img" src={heroDefinition.nameplate} alt={heroDefinition.name} sx={{ width: "75%" }}></Box>
            </Box>
        </Box >
    );
}
