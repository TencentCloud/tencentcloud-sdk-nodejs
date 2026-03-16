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
 * Convert3DFormat请求参数结构体
 */
export interface Convert3DFormatRequest {
  /**
   * 3D文件url地址，模型文件大小≤60m，支持fbx，obj，glb格式3D文件输入。
   */
  File3D: string
  /**
   * 返回的3D文件格式，参考值：STL, USDZ, FBX, MP4, GIF。
   */
  Format: string
}

/**
 * DescribeReduceFaceJob返回参数结构体
 */
export interface DescribeReduceFaceJobResponse {
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
 * SubmitReduceFaceJob返回参数结构体
 */
export interface SubmitReduceFaceJobResponse {
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
 * Convert3DFormat返回参数结构体
 */
export interface Convert3DFormatResponse {
  /**
   * 3D文件地址
   */
  ResultFile3D?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuanTo3DProJob请求参数结构体
 */
export interface QueryHunyuanTo3DProJobRequest {
  /**
   * <p>任务ID。</p>
   */
  JobId: string
}

/**
 * QueryHunyuan3DPartJob返回参数结构体
 */
export interface QueryHunyuan3DPartJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 示例值：RUN。
   */
  Status?: string
  /**
   * 错误码。
   */
  ErrorCode?: string
  /**
   * 错误信息。
   */
  ErrorMessage?: string
  /**
   * 生成文件的URL地址，有效期1天。
   */
  ResultFile3Ds?: Array<File3D>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * SubmitTextureTo3DJob请求参数结构体
 */
export interface SubmitTextureTo3DJobRequest {
  /**
   * <p>源3D模型文件。<br>Type可选值：OBJ，GLB</p>
   */
  File3D: File3D
  /**
   * <p>文生3D，3D内容的描述，中文正向提示词。<br>最多支持200个 utf-8 字符。<br>文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。</p>
   */
  Prompt?: string
  /**
   * <p>3D模型纹理参考图 Base64 数据和参考图 Url。</p><ul><li>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。</li><li>图片限制：单边分辨率小于4096且大于128，转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png。</li></ul>
   */
  Image?: Image
  /**
   * <p>是否开启 PBR材质生成，默认 false。</p>
   */
  EnablePBR?: boolean
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
  /**
   * 图片base64地址
   */
  ViewImageBase64?: string
}

/**
 * DescribeReduceFaceJob请求参数结构体
 */
export interface DescribeReduceFaceJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
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
 * SubmitHunyuanTo3DUVJob请求参数结构体
 */
export interface SubmitHunyuanTo3DUVJobRequest {
  /**
   * 需进行UV展开的3D文件URL，可支持FBX,OBJ,GLB格式。
   */
  File?: InputFile3D
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
 * SubmitProfileTo3DJob请求参数结构体
 */
export interface SubmitProfileTo3DJobRequest {
  /**
   * 真人头像参考图 Base64 数据和参考图 Url。
- Base64 和 Url 必须提供一个，如果都提供以 Url 为准。
- 图片限制：单边分辨率小于4096且大于500，转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png。
   */
  Profile?: Image
  /**
   * 生成人物模板，参考值：

basketball: 动感球手；

badminton: 羽扬中华；

pingpong: 国球荣耀；

gymnastics:勇攀巅峰；

pilidance: 舞动青春；

tennis: 网球甜心；

athletics: 东方疾风；

footballboykicking1:激情逐风；

footballboykicking2: 绿茵之星；

guitar:甜酷弦音；

footballboy: 足球小将；

skateboard: 滑跃青春；

futuresoilder: 未来战士；

explorer: 逐梦旷野；

beardollgirl:可爱女孩；

bibpantsboy:都市白领；

womansitpose: 职业丽影；

womanstandpose2: 悠闲时光；

mysteriousprincess: 海洋公主；

manstandpose2: 演讲之星；
   */
  Template?: string
}

/**
 * DescribeTextureTo3DJob返回参数结构体
 */
export interface DescribeTextureTo3DJobResponse {
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
 * DescribeProfileTo3DJob请求参数结构体
 */
export interface DescribeProfileTo3DJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}

/**
 * 3D文件
 */
export interface InputFile3D {
  /**
   * 文件的Url（有效期24小时）
   */
  Url: string
  /**
   * 文件格式
   */
  Type: string
}

/**
 * SubmitProfileTo3DJob返回参数结构体
 */
export interface SubmitProfileTo3DJobResponse {
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
 * SubmitHunyuanTo3DRapidJob请求参数结构体
 */
export interface SubmitHunyuanTo3DRapidJobRequest {
  /**
   * 文生3D，3D内容的描述，中文正向提示词。
最多支持200个 utf-8 字符。
文生3D, ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。
   */
  Prompt?: string
  /**
   * 输入图 Base64 数据。
大小: 单边分辨率要求不小于128，不大于5000，大小≤6m (因base64编码后会大30%左右)
格式: jpg，png，jpeg，webp.
lmageBase64、lmageUr和 Prompt必填其一，且Prompt和lmageBase64/mageUr不能同时存在。
   */
  ImageBase64?: string
  /**
   * 输入图Url
大小: 单边分辨率要求不小于128，不大于5000，大小≤8m
格式: jpg，png，jpeg，webp.
lmageBase64、lmageUr和 Prompt必填其一，且Prompt和lmageBase64/mageUr不能同时存在。
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
  /**
   * 是否开启单几何生成选项，开启后会生成不带纹理的3D模型（白模）； 开启时，生成模型文件不支持OBJ格式，默认生成模型文件为GLB格式。
   */
  EnableGeometry?: boolean
}

/**
 * SubmitHunyuanTo3DUVJob返回参数结构体
 */
export interface SubmitHunyuanTo3DUVJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitHunyuan3DPartJob返回参数结构体
 */
export interface SubmitHunyuan3DPartJobResponse {
  /**
   * <p>任务ID。</p>
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
   * <p>混元生3D生成模型版本，默认为3.0，可选项：3.0，3.1<br>选择3.1版本时，LowPoly参数不可用。</p>
   */
  Model?: string
  /**
   * <p>文生3D，3D内容的描述，中文正向提示词。<br>最多支持1024个 utf-8 字符。<br>ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。</p>
   */
  Prompt?: string
  /**
   * <p>输入图 Base64 数据。<br>大小: 单边分辨率要求不小于128，不大于5000，大小≤6m (因base64编码后会大30%左右)<br>格式: jpg，png，jpeg，webp.<br>lmageBase64、lmageUr和 Prompt必填其一，且Prompt和lmageBase64/mageUr不能同时存在。</p>
   */
  ImageBase64?: string
  /**
   * <p>输入图Url<br>大小: 单边分辨率要求不小于128，不大于5000，大小≤8m<br>格式: jpg，png，jpeg，webp.<br>lmageBase64、lmageUr和 Prompt必填其一，且Prompt和lmageBase64/mageUr不能同时存在。</p>
   */
  ImageUrl?: string
  /**
   * <p>多视角的模型图片，视角参考值：<br>left：左视图；<br>right：右视图；<br>back：后视图；<br>top：顶视图（仅3.1版本支持）；<br>bottom：底视图（仅3.1版本支持）；<br>left_front：左前45°视图（仅3.1版本支持）；<br>right_front：右前45°视图（仅3.1版本支持）；</p><p>每个视角仅限制一张图片。<br>●图片大小限制：编码后所有图片大小总和不可超过8M。（base64编码下图片大小总和不超过6M，因base64编码后图片大小会大30%左右）<br>●图片分辨率限制：单边分辨率小于5000且大于128。<br>●支持图片格式：支持jpg或png</p>
   */
  MultiViewImages?: Array<ViewImage>
  /**
   * <p>是否开启 PBR材质生成，默认 false。</p>
   */
  EnablePBR?: boolean
  /**
   * <p>生成3D模型的面数，默认值为500000。可支持生成面数范围，参考值：3000-1500000。GenerateType中选择LowPoly时，此参数不生效。</p><p>取值范围：[3000, 1500000]</p>
   */
  FaceCount?: number
  /**
   * <p>生成任务类型，默认Normal</p><p>枚举值：</p><ul><li>Normal： 可生成带纹理的几何模型</li><li>LowPoly： 可生成智能拓扑后的模型，FaceCount参数不生效。</li><li>Geometry： 可生成不带纹理的几何模型（白模），EnablePBR参数不生效。</li><li>Sketch： 可输入草图或线稿图生成模型，此模式下prompt和ImageUrl/ImageBase64可一起输入。</li></ul>
   */
  GenerateType?: string
  /**
   * <p>该参数仅在GenerateType中选择LowPoly模式可生效。</p><p>多边形类型，表示模型的表面由几边形网格构成，默认为triangle,参考值:<br>triangle: 三角形面。<br>quadrilateral: 四边形面与三角形面混合生成。</p>
   */
  PolygonType?: string
  /**
   * <p>生成模型的格式，仅限制生成一种格式； 生成模型文件组默认返回obj、glb格式（开启时Geometry参数时，默认为glb格式）； 可选值：STL，USDZ，FBX；</p>
   */
  ResultFormat?: string
}

/**
 * DescribeProfileTo3DJob返回参数结构体
 */
export interface DescribeProfileTo3DJobResponse {
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
 * DescribeHunyuanTo3DUVJob返回参数结构体
 */
export interface DescribeHunyuanTo3DUVJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 示例值：RUN。
   */
  Status?: string
  /**
   * 错误码。
   */
  ErrorCode?: string
  /**
   * 错误信息。
   */
  ErrorMessage?: string
  /**
   * 生成文件的URL地址，有效期1天。
   */
  ResultFile3Ds?: Array<File3D>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitReduceFaceJob请求参数结构体
 */
export interface SubmitReduceFaceJobRequest {
  /**
   * 源3D模型文件。其中参数 Type 和 Url 必填，参数 PreviewImageUrl 无意义，可忽略。
Type可选值：OBJ，GLB

   */
  File3D: File3D
  /**
   * 多边形类型，表示模型的表面由几边形网格构成，默认为triangle,参考值:
triangle:三角形面。
quadrilateral：四边形面。
   */
  PolygonType?: string
  /**
   * 减面后面数档位类型，可选值：high，medium, low。
   */
  FaceLevel?: string
}

/**
 * DescribeTextureTo3DJob请求参数结构体
 */
export interface DescribeTextureTo3DJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}

/**
 * DescribeHunyuanTo3DUVJob请求参数结构体
 */
export interface DescribeHunyuanTo3DUVJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * SubmitHunyuan3DPartJob请求参数结构体
 */
export interface SubmitHunyuan3DPartJobRequest {
  /**
   * <p>需进行组件生成的3D模型文件，仅支持FBX格式。</p>
   */
  File?: InputFile3D
  /**
   * <p>组件生成模型版本，默认为1.5</p><p>枚举值：</p><ul><li>1.5： 1.5模型</li></ul><p>默认值：1.5</p>
   */
  Model?: string
}

/**
 * SubmitHunyuanTo3DProJob返回参数结构体
 */
export interface SubmitHunyuanTo3DProJobResponse {
  /**
   * <p>任务ID（有效期24小时）</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTextureTo3DJob返回参数结构体
 */
export interface SubmitTextureTo3DJobResponse {
  /**
   * <p>任务ID（有效期24小时）</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 图片
 */
export interface Image {
  /**
   * 图片base64
   */
  Base64?: string
  /**
   * 图片url
   */
  Url?: string
}

/**
 * QueryHunyuanTo3DProJob返回参数结构体
 */
export interface QueryHunyuanTo3DProJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>错误码</p>
   */
  ErrorCode?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMessage?: string
  /**
   * <p>生成的3D文件数组。</p>
   */
  ResultFile3Ds?: Array<File3D>
  /**
   * <p>接口任务功能参数及积分详情，返回形式为字符串。Generate参数返回对应模式及消耗积分，如：Generate-Normal：20<br>附加参数返回参数名称及消耗积分，如：MultiViewImages：10</p>
   */
  ResultCreditDetails?: string
  /**
   * <p>任务总消耗积分。</p>
   */
  ResultCreditConsumed?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuan3DPartJob请求参数结构体
 */
export interface QueryHunyuan3DPartJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
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
