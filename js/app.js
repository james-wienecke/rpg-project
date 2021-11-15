// function attachDocumentElements() {
// }

const pc_doc_refs = {
    HP: document.getElementById("pc-hp"),
    FP: document.getElementById("pc-fp"),
    STR: document.getElementById("pc-str"),
    END: document.getElementById("pc-end"),
    WIL: document.getElementById("pc-wil"),
    INT: document.getElementById("pc-int"),
    DEX: document.getElementById("pc-dex"),
    LUC: document.getElementById("pc-luc")
}

function updateCharacterStat(stat, value, target) {
    switch (target.id) {
        case 'player':
            switch (stat) {
                case 'HP':
                case 'FP':
                    data_player[stat] = value;
                    pc_doc_refs[stat].innerText = data_player[stat];
                    break;
                default:
                    data_player.attr[stat] = value;
                    pc_doc_refs[stat].innerText = data_player.attr[stat];
                    break;
            }
            break;
        default:
            console.log(`updateCharacterStat fail: ${target.id} invalid:`, target);
    }
}

function modifyStat(stat, value, target) {
    let newValue;
    switch (target.id) {
        case 'player':
            switch (stat) {
                case 'HP':
                case 'FP':
                    newValue = target[stat] += value;
                    updateCharacterStat(stat, newValue, target);
                    break;
                default:
                    newValue = target['attr'][stat] + value;
                    updateCharacterStat(stat, newValue, target);
                    break;
            }

            break;
        default:
            console.log(`modifyStat fail: ${target.id} invalid:`, target);
    }
}

function setupGame() {
    updateCharacterStat('HP', data_player.HP, data_player);
    updateCharacterStat('FP', data_player.FP, data_player);
    updateCharacterStat('STR', data_player.attr.STR, data_player);
    updateCharacterStat('END', data_player.attr.END, data_player);
    updateCharacterStat('WIL', data_player.attr.WIL, data_player);
    updateCharacterStat('INT', data_player.attr.INT, data_player);
    updateCharacterStat('DEX', data_player.attr.DEX, data_player);
    updateCharacterStat('LUC', data_player.attr.LUC, data_player);
}
setupGame();



