/**
 * ImageToImage返回参数结构体
 */
export interface ImageToImageResponse {
    /**
      * 返回的生成图 Base64 编码。
      */
    ResultImage?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * logo参数
 */
export interface LogoParam {
    /**
      * 水印url
      */
    LogoUrl?: string;
    /**
      * 水印base64，url和base64二选一传入
      */
    LogoImage?: string;
    /**
      * 水印图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
      */
    LogoRect?: LogoRect;
}
/**
 * ImageToImage请求参数结构体
 */
export interface ImageToImageRequest {
    /**
      * 输入图 Base64 数据。
算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
      */
    InputImage?: string;
    /**
      * 输入图 Url。
算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
      */
    InputUrl?: string;
    /**
      * 文本描述。
用于在输入图的基础上引导生成图效果，建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。推荐使用中文。最多支持512个 utf-8 字符。
注意：如果不输入任何文本描述，可能导致较差的效果，建议根据期望的效果输入相应的文本描述。
      */
    Prompt?: string;
    /**
      * 反向文本描述。
用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
推荐使用中文。最多可传512个 utf-8 字符。
      */
    NegativePrompt?: string;
    /**
      * 绘画风格。
请在  [智能图生图风格列表](https://cloud.tencent.com/document/product/1668/86250) 中选择期望的风格，传入风格编号。
推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
如果想要探索风格列表之外的风格，也可以尝试在 Prompt 中输入其他的风格描述。
      */
    Styles?: Array<string>;
    /**
      * 生成图结果的配置，包括输出图片分辨率和尺寸等。
      */
    ResultConfig?: ResultConfig;
    /**
      * 为生成结果图添加标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
      */
    LogoAdd?: number;
    /**
      * 标识内容设置。
默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
      */
    LogoParam?: LogoParam;
    /**
      * 生成自由度。
Strength 值越小，生成图和原图越接近。取值范围0~1，不传默认为0.65。
      */
    Strength?: number;
}
/**
 * 输入框
 */
export interface LogoRect {
    /**
      * 左上角X坐标
      */
    X?: number;
    /**
      * 左上角Y坐标
      */
    Y?: number;
    /**
      * 方框宽度
      */
    Width?: number;
    /**
      * 方框高度
      */
    Height?: number;
}
/**
 * 返回结果配置
 */
export interface ResultConfig {
    /**
      * 生成图分辨率
支持生成以下不同分辨率的图片，对应1:1方图、3:4竖图、4:3横图三种尺寸规格。
取值：
● 768:768
● 768:1024
● 1024:768
      */
    Resolution?: string;
}
/**
 * TextToImage请求参数结构体
 */
export interface TextToImageRequest {
    /**
      * 文本描述。
算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。
不能为空，推荐使用中文。最多可传512个 utf-8 字符。
      */
    Prompt: string;
    /**
      * 反向文本描述。
用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
推荐使用中文。最多可传512个 utf-8 字符。
      */
    NegativePrompt?: string;
    /**
      * 绘画风格。
请在 [智能文生图风格列表](https://cloud.tencent.com/document/product/1668/86249) 中选择期望的风格，传入风格编号。
推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
如果想要探索风格列表之外的风格，也可以尝试在 Prompt 中输入其他的风格描述。
      */
    Styles?: Array<string>;
    /**
      * 生成图结果的配置，包括输出图片分辨率和尺寸等。
      */
    ResultConfig?: ResultConfig;
    /**
      * 为生成结果图添加标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
      */
    LogoAdd?: number;
    /**
      * 标识内容设置。
默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
      */
    LogoParam?: LogoParam;
}
/**
 * TextToImage返回参数结构体
 */
export interface TextToImageResponse {
    /**
      * 返回的生成图 Base64 编码。
      */
    ResultImage?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
