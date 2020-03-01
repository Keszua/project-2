const getUsers = (e) => {
    e.preventDefault(); //aby nie odświerzało strony
    //const userNumber = document.querySelector('.generator__input').value;
    const userNumber = document.querySelector('[name = "users-number"]').value; //ten sam efekt co wyżej
    const usersGender = document.querySelector('[name = "gender"]').value;
    console.log("gender", usersGender);

    const url = `https://randomuser.me/api/?results=${userNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

    fetch(url)
        .then(response => {
            return response.json(); //na tym etapie następuje zmiana z tekstu na obiekt 
        })
        //.then(json => console.log(json))
        .then(json => showUsers(json.results))
        .catch(err => console.log(err)) //wykona się, gdy roztrzygnięcie odrzucone
}

const showUsers = (users) => {
    const resultArea = document.querySelector('.user-list');
    resultArea.textContent = "";       //czyszczenie, aby nie dodawać, tylko wyśiwtlać noych urzytkowników.
    users.forEach((user) => { 
        console.log(user)
        const item = document.createElement('div'); //przy kazdej iteracji powstaje nowy div
        item.className = 'user';
        item.innerHTML = `
            <div class="user__name">${user.name.title} ${user.name.first.toUpperCase()} ${user.name.last}</div>
            <img class="user__image" src=${user.picture.medium}>
        
        `
        resultArea.appendChild(item);
    });
}

document.querySelector('.generator').addEventListener('submit', getUsers);  //pobieram cały formulaż
//document.querySelector('button').addEventListener('click', getUsers);  //pobieram cały formulaż

