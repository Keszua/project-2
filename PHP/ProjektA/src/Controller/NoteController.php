<?php
declare(strict_types=1);

namespace App\Controller;

use App\Exception\ConfigurationException;
use App\Exception\NotFoundException;
use App\Request;

class NoteController extends AbstractController
{
    private const PAGE_SIZE = 5;

    public function createAction(): void
    {
        if($this->request->hasPost()) {
            $noteData = [
                'title' => $this->request->postParam('title'),
                'description' => $this->request->postParam('description'),
            ];
            $this->db->createNote($noteData);
            $this->redirect('/', ['before' => 'created']); //przekierowanie z parametrem
        }
        $this->view->render('create');
    }

    public function showAction(): void
    {
        $this->view->render(
            'show', 
            ['note' => $this->getNote()]
        );
    }

    public function listAction(): void
    {
        $pageNumber = (int) $this->request->getParam('page', 1);
        $pageSize = (int) $this->request->getParam('pagesize', self::PAGE_SIZE);
        $sortBy = $this->request->getParam('sortby', 'title');
        $sortOrder = $this->request->getParam('sortorder', 'desc');

        if(!in_array($pageSize, [5, 10, 15, 20])) {
             $pageSize = self::PAGE_SIZE;
        }

        $note = $this->db->getNotes($pageNumber, $pageSize, $sortBy, $sortOrder);
        $notesQuantity = $this->db->getCount();

        $this->view->render(
            'list', 
            [
                'page' => [
                    'number' => $pageNumber, 
                    'size' => $pageSize,
                    'pages' => (int) ceil($notesQuantity/$pageSize)
                ],
                'sort' => ['by' => $sortBy, 'order' => $sortOrder],
                'notes' => $note,
                'before' => $this->request->getParam('before'),
                'error' => $this->request->getParam('error'),
            ]
        );
    }

    public function editAction(): void
    {
        if($this->request->isPost()) {
            $noteId = (int) $this->request->postParam('id');

            $noteData = [
                'title' => $this->request->postParam('title'),
                'description' => $this->request->postParam('description'),
            ];

            $this->db->editNote($noteId, $noteData);
            $this->redirect('/', ['before' => 'edited']);
        }

        $this->view->render( 
            'edit', 
            ['note' => $this->getNote()] 
        ); 
    }

    public function deleteAction(): void
    {
        if($this->request->isPost()) {
            $noteId = (int) $this->request->postParam('id');
            $this->db->deleteNote($noteId);
            $this->redirect('/', ['before' => 'deleted']);
        }

        $this->view->render( 
            'delete', 
            ['note' => $this->getNote()] 
        ); 
    }

    final private function getNote(): array
    {
        $noteId = (int) $this->request->getParam('id');

        if(!$noteId) {
            $this->redirect('/', ['error' => 'missingNoteId']);
        }
        
        try {
            $note = $this->db->getNote($noteId);
        } catch (NotFoundException $e) {
            //Gdy notatka nie istnieje, to przekieruj na stronę główną z flagą błędu
            $this->redirect('/', ['error' => 'noteNotFound']);
        }

        return $note;
    }

}





