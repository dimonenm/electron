// https://electronjs.org/docs/tutorial/security
// Preload File that should be loaded into browser window instead of
// setting nodeIntegration: true for browser window

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('MessagesAPI', {
  onLoaded: callback => {
    ipcRenderer.on('loaded', callback)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('offline', () => {
    ipcRenderer.send('offline')
  })
  window.addEventListener('online', () => {
    ipcRenderer.send('online')
  })
})
