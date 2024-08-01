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
     * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务。
该接口需要配合[同传查询结果](https://cloud.tencent.com/document/product/1399/107636)接口使用，建议一个线程进行音频数据上传同时另外一个线程拉取同传结果。
如果需要同步接口，既上传音频的同时拉取同传结果，可以使用[同传上传音频并查询结果](https://cloud.tencent.com/document/product/1399/107634)接口。

-----------
### 接口要求
集成该API时，需按照以下要求：

| 内容| 格式 |
| -------- | ------- |
| 音频格式  | pcm    |
| 音频属性 | <ul><li>采样率：16000Hz</li><li>采样精度：16bits</li><li>声道：单声道（mono）</li></ul> |
| 响应格式    | 统一采用 JSON 格式   |
| 数据发送    | 建议每200ms 发送200ms 时长的数据包，即1:1实时率，对应大小为6400字节。<br/><ol><li>音频发送速率过快超过1:1实时率或者音频数据包之间发送间隔超过6秒，可能导致引擎出错，后台将返回错误；</li><li>每次发送数据的大小不得小于 200ms时长 的数据包，且不得大于 500ms时长 的数据包；小于 200ms时长 的数据包会被丢弃，大于 500ms时长 的数据包会影响引擎的数据处理；</li><li>若最后一个音频数据包不足 200ms，需要使用空数据进行补齐；</li></ol> |
     */
    TongChuanRecognize(req: TongChuanRecognizeRequest, cb?: (error: string, rep: TongChuanRecognizeResponse) => void): Promise<TongChuanRecognizeResponse>;
    /**
     * 获取同传结果。
     */
    TongChuanDisplay(req: TongChuanDisplayRequest, cb?: (error: string, rep: TongChuanDisplayResponse) => void): Promise<TongChuanDisplayResponse>;
    /**
     * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务。

-----------
### 接口要求
集成该API时，需按照以下要求：

| 内容| 格式 |
| -------- | ------- |
| 音频格式  | pcm    |
| 音频属性 | <ul><li>采样率：16000Hz</li><li>采样精度：16bits</li><li>声道：单声道（mono）</li></ul> |
| 响应格式    | 统一采用 JSON 格式   |
| 数据发送    | 建议每200ms 发送200ms 时长的数据包，即1:1实时率，对应大小为6400字节。<br/><ol><li>音频发送速率过快超过1:1实时率或者音频数据包之间发送间隔超过6秒，可能导致引擎出错，后台将返回错误；</li><li>每次发送数据的大小不得小于 200ms时长 的数据包，且不得大于 500ms时长 的数据包；小于 200ms时长 的数据包会被丢弃，大于 500ms时长 的数据包会影响引擎的数据处理；</li><li>若最后一个音频数据包不足 200ms，需要使用空数据进行补齐；</li></ol> |
     */
    TongChuanSync(req: TongChuanSyncRequest, cb?: (error: string, rep: TongChuanSyncResponse) => void): Promise<TongChuanSyncResponse>;
}
