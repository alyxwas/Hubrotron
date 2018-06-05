const {app, BrowserWindow} = require('electron');
const url = require('url');
let win = null

function boot() {
    win = new BrowserWindow({
        width: 1500,
        height: 800,
        resizable: false,
        frame: false
    });
    win.loadURL('https://habr.com')
}

app.on('ready', boot)