const img = document.getElementById('img')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const imgs = document.querySelectorAll('#img img')

console.log(img)

let idx = 0

let interval = setInterval(run,2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    img.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
