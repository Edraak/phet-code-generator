jQuery(function ($) {
  new Clipboard('#copy');

  $('#da-form').submit(function (e) {
    e.preventDefault();

    var embedCode = $('#simulation-url').val();

    if (!$.trim(embedCode)) {
      alert('Please enter the simulation code from PhET website.')
      return;
    }

    var iframeUrl = $(embedCode).attr('src');
    var sourceUrl = $('#source-url').val();

    if (iframeUrl.startsWith('http:')) {
      iframeUrl = iframeUrl.replace('http:', 'https:');
    }

    var template = $('#result-template').text();

    var renderedHtml = Mustache.render(template, {
      iframeUrl: iframeUrl,
      sourceUrl: sourceUrl
    });

    $('#result').html(renderedHtml);
    $('#preview').html(renderedHtml);
  });
});
