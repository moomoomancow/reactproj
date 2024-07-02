import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState();
  const [punch, setPunch] = useState();

  // useEffect(() => {
  //   fetch(`https://official-joke-api.appspot.com/random_joke`)
  //   .then(res => res.json())
  //   .then(data => {setPunch(data.punchline);
  //                setJoke(data.setup)})
  // }, [])


  // if(punch === undefined || joke === undefined){
  //   return (
  //     <>
  //     <h1>Loading</h1>
  //     </>
  //   );
  // }
  function showtext(){
  document.getElementById('revealed').innerHTML = "punch"
  }

  return (
    <>
    <h1 id='setup'>joke</h1>
    <button id='reveal' onClick={showtext}>?</button>
    <h1 id='revealed'> </h1>
    </>
  );
}

export default App;
