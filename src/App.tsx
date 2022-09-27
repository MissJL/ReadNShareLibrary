import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getMenues } from "./Services/FakeMenue";
import { IMenue } from "./types/IMenue";
import { getBooks } from "./Services/FakeBooks";
import { IBook } from "./types/IBook";
import styled from "styled-components";
import Navbar from "./Routes/Navbar";
import Sidebar from "./Routes/Sidebar";
import Dashboard from "./Routes/Dashboard";
import Bookings from "./Routes/Bookings";
import BookList from "./Components/BookList";

function App(): JSX.Element {
  const [menues, setMenues] = useState<IMenue[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    setMenues(getMenues());
    setBooks(getBooks());
  }, []);

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <SideMenue>
        <Sidebar menues={menues} />
      </SideMenue>
      <Main>
        <BookList books={books} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bookings" component={Bookings} />
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 100px 1fr;
`;

const Main = styled.main`
  grid-row: 2;
  grid-column: 1 / span 2;
  margin-left: 7rem;
  padding: 1rem;
  height: 100%;
  transition: 1s;
`;

const Header = styled.div`
  grid-row: 1;
  grid-column: 2;
  border: gray solid 0.5px;
  background-color: var(--bg-secondary);
`;

const SideMenue = styled.div`
  grid-row-start: 2;
  grid-column: 1;
  border: gray solid 0.5px;
  position: fixed;
  width: 6rem;
  height: 100%;
  background-color: var(--bg-secondary);
  transition: width 1s;
`;
