import { IBook } from "../types/IBook";
import BookList from "../Components/BookList";

interface Props {
  books: IBook[];
}

function Dashboard({ books }: Props) {
  return <BookList books={books} />;
}

export default Dashboard;
