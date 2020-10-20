import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ChatRequest, SentenceRecognitionResponse, SimultaneousInterpretingResponse, TextToVoiceResponse, SimultaneousInterpretingRequest, SentenceRecognitionRequest, TextToVoiceRequest, ChatResponse } from "./aai_models";
/**
 * aai client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口是实时流式识别，可同时返回语音识别文本及翻译文本，当前仅支持中文和英文。该接口可配合同传windows客户端，提供会议现场同传服务。
     */
    SimultaneousInterpreting(req: SimultaneousInterpretingRequest, cb?: (error: string, rep: SimultaneousInterpretingResponse) => void): Promise<SimultaneousInterpretingResponse>;
    /**
     * 识别60s内的短语音，当音频放在请求body中传输时整个请求大小不能超过600KB，当音频以url方式传输时，音频时长不可超过60s。所有请求参数放在post的body中采用x-www-form-urlencoded（数据转换成一个字符串（name1=value1&name2=value2…）进行urlencode后）编码传输。现暂只支持中文普通话识别，支持识别8k(16k)的16bit的mp3或者wav音频。
     */
    SentenceRecognition(req: SentenceRecognitionRequest, cb?: (error: string, rep: SentenceRecognitionResponse) => void): Promise<SentenceRecognitionResponse>;
    /**
     * 提供基于文本的基础聊天能力，可以让您的应用快速拥有具备深度语义理解的机器聊天功能。
     */
    Chat(req: ChatRequest, cb?: (error: string, rep: ChatResponse) => void): Promise<ChatResponse>;
    /**
     * 腾讯云语音合成技术（TTS）可以将任意文本转化为语音，实现让机器和应用张口说话。
腾讯TTS技术可以应用到很多场景，比如，移动APP语音播报新闻；智能设备语音提醒；依靠网上现有节目或少量录音，快速合成明星语音，降低邀约成本；支持车载导航语音合成的个性化语音播报。
内测期间免费使用。
     */
    TextToVoice(req: TextToVoiceRequest, cb?: (error: string, rep: TextToVoiceResponse) => void): Promise<TextToVoiceResponse>;
}
