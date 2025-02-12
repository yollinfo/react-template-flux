import { Link, Navigate } from 'react-router'
import Logo from '../../components/Logo.jsx';

function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-body-secondary fw-bold">
        Uh, I guess you dont have anything to show yet on Home Page?
      </h1>
      <Logo />
      <div className="text-center">
        <Link className='text-decoration-none btn btn-primary btn-sm m-2' to="/about">About</Link>
        <Link className='text-decoration-none btn btn-primary btn-sm m-2' to="/demo">Demo</Link>
      </div>
    </>
  );
}

export default Home;
