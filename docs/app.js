const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0 
let currentTime = timeLeft.textContent

alert('click the frog')

function randomSquare() 
	{
		square.forEach(className => {
			className.classList.remove('mole')
		})
		let randomPosition = square[Math.floor(Math.random() * 9)]
		randomPosition.classList.add('mole')
	
// asingar el id de randomPosition a hitPosition para que lo usemos luego
	hitPosition = randomPosition.id
	}


square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if(id.id === hitPosition)
		{
			result = result + 1
			score.textContent = result
		}
	})
})


function moveMole() {
	let timerId = null
	timerId = setInterval(randomSquare, 400)
}

moveMole()

//contador
function countDown () {
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime === 0) {
		clearInterval(timerId)
		alert('SE ACABÓ! tu puntuación es ' + result)
		window.location.reload()
	}
}

let timerId = setInterval(countDown, 1000)