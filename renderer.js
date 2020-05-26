window.loaded = () => {

    const remote = require('electron').remote;

    const win = remote.getCurrentWindow();
    
    const toggleMaxRestoreButtons = () => {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
    
    if (document.readyState == "complete") {
        handleWindowControls();

        // document.getElementById('electron-ver').innerHTML = `${process.versions.electron}`;
    }
    
    window.onbeforeunload = _ => win.removeAllListeners();
    
    const handleWindowControls = () => {
        // Make minimise/maximise/restore/close buttons work when they are clicked
        document.getElementById('min-button').addEventListener("click", _ => win.minimize());
        document.getElementById('max-button').addEventListener("click", _ => win.maximize());
        document.getElementById('restore-button').addEventListener("click", _ => win.unmaximize());
        document.getElementById('close-button').addEventListener("click", _ => win.close());
    
        // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
        toggleMaxRestoreButtons();
        win.on('maximize',   toggleMaxRestoreButtons);
        win.on('unmaximize', toggleMaxRestoreButtons);
    }
}