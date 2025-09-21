export interface PatchData {
    date: string;
    characters: Record<string, patch[]>;
    items: Record<string, string[]>;
    general: Record<string, string[]>;
    bugfixes: Record<string, string[]>;
}

export interface patch {
    description: string,
    change: "buff" | "nerf" | "change"
}