export const download = (filename: string, json: Json) => {
    const data = JSON.stringify(json, null, 4);

    const blob = new Blob([data], { type: 'text/csv' });
    // @ts-ignore
    if (window.navigator.msSaveOrOpenBlob) {
        // @ts-ignore
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
};
