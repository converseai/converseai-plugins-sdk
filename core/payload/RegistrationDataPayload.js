/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 module.exports = class RegistrationDataPayload extends require('./Payload') {
  constructor(registrationData) {
    super();
    this.registrationData = registrationData
  }

  /**
  * Sets the registrationData for the payload.
  * @param {Object} registrationData The registration data for the plugin registration.
  * @public
  */
  setRegistrationData(registrationData) {
    this.registrationData = registrationData;
  }
}
