"use strict";
const element = document.getElementById('task')
const element1 = document.querySelectorAll('.cls')
const func = () => {
	let sum = 0
	for (let i = 0; i < element1.length; i++) {
		sum += element1[i].value * 1
	}
	let newElement = document.getElementById('sum')
	newElement.value = sum
}
element.addEventListener('click', func)

const element2 = document.getElementById('task1')
const element3 = document.querySelectorAll('.num')
const func1 = () => {
	let sum = 0
	for (let i = 0; i < element3.length; i++) {
		sum += element3[i].value * 1
	}
	let newElement = document.getElementById('result')
	newElement.innerHTML = sum
}
element2.addEventListener('click', func1)
const element4 = document.getElementById('numer')
const func2 = () => {
	let sum = 0
	let str = element4.value
	let arr = str.split('')
	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i]
	}
	let x = document.getElementById('result1')
	x.innerHTML = sum
}
element4.addEventListener('blur', func2)

const element5 = document.getElementById('numered')
const func3 = () => {
	let sum = 0
	let str1 = element5.value
	let arr1 = str1.split(',')
	let answer = 0
	for (let i = 0; i < arr1.length; i++) {
		sum += +arr1[i]
	}
	answer = sum / arr1.length
	let x1 = document.getElementById('result2')
	x1.innerHTML = answer
}
element5.addEventListener('blur', func3)
const element6 = document.getElementById('fiol')

const func4 = () => {
	element6.Placeholder = ' '
}
const func5 = () => {
	let element6 = document.getElementById('fiol')
	var elems = document.querySelectorAll('.fio')
	if (element6.value !== 0) {
		var str = element6.value
		var arr = str.split(' ')
		for (var i = 0; i < arr.length; i++) {
			elems[i].value = arr[i]
		}
	}
	if (element6.value == 0) {
		element6.placeholder = 'Введите Ваши ФИО'
		for (var i = 0; i < elems.length; i++) {
			elems[i].value = ''
		}
	}
}
element6.addEventListener('focus', func4)
element6.addEventListener('blur', func5)
const element7 = document.getElementById('input')
const uswords = str => {
	let arr = str.split(' ')
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split('')
		arr[i][0] = arr[i][0].toUpperCase()
		arr[i] = arr[i].join('')
	}
	str = arr.join(' ')
	return str
}

function bigLetter() {
	element7.value = uswords(element7.value)
}
element7.addEventListener('blur', bigLetter)

const words = document.getElementById('word')
const counterWord = () => {
	let str = words.value
	let arr = str.split(' ')
	let counter = 0
	for (let i = 0; i < arr.length; i++) {
		counter += 1
	}
	let x2 = document.getElementById('result3')
	x2.innerHTML = counter
}
words.addEventListener('blur', counterWord)
const wordl = document.getElementById('wordlong')
const counteLongWord = () => {
	let max = 0
	let arr2 = []
	let str = wordl.value
	let arr = str.split(' ')
	for (let i = 0; i < arr.length; i++) {
		let number = 0
		arr2 = arr[i].split('')
		for (let j = 0; j < arr2.length; j++) {
			number += 1
		}
		if (number > max) {
			max = number
		}
	}
	let f = document.getElementById('result4')
	f.innerHTML = max
}
wordl.addEventListener('blur', counteLongWord)
const data = document.getElementById('data')
const datareverse = () => {
	let str = data.value
	let arr = str.split('.')
	let arr2 = []
	arr2 = arr.reverse()
	let str1 = arr2.join('-')
	data.value = str1
}
data.addEventListener('blur', datareverse)
const year1 = document.getElementById('year')
const btn = document.getElementById('bt')
const years = () => {
	let year = year1.value * 1
	let date = new Date()
	let Newyear = date.getFullYear()
	const a = document.getElementById('result5')
	a.innerHTML = Newyear - year
}
btn.addEventListener('click', years)
const day1 = document.getElementById('day')
const dayOfWeak = () => {
	let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
	let str = day1.value
	let arr = str.split('.')
	let arr2 = arr.reverse()
	let str1 = arr2.join(',')
	let date = new Date(str1)
	let day = date.getDay()
	const o = document.getElementById('result6')
	o.innerHTML = dayWeak[day]
}
day1.addEventListener('blur', dayOfWeak)
const palindrom = document.getElementById('palindrom')
const but = document.getElementById('but')
const palindromer = () => {
	let str = palindrom.value
	let arr = str.split('')
	let arr2 = arr.reverse()
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr2[i]) {
			alert('это слово не палиндром')
			return
		}
	}
	alert('это слово палиндром')
	return
}
but.addEventListener('click', palindromer)
const number9 = document.getElementById('number3')
const number3 = () => {
	let str = number9.value
	let arr = str.split('')
	for (let i = 0; arr.length; i++) {
		if (arr[i] == 3) {
			alert('ето число содержит 3')
			break
		}
	}
	alert('ето число не содержит 3')
}
number9.addEventListener('click', number3)
const abzav = document.querySelectorAll('.abzav')
const botn = document.getElementById('botn')
const nabzav = () => {
	for (let i = 0; abzav.length; i++) {
		abzav[i].innerHTML = abzav[i].innerHTML + ' ' + (i + 1)
	}
}
botn.addEventListener('click', nabzav)
const numerint = document.querySelectorAll('.numerint')
const numberint3 = document.getElementById('numberint3')
const bitn = document.getElementById('bitn')
const numerbig = () => {
	const arr2 = []
	for (let i = 0; i < numerint.length; i++) {
		arr2[i] = +numerint[i].innerHTML
	}
	numberint3.value = arr2.sort(sortArr)
}

const sortArr = (a, b) => {
	if (a > b) {
		return -1
	}
	if (a < b) {
		return -1
	}
	if (a == b) {
		return 0
	}
}
bitn.addEventListener('click', numerbig)
const a = document.querySelectorAll('.a')
const start = () => {
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML = a[i].innerHTML + '(' + a[i].href + ')'
	}
}
const b = document.querySelectorAll('.b')
const start1 = () => {
	for (var i = 0; i < b.length; i++) {
		if (b[i].href.indexOf('http://') == 0) {
			b[i].innerHTML = b[i].innerHTML + 'стрелка'
		}
	}
}
const p = document.querySelectorAll('.p')
for (var i = 0; i < p.length; i++) {
	elem[i].addEventListener('click', func12)
}

const func12 = () => {
	this.innerHTML = this.innerHTML * this.innerHTML
}
