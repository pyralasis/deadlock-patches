import { Box, Button } from "@mui/material";
import { SectionData } from "../SectionTypes";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface MobilePatchNavigationProps {
    sectionData: SectionData[];
    activeSection: string;
    date: string;
    handleChangeSection: CallableFunction;
}

export function MobilePatchNavigation({ sectionData, activeSection, date, handleChangeSection }: MobilePatchNavigationProps) {
    return (<Box width={"100%"} height={"50px"} display={"flex"} flexDirection={"row"} borderTop={"1px solid #3c3c3c"}>
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
                                <ArrowUpwardIcon fontSize="large" />

                                {/* <Box
                                    component={"img"}
                                    src={`${s.definition.icon}.webp`}
                                    height={"50px"}
                                /> */}

                            </Button>
                        );
                    }
                    prevIdx--;
                }
                return null;
            })()
        }
        <Box border={".5px solid #3c3c3c"} />
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

                                {/* <Box
                                    component={"img"}
                                    src={`${s.definition.icon}.webp`}
                                    height={"50px"}
                                    padding={0}
                                /> */}
                                <ArrowDownwardIcon fontSize="large" />

                            </Button>

                        );
                    }
                    nextIdx++;
                }
                return null;
            })()
        }
    </Box >
    )
}