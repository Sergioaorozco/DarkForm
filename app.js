const handleCheck = document.getElementById('switchTheme')

handleCheck.addEventListener('change', function () {
  const bodyElement = document.querySelector('body')
  const colorMode = document.getElementById('textValue')
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
