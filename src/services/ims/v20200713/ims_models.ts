/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * ImageModeration请求参数结构体
 */
export interface ImageModerationRequest {
  /**
   * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。
   */
  BizType?: string
  /**
   * 数据ID，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
   */
  DataId?: string
  /**
   * 数据Base64编码，图片检测接口为图片文件内容，大小不能超过5M
   */
  FileContent?: string
  /**
   * 图片资源访问链接，__与FileContent参数必须二选一输入__ 。由于网络安全策略，送审带重定向的链接，可能引起下载失败，请尽量避免，比如Http返回302状态码的链接，可能导致接口返回ResourceUnavailable.ImageDownloadError
   */
  FileUrl?: string
  /**
   * 截帧频率，GIF图/长图检测专用，默认值为0，表示只会检测GIF图/长图的第一帧
   */
  Interval?: number
  /**
   * GIF图/长图检测专用，代表均匀最大截帧数量，默认值为1（即只取GIF第一张，或长图不做切分处理（可能会造成处理超时））。
   */
  MaxFrames?: number
  /**
   * 账号相关信息字段，填入后可识别违规风险账号。
   */
  User?: User
  /**
   * 设备相关信息字段，填入后可识别违规风险设备。
   */
  Device?: Device
}

/**
 * 识别类型标签结果信息
 */
export interface RecognitionResult {
  /**
   * 当前可能的取值：Scene（图片场景模型）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Label?: string
  /**
   * Label对应模型下的识别标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<RecognitionTag>
}

/**
 * 实体检测结果详情：实体、广告台标、二维码
 */
export interface ObjectResult {
  /**
   * 场景识别结果
   */
  Scene: string
  /**
   * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
   */
  Suggestion: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubLabel: string
  /**
   * 该标签模型命中的分值
   */
  Score: number
  /**
   * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Names: Array<string>
  /**
   * 实体检测结果明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  Details: Array<ObjectDetail>
}

/**
 * OCR文本结果详情
 */
export interface OcrTextDetail {
  /**
   * OCR文本内容
   */
  Text: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 仅当Label为Custom自定义关键词时有效，表示自定义库id
   */
  LibId: string
  /**
   * 仅当Label为Custom自定义关键词时有效，表示自定义库名称
   */
  LibName: string
  /**
   * 该标签下命中的关键词
   */
  Keywords: Array<string>
  /**
   * 该标签模型命中的分值
   */
  Score: number
  /**
   * OCR位置
   */
  Location: Location
  /**
   * OCR文本识别置信度
   */
  Rate: number
  /**
   * OCR文本命中的二级标签
   */
  SubLabel: string
}

/**
 * 识别类型标签信息
 */
export interface RecognitionTag {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 置信分：0～100，数值越大表示置信度越高
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score?: number
  /**
   * 标签位置信息，若模型无位置信息，则可能为零值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: Location
}

/**
 * 实体检测结果明细，当检测场景为实体、广告台标、二维码时表示模型检测目标框的标签名称、标签值、标签分数以及检测框的位置信息。
 */
export interface ObjectDetail {
  /**
   * 序号
   */
  Id: number
  /**
   * 标签名称
   */
  Name: string
  /**
   * 标签值，
当标签为二维码时，表示URL地址，如Name为QrCode时，Value为"http//abc.com/aaa"
   */
  Value: string
  /**
   * 分数
   */
  Score: number
  /**
   * 检测框坐标
   */
  Location: Location
  /**
   * 二级标签名称
   */
  SubLabel: string
  /**
   * 图库或人脸库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * 图或人脸id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectId?: string
}

/**
 * OCR结果检测详情
 */
export interface OcrResult {
  /**
   * 场景识别结果
   */
  Scene: string
  /**
   * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
   */
  Suggestion: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 子标签检测结果
   */
  SubLabel: string
  /**
   * 该标签模型命中的分值
   */
  Score: number
  /**
   * ocr结果详情
   */
  Details: Array<OcrTextDetail>
  /**
   * ocr识别出的文本结果
   */
  Text: string
  /**
   * 是否命中结果，0 未命中 1命中
   */
  HitFlag: number
}

/**
 * 自定义库/黑白库明细
 */
export interface LibDetail {
  /**
   * 序号
   */
  Id: number
  /**
   * 仅当Label为Custom自定义关键词时有效，表示自定义库id
   */
  LibId: string
  /**
   * 仅当Label为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LibName: string
  /**
   * 图片ID
   */
  ImageId: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag: string
  /**
   * 命中的模型分值
   */
  Score: number
}

/**
 * 坐标
 */
export interface Location {
  /**
   * 左上角横坐标
   */
  X: number
  /**
   * 左上角纵坐标
   */
  Y: number
  /**
   * 宽度
   */
  Width: number
  /**
   * 高度
   */
  Height: number
  /**
   * 检测框的旋转角度
   */
  Rotate: number
}

/**
 * 分类模型命中结果
 */
export interface LabelResult {
  /**
   * 场景识别结果
   */
  Scene: string
  /**
   * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
   */
  Suggestion: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubLabel: string
  /**
   * 该标签模型命中的分值
   */
  Score: number
  /**
   * 分类模型命中子标签结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Details: Array<LabelDetailItem>
}

/**
 * 分类模型命中子标签结果
 */
export interface LabelDetailItem {
  /**
   * 序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 子标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 子标签分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score: number
}

/**
 * Device结果
 */
export interface Device {
  /**
   * 发表消息设备IP
   */
  Ip?: string
  /**
   * Mac地址
   */
  Mac?: string
  /**
   * 设备指纹Token
   */
  TokenId?: string
  /**
   * 设备指纹ID
   */
  DeviceId?: string
  /**
   * 设备序列号
   */
  IMEI?: string
  /**
   * IOS设备，Identifier For Advertising（广告标识符）
   */
  IDFA?: string
  /**
   * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
   */
  IDFV?: string
  /**
   * IP地址类型 0 代表ipv4 1 代表ipv6
   */
  IpType?: number
}

/**
 * 黑白库结果明细
 */
export interface LibResult {
  /**
   * 场景识别结果
   */
  Scene: string
  /**
   * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
   */
  Suggestion: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label: string
  /**
   * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubLabel: string
  /**
   * 该标签模型命中的分值
   */
  Score: number
  /**
   * 黑白库结果明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  Details: Array<LibDetail>
}

/**
 * ImageModeration返回参数结构体
 */
export interface ImageModerationResponse {
  /**
   * 数据是否属于恶意类型。
0：正常，1：可疑；
   */
  HitFlag?: number
  /**
   * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
   */
  Suggestion?: string
  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
   */
  Label?: string
  /**
   * 子标签名称，如色情--性行为；当未命中子标签时，返回空字符串；
   */
  SubLabel?: string
  /**
   * 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。
（如：色情 99.99，则该样本属于色情的置信度非常高。）
   */
  Score?: number
  /**
   * 智能模型的识别结果，包括涉黄、广告等令人反感、不安全或不适宜的内容类型识别结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelResults?: Array<LabelResult>
  /**
   * 物体检测模型的审核结果，包括实体、广告台标/二维码等物体坐标信息与内容审核信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectResults?: Array<ObjectResult>
  /**
   * OCR识别后的文本识别结果，包括文本所处图片的OCR坐标信息以及图片文本的识别结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrResults?: Array<OcrResult>
  /**
   * 基于图片风险库识别的结果。
风险库包括不安全黑库与正常白库的结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LibResults?: Array<LibResult>
  /**
   * 请求参数中的DataId。
   */
  DataId?: string
  /**
   * 您在入参时所填入的Biztype参数。 -- 该字段暂未开放。
   */
  BizType?: string
  /**
   * 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 该字段用于返回仅识别图片元素的模型结果；包括：场景模型命中的标签、置信度和位置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecognitionResults?: Array<RecognitionResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * User结果
 */
export interface User {
  /**
   * 业务用户ID 如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
   */
  UserId?: string
  /**
   * 业务用户ID类型 "1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
   */
  AccountType?: string
  /**
   * 用户昵称
   */
  Nickname?: string
  /**
   * 性别 默认0 未知 1 男性 2 女性
   */
  Gender?: number
  /**
   * 年龄 默认0 未知
   */
  Age?: number
  /**
   * 用户等级，默认0 未知 1 低 2 中 3 高
   */
  Level?: number
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 用户简介，长度不超过5000字
   */
  Desc?: string
  /**
   * 用户头像图片链接
   */
  HeadUrl?: string
}
