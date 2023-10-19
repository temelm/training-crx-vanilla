console.info('Hello from Training CRX Vanilla Service Worker 🤓')

chrome.runtime.onInstalled.addListener(details => {
  switch (details.reason) {
    case 'install':
      console.info('Extension installed')
      break
    case 'update':
      console.info('Extension updated')
      break
    default:
      break
  }
})