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
  ModifyDbauditInstancesRenewFlagResponse,
  DescribeDbauditInstanceTypeResponse,
  InquiryPriceDbauditInstanceResponse,
  CdsAuditInstance,
  ModifyDbauditInstancesRenewFlagRequest,
  DescribeDbauditUsedRegionsResponse,
  DescribeDbauditInstancesRequest,
  DescribeDbauditInstanceTypeRequest,
  RegionInfo,
  DescribeDbauditInstancesResponse,
  DbauditTypesInfo,
  DescribeDbauditUsedRegionsRequest,
  InquiryPriceDbauditInstanceRequest,
  DescribeDasbImageIdsResponse,
  DescribeDasbImageIdsRequest,
} from "./cds_models"

/**
 * cds client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cds.tencentcloudapi.com", "2018-04-20", clientConfig)
  }

  /**
   * 获取镜像列表
   */
  async DescribeDasbImageIds(
    req?: DescribeDasbImageIdsRequest,
    cb?: (error: string, rep: DescribeDasbImageIdsResponse) => void
  ): Promise<DescribeDasbImageIdsResponse> {
    return this.request("DescribeDasbImageIds", req, cb)
  }

  /**
   * 本接口 (ModifyDbauditInstancesRenewFlag) 用于修改数据安全审计产品实例续费标识
   */
  async ModifyDbauditInstancesRenewFlag(
    req: ModifyDbauditInstancesRenewFlagRequest,
    cb?: (error: string, rep: ModifyDbauditInstancesRenewFlagResponse) => void
  ): Promise<ModifyDbauditInstancesRenewFlagResponse> {
    return this.request("ModifyDbauditInstancesRenewFlag", req, cb)
  }

  /**
   * 本接口 (DescribeDbauditInstances) 用于查询数据安全审计实例列表
   */
  async DescribeDbauditInstances(
    req: DescribeDbauditInstancesRequest,
    cb?: (error: string, rep: DescribeDbauditInstancesResponse) => void
  ): Promise<DescribeDbauditInstancesResponse> {
    return this.request("DescribeDbauditInstances", req, cb)
  }

  /**
   * 用于查询数据安全审计产品实例价格
   */
  async InquiryPriceDbauditInstance(
    req: InquiryPriceDbauditInstanceRequest,
    cb?: (error: string, rep: InquiryPriceDbauditInstanceResponse) => void
  ): Promise<InquiryPriceDbauditInstanceResponse> {
    return this.request("InquiryPriceDbauditInstance", req, cb)
  }

  /**
   * 本接口 (DescribeDbauditUsedRegions) 用于查询可售卖地域列表。
   */
  async DescribeDbauditUsedRegions(
    req?: DescribeDbauditUsedRegionsRequest,
    cb?: (error: string, rep: DescribeDbauditUsedRegionsResponse) => void
  ): Promise<DescribeDbauditUsedRegionsResponse> {
    return this.request("DescribeDbauditUsedRegions", req, cb)
  }

  /**
   * 本接口 (DescribeDbauditInstanceType) 用于查询可售卖的产品规格列表。
   */
  async DescribeDbauditInstanceType(
    req?: DescribeDbauditInstanceTypeRequest,
    cb?: (error: string, rep: DescribeDbauditInstanceTypeResponse) => void
  ): Promise<DescribeDbauditInstanceTypeResponse> {
    return this.request("DescribeDbauditInstanceType", req, cb)
  }
}
