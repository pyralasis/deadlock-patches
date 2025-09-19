


import React, { useRef, useEffect } from 'react';
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

    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const right = rightPanelRef.current;
        const left = leftPanelRef.current;
        if (!right || !left) return;
        const onWheel = (e: WheelEvent) => {
            if (left.scrollHeight > left.clientHeight) {
                const atTop = left.scrollTop === 0;
                const atBottom = Math.abs(left.scrollTop + left.clientHeight - left.scrollHeight) < 1;
                if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
                    e.preventDefault();
                    left.scrollBy({ top: e.deltaY * 3, behavior: 'smooth' });
                }
            }
        };
        right.addEventListener('wheel', onWheel, { passive: false });
        return () => right.removeEventListener('wheel', onWheel);
    }, []);

    // Focus left panel when section is snapped into view
    useEffect(() => {
        const section = sectionRef.current;
        const left = leftPanelRef.current;
        if (!section || !left) return;
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        left.focus();
                    }
                });
            },
            { threshold: [0.5] }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);


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
            ref={sectionRef}
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
                ref={leftPanelRef}
                tabIndex={-1}
                sx={{
                    width: '50%',
                    height: 'auto',
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    paddingLeft: '2em',
                    paddingRight: '10em',
                    boxSizing: 'border-box',
                    outline: 'none',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <List>
                    {heroData.map((item: any, index: number) => (
                        <ListItem key={index}>
                            <ListItemText slotProps={{ primary: { style: { fontFamily: 'RetailDemo', fontSize: '24px' } } }} primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                className="hero-section-right"
                ref={rightPanelRef}
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
