
// Trzeba �ciagn�� i zainstalowa� dockera 
https://www.docker.com/get-started

// oraz WSL2  (taki linux na windowsa)
https://docs.microsoft.com/pl-pl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

// zak�adanie konta na:
https://hub.docker.com/signup

//-------------------------------------------------------------------------------------------------
docker version
docker info       // liczba kontener�w i obra�w


docker-compose    // jakie� narz�dzie napisane w Pythonie

docker            // wy�wietli list� polece�


docker run
docker container run   // uruchomienie NOWEGO kontenera
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

curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/docker/image/1" -d "{ \"name\" : \"elasticsearch\"}"
curl localhost:9200/docker/_search

//do obserwowania, co si� dzieje w kolejkach
docker run -d --name rabbit-in-the-hole -p 8081:15672 rabbitmq:3-managment
// po wej�ciu na przegl�darce, mozna si� zalogowac L: guest  H: guest


docker container top idkontenera      // obserwacja proces�w
docker container inspect idkontenera  // wyswietla pe�n� konfiguracj� kontenerza (w formacie JSON)
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

//Us�wanie sieci:
// w pierszej kolejnosci trzeba odpi�� lub usun�� kontenery


//poczytac o Kubernets






