const { ObjectId } = require("mongodb");
const { TodoRecord } = require("./records/todo.record");
const { TodoRepository } = require("./repositories/todo.repository");
const { db, todos, client } = require("./utils/db");

(async() => {

    try {
        //console.log( await TodoRecord.findAll() );  // pobierz wszystkie
        
        for await (const todo of await TodoRecord.findAllWithCursor()) {
            //console.log(new TodoRecord(todo));
            const record = new TodoRecord(todo);
            record.title = ' Zwykły tekst';
            await record.update();
            console.log(record);
        }

        const todo = await TodoRecord.find('63236fb8534e0a0c7d01ecb0'); // pobierz jeden
        todo.title = "Nowy tekst";                                      // edytuj go
        await todo.update();                                            // zapisz
        //await todo.delete();                                          // usuń
        console.log(todo);

        
    } finally {
        console.log("-".repeat(60));
       await client.close();
    }

})();
