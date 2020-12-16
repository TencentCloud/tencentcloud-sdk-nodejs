import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAudioModerationTaskResponse, CreateBizConfigRequest, DescribeBizConfigRequest, CancelTaskRequest, DescribeTaskDetailResponse, CreateAudioModerationTaskRequest, CreateBizConfigResponse, DescribeTaskDetailRequest, CancelTaskResponse, DescribeAmsListRequest, DescribeAudioStatResponse, DescribeAmsListResponse, DescribeAudioStatRequest, DescribeBizConfigResponse } from "./ams_models";
/**
 * ams client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 控制台识别统计
     */
    DescribeAudioStat(req: DescribeAudioStatRequest, cb?: (error: string, rep: DescribeAudioStatResponse) => void): Promise<DescribeAudioStatResponse>;
    /**
     * 查看任务详情
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 创建业务配置，1个账号最多可以创建20个配置，可定义音频审核的场景，如色情、谩骂等，

在创建业务配置之前，你需要以下步骤：
1. 开通COS存储桶功能，新建存储桶，例如 cms_segments，用来存储 视频转换过程中生成对音频和图片。
2. 然后在COS控制台，授权天御内容安全主账号 对 cms_segments 存储桶对读写权限。具体授权操作，参考https://cloud.tencent.com/document/product/436/38648

     */
    CreateBizConfig(req: CreateBizConfigRequest, cb?: (error: string, rep: CreateBizConfigResponse) => void): Promise<CreateBizConfigResponse>;
    /**
     * 查看单个配置
     */
    DescribeBizConfig(req: DescribeBizConfigRequest, cb?: (error: string, rep: DescribeBizConfigResponse) => void): Promise<DescribeBizConfigResponse>;
    /**
     * 取消任务
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * 本接口（Audio Moderation）用于提交音频内容（包括音频文件或流地址）进行智能审核任务，使用前请您登陆控制台开通音频内容安全服务。

### 功能使用说明：
- 前往“内容安全控制台-音频内容安全”开启使用音频内容安全服务，首次开通可获得20小时免费调用时长

### 接口功能说明：
- 支持对音频流或音频文件进行检测，判断其中是否包含违规内容；
- 支持设置回调地址 Callback 获取检测结果，或通过接口(查询音频检测结果)主动轮询获取检测结果；
- 支持识别违规内容，包括：低俗、谩骂、色情、涉政、广告等场景；
- 支持批量提交检测任务。检测任务列表最多支持10个；

### 音频文件调用说明：
- 音频文件大小支持：文件 < 500M；
- 音频文件时长支持：< 1小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频文件支持格式：wav、mp3、aac、flac、amr、3gp、 m4a、wma、ogg、ape；
- 支持音视频文件分离并对音频文件进行独立识别；

### 音频流调用说明：
- 音频流时长支持：< 3小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频流支持的传输协议：RTMP、HTTP、HTTPS；
- 音频流格式支持的类型：rtp、srtp、rtmp、rtmps、mmsh、 mmst、hls、http、tcp、https、m3u8；
- 支持音视频流分离并对音频流进行独立识别；
     */
    CreateAudioModerationTask(req: CreateAudioModerationTaskRequest, cb?: (error: string, rep: CreateAudioModerationTaskResponse) => void): Promise<CreateAudioModerationTaskResponse>;
    /**
     * 音频审核明细列表
     */
    DescribeAmsList(req: DescribeAmsListRequest, cb?: (error: string, rep: DescribeAmsListResponse) => void): Promise<DescribeAmsListResponse>;
}
