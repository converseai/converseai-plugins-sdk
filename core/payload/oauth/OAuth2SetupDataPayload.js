/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class OAuth2SetupDataPayload extends require('../Payload') {
  constructor(setupData) {
    super();
    this.setupData = setupData || {};
  }

  // Client ID
  // Parameters will be discarded
  // string
  setOAuth2URI(oauth2URI) {
    this.setupData.oauth2URI = oauth2URI;
  }

  // Client ID
  // string
  setClientID(clientId) {
    this.setupData.clientId = clientId;
  }

  // OAuth scope
  // string
  setScope(scope) {
    this.setupData.scope = scope;
  }

  // OAuth state
  // not required
  // string
  setState(state) {
    this.setupData.state = state;
  }

  // User comment
  // not required
  // string
  setComment(comment) {
    this.setupData.comment = comment;
  }

  // GET Params on oauth url
  // not required
  // map
  setExtraParams(extraParams) {
    this.setupData.extraParams = extraParams;
  }
}
