const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;

    Email.send({
        SecureToken : "22a63234-0a41-4228-bf19-f4009ff4d6a1",
        To : email,
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})