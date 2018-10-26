//清音
const seionn = [
  {
    hiragana: "あ",
    katakana: "ア",
    roomaji: "a"
  },
  {
    hiragana: "い",
    katakana: "イ",
    roomaji: "i"
  },
  {
    hiragana: "う",
    katakana: "ウ",
    roomaji: "u"
  },
  {
    hiragana: "え",
    katakana: "エ",
    roomaji: "e"
  },
  {
    hiragana: "お",
    katakana: "オ",
    roomaji: "o"
  },
  {
    hiragana: "か",
    katakana: "カ",
    roomaji: "ka"
  },
  {
    hiragana: "き",
    katakana: "キ",
    roomaji: "ki"
  },
  {
    hiragana: "く",
    katakana: "ク",
    roomaji: "ku"
  },
  {
    hiragana: "け",
    katakana: "ケ",
    roomaji: "ke"
  },
  {
    hiragana: "こ",
    katakana: "コ",
    roomaji: "ko"
  },
  {
    hiragana: "さ",
    katakana: "サ",
    roomaji: "sa"
  },
  {
    hiragana: "し",
    katakana: "シ",
    roomaji: "shi"
  },
  {
    hiragana: "す",
    katakana: "ス",
    roomaji: "su"
  },
  {
    hiragana: "せ",
    katakana: "セ",
    roomaji: "se"
  },
  {
    hiragana: "そ",
    katakana: "ソ",
    roomaji: "so"
  },
  {
    hiragana: "た",
    katakana: "タ",
    roomaji: "ta"
  },
  {
    hiragana: "ち",
    katakana: "チ",
    roomaji: "chi"
  },
  {
    hiragana: "つ",
    katakana: "ツ",
    roomaji: "tsu"
  },
  {
    hiragana: "て",
    katakana: "テ",
    roomaji: "te"
  },
  {
    hiragana: "と",
    katakana: "ト",
    roomaji: "to"
  },
  {
    hiragana: "な",
    katakana: "ナ",
    roomaji: "na"
  },
  {
    hiragana: "に",
    katakana: "ニ",
    roomaji: "ni"
  },
  {
    hiragana: "ぬ",
    katakana: "ヌ",
    roomaji: "nu"
  },
  {
    hiragana: "ね",
    katakana: "ネ",
    roomaji: "ne"
  },
  {
    hiragana: "の",
    katakana: "ノ",
    roomaji: "no"
  },
  {
    hiragana: "は",
    katakana: "ハ",
    roomaji: "ha"
  },
  {
    hiragana: "ひ",
    katakana: "ヒ",
    roomaji: "hi"
  },
  {
    hiragana: "ふ",
    katakana: "フ",
    roomaji: "fu"
  },
  {
    hiragana: "へ",
    katakana: "ヘ",
    roomaji: "he"
  },
  {
    hiragana: "ほ",
    katakana: "ホ",
    roomaji: "ho"
  },
  {
    hiragana: "ま",
    katakana: "マ",
    roomaji: "ma"
  },
  {
    hiragana: "み",
    katakana: "ミ",
    roomaji: "mi"
  },
  {
    hiragana: "む",
    katakana: "ム",
    roomaji: "mu"
  },
  {
    hiragana: "め",
    katakana: "メ",
    roomaji: "me"
  },
  {
    hiragana: "も",
    katakana: "モ",
    roomaji: "mo"
  },
  {
    hiragana: "や",
    katakana: "ヤ",
    roomaji: "ya"
  },
  {},
  {
    hiragana: "ゆ",
    katakana: "ユ",
    roomaji: "yu"
  },
  {},
  {
    hiragana: "よ",
    katakana: "ヨ",
    roomaji: "yo"
  },
  {
    hiragana: "ら",
    katakana: "ラ",
    roomaji: "ra"
  },
  {
    hiragana: "り",
    katakana: "リ",
    roomaji: "ri"
  },
  {
    hiragana: "る",
    katakana: "ル",
    roomaji: "ru"
  },
  {
    hiragana: "れ",
    katakana: "レ",
    roomaji: "re"
  },
  {
    hiragana: "ろ",
    katakana: "ロ",
    roomaji: "ro"
  },
  {
    hiragana: "わ",
    katakana: "ワ",
    roomaji: "wa"
  },
  {},
  {},
  {},
  {
    hiragana: "を",
    katakana: "ヲ",
    roomaji: "o"
  },
  {
    hiragana: "ん",
    katakana: "ン",
    roomaji: "n"
  }
];

//浊音
const dakuonn = [
  {
    hiragana: "が",
    katakana: "ガ",
    roomaji: "ga"
  },
  {
    hiragana: "ぎ",
    katakana: "ギ",
    roomaji: "gi"
  },
  {
    hiragana: "ぐ",
    katakana: "グ",
    roomaji: "gu"
  },
  {
    hiragana: "げ",
    katakana: "ゲ",
    roomaji: "ge"
  },
  {
    hiragana: "ご",
    katakana: "ゴ",
    roomaji: "go"
  },
  {
    hiragana: "ざ",
    katakana: "ザ",
    roomaji: "za"
  },
  {
    hiragana: "じ",
    katakana: "ジ",
    roomaji: "ji"
  },
  {
    hiragana: "ず",
    katakana: "ズ",
    roomaji: "zu"
  },
  {
    hiragana: "ぜ",
    katakana: "ゼ",
    roomaji: "ze"
  },
  {
    hiragana: "ぞ",
    katakana: "ゾ",
    roomaji: "zo"
  },
  {
    hiragana: "だ",
    katakana: "ダ",
    roomaji: "da"
  },
  {
    hiragana: "ぢ",
    katakana: "ヂ",
    roomaji: "ji"
  },
  {
    hiragana: "づ",
    katakana: "ヅ",
    roomaji: "zu"
  },
  {
    hiragana: "で",
    katakana: "デ",
    roomaji: "de"
  },
  {
    hiragana: "ど",
    katakana: "ド",
    roomaji: "do"
  },
  {
    hiragana: "ば",
    katakana: "バ",
    roomaji: "ba"
  },
  {
    hiragana: "び",
    katakana: "ビ",
    roomaji: "bi"
  },
  {
    hiragana: "ぶ",
    katakana: "ブ",
    roomaji: "bu"
  },
  {
    hiragana: "べ",
    katakana: "ベ",
    roomaji: "be"
  },
  {
    hiragana: "ぼ",
    katakana: "ボ",
    roomaji: "bo"
  },
  {
    hiragana: "ぱ",
    katakana: "パ",
    roomaji: "pa"
  },
  {
    hiragana: "ぴ",
    katakana: "ピ",
    roomaji: "pi"
  },
  {
    hiragana: "ぷ",
    katakana: "プ",
    roomaji: "pu"
  },
  {
    hiragana: "ぺ",
    katakana: "ペ",
    roomaji: "pe"
  },
  {
    hiragana: "ぽ",
    katakana: "ポ",
    roomaji: "po"
  }
];

//拗音
const youonn = [
  {
    hiragana: "きゃ",
    katakana: "キャ",
    roomaji: "kya"
  },
  {
    hiragana: "きゅ",
    katakana: "キュ",
    roomaji: "kyu"
  },
  {
    hiragana: "きょ",
    katakana: "キョ",
    roomaji: "kyo"
  },
  {
    hiragana: "しゃ",
    katakana: "シャ",
    roomaji: "sha"
  },
  {
    hiragana: "しゅ",
    katakana: "シュ",
    roomaji: "shu"
  },
  {
    hiragana: "しょ",
    katakana: "ショ",
    roomaji: "sho"
  },
  {
    hiragana: "ちゃ",
    katakana: "チャ",
    roomaji: "cha"
  },
  {
    hiragana: "ちゅ",
    katakana: "チュ",
    roomaji: "chu"
  },
  {
    hiragana: "ちょ",
    katakana: "チョ",
    roomaji: "cho"
  },
  {
    hiragana: "にゃ",
    katakana: "ニャ",
    roomaji: "nya"
  },
  {
    hiragana: "にゅ",
    katakana: "ニュ",
    roomaji: "nyu"
  },
  {
    hiragana: "にょ",
    katakana: "ニョ",
    roomaji: "nyo"
  },
  {
    hiragana: "ひゃ",
    katakana: "ヒャ",
    roomaji: "hya"
  },
  {
    hiragana: "ひゅ",
    katakana: "ヒュ",
    roomaji: "hyu"
  },
  {
    hiragana: "ひょ",
    katakana: "ヒョ",
    roomaji: "hyo"
  },
  {
    hiragana: "みゃ",
    katakana: "ミャ",
    roomaji: "mya"
  },
  {
    hiragana: "みゅ",
    katakana: "ミュ",
    roomaji: "myu"
  },
  {
    hiragana: "みょ",
    katakana: "ミョ",
    roomaji: "myo"
  },
  {
    hiragana: "りゃ",
    katakana: "リャ",
    roomaji: "rya"
  },
  {
    hiragana: "りゅ",
    katakana: "リュ",
    roomaji: "ryu"
  },
  {
    hiragana: "りょ",
    katakana: "リョ",
    roomaji: "ryo"
  },
  {
    hiragana: "ぎゃ",
    katakana: "ギャ",
    roomaji: "gya"
  },
  {
    hiragana: "ぎゅ",
    katakana: "ギュ",
    roomaji: "gyu"
  },
  {
    hiragana: "ぎょ",
    katakana: "ギョ",
    roomaji: "gyo"
  },
  {
    hiragana: "じゃ",
    katakana: "ジャ",
    roomaji: "ja"
  },
  {
    hiragana: "じゅ",
    katakana: "ジュ",
    roomaji: "ju"
  },
  {
    hiragana: "じょ",
    katakana: "ジョ",
    roomaji: "jo"
  },
  {
    hiragana: "びゃ",
    katakana: "ビャ",
    roomaji: "bya"
  },
  {
    hiragana: "びゅ",
    katakana: "ビュ",
    roomaji: "byu"
  },
  {
    hiragana: "びょ",
    katakana: "ビョ",
    roomaji: "byo"
  },
  {
    hiragana: "ぴゃ",
    katakana: "ピャ",
    roomaji: "pya"
  },
  {
    hiragana: "ぴゅ",
    katakana: "ピュ",
    roomaji: "pyu"
  },
  {
    hiragana: "ぴょ",
    katakana: "ピョ",
    roomaji: "pyo"
  }
];
export { seionn, dakuonn, youonn };
