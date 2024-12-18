((message) => {
    window['electronAPI'].setWindowTitle(message.title);
})(message);
