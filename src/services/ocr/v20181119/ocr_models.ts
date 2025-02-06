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
 * 门头照识别结果
 */
export interface StoreInfo {
  /**
   * 识别出的字段名称(关键字)，如商店名称
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标
   */
  Rect?: Rect
}

/**
 * 非税收入条目
 */
export interface NonTaxItem {
  /**
   * 项目编码
   */
  ItemID?: string
  /**
   * 项目名称
   */
  Name?: string
  /**
   * 单位
   */
  Unit?: string
  /**
   * 数量
   */
  Quantity?: string
  /**
   * 标准
   */
  Standard?: string
  /**
   * 金额
   */
  Total?: string
}

/**
 * 运单识别结果
 */
export interface TextWaybill {
  /**
   * 收件人姓名
   */
  RecName?: WaybillObj
  /**
   * 收件人手机号
   */
  RecNum?: WaybillObj
  /**
   * 收件人地址
   */
  RecAddr?: WaybillObj
  /**
   * 寄件人姓名
   */
  SenderName?: WaybillObj
  /**
   * 寄件人手机号
   */
  SenderNum?: WaybillObj
  /**
   * 寄件人地址
   */
  SenderAddr?: WaybillObj
  /**
   * 运单号
   */
  WaybillNum?: WaybillObj
}

/**
 * RecognizeOnlineTaxiItineraryOCR返回参数结构体
 */
export interface RecognizeOnlineTaxiItineraryOCRResponse {
  /**
   * 网约车行程单识别结果，具体内容请点击左侧链接。
   */
  OnlineTaxiItineraryInfos?: Array<OnlineTaxiItineraryInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 混贴票据单张发票识别信息
 */
export interface InvoiceItem {
  /**
   * 识别结果。
OK：表示识别成功；FailedOperation.UnsupportedInvoice：表示不支持识别；
FailedOperation.UnKnowError：表示识别失败；
其它错误码见各个票据接口的定义。
   */
  Code?: string
  /**
   * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票）
12：购车发票
13：过路过桥费发票
15：非税发票
16：全电发票
17：医疗发票
   */
  Type?: number
  /**
   * 该发票在原图片中的四点坐标。
   */
  Polygon?: Polygon
  /**
   * 识别出的图片在混贴票据图片中的旋转角度。
   */
  Angle?: number
  /**
   * 识别到的内容。
   */
  SingleInvoiceInfos?: SingleInvoiceItem
  /**
   * 发票处于识别图片或PDF文件中的页教，默认从1开始。
   */
  Page?: number
  /**
   * 发票详细类型，详见票据识别（高级版）接口文档说明中 SubType 返回值说明
   */
  SubType?: string
  /**
   * 发票类型描述，详见票据识别（高级版）接口文档说明中 TypeDescription  返回值说明
   */
  TypeDescription?: string
  /**
   * 切割单图文件，Base64编码后的切图后的图片文件，开启 EnableCutImage 后进行返回
   */
  CutImage?: string
  /**
   * 发票详细类型描述，详见上方 SubType 返回值说明
   */
  SubTypeDescription?: string
  /**
   * 该发票中所有字段坐标信息。包括字段英文名称、字段值所在位置四点坐标、字段所属行号，具体内容请点击左侧链接。
   */
  ItemPolygon?: Array<ItemPolygonInfo>
}

/**
 * HKIDCardOCR请求参数结构体
 */
export interface HKIDCardOCRRequest {
  /**
   * 是否返回人像照片。
   */
  ReturnHeadImage?: boolean
  /**
   * 是否鉴伪。
   * @deprecated
   */
  DetectFake?: boolean
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * BankSlipOCR请求参数结构体
 */
export interface BankSlipOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * BusinessCardOCR返回参数结构体
 */
export interface BusinessCardOCRResponse {
  /**
   * 名片识别结果，具体内容请点击左侧链接。
   */
  BusinessCardInfos?: Array<BusinessCardInfo>
  /**
   * 返回图像预处理后的图片，图像预处理未开启时返回内容为空。
   */
  RetImageBase64?: string
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 算式识别结果
 */
export interface TextArithmetic {
  /**
   * 识别出的文本行内容
   */
  DetectedText?: string
  /**
   * 算式运算结果，true-正确   false-错误或非法参数
   */
  Result?: boolean
  /**
   * 保留字段，暂不支持
   */
  Confidence?: number
  /**
   * 原图文本行坐标，以四个顶点坐标表示（保留字段，暂不支持）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon?: Array<Coord>
  /**
   * 保留字段，暂不支持
   */
  AdvancedInfo?: string
  /**
   * 文本行旋转纠正之后在图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
   */
  ItemCoord?: ItemCoord
  /**
   * 算式题型编号：
‘1’: 加减乘除四则
‘2’: 加减乘除已知结果求运算因子
‘3’: 判断大小
‘4’: 约等于估算
‘5’: 带余数除法
‘6’: 分数四则运算
‘7’: 单位换算
‘8’: 竖式加减法
‘9’: 竖式乘除法
‘10’: 脱式计算
‘11’: 解方程
   */
  ExpressionType?: string
  /**
   * 错题推荐答案，算式运算结果正确返回为""，算式运算结果错误返回推荐答案 (注：暂不支持多个关系运算符（如`1<10<7`）、无关系运算符（如frac(1,2)+frac(2,3)）、单位换算（如1元=100角）错题的推荐答案返回)
   */
  Answer?: string
}

/**
 * 港澳台居住证信息返回
 */
export interface ResidencePermitInfo {
  /**
   * 姓名（人像面）
   */
  Name?: ContentInfo
  /**
   * 性别（人像面）
   */
  Sex?: ContentInfo
  /**
   * 民族（人像面）
   */
  Nation?: ContentInfo
  /**
   * 出生日期（人像面）
   */
  Birth?: ContentInfo
  /**
   * 地址（人像面）
   */
  Address?: ContentInfo
  /**
   * 公民身份号码（人像面）
   */
  IdNum?: ContentInfo
  /**
   * 发证机关（国徽面）
   */
  Authority?: ContentInfo
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: ContentInfo
  /**
   * WarnInfos，告警信息
   */
  WarnInfos?: CardWarnInfo
  /**
   * IdCard，裁剪后身份证照片的base64编码，请求 EnableCropImage 时返回；
   */
  CardImage?: ContentInfo
  /**
   * Portrait，身份证头像照片的base64编码，请求 EnablePortrait 时返回；
   */
  PortraitImage?: ContentInfo
  /**
   * 通行证号码，港澳台居住证国徽面 返回该字段
   */
  PassNum?: ContentInfo
  /**
   * 签发次数，港澳台居住证国徽面 返回该字段
   */
  IssueNum?: ContentInfo
}

/**
 * BankCardOCR请求参数结构体
 */
export interface BankCardOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 是否返回预处理（精确剪裁对齐）后的银行卡图片数据，默认false。
   */
  RetBorderCutImage?: boolean
  /**
   * 是否返回卡号的切图图片数据，默认false。
   */
  RetCardNoImage?: boolean
  /**
   * 复印件检测开关，如果输入的图片是银行卡复印件图片则返回告警，默认false。
   */
  EnableCopyCheck?: boolean
  /**
   * 翻拍检测开关，如果输入的图片是银行卡翻拍图片则返回告警，默认false。
   */
  EnableReshootCheck?: boolean
  /**
   * 边框遮挡检测开关，如果输入的图片是银行卡边框被遮挡则返回告警，默认false。
   */
  EnableBorderCheck?: boolean
  /**
   * 是否返回图片质量分数（图片质量分数是评价一个图片的模糊程度的标准），默认false。
   */
  EnableQualityValue?: boolean
}

/**
 * SmartStructuralOCR返回参数结构体
 */
export interface SmartStructuralOCRResponse {
  /**
   * 图片旋转角度(角度制)，文本的水平方向
为 0；顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 识别信息
   */
  StructuralItems?: Array<StructuralItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CarInvoiceOCR请求参数结构体
 */
export interface CarInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 混贴票据单张发票识别信息
 */
export interface MixedInvoiceItem {
  /**
   * 识别结果。
OK：表示识别成功；FailedOperation.UnsupportedInvioce：表示不支持识别；
FailedOperation.UnKnowError：表示识别失败；
其它错误码见各个票据接口的定义。
   */
  Code?: string
  /**
   * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票）
12：购车发票
13：过路过桥费发票
15：非税发票
16：全电发票
   */
  Type?: number
  /**
   * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
   */
  Rect?: Rect
  /**
   * 识别出的图片在混贴票据图片中的旋转角度。
   */
  Angle?: number
  /**
   * 识别到的内容。
   */
  SingleInvoiceInfos?: Array<SingleInvoiceInfo>
  /**
   * 发票处于识别图片或PDF文件中的页教，默认从1开始。
   */
  Page?: number
}

/**
 * RecognizeTravelCardOCR请求参数结构体
 */
export interface RecognizeTravelCardOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * TrainTicketOCR请求参数结构体
 */
export interface TrainTicketOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * EstateCertOCR返回参数结构体
 */
export interface EstateCertOCRResponse {
  /**
   * 权利人
   */
  Obligee?: string
  /**
   * 共有情况
   */
  Ownership?: string
  /**
   * 坐落
   */
  Location?: string
  /**
   * 不动产单元号
   */
  Unit?: string
  /**
   * 权利类型
   */
  Type?: string
  /**
   * 权利性质
   */
  Property?: string
  /**
   * 用途
   */
  Usage?: string
  /**
   * 面积
   */
  Area?: string
  /**
   * 使用期限
   */
  Term?: string
  /**
   * 权利其他状况，多行会用换行符\n连接。
   */
  Other?: string
  /**
   * 图片旋转角度
   */
  Angle?: number
  /**
   * 不动产权号
   */
  Number?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FlightInvoiceOCR请求参数结构体
 */
export interface FlightInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 还原文本信息
 */
export interface WordItem {
  /**
   * 文本块内容
   */
  DetectedText?: string
  /**
   * 四点坐标
   */
  Coord?: Polygon
}

/**
 * MLIDPassportOCR请求参数结构体
 */
export interface MLIDPassportOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
   */
  ImageBase64?: string
  /**
   * 是否返回图片，默认false
   */
  RetImage?: boolean
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
}

/**
 * RecognizeGeneralTextImageWarn返回参数结构体
 */
export interface RecognizeGeneralTextImageWarnResponse {
  /**
   * 复印告警信息
   */
  Copy?: GeneralWarnInfo
  /**
   * 翻拍告警信息
   */
  Reprint?: GeneralWarnInfo
  /**
   * 模糊告警信息
   */
  Blur?: GeneralWarnInfo
  /**
   * 反光告警信息
   */
  Reflection?: GeneralWarnInfo
  /**
   * 边框不完整告警信息
   */
  BorderIncomplete?: GeneralWarnInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能结构化元素组
 */
export interface ItemInfo {
  /**
   * key信息组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: Key
  /**
   * Value信息组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: Value
}

/**
 * SmartStructuralOCRV2请求参数结构体
 */
export interface SmartStructuralOCRV2Request {
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 自定义结构化功能需返回的字段名称，例：
若客户只想返回姓名、性别两个字段的识别结果，则输入
ItemNames=["姓名","性别"]
   */
  ItemNames?: Array<string>
  /**
   * 是否开启全文字段识别
   */
  ReturnFullText?: boolean
  /**
   * 配置id支持：
General -- 通用场景
OnlineTaxiItinerary -- 网约车行程单
RideHailingDriverLicense -- 网约车驾驶证
RideHailingTransportLicense -- 网约车运输证
WayBill -- 快递运单
AccountOpeningPermit -- 银行开户许可证
InvoiceEng -- 海外发票模版
Coin --钱币识别模板
OnboardingDocuments -- 入职材料识别
PropertyOwnershipCertificate -- 房产证识别
RealEstateCertificate --不动产权证识别
HouseEncumbranceCertificate -- 他权证识别
CarInsurance -- 车险保单
MultiRealEstateCertificate -- 房产证、不动产证、产权证等材料合一模板
   */
  ConfigId?: string
  /**
   * 是否打开印章识别
   */
  EnableSealRecognize?: boolean
}

/**
 * TextDetect返回参数结构体
 */
export interface TextDetectResponse {
  /**
   * 图片中是否包含文字。
   */
  HasText?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 铁路电子客票信息
 */
export interface RailwayTicketInfo {
  /**
   * 电子发票类型
   */
  TypeOfVoucher?: string
  /**
   * 电子客票号
   */
  ElectronicTicketNum?: string
  /**
   * 开票日期
   */
  DateOfIssue?: string
  /**
   * 售票或退票类型
   */
  TypeOfBusiness?: string
  /**
   * 始发站
   */
  DepartureStation?: string
  /**
   * 始发站英文
   */
  PhonicsOfDepartureStation?: string
  /**
   * 到达站
   */
  DestinationStation?: string
  /**
   * 到达站英文
   */
  PhonicsOfDestinationStation?: string
  /**
   * 火车号
   */
  TrainNumber?: string
  /**
   * 火车出发日期
   */
  TravelDate?: string
  /**
   * 始发时间
   */
  DepartureTime?: string
  /**
   * 空调特点
   */
  AirConditioningCharacteristics?: string
  /**
   * 座位类型
   */
  SeatLevel?: string
  /**
   * 火车第几车
   */
  Carriage?: string
  /**
   * 座位号
   */
  Seat?: string
  /**
   * 票价
   */
  Fare?: string
  /**
   * 发票号码
   */
  ElectronicInvoiceRailwayETicketNumber?: string
  /**
   * 身份证号
   */
  IdNumber?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 金额
   */
  TotalAmountExcludingTax?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 税额
   */
  TaxAmount?: string
  /**
   * 购买方名称
   */
  NameOfPurchaser?: string
  /**
   * 统一社会信用代码
   */
  UnifiedSocialCreditCodeOfPurchaser?: string
  /**
   * 原发票号码
   */
  NumberOfOriginalInvoice?: string
}

/**
 * TollInvoiceOCR返回参数结构体
 */
export interface TollInvoiceOCRResponse {
  /**
   * 过路过桥费发票识别结果，具体内容请点击左侧链接。
   */
  TollInvoiceInfos?: Array<TollInvoiceInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOCRToken返回参数结构体
 */
export interface GetOCRTokenResponse {
  /**
   * token值
   */
  OCRToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 身份证ocr信息结果
 */
export interface IDCardInfoResult {
  /**
   * 警告代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarnCodes?: Array<number | bigint>
  /**
   * 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * 签发机关
注意：此字段可能返回 null，表示取不到有效值。
   */
  Authority?: string
  /**
   * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Birth?: string
  /**
   * 身份证号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdNum?: string
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nation?: string
  /**
   * 性别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sex?: string
  /**
   * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidDate?: string
  /**
   * 请求的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestId?: string
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCode?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 原图地址
   */
  ImageUrl?: string
}

/**
 * FinanBillSliceOCR返回参数结构体
 */
export interface FinanBillSliceOCRResponse {
  /**
   * 金融票据切片识别结果，具体内容请点击左侧链接。
   */
  FinanBillSliceInfos?: Array<FinanBillSliceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DriverLicenseOCR返回参数结构体
 */
export interface DriverLicenseOCRResponse {
  /**
   * 驾驶证正页姓名
   */
  Name?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 国籍
   */
  Nationality?: string
  /**
   * 住址
   */
  Address?: string
  /**
   * 出生日期（YYYY-MM-DD）
   */
  DateOfBirth?: string
  /**
   * 初次领证日期（YYYY-MM-DD）
   */
  DateOfFirstIssue?: string
  /**
   * 准驾车型
   */
  Class?: string
  /**
   * 有效期开始时间（YYYY-MM-DD）
   */
  StartDate?: string
  /**
   * 有效期截止时间（新版驾驶证返回 YYYY-MM-DD，
老版驾驶证返回有效期限 X年）
   */
  EndDate?: string
  /**
   * 驾驶证正页证号
   */
  CardCode?: string
  /**
   * 档案编号
   */
  ArchivesCode?: string
  /**
   * 记录
   */
  Record?: string
  /**
   * Code 告警码列表和释义：
-9102  复印件告警
-9103  翻拍件告警
-9104  反光告警
-9105  模糊告警
-9106  边框不完整告警
注：告警码可以同时存在多个
   */
  RecognizeWarnCode?: Array<number | bigint>
  /**
   * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_REFLECTION 反光告警
WARN_DRIVER_LICENSE_BLUR 模糊告警
WARN_DRIVER_LICENSE_BORDER_INCOMPLETE 边框不完整告警
注：告警信息可以同时存在多个
   */
  RecognizeWarnMsg?: Array<string>
  /**
   * 发证单位
   */
  IssuingAuthority?: string
  /**
   * 状态（仅电子驾驶证支持返回该字段）
   */
  State?: string
  /**
   * 累积记分（仅电子驾驶证支持返回该字段）
   */
  CumulativeScore?: string
  /**
   * 当前时间（仅电子驾驶证支持返回该字段）
   */
  CurrentTime?: string
  /**
   * 生成时间（仅电子驾驶证支持返回该字段）
   */
  GenerateTime?: string
  /**
   * 驾驶证副页姓名
   */
  BackPageName?: string
  /**
   * 驾驶证副页证号
   */
  BackPageCardCode?: string
  /**
   * 驾驶证类型
电子驾驶证：Electronic
普通驾驶证：Normal
   */
  DriverLicenseType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WaybillOCR返回参数结构体
 */
export interface WaybillOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TextDetections?: TextWaybill
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAIFormTask请求参数结构体
 */
export interface CreateAIFormTaskRequest {
  /**
   * 多个文件的URL列表
   */
  FileList: Array<SmartFormFileUrl>
  /**
   * 备注信息1
   */
  FirstNotes?: string
  /**
   * 备注信息2
   */
  SecondNotes?: string
  /**
   * 文件类型
   */
  FileType?: number
}

/**
 * 识别出来的单词信息包括单词（包括单词Character和单词置信度confidence）
 */
export interface Words {
  /**
   * 置信度 0 ~100
   */
  Confidence: number
  /**
   * 候选字Character
   */
  Character: string
}

/**
 * 英文识别结果
 */
export interface TextDetectionEn {
  /**
   * 识别出的文本行内容。
   */
  DetectedText: string
  /**
   * 置信度 0 ~100。
   */
  Confidence: number
  /**
   * 文本行在原图中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
   */
  AdvancedInfo: string
  /**
   * 英文单词在原图中的四点坐标。
   */
  WordCoordPoint: Array<WordCoordPoint>
  /**
   * 候选字符集(包含候选字Character以及置信度Confidence)。
   */
  CandWord: Array<CandWord>
  /**
   * 识别出来的单词信息（包括单词Character和单词置信度confidence）
   */
  Words: Array<Words>
}

/**
 * 电子发票（机票行程单）
 */
export interface ElectronicFlightTicketFull {
  /**
   * 旅客姓名
   */
  UserName?: string
  /**
   * 有效身份证件号码
   */
  UserID?: string
  /**
   * 签注
   */
  Endorsement?: string
  /**
   * GP单号
   */
  GPOrder?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 票价
   */
  Fare?: string
  /**
   * 燃油附加费
   */
  FuelSurcharge?: string
  /**
   * 增值税税率
   */
  TaxRate?: string
  /**
   * 增值税税额
   */
  Tax?: string
  /**
   * 民航发展基金
   */
  DevelopmentFund?: string
  /**
   * 其他税费
   */
  OtherTax?: string
  /**
   * 合计
   */
  Total?: string
  /**
   * 电子客票号码
   */
  ElectronicTicketNum?: string
  /**
   * 验证码
   */
  VerificationCode?: string
  /**
   * 提示信息
   */
  PromptInformation?: string
  /**
   * 保险费
   */
  Insurance?: string
  /**
   * 填开单位
   */
  Issuer?: string
  /**
   * 填开时间
   */
  Date?: string
  /**
   * 国内国际标识
   */
  DomesticInternationalTag?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 统一社会信用代码
   */
  BuyerTaxID?: string
  /**
   * 机票详细信息元组
   */
  FlightItems?: Array<FlightItemInfo>
  /**
   * 机票开具状态
   */
  InvoiceStatus?: string
}

/**
 * ClassifyStoreName请求参数结构体
 */
export interface ClassifyStoreNameRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * InvoiceGeneralOCR请求参数结构体
 */
export interface InvoiceGeneralOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 矩形坐标
 */
export interface Rect {
  /**
   * 左上角x
   */
  X?: number
  /**
   * 左上角y
   */
  Y?: number
  /**
   * 宽度
   */
  Width?: number
  /**
   * 高度
   */
  Height?: number
}

/**
 * 全部车牌信息
 */
export interface LicensePlateInfo {
  /**
   * 识别出的车牌号码。
   */
  Number?: string
  /**
   * 置信度，0 - 100 之间。
   */
  Confidence?: number
  /**
   * 文本行在原图片中的像素坐标框。
   */
  Rect?: Rect
  /**
   * 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”、“喷漆”、“其它”。
   */
  Color?: string
}

/**
 * QuestionSplitOCR请求参数结构体
 */
export interface QuestionSplitOCRRequest {
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否开启切边增强和弯曲矫正,默认为false不开启
   */
  EnableImageCrop?: boolean
}

/**
 * 增值税普通发票（卷票）条目
 */
export interface VatRollItem {
  /**
   * 项目名称
   */
  Name?: string
  /**
   * 数量
   */
  Quantity?: string
  /**
   * 单价
   */
  Price?: string
  /**
   * 金额
   */
  Total?: string
}

/**
 * 数学公式识别结果
 */
export interface TextFormula {
  /**
   * 识别出的文本行内容
   */
  DetectedText: string
}

/**
 * HmtResidentPermitOCR返回参数结构体
 */
export interface HmtResidentPermitOCRResponse {
  /**
   * 证件姓名
   */
  Name?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 出生日期
   */
  Birth?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 身份证号
   */
  IdCardNo?: string
  /**
   * 0-正面
1-反面
   */
  CardType?: number
  /**
   * 证件有效期限
   */
  ValidDate?: string
  /**
   * 签发机关
   */
  Authority?: string
  /**
   * 签发次数
   */
  VisaNum?: string
  /**
   * 通行证号码
   */
  PassNo?: string
  /**
   * 头像和坐标信息
   */
  PortraitImageInfo?: PortraitImageInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 其他票Table
 */
export interface OtherInvoiceList {
  /**
   * 列表
   */
  OtherInvoiceItemList?: Array<OtherInvoiceItem>
}

/**
 * 机动车登记证书识别结果
 */
export interface VehicleRegCertInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
【注册登记页】
车辆型号、车辆识别代号/车架号、发动机号、制造厂名称、轴距、轮胎数、总质量、外廓尺寸、轴数、车辆出厂日期、发证日期、使用性质、车辆获得方式、车辆类型、国产/进口、燃料种类、车身颜色、发动机型号、车辆品牌、编号、转向形式、
机动车所有人1、身份证明名称1、号码1、登记机关1、登记日期1
机动车所有人2、身份证明名称2、号码2、登记机关2、登记日期2
机动车所有人3、身份证明名称3、号码3、登记机关3、登记日期3
机动车所有人4、身份证明名称4、号码4、登记机关4、登记日期4
机动车所有人5、身份证明名称5、号码5、登记机关5、登记日期5
机动车所有人6、身份证明名称6、号码6、登记机关6、登记日期6
机动车所有人7、身份证明名称7、号码7、登记机关7、登记日期7
【抵押登记页】
机动车登记证书编号、身份证明名称/号码、抵押权人姓名/名称、抵押登记日期。
   */
  Name: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
   */
  Value: string
}

/**
 * 通用告警详情
 */
export interface GeneralWarnInfo {
  /**
   * 是否存在该告警
   */
  IsWarn?: boolean
  /**
   * 告警位置四点坐标
   */
  Polygon?: Array<Polygon>
  /**
   * 特殊判定，支持包括

Finger：由手指导致的不完整，仅在不完整告警中返回
   */
  SpecificMatter?: string
}

/**
 * 机票行程卡条目
 */
export interface FlightItem {
  /**
   * 出发航站楼
   */
  TerminalGetOn?: string
  /**
   * 到达航站楼
   */
  TerminalGetOff?: string
  /**
   * 承运人
   */
  Carrier?: string
  /**
   * 航班号
   */
  FlightNumber?: string
  /**
   * 座位等级
   */
  Seat?: string
  /**
   * 乘机日期
   */
  DateGetOn?: string
  /**
   * 乘机时间
   */
  TimeGetOn?: string
  /**
   * 出发站
   */
  StationGetOn?: string
  /**
   * 到达站
   */
  StationGetOff?: string
  /**
   * 免费行李
   */
  Allow?: string
  /**
   * 客票级别/客票类别
   */
  FareBasis?: string
}

/**
 * value信息组
 */
export interface Value {
  /**
   * 自动识别的字段内容
   */
  AutoContent?: string
  /**
   * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Coord?: Polygon
}

/**
 * EnterpriseLicenseOCR返回参数结构体
 */
export interface EnterpriseLicenseOCRResponse {
  /**
   * 企业证照识别结果，具体内容请点击左侧链接。
   */
  EnterpriseLicenseInfos?: Array<EnterpriseLicenseInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuestionOCR返回参数结构体
 */
export interface QuestionOCRResponse {
  /**
   * 检测到的文本信息
   */
  QuestionInfo?: Array<QuestionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 印章信息
 */
export interface SealInfo {
  /**
   * 印章主体内容
   */
  SealBody: string
  /**
   * 印章坐标
   */
  Location: Rect
  /**
   * 印章其它文本内容
   */
  OtherTexts: Array<string>
  /**
   * 印章类型，表示为:
圆形印章：0
椭圆形印章：1
方形印章：2
菱形印章：3
三角形印章：4
   */
  SealShape: string
}

/**
 * 通用机打发票信息
 */
export interface InvoiceGeneralInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段识别（注：下划线表示一个字段）：
发票代码、发票号码、日期、合计金额(小写)、合计金额(大写)、购买方识别号、销售方识别号、校验码、购买方名称、销售方名称、时间、种类、发票消费类型、省、市、是否有公司印章、发票名称、<span style="text-decoration:underline">购买方地址、电话</span>、<span style="text-decoration:underline">销售方地址、电话</span>、购买方开户行及账号、销售方开户行及账号、经办人取票用户、经办人支付信息、经办人商户号、经办人订单号、<span style="text-decoration:underline">货物或应税劳务、服务名称</span>、数量、单价、税率、税额、金额、单位、规格型号、合计税额、合计金额、备注、收款人、复核、开票人、密码区、行业分类
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * 增值税发票识别结果
 */
export interface TextVatInvoice {
  /**
   * 识别出的字段名称（关键字）。支持以下字段的识别：
发票代码、 发票号码、 打印发票代码、 打印发票号码、 开票日期、 购买方识别号、 小写金额、 价税合计(大写)、 销售方识别号、 校验码、 购买方名称、 销售方名称、 税额、 复核、 联次名称、 备注、 联次、 密码区、 开票人、 收款人、 （货物或应税劳务、服务名称）、省、 市、 服务类型、 通行费标志、 是否代开、 是否收购、 合计金额、 是否有公司印章、 发票消费类型、 车船税、 机器编号、 成品油标志、 税率、 合计税额、 （购买方地址、电话）、 （销售方地址、电话）、 单价、 金额、 销售方开户行及账号、 购买方开户行及账号、 规格型号、 发票名称、 单位、 数量、 校验码备选、 校验码后六位备选、发票号码备选、车牌号、类型、通行日期起、通行日期止、发票类型。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 字段在原图中的中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon?: Polygon
}

/**
 * InstitutionOCR返回参数结构体
 */
export interface InstitutionOCRResponse {
  /**
   * 注册号
   */
  RegId?: string
  /**
   * 有效期
   */
  ValidDate?: string
  /**
   * 住所
   */
  Location?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 法定代表人
   */
  LegalPerson?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机动车销售统一发票信息
 */
export interface VehicleInvoiceInfo {
  /**
   * 车辆类型
   */
  CarType?: string
  /**
   * 厂牌型号
   */
  PlateModel?: string
  /**
   * 产地
   */
  ProduceAddress?: string
  /**
   * 合格证号
   */
  CertificateNo?: string
  /**
   * 进口证明书号
   */
  ImportNo?: string
  /**
   * LSVCA2NP9HN0xxxxx
   */
  VinNo?: string
  /**
   * 完税证书号
   */
  PayTaxesNo?: string
  /**
   * 吨位
   */
  Tonnage?: string
  /**
   * 限乘人数
   */
  LimitCount?: string
  /**
   * 发动机号码
   */
  EngineNo?: string
  /**
   * 商检单号
   */
  BizCheckFormNo?: string
  /**
   * 主管税务机关代码
   */
  TaxtationOrgCode?: string
  /**
   * 主管税务机关名称
   */
  TaxtationOrgName?: string
  /**
   * 税率
   */
  MotorTaxRate?: string
  /**
   * 银行账号
   */
  MotorBankName?: string
  /**
   * 开户行
   */
  MotorBankAccount?: string
  /**
   * 销售地址
   */
  SellerAddress?: string
  /**
   * 销售电话
   */
  SellerTel?: string
  /**
   * 购方身份证
   */
  BuyerNo?: string
}

/**
 * DriverLicenseOCR请求参数结构体
 */
export interface DriverLicenseOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * FRONT 为驾驶证主页正面（有红色印章的一面），
BACK 为驾驶证副页正面（有档案编号的一面）。
DOUBLE 支持自动识别驾驶证正副页单面，和正副双面同框识别
默认值为：FRONT。
   */
  CardSide?: string
}

/**
 * OtherInvoiceItem
 */
export interface OtherInvoiceItem {
  /**
   * 票面key值
   */
  Name?: string
  /**
   * 票面value值
   */
  Value?: string
}

/**
 * SmartStructuralPro请求参数结构体
 */
export interface SmartStructuralProRequest {
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 自定义结构化功能需返回的字段名称，例：若客户只想返回姓名、性别两个字段的识别结果，则输入ItemNames=["姓名","性别"]
   */
  ItemNames?: Array<string>
  /**
   * 是否开启全文字段识别
   */
  ReturnFullText?: boolean
  /**
   * 配置id支持：General -- 通用场景 InvoiceEng -- 海运提单、国际invoice模版 WayBillEng --海运订单模板
   */
  ConfigId?: string
  /**
   * 是否开启全文字段坐标值的识别
   */
  EnableCoord?: boolean
}

/**
 * RecognizeTableOCR返回参数结构体
 */
export interface RecognizeTableOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TableDetections?: Array<TableDetectInfo>
  /**
   * Base64 编码后的 Excel 数据。
   */
  Data?: string
  /**
   * 图片为PDF时，返回PDF的总页数，默认为0
   */
  PdfPageSize?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数学试题识别结果
 */
export interface TextEduPaper {
  /**
   * 识别出的字段名称（关键字）
   */
  Item: string
  /**
   * 识别出的字段名称对应的值，也就是字段Item对应的字符串结果
   */
  DetectedText: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
   */
  Itemcoord: ItemCoord
}

/**
 * 增值税发票项目信息
 */
export interface VatInvoiceItemInfo {
  /**
   * 项目名称
   */
  Name?: string
  /**
   * 规格型号
   */
  Specification?: string
  /**
   * 单位
   */
  Unit?: string
  /**
   * 数量
   */
  Quantity?: string
  /**
   * 单价
   */
  Price?: string
  /**
   * 金额
   */
  Total?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 税额
   */
  Tax?: string
  /**
   * 通行日期起
   */
  DateStart?: string
  /**
   * 通行日期止
   */
  DateEnd?: string
  /**
   * 车牌号
   */
  LicensePlate?: string
  /**
   * 车辆类型
   */
  VehicleType?: string
  /**
   * 序号
   */
  SerialNumber?: string
}

/**
 * QrcodeOCR返回参数结构体
 */
export interface QrcodeOCRResponse {
  /**
   * 二维码/条形码识别结果信息，具体内容请点击左侧链接。
   */
  CodeResults?: Array<QrcodeResultsInfo>
  /**
   * 图片大小，具体内容请点击左侧链接。
   */
  ImgSize?: QrcodeImgSize
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运单识别对象
 */
export interface WaybillObj {
  /**
   * 识别出的文本行内容
   */
  Text: string
}

/**
 * 英文OCR识别出的单词在原图中的四点坐标数组
 */
export interface WordCoordPoint {
  /**
   * 英文OCR识别出的每个单词在原图中的四点坐标。
   */
  WordCoordinate: Array<Coord>
}

/**
 * 票据检测结果
 */
export interface InvoiceDetectInfo {
  /**
   * 识别出的图片在混贴票据图片中的旋转角度。
   */
  Angle?: number
  /**
   * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
4：客运限额发票
5：机票行程单
6：酒店账单
7：完税证明
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
14：购物小票
   */
  Type?: number
  /**
   * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
   */
  Rect?: Rect
  /**
   * 入参 ReturnImage 为 True 时返回 Base64 编码后的图片。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Image?: string
}

/**
 * MainlandPermitOCR请求参数结构体
 */
export interface MainlandPermitOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否返回头像。默认不返回。
   */
  RetProfile?: boolean
  /**
   * 图片正反面
FRONT：正面、BACK：反面，默认为FRONT
   */
  CardSide?: string
}

/**
 * 电子发票详细条目信息
 */
export interface VatElectronicItemInfo {
  /**
   * 项目名称
   */
  Name?: string
  /**
   * 数量
   */
  Quantity?: string
  /**
   * 规格型号
   */
  Specification?: string
  /**
   * 单价
   */
  Price?: string
  /**
   * 金额
   */
  Total?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 税额
   */
  Tax?: string
  /**
   * 单位
   */
  Unit?: string
  /**
   * 运输工具类型
   */
  VehicleType?: string
  /**
   * 运输工具牌号
   */
  VehicleBrand?: string
  /**
   * 起始地
   */
  DeparturePlace?: string
  /**
   * 到达地
   */
  ArrivalPlace?: string
  /**
   * 运输货物名称，仅货物运输服务发票返回
   */
  TransportItemsName?: string
  /**
   * 建筑服务发生地，仅建筑发票返回
   */
  PlaceOfBuildingService?: string
  /**
   * 建筑项目名称，仅建筑发票返回
   */
  BuildingName?: string
  /**
   * 产权证书/不动产权证号，仅不动产经营租赁服务发票返回
   */
  EstateNumber?: string
  /**
   * 面积单位，仅不动产经营租赁服务发票返回
   */
  AreaUnit?: string
}

/**
 * SmartStructuralOCRV2返回参数结构体
 */
export interface SmartStructuralOCRV2Response {
  /**
   * 图片旋转角度(角度制)，文本的水平方向
为 0；顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 配置结构化文本信息
   */
  StructuralList?: Array<GroupInfo>
  /**
   * 还原文本信息
   */
  WordList?: Array<WordItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnterpriseLicenseOCR请求参数结构体
 */
export interface EnterpriseLicenseOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * QuestionSplitOCR返回参数结构体
 */
export interface QuestionSplitOCRResponse {
  /**
   * 检测到的文本信息
   */
  QuestionInfo?: Array<QuestionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeStoreName请求参数结构体
 */
export interface RecognizeStoreNameRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 智能结构化识别
 */
export interface StructuralItem {
  /**
   * 识别出的字段名称(关键字)。
   */
  Name: string
  /**
   * 识别出的字段名称对应的值。
   */
  Value: string
  /**
   * 置信度 0 ~100。
   */
  Confidence: number
  /**
   * 文本行在旋转纠正之后的图像中的像素
坐标。
   */
  ItemCoord: ItemCoord
  /**
   * 字段所在行号，下标从0开始，非行字段或未能识别行号的该值返回-1。
   */
  Row: number
}

/**
 * 网约车行程单识别结果
 */
export interface OnlineTaxiItineraryInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
发票代码、 机打代码、 发票号码、 发动机号码、 合格证号、 机打号码、 价税合计(小写)、 销货单位名称、 身份证号码/组织机构代码、 购买方名称、 销售方纳税人识别号、 购买方纳税人识别号、主管税务机关、 主管税务机关代码、 开票日期、 不含税价(小写)、 吨位、增值税税率或征收率、 车辆识别代号/车架号码、 增值税税额、 厂牌型号、 省、 市、 发票消费类型、 销售方电话、 销售方账号、 产地、 进口证明书号、 车辆类型、 机器编号、备注、开票人、限乘人数、商检单号、销售方地址、销售方开户银行、价税合计、发票类型。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
   */
  Value?: string
  /**
   * 字段所在行，下标从0开始，非行字段或未能识别行号的返回-1
   */
  Row?: number
}

/**
 * 机票详细信息元组
 */
export interface FlightItemInfo {
  /**
   * 出发站
   */
  TerminalGetOn?: string
  /**
   * 到达站
   */
  TerminalGetOff?: string
  /**
   * 承运人
   */
  Carrier?: string
  /**
   * 航班号
   */
  FlightNumber?: string
  /**
   * 座位等级
   */
  Seat?: string
  /**
   * 乘机日期
   */
  DateGetOn?: string
  /**
   * 乘机时间
   */
  TimeGetOn?: string
  /**
   * 客票级别/客票类别
   */
  FareBasis?: string
  /**
   * 免费行李额
   */
  Allow?: string
}

/**
 * 文字识别结果
 */
export interface TextDetection {
  /**
   * 识别出的文本行内容
   */
  DetectedText: string
  /**
   * 置信度 0 ~100
   */
  Confidence: number
  /**
   * 文本行坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
   */
  AdvancedInfo: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
   */
  ItemPolygon: ItemCoord
  /**
   * 识别出来的单字信息包括单字（包括单字Character和单字置信度confidence）， 支持识别的接口：GeneralBasicOCR、GeneralAccurateOCR
   */
  Words: Array<DetectedWords>
  /**
   * 单字在原图中的四点坐标， 支持识别的接口：GeneralBasicOCR、GeneralAccurateOCR
   */
  WordCoordPoint: Array<DetectedWordCoordPoint>
}

/**
 * PropOwnerCertOCR返回参数结构体
 */
export interface PropOwnerCertOCRResponse {
  /**
   * 房地产权利人
   */
  Owner?: string
  /**
   * 共有情况
   */
  Possession?: string
  /**
   * 登记时间
   */
  RegisterTime?: string
  /**
   * 规划用途
   */
  Purpose?: string
  /**
   * 房屋性质
   */
  Nature?: string
  /**
   * 房地坐落
   */
  Location?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 金融票据整单识别单个字段的内容
 */
export interface FinanBillInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
【进账单】
日期、出票全称、出票账号、出票开户行、收款人全称、收款人账号、收款开户行、大写金额、小写金额、票据种类、票据张数、票据号码；
【支票】
开户银行、支票种类、凭证号码2、日期、大写金额、小写金额、付款行编号、密码、凭证号码1；
【银行承兑汇票】或【商业承兑汇票】
出票日期、行号1、行号2、出票人全称、出票人账号、付款行全称、收款人全称、收款人账号、收款人开户行、出票金额大写、出票金额小写、汇票到期日、付款行行号、付款行地址。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
}

/**
 * TrainTicketOCR返回参数结构体
 */
export interface TrainTicketOCRResponse {
  /**
   * 编号
   */
  TicketNum?: string
  /**
   * 出发站
   */
  StartStation?: string
  /**
   * 到达站
   */
  DestinationStation?: string
  /**
   * 出发时间
   */
  Date?: string
  /**
   * 车次
   */
  TrainNum?: string
  /**
   * 座位号
   */
  Seat?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 票价
   */
  Price?: string
  /**
   * 席别
   */
  SeatCategory?: string
  /**
   * 身份证号
   */
  ID?: string
  /**
   * 发票消费类型：交通
   */
  InvoiceType?: string
  /**
   * 序列号
   */
  SerialNumber?: string
  /**
   * 加收票价
   */
  AdditionalCost?: string
  /**
   * 手续费
   */
  HandlingFee?: string
  /**
   * 大写金额（票面有大写金额该字段才有值）
   */
  LegalAmount?: string
  /**
   * 售票站
   */
  TicketStation?: string
  /**
   * 原票价（一般有手续费的才有原始票价字段）
   */
  OriginalPrice?: string
  /**
   * 发票类型：火车票、火车票补票、火车票退票凭证
   */
  InvoiceStyle?: string
  /**
   * 收据号码
   */
  ReceiptNumber?: string
  /**
   * 仅供报销使用：1为是，0为否
   */
  IsReceipt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公式识别结果
 */
export interface TextFormulaInfo {
  /**
   * 识别出的文本行内容
   */
  DetectedText?: string
  /**
   * 识别出的文本行内容坐标
   */
  Coord?: Polygon
}

/**
 * 过路过桥费字段信息
 */
export interface TollInvoiceInfo {
  /**
   * 识别出的字段名称（关键字）。支持以下字段的识别：
发票代码、发票号码、日期、金额、入口、出口、时间、发票消费类型、高速标志。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * 银行回单识别出的字段
 */
export interface BankSlipInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
付款开户行、收款开户行、付款账号、收款账号、回单类型、回单编号、币种、流水号、凭证号码、交易机构、交易金额、手续费、日期等字段信息。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * RecognizeFormulaOCR返回参数结构体
 */
export interface RecognizeFormulaOCRResponse {
  /**
   * 图片旋转角度(角度制)，文本的水平方向为 0；顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 检测到的文本信息
   */
  FormulaInfoList?: Array<TextFormulaInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArithmeticOCR返回参数结构体
 */
export interface ArithmeticOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TextDetections?: Array<TextArithmetic>
  /**
   * 图片横屏的角度(90度或270度)
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FormulaOCR返回参数结构体
 */
export interface FormulaOCRResponse {
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  FormulaInfos?: Array<TextFormula>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 汽车票字段信息
 */
export interface BusInvoiceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、身份证号、省、市、开票日期、乘车地点、检票口、客票类型、车型、座位号、车次。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * SmartStructuralOCR请求参数结构体
 */
export interface SmartStructuralOCRRequest {
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 自定义结构化功能需返回的字段名称，例：
若客户只想返回姓名、性别两个字段的识别结果，则输入
ItemNames=["姓名","性别"]
   */
  ItemNames?: Array<string>
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否开启全文字段识别，默认值为false，开启后可返回全文字段识别结果。
   */
  ReturnFullText?: boolean
}

/**
 * 单元格数据
 */
export interface TableCellInfo {
  /**
   * 单元格左上角的列索引
   */
  ColTl: number
  /**
   * 单元格左上角的行索引
   */
  RowTl: number
  /**
   * 单元格右下角的列索引
   */
  ColBr: number
  /**
   * 单元格右下角的行索引
   */
  RowBr: number
  /**
   * 单元格内识别出的字符串文本，若文本存在多行，以换行符"\n"隔开
   */
  Text: string
  /**
   * 单元格类型
   */
  Type: string
  /**
   * 单元格置信度
   */
  Confidence: number
  /**
   * 单元格在图像中的四点坐标
   */
  Polygon: Array<Coord>
}

/**
 * GeneralHandwritingOCR请求参数结构体
 */
export interface GeneralHandwritingOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 场景字段，默认不用填写。
可选值:only_hw  表示只输出手写体识别结果，过滤印刷体。
   */
  Scene?: string
  /**
   * 是否开启单字的四点定位坐标输出，默认值为false。
   */
  EnableWordPolygon?: boolean
  /**
   * 文本检测开关，默认值为true。
设置为false表示直接进行单行识别，可适用于识别单行手写体签名场景。
   */
  EnableDetectText?: boolean
}

/**
 * BizLicenseOCR请求参数结构体
 */
export interface BizLicenseOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否返回告警码，默认为false
   */
  EnableCopyWarn?: boolean
  /**
   * 是否返回自动拼接的有效期，默认为true
   */
  EnablePeriodComplete?: boolean
}

/**
 * MixedInvoiceDetect返回参数结构体
 */
export interface MixedInvoiceDetectResponse {
  /**
   * 检测出的票据类型列表，具体内容请点击左侧链接。
   */
  InvoiceDetectInfos?: Array<InvoiceDetectInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RideHailingDriverLicenseOCR请求参数结构体
 */
export interface RideHailingDriverLicenseOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500\*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
}

/**
 * 发票人员信息
 */
export interface VatInvoiceUserInfo {
  /**
   * 名称
   */
  Name: string
  /**
   * 纳税人识别号
   */
  TaxId: string
  /**
   * 地 址、电 话
   */
  AddrTel: string
  /**
   * 开户行及账号
   */
  FinancialAccount: string
}

/**
 * 通用机打发票条目
 */
export interface GeneralMachineItem {
  /**
   * 项目名称
   */
  Name?: string
  /**
   * 规格型号
   */
  Specification?: string
  /**
   * 单位
   */
  Unit?: string
  /**
   * 数量
   */
  Quantity?: string
  /**
   * 单价
   */
  Price?: string
  /**
   * 金额
   */
  Total?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 税额
   */
  Tax?: string
}

/**
 * GeneralAccurateOCR返回参数结构体
 */
export interface GeneralAccurateOCRResponse {
  /**
   * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
   */
  TextDetections?: Array<TextDetection>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   * @deprecated
   */
  Angel?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 电子发票（火车票）
 */
export interface ElectronicTrainTicketFull {
  /**
   * 电子发票类型
   */
  TypeOfVoucher?: string
  /**
   * 电子客票号
   */
  ElectronicTicketNum?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 始发站
   */
  StationGetOn?: string
  /**
   * 到达站
   */
  StationGetOff?: string
  /**
   * 火车号
   */
  TrainNumber?: string
  /**
   * 乘车日期
   */
  DateGetOn?: string
  /**
   * 始发时间
   */
  TimeGetOn?: string
  /**
   * 座位类型
   */
  Seat?: string
  /**
   * 座位号
   */
  SeatNumber?: string
  /**
   * 票价
   */
  Fare?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 身份证号
   */
  UserID?: string
  /**
   * 乘车人姓名
   */
  UserName?: string
  /**
   * 金额
   */
  Total?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 税额
   */
  Tax?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 统一社会信用代码
   */
  BuyerTaxID?: string
  /**
   * 原发票号码
   */
  OriginalNumber?: string
  /**
   * 标识信息
   */
  IDInfo?: string
}

/**
 * 汽车票
 */
export interface BusInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 乘车时间
   */
  TimeGetOn?: string
  /**
   * 乘车日期
   */
  DateGetOn?: string
  /**
   * 出发车站
   */
  StationGetOn?: string
  /**
   * 到达车站
   */
  StationGetOff?: string
  /**
   * 票价
   */
  Total?: string
  /**
   * 姓名
   */
  UserName?: string
  /**
   * 消费类型
   */
  Kind?: string
  /**
   * 身份证号
   */
  UserID?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 乘车地点
   */
  PlaceGetOn?: string
  /**
   * 检票口
   */
  GateNumber?: string
  /**
   * 客票类型
   */
  TicketType?: string
  /**
   * 车型
   */
  VehicleType?: string
  /**
   * 座位号
   */
  SeatNumber?: string
  /**
   * 车次
   */
  TrainNumber?: string
}

/**
 * QrcodeOCR请求参数结构体
 */
export interface QrcodeOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
}

/**
 * TaxiInvoiceOCR返回参数结构体
 */
export interface TaxiInvoiceOCRResponse {
  /**
   * 发票代码
   */
  InvoiceNum?: string
  /**
   * 发票号码
   */
  InvoiceCode?: string
  /**
   * 日期
   */
  Date?: string
  /**
   * 金额
   */
  Fare?: string
  /**
   * 上车时间
   */
  GetOnTime?: string
  /**
   * 下车时间
   */
  GetOffTime?: string
  /**
   * 里程
   */
  Distance?: string
  /**
   * 发票所在地
   */
  Location?: string
  /**
   * 车牌号
   */
  PlateNumber?: string
  /**
   * 发票消费类型
   */
  InvoiceType?: string
  /**
   * 省
注意：此字段可能返回 null，表示取不到有效值。
   */
  Province?: string
  /**
   * 市
注意：此字段可能返回 null，表示取不到有效值。
   */
  City?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeGeneralInvoice请求参数结构体
 */
export interface RecognizeGeneralInvoiceRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 8M。图片下载时间不超过 3 秒。
支持的图片像素：单边介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 8M。图片下载时间不超过 3 秒。
支持的图片像素：单边介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 需要识别的票据类型列表，为空或不填表示识别全部类型。当传入单个类型时，图片均采用该票类型进行处理。
暂不支持多个参数进行局部控制。
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
15：非税发票
16：全电发票
17：医疗发票
-1：其他发票
   */
  Types?: Array<number | bigint>
  /**
   * 是否开启其他票识别，默认值为true，开启后可支持其他发票的智能识别。
   */
  EnableOther?: boolean
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  EnablePdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否开启PDF多页识别，默认值为false，开启后可同时支持多页PDF的识别返回，仅支持返回文件前30页。开启后EnablePdf和PdfPageNumber入参不进行控制。
   */
  EnableMultiplePage?: boolean
  /**
   * 是否返回切割图片base64，默认值为false。
   */
  EnableCutImage?: boolean
  /**
   * 是否打开字段坐标返回。默认为false。
   */
  EnableItemPolygon?: boolean
}

/**
 * GeneralBasicOCR返回参数结构体
 */
export interface GeneralBasicOCRResponse {
  /**
   * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
   */
  TextDetections?: Array<TextDetection>
  /**
   * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
   */
  Language?: string
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   * @deprecated
   */
  Angel?: number
  /**
   * 图片为PDF时，返回PDF的总页数，默认为0
   */
  PdfPageSize?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 港澳台来往内地通行证背面字段信息
 */
export interface MainlandTravelPermitBackInfos {
  /**
   * String	证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 卡证背面的中文姓名	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 卡证背面的身份证号码	
注意：此字段可能返回 null，表示取不到有效值。
   */
  IDNumber?: string
  /**
   * 历史通行证号码	
注意：此字段可能返回 null，表示取不到有效值。
   */
  HistoryNumber?: string
}

/**
 * 其他发票
 */
export interface OtherInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 金额
   */
  Total?: string
  /**
   * 列表
   */
  OtherInvoiceListItems?: Array<OtherInvoiceItem>
  /**
   * 表格
   */
  OtherInvoiceTableItems?: Array<OtherInvoiceList>
  /**
   * 发票日期
   */
  Date?: string
}

/**
 * 单元格识别结果
 */
export interface CellContent {
  /**
   * 段落编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParagNo: number
  /**
   * 字体大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  WordSize: number
}

/**
 * RecognizeMedicalInvoiceOCR返回参数结构体
 */
export interface RecognizeMedicalInvoiceOCRResponse {
  /**
   * 识别出的字段信息
   */
  MedicalInvoiceInfos?: Array<MedicalInvoiceInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeValidIDCardOCR请求参数结构体
 */
export interface RecognizeValidIDCardOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 0 自动，自动判断输入证件的类型
1 身份证人像面，指定输入证件类型为二代身份证人像面
2 身份证国徽面，指定输入证件类型为二代身份证国徽面
3 身份证人像国徽面，指定输入证件类型为二代身份证人像面或者国徽面
4 临时身份证人像面，指定输入证件类型为临时身份证人像面
5 临时身份证国徽面，指定输入证件类型为临时身份证国徽面
6 临时身份证人像国徽面，指定输入证件类型为临时身份证人像面或者国徽面
7 港澳台居住证人像面，指定输入证件类型为港澳台居住证人像面
8 港澳台居住证国徽面，指定输入证件类型为港澳台居住证国徽面
9 港澳台居住证人像国徽面，指定输入证件类型为港澳台居住证人像面或者国徽面
10 外国人永久居留身份证人像面，指定输入证件类型为外国人永久居留证人像面
11 外国人永久居留身份证国徽面，指定输入证件类型为外国人永久居留证国徽面
12 外国人永久居留身份证人像国徽面，指定输入证件类型为外国人永久居留证人像或者国徽面
该参数如果不填，将为您自动判断卡证类型。
   */
  CardType?: number
  /**
   * 默认值为false，打开返回证件头像切图。
   */
  EnablePortrait?: boolean
  /**
   * 默认值为false，打开返回证件主体切图。
   */
  EnableCropImage?: boolean
  /**
   * 默认值为false，打开返回边缘完整性判断。
   */
  EnableBorderCheck?: boolean
  /**
   * 默认值为false，打开返回证件是否被遮挡。
   */
  EnableOcclusionCheck?: boolean
  /**
   * 默认值为false，打开返回证件是否存在复印。
   */
  EnableCopyCheck?: boolean
  /**
   * 默认值为false，打开返回证件是否存在屏幕翻拍。
   */
  EnableReshootCheck?: boolean
  /**
   * 默认值为false，打开返回证件是否存在PS。类型为：临时、港澳台居住证、外国人居住证失效
   */
  EnablePSCheck?: boolean
  /**
   * 默认值为false，打开返回字段级反光和字段级完整性告警。类型为：临时、港澳台居住证、外国人居住证失效
   */
  EnableWordCheck?: boolean
}

/**
 * MixedInvoiceOCR返回参数结构体
 */
export interface MixedInvoiceOCRResponse {
  /**
   * 混贴票据识别结果，具体内容请点击左侧链接。
   */
  MixedInvoiceItems?: Array<MixedInvoiceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClassifyDetectOCR返回参数结构体
 */
export interface ClassifyDetectOCRResponse {
  /**
   * 智能卡证分类结果。当图片类型不支持分类识别或者识别出的类型不在请求参数DiscernType指定的范围内时，返回结果中的Type字段将为空字符串，Name字段将返回"其它"
   */
  ClassifyDetectInfos?: Array<ClassifyDetectInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VinOCR请求参数结构体
 */
export interface VinOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * ocr结果信息
 */
export interface OCRResult {
  /**
   * 身份证结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  IDCardResult?: IDCardResult
}

/**
 * VehicleLicenseOCR返回参数结构体
 */
export interface VehicleLicenseOCRResponse {
  /**
   * 行驶证主页正面的识别结果，CardSide 为 FRONT。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrontInfo?: TextVehicleFront
  /**
   * 行驶证副页正面的识别结果，CardSide 为 BACK。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackInfo?: TextVehicleBack
  /**
   * Code 告警码列表和释义：
-9102  复印件告警
-9103  翻拍件告警
-9104  反光告警
-9105  模糊告警
-9106  边框不完整告警
注：告警码可以同时存在多个
   */
  RecognizeWarnCode?: Array<number | bigint>
  /**
   * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_REFLECTION 反光告警
WARN_DRIVER_LICENSE_BLUR 模糊告警
WARN_DRIVER_LICENSE_BORDER_INCOMPLETE 边框不完整告警
注：告警信息可以同时存在多个
   */
  RecognizeWarnMsg?: Array<string>
  /**
   * 行驶证类型 电子行驶证：Electronic 普通行驶证：Normal
   */
  VehicleLicenseType?: string
  /**
   * 拖拉机行驶证副页正面的识别结果，CardSide 为 BACK。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TractorBackInfo?: TextTractorVehicleBack
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VatInvoiceOCR请求参数结构体
 */
export interface VatInvoiceOCRRequest {
  /**
   * 图片/PDF的 Base64 值。
支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片/PDF大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片/PDF的 Url 地址。
支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片/PDF大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * key信息组
 */
export interface Key {
  /**
   * 自动识别的字段名称
   */
  AutoName?: string
  /**
   * 定义的字段名称（传key的名称）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigName?: string
}

/**
 * 全电发票（航空运输电子客票行程单）
 */
export interface ElectronicAirTransport {
  /**
   * 发票代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 发票号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: string
  /**
   * 开票日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Date?: string
  /**
   * 金额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Amount?: string
  /**
   * 校验码
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckCode?: string
  /**
   * 价税合计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 抵扣标志
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeductionMark?: string
  /**
   * 发票状态代码，0正常 1 未更新  2作废 3已红冲
注意：此字段可能返回 null，表示取不到有效值。
   */
  StateCode?: string
  /**
   * 购方识别号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyerTaxCode?: string
  /**
   * 购方名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyerName?: string
  /**
   * 合计税额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tax?: string
  /**
   * 国内国际标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomesticInternationalMark?: string
  /**
   * 旅客姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PassengerName?: string
  /**
   * 有效身份证件号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PassengerNo?: string
  /**
   * 电子客票号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElectronicNumber?: string
  /**
   * 全电发票（航空运输电子客票行程单）详细信息


注意：此字段可能返回 null，表示取不到有效值。
   */
  ElectronicAirTransportDetails?: Array<ElectronicAirTransportDetail>
}

/**
 * ClassifyDetectOCR请求参数结构体
 */
export interface ClassifyDetectOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 可以指定要识别的票证类型,指定后不出现在此列表的票证将不返回类型。不指定时默认返回所有支持类别票证的识别信息。

以下是当前支持的类型：
IDCardFront: 身份证正面识别
IDCardBack: 身份证背面识别
Passport: 护照
BusinessCard: 名片识别
BankCard: 银行卡识别
VehicleLicenseFront: 行驶证主页识别
VehicleLicenseBack: 行驶证副页识别
DriverLicenseFront: 驾驶证主页识别
DriverLicenseBack: 驾驶证副页识别
PermitFront: 港澳台通行证正面
ResidenceBooklet: 户口本资料页
MainlandPermitFront: 港澳台来往内地通行证正面
HmtResidentPermitFront: 港澳台居住证正面
HmtResidentPermitBack: 港澳台居住证背面
EstateCert: 不动产证
BizLicense: 营业执照
ForeignPermanentResidentFront: 外国人永居证正面识别
ForeignPermanentResidentBack: 外国人永居证背面识别
   */
  DiscernType?: Array<string>
}

/**
 * DutyPaidProofOCR返回参数结构体
 */
export interface DutyPaidProofOCRResponse {
  /**
   * 完税证明识别结果，具体内容请点击左侧链接。
   */
  DutyPaidProofInfos?: Array<DutyPaidProofInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TollInvoiceOCR请求参数结构体
 */
export interface TollInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * LicensePlateOCR返回参数结构体
 */
export interface LicensePlateOCRResponse {
  /**
   * 识别出的车牌号码。
   */
  Number?: string
  /**
   * 置信度，0 - 100 之间。
   */
  Confidence?: number
  /**
   * 文本行在原图片中的像素坐标框。
   */
  Rect?: Rect
  /**
   * 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”、“喷漆”、“其它”。
   */
  Color?: string
  /**
   * 全部车牌信息。
   */
  LicensePlateInfos?: Array<LicensePlateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HKIDCardOCR返回参数结构体
 */
export interface HKIDCardOCRResponse {
  /**
   * 中文姓名
   */
  CnName?: string
  /**
   * 英文姓名
   */
  EnName?: string
  /**
   * 中文姓名对应电码
   */
  TelexCode?: string
  /**
   * 性别 ：“男M”或“女F”
   */
  Sex?: string
  /**
   * 出生日期
   */
  Birthday?: string
  /**
   * 永久性居民身份证。
0：非永久；
1：永久；
-1：未知。
   */
  Permanent?: number
  /**
   * 身份证号码
   */
  IdNum?: string
  /**
   * 证件符号，出生日期下的符号，例如"***AZ"
   */
  Symbol?: string
  /**
   * 首次签发日期
   */
  FirstIssueDate?: string
  /**
   * 最近领用日期
   */
  CurrentIssueDate?: string
  /**
   * 真假判断。
0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；
1：假；
2：真。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  FakeDetectResult?: number
  /**
   * 人像照片Base64后的结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeadImage?: string
  /**
   * 多重告警码，当身份证是翻拍、复印件时返回对应告警码。
-9102：证照复印件告警
-9103：证照翻拍告警
   * @deprecated
   */
  WarningCode?: Array<number | bigint>
  /**
   * 告警码
-9101 证件边框不完整告警
-9102 证件复印件告警
-9103 证件翻拍告警
-9104 证件PS告警
-9107 证件反光告警
-9108 证件模糊告警
-9109 告警能力未开通
   */
  WarnCardInfos?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 反光点覆盖区域详情结果
 */
export interface ReflectDetailInfo {
  /**
   * NationalEmblem 国徽位置
Portrait 人像照片位置
RecognitionField 识别字段位置
Others 其他位置
   */
  Position?: string
}

/**
 * 医疗发票识别结果
 */
export interface MedicalInvoiceInfo {
  /**
   * 医疗发票识别结果条目
   */
  MedicalInvoiceItems: Array<MedicalInvoiceItem>
}

/**
 * 发票商品
 */
export interface VatInvoiceGoodsInfo {
  /**
   * 项目名称
   */
  Item: string
  /**
   * 规格型号
   */
  Specification: string
  /**
   * 单位
   */
  MeasurementDimension: string
  /**
   * 价格
   */
  Price: string
  /**
   * 数量
   */
  Quantity: string
  /**
   * 金额
   */
  Amount: string
  /**
   * 税率(如6%、免税)
   */
  TaxScheme: string
  /**
   * 税额
   */
  TaxAmount: string
}

/**
 * RecognizeThaiIDCardOCR返回参数结构体
 */
export interface RecognizeThaiIDCardOCRResponse {
  /**
   * 身份证号码
   */
  ID?: string
  /**
   * 泰文姓名
   */
  ThaiName?: string
  /**
   * 英文姓名
   */
  EnFirstName?: string
  /**
   * 英文姓名
   */
  EnLastName?: string
  /**
   * 泰文签发日期
   */
  IssueDate?: string
  /**
   * 泰文到期日期
   */
  ExpirationDate?: string
  /**
   * 英文签发日期
   */
  EnIssueDate?: string
  /**
   * 英文到期日期
   */
  EnExpirationDate?: string
  /**
   * 泰文出生日期
   */
  Birthday?: string
  /**
   * 英文出生日期
   */
  EnBirthday?: string
  /**
   * 宗教信仰
   */
  Religion?: string
  /**
   * 序列号
   */
  SerialNumber?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 背面号码
   */
  LaserID?: string
  /**
   * 证件人像照片抠取
   */
  PortraitImage?: string
  /**
   * 告警码
-9101 证件边框不完整告警
-9102 证件复印件告警
-9103 证件翻拍告警
-9107 证件反光告警
-9108 证件模糊告警
-9109 告警能力未开通
   */
  WarnCardInfos?: Array<number | bigint>
  /**
   * 字段置信度：
{
    "ID": {
        "Confidence": 0.9999
    },
    "ThaiName": {
        "Confidence": 0.9996
    }
}
   */
  AdvancedInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组在图中的序号
 */
export interface GroupInfo {
  /**
   * 每一行的元素
   */
  Groups?: Array<LineInfo>
}

/**
 * 发票字段坐标信息。包括字段英文名称、字段值所在位置的四点坐标、字段所属行号，具体内容请点击左侧链接。
 */
export interface ItemPolygonInfo {
  /**
   * 发票的英文字段名称（如Title）
   */
  Key?: string
  /**
   * 字段值所在位置的四点坐标
   */
  Polygon?: Polygon
  /**
   * 字段属于第几行，用于相同字段的排版，如发票明细表格项目，普通字段使用默认值为-1，表示无列排版。
   */
  Row?: number
}

/**
 * PermitOCR请求参数结构体
 */
export interface PermitOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否返回头像照片，默认为 false
   */
  CropPortrait?: boolean
}

/**
 * 混贴票据中单张发票的内容
 */
export interface SingleInvoiceItem {
  /**
   * 增值税专用发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatSpecialInvoice?: VatInvoiceInfo
  /**
   * 增值税普通发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatCommonInvoice?: VatInvoiceInfo
  /**
   * 增值税电子普通发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicCommonInvoice?: VatInvoiceInfo
  /**
   * 增值税电子专用发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicSpecialInvoice?: VatInvoiceInfo
  /**
   * 区块链电子发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicInvoiceBlockchain?: VatInvoiceInfo
  /**
   * 增值税电子普通发票(通行费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicInvoiceToll?: VatInvoiceInfo
  /**
   * 电子发票(专用发票)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicSpecialInvoiceFull?: VatElectronicInfo
  /**
   * 电子发票(普通发票)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatElectronicInvoiceFull?: VatElectronicInfo
  /**
   * 通用机打发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachinePrintedInvoice?: MachinePrintedInvoice
  /**
   * 汽车票
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusInvoice?: BusInvoice
  /**
   * 轮船票
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShippingInvoice?: ShippingInvoice
  /**
   * 过路过桥费发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  TollInvoice?: TollInvoice
  /**
   * 其他发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherInvoice?: OtherInvoice
  /**
   * 机动车销售统一发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  MotorVehicleSaleInvoice?: MotorVehicleSaleInvoice
  /**
   * 二手车销售统一发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedCarPurchaseInvoice?: UsedCarPurchaseInvoice
  /**
   * 增值税普通发票(卷票)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatInvoiceRoll?: VatInvoiceRoll
  /**
   * 出租车发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaxiTicket?: TaxiTicket
  /**
   * 定额发票
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuotaInvoice?: QuotaInvoice
  /**
   * 机票行程单
注意：此字段可能返回 null，表示取不到有效值。
   */
  AirTransport?: AirTransport
  /**
   * 非税收入通用票据
注意：此字段可能返回 null，表示取不到有效值。
   */
  NonTaxIncomeGeneralBill?: NonTaxIncomeBill
  /**
   * 非税收入一般缴款书(电子)
注意：此字段可能返回 null，表示取不到有效值。
   */
  NonTaxIncomeElectronicBill?: NonTaxIncomeBill
  /**
   * 火车票
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainTicket?: TrainTicket
  /**
   * 医疗门诊收费票据（电子）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MedicalOutpatientInvoice?: MedicalInvoice
  /**
   * 医疗住院收费票据（电子）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MedicalHospitalizedInvoice?: MedicalInvoice
  /**
   * 增值税销货清单
注意：此字段可能返回 null，表示取不到有效值。
   */
  VatSalesList?: VatInvoiceInfo
  /**
   * 电子发票（火车票）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElectronicTrainTicketFull?: ElectronicTrainTicketFull
  /**
   * 电子发票（机票行程单）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElectronicFlightTicketFull?: ElectronicFlightTicketFull
}

/**
 * InvoiceGeneralOCR返回参数结构体
 */
export interface InvoiceGeneralOCRResponse {
  /**
   * 通用机打发票识别结果，具体内容请点击左侧链接。
   */
  InvoiceGeneralInfos?: Array<InvoiceGeneralInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智慧表单上传文件信息
 */
export interface SmartFormFileUrl {
  /**
   * 文件url地址
   */
  FileUrl: string
  /**
   * 文件的顺序，顺序从1开始
   */
  FileOrderNumber: number
}

/**
 * VatInvoiceVerifyNew返回参数结构体
 */
export interface VatInvoiceVerifyNewResponse {
  /**
   * 增值税发票、购车发票、全电发票的基础要素字段信息。
   */
  Invoice?: VatInvoice
  /**
   * 机动车销售统一发票详细字段信息。
   */
  VehicleInvoiceInfo?: VehicleInvoiceInfo
  /**
   * 二手车销售统一发票详细字段信息。
   */
  UsedVehicleInvoiceInfo?: UsedVehicleInvoiceInfo
  /**
   * 通行费发票详细字段信息。
   */
  PassInvoiceInfoList?: Array<PassInvoiceInfo>
  /**
   * 全电发票（铁路电子客票）详细字段信息。

   */
  ElectronicTrainTicket?: ElectronicTrainTicket
  /**
   * 全电发票（航空运输电子客票行程单）详细字段信息。
   */
  ElectronicAirTransport?: ElectronicAirTransport
  /**
   * 财政发票详细字段信息
   */
  FinancialBill?: FinancialBill
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增值税发票返回值
 */
export interface VatInvoiceInfo {
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 发票联次
   */
  FormType?: string
  /**
   * 车船税
   */
  TravelTax?: string
  /**
   * 购买方地址电话
   */
  BuyerAddrTel?: string
  /**
   * 购买方银行账号
   */
  BuyerBankAccount?: string
  /**
   * 公司印章内容
   */
  CompanySealContent?: string
  /**
   * 税务局章内容
   */
  TaxSealContent?: string
  /**
   * 服务类型
   */
  ServiceName?: string
  /**
   * 市
   */
  City?: string
  /**
   * 是否存在二维码（0：没有，1：有）
   */
  QRCodeMark?: number
  /**
   * 是否有代开标记（0：没有，1：有）
   */
  AgentMark?: number
  /**
   * 是否有通行费标记（0：没有，1：有）
   */
  TransitMark?: number
  /**
   * 是否有成品油标记（0：没有，1：有）
   */
  OilMark?: number
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 机打发票号码
   */
  NumberConfirm?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 税前金额
   */
  PretaxAmount?: string
  /**
   * 合计税额
   */
  Tax?: string
  /**
   * 机器编号
   */
  MachineCode?: string
  /**
   * 密码区
   */
  Ciphertext?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 销售方纳税人识别号
   */
  SellerTaxID?: string
  /**
   * 销售方地址电话
   */
  SellerAddrTel?: string
  /**
   * 销售方银行账号
   */
  SellerBankAccount?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
  /**
   * 开票人
   */
  Issuer?: string
  /**
   * 复核人
   */
  Reviewer?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 增值税发票项目信息
   */
  VatInvoiceItemInfos?: Array<VatInvoiceItemInfo>
  /**
   * 机打发票代码
   */
  CodeConfirm?: string
  /**
   * 收款人
   */
  Receiptor?: string
  /**
   * 是否有全电纸质票（0：没有，1：有）
   */
  ElectronicFullMark?: number
  /**
   * 全电号码
   */
  ElectronicFullNumber?: string
  /**
   * 发票联名
   */
  FormName?: string
  /**
   * 是否有区块链标记（0：没有，1：有）
   */
  BlockChainMark?: number
  /**
   * 是否有收购标记（0：没有，1：有）
   */
  AcquisitionMark?: number
  /**
   * 小计金额
   */
  SubTotal?: string
  /**
   * 小计税额
   */
  SubTax?: string
}

/**
 * TaxiInvoiceOCR请求参数结构体
 */
export interface TaxiInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 通用机打发票
 */
export interface MachinePrintedInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 时间
   */
  Time?: string
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 密码区
   */
  Ciphertext?: string
  /**
   * 种类
   */
  Category?: string
  /**
   * 税前金额
   */
  PretaxAmount?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 合计税额
   */
  Tax?: string
  /**
   * 行业分类
   */
  IndustryClass?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 销售方纳税人识别号
   */
  SellerTaxID?: string
  /**
   * 销售方地址电话
   */
  SellerAddrTel?: string
  /**
   * 销售方银行账号
   */
  SellerBankAccount?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 购买方地址电话
   */
  BuyerAddrTel?: string
  /**
   * 购买方银行账号
   */
  BuyerBankAccount?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
  /**
   * 是否为浙江/广东通用机打发票（0：没有，1：有）
   */
  ElectronicMark?: number
  /**
   * 开票人
   */
  Issuer?: string
  /**
   * 收款人
   */
  Receiptor?: string
  /**
   * 复核人
   */
  Reviewer?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 经办人支付信息
   */
  PaymentInfo?: string
  /**
   * 经办人取票用户
   */
  TicketPickupUser?: string
  /**
   * 经办人商户号
   */
  MerchantNumber?: string
  /**
   * 经办人订单号
   */
  OrderNumber?: string
  /**
   * 条目
   */
  GeneralMachineItems?: Array<GeneralMachineItem>
}

/**
 * 财务票据查验返回结果-项目明细
 */
export interface FinancialBillItem {
  /**
   * 项目编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemID?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quantity?: string
  /**
   * 规格标准
注意：此字段可能返回 null，表示取不到有效值。
   */
  Standard?: string
  /**
   * 金额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 项目序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerialNumber?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 混贴票据中单张发票的内容
 */
export interface SingleInvoiceInfo {
  /**
   * 识别出的字段名称
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
   */
  Value?: string
  /**
   * 字段属于第几行，用于相同字段的排版，如发票明细表格项目，普通字段使用默认值为-1，表示无列排版。
   */
  Row?: number
}

/**
 * RecognizeContainerOCR请求参数结构体
 */
export interface RecognizeContainerOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 火车票
 */
export interface TrainTicket {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 乘车日期
   */
  DateGetOn?: string
  /**
   * 乘车时间
   */
  TimeGetOn?: string
  /**
   * 乘车人姓名
   */
  Name?: string
  /**
   * 出发车站
   */
  StationGetOn?: string
  /**
   * 到达车站
   */
  StationGetOff?: string
  /**
   * 座位类型
   */
  Seat?: string
  /**
   * 总金额
   */
  Total?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 序列号
   */
  SerialNumber?: string
  /**
   * 身份证号
   */
  UserID?: string
  /**
   * 检票口
   */
  GateNumber?: string
  /**
   * 车次
   */
  TrainNumber?: string
  /**
   * 手续费
   */
  HandlingFee?: string
  /**
   * 原票价
   */
  OriginalFare?: string
  /**
   * 大写金额
   */
  TotalCn?: string
  /**
   * 座位号
   */
  SeatNumber?: string
  /**
   * 取票地址
   */
  PickUpAddress?: string
  /**
   * 是否始发改签
   */
  TicketChange?: string
  /**
   * 加收票价
   */
  AdditionalFare?: string
  /**
   * 收据号码
   */
  ReceiptNumber?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 是否仅供报销使用（0：没有，1：有）
   */
  ReimburseOnlyMark?: number
  /**
   * 是否有退票费标识（0：没有，1：有）
   */
  RefundMark?: number
  /**
   * 是否有改签费标识（0：没有，1：有）
   */
  TicketChangeMark?: number
}

/**
 * TextDetect请求参数结构体
 */
export interface TextDetectRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * VatRollInvoiceOCR返回参数结构体
 */
export interface VatRollInvoiceOCRResponse {
  /**
   * 增值税发票（卷票）识别结果，具体内容请点击左侧链接。
   */
  VatRollInvoiceInfos?: Array<VatRollInvoiceInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VatInvoiceVerify请求参数结构体
 */
export interface VatInvoiceVerifyRequest {
  /**
   * 发票代码， 一张发票一天只能查询5次。
   */
  InvoiceCode: string
  /**
   * 发票号码（8位）
   */
  InvoiceNo: string
  /**
   * 开票日期（不支持当天发票查询，支持五年以内开具的发票），格式：“YYYY-MM-DD”，如：2019-12-20。
   */
  InvoiceDate: string
  /**
   * 根据票种传递对应值，如果报参数错误，请仔细检查每个票种对应的值

增值税专用发票：开具金额（不含税）

增值税普通发票、增值税电子普通发票（含通行费发票）、增值税普通发票（卷票）：校验码后6位

区块链发票：不含税金额/校验码，例如：“285.01/856ab”

机动车销售统一发票：不含税价

货物运输业增值税专用发票：合计金额

二手车销售统一发票：车价合计
   */
  Additional: string
}

/**
 * EduPaperOCR返回参数结构体
 */
export interface EduPaperOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  EduPaperInfos?: Array<TextEduPaper>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 结构化方式输出，具体内容请点击左侧链接。
   */
  QuestionBlockInfos?: Array<QuestionBlockObj>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeThaiIDCardOCR请求参数结构体
 */
export interface RecognizeThaiIDCardOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 卡证背面图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  BackImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 卡证背面图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  BackImageUrl?: string
  /**
   * 图片开关。默认为false，不返回泰国身份证头像照片的base64编码。
设置为true时，返回旋转矫正后的泰国身份证头像照片的base64编码
   */
  CropPortrait?: boolean
}

/**
 * 名片识别结果
 */
export interface BusinessCardInfo {
  /**
   * 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：
姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。
   */
  Name: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
   */
  Value: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
   */
  ItemCoord: ItemCoord
}

/**
 * 机动车销售统一发票
 */
export interface MotorVehicleSaleInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 税前金额
   */
  PretaxAmount?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 销售方单位代码
   */
  SellerTaxID?: string
  /**
   * 销售方电话
   */
  SellerTel?: string
  /**
   * 销售方地址
   */
  SellerAddress?: string
  /**
   * 销售方开户行
   */
  SellerBank?: string
  /**
   * 销售方银行账号
   */
  SellerBankAccount?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 购买方身份证号码/组织机构代码
   */
  BuyerID?: string
  /**
   * 主管税务机关
   */
  TaxAuthorities?: string
  /**
   * 主管税务机关代码
   */
  TaxAuthoritiesCode?: string
  /**
   * 车辆识别代码
   */
  VIN?: string
  /**
   * 厂牌型号
   */
  VehicleModel?: string
  /**
   * 发动机号码
   */
  VehicleEngineCode?: string
  /**
   * 合格证号
   */
  CertificateNumber?: string
  /**
   * 商检单号
   */
  InspectionNumber?: string
  /**
   * 机器编号
   */
  MachineID?: string
  /**
   * 车辆类型
   */
  VehicleType?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 合计税额
   */
  Tax?: string
  /**
   * 税率
   */
  TaxRate?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
  /**
   * 吨位
   */
  Tonnage?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 发票联次
   */
  FormType?: string
  /**
   * 发票联名
   */
  FormName?: string
  /**
   * 开票人
   */
  Issuer?: string
  /**
   * 进口证明书号
   */
  TaxNum?: string
  /**
   * 完税凭证号码
   */
  TaxPayNum?: string
  /**
   * 税控码
   */
  TaxCode?: string
  /**
   * 限乘人数
   */
  MaxPeopleNum?: string
  /**
   * 产地
   */
  Origin?: string
  /**
   * 机打发票代码
   */
  MachineCode?: string
  /**
   * 机打发票号码
   */
  MachineNumber?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
}

/**
 * 全电发票（铁路电子客票）
 */
export interface ElectronicTrainTicket {
  /**
   * 购方名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyerName?: string
  /**
   * 购方识别号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyerTaxCode?: string
  /**
   * 发票号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: string
  /**
   * 开票日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Date?: string
  /**
   * 价税合计（中文大写）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCN?: string
  /**
   * 税额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tax?: string
  /**
   * 业务类型，0：退票，1:售票
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceType?: string
  /**
   * 出发时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeGetOn?: string
  /**
   * 车次
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainNumber?: string
  /**
   * 发票代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 席别
注意：此字段可能返回 null，表示取不到有效值。
   */
  SeatType?: string
  /**
   * 乘车日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DateGetOn?: string
  /**
   * 车厢
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainCabin?: string
  /**
   * 出发站
注意：此字段可能返回 null，表示取不到有效值。
   */
  StationGetOn?: string
  /**
   * 电子客票号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElectronicNumber?: string
  /**
   * 姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PassengerName?: string
  /**
   * 证件号
注意：此字段可能返回 null，表示取不到有效值。
   */
  PassengerNo?: string
  /**
   * 金额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Amount?: string
  /**
   * 到达站
注意：此字段可能返回 null，表示取不到有效值。
   */
  StationGetOff?: string
  /**
   * 税率
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaxRate?: string
  /**
   * 席位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seat?: string
  /**
   * 价税合计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 校验码
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckCode?: string
  /**
   * 发票状态代码，0正常 1 未更新  2作废 3已红冲
注意：此字段可能返回 null，表示取不到有效值。
   */
  StateCode?: string
}

/**
 * 二手车销售统一发票信息
 */
export interface UsedVehicleInvoiceInfo {
  /**
   * 所属税局
   */
  TaxBureau: string
  /**
   * 买方单位/个人
   */
  Buyer: string
  /**
   * 买方单位代码/身份证号码
   */
  BuyerNo: string
  /**
   * 买方单位/个人地址
   */
  BuyerAddress: string
  /**
   * 买方单位电话
   */
  BuyerTel: string
  /**
   * 卖方单位/个人
   */
  Seller: string
  /**
   * 卖方单位代码/身份证号码
   */
  SellerNo: string
  /**
   * 卖方单位/个人地址
   */
  SellerAddress: string
  /**
   * 卖方单位电话
   */
  SellerTel: string
  /**
   * 车牌照号
   */
  VehicleLicenseNo: string
  /**
   * 登记证号
   */
  RegisterNo: string
  /**
   * 车架号/车辆识别代码
   */
  VehicleIdentifyNo: string
  /**
   * 转入地车辆管理所名称
   */
  ManagementOffice: string
  /**
   * 车价合计
   */
  VehicleTotalPrice: string
  /**
   * 经营、拍卖单位
   */
  Auctioneer: string
  /**
   * 经营、拍卖单位地址
   */
  AuctioneerAddress: string
  /**
   * 经营、拍卖单位纳税人识别号
   */
  AuctioneerTaxpayerNum: string
  /**
   * 经营、拍卖单位开户银行、账号
   */
  AuctioneerBankAccount: string
  /**
   * 经营、拍卖单位电话
   */
  AuctioneerTel: string
  /**
   * 二手车市场
   */
  Market: string
  /**
   * 二手车市场纳税人识别号
   */
  MarketTaxpayerNum: string
  /**
   * 二手车市场地址
   */
  MarketAddress: string
  /**
   * 二手车市场开户银行账号
   */
  MarketBankAccount: string
  /**
   * 二手车市场电话
   */
  MarketTel: string
}

/**
 * 信息区证件内容
 */
export interface PassportRecognizeInfos {
  /**
   * 证件类型（护照信息页识别结果）
   */
  Type?: string
  /**
   * 发行国家（护照信息页识别结果）
   */
  IssuingCountry?: string
  /**
   * 护照号码（护照信息页识别结果）
   */
  PassportID?: string
  /**
   * 姓（护照信息页识别结果）
   */
  Surname?: string
  /**
   * 名（护照信息页识别结果）
   */
  GivenName?: string
  /**
   * 姓名（护照信息页识别结果）
   */
  Name?: string
  /**
   * 国籍信息（护照信息页识别结果）
   */
  Nationality?: string
  /**
   * 出生日期（护照信息页识别结果）
   */
  DateOfBirth?: string
  /**
   * 性别（护照信息页识别结果）
   */
  Sex?: string
  /**
   * 发行日期（护照信息页识别结果）
   */
  DateOfIssuance?: string
  /**
   * 截止日期（护照信息页识别结果）
   */
  DateOfExpiration?: string
  /**
   * 持证人签名（护照信息页识别结果）

仅中国大陆护照支持返回此字段，港澳台及境外护照不支持
   */
  Signature?: string
  /**
   * 签发地点（护照信息页识别结果）

仅中国大陆护照支持返回此字段，港澳台及境外护照不支持
   */
  IssuePlace?: string
  /**
   * 签发机关（护照信息页识别结果）

仅中国大陆护照支持返回此字段，港澳台及境外护照不支持
   */
  IssuingAuthority?: string
}

/**
 * PropOwnerCertOCR请求参数结构体
 */
export interface PropOwnerCertOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * ImageEnhancement返回参数结构体
 */
export interface ImageEnhancementResponse {
  /**
   * 图片数据标识：
“origin”：原图
“preprocess”:预处理后的图
   */
  ImageTag?: string
  /**
   * 图片数据，返回预处理后图像或原图像base64字符
   */
  Image?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 头像照片和坐标
 */
export interface PortraitImageInfo {
  /**
   * 头像
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortraitImage?: string
  /**
   * 头像坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageCoordinates?: ImageCoordinates
}

/**
 * 图片大小
 */
export interface QrcodeImgSize {
  /**
   * 宽
   */
  Wide: number
  /**
   * 高
   */
  High: number
}

/**
 * PassportOCR返回参数结构体
 */
export interface PassportOCRResponse {
  /**
   * 国家码
   */
  Country?: string
  /**
   * 护照号
   */
  PassportNo?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 国籍
   */
  Nationality?: string
  /**
   * 出生日期
   */
  BirthDate?: string
  /**
   * 出生地点
   */
  BirthPlace?: string
  /**
   * 签发日期
   */
  IssueDate?: string
  /**
   * 签发地点
   */
  IssuePlace?: string
  /**
   * 有效期
   */
  ExpiryDate?: string
  /**
   * 持证人签名
   */
  Signature?: string
  /**
   * 最下方第一行 MRZ Code 序列
   */
  CodeSet?: string
  /**
   * 最下方第二行 MRZ Code 序列
   */
  CodeCrc?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 姓
   */
  FamilyName?: string
  /**
   * 名
   */
  FirstName?: string
  /**
   * 头像和坐标信息
   */
  PortraitImageInfo?: PortraitImageInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 财务票据查验返回结果-项目清单
 */
export interface FinancialBillItemDetails {
  /**
   * 项目编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemID?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quantity?: string
  /**
   * 规格标准
注意：此字段可能返回 null，表示取不到有效值。
   */
  Standard?: string
  /**
   * 金额
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 项目序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerialNumber?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 卡证告警信息返回
 */
export interface CardWarnInfo {
  /**
   * 证件边缘是否完整
0：正常
1：边缘不完整
   */
  BorderCheck?: number
  /**
   * 证件是否被遮挡
0：正常
1：有遮挡
   */
  OcclusionCheck?: number
  /**
   * 是否复印
0:正常
1:复印件
   */
  CopyCheck?: number
  /**
   * 是否屏幕翻拍
0:正常
1:翻拍
   */
  ReshootCheck?: number
  /**
   * 证件是否有PS
0：正常
1：有PS
   */
  PSCheck?: number
}

/**
 * VehicleRegCertOCR请求参数结构体
 */
export interface VehicleRegCertOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * RecognizeTravelCardOCR返回参数结构体
 */
export interface RecognizeTravelCardOCRResponse {
  /**
   * 行程卡更新时间，格式为：XXXX.XX.XX XX:XX:XX
   */
  Time?: string
  /**
   * 行程卡颜色：绿色、黄色、红色
   */
  Color?: string
  /**
   * 7天内到达或途经的城市（自2022年7月8日起，通信行程卡查询结果的覆盖时间范围由“14天”调整为“7天”）
   */
  ReachedCity?: Array<string>
  /**
   * 7天内到达或途径存在中高风险地区的城市（自2022年6月29日起，通信行程卡取消“星号”标记，改字段将返回空值）
   */
  RiskArea?: Array<string>
  /**
   * 电话号码
   */
  Telephone?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全电发票（航空运输电子客票行程单）详细信息
 */
export interface ElectronicAirTransportDetail {
  /**
   * 航段序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlightSegment?: string
  /**
   * 始发站
注意：此字段可能返回 null，表示取不到有效值。
   */
  StationGetOn?: string
  /**
   * 目的站
注意：此字段可能返回 null，表示取不到有效值。
   */
  StationGetOff?: string
  /**
   * 承运人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Carrier?: string
  /**
   * 航班号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlightNumber?: string
  /**
   * 座位等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  SeatLevel?: string
  /**
   * 承运日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlightDate?: string
  /**
   * 起飞时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartureTime?: string
  /**
   * 客票级别/客票类别
注意：此字段可能返回 null，表示取不到有效值。
   */
  FareBasis?: string
}

/**
 * 财务票据查验返回结果
 */
export interface FinancialBill {
  /**
   * 票据代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 票据号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: string
  /**
   * 缴款人纳税识别号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyerTaxID?: string
  /**
   * 校验码
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckCode?: string
  /**
   * 缴款人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Buyer?: string
  /**
   * 开票日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Date?: string
  /**
   * 收款单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  SellerCompany?: string
  /**
   * 复核人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reviewer?: string
  /**
   * 收款人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seller?: string
  /**
   * 票据名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 金额合计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 金额合计中文大写
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCn?: string
  /**
   * 冲红
注意：此字段可能返回 null，表示取不到有效值。
   */
  RushRedStateCode?: string
  /**
   * 冲红日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RushRedDate?: string
  /**
   * 冲红时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  RushRedTime?: string
  /**
   * 冲红原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  RushRedReason?: string
  /**
   * 项目明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinancialBillItems?: Array<FinancialBillItem>
  /**
   * 项目清单
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinancialBillItemDetails?: Array<FinancialBillItemDetails>
}

/**
 * 单页文档识别的内容
 */
export interface DocumentRecognizeInfo {
  /**
   * 输入PDF文件的页码，从1开始。输入图片的话值始终为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 旋转角度

注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Angle?: number
  /**
   * AI算法识别处理后的图片高度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Height?: number
  /**
   * AI算法识别处理后的图片宽度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * 图片的原始高度，输入PDF文件则表示单页PDF转图片之后的图片高度
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginHeight?: number
  /**
   * 图片的原始宽度，输入PDF文件则表示单页PDF转图片之后的图片宽度
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginWidth?: number
  /**
   * 文档元素信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elements?: Array<DocumentElement>
  /**
   * 旋转角度

注意：此字段可能返回 null，表示取不到有效值。
   */
  RotatedAngle?: number
}

/**
 * LicensePlateOCR请求参数结构体
 */
export interface LicensePlateOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * GeneralBasicOCR请求参数结构体
 */
export interface GeneralBasicOCRRequest {
  /**
   * 图片/PDF的 Base64 值。要求图片/PDF经Base64编码后不超过 10M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片/PDF的 Url 地址。要求图片/PDF经Base64编码后不超过 10M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 保留字段。
   */
  Scene?: string
  /**
   * 识别语言类型。
支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。
可选值：
zh：中英混合
zh_rare：支持英文、数字、中文生僻字、繁体字，特殊符号等
auto：自动
mix：多语言混排场景中,自动识别混合语言的文本
jap：日语
kor：韩语
spa：西班牙语
fre：法语
ger：德语
por：葡萄牙语
vie：越语
may：马来语
rus：俄语
ita：意大利语
hol：荷兰语
swe：瑞典语
fin：芬兰语
dan：丹麦语
nor：挪威语
hun：匈牙利语
tha：泰语
hi：印地语
ara：阿拉伯语
   */
  LanguageType?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否返回单字信息，默认关
   */
  IsWords?: boolean
}

/**
 * 行驶证副页正面的识别结果
 */
export interface TextVehicleBack {
  /**
   * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlateNo?: string
  /**
   * 档案编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileNo?: string
  /**
   * 核定人数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowNum?: string
  /**
   * 总质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalMass?: string
  /**
   * 整备质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurbWeight?: string
  /**
   * 核定载质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadQuality?: string
  /**
   * 外廓尺寸
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalSize?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Marks?: string
  /**
   * 检验记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Record?: string
  /**
   * 准牵引总质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalQuasiMass?: string
  /**
   * 副页编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubPageCode?: string
  /**
   * 燃料种类

注意：此字段可能返回 null，表示取不到有效值。
   */
  FuelType?: string
  /**
   * 住址
   */
  AddressElectronic?: string
  /**
   * 发证机关
   */
  IssueAuthorityElectronic?: string
}

/**
 * ReconstructDocument返回参数结构体
 */
export interface ReconstructDocumentResponse {
  /**
   * 识别生成的Markdown文件base64编码的字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkdownBase64?: string
  /**
   * 输入文件中嵌入的图片放在一个文件夹中打包为.zip压缩文件，识别生成的Markdown文件通过路径关联插入本文件夹中的图片。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsetImagePackage?: string
  /**
   * 输入文件中嵌入的图片中文字内容的识别结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocumentRecognizeInfo?: Array<DocumentRecognizeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GeneralEfficientOCR请求参数结构体
 */
export interface GeneralEfficientOCRRequest {
  /**
   * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * AdvertiseOCR请求参数结构体
 */
export interface AdvertiseOCRRequest {
  /**
   * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 航空运输电子客票行程单信息
 */
export interface AirTicketInfo {
  /**
   * 旅客姓名
   */
  PassengerName?: string
  /**
   * 有效身份证件号码
   */
  ValidIdNumber?: string
  /**
   * 签注
   */
  Endorsement?: string
  /**
   * GP单号
   */
  NumberOfGPOrder?: string
  /**
   * 发票号码
   */
  ElectronicInvoiceAirTransportReceiptNumber?: string
  /**
   * 机票详细信息元组
   */
  DetailInformationOfAirTicketTuple?: Array<DetailInformationOfAirTicketTupleList>
  /**
   * 票价
   */
  Fare?: string
  /**
   * 燃油附加费
   */
  FuelSurcharge?: string
  /**
   * 增值税税率
   */
  VatRate?: string
  /**
   * 增值税税额
   */
  VatTaxAmount?: string
  /**
   * 民航发展基金
   */
  CivilAviationDevelopmentFund?: string
  /**
   * 其他税费
   */
  OtherTaxes?: string
  /**
   * 合计
   */
  TotalAmount?: string
  /**
   * 电子客票号码
   */
  ElectronicTicketNum?: string
  /**
   * 验证码
   */
  VerificationCode?: string
  /**
   * 提示信息
   */
  PromptInformation?: string
  /**
   * 保险费
   */
  Insurance?: string
  /**
   * 销售网点代号
   */
  AgentCode?: string
  /**
   * 填开单位
   */
  IssueParty?: string
  /**
   * 填开时间
   */
  IssueDate?: string
  /**
   * 开具状态
   */
  IssuingStatus?: string
  /**
   * 国内国际标识
   */
  MarkingOfDomesticOrInternational?: string
  /**
   * 购买方名称
   */
  NameOfPurchaser?: string
  /**
   * 销售方名称
   */
  NameOfSeller?: string
  /**
   * 统一社会信用代码
   */
  UnifiedSocialCreditCodeOfPurchaser?: string
}

/**
 * RideHailingDriverLicenseOCR返回参数结构体
 */
export interface RideHailingDriverLicenseOCRResponse {
  /**
   * 姓名
   */
  Name?: string
  /**
   * 证号，对应网约车驾驶证字段：证号/从业资格证号/驾驶员证号/身份证号
   */
  LicenseNumber?: string
  /**
   * 有效起始日期
   */
  StartDate?: string
  /**
   * 有效期截止时间，对应网约车驾驶证字段：有效期至/营运期限止
   */
  EndDate?: string
  /**
   * 初始发证日期，对应网约车驾驶证字段：初始领证日期/发证日期
   */
  ReleaseDate?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImageEnhancement请求参数结构体
 */
export interface ImageEnhancementRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 默认为空，ReturnImage的取值以及含义如下：
“preprocess”: 返回预处理后的图片数据
“origin”：返回原图片数据
" ":不返回图片数据
   */
  ReturnImage?: string
  /**
   * 默认值为1，指定图像增强方法：
1：切边增强
2：弯曲矫正
202：黑白模式
204：提亮模式
205：灰度模式
207：省墨模式
208：文字锐化（适合非彩色图片）
300:自动增强（自动从301～304选择任务类型）
301：去摩尔纹
302：去除阴影
303：去除模糊 
304：去除过曝
   */
  TaskType?: number
}

/**
 * EnglishOCR请求参数结构体
 */
export interface EnglishOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。像素须介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。

   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。像素须介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 单词四点坐标开关，开启可返回图片中单词的四点坐标。
该参数默认值为false。
   */
  EnableCoordPoint?: boolean
  /**
   * 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。
该参数默认值为false。
   */
  EnableCandWord?: boolean
  /**
   * 预处理开关，功能是检测图片倾斜的角度，将原本倾斜的图片矫正。该参数默认值为true。
   */
  Preprocess?: boolean
}

/**
 * VatInvoiceVerify返回参数结构体
 */
export interface VatInvoiceVerifyResponse {
  /**
   * 增值税发票信息，详情请点击左侧链接。
   */
  Invoice?: VatInvoice
  /**
   * 机动车销售统一发票信息
   */
  VehicleInvoiceInfo?: VehicleInvoiceInfo
  /**
   * 二手车销售统一发票信息
   */
  UsedVehicleInvoiceInfo?: UsedVehicleInvoiceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 电子发票返回值
 */
export interface VatElectronicInfo {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 税前金额
   */
  PretaxAmount?: string
  /**
   * 合计税额
   */
  Tax?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 销售方纳税人识别号
   */
  SellerTaxID?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 开票人
   */
  Issuer?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 小计金额
   */
  SubTotal?: string
  /**
   * 小计税额
   */
  SubTax?: string
  /**
   * 电子发票详细条目信息
   */
  VatElectronicItems?: Array<VatElectronicItemInfo>
  /**
   * 业务类型标志
   */
  ServiceTypeLabel?: string
  /**
   * 价税合计(大写)前符号
   */
  TotalCnMark?: string
  /**
   * 价税合计(小写)前字样
   */
  TotalMark?: string
  /**
   * 合计金额前字样
   */
  PretaxAmountMark?: string
  /**
   * 合计税额前字样
   */
  TaxMark?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
}

/**
 * RecognizeValidIDCardOCR返回参数结构体
 */
export interface RecognizeValidIDCardOCRResponse {
  /**
   * 卡证类型
身份证人像面
身份证国徽面

临时身份证人像面
临时身份证人像面

港澳台居住证人像面
港澳台居住证国徽面

外国人永久居留证人像面
外国人永久居留证国徽面
   */
  Type?: string
  /**
   * 身份证信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IDCardInfo?: IDCardInfo
  /**
   * 临时身份证信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemporaryIDCardInfo?: TemporaryIDCardInfo
  /**
   * 港澳台居住证信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResidencePermitInfo?: ResidencePermitInfo
  /**
   * 外国人永久居留证信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PermanentResidencePermitInfo?: PermanentResidencePermitInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 识别出来的单字信息包括单字（包括单字Character和单字置信度confidence）
 */
export interface DetectedWords {
  /**
   * 置信度 0 ~100
   */
  Confidence: number
  /**
   * 候选字Character
   */
  Character: string
}

/**
 * 身份证信息返回
 */
export interface IDCardInfo {
  /**
   * 姓名（人像面）
   */
  Name?: ContentInfo
  /**
   * 性别（人像面）
   */
  Sex?: ContentInfo
  /**
   * 民族（人像面）
   */
  Nation?: ContentInfo
  /**
   * 出生日期（人像面）
   */
  Birth?: ContentInfo
  /**
   * 地址（人像面）
   */
  Address?: ContentInfo
  /**
   * 公民身份号码（人像面）
   */
  IdNum?: ContentInfo
  /**
   * 发证机关（国徽面）
   */
  Authority?: ContentInfo
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: ContentInfo
  /**
   * WarnInfos，告警信息
   */
  WarnInfos?: CardWarnInfo
  /**
   * IdCard，裁剪后身份证照片的base64编码，请求 EnableCropImage 时返回；
   */
  CardImage?: ContentInfo
  /**
   * Portrait，身份证头像照片的base64编码，请求 EnablePortrait 时返回；
   */
  PortraitImage?: ContentInfo
}

/**
 * IDCardOCR返回参数结构体
 */
export interface IDCardOCRResponse {
  /**
   * 姓名（人像面）
   */
  Name?: string
  /**
   * 性别（人像面）
   */
  Sex?: string
  /**
   * 民族（人像面）
   */
  Nation?: string
  /**
   * 出生日期（人像面）
   */
  Birth?: string
  /**
   * 地址（人像面）
   */
  Address?: string
  /**
   * 身份证号（人像面）
   */
  IdNum?: string
  /**
   * 发证机关（国徽面）
   */
  Authority?: string
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: string
  /**
   * 扩展信息，不请求则不返回，具体输入参考示例3和示例4。
IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；
Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；

Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0 ~ 100，分数越低越模糊，建议阈值≥50）;
BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0 ~ 100，分数越低边框遮挡可能性越低，建议阈值≤50）;

WarnInfos，告警信息，Code 告警码列表和释义：
-9100 身份证有效日期不合法告警，
-9101 身份证边框不完整告警，

-9102 身份证复印件告警（黑白及彩色复印件）,
-9108 身份证复印件告警（仅黑白复印件），

-9103 身份证翻拍告警，
-9105 身份证框内遮挡告警，
-9104 临时身份证告警，
-9106 身份证疑似存在PS痕迹告警，
-9107 身份证反光告警。
   */
  AdvancedInfo?: string
  /**
   * 反光点覆盖区域详情结果，具体内容请点击左侧链接
   */
  ReflectDetailInfos?: Array<ReflectDetailInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 轮船票字段信息
 */
export interface ShipInvoiceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、省、市、币种。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * 医疗发票识别结果
 */
export interface MedicalInvoiceItem {
  /**
   * 识别出的字段名称
<table><tr><td>分类</td><td>name</td></tr><tr><td>票据基本信息</td><td>发票名称</td></tr><tr><td></td><td>票据代码</td></tr><tr><td></td><td>票据号码</td></tr><tr><td></td><td>电子票据代码</td></tr><tr><td></td><td>电子票据号码</td></tr><tr><td></td><td>交款人统一社会信用代码</td></tr><tr><td></td><td>校验码</td></tr><tr><td></td><td>交款人</td></tr><tr><td></td><td>开票日期</td></tr><tr><td></td><td>收款单位</td></tr><tr><td></td><td>复核人</td></tr><tr><td></td><td>收款人</td></tr><tr><td></td><td>业务流水号</td></tr><tr><td></td><td>门诊号</td></tr><tr><td></td><td>就诊日期</td></tr><tr><td></td><td>医疗机构类型</td></tr><tr><td></td><td>医保类型</td></tr><tr><td></td><td>医保编号</td></tr><tr><td></td><td>性别</td></tr><tr><td></td><td>医保统筹基金支付</td></tr><tr><td></td><td>其他支付</td></tr><tr><td></td><td>个人账户支付</td></tr><tr><td></td><td>个人现金支付</td></tr><tr><td></td><td>个人自付</td></tr><tr><td></td><td>个人自费</td></tr><tr><td></td><td>病历号</td></tr><tr><td></td><td>住院号</td></tr><tr><td></td><td>住院科别</td></tr><tr><td></td><td>住院时间</td></tr><tr><td></td><td>预缴金额</td></tr><tr><td></td><td>补缴金额</td></tr><tr><td></td><td>退费金额</td></tr><tr><td></td><td>发票属地</td></tr><tr><td></td><td>发票类型</td></tr><tr><td>总金额</td><td>总金额大写</td></tr><tr><td></td><td>总金额小写</td></tr><tr><td>收费大项</td><td>大项名称</td></tr><tr><td></td><td>大项金额</td></tr><tr><td>收费细项</td><td>项目名称</td></tr><tr><td></td><td>数量</td></tr><tr><td></td><td>单位</td></tr><tr><td></td><td>金额</td></tr><tr><td></td><td>备注</td></tr><tr><td>票据其他信息</td><td>入院时间</td></tr><tr><td></td><td>出院时间</td></tr><tr><td></td><td>住院天数</td></tr><tr><td></td><td>自付二</td></tr><tr><td></td><td>自付一</td></tr><tr><td></td><td>起付金额</td></tr><tr><td></td><td>超封顶金额</td></tr><tr><td></td><td>自费</td></tr><tr><td></td><td>本次医保范围内金额</td></tr><tr><td></td><td>累计医保内范围金额</td></tr><tr><td></td><td>门诊大额支付</td></tr><tr><td></td><td>残军补助支付</td></tr><tr><td></td><td>年度门诊大额累计支付</td></tr><tr><td></td><td>单位补充险[原公疗]支付</td></tr><tr><td></td><td>社会保障卡号</td></tr><tr><td></td><td>姓名</td></tr><tr><td></td><td>交易流水号</td></tr><tr><td></td><td>本次支付后个人账户余额</td></tr><tr><td></td><td>基金支付</td></tr><tr><td></td><td>现金支付</td></tr><tr><td></td><td>复核</td></tr><tr><td></td><td>自负</td></tr><tr><td></td><td>结算方式</td></tr><tr><td></td><td>医保统筹/公医记账</td></tr><tr><td></td><td>其他</td></tr><tr><td></td><td>个人支付金额</td></tr><tr><td></td><td>欠费</td></tr><tr><td></td><td>退休补充支付</td></tr><tr><td></td><td>医院类型</td></tr><tr><td></td><td>退款</td></tr><tr><td></td><td>补收</td></tr><tr><td></td><td>附加支付</td></tr><tr><td></td><td>分类自负</td></tr><tr><td></td><td>其它</td></tr><tr><td></td><td>预交款</td></tr><tr><td></td><td>个人缴费</td></tr></table>
   */
  Name: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果
   */
  Content: string
  /**
   * 识别出的文本行四点坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vertex: Polygon
  /**
   * 识别出的文本行在旋转纠正之后的图像中的像素坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Coord: Rect
}

/**
 * GeneralAccurateOCR请求参数结构体
 */
export interface GeneralAccurateOCRRequest {
  /**
   * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否返回单字信息，默认关
   */
  IsWords?: boolean
  /**
   * 是否开启原图切图检测功能，开启后可提升“整图面积大，但单字符占比面积小”（例如：试卷）场景下的识别效果，默认关
   */
  EnableDetectSplit?: boolean
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 文本检测开关，默认为true。设置为false可直接进行单行识别，适用于仅包含正向单行文本的图片场景。
   */
  EnableDetectText?: boolean
}

/**
 * OrgCodeCertOCR请求参数结构体
 */
export interface OrgCodeCertOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * RecognizeFormulaOCR请求参数结构体
 */
export interface RecognizeFormulaOCRRequest {
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * FlightInvoiceOCR返回参数结构体
 */
export interface FlightInvoiceOCRResponse {
  /**
   * 机票行程单识别结果，具体内容请点击左侧链接。
   */
  FlightInvoiceInfos?: Array<FlightInvoiceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ShipInvoiceOCR返回参数结构体
 */
export interface ShipInvoiceOCRResponse {
  /**
   * 轮船票识别结果，具体内容请点击左侧链接。
   */
  ShipInvoiceInfos?: Array<ShipInvoiceInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReconstructDocument请求参数结构体
 */
export interface ReconstructDocumentRequest {
  /**
   * PDF,Image
   */
  FileType: string
  /**
   * 图片的 Base64 值。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经Base64编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
   */
  FileBase64?: string
  /**
   * 图片的 Url 地址。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经 Base64 编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  FileUrl?: string
  /**
   * 当传入文件是PDF类型（IsPdf=true）时，用来指定pdf识别的起始页码，识别的页码包含当前值。
   */
  FileStartPageNumber?: number
  /**
   * 当传入文件是PDF类型（IsPdf=true）时，用来指定pdf识别的结束页码，识别的页码包含当前值。
单次调用，最多支持10页pdf的智能识别。
   */
  FileEndPageNumber?: number
  /**
   * 配置选项，支持配置是否在生成的Markdown中是否嵌入图片
   */
  Config?: ReconstructDocumentConfig
}

/**
 * VatInvoiceVerifyNew请求参数结构体
 */
export interface VatInvoiceVerifyNewRequest {
  /**
   * 发票号码，8位、20位（全电票）
   */
  InvoiceNo: string
  /**
   * 开票日期（不支持当天发票查询，支持五年以内开具的发票），格式：“YYYY-MM-DD”，如：2019-12-20。
   */
  InvoiceDate: string
  /**
   * 发票代码（10或12 位），全电发票为空。查验超过5次后当日无法再查。
   */
  InvoiceCode?: string
  /**
   * 票种类型 01:增值税专用发票， 02:货运运输业增值税专用发 票， 03:机动车销售统一发票， 04:增值税普通发票， 08:增值税电子专用发票(含全电)， 10:增值税电子普通发票(含全电)， 11:增值税普通发票(卷式)， 14:增值税电子(通行费)发 票， 15:二手车销售统一发票，16:财务发票， 32:深圳区块链发票(云南区块链因业务调整现已下线)。
   */
  InvoiceKind?: string
  /**
   * 校验码后 6 位，增值税普通发票、增值税电子普通发票、增值税普通发票(卷式)、增值税电子普通发票(通行费)、全电纸质发票（增值税普通发票）、财政票据时必填;
区块链为 5 位
   */
  CheckCode?: string
  /**
   * 不含税金额，增值税专用发票、增值税电子专用发票、机动车销售统一发票、二手车销售统一发票、区块链发票、财政发票时必填; 全电发票为价税合计(含税金额)
   */
  Amount?: string
  /**
   * 地区编码，通用机打电子发票时必填。
广东:4400，浙江:3300
   */
  RegionCode?: string
  /**
   * 销方税号，通用机打电子发票必填，区块链发票时必填
   */
  SellerTaxCode?: string
  /**
   * 是否开启通用机打电子发票，默认为关闭。
   */
  EnableCommonElectronic?: boolean
  /**
   * 是否允许查验当日发票，默认值为false。请注意，发票从开具到录入税局需要一定的时间来更新和验证发票信息，打开后仅支持查验已成功录入到税局中的当日发票。
   */
  EnableTodayInvoice?: boolean
}

/**
 * InstitutionOCR请求参数结构体
 */
export interface InstitutionOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 购车发票识别结果
 */
export interface CarInvoiceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
发票代码、 机打代码、 发票号码、 发动机号码、 合格证号、 机打号码、 价税合计(小写)、 销货单位名称、 身份证号码/组织机构代码、 购买方名称、 销售方纳税人识别号、 购买方纳税人识别号、主管税务机关、 主管税务机关代码、 开票日期、 不含税价(小写)、 吨位、增值税税率或征收率、 车辆识别代号/车架号码、 增值税税额、 厂牌型号、 省、 市、 发票消费类型、 销售方电话、 销售方账号、 产地、 进口证明书号、 车辆类型、 机器编号、备注、开票人、限乘人数、商检单号、销售方地址、销售方开户银行、价税合计、发票类型。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
   */
  Value?: string
  /**
   * 字段在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
  /**
   * 字段在原图中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon?: Polygon
}

/**
 * 机票行程单识别结果
 */
export interface FlightInvoiceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
票价、合计金额、填开日期、有效身份证件号码、电子客票号码、验证码、旅客姓名、填开单位、其他税费、燃油附加费、民航发展基金、保险费、销售单位代号、始发地、目的地、航班号、时间、日期、座位等级、承运人、发票消费类型、国内国际标签、印刷序号、客票级别/类别、客票生效日期、有效期截止日期、免费行李。
   */
  Name: string
  /**
   * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
   */
  Value: string
  /**
   * 多个行程的字段所在行号，下标从0开始，非行字段或未能识别行号的该值返回-1。
   */
  Row: number
}

/**
 * 机票详细信息元组
 */
export interface DetailInformationOfAirTicketTupleList {
  /**
   * 出发站（自）
   */
  DepartureStation?: string
  /**
   * 目的地（至）
   */
  DestinationStation?: string
  /**
   * 航班
   */
  FlightSegment?: string
  /**
   * 航班
   */
  Carrier?: string
  /**
   * 航班号
   */
  Flight?: string
  /**
   * 座位等级
   */
  SeatClass?: string
  /**
   * 日期
   */
  CarrierDate?: string
  /**
   * 时间
   */
  DepartureTime?: string
  /**
   * 客票级别/客票类别
   */
  FareBasis?: string
  /**
   * 客票生效日期
   */
  EffectiveDate?: string
  /**
   * 有效截止日期
   */
  ExpirationDate?: string
  /**
   * 免费行李
   */
  FreeBaggageAllowance?: string
}

/**
 * 行驶证主页正面的识别结果
 */
export interface TextVehicleFront {
  /**
   * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlateNo: string
  /**
   * 车辆类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VehicleType: string
  /**
   * 所有人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner: string
  /**
   * 住址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address: string
  /**
   * 使用性质
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseCharacter: string
  /**
   * 品牌型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: string
  /**
   * 车辆识别代号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vin: string
  /**
   * 发动机号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNo: string
  /**
   * 注册日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegisterDate: string
  /**
   * 发证日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IssueDate: string
  /**
   * 印章
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seal: string
}

/**
 * 广告文字识别结果
 */
export interface AdvertiseTextDetection {
  /**
   * 识别出的文本行内容
   */
  DetectedText: string
  /**
   * 置信度 0 ~100
   */
  Confidence: number
  /**
   * 文本行坐标，以四个顶点坐标表示
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
   */
  AdvancedInfo: string
}

/**
 * 表格识别结果
 */
export interface TextTable {
  /**
   * 单元格左上角的列索引
   */
  ColTl: number
  /**
   * 单元格左上角的行索引
   */
  RowTl: number
  /**
   * 单元格右下角的列索引
   */
  ColBr: number
  /**
   * 单元格右下角的行索引
   */
  RowBr: number
  /**
   * 单元格文字
   */
  Text: string
  /**
   * 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种
   */
  Type: string
  /**
   * 置信度 0 ~100
   */
  Confidence: number
  /**
   * 文本行坐标，以四个顶点坐标表示
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段
   */
  AdvancedInfo: string
}

/**
 * 金融票据切片识别单个字段的内容
 */
export interface FinanBillSliceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
大写金额、小写金额、账号、票号1、票号2、收款人、大写日期、同城交换号、地址-省份、地址-城市、付款行全称、支票密码、支票用途。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
}

/**
 * 敏感数据加密
 */
export interface Encryption {
  /**
   * 有加密需求的用户，接入传入kms的CiphertextBlob（Base64编码），关于数据加密可查阅[敏感数据加密指引](https://cloud.tencent.com/document/product/866/106048)文档。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CiphertextBlob: string
  /**
   * 有加密需求的用户，传入CBC加密的初始向量（客户自定义字符串，长度16字符，Base64编码）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Iv: string
  /**
   * 加密使用的算法（支持'AES-256-CBC'、'SM4-GCM'），不传默认为'AES-256-CBC'
注意：此字段可能返回 null，表示取不到有效值。
   */
  Algorithm?: string
  /**
   * SM4-GCM算法生成的消息摘要（校验消息完整性时使用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<string>
  /**
   * 在使用加密服务时，指定要被加密的字段。本接口默认为EncryptedBody
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptList?: Array<string>
}

/**
 * ArithmeticOCR请求参数结构体
 */
export interface ArithmeticOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 用于选择是否支持横屏拍摄。打开则支持横屏拍摄图片角度判断，角度信息在返回参数的angle中，默认值为true
   */
  SupportHorizontalImage?: boolean
  /**
   * 是否拒绝非速算图，打开则拒绝非速算图(注：非速算图是指风景人物等明显不是速算图片的图片)，默认值为false
   */
  RejectNonArithmeticPic?: boolean
  /**
   * 是否展开耦合算式中的竖式计算，默认值为false
   */
  EnableDispRelatedVertical?: boolean
  /**
   * 是否展示竖式算式的中间结果和格式控制字符，默认值为false
   */
  EnableDispMidResult?: boolean
  /**
   * 是否开启pdf识别，默认值为true
   */
  EnablePdfRecognize?: boolean
  /**
   * pdf页码，从0开始，默认为0
   */
  PdfPageIndex?: number
}

/**
 * 非税收入
 */
export interface NonTaxIncomeBill {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 交款人名称
   */
  Buyer?: string
  /**
   * 交款人纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 收款人名称
   */
  Seller?: string
  /**
   * 收款单位名称
   */
  SellerCompany?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 币种
   */
  CurrencyCode?: string
  /**
   * 复核人
   */
  Reviewer?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 其他信息
   */
  OtherInfo?: string
  /**
   * 缴款码
   */
  PaymentCode?: string
  /**
   * 执收单位编码
   */
  ReceiveUnitCode?: string
  /**
   * 执收单位名称
   */
  Receiver?: string
  /**
   * 经办人
   */
  Operator?: string
  /**
   * 付款人账号
   */
  PayerAccount?: string
  /**
   * 付款人开户银行
   */
  PayerBank?: string
  /**
   * 收款人账号
   */
  ReceiverAccount?: string
  /**
   * 收款人开户银行
   */
  ReceiverBank?: string
  /**
   * 条目
   */
  NonTaxItems?: Array<NonTaxItem>
}

/**
 * VerifyOfdVatInvoiceOCR请求参数结构体
 */
export interface VerifyOfdVatInvoiceOCRRequest {
  /**
   * OFD文件的 Url 地址。
   */
  OfdFileUrl?: string
  /**
   * OFD文件的 Base64 值。
OfdFileUrl 和 OfdFileBase64 必传其一，若两者都传，只解析OfdFileBase64。
   */
  OfdFileBase64?: string
  /**
   * 需要识别的OFD发票页面的对应页码，默认值为1。 示例值：1
   */
  OfdPageNumber?: number
}

/**
 * FinanBillSliceOCR请求参数结构体
 */
export interface FinanBillSliceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * ClassifyStoreName返回参数结构体
 */
export interface ClassifyStoreNameResponse {
  /**
   * 门头照标签
   */
  StoreLabel?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VatRollInvoiceOCR请求参数结构体
 */
export interface VatRollInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 机票行程单
 */
export interface AirTransport {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 电子客票号码
   */
  Number?: string
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 印刷序号
   */
  SerialNumber?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 销售单位代号
   */
  AgentCode?: string
  /**
   * 销售单位代号第一行
   */
  AgentCodeFirst?: string
  /**
   * 销售单位代号第二行
   */
  AgentCodeSecond?: string
  /**
   * 姓名
   */
  UserName?: string
  /**
   * 身份证号
   */
  UserID?: string
  /**
   * 填开单位
   */
  Issuer?: string
  /**
   * 票价
   */
  Fare?: string
  /**
   * 合计税额
   */
  Tax?: string
  /**
   * 燃油附加费
   */
  FuelSurcharge?: string
  /**
   * 民航发展基金
   */
  AirDevelopmentFund?: string
  /**
   * 保险费
   */
  Insurance?: string
  /**
   * 合计金额（小写）
   */
  Total?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 国内国际标签
   */
  DomesticInternationalTag?: string
  /**
   * 客票生效日期
   */
  DateStart?: string
  /**
   * 有效截至日期
   */
  DateEnd?: string
  /**
   * 签注
   */
  Endorsement?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 条目
   */
  FlightItems?: Array<FlightItem>
  /**
   * 提示信息
   */
  PromptInformation?: string
  /**
   * 统一社会信用代码/纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 发票号码
   */
  ReceiptNumber?: string
  /**
   * 开票状态
   */
  InvoiceStatus?: string
  /**
   * 增值税税率
   */
  TaxRate?: string
  /**
   * 增值税税额
   */
  TaxAmount?: string
}

/**
 * 表格标题
 */
export interface TableTitle {
  /**
   * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text: string
}

/**
 * RecognizeTableAccurateOCR请求参数结构体
 */
export interface RecognizeTableAccurateOCRRequest {
  /**
   * 图片/PDF的 Base64 值。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片支持的像素范围：需介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片/PDF的 Url 地址。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片支持的像素范围：需介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定
性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 坐标
 */
export interface Coord {
  /**
   * 横坐标
   */
  X?: number
  /**
   * 纵坐标
   */
  Y?: number
}

/**
 * SealOCR返回参数结构体
 */
export interface SealOCRResponse {
  /**
   * 印章内容
   */
  SealBody?: string
  /**
   * 印章坐标
   */
  Location?: Rect
  /**
   * 其它文本内容
   */
  OtherTexts?: Array<string>
  /**
   * 全部印章信息
   */
  SealInfos?: Array<SealInfo>
  /**
   * 印章类型，表示为：
圆形印章：0
椭圆形印章：1
方形印章：2
菱形印章：3
三角形印章：4
   */
  SealShape?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 识别出的字段
 */
export interface DutyPaidProofInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
税号 、纳税人识别号 、纳税人名称 、金额合计大写 、金额合计小写 、填发日期 、税务机关 、填票人。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * FinanBillOCR返回参数结构体
 */
export interface FinanBillOCRResponse {
  /**
   * 金融票据整单识别结果，具体内容请点击左侧链接。
   */
  FinanBillInfos?: Array<FinanBillInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeHealthCodeOCR请求参数结构体
 */
export interface RecognizeHealthCodeOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 需要识别的健康码类型列表，为空或不填表示默认为自动识别。
0:自动识别
   */
  Type?: number
}

/**
 * BankSlipOCR返回参数结构体
 */
export interface BankSlipOCRResponse {
  /**
   * 银行回单识别结果，具体内容请点击左侧链接。
   */
  BankSlipInfos?: Array<BankSlipInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeEncryptedIDCardOCR返回参数结构体
 */
export interface RecognizeEncryptedIDCardOCRResponse {
  /**
   * 姓名（人像面）
   */
  Name?: string
  /**
   * 性别（人像面）
   */
  Sex?: string
  /**
   * 民族（人像面）
   */
  Nation?: string
  /**
   * 出生日期（人像面）
   */
  Birth?: string
  /**
   * 地址（人像面）
   */
  Address?: string
  /**
   * 身份证号（人像面）
   */
  IdNum?: string
  /**
   * 发证机关（国徽面）
   */
  Authority?: string
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: string
  /**
   * 扩展信息，不请求则不返回，具体输入参考示例3和示例4。
IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；
Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；

Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0 ~ 100，分数越低越模糊，建议阈值≥50）;
BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0 ~ 100，分数越低边框遮挡可能性越低，建议阈值≤50）;

WarnInfos，告警信息，Code 告警码列表和释义：
-9100 身份证有效日期不合法告警，
-9101 身份证边框不完整告警，

-9102 身份证复印件告警（黑白及彩色复印件）,
-9108 身份证复印件告警（仅黑白复印件），

-9103 身份证翻拍告警，
-9105 身份证框内遮挡告警，
-9104 临时身份证告警，
-9106 身份证疑似存在PS痕迹告警，
-9107 身份证反光告警。
   */
  AdvancedInfo?: string
  /**
   * 反光点覆盖区域详情结果，具体内容请点击左侧链接
   */
  ReflectDetailInfos?: Array<ReflectDetailInfo>
  /**
   * 加密后的数据（Base64编码）
   */
  EncryptedBody?: string
  /**
   * 敏感数据加密信息
   */
  Encryption?: Encryption
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通行费发票信息
 */
export interface PassInvoiceInfo {
  /**
   * 通行费车牌号
   */
  NumberPlate: string
  /**
   * 通行费类型
   */
  Type: string
  /**
   * 通行日期起
   */
  PassDateBegin: string
  /**
   * 通行日期止
   */
  PassDateEnd: string
  /**
   * 税收分类编码
   */
  TaxClassifyCode: string
}

/**
 * 试题识别结构化信息
 */
export interface QuestionObj {
  /**
   * 题号
   */
  QuestionTextNo: string
  /**
   * 题型：
1: "选择题"
2: "填空题"
3: "解答题"
   */
  QuestionTextType: number
  /**
   * 题干
   */
  QuestionText: string
  /**
   * 选择题选项，包含1个或多个option
   */
  QuestionOptions: string
  /**
   * 所有子题的question属性
   */
  QuestionSubquestion: string
  /**
   * 示意图检测框在的图片中的像素坐标
   */
  QuestionImageCoords: Array<Rect>
}

/**
 * 表格内容检测
 */
export interface TableInfo {
  /**
   * 单元格内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cells?: Array<TableCellInfo>
  /**
   * 图像中的文本块类型：0为非表格文本、1为有线表格、2为无线表格，
有线表格：在表格内部，有横线/竖线纵跨整个表格的宽/高；
无线表格：在表格内部，无横线/竖线纵跨整个表格的宽/高。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 表格主体四个顶点坐标（依次为左上角，
右上角，右下角，左下角）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableCoordPoint?: Array<Coord>
}

/**
 * VinOCR返回参数结构体
 */
export interface VinOCRResponse {
  /**
   * 检测到的车辆 VIN 码。
   */
  Vin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EduPaperOCR请求参数结构体
 */
export interface EduPaperOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 扩展配置信息。
配置格式：{"option1":value1,"option2":value2}
1. task_type：任务类型【0: 关闭版式分析与处理 1: 开启版式分析处理】可选参数，Int32类型，默认值为1
2. is_structuralization：是否结构化输出【true：返回包体同时返回通用和结构化输出  false：返回包体返回通用输出】 可选参数，Bool类型，默认值为true
3. if_readable_format：是否按照版式整合通用文本/公式输出结果 可选参数，Bool类型，默认值为false
示例：
{"task_type": 1,"is_structuralization": true,"if_readable_format": true}
   */
  Config?: string
}

/**
 * FormulaOCR请求参数结构体
 */
export interface FormulaOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 文字识别结果
 */
export interface TextGeneralHandwriting {
  /**
   * 识别出的文本行内容
   */
  DetectedText: string
  /**
   * 置信度 0 - 100
   */
  Confidence: number
  /**
   * 文本行坐标，以四个顶点坐标表示
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段。
能返回文本行的段落信息，例如：{\"Parag\":{\"ParagNo\":2}}，
其中ParagNo为段落行，从1开始。
   */
  AdvancedInfo: string
  /**
   * 字的坐标数组，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
   */
  WordPolygon: Array<Polygon>
}

/**
 * PassportOCR请求参数结构体
 */
export interface PassportOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 默认填写CN
支持中国大陆地区护照。
   */
  Type?: string
  /**
   * 是否返回头像和位置坐标
   */
  CropPortrait?: boolean
}

/**
 * DutyPaidProofOCR请求参数结构体
 */
export interface DutyPaidProofOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * RecognizeHealthCodeOCR返回参数结构体
 */
export interface RecognizeHealthCodeOCRResponse {
  /**
   * 持码人姓名，如：王*（允许返回空值）
   */
  Name?: string
  /**
   * 持码人身份证号，如：11**************01（允许返回空值）
   */
  IDNumber?: string
  /**
   * 健康码更新时间（允许返回空值）
   */
  Time?: string
  /**
   * 健康码颜色：绿色、黄色、红色（允许返回空值）
   */
  Color?: string
  /**
   * 核酸检测间隔时长（允许返回空值）
   */
  TestingInterval?: string
  /**
   * 核酸检测结果：阴性、阳性、暂无核酸检测记录（允许返回空值）
   */
  TestingResult?: string
  /**
   * 核酸检测时间（允许返回空值）
   */
  TestingTime?: string
  /**
   * 疫苗接种信息，返回接种针数或接种情况（允许返回空值）
   */
  Vaccination?: string
  /**
   * 场所名称（允许返回空值）
   */
  SpotName?: string
  /**
   * 疫苗接种时间
   */
  VaccinationTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按行输出，行序号
 */
export interface LineInfo {
  /**
   * 每行的一个元素
   */
  Lines?: Array<ItemInfo>
}

/**
 * RecognizeEncryptedIDCardOCR请求参数结构体
 */
export interface RecognizeEncryptedIDCardOCRRequest {
  /**
   * 请求体被加密后的密文（Base64编码），本接口只支持加密传输
   */
  EncryptedBody: string
  /**
   * 敏感数据加密信息。对传入信息有加密需求的用户可使用此参数，详情请点击左侧链接。
   */
  Encryption: Encryption
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * FRONT：身份证有照片的一面（人像面），
BACK：身份证有国徽的一面（国徽面），
该参数如果不填，将为您自动判断身份证正反面。
   */
  CardSide?: string
  /**
   * 以下可选字段均为bool 类型，默认false：
CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）
CropPortrait，人像照片裁剪（自动抠取身份证头像区域）
CopyWarn，复印件告警
BorderCheckWarn，边框和框内遮挡告警
ReshootWarn，翻拍告警
DetectPsWarn，疑似存在PS痕迹告警
TempIdWarn，临时身份证告警
InvalidDateWarn，身份证有效日期不合法告警
Quality，图片质量分数（评价图片的模糊程度）
MultiCardDetect，是否开启正反面同框识别（仅支持二代身份证正反页同框识别或临时身份证正反页同框识别）
ReflectWarn，是否开启反光检测

SDK 设置方式参考：
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
API 3.0 Explorer 设置方式参考：
Config = {"CropIdCard":true,"CropPortrait":true}
   */
  Config?: string
  /**
   * 默认值为true，打开识别结果纠正开关。开关开启后，身份证号、出生日期、性别，三个字段会进行矫正补齐，统一结果输出；若关闭此开关，以上三个字段不会进行矫正补齐，保持原始识别结果输出，若原图出现篡改情况，这三个字段的识别结果可能会不统一。
   */
  EnableRecognitionRectify?: boolean
  /**
   * 默认值为false。

此开关需要在反光检测开关开启下才会生效（即此开关生效的前提是config入参里的"ReflectWarn":true），若EnableReflectDetail设置为true，则会返回反光点覆盖区域详情。反光点覆盖区域详情分为四部分：人像照片位置、国徽位置、识别字段位置、其他位置。一个反光点允许覆盖多个区域，且一张图片可能存在多个反光点。
   */
  EnableReflectDetail?: boolean
}

/**
 * 过路过桥费发票
 */
export interface TollInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 日期
   */
  Date?: string
  /**
   * 时间
   */
  Time?: string
  /**
   * 入口
   */
  Entrance?: string
  /**
   * 出口
   */
  Exit?: string
  /**
   * 高速标志（0：没有，1：有）
   */
  HighwayMark?: number
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
}

/**
 * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
 */
export interface ItemCoord {
  /**
   * 左上角x
   */
  X: number
  /**
   * 左上角y
   */
  Y: number
  /**
   * 宽width
   */
  Width: number
  /**
   * 高height
   */
  Height: number
}

/**
 * CreateAIFormTask返回参数结构体
 */
export interface CreateAIFormTaskResponse {
  /**
   * 本次识别任务的唯一身份ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 本次识别任务的操作URL，有效期自生成之时起共24小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MixedInvoiceOCR请求参数结构体
 */
export interface MixedInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 需要识别的票据类型列表，为空或不填表示识别全部类型。
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
15：非税发票
16：全电发票
----------------------
-1：其他发票,（只传入此类型时，图片均采用其他票类型进行识别）
   */
  Types?: Array<number | bigint>
  /**
   * 是否识别其他类型发票，默认为Yes
Yes：识别其他类型发票
No：不识别其他类型发票
   */
  ReturnOther?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否开启PDF多页识别，默认值为false，开启后可同时支持多页PDF的识别返回，仅支持返回文件前30页。开启后IsPDF和PdfPageNumber入参不进行控制。
   */
  ReturnMultiplePage?: boolean
}

/**
 * 轮船票
 */
export interface ShippingInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 姓名
   */
  UserName?: string
  /**
   * 日期
   */
  Date?: string
  /**
   * 时间
   */
  Time?: string
  /**
   * 出发车站
   */
  StationGetOn?: string
  /**
   * 到达车站
   */
  StationGetOff?: string
  /**
   * 票价
   */
  Total?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 币种
   */
  CurrencyCode?: string
}

/**
 * 表格内容检测
 */
export interface TableDetectInfo {
  /**
   * 单元格内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cells: Array<TableCell>
  /**
   * 表格标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Titles: Array<TableTitle>
  /**
   * 图像中的文本块类型，0 为非表格文本，
1 为有线表格，2 为无线表格
（接口暂不支持日文无线表格识别，若传入日文无线表格，返回0）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: number
  /**
   * 表格主体四个顶点坐标（依次为左上角，
右上角，右下角，左下角）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableCoordPoint: Array<Coord>
}

/**
 * 身份证配置信息
 */
export interface IDCardConfig {
  /**
   * 复印件告警，默认为false
   */
  CopyWarn?: boolean
  /**
   * 边框和框内遮挡告警，默认为false
   */
  BorderCheckWarn?: boolean
  /**
   * 翻拍告警，默认为false
   */
  ReshootWarn?: boolean
  /**
   * 疑似存在PS痕迹告警，默认为false
   */
  DetectPsWarn?: boolean
  /**
   * 临时身份证告警，默认为false
   */
  TempIdWarn?: boolean
  /**
   * 身份证有效日期不合法告警，默认为false
   */
  InvalidDateWarn?: boolean
  /**
   * 是否开启反光检测，默认为false
   */
  ReflectWarn?: boolean
}

/**
 * ResidenceBookletOCR返回参数结构体
 */
export interface ResidenceBookletOCRResponse {
  /**
   * 户号
   */
  HouseholdNumber?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 出生地
   */
  BirthPlace?: string
  /**
   * 民族
   */
  Nation?: string
  /**
   * 籍贯
   */
  NativePlace?: string
  /**
   * 出生日期
   */
  BirthDate?: string
  /**
   * 公民身份证件编号
   */
  IdCardNumber?: string
  /**
   * 文化程度
   */
  EducationDegree?: string
  /**
   * 服务处所
   */
  ServicePlace?: string
  /**
   * 户别
   */
  Household?: string
  /**
   * 住址
   */
  Address?: string
  /**
   * 承办人签章文字
   */
  Signature?: string
  /**
   * 签发日期
   */
  IssueDate?: string
  /**
   * 户主页编号
   */
  HomePageNumber?: string
  /**
   * 户主姓名
   */
  HouseholderName?: string
  /**
   * 户主或与户主关系
   */
  Relationship?: string
  /**
   * 本市（县）其他住址
   */
  OtherAddresses?: string
  /**
   * 宗教信仰
   */
  ReligiousBelief?: string
  /**
   * 身高
   */
  Height?: string
  /**
   * 血型
   */
  BloodType?: string
  /**
   * 婚姻状况
   */
  MaritalStatus?: string
  /**
   * 兵役状况
   */
  VeteranStatus?: string
  /**
   * 职业
   */
  Profession?: string
  /**
   * 何时由何地迁来本市(县)
   */
  MoveToCityInformation?: string
  /**
   * 何时由何地迁来本址
   */
  MoveToSiteInformation?: string
  /**
   * 登记日期
   */
  RegistrationDate?: string
  /**
   * 曾用名
   */
  FormerName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增值税普通发票(卷票)
 */
export interface VatInvoiceRoll {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 机打发票号码
   */
  NumberConfirm?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 销售方名称
   */
  Seller?: string
  /**
   * 销售方纳税人识别号
   */
  SellerTaxID?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方纳税人识别号
   */
  BuyerTaxID?: string
  /**
   * 种类
   */
  Category?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 服务类型
   */
  ServiceName?: string
  /**
   * 公司印章内容
   */
  CompanySealContent?: string
  /**
   * 税务局章内容
   */
  TaxSealContent?: string
  /**
   * 条目
   */
  VatRollItems?: Array<VatRollItem>
}

/**
 * CarInvoiceOCR返回参数结构体
 */
export interface CarInvoiceOCRResponse {
  /**
   * 购车发票识别结果，具体内容请点击左侧链接。
   */
  CarInvoiceInfos?: Array<CarInvoiceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VehicleRegCertOCR返回参数结构体
 */
export interface VehicleRegCertOCRResponse {
  /**
   * 机动车登记证书识别结果，具体内容请点击左侧链接。
   */
  VehicleRegCertInfos?: Array<VehicleRegCertInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GeneralFastOCR请求参数结构体
 */
export interface GeneralFastOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * 图片分辨率信息
 */
export interface ImageSize {
  /**
   * 图片的宽，单位像素
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * 图片的高，单位像素
注意：此字段可能返回 null，表示取不到有效值。
   */
  Height?: number
}

/**
 * 文档元素字段
 */
export interface DocumentElement {
  /**
   * 文档元素索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 元素类型，包括paragraph、table、formula、figure、title、header、footer、figure_text

注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 元素内容，当type为figure或formula(公式识别关闭)时该字段内容为图片的位置

注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 元素坐标，左上角(x1, y1)，右上角(x2, y2)，右下角(x3, y3)，左下角(x4, y4)

注意：此字段可能返回 null，表示取不到有效值。
   */
  Polygon?: Polygon
  /**
   * 元素层级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 入参开启EnableInsetImage后返回，表示在InsetImagePackage中的内嵌图片名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsetImageName?: string
  /**
   * 嵌套的文档元素信息，一般包含的是文档内嵌入图片的文字识别结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elements?: Array<DocumentElement>
}

/**
 * RecognizeGeneralInvoice返回参数结构体
 */
export interface RecognizeGeneralInvoiceResponse {
  /**
   * 混贴票据识别结果，具体内容请点击左侧链接。
   */
  MixedInvoiceItems?: Array<InvoiceItem>
  /**
   * PDF文件总页码
   */
  TotalPDFCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本的坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值
 */
export interface Polygon {
  /**
   * 左上顶点坐标
   */
  LeftTop?: Coord
  /**
   * 右上顶点坐标
   */
  RightTop?: Coord
  /**
   * 右下顶点坐标
   */
  RightBottom?: Coord
  /**
   * 左下顶点坐标
   */
  LeftBottom?: Coord
}

/**
 * GetTaskState返回参数结构体
 */
export interface GetTaskStateResponse {
  /**
   * 1:任务识别完成，还未提交
2:任务已手动关闭
3:任务已提交
4:任务识别中
5:超时：任务超过了可操作的24H时限
6:任务识别失败
   */
  TaskState?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 保险单据信息
 */
export interface InsuranceBillInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
【病案首页】
姓名、性别、出生日期、出院诊断、疾病编码、入院病情等。
【费用清单】
医疗参保人员类别、身份证号、入院方式、结账日期、项目、金额等。
【结算单】
名称、单价、数量、金额、医保内、医保外等。
【医疗发票】
姓名、性别、住院时间、收费项目、金额、合计等。
   */
  Name: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value: string
}

/**
 * 卡证字段信息返回值
 */
export interface ContentInfo {
  /**
   * 字段内容
   */
  Content?: string
  /**
   * 结果置信度
   */
  Confidence?: number
  /**
   * 字段是否不完整
0 字段正常
1 字段不完整
   */
  IsInComplete?: number
  /**
   * 字段反光
0 字段正常
1 字段有反光
   */
  IsReflect?: number
}

/**
 * QuestionOCR请求参数结构体
 */
export interface QuestionOCRRequest {
  /**
   * 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 10M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 是否开启切边增强和弯曲矫正,默认为false不开启
   */
  EnableImageCrop?: boolean
}

/**
 * GetTaskState请求参数结构体
 */
export interface GetTaskStateRequest {
  /**
   * 智慧表单任务唯一身份ID
   */
  TaskId: string
}

/**
 * 拖拉机行驶证副页正面的识别结果
 */
export interface TextTractorVehicleBack {
  /**
   * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlateNo?: string
  /**
   * 准乘人数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowNum?: string
  /**
   * 联合收割机质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CombineHarvesterQuality?: string
  /**
   * 拖拉机最小使用质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TractorMinUsageWeight?: string
  /**
   * 拖拉机最大允许载质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TractorMaxAllowLoadCapacity?: string
  /**
   * 外廓尺寸
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalSize?: string
  /**
   * 检验记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Record?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VehicleType?: string
  /**
   * 住址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
}

/**
 * RecognizeMedicalInvoiceOCR请求参数结构体
 */
export interface RecognizeMedicalInvoiceOCRRequest {
  /**
   * 图片的Base64 值。
支持的文件格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。
输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的Url 地址。
支持的文件格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否需要返回识别出的文本行在原图上的四点坐标，默认不返回
   */
  ReturnVertex?: boolean
  /**
   * 是否需要返回识别出的文本行在旋转纠正之后的图像中的四点坐标，默认不返回
   */
  ReturnCoord?: boolean
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * InsuranceBillOCR返回参数结构体
 */
export interface InsuranceBillOCRResponse {
  /**
   * 保险单据识别结果，具体内容请点击左侧链接。
   */
  InsuranceBillInfos?: Array<InsuranceBillInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 卡证智能分类结果
 */
export interface ClassifyDetectInfo {
  /**
   * 分类名称，包括：身份证、护照、名片、银行卡、行驶证、驾驶证、港澳台通行证、户口本、港澳台来往内地通行证、港澳台居住证、不动产证、营业执照
   */
  Name: string
  /**
   * 分类类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 位置坐标
   */
  Rect: Rect
}

/**
 * GeneralEfficientOCR返回参数结构体
 */
export interface GeneralEfficientOCRResponse {
  /**
   * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
   */
  TextDetections: Array<TextDetection>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angel: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ShipInvoiceOCR请求参数结构体
 */
export interface ShipInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * MLIDPassportOCR返回参数结构体
 */
export interface MLIDPassportOCRResponse {
  /**
   * 护照ID（机读码区的解析结果）
   */
  ID?: string
  /**
   * 姓名（机读码区的解析结果）
   */
  Name?: string
  /**
   * 出生日期（机读码区的解析结果）
   */
  DateOfBirth?: string
  /**
   * 性别（F女，M男）（机读码区的解析结果）
   */
  Sex?: string
  /**
   * 有效期（机读码区的解析结果）
   */
  DateOfExpiration?: string
  /**
   * 发行国（机读码区的解析结果）
   */
  IssuingCountry?: string
  /**
   * 国家地区代码（机读码区的解析结果）
   */
  Nationality?: string
  /**
   * 告警码：
-9103	证照翻拍告警
-9102	证照复印件告警（包括黑白复印件、彩色复印件）
-9106       证件遮挡告警
   */
  Warn?: Array<number | bigint>
  /**
   * 证件中的人像图片base64
   */
  Image?: string
  /**
   * 扩展字段:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
   */
  AdvancedInfo?: string
  /**
   * 最下方第一行 MRZ Code 序列
   */
  CodeSet?: string
  /**
   * 最下方第二行 MRZ Code 序列
   */
  CodeCrc?: string
  /**
   * 姓（机读码区的解析结果）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Surname?: string
  /**
   * 名（机读码区的解析结果）
注意：此字段可能返回 null，表示取不到有效值。
   */
  GivenName?: string
  /**
   * 类型（机读码区的解析结果）
   */
  Type?: string
  /**
   * 信息区证件内容
   */
  PassportRecognizeInfos?: PassportRecognizeInfos
  /**
   * 告警码
-9101 证件边框不完整告警
-9102 证件复印件告警
-9103 证件翻拍告警
-9104 证件PS告警
-9107 证件反光告警
-9108 证件模糊告警
-9109 告警能力未开通
   */
  WarnCardInfos?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SealOCR请求参数结构体
 */
export interface SealOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  EnablePdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * VerifyOfdVatInvoiceOCR返回参数结构体
 */
export interface VerifyOfdVatInvoiceOCRResponse {
  /**
   * 发票类型
026:增值税电子普通发票
028:增值税电子专用发票
010:电子发票（普通发票）
020:电子发票（增值税专用发票）
030:电子发票（铁路电子客票）
040:电子发票（航空运输电子客票行程单）
   */
  Type?: string
  /**
   * 发票代码
   */
  InvoiceCode?: string
  /**
   * 发票号码
   */
  InvoiceNumber?: string
  /**
   * 开票日期
   */
  IssueDate?: string
  /**
   * 验证码
   */
  InvoiceCheckCode?: string
  /**
   * 机器编号
   */
  MachineNumber?: string
  /**
   * 密码区
   */
  TaxControlCode?: string
  /**
   * 购买方
   */
  Buyer?: VatInvoiceUserInfo
  /**
   * 销售方
   */
  Seller?: VatInvoiceUserInfo
  /**
   * 价税合计
   */
  TaxInclusiveTotalAmount?: string
  /**
   * 开票人
   */
  InvoiceClerk?: string
  /**
   * 收款人
   */
  Payee?: string
  /**
   * 复核人
   */
  Checker?: string
  /**
   * 税额
   */
  TaxTotalAmount?: string
  /**
   * 不含税金额
   */
  TaxExclusiveTotalAmount?: string
  /**
   * 备注
   */
  Note?: string
  /**
   * 货物或服务清单
   */
  GoodsInfos?: Array<VatInvoiceGoodsInfo>
  /**
   * 航空运输电子客票行程单信息
   */
  AirTicketInfo?: AirTicketInfo
  /**
   * 铁路电子客票
   */
  RailwayTicketInfo?: RailwayTicketInfo
  /**
   * 发票标题
   */
  InvoiceTitle?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 医疗票据信息
 */
export interface MedicalInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 校验码
   */
  CheckCode?: string
  /**
   * 发票属地
   */
  Place?: string
  /**
   * 复核人
   */
  Reviewer?: string
}

/**
 * HmtResidentPermitOCR请求参数结构体
 */
export interface HmtResidentPermitOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * FRONT：有照片的一面（人像面），
BACK：无照片的一面（国徽面），
该参数如果不填或填错，将为您自动判断正反面。
   */
  CardSide?: string
  /**
   * 是否返回头像和位置坐标
   */
  CropPortrait?: boolean
}

/**
 * RecognizeTableAccurateOCR返回参数结构体
 */
export interface RecognizeTableAccurateOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableDetections?: Array<TableInfo>
  /**
   * Base64 编码后的 Excel 数据。
   */
  Data?: string
  /**
   * 图片为PDF时，返回PDF的总页数，默认为0
注意：此字段可能返回 null，表示取不到有效值。
   */
  PdfPageSize?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResidenceBookletOCR请求参数结构体
 */
export interface ResidenceBookletOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * GetOCRResult请求参数结构体
 */
export interface GetOCRResultRequest {
  /**
   * token值
   */
  OCRToken: string
}

/**
 * BusInvoiceOCR返回参数结构体
 */
export interface BusInvoiceOCRResponse {
  /**
   * 汽车票识别结果，具体内容请点击左侧链接。
   */
  BusInvoiceInfos?: Array<BusInvoiceInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 二维码/条形码识别结果信息
 */
export interface QrcodeResultsInfo {
  /**
   * 类型包括
二维码：QR_CODE
一维码：EAN-13、EAN-8、EAN-2、UPC-A、UPC-E、CODE-39、CODE-93、CODE-128 
PDF：PDF_417
DataMatrix：DATA_MATRIX
小程序码：WX_CODE
   */
  TypeName?: string
  /**
   * 二维码/条形码包含的地址
   */
  Url?: string
  /**
   * 二维码/条形码坐标
   */
  Position?: QrcodePositionObj
}

/**
 * GetOCRResult返回参数结构体
 */
export interface GetOCRResultResponse {
  /**
   * ocr业务类型
   */
  Type?: string
  /**
   * ocr结果
   */
  OCRResult?: OCRResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MainlandPermitOCR返回参数结构体
 */
export interface MainlandPermitOCRResponse {
  /**
   * 中文姓名
   */
  Name?: string
  /**
   * 英文姓名
   */
  EnglishName?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 出生日期
   */
  Birthday?: string
  /**
   * 签发机关
   */
  IssueAuthority?: string
  /**
   * 有效期限
   */
  ValidDate?: string
  /**
   * 证件号
   */
  Number?: string
  /**
   * 签发地点
   */
  IssueAddress?: string
  /**
   * 签发次数
   */
  IssueNumber?: string
  /**
   * 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。
   */
  Type?: string
  /**
   * RetProfile为True时返回头像字段， Base64编码
   */
  Profile?: string
  /**
   * 国籍
   */
  Nationality?: string
  /**
   * 背面字段信息
   */
  MainlandTravelPermitBackInfos?: MainlandTravelPermitBackInfos
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增值税发票、购车发票、全电发票的基础要素字段信息。
 */
export interface VatInvoice {
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 购方抬头
通用机打发票类型时不返回
   */
  BuyerName?: string
  /**
   * 购方税号
通用机打发票类型时不返回
   */
  BuyerTaxCode?: string
  /**
   * 购方地址电话
通用机打发票类型做不返回
   */
  BuyerAddressPhone?: string
  /**
   * 购方银行账号
通用机打发票类型时不返回
   */
  BuyerBankAccount?: string
  /**
   * 销方名称
   */
  SellerName?: string
  /**
   * 销方税号
   */
  SellerTaxCode?: string
  /**
   * 销方地址电话
   */
  SellerAddressPhone?: string
  /**
   * 销方银行账号
   */
  SellerBankAccount?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 机器编码
   */
  MachineNo?: string
  /**
   * 票种类型
01：增值税专用发票，
02：货运运输业增值税专用发票，
03：机动车销售统一发票，
04：增值税普通发票，
08：增值税电子专用发票（含全电，全电仅新版接口支持），
10：增值税电子普通发票（含全电，全电仅新版接口支持），
11：增值税普通发票（卷式），
14：增值税电子（通行费）发票，
15：二手车销售统一发票，
32：深圳区块链发票，
102：通用机打电子发票
61：电子发票（航空运输电子客票行程单）
83：电子发票（铁路电子发票）
0915：全电纸质（二手车统一销售发票）
0903：全电纸质（机动车统一发票）
   */
  Type?: string
  /**
   * 具体的全电发票类型：01: 全电专用发票；02：全电普通发票；03：全电火车票；04：全电机票行程单
   */
  ElectronicType?: string
  /**
   * 检验码
   */
  CheckCode?: string
  /**
   * 是否作废（红冲）是否作废（红冲）
Y：已作废，N：未作废，H：红冲，HP：部分红冲，HF：全额红冲
   */
  IsAbandoned?: string
  /**
   * 是否有销货清单 
Y: 有清单 N：无清单 
卷票无
   */
  HasSellerList?: string
  /**
   * 销货清单标题
   */
  SellerListTitle?: string
  /**
   * 销货清单税额
   */
  SellerListTax?: string
  /**
   * 不含税金额
   */
  AmountWithoutTax?: string
  /**
   * 税额
   */
  TaxAmount?: string
  /**
   * 含税金额
   */
  AmountWithTax?: string
  /**
   * 项目明细
   */
  Items?: Array<VatInvoiceItem>
  /**
   * 所属税局
   */
  TaxBureau?: string
  /**
   * 通行费标志:Y、是;N、否
   */
  TrafficFreeFlag?: string
  /**
   * 是否为红票
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedLetterInvoiceMark?: boolean
  /**
   * 开具类型标识（0: 委托代开，1：自开，2：代开，3：代办退税
注意：此字段可能返回 null，表示取不到有效值。
   */
  IssuingTypeMark?: number
  /**
   * 代开销售方名称
   */
  SellerAgentName?: string
  /**
   * 代开销售方税号
   */
  SellerAgentTaxID?: string
}

/**
 * MLIDCardOCR请求参数结构体
 */
export interface MLIDCardOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
   */
  ImageBase64?: string
  /**
   * 卡证背面图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  BackImageBase64?: string
  /**
   * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 卡证背面图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  BackImageUrl?: string
  /**
   * 是否返回图片，默认false
   */
  RetImage?: boolean
}

/**
 * 试题识别结果
 */
export interface QuestionInfo {
  /**
   * 旋转角度
   */
  Angle?: number
  /**
   * 预处理后图片高度
   */
  Height?: number
  /**
   * 预处理后图片宽度
   */
  Width?: number
  /**
   * 文档元素
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultList?: Array<ResultList>
  /**
   * 输入图片高度
   */
  OrgHeight?: number
  /**
   * 输入图片宽度
   */
  OrgWidth?: number
  /**
   * 预处理后的图片base64编码
   */
  ImageBase64?: string
}

/**
 * 出租车发票
 */
export interface TaxiTicket {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 上车时间
   */
  TimeGetOn?: string
  /**
   * 下车时间
   */
  TimeGetOff?: string
  /**
   * 单价
   */
  Price?: string
  /**
   * 里程
   */
  Mileage?: string
  /**
   * 总金额
   */
  Total?: string
  /**
   * 发票所在地
   */
  Place?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 车牌号
   */
  LicensePlate?: string
  /**
   * 燃油附加费
   */
  FuelFee?: string
  /**
   * 预约叫车服务费
   */
  BookingCallFee?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
}

/**
 * EnglishOCR返回参数结构体
 */
export interface EnglishOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TextDetections?: Array<TextDetectionEn>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angel?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 头像位置坐标
 */
export interface ImageCoordinates {
  /**
   * 头像左上角横坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: number
  /**
   * 头像左上角纵坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
  /**
   * 头像框宽度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * 头像框高度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Height?: number
}

/**
 * RecognizeForeignPermanentResidentIdCard返回参数结构体
 */
export interface RecognizeForeignPermanentResidentIdCardResponse {
  /**
   * 中文姓名。
   */
  CnName?: string
  /**
   * 英文名。
   */
  EnName?: string
  /**
   * 性别。
   */
  Sex?: string
  /**
   * 出生日期。规范格式为 XXXX年XX月XX日。
   */
  DateOfBirth?: string
  /**
   * 国籍。
   */
  Nationality?: string
  /**
   * 有效期限。
   */
  PeriodOfValidity?: string
  /**
   * 证件号码。
   */
  No?: string
  /**
   * 曾持证件号码。
   */
  PreviousNumber?: string
  /**
   * 签发机关。
   */
  IssuedAuthority?: string
  /**
   * 头像和坐标信息。
   */
  PortraitImageInfo?: PortraitImageInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BusInvoiceOCR请求参数结构体
 */
export interface BusInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * OrgCodeCertOCR返回参数结构体
 */
export interface OrgCodeCertOCRResponse {
  /**
   * 代码
   */
  OrgCode?: string
  /**
   * 机构名称
   */
  Name?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 有效期
   */
  ValidDate?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 临时身份证信息返回
 */
export interface TemporaryIDCardInfo {
  /**
   * 姓名（人像面）
   */
  Name?: ContentInfo
  /**
   * 性别（人像面）
   */
  Sex?: ContentInfo
  /**
   * 民族（人像面）
   */
  Nation?: ContentInfo
  /**
   * 出生日期（人像面）
   */
  Birth?: ContentInfo
  /**
   * 地址（人像面）
   */
  Address?: ContentInfo
  /**
   * 公民身份号码（人像面）
   */
  IdNum?: ContentInfo
  /**
   * 发证机关（国徽面）
   */
  Authority?: ContentInfo
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: ContentInfo
  /**
   * WarnInfos，告警信息
   */
  WarnInfos?: CardWarnInfo
  /**
   * IdCard，裁剪后身份证照片的base64编码，请求 EnableCropImage 时返回；
   */
  CardImage?: ContentInfo
  /**
   * Portrait，身份证头像照片的base64编码，请求 EnablePortrait 时返回；
   */
  PortraitImage?: ContentInfo
}

/**
 * 增值税发票项目明细
 */
export interface VatInvoiceItem {
  /**
   * 行号
   */
  LineNo: string
  /**
   * 名称
   */
  Name: string
  /**
   * 规格
   */
  Spec: string
  /**
   * 单位
   */
  Unit: string
  /**
   * 数量
   */
  Quantity: string
  /**
   * 单价
   */
  UnitPrice: string
  /**
   * 不含税金额
   */
  AmountWithoutTax: string
  /**
   * 税率
   */
  TaxRate: string
  /**
   * 税额
   */
  TaxAmount: string
  /**
   * 税收分类编码
   */
  TaxClassifyCode: string
  /**
   * 运输工具类型
   */
  VehicleType?: string
  /**
   * 运输工具牌号
   */
  VehicleBrand?: string
  /**
   * 起始地
   */
  DeparturePlace?: string
  /**
   * 到达地
   */
  ArrivalPlace?: string
  /**
   * 运输货物名称
   */
  TransportItemsName?: string
  /**
   * 建筑服务发生地
   */
  ConstructionPlace?: string
  /**
   * 建筑项目名称
   */
  ConstructionName?: string
}

/**
 * RideHailingTransportLicenseOCR返回参数结构体
 */
export interface RideHailingTransportLicenseOCRResponse {
  /**
   * 交运管许可字号。
   */
  OperationLicenseNumber?: string
  /**
   * 车辆所有人，对应网约车运输证字段：车辆所有人/车主名称/业户名称。
   */
  VehicleOwner?: string
  /**
   * 车牌号码，对应网约车运输证字段：车牌号码/车辆号牌。
   */
  VehicleNumber?: string
  /**
   * 有效起始日期。
   */
  StartDate?: string
  /**
   * 有效期截止时间，对应网约车运输证字段：有效期至/营运期限止。
   */
  EndDate?: string
  /**
   * 初始发证日期，对应网约车运输证字段：初始领证日期/发证日期。
   */
  ReleaseDate?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 候选字符集(包含候选字Character以及置信度Confidence)
 */
export interface CandWord {
  /**
   * 候选字符集的单词信息（包括单词Character和单词置信度confidence）
   */
  CandWords: Array<Words>
}

/**
 * RecognizeContainerOCR返回参数结构体
 */
export interface RecognizeContainerOCRResponse {
  /**
   * 集装箱箱号
   */
  ContainerId?: string
  /**
   * 集装箱类型
   */
  ContainerType?: string
  /**
   * 集装箱总重量，单位：千克（KG）
   */
  GrossKG?: string
  /**
   * 集装箱总重量，单位：磅（LB）
   */
  GrossLB?: string
  /**
   * 集装箱有效承重，单位：千克（KG）
   */
  PayloadKG?: string
  /**
   * 集装箱有效承重，单位：磅（LB）
   */
  PayloadLB?: string
  /**
   * 集装箱容量，单位：立方米
   */
  CapacityM3?: string
  /**
   * 集装箱容量，单位：立英尺
   */
  CapacityFT3?: string
  /**
   * 告警码
-9926	集装箱箱号不完整或者不清晰
-9927	集装箱类型不完整或者不清晰
   */
  Warn?: Array<number | bigint>
  /**
   * 集装箱自身重量，单位：千克（KG）
   */
  TareKG?: string
  /**
   * 集装箱自身重量，单位：磅（LB）
   */
  TareLB?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业证照单个字段的内容
 */
export interface EnterpriseLicenseInfo {
  /**
   * 识别出的字段名称（关键字），不同证件类型可能不同，证件类型包含企业登记证书、许可证书、企业执照、三证合一类证书；
支持以下字段：统一社会信用代码、法定代表人、公司名称、公司地址、注册资金、企业类型、经营范围、成立日期、有效期、开办资金、经费来源、举办单位等；
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
}

/**
 * SmartStructuralPro返回参数结构体
 */
export interface SmartStructuralProResponse {
  /**
   * 图片旋转角度(角度制)，文本的水平方向为 0；顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 配置结构化文本信息
   */
  StructuralList?: Array<GroupInfo>
  /**
   * 还原文本信息
   */
  WordList?: Array<WordItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PermitOCR返回参数结构体
 */
export interface PermitOCRResponse {
  /**
   * 姓名
   */
  Name?: string
  /**
   * 英文姓名
   */
  EnglishName?: string
  /**
   * 证件号
   */
  Number?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 有效期限
   */
  ValidDate?: string
  /**
   * 签发机关
   */
  IssueAuthority?: string
  /**
   * 签发地点
   */
  IssueAddress?: string
  /**
   * 出生日期
   */
  Birthday?: string
  /**
   * 头像照片的base64
   */
  PortraitImage?: string
  /**
   * 返回类型
   */
  Type?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定额发票
 */
export interface QuotaInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 是否存在二维码（1：有，0：无）
   */
  QRCodeMark?: number
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
}

/**
 * InsuranceBillOCR请求参数结构体
 */
export interface InsuranceBillOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * GeneralHandwritingOCR返回参数结构体
 */
export interface GeneralHandwritingOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TextDetections?: Array<TextGeneralHandwriting>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   * @deprecated
   */
  Angel?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IDCardResult
 */
export interface IDCardResult {
  /**
   * 正面结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Front?: IDCardInfoResult
  /**
   * 反面结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Back?: IDCardInfoResult
}

/**
 * 单元格数据
 */
export interface TableCell {
  /**
   * 单元格左上角的列索引
   */
  ColTl: number
  /**
   * 单元格左上角的行索引
   */
  RowTl: number
  /**
   * 单元格右下角的列索引
   */
  ColBr: number
  /**
   * 单元格右下角的行索引
   */
  RowBr: number
  /**
   * 单元格内识别出的字符串文本，若文本存在多行，以换行符"\n"隔开
   */
  Text: string
  /**
   * 单元格类型
   */
  Type: string
  /**
   * 单元格置信度
   */
  Confidence: number
  /**
   * 单元格在图像中的四点坐标
   */
  Polygon: Array<Coord>
  /**
   * 此字段为扩展字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedInfo: string
  /**
   * 单元格文本属性
   */
  Contents: Array<CellContent>
}

/**
 * TableOCR返回参数结构体
 */
export interface TableOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接
   */
  TextDetections?: Array<TextTable>
  /**
   * Base64 编码后的 Excel 数据。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单字在原图中的坐标，以四个顶点坐标表示，以左上角为起点，顺时针返回。
 */
export interface DetectedWordCoordPoint {
  /**
   * 单字在原图中的坐标，以四个顶点坐标表示，以左上角为起点，顺时针返回。
   */
  WordCoordinate: Array<Coord>
}

/**
 * 数学试题识别结构化对象
 */
export interface QuestionBlockObj {
  /**
   * 数学试题识别结构化信息数组
   */
  QuestionArr: Array<QuestionObj>
  /**
   * 题目主体区域检测框在图片中的像素坐标
   */
  QuestionBboxCoord: Rect
}

/**
 * 试题识别结果-元素内容
 */
export interface Element {
  /**
   * 元素内容，当type为figure时该字段内容为图片的位置
   */
  Text?: string
  /**
   * 元素坐标
   */
  Coord?: Polygon
  /**
   * 元素group类型，包括multiple-choice(选择题)、fill-in-the-blank(填空题)、problem-solving(解答题)、arithmetic(算术题)
   */
  GroupType?: string
  /**
   * 结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultList?: Array<ResultList>
  /**
   * 元素索引
   */
  Index?: number
}

/**
 * AdvertiseOCR返回参数结构体
 */
export interface AdvertiseOCRResponse {
  /**
   * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
   */
  TextDetections?: Array<AdvertiseTextDetection>
  /**
   * 图片分辨率信息，单位 px
   */
  ImageSize?: ImageSize
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VehicleLicenseOCR请求参数结构体
 */
export interface VehicleLicenseOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * FRONT 为行驶证主页正面（有红色印章的一面），
BACK 为行驶证副页正面（有号码号牌的一面），
DOUBLE 为行驶证主页正面和副页正面。
默认值为：FRONT。
   */
  CardSide?: string
  /**
   * FRONT为行驶证主页正面（有红色印章的一面），BACK 为拖拉机行驶证副页正面识别
   */
  TractorCardSide?: string
}

/**
 * 增值税发票卷票信息
 */
export interface VatRollInvoiceInfo {
  /**
   * 识别出的字段名称(关键字)，支持以下字段：
发票代码、合计金额(小写)、合计金额(大写)、开票日期、发票号码、购买方识别号、销售方识别号、校验码、销售方名称、购买方名称、发票消费类型、省、市、是否有公司印章、单价、金额、数量、服务类型、品名、种类。
   */
  Name?: string
  /**
   * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
   */
  Value?: string
  /**
   * 文本行在旋转纠正之后的图像中的像素坐标。
   */
  Rect?: Rect
}

/**
 * RecognizeOnlineTaxiItineraryOCR请求参数结构体
 */
export interface RecognizeOnlineTaxiItineraryOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * IDCardOCR请求参数结构体
 */
export interface IDCardOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
  /**
   * FRONT：身份证有照片的一面（人像面），
BACK：身份证有国徽的一面（国徽面），
该参数如果不填，将为您自动判断身份证正反面。
   */
  CardSide?: string
  /**
   * 以下可选字段均为bool 类型，默认false：
CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）
CropPortrait，人像照片裁剪（自动抠取身份证头像区域）
CopyWarn，复印件告警
BorderCheckWarn，边框和框内遮挡告警
ReshootWarn，翻拍告警
DetectPsWarn，疑似存在PS痕迹告警
TempIdWarn，临时身份证告警
InvalidDateWarn，身份证有效日期不合法告警
Quality，图片质量分数（评价图片的模糊程度）
MultiCardDetect，是否开启正反面同框识别（仅支持二代身份证正反页同框识别或临时身份证正反页同框识别）
ReflectWarn，是否开启反光检测

SDK 设置方式参考：
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
API 3.0 Explorer 设置方式参考：
Config = {"CropIdCard":true,"CropPortrait":true}
   */
  Config?: string
  /**
   * 默认值为true，打开识别结果纠正开关。开关开启后，身份证号、出生日期、性别，三个字段会进行矫正补齐，统一结果输出；若关闭此开关，以上三个字段不会进行矫正补齐，保持原始识别结果输出，若原图出现篡改情况，这三个字段的识别结果可能会不统一。
   */
  EnableRecognitionRectify?: boolean
  /**
   * 默认值为false。

此开关需要在反光检测开关开启下才会生效（即此开关生效的前提是config入参里的"ReflectWarn":true），若EnableReflectDetail设置为true，则会返回反光点覆盖区域详情。反光点覆盖区域详情分为四部分：人像照片位置、国徽位置、识别字段位置、其他位置。一个反光点允许覆盖多个区域，且一张图片可能存在多个反光点。
   */
  EnableReflectDetail?: boolean
  /**
   * 用于控制是否开启日期校验，默认值为true，打开会进行日期校验。
   */
  EnableDateVerify?: boolean
}

/**
 * MixedInvoiceDetect请求参数结构体
 */
export interface MixedInvoiceDetectRequest {
  /**
   * 是否需要返回裁剪后的图片。
   */
  ReturnImage: boolean
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * WaybillOCR请求参数结构体
 */
export interface WaybillOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 预检测开关，当待识别运单占整个输入图像的比例较小时，建议打开预检测开关。默认值为false。
   */
  EnablePreDetect?: boolean
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * ReconstructDocument配置选项
 */
export interface ReconstructDocumentConfig {
  /**
   * 生成的Markdown中是否嵌入图片
   */
  EnableInsetImage?: boolean
}

/**
 * RecognizeStoreName返回参数结构体
 */
export interface RecognizeStoreNameResponse {
  /**
   * 门头照名称
   */
  StoreInfo?: Array<StoreInfo>
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负
   */
  Angle?: number
  /**
   * 门头照标签
   */
  StoreLabel?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOCRToken请求参数结构体
 */
export interface GetOCRTokenRequest {
  /**
   * 业务类型，如身份证识别为IDCardOCR
   */
  Type: string
  /**
   * 身份证配置信息
   */
  IDCardConfig?: IDCardConfig
}

/**
 * RideHailingTransportLicenseOCR请求参数结构体
 */
export interface RideHailingTransportLicenseOCRRequest {
  /**
   * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500\*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
   */
  ImageUrl?: string
}

/**
 * MLIDCardOCR返回参数结构体
 */
export interface MLIDCardOCRResponse {
  /**
   * 身份证号
   */
  ID?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 性别
   */
  Sex?: string
  /**
   * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
-9106       证件遮挡告警
-9107       模糊图片告警
   * @deprecated
   */
  Warn?: Array<number | bigint>
  /**
   * 证件图片
   */
  Image?: string
  /**
   * 此字段为扩展字段。
返回字段识别结果的置信度，格式如下
{
  字段名:{
    Confidence:0.9999
  }
}
   */
  AdvancedInfo?: string
  /**
   * 证件类型
MyKad  身份证
MyPR    永居证
MyTentera   军官证
MyKAS    临时身份证
POLIS  警察证
IKAD   劳工证
MyKid 儿童卡
   */
  Type?: string
  /**
   * 出生日期（目前该字段仅支持IKAD劳工证、MyKad 身份证）
   */
  Birthday?: string
  /**
   * 马来身份证背面号码
   */
  MyKadNumber?: string
  /**
   * 告警码
-9101 证件边框不完整告警
-9102 证件复印件告警
-9103 证件翻拍告警
-9104 证件PS告警
-9107 证件反光告警
-9108 证件模糊告警
-9109 告警能力未开通
   */
  WarnCardInfos?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeTableOCR请求参数结构体
 */
export interface RecognizeTableOCRRequest {
  /**
   * 图片/PDF的 Base64 值。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片/PDF的 Url 地址。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
  /**
   * 语言，zh：中英文（默认）jap：日文
   */
  TableLanguage?: string
}

/**
 * EstateCertOCR请求参数结构体
 */
export interface EstateCertOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * 外国人永久居留证信息返回
 */
export interface PermanentResidencePermitInfo {
  /**
   * 姓名（人像面）
   */
  Name?: ContentInfo
  /**
   * 性别（人像面）
   */
  Sex?: ContentInfo
  /**
   * 民族（人像面）
   */
  Nation?: ContentInfo
  /**
   * 出生日期（人像面）
   */
  Birth?: ContentInfo
  /**
   * 地址（人像面）
   */
  Address?: ContentInfo
  /**
   * 公民身份号码（人像面）
   */
  IdNum?: ContentInfo
  /**
   * 发证机关（国徽面）
   */
  Authority?: ContentInfo
  /**
   * 证件有效期（国徽面）
   */
  ValidDate?: ContentInfo
  /**
   * WarnInfos，告警信息
   */
  WarnInfos?: CardWarnInfo
  /**
   * IdCard，裁剪后身份证照片的base64编码，请求 EnableCropImage 时返回；
   */
  CardImage?: ContentInfo
  /**
   * Portrait，身份证头像照片的base64编码，请求 EnablePortrait 时返回；
   */
  PortraitImage?: ContentInfo
  /**
   * 持证人持有号码，外国人永久居留证 返回该字段
   */
  HolderNum?: ContentInfo
  /**
   * 国籍，外国人永久居留证 返回该字段
   */
  Nationality?: ContentInfo
}

/**
 * BizLicenseOCR返回参数结构体
 */
export interface BizLicenseOCRResponse {
  /**
   * 统一社会信用代码（三合一之前为注册号）
   */
  RegNum?: string
  /**
   * 公司名称
   */
  Name?: string
  /**
   * 注册资本
   */
  Capital?: string
  /**
   * 法定代表人
   */
  Person?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 经营范围
   */
  Business?: string
  /**
   * 主体类型
   */
  Type?: string
  /**
   * 营业期限
   */
  Period?: string
  /**
   * 组成形式
   */
  ComposingForm?: string
  /**
   * 成立日期
   */
  SetDate?: string
  /**
   * Code 告警码列表和释义：
-9102 黑白复印件告警
-9104 翻拍件告警
   */
  RecognizeWarnCode?: Array<number | bigint>
  /**
   * 告警码说明：
WARN_COPY_CARD 黑白复印件告警
WARN_RESHOOT_CARD翻拍件告警
   */
  RecognizeWarnMsg?: Array<string>
  /**
   * 是否为副本。1为是，-1为不是。
   */
  IsDuplication?: number
  /**
   * 登记日期
   */
  RegistrationDate?: string
  /**
   *  图片旋转角度(角度制)，文本的水平方向为0度；顺时针为正，角度范围是0-360度


   */
  Angle?: number
  /**
   * 是否有国徽。false为没有，true为有。
   */
  NationalEmblem?: boolean
  /**
   * 是否有二维码。false为没有，true为有。
   */
  QRCode?: boolean
  /**
   * 是否有印章。false为没有，true为有。
   */
  Seal?: boolean
  /**
   * 标题
   */
  Title?: string
  /**
   * 编号
   */
  SerialNumber?: string
  /**
   * 登记机关
   */
  RegistrationAuthority?: string
  /**
   * 是否是电子营业执照。false为没有，true为有。
   */
  Electronic?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结果列表
 */
export interface ResultList {
  /**
   * 题干
注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: Array<Element>
  /**
   * 选项
注意：此字段可能返回 null，表示取不到有效值。
   */
  Option?: Array<Element>
  /**
   * 插图
注意：此字段可能返回 null，表示取不到有效值。
   */
  Figure?: Array<Element>
  /**
   * 表格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: Array<Element>
  /**
   * 答案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Answer?: Array<Element>
  /**
   * 整题的坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Coord?: Array<Polygon>
}

/**
 * VatInvoiceOCR返回参数结构体
 */
export interface VatInvoiceOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  VatInvoiceInfos?: Array<TextVatInvoice>
  /**
   * 明细条目。VatInvoiceInfos中关于明细项的具体条目。
   */
  Items?: Array<VatInvoiceItem>
  /**
   * 默认值为0。如果图片为PDF时，返回PDF的总页数。
   */
  PdfPageSize?: number
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
   */
  Angle?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuotaInvoiceOCR请求参数结构体
 */
export interface QuotaInvoiceOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。
   */
  IsPdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
   */
  PdfPageNumber?: number
}

/**
 * BankCardOCR返回参数结构体
 */
export interface BankCardOCRResponse {
  /**
   * 卡号
   */
  CardNo?: string
  /**
   * 银行信息
   */
  BankInfo?: string
  /**
   * 有效期，格式如：07/2023
   */
  ValidDate?: string
  /**
   * 卡类型
   */
  CardType?: string
  /**
   * 卡名字
   */
  CardName?: string
  /**
   * 切片图片数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  BorderCutImage?: string
  /**
   * 卡号图片数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  CardNoImage?: string
  /**
   * WarningCode 告警码列表和释义：
-9110:银行卡日期无效; 
-9111:银行卡边框不完整; 
-9112:银行卡图片反光;
-9113:银行卡复印件;
-9114:银行卡翻拍件
（告警码可以同时存在多个）
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarningCode?: Array<number | bigint>
  /**
   * 图片质量分数，请求EnableQualityValue时返回（取值范围：0-100，分数越低越模糊，建议阈值≥50）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityValue?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TableOCR请求参数结构体
 */
export interface TableOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * BusinessCardOCR请求参数结构体
 */
export interface BusinessCardOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 可选字段，根据需要选择是否请求对应字段。
目前支持的字段为：
RetImageType-“PROPROCESS” 图像预处理，string 类型。
图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。

SDK 设置方式参考：
Config = Json.stringify({"RetImageType":"PROPROCESS"})
API 3.0 Explorer 设置方式参考：
Config = {"RetImageType":"PROPROCESS"}
   */
  Config?: string
}

/**
 * FinanBillOCR请求参数结构体
 */
export interface FinanBillOCRRequest {
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
}

/**
 * QuotaInvoiceOCR返回参数结构体
 */
export interface QuotaInvoiceOCRResponse {
  /**
   * 发票号码
   */
  InvoiceNum?: string
  /**
   * 发票代码
   */
  InvoiceCode?: string
  /**
   * 大写金额
   */
  Rate?: string
  /**
   * 小写金额
   */
  RateNum?: string
  /**
   * 发票消费类型
   */
  InvoiceType?: string
  /**
   * 省
注意：此字段可能返回 null，表示取不到有效值。
   */
  Province?: string
  /**
   * 市
注意：此字段可能返回 null，表示取不到有效值。
   */
  City?: string
  /**
   * 是否有公司印章（1有 0无 空为识别不出）
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasStamp?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeGeneralTextImageWarn请求参数结构体
 */
export interface RecognizeGeneralTextImageWarnRequest {
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。
支持的图片像素：需介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 示例值：false
   */
  EnablePdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。 示例值：1
   */
  PdfPageNumber?: number
  /**
   * 支持的模板类型
- General 通用告警（支持所有类型告警）
- LicensePlate 车牌告警（支持翻拍告警）
   */
  Type?: string
}

/**
 * RecognizeForeignPermanentResidentIdCard请求参数结构体
 */
export interface RecognizeForeignPermanentResidentIdCardRequest {
  /**
   * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
示例值：https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/docume
   */
  ImageUrl?: string
  /**
   * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
支持的图片像素：需介于20-10000px之间。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
   */
  ImageBase64?: string
  /**
   * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
   */
  EnablePdf?: boolean
  /**
   * 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。
示例值：1
   */
  PdfPageNumber?: number
  /**
   * 是否返回头像和位置坐标
   */
  CropPortrait?: boolean
}

/**
 * GeneralFastOCR返回参数结构体
 */
export interface GeneralFastOCRResponse {
  /**
   * 检测到的文本信息，具体内容请点击左侧链接。
   */
  TextDetections: Array<TextDetection>
  /**
   * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。
   */
  Language: string
  /**
   * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
   */
  Angel: number
  /**
   * 图片为PDF时，返回PDF的总页数，默认为0
   */
  PdfPageSize: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 二手车销售统一发票
 */
export interface UsedCarPurchaseInvoice {
  /**
   * 发票名称
   */
  Title?: string
  /**
   * 是否存在二维码（0：没有，1：有）
   */
  QRCodeMark?: number
  /**
   * 发票代码
   */
  Code?: string
  /**
   * 发票号码
   */
  Number?: string
  /**
   * 开票日期
   */
  Date?: string
  /**
   * 价税合计（小写）
   */
  Total?: string
  /**
   * 价税合计（大写）
   */
  TotalCn?: string
  /**
   * 销货单位名称
   */
  Seller?: string
  /**
   * 销售方电话
   */
  SellerTel?: string
  /**
   * 销售方单位代码/个人身份证号
   */
  SellerTaxID?: string
  /**
   * 销售方地址
   */
  SellerAddress?: string
  /**
   * 购买方名称
   */
  Buyer?: string
  /**
   * 购买方单位代码/个人身份证号
   */
  BuyerID?: string
  /**
   * 购买方地址
   */
  BuyerAddress?: string
  /**
   * 购买方电话
   */
  BuyerTel?: string
  /**
   * 二手车市场
   */
  CompanyName?: string
  /**
   * 二手车市场纳税人识别号
   */
  CompanyTaxID?: string
  /**
   * 二手车市场开户银行和账号
   */
  CompanyBankAccount?: string
  /**
   * 二手车市场电话
   */
  CompanyTel?: string
  /**
   * 二手车市场地址
   */
  CompanyAddress?: string
  /**
   * 转入地车辆管理所名称
   */
  TransferAdministrationName?: string
  /**
   * 车牌号
   */
  LicensePlate?: string
  /**
   * 登记证号
   */
  RegistrationNumber?: string
  /**
   * 车辆识别代码
   */
  VIN?: string
  /**
   * 厂牌型号
   */
  VehicleModel?: string
  /**
   * 发票消费类型
   */
  Kind?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
  /**
   * 车辆类型
   */
  VehicleType?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 发票联次
   */
  FormType?: string
  /**
   * 发票联名
   */
  FormName?: string
  /**
   * 是否有公司印章（0：没有，1：有）
   */
  CompanySealMark?: number
  /**
   * 经营拍卖单位
   */
  AuctionOrgName?: string
  /**
   * 经营拍卖单位地址
   */
  AuctionOrgAddress?: string
  /**
   * 经营拍卖单位纳税人识别号
   */
  AuctionOrgTaxID?: string
  /**
   * 经营拍卖单位开户银行账号
   */
  AuctionOrgBankAccount?: string
  /**
   * 经营拍卖单位电话
   */
  AuctionOrgPhone?: string
  /**
   * 开票人
   */
  Issuer?: string
  /**
   * 税控码
   */
  TaxCode?: string
  /**
   * 机器编号
   */
  MachineSerialNumber?: string
  /**
   * 机打发票代码
   */
  MachineCode?: string
  /**
   * 机打发票号码
   */
  MachineNumber?: string
}

/**
 * 二维码/条形码坐标信息
 */
export interface QrcodePositionObj {
  /**
   * 左上顶点坐标（如果是条形码，X和Y都为-1）
   */
  LeftTop: Coord
  /**
   * 右上顶点坐标（如果是条形码，X和Y都为-1）
   */
  RightTop: Coord
  /**
   * 右下顶点坐标（如果是条形码，X和Y都为-1）
   */
  RightBottom: Coord
  /**
   * 左下顶点坐标（如果是条形码，X和Y都为-1）
   */
  LeftBottom: Coord
}
