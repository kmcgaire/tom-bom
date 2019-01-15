var requestChanges = document.getElementsByClassName('octicon octicon-request-changes')
var arrayLength = requestChanges.length;

for (var i = 0; i < arrayLength; i++) {
    var svg = requestChanges[i];;
    if (svg && svg.parentElement) {
      var parent = svg.parentElement;
      parent.removeChild(svg);

      var andyImage = document.createElement("img");
      andyImage.setAttribute('src','https://user-images.githubusercontent.com/3857316/51193124-1d86d180-18b6-11e9-9592-5fc009d58ef0.png');
      andyImage.setAttribute('alt', 'na');
      andyImage.setAttribute('height', '20px');
      andyImage.setAttribute('width', '20px');
      parent.appendChild(andyImage);
    }
}

var approvedChanges = document.getElementsByClassName('octicon octicon-check text-green')
var arrayLength = approvedChanges.length;

for (var i = 0; i < arrayLength; i++) {
    var svg = approvedChanges[i];
    if (svg && svg.parentElement) {
      var parent = svg.parentElement;
      parent.removeChild(svg);

      var tomImage = document.createElement("img");
      tomImage.setAttribute('src','https://user-images.githubusercontent.com/3857316/51193121-1c55a480-18b6-11e9-9fe2-c28f83c57600.png');
      tomImage.setAttribute('alt', 'na');
      tomImage.setAttribute('height', '20px');
      tomImage.setAttribute('width', '20px');
      parent.appendChild(tomImage);
    }
}

console.log("Welcome to the future");

