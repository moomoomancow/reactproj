import React, {useState, useEffect} from 'react';
import './App.css';
import bassRiff1 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+1.mp3'
import bassRiff2 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+2.mp3'
import bassRiff3 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+3.mp3'
import bassRiff4 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+4.mp3'
import bassRiff5 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+5.mp3'
import bassRiff6 from '/Users/brianjumper/sdi-26/reactproj/src/assets/Sitcom+Bass+Riff+13.mp3'
import sitcom from '/Users/brianjumper/sdi-26/reactproj/src/assets/sitcom-laugh-track__-made-with-Voicemod.mp3'

function App() {
  const [count, setCount] = useState(0) //Count is used to rerender page with useEffect
  const [joke, setJoke] = useState(); ///Joke is set from the "setup" portion in the API response
  const [punch, setPunch] = useState(); ///Punch is set from the "punchline" portion in the API response



////useEffect hook which calls to API. Count is set as second param in order to rerender page after user presses button
  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => res.json())
    .then(data => {setPunch(data.punchline);
                 setJoke(data.setup)})
  }, [count])



////Conditional render to stop error
  if(punch === undefined || joke === undefined){
    return (
      <>
      <h1 id='terror'>LOADING...</h1>
      </>
    );
  }




////Function to show punchline of joke and play sound when button is pressed
  function showtext(){
  document.getElementById('revealed').innerHTML = punch

///Sounds are imported from assets, put into an array and played at random when button is pressed.
  new Audio(sitcom).play()
  const boop = [new Audio(bassRiff1), new Audio(bassRiff2), new Audio(bassRiff3), new Audio (bassRiff4), new Audio(bassRiff5), new Audio (bassRiff6)]
  boop[Math.floor(Math.random()*boop.length)].play()


  }




///Function that increments count to rerender page and removes punchline from last joke.
  function counter(){
    document.getElementById('revealed').innerHTML = " "
    setCount(count + 1)
  }



  return (
    <>

    <h1 id='title'>The jokester says....</h1>

    <div id='box'>
      <button id='reveal' onClick={showtext}>{joke}</button>
      {/* button to reveal punchline and play sound */}
      <h1 id='revealed'> </h1>
    </div>

    <div id='littlebox'>
      <button id='another' onClick={counter}>Another joke?</button>
      {/* button to call to another joke */}
    </div>

    </>
  );
}

export default App;
