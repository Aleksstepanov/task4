const checkNumber4 = function (age_1, age_2, age_3) {
	if (typeof age_1 !== 'number') {
		if (!isFinite(age_1)) {
			alert(`The value ${age_1} should be number type`)
			return false
		}
	}

	if (typeof age_2 !== 'number') {
		if (!isFinite(age_2)) {
			alert(`The value ${age_2} should be number type`)
			return false
		}
	}
	if (typeof age_3 !== 'number') {
		if (!isFinite(age_3)) {
			alert(`The value ${age_3} should be number type`)
			return false
		}
	}
	return true
}

const checkAge4 = function (age_1, age_2, age_3) {
	if (checkNumber4(age_1, age_2, age_3)) {
		{
			if (Number(age_1) < Number(age_2)) {
				alert(
					"You don't have access cause your age is",
					+age_1 + " It's less then"
				)
				return
			} else if (
				Number(age_1) >= Number(age_2) &&
				Number(age_1) < Number(age_3)
			) {
				alert('Welcome !')
				return
			} else if (Number(age_1) > Number(age_3)) {
				alert('Keep calm and look Culture channel')
				return
			} else {
				alert('Technical work')
				return
			}
		}
	}
}

let age_1 = prompt('age_1', '')
let age_2 = prompt('age_2', '')
let age_3 = prompt('age_3', '')
checkAge4(age_1, age_2, age_3)
