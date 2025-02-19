import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CheckAnimateImageJobResponse, SubmitVideoStylizationJobRequest, CheckAnimateImageJobRequest, DescribeVideoStylizationJobRequest, DescribePortraitSingJobRequest, DescribeImageAnimateJobResponse, SubmitPortraitSingJobRequest, SubmitImageAnimateJobResponse, SubmitVideoStylizationJobResponse, DescribeVideoStylizationJobResponse, SubmitImageAnimateJobRequest, DescribeImageAnimateJobRequest, DescribePortraitSingJobResponse, SubmitPortraitSingJobResponse } from "./vclm_models";
/**
 * vclm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于提交视频风格化任务。支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    SubmitVideoStylizationJob(req: SubmitVideoStylizationJobRequest, cb?: (error: string, rep: SubmitVideoStylizationJobResponse) => void): Promise<SubmitVideoStylizationJobResponse>;
    /**
     * 用于提交图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
    SubmitPortraitSingJob(req: SubmitPortraitSingJobRequest, cb?: (error: string, rep: SubmitPortraitSingJobResponse) => void): Promise<SubmitPortraitSingJobResponse>;
    /**
     * 用于查询图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
    DescribePortraitSingJob(req: DescribePortraitSingJobRequest, cb?: (error: string, rep: DescribePortraitSingJobResponse) => void): Promise<DescribePortraitSingJobResponse>;
    /**
     * 用于查询图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    DescribeImageAnimateJob(req: DescribeImageAnimateJobRequest, cb?: (error: string, rep: DescribeImageAnimateJobResponse) => void): Promise<DescribeImageAnimateJobResponse>;
    /**
     * 用于提交图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    SubmitImageAnimateJob(req: SubmitImageAnimateJobRequest, cb?: (error: string, rep: SubmitImageAnimateJobResponse) => void): Promise<SubmitImageAnimateJobResponse>;
    /**
     * 检查图片跳舞输入图
     */
    CheckAnimateImageJob(req: CheckAnimateImageJobRequest, cb?: (error: string, rep: CheckAnimateImageJobResponse) => void): Promise<CheckAnimateImageJobResponse>;
    /**
     * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    DescribeVideoStylizationJob(req: DescribeVideoStylizationJobRequest, cb?: (error: string, rep: DescribeVideoStylizationJobResponse) => void): Promise<DescribeVideoStylizationJobResponse>;
}
