import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
    const [colorIndex, setColorIndex] = React.useState(0);
    const color = ["red","blue","green","orange","violet","yellow"];

    useEffect(()=>{
      document.body.style.backgroundColor= color[colorIndex];

    });

    function handleChangeIndex(){
        var next;
         if(colorIndex + 1 === color.length)
           next=0
         else
           next=colorIndex + 1;
        setColorIndex(next);
        }
    return(
        <button id='button' onClick={handleChangeIndex}>Change Background Color</button>
    );
}
ReactDOM.render(<App/>,document.getElementById('root'));