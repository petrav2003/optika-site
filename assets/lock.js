(function(){
  const OK_KEY = "site_unlocked_v1";
  const here = location.pathname.split("/").pop() || "index.html";
  if (here === "gate.html") return;
  if (sessionStorage.getItem(OK_KEY) !== "1") {
    location.replace("gate.html");
  }
})();
