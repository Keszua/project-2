const { TodoRecord } = require("./records/todo.record");
const { TodoRepository } = require("./repositories/todo.repository");
const { pool } = require("./utils/db");

(async() => {

    // //dodawanie nowego rekordu:
    // const firtsItem = new TodoRecord({
    //     title: 'Zrobić dzien 5, tydzień 4',
    // })
    // const newId = await firtsItem.insert();
    // console.log('New todo item added witch ID', newId);

    // const foundTodo = await TodoRecord.find('55c18844-e680-4ea5-b95c-1b17ddb82dc1');
    // foundTodo.title = "Zmienić treść na inną";
    // await foundTodo.update()
    // //await foundTodo.delete();
    // //console.log('foundTodo', foundTodo);

    const znalezione = await TodoRepository.findAll();
    console.log(znalezione);
    
    //pobierz jeden i usuń
    //const znalezione = await TodoRepository.find('przekazanypa3rametr');
    //console.log(znalezione);
    //await TodoRepository.delete(znalezione);

    //pobierz jeden i zaktualizuj
    //const znalezione = await TodoRepository.find('przekazanypa3rametr');
    //console.log(znalezione);
    //znalezione.title = 'Nowa treść';
    //await TodoRepository.update(znalezione);



    await pool.end();
})();


//zadanie:
// 1. Stwórz aplikację Expressową, która ma EP zgodne z REST!
// 2. To co zrobiliśmy na części wspólnej przepisz i dodaj do aplikacji Expressowej
// 3. Stwórz stronę główną - z listą rzeczy do zrobienia.
// 4. Każdy element ma przycisk do usunięcia.
// 5. Na dole znajduje sie formularz, który dodaje nową rzecz do zrobienia.
// * kolejnośc powinna być taka, w jakiej sie dodało
// ** Pamietaj o minimalnej walidacji - przy dodawaniu długosci, a przy usuwaniu czy istneije ID.
// zerknij an Etap 3 - ty 5 dzień 5