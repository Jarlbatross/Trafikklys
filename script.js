function setColor(divId1, divId2, divId3) {
    document.getElementById(divId1).classList.remove('active');
    document.getElementById(divId2).classList.remove('active');
    document.getElementById(divId3).classList.add('active');
  }

  let changeRed = document.getElementById('redLight');
  let changeYellow = document.getElementById('yellowLight');
  let changeGreen = document.getElementById('greenLight');

  function startTrafficLight() {
    setTimeout(setRed, 1000);
  }

  function setGreen() {
    changeGreen.classList.add('active');
    changeYellow.classList.remove('active');
    changeRed.classList.remove('active');
    setTimeout(setYellowReturn, 2000);
  }

  function setYellow() {
    changeGreen.classList.remove('active');
    changeYellow.classList.add('active');
    changeRed.classList.remove('active');
    setTimeout(setGreen, 2000);
  }

  function setRed() {
    changeGreen.classList.remove('active');
    changeYellow.classList.remove('active');
    changeRed.classList.add('active');
    setTimeout(setYellow, 2000);
  }

  function setYellowReturn() {
    changeGreen.classList.remove('active');
    changeYellow.classList.add('active');
    changeRed.classList.remove('active');
    setTimeout(setRed, 2000);
  }