

import os                    # importing os module

def generuj(nazwaModulu, CG):
    nazwa_maleLitery = nazwaModulu.lower()
    nazwa_pierwszaWielka = nazwaModulu[0].capitalize() + nazwaModulu[1:]
    nazwa_wielkieLitery = nazwaModulu.upper()

    path_cwd = os.getcwd()
    floderProjektu = os.path.join(path_cwd, nazwa_maleLitery) 


    # stwórz folder z nazwa projektu --------------------------------------------------------------
    try:
        os.mkdir(floderProjektu)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , nazwa_maleLitery , "FAILD creation")
        return
    else:
        print ("Directory " , nazwa_maleLitery , "Successfully created the directory")

    # stwórz pliki podstawowe ---------------------------------------------------------------------
    floderProjektu_configXml = os.path.join(floderProjektu, 'config.xml') 
    f_config = open(floderProjektu_configXml, mode="a+", encoding="utf-8")
    f_config.close()  

    # floderProjektu_logoPng = os.path.join(floderProjektu, 'logo.png') 
    # f_config = open(floderProjektu_logoPng, mode="a+", encoding="utf-8")
    # f_config.close()

    floderProjektu_nazwaModulu = os.path.join(floderProjektu, nazwa_maleLitery+'.php') 
    f_config = open(floderProjektu_nazwaModulu, mode="w+", encoding="utf-8")

    zawartoscPliku = f'''
<?php
if (!defined('_PS_VERSION_')) {{
    exit;
}}

class {nazwa_pierwszaWielka} extends Module
{{
    public function __construct()
    {{
        $this->name = '{nazwa_maleLitery}';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Karol';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '1.6',
            'max' => '1.7.99',
        ];
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('{nazwaModulu}');
        $this->description = $this->l('Opis...');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

        if (!Configuration::get('MYMODULE_NAME')) {{
            $this->warning = $this->l('No name provided');
        }}
    }}

    public function install()
    {{
       { "include_once($this->local_path.'sql/install.php');" if "wlasna_tabela_sql" in CG else ""}
       return (
            parent::install()
            { "&& $this->registerHook('displayHome')" if "hookDisplayHome" in CG else ""}
            { "&& $this->createTabLink()" if "frontController" in CG else ""}
        ); 
    }}

    public function uninstall()
    {{
       { "include_once($this->local_path.'sql/uninstall.php');" if "wlasna_tabela_sql" in CG else ""}
        return (
            parent::uninstall() 
            // && Configuration::deleteByName('MYMODULE_NAME')
        );
    }}
'''

    if 'hookDisplayHome' in CG:
        zawartoscPliku += f'''
    public function hookDisplayHome()	# wykonanie hoka, nazwa musi zaczynać się od hook i nazwa wcześniej zarejstrowanego hooka 
    {{
        $this->context->smarty->assign(array(
            '{nazwa_wielkieLitery}_STR' => Configuration::get('{nazwa_wielkieLitery}_STR')
        ));

        $this->context->controller->addCSS($this->_path . 'views/css/{nazwa_maleLitery}.css', 'all'); # lub $this->context->controller->addCSS(array($this->_path . 'views/css/multipurpose.css'));
        $this->context->controller->addJS($this->_path . 'views/js/{nazwa_maleLitery}.js', 'all');

        //return "Jakiś tekst wstawiony recznie... ";
		return $this->display(__FILE__, 'views/templates/hook/home.tpl'); # wyświetl zawartość .tpl
    }}
'''
    zawartoscPliku += f'''
    public function getContent()  // tutaj zawartość, po wciśnięciu klawisza "konfiguruj"
    {{
		if(Tools::isSubmit('{nazwa_maleLitery}SaveSesting')) {{ //to się wywoła po naciśnieciu klawisza "Zapisz" (w Konfiguruj)
            $name = Tools::getValue('print');
            Configuration::updateValue('{nazwa_wielkieLitery}_STR', $name);
        }}
        
        $this->context->smarty->assign(array(  //wysłanie z powrotem do szablonu konfiguracji
            '{nazwa_wielkieLitery}_STR' => Configuration::get('{nazwa_wielkieLitery}_STR')
        ));
		
        return $this->display(__FILE__, 'views/templates/admin/configure.tpl');
    }}
'''

    if 'frontController' in CG:
        zawartoscPliku += f'''
    public function createTabLink()
    {{
        $tab = new Tab;
        foreach (Language::getLanguages(false) as $language) {{
            $tab->name[$language['id_lang']] = $this->l('Origin');
        }}
        $tab->class_name = 'AdminOrigin';
        $tab->module = $this->name;
        $tab->id_parent = 0;
        $tab->add();
        return true;
    }}
'''

    zawartoscPliku += f'''
}}
'''


    f_config.write(zawartoscPliku)
    f_config.close()

    # mymodule > config
    floderProjektu_config = os.path.join(floderProjektu, 'config')
    try:
        os.mkdir(floderProjektu_config)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_config , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin
    floderProjektu_config_admin = os.path.join(floderProjektu_config, 'admin')
    try:
        os.mkdir(floderProjektu_config_admin)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_config_admin , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin > services.yml
    floderProjektu_config_admin_servicesYml = os.path.join(floderProjektu_config_admin, 'services.yml') 
    f_services = open(floderProjektu_config_admin_servicesYml, mode="a+", encoding="utf-8")
    f_services.close()  


    # mymodule > config > front
    floderProjektu_config_front = os.path.join(floderProjektu_config, 'front')
    try:
        os.mkdir(floderProjektu_config_front)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_config_front , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin > services.yml
    floderProjektu_config_front_servicesYml = os.path.join(floderProjektu_config_front, 'services.yml') 
    f_services = open(floderProjektu_config_front_servicesYml, mode="a+", encoding="utf-8")
    f_services.close()


    # mymodule > controllers
    floderProjektu_controllers = os.path.join(floderProjektu, 'controllers')
    try:
        os.mkdir(floderProjektu_controllers)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_controllers , "FAILD creation")
        return
    else:
        pass


    if 'frontController' in CG:
        # mymodule > controllers > admin
        floderProjektu_controllers_admin = os.path.join(floderProjektu_controllers, 'admin')
        try:
            os.mkdir(floderProjektu_controllers_admin)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , floderProjektu_controllers_admin , "FAILD creation")
            return
        else:
            pass


        # mymodule > controllers > admin > AdminOriginController.php
        floderProjektu_controllers_admin_AdminOriginControllerPhp = os.path.join(floderProjektu_controllers_admin, 'AdminOriginController.php') 
        f_controller = open(floderProjektu_controllers_admin_AdminOriginControllerPhp, mode="a+", encoding="utf-8")
        zawartoscPliku = f'''
<?php
class AdminOriginController extends ModuleAdminController
{{
    public function __construct()
    {{
        parent::__construct();
    }}

    public function init()
    {{
        parent::init();
    }}

    public function initContent()
    {{
        parent::initContent();
        $this->context->smarty->assign(array(
        ));
        $this->setTemplate('origin.tpl');
    }}

}}


'''
        f_controller.write(zawartoscPliku)
        f_controller.close()


        # mymodule > controllers > front
        floderProjektu_controllers_front = os.path.join(floderProjektu_controllers, 'admin')
        try:
            os.mkdir(floderProjektu_controllers_front)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , floderProjektu_controllers_front , "FAILD creation")
            return
        else:
            pass

        # mymodule > controllers > front > task.php
        floderProjektu_controllers_front_taskPhp = os.path.join(floderProjektu_controllers_front, 'task.php') 
        f_controller = open(floderProjektu_controllers_front_taskPhp, mode="a+", encoding="utf-8")
        zawartoscPliku = f'''
<?php

class MultipurposeTaskModuleFrontController extends ModuleFrontController
{{
    public function __construct()
    {{
        parent::__construct();
    }}

    public function init()
    {{
        parent::init();
    }}

    public function initContent()
    {{
        parent::initContent();
        $this->context->smarty->assign(array(
            'shop_name' => Configuration::get('PS_SHOP_NAME'),
            'nb_product' => Db::getInstance()->getValue('SELECT COUNT(*) FROM `' . _DB_PREFIX_ . 'product`'),  // liczba produktów
            'categories' => Db::getInstance()->executeS('
                SELECT `name` 
                FROM `' . _DB_PREFIX_ . 'category_lang` t
                WHERE `id_lang` = ' . (int) $this->context->language->id . '
            '), 
            'manufacturer' => Db::getInstance()->getRow('SELECT * FROM `' . _DB_PREFIX_ . 'manufacturer`'),
        ));
        $this->setTemplate('module:{nazwa_maleLitery}/views/templates/front/task.tpl');
    }}


}}        
'''
        f_controller.write(zawartoscPliku)
        f_controller.close()



    # mymodule > override
    floderProjektu_override = os.path.join(floderProjektu, 'override')
    try:
        os.mkdir(floderProjektu_override)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_override , "FAILD creation")
        return
    else:
        pass


    if 'wlasna_tabela_sql' in CG:
        # mymodule > sql --------------------------------------------------------------------------
        floderProjektu_sql = os.path.join(floderProjektu, 'sql')
        try:
            os.mkdir(floderProjektu_sql)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , floderProjektu_sql , "FAILD creation")
            return
        else:
            pass

        # mymodule > sql > install.php
        floderProjektu_sql_installPhp = os.path.join(floderProjektu_sql, 'install.php') 
        f_install = open(floderProjektu_sql_installPhp, mode="w+", encoding="utf-8")
        f_install.write(f'''<?php
$sqls = array();

$sqls[] = 'CREATE TABLE IF NOT EXISTS  `' . _DB_PREFIX_ . '{nazwa_maleLitery}_one` (
    `id_multione` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `description` TEXT,
    PRIMARY KEY (`id_multione`)
) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=UTF8;';

$sqls[] = 'CREATE TABLE IF NOT EXISTS  `' . _DB_PREFIX_ . '{nazwa_maleLitery}_two` (
    `id_multitwo` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `description` TEXT,
    PRIMARY KEY (`id_multitwo`)
) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=UTF8;';

foreach ($sqls as $query) {{
    if (Db::getInstance()->execute($query) == false) {{
        return false;
    }}
}}
''')
        f_install.close()


        # mymodule > sql > uninstall.php
        floderProjektu_sql_uninstallPhp = os.path.join(floderProjektu_sql, 'uninstall.php') 
        f_uninstall = open(floderProjektu_sql_uninstallPhp, mode="w+", encoding="utf-8")
        f_uninstall.write(f'''<?php
$sqls = array();

$sqls[] = 'DROP TABLE IF EXISTS  `' . _DB_PREFIX_ . '{nazwa_maleLitery}_one`';
$sqls[] = 'DROP TABLE IF EXISTS  `' . _DB_PREFIX_ . '{nazwa_maleLitery}_two`';

foreach ($sqls as $query) {{
    if (Db::getInstance()->execute($query) == false) {{
        return false;
    }}
}}
''')
        f_uninstall.close()


    # mymodule > src ------------------------------------------------------------------------------
    floderProjektu_src = os.path.join(floderProjektu, 'src')
    try:
        os.mkdir(floderProjektu_src)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_src , "FAILD creation")
        return
    else:
        pass


    floderProjektu_translations = os.path.join(floderProjektu, 'translations')
    try:
        os.mkdir(floderProjektu_translations)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_translations , "FAILD creation")
        return
    else:
        pass


    floderProjektu_upgrade = os.path.join(floderProjektu, 'upgrade')
    try:
        os.mkdir(floderProjektu_upgrade)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_upgrade , "FAILD creation")
        return
    else:
        pass


    floderProjektu_vendor = os.path.join(floderProjektu, 'vendor')
    try:
        os.mkdir(floderProjektu_vendor)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_vendor , "FAILD creation")
        return
    else:
        pass


    # mymodule > views
    floderProjektu_views = os.path.join(floderProjektu, 'views')
    try:
        os.mkdir(floderProjektu_views)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > css
    floderProjektu_views_css = os.path.join(floderProjektu_views, 'css')
    try:
        os.mkdir(floderProjektu_views_css)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_css , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > css > mymodule.css
    floderProjektu_views_css_mymoduleCss = os.path.join(floderProjektu_views_css, nazwa_maleLitery+'.css') 
    f_services = open(floderProjektu_views_css_mymoduleCss, mode="w+", encoding="utf-8")
    
    f_services.write(f'''
.{nazwa_maleLitery}-img {{
    width: 100%;
    background-color: brown;
    padding: 5px 5px;
}}

.notice {{
    display: block;
    width: 100%;
    padding: 50px 0px;
    text-align:center;
    color: #dfd;
    background: #001;
    font-weight: bold;
}}
)''')
    f_services.close()


    # mymodule > views > img
    floderProjektu_views_img = os.path.join(floderProjektu_views, 'img')
    try:
        os.mkdir(floderProjektu_views_img)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_img , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > js
    floderProjektu_views_js = os.path.join(floderProjektu_views, 'js')
    try:
        os.mkdir(floderProjektu_views_js)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_js , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > js > mymodule.js
    floderProjektu_views_js_mymoduleJs = os.path.join(floderProjektu_views_js, nazwa_maleLitery+'.js') 
    f_services = open(floderProjektu_views_js_mymoduleJs, mode="w+", encoding="utf-8")
    f_services.write(f'''$(document).ready( function() {{
    alert("komuniakt z pliku: {nazwa_maleLitery}/views/js/{nazwa_maleLitery}.js");
}})''')
    f_services.close()


    # mymodule > views > templates
    floderProjektu_views_templates = os.path.join(floderProjektu_views, 'templates')
    try:
        os.mkdir(floderProjektu_views_templates)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_templates , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > admin
    floderProjektu_views_templates_admin = os.path.join(floderProjektu_views_templates, 'admin')
    try:
        os.mkdir(floderProjektu_views_templates_admin)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_templates_admin , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > admin > configure.tpl
    floderProjektu_views_templates_admin_configureTpl = os.path.join(floderProjektu_views_templates_admin, 'configure.tpl') 
    file = open(floderProjektu_views_templates_admin_configureTpl, mode="w+", encoding="utf-8")
    file.write(f'''
<form method="POST">
    <div class="panel">
        <div class="panel-heading">
            {{l s='Tekst w belce tytułowej' mod='{nazwa_maleLitery}'}} 
        </div>

        <div class="panel-body">
            <label for="print"> Co wyswietlić? </label>

            <input type="text" name="print" id="print" class="form-control" value="{{$MULTIPURPOSE_STR}}"/>
        </div>

        <div class="panel-footer">
            <button type="submit" name="{nazwa_maleLitery}SaveSesting" class="btn btn-default pull-right" >
                <i class="process-icon-save"></i>
                Zapisz
            </button>
        </div>
    </div>
</form>
''')
    file.close()


    if 'frontController' in CG:
        # mymodule > views > templates > admin > origin
        floderProjektu_views_templates_admin_origin = os.path.join(floderProjektu_views_templates_admin, 'origin')
        try:
            os.mkdir(floderProjektu_views_templates_admin_origin)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , floderProjektu_views_templates_admin_origin , "FAILD creation")
            return
        else:
            pass


        # mymodule > views > templates > admin > origin > origin.tpl
        floderProjektu_views_templates_admin_origin_originTpl = os.path.join(floderProjektu_views_templates_admin_origin, 'configure.tpl') 
        file = open(floderProjektu_views_templates_admin_origin_originTpl, mode="w+", encoding="utf-8")
        file.write(f'''
<div class="panel">
    <div class="panel-heading">
        Origin configuration
    </div>
    <div class="panel-body">
        Wzór kontrolera admin origin dla modułu multipurpose
    </div>
</div>
''')
        file.close()


    # mymodule > views > templates > front
    floderProjektu_views_templates_front = os.path.join(floderProjektu_views_templates, 'front')
    try:
        os.mkdir(floderProjektu_views_templates_front)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_templates_front , "FAILD creation")
        return
    else:
        pass

    if 'frontController' in CG:
        # mymodule > views > templates > front > task.tpl
        floderProjektu_views_templates_front_taskTpl = os.path.join(floderProjektu_views_templates_front, 'home.tpl') 
        file = open(floderProjektu_views_templates_front_taskTpl, mode="w+", encoding="utf-8")
        file.write(f'''
{{* Na treść modułu można wejść przez link: /module/{nazwa_maleLitery}/task *}}
{{extends file="page.tpl"}}
{{block name="content"}}
    <ul>
        <li>
            Nazwa sklepu:&nbsp;{{$shop_name}}
        </li>
        <li>
            Liczba produktów w bazie:&nbsp;{{$nb_product}}
        </li>
        <li>
            Kategorie:
            <ul>
                <li>
                    {{foreach from=$categories item=item }}
                        <li style='padding-left: 20px;'>  {{$item['name']}} </li>
                    {{/foreach}}
                </li>
            </ul>
        </li>
        <li>
            Producenci:
            <ul>
                <li>
                    {{* {{$manufacturer['name']}}  wywołuje bląd gdy nie ma wprowadzonych producentów *}} 
                </li>
            </ul>
        </li>
    </ul>
{{/block}}
''')
        file.close()



    # mymodule > views > templates > hook
    floderProjektu_views_templates_hook = os.path.join(floderProjektu_views_templates, 'hook')
    try:
        os.mkdir(floderProjektu_views_templates_hook)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , floderProjektu_views_templates_hook , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > hook > configure.tpl
    floderProjektu_views_templates_hook_homeTpl = os.path.join(floderProjektu_views_templates_hook, 'home.tpl') 
    file = open(floderProjektu_views_templates_hook_homeTpl, mode="w+", encoding="utf-8")
    file.write(f'''
<div class="row">
    <div class="col-lg-12">
        <label class="notice"> {{${nazwa_wielkieLitery}_STR}} <label>
        <img src="http://via.placeholder.com/1024x240" class="{nazwa_maleLitery}-img" />
    </div>
</div>''')
    file.close()




    print(f"Tworzenie {nazwaModulu} ukończone pomyslnie")


#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------

coGenerowac = (              # niepotrzebne zakomentuj
   'hookDisplayHome',
   'frontController',        # kontroler wyświetlający ilość produktów w bazie
   'wlasna_tabela_sql',          # przy instalacji modulu, tworzy tabele. Przy odinstalowaniu - kasuje ją.
)

generuj("Wtyczka_Karola", coGenerowac)