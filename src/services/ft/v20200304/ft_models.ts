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
 * QueryFaceMorphJob返回参数结构体
 */
export interface QueryFaceMorphJobResponse {
  /**
   * 当前任务状态：排队中、处理中、处理失败或者处理完成
   */
  JobStatus?: string
  /**
   * 人像渐变输出的结果信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaceMorphOutput?: FaceMorphOutput
  /**
   * 当前任务状态码：1：排队中、3: 处理中、5: 处理失败、7:处理完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobStatusCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelFaceMorphJob返回参数结构体
 */
export interface CancelFaceMorphJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 人脸变年龄信息
 */
export interface AgeInfo {
  /**
   * 变化到的人脸年龄 [10,80]。
   */
  Age: number
  /**
   * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
   */
  FaceRect?: FaceRect
}

/**
 * 人脸框信息
 */
export interface FaceRect {
  /**
   * 人脸框左上角纵坐标。
   */
  Y: number
  /**
   * 人脸框左上角横坐标。
   */
  X: number
  /**
   * 人脸框宽度。
   */
  Width: number
  /**
   * 人脸框高度。
   */
  Height: number
}

/**
 * 人脸转换性别信息
 */
export interface GenderInfo {
  /**
   * 选择转换方向，0：男变女，1：女变男。
   */
  Gender: number
  /**
   * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
   */
  FaceRect?: FaceRect
}

/**
 * SwapGenderPic请求参数结构体
 */
export interface SwapGenderPicRequest {
  /**
   * 人脸转化性别信息。 
您可以输入最多3个 GenderInfo 来实现给一张图中的最多3张人脸转换性别。
   */
  GenderInfos: Array<GenderInfo>
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Image?: string
  /**
   * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Url?: string
  /**
   * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
   */
  RspImgType?: string
}

/**
 * 渐变参数
 */
export interface GradientInfo {
  /**
   * 图片的展示时长，即单张图片静止不变的时间。GIF默认每张图片0.7s，视频默认每张图片0.5s。最大取值1s。
   */
  Tempo?: number
  /**
   * 人像渐变的最长时间，即单张图片使用渐变特效的时间。 GIF默认值为0.5s，视频默值认为1s。最大取值1s。
   */
  MorphTime?: number
}

/**
 * SwapGenderPic返回参数结构体
 */
export interface SwapGenderPicResponse {
  /**
   * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
   */
  ResultImage?: string
  /**
   * RspImgType 为 url 时，返回处理后的图片 url 数据。
   */
  ResultUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 人像渐变返回结果
 */
export interface FaceMorphOutput {
  /**
   * 人像渐变输出的url
注意：此字段可能返回 null，表示取不到有效值。
   */
  MorphUrl?: string
  /**
   * 人像渐变输出的结果MD5，用于校验
注意：此字段可能返回 null，表示取不到有效值。
   */
  MorphMd5?: string
  /**
   * 人像渐变输出的结果封面图base64字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoverImage?: string
}

/**
 * MorphFace请求参数结构体
 */
export interface MorphFaceRequest {
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。 
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
人员人脸总数量至少2张，不可超过5张。 
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Images?: Array<string>
  /**
   * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 
人员人脸总数量不可超过5张。 
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
   */
  Urls?: Array<string>
  /**
   * 人脸渐变参数。可调整每张图片的展示时长、人像渐变的最长时间
   */
  GradientInfos?: Array<GradientInfo>
  /**
   * 视频帧率，取值[1,25]。默认10
   */
  Fps?: number
  /**
   * 视频类型，取值0。目前仅支持MP4格式，默认为MP4格式
   */
  OutputType?: number
  /**
   * 视频宽度，取值[128,1280]。默认值720
   */
  OutputWidth?: number
  /**
   * 视频高度，取值[128,1280]。默认值1280
   */
  OutputHeight?: number
}

/**
 * ChangeAgePic返回参数结构体
 */
export interface ChangeAgePicResponse {
  /**
   * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
   */
  ResultImage?: string
  /**
   * RspImgType 为 url 时，返回处理后的图片 url 数据。
   */
  ResultUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeAgePic请求参数结构体
 */
export interface ChangeAgePicRequest {
  /**
   * 人脸变老变年轻信息。 
您可以输入最多3个 AgeInfo 来实现给一张图中的最多3张人脸变老变年轻。
   */
  AgeInfos: Array<AgeInfo>
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Image?: string
  /**
   * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Url?: string
  /**
   * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。默认值为base64。
   */
  RspImgType?: string
}

/**
 * CancelFaceMorphJob请求参数结构体
 */
export interface CancelFaceMorphJobRequest {
  /**
   * 人像渐变任务Job id
   */
  JobId: string
}

/**
 * FaceCartoonPic请求参数结构体
 */
export interface FaceCartoonPicRequest {
  /**
   * 图片 base64 数据，base64 编码后大小不可超过5M。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Image?: string
  /**
   * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
   */
  Url?: string
  /**
   * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
   */
  RspImgType?: string
  /**
   * 关闭全图动漫化，传入true（不分大小写）即关闭全图动漫化。
   */
  DisableGlobalEffect?: string
}

/**
 * QueryFaceMorphJob请求参数结构体
 */
export interface QueryFaceMorphJobRequest {
  /**
   * 人像渐变任务Job id
   */
  JobId: string
}

/**
 * FaceCartoonPic返回参数结构体
 */
export interface FaceCartoonPicResponse {
  /**
   * 结果图片Base64信息。
   */
  ResultImage?: string
  /**
   * RspImgType 为 url 时，返回处理后的图片 url 数据。(默认为base64)
   */
  ResultUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MorphFace返回参数结构体
 */
export interface MorphFaceResponse {
  /**
   * 人像渐变任务的Job id
   */
  JobId?: string
  /**
   * 预估处理时间，粒度为秒
   */
  EstimatedProcessTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
