var button = document.getElementById("toggleButton");
var isOn = false;

button.addEventListener("click", function() {
  isOn = !isOn;
  if (isOn) {
    button.innerHTML = "On";
    button.classList.remove("off");
    button.classList.add("on");
  } else {
    button.innerHTML = "Off";
    button.classList.remove("on");
    button.classList.add("off");
  }
});

