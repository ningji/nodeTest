var x = new XMLHttpRequest();
x.open('GET', 'https://cors-anywhere.herokuapp.com/https://example.com');
// I put "XMLHttpRequest" here, but you can use anything you want.
x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
x.onload = function() {
    alert(x.responseText);
};
x.send();
