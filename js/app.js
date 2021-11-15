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
    switch (target) {
        case 'pc':
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
            console.log(`updateCharacterStat fail: ${target} invalid:`, target);
    }
}

function setupGame() {
    updateCharacterStat('HP', data_player.HP, 'pc');
    updateCharacterStat('FP', data_player.FP, 'pc');
    updateCharacterStat('STR', data_player.attr.STR, 'pc');
    updateCharacterStat('END', data_player.attr.END, 'pc');
    updateCharacterStat('WIL', data_player.attr.WIL, 'pc');
    updateCharacterStat('INT', data_player.attr.INT, 'pc');
    updateCharacterStat('DEX', data_player.attr.DEX, 'pc');
    updateCharacterStat('LUC', data_player.attr.LUC, 'pc');
}
setupGame();