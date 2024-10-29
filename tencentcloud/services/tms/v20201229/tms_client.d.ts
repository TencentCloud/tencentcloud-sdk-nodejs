import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextModerationRequest, TextModerationResponse } from "./tms_models";
/**
 * tms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（Text Moderation）用于提交文本内容进行智能审核任务。使用前请您使用腾讯云主账号登录控制台 [开通文本内容安全服务](https://console.cloud.tencent.com/cms) 并调整好对应的业务配置。

### 接口使用说明
- 前往“[内容安全控制台-文本内容安全](https://console.cloud.tencent.com/cms)”开启使用文本内容安全服务，首次开通服务的用户可免费领用试用套餐包，包含**3000条**文本识别额度，有效期为15天。
- 该接口为收费接口，计费方式敬请参见 [腾讯云文本内容安全定价](https://cloud.tencent.com/product/tms/pricing)。

### 接口功能说明：
- 支持对文本文件进行检测，通过深度学习技术，识别可能令人反感、不安全或不适宜的违规文本内容；
- 支持识别多种违规场景，包括：低俗、谩骂、色情、广告等场景；
- 支持根据不同的业务场景配置自定义的审核策略，可在控制台文本内容安全-策略管理中配置；
- 支持用户自定义配置词库黑白名单，打击自定义识别类型的违规文本（目前仅支持黑名单配置）；
- 支持在审核文本内容时同时关联账号或设备信息，可识别违规风险账号或设备。

### 接口调用说明：
- 文本内容大小支持：文本原文长度不能超过unicode编码长度10000个字符；
- 文本审核语言支持：目前支持中文、英文、阿拉伯数字的检测；
- 默认接口请求频率限制：**1000次/秒**，超过该频率限制则接口会报错。
     */
    TextModeration(req: TextModerationRequest, cb?: (error: string, rep: TextModerationResponse) => void): Promise<TextModerationResponse>;
}
