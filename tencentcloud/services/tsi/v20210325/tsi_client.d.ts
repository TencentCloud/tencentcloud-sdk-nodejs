import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TongChuanSyncResponse, TongChuanRecognizeResponse, TongChuanDisplayRequest, TongChuanRecognizeRequest, TongChuanDisplayResponse, TongChuanSyncRequest } from "./tsi_models";
/**
 * tsi client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务，目前开放中英互译的同传服务。 待识别和翻译的音频文件格式是 pcm，pcm采样率要求16kHz、位深16bit、单声道、每个分片时长200ms~500ms，音频内语音清晰。
     */
    TongChuanRecognize(req: TongChuanRecognizeRequest, cb?: (error: string, rep: TongChuanRecognizeResponse) => void): Promise<TongChuanRecognizeResponse>;
    /**
     * 获取同传结果。
     */
    TongChuanDisplay(req: TongChuanDisplayRequest, cb?: (error: string, rep: TongChuanDisplayResponse) => void): Promise<TongChuanDisplayResponse>;
    /**
     * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务，目前开放中英互译的同传服务。 待识别和翻译的音频文件格式是 pcm，pcm采样率要求16kHz、位深16bit、单声道、每个分片时长200ms~500ms，音频内语音清晰。
     */
    TongChuanSync(req: TongChuanSyncRequest, cb?: (error: string, rep: TongChuanSyncResponse) => void): Promise<TongChuanSyncResponse>;
}
