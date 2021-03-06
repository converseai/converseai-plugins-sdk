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
  * @param {String} access_token The OAuth2 access token for the response.
  * @public
  */
  setAccessToken(access_token) {
    this.oauth2Token.access_token = access_token;
  }

  /**
  * Sets the token type for the OAuth2 payload.
  * @param {String} token_type The OAuth2 token type for the response.
  * @public
  */
  setTokenType(token_type) {
    this.oauth2Token.token_type = token_type;
  }

  /**
  * Sets the refresh token for the OAuth2 payload.
  * @param {String} refresh_token The OAuth2 refresh token for the response.
  * @public
  */
  setRefreshToken(refresh_token) {
    this.oauth2Token.refresh_token = refresh_token;
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} expires_in The OAuth2 expiry time for the response.
  * @public
  */
  setExpiresIn(expires_in) {
    this.oauth2Token.expires_in = expires_in;
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} grant_type The OAuth2 expiry time for the response.
  * @public
  */
  setGrantType(grant_type) {
    this.oauth2Token.grant_type = grant_type;
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
