import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import SpinnerMini from './SpinnerMini';
import ButtonIcon from './ButtonIcon';

import { useLogout } from '../features/authentication/useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
