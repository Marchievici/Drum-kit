const initStyle =  "width: 80px; height: 80px; background: transparent; color: rgb(135, 228, 126); border: 3px solid black; text-align: center; margin-top: 42px; margin-left: 80px; float: left; overflow: hidden;"
const changedStyle = "width: 90px; height: 90px; background: transparent; color: rgb(135, 228, 126); border: 3px solid green; text-align: center; margin-top: 42px; margin-left: 80px; float: left; overflow: hidden;"

let clap = document.getElementById('clap')
let openhat = document.getElementById('openhat')
let kick = document.getElementById('kick')
let hihat = document.getElementById('hihat')
let boom = document.getElementById('boom')
let ride = document.getElementById('ride')
let snare = document.getElementById('snare')
let tom = document.getElementById('tom')
let tink = document.getElementById('tink')

let sounds = [[clap, 'clap'], [openhat, 'openhat'], [kick, 'kick'], [hihat, 'hihat'], [boom, 'boom'],
             [ride, 'ride'], [snare, 'snare'], [tom, 'tom'], [tink, 'tink']]
let keyOfNumbers = [65, 70, 68, 83, 71, 72, 74, 75, 76]

const whenPress = (name, number, id) => {
    document.body.addEventListener('keydown', function(e) {
        if (e.keyCode === number) {
            name.style.cssText = changedStyle
            let songName = id + ".wav"
            let sound = new Audio(songName)
            sound.play()
            setTimeout(function() {
                name.style.cssText = initStyle
            }, 500)  
        }
    })
}

for (let i = 0; i < sounds.length; ++i) {
    whenPress(sounds[i][0], keyOfNumbers[i], sounds[i][1])
}