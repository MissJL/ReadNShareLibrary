import { IBook } from "../types/IBook";
import Book from "./Book";

interface Props {
  books: IBook[];
}

function BookList({ books }: Props) {
  return (
    <span>
      {books.map((books) => (
        <Book {...books} />
      ))}
    </span>
  );
}

export default BookList;
