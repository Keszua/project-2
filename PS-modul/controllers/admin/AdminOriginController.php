
<?php
class AdminOriginController extends ModuleAdminController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function init()
    {

        parent::init();
        Tools::redirect('https://www.google.com');
    }

    public function initContent()
    {
        parent::initContent();
        $this->context->smarty->assign(array(
        ));
        $this->setTemplate('origin.tpl');
    }

}


