let handleCheck = document.getElementById('switchTheme')
handleCheck.addEventListener('change', function () {
  let bodyElement = document.querySelector('body')
  if (this.checked) {
    // colorMode = 'Light Color'
    bodyElement.classList.remove('isLightColor')
    bodyElement.classList.add('isDarkColor')
  } else {
    bodyElement.classList.remove('isDarkColor')
    bodyElement.classList.add('isLightColor')
    // colorMode = 'Dark Color'
  }
})
