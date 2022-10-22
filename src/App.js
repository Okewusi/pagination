import './App.css';
import {useEffect, useState} from 'react';
import Images from './components/Images';


function App() {
  const [images, setImages] = useState([]);

  async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const jsonData = await response.json()
    setImages(jsonData)
  }
  
  useEffect(()=>{
    
    getData()

    
    
  },[])
  return (
    <div className="App">
      <Images data = {images} />
    </div>
  );
}

export default App;
