import { app, screen, BrowserWindow, Menu, MenuItem, Tray } from 'electron';
import path from 'path';
import icon from '013 trayTemplate.png';

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

const template = [
  {
    label: 'File',
    submenu: [
      { role: 'quit' }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...[
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ]
    ]
  },
  new MenuItem({
    label: app.name,
    submenu: [
      new MenuItem({
        label: 'Option 1',
        click() {
          console.log('Option 1 clicked')
        }
      }),
      new MenuItem({
        type: 'separator'
      }),
      new MenuItem({
        label: 'Option 2',
        click() {
          console.log('Option 2 clicked')
        }
      })
    ]
  }),
  {
    label: 'test',
    submenu: [
      {
        label: 'Option 1',
        click() {
          console.log('Option 1 clicked')
        }
      },
      {
        label: 'Option 2',
        click() {
          console.log('Option 2 clicked')
        }
      }
    ]
  },
]

const ctxTemplate = [
  {label: 'Op 1'},
  {label: 'Op 2'},
  {type: 'separator'},
  {label: 'Op 3'},
]
const ctxMenu = Menu.buildFromTemplate(ctxTemplate);

const createMenu = () => {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// const createWindow = () => {
//   const { width, height } = screen.getPrimaryDisplay().workAreaSize;

//   let win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     minWidth: 400,
//     minHeight: 400,
//     maxWidth: width,
//     maxHeight: height,
//     show: false,
//     // titleBarStyle: "hidden",
//     // titleBarOverlay: {
//     //   color: 'cadetblue',
//     //   symbolColor: '#000000'
//     // },
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//     }
//   })
//   win.loadFile('renderer/index.html');

//   win.on('ready-to-show', () => {
//     win.show();
//   })
//   win.webContents.on('context-menu', (event, params) => {
//     ctxMenu.popup(win, params.x, params.y)
//   })

//   win.webContents.openDevTools();
// }

app.whenReady().then(() => {
  createMenu();
  // createWindow();  

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 400,
    maxWidth: width,
    maxHeight: height,
    show: false,
    // titleBarStyle: "hidden",
    // titleBarOverlay: {
    //   color: 'cadetblue',
    //   symbolColor: '#000000'
    // },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })
  win.loadFile('renderer/index.html');

  win.on('ready-to-show', () => {
    win.show();
  })
  win.webContents.on('context-menu', (event, params) => {
    ctxMenu.popup(win, params.x, params.y)
  })

  // win.webContents.openDevTools();

  const trayMenu = Menu.buildFromTemplate([
    {
      label: 'Show / Hide',
      click: () => {
        win.isVisible() ? win.hide() : win.show();
      }
    },
    {role: 'quit'}
  ])

  const tray = new Tray(path.resolve(__dirname, icon));
  tray.setToolTip('exp-photo-table');
  tray.setContextMenu(trayMenu);
  // tray.on('click', () => {
  //   win.isVisible() ? win.hide() : win.show();
  // })

});