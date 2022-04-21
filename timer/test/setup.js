const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'Timer.app', 'Contents', 'MacOS', 'Timer')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'Timer')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'Timer.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
