const sum = (...args) => {
    let suma = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof i !== 'number') {
            console.log('All elements must be numbers!');
            return;
        }
        suma += args[i];
    };
    return suma;
}


console.log(sum(1));
console.log(sum(2,3,4));

// Zadanie 1
const obj = {
    id:1,
    name: 'Tester Testowy',
    pwdHash: 'abcdef128732h3jkh2jk4h1jlkhg5l315gl1jkhg',
    isAdmin: true,
    hasAvatar: true,
};

function filter(obj) {
    const {id, name, hasAvatar} = obj;
    const retElement = {id, name, hasAvatar}
    return retElement;
}

console.log(filter(obj));

// Zadanie 2
const name = 'Sub Test';
const age = 35;
const role = 'Admin';

const info = name + ' has a role of ' + role + ' and is born in year ' + (new Date().getFullYear() -age);
console.log(info);

const info2 = `${name} has a role of ${role} and is born in year ${(new Date().getFullYear() -age)}`;
console.log(info2);
