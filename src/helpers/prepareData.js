const arrayAverage = array => array.reduce((a,b) => a + b, 0) / array.length;

export function prepareMapVerteilung(data) {
    // put all maps into an array
    let maps = [];
    data.forEach(entry => {
        maps.push(entry.map);
    });

    // count how often each map is contained in the array
    let returnArray = [["Maps", "Anzahl"]];
    let alreadyCountedMaps = [];
    maps.forEach(map => {
        if (!alreadyCountedMaps.includes(map)) {
            returnArray.push([map, countOccurrences(maps, map)]);
            alreadyCountedMaps.push(map);
        }
    });
    
    return returnArray;
}

export function prepareNationalitaetenVerteilung(data, teamOrEnemies) {
    // Nationalitäten in Array machen
    let nationalities = [];
    data.forEach(entry => {
        if ((teamOrEnemies && entry.team_land) || (!teamOrEnemies && entry.gegner_land)) {
            let splitted = teamOrEnemies ? entry.team_land.split(',') : entry.gegner_land.split(',');
            splitted.forEach(country => {
                nationalities.push(country);
            });
        }
    });

    // Prozentzahlen berechnen
    let returnArray = [["Nationalität", "Verteilung in Prozent"]];
    let alreadyCalculatedCountries = [];
    nationalities.forEach(nation => {
        if (!alreadyCalculatedCountries.includes(nation)) {
            returnArray.push([nation, (countOccurrences(nationalities, nation) / nationalities.length) * 100]);
            alreadyCalculatedCountries.push(nation);
        }
    });

    return returnArray;
}

export function prepareTiltLevel(data) {
    let preparedData = [['Spieler', 'Tilt ohne Kevin', 'Tilt mit Kevin', 'Kombiniert']];

    let joe = [], joe_k = [], jakob = [], jakob_k = [], mika = [], mika_k = [];
    data.forEach(entry => {
        if (entry.joe_tilt) {
            if (entry.kevin_anwesend === 'Y') {
                joe_k.push(Number(entry.joe_tilt));
            } else {
                joe.push(Number(entry.joe_tilt));
            }
        }
        if (entry.jakob_tilt) {
            if (entry.kevin_anwesend === 'Y') {
                jakob_k.push(Number(entry.jakob_tilt));
            } else {
                jakob.push(Number(entry.jakob_tilt));
            }
        }
        if (entry.mika_tilt) {
            if (entry.kevin_anwesend === 'Y') {
                mika_k.push(Number(entry.mika_tilt));
            } else {
                mika.push(Number(entry.mika_tilt));
            }
        }
    });

    preparedData.push(['Joe', arrayAverage(joe), arrayAverage(joe_k), arrayAverage(joe.concat(joe_k))]);
    preparedData.push(['Jakob', arrayAverage(jakob), arrayAverage(jakob_k), arrayAverage(jakob.concat(jakob_k))]);
    preparedData.push(['Mika', arrayAverage(mika), arrayAverage(mika_k), arrayAverage(mika.concat(mika_k))]);
    preparedData.push(['Gesamt', arrayAverage(joe.concat(jakob, mika)), arrayAverage(joe_k.concat(jakob_k, mika_k)), arrayAverage(joe.concat(joe_k, jakob, jakob_k, mika, mika_k))]);

    return preparedData;
}

export function prepareHackCallDatenColumn(data) {
    let preparedData = [['Kategorie', 'Hack Call', 'Prime']];

    let kevin = [], team = [], team_ohne_kevin = [], uebereinstimmung = []; 
    data.forEach(entry => {
        if (entry.kevin_anwesend === 'Y') {
            kevin.push([entry.kevin_hack_call === 'Y' ? true : false, entry.prime === 'Y' ? true : false]);
        }
        if (entry.team_hack_call && entry.kevin_anwesend === 'Y') {
            team.push([entry.team_hack_call === 'Y' ? true : false, entry.prime === 'Y' ? true : false]);
        }
        if (entry.kevin_anwesend === 'N' && entry.team_hack_call) {
            team_ohne_kevin.push([entry.team_hack_call === 'Y' ? true : false, entry.prime === 'Y' ? true : false]);
        }
        if (entry.kevin_anwesend === 'Y') {
            if ((entry.kevin_hack_call === 'Y' && entry.team_hack_call === 'N') ||
                (entry.kevin_hack_call === 'N' && entry.team_hack_call === 'N')) 
            {
                uebereinstimmung.push(true);
            } else {
                uebereinstimmung.push(false);
            }
        }
    });

    let kevin_hack_call = percentageTrue(kevin.map(function(value, index) { return value[0] })); // Wie oft Kevin Hack called
    let kevin_prime = percentageTrue(kevin.filter(e => e[0] === true).map(function(value, index) { return value[1] })); // Wie viele Matches davon Prime waren
    let team_hack_call = percentageTrue(team.map(function(value, index) { return value[0] })); // Wie oft das Team Hack called
    let team_prime = percentageTrue(team.filter(e => e[0] === true).map(function(value, index) { return value[1] })); // Wie viele Matches davon Prime waren
    let team_o_k_hack_call = percentageTrue(team_ohne_kevin.map(function(value, index) { return value[0] })); // Wie oft das Team ohne Kevin Hack called
    let team_o_k_prime = percentageTrue(team_ohne_kevin.filter(e => e[0] === true).map(function(value, index) { return value[1] })); // Wie viele Matches davon Prime waren
    let uebereinstimmung_p = percentageTrue(uebereinstimmung);
    
    preparedData.push(['Kevin', kevin_hack_call, kevin_prime]);
    preparedData.push(['Team mit Kevin', team_hack_call, team_prime]);
    preparedData.push(['Team ohne Kevin', team_o_k_hack_call, team_o_k_prime]);
    preparedData.push(['Zustimmung mit Kevin' , uebereinstimmung_p, 0]);

    return preparedData;
}

export function prepareHackCallDaten(data) {
    let preparedData = [['From', 'To', 'Weight']];

    let kevin = [], team = [];
    data.forEach(entry => {
        if (entry.kevin_anwesend && entry.kevin_hack_call) {
            kevin.push([entry.kevin_hack_call === 'Y' ? true : false, entry.prime === 'Y' ? true : false]);
            team.push([entry.team_hack_call === 'Y' ? true : false, entry.prime === 'Y' ? true : false]);
        }
    });
    
    preparedData.push(['Kevin', 'Hack Call', kevin.filter(e => e[0] === true).length]);
    preparedData.push(['Kevin', 'Non-Hack Call', kevin.filter(e => e[0] === false).length]);
    preparedData.push(['Team', 'Hack Call', team.filter(e => e[0] === true).length]);
    preparedData.push(['Team', 'Non-Hack Call', team.filter(e => e[0] === false).length]);
    
    preparedData.push(['Non-Hack Call', 'Prime', 
        kevin.filter(e => e[0] === false)
        .concat(team.filter(e => e[0] === false))
        .filter(e => e[1] === true).length]);
    preparedData.push(['Non-Hack Call', 'Non-Prime', 
        kevin.filter(e => e[0] === false)
        .concat(team.filter(e => e[0] === false))
        .filter(e => e[1] === false).length]);
    preparedData.push(['Hack Call', 'Prime', 
        kevin.filter(e => e[0] === true)
        .concat(team.filter(e => e[0] === true))
        .filter(e => e[1] === true).length]);
    preparedData.push(['Hack Call', 'Non-Prime', 
        kevin.filter(e => e[0] === true)
        .concat(team.filter(e => e[0] === true))
        .filter(e => e[1] === false).length]);

    return preparedData;
}

function countOccurrences(data, value) {
    let counter = 0;
    data.forEach(map => {
        if (value === map) {
            counter++;
        }
    });
    return counter;
}

function percentageTrue(data) {
    return data.filter(e => e === true).length / data.length * 100;
}