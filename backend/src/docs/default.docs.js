/**
 * Object containing default documentation for the API.
 * @typedef {Object} DefaultDoc
 *
 * @property {Object} info - Information about the API.
 * @property {string} info.title - The title of the API.
 * @property {string} info.version - The version of the API.
 * @property {string} info.description - A description of the API.
 * @property {Object} info.license - The license details of the API.
 * @property {string} info.license.name - The name of the license used by the API.
 * @property {string} info.license.url - The URL of the license used by the API.
 * @property {Object} info.contact - The contact details of the API owner.
 * @property {string} info.contact.name - The name of the API owner.
 * @property {string} info.contact.url - The URL of the API owner's personal website or GitHub profile.
 * @property {string} info.contact.email - The email address of the API owner.
 *
 * @property {Array.<Object>} servers - An array of objects containing information about the server(s) hosting the API.
 * @property {string} servers.url - The URL of the server hosting the API.
 * @property {string} servers.description - A description of the server, such as its purpose or environment (e.g. development, production).
 *
 * @property {Array.<Object>} tags - An array of objects containing information about the tags used by the API.
 * @property {string} tags.name - The name of the tag.
 * @property {string} tags.description - A description of the tag.
 *
 * @property {Object} components - An object containing various components used by the API.
 * @property {Object} components.schemas - An object containing the schema used by the API.
 * @property {Object} components.schemas.CreateUserInput - The schema for creating a new user.
 * @property {string} components.schemas.CreateUserInput.type - The type of the object, which is "object".
 * @property {Object} components.schemas.CreateUserInput.properties - An object containing the properties of the object.
 * @property {Object} components.schemas.CreateUserInput.properties.username - The schema for the username property.
 * @property {string} components.schemas.CreateUserInput.properties.username.type - The type of the username property, which is "string".
 * @property {string} components.schemas.CreateUserInput.properties.username.example - An example value for the username property.
 * @property {Object} components.schemas.CreateUserInput.properties.email - The schema for the email property.
 * @property {string} components.schemas.CreateUserInput.properties.email.type - The type of the email property, which is "string".
 * @property {string} components.schemas.CreateUserInput.properties.email.example - An example value for the email property.
 * @property {Object} components.schemas.CreateUserInput.properties.password - The schema for the password property.
 * @property {string} components.schemas.CreateUserInput.properties.password.type - The type of the password property, which is "string".
 * @property {string} components.schemas.CreateUserInput.properties.password.example - An example value for the password property.
 */

// The 'defaultDoc' object is being exported, so it can be imported and used in other parts of the codebase.
import { schemaDoc } from './schema.docs.js';
import { tagsDoc } from './tags.docs.js';
import { infoDoc } from './info.docs.js';
import { serverDoc } from './server.docs.js';

export const defaultDoc = {
    ...infoDoc,
    servers: serverDoc,
    tags: tagsDoc,
    components: {
        schemas: { ...schemaDoc },
    },
};
