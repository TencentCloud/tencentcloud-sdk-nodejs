import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitVideoStylizationJobRequest, ConfirmVideoTranslateJobRequest, DescribeVideoStylizationJobRequest, DescribeImageAnimateJobResponse, SubmitImageAnimateJobResponse, ConfirmVideoTranslateJobResponse, SubmitVideoTranslateJobResponse, DescribeVideoTranslateJobRequest, DescribeVideoStylizationJobResponse, SubmitImageAnimateJobRequest, DescribeImageAnimateJobRequest, SubmitVideoStylizationJobResponse, SubmitVideoTranslateJobRequest, DescribeVideoTranslateJobResponse } from "./vclm_models";
/**
 * vclm client
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
     * 用于提交视频风格化任务。支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    SubmitVideoStylizationJob(req: SubmitVideoStylizationJobRequest, cb?: (error: string, rep: SubmitVideoStylizationJobResponse) => void): Promise<SubmitVideoStylizationJobResponse>;
    /**
     * 确认视频转译结果
     */
    ConfirmVideoTranslateJob(req: ConfirmVideoTranslateJobRequest, cb?: (error: string, rep: ConfirmVideoTranslateJobResponse) => void): Promise<ConfirmVideoTranslateJobResponse>;
    /**
     * 用于查询图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    DescribeImageAnimateJob(req: DescribeImageAnimateJobRequest, cb?: (error: string, rep: DescribeImageAnimateJobResponse) => void): Promise<DescribeImageAnimateJobResponse>;
    /**
     * 用于提交图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    SubmitImageAnimateJob(req: SubmitImageAnimateJobRequest, cb?: (error: string, rep: SubmitImageAnimateJobResponse) => void): Promise<SubmitImageAnimateJobResponse>;
    /**
     * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    DescribeVideoStylizationJob(req: DescribeVideoStylizationJobRequest, cb?: (error: string, rep: DescribeVideoStylizationJobResponse) => void): Promise<DescribeVideoStylizationJobResponse>;
}
