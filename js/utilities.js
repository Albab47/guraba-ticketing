function setElementTextById(elemId, value) {
    return document.getElementById(elemId).innerText = value;
}

function hideElementById(elemId) {
    const element = document.getElementById(elemId);
    element.classList.add('hidden');
}

function showElementById(elemId) {
    const element = document.getElementById(elemId);
    element.classList.remove('hidden'); 
}

function getInputValueById(elemId) {
    return document.getElementById(elemId).value;
}

function clearInputValueById(elemId) {
    return document.getElementById(elemId).value = '';
}