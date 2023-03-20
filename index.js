const svg = document.querySelector('svg')
const spinner = document.getElementById('spinner')
const playButton = document.getElementById('play')

let timerRunning = false
const lineCount = 60
const center = { x: 200, y: 200 }
const radius = 100

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

playButton.addEventListener('click', () => {
    if (!timerRunning) {
        timerRunning = true
        spinner.classList.add('spin-animation')
    } else {
        spinner.classList.remove('spin-animation')
        timerRunning = false
    }
})