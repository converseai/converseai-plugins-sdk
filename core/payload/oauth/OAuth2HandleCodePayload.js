/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class OAuth2HandleCodePayload extends require('../Payload') {
  constructor(oauth2Token, redirect) {
    super();
    this.oauth2Token = oauth2Token || {};
    this.redirect = redirect || {};
  }

  //string
  setAccessToken(accessToken) {
    this.oauth2Token.accessToken = accessToken;
  }

  //string
  setTokenType(tokenType) {
    this.oauth2Token.tokenType = tokenType;
  }

  //string
  setRefreshToken(refreshToken) {
    this.oauth2Token.refreshToken = refreshToken;
  }

  //int
  setExpiresIn(expiresIn) {
    this.oauth2Token.expiresIn = expiresIn;
  }

  //string
  setGrantType(grantType) {
    this.oauth2Token.grantType = grantType;
  }

  // url to show after succesful auth
  setRedirectURL(url) {
    this.redirect.redirectTo = url;
  }

  // message to show after succesful auth
  setMessage(message) {
    this.redirect.message = message;
  }
}
