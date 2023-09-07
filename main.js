const links = document.querySelectorAll('ul li')

const handleActive = (e) => {
  links.forEach(link => {
    link.classList.remove('active')
  })

  e.currentTarget.classList.add('active')
}

links.forEach(link => {
  link.addEventListener('click', handleActive)
})

