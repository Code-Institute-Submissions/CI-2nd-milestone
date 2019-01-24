// ----------------------------------------------------------------------------- IMPORT FUNCTIONS
import { addMarker } from '../src/js/add-map-markers';
import { initAutocomplete } from '../src/js/autocomplete';


// ----------------------------------------------------------------------------- TESTING

// Add markers functionality
describe('Add markers test', () => {
    it('function should return no options found error', () => {
        expect(addMarker()).toBe('No options found for addMarker.');
    });

    it('function should return incomplete arguments', () => {
        let options = {
            test: 'in complete options'
        };
        expect(addMarker(options)).toBe('addMarker arguments incomplete. Check for map and coords.');
    });

});

// Autocomplete function
describe('Google maps autocomplete', () => {
    it('function should return no arguments found', () => {
        expect(initAutocomplete()).toBe('No input arguments found.');
    });
})
