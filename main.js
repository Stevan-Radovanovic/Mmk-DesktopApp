const { app, BrowserWindow, Notification } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
  })


  win.setMenuBarVisibility(false);
  win.loadURL(`file://${__dirname}/dist/mmk-app/index.html`)

  win.on('closed', function () {
    win = null
  })
}

function showNotification () {
  const notification = {
    title: 'Welcome to MMKlab App',
    body: 'Made by Stevan Radovanović'
  }
  new Notification(notification).show()
}

app.whenReady().then(createWindow).then(showNotification);

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})