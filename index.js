const pass = document.querySelector('#password')
const passCon = document.querySelector('#passwordConfirm')
const info = document.querySelector('#passwordCheck')

passCon.addEventListener('input', () => {
  if (pass.value === passCon.value) {
    info.style.visibility = 'hidden'
  } else {
    info.style.visibility = 'visible'
  }
})