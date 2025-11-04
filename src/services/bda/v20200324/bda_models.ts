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
 * CreateSegmentationTask请求参数结构体
 */
export interface CreateSegmentationTaskRequest {
  /**
   * 需要分割的视频URL，可外网访问。
   */
  VideoUrl: string
  /**
   * 背景图片URL。 
可以将视频背景替换为输入的图片。 
如果不输入背景图片，则输出人像区域mask。
   */
  BackgroundImageUrl?: string
  /**
   * 预留字段，后期用于展示更多识别信息。
   */
  Config?: string
}

/**
 * CreateSegmentationTask返回参数结构体
 */
export interface CreateSegmentationTaskResponse {
  /**
   * 任务标识ID,可以用与追溯任务状态，查看任务结果
   */
  TaskID?: string
  /**
   * 预估处理时间，单位为秒
   */
  EstimatedProcessingTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSegmentationTask返回参数结构体
 */
export interface DescribeSegmentationTaskResponse {
  /**
   * 当前任务状态：
QUEUING 排队中
PROCESSING 处理中
FINISHED 处理完成
   */
  TaskStatus?: string
  /**
   * 分割后视频URL, 存储于腾讯云COS
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultVideoUrl?: string
  /**
   * 分割后视频MD5，用于校验
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultVideoMD5?: string
  /**
   * 视频基本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoBasicInformation?: VideoBasicInformation
  /**
   * 分割任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频基础信息
 */
export interface VideoBasicInformation {
  /**
   * 视频宽度
   */
  FrameWidth: number
  /**
   * 视频高度
   */
  FrameHeight: number
  /**
   * 视频帧速率(FPS)
   */
  FramesPerSecond: number
  /**
   * 视频时长
   */
  Duration: number
  /**
   * 视频帧数
   */
  TotalFrames: number
}

/**
 * SegmentPortraitPic返回参数结构体
 */
export interface SegmentPortraitPicResponse {
  /**
   * 处理后的图片 base64 数据，透明背景图。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultImage?: string
  /**
   * 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultMask?: string
  /**
   * 图片是否存在前景。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasForeground?: boolean
  /**
   * 支持将处理过的图片 base64 数据，透明背景图以Url的形式返回值，Url有效期为30分钟。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultImageUrl?: string
  /**
   * 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。支持以Url形式的返回值；Url有效期为30分钟。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultMaskUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。
 */
export interface SegmentationOptions {
  /**
   * 分割选项-背景
   */
  Background?: boolean
  /**
   * 分割选项-头发
   */
  Hair?: boolean
  /**
   * 分割选项-左眉
   */
  LeftEyebrow?: boolean
  /**
   * 分割选项-右眉
   */
  RightEyebrow?: boolean
  /**
   * 分割选项-左眼
   */
  LeftEye?: boolean
  /**
   * 分割选项-右眼
   */
  RightEye?: boolean
  /**
   * 分割选项-鼻子
   */
  Nose?: boolean
  /**
   * 分割选项-上唇
   */
  UpperLip?: boolean
  /**
   * 分割选项-下唇
   */
  LowerLip?: boolean
  /**
   * 分割选项-牙齿
   */
  Tooth?: boolean
  /**
   * 分割选项-口腔（不包含牙齿）
   */
  Mouth?: boolean
  /**
   * 分割选项-左耳
   */
  LeftEar?: boolean
  /**
   * 分割选项-右耳
   */
  RightEar?: boolean
  /**
   * 分割选项-面部(不包含眼、耳、口、鼻等五官及头发。)
   */
  Face?: boolean
  /**
   * 复合分割选项-头部(包含所有的头部元素，相关装饰除外)
   */
  Head?: boolean
  /**
   * 分割选项-身体（包含脖子）
   */
  Body?: boolean
  /**
   * 分割选项-帽子
   */
  Hat?: boolean
  /**
   * 分割选项-头饰
   */
  Headdress?: boolean
  /**
   * 分割选项-耳环
   */
  Earrings?: boolean
  /**
   * 分割选项-项链
   */
  Necklace?: boolean
  /**
   * 分割选项-随身物品（ 例如伞、包、手机等。 ）
   */
  Belongings?: boolean
}

/**
 * TerminateSegmentationTask返回参数结构体
 */
export interface TerminateSegmentationTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SegmentCustomizedPortraitPic返回参数结构体
 */
export interface SegmentCustomizedPortraitPicResponse {
  /**
   * 根据指定标签分割输出的透明背景人像图片的 base64 数据。
   */
  PortraitImage?: string
  /**
   * 指定标签处理后的Mask。一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）
   */
  MaskImage?: string
  /**
   * 坐标信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageRects?: Array<ImageRect>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SegmentPortraitPic请求参数结构体
 */
export interface SegmentPortraitPicRequest {
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。
图片分辨率须小于2000*2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Image?: string
  /**
   * 图片的 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Url?: string
  /**
   * 返回图像方式（base64 或 Url ) ，二选一。url有效期为30分钟。
   */
  RspImgType?: string
  /**
   * 适用场景类型。

取值：GEN/GS。GEN为通用场景模式；GS为绿幕场景模式，针对绿幕场景下的人像分割效果更好。
两种模式选择一种传入，默认为GEN。
   */
  Scene?: string
}

/**
 * SegmentCustomizedPortraitPic请求参数结构体
 */
export interface SegmentCustomizedPortraitPicRequest {
  /**
   * 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。
   */
  SegmentationOptions: SegmentationOptions
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。
图片分辨率须小于2000*2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Image?: string
  /**
   * 图片的 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Url?: string
}

/**
 * DescribeSegmentationTask请求参数结构体
 */
export interface DescribeSegmentationTaskRequest {
  /**
   * 在提交分割任务成功时返回的任务标识ID。
   */
  TaskID: string
}

/**
 * TerminateSegmentationTask请求参数结构体
 */
export interface TerminateSegmentationTaskRequest {
  /**
   * 在提交分割任务成功时返回的任务标识ID。
   */
  TaskID: string
}

/**
 * 图像坐标信息。
 */
export interface ImageRect {
  /**
   * 左上角横坐标。
   */
  X: number
  /**
   * 左上角纵坐标。
   */
  Y: number
  /**
   * 人体宽度。
   */
  Width: number
  /**
   * 人体高度。
   */
  Height: number
  /**
   * 分割选项名称。
   */
  Label: string
}
