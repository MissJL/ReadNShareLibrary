import styled from "styled-components";

function Header() {
  return <div className="logo">ReadnShare.</div>;
}

export default Header;

const Logo = styled.div`
  margin-top: 1rem;
  margin-left: 0.5rem;
  color: var(--text-primary);
`;
