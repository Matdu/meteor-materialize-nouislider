# matdu:meteor-materialize-nouislider

## Add noUISlider to Meteor

`meteor add matdu:meteor-materialize-nouislider`

Uses the library from <a href="https://www.npmjs.com/package/nouislider" target="_blank">`nouislider` NPM repo</a>.

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

Checkout the noUISlider project at <a href="https://github.com/leongersen/noUiSlider" target="_blank">https://github.com/leongersen/noUiSlider</a> for a more detailed documention.
