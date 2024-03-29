const legends = new Map([
    ["lgd_bloodhound", "Bloodhound"],
    ["lgd_gibraltar", "Gibraltar"],
    ["lgd_lifeline", "Lifeline"],
    ["lgd_pathfinder", "Pathfinder"],
    ["lgd_wraith", "Wraith"],
    ["lgd_bangalore", "Bangalore"],
    ["lgd_caustic", "Caustic"],
    ["lgd_mirage", "Mirage"],
    ["lgd_octane", "Octane"],
    ["lgd_wattson", "Wattson"],
    ["lgd_crypto", "Crypto"],
    ["lgd_revenant", "Revenant"],
    ["lgd_loba", "Loba"],
    ["lgd_rampart", "Rampart"],
    ["lgd_horizon", "Horizon"],
    ["lgd_fuse", "Fuse"],
    ["lgd_valkyrie", "Valkyrie"],
    ["lgd_seer", "Seer"],
    ["lgd_ash", "Ash"],
    ["lgd_madmaggie", "Mad Maggie"],
    ["lgd_newcastle", "Newcastle"],
    ["lgd_vantage", "Vantage"],
    ["lgd_catalyst", "Catalyst"],
    ["lgd_ballistic", "Ballistic"],
    ["lgd_conduit", "Conduit"]
]);

const weapons = [
    "HAVOC Rifle",
    "VK-47 Flatline",
    "Hemlok Burst AR",
    "R-301 Carbine",
    "Nemesis",
    "Alternator SMG",
//  "Prowler Burst PDW",  <-- In supply drops
    "R-99 SMG",
    "Volt SMG",
    "C.A.R. SMG",
    "Devotion LMG",
    "L-STAR EMG",
    "M600 Spitfire",
    "Rampage LMG",
    "G7 Scout",
    "Triple Take",
    "30-30 Repeater",
//  "Bocek Compound Bow",  <-- In supply drops
    "Charge Rifle",
    "Longbow DMR",
    "Sentinel",
    "EVA-8 Auto",
    "Mastiff Shotgun",
    "Mozambique Shotgun",
    "Peacekeeper",
    "RE-45 Auto",
    "P2020"
//  "Wingman"              <-- In supply drops
]

window.onload = function() {
    randomAll();
}

function randomLegend() {
    let availLegends = getAvailableLegends();
    document.querySelector("#selected_legend").innerHTML = getRandomItem(availLegends);
}

function randomWeapons() {
    let weapOne = getRandomItem(weapons);
    let weapTwo = getRandomItem(weapons);
    
    let mustBeUnique = document.querySelector("#wpn_unique").checked;
    while (mustBeUnique && weapOne === weapTwo) {
        weapTwo = getRandomItem(weapons);
    }

    document.querySelector("#weapon_one").innerHTML = weapOne;
    document.querySelector("#weapon_two").innerHTML = weapTwo;
}

function randomAll() {
    randomLegend();
    randomWeapons();
}

function getAvailableLegends() {
    let availLegends = []
    legends.forEach(function(value, key) {
        if (document.querySelector("#" + key).checked) {
            availLegends.push(value);
        }
    });
    return availLegends;
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
