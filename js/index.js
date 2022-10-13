import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimeOut, 
  resetControls: controls.reset
})

const sounds = Sounds()

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sounds.buttonPress()
})

buttonPause.addEventListener('click', function() {
  controls.buttonpause()
  timer.hold()
  sounds.buttonPress()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sounds.buttonPress()
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sounds.bgAudio.play()
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sounds.bgAudio.pause()
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateMinutes()
  timer.updateDisplay(minutes, 0)
})