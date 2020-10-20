/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CustomResult,
  TextData,
  TextModerationRequest,
  DetailResult,
  ImageModerationResponse,
  TextModerationResponse,
  ImageModerationRequest,
  CreateFileSampleRequest,
  ImageData,
  ImagePornDetect,
  DeleteTextSampleResponse,
  TextSample,
  CreateTextSampleResponse,
  TextOutputID,
  ManualReviewRequest,
  User,
  FileSampleInfo,
  DescribeFileSampleRequest,
  Device,
  CodeDetect,
  ImageTerrorDetect,
  DescribeTextSampleResponse,
  CodePosition,
  DeleteFileSampleResponse,
  FileSample,
  DescribeFileSampleResponse,
  TextOutputRes,
  RiskDetails,
  CreateTextSampleRequest,
  DeleteFileSampleRequest,
  Filter,
  ManualReviewData,
  OCRDetect,
  ManualReviewContent,
  Coordinate,
  Similar,
  ImageHotDetect,
  TextOutputComm,
  DescribeTextSampleRequest,
  CodeDetail,
  ImagePolityDetect,
  OCRItem,
  ImageIllegalDetect,
  RrectF,
  CreateFileSampleResponse,
  ManualReviewResponse,
  LogoDetail,
  Logo,
  PhoneDetect,
  DeleteTextSampleRequest,
} from "./cms_models"

/**
 * cms client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cms.tencentcloudapi.com", "2019-03-21", clientConfig)
  }

  /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
删除文本样本库，暂时只支持单个删除。
     */
  async DeleteTextSample(
    req: DeleteTextSampleRequest,
    cb?: (error: string, rep: DeleteTextSampleResponse) => void
  ): Promise<DeleteTextSampleResponse> {
    return this.request("DeleteTextSample", req, cb)
  }

  /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
通过该接口可以将文本新增到样本库。
     */
  async CreateTextSample(
    req: CreateTextSampleRequest,
    cb?: (error: string, rep: CreateTextSampleResponse) => void
  ): Promise<CreateTextSampleResponse> {
    return this.request("CreateTextSample", req, cb)
  }

  /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
通过该接口可以将图片新增到样本库。
     */
  async CreateFileSample(
    req: CreateFileSampleRequest,
    cb?: (error: string, rep: CreateFileSampleResponse) => void
  ): Promise<CreateFileSampleResponse> {
    return this.request("CreateFileSample", req, cb)
  }

  /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
支持批量查询文本样本库。
     */
  async DescribeTextSample(
    req: DescribeTextSampleRequest,
    cb?: (error: string, rep: DescribeTextSampleResponse) => void
  ): Promise<DescribeTextSampleResponse> {
    return this.request("DescribeTextSample", req, cb)
  }

  /**
   * 人工审核对外接口
   */
  async ManualReview(
    req: ManualReviewRequest,
    cb?: (error: string, rep: ManualReviewResponse) => void
  ): Promise<ManualReviewResponse> {
    return this.request("ManualReview", req, cb)
  }

  /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
查询图片样本库，支持批量查询。
     */
  async DescribeFileSample(
    req: DescribeFileSampleRequest,
    cb?: (error: string, rep: DescribeFileSampleResponse) => void
  ): Promise<DescribeFileSampleResponse> {
    return this.request("DescribeFileSample", req, cb)
  }

  /**
   * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
   */
  async TextModeration(
    req: TextModerationRequest,
    cb?: (error: string, rep: TextModerationResponse) => void
  ): Promise<TextModerationResponse> {
    return this.request("TextModeration", req, cb)
  }

  /**
   * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
   */
  async ImageModeration(
    req: ImageModerationRequest,
    cb?: (error: string, rep: ImageModerationResponse) => void
  ): Promise<ImageModerationResponse> {
    return this.request("ImageModeration", req, cb)
  }

  /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
删除图片样本库，支持批量删除，一次提交不超过20个。
     */
  async DeleteFileSample(
    req: DeleteFileSampleRequest,
    cb?: (error: string, rep: DeleteFileSampleResponse) => void
  ): Promise<DeleteFileSampleResponse> {
    return this.request("DeleteFileSample", req, cb)
  }
}
