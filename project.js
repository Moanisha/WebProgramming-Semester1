function switchTo(show, hide) {
    let images = document.getElementsByClassName("slide");
    if (hide > -1) {
        images[hide].style.display = "none";
    }
    images[show].style.display = "block";
}


function openModal(modalId, imageId, closeId) {
    // Get the modal
    var modal = document.getElementById(modalId);
    
    // Get the button that opens the modal
    var btn = document.getElementById(imageId);
    
    // Get the <span> element that closes the modal
    var span = document.getElementById(closeId);
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}