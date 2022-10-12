const { ObjectId } = require("mongodb");
const { TodoRecord } = require("./records/todo.record");
const { TodoRepository } = require("./repositories/todo.repository");
const { db, todos, client } = require("./utils/db");

(async() => {

   try {
        // //dodawanie nowego rekordu:
        // const todo = new TodoRecord({
        //     title: 'Zrobić dzien 5, tydzień 4',
        // })
        // await TodoRepository.insert(todo);
        // console.log(todo);

        // zamiana istniejącego
        // const todoU = await TodoRepository.find('632370f033ef26c60f89a721');
        // todoU.title = 'Zrobić dzien 8, tydzień 6';
        // todoU.coKolwiek =  "Jakiś tekst";
        // await TodoRepository.update(todoU);

        const znalezione = await TodoRepository.findAll();
        console.log(znalezione);

        //console.log(await TodoRepository.find( ObjectId('632370f033ef26c60f89a721')));
        //console.log(await TodoRepository.find('632370f033ef26c60f89a721'));

    } finally {
        client.close();
    }

})();
