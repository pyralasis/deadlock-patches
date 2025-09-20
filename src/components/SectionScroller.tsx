import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { Section } from "./HeroSection";
import { SectionData } from "../SectionTypes";


interface SectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
    setActiveSectionId: React.Dispatch<React.SetStateAction<string>>;
}

export function SectionScroller({ sectionData, containerRef, activeSection, setActiveSectionId }: SectionScrollerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;

    const handleChangeSection = (sectionId: string) => {
        setActiveSectionId(sectionId);
        const section = containerRef.current?.querySelector(`section#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!isMobile)
        return (
            <Box
                className="container hero-section-container"
                ref={containerRef}
                sx={{
                    backgroundImage: activeSectionBackground,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    height: '100vh',
                    overflowY: 'auto',
                    scrollSnapType: 'y mandatory',
                }}
            >
                {sectionData.map((section) => (
                    section.patches["2025-09-04"] && section.patches["2025-09-04"].length !== 0 ? (
                        <Section
                            key={section.id}
                            id={section.id}
                            type={section.type}
                            heroDefinition={section.definition}
                            heroData={section.patches["2025-09-04"] ?? []}
                        />
                    ) : null
                ))}
            </Box>
        );
    else {
        return (
            <Box height={"100%"}>
                <Box
                    className="container hero-section-container"
                    ref={containerRef}
                    sx={{
                        backgroundImage: activeSectionBackground,
                        backgroundRepeat: 'no-repeat',
                        height: 'calc(100% - 50px)',
                        overflowY: "hidden",
                        scrollSnapType: 'y mandatory',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'right'
                    }}
                >
                    {sectionData.map((section) => (
                        section.patches["2025-09-04"] && section.patches["2025-09-04"].length !== 0 ? (
                            <Section
                                key={section.id}
                                id={section.id}
                                type={section.type}
                                heroDefinition={section.definition}
                                heroData={section.patches["2025-09-04"] ?? []}
                            />
                        ) : null
                    ))}
                </Box>
                <Box width={"100%"} height={"50px"} display={"flex"} flexDirection={"row"}>
                    {
                        sectionData.findIndex(section => (section.id === activeSection)) - 1 > 0 ?
                            <Button
                                onClick={() => handleChangeSection(sectionData[sectionData.findIndex(section => (section.id === activeSection)) - 1].id)}
                                sx={{ width: "100%" }}
                            >
                                <Box
                                    component={"img"}
                                    src={sectionData[sectionData.findIndex(section => (section.id === activeSection)) - 1].definition.icon}
                                    height={"50px"}
                                />
                            </Button> : null
                    }
                    {
                        sectionData.findIndex(section => (section.id === activeSection)) + 1 < sectionData.length ?
                            <Button
                                onClick={() => handleChangeSection(sectionData[sectionData.findIndex(section => (section.id === activeSection)) + 1].id)}
                                sx={{ width: "100%" }}
                            >
                                <Box
                                    component={"img"}
                                    src={sectionData[sectionData.findIndex(section => (section.id === activeSection)) + 1].definition.icon}
                                    height={"50px"}
                                />
                            </Button> : null
                    }

                </Box>
            </Box >
        );
    }
}