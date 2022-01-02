

const createEntityStatTable = (entity) => {
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
        `<thead>
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
                <td id="pc-max-hp">${entity.HPcap}</td>
                <td>Current Health:</td>
                <td id="pc-hp">${entity.HP}</td>
            </tr>
            <tr>
                <th scope="row">Max Focus:</th>
                <td id="pc-max-fp">${entity.FPcap}</td>
                <td>Current Focus:</td>
                <td id="pc-fp">${entity.FP}</td>
            </tr>
            <tr>
                <th scope="row">Strength</th>
                <td id="pc-str">${entity.attr.STR}</td>
            </tr>
            <tr>
                <th scope="row">Endurance</th>
                <td id="pc-end">${entity.attr.END}</td>
            </tr>
            <tr>
                <th scope="row">Willpower</th>
                <td id="pc-wil">${entity.attr.WIL}</td>
            </tr>
            <tr>
                <th scope="row">Intelligence</th>
                <td id="pc-int">${entity.attr.INT}</td>
            </tr>
            <tr>
                <th scope="row">Dexterity</th>
                <td id="pc-dex">${entity.attr.DEX}</td>
            </tr>
            <tr>
                <th scope="row">Luck</th>
                <td id="pc-luc">${entity.attr.LUC}</td>
            </tr>
        </tbody>`;

    //<table class="table table-sm table-hover">
    const $table = $(document.createElement('table'))
        .addClass('table table-sm table-hover')
        .attr('id', `${entity.id}-maxtable`)
        .append(html)
        .data('entity', entity);

    return $table;
}