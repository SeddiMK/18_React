function Header() {
  return (
    <header>
      <h1>Я Header</h1>
      <h2>Second Header</h2>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>Отзывы</li>
        <li>Что мы делвем</li>
        <li>Контакты</li>
        <li>О Нас</li>
      </ul>
    </nav>
  );
}

export default Header;
