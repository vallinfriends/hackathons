const TIPS = [
  "When given a large assignment, break it into smaller chunks. Plan out how to do one chunk at a time, so you'll be less worried about doing everything at once. You got this!",
  "Sometimes the hardest part is getting started. If you're lacking motivation and you keep on thinking \"I don't want to do this\", start small. Put your name at the top, read the first sentence, underline a keyword. This can help you kick into study mode. Go on, now, we're cheering for you!",
  "Eliminate distractions. Look for a quiet place, put your phone away (like AWAY away, not just on the side of your desk), and don't sit next to a window where you can watch your neighbor's kids chasing their dog.",
  "Prioritize your tasks. Do what's most important first. Or maybe you have something that only takes a few minutes, and you should just get it out of the way. Save things that have the least consequence from not being done for last. Good luck!",
  "Take a break. This may seem counterintuitive, but if you're suffering from burnout, taking a break will help you recharge and get back into the mood. It's better to take a 10 minute break and work for 50 minutes than waste an entire hour.",
  "Find a buddy to hold you accountable. You can have someone check in on you every 20 minutes to make sure you're staying on task. Or maybe you can make a bet with someone about whether you'll finish something by a certain time. Good luck!",
  "Hello there! We're cheering you on :)", 
  "Try the Pomodoro technique! 25 minutes working, 5 minutes resting. There's no one solution that will cure procrastination, but remember Brandon Sanderson's words: journey before destination. So long as you are trying, your current state doesn't have to be your final destination.", 
  "Discomfort is good! It means you're pushing your boundaries--you are IMPROVING. Keep it up!"
];

const IMGS = [
  "pics/cow.png",
  "pics/duck.png",
  "pics/horse.png",
  "pics/penguin.png",
  "pics/pig.png",
];

let currentTip = -1;
let currentAvatar = -1;

// generates a random tip
function generateTip() {
  let index;
  do {
    index = Math.floor(Math.random() * TIPS.length);
  } while (index == currentTip);
  
  document.getElementById("tip").innerHTML = TIPS[index];
  currentTip = index;
}

// generates a random avatar
function generateAvatar() {
  let index;
  do {
    index = Math.floor(Math.random() * IMGS.length);
  } while (index == currentAvatar);
  
  document.getElementById("avatar").setAttribute("src", IMGS[index]);
  currentAvatar = index;
  console.log(index + " " + IMGS[index]);
}

function addTimer() {
  seconds++;
  if(seconds >= 60) {
    seconds = seconds % 60;
    minutes++;
  }
  if(minutes >= 60) {
    minutes = minutes % 60;
    hours++;
  }

  //WIP: add timeDisplay
  document.getElementById('timeDisplay').innerHTML = (hours <= 9 ? "0" + hours : hours) + ":" + (minutes <= 9 ? "0" + minutes : minutes) + ":" + (seconds <= 9 ? "0" + seconds : seconds);
  if(timerOn) {
    setTimeout(addTimer, 995);
  }
}

window.onload = function() {
  var textBox = document.getElementById("listInput");
  textBox.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
      textBox.value += "   • ";
    }
  });
}

function createCookie(name,value,days) {
  var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	else expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function insertListCookies() {
  console.log("working???");
  var input = getCookie("listInputCookie");
  document.getElementById("listInput").val() = input;
}

var hours = 0;
var mins = 0;
var seconds = 0;

$('#start').click(function() {
  startTimer();
});

$('#stop').click(function() {
  clearTimeout(timex);
});

$('#reset').click(function() {
  hours = 0;
  mins = 0;
  seconds = 0;
  $('#hours', '#mins').html('00:');
  $('#seconds').html('00');
});

function startTimer() {
  timex = setTimeout(function() {
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      mins++;
      if (mins > 59) {
        mins = 0;
        hours++;
        if (hours < 10) {
          $("#hours").text('0' + hours + ':')
        } else $("#hours").text(hours + ':');
      }

      if (mins < 10) {
        $("#mins").text('0' + mins + ':');
      } else $("#mins").text(mins + ':');
    }
    if (seconds < 10) {
      $("#seconds").text('0' + seconds);
    } else {
      $("#seconds").text(seconds);
    }


    startTimer();
  }, 1000);
}


insertListCookies();
createCookie("listInputCookie", document.getElementById("listInput").val(), 0);
generateTip();
generateAvatar();
