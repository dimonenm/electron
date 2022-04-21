import path from 'path'
import { app, BrowserWindow } from 'electron';

export default class TimerApp {
  constructor() {
    this.subscribeForAppEvents()
    app.whenReady().then(() => this.createWindow())
  }

  createWindow() {
    this.window = new BrowserWindow({
      title: CONFIG.name,
      width: CONFIG.width,
      height: CONFIG.height,
      webPreferences: {
        worldSafeExecuteJavaScript: true,
        preload: path.join(app.getAppPath(), 'preload', 'index.js')
      }
    })

    this.window.on('closed', () => {
      this.window = null
    })

    this.window.loadFile('renderer/index.html')

    this.window.webContents.openDevTools({ mode: 'detach' })
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
}