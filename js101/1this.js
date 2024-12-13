function foo() {
	this.name = 'aaa';
}

var name = 'bbb';

var result = new foo();
console.log(result.name);
