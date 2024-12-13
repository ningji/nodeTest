function Foo(name) {
	this.name = name;
}
Foo.prototype.myName = function() {
	console.log(this.name);
	return this.name;
};

const name = 'test';

var a = new Foo( "a" );
var b = new Foo( "b" );

a.myName(); // "a"
b.myName(); // "b"
