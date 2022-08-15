const express = require ('express');
const {IpRestrict} = require('../utils/ip-restrict');

const voteRouter = express.Router();

const votes = {
    yes: 0,
    no: 0,
}

const ipRestrict = new IpRestrict;
//const whoVote = [];

voteRouter
    // .get('/:vote', (req, res) => {
    //     if( whoVote.includes(req.ip) ) {
    //         res.send('Już oddałes głos!');
    //         return;
    //     }


    //     switch (req.params.vote)
    //     {
    //         case  'yes':
    //             votesOnYes++;
    //             break;
    //         case 'no':
    //             votesOnNo++;
    //             break;
    //         case 'maybe':
    //             maybe++;
    //             break;
    //         case 'check':
    //             res.send(`Tak: ${votesOnYes}, nie: ${votesOnNo}, być może: ${maybe}`);
    //             return;
    //             break;
    //         default:
    //             res.send('Sprawdz ścierzkę')
    //             return;
    //     }

    //     whoVote.push(req.ip);
    //     res.send('Dziękujemy za głos!')
    // });


    .get('/check', (req, res) => {
        // const entries = Object.entries(votes);
        // let tresc ='';
        // for (const [name, value] of entries ){
        //     tresc += `<p>${name.at(0).toLocaleUpperCase() + name.slice(1)}: ${value}</p> `
        // }
        // res.send(tresc);

        const info = Object.entries(votes).map( ([name, votes]) => `<p> Votes on ${name}: ${votes}</p> ` ).join('</br>');
        res.send(info);
    })

    .get('/:voteName', async (req, res) => {

        if ( !ipRestrict.check(req.ip)){
            res.status(403).send('Już oddałes głos!');
            return;
        }

        const {voteName} = req.params;

        if (typeof votes[voteName] === 'undefined') {  // tworzy nową wartosć w obiekcie (gdy takiej nie ma)
            votes[voteName] = 0;
        }
        votes[voteName]++;

        res.send('Dziękujemy za głos!')
    })

    .get('/no', (req, res) => {
        votesOnNo++;
        res.send('Dziękujemy za głos!')
    })


module.exports = {
    voteRouter,
}    