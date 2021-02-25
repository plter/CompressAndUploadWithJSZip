(function () {

    let btnUpload = document.querySelector("#btn-upload");
    let fileChooser = document.querySelector("#file-chooser");

    async function btnUpload_clickHandler() {
        if (fileChooser.files && fileChooser.files.length) {

            let f = fileChooser.files[0];

            let zip = new JSZip();
            zip.file(f.name, f);

            let zipBlob = await zip.generateAsync({type: "blob"});

            let form = new FormData();
            form.append("zip", zipBlob, "file.zip");

            let resp = await fetch("ajax_upload_handler.php", {
                method: "POST",
                body: form
            });
            console.log(await resp.text());

        } else {
            alert("请选择文件");
        }
    }

    function addListeners() {
        btnUpload.onclick = btnUpload_clickHandler;
    }

    function main() {
        addListeners();
    }

    main();

})();