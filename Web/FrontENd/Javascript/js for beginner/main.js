const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInut = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit (e) {
	e.preventDefault()
	if(nameInput.value === '' || emailInut.value === ''){
		msg.classList.add('error')
		msg.innerHTML = 'please enter all fields'
		setTimeout(() => msg.remove(), 3000)
	}
	else {
		const li = document.createElement('li')
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInut.value}`))
		userList.appendChild(li)
		nameInput.value = ''
		emailInut.value = ''
	}
	// body... 
}