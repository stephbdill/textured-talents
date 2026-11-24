(function () {
  'use strict';
  var file = new URLSearchParams(location.search).get('piece');
  var photo = (window.ART_PHOTO_UPDATES || {})[file];
  var root = document.getElementById('artwork-detail');
  if (!photo) {
    root.textContent = 'Choose an artwork from the Fine Art or Pet Portraits gallery to view its photograph and recommended canvas sizes.';
    return;
  }
  var piece = window.ART.find(function (item) { return item.file === file; });
  document.title = photo.title + ' — Canvas Prints | Textured Talent';
  var figure = document.createElement('figure');
  figure.className = 'art-card artwork-detail-card';
  var link = document.createElement('a');
  link.href = photo.detail;
  var img = document.createElement('img');
  img.src = photo.preview;
  img.alt = photo.title + ' — painting';
  img.dataset.artFile = file;
  link.append(img);
  var cap = document.createElement('figcaption');
  var title = document.createElement('h1');
  title.textContent = photo.title;
  cap.append(title);
  if (piece && piece.titleNote) {
    var titleNote = document.createElement('p');
    titleNote.className = 'art-description';
    titleNote.textContent = piece.titleNote;
    cap.append(titleNote);
  }
  if (piece && piece.description) {
    var description = document.createElement('p');
    description.textContent = piece.description;
    cap.append(description);
  }
  if (piece && piece.materials) {
    var materials = document.createElement('p');
    materials.textContent = piece.materials;
    cap.append(materials);
  }
  figure.append(link, cap);
  root.replaceChildren(figure);
  window.enhanceArtPhoto(figure, file);
  addPrintOptions(figure, piece || { title: photo.title }, img, file);
})();
