<?php
Edycja FORMULARZA REJESTRACJI:
Formulaż jest w: .../classes/form/CustomerFormatter.php
Po aktualizacji znikną te zmiany, dla tego trzeba skopiować sobie do ten plik do:
.../override/classes/form/CustomerFormatter.php

class CustomerFormatterCore implements FormFormatterInterface
// edytować na
class CustomerFormatter extends CustomerFormatterCore implements FormFormatterInterface
# następnie w panelAdmina > Zaawansowane > Wydajnosc > Wyczysc pamiec podreczna
# więcej na https://devdocs.prestashop.com/1.7/modules/concepts/overrides/

#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
# stworzenie nowego MODUŁU
# w folderze /modules  trzeba stworzyć folder z nazwa modulu (male litery) a w nim plik z ta samą nazwą.php (małe litery)

# zawartość plku:

<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class MyModule extends Module
{
	public function __construct()
    {
        $this->name = 'mymodule';                # ta nazwa musi byc taka jak nazwa pliku
        $this->author = 'Karol M';
        $this->need_instance = 0;                # gdy wymagane jakieś wyświetlenei komunikatu z ostrzeżeniem

        $this->displayName = $this->l('Moduł Karolka :)');
        $this->description = $this->l('Świetny, nic nie robiący modół ;)');
    }
}

# Wiecej na: https://devdocs.prestashop.com/1.7/modules/creation/tutorial/



























#--------------------------------------------------------------------------------------------------
  #####                    #
   #   #                   #
   #   #    ###     ###    #  #    ###    # ###
   #   #   #   #   #   #   # #    #   #   ##
   #   #   #   #   #       ##     #####   #
   #   #   #   #   #   #   # #    #       #
  #####     ###     ###    #  #    ###    #
#--------------------------------------------------------------------------------------------------

# moj dzialajacy pli docker-compose.yml
version: '3.9'

services:
    prestashop_mysql:
        # image: mysql:5.7
        image: prestashop-db:5.7_3
        container_name: prestashop-db
        command: --default-authentication-plugin=mysql_native_password
        environment:
            MYSQL_DATABASE: prestashop   # umożliwia zdefiniowanie nazwy bazy danych.
            MYSQL_ROOT_PASSWORD: admin   # umożliwia ustawienie hasła dla użytkownika root.
        volumes:
            # - ./.docker/data/mysql/:/var/lib/mysql
            # - ./.docker/logs/mysql/:/var/log/mysql
            - db_data:/var/lib/mysql
        ports:
            - 3307:3306
        networks:
            - presta-net
        
    prestashop:
        # image: prestashop/prestashop:1.7
        image: prestashop:1.7_4
        container_name: prestashop
        ports:
          - 8080:80
          - 2202:22
        environment:
            DB_SERVER: prestashop_mysql  # ustawienie serwera bazy danych (nazwa jak nazwa serwisu z bazą)
            MYSQL_HOST: mysql
            MYSQL_USER: root
            MYSQL_PASSWORD: admin
            MYSQL_DB: prestashop
        volumes:
            - presta_data:/var/www/html
        networks:
            - presta-net

networks:
  presta-net:
    external: false #needs to be created by other file
    driver: bridge
    name: prestashop-net

volumes:
  db_data:
    name: docker_test1_db_data
  presta_data:
    name: docker_test1_presta_data
    external: true

#--------------------------------------------------------------------------------------------------
# Uruchomienie aplikacji:
# docker-compose up -d


# Aby sie połaczyc przez ssh:
# zainstalowac ssh
apt install ssh
#edytować plik:
nano /etc/ssh/sshd_config
	# zmienić linijke:
	#PermitRootLogin prohibit-password
	# na:
	PermitRootLogin yes


# uruchomic usluge (lub zrestartowac service ssh restart)
service ssh start

Sprawdzenie ip (wewnątrz kontenera)
cat /etc/hosts # cat /etc/network
# przez SSH laczymy sie: zwykle bedzie to: 127.0.0.1:2202

# gdy nie ma ustawionego hasla, można wywołąc polecenie i podac nowe hasło
passwd
















