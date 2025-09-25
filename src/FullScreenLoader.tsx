// src/FullScreenLoader.tsx
import { Box, CircularProgress, Typography } from '@mui/material';
// src/hooks/useAppPreloader.ts
import { useEffect, useState } from 'react';
import { HERO_DEFINITIONS } from './SectionDefinitions';

export const useAppPreloader = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                // Wait for fonts
                await document.fonts.ready;

                //get image lists
                for (const definition of Object.values(HERO_DEFINITIONS)) {
                    await preloadImage(`${definition.background}.webp`);
                    await preloadImage(`${definition.icon}.webp`);
                    await preloadImage(`${definition.nameplate}.svg`);
                    await preloadImage(`${definition.ability1}.svg`);
                    await preloadImage(`${definition.ability2}.svg`);
                    await preloadImage(`${definition.ability3}.svg`);
                    await preloadImage(`${definition.ability4}.svg`);
                }

                setReady(true);
            } catch (err) {
                console.error('Preload error:', err);
                setReady(true); // Fail gracefully
            }
        };

        loadAssets();
    }, []);

    return ready;
};

const preloadImage = (src: string): Promise<void> =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
    });


const FullScreenLoader = () => (
    <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#000', color: '#fff' }}
    >
        <Box textAlign="center">
            <CircularProgress color="inherit" />
            <Typography mt={2}>Loading...</Typography>
        </Box>
    </Box>
);

export default FullScreenLoader;
