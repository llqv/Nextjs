import { logout } from '../../utils/auth';

const LogoutButton = () => {
  const handleLogout = () => {
    logout();

    // TODO: redirect to login page
  };

  return (
    <button onClick={handleLogout}>Log out</button>
  );
};

export default LogoutButton;
