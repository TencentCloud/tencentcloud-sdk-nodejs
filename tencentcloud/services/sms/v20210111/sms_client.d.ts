import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSmsTemplateListResponse, DescribeSmsTemplateListRequest } from "./sms_models";
/**
 * sms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * ⚠️注意：个人认证用户不支持使用 API 查询短信正文模版，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 [SDK](https://cloud.tencent.com/document/product/382/43193) 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2019-07-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
    DescribeSmsTemplateList(req: DescribeSmsTemplateListRequest, cb?: (error: string, rep: DescribeSmsTemplateListResponse) => void): Promise<DescribeSmsTemplateListResponse>;
}
