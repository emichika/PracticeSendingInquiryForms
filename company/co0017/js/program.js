// ラジオボタンの値を保持
var nowVal;
// 問い合せ画面の初期処理
function inquiryLoad() {
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
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
// 問合せ確認画面の入力チェック処理
function confirmationProcess() {
  // 会社名の入力チェック
  const company = document.getElementById("company");
  // 未入力の場合
  if (company.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 苗字の入力チェック
  const lastName = document.getElementById("lastName");
  // 未入力の場合
  if (lastName.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 名前の入力チェック
  const firstName = document.getElementById("firstName");
  // 未入力の場合
  if (firstName.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 苗字_ふりがなの入力チェック
  const lastFurigana = document.getElementById("lastFurigana");
  // 未入力の場合
  if (lastFurigana.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 名前_ふりがなの入力チェック
  const firstFurigana = document.getElementById("firstFurigana");
  // 未入力の場合
  if (firstFurigana.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 電話の入力チェック
  const tel = document.getElementById("tel");
  // 未入力の場合
  if (tel.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // メールアドレスの入力チェック
  const mail = document.getElementById("mail");
  // 未入力の場合
  if (mail.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // 問い合わせ内容の入力チェック
  const inquiry = document.getElementById("inquiry");
  // 未入力の場合
  if (inquiry.value == "") {
    // エラーメッセージを出力
    alert("必須項目を入力して下さい。");
    // 処理終了
    return false;
  }
  // セッションデータを保存
  // お問い合わせ項目
  var inquiryItemsElement = document.getElementById("inquiryItems");
  sessionStorage.setItem(
    "inquiryItemsValue",
    inquiryItemsElement.inquiryItems.value
  );
  // 会社名
  sessionStorage.setItem("companyValue", company.value);
  // 郵便番号_前半
  sessionStorage.setItem("firstPostalCodeValue", firstPostalCode.value);
  // 郵便番号_後半
  sessionStorage.setItem("latterPostalCodeValue", latterPostalCode.value);
  // 住所 1
  sessionStorage.setItem("firstStreetAddressValue", firstStreetAddress.value);
  // 住所 2
  sessionStorage.setItem("latterStreetAddressValue", latterStreetAddress.value);
  // 部署名
  sessionStorage.setItem("departmentValue", department.value);
  // 苗字
  sessionStorage.setItem("lastNameValue", lastName.value);
  // 名前
  sessionStorage.setItem("firstNameValue", firstName.value);
  // 苗字_ふりがな
  sessionStorage.setItem("lastFuriganaValue", lastFurigana.value);
  // 名前_ふりがな
  sessionStorage.setItem("firstFuriganaValue", firstFurigana.value);
  // 性別
  var sexElement = document.getElementById("sex");
  sessionStorage.setItem("sexValue", sexElement.sex.value);
  // 生年月日_年
  sessionStorage.setItem("yearValue", year.value);
  // 生年月日_月
  sessionStorage.setItem("monthValue", month.value);
  // 生年月日_日
  sessionStorage.setItem("dayValue", day.value);
  // 年齢
  sessionStorage.setItem("ageValue", age.value);
  // 電話番号
  sessionStorage.setItem("telValue", tel.value);
  // FAX
  sessionStorage.setItem("faxValue", fax.value);
  // メールアドレス
  sessionStorage.setItem("mailValue", mail.value);
  // 問い合わせ内容
  sessionStorage.setItem("inquiryValue", inquiry.value);
  // 問い合わせ確認画面へ遷移
  window.location.href = "../html/confirmation.html";
}
// 問い合せ確認画面の初期処理
function confirmationLoad() {
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
  // セッションデータの取得
  getSessionData();
}
// 送信画面への遷移処理
function sendProcess() {
  // 送信画面へ遷移
  window.location.href = "../html/send.html";
}
// 送信画面の初期処理
function sendLoad() {
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
  // セッションデータの取得
  getSessionData();
  // 画面項目の値を、変数へ代入
  // お問い合わせ項目
  const inquiryItemsValue = document.getElementById("inquiryItems").value;
  // 会社名
  const companyValue = document.getElementById("company").value;
  // 郵便番号_前半
  const firstPostalCodeValue = document.getElementById("firstPostalCode").value;
  // 郵便番号_後半
  const latterPostalCodeValue = document.getElementById("latterPostalCode")
    .value;
  // 住所 1
  const firstStreetAddressValue = document.getElementById("firstStreetAddress")
    .value;
  // 住所 2
  const latterStreetAddressValue = document.getElementById(
    "latterStreetAddress"
  ).value;
  // 部署名
  const departmentValue = document.getElementById("department").value;
  // 苗字
  const lastNameValue = document.getElementById("lastName").value;
  // 名前
  const firstNameValue = document.getElementById("firstName").value;
  // 苗字_ふりがな
  const lastFuriganaValue = document.getElementById("lastFurigana").value;
  // 名前_ふりがな
  const firstFuriganaValue = document.getElementById("firstFurigana").value;
  // 性別
  const sexValue = document.getElementById("sex").value;
  // 生年月日_年
  const yearValue = document.getElementById("year").value;
  // 生年月日_月
  const monthValue = document.getElementById("month").value;
  // 生年月日_日
  const dayValue = document.getElementById("day").value;
  // 年齢
  const ageValue = document.getElementById("age").value;
  // 電話番号
  const telValue = document.getElementById("tel").value;
  // FAX
  const faxValue = document.getElementById("fax").value;
  // メールアドレス
  const mailValue = document.getElementById("mail").value;
  // 問い合わせ内容
  const inquiryValue = document.getElementById("inquiry").value;
  // 送信結果判定処理
  // お問い合わせ項目
  if (inquiryItemsValue == inquiryItemsRecruitmentAnswer) {
    document.getElementById("inquiryItemsResult").innerText = "OK";
    document.getElementById("inquiryItemsResult").style.color = "#0000FF";
  } else {
    document.getElementById("inquiryItemsResult").innerText =
      '"採用について"を選択して下さい。';
    document.getElementById("inquiryItemsResult").style.color = "#FF0000";
  }
  // 会社名
  if (companyValue == companyAnswer) {
    document.getElementById("companyResult").innerText = "OK";
    document.getElementById("companyResult").style.color = "#0000FF";
  } else {
    document.getElementById("companyResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("companyResult").style.color = "#FF0000";
  }
  // 郵便番号
  if (
    firstPostalCodeValue == firstPostalCodeAnswer &&
    latterPostalCodeValue == latterPostalCodeAnswer
  ) {
    document.getElementById("postalCodeResult").innerText = "OK";
    document.getElementById("postalCodeResult").style.color = "#0000FF";
  } else {
    document.getElementById("postalCodeResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("postalCodeResult").style.color = "#FF0000";
  }
  // 住所 1
  if (firstStreetAddressValue == firstStreetAddressAnswer) {
    document.getElementById("firstStreetAddressResult").innerText = "OK";
    document.getElementById("firstStreetAddressResult").style.color = "#0000FF";
  } else {
    document.getElementById("firstStreetAddressResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("firstStreetAddressResult").style.color = "#FF0000";
  }
  // 住所 2
  if (latterStreetAddressValue == latterStreetAddressAnswer) {
    document.getElementById("latterStreetAddressResult").innerText = "OK";
    document.getElementById("latterStreetAddressResult").style.color =
      "#0000FF";
  } else {
    document.getElementById("latterStreetAddressResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("latterStreetAddressResult").style.color =
      "#FF0000";
  }
  // 部署名
  if (departmentValue == departmentAnswer) {
    document.getElementById("departmentResult").innerText = "OK";
    document.getElementById("departmentResult").style.color = "#0000FF";
  } else {
    document.getElementById("departmentResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("departmentResult").style.color = "#FF0000";
  }
  // お名前
  if (lastNameValue == lastNameAnswer && firstNameValue == firstNameAnswer) {
    document.getElementById("nameResult").innerText = "OK";
    document.getElementById("nameResult").style.color = "#0000FF";
  } else {
    document.getElementById("nameResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("nameResult").style.color = "#FF0000";
  }
  // お名前_ふりがな
  if (
    lastFuriganaValue == lastFuriganaHiraganaAnswer &&
    firstFuriganaValue == firstFuriganaHiraganaAnswer
  ) {
    document.getElementById("furiganaResult").innerText = "OK";
    document.getElementById("furiganaResult").style.color = "#0000FF";
  } else {
    document.getElementById("furiganaResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("furiganaResult").style.color = "#FF0000";
  }
  // 性別
  if (sexValue == sexAnswer) {
    document.getElementById("sexResult").innerText = "OK";
    document.getElementById("sexResult").style.color = "#0000FF";
  } else {
    document.getElementById("sexResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("sexResult").style.color = "#FF0000";
  }
  // 生年月日
  if (
    yearValue == yearAnswer &&
    (monthValue == monthAnswer || monthValue == monthZeroPaddingAnswer) &&
    (dayValue == dayAnswer || dayValue == dayZeroPaddingAnswer)
  ) {
    document.getElementById("birthdayResult").innerText = "OK";
    document.getElementById("birthdayResult").style.color = "#0000FF";
  } else {
    document.getElementById("birthdayResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("birthdayResult").style.color = "#FF0000";
  }
  // 年齢
  if (ageValue == ageAnswer) {
    document.getElementById("ageResult").innerText = "OK";
    document.getElementById("ageResult").style.color = "#0000FF";
  } else {
    document.getElementById("ageResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("ageResult").style.color = "#FF0000";
  }
  // 電話番号
  if (telValue == telAnswer) {
    document.getElementById("telResult").innerText = "OK";
    document.getElementById("telResult").style.color = "#0000FF";
  } else {
    document.getElementById("telResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("telResult").style.color = "#FF0000";
  }
  // FAX
  if (faxValue == faxAnswer) {
    document.getElementById("faxResult").innerText = "OK";
    document.getElementById("faxResult").style.color = "#0000FF";
  } else {
    document.getElementById("faxResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("faxResult").style.color = "#FF0000";
  }
  // メールアドレス
  if (mailValue == mailAnswer) {
    document.getElementById("mailResult").innerText = "OK";
    document.getElementById("mailResult").style.color = "#0000FF";
  } else {
    document.getElementById("mailResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("mailResult").style.color = "#FF0000";
  }
  // 問い合わせ内容
  if (inquiryValue == inquiryAnswer || inquiryValue == inquiryNewLineAnswer) {
    document.getElementById("inquiryResult").innerText = "OK";
    document.getElementById("inquiryResult").style.color = "#0000FF";
  } else {
    document.getElementById("inquiryResult").innerText =
      'シート「【基本情報】」、または「"」がないことを確認して下さい。';
    document.getElementById("inquiryResult").style.color = "#FF0000";
  }
}
// 終了処理
function endProcess() {
  // セッションデータの削除
  sessionStorage.removeItem("inquiryItemsValue");
  sessionStorage.removeItem("companyValue");
  sessionStorage.removeItem("firstPostalCodeValue");
  sessionStorage.removeItem("latterPostalCodeValue");
  sessionStorage.removeItem("firstStreetAddressValue");
  sessionStorage.removeItem("latterStreetAddressValue");
  sessionStorage.removeItem("departmentValue");
  sessionStorage.removeItem("lastNameValue");
  sessionStorage.removeItem("firstNameValue");
  sessionStorage.removeItem("lastFuriganaValue");
  sessionStorage.removeItem("firstFuriganaValue");
  sessionStorage.removeItem("sexValue");
  sessionStorage.removeItem("yearValue");
  sessionStorage.removeItem("monthValue");
  sessionStorage.removeItem("dayValue");
  sessionStorage.removeItem("ageValue");
  sessionStorage.removeItem("telValue");
  sessionStorage.removeItem("faxValue");
  sessionStorage.removeItem("mailValue");
  sessionStorage.removeItem("inquiryValue");
  // 指定のページへ遷移
  window.location.href = "https://www.google.co.jp/";
}
// セッションデータ取得処理
function getSessionData() {
  // お問い合わせ項目
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
  document.getElementById("inquiryItems").value = sessionStorage.getItem(
    "inquiryItemsValue"
  );
  // 会社名
  document.getElementById("company").value = sessionStorage.getItem(
    "companyValue"
  );
  // 郵便番号_前半
  document.getElementById("firstPostalCode").value = sessionStorage.getItem(
    "firstPostalCodeValue"
  );
  // 郵便番号_後半
  document.getElementById("latterPostalCode").value = sessionStorage.getItem(
    "latterPostalCodeValue"
  );
  // 住所 1
  document.getElementById("firstStreetAddress").value = sessionStorage.getItem(
    "firstStreetAddressValue"
  );
  // 住所 2
  document.getElementById("latterStreetAddress").value = sessionStorage.getItem(
    "latterStreetAddressValue"
  );
  // 部署名
  document.getElementById("department").value = sessionStorage.getItem(
    "departmentValue"
  );
  // 苗字
  document.getElementById("lastName").value = sessionStorage.getItem(
    "lastNameValue"
  );
  // 名前
  document.getElementById("firstName").value = sessionStorage.getItem(
    "firstNameValue"
  );
  // 苗字_ふりがな
  document.getElementById("lastFurigana").value = sessionStorage.getItem(
    "lastFuriganaValue"
  );
  // 名前_ふりがな
  document.getElementById("firstFurigana").value = sessionStorage.getItem(
    "firstFuriganaValue"
  );
  // 性別
  var sexElement = document.getElementById("sex");
  for (let i = 0; i < sexElement.sex.length; i++) {
    if (sexElement.sex[i].value == sessionStorage.getItem("sexValue")) {
      sexElement.sex[i].checked = true;
    } else {
      sexElement.sex[i].disabled = true;
    }
  }
  document.getElementById("sex").value = sessionStorage.getItem("sexValue");
  // 生年月日_年
  document.getElementById("year").value = sessionStorage.getItem("yearValue");
  // 生年月日_月
  document.getElementById("month").value = sessionStorage.getItem("monthValue");
  // 生年月日_日
  document.getElementById("day").value = sessionStorage.getItem("dayValue");
  // 年齢
  document.getElementById("age").value = sessionStorage.getItem("ageValue");
  // 電話番号
  document.getElementById("tel").value = sessionStorage.getItem("telValue");
  // FAX
  document.getElementById("fax").value = sessionStorage.getItem("faxValue");
  // メールアドレス
  document.getElementById("mail").value = sessionStorage.getItem("mailValue");
  // 問い合わせ内容
  document.getElementById("inquiry").value = sessionStorage.getItem(
    "inquiryValue"
  );
}
