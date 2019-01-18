// Import CSS files
import '../css/main.scss';

// Import javascript
import './init-map';
import './global';
import './range-slider';

// Add event listeners
$('input[type=radio]').click(function () {
    // Perform new search
    if (this.name == 'type') searchQuery();
});