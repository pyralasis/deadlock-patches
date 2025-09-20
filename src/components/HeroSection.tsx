import React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SectionDefinition } from '../SectionDefinitions';


interface SectionProps {
    id: string;
    type: string;
    heroDefinition: SectionDefinition;
    heroData: any[];
}

export function Section({ id, type, heroDefinition, heroData }: SectionProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
    else {
        // Ref for the scrollable patch notes box
        const patchNotesRef = React.useRef<HTMLDivElement>(null);

        // Wheel and touch event handler to allow parent scroll when at top/bottom
        React.useEffect(() => {
            const el = patchNotesRef.current;
            if (!el) return;

            // Wheel event (desktop)
            const onWheel = (e: WheelEvent) => {
                const { scrollTop, scrollHeight, clientHeight } = el;
                const atTop = scrollTop === 0;
                const atBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 1;
                if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                    // Let event bubble to parent for section snap
                    return;
                } else {
                    // Prevent parent scroll, keep inside patch notes
                    e.stopPropagation();
                }
            };

            // Touch event (mobile)
            let lastY = 0;
            const onTouchStart = (e: TouchEvent) => {
                if (e.touches.length === 1) {
                    lastY = e.touches[0].clientY;
                }
            };
            const onTouchMove = (e: TouchEvent) => {
                if (e.touches.length !== 1) return;
                const currentY = e.touches[0].clientY;
                const deltaY = lastY - currentY;
                const { scrollTop, scrollHeight, clientHeight } = el;
                const atTop = scrollTop === 0;
                const atBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 1;
                // Find the parent scroll container
                const parent = el.closest('.hero-section-container');
                if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
                    // Programmatically scroll the parent container
                    if (parent) {
                        // Scroll parent by the same delta
                        parent.scrollBy({
                            top: deltaY * 10,
                            behavior: 'auto',
                        });
                    }
                    // Prevent the patch notes from scrolling further
                    e.preventDefault();
                    e.stopPropagation();
                } else {
                    // Prevent parent scroll, keep inside patch notes
                    e.preventDefault();
                    e.stopPropagation();
                }
                lastY = currentY;
            };

            el.addEventListener('wheel', onWheel, { passive: false });
            el.addEventListener('touchstart', onTouchStart, { passive: true });
            el.addEventListener('touchmove', onTouchMove, { passive: false });
            return () => {
                el.removeEventListener('wheel', onWheel);
                el.removeEventListener('touchstart', onTouchStart);
                el.removeEventListener('touchmove', onTouchMove);
            };
        }, []);

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
                    ref={patchNotesRef}
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '100vh',
                        overflowY: 'auto',
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
            </Box>
        );
    }
}
