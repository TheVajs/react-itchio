import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <p>
        Not jet registered? <Link to="/register">Register with ithc.io</Link>
      </p>
    </div>
  );
};

export default LoginPage;
