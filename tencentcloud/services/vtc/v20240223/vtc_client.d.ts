import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ConfirmVideoTranslateJobRequest, SubmitVideoTranslateJobRequest, ConfirmVideoTranslateJobResponse, DescribeVideoTranslateJobRequest, SubmitVideoTranslateJobResponse, DescribeVideoTranslateJobResponse } from "./vtc_models";
/**
 * vtc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 提交视频转译任务
     */
    SubmitVideoTranslateJob(req: SubmitVideoTranslateJobRequest, cb?: (error: string, rep: SubmitVideoTranslateJobResponse) => void): Promise<SubmitVideoTranslateJobResponse>;
    /**
     * 查询视频翻译任务
     */
    DescribeVideoTranslateJob(req: DescribeVideoTranslateJobRequest, cb?: (error: string, rep: DescribeVideoTranslateJobResponse) => void): Promise<DescribeVideoTranslateJobResponse>;
    /**
     * 确认视频翻译结果
     */
    ConfirmVideoTranslateJob(req: ConfirmVideoTranslateJobRequest, cb?: (error: string, rep: ConfirmVideoTranslateJobResponse) => void): Promise<ConfirmVideoTranslateJobResponse>;
}
