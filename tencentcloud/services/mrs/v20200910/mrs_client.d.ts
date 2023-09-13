import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageToObjectRequest, TextToObjectResponse, TurnPDFToObjectResponse, TextToObjectRequest, ImageToClassResponse, TextToClassResponse, ImageToClassRequest, TextToClassRequest, TurnPDFToObjectRequest, ImageToObjectResponse } from "./mrs_models";
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
     * 将PDF格式的体检报告文件结构化，解析关键信息。
注意：该接口是按照体检报告 PDF 页面数量统计次数，不是按照 PDF 文件数量统计次数。通过该接口传入的报告必须是体检报告，非体检报告可能无法正确解析。
     */
    TurnPDFToObject(req: TurnPDFToObjectRequest, cb?: (error: string, rep: TurnPDFToObjectResponse) => void): Promise<TurnPDFToObjectResponse>;
    /**
     * 图片转结构化对象
     */
    ImageToObject(req: ImageToObjectRequest, cb?: (error: string, rep: ImageToObjectResponse) => void): Promise<ImageToObjectResponse>;
    /**
     * 文本分类
     */
    TextToClass(req: TextToClassRequest, cb?: (error: string, rep: TextToClassResponse) => void): Promise<TextToClassResponse>;
    /**
     * 文本转结构化对象。

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。
     */
    TextToObject(req: TextToObjectRequest, cb?: (error: string, rep: TextToObjectResponse) => void): Promise<TextToObjectResponse>;
}
