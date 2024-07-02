import React, {useState, useEffect} from 'react';
import './App.css';
import bassRiff1 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+1.mp3'
import bassRiff2 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+2.mp3'
import bassRiff3 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+3.mp3'
import bassRiff4 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+4.mp3'
import bassRiff5 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+5.mp3'
import bassRiff6 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+13.mp3'

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState();
  const [punch, setPunch] = useState();

  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => res.json())
    .then(data => {setPunch(data.punchline);
                 setJoke(data.setup)})
  }, [count])


  if(punch === undefined || joke === undefined){
    return (
      <>
      <h1>Loading</h1>
      </>
    );
  }

  function showtext(){
  document.getElementById('revealed').innerHTML = punch
  const boop = [new Audio(bassRiff1), new Audio(bassRiff2), new Audio(bassRiff3), new Audio (bassRiff4), new Audio(bassRiff5), new Audio (bassRiff6)]
  boop[Math.floor(Math.random()*boop.length)].play()


  }

  function counter(){
    document.getElementById('revealed').innerHTML = " "
    setCount(count + 1)
  }

  return (
    <>
    <div id='box'>
    <h1 id='setup'>{joke}</h1>
    <button id='reveal' onClick={showtext}>?</button>
    <h1 id='revealed'> </h1>
    <div id='littlebox'>
      <button id='another' onClick={counter}>Another joke?</button>
    </div>
    </div>
    </>
  );
}

export default App;
