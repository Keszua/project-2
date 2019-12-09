
//Zakładanie nowego projektu:
//Na początku tworzę paczkę. Będąc w folderze pliku, wywołuje polecenie
 npm init  
//aby pozostawić ustawienia defaultowe, naciskamy enetery.

//Nastepnie instalujemy Express.js poleceniam
 npm install express --save  //aby skrócic komendę, można wpisac: npm i express -S

//W pliku .js  (przykładowo app.js) Tworzymy najprostrzy serwer, który nic nie robi (nie nasłuchuje, nie wysyła):
const express = require('express');
const app = express();

//Parametry  adresu URL:

//            URL     Parameter  Parameter
//             |          name    value
//             v            v       v
http://www.phoneshop.com?product=iphone&size=32gb&color=white
//                      ^              ^
//                 Begin Query     Query String
//                   String         Separator






