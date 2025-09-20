import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Section } from "./HeroSection";
import { SectionData } from "../SectionTypes";


interface SectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
}

export function SectionScroller({ sectionData, containerRef, activeSection }: SectionScrollerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;
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
            <Box
                className="container hero-section-container"
                ref={containerRef}
                sx={{
                    backgroundImage: activeSectionBackground,
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    overflowY: 'auto',
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
        );
    }
}

// (Removed duplicate code after the valid SectionScroller export)
// (Removed stray closing brace at end of file)