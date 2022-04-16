import { app, BrowserWindow } from 'electron';

// const lock = app.releaseSingleInstanceLock();
// console.log('lock: ', lock);

// if (!lock) {
//   app.quit();
// } else {
//   app.on('second-instance', () => {
//     console.log('App is already running');
//     if (win) {
//       win.focus();
//     }
//   })
// }

app.whenReady().then(() => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadFile('renderer/index.html');
  win.webContents.openDevTools()
});