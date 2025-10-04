import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PatchSection } from "./PatchSection";
import { SectionData } from "../SectionTypes";



interface PatchSectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
    date: string;
}

export function PatchSectionScroller({ sectionData, containerRef, activeSection, date }: PatchSectionScrollerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;

    return (
        <>
            <Box
                className="container hero-section-container"
                ref={containerRef}

                sx={{
                    backgroundImage: !isMobile ? `image-set(url(${activeSectionBackground}.webp), url(${activeSectionBackground}.png))` : "none",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    height: "100%",
                    overflowY: !isMobile ? 'auto' : "hidden",
                    scrollSnapType: 'y mandatory',
                }}
            >
                {sectionData.map((section) => (
                    section.patches[date] && section.patches[date].length !== 0 ? (
                        <PatchSection
                            key={section.id}
                            id={section.id}
                            type={section.type}
                            heroDefinition={section.definition}
                            heroData={section.patches[date] ?? []}
                        />
                    ) : null
                ))}
            </Box >
        </>
    );
}