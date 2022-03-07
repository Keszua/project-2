

import os                    # importing os module

def generuj(nazwaModulu, CG):
    nazwa_maleLitery = nazwaModulu.lower()
    nazwa_pierwszaWielka = nazwaModulu[0].capitalize() + nazwaModulu[1:]
    nazwa_wielkieLitery = nazwaModulu.upper()

    path_cwd = os.getcwd()
    folderProjektu = os.path.join(path_cwd, nazwa_maleLitery) 


    # stwórz folder z nazwa projektu --------------------------------------------------------------
    try:
        os.mkdir(folderProjektu)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , nazwa_maleLitery , "FAILD creation")
        return
    else:
        print ("Directory " , nazwa_maleLitery , "Successfully created the directory")

    # stwórz pliki podstawowe ---------------------------------------------------------------------
    folderProjektu_configXml = os.path.join(folderProjektu, 'config.xml') 
    f_config = open(folderProjektu_configXml, mode="a+", encoding="utf-8")
    f_config.close()  

    # logo ----------------------------------------------------------------------------------------
    try:
        os.popen(f'copy .\\Dodatki\\logo.png .\\{nazwa_maleLitery}\\logo.png')
    except FileExistsError:
        pass
    except OSError:
        print ("Logo - FAILD creation")
        return
    else:
        pass


    folderProjektu_nazwaModulu = os.path.join(folderProjektu, nazwa_maleLitery+'.php') 
    f_config = open(folderProjektu_nazwaModulu, mode="w+", encoding="utf-8")

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
            && $this->registerHook('header')     // hyba tylko po to, żeby załadować css i js
            { "&& $this->registerHook('displayHome')" if "hookDisplayHome" in CG else ""}
            { "&& $this->registerHook('displayAfterDescription')" if 'wlasny_hook' in CG else ""}
            { "&& $this->createTabLink()" if "frontController" in CG else ""}
        ); 
    }}

    public function uninstall()
    {{
       { "include_once($this->local_path.'sql/uninstall.php');" if "wlasna_tabela_sql" in CG else ""}
        return (
            parent::uninstall() 
            && Configuration::deleteByName('MYMODULE_NAME')
        );
    }}

    public function hookHeader()
    {{
    '''
    if 'uzyj_ajax' in CG:
        zawartoscPliku += '''
        Media::addJsDef(array(
            'mp_ajax' => $this->_path.'/ajax.php'
        )); '''
    zawartoscPliku += f'''
        $this->context->controller->addCSS($this->_path . 'views/css/{nazwa_maleLitery}.css', 'all'); # lub $this->context->controller->addCSS(array($this->_path . 'views/css/multipurpose.css'));
        $this->context->controller->addJS($this->_path . 'views/js/{nazwa_maleLitery}.js', 'all');
    }}
    '''

    if 'hookDisplayHome' in CG:
        zawartoscPliku += f'''
    public function hookDisplayHome()	# wykonanie hoka, nazwa musi zaczynać się od hook i nazwa wcześniej zarejstrowanego hooka 
    {{
        $this->context->smarty->assign(array(
            '{nazwa_wielkieLitery}_STR' => Configuration::get('{nazwa_wielkieLitery}_STR')
        ));

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
            {"$this->sendTestEmail(Tools::getValue('customer_email'));" if "wyslij_maila" in CG else ""}
        }}\n
        if (Tools::isSubmit('submit' . $this->name)) {{ //ten if wykona się tylko, gdy formularz się załaduje \n}}\n
        {"\n$this->generateAdminToken();" if "pobieranie_tokenu_sesji" in CG else ""}
'''
    if 'wyswietl_liste_obrakow' in CG:
        zawartoscPliku += '''
        $products = Product::getProducts($this->context->language->id, 0, 100, 'id_product', 'ASC');
        $images_array = array();
        $link = new Link;
        foreach($products as $p) {
            $images = Image::getImages($this->context->language->id, $p['id_product']);
            $name = Db::getInstance()->getValue(
               'SELECT `link_rewrite` 
                FROM `'._DB_PREFIX_.'product_lang` 
                WHERE `id_product`='.(int)$p['id_product'].' AND `id_lang`='.(int)$this->context->language->id.'  ');
            // echo '<pre>'; print_r($name); die;\n  // odkomentuj to, aby sprawdzić czy prawidłowo pobrała się liata obrazków
            foreach($images as $i) {
                $images_array[] = $link->getImageLink($name, $i['id_image'], 'home_default');
            }
        }
'''
    zawartoscPliku += f'''
        $this->context->smarty->assign(array(  //wysłanie z powrotem do szablonu konfiguracji
            '{nazwa_wielkieLitery}_STR' => Configuration::get('{nazwa_wielkieLitery}_STR'),
            {"'token' => $this->generateAdminToken()," if "pobieranie_tokenu_sesji" in CG else ""}
            {"'images_array' => $images_array," if "wyswietl_liste_obrakow" in CG else ""}
        ));\n
        return $this->display(__FILE__, 'views/templates/admin/configure.tpl');
    }}
'''

    if 'frontController' in CG:
        zawartoscPliku += f'''
    // Na treść kontrolera można wejść przez link: /module/{nazwa_maleLitery}/task
    public function createTabLink()
    {{\n\t\t$tab = new Tab;
        foreach (Language::getLanguages(false) as $language) {{
            $tab->name[$language['id_lang']] = $this->l('Origin');
        }}
        $tab->class_name = 'AdminOrigin'; \n\t\t$tab->module = $this->name;
        $tab->id_parent = 0;
        $tab->add(); \n
        return true;
    }}
'''

    if 'pobieranie_tokenu_sesji' in CG:
        zawartoscPliku += f'''
    public function generateAdminToken()
    {{
        $cookie = new Cookie('psAdmin');
        $id_employee = $cookie->__get('id_employee');
        $controller = 'AdminModules';
        $id_class = Tab::getIdFromClassName($controller); \n
        return Tools::getAdminToken($controller.$id_class.$id_employee);
    }}
'''

    if 'uzyj_ajax' in CG:
        zawartoscPliku += f'''
    public function getProductsByCategoryID($id_category)
    {{
        $obj_cat = new Category($id_category, $this->context->language->id);
        $products = $obj_cat->getProducts($this->context->language->id, 0, 1000);
        $html = '<ol>';
        foreach($products as $pr) {{
            $html .= '<li>'.$pr['name'].'</li>';
        }}
        $html .= '</ol>';
        return $html;
    }} \n
    public function loadProducts($start = 0, $length = 5, $sortby = 'id_product', $sortway = 'ASC')
    {{
        $nb = Db::getInstance()->getValue('SELECT COUNT(*) FROM `' . _DB_PREFIX_ .'product`');
        $data = Db::getInstance()->executeS(
            'SELECT p.`id_product`, pl.`name`, p.`price`
            FROM `' . _DB_PREFIX_ .'product` p
            LEFT JOIN `' . _DB_PREFIX_ .'product_lang` pl
                ON (p.`id_product` = pl.`id_product`)
            WHERE pl.`id_lang` = '.(int)$this->context->language->id.'
            ORDER BY `'.$sortby.'` '.$sortway.'
            LIMIT '.(int)$start.', '.(int)$length, true, false ); \n
        return array(
            'recordsTotal' => $nb,
            'recordsFiltered' => $nb,
            'data' => $data,
        );
    }}
'''

    if "wyslij_maila" in CG:
        zawartoscPliku += f'''
    public function sendTestEmail($email)
    {{
        Mail::send(
            $this->context->language->id,
            'test',                              // email template file to be use
            'Temat maila testowego',             // Temat
            array(
                '{{datetime}}' => date('Y-m-d H:i:s'),
                '{{message}}' => 'Hello world',     // email content
            ),
            $email,                              //receiver email address (wpisany jednorazowo w pole)
            'prestaShop User',                   //receiver name
            Configuration::get('PS_SHOP_EMAIL'), //from email address
            Configuration::get('PS_SHOP_NAME'),  //from name
            null,                                //file attachment
            null,                                //mode smtp
            dirname(__file__).'/mails'           //custom template path //_PS_MODULE_DIR_ .'multipurpose/mails' //custom template path
            
        );
    }}
'''

    if 'wlasny_hook' in CG:
        zawartoscPliku += '''
    public function hookDisplayAfterDescription()
    {
        return "To jest własny hook z modułu MULTIPURPOSE";
    }
    // własny hook można podpiąć w dowolne miejsce, np: w kartę produktu 
    //   /themes/classic/templates/catalog/product.tpl
    //      <div class="product-information">
    //        {block name='product_description_short'}
    // TU ->    {hook h='displayAfterDescription'}
    //          <div id="product-description-short-{$product.id}" class="product-description">{$product.description_short nofilter}</div>
    //        {/block}
'''

    zawartoscPliku += f'''
}}
'''


    f_config.write(zawartoscPliku)
    f_config.close()


    if 'uzyj_ajax' in CG :
        folderProjektu_nazwaModulu = os.path.join(folderProjektu, 'ajax.php') 
        file = open(folderProjektu_nazwaModulu, mode="w+", encoding="utf-8")
        file.write(f'''
<?php
require_once('../../config/config.inc.php'); \nrequire_once('../../init.php');
//echo rand(1000,2000);
$obj_mp = Module::getInstanceByName('{nazwa_maleLitery}');\n
switch(Tools::getValue('action'))
{{
    case 'ptable':
        $order = Tools::getValue('order', array());
        $columns = Tools::getValue('columns', array());
        $sortway = $order[0]['dir'];
        $sortby = $columns[$order[0]['column']]['data'];
        echo Tools::jsonEncode($obj_mp->loadProducts(Tools::getValue('start', 0), Tools::getValue('length', 5), $sortby, $sortway));
        break;

    default:
        try {{
            echo $obj_mp->getProductsByCategoryID(Tools::getValue('id_category'));
        }} catch (Exception $e) {{
            echo 'Brak kategorii';
        }}
        break;
}}
''')
        file.close()




    # mymodule > config
    folderProjektu_config = os.path.join(folderProjektu, 'config')
    try:
        os.mkdir(folderProjektu_config)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_config , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin
    folderProjektu_config_admin = os.path.join(folderProjektu_config, 'admin')
    try:
        os.mkdir(folderProjektu_config_admin)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_config_admin , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin > services.yml
    folderProjektu_config_admin_servicesYml = os.path.join(folderProjektu_config_admin, 'services.yml') 
    f_services = open(folderProjektu_config_admin_servicesYml, mode="a+", encoding="utf-8")
    f_services.close()  


    # mymodule > config > front
    folderProjektu_config_front = os.path.join(folderProjektu_config, 'front')
    try:
        os.mkdir(folderProjektu_config_front)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_config_front , "FAILD creation")
        return
    else:
        pass

    # mymodule > config > admin > services.yml
    folderProjektu_config_front_servicesYml = os.path.join(folderProjektu_config_front, 'services.yml') 
    f_services = open(folderProjektu_config_front_servicesYml, mode="a+", encoding="utf-8")
    f_services.close()


    # mymodule > controllers ----------------------------------------------------------------------
    folderProjektu_controllers = os.path.join(folderProjektu, 'controllers')
    try:
        os.mkdir(folderProjektu_controllers)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_controllers , "FAILD creation")
        return
    else:
        pass


    if 'frontController' in CG:
        # mymodule > controllers > admin
        folderProjektu_controllers_admin = os.path.join(folderProjektu_controllers, 'admin')
        try:
            os.mkdir(folderProjektu_controllers_admin)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_controllers_admin , "FAILD creation")
            return
        else:
            pass


        # mymodule > controllers > admin > AdminOriginController.php
        folderProjektu_controllers_admin_AdminOriginControllerPhp = os.path.join(folderProjektu_controllers_admin, 'AdminOriginController.php') 
        f_controller = open(folderProjektu_controllers_admin_AdminOriginControllerPhp, mode="a+", encoding="utf-8")
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
        folderProjektu_controllers_front = os.path.join(folderProjektu_controllers, 'admin')
        try:
            os.mkdir(folderProjektu_controllers_front)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_controllers_front , "FAILD creation")
            return
        else:
            pass

        # mymodule > controllers > front > task.php
        folderProjektu_controllers_front_taskPhp = os.path.join(folderProjektu_controllers_front, 'task.php') 
        f_controller = open(folderProjektu_controllers_front_taskPhp, mode="a+", encoding="utf-8")
        zawartoscPliku = f'''
<?php

class {nazwa_pierwszaWielka}TaskModuleFrontController extends ModuleFrontController
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
                SELECT `id_category`, `name`
                FROM `' . _DB_PREFIX_ . 'category_lang` t
                WHERE `id_lang` = ' . (int) $this->context->language->id . '
            '), 
            'manufacturer' => Db::getInstance()->getRow('SELECT * FROM `' . _DB_PREFIX_ . 'manufacturer`'),
        ));
        $this->setTemplate('module:{nazwa_maleLitery}/views/templates/front/task.tpl');
    }} \n
    public function setMedia()
    {{
        parent::setMedia();
        $this->addJquery();
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/jquery.dataTables.js');
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/dataTables.bootstrap.js');
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/task.js'); \n
        $this->addCSS(_PS_MODULE_DIR_.'/multipurpose/views/css/jquery.dataTables.css');
        $this->addCSS(_PS_MODULE_DIR_.'/multipurpose/views/css/dataTables.bootstrap.css');
    }}\n
}}        
'''
        f_controller.write(zawartoscPliku)
        f_controller.close()


    if "wyslij_maila" in CG:
        folderProjektu_mail = os.path.join(folderProjektu, 'mail')
        try:
            os.mkdir(folderProjektu_mail)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_mail , "FAILD creation")
            return
        else:
            pass

        folderProjektu_mail_en = os.path.join(folderProjektu_mail, 'en')
        try:
            os.mkdir(folderProjektu_mail_en)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_mail_en , "FAILD creation")
            return
        else:
            pass

        folderProjektu_mail_pl = os.path.join(folderProjektu_mail, 'pl')
        try:
            os.mkdir(folderProjektu_mail_pl)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_mail_pl , "FAILD creation")
            return
        else:
            pass

        folderProjektu_mail_en_testHtml = os.path.join(folderProjektu_mail_en, 'test.html') 
        file = open(folderProjektu_mail_en_testHtml, mode="w+", encoding="utf-8")
        file.write(f'''To jest mail EN od PrestaShop wysłany dnia: {{datetime}} /n {{message}}  /n plik test.html''')
        file.close()

        folderProjektu_mail_en_testTxt = os.path.join(folderProjektu_mail_en, 'test.txt') 
        file = open(folderProjektu_mail_en_testTxt, mode="w+", encoding="utf-8")
        file.write(f'''To jest mail EN od PrestaShop wysłany dnia: {{datetime}} /n {{message}}  /n plik test.txt''')
        file.close()

        folderProjektu_mail_pl_testHtml = os.path.join(folderProjektu_mail_pl, 'test.html') 
        file = open(folderProjektu_mail_pl_testHtml, mode="w+", encoding="utf-8")
        file.write(f'''To jest mail PL od PrestaShop wysłany dnia: {{datetime}} /n {{message}} /n plik test.html''')
        file.close()

        folderProjektu_mail_pl_testTxt = os.path.join(folderProjektu_mail_pl, 'test.txt') 
        file = open(folderProjektu_mail_pl_testTxt, mode="w+", encoding="utf-8")
        file.write(f'''To jest mail PL od PrestaShop wysłany dnia: {{datetime}} /n {{message}} /n plik test.txt ''')
        file.close()



    # mymodule > override -------------------------------------------------------------------------
    if 'dodaj_override_controller' in CG:
        folderProjektu_override = os.path.join(folderProjektu, 'override')
        try:
            os.mkdir(folderProjektu_override)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_override , "FAILD creation")
            return
        else:
            pass


        folderProjektu_override_controllers = os.path.join(folderProjektu_override, 'controllers')
        try:
            os.mkdir(folderProjektu_override_controllers)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_override_controllers , "FAILD creation")
            return
        else:
            pass


        folderProjektu_override_controllers_front = os.path.join(folderProjektu_override_controllers, 'front')
        try:
            os.mkdir(folderProjektu_override_controllers_front)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_override_controllers_front , "FAILD creation")
            return
        else:
            pass

        folderProjektu_override_controllers_front_CmsControllerPhp = os.path.join(folderProjektu_override_controllers_front, 'CmsController.php')

        file = open(folderProjektu_override_controllers_front_CmsControllerPhp, mode="w+", encoding="utf-8")
        file.write('''<?php\n\nclass CmsController extends CmsControllerCore\n{\n\n\tpublic function initContent()\n\t{
        parent::initContent();\n
        if ($this->assignCase == 1) {
            $cmsVar = $this->objectPresenter->present($this->cms);\n
            $filteredCmsContent = Hook::exec(
                'filterCmsContent',
                ['object' => $cmsVar],
                $id_module = null,
                $array_return = false,
                $check_exceptions = true,
                $use_push = false,
                $id_shop = null,
                $chain = true
            );
            if (!empty($filteredCmsContent['object'])) {
                $cmsVar = $filteredCmsContent['object'];
            } \n
            Tools::dieObject($cmsVar);
            $cmsVar['content'] = str_replace('Shipments and returns', "Pan Janek X", $cmsVar['content'] );
            //$cmsVar['content'] = str_replace(array('Shipments and returns', 'Jakiś tekst z tablicy'), "Pan Janek X", $cmsVar['content'] );\n
            $this->context->smarty->assign([
                'cms' => $cmsVar,
            ]);\n
            if ($this->cms->indexation == 0) {
                $this->context->smarty->assign('nobots', true);
            }\n
            $this->setTemplate(
                'cms/page',
                ['entity' => 'cms', 'id' => $this->cms->id]
            );
        } elseif ($this->assignCase == 2) {
            $cmsCategoryVar = $this->getTemplateVarCategoryCms();\n
            $filteredCmsCategoryContent = Hook::exec(
                'filterCmsCategoryContent',
                ['object' => $cmsCategoryVar],
                $id_module = null,
                $array_return = false,
                $check_exceptions = true,
                $use_push = false,
                $id_shop = null,
                $chain = true
            );
            if (!empty($filteredCmsCategoryContent['object'])) {
                $cmsCategoryVar = $filteredCmsCategoryContent['object'];
            }\n
            $this->context->smarty->assign($cmsCategoryVar);
            $this->setTemplate('cms/category');
        }\n\t}\n}        
        ''')
        file.close()


    if 'wlasna_tabela_sql' in CG:
        # mymodule > sql --------------------------------------------------------------------------
        folderProjektu_sql = os.path.join(folderProjektu, 'sql')
        try:
            os.mkdir(folderProjektu_sql)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_sql , "FAILD creation")
            return
        else:
            pass

        # mymodule > sql > install.php
        folderProjektu_sql_installPhp = os.path.join(folderProjektu_sql, 'install.php') 
        f_install = open(folderProjektu_sql_installPhp, mode="w+", encoding="utf-8")
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
        folderProjektu_sql_uninstallPhp = os.path.join(folderProjektu_sql, 'uninstall.php') 
        f_uninstall = open(folderProjektu_sql_uninstallPhp, mode="w+", encoding="utf-8")
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
    folderProjektu_src = os.path.join(folderProjektu, 'src')
    try:
        os.mkdir(folderProjektu_src)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_src , "FAILD creation")
        return
    else:
        pass


    folderProjektu_translations = os.path.join(folderProjektu, 'translations')
    try:
        os.mkdir(folderProjektu_translations)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_translations , "FAILD creation")
        return
    else:
        pass


    folderProjektu_upgrade = os.path.join(folderProjektu, 'upgrade')
    try:
        os.mkdir(folderProjektu_upgrade)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_upgrade , "FAILD creation")
        return
    else:
        pass


    folderProjektu_vendor = os.path.join(folderProjektu, 'vendor')
    try:
        os.mkdir(folderProjektu_vendor)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_vendor , "FAILD creation")
        return
    else:
        pass


    # mymodule > views ----------------------------------------------------------------------------
    folderProjektu_views = os.path.join(folderProjektu, 'views')
    try:
        os.mkdir(folderProjektu_views)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > css
    folderProjektu_views_css = os.path.join(folderProjektu_views, 'css')
    try:
        os.mkdir(folderProjektu_views_css)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_css , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > css > mymodule.css
    folderProjektu_views_css_mymoduleCss = os.path.join(folderProjektu_views_css, nazwa_maleLitery+'.css') 
    f_services = open(folderProjektu_views_css_mymoduleCss, mode="w+", encoding="utf-8")
    
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
    folderProjektu_views_img = os.path.join(folderProjektu_views, 'img')
    try:
        os.mkdir(folderProjektu_views_img)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_img , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > js
    folderProjektu_views_js = os.path.join(folderProjektu_views, 'js')
    try:
        os.mkdir(folderProjektu_views_js)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_js , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > js > mymodule.js
    folderProjektu_views_js_mymoduleJs = os.path.join(folderProjektu_views_js, nazwa_maleLitery+'.js') 
    f_services = open(folderProjektu_views_js_mymoduleJs, mode="w+", encoding="utf-8")
    content = f'''$(document).ready( function() {{
    alert("komuniakt z pliku: {nazwa_maleLitery}/views/js/{nazwa_maleLitery}.js");
    '''

    if 'uzyj_ajax' in CG :
        content += '''
    $.ajax({
        url:mp_ajax,
        data:{

        },
        method:'POST',
        success:function(data){
            $('#random_number').html(data);
        }
    }); \n
    $('#cats').change(function(){
        $.ajax({
            url:mp_ajax,
            data:{
                id_category:$(this).val()
            },
            method:'POST',
            success:function(data){
                $('.ajax_products').html(data);
            }
        });
    });
'''

    content += '/n})'
    f_services.write(content)
    f_services.close()

    if 'uzyj_ajax' in CG :
        # kopia plików dla tabeli:
        try:
            os.popen(f'copy .\\Dodatki\\dataTables.bootstrap.css .\\{nazwa_maleLitery}\\views\\css\\dataTables.bootstrap.css')
            os.popen(f'copy .\\Dodatki\\jquery.dataTables.css .\\{nazwa_maleLitery}\\views\\css\\jquery.dataTables.css')

            os.popen(f'copy .\\Dodatki\\dataTables.bootstrap.js .\\{nazwa_maleLitery}\\views\\js\\dataTables.bootstrap.js')
            os.popen(f'copy .\\Dodatki\\jquery.dataTables.js .\\{nazwa_maleLitery}\\views\\js\\jquery.dataTables.js')

            os.popen(f'copy .\\Dodatki\\images .\\{nazwa_maleLitery}\\views\\img')
        except FileExistsError:
            pass
        except OSError:
            print ("copy dataTables - FAILD creation")
            return
        else:
            pass

        # mymodule > views > js > task.js
        folderProjektu_views_js_taskJs = os.path.join(folderProjektu_views_js, 'task.js') 
        f_services = open(folderProjektu_views_js_taskJs, mode="w+", encoding="utf-8")
        f_services.write(f'''$(document).ready(function() {{
    $('#producttable').dataTable({{
        'processing':true,
        'serverSide':true,
        'iDisplayLength':5, // 'pageLength':50,
        'bLengthChange':false,
        'bFilter': false,
        'ajax':{{
            'url':mp_ajax + '?action=ptable'
        }},
        "columns":[
            {{"data":"id_product"}},
            {{"data":"name"}},
            {{"data":"price"}},
        ],
    }});
}});
'''            
        )
        f_services.close()


    # mymodule > views > templates
    folderProjektu_views_templates = os.path.join(folderProjektu_views, 'templates')
    try:
        os.mkdir(folderProjektu_views_templates)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_templates , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > admin
    folderProjektu_views_templates_admin = os.path.join(folderProjektu_views_templates, 'admin')
    try:
        os.mkdir(folderProjektu_views_templates_admin)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_templates_admin , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > admin > configure.tpl
    folderProjektu_views_templates_admin_configureTpl = os.path.join(folderProjektu_views_templates_admin, 'configure.tpl') 
    file = open(folderProjektu_views_templates_admin_configureTpl, mode="w+", encoding="utf-8")
    content = f'''
<form method="POST">
    <div class="panel">
        <div class="panel-heading">
            {{l s='Tekst w belce tytułowej' mod='{nazwa_maleLitery}'}} 
        </div> \n
        <div class="panel-body">
            <label for="print"> Co wyswietlić? </label>
            <input type="text" name="print" id="print" class="form-control" value="{{${nazwa_wielkieLitery}_STR}}"/>

            {'<br/>' if "wyslij_maila" in CG else ""}
            {'<label for="print"> Podaj mail, na który wysłać testową wiadomość: </label>' if "wyslij_maila" in CG else ""}
            {'<input type="text" name="customer_email" id="customer_email" class="form-control" value=""/>' if "wyslij_maila" in CG else ""}

            {'<br/>' if "pobieranie_tokenu_sesji" in CG else ""}
            {'<a class="btn btn-default" href="index.php?controller=AdminOrders&token={$token}" > {$token} </a>' if "pobieranie_tokenu_sesji" in CG else ""}
'''        
    if 'wyswietl_liste_obrakow' in CG:
        content += '''\t\t\t<br/>
            {foreach from=$images_array item=ia}
                <img src="//{$ia}" />
            {/foreach}
'''
    content += f'''
        </div> \n
        <div class="panel-footer">
            <button type="submit" name="{nazwa_maleLitery}SaveSesting" class="btn btn-default pull-right" >
                <i class="process-icon-save"></i>
                Zapisz
            </button>
        </div>
    </div>
</form>
'''
    file.write(content)
    file.close()


    if 'frontController' in CG:
        # mymodule > views > templates > admin > origin
        folderProjektu_views_templates_admin_origin = os.path.join(folderProjektu_views_templates_admin, 'origin')
        try:
            os.mkdir(folderProjektu_views_templates_admin_origin)
        except FileExistsError:
            pass
        except OSError:
            print ("Directory " , folderProjektu_views_templates_admin_origin , "FAILD creation")
            return
        else:
            pass


        # mymodule > views > templates > admin > origin > origin.tpl
        folderProjektu_views_templates_admin_origin_originTpl = os.path.join(folderProjektu_views_templates_admin_origin, 'origin.tpl') 
        file = open(folderProjektu_views_templates_admin_origin_originTpl, mode="w+", encoding="utf-8")
        file.write(f'''
<div class="panel">
    <div class="panel-heading">
        Origin configuration
    </div>
    <div class="panel-body">
        Wzór kontrolera admin origin dla modułu {nazwaModulu}<br/>
        Aby edytować, wejdz do pliku: {folderProjektu_views_templates_admin_origin_originTpl}
    </div>
</div>
''')
        file.close()


    # mymodule > views > templates > front
    folderProjektu_views_templates_front = os.path.join(folderProjektu_views_templates, 'front')
    try:
        os.mkdir(folderProjektu_views_templates_front)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_templates_front , "FAILD creation")
        return
    else:
        pass

    if 'frontController' in CG:
        # mymodule > views > templates > front > task.tpl
        folderProjektu_views_templates_front_taskTpl = os.path.join(folderProjektu_views_templates_front, 'home.tpl') 
        file = open(folderProjektu_views_templates_front_taskTpl, mode="w+", encoding="utf-8")
        contain = f'''
{{* Na treść kontrolera można wejść przez link: /module/{nazwa_maleLitery}/task *}}
{{* Aby edytować treś, wejdz na: {folderProjektu_views_templates_front_taskTpl} *}}
{{extends file="page.tpl"}}
{{block name="page_content_container"}}
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
'''
        if "uzyj_ajax" in CG:
            contain = f'''
    Przechwycone przez ajax: <label id="random_number"> </label>
    
    {{* Rozwiajana lista *}}
    <div class='container'>
        <select name="cats" id="cats"> 
            <option value="">{{l s='- Wybierz kategorie -' mod='{nazwa_maleLitery}'}}</option>
            {{if isset($categories) && $categories}}
                {{foreach from=$categories item=cat}}
                    <option value="{{$cat['id_category']}}"> {{$cat['name']}} </option>
                {{/foreach}}
            {{/if}}
        </select>

        <div class="ajax_products"> 
        </div>

        {{* Tabela z produktami *}}
        <table id="producttable" class="table table-hover">
            <thead>
                <tr>
                    <th>{{l s='ID' mod='multipurpose'}}</th>
                    <th>{{l s='Product' mod='multipurpose'}}</th>
                    <th>{{l s='Price' mod='multipurpose'}}</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

    </div>
'''

        contain = '''
{/block}
'''
        file.write(contain)
        file.close()



    # mymodule > views > templates > hook
    folderProjektu_views_templates_hook = os.path.join(folderProjektu_views_templates, 'hook')
    try:
        os.mkdir(folderProjektu_views_templates_hook)
    except FileExistsError:
        pass
    except OSError:
        print ("Directory " , folderProjektu_views_templates_hook , "FAILD creation")
        return
    else:
        pass


    # mymodule > views > templates > hook > configure.tpl
    folderProjektu_views_templates_hook_homeTpl = os.path.join(folderProjektu_views_templates_hook, 'home.tpl') 
    file = open(folderProjektu_views_templates_hook_homeTpl, mode="w+", encoding="utf-8")
    file.write(f'''
<div class="row">
    <div class="col-lg-12">
        <label class="notice"> {{${nazwa_wielkieLitery}_STR}} <label>
        <img src="http://via.placeholder.com/1024x240" class="{nazwa_maleLitery}-img" />
    </div>
</div>''')
    file.close()




    print(f'Tworzenie projektu "{nazwaModulu}" - ukończone pomyślnie.')


#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------

coGenerowac = (                   # niepotrzebne zakomentuj
    'hookDisplayHome',            # podpięcie przestrzeni, widocznej na stronie głownej
    #'frontController',            # kontroler wyświetlający ilość produktów w bazie
    #'wlasna_tabela_sql',          # przy instalacji modulu, tworzy tabele. Przy odinstalowaniu - kasuje ją.
    #'uzyj_ajax',                  # Jak stworzyć pole wyboru + interaktywną listę + tabela. W ajax.php wypisuje dane; w .js wywołuje POST, przechwytuje tą liczbę, podstawiam do kontrolki i wypisuje ja w task.tpl
    #'wlasny_hook',                # bardzo proty, własny hook podpięty do karty produktu (lub wszędzie gdzie chcesz)
    #'pobieranie_tokenu_sesji',    # W "konfiguruj": pobiera token i tworze przykładowy przycisk, przenoszacy do "SPRZEDAŻ > Zamowienia"
    #'wyslij_maila',               # W "konfiguruj": Wysyła testowego maila, po wpisaniu adresu w "Podaj maila"
    #'wyswietl_liste_obrakow',     # W "konfiguruj": Pobierze i wyświetli obrazki pobrane z produktów. (nic konkretnego, po prostu jak pobrac obrazki z bazy i wyśweitlić)
    #'dodaj_override_controller'   # przy instalacji dodaje plik do override/controllers/front/CmsController.php, który zastepuje tekst w "Delivery"
)

generuj("Wtyczka_Kuby", coGenerowac)