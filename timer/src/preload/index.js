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
  startTimer: title => {
    ipcRenderer.send('timer:start', { title })
  },
  stopTimer: () => {
    ipcRenderer.send('timer:stop')

  }
})