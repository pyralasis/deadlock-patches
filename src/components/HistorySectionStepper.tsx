import { Box, Step, StepButton, Stepper, Tooltip } from "@mui/material";
import { SectionStepIcon } from "./SectionStepIcon";
import { useRef, useEffect } from "react";
import { SectionData } from "../SectionTypes";

interface SectionStepperProps {
    sectionData: SectionData[];
    activeSection: string;
    onStepperClick: CallableFunction;
}

export function HistorySectionStepper({ sectionData, activeSection, onStepperClick }: SectionStepperProps) {
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
            maxHeight: "100dvh"
        }}
        >
            <Stepper
                orientation="vertical"
                nonLinear
                activeStep={sectionData.findIndex((section) => section.id === activeSection)}
                connector={null}
                sx={{
                    maxHeight: "100dvh"
                }}
            >
                {sectionData.map((section, index) => {
                    if (section.type == "hero")
                        return (
                            <Step key={section.id} >
                                <div ref={(el) => { if (stepRefs.current) stepRefs.current[section.id] = el; }} >
                                    <Tooltip title={section.definition.name}>
                                        <StepButton

                                            icon={
                                                <SectionStepIcon
                                                    name={section.definition.name}
                                                    iconUrl={section.definition.icon}
                                                    active={index === sectionData.findIndex(s => s.id === activeSection)}
                                                    completed={false}
                                                    icon={undefined}
                                                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}

                                                />
                                            }
                                            onClick={() => onStepperClick(section.id)}
                                            sx={{

                                                '& .MuiStepLabel-iconContainer': {
                                                    width: "100%",
                                                },
                                                '& .MuiStepLabel-root': {
                                                    padding: 0
                                                },
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "100%",
                                                height: "100%"
                                            }}
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
                                            sx={{
                                                '& .MuiStepLabel-iconContainer': {
                                                    width: "100%",
                                                },
                                                '& .MuiStepLabel-root': {
                                                    padding: 0
                                                }
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            </Step>
                        );

                    return null;
                })}
            </Stepper>
        </Box >

    );
}