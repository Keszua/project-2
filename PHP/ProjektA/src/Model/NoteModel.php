<?php

declare(strict_types=1);

namespace App\Model;

use App\Exception\StorageException;
use App\Exception\NotFoundException;
use PDO;
use Throwable;

class NoteModel extends AbstractModel implements ModelInterface
{

    public function get(int $id): array 
    {
        try {
            $query = "SELECT id, title, description, created FROM notes WHERE id = $id";
            $result = $this->conn->query($query);
            $note = $result->fetch(PDO::FETCH_ASSOC);
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się pobrać notatki', 400, $e);
        }

        if(!$note) {
            throw new NotFoundException("Nie ma notatki o id: $id");
            exit('Nie a takiej notatki');
        }
        return $note;
    }

    public function search(
        string $phrase,
        int $pageNumber, 
        int $pageSize, 
        string $sortBy, 
        string $sortOrder
    ): array
    {
        return $this->findBy( $phrase, $pageNumber, $pageSize, $sortBy, $sortOrder);
    }

    public function searchCount(string $phrase): int
    {
        try {
            $phrase = $this->conn->quote('%' . $phrase . '%', PDO::PARAM_STR);
            $query = "
              SELECT count(*) AS cn
              FROM notes
              WHERE title LIKE ($phrase)
            ";
            $result = $this->conn->query($query, PDO::FETCH_ASSOC);
            $result = $result->fetch();
            if ($result === false) {
                throw new StorageException('Błąd przy próbie pobrania ilości notatek', 400);
            }
            return (int) $result['cn'];
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się pobrać liczby notatek', 400, $e);
        }    
    }

    public function list(int $pageNumber, int $pageSize, string $sortBy, string $sortOrder): array 
    {
        return $this->findBy( null, $pageNumber, $pageSize, $sortBy, $sortOrder);
    }

    public function count(): int 
    {
        try {
            $query = "
              SELECT count(*) AS cn
              FROM notes
            ";
            $result = $this->conn->query($query, PDO::FETCH_ASSOC);
            $result = $result->fetch();
            if ($result === false) {
                throw new StorageException('Błąd przy próbie pobrania ilości notatek', 400);
            }
            return (int) $result['cn'];
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się pobrać liczby notatek', 400, $e);
        }
    }

    public function create(array $data): void 
    {
        try {
            $title = $this->conn->quote($data['title']);
            $description = $this->conn->quote($data['description']);
            $created = $this->conn->quote(date('Y-m-d H:i:s'));
            
            $query = " 
            INSERT INTO notes(title, description, created) 
            VALUES($title, $description, $created)
            "; //taki szablon do wprowadzania danych do bazy
            //dump($query);
            
            $this->conn->exec($query); //wysłanie polecenia zapisania
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się utworzyć nowej notatki!', 400, $e);
        }
    }
    
    public function edit(int $id, array $data): void
    {
        try {
            $title = $this->conn->quote($data['title']);
            $description = $this->conn->quote($data['description']);

            $query = "
                UPDATE notes
                SET title = $title, description = $description
                WHERE id = $id
            ";

            $this->conn->exec($query);
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się edytować notatki!', 400);
        }
    }

    public function delete(int $id): void
    {
        try {
            $query = "DELETE FROM notes WHERE id = $id LIMIT 1";
            $this->conn->exec($query);
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się usunąć notatki!', 400);
        }
    }

    private function findBy( 
        ?string $phrase,
        int $pageNumber, 
        int $pageSize, 
        string $sortBy, 
        string $sortOrder
    ): array
    {
        try {
            $limit = $pageSize;
            $offset = ($pageNumber -1) * $pageSize;  

            if(!in_array($sortBy, ['created', 'title'])) { //funkcja sprawdza, czy w daje tablicy znajdują się wypisane elementy
                $sortBy = 'title';
            }

            if(!in_array($sortOrder, ['asc', 'desc'])) {
                $sortOrder = 'desc';
            }

            //WHERE title LIKE ($phrase)
            $wherePart = '';
            if($phrase) {
                $phrase = $this->conn->quote('%' . $phrase . '%', PDO::PARAM_STR);
                $wherePart = "WHERE title LIKE ($phrase)";
            }

            $query = "
              SELECT id, title, description, created 
              FROM notes
              $wherePart
              ORDER BY $sortBy $sortOrder
              LIMIT $pageSize OFFSET $offset
            ";
            $result = $this->conn->query($query, PDO::FETCH_ASSOC);
            return $result->fetchAll();
        } catch (Throwable $e) {
            throw new StorageException('Nie udało się pobrać notatek', 400, $e);
        }

    }

}