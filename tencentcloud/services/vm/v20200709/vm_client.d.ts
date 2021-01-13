import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVideoModerationTaskResponse, CancelTaskRequest, DescribeTaskDetailResponse, DescribeVideoStatResponse, CreateBizConfigResponse, DescribeTaskDetailRequest, DescribeVideoStatRequest, CreateVideoModerationTaskRequest, CancelTaskResponse, CreateBizConfigRequest } from "./vm_models";
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
     * 通过URL或存储桶创建审核任务
     */
    CreateVideoModerationTask(req: CreateVideoModerationTaskRequest, cb?: (error: string, rep: CreateVideoModerationTaskResponse) => void): Promise<CreateVideoModerationTaskResponse>;
    /**
     * 控制台识别统计
     */
    DescribeVideoStat(req: DescribeVideoStatRequest, cb?: (error: string, rep: DescribeVideoStatResponse) => void): Promise<DescribeVideoStatResponse>;
    /**
     * 创建业务配置，1个账号最多可以创建20个配置，可定义音频审核的场景，如色情、谩骂等，

在创建业务配置之前，你需要以下步骤：
1. 开通COS存储捅功能，新建存储桶，例如 cms_segments，用来存储 视频转换过程中生成对音频和图片。
2. 然后在COS控制台，授权天御内容安全主账号 对 cms_segments 存储桶对读写权限。具体授权操作，参考https://cloud.tencent.com/document/product/436/38648

     */
    CreateBizConfig(req: CreateBizConfigRequest, cb?: (error: string, rep: CreateBizConfigResponse) => void): Promise<CreateBizConfigResponse>;
    /**
     * 取消任务
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
}
