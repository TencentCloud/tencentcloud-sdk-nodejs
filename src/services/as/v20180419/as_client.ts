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
  DisableAutoScalingGroupResponse,
  ModifyLaunchConfigurationAttributesRequest,
  DisableAutoScalingGroupRequest,
  DescribeRefreshActivitiesResponse,
  ModifyAutoScalingGroupRequest,
  ScaleOutInstancesRequest,
  AutoScalingNotification,
  ModifyScheduledActionRequest,
  DescribeAutoScalingGroupsRequest,
  LaunchConfiguration,
  Metadata,
  DescribeAccountLimitsResponse,
  CreateLaunchConfigurationResponse,
  RelatedInstance,
  Advice,
  CreateLifecycleHookResponse,
  ClearLaunchConfigurationAttributesResponse,
  DescribeAutoScalingGroupsResponse,
  CreateScheduledActionRequest,
  ExitStandbyRequest,
  SystemDisk,
  SpotMarketOptions,
  StopAutoScalingInstancesResponse,
  DescribeScalingPoliciesRequest,
  InstanceNameSettings,
  DetailedStatusMessage,
  ModifyScheduledActionResponse,
  AttachLoadBalancersResponse,
  ExecuteScalingPolicyResponse,
  DeleteAutoScalingGroupRequest,
  SetInstancesProtectionResponse,
  StartAutoScalingInstancesResponse,
  CompleteLifecycleActionRequest,
  CreateScalingPolicyResponse,
  CreateNotificationConfigurationResponse,
  DescribeRefreshActivitiesRequest,
  DescribeLaunchConfigurationsResponse,
  RemoveInstancesRequest,
  DeleteScalingPolicyResponse,
  Tag,
  DetachLoadBalancersRequest,
  DescribeAutoScalingInstancesRequest,
  ModifyLoadBalancersRequest,
  RemoveInstancesResponse,
  ModifyScalingPolicyResponse,
  DeleteLaunchConfigurationRequest,
  SetInstancesProtectionRequest,
  DeleteNotificationConfigurationResponse,
  DetachInstancesResponse,
  RollingUpdateSettings,
  ModifyLaunchConfigurationAttributesResponse,
  CreateLaunchConfigurationRequest,
  AutoScalingGroup,
  AttachInstancesResponse,
  DescribeAutoScalingGroupLastActivitiesResponse,
  DescribeAccountLimitsRequest,
  ScaleInInstancesResponse,
  CancelInstanceRefreshRequest,
  DetachLoadBalancersResponse,
  ScalingPolicy,
  DescribeAutoScalingGroupLastActivitiesRequest,
  HostNameSettings,
  ModifyLoadBalancersResponse,
  CreateNotificationConfigurationRequest,
  DescribeScheduledActionsResponse,
  ModifyNotificationConfigurationRequest,
  DeleteLifecycleHookRequest,
  ModifyLoadBalancerTargetAttributesResponse,
  ModifyAutoScalingGroupResponse,
  ExitStandbyResponse,
  InvocationResult,
  ModifyScalingPolicyRequest,
  InstanceMarketOptionsRequest,
  RefreshBatch,
  UpgradeLifecycleHookResponse,
  InstanceTag,
  ModifyLifecycleHookResponse,
  LifecycleCommand,
  DescribeAutoScalingAdvicesResponse,
  CreateAutoScalingGroupRequest,
  DeleteScheduledActionResponse,
  UpgradeLaunchConfigurationRequest,
  DescribeAutoScalingActivitiesResponse,
  DescribeNotificationConfigurationsResponse,
  DataDisk,
  RollbackInstanceRefreshResponse,
  DeleteScalingPolicyRequest,
  LoginSettings,
  CreateAutoScalingGroupFromInstanceResponse,
  DetachInstancesRequest,
  Instance,
  DescribeAutoScalingInstancesResponse,
  EnhancedService,
  RunAutomationServiceEnabled,
  DeleteLaunchConfigurationResponse,
  IPv6InternetAccessible,
  DescribeScheduledActionsRequest,
  RunSecurityServiceEnabled,
  RefreshBatchRelatedInstance,
  DeleteScheduledActionRequest,
  DescribeAutoScalingActivitiesRequest,
  ModifyDesiredCapacityRequest,
  CreateScheduledActionResponse,
  StartInstanceRefreshResponse,
  CreateLifecycleHookRequest,
  ScheduledAction,
  ModifyLifecycleHookRequest,
  CompleteLifecycleActionResponse,
  ScaleOutInstancesResponse,
  RefreshSettings,
  Filter,
  DescribeLifecycleHooksRequest,
  ServiceSettings,
  CreateAutoScalingGroupResponse,
  TargetAttribute,
  ModifyNotificationConfigurationResponse,
  LimitedLoginSettings,
  DescribeLifecycleHooksResponse,
  CreateScalingPolicyRequest,
  ResumeInstanceRefreshRequest,
  DescribeAutoScalingAdvicesRequest,
  DeleteNotificationConfigurationRequest,
  DescribeLaunchConfigurationsRequest,
  NotificationTarget,
  ModifyLoadBalancerTargetAttributesRequest,
  RollbackInstanceRefreshRequest,
  StartInstanceRefreshRequest,
  DeleteAutoScalingGroupResponse,
  LifecycleActionResultInfo,
  AutoScalingGroupAbstract,
  EnableAutoScalingGroupRequest,
  StopInstanceRefreshRequest,
  MetricAlarm,
  RefreshActivity,
  DescribeNotificationConfigurationsRequest,
  ScaleInInstancesRequest,
  LifecycleHook,
  ForwardLoadBalancer,
  ClearLaunchConfigurationAttributesRequest,
  InstanceNameIndexSettings,
  ForwardLoadBalancerIdentification,
  AutoScalingAdvice,
  StartAutoScalingInstancesRequest,
  AttachInstancesRequest,
  StopInstanceRefreshResponse,
  AttachLoadBalancersRequest,
  SpotMixedAllocationPolicy,
  UpgradeLifecycleHookRequest,
  ResumeInstanceRefreshResponse,
  DescribeScalingPoliciesResponse,
  Activity,
  ModifyDesiredCapacityResponse,
  StopAutoScalingInstancesRequest,
  RunMonitorServiceEnabled,
  MetadataItem,
  CancelInstanceRefreshResponse,
  ActivtyRelatedInstance,
  CreateAutoScalingGroupFromInstanceRequest,
  InternetAccessible,
  EnableAutoScalingGroupResponse,
  UpgradeLaunchConfigurationResponse,
  InstanceChargePrepaid,
  DeleteLifecycleHookResponse,
  ExecuteScalingPolicyRequest,
} from "./as_models"

/**
 * as client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("as.tencentcloudapi.com", "2018-04-19", clientConfig)
  }

  /**
   * 暂停正在执行的实例刷新活动。
   * 暂停状态下，伸缩组也会处于停用中状态
   * 当前正在更新或扩容的实例不会暂停，待更新的实例会暂停更新
   * 进行缩容时，所有实例都已经更新完成，此时无法暂停
   */
  async StopInstanceRefresh(
    req: StopInstanceRefreshRequest,
    cb?: (error: string, rep: StopInstanceRefreshResponse) => void
  ): Promise<StopInstanceRefreshResponse> {
    return this.request("StopInstanceRefresh", req, cb)
  }

  /**
     * 本接口（ExecuteScalingPolicy）用于执行伸缩策略。

* 可以根据伸缩策略ID执行伸缩策略。
* 伸缩策略所属伸缩组处于伸缩活动时，会拒绝执行伸缩策略。
* 本接口不支持执行目标追踪策略。
     */
  async ExecuteScalingPolicy(
    req: ExecuteScalingPolicyRequest,
    cb?: (error: string, rep: ExecuteScalingPolicyResponse) => void
  ): Promise<ExecuteScalingPolicyResponse> {
    return this.request("ExecuteScalingPolicy", req, cb)
  }

  /**
   * 本接口（CreateAutoScalingGroup）用于创建伸缩组
   */
  async CreateAutoScalingGroup(
    req: CreateAutoScalingGroupRequest,
    cb?: (error: string, rep: CreateAutoScalingGroupResponse) => void
  ): Promise<CreateAutoScalingGroupResponse> {
    return this.request("CreateAutoScalingGroup", req, cb)
  }

  /**
   * 本接口（ClearLaunchConfigurationAttributes）用于将启动配置内的特定属性完全清空。
   */
  async ClearLaunchConfigurationAttributes(
    req: ClearLaunchConfigurationAttributesRequest,
    cb?: (error: string, rep: ClearLaunchConfigurationAttributesResponse) => void
  ): Promise<ClearLaunchConfigurationAttributesResponse> {
    return this.request("ClearLaunchConfigurationAttributes", req, cb)
  }

  /**
   * 根据启动配置中参数，刷新伸缩组内运行中状态 CVM 实例，返回实例刷新活动的 RefreshActivityId。
   * 对于重装实例的刷新方式（目前仅支持重装），重装时仅会从启动配置中获取 ImageId、UserData、EnhancedService、 HostName、LoginSettings 参数进行刷新，实例的其他参数不会刷新
   * 实例刷新期间（包括暂停状态），伸缩组会被停用。不建议刷新期间修改关联启动配置，否则会影响刷新参数，造成实例配置不一致
   * 滚动更新模式会分成多批次进行刷新实例，单批次中若存在刷新失败实例，活动会进入失败暂停状态
   * 若待刷新实例被移出或销毁，会被标记为 NOT_FOUND 状态，不阻塞实例刷新活动
   * 运行中状态实例与最新启动配置参数一致，实例也会再次刷新
   */
  async StartInstanceRefresh(
    req: StartInstanceRefreshRequest,
    cb?: (error: string, rep: StartInstanceRefreshResponse) => void
  ): Promise<StartInstanceRefreshResponse> {
    return this.request("StartInstanceRefresh", req, cb)
  }

  /**
   * 本接口（ModifyScalingPolicy）用于修改告警触发策略。
   */
  async ModifyScalingPolicy(
    req: ModifyScalingPolicyRequest,
    cb?: (error: string, rep: ModifyScalingPolicyResponse) => void
  ): Promise<ModifyScalingPolicyResponse> {
    return this.request("ModifyScalingPolicy", req, cb)
  }

  /**
   * 本接口（ModifyLoadBalancerTargetAttributes）用于修改伸缩组内负载均衡器的目标规则属性。
   */
  async ModifyLoadBalancerTargetAttributes(
    req: ModifyLoadBalancerTargetAttributesRequest,
    cb?: (error: string, rep: ModifyLoadBalancerTargetAttributesResponse) => void
  ): Promise<ModifyLoadBalancerTargetAttributesResponse> {
    return this.request("ModifyLoadBalancerTargetAttributes", req, cb)
  }

  /**
     * 本接口 (DescribeNotificationConfigurations) 用于查询一个或多个通知的详细信息。

可以根据通知ID、伸缩组ID等信息来查询通知的详细信息。过滤信息详细请见过滤器`Filter`。
如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的通知。
     */
  async DescribeNotificationConfigurations(
    req: DescribeNotificationConfigurationsRequest,
    cb?: (error: string, rep: DescribeNotificationConfigurationsResponse) => void
  ): Promise<DescribeNotificationConfigurationsResponse> {
    return this.request("DescribeNotificationConfigurations", req, cb)
  }

  /**
   * 本接口（DeleteAutoScalingGroup）用于删除指定伸缩组，删除前提是伸缩组内无运行中（IN_SERVICE）状态的实例且当前未在执行伸缩活动。删除伸缩组后，创建失败（CREATION_FAILED）、中止失败（TERMINATION_FAILED）、解绑失败（DETACH_FAILED）等非运行中状态的实例不会被销毁。
   */
  async DeleteAutoScalingGroup(
    req: DeleteAutoScalingGroupRequest,
    cb?: (error: string, rep: DeleteAutoScalingGroupResponse) => void
  ): Promise<DeleteAutoScalingGroupResponse> {
    return this.request("DeleteAutoScalingGroup", req, cb)
  }

  /**
   * 为伸缩组指定数量扩容实例，返回扩容活动的 ActivityId。
   * 伸缩组需要未处于活动中
   * 伸缩组处于停用状态时，该接口也会生效，可参考[停用伸缩组](https://cloud.tencent.com/document/api/377/20435)文档查看伸缩组停用状态的影响范围
   * 接口会增加期望实例数，新的期望实例数需要小于等于最大实例数
   * 扩容如果失败或者部分成功，最后期望实例数只会增加实际成功的实例数量
   * 竞价混合模式中一次扩容可能触发多个伸缩活动，该接口仅返回第一个伸缩活动的 ActivityId
   */
  async ScaleOutInstances(
    req: ScaleOutInstancesRequest,
    cb?: (error: string, rep: ScaleOutInstancesResponse) => void
  ): Promise<ScaleOutInstancesResponse> {
    return this.request("ScaleOutInstances", req, cb)
  }

  /**
   * 伸缩组内实例退出备用中状态。
   * 备用中状态的实例负载均衡器权重值为 0，退出备用中状态后，权重值也会恢复
   * 对备用中状态实例进行开关机操作也会使其退出备用中状态
   */
  async ExitStandby(
    req: ExitStandbyRequest,
    cb?: (error: string, rep: ExitStandbyResponse) => void
  ): Promise<ExitStandbyResponse> {
    return this.request("ExitStandby", req, cb)
  }

  /**
   * 本接口（StartAutoScalingInstances）用于开启伸缩组内 CVM 实例。
   * 开机成功，实例转为`IN_SERVICE`状态后，会增加期望实例数，期望实例数不可超过设置的最大值
   * 本接口支持批量操作，每次请求开机实例的上限为100
   */
  async StartAutoScalingInstances(
    req: StartAutoScalingInstancesRequest,
    cb?: (error: string, rep: StartAutoScalingInstancesResponse) => void
  ): Promise<StartAutoScalingInstancesResponse> {
    return this.request("StartAutoScalingInstances", req, cb)
  }

  /**
     * 已有替代接口ModifyLaunchConfiguration。该接口存在覆盖参数风险，目前官网已隐藏

本接口（UpgradeLaunchConfiguration）用于升级启动配置。

* 本接口用于升级启动配置，采用“完全覆盖”风格，无论之前参数如何，统一按照接口参数设置为新的配置。对于非必填字段，不填写则按照默认值赋值。
* 升级修改启动配置后，已经使用该启动配置扩容的存量实例不会发生变更，此后使用该启动配置的新增实例会按照新的配置进行扩容。
     */
  async UpgradeLaunchConfiguration(
    req: UpgradeLaunchConfigurationRequest,
    cb?: (error: string, rep: UpgradeLaunchConfigurationResponse) => void
  ): Promise<UpgradeLaunchConfigurationResponse> {
    return this.request("UpgradeLaunchConfiguration", req, cb)
  }

  /**
   * 本接口（DescribeRefreshActivities）用于查询伸缩组的实例刷新活动记录。
   */
  async DescribeRefreshActivities(
    req: DescribeRefreshActivitiesRequest,
    cb?: (error: string, rep: DescribeRefreshActivitiesResponse) => void
  ): Promise<DescribeRefreshActivitiesResponse> {
    return this.request("DescribeRefreshActivities", req, cb)
  }

  /**
   * 此接口用于修改生命周期挂钩。
   */
  async ModifyLifecycleHook(
    req: ModifyLifecycleHookRequest,
    cb?: (error: string, rep: ModifyLifecycleHookResponse) => void
  ): Promise<ModifyLifecycleHookResponse> {
    return this.request("ModifyLifecycleHook", req, cb)
  }

  /**
   * 本接口（DetachLoadBalancers）用于从伸缩组移出负载均衡器，本接口不会销毁负载均衡器。
   */
  async DetachLoadBalancers(
    req: DetachLoadBalancersRequest,
    cb?: (error: string, rep: DetachLoadBalancersResponse) => void
  ): Promise<DetachLoadBalancersResponse> {
    return this.request("DetachLoadBalancers", req, cb)
  }

  /**
     * 本接口（AttachInstances）用于将 CVM 实例添加到伸缩组。
* 仅支持添加处于`RUNNING`（运行中）或`STOPPED`（已关机）状态的 CVM 实例
* 添加的 CVM 实例需要和伸缩组 VPC 网络一致

     */
  async AttachInstances(
    req: AttachInstancesRequest,
    cb?: (error: string, rep: AttachInstancesResponse) => void
  ): Promise<AttachInstancesResponse> {
    return this.request("AttachInstances", req, cb)
  }

  /**
   * 本接口（DescribeScalingPolicies）用于查询告警触发策略。
   */
  async DescribeScalingPolicies(
    req: DescribeScalingPoliciesRequest,
    cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void
  ): Promise<DescribeScalingPoliciesResponse> {
    return this.request("DescribeScalingPolicies", req, cb)
  }

  /**
   * 本接口（DeleteScheduledAction）用于删除特定的定时任务。
   */
  async DeleteScheduledAction(
    req: DeleteScheduledActionRequest,
    cb?: (error: string, rep: DeleteScheduledActionResponse) => void
  ): Promise<DeleteScheduledActionResponse> {
    return this.request("DeleteScheduledAction", req, cb)
  }

  /**
   * 此接口（AttachLoadBalancers）用于将负载均衡器添加到伸缩组。
   */
  async AttachLoadBalancers(
    req: AttachLoadBalancersRequest,
    cb?: (error: string, rep: AttachLoadBalancersResponse) => void
  ): Promise<AttachLoadBalancersResponse> {
    return this.request("AttachLoadBalancers", req, cb)
  }

  /**
   * 本接口（DetachInstances）用于从伸缩组移出 CVM 实例，本接口不会销毁实例。
   * 如果移出指定实例后，伸缩组内处于`IN_SERVICE`状态的实例数量小于伸缩组最小值，接口将报错
   * 如果伸缩组处于`DISABLED`状态，移出操作不校验`IN_SERVICE`实例数量和最小值的关系
   * 对于伸缩组配置的 CLB，实例在离开伸缩组时，AS 会进行解挂载动作
   */
  async DetachInstances(
    req: DetachInstancesRequest,
    cb?: (error: string, rep: DetachInstancesResponse) => void
  ): Promise<DetachInstancesResponse> {
    return this.request("DetachInstances", req, cb)
  }

  /**
   * 为伸缩组指定数量缩容实例，返回缩容活动的 ActivityId。
   * 伸缩组需要未处于活动中
   * 伸缩组处于停用状态时，该接口也会生效，可参考[停用伸缩组](https://cloud.tencent.com/document/api/377/20435)文档查看伸缩组停用状态的影响范围
   * 根据伸缩组的`TerminationPolicies`策略，选择被缩容的实例，可参考[缩容处理](https://cloud.tencent.com/document/product/377/8563)
   * 接口只会选择`IN_SERVICE`实例缩容，如果需要缩容其他状态实例，可以使用 [DetachInstances](https://cloud.tencent.com/document/api/377/20436) 或 [RemoveInstances](https://cloud.tencent.com/document/api/377/20431) 接口
   * 接口会减少期望实例数，新的期望实例数需要大于等于最小实例数
   * 缩容如果失败或者部分成功，最后期望实例数只会扣减实际缩容成功的实例数量
   */
  async ScaleInInstances(
    req: ScaleInInstancesRequest,
    cb?: (error: string, rep: ScaleInInstancesResponse) => void
  ): Promise<ScaleInInstancesResponse> {
    return this.request("ScaleInInstances", req, cb)
  }

  /**
   * 本接口（CreateScheduledAction）用于创建定时任务。
   */
  async CreateScheduledAction(
    req: CreateScheduledActionRequest,
    cb?: (error: string, rep: CreateScheduledActionResponse) => void
  ): Promise<CreateScheduledActionResponse> {
    return this.request("CreateScheduledAction", req, cb)
  }

  /**
     * 本接口（SetInstancesProtection）用于设置实例保护。
实例设置保护之后，当发生不健康替换、报警策略、期望值变更等触发缩容时，将不对此实例缩容操作。
     */
  async SetInstancesProtection(
    req: SetInstancesProtectionRequest,
    cb?: (error: string, rep: SetInstancesProtectionResponse) => void
  ): Promise<SetInstancesProtectionResponse> {
    return this.request("SetInstancesProtection", req, cb)
  }

  /**
   * 此接口用于查询伸缩组配置建议。
   */
  async DescribeAutoScalingAdvices(
    req: DescribeAutoScalingAdvicesRequest,
    cb?: (error: string, rep: DescribeAutoScalingAdvicesResponse) => void
  ): Promise<DescribeAutoScalingAdvicesResponse> {
    return this.request("DescribeAutoScalingAdvices", req, cb)
  }

  /**
   * 本接口（RemoveInstances）用于从伸缩组删除 CVM 实例。根据当前的产品逻辑，如果实例由弹性伸缩自动创建，则实例会被销毁；如果实例系创建后加入伸缩组的，则会从伸缩组中移除，保留实例。
   * 如果删除指定实例后，伸缩组内处于`IN_SERVICE`状态的实例数量小于伸缩组最小值，接口将报错
   * 如果伸缩组处于`DISABLED`状态，删除操作不校验`IN_SERVICE`实例数量和最小值的关系
   * 对于伸缩组配置的 CLB，实例在离开伸缩组时，AS 会进行解挂载动作
   */
  async RemoveInstances(
    req: RemoveInstancesRequest,
    cb?: (error: string, rep: RemoveInstancesResponse) => void
  ): Promise<RemoveInstancesResponse> {
    return this.request("RemoveInstances", req, cb)
  }

  /**
   * 本接口（DeleteScalingPolicy）用于删除告警触发策略。
   */
  async DeleteScalingPolicy(
    req: DeleteScalingPolicyRequest,
    cb?: (error: string, rep: DeleteScalingPolicyResponse) => void
  ): Promise<DeleteScalingPolicyResponse> {
    return this.request("DeleteScalingPolicy", req, cb)
  }

  /**
     * 本接口（CompleteLifecycleAction）用于完成生命周期动作。

* 用户通过调用本接口，指定一个具体的生命周期挂钩的结果（“CONITNUE”或者“ABANDON”）。如果一直不调用本接口，则生命周期挂钩会在超时后按照“DefaultResult”进行处理。
     */
  async CompleteLifecycleAction(
    req: CompleteLifecycleActionRequest,
    cb?: (error: string, rep: CompleteLifecycleActionResponse) => void
  ): Promise<CompleteLifecycleActionResponse> {
    return this.request("CompleteLifecycleAction", req, cb)
  }

  /**
     * 本接口（ModifyLoadBalancers）用于修改伸缩组的负载均衡器。

* 本接口用于为伸缩组指定新的负载均衡器配置，采用`完全覆盖`风格，无论之前配置如何，`统一按照接口参数配置为新的负载均衡器`。
* 如果要为伸缩组清空负载均衡器，则在调用本接口时仅指定伸缩组ID，不指定具体负载均衡器。
* 本接口会立即修改伸缩组的负载均衡器，并生成一个伸缩活动，异步修改存量实例的负载均衡器。
     */
  async ModifyLoadBalancers(
    req: ModifyLoadBalancersRequest,
    cb?: (error: string, rep: ModifyLoadBalancersResponse) => void
  ): Promise<ModifyLoadBalancersResponse> {
    return this.request("ModifyLoadBalancers", req, cb)
  }

  /**
   * 本接口（ModifyDesiredCapacity）用于修改指定伸缩组的期望实例数
   */
  async ModifyDesiredCapacity(
    req: ModifyDesiredCapacityRequest,
    cb?: (error: string, rep: ModifyDesiredCapacityResponse) => void
  ): Promise<ModifyDesiredCapacityResponse> {
    return this.request("ModifyDesiredCapacity", req, cb)
  }

  /**
   * 回滚操作会生成一个新的实例刷新活动，该活动也支持分批次刷新以及暂停、恢复、取消操作，接口返回回滚活动的 RefreshActivityId。
   * 原活动中待刷新实例变更为已取消，忽略不存在实例，其他状态实例进入回滚流程
   * 原活动中正在刷新的实例不会立刻终止，刷新结束后再执行回滚活动
   * 暂停状态或最近一次成功的刷新活动支持回滚，其他状态不支持回滚
   * 原活动刷新方式为重装实例时，对于 ImageId参数，会自动恢复到回滚前镜像 ID；对于 UserData、EnhancedService、LoginSettings、 HostName 参数，依然会从启动配置中读取，需用户在回滚前自行修改启动配置
   * 回滚活动暂不支持 MaxSurge 参数
   */
  async RollbackInstanceRefresh(
    req: RollbackInstanceRefreshRequest,
    cb?: (error: string, rep: RollbackInstanceRefreshResponse) => void
  ): Promise<RollbackInstanceRefreshResponse> {
    return this.request("RollbackInstanceRefresh", req, cb)
  }

  /**
   * 本接口（ModifyNotificationConfiguration）用于修改通知。
   * 通知的接收端类型不支持修改。
   */
  async ModifyNotificationConfiguration(
    req: ModifyNotificationConfigurationRequest,
    cb?: (error: string, rep: ModifyNotificationConfigurationResponse) => void
  ): Promise<ModifyNotificationConfigurationResponse> {
    return this.request("ModifyNotificationConfiguration", req, cb)
  }

  /**
   * 本接口（StopAutoScalingInstances）用于关闭伸缩组内 CVM 实例。
   * 关机方式采用`SOFT_FIRST`方式，表示在正常关闭失败后进行强制关闭
   * 关闭`IN_SERVICE`状态的实例，会减少期望实例数，期望实例数不可低于设置的最小值
   * 使用`STOP_CHARGING`选项关机，待关机的实例需要满足[关机不收费条件](https://cloud.tencent.com/document/product/213/19918)
   * 本接口支持批量操作，每次请求关机实例的上限为100
   */
  async StopAutoScalingInstances(
    req: StopAutoScalingInstancesRequest,
    cb?: (error: string, rep: StopAutoScalingInstancesResponse) => void
  ): Promise<StopAutoScalingInstancesResponse> {
    return this.request("StopAutoScalingInstances", req, cb)
  }

  /**
     * 本接口（CreateLaunchConfiguration）用于创建新的启动配置。

* 启动配置，可以通过 `ModifyLaunchConfigurationAttributes` 修改少量字段。如需使用新的启动配置，建议重新创建启动配置。

* 每个项目最多只能创建20个启动配置，详见[使用限制](https://cloud.tencent.com/document/product/377/3120)。
     */
  async CreateLaunchConfiguration(
    req: CreateLaunchConfigurationRequest,
    cb?: (error: string, rep: CreateLaunchConfigurationResponse) => void
  ): Promise<CreateLaunchConfigurationResponse> {
    return this.request("CreateLaunchConfiguration", req, cb)
  }

  /**
   * 本接口（ModifyAutoScalingGroup）用于修改伸缩组。
   */
  async ModifyAutoScalingGroup(
    req: ModifyAutoScalingGroupRequest,
    cb?: (error: string, rep: ModifyAutoScalingGroupResponse) => void
  ): Promise<ModifyAutoScalingGroupResponse> {
    return this.request("ModifyAutoScalingGroup", req, cb)
  }

  /**
     * 本接口（CreateNotificationConfiguration）用于创建通知。
通知到 CMQ 主题或队列时，消息内容如下：
```
{
    "Service": "Tencent Cloud Auto Scaling",
    "CreatedTime": "2021-10-11T10:15:11Z", // 活动创建时间
    "AppId": "100000000",
    "ActivityId": "asa-fznnvrja", // 伸缩活动ID
    "AutoScalingGroupId": "asg-pc2oqu2z", // 伸缩组ID
    "ActivityType": "SCALE_OUT",  // 伸缩活动类型
    "StatusCode": "SUCCESSFUL",   // 伸缩活动结果
    "Description": "Activity was launched in response to a difference between desired capacity and actual capacity,
    scale out 1 instance(s).", // 伸缩活动描述
    "StartTime": "2021-10-11T10:15:11Z",  // 活动开始时间
    "EndTime": "2021-10-11T10:15:32Z",    // 活动结束时间
    "DetailedStatusMessageSet": [ // 活动内部错误集合（非空不代表活动失败）
        {
            "Code": "InvalidInstanceType",
            "Zone": "ap-guangzhou-2",
            "InstanceId": "",
            "InstanceChargeType": "POSTPAID_BY_HOUR",
            "SubnetId": "subnet-4t5mgeuu",
            "Message": "The specified instance type `S5.LARGE8` is invalid in `subnet-4t5mgeuu`, `ap-guangzhou-2`.",
            "InstanceType": "S5.LARGE8"
        }
    ]
}
```
     */
  async CreateNotificationConfiguration(
    req: CreateNotificationConfigurationRequest,
    cb?: (error: string, rep: CreateNotificationConfigurationResponse) => void
  ): Promise<CreateNotificationConfigurationResponse> {
    return this.request("CreateNotificationConfiguration", req, cb)
  }

  /**
     * 本接口（DescribeAutoScalingInstances）用于查询弹性伸缩关联实例的信息。

* 可以根据实例ID、伸缩组ID等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
     */
  async DescribeAutoScalingInstances(
    req: DescribeAutoScalingInstancesRequest,
    cb?: (error: string, rep: DescribeAutoScalingInstancesResponse) => void
  ): Promise<DescribeAutoScalingInstancesResponse> {
    return this.request("DescribeAutoScalingInstances", req, cb)
  }

  /**
     * 本接口（CreateAutoScalingGroupFromInstance）用于根据实例创建启动配置及伸缩组。

说明：根据按包年包月计费的实例所创建的伸缩组，其扩容的实例为按量计费实例。
     */
  async CreateAutoScalingGroupFromInstance(
    req: CreateAutoScalingGroupFromInstanceRequest,
    cb?: (error: string, rep: CreateAutoScalingGroupFromInstanceResponse) => void
  ): Promise<CreateAutoScalingGroupFromInstanceResponse> {
    return this.request("CreateAutoScalingGroupFromInstance", req, cb)
  }

  /**
     * 本接口（CreateLifecycleHook）用于创建生命周期挂钩。

* 您可以为生命周期挂钩配置消息通知或执行自动化助手命令。

如果您配置了通知消息，弹性伸缩会通知您的TDMQ消息队列，通知内容形如：

```
{
	"Service": "Tencent Cloud Auto Scaling",
	"Time": "2019-03-14T10:15:11Z",
	"AppId": "1251783334",
	"ActivityId": "asa-fznnvrja",
	"AutoScalingGroupId": "asg-rrrrtttt",
	"LifecycleHookId": "ash-xxxxyyyy",
	"LifecycleHookName": "my-hook",
	"LifecycleActionToken": "3080e1c9-0efe-4dd7-ad3b-90cd6618298f",
	"InstanceId": "ins-aaaabbbb",
	"LifecycleTransition": "INSTANCE_LAUNCHING",
	"NotificationMetadata": ""
}
```
     */
  async CreateLifecycleHook(
    req: CreateLifecycleHookRequest,
    cb?: (error: string, rep: CreateLifecycleHookResponse) => void
  ): Promise<CreateLifecycleHookResponse> {
    return this.request("CreateLifecycleHook", req, cb)
  }

  /**
     * 本接口（UpgradeLifecycleHook）用于升级生命周期挂钩。

* 本接口用于升级生命周期挂钩，采用“完全覆盖”风格，无论之前参数如何，统一按照接口参数设置为新的配置。对于非必填字段，不填写则按照默认值赋值。
     */
  async UpgradeLifecycleHook(
    req: UpgradeLifecycleHookRequest,
    cb?: (error: string, rep: UpgradeLifecycleHookResponse) => void
  ): Promise<UpgradeLifecycleHookResponse> {
    return this.request("UpgradeLifecycleHook", req, cb)
  }

  /**
     * 本接口（DisableAutoScalingGroup）用于停用指定伸缩组。
* 停用伸缩组后，自动触发的伸缩活动不再进行，包括：
    - 告警策略触发的伸缩活动
    - 匹配期望实例数的伸缩活动
    - 不健康实例替换活动
    - 定时任务
* 停用伸缩组后，手动触发的伸缩活动允许进行，包括：
    - 指定数量扩容实例（ScaleOutInstances）
    - 指定数量缩容实例（ScaleInInstances）
    - 从伸缩组中移出 CVM 实例（DetachInstances）
    - 从伸缩组中删除 CVM 实例（RemoveInstances）
    - 添加 CVM 实例到伸缩组（AttachInstances）
    - 关闭伸缩组内 CVM 实例（StopAutoScalingInstances）
    - 开启伸缩组内 CVM 实例（StartAutoScalingInstances）
     */
  async DisableAutoScalingGroup(
    req: DisableAutoScalingGroupRequest,
    cb?: (error: string, rep: DisableAutoScalingGroupResponse) => void
  ): Promise<DisableAutoScalingGroupResponse> {
    return this.request("DisableAutoScalingGroup", req, cb)
  }

  /**
     * 本接口（DescribeLaunchConfigurations）用于查询启动配置的信息。

* 可以根据启动配置ID、启动配置名称等信息来查询启动配置的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的启动配置。
     */
  async DescribeLaunchConfigurations(
    req: DescribeLaunchConfigurationsRequest,
    cb?: (error: string, rep: DescribeLaunchConfigurationsResponse) => void
  ): Promise<DescribeLaunchConfigurationsResponse> {
    return this.request("DescribeLaunchConfigurations", req, cb)
  }

  /**
   * 本接口（CreateScalingPolicy）用于创建告警触发策略。
   */
  async CreateScalingPolicy(
    req: CreateScalingPolicyRequest,
    cb?: (error: string, rep: CreateScalingPolicyResponse) => void
  ): Promise<CreateScalingPolicyResponse> {
    return this.request("CreateScalingPolicy", req, cb)
  }

  /**
     * 本接口（DeleteLaunchConfiguration）用于删除启动配置。

* 若启动配置在伸缩组中属于生效状态，则该启动配置不允许删除。

     */
  async DeleteLaunchConfiguration(
    req: DeleteLaunchConfigurationRequest,
    cb?: (error: string, rep: DeleteLaunchConfigurationResponse) => void
  ): Promise<DeleteLaunchConfigurationResponse> {
    return this.request("DeleteLaunchConfiguration", req, cb)
  }

  /**
   * 本接口（DeleteLifecycleHook）用于删除生命周期挂钩。
   */
  async DeleteLifecycleHook(
    req: DeleteLifecycleHookRequest,
    cb?: (error: string, rep: DeleteLifecycleHookResponse) => void
  ): Promise<DeleteLifecycleHookResponse> {
    return this.request("DeleteLifecycleHook", req, cb)
  }

  /**
   * 本接口（DescribeAutoScalingGroupLastActivities）用于查询伸缩组的最新一次伸缩活动记录。
   */
  async DescribeAutoScalingGroupLastActivities(
    req: DescribeAutoScalingGroupLastActivitiesRequest,
    cb?: (error: string, rep: DescribeAutoScalingGroupLastActivitiesResponse) => void
  ): Promise<DescribeAutoScalingGroupLastActivitiesResponse> {
    return this.request("DescribeAutoScalingGroupLastActivities", req, cb)
  }

  /**
     * 本接口（DescribeLifecycleHooks）用于查询生命周期挂钩信息。

* 可以根据伸缩组ID、生命周期挂钩ID或者生命周期挂钩名称等信息来查询生命周期挂钩的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的生命周期挂钩。
     */
  async DescribeLifecycleHooks(
    req: DescribeLifecycleHooksRequest,
    cb?: (error: string, rep: DescribeLifecycleHooksResponse) => void
  ): Promise<DescribeLifecycleHooksResponse> {
    return this.request("DescribeLifecycleHooks", req, cb)
  }

  /**
   * 本接口（EnableAutoScalingGroup）用于启用指定伸缩组。
   */
  async EnableAutoScalingGroup(
    req: EnableAutoScalingGroupRequest,
    cb?: (error: string, rep: EnableAutoScalingGroupResponse) => void
  ): Promise<EnableAutoScalingGroupResponse> {
    return this.request("EnableAutoScalingGroup", req, cb)
  }

  /**
     * 本接口 (DescribeScheduledActions) 用于查询一个或多个定时任务的详细信息。

* 可以根据定时任务ID、定时任务名称或者伸缩组ID等信息来查询定时任务的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的定时任务。
     */
  async DescribeScheduledActions(
    req: DescribeScheduledActionsRequest,
    cb?: (error: string, rep: DescribeScheduledActionsResponse) => void
  ): Promise<DescribeScheduledActionsResponse> {
    return this.request("DescribeScheduledActions", req, cb)
  }

  /**
     * 本接口（DescribeAutoScalingGroups）用于查询伸缩组信息。

* 可以根据伸缩组ID、伸缩组名称或者启动配置ID等信息来查询伸缩组的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的伸缩组。
     */
  async DescribeAutoScalingGroups(
    req: DescribeAutoScalingGroupsRequest,
    cb?: (error: string, rep: DescribeAutoScalingGroupsResponse) => void
  ): Promise<DescribeAutoScalingGroupsResponse> {
    return this.request("DescribeAutoScalingGroups", req, cb)
  }

  /**
   * 本接口（ModifyScheduledAction）用于修改定时任务。
   */
  async ModifyScheduledAction(
    req: ModifyScheduledActionRequest,
    cb?: (error: string, rep: ModifyScheduledActionResponse) => void
  ): Promise<ModifyScheduledActionResponse> {
    return this.request("ModifyScheduledAction", req, cb)
  }

  /**
   * 本接口（DescribeAutoScalingActivities）用于查询伸缩组的伸缩活动记录。
   */
  async DescribeAutoScalingActivities(
    req: DescribeAutoScalingActivitiesRequest,
    cb?: (error: string, rep: DescribeAutoScalingActivitiesResponse) => void
  ): Promise<DescribeAutoScalingActivitiesResponse> {
    return this.request("DescribeAutoScalingActivities", req, cb)
  }

  /**
   * 本接口（DeleteNotificationConfiguration）用于删除特定的通知。
   */
  async DeleteNotificationConfiguration(
    req: DeleteNotificationConfigurationRequest,
    cb?: (error: string, rep: DeleteNotificationConfigurationResponse) => void
  ): Promise<DeleteNotificationConfigurationResponse> {
    return this.request("DeleteNotificationConfiguration", req, cb)
  }

  /**
     * 恢复暂停状态的实例刷新活动，使其重试当前批次刷新失败实例或继续刷新后续批次，非暂停状态下调用该接口无效。

- 使用 MaxSurge 参数时活动可能会处于扩容或缩容失败导致的暂停状态，也可以使用该接口重试扩缩容。
     */
  async ResumeInstanceRefresh(
    req: ResumeInstanceRefreshRequest,
    cb?: (error: string, rep: ResumeInstanceRefreshResponse) => void
  ): Promise<ResumeInstanceRefreshResponse> {
    return this.request("ResumeInstanceRefresh", req, cb)
  }

  /**
   * 取消伸缩组的实例刷新活动。
   * 已刷新/正在刷新的批次不受影响，待刷新批次被取消
   * 刷新失败的实例保持备用中状态，需用户手动处理后尝试退出备用中状态或销毁
   * 取消后不允许回滚操作，也不支持恢复操作
   * 因 maxSurge 参数而临时扩容的实例在取消后会自动销毁
   * 进行缩容时，所有实例都已经更新完成，此时无法取消
   */
  async CancelInstanceRefresh(
    req: CancelInstanceRefreshRequest,
    cb?: (error: string, rep: CancelInstanceRefreshResponse) => void
  ): Promise<CancelInstanceRefreshResponse> {
    return this.request("CancelInstanceRefresh", req, cb)
  }

  /**
   * 本接口（DescribeAccountLimits）用于查询用户账户在弹性伸缩中的资源限制。
   */
  async DescribeAccountLimits(
    req?: DescribeAccountLimitsRequest,
    cb?: (error: string, rep: DescribeAccountLimitsResponse) => void
  ): Promise<DescribeAccountLimitsResponse> {
    return this.request("DescribeAccountLimits", req, cb)
  }

  /**
     * 本接口（ModifyLaunchConfigurationAttributes）用于修改启动配置部分属性。

* 修改启动配置后，已经使用该启动配置扩容的存量实例不会发生变更，此后使用该启动配置的新增实例会按照新的配置进行扩容。
* 本接口支持修改部分简单类型。
     */
  async ModifyLaunchConfigurationAttributes(
    req: ModifyLaunchConfigurationAttributesRequest,
    cb?: (error: string, rep: ModifyLaunchConfigurationAttributesResponse) => void
  ): Promise<ModifyLaunchConfigurationAttributesResponse> {
    return this.request("ModifyLaunchConfigurationAttributes", req, cb)
  }
}
