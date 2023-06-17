/**
 * Object containing information about the GELOSHOPPING API.
 * @typedef {Object} InfoDoc
 * @property {string} openapi - The version of the OpenAPI specification used by the API.
 * @property {Object} info - The information about the API.
 * @property {string} info.title - The title of the GELOSHOPPING API.
 * @property {string} info.version - The version of the GELOSHOPPING API.
 * @property {string} info.description - A description of the GELOSHOPPING API.
 * @property {Object} info.license - The license details of the GELOSHOPPING API.
 * @property {string} info.license.name - The name of the license used by the GELOSHOPPING API.
 * @property {string} info.license.url - The URL of the license used by the GELOSHOPPING API.
 * @property {Object} info.contact - The contact details of the GELOSHOPPING API owner.
 * @property {string} info.contact.name - The name of the GELOSHOPPING API owner.
 * @property {string} info.contact.url - The URL of the GELOSHOPPING API owner's personal website or GitHub profile.
 * @property {string} info.contact.email - The email address of the GELOSHOPPING API owner.
 */
export const infoDoc = {
    openapi: '3.0.0', // version
    info: {
        title: '\'Hope\'s Bank api\'', // title of the project
        version: '1.0.0', // version of the project
        description:
            'This is an online banking api that consists of various intuitive operations to simulate the experience of online banking operations using technology', // project description
        license: {
            name: 'ISC', // project licence
            url: 'https://spdx.org/licenses/ISC.html', // licence url
        },
        contact: {
            name: 'Hope', // project owner contact name
            url: 'https://github.com/hopevibes', // project owner's personal website link or github profile link
            email: 'hopeleinyuy@gmail.com', // project owner email address
        },
    },
};
