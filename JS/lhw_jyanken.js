

function hide() {
    document.getElementById('gu-gaku').style.visibility = "hidden";
    document.getElementById('pa-gaku').style.visibility = "hidden";
    document.getElementById('bomb').style.visibility = "hidden";
}

hide()

var ref = ["グー", "チョキ", "パー"];
var peace = ["チョキ"]

function GAKUchoice() {
    var GAKU = Math.floor(Math.random() * peace.length);
    return GAKU
}

function game(player) {
    let GAKU = GAKUchoice();
    let message = "";
    let judge = "キミは" + ref[player] + "を選んだんだな！" + "オレは、" + peace[GAKU] + "を選んだぜ！";

    if (GAKU === player) {
        hide()
        document.getElementById('bomb').style.visibility = "visible";
        var v = document.querySelector('video');
        v.load();
        v.play();

        message = "あいこじゃなきゃそりゃ死ぬっす＾＾";
        document.getElementById('gu-gaku').style.visibility = "visible";
    }

    else if (GAKU + 1 === player) {
        hide()
        message = "あいこ！もう一回挑戦してくれよな！";
    }

    else {
        hide()
        message = "その手のひらを見つめて自らの意思で招いた敗北と向き合おう！";
        document.getElementById('pa-gaku').style.visibility = "visible";

    }

    const choice = document.querySelector("#choice");
    choice.textContent = judge;

    const result = document.querySelector("#result");
    result.textContent = message;

    const serif = document.querySelector("#serif");
    serif.textContent = "オレとじゃんけんするぜ！";
}