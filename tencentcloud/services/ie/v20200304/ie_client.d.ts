import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEditingTaskResultRequest, CreateMediaQualityRestorationTaskRequest, CreateEditingTaskRequest, DescribeMediaQualityRestorationTaskRusultRequest, DescribeQualityControlTaskResultRequest, DescribeEditingTaskResultResponse, CreateEditingTaskResponse, StopMediaQualityRestorationTaskResponse, StopMediaQualityRestorationTaskRequest, DescribeQualityControlTaskResultResponse, DescribeMediaQualityRestorationTaskRusultResponse, CreateQualityControlTaskResponse, CreateQualityControlTaskRequest, CreateMediaQualityRestorationTaskResponse } from "./ie_models";
/**
 * ie client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取画质重生任务结果，查看结束后的文件信息
     */
    DescribeMediaQualityRestorationTaskRusult(req: DescribeMediaQualityRestorationTaskRusultRequest, cb?: (error: string, rep: DescribeMediaQualityRestorationTaskRusultResponse) => void): Promise<DescribeMediaQualityRestorationTaskRusultResponse>;
    /**
     * 删除正在进行的画质重生任务
     */
    StopMediaQualityRestorationTask(req: StopMediaQualityRestorationTaskRequest, cb?: (error: string, rep: StopMediaQualityRestorationTaskResponse) => void): Promise<StopMediaQualityRestorationTaskResponse>;
    /**
     * 创建画质重生任务，对视频进行转码、去噪、去划痕、去毛刺、超分、细节增强和色彩增强。
     */
    CreateMediaQualityRestorationTask(req: CreateMediaQualityRestorationTaskRequest, cb?: (error: string, rep: CreateMediaQualityRestorationTaskResponse) => void): Promise<CreateMediaQualityRestorationTaskResponse>;
    /**
     * 获取编辑理解任务结果。
     */
    DescribeEditingTaskResult(req: DescribeEditingTaskResultRequest, cb?: (error: string, rep: DescribeEditingTaskResultResponse) => void): Promise<DescribeEditingTaskResultResponse>;
    /**
     * 获取媒体质检任务结果
     */
    DescribeQualityControlTaskResult(req: DescribeQualityControlTaskResultRequest, cb?: (error: string, rep: DescribeQualityControlTaskResultResponse) => void): Promise<DescribeQualityControlTaskResultResponse>;
    /**
     * 通过接口可以智能检测视频画面中抖动重影、模糊、低光照、过曝光、黑边、白边、黑屏、白屏、花屏、噪点、马赛克、二维码等在内的多个场景，还可以自动检测视频无音频异常、无声音片段。
     */
    CreateQualityControlTask(req: CreateQualityControlTaskRequest, cb?: (error: string, rep: CreateQualityControlTaskResponse) => void): Promise<CreateQualityControlTaskResponse>;
    /**
     * 创建编辑理解任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
     */
    CreateEditingTask(req: CreateEditingTaskRequest, cb?: (error: string, rep: CreateEditingTaskResponse) => void): Promise<CreateEditingTaskResponse>;
}
