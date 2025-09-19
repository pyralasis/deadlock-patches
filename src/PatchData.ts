export interface PatchData {
    date: string;
    characters: Record<string, string[]>;
    items: Record<string, string[]>;
    general: Record<string, string[]>;
    bugfixes: Record<string, string[]>;
}