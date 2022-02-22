

import os                    # importing os module

def generuj(nazwaModulu):
    nazwa_maleLitery = nazwaModulu.lower()
    nazwa_pierwszaWielka = nazwaModulu[0].capitalize() + nazwaModulu[1:]

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
    f_config.write(f'''
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
       return (
            parent::install()
            && $this->registerHook('displayHome')  # podpiecie sie pod hook na stronie glonej
        ); 
    }}

    public function uninstall()
    {{
        return (
            parent::uninstall() 
            // && Configuration::deleteByName('MYMODULE_NAME')
        );
    }}

    public function hookDisplayHome()	# wykonanie hoka, nazwa musi zaczynać się od hook i nazwa wcześniej zarejstrowanego hooka
    {{
        $this->context->controller->addCSS($this->_path . 'views/css/{nazwa_maleLitery}.css', 'all'); # lub $this->context->controller->addCSS(array($this->_path . 'views/css/multipurpose.css'));
        $this->context->controller->addJS($this->_path . 'views/js/{nazwa_maleLitery}.js', 'all');

        //return "Jakiś tekst wstawiony recznie... ";
		return $this->display(__FILE__, 'views/templates/hook/home.tpl'); # wyświetl zawartość .tpl
    }}

    public function getContent()  // tutaj zawartość, po wciśnięciu klawisza "konfiguruj"
    {{
		if(Tools::isSubmit('save{nazwa_maleLitery}sesting')) {{ //to się wywoła po naciśnieciu klawisza "Zapisz" (w Konfiguruj)
            $name = Tools::getValue('print');
            Configuration::updateValue('MULTIPURPOSE_STR', $name);
        }}
        
        $this->context->smarty->assign(array(  //wysłanie z powrotem do szablony konfiguracji
            'MULTIPURPOSE_STR' => Configuration::get('MULTIPURPOSE_STR')
        ));
		
        return $this->display(__FILE__, 'views/templates/admin/configure.tpl');
    }}
	


}}

''')
    f_config.close()  


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


    # mymodule > src
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
}})''')
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
            Hejka
            {{l s='Configuration' mod='{nazwa_maleLitery}'}} 
        </div>

        <div class="panel-body">
            <label for="print"> Co wyswietlić? </label>

            <input type="text" name="print" id="print" class=""form-control value="{{$MULTIPURPOSE_STR}}"/>
        </div>

        <div class="panel-footer">
            <button type="submit" name="save{nazwa_maleLitery}sesting" class="btn btn-default pull-right" >
                <i class="process-icon-save"></i>
                Zapisz
            </button>
        </div>
    </div>
</form>
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
        <img src="http://via.placeholder.com/1920x350" class="{nazwa_maleLitery}-img" />
    </div>
</div>''')
    file.close()




    print(f"Tworzenie {nazwaModulu} ukończone pomyslnie")


generuj("Wtyczka_Karola")