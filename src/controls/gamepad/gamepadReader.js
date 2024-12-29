

let sendCommand;
let gamepad = {};
let needRead = false;

const readGamepad = () => {
    if (!needRead) {clearInterval(readGamepad)}
    let gp = navigator.getGamepads()[gamepad.index];
    if (sendCommand) sendCommand(gp.axes[0], gp.buttons[6].value, gp.buttons[7].value);
}

function gamepadHandler(event, connecting) {
    let gamepadE = event.gamepad;
    if (connecting) {
        gamepad = gamepadE;
    } else {
        gamepad = {};
    }
    setInterval(readGamepad, 100)
}

const gamepadconnected = (event)  => {
    gamepadHandler(event, true);
}

export function StartReadGamepad(func) {
    needRead = true;
    window.addEventListener("gamepadconnected", gamepadconnected);
    sendCommand = func;
}

export function StopReadGamepad() {
    needRead = false;
    document.removeEventListener("gamepadconnected", gamepadconnected);
    sendCommand = null;
}
