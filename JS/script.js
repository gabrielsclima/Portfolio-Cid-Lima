let carrosselPos,
    carrossel = document.getElementById("mainCarrossel"),
    currentPos = 0;
    modalProducts = document.getElementsByClassName("modalProduct");
    closeButton = document.getElementById("closeButton");
    lastModal = 0;

function moveCarrosselRight(n){
    if (currentPos + n <= 0 && currentPos > -186){
        carrossel.style.marginLeft = `${currentPos + n}vw`;
        currentPos += n;
    }

    else{
        currentPos = 0;
        carrossel.style.marginLeft = `${currentPos}vw`;
    }
}

function moveCarrosselLeft(n){
    if (!(currentPos + n > 0)){
        carrossel.style.marginLeft = `${currentPos + n}vw`;
        currentPos += n;
    }
}

function openModal(n){
    modalProducts[n].style.cssText="display: flex";
    closeButton.style.visibility="visible";
    lastModal = n;
}

function closeModal(n){
    modalProducts[n].style.cssText="display: none";
    closeButton.style.visibility="hidden";
}
