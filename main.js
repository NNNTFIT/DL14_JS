document.addEventListener("keydown", function (n) {
  document.getElementById("firstText").style.display = "none";
  document.getElementById("display").style.display = "flex";
  document.getElementById("key").innerHTML = n.key;
  document.getElementById("keyCode").innerHTML = n.keyCode;
  document.getElementById("code").innerHTML = n.code;
});
