((message) => {
    const tlw = document.createElement('dwc-frame');
    const id = message.objectID;
    tlw.setAttribute('dwc-id', id);
    objects.set(message.objectID, tlw);
})(message);
