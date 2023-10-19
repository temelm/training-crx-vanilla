import '../utils/base.css'
import './popup.css'
import { createCounter } from '../utils/counter'
import { createCredits } from '../utils/credits'

const button = document.createElement('button')
button.setAttribute('type', 'button')
document.body.appendChild(button)
createCounter(button)

createCredits()