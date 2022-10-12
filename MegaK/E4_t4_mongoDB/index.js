const { MongoClient, ObjectId} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});


(async() => {
    await client.connect();
    console.log('Baza połaczona!');

    const db = client.db('mega'); //wybieramy bazę
    const artist = db.collection('artist'); // pobranie konkretnej kolekcji
    console.log("Count of found:", await artist.countDocuments());
    
    const foundArtist1 = artist.find();
    console.log("Found Artist 1:", await foundArtist1.toArray());

    console.log('-'.repeat(50)); //--------------------------------------------
    for await (const user of  db.collection('artist').find()) {
        console.log(user);
        console.log("id:", String(user._id));
    }

    console.log('.'.repeat(50)); //............................................
    const oneUser = await db.collection('artist').findOne({
        _id: ObjectId('6322260e45563bb9b0769ba5'),
    });
    console.log("oneUser", oneUser);

    console.log('>'.repeat(50)); //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let setName = 'Ania';
    const {modifiedCount} = await db.collection('artist').updateOne({
        _id: ObjectId('63231422b0c3eb542d3aed40'),
    }, {
        $set: {
            firstName: String(setName), // parametr podawany przez urzytkownika należy rzutować
            lastName: 'Gregiel',
            startedAt: new Date(),      // aktualna data  new Date().setFullYear(1984)
        },
    });
    console.log("result", modifiedCount);

    // foundArtist = await artist.find().toArray((err, artistList) => {
    // });

    client.close(); // kończenie połączenia
})();