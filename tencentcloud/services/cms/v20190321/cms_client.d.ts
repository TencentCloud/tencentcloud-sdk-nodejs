import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateKeywordsSamplesResponse, CreateKeywordsSamplesRequest, DescribeKeywordsLibsRequest, ImageModerationResponse, TextModerationResponse, ImageModerationRequest, DescribeLibSamplesResponse, DescribeLibSamplesRequest, DeleteLibSamplesResponse, TextModerationRequest, DeleteLibSamplesRequest, DescribeKeywordsLibsResponse } from "./cms_models";
/**
 * cms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     */
    TextModeration(req: TextModerationRequest, cb?: (error: string, rep: TextModerationResponse) => void): Promise<TextModerationResponse>;
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     */
    ImageModeration(req: ImageModerationRequest, cb?: (error: string, rep: ImageModerationResponse) => void): Promise<ImageModerationResponse>;
    /**
     * 获取关键词接口
     */
    DescribeLibSamples(req: DescribeLibSamplesRequest, cb?: (error: string, rep: DescribeLibSamplesResponse) => void): Promise<DescribeLibSamplesResponse>;
    /**
     * 获取用户词库列表
     */
    DescribeKeywordsLibs(req: DescribeKeywordsLibsRequest, cb?: (error: string, rep: DescribeKeywordsLibsResponse) => void): Promise<DescribeKeywordsLibsResponse>;
    /**
     * 创建关键词接口
     */
    CreateKeywordsSamples(req: CreateKeywordsSamplesRequest, cb?: (error: string, rep: CreateKeywordsSamplesResponse) => void): Promise<CreateKeywordsSamplesResponse>;
    /**
     * 删除关键词接口
     */
    DeleteLibSamples(req: DeleteLibSamplesRequest, cb?: (error: string, rep: DeleteLibSamplesResponse) => void): Promise<DeleteLibSamplesResponse>;
}
