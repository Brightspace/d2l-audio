import '@polymer/polymer/polymer-legacy.js';
import '@brightspace-ui/core/components/icons/icon.js';
import '@d2l/media-behavior/d2l-media-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-waveform">
	<template strip-whitespace="">
		<style>
			:host {
				position: relative;
			}
		</style>

		<canvas height="{{height}}" width="{{_width}}" id="waveform"></canvas>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-waveform',

	properties: {
		heightRatios: {
			type: Array,
			value: [
				.25, .50, .58, .75, .70, .55, 1.0, .83, .93, .90,
				.67, .95, .83, .80, .83, .75, .55, .45, .45, .50,
				.53, .48, .45, .38, .40, .40, .40, .40, .40, .45,
				.63, .63, .67, .55, .53, .58, .34, .35, .31, .00,
				.00, .00, .00, .00, .00, .00, .00, .00, .00, .00,
				.00, .00, .70, .67, .67, .75, .70, .73, .71, .60,
				.51, .15, .38, .40, .93, .85, .83, .81, .80, .78,
				.73, .74, .73, .75, .80, .90, .90, .80, .35, .33,
				.45, .48, .45, .28, .35, .38, .28, .30, .30, .30
			],
			notify: true
		},
		height: {
			type: Number,
			value: 30
		},
		lineWidth: {
			type: Number,
			value: 2
		},
		lineSpacing: {
			type: Number,
			value: 1
		},
		color: {
			type: String,
			value: '#D3D8E2'
		},
		_width: Number
	},

	observers: [
		'_onPropChange(height, lineWidth, lineSpacing, color)'
	],

	_drawWaveformLine: function(context, x, heightRatio) {
		if (heightRatio === 0) return;
		context.beginPath();
		context.moveTo(x, this.height);
		context.lineTo(x, this.height - (heightRatio * this.height));
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.color;
		context.lineCap = 'round';
		context.stroke();
		context.closePath();
	},

	_drawWaveform: function() {
		var self = this;
		var canvas = this.$.waveform;
		var context = canvas.getContext('2d');

		context.clearRect(0, 0, canvas.width, canvas.height);

		this._width = this.heightRatios.length * (this.lineWidth + this.lineSpacing);

		var x = this.lineSpacing;
		var heightRatios = this.heightRatios;
		heightRatios.forEach(function(h) {
			self._drawWaveformLine(context, x, h);
			x += self.lineWidth + self.lineSpacing;
		});
	},

	_onPropChange: function() {
		this._drawWaveform();
	}
});
