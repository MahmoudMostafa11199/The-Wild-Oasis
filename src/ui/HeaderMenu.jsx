import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi2';

import Logout from './Logout';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
