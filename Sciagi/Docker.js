
// Trzeba �ciagn�� i zainstalowa� dockera 
https://www.docker.com/get-started

// oraz WSL2  (taki linux na windowsa)
https://docs.microsoft.com/pl-pl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

// zak�adanie konta na:
https://hub.docker.com/signup


// link do repo z kursu: 
https://github.com/pnowy/docker-course
//-------------------------------------------------------------------------------------------------
docker version
docker info       // liczba kontener�w i obra�w


docker-compose    // jakie� narz�dzie napisane w Pythonie

docker            // wy�wietli list� polece�

docker image pull nazwaObrau  // �ci�gnieci danego obrazu, bez uruchamiania
docker image pull nazwaObrau:mojTag  // �ci�gnieci danego obrazu + nadaj tag ale tez jako� kole� �ciaga� odpowiednie wersje za pomoc� tagu (film 18)
docker run
docker container run   // uruchomienie NOWEGO kontenera. Je�eli nie posiadamy obrazu, zostanei on �ci�gni�ty i uruchomiony
docker container run --publish 8080:80 --detach nginx  
//                     |       |    |    |      |- nazwa obrazu
//                     |       |    |    |- uruchomienie kontenera w tle
//                     |       |    |- port po stronie kontenera
//                     |       |- port, na kt�rym kontener bedzie dostepny na naszym ho�cie (zwykle localhost:8080)
//                     |- przekierowanie 
// zatrzymanie kontenera przez:  Ctrl+C

docker container run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -d --name=myName docker.elastic.co/elasticsearch/elasticsearch:6.5.4
//                                              |                                   |           |                                             |- wersja albo tag
//                                              |                                   |           |- nazwa obrazu
//                                              |                                   |- nazwa kontenera
//                                              |- przekazanie zmiennej �rodowiskowej

// uruchom w trybie interaktywnym z terminalem (wyj�cie komend� exit)
docker container run -it nginx bash 
docker container start -ai idkontenera
docker container exec -it idkontenera bash  //odpalenie konsoli na dzia�aj�cym kontenerze

docker stop idkontenera

docker container ls     // wyswietli liste kontenerow URUCHOMIONYCH
docker ps               // po staremu 
docker container ls -a  // wyswietli liste wszsytkich kontenerow, czyli nie uruchominych te�
docker image ls         // lista obraz�w

docker container start idkontenera  // uruchominie istniej�cego kontenera
docker rm idkontenera               //us�wanie kontenera

docker container logs nazwaKontenera
docker container logs nazwaKontenera -f //ci�g�a obserwacja (zablokuje CLI)

curl localhost:8080  //zwr�ci kod HTML strony
curl localhost:9200  //zwr�ci JSON (je�li mamy odpalony elastic)

//curl - taka rzegl�darka z linii komend
curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/docker/image/1" -d "{ \"name\" : \"elasticsearch\"}"
curl localhost:9200/docker/_search

//do obserwowania, co si� dzieje w kolejkach
docker run -d --name rabbit-in-the-hole -p 8081:15672 rabbitmq:3-managment
// po wej�ciu na przegl�darce, mozna si� zalogowac L: guest  H: guest


docker container top idkontenera      // obserwacja proces�w
docker container inspect idkontenera  // wyswietla pe�n� konfiguracj� kontenera (w formacie JSON)
docker container stats                // "live striming" og�lny status wszystkich uruchominych kontener�w


//-------------------------------------------------------------------------------------------------
docker network ls 
docker network inspect nazwaSieci

//tworzenie sieci:
docker network create --driver=bridge mojaNowaNazwaSieci

// uruchomienie kontenera "nginx" w konkretnej sieci (tutaj nazwa seici to: skynet)
docker container run -d --network=skynet nginx
docker network connect skynet first   // pod��czenie do sieci, kontenera first
docker network disconnect bridge first // odpi�cie kontenera od domy�lnej sieci (bo teraz by�y dwie sieci)

//Usuwanie sieci:
// w pierszej kolejnosci trzeba odpi�� lub usun�� kontenery

// DNS
// Film 17 (Docker od podstaw)
// Trzeba sprawdzi� IPAddress  (polecenie docker network inspect ...)
// Endpoint informujacy o stanie serwisu: (w konsoli linuxa)
curl http://172.17.0.3:8080/actuator/health


// urzycie opcji link ... na przyk�adzie po��czenia ado bazy MSQL
docker run --name wordpressdb -e MYSQL_ROOT_PASSWORD=wordpress -e MYSQL_DATABASE=wordpress -d mysql:5.7
docker run -e WORDPRESS_DB_PASSWORD=wordpress -d --name wordpress --link wordpressdb:mysql -p 80:80  wordpress:5-php7.2
//                                  |                   |                |                    |- port zewn�trzny dla przegl�darki
//                                  |                   |                |           |- wewn�trzny alias, domy�lnia nazwa dla bazy danych to mysql
//                                  |                   |                |- nazwa kontenera
//                                  |                   |- nazwa kontenera
//                                  |- nazwa bazy danych


//-------------------------------------------------------------------------------------------------
// Budowanie obraz�w

docker image history nazwaObrazu   // mozna podej�e�, kiedy i z jakich warstwy zosta� stworzony obraz
docker image inspect idKontenera  // wyswietla pe�n� konfiguracj� obrzu (w formacie JSON)

// nadawanie nowego tagu
docker image tag nazwa:aTagiem nazwaKontaDockerHub/nazwa
//                                                  |- nazwa z ewentualnym tagiem

//wys�anie obrazu na w�asne repozytorium:
// trzeba by� zalogowanym, te same dane co na https://hub.docker.com/ :
docker login 
docker image push nazwaKontaDockerHub/nazwaObrazu:zTagiem
docker logout // je�li chcemy si� wylogowa� 

//pobranie ze swojego repo
docker image pull nazwaKontaDockerHub/nazwaObrazu:zEwentualnymTagiem

// tworzenie obrazu na podstawie kontenera:
docker container commit idKontenera nazwaKontaDockerHub/nazwaObrazu:zTagiem

// tworzenie kontenera na z wykorzsytaneim pliku Dockerfile
// w filmie 21 kole� pokazuje plik Dockerfile gdzie definiuje si�, jak przerobi� i skonfigurowa� obraz
https://docs.docker.com/engine/reference/builder/
// trzeba by� konsol� w folderze w kt�rym jest plik Dockerfile
docker image build -t nowaNazwaObrazu:tag .  //nie jestem pewien co do nazw obraz�w






//poczytac o Kubernets


https://ihermes.humansoft.pl/login



