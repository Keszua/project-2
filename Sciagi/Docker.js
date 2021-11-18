
// Trzeba œciagn¹æ i zainstalowaæ dockera 
https://www.docker.com/get-started

// oraz WSL2  (taki linux na windowsa)
https://docs.microsoft.com/pl-pl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

// zak³adanie konta na:
https://hub.docker.com/signup

//-------------------------------------------------------------------------------------------------
docker version
docker info       // liczba kontenerów i obraów


docker-compose    // jakieœ narzêdzie napisane w Pythonie

docker            // wyœwietli listê poleceñ


docker run
docker container run   // uruchomienie NOWEGO kontenera
docker container run --publish 8080:80 --detach nginx  
//                     |       |    |    |      |- nazwa obrazu
//                     |       |    |    |- uruchomienie kontenera w tle
//                     |       |    |- port po stronie kontenera
//                     |       |- port, na którym kontener bedzie dostepny na naszym hoœcie (zwykle localhost:8080)
//                     |- przekierowanie 
// zatrzymanie kontenera przez:  Ctrl+C

docker container run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -d --name=myName docker.elastic.co/elasticsearch/elasticsearch:6.5.4
//                                              |                                   |           |                                             |- wersja albo tag
//                                              |                                   |           |- nazwa obrazu
//                                              |                                   |- nazwa kontenera
//                                              |- przekazanie zmiennej œrodowiskowej

// uruchom w trybie interaktywnym z terminalem (wyjœcie komend¹ exit)
docker container run -it nginx bash
docker container start -ai idkontenera
docker container exec -it idkontenera bash  //odpalenie konsoli na dzia³aj¹cym kontenerze

docker stop idkontenera

docker container ls     // wyswietli liste kontenerow URUCHOMIONYCH
docker ps               // po staremu 
docker container ls -a  // wyswietli liste wszsytkich kontenerow, czyli nie uruchominych te¿
docker image ls         // lista obrazów

docker container start idkontenera  // uruchominie istniej¹cego kontenera
docker rm idkontenera               //usówanie kontenera

docker container logs nazwaKontenera
docker container logs nazwaKontenera -f //ci¹g³a obserwacja (zablokuje CLI)

curl localhost:8080  //zwróci kod HTML strony
curl localhost:9200  //zwróci JSON (jeœli mamy odpalony elastic)

curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/docker/image/1" -d "{ \"name\" : \"elasticsearch\"}"
curl localhost:9200/docker/_search

//do obserwowania, co siê dzieje w kolejkach
docker run -d --name rabbit-in-the-hole -p 8081:15672 rabbitmq:3-managment
// po wejœciu na przegl¹darce, mozna siê zalogowac L: guest  H: guest


docker container top idkontenera      // obserwacja procesów
docker container inspect idkontenera  // wyswietla pe³n¹ konfiguracjê kontenerza (w formacie JSON)
docker container stats                // "live striming" ogólny status wszystkich uruchominych kontenerów


//-------------------------------------------------------------------------------------------------
docker network ls 
docker network inspect nazwaSieci

//tworzenie sieci:
docker network create --driver=bridge mojaNowaNazwaSieci

// uruchomienie kontenera "nginx" w konkretnej sieci (tutaj nazwa seici to: skynet)
docker container run -d --network=skynet nginx
docker network connect skynet first   // pod³¹czenie do sieci, kontenera first
docker network disconnect bridge first // odpiêcie kontenera od domyœlnej sieci (bo teraz by³y dwie sieci)

//Usówanie sieci:
// w pierszej kolejnosci trzeba odpi¹æ lub usun¹æ kontenery


//poczytac o Kubernets






