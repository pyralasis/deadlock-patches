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

export const WEAPON_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Close Quarters": new SectionDefinition("Close Quarters", "", "", "/item_icons/weapon/close_quarters.png", "", "", "", ""),
    "Extended Magazine": new SectionDefinition("Extended Magazine", "", "", "/item_icons/weapon/extended_magazine.png", "", "", "", ""),
    "Headshot Booster": new SectionDefinition("Headshot Booster", "", "", "/item_icons/weapon/headshot_booster.png", "", "", "", ""),
    "High-Velocity Rounds": new SectionDefinition("High-Velocity Rounds", "", "", "/item_icons/weapon/high_velocity_rounds.png", "", "", "", ""),
    "Monster Rounds": new SectionDefinition("Monster Rounds", "", "", "/item_icons/weapon/monster_rounds.png", "", "", "", ""),
    "Rapid Rounds": new SectionDefinition("Rapid Rounds", "", "", "/item_icons/weapon/rapid_rounds.png", "", "", "", ""),
    "Restorative Shot": new SectionDefinition("Restorative Shot", "", "", "/item_icons/weapon/restorative_shot.png", "", "", "", ""),

    "Active Reload": new SectionDefinition("Active Reload", "", "", "/item_icons/weapon/active_reload.png", "", "", "", ""),
    "Backstabber": new SectionDefinition("Backstabber", "", "", "/item_icons/weapon/backstabber.png", "", "", "", ""),
    "Fleetfoot": new SectionDefinition("Fleetfoot", "", "", "/item_icons/weapon/fleetfoot.png", "", "", "", ""),
    "Intensifying Magazine": new SectionDefinition("Intensifying Magazine", "", "", "/item_icons/weapon/intensifying_magazine.png", "", "", "", ""),
    "Kinetic Dash": new SectionDefinition("Kinetic Dash", "", "", "/item_icons/weapon/kinetic_dash.png", "", "", "", ""),
    "Long Range": new SectionDefinition("Long Range", "", "", "/item_icons/weapon/long_range.png", "", "", "", ""),
    "Melee Charge": new SectionDefinition("Melee Charge", "", "", "/item_icons/weapon/melee_charge.png", "", "", "", ""),
    "Mystic Shot": new SectionDefinition("Mystic Shot", "", "", "/item_icons/weapon/mystic_shot.png", "", "", "", ""),
    "Opening Rounds": new SectionDefinition("Opening Rounds", "", "", "/item_icons/weapon/opening_rounds.png", "", "", "", ""),
    "Slowing Bullets": new SectionDefinition("Slowing Bullets", "", "", "/item_icons/weapon/slowing_bullets.png", "", "", "", ""),
    "Spirit Shredder Bullets": new SectionDefinition("Spirit Shredder Bullets", "", "", "/item_icons/weapon/spirit_shredder_bullets.png", "", "", "", ""),
    "Split Shot": new SectionDefinition("Split Shot", "", "", "/item_icons/weapon/split_shot.png", "", "", "", ""),
    "Swift Striker": new SectionDefinition("Swift Striker", "", "", "/item_icons/weapon/swift_striker.png", "", "", "", ""),
    "Titanic Magazine": new SectionDefinition("Titanic Magazine", "", "", "/item_icons/weapon/titanic_magazine.png", "", "", "", ""),
    "Weakening Headshot": new SectionDefinition("Weakening Headshot", "", "", "/item_icons/weapon/weakening_headshot.png", "", "", "", ""),

    "Alchemical Fire": new SectionDefinition("Alchemical Fire", "", "", "/item_icons/weapon/alchemical_fire.png", "", "", "", ""),
    "Berserker": new SectionDefinition("Berserker", "", "", "/item_icons/weapon/berserker.png", "", "", "", ""),
    "Blood Tribute": new SectionDefinition("Blood Tribute", "", "", "/item_icons/weapon/blood_tribute.png", "", "", "", ""),
    "Burst Fire": new SectionDefinition("Burst Fire", "", "", "/item_icons/weapon/burst_fire.png", "", "", "", ""),
    "Cultist Sacrifice": new SectionDefinition("Cultist Sacrifice", "", "", "/item_icons/weapon/cultist_sacrifice.png", "", "", "", ""),
    "Escalating Resilience": new SectionDefinition("Escalating Resilience", "", "", "/item_icons/weapon/escalating_resilience.png", "", "", "", ""),
    "Express Shot": new SectionDefinition("Express Shot", "", "", "/item_icons/weapon/express_shot.png", "", "", "", ""),
    "Headhunter": new SectionDefinition("Headhunter", "", "", "/item_icons/weapon/headhunter.png", "", "", "", ""),
    "Heroic Aura": new SectionDefinition("Heroic Aura", "", "", "/item_icons/weapon/heroic_aura.png", "", "", "", ""),
    "Hollow Point": new SectionDefinition("Hollow Point", "", "", "/item_icons/weapon/hollow_point.png", "", "", "", ""),
    "Hunter's Aura": new SectionDefinition("Hunter's Aura", "", "", "/item_icons/weapon/hunters_aura.png", "", "", "", ""),
    "Point Blank": new SectionDefinition("Point Blank", "", "", "/item_icons/weapon/point_blank.png", "", "", "", ""),
    "Sharpshooter": new SectionDefinition("Sharpshooter", "", "", "/item_icons/weapon/sharpshooter.png", "", "", "", ""),
    "Spirit Rend": new SectionDefinition("Spirit Rend", "", "", "/item_icons/weapon/spirit_rend.png", "", "", "", ""),
    "Tesla Bullets": new SectionDefinition("Tesla Bullets", "", "", "/item_icons/weapon/tesla_bullets.png", "", "", "", ""),
    "Toxic Bullets": new SectionDefinition("Toxic Bullets", "", "", "/item_icons/weapon/toxic_bullets.png", "", "", "", ""),
    "Weighted Shots": new SectionDefinition("Weighted Shots", "", "", "/item_icons/weapon/weighted_shots.png", "", "", "", ""),

    "Armor Piercing Rounds": new SectionDefinition("Armor Piercing Rounds", "", "", "/item_icons/weapon/armor_piercing_rounds.png", "", "", "", ""),
    "Capacitor": new SectionDefinition("Capacitor", "", "", "/item_icons/weapon/capacitor.png", "", "", "", ""),
    "Crippling Headshot": new SectionDefinition("Crippling Headshot", "", "", "/item_icons/weapon/crippling_headshot.png", "", "", "", ""),
    "Crushing Fists": new SectionDefinition("Crushing Fists", "", "", "/item_icons/weapon/crushing_fists.png", "", "", "", ""),
    "Frenzy": new SectionDefinition("Frenzy", "", "", "/item_icons/weapon/frenzy.png", "", "", "", ""),
    "Glass Cannon": new SectionDefinition("Glass Cannon", "", "", "/item_icons/weapon/glass_cannon.png", "", "", "", ""),
    "Lucky Shot": new SectionDefinition("Lucky Shot", "", "", "/item_icons/weapon/lucky_shot.png", "", "", "", ""),
    "Ricochet": new SectionDefinition("Ricochet", "", "", "/item_icons/weapon/ricochet.png", "", "", "", ""),
    "Shadow Weave": new SectionDefinition("Shadow Weave", "", "", "/item_icons/weapon/shadow_weave.png", "", "", "", ""),
    "Silencer": new SectionDefinition("Silencer", "", "", "/item_icons/weapon/silencer.png", "", "", "", ""),
    "Spellslinger": new SectionDefinition("Spellslinger", "", "", "/item_icons/weapon/spellslinger.png", "", "", "", ""),
    "Spiritual Overflow": new SectionDefinition("Spiritual Overflow", "", "", "/item_icons/weapon/spiritual_overflow.png", "", "", "", "")
};

export const VITALITY_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Extra Health": new SectionDefinition("Extra Health", "", "", "/item_icons/extra_health.png", "", "", "", ""),
    "Extra Regen": new SectionDefinition("Extra Regen", "", "", "/item_icons/extra_regen.png", "", "", "", ""),
    "Extra Stamina": new SectionDefinition("Extra Stamina", "", "", "/item_icons/extra_stamina.png", "", "", "", ""),
    "Healing Rite": new SectionDefinition("Healing Rite", "", "", "/item_icons/healing_rite.png", "", "", "", ""),
    "Melee Lifesteal": new SectionDefinition("Melee Lifesteal", "", "", "/item_icons/melee_lifesteal.png", "", "", "", ""),
    "Rebuttal": new SectionDefinition("Rebuttal", "", "", "/item_icons/rebuttal.png", "", "", "", ""),
    "Sprint Boots": new SectionDefinition("Sprint Boots", "", "", "/item_icons/sprint_boots.png", "", "", "", ""),

    "Battle Vest": new SectionDefinition("Battle Vest", "", "", "/item_icons/battle_vest.png", "", "", "", ""),
    "Bullet Lifesteal": new SectionDefinition("Bullet Lifesteal", "", "", "/item_icons/bullet_lifesteal.png", "", "", "", ""),
    "Debuff Reducer": new SectionDefinition("Debuff Reducer", "", "", "/item_icons/debuff_reducer.png", "", "", "", ""),
    "Enchanter's Emblem": new SectionDefinition("Enchanter's Emblem", "", "", "/item_icons/enchanters_emblem.png", "", "", "", ""),
    "Enduring Speed": new SectionDefinition("Enduring Speed", "", "", "/item_icons/enduring_speed.png", "", "", "", ""),
    "Guardian Ward": new SectionDefinition("Guardian Ward", "", "", "/item_icons/guardian_ward.png", "", "", "", ""),
    "Healbane": new SectionDefinition("Healbane", "", "", "/item_icons/healbane.png", "", "", "", ""),
    "Healing Booster": new SectionDefinition("Healing Booster", "", "", "/item_icons/healing_booster.png", "", "", "", ""),
    "Reactive Barrier": new SectionDefinition("Reactive Barrier", "", "", "/item_icons/reactive_barrier.png", "", "", "", ""),
    "Restorative Locket": new SectionDefinition("Restorative Locket", "", "", "/item_icons/restorative_locket.png", "", "", "", ""),
    "Return Fire": new SectionDefinition("Return Fire", "", "", "/item_icons/return_fire.png", "", "", "", ""),
    "Spirit Lifesteal": new SectionDefinition("Spirit Lifesteal", "", "", "/item_icons/spirit_lifesteal.png", "", "", "", ""),
    "Spirit Shielding": new SectionDefinition("Spirit Shielding", "", "", "/item_icons/spirit_shielding.png", "", "", "", ""),
    "Weapon Shielding": new SectionDefinition("Weapon Shielding", "", "", "/item_icons/weapon_shielding.png", "", "", "", ""),

    "Bullet Resilience": new SectionDefinition("Bullet Resilience", "", "", "/item_icons/bullet_resilience.png", "", "", "", ""),
    "Counterspell": new SectionDefinition("Counterspell", "", "", "/item_icons/counterspell.png", "", "", "", ""),
    "Debuff Remover": new SectionDefinition("Debuff Remover", "", "", "/item_icons/debuff_remover.png", "", "", "", ""),
    "Fortitude": new SectionDefinition("Fortitude", "", "", "/item_icons/fortitude.png", "", "", "", ""),
    "Fury Trance": new SectionDefinition("Fury Trance", "", "", "/item_icons/fury_trance.png", "", "", "", ""),
    "Healing Nova": new SectionDefinition("Healing Nova", "", "", "/item_icons/healing_nova.png", "", "", "", ""),
    "Lifestrike": new SectionDefinition("Lifestrike", "", "", "/item_icons/lifestrike.png", "", "", "", ""),
    "Majestic Leap": new SectionDefinition("Majestic Leap", "", "", "/item_icons/majestic_leap.png", "", "", "", ""),
    "Metal Skin": new SectionDefinition("Metal Skin", "", "", "/item_icons/metal_skin.png", "", "", "", ""),
    "Rescue Beam": new SectionDefinition("Rescue Beam", "", "", "/item_icons/rescue_beam.png", "", "", "", ""),
    "Spirit Resilience": new SectionDefinition("Spirit Resilience", "", "", "/item_icons/spirit_resilience.png", "", "", "", ""),
    "Stamina Mastery": new SectionDefinition("Stamina Mastery", "", "", "/item_icons/stamina_mastery.png", "", "", "", ""),
    "Trophy Collector": new SectionDefinition("Trophy Collector", "", "", "/item_icons/trophy_collector.png", "", "", "", ""),
    "Veil Walker": new SectionDefinition("Veil Walker", "", "", "/item_icons/veil_walker.png", "", "", "", ""),
    "Warp Stone": new SectionDefinition("Warp Stone", "", "", "/item_icons/warp_stone.png", "", "", "", ""),

    "Cheat Death": new SectionDefinition("Cheat Death", "", "", "/item_icons/cheat_death.png", "", "", "", ""),
    "Colossus": new SectionDefinition("Colossus", "", "", "/item_icons/colossus.png", "", "", "", ""),
    "Divine Barrier": new SectionDefinition("Divine Barrier", "", "", "/item_icons/divine_barrier.png", "", "", "", ""),
    "Diviner's Kevlar": new SectionDefinition("Diviner's Kevlar", "", "", "/item_icons/diviners_kevlar.png", "", "", "", ""),
    "Healing Tempo": new SectionDefinition("Healing Tempo", "", "", "/item_icons/healing_tempo.png", "", "", "", ""),
    "Infuser": new SectionDefinition("Infuser", "", "", "/item_icons/infuser.png", "", "", "", ""),
    "Inhibitor": new SectionDefinition("Inhibitor", "", "", "/item_icons/inhibitor.png", "", "", "", ""),
    "Juggernaut": new SectionDefinition("Juggernaut", "", "", "/item_icons/juggernaut.png", "", "", "", ""),
    "Leech": new SectionDefinition("Leech", "", "", "/item_icons/leech.png", "", "", "", ""),
    "Phantom Strike": new SectionDefinition("Phantom Strike", "", "", "/item_icons/phantom_strike.png", "", "", "", ""),
    "Plated Armor": new SectionDefinition("Plated Armor", "", "", "/item_icons/plated_armor.png", "", "", "", ""),
    "Siphon Bullets": new SectionDefinition("Siphon Bullets", "", "", "/item_icons/siphon_bullets.png", "", "", "", ""),
    "Spellbreaker": new SectionDefinition("Spellbreaker", "", "", "/item_icons/spellbreaker.png", "", "", "", ""),
    "Unstoppable": new SectionDefinition("Unstoppable", "", "", "/item_icons/unstoppable.png", "", "", "", ""),
    "Vampiric Burst": new SectionDefinition("Vampiric Burst", "", "", "/item_icons/vampiric_burst.png", "", "", "", ""),
    "Witchmail": new SectionDefinition("Witchmail", "", "", "/item_icons/witchmail.png", "", "", "", "")
};

export const SPIRIT_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Extra Charge": new SectionDefinition("Extra Charge", "", "", "/item_icons/extra_charge.png", "", "", "", ""),
    "Extra Spirit": new SectionDefinition("Extra Spirit", "", "", "/item_icons/extra_spirit.png", "", "", "", ""),
    "Mystic Burst": new SectionDefinition("Mystic Burst", "", "", "/item_icons/mystic_burst.png", "", "", "", ""),
    "Mystic Expansion": new SectionDefinition("Mystic Expansion", "", "", "/item_icons/mystic_expansion.png", "", "", "", ""),
    "Mystic Regeneration": new SectionDefinition("Mystic Regeneration", "", "", "/item_icons/mystic_regeneration.png", "", "", "", ""),
    "Rusted Barrel": new SectionDefinition("Rusted Barrel", "", "", "/item_icons/rusted_barrel.png", "", "", "", ""),
    "Spirit Strike": new SectionDefinition("Spirit Strike", "", "", "/item_icons/spirit_strike.png", "", "", "", ""),

    "Arcane Surge": new SectionDefinition("Arcane Surge", "", "", "/item_icons/arcane_surge.png", "", "", "", ""),
    "Bullet Resist Shredder": new SectionDefinition("Bullet Resist Shredder", "", "", "/item_icons/bullet_resist_shredder.png", "", "", "", ""),
    "Cold Front": new SectionDefinition("Cold Front", "", "", "/item_icons/cold_front.png", "", "", "", ""),
    "Compress Cooldown": new SectionDefinition("Compress Cooldown", "", "", "/item_icons/compress_cooldown.png", "", "", "", ""),
    "Duration Extender": new SectionDefinition("Duration Extender", "", "", "/item_icons/duration_extender.png", "", "", "", ""),
    "Improved Spirit": new SectionDefinition("Improved Spirit", "", "", "/item_icons/improved_spirit.png", "", "", "", ""),
    "Mystic Slow": new SectionDefinition("Mystic Slow", "", "", "/item_icons/mystic_slow.png", "", "", "", ""),
    "Mystic Vulnerability": new SectionDefinition("Mystic Vulnerability", "", "", "/item_icons/mystic_vulnerability.png", "", "", "", ""),
    "Quicksilver Reload": new SectionDefinition("Quicksilver Reload", "", "", "/item_icons/quicksilver_reload.png", "", "", "", ""),
    "Slowing Hex": new SectionDefinition("Slowing Hex", "", "", "/item_icons/slowing_hex.png", "", "", "", ""),
    "Spirit Sap": new SectionDefinition("Spirit Sap", "", "", "/item_icons/spirit_sap.png", "", "", "", ""),
    "Suppressor": new SectionDefinition("Suppressor", "", "", "/item_icons/suppressor.png", "", "", "", ""),

    "Decay": new SectionDefinition("Decay", "", "", "/item_icons/decay.png", "", "", "", ""),
    "Disarming Hex": new SectionDefinition("Disarming Hex", "", "", "/item_icons/disarming_hex.png", "", "", "", ""),
    "Greater Expansion": new SectionDefinition("Greater Expansion", "", "", "/item_icons/greater_expansion.png", "", "", "", ""),
    "Knockdown": new SectionDefinition("Knockdown", "", "", "/item_icons/knockdown.png", "", "", "", ""),
    "Radiant Regeneration": new SectionDefinition("Radiant Regeneration", "", "", "/item_icons/radiant_regeneration.png", "", "", "", ""),
    "Rapid Recharge": new SectionDefinition("Rapid Recharge", "", "", "/item_icons/rapid_recharge.png", "", "", "", ""),
    "Silence Wave": new SectionDefinition("Silence Wave", "", "", "/item_icons/silence_wave.png", "", "", "", ""),
    "Spirit Snatch": new SectionDefinition("Spirit Snatch", "", "", "/item_icons/spirit_snatch.png", "", "", "", ""),
    "Superior Cooldown": new SectionDefinition("Superior Cooldown", "", "", "/item_icons/superior_cooldown.png", "", "", "", ""),
    "Superior Duration": new SectionDefinition("Superior Duration", "", "", "/item_icons/superior_duration.png", "", "", "", ""),
    "Surge of Power": new SectionDefinition("Surge of Power", "", "", "/item_icons/surge_of_power.png", "", "", "", ""),
    "Tankbuster": new SectionDefinition("Tankbuster", "", "", "/item_icons/tankbuster.png", "", "", "", ""),
    "Torment Pulse": new SectionDefinition("Torment Pulse", "", "", "/item_icons/torment_pulse.png", "", "", "", ""),

    "Arctic Blast": new SectionDefinition("Arctic Blast", "", "", "/item_icons/arctic_blast.png", "", "", "", ""),
    "Boundless Spirit": new SectionDefinition("Boundless Spirit", "", "", "/item_icons/boundless_spirit.png", "", "", "", ""),
    "Curse": new SectionDefinition("Curse", "", "", "/item_icons/curse.png", "", "", "", ""),
    "Echo Shard": new SectionDefinition("Echo Shard", "", "", "/item_icons/echo_shard.png", "", "", "", ""),
    "Escalating Exposure": new SectionDefinition("Escalating Exposure", "", "", "/item_icons/escalating_exposure.png", "", "", "", ""),
    "Ethereal Shift": new SectionDefinition("Ethereal Shift", "", "", "/item_icons/ethereal_shift.png", "", "", "", ""),
    "Focus Lens": new SectionDefinition("Focus Lens", "", "", "/item_icons/focus_lens.png", "", "", "", ""),
    "Lightning Scroll": new SectionDefinition("Lightning Scroll", "", "", "/item_icons/lightning_scroll.png", "", "", "", ""),
    "Magic Carpet": new SectionDefinition("Magic Carpet", "", "", "/item_icons/magic_carpet.png", "", "", "", ""),
    "Mercurial Magnum": new SectionDefinition("Mercurial Magnum", "", "", "/item_icons/mercurial_magnum.png", "", "", "", ""),
    "Mystic Reverb": new SectionDefinition("Mystic Reverb", "", "", "/item_icons/mystic_reverb.png", "", "", "", ""),
    "Refresher": new SectionDefinition("Refresher", "", "", "/item_icons/refresher.png", "", "", "", ""),
    "Scourge": new SectionDefinition("Scourge", "", "", "/item_icons/scourge.png", "", "", "", ""),
    "Spirit Burn": new SectionDefinition("Spirit Burn", "", "", "/item_icons/spirit_burn.png", "", "", "", ""),
    "Transcendent Cooldown": new SectionDefinition("Transcendent Cooldown", "", "", "/item_icons/transcendent_cooldown.png", "", "", "", ""),
    "Vortex Web": new SectionDefinition("Vortex Web", "", "", "/item_icons/vortex_web.png", "", "", "", "")
};

