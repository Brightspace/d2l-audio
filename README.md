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

## Development

* `npm install`
* `npm start`
* Visit http://localhost:9998/components/d2l-audio/demo/
