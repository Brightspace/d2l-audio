/**
@demo demo/mini.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { IronA11yKeysBehavior } from '@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import '@d2l/media-behavior/d2l-media-behavior.js';
import './d2l-waveform.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-audio-mini">
	<template strip-whitespace="">
		<style include="iron-flex iron-flex-alignment d2l-typography">
			:host {
				position: relative;
				display: inline-block;
				cursor: pointer;
			}

		 d2l-icon {
				position: absolute;
				margin-left: auto;
				margin-right: auto;
				left: 1px;
				right: 0;
				top: 4px;
				background-color: White;
				--d2l-icon-width: 32px;
				--d2l-icon-height: 32px;
				border-left: 2px solid White;
				border-right: 2px solid White;
			}

			.play-icon {
				color: var(--d2l-color-ferrite);
			}

			.pause-icon {
				color: var(--d2l-color-ferrite);
			}

			d2l-icon[hidden] {
				display: none;
			}
		</style>

		<div on-tap="_playPause">
			<d2l-waveform height-ratios="[[ waveformHeightRatios ]]" color="[[ _getWaveformColor(isPlaying) ]]"></d2l-waveform>

			<audio id="media" preload="{{ _getPreload(autoLoad) }}" autoplay="{{ _getAutoplay(autoplay) }}"></audio>

			<d2l-icon hidden$="{{ isPlaying }}" class="play-icon" icon="d2l-tier3:play"></d2l-icon>
			<d2l-icon hidden$="{{ !isPlaying }}" class="pause-icon" icon="d2l-tier3:pause"></d2l-icon>
		</div>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
window.D2L = window.D2L || {};
window.D2L.MediaBehavior = window.D2L.MediaBehavior || window.D2LMediaBehavior;
Polymer({
	is: 'd2l-audio-mini',

	behaviors: [
		window.D2L.MediaBehavior,
		IronA11yKeysBehavior
	],

	properties: {
		waveformHeightRatios: {
			type: Array,
			value: undefined
		}
	},

	hostAttributes: {
		tabindex: 0
	},

	keyBindings: {
		'space': '_playPause'
	},

	_getWaveformColor: function(isPlaying) {
		return isPlaying ? '#99C5E5' : '#D3D9E3';
	},

	ready: function() {
		var numWaveformLines = this.waveformHeightRatios ? this.waveformHeightRatios.length : 90;
		var waveformLineSpacing = 1;
		var waveformLineWidth = 2;
		this.style.width = (numWaveformLines * (waveformLineSpacing + waveformLineWidth)) + 'px';
	}
});
