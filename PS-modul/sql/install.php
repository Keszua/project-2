<?php
$sqls = array();

$sqls[] = 'CREATE TABLE IF NOT EXISTS  `' . _DB_PREFIX_ . 'mi_ceny_one` (
    `id_multione` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `description` TEXT,
    PRIMARY KEY (`id_multione`)
) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=UTF8;';

$sqls[] = 'CREATE TABLE IF NOT EXISTS  `' . _DB_PREFIX_ . 'mi_ceny_two` (
    `id_multitwo` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `description` TEXT,
    PRIMARY KEY (`id_multitwo`)
) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=UTF8;';

foreach ($sqls as $query) {
    if (Db::getInstance()->execute($query) == false) {
        return false;
    }
}
