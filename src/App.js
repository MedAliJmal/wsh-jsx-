
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import Video from "./myVideo.mp4"

function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="titlered">Mohamed Ali Jmal</h1>

<img src={imageInSrc} alt ='myImage' />
   


<img src="/imageInPublic.jpg" alt ='myImage' />
 


</div>

<video style={{width:"340",height:"240"}}controls>

<source src={Video} type="video/mp4" />

</video>
    </div>
  );
}

export default App;
