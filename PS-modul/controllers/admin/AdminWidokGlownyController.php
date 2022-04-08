<?php

class AdminWidokGlownyController extends ModuleAdminController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function init()
    {
        parent::init();
        $this->bootstrap = true;

        //$products = Product::getProducts($this->context->language->id, 0, 100, 'id_product', 'ASC');
        // $produkty = Db::getInstance()->executeS(
        //     'SELECT pl.name, ROUND(pr.price, 2) 
        //     FROM ps_product pr 
        //     LEFT JOIN ps_product_lang pl ON (pr.id_product = pl.id_product) '            
        // )

        $produkty = Db::getInstance()->executeS(
            'SELECT distinct pr.id_product, pl.`name`, ROUND(pr.price, 2) as price
            FROM ps_product pr
            LEFT JOIN ps_product_lang pl ON (pr.id_product = pl.id_product)
            '
        );

        $this->context->smarty->assign(array(
            'karol_1' => 'Tekst ze smarta, część init',
            'liczba_produktow' => Db::getInstance()->getValue('SELECT COUNT(*) FROM `' . _DB_PREFIX_ . 'product`'),

            'categories' => Db::getInstance()->executeS('
                SELECT `name` 
                FROM `' . _DB_PREFIX_ . 'category_lang` t
                WHERE `id_lang` = ' . (int) $this->context->language->id . '
            '), 

            // 'products3' => Tools::jsonEncode($produkty),
            'produkty' => $produkty,
           // 'products3' => 'produkty',

        ));
        $this->context->smarty->assign('karol_2', 'Tekst ze smarta 9');
    }

    public function initContent()
    {
        parent::initContent();
    }

    public function getContent()
    {
//        $this->context->smarty->assign('karol_2', 'Tekst ze smarta 9'); //nie działa w tym miejscu

    }   

    public function renderList()
    {
        return $this->module->display(_PS_MODULE_DIR_.'mi_ceny', 'views/templates/admin/widok_glowny.tpl');
    }
}