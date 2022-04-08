<?php
$sqls = array();

$sqls[] = 'DROP TABLE IF EXISTS  `' . _DB_PREFIX_ . 'mi_ceny_one`';
$sqls[] = 'DROP TABLE IF EXISTS  `' . _DB_PREFIX_ . 'mi_ceny_two`';

foreach ($sqls as $query) {
    if (Db::getInstance()->execute($query) == false) {
        return false;
    }
}
