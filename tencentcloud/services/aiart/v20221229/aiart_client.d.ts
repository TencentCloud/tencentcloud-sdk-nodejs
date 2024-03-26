import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageToImageResponse, SubmitTextToImageProJobRequest, ImageToImageRequest, QueryTextToImageProJobResponse, QueryTextToImageProJobRequest, SubmitTextToImageProJobResponse, TextToImageRequest, TextToImageResponse } from "./aiart_models";
/**
 * aiart client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    QueryTextToImageProJob(req: QueryTextToImageProJobRequest, cb?: (error: string, rep: QueryTextToImageProJobResponse) => void): Promise<QueryTextToImageProJobResponse>;
    /**
     * 文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    SubmitTextToImageProJob(req: SubmitTextToImageProJobRequest, cb?: (error: string, rep: SubmitTextToImageProJobResponse) => void): Promise<SubmitTextToImageProJobResponse>;
    /**
     * 智能文生图接口将根据输入的描述文本，智能生成与之相关的结果图。
输入：256个字符以内的描述性文本，推荐使用中文。
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
