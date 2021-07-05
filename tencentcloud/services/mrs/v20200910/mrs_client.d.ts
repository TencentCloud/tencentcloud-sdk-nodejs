import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ReportTextStructuredResponse, ImageToObjectRequest, ReportImageStructuredRequest, ImageToClassResponse, ImageToObjectResponse, TextToClassRequest, ReportTextStructuredRequest, TextToClassResponse, TextToObjectRequest, ReportImageStructuredResponse, ImageToClassRequest, TextToObjectResponse } from "./mrs_models";
/**
 * mrs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 图片分类
     */
    ImageToClass(req: ImageToClassRequest, cb?: (error: string, rep: ImageToClassResponse) => void): Promise<ImageToClassResponse>;
    /**
     * 文本转结构化对象
     */
    TextToObject(req: TextToObjectRequest, cb?: (error: string, rep: TextToObjectResponse) => void): Promise<TextToObjectResponse>;
    /**
     * 接口还未上线

将输入的医疗报告文本内容进行结构化输出
     */
    ReportTextStructured(req: ReportTextStructuredRequest, cb?: (error: string, rep: ReportTextStructuredResponse) => void): Promise<ReportTextStructuredResponse>;
    /**
     * 图片转结构化对象
     */
    ImageToObject(req: ImageToObjectRequest, cb?: (error: string, rep: ImageToObjectResponse) => void): Promise<ImageToObjectResponse>;
    /**
     * 接口没有流量

将输入的图片类型报告结构化
     */
    ReportImageStructured(req: ReportImageStructuredRequest, cb?: (error: string, rep: ReportImageStructuredResponse) => void): Promise<ReportImageStructuredResponse>;
    /**
     * 文本分类
     */
    TextToClass(req: TextToClassRequest, cb?: (error: string, rep: TextToClassResponse) => void): Promise<TextToClassResponse>;
}
