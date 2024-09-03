import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { PullSmsReplyStatusRequest, DeleteSmsTemplateResponse, ModifySmsTemplateResponse, ModifySmsSignRequest, AddSmsSignRequest, DescribeSmsTemplateListResponse, PullSmsSendStatusByPhoneNumberRequest, AddSmsTemplateRequest, ModifySmsTemplateRequest, CallbackStatusStatisticsResponse, PullSmsSendStatusRequest, PullSmsSendStatusByPhoneNumberResponse, SendSmsResponse, SendStatusStatisticsResponse, SendSmsRequest, CallbackStatusStatisticsRequest, DescribeSmsSignListRequest, SmsPackagesStatisticsRequest, AddSmsTemplateResponse, DescribeSmsSignListResponse, DescribeSmsTemplateListRequest, SendStatusStatisticsRequest, DeleteSmsTemplateRequest, PullSmsReplyStatusByPhoneNumberResponse, DeleteSmsSignResponse, AddSmsSignResponse, DeleteSmsSignRequest, PullSmsReplyStatusByPhoneNumberRequest, ModifySmsSignResponse, PullSmsSendStatusResponse, SmsPackagesStatisticsResponse, PullSmsReplyStatusResponse } from "./sms_models";
/**
 * sms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (ModifySmsSign) 用于修改短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>修改短信签名前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39022">腾讯云短信签名审核标准。</a></li><li>个人认证用户不支持使用 API 修改短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 修改短信签名。</li><li>修改短信签名，仅当签名为<b>待审核</b>或<b>已拒绝</b>状态时，才能进行修改，<b>已审核通过</b>的签名不支持修改。</li></ul></blockquote>
     */
    ModifySmsSign(req: ModifySmsSignRequest, cb?: (error: string, rep: ModifySmsSignResponse) => void): Promise<ModifySmsSignResponse>;
    /**
     * 本接口 (AddSmsSign) 用于添加短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>添加短信签名前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39022">腾讯云短信签名审核标准。</a></li><li>个人认证用户不支持使用 API 申请短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 申请短信签名。</li></ul></blockquote>
     */
    AddSmsSign(req: AddSmsSignRequest, cb?: (error: string, rep: AddSmsSignResponse) => void): Promise<AddSmsSignResponse>;
    /**
     * 本接口 (PullSmsSendStatus) 用于拉取短信下发状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>此接口需要联系  <a href="https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81">腾讯云短信小助手</a> 开通。</li><li>下发状态也支持 <a href="https://cloud.tencent.com/document/product/382/37809#.E7.9F.AD.E4.BF.A1.E7.8A.B6.E6.80.81.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE">配置回调</a> 的方式获取。</li></ul></blockquote>
     */
    PullSmsSendStatus(req: PullSmsSendStatusRequest, cb?: (error: string, rep: PullSmsSendStatusResponse) => void): Promise<PullSmsSendStatusResponse>;
    /**
     * 本接口 (SendSms) 用于发送验证码、通知类短信和营销短信。支持国内短信与国际/港澳台短信。
     */
    SendSms(req: SendSmsRequest, cb?: (error: string, rep: SendSmsResponse) => void): Promise<SendSmsResponse>;
    /**
     * 本接口 (DeleteSmsTemplate) 用于删除短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 删除短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 删除短信正文模板。</li></ul></blockquote>
     */
    DeleteSmsTemplate(req: DeleteSmsTemplateRequest, cb?: (error: string, rep: DeleteSmsTemplateResponse) => void): Promise<DeleteSmsTemplateResponse>;
    /**
     * 本接口 (SmsPackagesStatistics) 用于统计用户套餐包数据。
     */
    SmsPackagesStatistics(req: SmsPackagesStatisticsRequest, cb?: (error: string, rep: SmsPackagesStatisticsResponse) => void): Promise<SmsPackagesStatisticsResponse>;
    /**
     * 本接口 (SendStatusStatistics) 用于统计用户发送短信的数据。
     */
    SendStatusStatistics(req: SendStatusStatisticsRequest, cb?: (error: string, rep: SendStatusStatisticsResponse) => void): Promise<SendStatusStatisticsResponse>;
    /**
     * 本接口 (CallbackStatusStatistics) 用于统计用户回执的数据。
     */
    CallbackStatusStatistics(req: CallbackStatusStatisticsRequest, cb?: (error: string, rep: CallbackStatusStatisticsResponse) => void): Promise<CallbackStatusStatisticsResponse>;
    /**
     * 本接口 (DescribeSmsTemplateList) 用于查询短信模板状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 查询短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 查询短信正文模板。</li></ul></blockquote>
     */
    DescribeSmsTemplateList(req: DescribeSmsTemplateListRequest, cb?: (error: string, rep: DescribeSmsTemplateListResponse) => void): Promise<DescribeSmsTemplateListResponse>;
    /**
     * 本接口 (PullSmsReplyStatus) 用于拉取短信回复状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>此接口需要联系  <a href="https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81">腾讯云短信小助手</a> 开通。</li><li>上行回复也支持 <a href="https://cloud.tencent.com/document/product/382/42907">配置回复回调</a> 的方式获取。</li></ul></blockquote>
     */
    PullSmsReplyStatus(req: PullSmsReplyStatusRequest, cb?: (error: string, rep: PullSmsReplyStatusResponse) => void): Promise<PullSmsReplyStatusResponse>;
    /**
     * 本接口 (DescribeSmsSignList) 用于查询短信签名状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 查询短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 查询短信签名。</li></ul></blockquote>
     */
    DescribeSmsSignList(req: DescribeSmsSignListRequest, cb?: (error: string, rep: DescribeSmsSignListResponse) => void): Promise<DescribeSmsSignListResponse>;
    /**
     * 本接口 (PullSmsSendStatusByPhoneNumber) 用于拉取单个号码短信下发状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>下发状态也支持 <a href="https://cloud.tencent.com/document/product/382/37809#.E7.9F.AD.E4.BF.A1.E7.8A.B6.E6.80.81.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE">配置回调</a> 的方式获取。</li></ul></blockquote>
     */
    PullSmsSendStatusByPhoneNumber(req: PullSmsSendStatusByPhoneNumberRequest, cb?: (error: string, rep: PullSmsSendStatusByPhoneNumberResponse) => void): Promise<PullSmsSendStatusByPhoneNumberResponse>;
    /**
     * 本接口 (ModifySmsTemplate) 用于修改短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>修改短信正文模板前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39023">腾讯云短信正文模板审核标准。</a></li><li>个人认证用户不支持使用 API 修改短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 修改短信正文模板。</li><li>修改短信模板，仅当正文模板为<b>待审核</b>或<b>已拒绝</b>状态时，才能进行修改，<b>已审核通过</b>的正文模板不支持修改。</li></ul></blockquote>
     */
    ModifySmsTemplate(req: ModifySmsTemplateRequest, cb?: (error: string, rep: ModifySmsTemplateResponse) => void): Promise<ModifySmsTemplateResponse>;
    /**
     * 本接口 (PullSmsReplyStatusByPhoneNumber) 用于拉取单个号码短信回复状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>上行回复也支持 <a href="https://cloud.tencent.com/document/product/382/42907">配置回复回调</a> 的方式获取。</li></ul></blockquote>
     */
    PullSmsReplyStatusByPhoneNumber(req: PullSmsReplyStatusByPhoneNumberRequest, cb?: (error: string, rep: PullSmsReplyStatusByPhoneNumberResponse) => void): Promise<PullSmsReplyStatusByPhoneNumberResponse>;
    /**
     * 本接口 (DeleteSmsSign) 用于删除短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 删除短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 删除短信签名。</li></ul></blockquote>
     */
    DeleteSmsSign(req: DeleteSmsSignRequest, cb?: (error: string, rep: DeleteSmsSignResponse) => void): Promise<DeleteSmsSignResponse>;
    /**
     * 本接口 (AddSmsTemplate) 用于创建短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>申请短信模板前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39023">腾讯云短信正文模板审核标准。</a></li><li>个人认证用户不支持使用 API 申请短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 申请短信正文模板。</li></ul></blockquote>
     */
    AddSmsTemplate(req: AddSmsTemplateRequest, cb?: (error: string, rep: AddSmsTemplateResponse) => void): Promise<AddSmsTemplateResponse>;
}
