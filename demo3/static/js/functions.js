const deleteFile = function(e) {
    storageRef.child(e.target.dataset.file).delete()
        .then(() => {
            const key = e.target.dataset.key;
            firebase.database().ref('files').child(key).remove();
        });
};


const createFileContainer = function(f, deleteFunction, key) {
    const fileDiv = document.createElement('div');
    const title = document.createElement('h3');
    const aDownload = document.createElement('a');
    const aDelete = document.createElement('a');

    fileDiv.title = f.filename;
    fileDiv.classList.add('file');

    title.classList.add('title');
    title.appendChild(document.createTextNode(f.filename));

    aDownload.href = f.downloadURL;
    aDownload.innerText = 'Baixar';

    aDelete.href = 'javascript:void(0)';
    aDelete.innerText = 'Excluir';
    aDelete.dataset.file = f.filename;
    aDelete.dataset.key = key;
    aDelete.addEventListener('click', deleteFunction, false);

    fileDiv.appendChild(title);
    fileDiv.appendChild(aDownload);
    fileDiv.appendChild(aDelete)


    return fileDiv;
};