const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 570,
    height: 325,
    frame: false,
    alwaysOnTop: true,
    fullscreenable: false,
    minimizable: false,
    resizable: false,
    icon: "./app/icon.png",
    title: "Pox Time",
    autoHideMenuBar: true,
    titleBarStyle: null,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('./app/index.html')

  win.webContents.openDevTools()
}; app.whenReady().then(createWindow);
