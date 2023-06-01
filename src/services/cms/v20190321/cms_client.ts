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
  CreateKeywordsSamplesResponse,
  CreateKeywordsSamplesRequest,
  CustomResult,
  TextData,
  DescribeKeywordsLibsRequest,
  DetailResult,
  ImageModerationResponse,
  TextModerationResponse,
  ImageModerationRequest,
  ImageData,
  UserKeywordInfo,
  DescribeLibSamplesResponse,
  DescribeLibSamplesRequest,
  DeleteSampleDetails,
  TextOutputID,
  User,
  DeleteLibSamplesResponse,
  Device,
  CodeDetect,
  ImageTerrorDetect,
  CodePosition,
  InvalidSample,
  TextOutputRes,
  RiskDetails,
  TextModerationRequest,
  OCRDetect,
  Coordinate,
  Similar,
  PhoneDetect,
  ImageHotDetect,
  TextOutputComm,
  KeywordsLibInfo,
  CodeDetail,
  UserKeyword,
  ImagePolityDetect,
  OCRItem,
  ImageIllegalDetect,
  RrectF,
  DeleteLibSamplesRequest,
  Filters,
  LogoDetail,
  Logo,
  DescribeKeywordsLibsResponse,
  ImagePornDetect,
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
   * 获取关键词接口
   */
  async DescribeLibSamples(
    req: DescribeLibSamplesRequest,
    cb?: (error: string, rep: DescribeLibSamplesResponse) => void
  ): Promise<DescribeLibSamplesResponse> {
    return this.request("DescribeLibSamples", req, cb)
  }

  /**
   * 获取用户词库列表
   */
  async DescribeKeywordsLibs(
    req: DescribeKeywordsLibsRequest,
    cb?: (error: string, rep: DescribeKeywordsLibsResponse) => void
  ): Promise<DescribeKeywordsLibsResponse> {
    return this.request("DescribeKeywordsLibs", req, cb)
  }

  /**
   * 创建关键词接口
   */
  async CreateKeywordsSamples(
    req: CreateKeywordsSamplesRequest,
    cb?: (error: string, rep: CreateKeywordsSamplesResponse) => void
  ): Promise<CreateKeywordsSamplesResponse> {
    return this.request("CreateKeywordsSamples", req, cb)
  }

  /**
   * 删除关键词接口
   */
  async DeleteLibSamples(
    req: DeleteLibSamplesRequest,
    cb?: (error: string, rep: DeleteLibSamplesResponse) => void
  ): Promise<DeleteLibSamplesResponse> {
    return this.request("DeleteLibSamples", req, cb)
  }
}
