((message) => {
    const panel = document.createElement('dwc-window-content');
    const id = message.objectID;
    panel.setAttribute('dwc-id', id);
    objects.set(message.objectID, panel);
})(message);
