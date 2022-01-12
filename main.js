const {
   app,
   BrowserWindow
} = require('electron')
const path = require('path')

if(require('electron-squirrel-startup')) app.quit()

const craeteWindow = () => {
   const mainWindow = new BrowserWindow({
      width: 1000,
      height: 700,
      webPreferences: {
         nodeIntegration: true,
         preload: path.join(__dirname, 'preload.js'),
         contextIsolation:false,
         enableRemoteModule:true,
         webviewTag:true

      }
   })

   mainWindow.loadFile(path.join(__dirname, './src/index.html'))

   mainWindow.setTitle("File Reader V1")
   mainWindow.setIcon(path.join(__dirname, './src/folder.png'))
   mainWindow.setMenu(null)
   //mainWindow.webContents.openDevTools()
}

app.whenReady()
   .then(() => {
      craeteWindow()

      app.on('activate', () => {
         if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
   })

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit()
})