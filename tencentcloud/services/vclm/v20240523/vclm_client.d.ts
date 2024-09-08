import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitVideoStylizationJobRequest, ConfirmVideoTranslateJobRequest, DescribeVideoStylizationJobRequest, DescribePortraitSingJobRequest, DescribeImageAnimateJobResponse, SubmitPortraitSingJobRequest, SubmitImageAnimateJobResponse, ConfirmVideoTranslateJobResponse, SubmitVideoTranslateJobResponse, DescribeVideoTranslateJobRequest, SubmitVideoStylizationJobResponse, DescribeVideoStylizationJobResponse, SubmitImageAnimateJobRequest, DescribeImageAnimateJobRequest, DescribePortraitSingJobResponse, SubmitVideoTranslateJobRequest, SubmitPortraitSingJobResponse, DescribeVideoTranslateJobResponse } from "./vclm_models";
/**
 * vclm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * ###### 支持音色种别列表
| 音色名称                 | 性别 | 目标语言         | 音色ID |
| ------------------------ | ---- | ---------------- | ------ |
| Florian Multilingual     | 男 | 德语(德国)       | 701001 |
| Seraphina                | 女  | 德语(德国)       | 701002 |
| Ada Multilingual         | 女 | 英语(英国)       | 701003 |
| Ollie Multilingual       | 男  | 英语(英国)       | 701004 |
| Ava Multilingual         | 女 | 英语(美国)       | 701005 |
| Andrew Multilingual      | 男  | 英语(美国)       | 701006 |
| Emma Multilingual        | 女  | 英语(美国)       | 701007 |
| Brian Multilingual       | 男  | 英语(美国)       | 701008 |
| Jenny Multilingual       | 女  | 英语(美国)       | 701009 |
| Ryan Multilingual        | 男  | 英语(美国)       | 701010 |
| Adam Multilingual        | 男  | 英语(美国)       | 701011 |
| AlloyTurbo Multilingual  | 男  | 英语(美国)       | 701012 |
| Amanda Multilingual      | 女  | 英语(美国)       | 701013 |
| Brandon Multilingual     | 男  | 英语(美国)       | 701014 |
| Christopher Multilingual | 男  | 英语(美国)       | 701015 |
| Cora Multilingual        | 女  | 英语(美国)       | 701016 |
| Davis Multilingual       | 男  | 英语(美国)       | 701017 |
| Derek Multilingual       | 男  | 英语(美国)       | 701018 |
| Dustin Multilingual      | 男  | 英语(美国)       | 701019 |
| Evelyn Multilingual      | 女  | 英语(美国)       | 701020 |
| Lewis Multilingual       | 男  | 英语(美国)       | 701021 |
| Lola Multilingual        | 女  | 英语(美国)       | 701022 |
| Nancy Multilingual       | 女  | 英语(美国)       | 701023 |
| NovaTurbo Multilingual   | 女   | 英语(美国)       | 701024 |
| Phoebe Multilingual      | 女  | 英语(美国)       | 701025 |
| Samuel Multilingual      | 男  | 英语(美国)       | 701026 |
| Serena Multilingual      | 女  | 英语(美国)       | 701027 |
| Steffan Multilingual     | 男  | 英语(美国)       | 701028 |
| Arabella Multilingual    | 女  | 西班牙语(西班牙) | 701029 |
| Isidora Multilingual     | 女  | 西班牙语(西班牙) | 701030 |
| Tristan Multilingual     | 男  | 西班牙语(西班牙) | 701031 |
| Ximena Multilingual      | 女  | 西班牙语(西班牙) | 701032 |
| Remy Multilingual        | 男  | 法语(法国)       | 701033 |
| Vivienne Multilingual    | 女  | 法语(法国)       | 701034 |
| Lucien Multilingual      | 男  | 法语(法国)       | 701035 |
| Alessio Multilingual     | 男  | 意大利语(意大利) | 701036 |
| Giuseppe Multilingual    | 男  | 意大利语(意大利) | 701037 |
| Isabella Multilingual    | 女  | 意大利语(意大利) | 701038 |
| Marcello Multilingual    | 男  | 意大利语(意大利) | 701039 |
| Masaru Multilingual      | 男  | 日语(日本)       | 701040 |
| Hyunsu Multilingual      | 男  | 韩语(韩国)       | 701041 |
| Macerio Multilingual     | 男  | 葡萄牙语(巴西)   | 701042 |
| Thalita Multilingual     | 女  | 葡萄牙语(巴西)   | 701043 |
| 晓辰 多语言              | 女  | 中文(普通话)     | 701044 |
| 晓晓 多语言              | 女  | 中文(普通话)     | 701045 |
| 晓宇 多语言              | 女  | 中文(普通话)     | 701046 |
| 云逸 多语言              | 男 | 中文(普通话)     | 701047 |
| Yunfan Multilingual      | 男  | 中文(普通话)     | 701048 |
| Yunxiao Multilingual     | 男  | 中文(普通话)     | 701049 |
| 晓晓 方言                | 女  | 中文(普通话)     | 701050 |
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
     * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    DescribeVideoStylizationJob(req: DescribeVideoStylizationJobRequest, cb?: (error: string, rep: DescribeVideoStylizationJobResponse) => void): Promise<DescribeVideoStylizationJobResponse>;
}
