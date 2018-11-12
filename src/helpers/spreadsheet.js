import config from "../config";

// Load the data from the spreadsheet
export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Daten!A6:R",
                valueRenderOption: "FORMATTED_VALUE"
            })
            .then(
                response => {
                    const data = response.result.values;
                    let entries = 
                        data.map(entry => ({
                            datum: entry[0],
                            rank: entry[1],
                            prime: entry[2],
                            map: entry[3],
                            team_land: entry[4],
                            gegner_land: entry[5],
                            kevin_anwesend: entry[6],
                            kevin_toxicity: entry[7],
                            kevin_hack_call: entry[8],
                            kevin_stats: entry[9],
                            kevin_hltv_rating: entry[10],
                            ergebnis: entry[11],
                            team_hack_call: entry[12],
                            joe_tilt: entry[13],
                            jakob_tilt: entry[14],
                            mika_tilt: entry[15],
                            match_link: entry[16],
                            anmerkung: entry[17]
                        })) || [];

                    callback({
                        entries
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}