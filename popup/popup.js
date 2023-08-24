import './popup.css'
import { createCounter } from './counter'
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'

const button = document.createElement('button')
button.setAttribute('type', 'button')
document.body.appendChild(button)
createCounter(button)

const credits = document.createElement('p')
credits.innerHTML = `
  Made with
  <img src="${javascriptLogo}" alt="JavaScript">
  and
  <img src="${viteLogo}" alt="Vite">
`
document.body.appendChild(credits)