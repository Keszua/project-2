// Konfiguracja malinki
raspi-config
// przestawić:
- 1. System Options -> S5 Boot/Auto Login -> Console Autologin
- 3. Interface Options -> I2 SSH -> Enable



sudo apt update

// uruchomienie środowiska graficznego:
startx



// instlacja bazy na malinie
https://linuxhint.com/setup-mysql-raspberry-pi/

sudo apt install mariadb-server

sudo mysql_secure_installation
    Switch to unix_socket authentication [Y/n] N
    Change the root password? [Y/n] N
    Remove anonymous users? [Y/n] N
    Disallow root login remotely? [Y/n] N
    Remove test database and access to it? [Y/n] N
    Reload privilege tables now? [Y/n] Y

// Zalogować się do bazy jako root
sudo mysql -u root -p
// Nadanie uprawnień do bazy
GRANT ALL PRIVILEGES ON black_box.* TO 'pi'@'localhost' IDENTIFIED BY '<haslo>' WITH GRANT OPTION;

//dla staconarki:
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'root' WITH GRANT OPTION;



// instalacja node 
https://www.golinuxcloud.com/install-nodejs-and-npm-on-raspberry-pi/

sudo su
curl -fsSL https://deb.nodesource.com/setup_17.x | bash -

sudo apt install nodejs


// instalacja nginx -------------------------------------------------------------------------------
sudo apt install nginx
sudo systemctl start nginx

// pobranie lokalnego adresu maliny
hostname -I
// po wejsciu prez przgladarkę na ten adres (bez portu) powinna się pokazać strona startowa

// konfiguracja nginxa jest w:        /etc/nginx/sites-enabled/default
// ręczne uruchomienie nginx: ┬       sudo /etc/init.d/nginx start
//                            └       sudo systemctl start nginx
// sprawdzenie czy usługa działa:     sudo systemctl status nginx
// przeładowanie konfiguracji:        sudo systemctl reload nginx
// folder strony znajduej sie w:      /var/www/html/


// na rasbery kopiowanie projeku (git sam stworzy foldery): ---------------------------------------
git clone witex@192.168.1.10:projects/black-box/front
git clone witex@192.168.1.10:projects/black-box/back

// instalacja globalana TS  - ! nie bła potrzebna
npm install -g typescript

// Aby uruchamiać w node TS, zainstalować: - ! to nie było potrzebne
npm i -D ts-node ts-node-dev typescript

// aktualizacja strony na RPI: --------------------------------------------------------------------
//wejść do folderu projektu:
cd /home/black_box/front
// wywołać przebudowanie strony
sudo npm run build
// skopiować stronę do nginx:
sudo cp -r ./build/* /var/www/html/
*/ 





// Instalacja Dockera na PRI ----------------------------------------------------------------------
https://szkoladockera.pl/docker-na-raspberry-pi-instalacja-i-mozliwosci/

curl -sSL https://get.docker.com | sh

// Dodanie użytkownika Pi do grupy docker
sudo usermod -aG docker pi
// po tym poleceniu najlepiej zrestartować mallinę:  sudo reboot

// sprawdzenie czy docker się zainstalował:
docker version



// Instalacja docker-compose na Raspberry Pi
//Instalacja wymaganych zależności
sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo apt-get remove python-configparser

//Instalacja docker-compose na Raspberry
sudo pip3 -v install docker-compose

//Test – czy docker-compose działa na Raspberry Pi
docker-compose version


// kontener mysql na RPI musi być w wersji amd64
//docker image pull amd64/mysql:8.0

docker image pull mysql

