import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UploadIdResponse, QueryCallDetailsRequest, GetTaskDetailResponse, QueryCallDetailsResponse, UploadIdRequest, QueryGeneralStatResponse, PredictRatingRequest, GetTaskListResponse, GetTaskListRequest, GetTaskDetailRequest, QueryCallStatResponse, QueryCallStatRequest, QueryGeneralStatRequest, PredictRatingResponse } from "./apcas_models";
/**
 * apcas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取日/月/周/总调用量统计数据
     */
    QueryGeneralStat(req: QueryGeneralStatRequest, cb?: (error: string, rep: QueryGeneralStatResponse) => void): Promise<QueryGeneralStatResponse>;
    /**
     * 查询当前账号AppID下的画像洞察任务列表
     */
    GetTaskList(req: GetTaskListRequest, cb?: (error: string, rep: GetTaskListResponse) => void): Promise<GetTaskListResponse>;
    /**
     * 按时间维度获取调用量统计
     */
    QueryCallStat(req: QueryCallStatRequest, cb?: (error: string, rep: QueryCallStatResponse) => void): Promise<QueryCallStatResponse>;
    /**
     * 上传群体画像的ID列表（支持的ID类型：0:imei 7:IDFA 8:MD5(imei)），后台返回生成的画像分析任务ID
     */
    UploadId(req: UploadIdRequest, cb?: (error: string, rep: UploadIdResponse) => void): Promise<UploadIdResponse>;
    /**
     * 查询画像洞察任务详情
     */
    GetTaskDetail(req: GetTaskDetailRequest, cb?: (error: string, rep: GetTaskDetailResponse) => void): Promise<GetTaskDetailResponse>;
    /**
     * 查询调用明细
     */
    QueryCallDetails(req: QueryCallDetailsRequest, cb?: (error: string, rep: QueryCallDetailsResponse) => void): Promise<QueryCallDetailsResponse>;
    /**
     * 根据传入的设备号（IMEI、IDFA、手机号、手机号MD5），返回意向评级结果
     */
    PredictRating(req: PredictRatingRequest, cb?: (error: string, rep: PredictRatingResponse) => void): Promise<PredictRatingResponse>;
}
