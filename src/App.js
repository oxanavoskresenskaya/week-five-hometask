import { useState } from 'react';
import { data } from './data';
import './App.css';
import Slaider from './Slaider';

function App() {
  const [seesights, setSeesights] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText (!showText);
  };
  
  const deliteSeesight = (id)=>{
    let newSeesights = seesights.filter(el => el.id!==id);
    setSeesights (newSeesights);
  };
  return (
    <div>
      <div className='container'>
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
                <Slaider slaide = {image}/>
            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0, 200)+'...'}
              <button className='showBtn' onClick={()=>showTextClick(item)}>{showMore ? 'Скрыть ' : 'Показать полностью'}</button>
              </p>
            </div>
            <div className='container'>
              <p><span>Адрес:</span> {adress}</p>
            </div>
            <div className='container'>
              <button className='btn' onClick={()=>deliteSeesight(id)}>Уже посмотрел</button>
            </div>
          </div>
        )
      }))}
        <div className='container'>
          <button className='btn' onClick={() => setSeesights([])}>Всё видел, спасибо!</button>
        </div>
    </div>
  );
}

export default App;
