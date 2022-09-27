import styled from "styled-components";
import Searchbox from "../Components/Searchbox";
import Profile from "./Profile";

function Navbar() {
  return (
    <Header>
      <Searchbox />
      <Profile />
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  float: right;
  margin-right: 50px;
  margin-top: 1rem;
  color: var(--text-primary);
`;
