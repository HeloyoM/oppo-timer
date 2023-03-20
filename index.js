const svg = document.querySelector('svg')
const spinner = document.getElementById('spinner')
const playButton = document.getElementById('play')
const resetButton = document.getElementById('reset')
const timer = document.getElementById('timer')

let timerRunning = false
const lineCount = 60
const center = { x: 200, y: 200 }
const radius = 100
let hours = 00
let minutes = 00
let seconds = 00

drawClockSvg()

function drawClockSvg() {
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        const angle = i / lineCount * Math.PI * 2

        const x1 = center.x + Math.cos(angle) * radius
        const y1 = center.y + Math.sin(angle) * radius
        const x2 = center.x + Math.cos(angle) * (radius + 10)
        const y2 = center.y + Math.sin(angle) * (radius + 10)

        line.setAttribute('x1', x1)
        line.setAttribute('y1', y1)
        line.setAttribute('x2', x2)
        line.setAttribute('y2', y2)

        svg.appendChild(line)
    }
}

const timerInterval = (pause) => {
    const interval = setInterval(() => {
        seconds++

        if (seconds == 60) {
            minutes++
            seconds = 00
        }

        if (minutes == 60) {
            hours++
            minutes = 00
        }
        timer.innerHTML = `${hours} : ${minutes} : ${seconds}`

        if (pause) {
            clearInterval(interval)
            timer.innerHTML = `${00} : ${00} : ${00}`
        }
    }, 1000)
}
const initTimerProps = () => {
    playButton.innerHTML = 'play'
    clearInterval(true)
    timerRunning = false
}

playButton.addEventListener('click', () => {
    if (!timerRunning) {
        timerRunning = true
        spinner.classList.add('spin-animation')
        playButton.innerHTML = 'pause'
        timerInterval()
    } else {
        spinner.classList.add('stop-timer')
        spinner.classList.remove('spin-animation')

        initTimerProps()
    }
})

resetButton.addEventListener('click', () => {
    spinner.classList.remove('spin-animation')
    hours = 00
    minutes = 00
    seconds = 00
    timer.innerHTML = `${00} : ${00} : ${00}`

    initTimerProps()
})