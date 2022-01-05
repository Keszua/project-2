// aby urzyć: <Wind kierunekWiatru={270}/>

import React, { useEffect, useState, useLayoutEffect } from 'react';

const wspP = 1.0;
const pi_d_180 = 3.14159265/180;

const reCalcPoin = (x, y, joint, rot =0) => {
    let ret = { X:0, Y:0 };
    let Xp = x - joint.x;
    let Yp = y - joint.y;

    let liX = (Xp * Math.cos(rot*pi_d_180))  -  (Yp * Math.sin(rot*pi_d_180)) ;
    liX *= wspP;
    liX = parseFloat(liX.toFixed(1));
    ret.X = liX + joint.x;

    let liY = (Xp * Math.sin(rot*pi_d_180)) + (Yp * Math.cos(rot*pi_d_180));
    liY = liY * wspP;
    liY = parseFloat(liY.toFixed(1));
    ret.Y = liY + joint.y;

    return ret;
}

const reDrawPath = (path, joint = 0, rot = 0) => {
    const pathD1 = path.d.split(' ');
    let retObj = { d: '', j: {x: 0, y:0}};
    let dCalc ='';
    let shift = {x: 0, y: 0};
    
    let staw = {};
    staw.x = 0;
    staw.y = 0;
    
    pathD1.forEach( (el) => {
        if(el.length === 1) { 
            dCalc = dCalc + el + ' ';
        } else {
            const p2 = el.split(',');
            const li = reCalcPoin(parseFloat(p2[0]), parseFloat(p2[1]), staw, rot);
            dCalc = dCalc + li.X + ',' + li.Y + ' ';
        }
    })
    retObj.d = dCalc;

    return retObj;
}

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

let dCalc1 = "";

const Wind = (props) => {
    const [cykl, setCykl] = useState(1);
    const [obrot, setObrot] = useState(0);
    const [kierunek1, setKierunek1] = useState(0);

    const kropki = [];
    let index = 0;
    for(let y = 0; y<6; y++) {
        for(let x = 0; x<6; x++) {
            kropki[index++] = {'x': x*10, 'y': y*10, 'id': index}
        }
    }

    const wskazowka = {
        d: "M 0,-40 l 5,20 -10,0 z",
    }

    // console.log('kropki', kropki)

    const firstDraw = (rot = 0) => {
        const obj1 = reDrawPath(wskazowka, 0, rot);
        dCalc1 = obj1.d;
    }

    useLayoutEffect( (rot = 0) => {
        firstDraw(0);
    }, [] );


    useEffect(() => {
        const interval = setInterval(() => {
            //setCykl( cykl =>  cykl > 1  ? cykl >> 1 : 128 );
            setObrot(obrot => { 
                let kierWiatru = 0;
                if (props.kierunekWiatru > 0) {
                    kierWiatru = props.kierunekWiatru;
                }
                obrot =  obrot + Math.random()*10-5;
                if (obrot > kierWiatru +10) {
                    obrot = kierWiatru +10;
                }
                if (obrot < kierWiatru -10) {
                    obrot = kierWiatru -10;
                }

                return obrot;
            });
            firstDraw(obrot);
        }, 200);
        return () => clearInterval(interval);
    }, [obrot]);

    return (
        <>
        
            <div>
                ...
            </div>

            <svg className="h-6 w-6 inline"  width='200px' height='200px' viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"
                        // style={{ width:'200px', height:'200px', background:'gray' }}
                        style={{ background:'gray' }}
                    >

                <g id="one" style={{ stroke: 'yellow', strokeWidth: 1.5,  strokeOpacity: 0.9,  fillOpacity: 0  }} >
                    <circle cx="0" cy="0" r="1" fill="#333" stroke='red' />
                </g>

                <g style={{ stroke: 'black', strokeWidth: 1,  strokeOpacity: 1,  fillOpacity: 0  }}>
                    <circle cx="0" cy="0" r="25" fill="#333" stroke="black" strokeWidth="8" />
                    <path  fill="white" stroke="yellow" strokeWidth="1" 
                        d="M-25 0 h50 " />
                    <path  fill="white" stroke="yellow" strokeWidth="1" 
                        d="M0 -25 v50 " /> 

                </g>

                <g style={{ stroke: 'blue', fill: "blue", strokeWidth: 1,  strokeOpacity: 1,  fillOpacity: 1  }}>
                    <path d={dCalc1} />

                </g>



                {/* <use href="#one"/> */}
                {/* <g style={{ stroke: 'red', strokeWidth: 1,  strokeOpacity: 1, fill: 'none', fillOpacity: 0  }}>
                    <circle cx={`${calosc.noga1.odn1.c1.x}`} cy={`${calosc.noga1.odn1.c1.y}`} r="3"  />
                </g> */}




            </svg>

            <div>
                X<input type="text" /> Y<input type="text" />
            </div>
        </>
    )

}

export default Wind;