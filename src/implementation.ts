import { sendUnaryData, ServerUnaryCall, status, handleUnaryCall } from '@grpc/grpc-js';
import { LikeCampaignRequest, LikeCampaignResponse, LikeServiceServer } from './generated/like';

export function newLikeServiceImplementation(): LikeServiceServer {

  const likeCampaign: handleUnaryCall<LikeCampaignRequest, LikeCampaignResponse> = (
    call: ServerUnaryCall<LikeCampaignRequest, LikeCampaignResponse>,
    callback: sendUnaryData<LikeCampaignResponse>
  ) => {
    console.log(new Date(), 'LikeService.likeCampaign', call.request);
    try {
      return callback(null, {
        error: '',
        success: true,
      });
    } catch (err) {
      console.error(err);
      callback({ code: status.INTERNAL }, null);
    }
  }

  return {
    likeCampaign,
  };
}
