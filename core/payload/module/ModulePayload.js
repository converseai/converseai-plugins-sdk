/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const _     = require('lodash');
const Text  = new require('./ModuleMessageText');

module.exports = class ModulePayload extends require('../Payload') {
  constructor() {
    super();
  }

  /**
  * Sets the message for the payload.
  * @param {ModuleMessage} message The ModuleMessage object to be set on the payload.
  * @public
  */
  setMessage(message) {
    if (_.isString(message)) {
      message = new Text(message, Text.TYPE_COMMENT);
    }
    this.moduleMessage = message;
  }

  /**
  * Sets the comment for the payload.
  * @param {String[]} comment The comment array for the module response.
  * @@deprecated since 1.0.5 – please use `setMessage(...)`.
  * @public
  */
  setComment(comment) {
    this.comment = comment;
  }

  /**
  * Sets the value for the payload.
  * @param {Object} value The value of the module that shoulde be returned on the response.
  * @public
  */
  setValue(value) {
    this.value = value;
  }

  /**
  * Sets the exit value for the payload. This should be used in conjunction with the "exits"
  * property of the module in plugin.json.
  * @param {String} value The exit string of the module that defines which specified exit should be followed.
  * @public
  */
  setExit(value) {
    this.exit = value;
  }
}
