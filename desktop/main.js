
const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

// export{CreateWindow};
// module.exports = mainWindow;

function CreateWindow(){
    let mainWindow = new BrowserWindow({
        // minWidth: 900,
        // minHeight: 600,
        // maxWidth: 900,
        // maxHeight: 600,
        height: 600,
        width: 900,
        show: false,    // скрыть после создания
        resizable: false,
        icon: __dirname + "/img/icon.jpg"
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show() // показать окно после полной загрузки    
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.webContents.openDevTools();//для разработчика

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
};

app.on('ready', CreateWindow);

app.on('window-all-closed', () => {
    app.quit();
});