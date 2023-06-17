/**
 * Object containing documentation for the API.
 * @typedef {Object} Docs
 * @property {Object} endpoints - An object containing documentation for each API endpoint.
 * @property {Object} defaultDoc - An object containing default documentation for the API.
 */

/**
 * An object containing documentation for each API endpoint.
 * @typedef {Object} Endpoints
 * @property {Object} [endpoint1] - Documentation for endpoint1.
 * @property {Object} [endpoint2] - Documentation for endpoint2.
 * ...
 */

/**
 * An object containing default documentation for the API.
 * @typedef {Object} DefaultDoc
 * @property {string} [description] - A description of the API.
 * @property {string} [version] - The version of the API.
 * @property {string} [basePath] - The base path of the API.
 * @property {ServerDoc} [servers] - An array of objects containing information about the server(s) hosting the API.
 */

/**
 * An array containing information about the server(s) hosting the API.
 * @typedef {Array} ServerDoc
 * @property {string} url - The URL of the server hosting the API.
 * @property {string} description - A description of the server, such as its purpose or environment (e.g. development, production).
 */

// The 'docs' object is being exported, so it can be imported and used in other parts of the codebase.

import { endpoints } from './endpoints/index.js';
import { defaultDoc } from './default.docs.js';

export const docs = {
    ...defaultDoc,
    ...endpoints,
};
