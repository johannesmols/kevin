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