import { useState } from 'react';
import { data } from './data';
import './App.css';
import { identifier } from '@babel/types';

function App() {
  const [seesights, setSeesights] = useState(data);
  const [showText, setShowText] = useState(false);
  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText (!showText);
  }
  return (
    <div>
      <div className='conteiner'>
        <h1>{seesights.length} главных достопримечательностей города Ростова-на-Дону</h1>
      </div>
      {seesights.map((item => {
        const {id, attractionName, image, description, adress, showMore}=item;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{attractionName}</h2>
            </div>
            <div className='container'>
              <img src={image} width='500px' alt='seesight'/>
            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0, 200)+'...'}
              <button onClick={()=>showTextClick(item)}>{showMore ? 'Скрыть ' : 'Показать полностью'}</button>
              </p>
            </div>
          </div>
        )
      }))}
    </div>
  );
}

export default App;
