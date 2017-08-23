/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class ExternalFunctionPayload extends require('./Payload') {
  constructor() {
    super();
    this.externalCallReturn = {};
  }

  /**
  * Sets the HTTP status to return.
  * @param {Number} httpStatus The http status number. E.g 200.
  * @public
  */
  setHTTPStatus(httpStatus) {
    if (httpStatus !== undefined && httpStatus !== null) {
      this.externalCallReturn = this.externalCallReturn || {};
      this.externalCallReturn.httpStatus = httpStatus;
    }
  }

  /**
  * Sets the HTTP body to return.
  * @param {Object} body The http body.
  * @public
  */
  setBody(body) {
    if (body !== undefined && body !== null) {
      this.externalCallReturn = this.externalCallReturn || {};

      if (typeof body === 'string') {
        this.externalCallReturn.body = body;
      } else {
        this.externalCallReturn.body = JSON.stringify(body);
      }
    }
  }

  /**
  * Sets the HTTP headers to return.
  * @param {Object} headers A map of key value pairs where key is the header
  * and value is the value of the header.
  * @public
  */
  setHeaders(headers) {
    if (headers !== undefined && headers !== null) {
      this.externalCallReturn = this.externalCallReturn || {};
      this.externalCallReturn.headers = headers;
    }
  }

}
