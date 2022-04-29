import path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron';
import { Storage } from './storage';
import { Timer } from './timer';

export default class TimerApp {
  constructor() {
    this.timer = new Timer()
    this.storage = new Storage()
    this.subscribeForAppEvents()
    this.subscribeForIPC()
    app.whenReady().then(() => this.createWindow())
  }

  createWindow() {
    this.window = new BrowserWindow({
      title: CONFIG.name,
      width: CONFIG.width,
      height: CONFIG.height,
      minWidth: CONFIG.width,
      minHeight: CONFIG.height,
      maxWidth: CONFIG.width,
      maxHeight: CONFIG.height,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        height: 30,
        color: "#303952",
        symbolColor: "#fff"
      },
      webPreferences: {
        worldSafeExecuteJavaScript: true,
        preload: path.join(app.getAppPath(), 'preload', 'index.js')
      }
    })

    this.window.loadFile('renderer/index.html')

    this.timer.onChange = () => {
      this.window.webContents.send('tick', JSON.stringify({ time: this.timer.get() }))
    }

    this.window.webContents.on('did-finish-load', () => {
      this.window.webContents.send('entries', JSON.stringify({ entries: this.storage.get('entries') }));
    })

    this.window.on('closed', () => {
      this.timer.onChange = null
      this.window = null
    })

    this.window.webContents.openDevTools({ mode: 'detach' });
  }

  subscribeForAppEvents() {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow()
      }
    })
  }

  subscribeForIPC() {
    ipcMain.on('timer:start', () => {
      this.timer.start()
    })
    ipcMain.on('timer:stop', () => {
      this.timer.stop()
    })
    ipcMain.on('save', (_, data) => {
      const entries = this.storage.get('entries') || []
      entries.push(data)
      this.storage.set('entries', entries)
      this.window.webContents.send('entries', { entries })
    })
  }
}