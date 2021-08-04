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
  RunVersionPod,
  ResumeDeployApplicationRequest,
  ResumeDeployApplicationResponse,
  RevertDeployApplicationResponse,
  DeployStrategyConf,
  RevertDeployApplicationRequest,
  TemDeployApplicationDetailInfo,
  DescribeDeployApplicationDetailRequest,
  DescribeDeployApplicationDetailResponse,
  DeployServiceBatchDetail,
  DescribeRunPodPage,
  DeployServicePodDetail,
} from "./tem_models"

/**
 * tem client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tem.tencentcloudapi.com", "2021-07-01", clientConfig)
  }

  /**
   * 回滚分批发布
   */
  async RevertDeployApplication(
    req: RevertDeployApplicationRequest,
    cb?: (error: string, rep: RevertDeployApplicationResponse) => void
  ): Promise<RevertDeployApplicationResponse> {
    return this.request("RevertDeployApplication", req, cb)
  }

  /**
   * 获取分批发布详情
   */
  async DescribeDeployApplicationDetail(
    req: DescribeDeployApplicationDetailRequest,
    cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void
  ): Promise<DescribeDeployApplicationDetailResponse> {
    return this.request("DescribeDeployApplicationDetail", req, cb)
  }

  /**
   * 开始下一批次发布
   */
  async ResumeDeployApplication(
    req: ResumeDeployApplicationRequest,
    cb?: (error: string, rep: ResumeDeployApplicationResponse) => void
  ): Promise<ResumeDeployApplicationResponse> {
    return this.request("ResumeDeployApplication", req, cb)
  }
}
