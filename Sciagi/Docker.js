
// Trzeba œciagn¹æ i zainstalowaæ dockera 
https://www.docker.com/get-started

// oraz WSL2  (taki linux na windowsa)
https://docs.microsoft.com/pl-pl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

// zak³adanie konta na:
https://hub.docker.com/signup


// link do repo z kursu: 
https://github.com/pnowy/docker-course
//-------------------------------------------------------------------------------------------------
docker version
docker info       // liczba kontenerów i obraów


docker-compose    // jakieœ narzêdzie napisane w Pythonie

docker            // wyœwietli listê poleceñ

docker image pull nazwaObrau  // œci¹gnieci danego obrazu, bez uruchamiania
docker image pull nazwaObrau:mojTag  // œci¹gnieci danego obrazu + nadaj tag ale tez jakoœ koleœ œciaga³ odpowiednie wersje za pomoc¹ tagu (film 18)
docker run
docker container run   // uruchomienie NOWEGO kontenera. Je¿eli nie posiadamy obrazu, zostanei on œci¹gniêty i uruchomiony
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

//curl - taka rzegl¹darka z linii komend
curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/docker/image/1" -d "{ \"name\" : \"elasticsearch\"}"
curl localhost:9200/docker/_search

//do obserwowania, co siê dzieje w kolejkach
docker run -d --name rabbit-in-the-hole -p 8081:15672 rabbitmq:3-managment
// po wejœciu na przegl¹darce, mozna siê zalogowac L: guest  H: guest


docker container top idkontenera      // obserwacja procesów
docker container inspect idkontenera  // wyswietla pe³n¹ konfiguracjê kontenera (w formacie JSON)
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

//Usuwanie sieci:
// w pierszej kolejnosci trzeba odpi¹æ lub usun¹æ kontenery

// DNS
// Film 17 (Docker od podstaw)
// Trzeba sprawdziæ IPAddress  (polecenie docker network inspect ...)
// Endpoint informujacy o stanie serwisu: (w konsoli linuxa)
curl http://172.17.0.3:8080/actuator/health


// urzycie opcji link ... na przyk³adzie po³¹czenia ado bazy MSQL
docker run --name wordpressdb -e MYSQL_ROOT_PASSWORD=wordpress -e MYSQL_DATABASE=wordpress -d mysql:5.7
docker run -e WORDPRESS_DB_PASSWORD=wordpress -d --name wordpress --link wordpressdb:mysql -p 80:80  wordpress:5-php7.2
//                                  |                   |                |                    |- port zewnêtrzny dla przegl¹darki
//                                  |                   |                |           |- wewnêtrzny alias, domyœlnia nazwa dla bazy danych to mysql
//                                  |                   |                |- nazwa kontenera
//                                  |                   |- nazwa kontenera
//                                  |- nazwa bazy danych


//-------------------------------------------------------------------------------------------------
// Budowanie obrazów

docker image history nazwaObrazu   // mozna podej¿eæ, kiedy i z jakich warstwy zosta³ stworzony obraz
docker image inspect idKontenera  // wyswietla pe³n¹ konfiguracjê obrzu (w formacie JSON)

// nadawanie nowego tagu
docker image tag nazwa:aTagiem nazwaKontaDockerHub/nazwa
//                                                  |- nazwa z ewentualnym tagiem

//wys³anie obrazu na w³asne repozytorium:
// trzeba byæ zalogowanym, te same dane co na https://hub.docker.com/ :
docker login 
docker image push nazwaKontaDockerHub/nazwaObrazu:zTagiem
docker logout // jeœli chcemy siê wylogowaæ 

//pobranie ze swojego repo
docker image pull nazwaKontaDockerHub/nazwaObrazu:zEwentualnymTagiem

// tworzenie obrazu na podstawie kontenera:
docker container commit idKontenera nazwaKontaDockerHub/nazwaObrazu:zTagiem

// tworzenie kontenera na z wykorzsytaneim pliku Dockerfile
// w filmie 21 koleœ pokazuje plik Dockerfile gdzie definiuje siê, jak przerobiæ i skonfigurowaæ obraz
https://docs.docker.com/engine/reference/builder/
// trzeba byæ konsol¹ w folderze w którym jest plik Dockerfile
docker image build -t nowaNazwaObrazu:tag .  //nie jestem pewien co do nazw obrazów






//poczytac o Kubernets


https://ihermes.humansoft.pl/login



