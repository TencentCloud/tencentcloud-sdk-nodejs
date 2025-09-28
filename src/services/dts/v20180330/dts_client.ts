/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeMigrateJobsResponse,
  MigrateStepDetailInfo,
  DeleteMigrateJobResponse,
  CreateMigrateCheckJobRequest,
  ModifySubscribeVipVportRequest,
  ModifySubscribeNameResponse,
  DescribeMigrateCheckJobRequest,
  IsolateSubscribeResponse,
  ModifySubscribeObjectsResponse,
  CreateMigrateJobRequest,
  ModifySubscribeNameRequest,
  ModifySubscribeConsumeTimeResponse,
  DstInfo,
  DescribeSubscribeConfResponse,
  DescribeAsyncRequestInfoRequest,
  SrcInfo,
  ConsistencyParams,
  ModifyMigrateJobRequest,
  CreateSubscribeRequest,
  CreateMigrateCheckJobResponse,
  ModifySubscribeObjectsRequest,
  DescribeMigrateCheckJobResponse,
  ActivateSubscribeRequest,
  OfflineIsolatedSubscribeRequest,
  OfflineIsolatedSubscribeResponse,
  ResetSubscribeResponse,
  DescribeSubscribesResponse,
  ModifySubscribeConsumeTimeRequest,
  MigrateDetailInfo,
  StopMigrateJobRequest,
  DescribeAsyncRequestInfoResponse,
  SubscribeInfo,
  ResetSubscribeRequest,
  TagItem,
  TagFilter,
  ModifyMigrateJobResponse,
  DescribeMigrateJobsRequest,
  ModifySubscribeAutoRenewFlagResponse,
  StopMigrateJobResponse,
  IsolateSubscribeRequest,
  ModifySubscribeAutoRenewFlagRequest,
  CompleteMigrateJobRequest,
  MigrateJobInfo,
  DescribeSubscribesRequest,
  CompleteMigrateJobResponse,
  SubscribeObject,
  CreateMigrateJobResponse,
  DescribeSubscribeConfRequest,
  ModifySubscribeVipVportResponse,
  DeleteMigrateJobRequest,
  ActivateSubscribeResponse,
  CreateSubscribeResponse,
  MigrateOption,
  SubsErr,
  ErrorInfo,
  StartMigrateJobResponse,
  StartMigrateJobRequest,
} from "./dts_models"

/**
 * dts client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dts.tencentcloudapi.com", "2018-03-30", clientConfig)
  }

  /**
   * 本接口用于配置数据订阅，只有在未配置状态的订阅实例才能调用此接口。
   */
  async ActivateSubscribe(
    req: ActivateSubscribeRequest,
    cb?: (error: string, rep: ActivateSubscribeResponse) => void
  ): Promise<ActivateSubscribeResponse> {
    return this.request("ActivateSubscribe", req, cb)
  }

  /**
   * 本接口(ModifySubscribeObjects)用于修改数据订阅通道的订阅规则
   */
  async ModifySubscribeObjects(
    req: ModifySubscribeObjectsRequest,
    cb?: (error: string, rep: ModifySubscribeObjectsResponse) => void
  ): Promise<ModifySubscribeObjectsResponse> {
    return this.request("ModifySubscribeObjects", req, cb)
  }

  /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度. 
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrateJob'修改迁移配置或是调整源/目标实例的相关参数.
     */
  async DescribeMigrateCheckJob(
    req: DescribeMigrateCheckJobRequest,
    cb?: (error: string, rep: DescribeMigrateCheckJobResponse) => void
  ): Promise<DescribeMigrateCheckJobResponse> {
    return this.request("DescribeMigrateCheckJob", req, cb)
  }

  /**
   * 本接口（DescribeAsyncRequestInfo）用于查询任务执行结果
   */
  async DescribeAsyncRequestInfo(
    req: DescribeAsyncRequestInfoRequest,
    cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void
  ): Promise<DescribeAsyncRequestInfoResponse> {
    return this.request("DescribeAsyncRequestInfo", req, cb)
  }

  /**
   * 修改订阅实例自动续费标识
   */
  async ModifySubscribeAutoRenewFlag(
    req: ModifySubscribeAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifySubscribeAutoRenewFlagResponse) => void
  ): Promise<ModifySubscribeAutoRenewFlagResponse> {
    return this.request("ModifySubscribeAutoRenewFlag", req, cb)
  }

  /**
     * 本接口（StopMigrateJob）用于撤销数据迁移任务。
在迁移过程中允许调用该接口撤销迁移, 撤销迁移的任务会失败。通过DescribeMigrateJobs接口查询到任务状态为运行中（status=7）或准备完成（status=8）时，才能撤销数据迁移任务。
     */
  async StopMigrateJob(
    req: StopMigrateJobRequest,
    cb?: (error: string, rep: StopMigrateJobResponse) => void
  ): Promise<StopMigrateJobResponse> {
    return this.request("StopMigrateJob", req, cb)
  }

  /**
     * 查询数据迁移任务.
如果是金融区链路, 请使用域名: https://dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
  async DescribeMigrateJobs(
    req: DescribeMigrateJobsRequest,
    cb?: (error: string, rep: DescribeMigrateJobsResponse) => void
  ): Promise<DescribeMigrateJobsResponse> {
    return this.request("DescribeMigrateJobs", req, cb)
  }

  /**
   * 本接口(DescribeSubscribes)获取数据订阅实例信息列表，默认分页，每次返回20条
   */
  async DescribeSubscribes(
    req: DescribeSubscribesRequest,
    cb?: (error: string, rep: DescribeSubscribesResponse) => void
  ): Promise<DescribeSubscribesResponse> {
    return this.request("DescribeSubscribes", req, cb)
  }

  /**
     * 本接口（CreateMigrateJob）用于创建数据迁移任务。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
  async CreateMigrateJob(
    req: CreateMigrateJobRequest,
    cb?: (error: string, rep: CreateMigrateJobResponse) => void
  ): Promise<CreateMigrateJobResponse> {
    return this.request("CreateMigrateJob", req, cb)
  }

  /**
   * 本接口(ModifySubscribeVipVport)用于修改数据订阅实例的IP和端口号
   */
  async ModifySubscribeVipVport(
    req: ModifySubscribeVipVportRequest,
    cb?: (error: string, rep: ModifySubscribeVipVportResponse) => void
  ): Promise<ModifySubscribeVipVportResponse> {
    return this.request("ModifySubscribeVipVport", req, cb)
  }

  /**
     * 创建校验迁移任务
在开始迁移前, 必须调用本接口创建校验, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrateCheckJob查看.
校验成功后,迁移任务若有修改, 则必须重新创建校验并通过后, 才能开始迁移.

如果是金融区链路, 请使用域名: https://dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
  async CreateMigrateCheckJob(
    req: CreateMigrateCheckJobRequest,
    cb?: (error: string, rep: CreateMigrateCheckJobResponse) => void
  ): Promise<CreateMigrateCheckJobResponse> {
    return this.request("CreateMigrateCheckJob", req, cb)
  }

  /**
   * 本接口(ModifySubscribeConsumeTime)用于修改数据订阅通道的消费时间点
   */
  async ModifySubscribeConsumeTime(
    req: ModifySubscribeConsumeTimeRequest,
    cb?: (error: string, rep: ModifySubscribeConsumeTimeResponse) => void
  ): Promise<ModifySubscribeConsumeTimeResponse> {
    return this.request("ModifySubscribeConsumeTime", req, cb)
  }

  /**
   * 本接口(ModifySubscribeName)用于修改数据订阅实例的名称
   */
  async ModifySubscribeName(
    req: ModifySubscribeNameRequest,
    cb?: (error: string, rep: ModifySubscribeNameResponse) => void
  ): Promise<ModifySubscribeNameResponse> {
    return this.request("ModifySubscribeName", req, cb)
  }

  /**
   * 本接口(CreateSubscribe)用于创建一个数据订阅实例。
   */
  async CreateSubscribe(
    req: CreateSubscribeRequest,
    cb?: (error: string, rep: CreateSubscribeResponse) => void
  ): Promise<CreateSubscribeResponse> {
    return this.request("CreateSubscribe", req, cb)
  }

  /**
   * 本接口(ResetSubscribe)用于重置数据订阅实例，已经激活的数据订阅实例，重置后可以使用ActivateSubscribe接口绑定其他的数据库实例
   */
  async ResetSubscribe(
    req: ResetSubscribeRequest,
    cb?: (error: string, rep: ResetSubscribeResponse) => void
  ): Promise<ResetSubscribeResponse> {
    return this.request("ResetSubscribe", req, cb)
  }

  /**
     * 本接口（StartMigrateJob）用于启动迁移任务。非定时迁移任务会在调用后立即开始迁移，定时任务则会开始倒计时。
调用此接口前，请务必先使用CreateMigrateCheckJob校验数据迁移任务，并通过DescribeMigrateJobs接口查询到任务状态为校验通过（status=4）时，才能启动数据迁移任务。
     */
  async StartMigrateJob(
    req: StartMigrateJobRequest,
    cb?: (error: string, rep: StartMigrateJobResponse) => void
  ): Promise<StartMigrateJobResponse> {
    return this.request("StartMigrateJob", req, cb)
  }

  /**
     * 本接口（ModifyMigrateJob）用于修改数据迁移任务。
当迁移任务处于下述状态时，允许调用本接口修改迁移任务：迁移创建中（status=1）、 校验成功(status=4)、校验失败(status=5)、迁移失败(status=10)。但源实例、目标实例类型和目标实例地域不允许修改。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
  async ModifyMigrateJob(
    req: ModifyMigrateJobRequest,
    cb?: (error: string, rep: ModifyMigrateJobResponse) => void
  ): Promise<ModifyMigrateJobResponse> {
    return this.request("ModifyMigrateJob", req, cb)
  }

  /**
   * 本接口（OfflineIsolatedSubscribe）用于下线已隔离的数据订阅实例
   */
  async OfflineIsolatedSubscribe(
    req: OfflineIsolatedSubscribeRequest,
    cb?: (error: string, rep: OfflineIsolatedSubscribeResponse) => void
  ): Promise<OfflineIsolatedSubscribeResponse> {
    return this.request("OfflineIsolatedSubscribe", req, cb)
  }

  /**
   * 本接口（IsolateSubscribe）用于隔离小时计费的订阅实例。调用后，订阅实例将不能使用，同时停止计费。
   */
  async IsolateSubscribe(
    req: IsolateSubscribeRequest,
    cb?: (error: string, rep: IsolateSubscribeResponse) => void
  ): Promise<IsolateSubscribeResponse> {
    return this.request("IsolateSubscribe", req, cb)
  }

  /**
   * 本接口（DescribeSubscribeConf）用于查询订阅实例配置
   */
  async DescribeSubscribeConf(
    req: DescribeSubscribeConfRequest,
    cb?: (error: string, rep: DescribeSubscribeConfResponse) => void
  ): Promise<DescribeSubscribeConfResponse> {
    return this.request("DescribeSubscribeConf", req, cb)
  }

  /**
   * 本接口（DeleteMigrationJob）用于删除数据迁移任务。当通过DescribeMigrateJobs接口查询到任务的状态为：检验中（status=3）、运行中（status=7）、准备完成（status=8）、撤销中（status=11）或者完成中（status=12）时，不允许删除任务。
   */
  async DeleteMigrateJob(
    req: DeleteMigrateJobRequest,
    cb?: (error: string, rep: DeleteMigrateJobResponse) => void
  ): Promise<DeleteMigrateJobResponse> {
    return this.request("DeleteMigrateJob", req, cb)
  }

  /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrateJobs接口查询到任务的状态为准备完成（status=8）时，此时可以调用本接口完成迁移任务。
     */
  async CompleteMigrateJob(
    req: CompleteMigrateJobRequest,
    cb?: (error: string, rep: CompleteMigrateJobResponse) => void
  ): Promise<CompleteMigrateJobResponse> {
    return this.request("CompleteMigrateJob", req, cb)
  }
}
