import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeFileUrlsResponse, CreateDocumentResponse, StartFlowRequest, CancelFlowResponse, CreateDocumentRequest, CreateFlowRequest, CreateSchemeUrlRequest, DescribeThirdPartyAuthCodeRequest, UploadFilesRequest, CancelFlowRequest, DescribeFlowBriefsResponse, UploadFilesResponse, DescribeThirdPartyAuthCodeResponse, CreateFlowByFilesResponse, DescribeFlowBriefsRequest, DescribeFileUrlsRequest, DescribeFlowTemplatesResponse, StartFlowResponse, CreateSchemeUrlResponse, CreateFlowByFilesRequest, CreateFlowResponse, DescribeFlowTemplatesRequest } from "./ess_models";
/**
 * ess client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口用于发起流程
     */
    StartFlow(req: StartFlowRequest, cb?: (error: string, rep: StartFlowResponse) => void): Promise<StartFlowResponse>;
    /**
     * 用于撤销流程
     */
    CancelFlow(req: CancelFlowRequest, cb?: (error: string, rep: CancelFlowResponse) => void): Promise<CancelFlowResponse>;
    /**
     * 创建电子文档
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 查询文件下载URL
     */
    DescribeFileUrls(req: DescribeFileUrlsRequest, cb?: (error: string, rep: DescribeFileUrlsResponse) => void): Promise<DescribeFileUrlsResponse>;
    /**
     * 通过AuthCode查询用户是否实名
     */
    DescribeThirdPartyAuthCode(req: DescribeThirdPartyAuthCodeRequest, cb?: (error: string, rep: DescribeThirdPartyAuthCodeResponse) => void): Promise<DescribeThirdPartyAuthCodeResponse>;
    /**
     * 创建签署流程
     */
    CreateFlow(req: CreateFlowRequest, cb?: (error: string, rep: CreateFlowResponse) => void): Promise<CreateFlowResponse>;
    /**
     * 获取小程序跳转链接

跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式）


如您需要自主配置小程序跳转链接，请参考: <a href="https://tcloud-doc.isd.com/document/product/1323/74774">跳转小程序链接配置说明</a>
     */
    CreateSchemeUrl(req: CreateSchemeUrlRequest, cb?: (error: string, rep: CreateSchemeUrlResponse) => void): Promise<CreateSchemeUrlResponse>;
    /**
     * 二期接口-查询模板
     */
    DescribeFlowTemplates(req: DescribeFlowTemplatesRequest, cb?: (error: string, rep: DescribeFlowTemplatesResponse) => void): Promise<DescribeFlowTemplatesResponse>;
    /**
     * 查询流程摘要
     */
    DescribeFlowBriefs(req: DescribeFlowBriefsRequest, cb?: (error: string, rep: DescribeFlowBriefsResponse) => void): Promise<DescribeFlowBriefsResponse>;
    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建流程。
     */
    CreateFlowByFiles(req: CreateFlowByFilesRequest, cb?: (error: string, rep: CreateFlowByFilesResponse) => void): Promise<CreateFlowByFilesResponse>;
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn，设置Version为2020-12-22
     */
    UploadFiles(req: UploadFilesRequest, cb?: (error: string, rep: UploadFilesResponse) => void): Promise<UploadFilesResponse>;
}
