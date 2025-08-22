
const adjectives = [ "Ironclad","Brassbound","Scarlet","Crimson","Obsidian","Verdant","Ivory","Azure","Gilded","Copperplate","Steelborn","Steam-born","Clockwork","Cogwheel","Gear-grimed","Ashen","Charred","Cinder-","Rusty","Tarnished","Polished","Ivory-bound","Shadowed","Moonlit","Sunlit","Twilight","Bloodied","Grim","Dreadful","Terrible","Merciless","Ruthless","Silent","Thunderous","Stormbound","Tempestuous","Howling","Whispering","Roaring","Clanking","Grinding","Hissing","Soot-stained","Smoke-drenched","Ember-marked","Flame-kissed","Infernal","Hellbound","Heaven’s","Angel’s","Devil’s","Demon’s","Saint’s","Widow’s","Orphan’s","Soldier’s","Baron’s","Duke’s","Emperor’s","King’s","Queen’s","Kaiser’s","Tsar’s","General’s","Captain’s","Lieutenant’s","Colonel’s","Marshal’s","Commodore’s","Admiral’s","Navigator’s","Pilot’s","Engineer’s","Mechanic’s","Inventor’s","Tinkerer’s","Artificer’s","Architect’s","Builder’s","Smith’s","Forgemaster’s","Ironfang","Steeljaw","Brassbeard","Leadfoot","Gunmetal","Powder-marked","Shot-torn","Shellscarred","Bayonet-stained","Sabred","Bayonetted","Cavalier’s","Knight’s","Squire’s","Herald’s","Bannered","Flagbearer’s","Standarded","Colors of the","Blood of the","Ashes of the","Fangs of the","Claws of the","Teeth of the","Wings of the","Talons of the","Scales of the","Hidebound","Bone-marked","Skull-faced","Coffin-born","Gravemarked","Tomb-born","Crypt-kept","Eternal","Endless","Timeless","Forgotten","Lost","Forsaken","Banished","Exiled","Vagrant","Wanderer’s","Nomad’s","Pilgrim’s","Gypsy’s","Traveler’s","Outcast’s","Rogue’s","Renegade’s","Traitor’s","Turncoat’s","Loyalist’s","Patriot’s","Rebel’s","Insurgent’s","Revolutionary’s","Anarchist’s","Order of the","Legion of the","Company of the","Band of the","Brotherhood of the","Sisterhood of the","Children of the","Sons of the","Daughters of the","Heirs of the","Crown’s","Throne’s","Empire’s","Republic’s","Union’s","Federation’s","Confederacy’s","Alliance’s","Coalition’s","Compact’s","Concord’s","Treaty of the","Automated","Mechanized","Industrial","Factory-born","Millwright’s","Boilermaker’s","Rivet-studded","Gasket-bound","Valve-turned","Piston-driven","Pressure-born","Gauge-marked","Whistle-howling","Gearbound","Spring-loaded","Chain-draped","Winding","Wound-tight","Overclocked","Burnished","Shining","Glorious","Victorious","Majestic","Triumphant","Imperial","Royal","Noble","Aristocrat’s","Peasant’s","Worker’s","Unionized","Strikeborn","Red-flagged","Hammer-marked","Anvil’s" ];

const nouns = [ "Roughnecks","Hussars","Grenadiers","Hellions","Zeppelins","Farseers","Cogsmen","Hammers","Revenants","Templars","Marauders","Ironsides","Jackals","Lancers","Juggernauts","Gearjacks","Corsairs","Wardens","Arbalesters","Automata","Rangers","Dragoons","Riflemen","Sharpshooters","Marksmen","Snipers","Skirmishers","Shocktroops","Stormers","Raiders","Scavengers","Looters","Pillagers","Cutthroats","Highlanders","Lowlanders","Pioneers","Frontiersmen","Settlers","Colonials","Explorers","Navigators","Cartographers","Mapmakers","Pathfinders","Outriders","Vanguards","Rearguards","Guardians","Protectors","Defenders","Sentinels","Keepers","Watchers","Observers","Surveyors","Trackers","Hunters","Stalkers","Predators","Beasts","Wolves","Lions","Tigers","Bears","Ravens","Crows","Vultures","Hawks","Falcons","Owls","Eagles","Serpents","Cobras","Adders","Vipers","Dragons","Wyverns","Basilisks","Chimeras","Gorgons","Hydras","Giants","Titans","Colossi","Cyclopes","Trolls","Ogres","Golems","Homunculi","Wraiths","Phantoms","Ghosts","Spectres","Shadows","Shades","Nightmares","Dreamers","Sleepwalkers","Howlers","Screamers","Shouters","Singers","Chanters","Barkers","Clawers","Biters","Fangs","Tusks","Horns","Hooves","Talons","Scales","Shells","Carapaces","Banners","Flags","Standards","Pennants","Icons","Symbols","Sigils","Runes","Glyphs","Deadeyes","Shooters","Cannoneers","Bombardiers","Sappers","Miners","Diggers","Burrowers","Tunnelers","Drillers","Breakers","Smashers","Crashers","Bashers","Blasters","Burners","Scorchers","Torches","Flamers","Igniters","Exploders","Detonators","Rocketeers","Aviators","Pilots","Airmen","Balloonists","Skyfolk","Cloudwalkers","Starwatchers","Moonchasers","Sunstalkers","Astrologers","Alchemists","Mystics","Seers","Prophets","Oracles","Diviners","Enchanters","Wizards","Warlocks","Witches","Hags","Sorcerers","Magisters","Magi","Illusionists","Charlatans","Conjurers","Summoners","Necromancers","Plaguebearers","Pestilents","Diseased","Infected","Contagions","Virulents","Corruptors","Defilers","Profaners","Desecrators","Blasphemers","Heretics","Cultists","Zealots","Fanatics","Flagellants","Martyrs","Crusaders","Paladins","Champions","Heroes","Villains","Monarchists","Republicans","Anarchs","Revolutionaries","Workers","Unionists","Strikebreakers","Loyalists","Patriots","Turncoats","Mercenaries","Freeblades","Sell-swords","Condottieri" ];

const prefixes = [ "Royal","Imperial","Grand","Free State","Union of","Republic of","Kingdom of","Empire of","Confederacy of","United Provinces of","Principality of","Duchy of","Electorate of","Coalition of" ];

function numberSuffix(num) {
  if (num % 100 >= 11 && num % 100 <= 13) return num + "th";
  switch (num % 10) {
    case 1: return num + "st";
    case 2: return num + "nd";
    case 3: return num + "rd";
    default: return num + "th";
  }
}

function generateNames() {
  const qty = parseInt(document.getElementById("quantity").value) || 1;
  const includeNumber = document.getElementById("includeNumber").checked;
  const includePrefix = document.getElementById("includePrefix").checked;
  const customPrefix = document.getElementById("customPrefix").value.trim();

  let results = [];

  for (let i = 0; i < qty; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    let parts = [];

    if (includeNumber) {
      const number = Math.floor(Math.random() * 199) + 1;
      parts.push(numberSuffix(number));
    }

    if (includePrefix) {
      parts.push(customPrefix || prefixes[Math.floor(Math.random() * prefixes.length)]);
    }

    parts.push(adj, noun);
    results.push(parts.join(" "));
  }

  document.getElementById("output").innerText = results.join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("includePrefix").addEventListener("change", function () {
    document.getElementById("customPrefixField").style.display = this.checked ? "block" : "none";
  });
  // Bind button safely
  const button = document.querySelector("button[onclick='generateNames()']");
  if (button) {
    button.addEventListener("click", generateNames);
  }
});
