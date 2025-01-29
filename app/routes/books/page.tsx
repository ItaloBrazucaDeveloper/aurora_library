import { Button } from "@components/button";
import { DataTable } from "@components/data-table";
import { HeaderRoute } from "@components/header-route";

import { Input } from "@components/input";
import { Modal } from "@components/modal";
import { useModal } from "@hooks/useModal";

import { FilterIcon, SearchIcon, UserPlusIcon, XIcon } from "lucide-react";
import { Route } from "./+types/route";
import { BookForm } from "./books-form";

export function BooksPage({ loaderData }: Route.ComponentProps) {
  const modalCreateBookForm = useModal();
  const modalEditBookForm = useModal();
  const modalDeleteBook = useModal();

  function onActionsClicked(action: 'edit' | 'delete') {
    if (action === 'edit') {
      modalEditBookForm.openModal();
    } else if (action === 'delete') {
      modalDeleteBook.openModal();
    }
  }

  return (
    <>
      <HeaderRoute routeName="Livros" action="Listagem" />
      <div className="flex justify-between mx-2 mt-5">
        <Button
          icon={FilterIcon}
          variant="outlined"
          className="h-fit rounded-md"
        >
          Filtros
        </Button>

        <div className="flex gap-5">
          <Input.Container flowDirection="row" className="items-center gap-2">
            <Input.Label
              title="Buscar"
              className="outline outline-1 outline-zinc-300 p-1.5 rounded-full"
            >
              <SearchIcon className="size-5 text-zinc-600" />
            </Input.Label>
            <Input.Control
              type="text"
              placeholder="Buscar por cliente..."
              className="rounded-full px-4 focus:outline-2 focus:outline-zinc-300 w-64"
            />
          </Input.Container>
          <Button
            variant="dark"
            icon={UserPlusIcon}
            title="Cadastrar cliente"
            onClick={() => modalCreateBookForm.openModal()}
            className="p-4 absolute bottom-0 right-0 m-8 rounded-full md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
          >
            <span className="hidden md:block">Cadastrar cliente</span>
          </Button>
        </div>
      </div>

      <hr className="mx-2 my-2" />
      <DataTable
        onActionsClicked={onActionsClicked}
        headers={['Capa', 'Título', 'Autor/a', 'Editora', 'Ano', 'Ações']}
        data={loaderData?.books}
      />

      <Modal.Container open={modalCreateBookForm.isOpen}>
        <Modal.Content>
          <Modal.Header>
            <h2 className="text-2xl font-semibold text-zinc-800">
              Novo Livro
            </h2>
            <Button
              icon={XIcon}
              title="Fechar"
              onClick={() => modalCreateBookForm.closeModal()}
              className="p-0.5 size-5 bg-rose-300 rounded-full"
            />
          </Modal.Header>
          <BookForm />
          <Modal.Footer>
            <Button
              className="px-4"
              variant="outlined"
              onClick={() => modalCreateBookForm.closeModal()}
            >
              Cancelar
            </Button>
            <Button variant="dark" className="px-4">
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>

      <Modal.Container open={modalEditBookForm.isOpen}>
        <Modal.Content>
          <Modal.Header>
            <h2 className="text-2xl font-semibold text-zinc-800">
              Atualizar Livro
            </h2>
            <Button
              icon={XIcon}
              title="Fechar"
              onClick={() => modalEditBookForm.closeModal()}
              className="p-0.5 size-5 bg-rose-300 rounded-full"
            />
          </Modal.Header>
          <BookForm book={loaderData?.book} />
          <Modal.Footer>
            <Button
              className="px-4"
              variant="outlined"
              onClick={() => modalEditBookForm.closeModal()}
            >
              Cancelar
            </Button>
            <Button variant="dark" className="px-4">
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>

      <Modal.Container open={modalDeleteBook.isOpen}>
        <Modal.Content>
          <Modal.Header>
            Este livro será excluído. Deseja continuar?
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="outlined"
              className="px-4"
              onClick={() => modalDeleteBook.closeModal()}
            >
              Cancelar
            </Button>
            <Button className="px-4" variant="dark">
              Excluir
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </>
  );
}