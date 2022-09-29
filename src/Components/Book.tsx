import styled from "styled-components";
import { IBook } from "../types/IBook";

function Book({ id, title, author, category, pages, imgUrl }: IBook) {
  return (
    <Container key={id}>
      <img src={imgUrl} />
      <button>Borrow</button>
      <p className="title">Title: {title} </p>
      <p className="author">Author: {author.name}</p>
      <p className="genre">Genre: {category.genre}</p>
      <p className="pages">Total pages:{pages}</p>
    </Container>
  );
}

export default Book;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(5, 1fr);
  border-radius: 16px;
  border: 1px solid black;
  width: 350px;
  height: 150px;
  margin: 8px;

  img {
    grid-column: 1;
    grid-row: 1 / span 5;
    width: 100px;
    height: 150px;
  }

  button {
    grid-column: 2;
    grid-row: 1;
    border-radius: 18px;
    border: 1px solid black;
    width: 70px;
    height: 20px;
    margin: 8px;
  }
  p {
    font-size: 12px;
  }

  .title {
    grid-column: 2;
    grid-row; 2;
  }

  .author {
    grid-column: 2;
    grid-row; 3;
  }

  .genre {
    grid-column: 2;
    grid-row; 4;
  }

  .pages {
    grid-column: 2;
    grid-row; 5;
  }
`;
