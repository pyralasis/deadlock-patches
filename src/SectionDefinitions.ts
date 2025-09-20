export class SectionDefinition {
    background: string;
    name: string;
    nameplate: string;
    icon: string;

    constructor(name: string, background: string, nameplate: string, icon: string,) {
        this.background = background;
        this.name = name;
        this.nameplate = nameplate;
        this.icon = icon
    }
}

export const HERO_DEFINITIONS: Record<string, SectionDefinition> = {
    "Abrams": new SectionDefinition("Abrams", 'url("/deadlock-patches/backgrounds/abrams.png")', "/deadlock-patches/nameplates/abrams.svg", "/deadlock-patches/hero_icons/abrams.png"),
    "Bebop": new SectionDefinition("Bebop", 'url("/deadlock-patches/backgrounds/bebop.png")', "/deadlock-patches/nameplates/bebop.svg", "/deadlock-patches/hero_icons/bebop.png"),
    "Billy": new SectionDefinition("Billy", 'url("/deadlock-patches/backgrounds/billy.png")', "/deadlock-patches/nameplates/billy.svg", "/deadlock-patches/hero_icons/billy.png"),
    "Calico": new SectionDefinition("Calico", 'url("/deadlock-patches/backgrounds/calico.png")', "/deadlock-patches/nameplates/calico.svg", "/deadlock-patches/hero_icons/calico.png"),
    "Doorman": new SectionDefinition("The Doorman", 'url("/deadlock-patches/backgrounds/doorman.png")', "/deadlock-patches/nameplates/doorman.svg", "/deadlock-patches/hero_icons/doorman.png"),
    "Drifter": new SectionDefinition("Drifter", 'url("/deadlock-patches/backgrounds/drifter.png")', "/deadlock-patches/nameplates/drifter.svg", "/deadlock-patches/hero_icons/drifter.png"),
    "Dynamo": new SectionDefinition("Dynamo", 'url("/deadlock-patches/backgrounds/dynamo.png")', "/deadlock-patches/nameplates/dynamo.svg", "/deadlock-patches/hero_icons/dynamo.png"),
    "Grey Talon": new SectionDefinition("Grey Talon", 'url("/deadlock-patches/backgrounds/grey_talon.png")', "/deadlock-patches/nameplates/grey_talon.svg", "/deadlock-patches/hero_icons/grey_talon.png"),
    "Haze": new SectionDefinition("Haze", 'url("/deadlock-patches/backgrounds/haze.png")', "/deadlock-patches/nameplates/haze.svg", "/deadlock-patches/hero_icons/haze.png"),
    "Holliday": new SectionDefinition("Holliday", 'url("/deadlock-patches/backgrounds/holliday.png")', "/deadlock-patches/nameplates/holliday.svg", "/deadlock-patches/hero_icons/holliday.png"),
    "Infernus": new SectionDefinition("Infernus", 'url("/deadlock-patches/backgrounds/infernus.png")', "/deadlock-patches/nameplates/infernus.svg", "/deadlock-patches/hero_icons/infernus.png"),
    "Ivy": new SectionDefinition("Ivy", 'url("/deadlock-patches/backgrounds/ivy.png")', "/deadlock-patches/nameplates/ivy.svg", "/deadlock-patches/hero_icons/ivy.png"),
    "Kelvin": new SectionDefinition("Kelvin", 'url("/deadlock-patches/backgrounds/kelvin.png")', "/deadlock-patches/nameplates/kelvin.svg", "/deadlock-patches/hero_icons/kelvin.png"),
    "Lady Geist": new SectionDefinition("Lady Geist", 'url("/deadlock-patches/backgrounds/lady_geist.png")', "/deadlock-patches/nameplates/lady_geist.svg", "/deadlock-patches/hero_icons/lady_geist.png"),
    "Lash": new SectionDefinition("Lash", 'url("/deadlock-patches/backgrounds/lash.png")', "/deadlock-patches/nameplates/lash.svg", "/deadlock-patches/hero_icons/lash.png"),
    "McGinnis": new SectionDefinition("McGinnis", 'url("/deadlock-patches/backgrounds/mcginnis.png")', "/deadlock-patches/nameplates/mcginnis.svg", "/deadlock-patches/hero_icons/mcginnis.png"),
    "Mina": new SectionDefinition("Mina", 'url("/deadlock-patches/backgrounds/mina.png")', "/deadlock-patches/nameplates/mina.svg", "/deadlock-patches/hero_icons/mina.png"),
    "Mirage": new SectionDefinition("Mirage", 'url("/deadlock-patches/backgrounds/mirage.png")', "/deadlock-patches/nameplates/mirage.svg", "/deadlock-patches/hero_icons/mirage.png"),
    "Mo & Krill": new SectionDefinition("Mo & Krill", 'url("/deadlock-patches/backgrounds/mo_krill.png")', "/deadlock-patches/nameplates/mo_krill.svg", "/deadlock-patches/hero_icons/mo_krill.png"),
    "Paige": new SectionDefinition("Paige", 'url("/deadlock-patches/backgrounds/paige.png")', "/deadlock-patches/nameplates/paige.svg", "/deadlock-patches/hero_icons/paige.png"),
    "Paradox": new SectionDefinition("Paradox", 'url("/deadlock-patches/backgrounds/paradox.png")', "/deadlock-patches/nameplates/paradox.svg", "/deadlock-patches/hero_icons/paradox.png"),
    "Pocket": new SectionDefinition("Pocket", 'url("/deadlock-patches/backgrounds/pocket.png")', "/deadlock-patches/nameplates/pocket.svg", "/deadlock-patches/hero_icons/pocket.png"),
    "Seven": new SectionDefinition("Seven", 'url("/deadlock-patches/backgrounds/seven.png")', "/deadlock-patches/nameplates/seven.svg", "/deadlock-patches/hero_icons/seven.png"),
    "Shiv": new SectionDefinition("Shiv", 'url("/deadlock-patches/backgrounds/shiv.png")', "/deadlock-patches/nameplates/shiv.svg", "/deadlock-patches/hero_icons/shiv.png"),
    "Sinclair": new SectionDefinition("Sinclair", 'url("/deadlock-patches/backgrounds/sinclair.png")', "/deadlock-patches/nameplates/sinclair.svg", "/deadlock-patches/hero_icons/sinclair.png"),
    "Victor": new SectionDefinition("Victor", 'url("/deadlock-patches/backgrounds/victor.png")', "/deadlock-patches/nameplates/victor.svg", "/deadlock-patches/hero_icons/victor.png"),
    "Vindicta": new SectionDefinition("Vindicta", 'url("/deadlock-patches/backgrounds/vindicta.png")', "/deadlock-patches/nameplates/vindicta.svg", "/deadlock-patches/hero_icons/vindicta.png"),
    "Viscous": new SectionDefinition("Viscous", 'url("/deadlock-patches/backgrounds/viscous.png")', "/deadlock-patches/nameplates/viscous.svg", "/deadlock-patches/hero_icons/viscous.png"),
    "Vyper": new SectionDefinition("Vyper", 'url("/deadlock-patches/backgrounds/vyper.png")', "/deadlock-patches/nameplates/vyper.svg", "/deadlock-patches/hero_icons/vyper.png"),
    "Warden": new SectionDefinition("Warden", 'url("/deadlock-patches/backgrounds/warden.png")', "/deadlock-patches/nameplates/warden.svg", "/deadlock-patches/hero_icons/warden.png"),
    "Wraith": new SectionDefinition("Wraith", 'url("/backgrounds/wraith.png")', "/deadlock-patches/nameplates/wraith.svg", "/deadlock-patches/hero_icons/wraith.png"),
    "Yamato": new SectionDefinition("Yamato", 'url("/deadlock-patches/backgrounds/yamato.png")', "/deadlock-patches/nameplates/yamato.svg", "/deadlock-patches/hero_icons/yamato.png"),
};


export const GENERAL_DEFINITIONS: Record<string, SectionDefinition> = {
    "Map": new SectionDefinition("Map", 'url("/deadlock-patches/backgrounds/generic.png")', "", "/deadlock-patcheshero_icons/deadlock_logo.png"),
    "Gameplay": new SectionDefinition("Gameplay", 'url("/deadlock-patches/backgrounds/generic.png")', "", "/deadlock-patches/hero_icons/deadlock_logo.png"),
    "Bugfixes": new SectionDefinition("Bugfixes", 'url("/deadlock-patches/backgrounds/generic.png")', "", "/deadlock-patches/hero_icons/deadlock_logo.png")
}

export const ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Weapon": new SectionDefinition("Weapon", 'url("/deadlock-patches/backgrounds/weapon.png")', "", "/deadlock-patches/hero_icons/deadlock_logo.png"),
    "Vitality": new SectionDefinition("Vitality", 'url("/deadlock-patches/backgrounds/vitality.png")', "", "/deadlock-patches/hero_icons/deadlock_logo.png"),
    "Spirit": new SectionDefinition("Spirit", 'url("/deadlock-patches/backgrounds/spirit.png")', "", "/deadlock-patches/hero_icons/deadlock_logo.png")
}