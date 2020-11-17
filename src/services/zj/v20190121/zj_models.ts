/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * ModifySmsTemplate返回参数结构体
 */
export interface ModifySmsTemplateResponse {
  /**
   * 返回
   */
  Data?: ModifySmsTemplateDataStruct

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加短信人群包信息接口返回
 */
export interface SmsAddCrowdPackInfoResponse {
  /**
   * 人群包id
   */
  ID: number
}

/**
 * PushMmsContent返回参数结构体
 */
export interface PushMmsContentResponse {
  /**
   * 推送短信返回信息
   */
  Data?: PushMmsContentResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信模板创建接口返回
 */
export interface AddSmsTemplateDataStruct {
  /**
   * 短信模板ID
   */
  TemplateId: number
}

/**
 * DescribeMmsInstanceList请求参数结构体
 */
export interface DescribeMmsInstanceListRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 返回数量
   */
  Limit: number

  /**
   * 业务代码
   */
  AppSubId?: string

  /**
   * 实例标题
   */
  Title?: string
}

/**
 * DescribeMmsInstanceInfo返回参数结构体
 */
export interface DescribeMmsInstanceInfoResponse {
  /**
   * 彩信实例信息
   */
  Data?: MmsInstanceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发送短信返回
 */
export interface SendSmsPaasDataStruct {
  /**
   * 发送流水号
   */
  SerialNo: string

  /**
   * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
   */
  PhoneNumber: string

  /**
   * 计费条数
   */
  Fee: number

  /**
   * OK为成功
   */
  Code: string

  /**
   * 短信请求错误码描述
   */
  Message: string
}

/**
 * AddCrowdPackInfo返回参数结构体
 */
export interface AddCrowdPackInfoResponse {
  /**
   * 接口返回
   */
  Data?: SmsAddCrowdPackInfoResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddSmsSign请求参数结构体
 */
export interface AddSmsSignRequest {
  /**
   * 商户证书
   */
  License: string

  /**
      * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司（0，1，2，3）。
1：APP（0，1，2，3，4） 。
2：网站（0，1，2，3，5）。
3：公众号或者小程序（0，1，2，3，6）。
4：商标（7）。
5：政府/机关事业单位/其他机构（2，3）。
注：必须按照对应关系选择证明类型，否则会审核失败。
      */
  SignType: number

  /**
      * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书
      */
  DocumentType: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
   * 资质图片url
   */
  ProofImage: string

  /**
   * 签名内容
   */
  SignName: string

  /**
   * 签名备注，比如申请原因，使用场景等,可以填空
   */
  Remark?: string
}

/**
 * AddSmsSign返回参数结构体
 */
export interface AddSmsSignResponse {
  /**
   * 签名id数组
   */
  Data?: PaasCreateSignResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetSmsCampaignStatus请求参数结构体
 */
export interface GetSmsCampaignStatusRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 活动ID
   */
  CampaignId: number
}

/**
 * DescribeSmsTemplateList返回参数结构体
 */
export interface DescribeSmsTemplateListResponse {
  /**
   * 返回数据信息
   */
  Data?: Array<DescribeSmsTemplateListDataStruct>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 彩信实例状态列表
 */
export interface MmsInstanceInfoList {
  /**
   * 总数据量
   */
  Total: number

  /**
   * 彩信实例状态信息列表
   */
  List: Array<MmsInstanceInfo>
}

/**
 * GetCrowdPackList返回参数结构体
 */
export interface GetCrowdPackListResponse {
  /**
   * 人群包信息列表
   */
  Data?: SmsGetCrowdPackListResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建超级短信样例返回结果
 */
export interface CreateMmsInstanceResp {
  /**
   * 返回码：0-成功 其它-失败
   */
  ReturnCode: number

  /**
   * 返回信息
   */
  ReturnMsg: string

  /**
   * 样例id
   */
  InstanceId: number
}

/**
 * AddSmsTemplate请求参数结构体
 */
export interface AddSmsTemplateRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信签名，创建签名时返回
   */
  SignID: number

  /**
   * 模板名称
   */
  TemplateName: string

  /**
   * 短信内容，动态内容使用占位符{1}，{2}等表示
   */
  TemplateContent: string

  /**
   * 短信类型：{0:普通短信，1:营销短信}
   */
  SmsType: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
   * 短信模板标签
   */
  Remark: string

  /**
   * 发送短信活动时配置的落地链接地址,仅用作短信活动
   */
  Urls?: Array<string>

  /**
   * 发送短信活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号
   */
  CommonParams?: Array<number>

  /**
   * 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动
   */
  UrlParams?: Array<number>
}

/**
 * DescribeMmsInstanceInfo请求参数结构体
 */
export interface DescribeMmsInstanceInfoRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 彩信实例id
   */
  InstanceId: number
}

/**
 * CreateCampaign返回参数结构体
 */
export interface CreateCampaignResponse {
  /**
   * 活动信息
   */
  Data?: SmsCreateCampaignResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发送超级短信返回
 */
export interface PushMmsContentResp {
  /**
   * 返回码：0-成功 其它-失败
   */
  ReturnCode: number

  /**
   * 返回信息
   */
  ReturnMsg: string

  /**
   * 消息回执id
   */
  MessageId: number
}

/**
 * 接口返回给服务商的COS路径等信息
 */
export interface UploadFansInfoCosInfo {
  /**
   * COS bucket
   */
  Bucket: string

  /**
   * COS路径
   */
  Key: string

  /**
   * COS区域
   */
  Region: string
}

/**
 * CreateCampaign请求参数结构体
 */
export interface CreateCampaignRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信活动发送时间
   */
  SendTime: number

  /**
   * 短信活动名称
   */
  Name: string

  /**
   * 发送策略
   */
  Strategies?: Array<PaasStrategy>

  /**
   * 废弃
   */
  TemplateId?: number

  /**
   * 废弃
   */
  CrowdID?: number

  /**
   * 活动类型(0-短信,1-超短,不填默认为超短)
   */
  SmsType?: number
}

/**
 * 短信子账号额度接口出参
 */
export interface SmsAmountDataStruct {
  /**
   * 短信活动配额
   */
  SmsCampaignAmount: number

  /**
   * 短信活动消耗配额
   */
  SmsCampaignConsume: number

  /**
   * 短信发送额度
   */
  SmsSendAmount: number

  /**
   * 短信发送消耗额度
   */
  SmsSendConsume: number

  /**
   * 超短活动额度
   */
  MmsCampaignAmount: number

  /**
   * 超短活动消耗额度
   */
  MmsCampaignConsume: number

  /**
   * 超短短信额度
   */
  MmsSendAmount: number

  /**
   * 超短短信消耗额度
   */
  MmsSendConsume: number
}

/**
 * AddCrowdPackInfo请求参数结构体
 */
export interface AddCrowdPackInfoRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 人群包名称
   */
  Name: string

  /**
   * 人群包文件名称,人群包文件必须为utf8编码，动态参数只能是汉字、数字、英文字母的组合，不能包含其他字符
   */
  FileName: string

  /**
   * 人群包描述
   */
  Desc: string

  /**
   * 已经上传好的人群包cos地址
   */
  CosUrl: string

  /**
   * 人群包手机号数量
   */
  PhoneNum?: number
}

/**
 * 短信api成功返回信息
 */
export interface SmsSuccessResponse {
  /**
   * 成功返回信息
   */
  Message: string
}

/**
 * 短信人群包返回信息
 */
export interface SmsGetCrowdPackListResponse {
  /**
   * 人群包总数
   */
  Total: number

  /**
      * 人群包返回数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<SmsGetCrowdPackList>
}

/**
 * 获取短信模板状态返回
 */
export interface DescribeSmsTemplateListDataStruct {
  /**
   * 模板Id
   */
  TemplateId: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
      * 申请签名状态。其中：
0：表示审核通过。
-1：表示审核未通过或审核失败。
      */
  StatusCode: number

  /**
   * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
   */
  ReviewReply: string

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 提交审核时间，UNIX 时间戳（单位：秒）。
   */
  CreateTime: number
}

/**
 * DeleteMmsInstance返回参数结构体
 */
export interface DeleteMmsInstanceResponse {
  /**
   * 删除信息返回
   */
  Data?: DelMmsInstanceData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySmsTemplate请求参数结构体
 */
export interface ModifySmsTemplateRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信模板id
   */
  TemplateId: number

  /**
   * 短信签名，创建签名时返回
   */
  SignID: number

  /**
   * 模板名称
   */
  TemplateName: string

  /**
   * 短信内容，动态内容使用占位符{1}，{2}等表示
   */
  TemplateContent: string

  /**
   * 短信类型：{0:普通短信，1:营销短信}
   */
  SmsType: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
   * 短信模板标签
   */
  Remark: string

  /**
   * 发送短信活动时配置的落地链接地址,仅用作短信活动
   */
  Urls?: Array<string>

  /**
   * 发送短信活动时用于展示人群包动态参数模板占位符序号,仅用作短信活动
   */
  CommonParams?: Array<number>

  /**
   * 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动
   */
  UrlParams?: Array<number>
}

/**
 * 彩信实例审核状态
 */
export interface MmsInstanceStateInfo {
  /**
   * 运营商
   */
  Operator: string

  /**
   * 审核状态：0未审核，1审核通过，2审核拒绝
   */
  State: number
}

/**
 * 取消活动的返回值Data部分
 */
export interface CancelActivityData {
  /**
   * 成功返回时的文字描述
   */
  Message: string
}

/**
 * SendSms返回参数结构体
 */
export interface SendSmsResponse {
  /**
   * 出参数据
   */
  Data?: Array<SendSmsPaasDataStruct>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信发送人群包策略
 */
export interface PaasStrategy {
  /**
   * 人群包id
   */
  CrowdID: number

  /**
   * 待选素材数组
   */
  Items: Array<PaasStrategyItem>
}

/**
 * CancelCampaign返回参数结构体
 */
export interface CancelCampaignResponse {
  /**
   * 处理结果
   */
  Data?: CancelActivityData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信活动统计人群包数据
 */
export interface SmsCampaignStatisticsCrowdData {
  /**
   * 人群包id
   */
  CrowdId: number

  /**
   * 人群包名称
   */
  CrowdName: string

  /**
   * 人群包目标触达总数
   */
  CrowdCount: number

  /**
   * 模板列表
   */
  TemplateList: Array<SmsCampaignStatisticsTemplateData>
}

/**
 * DescribeSmsSignList请求参数结构体
 */
export interface DescribeSmsSignListRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 签名ID数组
   */
  SignIdSet: Array<number>

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number
}

/**
 * GetCrowdUploadInfo返回参数结构体
 */
export interface GetCrowdUploadInfoResponse {
  /**
   * 返回信息
   */
  Data?: SmsGetCrowdUploadInfoResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信获取人群包列表的返回数据信息
 */
export interface SmsGetCrowdPackList {
  /**
   * 创建时间
   */
  CreatedAt: string

  /**
   * 人群包id
   */
  ID: number

  /**
   * 人群包名称
   */
  Name: string

  /**
   * 人群包状态
   */
  Status: number

  /**
   * 人群包手机号数量
   */
  PhoneNum: number

  /**
   * 人群包标签信息
   */
  Tag: string

  /**
   * 人群包md5
   */
  MD5: string

  /**
   * 人群包文件名称
   */
  FileName: string

  /**
   * 人群包描述
   */
  Desc: string
}

/**
 * GetSmsAmountInfo返回参数结构体
 */
export interface GetSmsAmountInfoResponse {
  /**
   * 短信账号额度接口
   */
  Data?: SmsAmountDataStruct

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取普通短信签名信息返回信息
 */
export interface DescribeSmsSignListDataStruct {
  /**
   * 签名Id
   */
  SignId: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
      * 申请签名状态。其中：
0：表示审核通过。
-1：表示审核未通过或审核失败。
      */
  StatusCode: number

  /**
   * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
   */
  ReviewReply: string

  /**
   * 签名名称。
   */
  SignName: string

  /**
   * 提交审核时间，UNIX 时间戳（单位：秒）。
   */
  CreateTime: number
}

/**
 * GetCrowdPackList请求参数结构体
 */
export interface GetCrowdPackListRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制返回数量
   */
  Limit: number

  /**
   * 人群包名称，用于过滤人群包
   */
  Name?: string

  /**
   * 人群包状态，默认-1，用于过滤人群包
   */
  Status?: number
}

/**
 * AddSmsTemplate返回参数结构体
 */
export interface AddSmsTemplateResponse {
  /**
   * 短信模板创建接口返回
   */
  Data?: AddSmsTemplateDataStruct

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建签名返回结构
 */
export interface PaasCreateSignResp {
  /**
   * 签名id
   */
  SignId: number
}

/**
 * 拉取活动状态返回
 */
export interface PaasSmsCampaignStatusResp {
  /**
   * 0-未发送 1-发送中 2-发送结束 3-发送取消
   */
  Status: number
}

/**
 * DelCrowdPack返回参数结构体
 */
export interface DelCrowdPackResponse {
  /**
   * 接口返回
   */
  Data?: SmsSuccessResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DelCrowdPack请求参数结构体
 */
export interface DelCrowdPackRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 人群包id
   */
  ID: number
}

/**
 * CreateMmsInstance返回参数结构体
 */
export interface CreateMmsInstanceResponse {
  /**
   * 创建样例返回信息
   */
  Data?: CreateMmsInstanceResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmsTemplateList请求参数结构体
 */
export interface DescribeSmsTemplateListRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信模板id数组
   */
  TemplateIdSet: Array<number>

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number
}

/**
 * DeleteMmsInstance请求参数结构体
 */
export interface DeleteMmsInstanceRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 超级短信样例id
   */
  InstanceId: number
}

/**
 * 删除超短样例响应
 */
export interface DelMmsInstanceData {
  /**
   * 样例id
   */
  InstanceId: number
}

/**
 * 短信活动策略元素
 */
export interface PaasStrategyItem {
  /**
   * 短信模板id或超级短信样例id
   */
  Id: number

  /**
   * 素材类型 0-普短 1-超短
   */
  ContentType: number
}

/**
 * GetSmsAmountInfo请求参数结构体
 */
export interface GetSmsAmountInfoRequest {
  /**
   * 商户证书
   */
  License: string
}

/**
 * DelTemplate请求参数结构体
 */
export interface DelTemplateRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信模板ID
   */
  TemplateID: number
}

/**
 * 创建短信活动返回结构
 */
export interface SmsCreateCampaignResponse {
  /**
   * 活动id
   */
  CampaignId: number
}

/**
 * 短信模板编辑接口出参
 */
export interface ModifySmsTemplateDataStruct {
  /**
      * 短信模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TemplateId: number
}

/**
 * PushMmsContent请求参数结构体
 */
export interface PushMmsContentRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 素材样例id
   */
  InstanceId: number

  /**
   * 手机号
   */
  Tel: string

  /**
   * 附带数据字段
   */
  Session?: string

  /**
   * 动态参数key(即申请样例时设置的u_或p_开头的动态参数,要求序号有序)
   */
  DynamicParaKey?: Array<string>

  /**
   * 动态参数值,和DynamicParaKey对应
   */
  DynamicParaValue?: Array<string>
}

/**
 * DescribeMmsInstanceList返回参数结构体
 */
export interface DescribeMmsInstanceListResponse {
  /**
   * 彩信实例信息列表返回
   */
  Data?: MmsInstanceInfoList

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建样例时候content元素
 */
export interface CreateMmsInstanceItem {
  /**
   * 素材类型：1-文本 2-图片 3-视频 4-音频
   */
  ContentType: number

  /**
   * 素材内容：如果素材是文本类型，直接填写文本内容，否则填写素材文件上传到cos后的url地址
   */
  Content: string
}

/**
 * GetCrowdUploadInfo请求参数结构体
 */
export interface GetCrowdUploadInfoRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 上传文件名称
   */
  FileName: string
}

/**
 * CancelCampaign请求参数结构体
 */
export interface CancelCampaignRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 短信活动id
   */
  CampaignId: number
}

/**
 * 短信活动统计响应
 */
export interface SmsCampaignStatisticsData {
  /**
   * 活动Id
   */
  CampaignId: number

  /**
   * 统计数据
   */
  Statistics: Array<SmsCampaignStatisticsCrowdData>
}

/**
 * 彩信实例信息
InstanceId   int
	InstanceName string
	Status       int
	StatusInfo   string
	AppSubId     string
	Title        string
	Sign         string
	Contents     string
	CreatedAt    string
 */
export interface MmsInstanceInfo {
  /**
   * 彩信实例id
   */
  InstanceId: number

  /**
   * 彩信实例名称
   */
  InstanceName: string

  /**
   * 状态是否通知
   */
  Status: number

  /**
      * 实例审核状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusInfo: Array<MmsInstanceStateInfo>

  /**
   * 业务码
   */
  AppSubId: string

  /**
   * 彩信标题
   */
  Title: string

  /**
   * 签名
   */
  Sign: string

  /**
   * 彩信内容
   */
  Contents: string

  /**
   * 创建时间
   */
  CreatedAt: string

  /**
      * 样例配置的链接地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Urls: Array<string>

  /**
      * 机型列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhoneType: Array<number>

  /**
      * 普通参数序号数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  CommonParams: Array<number>

  /**
      * 链接参数序号数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlParams: Array<number>
}

/**
 * DelTemplate返回参数结构体
 */
export interface DelTemplateResponse {
  /**
   * 接口返回
   */
  Data?: SmsSuccessResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取短信人群包上传信息返回
 */
export interface SmsGetCrowdUploadInfoResponse {
  /**
   * 过期时间
   */
  ExpiredTime: number

  /**
   * 会话token
   */
  SessionToken: string

  /**
   * 临时密钥id
   */
  TmpSecretId: string

  /**
   * 临时密钥
   */
  TmpSecretKey: string

  /**
   * cos信息
   */
  CosInfo: UploadFansInfoCosInfo
}

/**
 * CreateMmsInstance请求参数结构体
 */
export interface CreateMmsInstanceRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 样例名称
   */
  InstanceName: string

  /**
   * 标题
   */
  Title: string

  /**
   * 签名
   */
  Sign: string

  /**
   * 素材内容
   */
  Contents: Array<CreateMmsInstanceItem>

  /**
   * 样例中链接动态变量对应的链接，和占位符顺序一致
   */
  Urls?: Array<string>

  /**
   * 机型列表
   */
  PhoneType?: Array<number>

  /**
   * 发送超短活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号
   */
  CommonParams?: Array<number>

  /**
   * 发送超短活动时用于展示短连接模板占位符序号,仅用作超短活动
   */
  UrlParams?: Array<number>
}

/**
 * DescribeSmsSignList返回参数结构体
 */
export interface DescribeSmsSignListResponse {
  /**
   * 返回数据
   */
  Data?: Array<DescribeSmsSignListDataStruct>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmsCampaignStatistics返回参数结构体
 */
export interface DescribeSmsCampaignStatisticsResponse {
  /**
   * 响应数据
   */
  Data?: SmsCampaignStatisticsData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetSmsCampaignStatus返回参数结构体
 */
export interface GetSmsCampaignStatusResponse {
  /**
   * 活动状态
   */
  Data?: PaasSmsCampaignStatusResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmsCampaignStatistics请求参数结构体
 */
export interface DescribeSmsCampaignStatisticsRequest {
  /**
   * 活动id
   */
  CampaignId: number

  /**
   * 商户证书
   */
  License: string
}

/**
 * SendSms请求参数结构体
 */
export interface SendSmsRequest {
  /**
   * 商户证书
   */
  License: string

  /**
   * 手机号码,采用 e.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号,如:+8613800138000
   */
  Phone: Array<string>

  /**
   * 短信模板id(推荐使用模板id发送,使用内容发送时模板id留空)
   */
  TemplateId?: string

  /**
   * 模板参数，若无模板参数，则设置为空。
   */
  Params?: Array<string>

  /**
   * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名。注：国内短信为必填参数。
   */
  Sign?: string

  /**
   * 国际/港澳台短信 senderid，国内短信填空
   */
  SenderId?: string

  /**
   * 短信类型：{0:普通短信，1:营销短信}，使用内容发送时必填
   */
  SmsType?: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。使用内容发送时必填
      */
  International?: number

  /**
   * 发送使用的模板内容,如果有占位符,此处也包括占位符,占位符的实际内容通过Params参数传递,使用模板id发送时此字段为空
   */
  Content?: string
}

/**
 * 短信活动统计模板展示结构
 */
export interface SmsCampaignStatisticsTemplateData {
  /**
   * 模板或样例id
   */
  TemplateId: string

  /**
   * 模板内容
   */
  TemplateContent: string

  /**
   * 触达成功数
   */
  SendCount: number

  /**
   * 短链点击数
   */
  ClickCount: number
}
