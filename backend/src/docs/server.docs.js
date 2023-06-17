/**
 * An array containing information about the server(s) hosting the API.
 * @typedef {Array} ServerDoc
 * @property {string} url - The URL of the server hosting the API.
 * @property {string} description - A description of the server, such as its purpose or environment (e.g. development, production).
 */

export const serverDoc = [
    {
        url: 'http://localhost:8000', // api link
        description: 'Development server', // description
    },
];
