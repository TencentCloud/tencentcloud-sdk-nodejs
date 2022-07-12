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
  UserIdInfo,
  ReportMaterialResponse,
  DocBehavior,
  AuthorInfo,
  DocItem,
  ReportActionResponse,
  DislikeInfo,
  ReportPortraitRequest,
  ReportPortraitResponse,
  ReportActionRequest,
  PortraitInfo,
  RecommendContentRequest,
  RecItemData,
  ReportMaterialRequest,
  RecommendContentResponse,
  TagInfo,
} from "./irp_models"

/**
 * irp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("irp.tencentcloudapi.com", "2022-03-24", clientConfig)
  }

  /**
   * 获取推荐结果
   */
  async RecommendContent(
    req: RecommendContentRequest,
    cb?: (error: string, rep: RecommendContentResponse) => void
  ): Promise<RecommendContentResponse> {
    return this.request("RecommendContent", req, cb)
  }

  /**
   * 上报物料
   */
  async ReportMaterial(
    req: ReportMaterialRequest,
    cb?: (error: string, rep: ReportMaterialResponse) => void
  ): Promise<ReportMaterialResponse> {
    return this.request("ReportMaterial", req, cb)
  }

  /**
   * 上报行为
   */
  async ReportAction(
    req: ReportActionRequest,
    cb?: (error: string, rep: ReportActionResponse) => void
  ): Promise<ReportActionResponse> {
    return this.request("ReportAction", req, cb)
  }

  /**
   * 上报用户画像
   */
  async ReportPortrait(
    req: ReportPortraitRequest,
    cb?: (error: string, rep: ReportPortraitResponse) => void
  ): Promise<ReportPortraitResponse> {
    return this.request("ReportPortrait", req, cb)
  }
}
