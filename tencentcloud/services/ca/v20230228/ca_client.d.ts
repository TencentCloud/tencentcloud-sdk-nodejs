import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVerifyReportRequest, DescribeVerifyReportRequest, UploadFileRequest, CreateVerifyReportResponse, UploadFileResponse, DescribeVerifyReportResponse } from "./ca_models";
/**
 * ca client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 下载验签报告url，url有效期默认12小时
     */
    DescribeVerifyReport(req: DescribeVerifyReportRequest, cb?: (error: string, rep: DescribeVerifyReportResponse) => void): Promise<DescribeVerifyReportResponse>;
    /**
     * 文件上传接口
     */
    UploadFile(req: UploadFileRequest, cb?: (error: string, rep: UploadFileResponse) => void): Promise<UploadFileResponse>;
    /**
     * 创建签名验证报告任务，此接口为异步盖章接口，盖章时效24小时。
     */
    CreateVerifyReport(req: CreateVerifyReportRequest, cb?: (error: string, rep: CreateVerifyReportResponse) => void): Promise<CreateVerifyReportResponse>;
}
