import Channels from "../channels.js";
import {KeyboardCommands} from "./keyboardReader.js";

const channels = new Channels();
const keys = {};
keys[KeyboardCommands.Up] = false;
keys[KeyboardCommands.Down] = false;
keys[KeyboardCommands.Right] = false;
keys[KeyboardCommands.Left] = false;

const log = () => {
    console.log(channels.channels)
}

const updateKeyState = (command, isPressed) => keys[command] = isPressed;

export function convertKeyboard(command, isPressed) {
    updateKeyState(command, isPressed);

    if (keys[KeyboardCommands.Up] && keys[KeyboardCommands.Down]){
        channels.SetDefault()
    } else if (keys[KeyboardCommands.Left] && keys[KeyboardCommands.Right]) {
        channels.SetDefault()
    } else if (keys[KeyboardCommands.Left] && keys[KeyboardCommands.Up]) {
        channels.SetChannels(channels.maxValue / 2,  channels.maxValue)
    } else if (keys[KeyboardCommands.Right] && keys[KeyboardCommands.Up]) {
        channels.SetChannels(channels.maxValue,  channels.maxValue / 2)
    } else if (keys[KeyboardCommands.Left] && keys[KeyboardCommands.Down]) {
        channels.SetChannels(channels.minValue / 2,  channels.minValue)
    } else if (keys[KeyboardCommands.Right] && keys[KeyboardCommands.Down]) {
        channels.SetChannels(channels.minValue,  channels.minValue / 2)
    } else if (keys[KeyboardCommands.Up]) {
        channels.SetChannels(channels.maxValue,  channels.maxValue)
    } else if (keys[KeyboardCommands.Down]) {
        channels.SetChannels(channels.minValue,  channels.minValue)
    } else if (keys[KeyboardCommands.Right]) {
        channels.SetChannels(channels.maxValue,  channels.defaultValue)
    } else if (keys[KeyboardCommands.Left]) {
        channels.SetChannels(channels.defaultValue,  channels.maxValue)
    } else if (!keys[KeyboardCommands.Right] && !keys[KeyboardCommands.Left]
        && !keys[KeyboardCommands.Down] && !keys[KeyboardCommands.Up]) {
        channels.SetDefault()
    }

    return channels;
}

