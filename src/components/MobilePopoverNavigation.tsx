// import { Button, Box, Popover } from "@mui/material"
// import { SectionData } from "../SectionTypes"
// import { useState } from "react";

// interface MobilePopoverNavigationProps {
//     sectionData: SectionData[];
//     activeSectionId: string;
// }

// export function MobilePopoverNavigation({ sectionData, activeSectionId }: MobilePopoverNavigationProps) {
//     const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;
//     const activeSectionIcon = sectionData.find((section) => section.id === activeSectionId)?.definition.icon;
//     const activeSectionNameplate = sectionData.find((section) => section.id === activeSectionId)?.definition.nameplate;
//     const activeSectionType = sectionData.find((section) => section.id === activeSectionId)?.type;
//     const activeSectionName = sectionData.find((section) => section.id === activeSectionId)?.definition.name;

//     return (
//         <>
//             <Button sx={{ width: "100px" }} onClick={handleClick} >
//                 <Box component={"img"} src={`${activeSectionIcon}.webp`} height={"100%"}></Box>
//             </Button>
//             <Popover
//                 id={id}
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}

//             >
//                 <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
//                     {sectionData.map((section, _index) => (

//                         section.patches[date] && section.patches[date].length !== 0 ? (
//                             <Button onClick={() => handleChangeSection(section.id)}>
//                                 <Box component={"img"} src={`${section.definition.icon}.webp`} height={"80px"}></Box>
//                             </Button>
//                         ) : null
//                     ))}
//                 </Box>
//             </Popover></>)
// }