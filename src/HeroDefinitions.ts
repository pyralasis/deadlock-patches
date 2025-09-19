export class HeroDefinition {
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

export const HERO_DEFINITIONS: Record<string, HeroDefinition> = {
    "Abrams": new HeroDefinition("Abrams", 'url("/backgrounds/abrams.png")', "/nameplates/abrams.svg", "/hero_icons/abrams.png"),
    "Bebop": new HeroDefinition("Bebop", 'url("/backgrounds/bebop.png")', "/nameplates/bebop.svg", "/hero_icons/bebop.png"),
    "Billy": new HeroDefinition("Billy", 'url("/backgrounds/billy.png")', "/nameplates/billy.svg", "/hero_icons/billy.png"),
    "Calico": new HeroDefinition("Calico", 'url("/backgrounds/calico.png")', "/nameplates/calico.svg", "/hero_icons/calico.png"),
    "Doorman": new HeroDefinition("The Doorman", 'url("/backgrounds/doorman.png")', "/nameplates/doorman.svg", "/hero_icons/doorman.png"),
    "Drifter": new HeroDefinition("Drifter", 'url("/backgrounds/drifter.png")', "/nameplates/drifter.svg", "/hero_icons/drifter.png"),
    "Dynamo": new HeroDefinition("Dynamo", 'url("/backgrounds/dynamo.png")', "/nameplates/dynamo.svg", "/hero_icons/dynamo.png"),
    "Grey Talon": new HeroDefinition("Grey Talon", 'url("/backgrounds/grey_talon.png")', "/nameplates/grey_talon.svg", "/hero_icons/grey_talon.png"),
    "Haze": new HeroDefinition("Haze", 'url("/backgrounds/haze.png")', "/nameplates/haze.svg", "/hero_icons/haze.png"),
    "Holliday": new HeroDefinition("Holliday", 'url("/backgrounds/holliday.png")', "/nameplates/holliday.svg", "/hero_icons/holliday.png"),
    "Infernus": new HeroDefinition("Infernus", 'url("/backgrounds/infernus.png")', "/nameplates/infernus.svg", "/hero_icons/infernus.png"),
    "Ivy": new HeroDefinition("Ivy", 'url("/backgrounds/ivy.png")', "/nameplates/ivy.svg", "/hero_icons/ivy.png"),
    "Kelvin": new HeroDefinition("Kelvin", 'url("/backgrounds/kelvin.png")', "/nameplates/kelvin.svg", "/hero_icons/kelvin.png"),
    "Lady Geist": new HeroDefinition("Lady Geist", 'url("/backgrounds/lady_geist.png")', "/nameplates/lady_geist.svg", "/hero_icons/lady_geist.png"),
    "Lash": new HeroDefinition("Lash", 'url("/backgrounds/lash.png")', "/nameplates/lash.svg", "/hero_icons/lash.png"),
    "McGinnis": new HeroDefinition("McGinnis", 'url("/backgrounds/mcginnis.png")', "/nameplates/mcginnis.svg", "/hero_icons/mcginnis.png"),
    "Mina": new HeroDefinition("Mina", 'url("/backgrounds/mina.png")', "/nameplates/mina.svg", "/hero_icons/mina.png"),
    "Mirage": new HeroDefinition("Mirage", 'url("/backgrounds/mirage.png")', "/nameplates/mirage.svg", "/hero_icons/mirage.png"),
    "Mo & Krill": new HeroDefinition("Mo & Krill", 'url("/backgrounds/mo_krill.png")', "/nameplates/mo_krill.svg", "/hero_icons/mo_krill.png"),
    "Paige": new HeroDefinition("Paige", 'url("/backgrounds/paige.png")', "/nameplates/paige.svg", "/hero_icons/paige.png"),
    "Paradox": new HeroDefinition("Paradox", 'url("/backgrounds/paradox.png")', "/nameplates/paradox.svg", "/hero_icons/paradox.png"),
    "Pocket": new HeroDefinition("Pocket", 'url("/backgrounds/pocket.png")', "/nameplates/pocket.svg", "/hero_icons/pocket.png"),
    "Seven": new HeroDefinition("Seven", 'url("/backgrounds/seven.png")', "/nameplates/seven.svg", "/hero_icons/seven.png"),
    "Shiv": new HeroDefinition("Shiv", 'url("/backgrounds/shiv.png")', "/nameplates/shiv.svg", "/hero_icons/shiv.png"),
    "Sinclair": new HeroDefinition("Sinclair", 'url("/backgrounds/sinclair.png")', "/nameplates/sinclair.svg", "/hero_icons/sinclair.png"),
    "Victor": new HeroDefinition("Victor", 'url("/backgrounds/victor.png")', "/nameplates/victor.svg", "/hero_icons/victor.png"),
    "Vindicta": new HeroDefinition("Vindicta", 'url("/backgrounds/vindicta.png")', "/nameplates/vindicta.svg", "/hero_icons/vindicta.png"),
    "Viscous": new HeroDefinition("Viscous", 'url("/backgrounds/viscous.png")', "/nameplates/viscous.svg", "/hero_icons/viscous.png"),
    "Vyper": new HeroDefinition("Vyper", 'url("/backgrounds/vyper.png")', "/nameplates/vyper.svg", "/hero_icons/vyper.png"),
    "Warden": new HeroDefinition("Warden", 'url("/backgrounds/warden.png")', "/nameplates/warden.svg", "/hero_icons/warden.png"),
    "Wraith": new HeroDefinition("Wraith", 'url("/backgrounds/wraith.png")', "/nameplates/wraith.svg", "/hero_icons/wraith.png"),
    "Yamato": new HeroDefinition("Yamato", 'url("/backgrounds/yamato.png")', "/nameplates/yamato.svg", "/hero_icons/yamato.png"),
};


export const GENERAL_DEFINITIONS: Record<string, HeroDefinition> = {
    "Map": new HeroDefinition("Map", 'url("/backgrounds/generic.png")', "Map", "/hero_icons/deadlock_logo.png"),
    "Gameplay": new HeroDefinition("Gameplay", 'url("/backgrounds/generic.png")', "Gameplay", "/hero_icons/deadlock_logo.png"),
    "Bugfixes": new HeroDefinition("Bugfixes", 'url("/backgrounds/generic.png")', "Bugfixes", "/hero_icons/deadlock_logo.png")
}

export const ITEM_DEFINITIONS: Record<string, HeroDefinition> = {
    "Weapon": new HeroDefinition("Weapon", 'url("/backgrounds/generic.png")', "Weapon", "/hero_icons/deadlock_logo.png"),
    "Vitality": new HeroDefinition("Vitality", 'url("/backgrounds/generic.png")', "Vitality", "/hero_icons/deadlock_logo.png"),
    "Spirit": new HeroDefinition("Spirit", 'url("/backgrounds/generic.png")', "Spirit", "/hero_icons/deadlock_logo.png")
}