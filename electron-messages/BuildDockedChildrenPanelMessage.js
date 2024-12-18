((message) => {
    const flowLayout = message.flowLayout;
    let dcp;
    if (message.tlw) {
        dcp = document.createElement('dwc-window-container');
        dcp.setAttribute('tlw', message.tlw);
    }
    else {
        dcp = document.createElement('dwc-child-container');
    }
    dcp["flow-layout"] = flowLayout;
    const id = message.objectID;
    dcp.setAttribute('dwc-id', id);
    objects.set(message.objectID, dcp);
})(message);
