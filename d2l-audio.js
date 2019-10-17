/**
@demo demo/index.html
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
import '@d2l/seek-bar/d2l-seek-bar.js';
import 'd2l-typography/d2l-typography.js';
import './d2l-waveform.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import './localize-behavior.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-audio">
	<template strip-whitespace="">
		<style include="iron-flex iron-flex-alignment d2l-typography">
			:host {
				display: inline-block;
				width: 730px;
			}

			.seek-bar-container {
				position: relative;
				margin: 0 5px;
			}

			d2l-seek-bar {
				width: 100%;
			}

			d2l-icon[hidden] {
				display: none;
			}

			button {
				margin: 0;
				padding: 0;
				background: none;
				border: none;
			}

			.container {
				overflow-x: hidden;
			}

			.timeline-container {
				width: 100%;
			}

			.play-container {
				margin-bottom: 5px;
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.play-container button {
				position: absolute;
				margin-left: auto;
				margin-right: auto;
				top: 8px;
				width: 58px;
				height: 58px;
				border-left: 4px solid White;
				border-right: 4px solid White;
				box-sizing: content-box;
			}

			.play-container d2l-icon {
				background-color: White;
				--d2l-icon-width: 58px;
				--d2l-icon-height: 58px;
				cursor: pointer;
				position: absolute;
				top: 0;
				left: -1px;
			}

			.play-container d2l-icon:hover {
				background: var(--d2l-color-gypsum);
			}

			.play-container d2l-icon:focus {
				outline: 2px solid var(--d2l-color-celestine);
			}

			.info-container {
				margin-top: 3px;
				font-size: 14px;
			}

			.play-icon {
				color: var(--d2l-color-ferrite);
			}

			.pause-icon {
				color: var(--d2l-color-ferrite);
			}
		</style>

		<div class="container layout vertical center d2l-typography">
			<div class="play-container" aria-label$="[[localize('AudioPlayer')]]">
				<d2l-waveform color="[[ _getWaveformColor(isPlaying) ]]" height-ratios="[[ waveformHeightRatios ]]" height="60" line-width="4" line-spacing="2"></d2l-waveform>
				<button hidden$="{{ isPlaying }}" on-tap="_playPause" aria-label$="[[localize('Play')]]"><d2l-icon class="play-icon" icon="d2l-tier3:play"></d2l-icon></button>
				<button hidden$="{{ !isPlaying }}" on-tap="_playPause" aria-label$="[[localize('Pause')]]"><d2l-icon class="pause-icon" icon="d2l-tier3:pause"></d2l-icon></button>
			</div>

			<div class="timeline-container layout horizontal center" dir="ltr">
				<div class="time-container">
					{{ _formatTime(currentTime) }}
				</div>

				<div class="flex seek-bar-container">
					<d2l-seek-bar value="[[ percentComplete ]]" immediate-value="{{ immediateValue }}" aria-label$="[[localize('SeekBar')]]" on-position-change="_onPositionChange"  on-drag-start="_onSeekStart" on-drag-end="_onSeekEnd"></d2l-seek-bar>
				</div>

				<div class="time-container">
					{{ _formatTime(duration) }}
				</div>
			</div>

			<div class="info-container layout horizontal center">
				{{ info }}
			</div>

			<audio id="media" preload="{{ _getPreload(autoLoad) }}" autoplay="{{ _getAutoplay(autoplay) }}"></audio>
		</div>
	</template>



</dom-module>`;

document.head.appendChild($_documentContainer.content);
window.D2L = window.D2L || {};
window.D2L.MediaBehavior = window.D2L.MediaBehavior || window.D2LMediaBehavior;
Polymer({
	is: 'd2l-audio',

	behaviors: [
		window.D2L.MediaBehavior,
		IronA11yKeysBehavior,
		D2L.PolymerBehaviors.D2LAudio.LocalizeBehavior
	],

	properties: {
		waveformHeightRatios: {
			type: Array,
			value: [
				.30, .50, .60, .80, .75, .62, .99, .83, .96, .94,
				.70, .94, .92, .91, .92, .88, .60, .45, .45, .55,
				.58, .50, .45, .40, .42, .42, .42, .42, .42, .48,
				.63, .63, .70, .60, .58, .62, .85, .90, .80, .82,
				.80, .78, .00, .00, .00, .00, .00, .00, .00, .00,
				.75, .75, .75, .70, .70, .79, .75, .77, .62, .60,
				.62, .18, .40, .42, .90, .80, .80, .74, .78, .65,
				.60, .62, .62, .66, .73, .70, .70, .58, .40, .38,
				.45, .50, .45, .30, .38, .40, .30, .35, .35, .35,
				.33, .32, .31
			]
		},

		info: String
	},

	keyBindings: {
		'space': '_playPause'
	},

	_getWaveformColor: function(isPlaying) {
		return isPlaying ? '#99C5E5' : '#D3D9E3';
	}
});
