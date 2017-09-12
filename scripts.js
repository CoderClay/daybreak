var daybreakWelcome = new Audio("daybreak-welcome.m4a");
var isDaybreakWelcomePlaying = false;

var happyBirthday = new Audio("happy-birthday.m4a");
var isHappyBirthdayPlaying = false;

var rainSound = new Audio("rain_1.mp3");
var isRainPlaying = false;

var noSong = new Audio("no-song.m4a");
var isNoSongPlaying = false;

var freightTrain = new Audio("freight-train.m4a")
var isFreightTrainPlaying = false;

var kathySong = new Audio("be-a-gentleman.m4a")
var isKathySongPlaying = false;

function daybreakControl() {
console.log(isDaybreakWelcomePlaying + " At The Start");
  if (isDaybreakWelcomePlaying == true) {
      daybreakWelcome.pause();
      daybreakWelcome.currentTime = 0;
      console.log(isDaybreakWelcomePlaying + " Inside Pause Statement");
      return isDaybreakWelcomePlaying = false;
  } else if (isDaybreakWelcomePlaying == false) {
          daybreakWelcome.play();
          console.log(isDaybreakWelcomePlaying + " Inside Play Statement")
          return isDaybreakWelcomePlaying = true;
  }
console.log(isDaybreakWelcomePlaying + " At The End");
}



function noControl() {
console.log(isNoSongPlaying + " At The Start");
  if (isNoSongPlaying == true) {
      noSong.pause();
      noSong.currentTime = 0;
      console.log(isNoSongPlaying + " Inside Pause Statement");
      return isNoSongPlaying = false;
  } else if (isNoSongPlaying == false) {
          noSong.play();
          console.log(isNoSongPlaying + " Inside Play Statement")
          return isNoSongPlaying = true;
  }
console.log(isNoSongPlaying + " At The End");
}



function kathyControl() {
console.log(isKathySongPlaying + " At The Start");
  if (isKathySongPlaying == true) {
      kathySong.pause();
      kathySong.currentTime = 0;
      console.log(isKathySongPlaying + " Inside Pause Statement");
      return isKathySongPlaying = false;
  } else if (isKathySongPlaying == false) {
          kathySong.play();
          console.log(isKathySongPlaying + " Inside Play Statement")
          return isKathySongPlaying = true;
  }
console.log(isKathySongPlaying + " At The End");
}



function birthdayControl() {
console.log(isHappyBirthdayPlaying + " At The Start");
  if (isHappyBirthdayPlaying == true) {
      happyBirthday.pause();
      happyBirthday.currentTime = 0;
      console.log(isHappyBirthdayPlaying + " Inside Pause Statement");
      return isHappyBirthdayPlaying = false;
  } else if (isHappyBirthdayPlaying == false) {
          happyBirthday.play();
          console.log(isHappyBirthdayPlaying + " Inside Play Statement")
          return isHappyBirthdayPlaying = true;
  }
console.log(isHappyBirthdayPlaying + " At The End");
}

function rainControl() {
console.log(isRainPlaying + " At The Start");
  if (isRainPlaying == true) {
      rainSound.pause();
      console.log(isRainPlaying + " Inside Pause Statement");
      return isRainPlaying = false;
  } else if (isRainPlaying == false) {
          rainSound.play();
          console.log(isRainPlaying + " Inside Play Statement")
          return isRainPlaying = true;
  }
console.log(isRainPlaying + " At The End");
}

function freightTrainControl() {
console.log(isFreightTrainPlaying + " At The Start");
  if (isFreightTrainPlaying == true) {
      freightTrain.pause();
      freightTrain.currentTime = 0;
      console.log(isFreightTrainPlaying + " Inside Pause Statement");
      return isFreightTrainPlaying = false;
  } else if (isFreightTrainPlaying == false) {
          freightTrain.play();
          console.log(isFreightTrainPlaying + " Inside Play Statement")
          return isFreightTrainPlaying = true;
  }
console.log(isFreightTrainPlaying + " At The End");
}
