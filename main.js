let body = document.querySelector('body')
let preference = document.querySelector('p')
let bg = document.getElementById('color-bg')
let colorFont = document.getElementById('color-font')
let colorSize = document.getElementById('size-font')

bg.addEventListener('input', (e) => {
  body.style.background = e.target.value
  localStorage.setItem('bgColor', body.style.background)
})
colorSize.addEventListener('input', (e) => {
  preference.style.fontSize = `${e.target.value}px`
  localStorage.setItem('fontSize', preference.style.fontSize)
})
colorFont.addEventListener('input', (e) => {
  preference.style.color = e.target.value
  localStorage.setItem('fontColor', preference.style.color)
})

document.addEventListener('DOMContentLoaded', () => {
  body.style.background = localStorage.getItem('bgColor') || ''
  preference.style.fontSize = localStorage.getItem('fontSize') || ''
  preference.style.color = localStorage.getItem('fontColor') || ''
})
