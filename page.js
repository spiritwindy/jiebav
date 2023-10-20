const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    // 加载主文件
    mainWindow.loadURL("http://localhost:800/www/main.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // 在macOS上，当单击停靠栏图标且没有其他窗口打开时，
        // 通常在应用程序中重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户使用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持活动状态。
    if (process.platform !== 'darwin') app.quit()
})