((message) => {
    let win;
    if (message.tlw) {
        win = document.createElement('dwc-window-center');
        win.setAttribute('tlw', message.tlw);
        win.setSizeMessage = (_component, width, height) => {
            window['electronAPI'].setWindowSize(width, height + 60);
        };
    }
    else {
        win = document.createElement('dwc-child-center');
    }
    const id = message.objectID;
    win.setAttribute('dwc-id', id);
    document.body.appendChild(win);
    objects.set(message.objectID, win);
})(message);
