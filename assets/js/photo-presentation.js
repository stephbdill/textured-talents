(function () {
  'use strict';
  function sizeText(sizes) {
    return sizes.map(function (size) { return size.join(' × '); }).join(', ');
  }
  window.enhanceArtPhoto = function (card, file) {
    var photo = (window.ART_PHOTO_UPDATES || {})[file];
    if (!photo || !card) return;
    var img = card.querySelector('img');
    var caption = card.querySelector('figcaption');
    if (!img || !caption) return;
    img.dataset.artFile = file;
    img.src = photo.preview;
    img.alt = photo.title + ' — painting';
    img.width = photo.previewWidth;
    img.height = photo.previewHeight;
    if (photo.detailWidth > photo.previewWidth) {
      img.srcset = photo.preview + ' ' + photo.previewWidth + 'w, ' + photo.detail + ' ' + photo.detailWidth + 'w';
      img.sizes = card.classList.contains('artwork-detail-card') ? '(max-width: 760px) 100vw, 60vw' : '(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw';
    }
    var imageLink = img.closest('a');
    if (imageLink) {
      imageLink.href = card.classList.contains('artwork-detail-card') ? photo.detail : 'artwork.html?piece=' + encodeURIComponent(file);
      imageLink.removeAttribute('target');
      imageLink.setAttribute('aria-label', 'View ' + photo.title);
    }
    if (!caption.querySelector('.canvas-sizing')) {
      var sizing = document.createElement('div');
      sizing.className = 'canvas-sizing';
      var standard = document.createElement('p');
      var label = document.createElement('strong');
      label.textContent = photo.printNote ? 'Print inquiries: ' : 'Stretched canvas prints: ';
      standard.append(label, document.createTextNode(photo.printNote || (photo.recommended.length ? photo.recommended.map(function (size) { return size.join(' × ') + ' in — $' + window.PRINT_RETAIL_PRICES[size.join('x')]; }).join(' · ') : 'A better photograph is needed before standard sizes can be offered.')));
      sizing.append(standard);
      var options = document.createElement('p');
      options.textContent = 'Handmade decorative outer frame +$75 · Installed hanging hardware +$5. Free local pickup; shipping quoted by destination. Prices in USD, before applicable tax.';
      sizing.append(options);
      if (photo.proof.length) {
        var proof = document.createElement('p');
        proof.className = 'canvas-proof';
        proof.textContent = 'Larger sizes to discuss after a sample print: ' + sizeText(photo.proof) + ' in.';
        sizing.append(proof);
      }
      var finish = document.createElement('p');
      finish.className = 'canvas-finish';
      finish.textContent = 'The full painting stays on the front, with solid-colour or mirrored edges. A small border may be used to keep the artwork complete. Please request a print and colour proof before ordering.';
      sizing.append(finish);
      caption.append(sizing);
    }
    if (photo.reference && !caption.querySelector('.original-photo-link')) {
      var original = document.createElement('a');
      original.className = 'original-photo-link';
      original.href = photo.original;
      original.textContent = 'View the original reference and painting photo';
      caption.append(original);
    }
  };
})();
