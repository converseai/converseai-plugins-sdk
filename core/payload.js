/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = (function() {


  class Payload {

    /**
    * Sets the error for the payload.
    * @param {Object} Error object for the response.
    * @param {Number} Error.httpStatus The HTTP status code for the response.
    * @param {String} Error.code The programmable error code for the response.
    * @param {String} Error.description The human readable error code for the response.
    * @public
    */
    setError({httpStatus, code, description}) {
      this.error = {
        httpStatus: httpStatus,
        code: code,
        description: description
      };
    }
  }

  class RegistrationDataPayload extends Payload {
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

  class ModulePayload extends Payload {
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

  class ExternalFunctionPayload extends Payload {
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
      if (httpStatus !== undefined) {
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
      if (body !== undefined) {
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
      if (headers !== undefined) {
        this.externalCallReturn = this.externalCallReturn || {};
        this.externalCallReturn.headers = headers;
      }
    }

  }

  return {
    Payload: Payload,
    RegistrationDataResponse: RegistrationDataPayload,
    ModuleResponse: ModulePayload,
    ExternalFunctionResponse: ExternalFunctionPayload
  }

})();
