import React, {useState} from 'react';

import { Container, BoxColor, Line } from './styles';


export function RandomColor() {
  const [ramdomColor, setRandomColor] = useState(1);
  const [init, setInit] = useState(false);

  function nextColor(){
    const ramdomNumber = Math.floor(Math.random() * 4) + 1;
    setRandomColor(ramdomNumber);
  }

  function randomNumberIn5Secconds(){
    setInit(true)
    if(init){
      setInit(false)
      const interval = setInterval(nextColor, 100);
      setTimeout(()=>{
        clearInterval(interval);
      }, 3000)
    }
   
  }

  return <Container onPress={randomNumberIn5Secconds}>
    <Line>
    <BoxColor color="red" active={ramdomColor === 1} />
    <BoxColor color="blue" active={ramdomColor === 2} />
    </Line>
   <Line>
   <BoxColor color="yellow" active={ramdomColor === 3}/>
    <BoxColor color="green" active={ramdomColor === 4}/>
   </Line>
  </Container>;
}