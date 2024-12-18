const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setWindowTitle: (title) => ipcRenderer.send('set-window-title', title),
  setWindowSize: (width, height) => ipcRenderer.send('set-window-size', { width, height }),
  setWindowLocation: (x, y) => ipcRenderer.send('set-window-location', { x, y }),
  showMessageBox: (options) => ipcRenderer.invoke('show-message-box', options),
});
