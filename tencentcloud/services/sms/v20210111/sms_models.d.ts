/**
 * PullSmsReplyStatus请求参数结构体
 */
export interface PullSmsReplyStatusRequest {
    /**
      * 拉取最大条数，最多100条。
      */
    Limit: number;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。
      */
    SmsSdkAppId: string;
}
/**
 * DeleteSmsTemplate返回参数结构体
 */
export interface DeleteSmsTemplateResponse {
    /**
      * 删除模板响应
      */
    DeleteTemplateStatus: DeleteTemplateStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySmsTemplate返回参数结构体
 */
export interface ModifySmsTemplateResponse {
    /**
      * 修改模板参数响应
      */
    ModifyTemplateStatus: ModifyTemplateStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySmsSign请求参数结构体
 */
export interface ModifySmsSignRequest {
    /**
      * 待修改的签名 ID。
      */
    SignId: number;
    /**
      * 签名名称。
      */
    SignName: string;
    /**
      * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
      */
    SignType: number;
    /**
      * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
      */
    DocumentType: number;
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
注：需要和待修改签名International值保持一致，该参数不能直接修改国内签名到国际签名。
      */
    International: number;
    /**
      * 签名用途：
0：自用。
1：他用。
      */
    SignPurpose: number;
    /**
      * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
      */
    ProofImage: string;
    /**
      * 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。
      */
    CommissionImage?: string;
    /**
      * 签名的申请备注。
      */
    Remark?: string;
}
/**
 * SmsPackagesStatistics请求参数结构体
 */
export interface SmsPackagesStatisticsRequest {
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 最大上限(需要拉取的套餐包个数)。
      */
    Limit: number;
    /**
      * 偏移量。
      */
    Offset: number;
    /**
      * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
注：拉取套餐包的创建时间不小于起始时间。
      */
    BeginTime: string;
    /**
      * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime且小于当前时间，拉取套餐包的创建时间不大于结束时间。
      */
    EndTime: string;
}
/**
 * AddSmsSign请求参数结构体
 */
export interface AddSmsSignRequest {
    /**
      * 签名名称。
注：不能重复申请已通过或待审核的签名。
      */
    SignName: string;
    /**
      * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
      */
    SignType: number;
    /**
      * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
      */
    DocumentType: number;
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
    International: number;
    /**
      * 签名用途：
0：自用。
1：他用。
      */
    SignPurpose: number;
    /**
      * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
      */
    ProofImage: string;
    /**
      * 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。
      */
    CommissionImage?: string;
    /**
      * 签名的申请备注。
      */
    Remark?: string;
}
/**
 * 添加模板参数响应
 */
export interface AddTemplateStatus {
    /**
      * 模板ID。
      */
    TemplateId: string;
}
/**
 * DescribeSmsTemplateList返回参数结构体
 */
export interface DescribeSmsTemplateListResponse {
    /**
      * 获取短信模板信息响应
      */
    DescribeTemplateStatusSet: Array<DescribeTemplateListStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePhoneNumberInfo请求参数结构体
 */
export interface DescribePhoneNumberInfoRequest {
    /**
      * 查询手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumberSet: Array<string>;
}
/**
 * PullSmsSendStatusByPhoneNumber请求参数结构体
 */
export interface PullSmsSendStatusByPhoneNumberRequest {
    /**
      * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期前7天的数据。
      */
    BeginTime: number;
    /**
      * 偏移量。
注：目前固定设置为0。
      */
    Offset: number;
    /**
      * 拉取最大条数，最多 100。
      */
    Limit: number;
    /**
      * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumber: string;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 拉取截止时间，UNIX 时间戳（时间：秒）。
      */
    EndTime?: number;
}
/**
 * AddSmsTemplate请求参数结构体
 */
export interface AddSmsTemplateRequest {
    /**
      * 模板名称。
      */
    TemplateName: string;
    /**
      * 模板内容。
      */
    TemplateContent: string;
    /**
      * 短信类型，0表示普通短信, 1表示营销短信。
      */
    SmsType: number;
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
    International: number;
    /**
      * 模板备注，例如申请原因，使用场景等。
      */
    Remark: string;
}
/**
 * ModifySmsTemplate请求参数结构体
 */
export interface ModifySmsTemplateRequest {
    /**
      * 待修改模板的ID。
      */
    TemplateId: number;
    /**
      * 新的模板名称。
      */
    TemplateName: string;
    /**
      * 新的模板内容。
      */
    TemplateContent: string;
    /**
      * 短信类型，0表示普通短信, 1表示营销短信。
      */
    SmsType: number;
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
    International: number;
    /**
      * 模板备注，例如申请原因，使用场景等。
      */
    Remark: string;
}
/**
 * 短信回复状态
 */
export interface PullSmsReplyStatus {
    /**
      * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
      */
    ExtendCode: string;
    /**
      * 国家（或地区）码。
      */
    CountryCode: string;
    /**
      * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumber: string;
    /**
      * 短信签名名称。
      */
    SignName: string;
    /**
      * 用户回复的内容。
      */
    ReplyContent: string;
    /**
      * 回复时间，UNIX 时间戳（单位：秒）。
      */
    ReplyTime: number;
    /**
      * 用户号码，普通格式，示例如：13711112222。
      */
    SubscriberNumber: string;
}
/**
 * CallbackStatusStatistics返回参数结构体
 */
export interface CallbackStatusStatisticsResponse {
    /**
      * 回执数据统计响应包体。
      */
    CallbackStatusStatistics: CallbackStatusStatistics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PullSmsSendStatus请求参数结构体
 */
export interface PullSmsSendStatusRequest {
    /**
      * 拉取最大条数，最多100条。
      */
    Limit: number;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。
      */
    SmsSdkAppId: string;
}
/**
 * 套餐包信息统计响应包体
 */
export interface SmsPackagesStatistics {
    /**
      * 套餐包创建时间，UNIX 时间戳（单位：秒）。
      */
    PackageCreateTime: number;
    /**
      * 套餐包生效时间，UNIX 时间戳（单位：秒）。
      */
    PackageEffectiveTime: number;
    /**
      * 套餐包过期时间，UNIX 时间戳（单位：秒）。
      */
    PackageExpiredTime: number;
    /**
      * 套餐包条数。
      */
    PackageAmount: number;
    /**
      * 套餐包类别，0表示赠送套餐包，1表示购买套餐包。
      */
    PackageType: number;
    /**
      * 套餐包 ID。
      */
    PackageId: number;
    /**
      * 当前使用套餐包条数。
      */
    CurrentUsage: number;
}
/**
 * PullSmsSendStatusByPhoneNumber返回参数结构体
 */
export interface PullSmsSendStatusByPhoneNumberResponse {
    /**
      * 下发状态响应集合。
      */
    PullSmsSendStatusSet: Array<PullSmsSendStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 修改签名响应
 */
export interface ModifySignStatus {
    /**
      * 签名ID。
      */
    SignId: number;
}
/**
 * 获取短信签名信息响应
 */
export interface DescribeSignListStatus {
    /**
      * 签名ID。
      */
    SignId: number;
    /**
      * 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信。
      */
    International: number;
    /**
      * 申请签名状态，其中0表示审核通过，1表示审核中。
-1：表示审核未通过或审核失败。
      */
    StatusCode: number;
    /**
      * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
      */
    ReviewReply: string;
    /**
      * 签名名称。
      */
    SignName: string;
    /**
      * 提交审核时间，UNIX 时间戳（单位：秒）。
      */
    CreateTime: number;
}
/**
 * SendSms返回参数结构体
 */
export interface SendSmsResponse {
    /**
      * 短信发送状态。
      */
    SendStatusSet: Array<SendStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendStatusStatistics返回参数结构体
 */
export interface SendStatusStatisticsResponse {
    /**
      * 发送数据统计响应包体。
      */
    SendStatusStatistics: SendStatusStatistics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendSms请求参数结构体
 */
export interface SendSmsRequest {
    /**
      * 下发手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号或全为境外手机号。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
注：发送国内短信格式还支持0086、86或无任何国家或地区码的11位手机号码，前缀默认为+86。
      */
    PhoneNumberSet: Array<string>;
    /**
      * 短信 SdkAppId，在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 模板 ID，必须填写已审核通过的模板 ID。模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看，若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。
      */
    TemplateId: string;
    /**
      * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，例如：腾讯云，签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看。
<dx-alert infotype="notice" title="注意">发送国内短信该参数必填。</dx-alert>
      */
    SignName?: string;
    /**
      * 模板参数，若无模板参数，则设置为空。
<dx-alert infotype="notice" title="注意">模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致。</dx-alert>
      */
    TemplateParamSet?: Array<string>;
    /**
      * 短信码号扩展号，默认未开通，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
      */
    ExtendCode?: string;
    /**
      * 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。
      */
    SessionContext?: string;
    /**
      * 国内短信无需填写该项；国际/港澳台短信已申请独立 SenderId 需要填写该字段，默认使用公共 SenderId，无需填写该字段。
注：月度使用量达到指定量级可申请独立 SenderId 使用，详情请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
      */
    SenderId?: string;
}
/**
 * 发送数据统计响应包体
 */
export interface SendStatusStatistics {
    /**
      * 短信计费条数统计，例如提交成功量为100条，其中有20条是长短信（长度为80字）被拆分成2条，则计费条数为： ```80 * 1 + 20 * 2 = 120``` 条。
      */
    FeeCount: number;
    /**
      * 短信提交量统计。
      */
    RequestCount: number;
    /**
      * 短信提交成功量统计。
      */
    RequestSuccessCount: number;
}
/**
 * CallbackStatusStatistics请求参数结构体
 */
export interface CallbackStatusStatisticsRequest {
    /**
      * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
      */
    BeginTime: string;
    /**
      * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime，且相差不超过32天。
      */
    EndTime: string;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 最大上限。
注：目前固定设置为0。
      */
    Limit: number;
    /**
      * 偏移量。
注：目前固定设置为0。
      */
    Offset: number;
}
/**
 * 删除模板响应
 */
export interface DeleteTemplateStatus {
    /**
      * 删除状态信息。
      */
    DeleteStatus: string;
    /**
      * 删除时间，UNIX 时间戳（单位：秒）。
      */
    DeleteTime: number;
}
/**
 * DescribeSmsSignList请求参数结构体
 */
export interface DescribeSmsSignListRequest {
    /**
      * 签名 ID 数组。
注：默认数组最大长度100。
      */
    SignIdSet: Array<number>;
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
    International: number;
}
/**
 * DescribePhoneNumberInfo返回参数结构体
 */
export interface DescribePhoneNumberInfoResponse {
    /**
      * 获取号码信息。
      */
    PhoneNumberInfoSet: Array<PhoneNumberInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取短信模板信息响应
 */
export interface DescribeTemplateListStatus {
    /**
      * 模板ID。
      */
    TemplateId: number;
    /**
      * 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信。
      */
    International: number;
    /**
      * 申请模板状态，其中0表示审核通过，1表示审核中，-1表示审核未通过或审核失败。
      */
    StatusCode: number;
    /**
      * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
      */
    ReviewReply: string;
    /**
      * 模板名称。
      */
    TemplateName: string;
    /**
      * 提交审核时间，UNIX 时间戳（单位：秒）。
      */
    CreateTime: number;
    /**
      * 模板内容。
      */
    TemplateContent: string;
}
/**
 * AddSmsTemplate返回参数结构体
 */
export interface AddSmsTemplateResponse {
    /**
      * 添加短信模板响应包体
      */
    AddTemplateStatus: AddTemplateStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 短信的下发状态详细信息
 */
export interface PullSmsSendStatus {
    /**
      * 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。
      */
    UserReceiveTime: number;
    /**
      * 国家（或地区）码。
      */
    CountryCode: string;
    /**
      * 用户号码，普通格式，示例如：13711112222。
      */
    SubscriberNumber: string;
    /**
      * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumber: string;
    /**
      * 本次发送标识 ID。
      */
    SerialNo: string;
    /**
      * 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）。
      */
    ReportStatus: string;
    /**
      * 用户接收短信状态描述。
      */
    Description: string;
    /**
      * 用户的 session 内容。与请求中的 SessionContext 一致，默认为空，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionContext: string;
}
/**
 * DescribeSmsSignList返回参数结构体
 */
export interface DescribeSmsSignListResponse {
    /**
      * 获取签名信息响应
      */
    DescribeSignListStatusSet: Array<DescribeSignListStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSmsTemplateList请求参数结构体
 */
export interface DescribeSmsTemplateListRequest {
    /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
    International: number;
    /**
      * 模板 ID 数组。数组为空时默认查询模板列表信息（仅允许主账号使用），请使用 Limit 和 Offset 字段设置查询范围。
<dx-alert infotype="notice" title="注意">默认数组长度最大100</dx-alert>
      */
    TemplateIdSet?: Array<number>;
    /**
      * 最大上限，最多100。
注：默认为0，TemplateIdSet 为空时启用。
      */
    Limit?: number;
    /**
      * 偏移量。
注：默认为0，TemplateIdSet 为空时启用。
      */
    Offset?: number;
}
/**
 * 回执数据统计响应包体
 */
export interface CallbackStatusStatistics {
    /**
      * 短信回执量统计。
      */
    CallbackCount: number;
    /**
      * 短信提交成功量统计。
      */
    RequestSuccessCount: number;
    /**
      * 短信回执失败量统计。
      */
    CallbackFailCount: number;
    /**
      * 短信回执成功量统计。
      */
    CallbackSuccessCount: number;
    /**
      * 运营商内部错误统计。
      */
    InternalErrorCount: number;
    /**
      * 号码无效或空号统计。
      */
    InvalidNumberCount: number;
    /**
      * 停机、关机等错误统计。
      */
    ShutdownErrorCount: number;
    /**
      * 号码拉入黑名单统计。
      */
    BlackListCount: number;
    /**
      * 运营商频率限制统计。
      */
    FrequencyLimitCount: number;
}
/**
 * 号码信息。
 */
export interface PhoneNumberInfo {
    /**
      * 号码信息查询错误码，查询成功返回 "Ok"。
      */
    Code: string;
    /**
      * 号码信息查询错误码描述。
      */
    Message: string;
    /**
      * 国家（或地区）码。
      */
    NationCode: string;
    /**
      * 用户号码，去除国家或地区码前缀的普通格式，示例如：13711112222。
      */
    SubscriberNumber: string;
    /**
      * 解析后的规范的 E.164 号码，与下发短信的号码解析结果一致。解析失败时会原样返回。
      */
    PhoneNumber: string;
    /**
      * 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF。
      */
    IsoCode: string;
    /**
      * 国家码或地区名，例如 China，可参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051#.E6.97.A5.E7.BB.93.E5.90.8E.E4.BB.98.E8.B4.B9.3Ca-id.3D.22post-payment.22.3E.3C.2Fa.3E)
      */
    IsoName: string;
}
/**
 * SendStatusStatistics请求参数结构体
 */
export interface SendStatusStatisticsRequest {
    /**
      * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
      */
    BeginTime: string;
    /**
      * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime。
      */
    EndTime: string;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 最大上限。
注：目前固定设置为0。
      */
    Limit: number;
    /**
      * 偏移量。
注：目前固定设置为0。
      */
    Offset: number;
}
/**
 * DeleteSmsTemplate请求参数结构体
 */
export interface DeleteSmsTemplateRequest {
    /**
      * 待删除的模板 ID。
      */
    TemplateId: number;
}
/**
 * PullSmsReplyStatusByPhoneNumber返回参数结构体
 */
export interface PullSmsReplyStatusByPhoneNumberResponse {
    /**
      * 回复状态响应集合。
      */
    PullSmsReplyStatusSet: Array<PullSmsReplyStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 发送短信状态
 */
export interface SendStatus {
    /**
      * 发送流水号。
      */
    SerialNo: string;
    /**
      * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumber: string;
    /**
      * 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。
      */
    Fee: number;
    /**
      * 用户 session 内容。
      */
    SessionContext: string;
    /**
      * 短信请求错误码，具体含义请参考 [错误码](https://cloud.tencent.com/document/api/382/55981#6.-.E9.94.99.E8.AF.AF.E7.A0.81)，发送成功返回 "Ok"。
      */
    Code: string;
    /**
      * 短信请求错误码描述。
      */
    Message: string;
    /**
      * 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF，具体支持列表请参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051)。
      */
    IsoCode: string;
}
/**
 * DeleteSmsSign返回参数结构体
 */
export interface DeleteSmsSignResponse {
    /**
      * 删除签名响应
      */
    DeleteSignStatus: DeleteSignStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddSmsSign返回参数结构体
 */
export interface AddSmsSignResponse {
    /**
      * 添加签名响应
      */
    AddSignStatus: AddSignStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSmsSign请求参数结构体
 */
export interface DeleteSmsSignRequest {
    /**
      * 待删除的签名 ID。
      */
    SignId: number;
}
/**
 * PullSmsReplyStatusByPhoneNumber请求参数结构体
 */
export interface PullSmsReplyStatusByPhoneNumberRequest {
    /**
      * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期前7天的数据。
      */
    BeginTime: number;
    /**
      * 偏移量。
注：目前固定设置为0。
      */
    Offset: number;
    /**
      * 拉取最大条数，最多 100。
      */
    Limit: number;
    /**
      * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
      */
    PhoneNumber: string;
    /**
      * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
      */
    SmsSdkAppId: string;
    /**
      * 拉取截止时间，UNIX 时间戳（时间：秒）。
      */
    EndTime?: number;
}
/**
 * ModifySmsSign返回参数结构体
 */
export interface ModifySmsSignResponse {
    /**
      * 修改签名响应
      */
    ModifySignStatus: ModifySignStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 添加签名响应
 */
export interface AddSignStatus {
    /**
      * 签名ID。
      */
    SignId: number;
}
/**
 * 修改模板参数响应
 */
export interface ModifyTemplateStatus {
    /**
      * 模板ID。
      */
    TemplateId: number;
}
/**
 * PullSmsSendStatus返回参数结构体
 */
export interface PullSmsSendStatusResponse {
    /**
      * 下发状态响应集合。
      */
    PullSmsSendStatusSet: Array<PullSmsSendStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SmsPackagesStatistics返回参数结构体
 */
export interface SmsPackagesStatisticsResponse {
    /**
      * 发送数据统计响应包体。
      */
    SmsPackagesStatisticsSet: Array<SmsPackagesStatistics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 删除签名响应
 */
export interface DeleteSignStatus {
    /**
      * 删除状态信息。
      */
    DeleteStatus: string;
    /**
      * 删除时间，UNIX 时间戳（单位：秒）。
      */
    DeleteTime: number;
}
/**
 * PullSmsReplyStatus返回参数结构体
 */
export interface PullSmsReplyStatusResponse {
    /**
      * 回复状态响应集合。
      */
    PullSmsReplyStatusSet: Array<PullSmsReplyStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
