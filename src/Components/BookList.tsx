import styled from "styled-components";
import { IBook } from "../types/IBook";
import Book from "./Book";

interface Props {
  books: IBook[];
}

function BookList({ books }: Props) {
  return (
    <Container>
      {books.map((books) => (
        <Book {...books} key={books.id} />
      ))}
    </Container>
  );
}

export default BookList;

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;
