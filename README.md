# matdu:meteor-materialize-nouislider

## Add noUISlider to Meteor

`meteor add matdu:meteor-materialize-nouislider`

Uses the custom noUiSliderlibrary from <a href="https://github.com/Dogfalo/materialize" target="_blank">`Materialize`</a>.

## Usage

Add the to your onRendered (blaze) or componentDidMount (react) function:

```
noUiSlider.create(document.getElementById("slider"), {
  connect: "lower",
  range: {
    min: 0,
    max: 100
  },
  start: [50, 70],
});
```

## Documentation

Checkout the noUISlider project at <a href="http://refreshless.com/nouislider/" target="_blank">https://github.com/leongersen/noUiSlider/stargazers</a> for a more detailed documention.
