import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ReportMaterialResponse, ReportActionResponse, ReportPortraitRequest, ReportPortraitResponse, ReportActionRequest, RecommendContentRequest, ReportMaterialRequest, RecommendContentResponse } from "./irp_models";
/**
 * irp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取推荐结果
     */
    RecommendContent(req: RecommendContentRequest, cb?: (error: string, rep: RecommendContentResponse) => void): Promise<RecommendContentResponse>;
    /**
     * 上报物料
     */
    ReportMaterial(req: ReportMaterialRequest, cb?: (error: string, rep: ReportMaterialResponse) => void): Promise<ReportMaterialResponse>;
    /**
     * 上报行为
     */
    ReportAction(req: ReportActionRequest, cb?: (error: string, rep: ReportActionResponse) => void): Promise<ReportActionResponse>;
    /**
     * 上报用户画像
     */
    ReportPortrait(req: ReportPortraitRequest, cb?: (error: string, rep: ReportPortraitResponse) => void): Promise<ReportPortraitResponse>;
}
