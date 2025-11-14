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
 * 多视角图片
 */
export interface ViewImage {
  /**
   * 视角类型。
取值：back、left、right
   */
  ViewType?: string
  /**
   * 图片Url地址
   */
  ViewImageUrl?: string
  /**
   * 图片base64地址
   */
  ViewImageBase64?: string
}

/**
 * SubmitHunyuanTo3DRapidJob请求参数结构体
 */
export interface SubmitHunyuanTo3DRapidJobRequest {
  /**
   * 文生3D，3D内容的描述，中文正向提示词。
最多支持200个 utf-8 字符。
文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。
   */
  Prompt?: string
  /**
   * 输入图 Base64 数据。
大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）
格式：jpg，png，jpeg，webp。
ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。
   */
  ImageBase64?: string
  /**
   * 输入图Url。
大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）
格式：jpg，png，jpeg，webp。
ImageBase64/ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。
   */
  ImageUrl?: string
  /**
   * 生成模型的格式，仅限制生成一种格式。
生成模型文件组默认返回obj格式。
可选值：OBJ，GLB，STL，USDZ，FBX，MP4。
   */
  ResultFormat?: string
  /**
   * 是否开启 PBR材质生成，默认 false。
   */
  EnablePBR?: boolean
}

/**
 * SubmitHunyuanTo3DProJob返回参数结构体
 */
export interface SubmitHunyuanTo3DProJobResponse {
  /**
   * 任务ID（有效期24小时）
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitHunyuanTo3DProJob请求参数结构体
 */
export interface SubmitHunyuanTo3DProJobRequest {
  /**
   * 文生3D，3D内容的描述，中文正向提示词。
最多支持1024个 utf-8 字符。
文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。
   */
  Prompt?: string
  /**
   * 输入图 Base64 数据。
大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）
格式：jpg，png，jpeg，webp。
ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。
   */
  ImageBase64?: string
  /**
   * 输入图Url。
大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）
格式：jpg，png，jpeg，webp。
ImageBase64/ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。
   */
  ImageUrl?: string
  /**
   * 多视角的模型图片，视角参考值：
left：左视图；
right：右视图；
back：后视图；

每个视角仅限制一张图片。
●图片大小限制：编码后大小不可超过8M。
●图片分辨率限制：单边分辨率小于5000且大于128。
●支持图片格式：支持jpg或png
   */
  MultiViewImages?: Array<ViewImage>
  /**
   * 是否开启 PBR材质生成，默认 false。
   */
  EnablePBR?: boolean
  /**
   * 生成3D模型的面数，默认值为500000。
可支持生成面数范围，参考值：40000-1500000。
   */
  FaceCount?: number
  /**
   * 生成任务类型，默认Normal，参考值：
Normal：可生成带纹理的几何模型。
LowPoly：可生成智能减面后的模型。
Geometry：可生成不带纹理的几何模型（白模），选择此任务时，EnablePBR参数不生效。
Sketch：可输入草图或线稿图生成模型，此模式下prompt和ImageUrl/ImageBase64可一起输入。
   */
  GenerateType?: string
  /**
   * 该参数仅在GenerateType中选择LowPoly模式可生效。

多边形类型，表示模型的表面由几边形网格构成，默认为triangle,参考值:
triangle: 三角形面。
quadrilateral: 四边形面与三角形面混合生成。
   */
  PolygonType?: string
}

/**
 * QueryHunyuanTo3DProJob请求参数结构体
 */
export interface QueryHunyuanTo3DProJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * 3D文件
 */
export interface File3D {
  /**
   * 文件格式
   */
  Type?: string
  /**
   * 文件的Url（有效期24小时）
   */
  Url?: string
  /**
   * 预览图片Url
   */
  PreviewImageUrl?: string
}

/**
 * QueryHunyuanTo3DRapidJob返回参数结构体
 */
export interface QueryHunyuanTo3DRapidJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 错误码
   */
  ErrorCode?: string
  /**
   * 错误信息
   */
  ErrorMessage?: string
  /**
   * 生成的3D文件数组。
   */
  ResultFile3Ds?: Array<File3D>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuanTo3DProJob返回参数结构体
 */
export interface QueryHunyuanTo3DProJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 错误码
   */
  ErrorCode?: string
  /**
   * 错误信息
   */
  ErrorMessage?: string
  /**
   * 生成的3D文件数组。
   */
  ResultFile3Ds?: Array<File3D>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitHunyuanTo3DRapidJob返回参数结构体
 */
export interface SubmitHunyuanTo3DRapidJobResponse {
  /**
   * 任务ID（有效期24小时）
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuanTo3DRapidJob请求参数结构体
 */
export interface QueryHunyuanTo3DRapidJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}
