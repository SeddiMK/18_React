function Header(props) {
  return (
    <header>
      <h1>{props.data.site_name}</h1>
      <h2>{props.second_header}</h2>
      <Nav nav={props.data.nav} />
    </header>
  );
}

function Nav(props) {
  let data = props.nav;
  const listElem = data.map((el) => {
    return (
      <li key={el.link}>
        <a href={el.link}>{el.text}</a>
      </li>
    );
  });
  return (
    <nav>
      <ul>{listElem}</ul>
    </nav>
  );
}

export default Header;
