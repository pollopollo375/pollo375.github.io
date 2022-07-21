// 変数宣言
var ref = {
    "START": [
        {
            "タイトル": "伏見ガクの所属事務所は？",
            "選択肢": [
                "にじさんじ",
                "ホロスターズ"
            ],
            "こたえ": "にじさんじ",
            "解説": "デビュー当時は19歳でした。",
        },
        {
            "タイトル": "伏見ガクといえば？",
            "選択肢": [
                "犬",
                "きつね",
                "ねこ"
            ],
            "こたえ": "きつね",
            "解説": "誕生日は天狐にちなんで10月5日です。",

        },
        {
            "タイトル": "伏見ガクは何期生？",
            "選択肢": [
                "１期生",
                "２期生",
                "３期生",
            ],
            "こたえ": "２期生",
            "解説": "デビュー日は2018年3月15日。同期は伏見含めて10人います。",

        },
        {
            "タイトル": "伏見ガクの相方は？",
            "選択肢": [
                "家長むぎ",
                "夕陽リリ",
                "剣持刀也",
                "ギルザレン三世",
            ],
            "こたえ": "剣持刀也",
            "解説": "同じ二期生で、ユニット名は†咎人†（とがびと）。他の三人も同期です。",
        },
        {
            "タイトル": "看板配信である『おはガク』は何時スタート？",
            "選択肢": [
                "5:45",
                "6:45",
                "7:45",
                "8:45",
            ],
            "こたえ": "6:45",
            "解説": "朝ごはんを一緒に食べる配信のことで、6:55にいただきます、7:20にごちそうさまをします。",

        },
        {
            "タイトル": "夜の配信は何時からスタートすることが多い？",
            "選択肢": [
                "21時ごろ",
                "22時ごろ",
                "23時ごろ",
                "24時ごろ",
            ],
            "こたえ": "23時ごろ",
            "解説": "ホラーゲームやバカゲーをすることが多いです。",

        },
        {
            "タイトル": "伏見ガクの血液型は？",
            "選択肢": [
                "A型",
                "B型",
                "O型",
                "AB型",
            ],
            "こたえ": "A型",
            "解説": "",

        },
        {
            "タイトル": "2022年の24時間配信は何をプレイした？",
            "選択肢": [
                "バイオハザード",
                "夜廻",
                "サイコブレイク",
            ],
            "こたえ": "バイオハザード",
            "解説": "サイコブレイクは2021年の24時間配信でプレイ。夜廻は24時間配信で希望が多かったためプレイ。",

        },
        {
            "タイトル": "にじさんじとJ1がコラボした際の伏見ガクの担当チームは？",
            "選択肢": [
                "浦和レッズ",
                "川崎フロンターレ",
                "清水エスパルス",
                "名古屋グランパス",
            ],
            "こたえ": "清水エスパルス",
            "解説": "実は現地にも行っていた様子。",

        },
        {
            "タイトル": "伏見ガクの好きなソシャゲは？",
            "選択肢": [
                "アイマス",
                "ラブライブ",
                "プリコネ",
            ],
            "こたえ": "プリコネ",
            "解説": "ガチャ動画がおもしろいです。",

        },


    ],

}
question_num = 0
quizdata = ref["START"]
result = []
correct = 0

const choice0 = document.querySelector("#choice0");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");

// 関数
function updatetag(tag, text,) {
    return document.querySelector(tag).textContent = text;
}

// 関数リテラル
const removeButton = function () {
    document.getElementById('choice1').style.visibility = "hidden";
    document.getElementById('choice2').style.visibility = "hidden";
    document.getElementById('choice3').style.visibility = "hidden";
};

[choice0, choice1, choice2, choice3].forEach((element) => {
    removeButton()
    element.addEventListener('click', function () {
        const user_choice = element.textContent;
        document.getElementById('greeting').style.visibility = "hidden";
        document.getElementById('omake').style.visibility = "hidden";

        if (!question_num) document.querySelector('#res').innerHTML = ''

        if (user_choice != "START" && user_choice != "RETRY") {
            result.push([quizdata[question_num - 1].こたえ, user_choice, quizdata[question_num - 1].解説, quizdata[question_num - 1].タイトル])
            if (quizdata[question_num - 1].こたえ === user_choice) correct++
        }

        if (question_num >= quizdata.length) {
            removeButton()
            updatetag('#choice0', 'RETRY');

            updatetag('h1', '結果');

            // スコアを計算して色を変更する
            document.querySelector('#description').style.color = (correct >= quizdata.length / 2) ? 'green' : 'red'
            updatetag('#description', 'あなたのスコア:' + correct + '/' + quizdata.length);
            console.log(result)
            const resList = result.map((val, i) => {

                let color = val[0] == val[1] ? 'green' : 'red'
                const html = `
                <div class="card">
                    <div class="title">
                        問題:${i + 1} ${val[3]}
                    </div>
                    <div class="answer" style="color:${color}">
                        あなたの選んだ答え: ${val[1]}
                    </div>
                    <div class="result">
                        答え: ${val[0]}
                    </div>
                    <div class="explain">
                        解説: ${val[2]}
                    </div>
                </div></br>
                `
                return html
            })

            document.querySelector('#res').innerHTML = resList.join('<br>')

            question_num = 0
            result = []
            correct = 0
            document.querySelector('#description').style.color = 'black'

            return
        }



        updatetag('h1', '問題' + (question_num + 1));
        updatetag('#description', quizdata[question_num].タイトル);
        removeButton()

        for (let i = 0; i < quizdata[question_num].選択肢.length; i++) {
            updatetag('#choice' + i, quizdata[question_num].選択肢[i]);
            if (i >= 1) {
                document.getElementById('choice' + i).style.visibility = "visible";
            }
        }
        question_num++
    });
});

