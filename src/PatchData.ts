export interface PatchData {
    date: string;
    characters: Record<string, patch[]>;
    items: Record<string, patch[]>;
    general: Record<string, patch[]>;
    bugfixes: Record<string, patch[]>;
}

export interface patch {
    description: string,
    change: "buff" | "nerf" | "change"
}