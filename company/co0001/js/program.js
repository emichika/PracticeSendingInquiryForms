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
  // 名前の入力チェック
  const name = document.getElementById("name");
  // 未入力の場合
  if (name.value == "") {
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
  // お名前
  sessionStorage.setItem("nameValue", name.value);
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
  // お名前
  const nameValue = document.getElementById("name").value;
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
  // お名前
  if (nameValue == nameAnswer) {
    document.getElementById("nameResult").innerText = "OK";
    document.getElementById("nameResult").style.color = "#0000FF";
  } else {
    document.getElementById("nameResult").innerText =
      "シート「【基本情報】」の内容と一致しているか確認して下さい。";
    document.getElementById("nameResult").style.color = "#FF0000";
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
  // 会社名
  document.getElementById("company").value = sessionStorage.getItem(
    "companyValue"
  );
  // お名前
  document.getElementById("name").value = sessionStorage.getItem("nameValue");
  // 電話番号
  document.getElementById("tel").value = sessionStorage.getItem("telValue");
  // メールアドレス
  document.getElementById("mail").value = sessionStorage.getItem("mailValue");
  // 問い合わせ内容
  document.getElementById("inquiry").value = sessionStorage.getItem(
    "inquiryValue"
  );
}
