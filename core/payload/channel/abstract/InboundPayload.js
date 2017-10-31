/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class InboundPayload extends require('../../Payload') {

  /**
  * Adds a channelOutput for the payload.
  * @param {ChannelOutput} channelOutput The ChannelOutput object to be added on the payload.
  * @public
  */
  addOutput(channelOutput) {
    this.channelOutput = this.channelOutput || [];
    this.channelOutput.push(channelOutput);
  }
}
