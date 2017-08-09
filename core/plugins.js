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
  * Sets the map of functions to be executed on each external call.
  *
  * @param {Object} externals the map of external functions.
  * @public
  */
  setExternal(externals) {
    debug('set externals');
    this._externals = externals;
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
  * Sets the function to be called when the oauth process is started.
  *
  * @callback f
  * @param {Object} body The request body.
  * @public
  */
  setOnOAuthStart(f) {
    debug('set onOAuthStart');
    this._onOAuthStart = f;
  }

  /**
  * Sets the function to be called when oauth needs to handle the oauth code.
  *
  * @callback f
  * @param {Object} body The request body.
  * @public
  */
  setOnOAuthHandleCode(f) {
    debug('set onOAuthHandleCode');
    this._onOAuthHandleCode = f;
  }

  /**
  * Sets the function to be called when oauth needs to renew the oauth token.
  *
  * @callback f
  * @param {Object} body The request body.
  * @public
  */
  setOnOAuthRenewToken(f) {
    debug('set onOAuthRenewToken');
    this._onOAuthRenewToken = f;
  }

  /**
  * Handles the request and produces a response.
  * Should be called last after all other methods have been set.
  * @public
  */
  handleRequest() {
    debug(this._body);

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
      case 'EXTERNAL_CALL':
        this._handleExternal(this._body);
        break;
      case 'OAUTH2_START':
        this._doOrReply(this._onOAuthStart, this._body);
        break;
      case 'OAUTH2_HANDLE_CODE':
        this._doOrReply(this._onOAuthHandleCode, this._body);
        break;
      case 'OAUTH2_RENEW_TOKEN':
        this._doOrReply(this._onOAuthRenewToken, this._body);
        break;
      case 'TRIGGER_EXEC':
      default:
        this._handleError(404, 'EVENT_NOT_FOUND', 'Event not found.');
      }
    } catch (e) {
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
  * @param {Object} body The body from the request.
  * @private
  */
  _handleExternal(body) {
    if (body && body.payload && body.payload.call && this._externals[body.payload.call] && _.isFunction(this._externals[body.payload.call])) {
      this._externals[body.payload.call](this, body);
    } else {
      this._handleError(404, 'EXTERNAL_CALL_NOT_FOUND', 'External ID not found.');
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
