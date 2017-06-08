module.exports = (data) => (`
  <html>
    <head>
      <title>${data.title}</title>

      <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
    </head>

    <body>
      <div class="container">
        <div class="hero-unit">
          <h1>${data.acronym}<h1>
          <h2>${data.extended}</h2>
          <p>Please see README for use.</p>
        </div>
      </div>
      <div class="container">
        <div class="content" style="margin-left:50px;">
            ${data.readme}
        </div>
      </div>
    </body>
  </html>
`)