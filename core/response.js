/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const _ = require('lodash');

module.exports = (function () {

  class Status {
    // The function execution was a success.
    static get SUCCESS() { return 0; }
    // The function execution has failed.
    static get FAIL() { return 1; }
    // The function execution should be retried.
    static get RETRY() { return 2; }
    // Stop the current conversation flow and any parent conversations.
    static get STOP() { return 3; }
    // Pause the current conversation flow, this will block the conversation until it is restarted.
    static get PAUSE() { return 4; }
    // Pause the current conversation flow and start the OAuth authentication flow. The conversation will be restarted when authentication is successful.
    static get NEED_AUTH() { return 5; }
    // End the current conversation flow, will allow parent conversations to continue.
    static get END() { return 6; }
  }


  class Response {
    constructor(status, payload) {
      var res = _.assign({}, payload);
      res.status = status;
      return res;
    }
  }


  return {
    Response: Response,
    Status: Status
  }

})();
