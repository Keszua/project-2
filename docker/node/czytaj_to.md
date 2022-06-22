
Projekt na podstawie filmu YT
https://www.youtube.com/watch?v=9zUHg7xjIqQ
https://github.com/Sanjeev-Thiyagarajan/node-docker

Uruchomienie wersji developerskiej
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d

Zatrzymanie wersji developerskiej
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml dovn -v

Uruchomienie wersji produkcyjnej
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d

Przebudowanie wersji produkcyjnej
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
Przebudowanie tylko jednego kontenera
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --force-recreate --no-deps node-app


Zatrzymanie wersji produkcyjnej
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml dovn -v


Podgląd logów: ( -f ciągły podgląd)
docker logs node1_redis_1 
docker logs node1_node-app_1 -f



Po wejściu do konternera Redis
docker exec -it node1_redis_1 bash

Można podejżeć IP na jakim działa i sprawdza kto jest zalogowany:
redis-cli
Lub bez wchodzenia do kontenera
$ docker exec -it node1_redis_1 bash
docker exec -it node1_redis_1 redis-cli

Lista zalogowanych:
KEYS *

Sprawdzenie detali:
GET "ses:IDElementuZListy"


Uruchominenie skalowalnej aplikacji (kilka kontenerów z node)
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --scale node-app=2

Zmienne środowiskowe na docelowej maszynie, tworzy się przez polecenie:
export SESSION_SECRET="hello"

Podgląd zmiennych środowiskowych:
printenv  //pokaż wszystkie zmienne środowiskowe

Szybsza metoda na tworzenie wielu zmiennych środowiskoych:
1. Stworz plik root/.env
2. Wpisz do niego zmienne i zapisz
3. Edytuj plik .profile i na końcu dopisac:
set -o allexport; source /root/.env; set +o allexport
4. Zapisać i zrestarotwać sesję (wylogować [exit] i zalogować)

//-------------------------------------------------------------------------------------------------
METODA 1 na wypchnięcie wersji produkcyjnej przez github (nie zalecana)
Na filmie (4:14:12), koleś stworzył folder root/app  (czyli dostęp tylko dla admina)
W tym folderze wykonał git clone  (z kropką na końcu)
Teraz na zdalnej maszynie wywołał polecenie
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
Trzeba sprawdzić, hmura jaki nadała adres IP i od tej pory, działa 
	http://ipNadanyPrzezChmure/app/v1

Normalny proces aktualizowania projektu produkcyjnego, to wypchnięcie projektu na server (git commit -a -m "opis";  git push) i na maszynie wirtualnej pobranie projektu (git pull)


//-------------------------------------------------------------------------------------------------
METODA 2 na wypchnięcie wersji produkcyjnej przez dockerhub
Oczywiście trzeba miec konto na dockerhub
Za pierwszym razem trzeba sie zalogować
	docker login
Nadać nazwę z przedrostkiem loginu konta
	docker image tag node-docker_node-app nazwaKontaDockerHub/node-app
Wypchnać obraz pleceniem 
	docker push nazwaKontaDockerHub/node-app

Po wprowadzeniu zmian (lokalnie), trzeba przebudować cały projekt
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build
lub tylko wybrany kontener
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build node-app
I wypchnąć projekt na dockerhub
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml push node-app

Na maszynie wirtualnej, trzeba pobrac projekt z dockerhub:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml pull
lub jeden kontener(?)
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml pull node-app
następnie zrestartować kontenery:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
lub jeden kontener
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --no-deps node-app


//-------------------------------------------------------------------------------------------------
Automatyczne aktualizowanie się kontenerów po stronie zdalnej maszyny.
https://containrrr.dev/watchtower/
Na zdalnej maszynie, potrzebujemy zaimplementowac kontener z watchtower (INTERVAL podawany w sekundach)
	docker run -d --name watchtower -e WATCHTOWER_TRACE=true -e WATCHTOWER_DEBUG=true -e WATCHTOWER_POLL_INTERVAL=50 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower app_node-app_1

Sprawdzenie stanu latarni: 
	docker logs watchtower -f

Po wprowadzeniu zmian (lokalnie), trzeba przebudować cały projekt i wypchnąć
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build node-app
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml push node-app

W przeciągu minuty, na maszynie zdalnej, samo się zakualizuje.


//-------------------------------------------------------------------------------------------------
Oriestracja kontenerów za pomocą docker swarm
Informacja, czy jest uruchomiony, można sprawdzić poleceniem
	docker info
Jest tam wpis:
Swarm: inactive

Trzeba sprawdzić ip zdalnej maszyny eth0
	ip addr
Aktywacja docker swarma:
	docker swarm init --advertise-addr ipMaszynyzeth0

Komendy swarmose:
	docker ┬ services
		   ├ stack    // do uruchomienia kontenerów w staku (taki zbiór). Pogląd ls
		   ├ node     
		   ├ stack    // takie logi
		   ├
		   └

	docker stack ls                   // podgląd staków
	docker stack services myapp ls    // podgląd kontenerów w staku
	docker services                   // podgląd serwisów
	docker stack ps myapp


Uruchomienie kontenerów oraz aktualizacja przez docker swarm (nie docker-compose)
	docker stack deploy -c docker-compose.yaml -c docker-compose.prod.yaml mojaNazwaStaka

