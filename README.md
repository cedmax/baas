## Introduction
Baas (Blasfemy as a Service) provides a modern, RESTful, scalable solution to the common problem of swearing.</p>

## Content Negotiation

Baas will respond to the following 'Accept:' values with appropriate content

* application/json - Content will be returned as a JSON object { message: 'message', subtitle: 'subtitle' }
* text/html - Content will be returned as an HTML page with a twitter bootstrap hero unit, containing the message and the subtitle.	

## API

### /swear/:divinity/:animal[/:from]
Will return content of the form ':Divinity :animal! - :from'  
_e.g.: /swear/giunone/maiala/ced will return 'Giunone maiala! - ced'_

### /sake/:divinity[/:from]
Will return content of the form 'For :Divinity'[s] sake! - :from'  
_e.g.: /sake/jesus/ced will return 'For Jesus' sake! - ced'_

### /holy/:divinity[/:from]
Will return content of the form 'Holy :Divinity'[s]! - :from'  
_e.g.: /holy/jesus/ced will return 'Holy Jesus! - ced'_

### /blood/:divinity[/:from]
Will return content of the form 'By the blood of :Divinity! - :from'  
_e.g.: /blood/god/ced will return 'By the blood of God! - ced'_

### /ohmy/:divinity[/:from]
Will return content of the form 'Oh my fucking :Divinity'! - :from'  
_e.g.: /ohmy/lord/ced will return 'Oh my fucking Lord! - ced'_

### /nails/:divinity[/:from]
Will return content of the form 'By :Divinity'[s] nails! - :from'  
_e.g.: /nails/jesus/ced will return 'By Jesus' nails! - ced'_

## URL

[http://baas.dsgn.it](http://baas.dsgn.it)

## Credits

Not Written in [LocomotiveJs](http://locomotivejs.org/).  
Not Inspired to [FOAAS (Fuck Off As A Service)](https://foaas.com/)

__All contributions are very welcome.__

Fork me on [github](https://github.com/dsgn/baas)  
Created by [@cedmax](http://twitter.com/cedmax)


_- ced_
