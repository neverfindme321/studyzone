function goStealth() {
  const stealthWin = window.open("about:blank", "_blank");
  const iframe = `
    <iframe src="https://studyzone-bcw9xe9bk-neverfindme321s-projects.vercel.app/" style="position:fixed;top:0;left:0;width:100vw;height:100vh;border:none;"></iframe>
  `;
  stealthWin.document.write(iframe);
}

function openGame(url) {
  // Proxy the URL by opening it inside the Vercel-hosted proxy page
  const proxyUrl = "https://studyzone-bcw9xe9bk-neverfindme321s-projects.vercel.app/proxy.html?url=" + encodeURIComponent(url);
  window.open(proxyUrl, "_blank");
}

function goProxy() {
  const url = document.getElementById("proxyUrl").value;
  if (!url.startsWith("http")) return alert("Please use a full URL, like https://example.com.");
  openGame(url); // Proxy the URL through the openGame function
}
