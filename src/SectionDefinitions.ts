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
    "Abrams": new SectionDefinition("Abrams", '/backgrounds/abrams', "/nameplates/abrams.svg", "/hero_icons/abrams", "/ability_icons/abrams_ability1", "/ability_icons/abrams_ability2", "/ability_icons/abrams_ability3", "/ability_icons/abrams_ability4"),
    "Bebop": new SectionDefinition("Bebop", '/backgrounds/bebop', "/nameplates/bebop.svg", "/hero_icons/bebop", "/ability_icons/bebop_ability1", "/ability_icons/bebop_ability2", "/ability_icons/bebop_ability3", "/ability_icons/bebop_ability4"),
    "Billy": new SectionDefinition("Billy", '/backgrounds/billy', "/nameplates/billy.svg", "/hero_icons/billy", "/ability_icons/billy_ability1", "/ability_icons/billy_ability2", "/ability_icons/billy_ability3", "/ability_icons/billy_ability4"),
    "Calico": new SectionDefinition("Calico", '/backgrounds/calico', "/nameplates/calico.svg", "/hero_icons/calico", "/ability_icons/calico_ability1", "/ability_icons/calico_ability2", "/ability_icons/calico_ability3", "/ability_icons/calico_ability4"),
    "Doorman": new SectionDefinition("The Doorman", '/backgrounds/doorman', "/nameplates/doorman.svg", "/hero_icons/doorman", "/ability_icons/doorman_ability1", "/ability_icons/doorman_ability2", "/ability_icons/doorman_ability3", "/ability_icons/doorman_ability4"),
    "Drifter": new SectionDefinition("Drifter", '/backgrounds/drifter', "/nameplates/drifter.svg", "/hero_icons/drifter", "/ability_icons/drifter_ability1", "/ability_icons/drifter_ability2", "/ability_icons/drifter_ability3", "/ability_icons/drifter_ability4"),
    "Dynamo": new SectionDefinition("Dynamo", '/backgrounds/dynamo', "/nameplates/dynamo.svg", "/hero_icons/dynamo", "/ability_icons/dynamo_ability1", "/ability_icons/dynamo_ability2", "/ability_icons/dynamo_ability3", "/ability_icons/dynamo_ability4"),
    "Grey Talon": new SectionDefinition("Grey Talon", '/backgrounds/grey_talon', "/nameplates/grey_talon.svg", "/hero_icons/grey_talon", "/ability_icons/grey_talon_ability1", "/ability_icons/grey_talon_ability2", "/ability_icons/grey_talon_ability3", "/ability_icons/grey_talon_ability4"),
    "Haze": new SectionDefinition("Haze", '/backgrounds/haze', "/nameplates/haze.svg", "/hero_icons/haze", "/ability_icons/haze_ability1", "/ability_icons/haze_ability2", "/ability_icons/haze_ability3", "/ability_icons/haze_ability4"),
    "Holliday": new SectionDefinition("Holliday", '/backgrounds/holliday', "/nameplates/holliday.svg", "/hero_icons/holliday", "/ability_icons/holliday_ability1", "/ability_icons/holliday_ability2", "/ability_icons/holliday_ability3", "/ability_icons/holliday_ability4"),
    "Infernus": new SectionDefinition("Infernus", '/backgrounds/infernus', "/nameplates/infernus.svg", "/hero_icons/infernus", "/ability_icons/infernus_ability1", "/ability_icons/infernus_ability2", "/ability_icons/infernus_ability3", "/ability_icons/infernus_ability4"),
    "Ivy": new SectionDefinition("Ivy", '/backgrounds/ivy', "/nameplates/ivy.svg", "/hero_icons/ivy", "/ability_icons/ivy_ability1", "/ability_icons/ivy_ability2", "/ability_icons/ivy_ability3", "/ability_icons/ivy_ability4"),
    "Kelvin": new SectionDefinition("Kelvin", '/backgrounds/kelvin', "/nameplates/kelvin.svg", "/hero_icons/kelvin", "/ability_icons/kelvin_ability1", "/ability_icons/kelvin_ability2", "/ability_icons/kelvin_ability3", "/ability_icons/kelvin_ability4"),
    "Lady Geist": new SectionDefinition("Lady Geist", '/backgrounds/lady_geist', "/nameplates/lady_geist.svg", "/hero_icons/lady_geist", "/ability_icons/lady_geist_ability1", "/ability_icons/lady_geist_ability2", "/ability_icons/lady_geist_ability3", "/ability_icons/lady_geist_ability4"),
    "Lash": new SectionDefinition("Lash", '/backgrounds/lash', "/nameplates/lash.svg", "/hero_icons/lash", "/ability_icons/lash_ability1", "/ability_icons/lash_ability2", "/ability_icons/lash_ability3", "/ability_icons/lash_ability4"),
    "McGinnis": new SectionDefinition("McGinnis", '/backgrounds/mcginnis', "/nameplates/mcginnis.svg", "/hero_icons/mcginnis", "/ability_icons/mcginnis_ability1", "/ability_icons/mcginnis_ability2", "/ability_icons/mcginnis_ability3", "/ability_icons/mcginnis_ability4"),
    "Mina": new SectionDefinition("Mina", '/backgrounds/mina', "/nameplates/mina.svg", "/hero_icons/mina", "/ability_icons/mina_ability1", "/ability_icons/mina_ability2", "/ability_icons/mina_ability3", "/ability_icons/mina_ability4"),
    "Mirage": new SectionDefinition("Mirage", '/backgrounds/mirage', "/nameplates/mirage.svg", "/hero_icons/mirage", "/ability_icons/mirage_ability1", "/ability_icons/mirage_ability2", "/ability_icons/mirage_ability3", "/ability_icons/mirage_ability4"),
    "Mo & Krill": new SectionDefinition("Mo & Krill", '/backgrounds/mo_krill', "/nameplates/mo_krill.svg", "/hero_icons/mo_krill", "/ability_icons/mo_krill_ability1", "/ability_icons/mo_krill_ability2", "/ability_icons/mo_krill_ability3", "/ability_icons/mo_krill_ability4"),
    "Paige": new SectionDefinition("Paige", '/backgrounds/paige', "/nameplates/paige.svg", "/hero_icons/paige", "/ability_icons/paige_ability1", "/ability_icons/paige_ability2", "/ability_icons/paige_ability3", "/ability_icons/paige_ability4"),
    "Paradox": new SectionDefinition("Paradox", '/backgrounds/paradox', "/nameplates/paradox.svg", "/hero_icons/paradox", "/ability_icons/paradox_ability1", "/ability_icons/paradox_ability2", "/ability_icons/paradox_ability3", "/ability_icons/paradox_ability4"),
    "Pocket": new SectionDefinition("Pocket", '/backgrounds/pocket', "/nameplates/pocket.svg", "/hero_icons/pocket", "/ability_icons/pocket_ability1", "/ability_icons/pocket_ability2", "/ability_icons/pocket_ability3", "/ability_icons/pocket_ability4"),
    "Seven": new SectionDefinition("Seven", '/backgrounds/seven', "/nameplates/seven.svg", "/hero_icons/seven", "/ability_icons/seven_ability1", "/ability_icons/seven_ability2", "/ability_icons/seven_ability3", "/ability_icons/seven_ability4"),
    "Shiv": new SectionDefinition("Shiv", '/backgrounds/shiv', "/nameplates/shiv.svg", "/hero_icons/shiv", "/ability_icons/shiv_ability1", "/ability_icons/shiv_ability2", "/ability_icons/shiv_ability3", "/ability_icons/shiv_ability4"),
    "Sinclair": new SectionDefinition("Sinclair", '/backgrounds/sinclair', "/nameplates/sinclair.svg", "/hero_icons/sinclair", "/ability_icons/sinclair_ability1", "/ability_icons/sinclair_ability2", "/ability_icons/sinclair_ability3", "/ability_icons/sinclair_ability4"),
    "Victor": new SectionDefinition("Victor", '/backgrounds/victor', "/nameplates/victor.svg", "/hero_icons/victor", "/ability_icons/victor_ability1", "/ability_icons/victor_ability2", "/ability_icons/victor_ability3", "/ability_icons/victor_ability4"),
    "Vindicta": new SectionDefinition("Vindicta", '/backgrounds/vindicta', "/nameplates/vindicta.svg", "/hero_icons/vindicta", "/ability_icons/vindicta_ability1", "/ability_icons/vindicta_ability2", "/ability_icons/vindicta_ability3", "/ability_icons/vindicta_ability4"),
    "Viscous": new SectionDefinition("Viscous", '/backgrounds/viscous', "/nameplates/viscous.svg", "/hero_icons/viscous", "/ability_icons/viscous_ability1", "/ability_icons/viscous_ability2", "/ability_icons/viscous_ability3", "/ability_icons/viscous_ability4"),
    "Vyper": new SectionDefinition("Vyper", '/backgrounds/vyper', "/nameplates/vyper.svg", "/hero_icons/vyper", "/ability_icons/vyper_ability1", "/ability_icons/vyper_ability2", "/ability_icons/vyper_ability3", "/ability_icons/vyper_ability4"),
    "Warden": new SectionDefinition("Warden", '/backgrounds/warden', "/nameplates/warden.svg", "/hero_icons/warden", "/ability_icons/warden_ability1", "/ability_icons/warden_ability2", "/ability_icons/warden_ability3", "/ability_icons/warden_ability4"),
    "Wraith": new SectionDefinition("Wraith", '/backgrounds/wraith', "/nameplates/wraith.svg", "/hero_icons/wraith", "/ability_icons/wraith_ability1", "/ability_icons/wraith_ability2", "/ability_icons/wraith_ability3", "/ability_icons/wraith_ability4"),
    "Yamato": new SectionDefinition("Yamato", '/backgrounds/yamato', "/nameplates/yamato.svg", "/hero_icons/yamato", "/ability_icons/yamato_ability1", "/ability_icons/yamato_ability2", "/ability_icons/yamato_ability3", "/ability_icons/yamato_ability4"),
};



export const GENERAL_DEFINITIONS: Record<string, SectionDefinition> = {
    "Map": new SectionDefinition("Map", '/backgrounds/generic', "", "/deadlock-patcheshero_icons/deadlock_logo", "", "", "", "",),
    "Gameplay": new SectionDefinition("Gameplay", '/backgrounds/generic', "", "/hero_icons/deadlock_logo", "", "", "", "",),
    "Bugfixes": new SectionDefinition("Bugfixes", '/backgrounds/generic', "", "/hero_icons/deadlock_logo", "", "", "", "",)
}

export const ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Weapon": new SectionDefinition("Weapon", '/backgrounds/weapon', "", "/item_icons/weapon/weapon", "", "", "", "",),
    "Vitality": new SectionDefinition("Vitality", '/backgrounds/vitality', "", "/item_icons/vitality/vitality", "", "", "", "",),
    "Spirit": new SectionDefinition("Spirit", '/backgrounds/spirit', "", "/item_icons/spirit/spirit", "", "", "", "",)
}

export const WEAPON_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Close Quarters": new SectionDefinition("Close Quarters", "", "", "/item_icons/weapon/close_quarters", "", "", "", ""),
    "Extended Magazine": new SectionDefinition("Extended Magazine", "", "", "/item_icons/weapon/extended_magazine", "", "", "", ""),
    "Headshot Booster": new SectionDefinition("Headshot Booster", "", "", "/item_icons/weapon/headshot_booster", "", "", "", ""),
    "High Velocity Rounds": new SectionDefinition("High Velocity Rounds", "", "", "/item_icons/weapon/high_velocity_rounds", "", "", "", ""),
    "Monster Rounds": new SectionDefinition("Monster Rounds", "", "", "/item_icons/weapon/monster_rounds", "", "", "", ""),
    "Rapid Rounds": new SectionDefinition("Rapid Rounds", "", "", "/item_icons/weapon/rapid_rounds", "", "", "", ""),
    "Restorative Shot": new SectionDefinition("Restorative Shot", "", "", "/item_icons/weapon/restorative_shot", "", "", "", ""),

    "Active Reload": new SectionDefinition("Active Reload", "", "", "/item_icons/weapon/active_reload", "", "", "", ""),
    "Backstabber": new SectionDefinition("Backstabber", "", "", "/item_icons/weapon/backstabber", "", "", "", ""),
    "Fleetfoot": new SectionDefinition("Fleetfoot", "", "", "/item_icons/weapon/fleetfoot", "", "", "", ""),
    "Intensifying Magazine": new SectionDefinition("Intensifying Magazine", "", "", "/item_icons/weapon/intensifying_magazine", "", "", "", ""),
    "Kinetic Dash": new SectionDefinition("Kinetic Dash", "", "", "/item_icons/weapon/kinetic_dash", "", "", "", ""),
    "Long Range": new SectionDefinition("Long Range", "", "", "/item_icons/weapon/long_range", "", "", "", ""),
    "Melee Charge": new SectionDefinition("Melee Charge", "", "", "/item_icons/weapon/melee_charge", "", "", "", ""),
    "Mystic Shot": new SectionDefinition("Mystic Shot", "", "", "/item_icons/weapon/mystic_shot", "", "", "", ""),
    "Opening Rounds": new SectionDefinition("Opening Rounds", "", "", "/item_icons/weapon/opening_rounds", "", "", "", ""),
    "Slowing Bullets": new SectionDefinition("Slowing Bullets", "", "", "/item_icons/weapon/slowing_bullets", "", "", "", ""),
    "Spirit Shredder Bullets": new SectionDefinition("Spirit Shredder Bullets", "", "", "/item_icons/weapon/spirit_shredder_bullets", "", "", "", ""),
    "Split Shot": new SectionDefinition("Split Shot", "", "", "/item_icons/weapon/split_shot", "", "", "", ""),
    "Swift Striker": new SectionDefinition("Swift Striker", "", "", "/item_icons/weapon/swift_striker", "", "", "", ""),
    "Titanic Magazine": new SectionDefinition("Titanic Magazine", "", "", "/item_icons/weapon/titanic_magazine", "", "", "", ""),
    "Weakening Headshot": new SectionDefinition("Weakening Headshot", "", "", "/item_icons/weapon/weakening_headshot", "", "", "", ""),

    "Alchemical Fire": new SectionDefinition("Alchemical Fire", "", "", "/item_icons/weapon/alchemical_fire", "", "", "", ""),
    "Berserker": new SectionDefinition("Berserker", "", "", "/item_icons/weapon/berserker", "", "", "", ""),
    "Blood Tribute": new SectionDefinition("Blood Tribute", "", "", "/item_icons/weapon/blood_tribute", "", "", "", ""),
    "Burst Fire": new SectionDefinition("Burst Fire", "", "", "/item_icons/weapon/burst_fire", "", "", "", ""),
    "Cultist Sacrifice": new SectionDefinition("Cultist Sacrifice", "", "", "/item_icons/weapon/cultist_sacrifice", "", "", "", ""),
    "Escalating Resilience": new SectionDefinition("Escalating Resilience", "", "", "/item_icons/weapon/escalating_resilience", "", "", "", ""),
    "Express Shot": new SectionDefinition("Express Shot", "", "", "/item_icons/weapon/express_shot", "", "", "", ""),
    "Headhunter": new SectionDefinition("Headhunter", "", "", "/item_icons/weapon/headhunter", "", "", "", ""),
    "Heroic Aura": new SectionDefinition("Heroic Aura", "", "", "/item_icons/weapon/heroic_aura", "", "", "", ""),
    "Hollow Point": new SectionDefinition("Hollow Point", "", "", "/item_icons/weapon/hollow_point", "", "", "", ""),
    "Hunter's Aura": new SectionDefinition("Hunter's Aura", "", "", "/item_icons/weapon/hunters_aura", "", "", "", ""),
    "Point Blank": new SectionDefinition("Point Blank", "", "", "/item_icons/weapon/point_blank", "", "", "", ""),
    "Sharpshooter": new SectionDefinition("Sharpshooter", "", "", "/item_icons/weapon/sharpshooter", "", "", "", ""),
    "Spirit Rend": new SectionDefinition("Spirit Rend", "", "", "/item_icons/weapon/spiritrend", "", "", "", ""),
    "Tesla Bullets": new SectionDefinition("Tesla Bullets", "", "", "/item_icons/weapon/tesla_bullets", "", "", "", ""),
    "Toxic Bullets": new SectionDefinition("Toxic Bullets", "", "", "/item_icons/weapon/toxic_bullets", "", "", "", ""),
    "Weighted Shots": new SectionDefinition("Weighted Shots", "", "", "/item_icons/weapon/weighted_shots", "", "", "", ""),

    "Armor Piercing Rounds": new SectionDefinition("Armor Piercing Rounds", "", "", "/item_icons/weapon/armor_piercing_rounds", "", "", "", ""),
    "Capacitor": new SectionDefinition("Capacitor", "", "", "/item_icons/weapon/capacitor", "", "", "", ""),
    "Crippling Headshot": new SectionDefinition("Crippling Headshot", "", "", "/item_icons/weapon/crippling_headshot", "", "", "", ""),
    "Crushing Fists": new SectionDefinition("Crushing Fists", "", "", "/item_icons/weapon/crushing_fists", "", "", "", ""),
    "Frenzy": new SectionDefinition("Frenzy", "", "", "/item_icons/weapon/frenzy", "", "", "", ""),
    "Glass Cannon": new SectionDefinition("Glass Cannon", "", "", "/item_icons/weapon/glass_cannon", "", "", "", ""),
    "Lucky Shot": new SectionDefinition("Lucky Shot", "", "", "/item_icons/weapon/lucky_shot", "", "", "", ""),
    "Ricochet": new SectionDefinition("Ricochet", "", "", "/item_icons/weapon/ricochet", "", "", "", ""),
    "Shadow Weave": new SectionDefinition("Shadow Weave", "", "", "/item_icons/weapon/shadow_weave", "", "", "", ""),
    "Silencer": new SectionDefinition("Silencer", "", "", "/item_icons/weapon/silencer", "", "", "", ""),
    "Spellslinger": new SectionDefinition("Spellslinger", "", "", "/item_icons/weapon/spellslinger", "", "", "", ""),
    "Spiritual Overflow": new SectionDefinition("Spiritual Overflow", "", "", "/item_icons/weapon/spiritual_overflow", "", "", "", "")
};

export const VITALITY_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Extra Health": new SectionDefinition("Extra Health", "", "", "/item_icons/vitality/extra_health", "", "", "", ""),
    "Extra Regen": new SectionDefinition("Extra Regen", "", "", "/item_icons/vitality/extra_regen", "", "", "", ""),
    "Extra Stamina": new SectionDefinition("Extra Stamina", "", "", "/item_icons/vitality/extra_stamina", "", "", "", ""),
    "Healing Rite": new SectionDefinition("Healing Rite", "", "", "/item_icons/vitality/healing_rite", "", "", "", ""),
    "Melee Lifesteal": new SectionDefinition("Melee Lifesteal", "", "", "/item_icons/vitality/melee_lifesteal", "", "", "", ""),
    "Rebuttal": new SectionDefinition("Rebuttal", "", "", "/item_icons/vitality/rebuttal", "", "", "", ""),
    "Sprint Boots": new SectionDefinition("Sprint Boots", "", "", "/item_icons/vitality/sprint_boots", "", "", "", ""),

    "Battle Vest": new SectionDefinition("Battle Vest", "", "", "/item_icons/vitality/battle_vest", "", "", "", ""),
    "Bullet Lifesteal": new SectionDefinition("Bullet Lifesteal", "", "", "/item_icons/vitality/bullet_lifesteal", "", "", "", ""),
    "Debuff Reducer": new SectionDefinition("Debuff Reducer", "", "", "/item_icons/vitality/debuff_reducer", "", "", "", ""),
    "Enchanter's Emblem": new SectionDefinition("Enchanter's Emblem", "", "", "/item_icons/vitality/enchanters_emblem", "", "", "", ""),
    "Enduring Speed": new SectionDefinition("Enduring Speed", "", "", "/item_icons/vitality/enduring_speed", "", "", "", ""),
    "Guardian Ward": new SectionDefinition("Guardian Ward", "", "", "/item_icons/vitality/guardian_ward", "", "", "", ""),
    "Healbane": new SectionDefinition("Healbane", "", "", "/item_icons/vitality/healbane", "", "", "", ""),
    "Healing Booster": new SectionDefinition("Healing Booster", "", "", "/item_icons/vitality/healing_booster", "", "", "", ""),
    "Reactive Barrier": new SectionDefinition("Reactive Barrier", "", "", "/item_icons/vitality/reactive_barrier", "", "", "", ""),
    "Restorative Locket": new SectionDefinition("Restorative Locket", "", "", "/item_icons/vitality/restorative_locket", "", "", "", ""),
    "Return Fire": new SectionDefinition("Return Fire", "", "", "/item_icons/vitality/return_fire", "", "", "", ""),
    "Spirit Lifesteal": new SectionDefinition("Spirit Lifesteal", "", "", "/item_icons/vitality/spirit_lifesteal", "", "", "", ""),
    "Spirit Shielding": new SectionDefinition("Spirit Shielding", "", "", "/item_icons/vitality/spirit_shielding", "", "", "", ""),
    "Weapon Shielding": new SectionDefinition("Weapon Shielding", "", "", "/item_icons/vitality/weapon_shielding", "", "", "", ""),

    "Bullet Resilience": new SectionDefinition("Bullet Resilience", "", "", "/item_icons/vitality/bullet_resilience", "", "", "", ""),
    "Counterspell": new SectionDefinition("Counterspell", "", "", "/item_icons/vitality/counterspell", "", "", "", ""),
    "Debuff Remover": new SectionDefinition("Debuff Remover", "", "", "/item_icons/vitality/debuff_remover", "", "", "", ""),
    "Fortitude": new SectionDefinition("Fortitude", "", "", "/item_icons/vitality/fortitude", "", "", "", ""),
    "Fury Trance": new SectionDefinition("Fury Trance", "", "", "/item_icons/vitality/fury_trance", "", "", "", ""),
    "Healing Nova": new SectionDefinition("Healing Nova", "", "", "/item_icons/vitality/healing_nova", "", "", "", ""),
    "Lifestrike": new SectionDefinition("Lifestrike", "", "", "/item_icons/vitality/lifestrike", "", "", "", ""),
    "Majestic Leap": new SectionDefinition("Majestic Leap", "", "", "/item_icons/vitality/majestic_leap", "", "", "", ""),
    "Metal Skin": new SectionDefinition("Metal Skin", "", "", "/item_icons/vitality/metal_skin", "", "", "", ""),
    "Rescue Beam": new SectionDefinition("Rescue Beam", "", "", "/item_icons/vitality/rescue_beam", "", "", "", ""),
    "Spirit Resilience": new SectionDefinition("Spirit Resilience", "", "", "/item_icons/vitality/spirit_resilience", "", "", "", ""),
    "Stamina Mastery": new SectionDefinition("Stamina Mastery", "", "", "/item_icons/vitality/stamina_mastery", "", "", "", ""),
    "Trophy Collector": new SectionDefinition("Trophy Collector", "", "", "/item_icons/vitality/trophy_collector", "", "", "", ""),
    "Veil Walker": new SectionDefinition("Veil Walker", "", "", "/item_icons/vitality/veil_walker", "", "", "", ""),
    "Warp Stone": new SectionDefinition("Warp Stone", "", "", "/item_icons/vitality/warp_stone", "", "", "", ""),

    "Cheat Death": new SectionDefinition("Cheat Death", "", "", "/item_icons/vitality/cheat_death", "", "", "", ""),
    "Colossus": new SectionDefinition("Colossus", "", "", "/item_icons/vitality/colossus", "", "", "", ""),
    "Divine Barrier": new SectionDefinition("Divine Barrier", "", "", "/item_icons/vitality/divine_barrier", "", "", "", ""),
    "Diviner's Kevlar": new SectionDefinition("Diviner's Kevlar", "", "", "/item_icons/vitality/diviners_kevlar", "", "", "", ""),
    "Healing Tempo": new SectionDefinition("Healing Tempo", "", "", "/item_icons/vitality/healing_tempo", "", "", "", ""),
    "Infuser": new SectionDefinition("Infuser", "", "", "/item_icons/vitality/infuser", "", "", "", ""),
    "Inhibitor": new SectionDefinition("Inhibitor", "", "", "/item_icons/vitality/inhibitor", "", "", "", ""),
    "Juggernaut": new SectionDefinition("Juggernaut", "", "", "/item_icons/vitality/juggernaut", "", "", "", ""),
    "Leech": new SectionDefinition("Leech", "", "", "/item_icons/vitality/leech", "", "", "", ""),
    "Phantom Strike": new SectionDefinition("Phantom Strike", "", "", "/item_icons/vitality/phantom_strike", "", "", "", ""),
    "Plated Armor": new SectionDefinition("Plated Armor", "", "", "/item_icons/vitality/plated_armor", "", "", "", ""),
    "Siphon Bullets": new SectionDefinition("Siphon Bullets", "", "", "/item_icons/vitality/siphon_bullets", "", "", "", ""),
    "Spellbreaker": new SectionDefinition("Spellbreaker", "", "", "/item_icons/vitality/spellbreaker", "", "", "", ""),
    "Unstoppable": new SectionDefinition("Unstoppable", "", "", "/item_icons/vitality/unstoppable", "", "", "", ""),
    "Vampiric Burst": new SectionDefinition("Vampiric Burst", "", "", "/item_icons/vitality/vampiric_burst", "", "", "", ""),
    "Witchmail": new SectionDefinition("Witchmail", "", "", "/item_icons/vitality/witchmail", "", "", "", "")
};

export const SPIRIT_ITEM_DEFINITIONS: Record<string, SectionDefinition> = {
    "Extra Charge": new SectionDefinition("Extra Charge", "", "", "/item_icons/spirit/extra_charge", "", "", "", ""),
    "Extra Spirit": new SectionDefinition("Extra Spirit", "", "", "/item_icons/spirit/extra_spirit", "", "", "", ""),
    "Mystic Burst": new SectionDefinition("Mystic Burst", "", "", "/item_icons/spirit/mystic_burst", "", "", "", ""),
    "Mystic Expansion": new SectionDefinition("Mystic Expansion", "", "", "/item_icons/spirit/mystic_expansion", "", "", "", ""),
    "Mystic Regeneration": new SectionDefinition("Mystic Regeneration", "", "", "/item_icons/spirit/mystic_regeneration", "", "", "", ""),
    "Rusted Barrel": new SectionDefinition("Rusted Barrel", "", "", "/item_icons/spirit/rusted_barrel", "", "", "", ""),
    "Spirit Strike": new SectionDefinition("Spirit Strike", "", "", "/item_icons/spirit/spirit_strike", "", "", "", ""),

    "Arcane Surge": new SectionDefinition("Arcane Surge", "", "", "/item_icons/spirit/arcane_surge", "", "", "", ""),
    "Bullet Resist Shredder": new SectionDefinition("Bullet Resist Shredder", "", "", "/item_icons/spirit/bullet_resist_shredder", "", "", "", ""),
    "Cold Front": new SectionDefinition("Cold Front", "", "", "/item_icons/spirit/cold_front", "", "", "", ""),
    "Compress Cooldown": new SectionDefinition("Compress Cooldown", "", "", "/item_icons/spirit/improved_cooldown", "", "", "", ""),
    "Duration Extender": new SectionDefinition("Duration Extender", "", "", "/item_icons/spirit/duration_extender", "", "", "", ""),
    "Improved Spirit": new SectionDefinition("Improved Spirit", "", "", "/item_icons/spirit/improved_spirit", "", "", "", ""),
    "Mystic Slow": new SectionDefinition("Mystic Slow", "", "", "/item_icons/spirit/mystic_slow", "", "", "", ""),
    "Mystic Vulnerability": new SectionDefinition("Mystic Vulnerability", "", "", "/item_icons/spirit/mystic_vulnerability", "", "", "", ""),
    "Quicksilver Reload": new SectionDefinition("Quicksilver Reload", "", "", "/item_icons/spirit/quicksilver_reload", "", "", "", ""),
    "Slowing Hex": new SectionDefinition("Slowing Hex", "", "", "/item_icons/spirit/slowing_hex", "", "", "", ""),
    "Spirit Sap": new SectionDefinition("Spirit Sap", "", "", "/item_icons/spirit/spirit_sap", "", "", "", ""),
    "Suppressor": new SectionDefinition("Suppressor", "", "", "/item_icons/spirit/suppressor", "", "", "", ""),

    "Decay": new SectionDefinition("Decay", "", "", "/item_icons/spirit/decay", "", "", "", ""),
    "Disarming Hex": new SectionDefinition("Disarming Hex", "", "", "/item_icons/spirit/disarming_hex", "", "", "", ""),
    "Greater Expansion": new SectionDefinition("Greater Expansion", "", "", "/item_icons/spirit/greater_expansion", "", "", "", ""),
    "Knockdown": new SectionDefinition("Knockdown", "", "", "/item_icons/spirit/knockdown", "", "", "", ""),
    "Radiant Regeneration": new SectionDefinition("Radiant Regeneration", "", "", "/item_icons/spirit/radiant_regeneration", "", "", "", ""),
    "Rapid Recharge": new SectionDefinition("Rapid Recharge", "", "", "/item_icons/spirit/rapid_recharge", "", "", "", ""),
    "Silence Wave": new SectionDefinition("Silence Wave", "", "", "/item_icons/spirit/silence_glyph", "", "", "", ""),
    "Spirit Snatch": new SectionDefinition("Spirit Snatch", "", "", "/item_icons/spirit/spirit_snatch", "", "", "", ""),
    "Superior Cooldown": new SectionDefinition("Superior Cooldown", "", "", "/item_icons/spirit/superior_cooldown", "", "", "", ""),
    "Superior Duration": new SectionDefinition("Superior Duration", "", "", "/item_icons/spirit/superior_duration", "", "", "", ""),
    "Surge of Power": new SectionDefinition("Surge of Power", "", "", "/item_icons/spirit/surge_of_power", "", "", "", ""),
    "Tankbuster": new SectionDefinition("Tankbuster", "", "", "/item_icons/spirit/tankbuster", "", "", "", ""),
    "Torment Pulse": new SectionDefinition("Torment Pulse", "", "", "/item_icons/spirit/torment_pulse", "", "", "", ""),

    "Arctic Blast": new SectionDefinition("Arctic Blast", "", "", "/item_icons/spirit/arctic_blast", "", "", "", ""),
    "Boundless Spirit": new SectionDefinition("Boundless Spirit", "", "", "/item_icons/spirit/boundless_spirit", "", "", "", ""),
    "Curse": new SectionDefinition("Curse", "", "", "/item_icons/spirit/curse", "", "", "", ""),
    "Echo Shard": new SectionDefinition("Echo Shard", "", "", "/item_icons/spirit/echo_shard", "", "", "", ""),
    "Escalating Exposure": new SectionDefinition("Escalating Exposure", "", "", "/item_icons/spirit/escalating_exposure", "", "", "", ""),
    "Ethereal Shift": new SectionDefinition("Ethereal Shift", "", "", "/item_icons/spirit/ethereal_shift", "", "", "", ""),
    "Focus Lens": new SectionDefinition("Focus Lens", "", "", "/item_icons/spirit/focus_lens", "", "", "", ""),
    "Lightning Scroll": new SectionDefinition("Lightning Scroll", "", "", "/item_icons/spirit/lightning_scroll", "", "", "", ""),
    "Magic Carpet": new SectionDefinition("Magic Carpet", "", "", "/item_icons/spirit/magic_carpet", "", "", "", ""),
    "Mercurial Magnum": new SectionDefinition("Mercurial Magnum", "", "", "/item_icons/spirit/mercurial_magnum", "", "", "", ""),
    "Mystic Reverb": new SectionDefinition("Mystic Reverb", "", "", "/item_icons/spirit/mystic_reverb", "", "", "", ""),
    "Refresher": new SectionDefinition("Refresher", "", "", "/item_icons/spirit/refresher", "", "", "", ""),
    "Scourge": new SectionDefinition("Scourge", "", "", "/item_icons/spirit/scourge", "", "", "", ""),
    "Spirit Burn": new SectionDefinition("Spirit Burn", "", "", "/item_icons/spirit/spirit_burn", "", "", "", ""),
    "Transcendent Cooldown": new SectionDefinition("Transcendent Cooldown", "", "", "/item_icons/spirit/transcendent_cooldown", "", "", "", ""),
    "Vortex Web": new SectionDefinition("Vortex Web", "", "", "/item_icons/spirit/vortex_web", "", "", "", "")
};

