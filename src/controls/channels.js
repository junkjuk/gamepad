
export default class Channels {
    maxValue = 1000;
    defaultValue = 0;
    minValue = -1000;
    channels = Array(2).fill(this.defaultValue)

    constructor(){}

    SetChannel(channelNumb, val) {
        this.channels[channelNumb] = val;
    }

    SetDefault() {
        this.channels = Array(2).fill(this.defaultValue)
    }

    SetChannels(ch1, ch2) {
        this.channels[0] = ch1;
        this.channels[1] = ch2;
    }
}