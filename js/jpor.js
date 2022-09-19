function kvadrat() {
	let a = document.getElementById('l').value * 1
	let s, p
	s = a ** 2
	p = a * 2
	document.getElementById('p').value = s
	document.getElementById('t').value = p
}
function promo() {
	let a = document.getElementById('1').value * 1
	let b = document.getElementById('2').value * 1
	let s, p
	s = 2 * (a + b)
	p = a * b
	document.getElementById('3').value = s
	document.getElementById('4').value = p
}
function kruz() {
	let a = document.getElementById('a').value * 1
	let s, c
	s = 3.14 * a ** 2
	c = 3.14 * (a + a)
	document.getElementById('b').value = s
	document.getElementById('c').value = c
}
function trikytnuk() {
	let a = document.getElementById('d').value * 1
	let b = document.getElementById('e').value * 1
	let c = document.getElementById('f').value * 1
	let s, p
	p = (a + b + c) / 2
	s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
	document.getElementById('g').value = s
}
function kvadrayrov() {
	let a = document.getElementById('h').value * 1
	let b = document.getElementById('i').value * 1
	let c = document.getElementById('g').value * 1
	let x1, x2
	x1 = (-b + Math.sqrt(b ** 2 + 4 * a * c)) / (2 * a)
	x2 = (-b - Math.sqrt(b ** 2 + 4 * a * c)) / (2 * a)
	document.getElementById('k').value = x1
	document.getElementById('m').value = x2
}
function pifagor() {
	let a = document.getElementById('n').value * 1
	let b = document.getElementById('o').value * 1
	let c = document.getElementById('r').value * 1
	if (c ** 2 == (a + b) ** 2) {
		document.getElementById('s').value = 'так'
	} else {
		document.getElementById('s').value = 'ні'
	}
}
function del() {
	let a = document.getElementById('u').value * 1
	let result = []
	for (let i = 1; i < a; i++) {
		if (a % i == 0) {
			let li = document.createElement('li')
			li.append(i)
			result.push(li)
		}
	}
	ul.append(...result)
}
function delik() {
	let a = document.getElementById('q').value * 1
	let b = document.getElementById('x').value * 1
	let result = []
	for (let i = 1; i < a; i++) {
		if (a % i == 0 && b % i == 0) {
			let li = document.createElement('li')
			li.append(i)
			result.push(li)
		}
	}
	ul2.append(...result)
}
function dilnukn() {
	let a = document.getElementById('w').value * 1
	let b = document.getElementById('z').value * 1
	while (a != b) {
		if (a > b) {
			a = a - b
		} else {
			b = b - a
		}
	}
	document.getElementById('a1').value = a
}
function dilnukl() {
	let a = document.getElementById('b1').value * 1
	let b = document.getElementById('c1').value * 1
	while (b) {
		let t = b
		b = a % b
		a = t
	}

	document.getElementById('d1').value = a
}
e1.onblur = function yu() {
	let x = document.getElementById('e1').value.split('')
	let c = 1
	let a = 0
	let b = 0
	let col = {}
	for (let i = 0; i < x.length; i++) {
		a++
		if (x[i] != ' ') {
			b++
		}
		if (x[i] == ' ') {
			c++
		}
	}
	x.forEach(s => (col[s] = x.filter(i => i == s)).length)
	let q = JSON.stringify(col)
	document.getElementById('eror3').innerHTML = q
	document.getElementById('eror').innerHTML = c
	document.getElementById('eror1').innerHTML = a
	document.getElementById('eror2').innerHTML = b
}
function chislorand() {
	let a = document.getElementById('wow')
	let random = Math.random() * 100
	while (a != random) {
		if (random > a) {
			document.getElementById('prop').innerHTML = 'больше'
		} else if (random < a) {
			document.getElementById('prop').innerHTML = 'меньше'
		} else {
			document.getElementById('prop').innerHTML = 'победа'
		}
	}
}
