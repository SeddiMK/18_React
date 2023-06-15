import './App.css';
import Test from './Test';
import Header from './Header/Header';
import Goods from './Goods';

const headerData = {
  site_name: 'my text site NAME',
  nav: [
    { link: 'nav111', text: 'my text 1' },
    { link: 'nav222', text: 'my text 2' },
    { link: 'nav333', text: 'my text 3' },
  ],
};

const goods = [
  {
    title: 'apple',
    cost: '1000$',
    image:
      'https://cdn3.iconfinder.com/data/icons/tropical-11/512/Pinaple-512.png',
  },
  {
    title: 'OnePlus',
    cost: '800$',
    image:
      'https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png',
  },
];
const footMenu = [
  {
    title: 'apple',
    cost: '1000$',
    image:
      'https://cdn3.iconfinder.com/data/icons/tropical-11/512/Pinaple-512.png',
  },
];

function App() {
  return (
    <>
      <Header data={headerData} />
      <Test />
      {goods.map((el) => {
        return (
          <Goods
            key={el.cost}
            title={el.title}
            cost={el.cost}
            image={el.image}
          />
        );
      })}
    </>
  );
}

export default App;
