import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVideoStylizationJobResponse, SubmitVideoStylizationJobResponse, DescribeVideoStylizationJobRequest, SubmitVideoStylizationJobRequest } from "./vcg_models";
/**
 * vcg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于提交视频风格化任务。支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    SubmitVideoStylizationJob(req: SubmitVideoStylizationJobRequest, cb?: (error: string, rep: SubmitVideoStylizationJobResponse) => void): Promise<SubmitVideoStylizationJobResponse>;
    /**
     * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    DescribeVideoStylizationJob(req: DescribeVideoStylizationJobRequest, cb?: (error: string, rep: DescribeVideoStylizationJobResponse) => void): Promise<DescribeVideoStylizationJobResponse>;
}
