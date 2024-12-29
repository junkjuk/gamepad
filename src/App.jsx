import { useState } from 'react'
import './App.css'
import {Slider} from "./components/Slider.jsx";
import {StartReadKeyboard, StopReadKeyboard} from "./controls/keyboard/keyboardReader.js";
import {StartReadGamepad, StopReadGamepad} from "./controls/gamepad/gamepadReader.js";
import {convertGamepad} from "./controls/gamepad/gamepadConvertor.js";
import {convertKeyboard} from "./controls/keyboard/keyBoardConvertor.js";

function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const onKeyboardUpdated = (command, isPressed) => {
    let r, l;
    const channels = convertKeyboard(command, isPressed);
    [r, l] = channels.channels;
    setLeft(l);
    setRight(r);
  }


  const onGamepdaUpdated = (axis, forward, backwards) => {
    let r, l;
    const channels = convertGamepad(axis, forward, backwards);
    [r, l] = channels.channels;
    setLeft(Math.floor(l));
    setRight(Math.floor(r));
    console.log(channels.channels)
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="w-full h-full flex flex-row justify-center items-center gap-4">
          <div className="bg-red-600"><Slider value={left}/></div>
          <div className="bg-red-600"><Slider value={right}/></div>
        </div>
        <div className="w-full flex flex-row justify-center h-[30%] gap-4">
          <button onClick={() => {
            StartReadKeyboard(onKeyboardUpdated)
            StopReadGamepad();
          }}>Keyboard</button>
          <button onClick={() => {
            StopReadKeyboard();
            StartReadGamepad(onGamepdaUpdated)
          }}>Gamepad</button>
        </div>
      </div>
    </>
  )
}

export default App
