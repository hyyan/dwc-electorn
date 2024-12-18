const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 0,
    height: 0,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL('http://localhost:8888/webapp/electrontest');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

ipcMain.on('set-window-size', (event, { width, height }) => {
  if (mainWindow) {
    mainWindow.setSize(width, height);
  }
});

ipcMain.on('set-window-location', (event, { x, y }) => {
  if (mainWindow) {
    mainWindow.setBounds({ x, y, width: mainWindow.getBounds().width, height: mainWindow.getBounds().height });
  }
});

ipcMain.on('set-window-title', (event, title) => {
  if (mainWindow) {
    mainWindow.setTitle(title);
  }
});

ipcMain.handle('show-message-box', async (event, options) => {
  const result = await dialog.showMessageBox(mainWindow, {
    type: 'info',
    buttons: ['OK'],
    defaultId: 0,
    title: options.title || 'Default Title',
    message: options.message || 'Default Content',
  });
  return result.response; // Returns the button index (0 for OK in this case)
});

// Initialize the app
app.whenReady().then(() => {
  createWindow();
});
