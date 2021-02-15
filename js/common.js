// ラジオボタンの値を保持
let nowVal;
// 各項目の解答
const inquiryItemsOtherAnswer = "other";
const inquiryItemsRecruitmentAnswer = "recruitment";
const companyAnswer = "a";
const postalCodeAnswer = "a";
const firstPostalCodeAnswer = "a";
const latterPostalCodeAnswer = "a";
const streetAddressAnswer = "a";
const firstStreetAddressAnswer = "a";
const latterStreetAddressAnswer = "a";
const homePageAnswer = "a";
const occupationAnswer = "a";
const departmentAnswer = "a";
const positionAnswer = "a";
const nameAnswer = "a";
const lastNameAnswer = "a";
const firstNameAnswer = "a";
const furiganaHiraganaAnswer = "あ";
const lastFuriganaHiraganaAnswer = "あ";
const firstFuriganaHiraganaAnswer = "あ";
const furiganaKtakanaAnswer = "ア";
const lastFuriganaKatakanaAnswer = "ア";
const firstFuriganaKatakanaAnswer = "ア";
const sexAnswer = "male";
const yearAnswer = "a";
const monthAnswer = "a";
const monthZeroPaddingAnswer = "a";
const dayAnswer = "a";
const dayZeroPaddingAnswer = "a";
const ageAnswer = "a";
const telAnswer = "a";
const faxAnswer = "a";
const mailAnswer = "a";
const replyAnswer = "replyByEmail";
const emailNewsletterAnswer = "dontReceive";
const subjectAnswer = "a";
const inquiryAnswer = "a";
const inquiryNewLineAnswer = "a\n";
const inquiry400CharactersAnswer = "400";
const inquiry400CharactersNewLineAnswer = "400\n";
const inquiry300CharactersAnswer = "300";
const inquiry300CharactersNewLineAnswer = "300\n";
const inquiry200CharactersAnswer = "200";
const inquiry200CharactersNewLineAnswer = "200\n";
const inquiry100CharactersAnswer = "100";
const inquiry100CharactersNewLineAnswer = "100\n";
// コピーライト
const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
// バージョン
const verNum = "0.0.0";
// コピーライトの設定
function setCopyright() {
  copyright.innerHTML = copr;
}
// バージョンの設定
function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
// ラジオボタンのON・OFF処理
function onOff(obj) {
  if (nowVal == obj.value) {
    obj.checked = false;
    nowVal = "";
  } else {
    nowVal = obj.value;
  }
}
// 遷移処理
function transitionProc(screen) {
  // 画面判定
  if (screen == "confirmation") {
    // 送信画面へ遷移
    window.location.href = "../html/send.html";
  } else {
    // セッションデータ削除処理
    delSessionData();
    // 指定のページへ遷移
    window.location.href = "https://www.google.co.jp/";
  }
}
// 回答希望日の取得
function getAnswerYesDate() {
  // 営業日
  let businessDay = 0;
  // 3営業日
  let threeBusinessDays;
  // 追加日数
  let addDay = 1;
  // 3営業日まで繰り返す
  while (businessDay < 3) {
    // 今日の日付を取得
    threeBusinessDays = new Date();
    // 日付の更新
    threeBusinessDays.setDate(threeBusinessDays.getDate() + addDay);
    // 曜日の取得
    let day = threeBusinessDays.getDay();
    // 土・日以外か判定
    if (day != 0 && day != 6) {
      // 営業日のインクリメント
      businessDay++;
    }
    // 日付のインクリメント
    addDay++;
  }
  // 年の取得
  const y = threeBusinessDays.getFullYear();
  // 月の取得
  const m = ("00" + (threeBusinessDays.getMonth() + 1)).slice(-2);
  // 日の取得
  const d = ("00" + threeBusinessDays.getDate()).slice(-2);
  // 土・日を除く3営業日
  return y + "-" + m + "-" + d;
}
function aaaaa() {
  var t = document.getElementById("e");
  t.readonly = "false";
}
