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
    const oldInputVal = document.getElementById(elemId).value;
    document.getElementById(elemId).value = '';
    return oldInputVal;
}

function clearInputValueById(elemId) {
    return document.getElementById(elemId).value = '';
}

function removeDisabledById(elemId) {
   document.getElementById(elemId).removeAttribute('disabled');
}