var f1 = (x) => x+1

var y = f1(1)
//console.log(y)

var f = (m) => {
	if (m === 0)
		return 1
	else if (m === 1)
		return 1
	else
		return f(m-1) + f(m-2)
}

y = f(5)
console.log(y)
