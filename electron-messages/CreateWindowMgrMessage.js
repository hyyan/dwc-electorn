((message) => {
    let desktop;
    if (message.mdiPaneId) {
        desktop = document.createElement('dwc-mdi-desktop');
    }
    else {
        desktop = document.createElement('dwc-frame-manager');
    }
    desktop.mdiPaneId = message.mdiPaneId;
    document.body.appendChild(desktop);
    objects.set(message.objectID, desktop);
})(message);
