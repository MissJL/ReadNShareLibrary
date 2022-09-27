import styled from "styled-components";
import { IBook } from "../types/IBook";

function Book({ id, title, author, category, pages, imgUrl }: IBook) {
  return (
    <Container key={id}>
      <>
        <Img src={imgUrl} />
        <Button>Borrow</Button>
        {title}
        {author.name}
        {category.genre}
        {pages}
      </>
    </Container>
  );
}

export default Book;

const Container = styled.div`
  display: grid;
  grid-template-column: 1fr, 1fr, 1fr;
  grid-template-rows: 1fr, 1fr, 1fr;
  width: 200px;
`;

const Button = styled.button`
  border-radius: 18px;
  border: 1px solid black;
  size: 42px;
`;

const Img = styled.img`
  width: 70px;
  height: 100px;
`;
