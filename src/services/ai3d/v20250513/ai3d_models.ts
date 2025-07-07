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
 * QueryHunyuanTo3DJob请求参数结构体
 */
export interface QueryHunyuanTo3DJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}

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
}

/**
 * SubmitHunyuanTo3DJob返回参数结构体
 */
export interface SubmitHunyuanTo3DJobResponse {
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
 * 3D文件
 */
export interface File3D {
  /**
   * 3D文件的格式。取值范围：OBJ
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
 * QueryHunyuanTo3DJob返回参数结构体
 */
export interface QueryHunyuanTo3DJobResponse {
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
 * SubmitHunyuanTo3DJob请求参数结构体
 */
export interface SubmitHunyuanTo3DJobRequest {
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
