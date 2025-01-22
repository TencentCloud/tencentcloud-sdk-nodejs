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
  DescribeTccCatalogRequest,
  NetWork,
  TccCatalogSet,
  TccCatalogConfig,
  TccConnection,
  DescribeTccCatalogsRequest,
  BindTccVpcEndPointServiceWhiteListResponse,
  AcceptTccVpcEndPointConnectResponse,
  BindTccVpcEndPointServiceWhiteListRequest,
  AcceptTccVpcEndPointConnectRequest,
  TccConnectionConfig,
  DescribeTccCatalogsResponse,
  DescribeTccCatalogResponse,
} from "./tccatalog_models"

/**
 * tccatalog client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tccatalog.tencentcloudapi.com", "2024-10-24", clientConfig)
  }

  /**
   * 获取Tcc数据目录列表
   */
  async DescribeTccCatalogs(
    req: DescribeTccCatalogsRequest,
    cb?: (error: string, rep: DescribeTccCatalogsResponse) => void
  ): Promise<DescribeTccCatalogsResponse> {
    return this.request("DescribeTccCatalogs", req, cb)
  }

  /**
   * 获取Tcc数据目录详情
   */
  async DescribeTccCatalog(
    req: DescribeTccCatalogRequest,
    cb?: (error: string, rep: DescribeTccCatalogResponse) => void
  ): Promise<DescribeTccCatalogResponse> {
    return this.request("DescribeTccCatalog", req, cb)
  }

  /**
   * 绑定终端节点服务白名单用户
   */
  async BindTccVpcEndPointServiceWhiteList(
    req: BindTccVpcEndPointServiceWhiteListRequest,
    cb?: (error: string, rep: BindTccVpcEndPointServiceWhiteListResponse) => void
  ): Promise<BindTccVpcEndPointServiceWhiteListResponse> {
    return this.request("BindTccVpcEndPointServiceWhiteList", req, cb)
  }

  /**
   * 接受终端节点连接
   */
  async AcceptTccVpcEndPointConnect(
    req: AcceptTccVpcEndPointConnectRequest,
    cb?: (error: string, rep: AcceptTccVpcEndPointConnectResponse) => void
  ): Promise<AcceptTccVpcEndPointConnectResponse> {
    return this.request("AcceptTccVpcEndPointConnect", req, cb)
  }
}
