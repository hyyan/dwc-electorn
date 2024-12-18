((message) => {
    const loadimage = document.getElementById('BBjLoadImage');
    if (loadimage) {
        try {
            loadimage.remove();
        }
        catch (error) {
        }
    }
    window['electronAPI'].showMessageBox({
        title: message.title,
        message: message.text,
    });
    sendClientEvent({
        bbjSessionId: message.bbjSessionId,
        result: 1,
    });
})(message);
