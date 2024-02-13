//grab the form element
//add the event listener to the form


let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    console.log(username);
})