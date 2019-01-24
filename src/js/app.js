// Import CSS files
import '../css/main.scss';

// Import javascript
import { initGoogleMaps } from './init-map';
import { initDirections } from './init-directions';
import './global';
import './range-slider';


// Add init function to global space
window.initGoogleMaps = initGoogleMaps;
window.initDirections = initDirections;

// Add event listeners
$('input[type=radio]').click(function () {
    // Perform new search
    if (this.name == 'type') searchQuery();
});