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
  BaselineConfigItem,
  UpdateAccountFactoryBaselineResponse,
  BaselineStepTaskInfo,
  ListAccountFactoryBaselineItemsRequest,
  DependsOnItem,
  BatchApplyAccountBaselinesResponse,
  UpdateAccountFactoryBaselineRequest,
  ListDeployStepTasksRequest,
  AccountFactoryItem,
  BatchApplyAccountBaselinesRequest,
  GetAccountFactoryBaselineResponse,
  ListAccountFactoryBaselineItemsResponse,
  GetAccountFactoryBaselineRequest,
  BaselineInfoItem,
  ListDeployStepTasksResponse,
} from "./controlcenter_models"

/**
 * controlcenter client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("controlcenter.tencentcloudapi.com", "2023-01-10", clientConfig)
  }

  /**
   * 获取某个基线项历史应用信息
   */
  async ListDeployStepTasks(
    req: ListDeployStepTasksRequest,
    cb?: (error: string, rep: ListDeployStepTasksResponse) => void
  ): Promise<ListDeployStepTasksResponse> {
    return this.request("ListDeployStepTasks", req, cb)
  }

  /**
   * 获取用户基线配置数据
   */
  async GetAccountFactoryBaseline(
    req?: GetAccountFactoryBaselineRequest,
    cb?: (error: string, rep: GetAccountFactoryBaselineResponse) => void
  ): Promise<GetAccountFactoryBaselineResponse> {
    return this.request("GetAccountFactoryBaseline", req, cb)
  }

  /**
   * 更新用户当前基线项配置，基线配置会覆盖更新为当前配置。新增基线项时需要将新增的基线配置加到现有配置，删除基线项时需要将删除的基线配置从现有配置移除，然后保存最新基线配置。
   */
  async UpdateAccountFactoryBaseline(
    req: UpdateAccountFactoryBaselineRequest,
    cb?: (error: string, rep: UpdateAccountFactoryBaselineResponse) => void
  ): Promise<UpdateAccountFactoryBaselineResponse> {
    return this.request("UpdateAccountFactoryBaseline", req, cb)
  }

  /**
   * 批量对存量账号应用基线
   */
  async BatchApplyAccountBaselines(
    req: BatchApplyAccountBaselinesRequest,
    cb?: (error: string, rep: BatchApplyAccountBaselinesResponse) => void
  ): Promise<BatchApplyAccountBaselinesResponse> {
    return this.request("BatchApplyAccountBaselines", req, cb)
  }

  /**
   * 获取账号工厂系统基线项
   */
  async ListAccountFactoryBaselineItems(
    req: ListAccountFactoryBaselineItemsRequest,
    cb?: (error: string, rep: ListAccountFactoryBaselineItemsResponse) => void
  ): Promise<ListAccountFactoryBaselineItemsResponse> {
    return this.request("ListAccountFactoryBaselineItems", req, cb)
  }
}
