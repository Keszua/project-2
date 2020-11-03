<?php

declare(strict_types=1);

namespace App\Model;

use App\Exception\StorageException;
use App\Exception\ConfigurationException;
use PDO;
use PDOException;


class AbstractModel
{
    protected PDO $conn;

    public function __construct(array $config)
    {

        try {
            $this->validateConfig($config);
            $this->createConn($config);
            //dump($this->conn);
        } catch(PDOException $e) {
            //dump('PDOException');
            throw new StorageException('Connection error');
            //exit('e');
        }
    }

    private function createConn(array $config): void
    {
        $dsn = "mysql:dbname={$config['database']};host={$config['host']}";
        $this->conn = new PDO(
            $dsn, 
            $config['user'], 
            $config['password'],
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]
        );
    }

    private function validateConfig(array $config): void
    {
        if(
            empty($config['database'])
            || empty($config['host']) 
            || empty($config['user']) 
            || empty($config['password']) 
            ) {
                throw new ConfigurationException('Storage configuration error');
            }
    }


}
