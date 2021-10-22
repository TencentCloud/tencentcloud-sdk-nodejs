import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageToObjectRequest, TextToObjectRequest, TextToObjectResponse, ImageToClassResponse, ImageToObjectResponse, TextToClassResponse, ImageToClassRequest, TextToClassRequest } from "./mrs_models";
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
     * 图片转结构化对象
     */
    ImageToObject(req: ImageToObjectRequest, cb?: (error: string, rep: ImageToObjectResponse) => void): Promise<ImageToObjectResponse>;
    /**
     * 文本分类
     */
    TextToClass(req: TextToClassRequest, cb?: (error: string, rep: TextToClassResponse) => void): Promise<TextToClassResponse>;
    /**
     * 文本转结构化对象
     */
    TextToObject(req: TextToObjectRequest, cb?: (error: string, rep: TextToObjectResponse) => void): Promise<TextToObjectResponse>;
}
