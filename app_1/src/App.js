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
const footSocialIcons = [
  {
    twitter:
      'https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png',
    pinterest:
      'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png',
    instagram:
      'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png',
    google:
      'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png',
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
			{footSocialIcons.map((el,index)=>{
				return(
					<Footer
					key={index},
					twitter={el.twitter},
					pinterest={el.pinterest},
					instagram={el.instagram},
					google={el.google},
					/>
				);
			})}
    </>
  );
}

export default App;
