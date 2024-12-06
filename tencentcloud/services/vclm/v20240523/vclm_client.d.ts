import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitVideoStylizationJobRequest, SubmitImageAnimateJobRequest, SubmitPortraitSingJobResponse, ConfirmVideoTranslateJobRequest, DescribePortraitSingJobRequest, SubmitImageAnimateJobResponse, SubmitVideoTranslateJobResponse, DescribeVideoTranslateJobResponse, CheckAnimateImageJobResponse, CheckAnimateImageJobRequest, DescribeVideoStylizationJobRequest, DescribeImageAnimateJobResponse, SubmitPortraitSingJobRequest, DescribeVideoStylizationJobResponse, SubmitVideoStylizationJobResponse, SubmitVideoTranslateJobRequest, ConfirmVideoTranslateJobResponse, DescribeVideoTranslateJobRequest, DescribeImageAnimateJobRequest, DescribePortraitSingJobResponse } from "./vclm_models";
/**
 * vclm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * ### 支持音色种别列表。
每个音色都支持：英语（美国）、阿拉伯语、德语、西班牙语、法语、印尼语、意大利语、日语、韩语、马来语、葡萄牙语、俄语、泰语、土耳其语、越南语。

| 音色名称    | 性别 | 音色ID |
| ----------- | ---- | ------ |
| Seraphina   | 女   | 701002 |
| Ada         | 女   | 701003 |
| Emma        | 女   | 701007 |
| Brian       | 男   | 701008 |
| Amanda      | 女   | 701013 |
| Brandon     | 男   | 701014 |
| Christopher | 男   | 701015 |
| Davis       | 男   | 701017 |
| Derek       | 男   | 701018 |
| Dustin      | 男   | 701019 |
| Evelyn      | 女   | 701020 |
| Lewis       | 男   | 701021 |
| Lola        | 女   | 701022 |
| Samuel      | 男   | 701026 |
| Steffan     | 男   | 701028 |
| Arabella    | 女   | 701029 |
| Isidora     | 女   | 701030 |
| Tristan     | 男   | 701031 |
| Vivienne    | 女   | 701034 |
| Lucien      | 男   | 701035 |
| Alessio     | 男   | 701036 |
| Giuseppe    | 男   | 701037 |
| Isabella    | 女   | 701038 |
| Marcello    | 男   | 701039 |
| Masaru      | 男   | 701040 |
| Macerio     | 男   | 701042 |
| Thalita     | 女   | 701043 |
| 晓晓         | 女   | 701045 |
| 晓宇         | 女   | 701046 |
| 云逸         | 男   | 701047 |
| Yunfan       | 男   | 701048 |
     */
    SubmitVideoTranslateJob(req: SubmitVideoTranslateJobRequest, cb?: (error: string, rep: SubmitVideoTranslateJobResponse) => void): Promise<SubmitVideoTranslateJobResponse>;
    /**
     * 查询视频转译任务
     */
    DescribeVideoTranslateJob(req: DescribeVideoTranslateJobRequest, cb?: (error: string, rep: DescribeVideoTranslateJobResponse) => void): Promise<DescribeVideoTranslateJobResponse>;
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
     * 确认视频转译结果
     */
    ConfirmVideoTranslateJob(req: ConfirmVideoTranslateJobRequest, cb?: (error: string, rep: ConfirmVideoTranslateJobResponse) => void): Promise<ConfirmVideoTranslateJobResponse>;
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
