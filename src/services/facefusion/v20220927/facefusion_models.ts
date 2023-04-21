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
 * 素材信息
 */
export interface PublicMaterialInfos {
  /**
   * 素材Id
   */
  MaterialId: string

  /**
   * 素材状态
   */
  MaterialStatus: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  UpdateTime: string

  /**
   * 人脸信息
   */
  MaterialFaceList: Array<MaterialFaces>

  /**
   * 素材名
   */
  MaterialName: string
}

/**
 * DescribeMaterialList返回参数结构体
 */
export interface DescribeMaterialListResponse {
  /**
   * 素材列表数据
   */
  MaterialInfos?: Array<PublicMaterialInfos>

  /**
   * 素材条数
   */
  Count?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 人脸信息
 */
export interface FaceInfo {
  /**
   * 人脸框的横坐标
   */
  X: number

  /**
   * 人脸框的纵坐标
   */
  Y: number

  /**
   * 人脸框的宽度
   */
  Width: number

  /**
   * 人脸框的高度
   */
  Height: number
}

/**
 * 人脸信息
 */
export interface MaterialFaces {
  /**
   * 人脸序号
   */
  FaceId?: string

  /**
   * 人脸框信息
   */
  FaceInfo?: FaceInfo
}

/**
 * 人脸图片和待被融合的素材模板图的人脸位置信息。
 */
export interface MergeInfo {
  /**
   * 输入图片base64
   */
  Image?: string

  /**
   * 输入图片url
   */
  Url?: string

  /**
   * 上传的图片人脸位置信息（人脸框）
   */
  InputImageFaceRect?: FaceRect

  /**
   * 控制台上传的素材人脸ID，不填默认取最大人脸
   */
  TemplateFaceID?: string
}

/**
 * FuseFace返回参数结构体
 */
export interface FuseFaceResponse {
  /**
   * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
   */
  FusedImage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FuseFace请求参数结构体
 */
export interface FuseFaceRequest {
  /**
   * 活动 ID，请在<a href="https://console.cloud.tencent.com/facefusion" target="_blank">人脸融合控制台</a>查看。
   */
  ProjectId: string

  /**
   * 素材 ID，请在<a href="https://console.cloud.tencent.com/facefusion" target="_blank">人脸融合控制台</a>查看。
   */
  ModelId: string

  /**
   * 返回图像方式（url 或 base64) ，二选一。url有效期为7天。
   */
  RspImgType: string

  /**
   * 用户人脸图片、素材模板图的人脸位置信息。
   */
  MergeInfos: Array<MergeInfo>

  /**
      * 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100] 
若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整）
      */
  FuseProfileDegree?: number

  /**
      * 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100] 
若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整）
      */
  FuseFaceDegree?: number

  /**
      * 为融合结果图添加合成标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示结果图使用了人脸融合技术，是AI合成的图片。
      */
  LogoAdd?: number

  /**
      * 标识内容设置。
默认在融合结果图右下角添加“本图片为AI合成图片”字样，您可根据自身需要替换为其他的Logo图片。
      */
  LogoParam?: LogoParam
}

/**
 * 人脸框信息
 */
export interface FaceRect {
  /**
   * 人脸框左上角横坐标。
   */
  X: number

  /**
   * 人脸框左上角纵坐标。
   */
  Y: number

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
 * DescribeMaterialList请求参数结构体
 */
export interface DescribeMaterialListRequest {
  /**
   * 活动Id
   */
  ActivityId: string

  /**
   * 素材Id
   */
  MaterialId?: string

  /**
   * 每次拉取条数
   */
  Limit?: number

  /**
   * 偏移量
   */
  Offset?: number
}

/**
 * logo参数
 */
export interface LogoParam {
  /**
   * 标识图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
   */
  LogoRect: FaceRect

  /**
   * 标识图片Url地址
   */
  LogoUrl?: string

  /**
   * 标识图片base64
   */
  LogoImage?: string
}
