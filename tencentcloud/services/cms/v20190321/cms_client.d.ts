import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextModerationRequest, ImageModerationResponse, TextModerationResponse, ImageModerationRequest, CreateFileSampleRequest, DeleteTextSampleResponse, CreateTextSampleResponse, ManualReviewRequest, DescribeFileSampleRequest, DescribeTextSampleResponse, DeleteFileSampleResponse, DescribeFileSampleResponse, CreateTextSampleRequest, DeleteFileSampleRequest, DescribeTextSampleRequest, CreateFileSampleResponse, ManualReviewResponse, DeleteTextSampleRequest } from "./cms_models";
/**
 * cms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
删除文本样本库，暂时只支持单个删除。
     */
    DeleteTextSample(req: DeleteTextSampleRequest, cb?: (error: string, rep: DeleteTextSampleResponse) => void): Promise<DeleteTextSampleResponse>;
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
通过该接口可以将文本新增到样本库。
     */
    CreateTextSample(req: CreateTextSampleRequest, cb?: (error: string, rep: CreateTextSampleResponse) => void): Promise<CreateTextSampleResponse>;
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
通过该接口可以将图片新增到样本库。
     */
    CreateFileSample(req: CreateFileSampleRequest, cb?: (error: string, rep: CreateFileSampleResponse) => void): Promise<CreateFileSampleResponse>;
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
支持批量查询文本样本库。
     */
    DescribeTextSample(req: DescribeTextSampleRequest, cb?: (error: string, rep: DescribeTextSampleResponse) => void): Promise<DescribeTextSampleResponse>;
    /**
     * 人工审核对外接口
     */
    ManualReview(req: ManualReviewRequest, cb?: (error: string, rep: ManualReviewResponse) => void): Promise<ManualReviewResponse>;
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
查询图片样本库，支持批量查询。
     */
    DescribeFileSample(req: DescribeFileSampleRequest, cb?: (error: string, rep: DescribeFileSampleResponse) => void): Promise<DescribeFileSampleResponse>;
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     */
    TextModeration(req: TextModerationRequest, cb?: (error: string, rep: TextModerationResponse) => void): Promise<TextModerationResponse>;
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     */
    ImageModeration(req: ImageModerationRequest, cb?: (error: string, rep: ImageModerationResponse) => void): Promise<ImageModerationResponse>;
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
删除图片样本库，支持批量删除，一次提交不超过20个。
     */
    DeleteFileSample(req: DeleteFileSampleRequest, cb?: (error: string, rep: DeleteFileSampleResponse) => void): Promise<DeleteFileSampleResponse>;
}
