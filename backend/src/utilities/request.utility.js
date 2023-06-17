import { ErrorHelper } from '../helpers/index';
import axios from 'axios';

/**
 * A utility class for making HTTP requests.
 */
class RequestUtility {
    /**
     * Makes an HTTP request to the specified URL with the given options.
     * @async
     * @function
     * @param {string} url - The URL to make the request to.
     * @param {Object} options - The options to use when making the request.
     * @returns {Promise<Object|ErrorHelper>} A Promise that resolves to the response data, or rejects with an ErrorHelper object containing details about the error.
     */
    async makeRequest(url, options) {
        try {
            // Make the HTTP request using fetch
            const response = await axios({
                url,
                method: options.method,
                data: options.body,
                headers: options.headers,
            });
            console.log(response);
            // Parse the response data as JSON
            const data = response.data;

            // Return the parsed data
            return data;
        } catch (e) {
            console.log(e.response.data, {
                url,
                method: options.method,
                data: options.body,
                headers: options.headers,
            });
            // If an error occurs, return an ErrorHelper object with details about the error
            return new ErrorHelper(`Error occurred during payment: ${e}`, 500);
        }
    }
}

// Export an instance of the RequestUtility class
export const requestUtility = new RequestUtility();
