/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
module.exports = class AsyncInboundPayload extends require('../HTTPResponsePayload')(require('../abstract/InboundPayload')) {
  constructor(httpStatus) {
    super(httpStatus);
  }
}
