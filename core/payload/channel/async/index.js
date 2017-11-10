module.exports = {
  Message: require('../ChannelMessage'),
  ConverseInput: require('./AsyncConverseInput'),
  InboundResponse: require('./AsyncInboundPayload'),
  OutboundResponse: require('./AsyncOutboundPayload'),
  /** @deprecated */
  InboundOutput: require('./AsyncConverseInput')
}
