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
        // d: "M 0,-40 l 5,20 -10,0 z",
        d: "M 0.061271,-44.9297 -8,-27 -1,-28 -1.1,17 -8,21 -8.375,40 8.625,40.3125 8,21 1.1,17 1,-28 8,-27 Z",

    }

    // console.log('kropki', kropki)

    const firstDraw = (rot = 0) => {
        const obj1 = reDrawPath(wskazowka, 0, rot);
        dCalc1 = obj1.d;
    }

    useLayoutEffect( (rot = 0) => {
        firstDraw(0);
    }, [] );


    const nerwowosc = 20;

    useEffect(() => {
        const interval = setInterval(() => {
            //setCykl( cykl =>  cykl > 1  ? cykl >> 1 : 128 );
            setObrot(obrot => { 
                let kierWiatru = 0;
                if (props.kierunekWiatru > 0) {
                    kierWiatru = props.kierunekWiatru;
                }
                obrot =  obrot + Math.random()*nerwowosc-(nerwowosc/2);
                if (obrot > kierWiatru +nerwowosc) {
                    obrot = kierWiatru +nerwowosc;
                }
                if (obrot < kierWiatru -nerwowosc) {
                    obrot = kierWiatru -nerwowosc;
                }

                return obrot;
            });
            firstDraw(obrot);
        }, 500);
        return () => clearInterval(interval);
    }, [obrot]);

    return (
        <>
        
            <div>
                ...
            </div>

            <svg className="h-6 w-6 inline"  width='800px' height='800px' viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"
                        // style={{ width:'200px', height:'200px', background:'gray' }}
                        style={{ background:'gray' }}
                    >

            <defs>
                <linearGradient
                    x1="-0.065640889"
                    y1="38.36068"
                    x2="-0.17677668"
                    y2="-47.465469"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                    id="linearGradient13798">
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.091" />
                    <stop stopColor='#019708' stopOpacity='1' offset="0.12976225" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.26998803" />
                    <stop stopColor='#85b304' stopOpacity='1' offset="0.28919953" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.3236315" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.37768903" />
                    <stop stopColor='#5c9705' stopOpacity='1' offset="0.41801551" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.43999705" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.53101921" />
                    <stop stopColor='#019808' stopOpacity='1' offset="0.56394428" />
                    <stop stopColor='#045c0a' stopOpacity='1' offset="0.60105568" />
                    <stop stopColor='#03680a' stopOpacity='1' offset="0.84048766" />
                    <stop stopColor='#67ff00' stopOpacity='1' offset="0.88086671" />
                    <stop stopColor='#04620a' stopOpacity='1' offset="0.93170607" />
                    
                    <stop stopColor='#086a08' stopOpacity='1' offset="0.98" />
                    <stop stopColor='#03680a' stopOpacity='1' offset="1" />

                    {/* 
                    <stop
                        style="stop-color:#086a08;stop-opacity:1"
                        offset="1"
                        id="stop3746" /> */}
                </linearGradient>
                {/* <linearGradient
                    xlink:href="#linearGradient3748-7"
                    id="linearGradient13798"
                    gradientUnits="userSpaceOnUse"
                    x1="-0.065640889"
                    y1="38.36068"
                    x2="-0.17677668"
                    y2="-47.465469"
                    spreadMethod="pad" 
                /> */}
            </defs>

                {/* <g id="one" style={{ stroke: 'yellow', strokeWidth: 1.5,  strokeOpacity: 0.9,  fillOpacity: 0  }} >
                    <circle cx="0" cy="0" r="1" fill="#333" stroke='red' />
                </g> */}



            <circle fill='none' stroke='#d80000' strokeWidth='0.3' strokeOpacity='1'
                cx="0.0" cy="0.0" r="36.673862" />
            <circle fill='none' stroke='#d80000' strokeWidth='0.25' strokeOpacity='1'
                cx="0.0" cy="0.0" r="32.542484" />
            <circle fill='none' stroke='#d80000' strokeWidth='0.6' strokeOpacity='1'
                cx="0.0" cy="0.0" r="21.79" />
            <circle fill='none' stroke='#d80000' strokeWidth='0.15' strokeOpacity='1'
                cx="0.0" cy="0.0" r="16.7" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -24.390576,-10.07257 4.15882,2.3305455 0.401818,-1.024636 z" />
            <circle fill='none' stroke='#d80000' strokeWidth='0.6' strokeOpacity='1'
                cx="0.0" cy="0.0" r="15.0" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 24.494103,-10.015744 -4.15882,2.3305455 -0.401818,-1.024636 z" />
            <circle fill='#e00000' stroke='#d80000' strokeWidth='0.26' strokeOpacity='1'
                cx="0.0" cy="0.0" r="2.35" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 24.607755,10.300137 -4.15882,-2.3305495 -0.401818,1.024636 z" />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 8.9953064,-0.40847115 21.296416,-21.205014 6.4375964,-5.9454595 c 1.862573,1.931218 1.956859,2.035325 2.55771,5.53698835 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -24.333749,10.12966 4.15882,-2.3305495 0.401818,1.024636 z"  />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 9.0756704,0.46455275 21.37678,21.261102 6.5179604,6.0015405 c 1.862573,-1.931218 1.956859,-2.035325 2.55771,-5.53698775 z"    />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -10.091968,-24.456412 2.3305514,4.15882 -1.024636,0.401818 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.25' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -4.1827846,-7.9951205 -0.02101305,-42.49958 -0.29332992,-9.0262515 Z"  />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.25' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 4.2194634,-8.1473735 0.01707693,-42.499005 -0.29332992,-9.0262515 Z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 10.195502,-24.399586 -2.3305456,4.15882 1.024636,0.401818 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.25' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 4.2376794,7.6060885 0.07590691,42.110555 0.34822386,8.6372195 Z" />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.25' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -4.1645676,7.7583415 0.03781693,42.10998 0.34822386,8.6372195 Z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 10.195502,24.598744 -2.3305456,-4.15882 1.024636,-0.401818 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -10.205619,24.598744 2.3305514,-4.15882 -1.0246364,-0.401818 z" />
            <g
                transform="matrix(0,-0.99985401,-1.0107996,0,36.918318,36.61488)">
                <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.25px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 41.025614,28.779465 36.863235,-5.3563446 37.135591,27.759351 Z" />
                <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.25px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 32.62214,28.628839 36.825139,-5.3557759 37.135591,27.759351 Z" />
            </g>
            <g
                transform="matrix(0,0.99985401,1.0107996,0,-36.863435,-37.003906)">
                <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.25px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 41.025614,28.779465 36.863235,-5.3563446 37.135591,27.759351 Z" />
                <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.25px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 32.62214,28.628839 36.825139,-5.3557759 37.135591,27.759351 Z"   />
            </g>


            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 0.32883386,-9.0140475 21.269097,-21.231568 6.4375964,-5.9454595 c -1.930493,-2.069777 -2.410631,-2.48704 -6.10876254,-3.068588 z" />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 8.9953064,-0.40847115 21.296416,-21.205014 6.4375964,-5.9454595 c 1.862573,1.931218 1.956859,2.035325 2.55771,5.53698835 z" />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 0.34822386,8.6372195 21.349461,21.287656 6.5179604,6.0015405 c -2.280281,1.604548 -2.471605,2.054131 -6.16973654,2.635679 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 8.9953064,-0.40847115 21.37678,21.261102 6.5179604,6.0015405 c 1.862573,-1.931218 1.876495,-2.908349 2.477346,-6.41001165 z"  />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -0.30775092,-9.0140475 -21.248024,-21.231568 -6.4165126,-5.9454595 c 1.930493,-2.069777 2.410631,-2.48704 6.10876168,-3.068588 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -8.8042886,0.12626085 -21.275343,-21.205014 -6.4165126,-5.9454595 c -1.862573,1.931218 -1.786925,2.570057 -2.387776,6.07172035 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 0.34822386,8.6372195 -21.089994,21.13449 -6.2584826,5.8483745 c 1.930493,2.069777 2.908576,2.207297 6.60670646,2.788845 z"  />
            <path fill='#ffffff' fillOpacity='1' stroke='#00008d' strokeWidth='0.2' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -8.8042886,0.12626085 -21.117313,21.107936 -6.2584826,5.8483745 c -1.862573,-1.931218 -1.944955,-2.220451 -2.545806,-5.72211365 z"  />
            <circle fill='none' stroke='#d80000' strokeWidth='1.0' strokeOpacity='1'
                cx="0.0"        cy="0.0"        r="8.6" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="m -4.5147556,4.5953995 2.378642,-1.847669 -0.497591,-0.485717 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -4.5348466,-4.5086255 2.378642,1.847669 -0.497591,0.485717 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 4.5541614,4.5953995 -2.378642,-1.847669 0.497591,-0.485717 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 4.5742524,-4.5086255 -2.378642,1.847669 0.497591,0.485717 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 0.00987394,-6.3646945 0.37203892,2.98888 -0.69529378,-0.0092 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 0.00987394,6.4787805 0.37203892,-2.98888 -0.69529378,0.0092 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 6.4560034,0.03265085 -2.98888,0.37203892 0.0092,-0.69529392 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.6' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -6.3874716,0.03265085 2.98888,0.37203892 -0.0092,-0.69529392 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 4.4561854,2.0939835 1.952008,0.122691 -0.452752,1.184067 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 4.4662304,-1.8630785 1.952008,-0.122691 -0.452752,-1.184067 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -4.4007206,1.9633925 -1.952008,0.122691 0.452752,1.184067 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -4.4107656,-1.9936695 -1.952008,-0.122691 0.452752,-1.184067 z"  />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -1.9055936,-4.3983865 -0.122691,-1.952008 -1.184067,0.452752 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 2.0514683,-4.4084315 0.1226911,-1.952008 1.184067,0.452752 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -1.9558206,4.4786095 -0.122691,1.952008 -1.184067,-0.452752 z" />
            <path fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.4' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 2.0012413,4.4886545 0.1226911,1.952008 1.184067,-0.452752 z" />
            <circle fill='none' stroke='#d80000' strokeWidth='0.7' strokeOpacity='1'
                cx="0.0" cy="0.0" r="6.8" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -28.15505,-16.273526 -4.68812,-2.670808" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -31.513693,-8.3570955 -5.203564,-1.426396" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -36.025965,-6.2803805 -1.422749,-0.241689" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -36.441811,-3.0794735 -1.434876,-0.154137" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -34.380133,-12.507505 -1.35923,-0.484891" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -33.193273,-15.40199 -1.281859,-0.662923" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -28.152925,-23.545561 -1.099227,-0.935055" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -30.146685,-21.007126 -1.154408,-0.866008" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M -23.554992,-28.056094 -24.4753,-29.167697" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -21.055231,-29.937018 -0.762797,-1.225059" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -25.902065,-25.96028 -1.037177,-1.003441" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -8.3646366,-31.453705 -1.4731336,-5.190527" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -16.30806,-28.15939 -2.712856,-4.663914" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -12.529698,-34.54945 -0.489214,-1.357681" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -15.521315,-33.337443 -0.571411,-1.325186" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -6.2981966,-36.178666 -0.246215,-1.421972" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -3.1942316,-36.568642 -0.05315,-1.442153" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 28.19631,-16.229332 4.68812,-2.670808" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 31.554953,-8.3129015 5.203564,-1.426396"/>
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 36.067225,-6.2361865 1.422749,-0.241689" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 36.483071,-3.0352795 1.434876,-0.154137"  />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 34.421393,-12.463311 1.35923,-0.484891" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 33.234533,-15.357796 1.281859,-0.662923"  />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 28.194185,-23.501367 1.099227,-0.935055" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 30.187945,-20.962932 1.154408,-0.866008"  />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 23.596252,-28.0119 0.920308,-1.111603"  />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 21.096491,-29.892824 0.762797,-1.225059" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 25.943325,-25.916086 1.037177,-1.003441" /> 

            <g
                transform="matrix(-0.71342858,0.70072795,0.70072795,0.71342858,0.21345386,-52.0972)">
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 8.65,20.49 3.96,17.82"  />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 5.29,28.41 0.08,26.98"  />
            </g>

            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 12.570958,-34.505256 0.489214,-1.357681" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 15.562575,-33.293248 0.571411,-1.325186" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 6.3394674,-36.134472 0.246215,-1.421972"/>
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 3.2355024,-36.524448 0.05315,-1.442153" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -28.157069,16.370767 -4.68812,2.670808" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -31.515712,8.4543295 -5.203564,1.4263989" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -36.027984,6.3776145 -1.422749,0.241689" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -36.44383,3.1767075 -1.434876,0.154137" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -34.382152,12.604746 -1.359231,0.484891" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -33.195292,15.499231 -1.281859,0.662923" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -28.154944,23.642802 -1.099227,0.935055" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -30.148704,21.104367 -1.154409,0.866008" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -23.557011,28.153335 -0.920308,1.111603" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -21.05725,30.034259 -0.762797,1.225059" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -25.904084,26.057521 -1.037178,1.003441" />

            <g
                transform="matrix(0.71342858,-0.70072795,-0.70072795,-0.71342858,-0.17420298,52.238635)">
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 8.6517118,20.499869 3.9635921,17.829061" />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 5.2930691,28.416303 0.08950494,26.989907" />
            </g>

            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -12.531717,34.646691 -0.489214,1.357682" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -15.523334,33.434684 -0.571411,1.325186" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -6.3002156,36.275907 -0.246215,1.421972" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m -3.1962506,36.665883 -0.05315,1.442153" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 28.280659,16.320539 4.68812,2.670808" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 31.464546,8.4543285 36.66811,9.8807274" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 36.241983,6.3776135 1.422749,0.241689" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 36.657829,3.1767065 1.434876,0.154137" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 34.596151,12.604745 1.35923,0.484891" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 33.409291,15.49923 1.281858,0.662923" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 28.178079,23.612665 1.099227,0.935055" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 30.131657,21.084275 1.154408,0.866008" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 23.77101,28.153334 0.920308,1.111603" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 21.271249,30.034258 0.762797,1.225059" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 26.017628,26.027384 1.037177,1.003441" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 8.5806624,31.550946 1.4731286,5.190528" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 16.524076,28.256631 2.712855,4.663915" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 12.745716,34.64669 0.489214,1.357682" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 15.737333,33.434683 0.571411,1.325186" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 6.5142254,36.275906 0.246215,1.421972" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="m 3.4102604,36.665882 0.05315,1.442153" />

            <g transform="translate(-36.806762,-36.773395)">
                <g>
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105"/>
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604" />
                </g>
                <g  transform="rotate(18.611329,38.567191,37.801444)">
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604" />
                </g>
                <g transform="rotate(45.119432,36.578656,36.762334)">
                    <g>
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 9.7759955,34.357242 8.341119,34.203105" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.120568,32.166335 8.7068676,31.87637" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.596235,29.896997 9.1972378,29.542826" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 11.320134,27.504211 9.9508076,27.048604" />
                    </g>
                    <g transform="rotate(18.611329,38.567191,37.801444)">
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 9.7759955,34.357242 8.341119,34.203105" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.120568,32.166335 8.7068676,31.87637" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.596235,29.896997 9.1972378,29.542826" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 11.320134,27.504211 9.9508076,27.048604" />
                    </g>
                </g>
            </g>

            <g transform="matrix(-1,0,0,1,36.842115,-36.861455)">
                <g>
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604"  />
                </g>
                <g transform="rotate(18.611329,38.567191,37.801444)">
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105"  />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637"  />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604"  />
                </g>
                <g  transform="rotate(45.119432,36.578656,36.762334)" >
                    <g >
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 9.7759955,34.357242 8.341119,34.203105" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.120568,32.166335 8.7068676,31.87637" />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.596235,29.896997 9.1972378,29.542826"  />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 11.320134,27.504211 9.9508076,27.048604"  />
                    </g>
                    <g transform="rotate(18.611329,38.567191,37.801444)">
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 9.7759955,34.357242 8.341119,34.203105"  />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.120568,32.166335 8.7068676,31.87637"  />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 10.596235,29.896997 9.1972378,29.542826"  />
                        <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                            d="M 11.320134,27.504211 9.9508076,27.048604"  />
                    </g>
                </g>
            </g>

            <g  transform="matrix(1,0,0,-1,-36.774731,36.796568)">
            <g>
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 9.7759955,34.357242 8.341119,34.203105" />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 10.120568,32.166335 8.7068676,31.87637"  />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 10.596235,29.896997 9.1972378,29.542826"  />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 11.320134,27.504211 9.9508076,27.048604"  />
            </g>
            <g transform="rotate(18.611329,38.567191,37.801444)">
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 9.7759955,34.357242 8.341119,34.203105"  />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 10.120568,32.166335 8.7068676,31.87637"  />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 10.596235,29.896997 9.1972378,29.542826" />
                <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                    d="M 11.320134,27.504211 9.9508076,27.048604"  />
            </g>
            <g transform="rotate(45.119432,36.578656,36.762334)">
                <g >
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604" />
                </g>
                <g transform="rotate(18.611329,38.567191,37.801444)">
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 9.7759955,34.357242 8.341119,34.203105" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.120568,32.166335 8.7068676,31.87637" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 10.596235,29.896997 9.1972378,29.542826" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                        d="M 11.320134,27.504211 9.9508076,27.048604" />
                </g>
            </g>
        </g>

    <g transform="rotate(180,18.4371,18.442296)">
        <g>
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 9.7759955,34.357242 8.341119,34.203105" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 10.120568,32.166335 8.7068676,31.87637" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 10.596235,29.896997 9.1972378,29.542826" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 11.320134,27.504211 9.9508076,27.048604" />
        </g>
        <g transform="rotate(18.611329,38.567191,37.801444)">
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 9.7759955,34.357242 8.341119,34.203105"  />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 10.120568,32.166335 8.7068676,31.87637" />
            <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                d="M 10.596235,29.896997 9.1972378,29.542826"
           id="path85383" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
           d="M 11.320134,27.504211 9.9508076,27.048604"
           id="path85385" />
      </g>
      <g
         id="g85409"
         transform="rotate(45.119432,36.578656,36.762334)">
        <g
           id="g85397">
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 9.7759955,34.357242 8.341119,34.203105"
             id="path85389" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 10.120568,32.166335 8.7068676,31.87637"
             id="path85391" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 10.596235,29.896997 9.1972378,29.542826"
             id="path85393" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 11.320134,27.504211 9.9508076,27.048604"
             id="path85395" />
        </g>
        <g
           id="g85407"
           transform="rotate(18.611329,38.567191,37.801444)">
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 9.7759955,34.357242 8.341119,34.203105"
             id="path85399" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 10.120568,32.166335 8.7068676,31.87637"
             id="path85401" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 10.596235,29.896997 9.1972378,29.542826"
             id="path85403" />
                    <path fill='#ff0000' fillOpacity='1' stroke='#db0000' strokeWidth='0.5' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
             d="M 11.320134,27.504211 9.9508076,27.048604"
             id="path85405" />
        </g>
      </g>
    </g>


    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="-32.005089"
       cy="-13.220322"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="-13.139059"
       cy="-31.859148"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="13.275138"
       cy="-31.939512"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="31.999868"
       cy="-13.134412"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="31.999868"
       cy="13.305233"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="13.275132"
       cy="32.110264"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="-13.244876"
       cy="32.07008"
       r="0.53531313" />
    <circle fill='#2315d8' stroke='#d80000' strokeWidth='0.02' strokeOpacity='1'
       cx="-31.969513"
       cy="13.345408"
       r="0.53531313" />



    <text fontStyle='normal' fontWeight='normal' fontSize='9.7px' lineHeight='1.25' fontFamily='sans-serif' fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.25'>
        <tspan
            x="-50.0"
            y="3.6"
            fill='#2315d8' fillOpacity='1' strokeWidth='0.25' >W</tspan>
        <tspan
            x="-3.4185152"
            y="-42.640167"
            fill='#e00000' fillOpacity='1' strokeWidth='0.25' >N</tspan>
        <tspan
            x="42.152954"
            y="3.3407178"
            fill='#2315d8' fillOpacity='1' strokeWidth='0.25' >E</tspan>
        <tspan
            x="-3.31635"
            y="49.949017"
            fill='#2315d8' fillOpacity='1' strokeWidth='0.25'>S</tspan>
       

       </text>

    <text fontStyle='normal' fontWeight='normal' fontSize='3.5px' lineHeight='1.25' fontFamily='sans-serif' fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.07'
       transform="rotate(-41.182954)">
           <tspan
       x="-4.85"
       y="-33.43"
       fill='#2315d8' fillOpacity='1' strokeWidth='0.07'>NW</tspan></text>
    <text fontStyle='normal' fontWeight='normal' fontSize='3.5px' lineHeight='1.25' fontFamily='sans-serif' fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.07'
       x="-1.1416938"
       y="-33.463146"
       id="text156244"
       transform="rotate(43.891955)"><tspan
       id="tspan156242"
       x="-1.1416938"
       y="-33.463146"
       fill='#2315d8' fillOpacity='1' strokeWidth='0.07'>NE</tspan></text>
    <text fontStyle='normal' fontWeight='normal' fontSize='3.5px' lineHeight='1.25' fontFamily='sans-serif' fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.07'
       x="-3.1685162"
       y="-33.523029"
       id="text159350"
       transform="rotate(136.60862)"><tspan
       id="tspan159348"
       x="-3.1685162"
       y="-33.523029"
       fill='#2315d8' fillOpacity='1' strokeWidth='0.07'>SE</tspan></text>
    <text fontStyle='normal' fontWeight='normal' fontSize='3.5px' lineHeight='1.25' fontFamily='sans-serif' fill='#2315d8' fillOpacity='1' stroke='none' strokeWidth='0.07'
       x="-2.2935371"
       y="-33.488121"
       id="text162630"
       transform="rotate(-134.82325)"><tspan
       id="tspan162628"
       x="-2.2935371"
       y="-33.488121"
       fill='#2315d8' fillOpacity='1' strokeWidth='0.07'>SW</tspan></text>



                {/* <g style={{ stroke: 'black', strokeWidth: 1,  strokeOpacity: 1,  fillOpacity: 0  }}>
                    <circle cx="0" cy="0" r="25" fill="#333" stroke="black" strokeWidth="8" />
                    <path  fill="white" stroke="yellow" strokeWidth="1" 
                        d="M-25 0 h50 " />
                    <path  fill="white" stroke="yellow" strokeWidth="1" 
                        d="M0 -25 v50 " /> 

                </g> */}

                {/* Strzałka */}
                <g style={{ stroke: '#007000', fill: "url(#linearGradient13798)", strokeWidth: 0.5,  strokeOpacity: 1,  fillOpacity: 1  }}>
                    <path d={dCalc1} />

                </g>







            </svg>

        </>
    )

}

export default Wind;