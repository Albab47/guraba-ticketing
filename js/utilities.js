function setElementTextById(elemId, value) {
    return document.getElementById(elemId).innerText = value;
}

function hideElementById(elemId) {
    const element = document.getElementById(elemId);
    element.classList.add('hidden');
}