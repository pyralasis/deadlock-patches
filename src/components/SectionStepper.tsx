import { Step, StepButton, Stepper } from "@mui/material";
import { HeroStepIcon } from "./HeroStepIcon";
import { useRef } from "react";


function SectionStepper(sectionData: any, activeSection: string) {
    const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});

    return (
        <Stepper
            orientation="vertical"
            nonLinear
            activeStep={sectionData.findIndex((section: any) => section.id === activeSection)}
            connector={null}
        >
            {sectionData.map((section: any, index: number) => {
                if (section.patches["2025-09-04"].length != 0)
                    return (
                        <Step key={section.id}>
                            <div ref={(el) => stepRefs.current[section.id] = el}>
                                <StepButton
                                    icon={
                                        <HeroStepIcon
                                            name={section.hero.name}
                                            iconUrl={section.hero.icon}
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
                            </div>

                        </Step>
                    );
            })}
        </Stepper>
    );
}