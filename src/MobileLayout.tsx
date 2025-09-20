import { Box, Button, Popover, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { SectionData } from "./SectionTypes";
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, ITEM_DEFINITIONS } from "./SectionDefinitions";
import { PatchData } from "./PatchData";
import { SectionScroller } from "./components/SectionScroller";

function getHeroPatches(hero: string, jsonData: PatchData[]): Record<string, string[]> {
    let heroPatches: Record<string, string[]> = {};
    jsonData.forEach(patch => {
        heroPatches[patch.date] = patch.characters[hero];
    });
    return heroPatches;
}

function getGeneralPatches(category: string, jsonData: PatchData[]): Record<string, string[]> {
    let categoryPatches: Record<string, string[]> = {};
    jsonData.forEach(patch => {
        categoryPatches[patch.date] = patch.general[category];
    });
    return categoryPatches;
}

function getItemPatches(category: string, jsonData: PatchData[]): Record<string, string[]> {
    let itemPatches: Record<string, string[]> = {};
    jsonData.forEach(patch => {
        itemPatches[patch.date] = patch.items[category];
    });
    return itemPatches;
}

export function MobileLayout() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeSection = (sectionId: string) => {
        setActiveSectionId(sectionId);
        handleClose();
    };

    const [sectionData, setSectionData] = useState<SectionData[]>([]);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSectionId, setActiveSectionId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/deadlock-patches/data/json/index.json`);
                const files = await res.json();

                const allData = await Promise.all(
                    files.map((file: string) =>
                        fetch(`/deadlock-patches/data/json/${file}`).then(res => res.json())
                    )
                );

                const tempSectionData: SectionData[] = [];

                Object.keys(GENERAL_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "general",
                        definition: GENERAL_DEFINITIONS[key],
                        patches: getGeneralPatches(key, allData)
                    });
                });

                Object.keys(HERO_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "hero",
                        definition: HERO_DEFINITIONS[key],
                        patches: getHeroPatches(key, allData)
                    });
                });

                Object.keys(ITEM_DEFINITIONS).forEach(key => {
                    tempSectionData.push({
                        id: key,
                        type: "item",
                        definition: ITEM_DEFINITIONS[key],
                        patches: getItemPatches(key, allData)
                    });
                });
                setSectionData(tempSectionData);

                if (tempSectionData.length > 0) {
                    setActiveSectionId(tempSectionData[0].id);
                }

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSectionId(entry.target.id);
                        }
                    });
                    console.log(sectionData);
                }, {
                    root: containerRef.current,
                    threshold: 0.5,
                });

                setTimeout(() => {
                    const sections = containerRef.current?.querySelectorAll('section') ?? [];
                    sections.forEach((section) => observer.observe(section));
                }, 0);

                return () => observer.disconnect();

            } catch (error) {
                console.error('Failed to fetch JSON data:', error);
            }
        };

        fetchData();
    }, []);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const activeSectionIcon = sectionData.find((section) => section.id === activeSectionId)?.definition.icon;
    const activeSectionNameplate = sectionData.find((section) => section.id === activeSectionId)?.definition.nameplate;
    const activeSectionType = sectionData.find((section) => section.id === activeSectionId)?.type;
    const activeSectionName = sectionData.find((section) => section.id === activeSectionId)?.definition.name;

    let nameElement;
    if (activeSectionType === "hero") {
        nameElement = (
            <Box component={"img"} src={activeSectionNameplate} height={"90%"} width={"calc(100% - 100px)"}></Box>
        );
    } else {
        nameElement = (
            <Typography fontFamily={"DecoturalCG"} fontSize={64}>{activeSectionName} </Typography>
        );
    }
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box id="top" display={"flex"} flexDirection={"row"} sx={{ height: "100px" }}>
                <Button sx={{ width: "100px" }} onClick={handleClick} >
                    <Box component={"img"} src={activeSectionIcon} height={"100%"}></Box>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}

                >
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                        {sectionData.map((section, _index) => (

                            section.patches["2025-09-04"] && section.patches["2025-09-04"].length !== 0 ? (
                                <Button onClick={() => handleChangeSection(section.id)}>
                                    <Box component={"img"} src={section.definition.icon} height={"80px"}></Box>
                                </Button>
                            ) : null
                        ))}
                    </Box>
                </Popover>
                {nameElement}

            </Box>
            <Box id="bottom"
                height={"calc(100vh - 100px)"}
                width={"100%"}
            >
                <SectionScroller sectionData={sectionData} containerRef={containerRef} activeSection={activeSectionId} />
            </Box>
        </Box>
    );
}