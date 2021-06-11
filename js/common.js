// 各項目の解答
const inquiryItemsOtherAnswer = "other";
const inquiryItemsRecruitmentAnswer = "recruitment";
const companyAnswer = "a";
const pseudonymReadingAnswer = "a";
const representativeNameAnswer = "a";
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
const furiganaHiraganaAnswer = "a";
const lastFuriganaHiraganaAnswer = "a";
const firstFuriganaHiraganaAnswer = "a";
const furiganaKtakanaAnswer = "a";
const lastFuriganaKatakanaAnswer = "a";
const firstFuriganaKatakanaAnswer = "a";
const sexAnswer = "male";
const yearAnswer = "a";
const monthAnswer = "a";
const monthZeroPaddingAnswer = "a";
const dayAnswer = "a";
const dayZeroPaddingAnswer = "a";
const ageAnswer = "a";
const telAnswer = "a";
const faxAnswer = "a";
const mobilePhoneAnswer = "a";
const mailAnswer = "a";
const replyAnswer = "replyByEmail";
const emailNewsletterAnswer = "dontReceive";
const contactAnswer = "headOffice";
const subjectAnswer = "a";
const inquiryAnswer = "a";
const inquiryNewLineAnswer = "a";
const inquiry400CharactersAnswer = "a";
const inquiry400CharactersNewLineAnswer = "a";
const inquiry300CharactersAnswer = "a";
const inquiry300CharactersNewLineAnswer = "a";
const inquiry200CharactersAnswer = "a";
const inquiry200CharactersNewLineAnswer = "a";
const inquiry100CharactersAnswer = "a";
const inquiry100CharactersNewLineAnswer = "a";
const uppercaseDtherDetailsAnswer = "a";
const lowercasedtherDetailsAnswer = "a";
// コピーライト
const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
// バージョン
const verNum = "1.0.0";
// 問い合せ画面の初期処理
function initProc() {
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
}
// コピーライトの設定
function setCopyright() {
  copyright.innerHTML = copr;
}
// バージョンの設定
function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
// 入力チェック
function chkTheInput(val) {
  // 会社名入力チェック
  const company = document.getElementById("company");
  // 未入力の場合
  if (company.value == "") {
    // エラーメッセージを出力
    alert("会社名を入力して下さい。");
    // 処理終了
    return false;
  }
  // お名前入力チェック
  if (
    val == "co0001" ||
    val == "co0004" ||
    val == "co0007" ||
    val == "co0008" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0022"
  ) {
    const name = document.getElementById("name");
    // 未入力の場合
    if (name.value == "") {
      // エラーメッセージを出力
      alert("氏名を入力して下さい。");
      // 処理終了
      return false;
    }
  }
  // ふりがな(フリガナ)入力チェック
  if (
    val == "co0004" ||
    val == "co0007" ||
    val == "co0008" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0019" ||
    val == "co0022"
  ) {
    const lastName = document.getElementById("furigana");
    // 未入力の場合
    if (lastName.value == "") {
      if (
        val == "co0004" ||
        val == "co0010" ||
        val == "co0016" ||
        val == "co0022"
      ) {
        // エラーメッセージを出力
        alert("ふりがなを入力して下さい。");
      } else {
        alert("フリガナを入力して下さい。");
      }
      // 処理終了
      return false;
    }
  }
  // 苗字_名前入力チェック
  if (
    val == "co0002" ||
    val == "co0003" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const lastName = document.getElementById("lastName");
    const firstName = document.getElementById("firstName");
    // 未入力の場合
    if (lastName.value == "") {
      // エラーメッセージを出力
      alert("苗字を入力して下さい。");
      // 処理終了
      return false;
    } else if (firstName.value == "") {
      // エラーメッセージを出力
      alert("名前を入力して下さい。");
      // 処理終了
      return false;
    }
  }
  // 苗字_名前_ふりがな入力チェック
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0015" ||
    val == "co0018" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    const lastFurigana = document.getElementById("lastFurigana");
    const firstFurigana = document.getElementById("firstFurigana");
    // 未入力の場合
    if (lastFurigana.value == "") {
      // エラーメッセージを出力
      alert("苗字のふりがなを入力して下さい。");
      // 処理終了
      return false;
    } else if (firstFurigana.value == "") {
      // エラーメッセージを出力
      alert("名前のふりがなを入力して下さい。");
      // 処理終了
      return false;
    }
  }
  // 苗字_名前_フリガナ入力チェック
  if (
    val == "co0003" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0024"
  ) {
    const lastFurigana = document.getElementById("lastFurigana");
    const firstFurigana = document.getElementById("firstFurigana");
    // 未入力の場合
    if (lastFurigana.value == "") {
      // エラーメッセージを出力
      alert("苗字のフリガナを入力して下さい。");
      // 処理終了
      return false;
    } else if (firstFurigana.value == "") {
      // エラーメッセージを出力
      alert("名前のフリガナを入力して下さい。");
      // 処理終了
      return false;
    }
  }
  // 電話番号の入力チェック
  const tel = document.getElementById("tel");
  // 未入力の場合
  if (tel.value == "") {
    // エラーメッセージを出力
    alert("電話番号を入力して下さい。");
    // 処理終了
    return false;
  }
  // メールアドレスの入力チェック
  const mail = document.getElementById("mail");
  // 未入力の場合
  if (mail.value == "") {
    // エラーメッセージを出力
    alert("メールアドレスを入力して下さい。");
    // 処理終了
    return false;
  }
  // 導入システムの入力チェック
  if (val == "co0018") {
    const systems = document.getElementById("systems");
    let chkFlg;
    for (let i = 0; i < systems.length; i++) {
      if (systems[i].checked) {
        chkFlg = true;
        break;
      }
    }
    // 未入力の場合
    if (!chkFlg) {
      // エラーメッセージを出力
      alert("導入システムを選択して下さい。");
      // 処理終了
      return false;
    }
  }
  // 問い合わせ内容の入力チェック
  const inquiry = document.getElementById("inquiry");
  // 未入力の場合
  if (inquiry.value == "") {
    // エラーメッセージを出力
    alert("問い合わせ内容を入力して下さい。");
    // 処理終了
    return false;
  }
  // セッションデータ保持処理
  setSessionData(val);
}
// セッションデータ保持処理
function setSessionData(val) {
  // お問い合わせ項目
  if (
    val == "co0003" ||
    val == "co0005" ||
    val == "co0007" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    var inquiryItemsElement = document.getElementById("inquiryItems");
    sessionStorage.setItem(
      "inquiryItemsValue",
      inquiryItemsElement.inquiryItems.value
    );
  }
  // 会社名
  sessionStorage.setItem("companyValue", company.value);
  // 読み仮名
  if (
    val == "co0005" ||
    val == "co0010" ||
    val == "co0015" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("pseudonymReadingValue", pseudonymReading.value);
  }
  // 代表者名
  if (
    val == "co0002" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0020" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("representativeNameValue", representativeName.value);
  }
  // 郵便番号_住所
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0008" ||
    val == "co0011" ||
    val == "co0014" ||
    val == "co0017" ||
    val == "co0023"
  ) {
    sessionStorage.setItem("postalCodeValue", postalCode.value);
    sessionStorage.setItem("streetAddressValue", streetAddress.value);
  }
  // 郵便番号_前半_後半_住所 1 2
  if (
    val == "co0003" ||
    val == "co0004" ||
    val == "co0006" ||
    val == "co0007" ||
    val == "co0009" ||
    val == "co0010" ||
    val == "co0012" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0016" ||
    val == "co0018" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0021" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("firstPostalCodeValue", firstPostalCode.value);
    sessionStorage.setItem("latterPostalCodeValue", latterPostalCode.value);
    sessionStorage.setItem("firstStreetAddressValue", firstStreetAddress.value);
    sessionStorage.setItem(
      "latterStreetAddressValue",
      latterStreetAddress.value
    );
  }
  // 職種
  if (
    val == "co0002" ||
    val == "co0014" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("occupationValue", occupation.value);
  }
  // ホームページ
  if (
    val == "co0005" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("homePageValue", homePage.value);
  }
  // 部署名
  if (
    val == "co0003" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0012" ||
    val == "co0015" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("departmentValue", department.value);
  }
  // 役職
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0019" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("positionValue", position.value);
  }
  // お名前
  if (
    val == "co0001" ||
    val == "co0004" ||
    val == "co0007" ||
    val == "co0008" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0022"
  ) {
    var name = document.getElementById("name");
    sessionStorage.setItem("nameValue", name.value);
    // ふりがな_フリガナ
    if (val != "co0001" && val != "co0020") {
      sessionStorage.setItem("furiganaValue", furigana.value);
    }
  }
  // 苗字_名前_ふりがな
  if (
    val == "co0002" ||
    val == "co0003" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("lastNameValue", lastName.value);
    sessionStorage.setItem("firstNameValue", firstName.value);
    sessionStorage.setItem("lastFuriganaValue", lastFurigana.value);
    sessionStorage.setItem("firstFuriganaValue", firstFurigana.value);
  }
  // 性別
  if (
    val == "co0004" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    var sexElement = document.getElementById("sex");
    sessionStorage.setItem("sexValue", sexElement.sex.value);
  }
  // 生年月日
  if (
    val == "co0007" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    // 年
    sessionStorage.setItem("yearValue", year.value);
    // 月
    sessionStorage.setItem("monthValue", month.value);
    // 日
    sessionStorage.setItem("dayValue", day.value);
  }
  // 年齢
  if (
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("ageValue", age.value);
  }
  // 電話番号
  sessionStorage.setItem("telValue", tel.value);
  // FAX
  if (
    val == "co0009" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("faxValue", fax.value);
  }
  // 携帯番号
  if (
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("mobilePhoneValue", mobilePhone.value);
  }
  // メールアドレス
  sessionStorage.setItem("mailValue", mail.value);
  // 問い合わせ先
  if (val == "co0006") {
    var contactElement = document.getElementById("contact");
    sessionStorage.setItem("contactValue", contactElement.value);
  }
  // 確認したい商品・サービス名
  if (val == "co0009") {
    sessionStorage.setItem(
      "productsAndServicesValue",
      productsAndServices.value
    );
  }
  if (val == "co0018") {
    // 勤怠管理システム
    sessionStorage.setItem("attendanceSysValue", attendanceSys.checked);
    // 文書管理システム
    sessionStorage.setItem("documentsSysValue", documentsSys.checked);
    // 在庫管理システム
    sessionStorage.setItem("stockSysValue", stockSys.checked);
    // 入札管理システム
    sessionStorage.setItem("bidSysValue", bidSys.checked);
    // グループウェア
    sessionStorage.setItem("groupwareValue", groupware.checked);
    // その他システム
    sessionStorage.setItem("othersysValue", othersys.value);
  }
  // お客様番号
  if (val == "co0020") {
    sessionStorage.setItem("customerNumberValue", customerNumber.value);
  }
  // 返信方法
  if (
    val == "co0005" ||
    val == "co0010" ||
    val == "co0015" ||
    val == "co0019" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    var replyElement = document.getElementById("reply");
    sessionStorage.setItem("replyValue", replyElement.reply.value);
  }
  // メルマガやDMを受け取る
  if (
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    var emailNewsletterElement = document.getElementById("emailNewsletter");
    sessionStorage.setItem(
      "emailNewsletterValue",
      emailNewsletterElement.emailNewsletter.value
    );
  }
  // 件名
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0020" ||
    val == "co0022" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    sessionStorage.setItem("subjectValue", subject.value);
  }
  // 問い合わせ内容
  sessionStorage.setItem("inquiryValue", inquiry.value);
  // 回答希望日
  if (val == "co0024" || val == "co0025") {
    sessionStorage.setItem("answerYesDateValue", answerYesDate.value);
  }
  // 弊社 Webサイトをどこで知りましたか ?
  if (val == "co0025") {
    // お店を見て
    sessionStorage.setItem("chkShopValue", chkShop.checked);
    // ホームページより
    sessionStorage.setItem("chkHomePageValue", chkHomePage.checked);
    // 友達、知人より紹介
    sessionStorage.setItem("chkIntroductionValue", chkIntroduction.checked);
    // Twitter・Facebook などの SNS で知った
    sessionStorage.setItem("chkSnsValue", chkSns.checked);
    // その他
    sessionStorage.setItem("chkOtherValue", chkOther.checked);
    // その他_詳細
    sessionStorage.setItem("dtherDetailsValue", dtherDetails.value);
  }
  // 問い合わせ確認画面へ遷移
  transitionProc("index");
}
// 問い合せ確認画面の初期処理
function confirmationProc(val) {
  // コピーライトとバージョンの設定
  initProc();
  // セッションデータの取得
  getSessionData(val);
}
// セッションデータ取得処理
function getSessionData(val) {
  // お問い合わせ項目
  if (
    val == "co0003" ||
    val == "co0005" ||
    val == "co0007" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    var inquiryItemsElement = document.getElementById("inquiryItems");
    for (let i = 0; i < inquiryItemsElement.inquiryItems.length; i++) {
      if (
        inquiryItemsElement.inquiryItems[i].value ==
        sessionStorage.getItem("inquiryItemsValue")
      ) {
        inquiryItemsElement.inquiryItems[i].checked = true;
      } else {
        inquiryItemsElement.inquiryItems[i].disabled = true;
      }
    }
    document.getElementById("inquiryItems").value =
      sessionStorage.getItem("inquiryItemsValue");
  }
  // 会社名
  document.getElementById("company").value =
    sessionStorage.getItem("companyValue");
  // 代表者名
  if (
    val == "co0002" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0020" ||
    val == "co0025"
  ) {
    document.getElementById("representativeName").value =
      sessionStorage.getItem("representativeNameValue");
  }
  // 読み仮名
  if (
    val == "co0005" ||
    val == "co0010" ||
    val == "co0015" ||
    val == "co0025"
  ) {
    document.getElementById("pseudonymReading").value = sessionStorage.getItem(
      "pseudonymReadingValue"
    );
  }
  // 郵便番号_住所
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0008" ||
    val == "co0011" ||
    val == "co0014" ||
    val == "co0017" ||
    val == "co0023"
  ) {
    document.getElementById("postalCode").value =
      sessionStorage.getItem("postalCodeValue");
    document.getElementById("streetAddress").value =
      sessionStorage.getItem("streetAddressValue");
  }
  // 郵便番号_前半_後半_住所 1 2
  if (
    val == "co0003" ||
    val == "co0004" ||
    val == "co0006" ||
    val == "co0007" ||
    val == "co0009" ||
    val == "co0010" ||
    val == "co0012" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0016" ||
    val == "co0018" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0021" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("firstPostalCode").value = sessionStorage.getItem(
      "firstPostalCodeValue"
    );
    document.getElementById("latterPostalCode").value = sessionStorage.getItem(
      "latterPostalCodeValue"
    );
    document.getElementById("firstStreetAddress").value =
      sessionStorage.getItem("firstStreetAddressValue");
    document.getElementById("latterStreetAddress").value =
      sessionStorage.getItem("latterStreetAddressValue");
  }
  // 職種
  if (
    val == "co0002" ||
    val == "co0014" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    document.getElementById("occupation").value =
      sessionStorage.getItem("occupationValue");
  }
  // ホームページ
  if (
    val == "co0005" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    document.getElementById("homePage").value =
      sessionStorage.getItem("homePageValue");
  }
  // 部署名
  if (
    val == "co0003" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0012" ||
    val == "co0015" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("department").value =
      sessionStorage.getItem("departmentValue");
  }
  // 役職
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0019" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("position").value =
      sessionStorage.getItem("positionValue");
  }
  // お名前
  if (
    val == "co0001" ||
    val == "co0004" ||
    val == "co0007" ||
    val == "co0008" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0022"
  ) {
    document.getElementById("name").value = sessionStorage.getItem("nameValue");
    // ふりがな_フリガナ
    if (val != "co0001" && val != "co0020") {
      document.getElementById("furigana").value =
        sessionStorage.getItem("furiganaValue");
    }
  }
  // 苗字_名前_ふりがな
  if (
    val == "co0002" ||
    val == "co0003" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("lastName").value =
      sessionStorage.getItem("lastNameValue");
    document.getElementById("firstName").value =
      sessionStorage.getItem("firstNameValue");
    document.getElementById("lastFurigana").value =
      sessionStorage.getItem("lastFuriganaValue");
    document.getElementById("firstFurigana").value =
      sessionStorage.getItem("firstFuriganaValue");
  }
  // 性別
  if (
    val == "co0004" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    var sexElement = document.getElementById("sex");
    for (let i = 0; i < sexElement.sex.length; i++) {
      if (sexElement.sex[i].value == sessionStorage.getItem("sexValue")) {
        sexElement.sex[i].checked = true;
      } else {
        sexElement.sex[i].disabled = true;
      }
    }
    document.getElementById("sex").value = sessionStorage.getItem("sexValue");
  }
  // 生年月日
  if (
    val == "co0007" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    // 年
    document.getElementById("year").value = sessionStorage.getItem("yearValue");
    // 月
    document.getElementById("month").value =
      sessionStorage.getItem("monthValue");
    // 日
    document.getElementById("day").value = sessionStorage.getItem("dayValue");
  }
  // 年齢
  if (
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    document.getElementById("age").value = sessionStorage.getItem("ageValue");
  }
  // 電話番号
  document.getElementById("tel").value = sessionStorage.getItem("telValue");
  // FAX
  if (
    val == "co0009" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("fax").value = sessionStorage.getItem("faxValue");
  }
  // 携帯番号
  if (
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    document.getElementById("mobilePhone").value =
      sessionStorage.getItem("mobilePhoneValue");
  }
  // メールアドレス
  document.getElementById("mail").value = sessionStorage.getItem("mailValue");
  // 問い合わせ先
  if (val == "co0006") {
    document.getElementById("contact").value =
      sessionStorage.getItem("contactValue");
  }
  // 確認したい商品・サービス名
  if (val == "co0009") {
    document.getElementById("productsAndServices").value =
      sessionStorage.getItem("productsAndServicesValue");
  }
  if (val == "co0018") {
    // 勤怠管理システム
    if (sessionStorage.getItem("attendanceSysValue") == "true") {
      document.getElementById("attendanceSys").checked = true;
    }
    // 文書管理システム
    if (sessionStorage.getItem("documentsSysValue") == "true") {
      document.getElementById("documentsSys").checked = true;
    }
    // 在庫管理システム
    if (sessionStorage.getItem("stockSysValue") == "true") {
      document.getElementById("stockSys").checked = true;
    }
    // グループウェア
    if (sessionStorage.getItem("bidSysValue") == "true") {
      document.getElementById("bidSys").checked = true;
    }
    // その他システム
    if (sessionStorage.getItem("othersysValue") == "true") {
      document.getElementById("othersys").checked = true;
    }
  }
  // お客様番号
  if (val == "co0020") {
    document.getElementById("customerNumber").value = sessionStorage.getItem(
      "customerNumberValue"
    );
  }
  // 返信方法
  if (
    val == "co0005" ||
    val == "co0010" ||
    val == "co0015" ||
    val == "co0019" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    var replyElement = document.getElementById("reply");
    for (let i = 0; i < replyElement.reply.length; i++) {
      if (replyElement.reply[i].value == sessionStorage.getItem("replyValue")) {
        replyElement.reply[i].checked = true;
      } else {
        replyElement.reply[i].disabled = true;
      }
    }
    document.getElementById("reply").value =
      sessionStorage.getItem("replyValue");
  }
  // メルマガやDMを受け取る
  if (
    val == "co0015" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0023" ||
    val == "co0025"
  ) {
    var emailNewsletterElement = document.getElementById("emailNewsletter");
    for (let i = 0; i < emailNewsletterElement.emailNewsletter.length; i++) {
      if (
        emailNewsletterElement.emailNewsletter[i].value ==
        sessionStorage.getItem("emailNewsletterValue")
      ) {
        emailNewsletterElement.emailNewsletter[i].checked = true;
      } else {
        emailNewsletterElement.emailNewsletter[i].disabled = true;
      }
    }
    document.getElementById("emailNewsletter").value = sessionStorage.getItem(
      "emailNewsletterValue"
    );
  }
  // 件名
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0020" ||
    val == "co0022" ||
    val == "co0023" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    document.getElementById("subject").value =
      sessionStorage.getItem("subjectValue");
  }
  // 問い合わせ内容
  document.getElementById("inquiry").value =
    sessionStorage.getItem("inquiryValue");
  // 回答希望日
  if (val == "co0024" || val == "co0025") {
    document.getElementById("answerYesDate").value =
      sessionStorage.getItem("answerYesDateValue");
  }
  // 弊社 Webサイトをどこで知りましたか ?
  if (val == "co0025") {
    // お店を見て
    if (sessionStorage.getItem("chkShopValue") == "true") {
      document.getElementById("chkShop").checked = true;
    }
    // ホームページより
    if (sessionStorage.getItem("chkHomePageValue") == "true") {
      document.getElementById("chkHomePage").checked = true;
    }
    // 友達、知人より紹介
    if (sessionStorage.getItem("chkIntroductionValue") == "true") {
      document.getElementById("chkIntroduction").checked = true;
    }
    // Twitter・Facebook などの SNS で知った
    if (sessionStorage.getItem("chkSnsValue") == "true") {
      document.getElementById("chkSns").checked = true;
    }
    // その他
    if (sessionStorage.getItem("chkOtherValue") == "true") {
      document.getElementById("chkOther").checked = true;
    }
    // その他_詳細
    document.getElementById("dtherDetails").value =
      sessionStorage.getItem("dtherDetailsValue");
  }
}
// 送信画面の初期処理
function sendProc(val) {
  // 初期処理とセッションデータ取得処理
  confirmationProc(val);
  // 結果判定
  resultJudgment(val);
}
// 結果判定
function resultJudgment(val) {
  // お問い合わせ項目_その他
  if (val == "co0003" || val == "co0007") {
    const inquiryItemsValue = document.getElementById("inquiryItems").value;
    if (inquiryItemsValue == inquiryItemsOtherAnswer) {
      document.getElementById("inquiryItemsResult").innerText = "OK";
      document.getElementById("inquiryItemsResult").style.color = "#0000FF";
    } else {
      document.getElementById("inquiryItemsResult").innerText =
        "「その他」を選択して下さい。";
      document.getElementById("inquiryItemsResult").style.color = "#FF0000";
    }
  }
  // お問い合わせ項目_採用について
  if (
    val == "co0005" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const inquiryItemsValue = document.getElementById("inquiryItems").value;
    if (inquiryItemsValue == inquiryItemsRecruitmentAnswer) {
      document.getElementById("inquiryItemsResult").innerText = "OK";
      document.getElementById("inquiryItemsResult").style.color = "#0000FF";
    } else {
      document.getElementById("inquiryItemsResult").innerText =
        "「採用について」を選択して下さい。";
      document.getElementById("inquiryItemsResult").style.color = "#FF0000";
    }
  }
  // お問い合わせ項目_専門項目
  if (val == "co0024") {
    document.getElementById("inquiryItemsResult").innerText =
      "専門フォームの項目のため、送信対象外となります。";
    document.getElementById("inquiryItemsResult").style.color = "#FF0000";
  }
  // 会社名
  const companyValue = document.getElementById("company").value;
  if (companyValue == companyAnswer) {
    document.getElementById("companyResult").innerText = "OK";
    document.getElementById("companyResult").style.color = "#0000FF";
  } else {
    document.getElementById("companyResult").innerText =
      "「" + companyAnswer + "」を入力して下さい。";
    document.getElementById("companyResult").style.color = "#FF0000";
  }
  // 読み仮名
  if (val == "co0005" || val == "co0010" || val == "co0025") {
    const pseudonymReadingValue =
      document.getElementById("pseudonymReading").value;
    if (pseudonymReadingValue == pseudonymReadingAnswer) {
      document.getElementById("pseudonymReadingResult").innerText = "OK";
      document.getElementById("pseudonymReadingResult").style.color = "#0000FF";
    } else {
      document.getElementById("pseudonymReadingResult").innerText =
        "「" + pseudonymReadingAnswer + "」を入力して下さい。";
      document.getElementById("pseudonymReadingResult").style.color = "#FF0000";
    }
  }
  // 代表者名
  if (
    val == "co0002" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0020" ||
    val == "co0025"
  ) {
    const representativeNameValue =
      document.getElementById("representativeName").value;
    if (representativeNameValue == representativeNameAnswer) {
      document.getElementById("representativeNameResult").innerText = "OK";
      document.getElementById("representativeNameResult").style.color =
        "#0000FF";
    } else {
      document.getElementById("representativeNameResult").innerText =
        "「" + representativeNameAnswer + "」を入力して下さい。";
      document.getElementById("representativeNameResult").style.color =
        "#FF0000";
    }
  }
  // 郵便番号
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0008" ||
    val == "co0011" ||
    val == "co0014" ||
    val == "co0017"
  ) {
    const postalCodeValue = document.getElementById("postalCode").value;
    if (postalCodeValue == postalCodeAnswer) {
      document.getElementById("postalCodeResult").innerText = "OK";
      document.getElementById("postalCodeResult").style.color = "#0000FF";
    } else {
      document.getElementById("postalCodeResult").innerText =
        "「" + postalCodeAnswer + "」を入力して下さい。";
      document.getElementById("postalCodeResult").style.color = "#FF0000";
    }
  }
  // 住所
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0008" ||
    val == "co0011" ||
    val == "co0014" ||
    val == "co0017"
  ) {
    const streetAddressValue = document.getElementById("streetAddress").value;
    if (streetAddressValue == streetAddressAnswer) {
      document.getElementById("streetAddressResult").innerText = "OK";
      document.getElementById("streetAddressResult").style.color = "#0000FF";
    } else {
      document.getElementById("streetAddressResult").innerText =
        "「" + streetAddressAnswer + "」を入力して下さい。";
      document.getElementById("streetAddressResult").style.color = "#FF0000";
    }
  }
  // 郵便番号_前半_後半
  if (
    val == "co0003" ||
    val == "co0006" ||
    val == "co0007" ||
    val == "co0009" ||
    val == "co0010" ||
    val == "co0012" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0018" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0021" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    // 郵便番号_前半
    const firstPostalCodeValue =
      document.getElementById("firstPostalCode").value;

    // 郵便番号_後半
    const latterPostalCodeValue =
      document.getElementById("latterPostalCode").value;
    if (
      firstPostalCodeValue == firstPostalCodeAnswer &&
      latterPostalCodeValue == latterPostalCodeAnswer
    ) {
      document.getElementById("postalCodeResult").innerText = "OK";
      document.getElementById("postalCodeResult").style.color = "#0000FF";
    } else {
      document.getElementById("postalCodeResult").innerText =
        "「" + postalCodeAnswer + "」を入力して下さい。";
      document.getElementById("postalCodeResult").style.color = "#FF0000";
    }
  }
  // 住所 1 2
  if (
    val == "co0003" ||
    val == "co0006" ||
    val == "co0007" ||
    val == "co0009" ||
    val == "co0010" ||
    val == "co0012" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0018" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0021" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    // 住所 1
    const firstStreetAddressValue =
      document.getElementById("firstStreetAddress").value;
    if (firstStreetAddressValue == firstStreetAddressAnswer) {
      document.getElementById("firstStreetAddressResult").innerText = "OK";
      document.getElementById("firstStreetAddressResult").style.color =
        "#0000FF";
    } else {
      document.getElementById("firstStreetAddressResult").innerText =
        "「" + firstStreetAddressAnswer + "」を入力して下さい。";
      document.getElementById("firstStreetAddressResult").style.color =
        "#FF0000";
    }
    // 住所 2
    const latterStreetAddressValue = document.getElementById(
      "latterStreetAddress"
    ).value;
    if (latterStreetAddressValue == latterStreetAddressAnswer) {
      document.getElementById("latterStreetAddressResult").innerText = "OK";
      document.getElementById("latterStreetAddressResult").style.color =
        "#0000FF";
    } else {
      document.getElementById("latterStreetAddressResult").innerText =
        "「" + latterStreetAddressAnswer + "」を入力して下さい。";
      document.getElementById("latterStreetAddressResult").style.color =
        "#FF0000";
    }
  }
  // 職種
  if (
    val == "co0002" ||
    val == "co0014" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const occupationValue = document.getElementById("occupation").value;
    if (occupationValue == occupationAnswer) {
      document.getElementById("occupationResult").innerText = "OK";
      document.getElementById("occupationResult").style.color = "#0000FF";
    } else {
      document.getElementById("occupationResult").innerText =
        "「" + occupationAnswer + "」を入力して下さい。";
      document.getElementById("occupationResult").style.color = "#FF0000";
    }
  }
  // ホームページ
  if (
    val == "co0005" ||
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const homePageValue = document.getElementById("homePage").value;
    if (homePageValue == homePageAnswer) {
      document.getElementById("homePageResult").innerText = "OK";
      document.getElementById("homePageResult").style.color = "#0000FF";
    } else {
      document.getElementById("homePageResult").innerText =
        "「" + homePageAnswer + "」を入力して下さい。";
      document.getElementById("homePageResult").style.color = "#FF0000";
    }
  }
  // 部署名
  if (
    val == "co0003" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0012" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const departmentValue = document.getElementById("department").value;
    if (departmentValue == departmentAnswer) {
      document.getElementById("departmentResult").innerText = "OK";
      document.getElementById("departmentResult").style.color = "#0000FF";
    } else {
      document.getElementById("departmentResult").innerText =
        "「" + departmentAnswer + "」を入力して下さい。";
      document.getElementById("departmentResult").style.color = "#FF0000";
    }
  }
  // 役職
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0019" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const positionValue = document.getElementById("position").value;
    if (positionValue == positionAnswer) {
      document.getElementById("positionResult").innerText = "OK";
      document.getElementById("positionResult").style.color = "#0000FF";
    } else {
      document.getElementById("positionResult").innerText =
        "「" + positionAnswer + "」を入力して下さい。";
      document.getElementById("positionResult").style.color = "#FF0000";
    }
  }
  // お名前
  if (
    val == "co0001" ||
    val == "co0004" ||
    val == "co0007" ||
    val == "co0008" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0016" ||
    val == "co0019" ||
    val == "co0020" ||
    val == "co0022"
  ) {
    const nameValue = document.getElementById("name").value;
    if (nameValue == nameAnswer) {
      document.getElementById("nameResult").innerText = "OK";
      document.getElementById("nameResult").style.color = "#0000FF";
    } else {
      document.getElementById("nameResult").innerText =
        "「" + nameAnswer + "」を入力して下さい。";
      document.getElementById("nameResult").style.color = "#FF0000";
    }
  }
  // ふりがな
  if (
    val == "co0004" ||
    val == "co0010" ||
    val == "co0016" ||
    val == "co0022"
  ) {
    const furiganaValue = document.getElementById("furigana").value;
    if (furiganaValue == furiganaHiraganaAnswer) {
      document.getElementById("furiganaResult").innerText = "OK";
      document.getElementById("furiganaResult").style.color = "#0000FF";
    } else {
      document.getElementById("furiganaResult").innerText =
        "「" + furiganaHiraganaAnswer + "」を入力して下さい。";
      document.getElementById("furiganaResult").style.color = "#FF0000";
    }
  }
  // フリガナ
  if (
    val == "co0007" ||
    val == "co0008" ||
    val == "co0013" ||
    val == "co0019"
  ) {
    const furiganaValue = document.getElementById("furigana").value;
    if (furiganaValue == furiganaKtakanaAnswer) {
      document.getElementById("furiganaResult").innerText = "OK";
      document.getElementById("furiganaResult").style.color = "#0000FF";
    } else {
      document.getElementById("furiganaResult").innerText =
        "「" + furiganaKtakanaAnswer + "」を入力して下さい。";
      document.getElementById("furiganaResult").style.color = "#FF0000";
    }
  }
  // 苗字_名前
  if (
    val == "co0002" ||
    val == "co0003" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0017" ||
    val == "co0018" ||
    val == "co0021" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    // 苗字
    const lastNameValue = document.getElementById("lastName").value;
    // 名前
    const firstNameValue = document.getElementById("firstName").value;
    if (lastNameValue == lastNameAnswer && firstNameValue == firstNameAnswer) {
      document.getElementById("nameResult").innerText = "OK";
      document.getElementById("nameResult").style.color = "#0000FF";
    } else {
      document.getElementById("nameResult").innerText =
        "「" + nameAnswer + "」を入力して下さい。";
      document.getElementById("nameResult").style.color = "#FF0000";
    }
  }
  // 苗字_名前_ふりがな
  if (
    val == "co0002" ||
    val == "co0005" ||
    val == "co0006" ||
    val == "co0009" ||
    val == "co0011" ||
    val == "co0018" ||
    val == "co0025"
  ) {
    // 苗字_ふりがな
    const lastFuriganaValue = document.getElementById("lastFurigana").value;
    // 名前_ふりがな
    const firstFuriganaValue = document.getElementById("firstFurigana").value;
    if (
      lastFuriganaValue == lastFuriganaHiraganaAnswer &&
      firstFuriganaValue == firstFuriganaHiraganaAnswer
    ) {
      document.getElementById("furiganaResult").innerText = "OK";
      document.getElementById("furiganaResult").style.color = "#0000FF";
    } else {
      document.getElementById("furiganaResult").innerText =
        "「" + furiganaHiraganaAnswer + "」を入力して下さい。";
      document.getElementById("furiganaResult").style.color = "#FF0000";
    }
  }
  // 苗字_名前_フリガナ
  if (
    val == "co0003" ||
    val == "co0012" ||
    val == "co0014" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0024"
  ) {
    // 苗字_フリガナ
    const lastFuriganaValue = document.getElementById("lastFurigana").value;
    // 名前_フリガナ
    const firstFuriganaValue = document.getElementById("firstFurigana").value;
    if (
      lastFuriganaValue == lastFuriganaKatakanaAnswer &&
      firstFuriganaValue == firstFuriganaKatakanaAnswer
    ) {
      document.getElementById("furiganaResult").innerText = "OK";
      document.getElementById("furiganaResult").style.color = "#0000FF";
    } else {
      document.getElementById("furiganaResult").innerText =
        "「" + furiganaKtakanaAnswer + "」を入力して下さい。";
      document.getElementById("furiganaResult").style.color = "#FF0000";
    }
  }
  // 性別
  if (
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const sexValue = document.getElementById("sex").value;
    if (sexValue == sexAnswer) {
      document.getElementById("sexResult").innerText = "OK";
      document.getElementById("sexResult").style.color = "#0000FF";
    } else {
      document.getElementById("sexResult").innerText =
        "「男性」を選択して下さい。";
      document.getElementById("sexResult").style.color = "#FF0000";
    }
  }
  // 生年月日
  if (
    val == "co0007" ||
    val == "co0010" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    // 年
    const yearValue = document.getElementById("year").value;
    // 月
    const monthValue = document.getElementById("month").value;
    // 日
    const dayValue = document.getElementById("day").value;
    if (
      yearValue == yearAnswer &&
      (monthValue == monthAnswer || monthValue == monthZeroPaddingAnswer) &&
      (dayValue == dayAnswer || dayValue == dayZeroPaddingAnswer)
    ) {
      document.getElementById("birthdayResult").innerText = "OK";
      document.getElementById("birthdayResult").style.color = "#0000FF";
    } else {
      document.getElementById("birthdayResult").innerText =
        "「1984年05月04日」を入力して下さい。";
      document.getElementById("birthdayResult").style.color = "#FF0000";
    }
  }
  // 年齢
  if (
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const ageValue = document.getElementById("age").value;
    if (ageValue == ageAnswer) {
      document.getElementById("ageResult").innerText = "OK";
      document.getElementById("ageResult").style.color = "#0000FF";
    } else {
      document.getElementById("ageResult").innerText =
        "「" + ageAnswer + "」を入力して下さい。";
      document.getElementById("ageResult").style.color = "#FF0000";
    }
  }
  // 電話番号
  const telValue = document.getElementById("tel").value;
  if (telValue == telAnswer) {
    document.getElementById("telResult").innerText = "OK";
    document.getElementById("telResult").style.color = "#0000FF";
  } else {
    document.getElementById("telResult").innerText =
      "「" + telAnswer + "」を入力して下さい。";
    document.getElementById("telResult").style.color = "#FF0000";
  }
  // FAX
  if (
    val == "co0009" ||
    val == "co0011" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const faxValue = document.getElementById("fax").value;
    if (faxValue == faxAnswer) {
      document.getElementById("faxResult").innerText = "OK";
      document.getElementById("faxResult").style.color = "#0000FF";
    } else {
      document.getElementById("faxResult").innerText =
        "「" + faxAnswer + "」を入力して下さい。";
      document.getElementById("faxResult").style.color = "#FF0000";
    }
  }
  // 携帯番号
  if (
    val == "co0009" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const mobilePhoneValue = document.getElementById("mobilePhone").value;
    if (mobilePhoneValue == mobilePhoneAnswer) {
      document.getElementById("mobilePhoneResult").innerText = "OK";
      document.getElementById("mobilePhoneResult").style.color = "#0000FF";
    } else {
      document.getElementById("mobilePhoneResult").innerText =
        "「" + mobilePhoneAnswer + "」を入力して下さい。";
      document.getElementById("mobilePhoneResult").style.color = "#FF0000";
    }
  }
  // メールアドレス
  const mailValue = document.getElementById("mail").value;
  if (mailValue == mailAnswer) {
    document.getElementById("mailResult").innerText = "OK";
    document.getElementById("mailResult").style.color = "#0000FF";
  } else {
    document.getElementById("mailResult").innerText =
      "「" + mailAnswer + "」を入力して下さい。";
    document.getElementById("mailResult").style.color = "#FF0000";
  }
  // 問い合わせ先
  if (val == "co0006") {
    const contactValue = document.getElementById("contact").value;
    if (contactValue == contactAnswer) {
      document.getElementById("contactResult").innerText = "OK";
      document.getElementById("contactResult").style.color = "#0000FF";
    } else {
      document.getElementById("contactResult").innerText =
        "「本社」を選択して下さい。";
      document.getElementById("contactResult").style.color = "#FF0000";
    }
  }
  // 確認したい商品・サービス名
  if (val == "co0009") {
    const productsAndServicesValue = document.getElementById(
      "productsAndServices"
    ).value;
    if (!productsAndServicesValue) {
      document.getElementById("productsAndServicesResult").innerText = "OK";
      document.getElementById("productsAndServicesResult").style.color =
        "#0000FF";
    } else {
      document.getElementById("productsAndServicesResult").innerText =
        "必須項目ではない為、未入力にして下さい。";
      document.getElementById("productsAndServicesResult").style.color =
        "#FF0000";
    }
  }
  // 導入システム
  if (val == "co0018") {
    document.getElementById("systemsResult").innerText =
      "専門フォームの項目のため、送信対象外となります。";
    document.getElementById("systemsResult").style.color = "#FF0000";
  }

  // お客様番号
  if (val == "co0020") {
    const customerNumberValue = document.getElementById("customerNumber").value;
    if (!customerNumberValue) {
      document.getElementById("customerNumberResult").innerText = "OK";
      document.getElementById("customerNumberResult").style.color = "#0000FF";
    } else {
      document.getElementById("customerNumberResult").innerText =
        "必須項目ではない為、未入力にして下さい。";
      document.getElementById("customerNumberResult").style.color = "#FF0000";
    }
  }
  // 返信方法
  if (
    val == "co0005" ||
    val == "co0010" ||
    val == "co0019" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const replyValue = document.getElementById("reply").value;
    if (replyValue == replyAnswer) {
      document.getElementById("replyResult").innerText = "OK";
      document.getElementById("replyResult").style.color = "#0000FF";
    } else {
      document.getElementById("replyResult").innerText =
        "「メール」を選択して下さい。";
      document.getElementById("replyResult").style.color = "#FF0000";
    }
  }
  // メルマガやDMを受け取る
  if (
    val == "co0017" ||
    val == "co0019" ||
    val == "co0021" ||
    val == "co0025"
  ) {
    const emailNewsletterValue =
      document.getElementById("emailNewsletter").value;
    if (emailNewsletterValue == emailNewsletterAnswer) {
      document.getElementById("emailNewsletterResult").innerText = "OK";
      document.getElementById("emailNewsletterResult").style.color = "#0000FF";
    } else {
      document.getElementById("emailNewsletterResult").innerText =
        "「受け取らない」を選択して下さい。";
      document.getElementById("emailNewsletterResult").style.color = "#FF0000";
    }
  }
  // 件名
  if (
    val == "co0007" ||
    val == "co0013" ||
    val == "co0017" ||
    val == "co0020" ||
    val == "co0022" ||
    val == "co0024" ||
    val == "co0025"
  ) {
    const subjectValue = document.getElementById("subject").value;
    if (subjectValue == subjectAnswer) {
      document.getElementById("subjectResult").innerText = "OK";
      document.getElementById("subjectResult").style.color = "#0000FF";
    } else {
      document.getElementById("subjectResult").innerText =
        "「" + subjectAnswer + "」を入力して下さい。";
      document.getElementById("subjectResult").style.color = "#FF0000";
    }
  }
  // 問い合わせ内容
  let inqAns;
  let inqNewLineAns;

  if (val == "co0003" || val == "co0024") {
    inqAns = inquiry400CharactersAnswer;
    inqNewLineAns = inquiry400CharactersNewLineAnswer;
  } else if (val == "co0006" || val == "co0018") {
    inqAns = inquiry300CharactersAnswer;
    inqNewLineAns = inquiry300CharactersNewLineAnswer;
  } else if (val == "co0009" || val == "co0021") {
    inqAns = inquiry200CharactersAnswer;
    inqNewLineAns = inquiry200CharactersNewLineAnswer;
  } else if (val == "co0012" || val == "co0022") {
    inqAns = inquiry100CharactersAnswer;
    inqNewLineAns = inquiry100CharactersNewLineAnswer;
  } else {
    inqAns = inquiryAnswer;
    inqNewLineAns = inquiryNewLineAnswer;
  }

  const inquiryValue = document.getElementById("inquiry").value;
  if (inquiryValue == inqAns || inquiryValue == inqNewLineAns) {
    document.getElementById("inquiryResult").innerText = "OK";
    document.getElementById("inquiryResult").style.color = "#0000FF";
  } else {
    document.getElementById("inquiryResult").innerText =
      'シート「【基本情報】」に差異がないか、または「"」がないことを確認して下さい。';
    document.getElementById("inquiryResult").style.color = "#FF0000";
  }
  // 回答希望日
  if (val == "co0024" || val == "co0025") {
    const answerYesDateValue = document.getElementById("answerYesDate").value;
    var answerYesDateAnswer = getAnswerYesDate();
    if (answerYesDateValue == answerYesDateAnswer) {
      document.getElementById("answerYesDateResult").innerText =
        "OK ※本番では祝日も考慮します。";
      document.getElementById("answerYesDateResult").style.color = "#0000FF";
    } else {
      document.getElementById("answerYesDateResult").innerText =
        "土日を除いた3営業日後を指定して下さい。本番では祝日も考慮します。";
      document.getElementById("answerYesDateResult").style.color = "#FF0000";
    }
  }
  // 弊社 Webサイトをどこで知りましたか ?
  if (val == "co0025") {
    var num = 0;
    // お店を見て
    if (sessionStorage.getItem("chkShopValue") == "true") {
      num++;
    }
    // ホームページより
    if (sessionStorage.getItem("chkHomePageValue") == "true") {
      num++;
    }
    // 友達、知人より紹介
    if (sessionStorage.getItem("chkIntroductionValue") == "true") {
      num++;
    }
    // Twitter・Facebook などの SNS で知った
    if (sessionStorage.getItem("chkSnsValue") == "true") {
      num++;
    }
    // その他
    if (sessionStorage.getItem("chkOtherValue") == "true") {
      num++;
    }
    // 複数選択の場合
    if (2 <= num) {
      document.getElementById("whereDidYouKnowResult").innerText =
        "「その他」のみを選択して下さい。";
      document.getElementById("whereDidYouKnowResult").style.color = "#FF0000";
    } else if (0 == num) {
      // 選択なしの場合
      document.getElementById("whereDidYouKnowResult").innerText =
        "「その他」のみを選択して下さい。";
      document.getElementById("whereDidYouKnowResult").style.color = "#FF0000";
    } else if (sessionStorage.getItem("chkOtherValue") != "true") {
      // その他が選択されていない場合
      document.getElementById("whereDidYouKnowResult").innerText =
        "「その他」のみを選択して下さい。";
      document.getElementById("whereDidYouKnowResult").style.color = "#FF0000";
    } else if (
      // 記載内容が誤っている場合
      sessionStorage.getItem("dtherDetailsValue") !=
        uppercaseDtherDetailsAnswer &&
      sessionStorage.getItem("dtherDetailsValue") != lowercasedtherDetailsAnswer
    ) {
      document.getElementById("whereDidYouKnowResult").innerText =
        "リスト作成業務では、Indeed を基に作成します。そのため「その他」には「Indeed検索にて」を記載して下さい。";
      document.getElementById("whereDidYouKnowResult").style.color = "#FF0000";
    } else {
      // 上記以外
      document.getElementById("whereDidYouKnowResult").innerText = "OK";
      document.getElementById("whereDidYouKnowResult").style.color = "#0000FF";
    }
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
// 遷移処理
function transitionProc(screen) {
  // 画面判定
  if (screen == "index") {
    // 問い合わせ確認画面へ遷移
    window.location.href = "../html/confirmation.html";
  } else if (screen == "confirmation") {
    // 送信画面へ遷移
    window.location.href = "../html/send.html";
  } else {
    // セッションデータ削除処理
    delSessionData();
    // 指定のページへ遷移
    window.location.href = "https://www.thankslab.biz/";
  }
}
// セッションデータ削除処理
function delSessionData() {
  // セッションデータの削除
  window.sessionStorage.clear();
}
