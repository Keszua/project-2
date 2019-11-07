const users = [
    {id: 1, name: "Adam"},
    {id: 2, name: "Marysia"},
    {id: 3, name: "Jadzia"},
]

module.exports = {
    showUsers() {
        const names = users.map(el => el.name);
        console.log('\nNasi użytkownicy to:');
        names.forEach(name => console.log(name));
    },

    showUserObj(id) {
        console.log('\nSzukany urzytkownik to:');
        const findUser = users.find(user => user.id === id);
        console.log(findUser);
    },
    userListlenght: users.length
}

