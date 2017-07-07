/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const _ = require('lodash');

module.exports = (function() {

  class Status {
    static get SUCCESS    () { return 0; }
    static get FAIL       () { return 1; }
    static get RETRY      () { return 2; }
    static get STOP       () { return 3; }
    static get PAUSE      () { return 4; }
    static get NEED_AUTH  () { return 5; }
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
