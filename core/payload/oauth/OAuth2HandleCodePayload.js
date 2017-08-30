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

  /**
  * Sets the access token for the OAuth2 payload.
  * @param {String} accessToken The OAuth2 access token for the response.
  * @public
  */
  setAccessToken(accessToken) {
    this.oauth2Token.accessToken = accessToken;
  }

  /**
  * Sets the token type for the OAuth2 payload.
  * @param {String} tokenType The OAuth2 token type for the response.
  * @public
  */
  setTokenType(tokenType) {
    this.oauth2Token.tokenType = tokenType;
  }

  /**
  * Sets the refresh token for the OAuth2 payload.
  * @param {String} refreshToken The OAuth2 refresh token for the response.
  * @public
  */
  setRefreshToken(refreshToken) {
    this.oauth2Token.refreshToken = refreshToken;
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} expiresIn The OAuth2 expiry time for the response.
  * @public
  */
  setExpiresIn(expiresIn) {
    this.oauth2Token.expiresIn = expiresIn;
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} expiresIn The OAuth2 expiry time for the response.
  * @public
  */
  setGrantType(grantType) {
    this.oauth2Token.grantType = grantType;
  }

  /**
  * Sets the metadata for the OAuth2 payload.
  * @param {Object} [metadata] A Key/Value map of metadata for the OAuth2 response.
  * @public
  */
  setMetadata(metadata) {
    this.oauth2Token.metadata = metadata;
  }

  /**
  * Sets the redirect URL for the OAuth2 payload.
  * @param {String} [url] An OAuth2 redirect URL for the response.
  * @public
  */
  setRedirectURL(url) {
    this.redirect.redirectTo = url;
  }

  /**
  * Sets the success message for the OAuth2 payload.
  * @param {String} [message] An OAuth2 success message for the response.
  * @public
  */
  setMessage(message) {
    this.redirect.message = message;
  }
}
