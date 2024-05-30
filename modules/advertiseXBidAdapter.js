import { registerBidder } from '../src/adapters/bidderFactory';
import { BANNER } from '../src/mediaTypes';

const BIDDER_CODE = 'advertiseX';
const ENDPOINT_URL = 'http://localhost:3001/bids';

export const spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: [BANNER],

  isBidRequestValid: function (bid) {
    return !!bid.params.placementId;
  },

  buildRequests: function (validBidRequests) {
    return validBidRequests.map(bid => {
      return {
        method: 'POST',
        url: ENDPOINT_URL,
        data: {
          id: bid.bidId,
          placementId: bid.params.placementId,
          sizes: bid.sizes
        }
      };
    });
  },

  interpretResponse: function (serverResponse, request) {
    const bidResponses = [];

    if (serverResponse.body) {
      serverResponse.body.bids.forEach(bid => {
        bidResponses.push({
          requestId: request.data.id,
          cpm: bid.cpm,
          width: bid.width,
          height: bid.height,
          ad: bid.ad,
          ttl: 300,
          creativeId: bid.creativeId,
          netRevenue: true,
          currency: 'USD'
        });
      });
    } else {
      console.log('No valid bids received from the server');
    }

    return bidResponses;
  },
};

registerBidder(spec);
