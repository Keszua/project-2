
<?php

class Mi_cenyTaskModuleFrontController extends ModuleFrontController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function init()
    {
        parent::init();
    }

    public function initContent()
    {
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
        $this->setTemplate('module:mi_ceny/views/templates/front/task.tpl');
    } 

    public function setMedia()
    {
        parent::setMedia();
        $this->addJquery();
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/jquery.dataTables.js');
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/dataTables.bootstrap.js');
        $this->addJS(_PS_MODULE_DIR_.'/multipurpose/views/js/task.js'); 

        $this->addCSS(_PS_MODULE_DIR_.'/multipurpose/views/css/jquery.dataTables.css');
        $this->addCSS(_PS_MODULE_DIR_.'/multipurpose/views/css/dataTables.bootstrap.css');
    }

}        
