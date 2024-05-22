function timer() {
	// const endDate = new Date()

	// endDate.setDate(endDate.getDate() + 3)

	const endDate = new Date('May 29, 2024, 23:59:59')

	const daysElement = document.querySelector('#days'),
		hoursElement = document.querySelector('#hours'),
		minutesElement = document.querySelector('#minutes'),
		secondsElement = document.querySelector('#seconds')

	let timerInterval

	function updateTimer() {
		const now = new Date()

		const timeDifference = endDate - now

		if (timeDifference <= 0) {
			daysElement.innerText = '00'
			hoursElement.innerText = '00'
			minutesElement.innerText = '00'
			secondsElement.innerText = '00'
			clearInterval(timerInterval)
			return
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		)
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

		daysElement.innerText = days < 10 ? '0' + days : days
		hoursElement.innerText = hours < 10 ? '0' + hours : hours
		minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes
		secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds
	}

	updateTimer()

	timerInterval = setInterval(updateTimer, 1000)
}

export default timer
