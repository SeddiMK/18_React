// import { matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Users() {
  // let match = matchPath();
  let { pathname } = useLocation();
  // console.log(useLocation());

  return (
    <>
      <h2>Users</h2>
      <ul>
        <li>
          <a href={`${pathname}/ivanov`}>Ivanov</a>
        </li>
        <li>
          <a href={`${pathname}/petrov`}>Petrov</a>
        </li>
        <li>
          <a href={`${pathname}/egorov`}>Egorov</a>
        </li>
      </ul>
    </>
  );
}

export default Users;
