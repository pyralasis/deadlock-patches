import { Box, Step, StepButton, Stepper, Tooltip } from "@mui/material";
import { SectionStepIcon } from "./SectionStepIcon";
import { useRef, useEffect } from "react";
import { SectionData } from "../SectionTypes";

interface SectionStepperProps {
    sectionData: SectionData[];
    activeSection: string;
    date: string
}

export function SectionStepper({ sectionData, activeSection, date }: SectionStepperProps) {
    const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const stepperContainerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const container = stepperContainerRef?.current;
        const target = stepRefs.current?.[activeSection];
        if (container && target) {
            const containerHeight = container.getBoundingClientRect().height;
            const targetTop = target.offsetTop;
            const targetHeight = target.getBoundingClientRect().height;
            const scrollTo = targetTop - (containerHeight / 2) + (targetHeight / 2);
            container.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    }, [activeSection, stepperContainerRef, stepRefs]);

    return (
        <Box ref={stepperContainerRef} sx={{
            overflowY: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
        >
            <Stepper
                orientation="vertical"
                nonLinear
                activeStep={sectionData.findIndex((section) => section.id === activeSection)}
                connector={null}
            >
                {sectionData.map((section, index) => {
                    if (section.patches[date] && section.patches[date].length !== 0)
                        if (section.type == "hero")
                            return (
                                <Step key={section.id}>
                                    <div ref={(el) => { if (stepRefs.current) stepRefs.current[section.id] = el; }}>
                                        <Tooltip title={section.definition.name}>
                                            <StepButton
                                                icon={
                                                    <SectionStepIcon
                                                        name={section.definition.name}
                                                        iconUrl={section.definition.icon}
                                                        active={index === sectionData.findIndex(s => s.id === activeSection)}
                                                        completed={false}
                                                        icon={undefined}
                                                    />
                                                }
                                                onClick={() => {
                                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                sx={{ padding: 0, minWidth: 'auto' }}
                                            />
                                        </Tooltip>

                                    </div>
                                </Step>
                            );
                        else
                            return (
                                <Step key={section.id}>
                                    <div ref={(el) => { if (stepRefs.current) stepRefs.current[section.id] = el; }}>
                                        <Tooltip title={section.definition.name}>
                                            <StepButton
                                                icon={
                                                    <SectionStepIcon
                                                        name={section.definition.name}
                                                        iconUrl={section.definition.icon}
                                                        active={index === sectionData.findIndex(s => s.id === activeSection)}
                                                        completed={false}
                                                        icon={undefined}
                                                    />
                                                }
                                                onClick={() => {
                                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                sx={{ padding: 0, minWidth: 'auto' }}
                                            />
                                        </Tooltip>
                                    </div>
                                </Step>
                            );

                    return null;
                })}
            </Stepper>
        </Box>

    );
}