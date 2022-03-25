import React from 'react';
import './App.css';
import userPhoto from './img/userPhoto.jpg';

import RealtorsCard from './components/RealtorsCard';

const realtorItems = [{name: 'Джон Березуцкий', photo: userPhoto, location: 'Киев, Россия / GMT+03', description: 'Провожу сделки любой сложности с жилой недвижимостью. Дело своё не знаю. Работаю на откатах. Умею отстоять свои денежные интересы и безопасность...', rating: 23.2, rewievConter: 3, dealsCounter: 123, phone: {compressed: '+79001111111', expanded: '+7-900-111-11-11'}, catigories:['Новостройка', 'Аренда', 'Продажа',  'Коммерческая недвижимость',  'Вторичный рынок',  'Загородная'] },
                      {name: 'Игорь Волков', photo: userPhoto, location: 'Киев, Россия / GMT+03', description: 'Провожу сделки любой сложности с жилой недвижимостью. Дело своё не знаю. Работаю на откатах. Умею отстоять свои денежные интересы и безопасность...', rating: 23.2, rewievConter: 3, dealsCounter: 456, phone: {compressed: '+79001111112', expanded: '+7-900-111-11-12'}, catigories:['Новостройка', 'Аренда', 'Продажа',  'Коммерческая недвижимость'] },]

function App() {

  return (
    <div className="App">

      <div className="container">

        <section className="realtorsCards">

          <div className="realtorsCards__list">

          {realtorItems.map(realtorItem => {
            return <RealtorsCard {...realtorItem} />
          })}


          </div>

        </section>

      </div>
    </div>
  );
}

export default App;
