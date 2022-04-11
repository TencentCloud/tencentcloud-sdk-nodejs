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
  ReqMetadataVagrant,
  GetIndustryV1HomeMembersRespIndustry,
  ReqMetadata,
  GetIndustryV1HomeMembersRespData,
  GetIndustryV1HomeMembersRequest,
  GetIndustryV1HomeMembersRespFeature,
  GetIndustryV1HomeMembersReqPayload,
  GetIndustryV1HomeMembersRespProduct,
  RspMetadata,
  GetIndustryV1HomeMembersRespPayload,
  GetIndustryV1HomeMembersResponse,
  ReqMetadataLBS,
  GetIndustryV1HomeMembersRespType,
} from "./icr_models"

/**
 * icr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("icr.tencentcloudapi.com", "2021-10-14", clientConfig)
  }

  /**
   * 获取成员列表接口
   */
  async GetIndustryV1HomeMembers(
    req: GetIndustryV1HomeMembersRequest,
    cb?: (error: string, rep: GetIndustryV1HomeMembersResponse) => void
  ): Promise<GetIndustryV1HomeMembersResponse> {
    return this.request("GetIndustryV1HomeMembers", req, cb)
  }
}
