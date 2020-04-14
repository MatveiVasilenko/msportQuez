window.onload = () => {
	const ifNoWhy = document.getElementById('ifNoWhy')
	let howMany = document.getElementById('howMany')
	const sportQuiz1 = document.getElementById('sportQuiz1')
	const sportQuiz2 = document.getElementById('sportQuiz2')

	const yes = document.getElementById('yes')
	const no = document.getElementById('no')

	yes.onchange = (e) => {
		if (e.target.value == 'on') {
			howMany.style.display = "block"
			sportQuiz1.style.display = "block"
			sportQuiz2.style.display = "block"
			ifNoWhy.style.display = "none"
			setTimeout(() => {
				ifNoWhy.style.opacity = "0"
				sportQuiz1.style.opacity = "1"
				sportQuiz2.style.opacity = "1"
				howMany.style.opacity = "1"
			})
		}
	}
	no.onchange = (e) => {
		if (e.target.value == 'on') {
			
			ifNoWhy.style.display = "block"
			howMany.style.display = "none"
			sportQuiz1.style.display = "none"
			sportQuiz2.style.display = "none"
			setTimeout(() => {
				ifNoWhy.style.opacity = "1"
				sportQuiz1.style.opacity = "0"
				sportQuiz2.style.opacity = "0"
				howMany.style.opacity = "0"
			})
		}
	}


}