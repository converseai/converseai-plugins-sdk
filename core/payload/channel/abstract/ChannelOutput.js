/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class ChannelOutput {
  constructor(message, settings) {
    this.setMessage(message);
    this.channelSettings = Object.assign({}, settings);
  }

  /**
  * Sets the message for the output.
  * @param {ChannelMessage} channelMessage The ChannelMessage object to be set on the output.
  * @public
  */
  setMessage(channelMessage) {
    this.channelMessage = channelMessage;
  }

  setUserId(userId) {
    this.channelSettings.userId = userId;
  }
  setThreadId(threadId) {
    this.channelSettings.threadId = threadId;
  }
  setData(data) {
    this.channelSettings.data = data;
  }
  setRuntimeCTX(runtimeCTX) {
    this.channelSettings.runtimeCTX = runtimeCTX;
  }
  setChannelName(channelName) {
    this.channelSettings.channelName = channelName;
  }
  setUserInfo(userInfo) {
    this.channelSettings.userInfo = userInfo;
  }
  setSync(sync) {
    this.channelSettings.sync = sync
  }
}
