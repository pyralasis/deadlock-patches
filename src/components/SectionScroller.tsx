import { Box, unstable_createBreakpoints } from "@mui/material";
import { SectionDefinition } from "../SectionDefinitions";
import { Section } from "./HeroSection";
import { useEffect } from "react";
import { SectionData } from "../SectionTypes";


interface SectionScrollerProps {
    sectionData: SectionData[];
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string;
}

export function SectionScroller({ sectionData, containerRef, activeSection }: SectionScrollerProps) {
    const activeSectionBackground = sectionData.find((section) => section.id === activeSection)?.definition.background;
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
}

// (Removed duplicate code after the valid SectionScroller export)
// (Removed stray closing brace at end of file)