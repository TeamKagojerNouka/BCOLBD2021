function readStorage() {
    var imageurl = localStorage.getItem("selected_doc");
    const obj = JSON.parse(imageurl);
    document.getElementById("doc-img").src = obj.preview;
    document.getElementById("doc-date").textContent = obj.date;
    document.getElementById("doc-name").textContent = obj.name;
    document.getElementById("confirmation-modal-text").textContent = "You are about to sign " + obj.name + " ID #"+ obj.id + " owned by " + obj.owner; 
    
    document.getElementById("confirmation-modal-btn").addEventListener("click", function(event){
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

    for (let i = 0; i <= 100; i+=20) {

        const pb = $('#progressBar');
        const pbProgress = $('#progressBar span');
        
        
        pbProgress.css("width", `${i}%`);
        pb.show();
    
        await sleep(1000);
    }
    // if (progress >= 100) {
    //     pb.hide();
    // }

}