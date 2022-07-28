let handleCheck = document.getElementById('switchTheme')
handleCheck.addEventListener('change', function () {
  let bodyElement = document.querySelector('body')
  let colorMode = document.getElementById('textValue')
  if (this.checked) {
    colorMode.innerHTML = 'Light Color'
    bodyElement.classList.remove('isLightColor')
    bodyElement.classList.add('isDarkColor')
  } else {
    colorMode.innerHTML = 'Dark Color'
    bodyElement.classList.remove('isDarkColor')
    bodyElement.classList.add('isLightColor')
    // colorMode = 'Dark Color'
  }
})
