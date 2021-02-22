function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploaded-img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateProgressBar() {

    const pb = $('#progressBar');

    for (let i = 0; i <= 100; i += 20) {

        const pbProgress = $('#progressBar span');

        pbProgress.css("width", `${i}%`);
        pb.show();

        await sleep(1000);
    }

    pb.hide();
    const anim = document.getElementById("confirmation-modal-anim");
    anim.style["display"] = "flex";
    document.getElementById("confirmation-modal-text").innerHTML = "<b>You have successfully uploaded this document.</b>";
    document.getElementById("confirmation-modal-title").innerHTML = "<b>Upload Complete</b>";
    document.getElementById("confirmation-modal-btn-success").style["display"] = "none";
    document.getElementById("confirmation-modal-btn-close").textContent = "Done";
}

document.getElementById("confirmation-modal-btn-success").addEventListener("click", function(event) {
    animateProgressBar();
});