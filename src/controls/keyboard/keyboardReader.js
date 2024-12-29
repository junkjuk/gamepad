
let sendCommand;

export const KeyboardCommands = {
    Up: 'w',
    Down: 's',
    Left: 'a',
    Right: 'd'
}

const readInput = (event) => {
    let command;
    switch (event.key) {
        case KeyboardCommands.Up:
            command = KeyboardCommands.Up;
            break;
        case KeyboardCommands.Down:
            command = KeyboardCommands.Down;
            break;
        case KeyboardCommands.Left:
            command = KeyboardCommands.Left;
            break;
        case KeyboardCommands.Right:
            command = KeyboardCommands.Right;
            break;
        default:
            command = null;
    }
    return command;
}

const keyPress = (event) => {
    let command = readInput(event);
    if (command) {
        if (sendCommand) sendCommand(command, true)
    }
}

const keyUp = (event) => {
    let command = readInput(event);
    if (command) {
        if (sendCommand) sendCommand(command, false)
    }
}

export function StartReadKeyboard(func) {
    document.addEventListener("keydown", keyPress);
    document.addEventListener("keyup", keyUp);
    sendCommand = func;
}

export function StopReadKeyboard() {
    document.removeEventListener("keydown", readInput);
    document.removeEventListener("keyup", keyUp);
    sendCommand = null;
}
