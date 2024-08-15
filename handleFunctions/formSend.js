function formSend(event) {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;
    const firstname = event.target.elements["firstname"].value;
    const lastname = event.target.elements["lastname"].value;
    const dateOfBirth = event.target.elements["date_of_birth"].value;
    const gender = event.target.elements["gender"].value;
    const email = event.target.elements["email"].value;
    const height = event.target.elements["height"].value;
    const weight = event.target.elements["weight"].value;
    const data = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        dateOfBirth: dateOfBirth,
        gender: gender,
        email: email,
        height: height,
        weight: weight,
    };
    console.log(data);
}