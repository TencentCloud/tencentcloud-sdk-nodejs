import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageMaskResponse, ImageToObjectRequest, ImageMaskAsyncGetResultResponse, ImageMaskAsyncRequest, TurnPDFToObjectAsyncRequest, TurnPDFToObjectAsyncResponse, TextToObjectResponse, TurnPDFToObjectResponse, TurnPDFToObjectAsyncGetResultResponse, TextToObjectRequest, ImageToClassResponse, DrugInstructionObjectResponse, TextToClassResponse, ImageMaskAsyncGetResultRequest, ImageMaskRequest, DrugInstructionObjectRequest, ImageToClassRequest, TextToClassRequest, TurnPDFToObjectRequest, TurnPDFToObjectAsyncGetResultRequest, ImageMaskAsyncResponse, ImageToObjectResponse } from "./mrs_models";
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
     * 药品说明书PDF文件结构化
     */
    DrugInstructionObject(req: DrugInstructionObjectRequest, cb?: (error: string, rep: DrugInstructionObjectResponse) => void): Promise<DrugInstructionObjectResponse>;
    /**
     * 体检报告PDF文件结构化异步获取结果接口
     */
    TurnPDFToObjectAsyncGetResult(req: TurnPDFToObjectAsyncGetResultRequest, cb?: (error: string, rep: TurnPDFToObjectAsyncGetResultResponse) => void): Promise<TurnPDFToObjectAsyncGetResultResponse>;
    /**
     * 文本转结构化对象。

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。
     */
    TextToObject(req: TextToObjectRequest, cb?: (error: string, rep: TextToObjectResponse) => void): Promise<TextToObjectResponse>;
    /**
     * 医疗报告图片脱敏接口
     */
    ImageMask(req: ImageMaskRequest, cb?: (error: string, rep: ImageMaskResponse) => void): Promise<ImageMaskResponse>;
    /**
     * 图片转结构化对象
     */
    ImageToObject(req: ImageToObjectRequest, cb?: (error: string, rep: ImageToObjectResponse) => void): Promise<ImageToObjectResponse>;
    /**
     * 体检报告PDF文件结构化-异步接口
     */
    TurnPDFToObjectAsync(req: TurnPDFToObjectAsyncRequest, cb?: (error: string, rep: TurnPDFToObjectAsyncResponse) => void): Promise<TurnPDFToObjectAsyncResponse>;
    /**
     * 图片脱敏-异步接口
     */
    ImageMaskAsync(req: ImageMaskAsyncRequest, cb?: (error: string, rep: ImageMaskAsyncResponse) => void): Promise<ImageMaskAsyncResponse>;
    /**
     * 图片脱敏-异步获取结果接口
     */
    ImageMaskAsyncGetResult(req: ImageMaskAsyncGetResultRequest, cb?: (error: string, rep: ImageMaskAsyncGetResultResponse) => void): Promise<ImageMaskAsyncGetResultResponse>;
    /**
     * 将PDF格式的体检报告文件结构化，解析关键信息。
注意：该接口是按照体检报告 PDF 页面数量统计次数，不是按照 PDF 文件数量统计次数。通过该接口传入的报告必须是体检报告，非体检报告可能无法正确解析。
     */
    TurnPDFToObject(req: TurnPDFToObjectRequest, cb?: (error: string, rep: TurnPDFToObjectResponse) => void): Promise<TurnPDFToObjectResponse>;
    /**
     * 文本分类

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，并且需要加上每个字符的坐标信息，才可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。如有需要调用此接口，建议先咨询产品团队。
     */
    TextToClass(req: TextToClassRequest, cb?: (error: string, rep: TextToClassResponse) => void): Promise<TextToClassResponse>;
}
