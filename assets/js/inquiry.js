(function () {
  'use strict';
  var params = new URLSearchParams(window.location.search);
  var piece = (params.get('piece') || '').replace(/[\r\n]/g, ' ').trim();
  var format = params.get('print');
  var printFormat = piece && Object.hasOwn(PRINT_FORMATS, format) ? PRINT_FORMATS[format] : '';
  var details = document.getElementById('details');
  var emailLink = document.getElementById('email-inquiry');
  function updateEmail() {
    var subject = printFormat ? printFormat + ' request: ' + piece :
      piece ? 'Artwork inquiry: ' + piece : 'Artwork or commission inquiry';
    emailLink.href = 'mailto:stephbdill@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(details.value);
  }
  var requestedArtwork = (window.ART || []).find(function (art) { return piece && (art.title === piece || art.file === piece || art.alt === piece || (art.aliases || []).includes(piece)); });
  if (printFormat) {
    document.title = printFormat + ' Request | Textured Talent';
    document.getElementById('inquiry-heading').textContent = printFormat + ' of ' + piece;
    document.getElementById('inquiry-intro').textContent = 'Request a reproduction from Stephanie Dill.';
    document.getElementById('contact-title').textContent = 'Request this print';
    document.getElementById('contact-intro').textContent = 'Add your preferred size and quantity. Stephanie will confirm availability, pricing, and pickup or shipping.';
    document.getElementById('inquiry-steps').hidden = true;
    details.value = 'Hello Stephanie, I’d like to order a ' + printFormat.toLowerCase() + ' of "' + piece + '". Could you confirm the available sizes, pricing, and pickup or shipping options?';
  } else if (requestedArtwork && requestedArtwork.status === 'sold') {
    document.getElementById('inquiry-heading').textContent = 'This artwork has sold';
    document.getElementById('contact-title').textContent = 'Discuss a new commission';
    details.value = 'Hello Stephanie, I saw your sold artwork and would like to discuss a new commission inspired by it.';
  } else if (piece) {
    document.getElementById('inquiry-heading').textContent = 'Ask about ' + piece;
    document.getElementById('contact-title').textContent = 'Bring this original home.';
    details.value = 'Hello Stephanie, I’m interested in "' + piece + '". Is it available? Could you share its price, dimensions, materials, and pickup or delivery options?';
  }
  if (!printFormat && requestedArtwork && (requestedArtwork.description || requestedArtwork.dimensions || requestedArtwork.materials)) {
    var artworkDetails = document.createElement('p');
    artworkDetails.textContent = [requestedArtwork.description, requestedArtwork.status === 'available' && typeof requestedArtwork.price === 'number' ? 'Price: $' + requestedArtwork.price.toLocaleString('en-US') : '', requestedArtwork.dimensions ? "Size: " + requestedArtwork.dimensions : "", requestedArtwork.materials ? 'Materials: ' + requestedArtwork.materials : ''].filter(Boolean).join(' · ');
    document.getElementById('contact-title').insertAdjacentElement('afterend', artworkDetails);
  }
  details.addEventListener('input', updateEmail);
  updateEmail();
  document.getElementById('copy-inquiry').addEventListener('click', async function () {
    var status = document.getElementById('copy-status');
    if (!details.value.trim()) {
      status.textContent = 'Write a short inquiry first, then copy it to send to Stephanie.';
      details.focus();
      return;
    }
    try {
      await navigator.clipboard.writeText(details.value);
      status.textContent = 'Copied. Paste your inquiry into an email to stephbdill@gmail.com. It has not been sent yet.';
    } catch (_) {
      details.focus();
      details.select();
      status.textContent = 'Select and copy the text manually, then paste it into an email to stephbdill@gmail.com.';
    }
  });
})();
