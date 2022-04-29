import { contextBridge, ipcRenderer } from 'electron'


// ipcRenderer.on('entries', () => console.log('subscribeForEntries'))
contextBridge.exposeInMainWorld('subscribeForEntries', {
  subscribe: callback => {
    ipcRenderer.on('entries', callback)
  }
})

contextBridge.exposeInMainWorld('subscribeForTimer', {
  subscribe: callback => {
    ipcRenderer.on('tick', callback)
  },
  startTimer: () => {
    ipcRenderer.send('timer:start')
  },
  stopTimer: () => {
    ipcRenderer.send('timer:stop')

  }
})

contextBridge.exposeInMainWorld('inputOutput', {
  save: data => {
    ipcRenderer.send('save', data)
  }
})