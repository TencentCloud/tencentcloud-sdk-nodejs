/**
 * TextToVoice返回参数结构体
 */
export interface TextToVoiceResponse {
    /**
      * base64编码的wav/mp3音频数据
      */
    Audio: string;
    /**
      * 一次请求对应一个SessionId
      */
    SessionId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTtsTask返回参数结构体
 */
export interface CreateTtsTaskResponse {
    /**
      * 任务 id
      */
    Data: CreateTtsTaskRespData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTtsTaskStatus返回参数结构体
 */
export interface DescribeTtsTaskStatusResponse {
    /**
      * 任务状态返回
      */
    Data: DescribeTtsTaskStatusRespData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 异步合成请求的返回数据
 */
export interface CreateTtsTaskRespData {
    /**
      * 任务ID，可通过此ID在轮询接口获取合成状态与结果。注意：TaskId数据类型为string
      */
    TaskId: string;
}
/**
 * 获取异步合成结果的返回参数
 */
export interface DescribeTtsTaskStatusRespData {
    /**
      * 任务标识。
      */
    TaskId: string;
    /**
      * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
      */
    Status: number;
    /**
      * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
      */
    StatusStr: string;
    /**
      * 合成音频COS地址（链接有效期1天）。
      */
    ResultUrl: string;
    /**
      * 失败原因说明。
      */
    ErrorMsg: string;
}
/**
 * DescribeTtsTaskStatus请求参数结构体
 */
export interface DescribeTtsTaskStatusRequest {
    /**
      * 任务id
      */
    TaskId: string;
}
/**
 * CreateTtsTask请求参数结构体
 */
export interface CreateTtsTaskRequest {
    /**
      * 合成语音的源文本，按UTF-8编码统一计算，最多支持10万字符
      */
    Text: string;
    /**
      * 模型类型，1-默认模型。
      */
    ModelType: number;
    /**
      * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
      */
    Volume?: number;
    /**
      * 语速，范围：[-2，2]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li>如果需要更细化的语速，可以保留小数点后一位，例如0.5 1.1 1.8等。<br>
      */
    Speed?: number;
    /**
      * 项目id，用户自定义，默认为0。
      */
    ProjectId?: number;
    /**
      * 标准音色<li>10510000-智逍遥，旁对白阅读风格男声</li><li>1001-智瑜，情感女声</li><li>1002-智聆，通用女声</li><li>1003-智美，客服女声</li><li>1004-智云，通用男声</li><li>1005-智莉，通用女声</li><li>1007-智娜，客服女声</li><li>1008-智琪，客服女声</li><li>1009-智芸，知性女声</li><li>1010-智华，通用男声</li><li>1017-智蓉，情感女声</li><li>1018-智靖，情感男声</li><li>1050-WeJack，英文男声</li><li>1051-WeRose，英文女声</li>精品音色<br>精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/product/tts/pricing)<br><li>100510000-智逍遥，旁对白阅读风格男声（精品）</li><li>101001-智瑜，情感女声（精品）</li><li>101002-智聆，通用女声（精品）</li><li>101003-智美，客服女声（精品）</li><li>101004-智云，通用男声（精品）</li><li>101005-智莉，通用女声（精品）</li><li>101006-智言，助手女声</li><li>101007-智娜，客服女声（精品）</li><li>101008-智琪，客服女声（精品）</li><li>101009-智芸，知性女声（精品）</li><li>101010-智华，通用男声（精品）</li><li>101011-智燕，新闻女声</li><li>101012-智丹，新闻女声</li><li>101013-智辉，新闻男声</li><li>101014-智宁，新闻男声</li><li>101015-智萌，男童声</li><li>101016-智甜，女童声</li><li>101017-智蓉，情感女声（精品）</li><li>101018-智靖，情感男声（精品）</li><li>101019-智彤，粤语女声</li><li>101050-WeJack，英文男声（精品）</li><li>101051-WeRose，英文女声（精品）</li>
      */
    VoiceType?: number;
    /**
      * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li>
      */
    PrimaryLanguage?: number;
    /**
      * 音频采样率：<li>16000：16k（默认）</li><li>8000：8k</li>
      */
    SampleRate?: number;
    /**
      * 返回音频格式，可取值：mp3（默认），wav，pcm
      */
    Codec?: string;
    /**
      * 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。[回调说明](https://cloud.tencent.com/document/product/1073/55746)
      */
    CallbackUrl?: string;
    /**
      * 旁白与对白文本解析，分别合成相应风格（仅适用于旁对白音色），默认 false
      */
    VoiceoverDialogueSplit?: boolean;
}
/**
 * TextToVoice请求参数结构体
 */
export interface TextToVoiceRequest {
    /**
      * 合成语音的源文本，按UTF-8编码统一计算。
中文最大支持150个汉字（全角标点符号算一个汉字）；英文最大支持500个字母（半角标点符号算一个字母）。
      */
    Text: string;
    /**
      * 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。
      */
    SessionId: string;
    /**
      * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
      */
    Volume?: number;
    /**
      * 语速，范围：[-2，2]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li>如果需要更细化的语速，可以保留小数点后一位，例如0.5 1.1 1.8等。<br>
      */
    Speed?: number;
    /**
      * 项目id，用户自定义，默认为0。
      */
    ProjectId?: number;
    /**
      * 模型类型，1-默认模型。
      */
    ModelType?: number;
    /**
      * 标准音色<li>10510000-智逍遥，阅读男声</li><li>1001-智瑜，情感女声</li><li>1002-智聆，通用女声</li><li>1003-智美，客服女声</li><li>1004-智云，通用男声</li><li>1005-智莉，通用女声</li><li>1007-智娜，客服女声</li><li>1008-智琪，客服女声</li><li>1009-智芸，知性女声</li><li>1010-智华，通用男声</li><li>1017-智蓉，情感女声</li><li>1018-智靖，情感男声</li><li>1050-WeJack，英文男声</li><li>1051-WeRose，英文女声</li>精品音色<br>精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/product/tts/pricing)<br><li>100510000-智逍遥，阅读男声</li><li>101001-智瑜，情感女声</li><li>101002-智聆，通用女声</li><li>101003-智美，客服女声</li><li>101004-智云，通用男声</li><li>101005-智莉，通用女声</li><li>101006-智言，助手女声</li><li>101007-智娜，客服女声</li><li>101008-智琪，客服女声</li><li>101009-智芸，知性女声</li><li>101010-智华，通用男声</li><li>101011-智燕，新闻女声</li><li>101012-智丹，新闻女声</li><li>101013-智辉，新闻男声</li><li>101014-智宁，新闻男声</li><li>101015-智萌，男童声</li><li>101016-智甜，女童声</li><li>101017-智蓉，情感女声</li><li>101018-智靖，情感男声</li><li>101019-智彤，粤语女声</li><li>101020-智刚，新闻男声</li><li>101021-智瑞，新闻男声</li><li>101022-智虹，新闻女声</li><li>101023-智萱，聊天女声</li><li>101024-智皓，聊天男声</li><li>101025-智薇，聊天女声</li><li>101026-智希，通用女声</li><li>101027-智梅，通用女声</li><li>101028-智洁，通用女声</li><li>101029-智凯，通用男声</li><li>101030-智柯，通用男声</li><li>101031-智奎，通用男声</li><li>101032-智芳，通用女声</li><li>101033-智蓓，客服女声</li><li>101034-智莲，通用女声</li><li>101035-智依，通用女声</li><li>101040-智川，四川女声</li><li>101050-WeJack，英文男声</li><li>101051-WeRose，英文女声</li>
      */
    VoiceType?: number;
    /**
      * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li>
      */
    PrimaryLanguage?: number;
    /**
      * 音频采样率：<li>16000：16k（默认）</li><li>8000：8k</li>
      */
    SampleRate?: number;
    /**
      * 返回音频格式，可取值：wav（默认），mp3，pcm
      */
    Codec?: string;
}
