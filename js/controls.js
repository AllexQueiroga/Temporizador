export default function Constrols({
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonPause,
}){


  function reset() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
      buttonSet.classList.remove('hide')
      buttonStop.classList.add('hide')
    }
  
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }
  function buttonpause (){
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')  
  }

  function getMinutes(){
    let newMinutes = prompt("Indique quantos minutos!")
    if(!newMinutes){
      return false
    }
    return newMinutes
  }
  
 
  return {
    reset,
    play,
    buttonpause,
    getMinutes,
  }
}

