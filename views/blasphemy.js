module.exports = (data) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${data.title}</title>
      <meta charset="utf-8">

      <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
    </head>
    <body style="margin-top:40px;">
      <div class="container">
        <div id="view-10" view="">
          <div class="hero-unit">
            <h1>${data.message}</h1>
            ${data.subtitle ? `<p><em>${data.subtitle}</em></p>` : ''}
          </div>
        </div>
      </div>
    </body>
  </html>
`