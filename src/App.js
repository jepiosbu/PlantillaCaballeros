import './App.css';
import * as compo from './components/caballero.jsx'
import audio1 from '../src/audio/pegaso.mp3'
import audio2 from '../src/audio/cisne.mp3'
import audio3 from '../src/audio/fenix.mp3'
import audio4 from '../src/audio/shiryu.mp3'
import audio5 from '../src/audio/shun.mp3'

function App() {
    let audios1=new Audio()
    audios1.src=audio1;
    let audios2=new Audio()
    audios2.src=audio2;
    let audios3=new Audio()
    audios3.src=audio3;
    let audios4=new Audio()
    audios4.src=audio4;
    let audios5=new Audio()
    audios5.src=audio5;
    const evento1= (e)=>{
        console.log(e.target.parentNode.nextSibling.style.top)
        e.target.parentNode.nextSibling.style.top="0vw";
        audios5.play();
    }
    const doblevento1= (e)=>{
      
        audios5.pause();
        audios5.currentTime=0;
        setInterval(() => {
          e.target.parentNode.nextSibling.style.transform='rotateY(360deg)'
        }, 100);
        setTimeout(() => {
            e.target.parentNode.nextSibling.style.top="19vw";
        }, 500);
    }
    const evento2= (e)=>{
        e.target.parentNode.nextSibling.style.top="0vw";
        if(audios3.paused)
        {
            audios3.play();
        }

    }
    const doblevento2= (e)=>{
      
        audios3.pause();
        audios3.currentTime=0;
        setInterval(() => {
          e.target.parentNode.nextSibling.style.transform='rotateY(360deg)'
          e.target.parentNode.nextSibling.style.top="19vw";
        }, 100);
    }
    const evento3= (e)=>{
        e.target.parentNode.nextSibling.style.top="0vw";
        
            audios4.play();

    }
    const doblevento3= (e)=>{
      
        audios4.pause();
        audios4.currentTime=0;
        setInterval(() => {
          e.target.parentNode.nextSibling.style.transform='rotateY(360deg)'
          e.target.parentNode.nextSibling.style.top="19vw";
        }, 100);
    }
    const evento4= (e)=>{
        e.target.parentNode.nextSibling.style.top="0vw";
        if(audios1.paused)
        {
            audios1.play();
        }

    }
    const doblevento4= (e)=>{
      
        audios1.pause();
        audios1.currentTime=0;
        setInterval(() => {
          e.target.parentNode.nextSibling.style.transform='rotateY(360deg)'
          e.target.parentNode.nextSibling.style.top="19vw";
        }, 100);
    }
    const evento5 = (e)=>{
        e.target.parentNode.nextSibling.style.top="0vw";
        if(audios5.paused)
        {
            audios2.play();
        }

    }
    const doblevento5= (e)=>{
      
        audios2.pause();
        audios2.currentTime=0;
        setInterval(() => {
          e.target.parentNode.nextSibling.style.transform='rotateY(360deg)'
          e.target.parentNode.nextSibling.style.top="19vw";
        }, 100);
    }

  return (
    <div className="App">
      <compo.Caballero
      dobleclic={doblevento1}
      oneclic={evento1}
      clase="caballero uno"
      image="andromeda.jpg"
      image1="andromeda.jpg"
      class="containC"/>
      <compo.Caballero
      dobleclic={doblevento2}
      oneclic={evento2}
      clase="caballero dos"
      image="fenix.jpg"
      image1="fenix.jpg"
      class="containC2"/>
      <compo.Caballero
      dobleclic={doblevento3}
      oneclic={evento3}
      clase="caballero tres"
      image="dragon.jpg"
      image1="dragon.jpg"
      class="containC3"/>
      <compo.Caballero
      dobleclic={doblevento4}
      oneclic={evento4}
      clase="caballero cuatro"
      image="seya.jpg"
      image1="seya.jpg"
      class="containC4"/>
      <compo.Caballero
      dobleclic={doblevento5}
      oneclic={evento5}
      clase="caballero cinco"
      image="cisne.jpg"
      image1="cisne.jpg"
      class="containC5"/>
    </div>
  );
}
export default App;