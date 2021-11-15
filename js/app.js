const pc_doc_refs = {
    // Main character sheets
    NAME: document.getElementById("pc-name"),
    LVL: document.getElementById("pc-lvl"),
    EXP: {
        total: document.getElementById("pc-xp-total"),
        toNext: document.getElementById("pc-xp-tolvl")
    },
    HP: document.getElementById("pc-hp"),
    HPcap: document.getElementById("pc-max-hp"),
    FP: document.getElementById("pc-fp"),
    FPcap: document.getElementById("pc-max-fp"),
    STR: document.getElementById("pc-str"),
    END: document.getElementById("pc-end"),
    WIL: document.getElementById("pc-wil"),
    INT: document.getElementById("pc-int"),
    DEX: document.getElementById("pc-dex"),
    LUC: document.getElementById("pc-luc"),
    // Sidebar stats
    sidebar: {
        LVL: document.getElementById("sb-lvl"),
        EXP: document.getElementById("sb-xp-tolvl"),
        HP: document.getElementById("sb-hp"),
        HPcap: document.getElementById("sb-hp-max"),
        FP: document.getElementById("sb-fp"),
        FPcap: document.getElementById("sb-fp-max")
    }
}
function updateCharacterStat(stat, value, target) {
    switch (target.id) {
        case 'player':
            switch (stat) {
                case 'HP':
                case 'FP':
                    target[stat] = value;
                    pc_doc_refs[stat].innerText = target[stat];
                    break;
                default:
                    target.attr[stat] = value;
                    pc_doc_refs[stat].innerText = target.attr[stat];
                    break;
            }
            updateExpDisplay(target);
            updateLvlDisplay(target);
            updateSideBar();
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
function updateLvlDisplay(target) {
    switch (target.id) {
        case 'player':
            pc_doc_refs.LVL.innerText = target.LVL;
            break;
        default:
            console.log(`updateLvlDisplay fail: ${target.id} invalid:`, target);
    }
}
function updateExpDisplay(target) {
    switch (target.id) {
        case 'player':
            pc_doc_refs.EXP.total.innerText = target.EXP.total;
            pc_doc_refs.EXP.toNext.innerText = target.EXP.toNext;
            break;
        default:
            console.log(`updateExpDisplay fail: ${target.id} invalid:`, target);
    }
}
function updateSideBar() {
    pc_doc_refs.sidebar.LVL.innerText = data_player.LVL;
    pc_doc_refs.sidebar.EXP.innerText = data_player.EXP.toNext;
    pc_doc_refs.sidebar.HP.innerText = data_player.HP;
    pc_doc_refs.sidebar.HPcap.innerText = data_player.HPcap;
    pc_doc_refs.sidebar.FP.innerText = data_player.FP;
    pc_doc_refs.sidebar.FPcap.innerText = data_player.FPcap;
}
function setupGame() {
    pc_doc_refs.NAME.innerText = data_player.name;
    updateCharacterStat('LVL', 0, data_player);
    updateCharacterStat('HP', data_player.HP, data_player);
    updateCharacterStat('HPcap', data_player.HPcap, data_player);
    updateCharacterStat('FP', data_player.FP, data_player);
    updateCharacterStat('FPcap', data_player.FPcap, data_player);
    updateCharacterStat('STR', data_player.attr.STR, data_player);
    updateCharacterStat('END', data_player.attr.END, data_player);
    updateCharacterStat('WIL', data_player.attr.WIL, data_player);
    updateCharacterStat('INT', data_player.attr.INT, data_player);
    updateCharacterStat('DEX', data_player.attr.DEX, data_player);
    updateCharacterStat('LUC', data_player.attr.LUC, data_player);
}
setupGame();