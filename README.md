# d2l-audio

Polymer audio player component.

## Usage

* Install [bower-art-resolver](https://www.npmjs.com/package/bower-art-resolver).
* Create a `.bowerrc` file in your project:
```
{
	"registry": {
		"search": [
			"https://ro-dev:AP3hK9qVHxhdvdFwPeGMw2bj5eWeuDJZuRCdBB@d2lartifacts.artifactoryonline.com/d2lartifacts/api/bower/bower-local",
			"https://bower.herokuapp.com"
  		]
	},
	"resolvers": [
		"bower-art-resolver"
	]
}
```
* Install `d2l-audio` with Bower.
* Run `npm install`
* Run `bower install`
* Import and use the component:
```
<link rel="import" href="path/to/bower_components/d2l-audio/d2l-audio.html">

...

<d2l-audio src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"></d2l-audio>
<d2l-audio-mini src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"><d2l-audio-mini>
```

## General Properties

`src (String)`: Audio URL or URL where the audio URL can be requested (see `requestSrc`).

`auto-load (Boolean)`: If set, the audio is loaded immediately when the component is loaded (or the `src` changes). Otherwise, the audio is loaded when the play button is pressed.

`request-src (Boolean)`: If set, the audio URL is requested from the `src` URL. The response to this request must be *JSON* in the following format:

```
{
	url: '<Audio URL>'
}
```

This is useful when auto-load is not set, for supporting signed audio URLs that may expire prior to the play button being pressed.

### `<d2l-audio>` Properties

`info (String)`: Extra information rendered within the component.

### `<d2l-audio-mini>` Properties

`waveform-height-ratios (Array)`: Array of values between 0 and 1, used to set the heights of each waveform line.

## Development

* `npm install`
* `npm start`
* Visit http://localhost:9998/components/d2l-audio/demo/
