import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ReportFeedItemRequest, ReportGoodsBehaviorResponse, FeedRecommendResponse, ReportFeedBehaviorResponse, ReportGoodsInfoResponse, ReportFeedUserRequest, ReportFeedUserResponse, ReportFeedItemResponse, DescribeGoodsRecommendRequest, ReportGoodsBehaviorRequest, ReportGoodsInfoRequest, ReportFeedBehaviorRequest, DescribeGoodsRecommendResponse, FeedRecommendRequest } from "./irp_models";
/**
 * irp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 上报电商类商品信息
     */
    ReportGoodsInfo(req: ReportGoodsInfoRequest, cb?: (error: string, rep: ReportGoodsInfoResponse) => void): Promise<ReportGoodsInfoResponse>;
    /**
     * 上报电商类行为数据
     */
    ReportGoodsBehavior(req: ReportGoodsBehaviorRequest, cb?: (error: string, rep: ReportGoodsBehaviorResponse) => void): Promise<ReportGoodsBehaviorResponse>;
    /**
     * 上报信息流场景内的行为数据，随着数据的积累，模型的效果会逐渐稳定。
     */
    ReportFeedBehavior(req: ReportFeedBehaviorRequest, cb?: (error: string, rep: ReportFeedBehaviorResponse) => void): Promise<ReportFeedBehaviorResponse>;
    /**
     * 获取电商类推荐结果
     */
    DescribeGoodsRecommend(req: DescribeGoodsRecommendRequest, cb?: (error: string, rep: DescribeGoodsRecommendResponse) => void): Promise<DescribeGoodsRecommendResponse>;
    /**
     * 上报信息流用户信息，请务必确认用户的唯一性，并在请求推荐结果时指定用户的唯一标识信息（UserId），否则将无法进行千人千面的推荐
     */
    ReportFeedUser(req: ReportFeedUserRequest, cb?: (error: string, rep: ReportFeedUserResponse) => void): Promise<ReportFeedUserResponse>;
    /**
     * 上报被用于推荐的信息流内容信息
     */
    ReportFeedItem(req: ReportFeedItemRequest, cb?: (error: string, rep: ReportFeedItemResponse) => void): Promise<ReportFeedItemResponse>;
    /**
     * 获取信息流推荐结果
     */
    FeedRecommend(req: FeedRecommendRequest, cb?: (error: string, rep: FeedRecommendResponse) => void): Promise<FeedRecommendResponse>;
}
