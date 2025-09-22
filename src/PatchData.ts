export interface PatchData {
    date: string;
    characters: Record<string, Patchnote[]>;
    items: Record<string, Patchnote[]>;
    general: Record<string, Patchnote[]>;
    bugfixes: Record<string, Patchnote[]>;
}

export interface Patchnote {
    description: string,
    change: "buff" | "nerf" | "neutral",
    type: string,
    ability: {
        slot: number,
        name: string
    }

}