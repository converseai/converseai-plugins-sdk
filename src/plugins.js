/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const _     = require('lodash');
const Debug = require('debug');
const debug = Debug('converseai-plugins-sdk:plugins:debug');
const error = Debug('converseai-plugins-sdk:plugins:error');

const Response  = require('./response').Response;
const Status    = require('./response').Status;


/**
* Constructor for the Plugins class.
* @public
*/
module.exports = class {

  constructor() {
    debug('Plugins Constructor');
    this._responded = false;
  }

  /**
  * Sets the map of functions to be executed on each moduleId.
  *
  * @param {Object} modules the map of modules.
  * @public
  */
  setModules(modules) {
    debug('set modules');
    this._modules = modules;
  }

  /**
  * Sets the function to be called when a provider is registered.
  *
  * @callback f
  * @param {Object} body The request body.
  * @public
  */
  setOnProviderRegister(f) {
    debug('set onProviderRegister');
    this._onProviderRegister = f;
  }

  /**
  * Sets the function to be called when a provider is unregistered.
  *
  * @callback f
  * @param {Object} body The request body.
  * @public
  */
  setOnProviderUnregister(f) {
    debug('set onProviderUnregister');
    this._onProviderUnregister = f;
  }

  /**
  * Handles the request and produces a response.
  * Should be called last after all other methods have been set.
  * @public
  */
  handleRequest() {
    debug(this._body);

    console.debug(this._body);
    if (this._body === undefined) {
      this._handleError(404, 'BODY_CAN_NOT_BE_EMPTY', 'Body can NOT be empty.');
      return;
    }

    if (this._body.event === undefined) {
      this._handleError(404, 'EVENT_CAN_NOT_BE_EMPTY', 'Event can NOT be empty.');
      return;
    }

    try {
      switch (this._body.event) {
      case 'PLUGIN_REGISTER':
        this._doOrReply(this._onProviderRegister, this._body);
        break;
      case 'PLUGIN_UNREGISTER':
        this._doOrReply(this._onProviderUnregister, this._body);
        break;
      case 'MODULE_EXEC':
        this._handleModules(this._body);
        break;
      case 'PING':
        this.send(Status.SUCCESS);
        break;
      case 'TRIGGER_EXEC':
      default:
        this._handleError(404, 'EVENT_NOT_FOUND', 'Event not found.');
      }
    } catch (e) {
      console.error(e);
      this._handleError(500, 'NODE_CRASHED', JSON.stringify(e));
    }
  }

  /**
  * @param {Status} status The status of the response.
  * @param {Payload} [payload] The payload for the specific event type.
  * @public
  */
  send(status, payload) {
    var response = new Response(status, payload);
    console.log(response);
    debug('send: ', response);
    this._handleResponse(response);
  }

  /**
  * @param {callback} f The function to be executed.
  * @param {...Object} args The arguments to be passed to f.
  * @private
  */
  _doOrReply(f, ...args) {
    if (f) {
      f(this, ...args);
    } else {
      this.send(Status.SUCCESS);
    }
  }

  /**
  * @param {Object} body The body from the request.
  * @private
  */
  _handleModules(body) {
    if (body && body.payload && body.payload.moduleId && this._modules[body.payload.moduleId] && _.isFunction(this._modules[body.payload.moduleId])) {
      this._modules[body.payload.moduleId](this, body);
    } else {
      this._handleError(404, 'MODULE_NOT_FOUND', 'Module ID not found.');
    }
  }

  /**
  * @param {Number} httpStatus The HTTP status code for the response.
  * @param {String} code The programmable error code for the response.
  * @param {String} description The human readable error code for the response.
  * @protected
  */
  _handleError(httpStatus, code, description) {}

  /**
  * @param {Response} response The Response object.
  * @protected
  */
  _handleResponse(response) {}
}
