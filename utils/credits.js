import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'

export function createCredits () {
  const credits = document.createElement('p')
  credits.innerHTML = `
    Made with
    <img src="${javascriptLogo}" alt="JavaScript">
    and
    <img src="${viteLogo}" alt="Vite">
  `
  document.body.appendChild(credits)
}