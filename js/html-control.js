

const createCharacterStatTable = (entity) => {
    /*
* {
  "id": "player",
  "name": "hero",
  "classes": [
    "knight"
  ],
  "types": [
    "player",
    "anthro"
  ],
  "LVL": 5,
  "EXP": {
    "total": 0,
    "toNext": 100
  },
  "HP": 25,
  "HPcap": 25,
  "FP": 10,
  "FPcap": 15,
  "attr": {
    "STR": 4,
    "END": 5,
    "WIL": 4,
    "INT": 5,
    "DEX": 4,
    "LUC": 5
  },
  "factions": [
    ""
  ]
}
* */
    let html =
        `<table class="table table-sm table-hover">
            <thead>
            <tr>
                <th scope="col">Name:</th>
                <th scope="col" id="pc-name">${entity.name}</th>
                <th scope="col">Level:</th>
                <th scope="col" id="pc-lvl">${entity.LVL}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Total EXP:</th>
                <td id="pc-xp-total">${entity.EXP.total}</td>
                <td> to next LVL:</td>
                <td id="pc-xp-tolvl">${entity.EXP.toNext}</td>
            </tr>
            <tr>
                <th scope="row">Max Health:</th>
                <td id="pc-max-hp">unset</td>
                <td>Current Health:</td>
                <td id="pc-hp">unset</td>
            </tr>
            <tr>
                <th scope="row">Max Focus:</th>
                <td id="pc-max-fp">unset</td>
                <td>Current Focus:</td>
                <td id="pc-fp">unset</td>
            </tr>
            <tr>
                <th scope="row">Strength</th>
                <td id="pc-str">unset</td>
            </tr>
            <tr>
                <th scope="row">Endurance</th>
                <td id="pc-end">unset</td>
            </tr>
            <tr>
                <th scope="row">Willpower</th>
                <td id="pc-wil">unset</td>
            </tr>
            <tr>
                <th scope="row">Intelligence</th>
                <td id="pc-int">unset</td>
            </tr>
            <tr>
                <th scope="row">Dexterity</th>
                <td id="pc-dex">unset</td>
            </tr>
            <tr>
                <th scope="row">Luck</th>
                <td id="pc-luc">unset</td>
            </tr>
            </tbody>
        </table>`;
}