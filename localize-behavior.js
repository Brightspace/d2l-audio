import '@polymer/polymer/polymer-legacy.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
import './locales/en.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.D2LAudio = window.D2L.PolymerBehaviors.D2LAudio || {};
window.D2L.PolymerBehaviors.D2LAudio.LangTerms = window.D2L.PolymerBehaviors.D2LAudio.LangTerms || {};
/**
 * Localizes d2l-audio
 * @polymerBehavior
 */
D2L.PolymerBehaviors.D2LAudio.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources
		 */
		resources: {
			value: function() {
				return window.D2L.PolymerBehaviors.D2LAudio.LangTerms;
			}
		}
	}
};

/** @polymerBehavior */
D2L.PolymerBehaviors.D2LAudio.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.D2LAudio.LocalizeBehaviorImpl
];
