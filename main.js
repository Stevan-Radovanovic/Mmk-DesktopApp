const { app, BrowserWindow, Notification, globalShortcut } = require('electron')

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

function registerGlobalShortcuts () {
  globalShortcut.register('Alt+x', closeApp);
  globalShortcut.register('Alt+m', minimizeApp);
  globalShortcut.register('Alt+l', maximizeApp);
}

function closeApp () {
  win.close();
  const notification = {
    title: 'MMKlab App Notify',
    body: 'App Closed'
  }
  new Notification(notification).show();
}

function minimizeApp () {
  win.minimize();
  const notification = {
    title: 'MMKlab App Notify',
    body: 'App Minimized'
  }
  new Notification(notification).show()
}

function maximizeApp () {
  win.maximize();
  const notification = {
    title: 'Welcome to MMKlab App',
    body: 'App Maximized'
  }
  new Notification(notification).show()
}

app.whenReady().then(createWindow).then(showNotification).then(registerGlobalShortcuts);

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