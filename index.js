const svg = document.querySelector('svg')

const lineCount = 101 //one minut in millisecond
const center = { x: 200, y: 200 } //init
const radius = 100
{/* <circle id="spinner" cx="200" cy="200" r="25" fill="green" /> */ }
for (let i = 0; i < lineCount; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    const angle = i / lineCount * Math.PI * 2
    if (i == 76) {
        line.style.stroke = "green"
        line.style.strokeWidth = 2
    }
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
