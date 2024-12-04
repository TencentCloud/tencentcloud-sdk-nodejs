import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextTranslateResponse, ImageTranslateRequest, SpeechTranslateResponse, ImageTranslateResponse, LanguageDetectRequest, TextTranslateBatchResponse, TextTranslateBatchRequest, LanguageDetectResponse, GetFileTranslateResponse, SpeechTranslateRequest, FileTranslateResponse, FileTranslateRequest, TextTranslateRequest, GetFileTranslateRequest } from "./tmt_models";
/**
 * tmt client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 可自动识别文本内容的语言种类，轻量高效，无需额外实现判断方式，使面向客户的服务体验更佳。 <br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。
     */
    LanguageDetect(req: LanguageDetectRequest, cb?: (error: string, rep: LanguageDetectResponse) => void): Promise<LanguageDetectResponse>;
    /**
     * 批量翻译文本的接口
     */
    TextTranslateBatch(req: TextTranslateBatchRequest, cb?: (error: string, rep: TextTranslateBatchResponse) => void): Promise<TextTranslateBatchResponse>;
    /**
     * 提供13种语言的图片翻译服务，可自动识别图片中的文本内容并翻译成目标语言，识别后的文本按行翻译，后续会提供可按段落翻译的版本。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。
     */
    ImageTranslate(req: ImageTranslateRequest, cb?: (error: string, rep: ImageTranslateResponse) => void): Promise<ImageTranslateResponse>;
    /**
     * 在调用文档翻译请求接口后，有回调和轮询两种方式获取识别结果。
•当采用回调方式时，翻译完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[文件翻译回调说明](https://cloud.tencent.com/document/product/551/91138)。
• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见参数说明。
     */
    GetFileTranslate(req: GetFileTranslateRequest, cb?: (error: string, rep: GetFileTranslateResponse) => void): Promise<GetFileTranslateResponse>;
    /**
     * 腾讯翻译为合作伙伴提供文本翻译、文档翻译、交互翻译、AI同传等多种机器翻译服务，具有toB多行业解决方案。作为WMT世界机器翻译大赛冠军，翻译准确度值得信赖，其中，交互翻译能力是业界领先技术；腾讯同传是AI同传业界标杆。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。
     */
    TextTranslate(req: TextTranslateRequest, cb?: (error: string, rep: TextTranslateResponse) => void): Promise<TextTranslateResponse>;
    /**
     * 提交文档原文内容，输出任务ID， 支持原文为单一语种文档（如出现多语言文档，仅支持以选定的源语言相关内容翻译）,文件格式有pdf、docx、pptx、xlsx，支持的文本格式有txt、xml、html、markdown、properties。任务翻译数据可保存7天，7天后不再返回任务数据。请注意保存。
     */
    FileTranslate(req: FileTranslateRequest, cb?: (error: string, rep: FileTranslateResponse) => void): Promise<FileTranslateResponse>;
    /**
     * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务，目前开放中英互译的语音翻译服务。
待识别和翻译的音频文件可以是 pcm、mp3和speex 格式，其中支持流式传输的只有pcm格式，pcm采样率要求16kHz、位深16bit、单声道，音频内语音清晰。<br/>
如果采用流式传输的方式，要求每个分片时长200ms~500ms；如果采用非流式的传输方式，要求音频时长不超过8s。注意最后一个分片的IsEnd参数设置为1。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源部分。
     */
    SpeechTranslate(req: SpeechTranslateRequest, cb?: (error: string, rep: SpeechTranslateResponse) => void): Promise<SpeechTranslateResponse>;
}
