class Sound {

    constructor(path) {
        const AudioContext = window.AudioContext || window.webkitAudioContext || window.MozAudioContext
        this.audioContext = new AudioContext()
        if (!this.buffer) this.loadSound(path)
    }

    async loadSound(path) {
        this.recorderNode = this.audioContext.createGain()
        this.recorderNode.gain.value = 1
        this.buffer = null
        this.path = path
        const response = await fetch(path)
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await this.decodeAudioDataAsync(
            this.audioContext, arrayBuffer
        )
        this.buffer = audioBuffer
    }

    async decodeAudioDataAsync(audioContext, arrayBuffer) {
        return new Promise((resolve, reject) => {
            audioContext.decodeAudioData(
                arrayBuffer,
                buffer => resolve(buffer),
                e => reject(e)
            )
        })
    }

    play(gainValue = 1, rateValue = 1) {
        this.audioContext.resume()
        const gain = this.audioContext.createGain()
        const sound = this.audioContext.createBufferSource()
        gain.gain.value = gainValue
        sound.playbackRate.value = rateValue
        sound.buffer = this.buffer
        sound.connect(gain)
        gain.connect(this.recorderNode)
        gain.connect(this.audioContext.destination)
        sound.start(0)
    }
}

export default Sound
