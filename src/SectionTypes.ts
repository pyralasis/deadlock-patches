import { Patchnote } from "./PatchData";
import { SectionDefinition } from "./SectionDefinitions";

// export type HeroSectionData = { id: string, definition: SectionDefinition, patches: Record<string, string[]> };
// export type GeneralSectionData = { id: string, definition: SectionDefinition, patches: Record<string, string[]> };
// export type ItemSectionData = { id: string, definition: SectionDefinition, patches: Record<string, string[]> };

// export type SectionDataUnion = HeroSectionData | GeneralSectionData | ItemSectionData;

export type SectionData = {
    id: string,
    type: string,
    definition: SectionDefinition,
    patches: Record<string, Patchnote[]>
};
