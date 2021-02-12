const { app, BrowserWindow, Notification, globalShortcut, nativeTheme } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    //backgroundColor: '#ffffff',
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
  globalShortcut.register('Alt+t', changeTheme);
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

function changeTheme() {
  if(nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light';
  } else {
    nativeTheme.themeSource = 'dark';
  }

  console.log(nativeTheme.themeSource)
  const notification = {
    title: 'MMKlab App Notify',
    body: 'App Theme Changed'
  }
  new Notification(notification).show()
}

function initialSetup() {
  showNotification();
  registerGlobalShortcuts();
}

app.whenReady().then(createWindow).then(initialSetup);

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