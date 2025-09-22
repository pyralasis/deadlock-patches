import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { Section } from "./HeroSection";
import { SectionData } from "../SectionTypes";



interface SectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
    setActiveSectionId: React.Dispatch<React.SetStateAction<string>>;
    date: string
}

export function SectionScroller({ sectionData, containerRef, activeSection, setActiveSectionId, date }: SectionScrollerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;
    console.log(sectionData)

    const handleChangeSection = (sectionId: string) => {
        setActiveSectionId(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
                    section.patches[date] && section.patches[date].length !== 0 ? (
                        <Section
                            key={section.id}
                            id={section.id}
                            type={section.type}
                            heroDefinition={section.definition}
                            heroData={section.patches[date] ?? []}
                        />
                    ) : null
                ))}

            </Box >

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
                        section.patches[date] && section.patches[date].length !== 0 ? (
                            <Section
                                key={section.id}
                                id={section.id}
                                type={section.type}
                                heroDefinition={section.definition}
                                heroData={section.patches[date] ?? []}
                            />
                        ) : null
                    ))}
                </Box>
                <Box width={"100%"} height={"50px"} display={"flex"} flexDirection={"row"}>
                    {
                        (() => {
                            const currentIdx = sectionData.findIndex(section => section.id === activeSection);
                            let prevIdx = currentIdx - 1;
                            while (prevIdx >= 0) {
                                const s = sectionData[prevIdx];

                                if (s.patches[date] && s.patches[date].length !== 0) {

                                    return (
                                        <Button
                                            key={s.id}
                                            onClick={() => handleChangeSection(s.id)}
                                            sx={{ width: "100%" }}
                                        >
                                            <Box
                                                component={"img"}
                                                src={s.definition.icon}
                                                height={"50px"}
                                            />
                                        </Button>
                                    );
                                }
                                prevIdx--;
                            }
                            return null;
                        })()
                    }
                    {
                        (() => {
                            const currentIdx = sectionData.findIndex(section => section.id === activeSection);
                            let nextIdx = currentIdx + 1;
                            while (nextIdx < sectionData.length) {
                                const s = sectionData[nextIdx];
                                if (s.patches[date] && s.patches[date].length !== 0) {
                                    return (
                                        <Button
                                            key={s.id}
                                            onClick={() => handleChangeSection(s.id)}
                                            sx={{ width: "100%" }}
                                        >
                                            <Box
                                                component={"img"}
                                                src={s.definition.icon}
                                                height={"50px"}
                                            />
                                        </Button>
                                    );
                                }
                                nextIdx++;
                            }
                            return null;
                        })()
                    }
                </Box>
            </Box >
        );
    }
}