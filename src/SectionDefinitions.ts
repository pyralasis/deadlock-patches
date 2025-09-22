export class SectionDefinition {
    background: string;
    name: string;
    nameplate: string;
    icon: string;
    ability1: string;
    ability2: string;
    ability3: string;
    ability4: string;

    constructor(name: string, background: string, nameplate: string, icon: string, ability1: string, ability2: string, ability3: string, ability4: string) {
        this.background = background;
        this.name = name;
        this.nameplate = nameplate;
        this.icon = icon;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.ability3 = ability3;
        this.ability4 = ability4;
    }
}

export const HERO_DEFINITIONS: Record<string, SectionDefinition> = {
    "Abrams": new SectionDefinition("Abrams", 'url("/backgrounds/abrams.png")', "/nameplates/abrams.svg", "/hero_icons/abrams.png", "/ability_icons/abrams_ability1.png", "/ability_icons/abrams_ability2.png", "/ability_icons/abrams_ability3.png", "/ability_icons/abrams_ability4.png"),
    "Bebop": new SectionDefinition("Bebop", 'url("/backgrounds/bebop.png")', "/nameplates/bebop.svg", "/hero_icons/bebop.png", "/ability_icons/bebop_ability1.png", "/ability_icons/bebop_ability2.png", "/ability_icons/bebop_ability3.png", "/ability_icons/bebop_ability4.png"),
    "Billy": new SectionDefinition("Billy", 'url("/backgrounds/billy.png")', "/nameplates/billy.svg", "/hero_icons/billy.png", "/ability_icons/billy_ability1.png", "/ability_icons/billy_ability2.png", "/ability_icons/billy_ability3.png", "/ability_icons/billy_ability4.png"),
    "Calico": new SectionDefinition("Calico", 'url("/backgrounds/calico.png")', "/nameplates/calico.svg", "/hero_icons/calico.png", "/ability_icons/calico_ability1.png", "/ability_icons/calico_ability2.png", "/ability_icons/calico_ability3.png", "/ability_icons/calico_ability4.png"),
    "Doorman": new SectionDefinition("The Doorman", 'url("/backgrounds/doorman.png")', "/nameplates/doorman.svg", "/hero_icons/doorman.png", "/ability_icons/doorman_ability1.png", "/ability_icons/doorman_ability2.png", "/ability_icons/doorman_ability3.png", "/ability_icons/doorman_ability4.png"),
    "Drifter": new SectionDefinition("Drifter", 'url("/backgrounds/drifter.png")', "/nameplates/drifter.svg", "/hero_icons/drifter.png", "/ability_icons/drifter_ability1.png", "/ability_icons/drifter_ability2.png", "/ability_icons/drifter_ability3.png", "/ability_icons/drifter_ability4.png"),
    "Dynamo": new SectionDefinition("Dynamo", 'url("/backgrounds/dynamo.png")', "/nameplates/dynamo.svg", "/hero_icons/dynamo.png", "/ability_icons/dynamo_ability1.png", "/ability_icons/dynamo_ability2.png", "/ability_icons/dynamo_ability3.png", "/ability_icons/dynamo_ability4.png"),
    "Grey Talon": new SectionDefinition("Grey Talon", 'url("/backgrounds/grey_talon.png")', "/nameplates/grey_talon.svg", "/hero_icons/grey_talon.png", "/ability_icons/grey_talon_ability1.png", "/ability_icons/grey_talon_ability2.png", "/ability_icons/grey_talon_ability3.png", "/ability_icons/grey_talon_ability4.png"),
    "Haze": new SectionDefinition("Haze", 'url("/backgrounds/haze.png")', "/nameplates/haze.svg", "/hero_icons/haze.png", "/ability_icons/haze_ability1.png", "/ability_icons/haze_ability2.png", "/ability_icons/haze_ability3.png", "/ability_icons/haze_ability4.png"),
    "Holliday": new SectionDefinition("Holliday", 'url("/backgrounds/holliday.png")', "/nameplates/holliday.svg", "/hero_icons/holliday.png", "/ability_icons/holliday_ability1.png", "/ability_icons/holliday_ability2.png", "/ability_icons/holliday_ability3.png", "/ability_icons/holliday_ability4.png"),
    "Infernus": new SectionDefinition("Infernus", 'url("/backgrounds/infernus.png")', "/nameplates/infernus.svg", "/hero_icons/infernus.png", "/ability_icons/infernus_ability1.png", "/ability_icons/infernus_ability2.png", "/ability_icons/infernus_ability3.png", "/ability_icons/infernus_ability4.png"),
    "Ivy": new SectionDefinition("Ivy", 'url("/backgrounds/ivy.png")', "/nameplates/ivy.svg", "/hero_icons/ivy.png", "/ability_icons/ivy_ability1.png", "/ability_icons/ivy_ability2.png", "/ability_icons/ivy_ability3.png", "/ability_icons/ivy_ability4.png"),
    "Kelvin": new SectionDefinition("Kelvin", 'url("/backgrounds/kelvin.png")', "/nameplates/kelvin.svg", "/hero_icons/kelvin.png", "/ability_icons/kelvin_ability1.png", "/ability_icons/kelvin_ability2.png", "/ability_icons/kelvin_ability3.png", "/ability_icons/kelvin_ability4.png"),
    "Lady Geist": new SectionDefinition("Lady Geist", 'url("/backgrounds/lady_geist.png")', "/nameplates/lady_geist.svg", "/hero_icons/lady_geist.png", "/ability_icons/lady_geist_ability1.png", "/ability_icons/lady_geist_ability2.png", "/ability_icons/lady_geist_ability3.png", "/ability_icons/lady_geist_ability4.png"),
    "Lash": new SectionDefinition("Lash", 'url("/backgrounds/lash.png")', "/nameplates/lash.svg", "/hero_icons/lash.png", "/ability_icons/lash_ability1.png", "/ability_icons/lash_ability2.png", "/ability_icons/lash_ability3.png", "/ability_icons/lash_ability4.png"),
    "McGinnis": new SectionDefinition("McGinnis", 'url("/backgrounds/mcginnis.png")', "/nameplates/mcginnis.svg", "/hero_icons/mcginnis.png", "/ability_icons/mcginnis_ability1.png", "/ability_icons/mcginnis_ability2.png", "/ability_icons/mcginnis_ability3.png", "/ability_icons/mcginnis_ability4.png"),
    "Mina": new SectionDefinition("Mina", 'url("/backgrounds/mina.png")', "/nameplates/mina.svg", "/hero_icons/mina.png", "/ability_icons/mina_ability1.png", "/ability_icons/mina_ability2.png", "/ability_icons/mina_ability3.png", "/ability_icons/mina_ability4.png"),
    "Mirage": new SectionDefinition("Mirage", 'url("/backgrounds/mirage.png")', "/nameplates/mirage.svg", "/hero_icons/mirage.png", "/ability_icons/mirage_ability1.png", "/ability_icons/mirage_ability2.png", "/ability_icons/mirage_ability3.png", "/ability_icons/mirage_ability4.png"),
    "Mo & Krill": new SectionDefinition("Mo & Krill", 'url("/backgrounds/mo_krill.png")', "/nameplates/mo_krill.svg", "/hero_icons/mo_krill.png", "/ability_icons/mo_krill_ability1.png", "/ability_icons/mo_krill_ability2.png", "/ability_icons/mo_krill_ability3.png", "/ability_icons/mo_krill_ability4.png"),
    "Paige": new SectionDefinition("Paige", 'url("/backgrounds/paige.png")', "/nameplates/paige.svg", "/hero_icons/paige.png", "/ability_icons/paige_ability1.png", "/ability_icons/paige_ability2.png", "/ability_icons/paige_ability3.png", "/ability_icons/paige_ability4.png"),
    "Paradox": new SectionDefinition("Paradox", 'url("/backgrounds/paradox.png")', "/nameplates/paradox.svg", "/hero_icons/paradox.png", "/ability_icons/paradox_ability1.png", "/ability_icons/paradox_ability2.png", "/ability_icons/paradox_ability3.png", "/ability_icons/paradox_ability4.png"),
    "Pocket": new SectionDefinition("Pocket", 'url("/backgrounds/pocket.png")', "/nameplates/pocket.svg", "/hero_icons/pocket.png", "/ability_icons/pocket_ability1.png", "/ability_icons/pocket_ability2.png", "/ability_icons/pocket_ability3.png", "/ability_icons/pocket_ability4.png"),
    "Seven": new SectionDefinition("Seven", 'url("/backgrounds/seven.png")', "/nameplates/seven.svg", "/hero_icons/seven.png", "/ability_icons/seven_ability1.png", "/ability_icons/seven_ability2.png", "/ability_icons/seven_ability3.png", "/ability_icons/seven_ability4.png"),
    "Shiv": new SectionDefinition("Shiv", 'url("/backgrounds/shiv.png")', "/nameplates/shiv.svg", "/hero_icons/shiv.png", "/ability_icons/shiv_ability1.png", "/ability_icons/shiv_ability2.png", "/ability_icons/shiv_ability3.png", "/ability_icons/shiv_ability4.png"),
    "Sinclair": new SectionDefinition("Sinclair", 'url("/backgrounds/sinclair.png")', "/nameplates/sinclair.svg", "/hero_icons/sinclair.png", "/ability_icons/sinclair_ability1.png", "/ability_icons/sinclair_ability2.png", "/ability_icons/sinclair_ability3.png", "/ability_icons/sinclair_ability4.png"),
    "Victor": new SectionDefinition("Victor", 'url("/backgrounds/victor.png")', "/nameplates/victor.svg", "/hero_icons/victor.png", "/ability_icons/victor_ability1.png", "/ability_icons/victor_ability2.png", "/ability_icons/victor_ability3.png", "/ability_icons/victor_ability4.png"),
    "Vindicta": new SectionDefinition("Vindicta", 'url("/backgrounds/vindicta.png")', "/nameplates/vindicta.svg", "/hero_icons/vindicta.png", "/ability_icons/vindicta_ability1.png", "/ability_icons/vindicta_ability2.png", "/ability_icons/vindicta_ability3.png", "/ability_icons/vindicta_ability4.png"),
    "Viscous": new SectionDefinition("Viscous", 'url("/backgrounds/viscous.png")', "/nameplates/viscous.svg", "/hero_icons/viscous.png", "/ability_icons/viscous_ability1.png", "/ability_icons/viscous_ability2.png", "/ability_icons/viscous_ability3.png", "/ability_icons/viscous_ability4.png"),
    "Vyper": new SectionDefinition("Vyper", 'url("/backgrounds/vyper.png")', "/nameplates/vyper.svg", "/hero_icons/vyper.png", "/ability_icons/vyper_ability1.png", "/ability_icons/vyper_ability2.png", "/ability_icons/vyper_ability3.png", "/ability_icons/vyper_ability4.png"),
    "Warden": new SectionDefinition("Warden", 'url("/backgrounds/warden.png")', "/nameplates/warden.svg", "/hero_icons/warden.png", "/ability_icons/warden_ability1.png", "/ability_icons/warden_ability2.png", "/ability_icons/warden_ability3.png", "/ability_icons/warden_ability4.png"),
    "Wraith": new SectionDefinition("Wraith", 'url("/backgrounds/wraith.png")', "/nameplates/wraith.svg", "/hero_icons/wraith.png", "/ability_icons/wraith_ability1.png", "/ability_icons/wraith_ability2.png", "/ability_icons/wraith_ability3.png", "/ability_icons/wraith_ability4.png"),
    "Yamato": new SectionDefinition("Yamato", 'url("/backgrounds/yamato.png")', "/nameplates/yamato.svg", "/hero_icons/yamato.png", "/ability_icons/yamato_ability1.png", "/ability_icons/yamato_ability2.png", "/ability_icons/yamato_ability3.png", "/ability_icons/yamato_ability4.png"),
};



export const GENERAL_DEFINITIONS: Record<string, SectionDefinition> = {
    "Map": new SectionDefinition("Map", 'url("/backgrounds/generic.png")', "", "/deadlock-patcheshero_icons/deadlock_logo.png", "", "", "", "",),
    "Gameplay": new SectionDefinition("Gameplay", 'url("/backgrounds/generic.png")', "", "/hero_icons/deadlock_logo.png", "", "", "", "",),
    "Bugfixes": new SectionDefinition("Bugfixes", 'url("/backgrounds/generic.png")', "", "/hero_icons/deadlock_logo.png", "", "", "", "",)
}

export const ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Weapon": new SectionDefinition("Weapon", 'url("/backgrounds/weapon.png")', "", "/hero_icons/deadlock_logo.png", "", "", "", "",),
    "Vitality": new SectionDefinition("Vitality", 'url("/backgrounds/vitality.png")', "", "/hero_icons/deadlock_logo.png", "", "", "", "",),
    "Spirit": new SectionDefinition("Spirit", 'url("/backgrounds/spirit.png")', "", "/hero_icons/deadlock_logo.png", "", "", "", "",)
}