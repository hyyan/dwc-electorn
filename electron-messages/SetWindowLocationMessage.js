((message) => {
    window['electronAPI'].setWindowLocation(message.x, message.y);
})(message);
