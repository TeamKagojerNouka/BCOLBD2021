function readStorage() {
    var imageurl = localStorage.getItem("selected_doc");
    const obj = JSON.parse(imageurl);
    document.getElementById("doc-img").src = obj.preview;
    document.getElementById("doc-date").innerHTML = "<b>Date:</b> " + obj.date;
    document.getElementById("doc-owner").innerHTML = "<b>Owned by:</b> " + obj.owner;
    document.getElementById("doc-name").innerHTML = "<b>Name:</b> " + obj.name;;
    document.getElementById("confirmation-modal-text").innerHTML = "You are about to sign <b>" + obj.name + "</b><br>ID <b>#"+ obj.id + "</b> owned by <b>" + obj.owner + "</b>. "; 
    
    document.getElementById("confirmation-modal-btn-success").addEventListener("click", function(event){
        animateProgressBar();
    });

    console.log(obj)
}

document.addEventListener("DOMContentLoaded", () => {
    readStorage();
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateProgressBar() {

    const pb = $('#progressBar');

    for (let i = 0; i <= 100; i+=20) {
   
        const pbProgress = $('#progressBar span');
                
        pbProgress.css("width", `${i}%`);
        pb.show();
    
        await sleep(1000);
    }
   
    pb.hide();
    const anim = document.getElementById("confirmation-modal-anim");
    anim.style["display"] = "flex";
    document.getElementById("confirmation-modal-text").innerHTML = "<b>You have successfully signed this document.</b> <br> Document Hash: <b>763a8dad0ab01d89ce581d74e2f96d0debe8e018</b>";
    document.getElementById("confirmation-modal-title").innerHTML = "<b>Signing Complete</b>";
    document.getElementById("confirmation-modal-btn-success").style["display"] = "none";
    document.getElementById("confirmation-modal-btn-close").textContent = "Done";
    
   
}