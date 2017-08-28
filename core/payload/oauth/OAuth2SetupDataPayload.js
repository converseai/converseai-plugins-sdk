/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class OAuth2SetupDataPayload extends require('../Payload') {
  constructor(oauth2Setup) {
    super();
    this.oauth2Setup = oauth2Setup || {};
  }

  // Client ID
  // Parameters will be discarded
  // string
  setOAuth2URI(oauth2URI) {
    this.oauth2Setup.oauth2URI = oauth2URI;
  }

  // Client ID
  // string
  setClientID(clientId) {
    this.oauth2Setup.clientId = clientId;
  }

  // OAuth scope
  // string
  setScope(scope) {
    this.oauth2Setup.scope = scope;
  }

  // OAuth state
  // not required
  // string
  setState(state) {
    this.oauth2Setup.state = state;
  }

  // User comment
  // not required
  // string
  setComment(comment) {
    this.oauth2Setup.comment = comment;
  }

  // GET Params on oauth url
  // not required
  // map
  setExtraParams(extraParams) {
    this.oauth2Setup.extraParams = extraParams;
  }
}
