const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

//https://zestedesavoir.com/tutoriels/996/vos-applications-avec-electron/

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1920, 
    height: 1080,
    icon: 'assets/logo/logo_v2_draftcode_color_bg_no_transparent.png',
    title: 'DraftCode: Draft your code !',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadURL(`file://${__dirname}/src/html/index.html`); // on doit charger un chemin absolu

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {     // il quitte l'application si toutes les fenêtres ont été fermé (sauf sur Mac avec la condition)
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', () => {      // mais a cause de la condition au dessus, il faut faire ça pour relancer le programme si jamais on l'a fermé
  if (mainWindow === null) {
    createWindow();
  }
});