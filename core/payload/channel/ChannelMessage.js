/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

class ChannelMessage {
  constructor() {}
}

class ChannelMessageText extends ChannelMessage {
  constructor(text) {
    super();
    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
}

class ChannelMessageMedia extends ChannelMessage {
  constructor(media) {
    super();
    this.media = media;
  }

  setMedia(media) {
    this.media = media;
  }
}

class ChannelMessageConversation extends ChannelMessage {
  constructor(conversation) {
    super();
    this.conversation = conversation;
  }

  setConversation(conversation) {
    this.conversation = conversation;
  }
}

module.exports = {
  Text: ChannelMessageText,
  Media: ChannelMessageMedia,
  Conversation: ChannelMessageConversation,
}
