import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IMenue } from "../types/IMenue";

interface Props {
  menues: IMenue[];
}

function Sidebar({ menues }: Props) {
  return (
    <Container>
      <div className="logo">ReadnShare.</div>
      <div>
        <div>
          {menues.map((menue) => (
            <div key={menue.id}>
              <NavLink to={menue.link} className="nav-link">
                <span className="nav-menue">
                  {menue.icon}
                  {menue.page}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.nav`
  .logo {
    margin-top: 1rem;
    margin-bottom: 3rem;
    margin-left: 0.2rem;
    color: var(--text-primary);
    font-weight: bold;
  }

  .nav-link {
    text-decoration: none;
  }

  .nav-menue {
    text-align: left;
    font-size: 18px;
    margin: 0.5rem;
  }
`;
