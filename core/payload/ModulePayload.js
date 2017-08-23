/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class ModulePayload extends require('./Payload') {
  constructor() {
    super();
  }

  /**
  * Sets the comment for the payload.
  * @param {String[]} comment The comment array for the module response.
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
}
