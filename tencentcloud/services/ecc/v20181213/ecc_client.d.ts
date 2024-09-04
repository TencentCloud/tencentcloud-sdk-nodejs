import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CorrectMultiImageResponse, DescribeTaskRequest, ECCResponse, EHOCRResponse, ECCRequest, DescribeTaskResponse, EHOCRRequest, CorrectMultiImageRequest } from "./ecc_models";
/**
 * ecc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * https://ecc.tencentcloudapi.com/?Action=EHOCR
图像识别批改接口
     */
    EHOCR(req: EHOCRRequest, cb?: (error: string, rep: EHOCRResponse) => void): Promise<EHOCRResponse>;
    /**
     * 纯文本英语作文批改
     */
    ECC(req: ECCRequest, cb?: (error: string, rep: ECCResponse) => void): Promise<ECCResponse>;
    /**
     * 异步任务结果查询接口
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * https://ecc.tencentcloudapi.com/?Action=CorrectMultiImage
多图像识别批改接口
     */
    CorrectMultiImage(req: CorrectMultiImageRequest, cb?: (error: string, rep: CorrectMultiImageResponse) => void): Promise<CorrectMultiImageResponse>;
}
