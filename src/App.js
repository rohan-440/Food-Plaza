import Axios from 'axios';
import './App.css';
import './key';
import { useState } from 'react';
import RecipeTile from './recipeTile';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthlables, sethealthlables] = useState("vegan")

  const YOUR_APP_ID = " ";
  const YOUR_APP_KEY = " ";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthlables}`;








  const getRecipe = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  }


  return (

    <div className="app">
      <h1>Welcome To Food Plaza!</h1>
      <form className='searchForm' onSubmit={onSubmit}>
        <input className='appInput ' type='text' placeholder='Enter Ingridients' value={query} onChange={(e) => setquery(e.target.value)} />
        <input className='appSubmit ' type='submit' value="Search" />
        <select className='app_healthlabels'>
          <option value="vegan" onClick={() => { sethealthlables('vegan') }} >Vegan</option>
          <option value="Vegetarian" onClick={() => { sethealthlables('Vegetarian') }} >Vegetarian</option>

          <option value="Paleo" onClick={() => { sethealthlables('Paleo') }} >Paleo</option>

          <option value="High-Fiber" onClick={() => { sethealthlables('High-Fiber') }} >High-Fiber</option>

          <option value="High-Protein" onClick={() => { sethealthlables('High-Protein') }} >High-Protein</option>

          <option value="Low-Carb" onClick={() => { sethealthlables('Low-Carb') }} >Low-Carb</option>








        </select>



      </form>



      <div className='app_recipe'>
        {
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />
          })
        }
      </div>

    </div>
  );
}

export default App;
