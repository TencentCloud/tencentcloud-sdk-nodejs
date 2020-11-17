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
  DescribePolicyConditionListConfigManual,
  CreatePolicyGroupEventCondition,
  DescribeProductEventListRequest,
  DescribeServiceDiscoveryResponse,
  DescribePolicyConditionListMetric,
  DescribePolicyGroupListResponse,
  BindingPolicyObjectRequest,
  CreateServiceDiscoveryResponse,
  DescribePolicyGroupInfoRequest,
  DeleteServiceDiscoveryResponse,
  DescribePolicyGroupInfoCallback,
  DescribeProductEventListDimensions,
  DescribePolicyGroupInfoResponse,
  PutMonitorDataRequest,
  CreatePolicyGroupResponse,
  PutMonitorDataResponse,
  DescribeBaseMetricsResponse,
  SendCustomAlarmMsgRequest,
  DescribePolicyConditionListConfigManualContinueTime,
  CommonNamespace,
  GetMonitorDataRequest,
  DataPoint,
  DescribePolicyConditionListConfigManualPeriod,
  UnBindingPolicyObjectRequest,
  DescribeServiceDiscoveryRequest,
  DescribePolicyConditionListRequest,
  DescribeBindingPolicyObjectListInstance,
  DeletePolicyGroupResponse,
  DescribeMonitorTypesRequest,
  DimensionsDesc,
  ServiceDiscoveryItem,
  CreateServiceDiscoveryRequest,
  DescribePolicyConditionListCondition,
  DescribeProductListRequest,
  PeriodsSt,
  ModifyAlarmReceiversResponse,
  DescribePolicyConditionListResponse,
  DescribeAllNamespacesResponse,
  DescribeBasicAlarmListResponse,
  ProductSimple,
  ModifyAlarmReceiversRequest,
  DescribeProductEventListEventsDimensions,
  MetricSet,
  DescribeBindingPolicyObjectListResponse,
  ModifyPolicyGroupEventCondition,
  ModifyPolicyGroupRequest,
  DescribeProductEventListResponse,
  DescribeBaseMetricsRequest,
  Instance,
  BindingPolicyObjectDimension,
  UpdateServiceDiscoveryResponse,
  DescribeMonitorTypesResponse,
  Dimension,
  DescribeBasicAlarmListAlarms,
  UpdateServiceDiscoveryRequest,
  UnBindingAllPolicyObjectResponse,
  DescribeAlarmHistoriesRequest,
  MetricObjectMeaning,
  DeletePolicyGroupRequest,
  ModifyPolicyGroupResponse,
  DescribePolicyConditionListConfigManualCalcType,
  DescribePolicyGroupInfoCondition,
  DescribeProductEventListEventsGroupInfo,
  DescribePolicyGroupInfoConditionTpl,
  DescribeBindingPolicyObjectListRequest,
  UnBindingPolicyObjectResponse,
  DescribeProductEventListEvents,
  DescribePolicyConditionListConfigManualPeriodNum,
  DescribeAllNamespacesRequest,
  DescribePolicyGroupListGroupInstanceGroup,
  InstanceGroup,
  DescribeAccidentEventListResponse,
  DescribePolicyConditionListConfigManualStatType,
  DescribeAccidentEventListAlarms,
  DescribeProductListResponse,
  DescribeAlarmHistoriesResponse,
  AlarmHistory,
  MonitorTypeNamespace,
  CreatePolicyGroupRequest,
  CreatePolicyGroupCondition,
  DescribePolicyGroupInfoReceiverInfo,
  DescribePolicyConditionListEventMetric,
  DescribePolicyGroupListRequest,
  DescribeBasicAlarmListRequest,
  DescribePolicyGroupListGroup,
  DescribeAccidentEventListRequest,
  MetricDatum,
  DescribeBindingPolicyObjectListInstanceGroup,
  DescribeBindingPolicyObjectListDimension,
  InstanceGroups,
  GetMonitorDataResponse,
  ReceiverInfo,
  UnBindingAllPolicyObjectRequest,
  DescribePolicyGroupInfoEventCondition,
  SendCustomAlarmMsgResponse,
  ModifyPolicyGroupCondition,
  DeleteServiceDiscoveryRequest,
  DescribeProductEventListOverView,
  DescribePolicyConditionListConfigManualCalcValue,
  BindingPolicyObjectResponse,
} from "./monitor_models"

/**
 * monitor client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("monitor.tencentcloudapi.com", "2018-07-24", clientConfig)
  }

  /**
   * 删除策略的关联对象
   */
  async UnBindingPolicyObject(
    req: UnBindingPolicyObjectRequest,
    cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void
  ): Promise<UnBindingPolicyObjectResponse> {
    return this.request("UnBindingPolicyObject", req, cb)
  }

  /**
   * 发送自定义消息告警
   */
  async SendCustomAlarmMsg(
    req: SendCustomAlarmMsgRequest,
    cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void
  ): Promise<SendCustomAlarmMsgResponse> {
    return this.request("SendCustomAlarmMsg", req, cb)
  }

  /**
   * 获取已绑定对象列表
   */
  async DescribeBindingPolicyObjectList(
    req: DescribeBindingPolicyObjectListRequest,
    cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void
  ): Promise<DescribeBindingPolicyObjectListResponse> {
    return this.request("DescribeBindingPolicyObjectList", req, cb)
  }

  /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async DeleteServiceDiscovery(
    req: DeleteServiceDiscoveryRequest,
    cb?: (error: string, rep: DeleteServiceDiscoveryResponse) => void
  ): Promise<DeleteServiceDiscoveryResponse> {
    return this.request("DeleteServiceDiscovery", req, cb)
  }

  /**
   * 获取基础策略告警组列表
   */
  async DescribePolicyGroupList(
    req: DescribePolicyGroupListRequest,
    cb?: (error: string, rep: DescribePolicyGroupListResponse) => void
  ): Promise<DescribePolicyGroupListResponse> {
    return this.request("DescribePolicyGroupList", req, cb)
  }

  /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     */
  async GetMonitorData(
    req: GetMonitorDataRequest,
    cb?: (error: string, rep: GetMonitorDataResponse) => void
  ): Promise<GetMonitorDataResponse> {
    return this.request("GetMonitorData", req, cb)
  }

  /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     */
  async PutMonitorData(
    req: PutMonitorDataRequest,
    cb?: (error: string, rep: PutMonitorDataResponse) => void
  ): Promise<PutMonitorDataResponse> {
    return this.request("PutMonitorData", req, cb)
  }

  /**
   * 获取基础告警策略条件
   */
  async DescribePolicyConditionList(
    req: DescribePolicyConditionListRequest,
    cb?: (error: string, rep: DescribePolicyConditionListResponse) => void
  ): Promise<DescribePolicyConditionListResponse> {
    return this.request("DescribePolicyConditionList", req, cb)
  }

  /**
   * 修改告警接收人
   */
  async ModifyAlarmReceivers(
    req: ModifyAlarmReceiversRequest,
    cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void
  ): Promise<ModifyAlarmReceiversResponse> {
    return this.request("ModifyAlarmReceivers", req, cb)
  }

  /**
   * 将告警策略绑定到特定对象
   */
  async BindingPolicyObject(
    req: BindingPolicyObjectRequest,
    cb?: (error: string, rep: BindingPolicyObjectResponse) => void
  ): Promise<BindingPolicyObjectResponse> {
    return this.request("BindingPolicyObject", req, cb)
  }

  /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async DescribeServiceDiscovery(
    req: DescribeServiceDiscoveryRequest,
    cb?: (error: string, rep: DescribeServiceDiscoveryResponse) => void
  ): Promise<DescribeServiceDiscoveryResponse> {
    return this.request("DescribeServiceDiscovery", req, cb)
  }

  /**
   * 获取基础告警列表
   */
  async DescribeBasicAlarmList(
    req: DescribeBasicAlarmListRequest,
    cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void
  ): Promise<DescribeBasicAlarmListResponse> {
    return this.request("DescribeBasicAlarmList", req, cb)
  }

  /**
   * 获取基础策略组详情
   */
  async DescribePolicyGroupInfo(
    req: DescribePolicyGroupInfoRequest,
    cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void
  ): Promise<DescribePolicyGroupInfoResponse> {
    return this.request("DescribePolicyGroupInfo", req, cb)
  }

  /**
   * 查询云监控产品列表
   */
  async DescribeProductList(
    req: DescribeProductListRequest,
    cb?: (error: string, rep: DescribeProductListResponse) => void
  ): Promise<DescribeProductListResponse> {
    return this.request("DescribeProductList", req, cb)
  }

  /**
   * 拉取所有名字空间
   */
  async DescribeAllNamespaces(
    req: DescribeAllNamespacesRequest,
    cb?: (error: string, rep: DescribeAllNamespacesResponse) => void
  ): Promise<DescribeAllNamespacesResponse> {
    return this.request("DescribeAllNamespaces", req, cb)
  }

  /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async CreateServiceDiscovery(
    req: CreateServiceDiscoveryRequest,
    cb?: (error: string, rep: CreateServiceDiscoveryResponse) => void
  ): Promise<CreateServiceDiscoveryResponse> {
    return this.request("CreateServiceDiscovery", req, cb)
  }

  /**
   * 更新策略组
   */
  async ModifyPolicyGroup(
    req: ModifyPolicyGroupRequest,
    cb?: (error: string, rep: ModifyPolicyGroupResponse) => void
  ): Promise<ModifyPolicyGroupResponse> {
    return this.request("ModifyPolicyGroup", req, cb)
  }

  /**
   * 删除全部的关联对象
   */
  async UnBindingAllPolicyObject(
    req: UnBindingAllPolicyObjectRequest,
    cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void
  ): Promise<UnBindingAllPolicyObjectResponse> {
    return this.request("UnBindingAllPolicyObject", req, cb)
  }

  /**
   * 删除告警策略组
   */
  async DeletePolicyGroup(
    req: DeletePolicyGroupRequest,
    cb?: (error: string, rep: DeletePolicyGroupResponse) => void
  ): Promise<DeletePolicyGroupResponse> {
    return this.request("DeletePolicyGroup", req, cb)
  }

  /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async UpdateServiceDiscovery(
    req: UpdateServiceDiscoveryRequest,
    cb?: (error: string, rep: UpdateServiceDiscoveryResponse) => void
  ): Promise<UpdateServiceDiscoveryResponse> {
    return this.request("UpdateServiceDiscovery", req, cb)
  }

  /**
   * 云监控支持多种类型的监控，此接口列出支持的所有类型
   */
  async DescribeMonitorTypes(
    req: DescribeMonitorTypesRequest,
    cb?: (error: string, rep: DescribeMonitorTypesResponse) => void
  ): Promise<DescribeMonitorTypesResponse> {
    return this.request("DescribeMonitorTypes", req, cb)
  }

  /**
   * 增加策略组
   */
  async CreatePolicyGroup(
    req: CreatePolicyGroupRequest,
    cb?: (error: string, rep: CreatePolicyGroupResponse) => void
  ): Promise<CreatePolicyGroupResponse> {
    return this.request("CreatePolicyGroup", req, cb)
  }

  /**
   * 分页获取产品事件的列表
   */
  async DescribeProductEventList(
    req: DescribeProductEventListRequest,
    cb?: (error: string, rep: DescribeProductEventListResponse) => void
  ): Promise<DescribeProductEventListResponse> {
    return this.request("DescribeProductEventList", req, cb)
  }

  /**
   * 获取平台事件列表
   */
  async DescribeAccidentEventList(
    req: DescribeAccidentEventListRequest,
    cb?: (error: string, rep: DescribeAccidentEventListResponse) => void
  ): Promise<DescribeAccidentEventListResponse> {
    return this.request("DescribeAccidentEventList", req, cb)
  }

  /**
   * 告警2.0-告警历史列表
   */
  async DescribeAlarmHistories(
    req: DescribeAlarmHistoriesRequest,
    cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void
  ): Promise<DescribeAlarmHistoriesResponse> {
    return this.request("DescribeAlarmHistories", req, cb)
  }

  /**
   * 获取基础指标详情
   */
  async DescribeBaseMetrics(
    req: DescribeBaseMetricsRequest,
    cb?: (error: string, rep: DescribeBaseMetricsResponse) => void
  ): Promise<DescribeBaseMetricsResponse> {
    return this.request("DescribeBaseMetrics", req, cb)
  }
}
