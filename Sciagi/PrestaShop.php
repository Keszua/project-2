<?php



// var_dump($this->_path);
// die();
// Tools::dieObject($cmsVar);


// Sposób na zamianę jakiegoś tekstu:
// np, w CmsController.php
$cmsVar['content'] = str_replace('Shipments and returns', "Pan Janek", $cmsVar['content'] );
// zamiast try catch, koleś zrobił:
{if siset($zmienna) && count($produkty)}
	<table> bla bla...
{/if}

//Nadanie uprawnień do nadpisywania:
chown -R www-data:www-data ./


#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
Edycja FORMULARZA REJESTRACJI:
Formulaż jest w: .../classes/form/CustomerFormatter.php
Po aktualizacji znikną te zmiany, dla tego trzeba skopiować sobie do ten plik do:
.../override/classes/form/CustomerFormatter.php

class CustomerFormatterCore implements FormFormatterInterface {}
// edytować na
class CustomerFormatter extends CustomerFormatterCore implements FormFormatterInterface {}
# następnie w panelAdmina > Zaawansowane > Wydajnosc > Wyczysc pamiec podreczna
# więcej na https://devdocs.prestashop.com/1.7/modules/concepts/overrides/


#--------------------------------------------------------------------------------------------------
HOOK
https://devdocs.prestashop.com/1.7/modules/concepts/hooks/use-hooks-on-modern-pages/

Podstawowe hooki na stronie głównej:
Header
Top
Nawigation
Slider
Product
Home
Footer


Filmik gdzie koleś wyjaśnia strukturę plików + DZIALAJACY moduł https://www.youtube.com/watch?v=WQ_FVVQVE4o&list=PLfw-LlX2j6_NN6MzWa78YdomeKvkGGlBp

Wychodzi na to, ze własne hooki trzeba tworzyć w folderze:
modules/nazwaMojegoModulu/views/templates/hook/home.tpl


nazwaMojegoModulu
├── config
│   ├── admin
│   │   └── services.yml
│   ├── front
│   │   └── services.yml
│   └── services.yml
├── controllers
│   ├── admin
│   └── front
├── override
├── src
│   ├── Controller
│   └── Entity
├── translations
├── upgrade
├── vendor
├── views
│   ├── css
│   │   └── nazwaMojegoModulu.css
│   ├── img
│   ├── js
│   │   └── nazwaMojegoModulu.js
│   └── templates
│       ├── admin
│       │   └── configure.tpl
│       ├── front
│       └── hook
│           └── home.tpl
├── config.xml
├── logo.png
└── mymodule.php


skończyłem na filmie 7, minuta 9:00  https://www.youtube.com/watch?v=DItBvzYcI9I&list=PLfw-LlX2j6_NN6MzWa78YdomeKvkGGlBp&index=7

#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
//korzystanie z bazy:
Configuration::get('myVariable')
Configuration::updateValue('myVariable', $value)
Configuration::deleteByName('myVariable')


if (Shop::isFeatureActive()) {              // sprawdz, czy dwa sklepy sa aktywne
    Shop::setContext(Shop::CONTEXT_ALL);    // zmień kontekst dla wszystkich sklepów
}

// Aby wysłać zmienne do formularzy .tpl
$this->context->smarty->assign(array(  //wysłanie z powrotem do szablonu konfiguracji
    'MULTIPURPOSE_STR' => Configuration::get('MULTIPURPOSE_STR')
));

// wyśweitlenie wartośći w .tpl
<label class="notice"> {$MULTIPURPOSE_STR} </label>

// aktualizowanie zmiennych, wpisanych przez urzytkownika (przez okineko na stronie)
<form method="POST">
    <input type="text" name="print" id="print" class="form-control" value="{$MULTIPURPOSE_STR}"/>
    <button type="submit" name="savemultipurposesting" class="btn btn-default pull-right" > Zapisz </button>
</form>
// w pliku główmyn moduły .php, w funkcji getContent() trzeba dopisać:
    if(Tools::isSubmit('savemultipurposesting')) { //to się wywoła po naciśnieciu klawisza "Zapisz" (w Konfiguruj)
        $name = Tools::getValue('print');
        Configuration::updateValue('MULTIPURPOSE_STR', $name);
    }


CREATE TABLEPo instrukcjach SQL musi następować, IF NOT EXISTSaby uniknąć błędów SQL
DROP TABLEPo instrukcjach SQL musi następować, IF EXISTSaby uniknąć błędów SQL


Parametry pobierane/zapisywane metodami POST lub GET:
$configValue = (string) Tools::getValue('MYMODULE_CONFIG');

// wyśweitlenie wartośći w .tpl
<label class="notice"> {$MULTIPURPOSE_STR} </label>



#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
# stworzenie nowego MODUŁU
# https://devdocs.prestashop.com/1.7/modules/creation/tutorial/
# https://prestapros.com/blog/jak-napisac-modul-prestashop
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
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Karol M';
        $this->need_instance = 0;                # gdy wymagane jakieś wyświetlenei komunikatu z ostrzeżeniem
        $this->ps_versions_compliancy = [
            'min' => '1.6',
            'max' => '1.7.99',
        ];
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('Moduł Karolka :)');
        $this->description = $this->l('Świetny, nic nie robiący modół ;)');
    }
	
    public function install()
    {
       return (
            parent::install()
            && $this->registerHook('displayHome')  # podpiecie sie pod hook na stronie głónej
        ); 
    }

    public function uninstall()
    {
        return (
            parent::uninstall() 
            // && Configuration::deleteByName('MYMODULE_NAME')
        );
    }

    public function hookDisplayHome()	# wykonanie hoka, nazwa musi zaczynać się od hook i nazwa wcześniej zarejstrowanego hooka
    {
        $this->context->controller->addCSS($this->_path . 'views/css/multipurpose.css', 'all'); # lub $this->context->controller->addCSS(array($this->_path . 'views/css/multipurpose.css'));
        $this->context->controller->addJS($this->_path . 'views/js/multipurpose.js', 'all');

        //return "Jakiś tekst wstawiony recznie... ";
		return $this->display(__FILE__, 'views/templates/hook/home.tpl'); # wyswietl zawartość .tpl
    }

    public function getContent()  // tutaj zawartość, po wciśnięciu klawisza "konfiguruj"
    {
		if(Tools::isSubmit('savemultipurposesting')) { //to się wywoła po naciśnieciu klawisza "Zapisz" (w Konfiguruj)
            $name = Tools::getValue('print');
            Configuration::updateValue('MULTIPURPOSE_STR', $name);
        }
        
        $this->context->smarty->assign(array(  //wysłanie z powrotem do szablony konfiguracji
            'MULTIPURPOSE_STR' => Configuration::get('MULTIPURPOSE_STR')
        ));
		
        return $this->display(__FILE__, 'views/templates/admin/configure.tpl');
    }
	
}


# zawartość  modules/nazwaMojegoModulu/views/js/nazwaMojegoModulu.js
$(document).ready( function() {
    alert("elo");
})

# zawartość modules/nazwaMojegoModulu/views/templates/hook/home.tpl
<div class="row">
    <div class="col-lg-12">
        <img src="http://via.placeholder.com/1920x350" class="multipurpose-img" />
    </div>
</div>

# zawartość modules/nazwaMojegoModulu/views/templates/admin/configure.tpl
<form method="POST">
    <div class="panel">
        <div class="panel-heading">
            Hejka
            {l s='Configuration' mod='multipurpose'} 
        </div>

        <div class="panel-body">
            <label for="print"> Co wyswietlić? </label>

            <input type="text" name="print" id="print" class=""form-control value="{$MULTIPURPOSE_STR}"/>
        </div>

        <div class="panel-footer">
            <button type="submit" name="savemultipurposesting" class="btn btn-default pull-right" >
                <i class="process-icon-save"></i>
                Zapisz
            </button>
        </div>
    </div>
</form>




nazwaMojegoModulu

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












#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------

Zawartość  views/templates/hook/home.tpl

<div class="profity" >
    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 1
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 2
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 3
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 4
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 5
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 6
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 7
        </div>
    </div>

    <div class="profity_item">
        <div class="profity_item__img">
            <img src="/modules/karol/views/img/tem.jpg" width="100" height="100"/>
        </div>
        <div class="profity_item__opis">
            Opis 8
        </div>
    </div>

</div>


Zawartość .css
.profity_item {
    display: flex; 
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    height: 150px;
    width: 105px;

    margin: 3px;
    padding: 3px 3px;
    /* background-color: rgba(0, 255, 136, 0.418); */
    background-color: rgb(255, 183, 100);
}

.profity_item__img {
    background-color: rgb(200, 200, 200);
}

.profity_item__opis {
    margin: 3px;
    padding: 5px 5px;
    background-color: rgb(77, 165, 55);
}




#--------------------------------------------------------------------------------------------------
      #      ####     ###
     # #     #   #     # 
     # #     #   #     # 
    #   #    ####      # 
    #####    #         # 
    #   #    #         # 
    #   #    #        ###
#--------------------------------------------------------------------------------------------------

// Trzeba wejśc do Zaawansowane -> API 
// Tam wygenerować klócz i właczyć API PrestaShop

Działajacy odbiór danych z kontenera:
http://BGHYA7SXLC1Z68WQWXUUJBBN39E8ME7Q@localhost:8080/api/
http://BGHYA7SXLC1Z68WQWXUUJBBN39E8ME7Q@localhost:8080/api/?output_format=JSON
http://BGHYA7SXLC1Z68WQWXUUJBBN39E8ME7Q@localhost:8080/api/?schema=synopsis&output_format=JSON


/admin_9282/cron_currency_rates.php?secure_key={my_secure_key}