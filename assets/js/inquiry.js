(function () {
  'use strict';
  var params = new URLSearchParams(window.location.search);
  var piece = (params.get('piece') || '').replace(/[\r\n]/g, ' ').trim();
  var format = params.get('print');
  var printFormat = piece && Object.hasOwn(PRINT_FORMATS, format) ? PRINT_FORMATS[format] : '';
  var details = document.getElementById('details');
  var emailLink = document.getElementById('email-inquiry');
  var printChoices = null;
  function inquiryBody() {
    if (!printChoices) return details.value;
    return details.value + '\n\nPrint preferences:\n' + Array.from(printChoices.querySelectorAll('select, input')).map(function (field) {
      return field.dataset.label + ': ' + (field.value || 'Please advise');
    }).join('\n') + '\n' + (document.getElementById('print-price-summary') || {}).textContent + '\nPlease confirm the complete price, including any framing, hardware, shipping and applicable tax, before production.';
  }
  function updateEmail() {
    var summary = document.getElementById('print-price-summary');
    if (summary) {
      var size = document.getElementById('print-size').value;
      var base = Number((size.match(/\$(\d+)/) || [])[1]);
      var extras = (document.getElementById('print-frame').selectedIndex ? 75 : 0) + (document.getElementById('print-hardware').selectedIndex ? 5 : 0);
      summary.textContent = base ? 'One print subtotal: $' + (base + extras) + ' USD. ' + (document.getElementById('print-delivery').selectedIndex ? 'Shipping quoted separately. ' : 'Local pickup is free. ') + 'Applicable tax is additional. Final total and print proof confirmed before production.' : 'Choose a listed size to see your subtotal. Other sizes and paper prints are priced by request.';
    }
    var subject = printFormat ? printFormat + ' request: ' + piece :
      piece ? 'Artwork inquiry: ' + piece : 'Artwork or commission inquiry';
    emailLink.href = 'mailto:stephbdill@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(inquiryBody());
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
    printChoices = document.createElement('fieldset');
    printChoices.className = 'print-choices';
    var legend = document.createElement('legend');
    legend.textContent = 'Choose your print options';
    printChoices.append(legend);
    function choice(id, label, options) {
      var wrapper = document.createElement('div');
      var title = document.createElement('label');
      title.htmlFor = id;
      title.textContent = label;
      var select = document.createElement('select');
      select.id = id;
      select.dataset.label = label;
      options.forEach(function (text) { var option = document.createElement('option'); option.value = text; option.textContent = text; select.append(option); });
      select.addEventListener('change', updateEmail);
      wrapper.append(title, select);
      printChoices.append(wrapper);
    }
    var photo = Object.values(window.ART_PHOTO_UPDATES || {}).find(function (item) { return item.title === piece || (requestedArtwork && item.original === 'assets/img/' + requestedArtwork.file); });
    var sizes = photo && format === 'canvas' ? photo.recommended.map(function (size) { return size.join(' × ') + ' inches — $' + window.PRINT_RETAIL_PRICES[size.join('x')]; }) : [];
    choice('print-size', 'Size', ['Please advise'].concat(sizes, ['Ask about another size']));
    choice('print-frame', 'Frame', format === 'canvas' ? ['Without decorative outer frame', 'Handmade outer frame (+$75)'] : ['Without a frame', 'Frame — quote requested']);
    choice('print-hardware', 'Hanging hardware', format === 'canvas' ? ['Without hanging hardware', 'Installed hardware (+$5)'] : ['Without hanging hardware', 'Hanging hardware — quote requested']);
    choice('print-delivery', 'Delivery', ['Local pickup in Rohnert Park', 'Shipping']);
    var destination = document.createElement('div');
    var destinationLabel = document.createElement('label');
    destinationLabel.htmlFor = 'print-destination';
    destinationLabel.textContent = 'Shipping destination (city, ZIP/postal code and country)';
    var destinationInput = document.createElement('input');
    destinationInput.id = 'print-destination';
    destinationInput.type = 'text';
    destinationInput.dataset.label = 'Shipping destination';
    destinationInput.placeholder = 'For a shipping quote; leave blank for pickup';
    destinationInput.autocomplete = 'off';
    destinationInput.addEventListener('input', updateEmail);
    destination.append(destinationLabel, destinationInput);
    printChoices.append(destination);
    var summary = document.createElement('p');
    summary.id = 'print-price-summary';
    summary.setAttribute('aria-live', 'polite');
    printChoices.append(summary);
    document.getElementById('contact-intro').insertAdjacentElement('afterend', printChoices);
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
      await navigator.clipboard.writeText(inquiryBody());
      status.textContent = 'Copied. Paste your inquiry into an email to stephbdill@gmail.com. It has not been sent yet.';
    } catch (_) {
      details.focus();
      details.select();
      status.textContent = 'Select and copy the text manually, then paste it into an email to stephbdill@gmail.com.';
    }
  });
})();
