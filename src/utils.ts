import { PatchData, Patchnote } from "./PatchData";

export function getHeroPatches(hero: string, jsonData: PatchData[]): Record<string, Patchnote[]> {
    let heroPatches: Record<string, Patchnote[]> = {};
    jsonData.forEach(patch => {
        heroPatches[patch.date] = patch.characters[hero];
    });
    return heroPatches;
}

export function getGeneralPatches(category: string, jsonData: PatchData[]): Record<string, Patchnote[]> {
    let categoryPatches: Record<string, Patchnote[]> = {};
    jsonData.forEach(patch => {
        categoryPatches[patch.date] = patch.general[category];
    });
    return categoryPatches;
}

export function getItemPatches(category: string, jsonData: PatchData[]): Record<string, Patchnote[]> {
    let itemPatches: Record<string, Patchnote[]> = {};
    jsonData.forEach(patch => {
        itemPatches[patch.date] = patch.items[category];
    });
    return itemPatches;
}

export type SortedHeroPatchnotes = {
    general: Patchnote[];
    ability1: Patchnote[];
    ability2: Patchnote[];
    ability3: Patchnote[];
    ability4: Patchnote[];
}

export function sortHeroPatchnotes(patchnotes: Patchnote[]): SortedHeroPatchnotes {
    const sorted: SortedHeroPatchnotes = {
        general: [],
        ability1: [],
        ability2: [],
        ability3: [],
        ability4: [],
    };

    for (const patch of patchnotes) {
        if (patch.type === "general") {
            sorted.general.push(patch);
        } else if (patch.ability != null) {
            const slotKey = `ability${patch.ability.slot}` as keyof SortedHeroPatchnotes;
            sorted[slotKey].push(patch);
        }
    }

    return sorted;
}

export function sortItemPatchnotes(patchnotes: Patchnote[]): Record<string, Patchnote[]> {
    const sorted: Record<string, Patchnote[]> = {};
    for (const patch of patchnotes) {
        if (patch.type === "item" && patch.item_name !== undefined) {
            if (!sorted[patch.item_name]) {
                sorted[patch.item_name] = [];
            }
            sorted[patch.item_name].push(patch);
        }
    }
    return sorted;
}