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
    "Abrams": new SectionDefinition("Abrams", 'url("/backgrounds/abrams.png")', "/nameplates/abrams.svg", "/hero_icons/abrams.png"),
    "Bebop": new SectionDefinition("Bebop", 'url("/backgrounds/bebop.png")', "/nameplates/bebop.svg", "/hero_icons/bebop.png"),
    "Billy": new SectionDefinition("Billy", 'url("/backgrounds/billy.png")', "/nameplates/billy.svg", "/hero_icons/billy.png"),
    "Calico": new SectionDefinition("Calico", 'url("/backgrounds/calico.png")', "/nameplates/calico.svg", "/hero_icons/calico.png"),
    "Doorman": new SectionDefinition("The Doorman", 'url("/backgrounds/doorman.png")', "/nameplates/doorman.svg", "/hero_icons/doorman.png"),
    "Drifter": new SectionDefinition("Drifter", 'url("/backgrounds/drifter.png")', "/nameplates/drifter.svg", "/hero_icons/drifter.png"),
    "Dynamo": new SectionDefinition("Dynamo", 'url("/backgrounds/dynamo.png")', "/nameplates/dynamo.svg", "/hero_icons/dynamo.png"),
    "Grey Talon": new SectionDefinition("Grey Talon", 'url("/backgrounds/grey_talon.png")', "/nameplates/grey_talon.svg", "/hero_icons/grey_talon.png"),
    "Haze": new SectionDefinition("Haze", 'url("/backgrounds/haze.png")', "/nameplates/haze.svg", "/hero_icons/haze.png"),
    "Holliday": new SectionDefinition("Holliday", 'url("/backgrounds/holliday.png")', "/nameplates/holliday.svg", "/hero_icons/holliday.png"),
    "Infernus": new SectionDefinition("Infernus", 'url("/backgrounds/infernus.png")', "/nameplates/infernus.svg", "/hero_icons/infernus.png"),
    "Ivy": new SectionDefinition("Ivy", 'url("/backgrounds/ivy.png")', "/nameplates/ivy.svg", "/hero_icons/ivy.png"),
    "Kelvin": new SectionDefinition("Kelvin", 'url("/backgrounds/kelvin.png")', "/nameplates/kelvin.svg", "/hero_icons/kelvin.png"),
    "Lady Geist": new SectionDefinition("Lady Geist", 'url("/backgrounds/lady_geist.png")', "/nameplates/lady_geist.svg", "/hero_icons/lady_geist.png"),
    "Lash": new SectionDefinition("Lash", 'url("/backgrounds/lash.png")', "/nameplates/lash.svg", "/hero_icons/lash.png"),
    "McGinnis": new SectionDefinition("McGinnis", 'url("/backgrounds/mcginnis.png")', "/nameplates/mcginnis.svg", "/hero_icons/mcginnis.png"),
    "Mina": new SectionDefinition("Mina", 'url("/backgrounds/mina.png")', "/nameplates/mina.svg", "/hero_icons/mina.png"),
    "Mirage": new SectionDefinition("Mirage", 'url("/backgrounds/mirage.png")', "/nameplates/mirage.svg", "/hero_icons/mirage.png"),
    "Mo & Krill": new SectionDefinition("Mo & Krill", 'url("/backgrounds/mo_krill.png")', "/nameplates/mo_krill.svg", "/hero_icons/mo_krill.png"),
    "Paige": new SectionDefinition("Paige", 'url("/backgrounds/paige.png")', "/nameplates/paige.svg", "/hero_icons/paige.png"),
    "Paradox": new SectionDefinition("Paradox", 'url("/backgrounds/paradox.png")', "/nameplates/paradox.svg", "/hero_icons/paradox.png"),
    "Pocket": new SectionDefinition("Pocket", 'url("/backgrounds/pocket.png")', "/nameplates/pocket.svg", "/hero_icons/pocket.png"),
    "Seven": new SectionDefinition("Seven", 'url("/backgrounds/seven.png")', "/nameplates/seven.svg", "/hero_icons/seven.png"),
    "Shiv": new SectionDefinition("Shiv", 'url("/backgrounds/shiv.png")', "/nameplates/shiv.svg", "/hero_icons/shiv.png"),
    "Sinclair": new SectionDefinition("Sinclair", 'url("/backgrounds/sinclair.png")', "/nameplates/sinclair.svg", "/hero_icons/sinclair.png"),
    "Victor": new SectionDefinition("Victor", 'url("/backgrounds/victor.png")', "/nameplates/victor.svg", "/hero_icons/victor.png"),
    "Vindicta": new SectionDefinition("Vindicta", 'url("/backgrounds/vindicta.png")', "/nameplates/vindicta.svg", "/hero_icons/vindicta.png"),
    "Viscous": new SectionDefinition("Viscous", 'url("/backgrounds/viscous.png")', "/nameplates/viscous.svg", "/hero_icons/viscous.png"),
    "Vyper": new SectionDefinition("Vyper", 'url("/backgrounds/vyper.png")', "/nameplates/vyper.svg", "/hero_icons/vyper.png"),
    "Warden": new SectionDefinition("Warden", 'url("/backgrounds/warden.png")', "/nameplates/warden.svg", "/hero_icons/warden.png"),
    "Wraith": new SectionDefinition("Wraith", 'url("/backgrounds/wraith.png")', "/nameplates/wraith.svg", "/hero_icons/wraith.png"),
    "Yamato": new SectionDefinition("Yamato", 'url("/backgrounds/yamato.png")', "/nameplates/yamato.svg", "/hero_icons/yamato.png"),
};


export const GENERAL_DEFINITIONS: Record<string, SectionDefinition> = {
    "Map": new SectionDefinition("Map", 'url("/backgrounds/generic.png")', "", "/hero_icons/deadlock_logo.png"),
    "Gameplay": new SectionDefinition("Gameplay", 'url("/backgrounds/generic.png")', "", "/hero_icons/deadlock_logo.png"),
    "Bugfixes": new SectionDefinition("Bugfixes", 'url("/backgrounds/generic.png")', "", "/hero_icons/deadlock_logo.png")
}

export const ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Weapon": new SectionDefinition("Weapon", 'url("/backgrounds/weapon.png")', "", "/hero_icons/deadlock_logo.png"),
    "Vitality": new SectionDefinition("Vitality", 'url("/backgrounds/vitality.png")', "", "/hero_icons/deadlock_logo.png"),
    "Spirit": new SectionDefinition("Spirit", 'url("/backgrounds/spirit.png")', "", "/hero_icons/deadlock_logo.png")
}