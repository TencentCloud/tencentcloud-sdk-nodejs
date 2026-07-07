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
 * ImageTranslateLLM请求参数结构体
 */
export interface ImageTranslateLLMRequest {
  /**
   * <p>图片数据的Base64字符串，经Base64编码后不超过 9M，分辨率建议600*800以上，支持PNG、JPG、JPEG格式。</p>
   */
  Data: string
  /**
   * <p>目标语言，支持语言列表：</p><ul><li>中文：zh</li><li>繁体（中国台湾）：zh-TW</li><li>繁体（中国香港）：zh-HK</li><li>英文：en</li><li>日语：ja</li><li>韩语：ko</li><li>泰语：th</li><li>越南语：vi</li><li>俄语：ru</li><li>德语：de</li><li>法语：fr</li><li>阿拉伯语：ar</li><li>西班牙语：es</li><li>意大利语：it</li><li>印度尼西亚语：id</li><li>马来西亚语：ms</li><li>葡萄牙语：pt</li><li>土耳其语：tr<br>-</li></ul>
   */
  Target: string
  /**
   * <p>输入图 Url。 使用Url的时候，Data参数需要传入&quot;&quot;。 图片限制：小于 10MB，分辨率建议600*800以上，格式支持 jpg、jpeg、png。</p>
   */
  Url?: string
  /**
   * <p>调用模式。</p><p>枚举值：</p><ul><li>0： 端到端图片翻译大模型pro版</li><li>1： 端到端图片翻译大模型lite版</li></ul><p>默认值：0</p>
   */
  Mode?: number
}

/**
 * ImageTranslateLLM返回参数结构体
 */
export interface ImageTranslateLLMResponse {
  /**
   * <p>图片数据的Base64字符串，输出格式为JPG。</p>
   */
  Data?: string
  /**
   * <p>原文本主要源语言。</p>
   */
  Source?: string
  /**
   * <p>目标翻译语言。</p>
   */
  Target?: string
  /**
   * <p>图片中的全部原文本。</p>
   */
  SourceText?: string
  /**
   * <p>图片中全部译文。</p>
   */
  TargetText?: string
  /**
   * <p>逆时针图片角度，取值范围为0-359</p>
   */
  Angle?: number
  /**
   * <p>翻译详情信息</p>
   */
  TransDetails?: Array<TransDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 坐标详细信息
 */
export interface Coord {
  /**
   * X坐标
   */
  X?: number
  /**
   * Y坐标
   */
  Y?: number
}

/**
 * 大模型图片翻译详情信息
 */
export interface TransDetail {
  /**
   * <p>当前行的原文本</p>
   */
  SourceLineText?: string
  /**
   * <p>当前行的译文</p>
   */
  TargetLineText?: string
  /**
   * <p>段落文本框位置</p>
   */
  BoundingBox?: BoundingBox
  /**
   * <p>行数</p>
   */
  LinesCount?: number
  /**
   * <p>行高</p><p>单位：px</p>
   */
  LineHeight?: number
  /**
   * <p>正常段落spam_code字段为0；如果存在spam_code字段且值大于0（1: 命中垃圾检查；2: 命中安全策略；3: 其他。），则命中安全检查被过滤。</p>
   */
  SpamCode?: number
  /**
   * <p>段落文本旋转信息，只在valid为true时表示坐标有效</p>
   */
  RotateParagraphRect?: RotateParagraphRect
}

/**
 * 段落文本框位置：x，y代表左上顶点，width和height代表宽高
 */
export interface BoundingBox {
  /**
   * <p>左上顶点x坐标</p>
   */
  X?: number
  /**
   * <p>左上顶点y坐标</p>
   */
  Y?: number
  /**
   * <p>宽</p><p>单位：px</p>
   */
  Width?: number
  /**
   * <p>高</p><p>单位：px</p>
   */
  Height?: number
}

/**
 * 段落文本旋转信息
 */
export interface RotateParagraphRect {
  /**
   * 段落文本坐标
   */
  Coord?: Array<Coord>
  /**
   * 旋转角度
   */
  TiltAngle?: number
  /**
   * 段落文本信息是否有效
   */
  Valid?: boolean
}
