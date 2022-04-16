const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'App.app', 'Contents', 'MacOS', 'App')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'App')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'App.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
