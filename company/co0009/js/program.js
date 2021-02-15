// 初期処理
function initProc() {
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
}
// 問合せ確認画面の入力チェック処理
function chkTheInput() {
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
  // セッションデータ保持処理
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
  // 電話番号
  sessionStorage.setItem("telValue", tel.value);
  // メールアドレス
  sessionStorage.setItem("mailValue", mail.value);
  // 問い合わせ内容
  sessionStorage.setItem("inquiryValue", inquiry.value);
  // 問い合わせ確認画面へ遷移
  window.location.href = "../html/confirmation.html";
}
// 問い合せ確認画面の初期処理
function confirmationProc() {
  // コピーライトとバージョンの設定
  initProc();
  // セッションデータの取得
  getSessionData();
}
// 送信画面の初期処理
function sendProc() {
  // 初期処理とセッションデータの取得
  confirmationProc();
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
  // 電話番号
  const telValue = document.getElementById("tel").value;
  // メールアドレス
  const mailValue = document.getElementById("mail").value;
  // 問い合わせ内容
  const inquiryValue = document.getElementById("inquiry").value;
  // 結果判定
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
  // 電話番号
  if (telValue == telAnswer) {
    document.getElementById("telResult").innerText = "OK";
    document.getElementById("telResult").style.color = "#0000FF";
  } else {
    document.getElementById("telResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("telResult").style.color = "#FF0000";
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
// セッションデータ取得処理
function getSessionData() {
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
  // 電話番号
  document.getElementById("tel").value = sessionStorage.getItem("telValue");
  // メールアドレス
  document.getElementById("mail").value = sessionStorage.getItem("mailValue");
  // 問い合わせ内容
  document.getElementById("inquiry").value = sessionStorage.getItem(
    "inquiryValue"
  );
}
