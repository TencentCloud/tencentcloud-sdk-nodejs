import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageToImageResponse, ImageToImageRequest, TextToImageRequest, TextToImageResponse } from "./aiart_models";
/**
 * aiart client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 智能文生图接口将根据输入的描述文本，智能生成与之相关的结果图。
输入：512个字符以内的描述性文本，推荐使用中文。
输出：对应风格及分辨率的 AI 生成图。
可支持的风格详见 [智能文生图风格列表](https://cloud.tencent.com/document/product/1668/86249)，请将列表中的“风格编号”传入 Styles 数组，建议选择一种风格。

请求频率限制为1次/秒。
     */
    TextToImage(req: TextToImageRequest, cb?: (error: string, rep: TextToImageResponse) => void): Promise<TextToImageResponse>;
    /**
     * 智能图生图接口将根据输入的图片及辅助描述文本，智能生成与之相关的结果图。
输入：单边分辨率小于2000、转成 Base64 字符串后小于 5MB 的图片，建议同时输入描述文本。
输出：对应风格及分辨率的 AI 生成图。
可支持的风格详见 [智能图生图风格列表](https://cloud.tencent.com/document/product/1668/86250)，请将列表中的“风格编号”传入 Styles 数组，建议选择一种风格。

请求频率限制为1次/秒。
     */
    ImageToImage(req: ImageToImageRequest, cb?: (error: string, rep: ImageToImageResponse) => void): Promise<ImageToImageResponse>;
}
