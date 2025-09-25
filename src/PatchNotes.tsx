import { useMediaQuery, useTheme } from '@mui/material';
import './App.css'
import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, ITEM_DEFINITIONS, SectionDefinition } from './SectionDefinitions';
import { useLocation } from 'react-router-dom';

const preloadHeroImages = (definitions: SectionDefinition[]) => {
    definitions.forEach((definition: SectionDefinition) => {
        const img1 = new Image();
        img1.src = definition.background.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        const img2 = new Image();
        img2.src = definition.icon;
        const img3 = new Image();
        img3.src = definition.nameplate;
    });
};

const preloadGeneralImages = (definitions: SectionDefinition[]) => {
    definitions.forEach((definition: SectionDefinition) => {
        const img1 = new Image();
        img1.src = definition.background.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        const img2 = new Image();
        img2.src = definition.icon;
    });
};

function PatchNotes() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const date = query.get("date")


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    preloadHeroImages(Object.values(HERO_DEFINITIONS));
    preloadGeneralImages(Object.values(GENERAL_DEFINITIONS));
    preloadGeneralImages(Object.values(ITEM_DEFINITIONS));

    if (!isMobile)
        return (
            <DesktopLayout date={date || ""} />
        );
    else
        return (
            <MobileLayout date={date || ""} />
        );
}

export default PatchNotes
