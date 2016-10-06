# matdu:meteor-materialize-nouislider

## Add noUISlider to Meteor

`meteor add matdu:meteor-materialize-nouislider`

Uses the custom noUiSliderlibrary from <a href="https://github.com/Dogfalo/materialize" target="_blank">`Materialize`</a>.

## Usage

Add the to your onRendered (blaze) or componentDidMount (react).

##Example
###Blaze
```
Template["name"].onRendered(function(){
	var slider = document.getElementById('slider');
	noUiSlider.create(slider, {
		start: [20, 80],
		connect: true,
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});
})
```

## Documentation

Checkout the noUISlider project at <a href="http://refreshless.com/nouislider/" target="_blank">https://github.com/leongersen/noUiSlider/stargazers</a> for a more detailed documention.

## Collaboration

Pull requests are **ALWAYS** appreciated! 
Thank you for your support!
