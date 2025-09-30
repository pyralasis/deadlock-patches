import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SectionData } from "../SectionTypes";
import { HistorySection } from "./HistorySection";



interface HistorySectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
}

export function HistorySectionScroller({ sectionData, containerRef, activeSection }: HistorySectionScrollerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;

    return (
        <>
            <Box
                className="container hero-section-container"
                ref={containerRef}

                sx={{
                    backgroundImage: !isMobile ? `url(${activeSectionBackground}.png), url(${activeSectionBackground}.webp)` : "none",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    height: "100%",
                    overflowY: !isMobile ? 'auto' : "hidden",
                    scrollSnapType: 'y mandatory',
                }}
            >
                {sectionData.map((section) => (
                    <HistorySection
                        key={section.id}
                        id={section.id}
                        type={section.type}
                        hero={section.id}
                        sectionData={sectionData}
                    />
                ))}
            </Box >
        </>
    );
}