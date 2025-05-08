function goStealth() {
  const stealthWin = window.open("about:blank", "_blank");
  const iframe = `
    <iframe src="https://studyzone-bcw9xe9bk-neverfindme321s-projects.vercel.app/" style="position:fixed;top:0;left:0;width:100vw;height:100vh;border:none;"></iframe>
  `;
  stealthWin.document.write(iframe);
}

function openGame(url) {
  window.open(url, "_blank");
}

function goProxy() {
  const url = document.getElementById("proxyUrl").value;
  if (!url.startsWith("http")) return alert("Use full URL like https://example.com");
  window.open(url, "_blank"); // Opens the proxy URL directly
}
