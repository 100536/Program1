const length = parseFloat(prompt('Voer de lengte in (in cm):'));
const width = parseFloat(prompt('Voer de breedte in (in cm):'));
const height = parseFloat(prompt('Voer de hoogte in (in cm):'));


const volume = length * width * height;


const resultMessage = `De inhoud is ${volume} cm³`;
document.body.innerHTML = `<h1>${resultMessage}</h1>`;
