import { routesConstants } from '../constants/index.js';

/**
 * Generate an array of tags based on the routes constant, excluding the 'api_docs' tag.
 * @function
 * @returns {string[]} An array of tag names.
 */
export const tagsDoc = Object.keys(routesConstants).filter(
    (x) => x.toLowerCase() !== 'api_docs'
);
