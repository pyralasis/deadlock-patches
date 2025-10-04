import { Box, Button } from "@mui/material";
import { SectionData } from "../SectionTypes";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


interface MobileHistoryNavigationProps {
    sectionData: SectionData[];
    activeSection: string;
    handleChangeSection: CallableFunction;
}

export function MobileHistoryNavigation({ sectionData, activeSection, handleChangeSection }: MobileHistoryNavigationProps) {
    return (<Box width={"100%"} height={"50px"} display={"flex"} flexDirection={"row"} borderTop={"1px solid #3c3c3c"}>
        {
            (() => {
                const currentIdx = sectionData.findIndex(section => section.id === activeSection);
                let prevIdx = currentIdx - 1;
                while (prevIdx >= 0) {
                    const s = sectionData[prevIdx];

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
                            /> */}
                            <ArrowUpwardIcon fontSize="large" />

                        </Button>
                    );

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
                            /> */}
                            <ArrowDownwardIcon fontSize="large" />

                        </Button>
                    );
                    nextIdx++;
                }
                return null;
            })()
        }
    </Box>
    )
}