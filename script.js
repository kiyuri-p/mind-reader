function pageLoad() {
	document.getElementById('firstPage').style.display = "block";
	document.getElementById('secondPage').style.display = "none";
	document.getElementById('thirdPage').style.display = "none";
}

var imagesArray = ["pic/01.png", "pic/02.png", "pic/03.png", 
					"pic/04.png", "pic/05.png", "pic/06.png", 
					"pic/07.png", "pic/08.png", "pic/09.png", 
					"pic/10.png", "pic/11.png", "pic/12.png", 
					"pic/13.png", "pic/14.png", "pic/15.png", 
					"pic/16.png", "pic/17.png", "pic/18.png", 
					"pic/19.png", "pic/20.png", "pic/21.png", 
					"pic/22.png", "pic/23.png", "pic/24.png", "pic/25.png"];

var ansNum = Math.floor(Math.random() * 25);

function startClick() {
	document.getElementById('firstPage').style.display = "none";
	document.getElementById('secondPage').style.display = "block";
	document.getElementById('thirdPage').style.display = "none";

	for (var i = 0; i <= 90; i++) {

		var currentNum = i + 9;

		do {
			var num = Math.floor(Math.random() * 15);
		} while (num == ansNum)

		if (currentNum % 9 == 0) {
			document.getElementById("container").innerHTML +=
			'<div class="pic">' + currentNum + '<br><img src="'+imagesArray[ansNum]+'"></div>';
		} else {
			document.getElementById("container").innerHTML +=
			'<div class="pic">' + currentNum + '<br><img src="'+imagesArray[num]+'"></div>';
		}
	}
}

function readClick() {
	document.getElementById('firstPage').style.display = "none";
	document.getElementById('secondPage').style.display = "none";
	document.getElementById('thirdPage').style.display = "block";

	document.getElementById("answerContainer").innerHTML =
	'<img class="ansPic" src="'+imagesArray[ansNum]+'">';
}