console.log("------- 1 ----------");

fetch('https://example.com')
    .then(response => response.text())
    .then(data => console.log(data[0]))
    .catch(error => console.log('Error:', error))

console.log("------- 2 ----------");
