function switchLanguage(){
  document.body.classList.toggle("zh-mode");
  localStorage.setItem("siteLanguage", document.body.classList.contains("zh-mode") ? "zh" : "en");
}
if(localStorage.getItem("siteLanguage")==="zh"){
  document.body.classList.add("zh-mode");
}