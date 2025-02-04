import { Route } from "./+types/route";
import { BooksPage } from "./page";

export async function loader({ request, params }: Route.LoaderArgs) {
  console.dir(request.formData);
  return {
    books: [],
    book: {
      title: '',
      author: '',
      publisher: '',
      year: 0,
    }
  }
}

export default function Books(props: Route.ComponentProps) {
  return <BooksPage {...props} />;
}

export async function action({ request }: Route.ActionArgs) {
  return void 0;
}