import { contextBridge, ipcRenderer } from 'electron'


// ipcRenderer.on('entries', () => console.log('subscribeForEntries'))
contextBridge.exposeInMainWorld('subscribeForEntries', {
  subscribe: callback => {
    ipcRenderer.on('entries', callback)
  }
})