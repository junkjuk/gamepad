﻿import Channels from "../channels.js";

const channels = new Channels();

const log = () => {
    console.log(channels.channels)
}
export function convertGamepad(axis, forward, backwards) {
    if (forward !== 0 && backwards !== 0) {
        return channels.SetDefault();
    }
    let vertical = forward !== 0?
        channels.maxValue * forward :
        channels.minValue * backwards;

    if (vertical === 0) {
        let sideways = Math.abs(axis) * channels.maxValue;
        if (axis > 0) {
            channels.SetChannels(Math.floor(sideways), Math.floor(vertical))
        } else if (axis < 0) {
            channels.SetChannels(Math.floor(vertical), Math.floor(sideways))
        }
    } else  if (Math.abs(axis) > 0.1) {
        const horizon = vertical / 2;
        if (axis > 0) {
            channels.SetChannels(Math.floor(vertical), Math.floor(vertical - horizon * Math.abs(axis)))
        } else if (axis < 0) {
            channels.SetChannels(Math.floor(vertical - horizon * Math.abs(axis)), Math.floor(vertical))
        }
    } else {
        channels.SetChannels(Math.floor(vertical), Math.floor(vertical))
    }
    // log()
    return channels;
}

