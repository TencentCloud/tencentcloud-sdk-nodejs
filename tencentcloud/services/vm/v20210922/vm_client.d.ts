import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVideoModerationTaskResponse, CancelTaskRequest, DescribeTaskDetailResponse, DescribeTasksRequest, DescribeTaskDetailRequest, CreateVideoModerationTaskRequest, DescribeTasksResponse, CancelTaskResponse } from "./vm_models";
/**
 * vm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看任务详情DescribeTaskDetail
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 通过URL或存储桶创建审核任务。

### 直播断流处理说明：
- 请确认已对接[取消任务](https://cloud.tencent.com/document/product/1265/80018)。
- 如果直播任务取消/结束，则终止直播拉流并退出审核。
- 如果直播任务没有取消/结束，直播视频推流因故中断，产品将在将在10分钟内持续拉流重试。如果10分钟检测到图片截帧/音频切片数据，则恢复正常审核，反之，则终止拉流并退出审核。在拉流终止后，用户如有审核需求，需重新送审。

默认接口请求频率限制：20次/秒。
     */
    CreateVideoModerationTask(req: CreateVideoModerationTaskRequest, cb?: (error: string, rep: CreateVideoModerationTaskResponse) => void): Promise<CreateVideoModerationTaskResponse>;
    /**
     * 通过查看审核任务列表接口，可查询任务队列；您可根据多种业务信息（业务类型、审核结果、任务状态等）筛选审核任务列表。<br>

默认接口请求频率限制：**20次/秒**。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 取消任务
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
}
