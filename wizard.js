var wizard = {
    "name": "new name",
    "class": "wizard",
    "level": 1,
    "health" : 13,
    "spellLevel": 1,
    "staff" : {
        "spellAmplitude" : 1,
        "spellLevel" : 1,
        "damageType" : "magic"
    },
    "shortSword" : {
        "damage" : 12,
        "damageType" : "slashing",
    }
}

console.log(wizard);

var fighter = {
    "name" : "new name",
    "class" : "fighter",
    "level" : 1,
    "health" : 20,
    "weapons class" : "medium"
}

console.log(fighter);

// create 3 classes of characters
// these characters each need a name, a role, a level, and a set ammount of health
// set health, armor class, magic resist using dice role amount
// for characters who are spell casters, create a spell amplification/spell casting system that incorporates level of spell, strength of spell, and hit % rate.
// create items that match that characters fighting needs
// set combat initiation system
// set hit system (think DnD style AC)
// create items with special effects etc.