function formSend(event) {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;
    const firstname = event.target.elements["firstname"].value;
    const lastname = event.target.elements["lastname"].value;
    const data = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
    };
    console.log(data);
}