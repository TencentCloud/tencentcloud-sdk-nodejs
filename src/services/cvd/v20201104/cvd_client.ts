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
  AssociateSecurityGroupResponse,
  AssociateSecurityGroupRequest,
  RenewInstancesRequest,
  RemoveDataDisksResponse,
  DescribeInstancesBindStatusResponse,
  TerminateInstancesResponse,
  CreateInstancesRequest,
  ModifyImageAttrsResponse,
  StopCommandTasksRequest,
  DescribeInstanceFetchMsgRequest,
  DomainControlDetail,
  DescribeInstanceLoginMsgRequest,
  CreateDomainControlPolicyResponse,
  DeleteImagesRequest,
  DescribePolicyDetailResponse,
  DescribeInstancesResponse,
  DeleteCommandTasksRequest,
  PolicyInfo,
  DeleteDomainControlPolicyRequest,
  DisassociateSecurityGroupRequest,
  RemoveDataDisksRequest,
  StopSessionRequest,
  DescribePolicyDetailRequest,
  DescribeSecurityGroupsResponse,
  DescribeInvocationDetailResponse,
  DescribeSnapshotsRequest,
  DescribeInstanceRegionDistributionRequest,
  DataPoint,
  ResetInstancesResponse,
  DescribeInstancesStatusResponse,
  DescribeImagesResponse,
  Disk,
  BindInstancesResponse,
  CreateInstancesResponse,
  StartInstancesResponse,
  ModifyInstancesTypeResponse,
  Usage,
  CreateDataDiskRequest,
  DeleteDomainControlPolicyResponse,
  StopInstancesRequest,
  RemovePolicyRequest,
  CreatePolicyResponse,
  StartInstancesRequest,
  Tag,
  DescribeInstanceMonitorDataResponse,
  DescribeInstancesBindStatusRequest,
  ModifyInstanceBasicAttributeResponse,
  Partition,
  DescribeInvocationsResponse,
  DescribeInstanceRegionDistributionResponse,
  Dimension,
  DistributionInfo,
  StopInstancesResponse,
  DescribeUsageRequest,
  DescribeUsersRequest,
  ImageInfo,
  AttributeInfo,
  InvocationDetail,
  DescribeUsageResponse,
  StopCommandTasksResponse,
  DescribeInstanceGraphDataRequest,
  BindInstancesRequest,
  CreateImageRequest,
  Instance,
  RunCommandRequest,
  SnapshotInfo,
  ModifyDiskConfigurationResponse,
  DescribeCommandTasksResponse,
  StopSessionResponse,
  ModifyInstancesVpcRequest,
  CreateImageResponse,
  InvocationOutput,
  ModifyImageAttrsRequest,
  InstanceInfo,
  User,
  InstanceStatus,
  DescribeInstancesRequest,
  ModifyDiskConfigurationRequest,
  DescribeInvocationsRequest,
  Filter,
  DescribeUsersResponse,
  DescribeSnapshotsResponse,
  CreateDataDiskResponse,
  DescribeInstanceGraphDataResponse,
  UpdatePolicyResponse,
  ChargePrepaid,
  ModifyInstancesVpcResponse,
  DescribeInvocationDetailRequest,
  ResetInstancesRequest,
  CreatePolicyRequest,
  PolicyDetail,
  BindInfo,
  DisassociateSecurityGroupResponse,
  DescribeInstancesStatusRequest,
  TerminateInstancesRequest,
  DescribeInstanceMonitorDataRequest,
  BindStatusInfo,
  Invocation,
  DeleteImagesResponse,
  StopInvocationRequest,
  DescribeSecurityGroupsRequest,
  ModifyInstanceBasicAttributeRequest,
  DescribeCommandTasksRequest,
  RebootInstancesResponse,
  CreateDomainControlPolicyRequest,
  CreateCommandTaskResponse,
  ModifyInstancesTypeRequest,
  DescribeInstanceLoginMsgResponse,
  DescribeInstanceFetchMsgResponse,
  CommandDetail,
  UnbindInstancesResponse,
  DescribeImagesRequest,
  RunCommandResponse,
  UnbindInstancesRequest,
  RemovePolicyResponse,
  RebootInstancesRequest,
  StopInvocationResponse,
  RenewInstancesResponse,
  CreateCommandTaskRequest,
  VirtualPrivateCloud,
  IpControlDetail,
  DeleteCommandTasksResponse,
  UpdatePolicyRequest,
} from "./cvd_models"

/**
 * cvd client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cvd.tencentcloudapi.com", "2020-11-04", clientConfig)
  }

  /**
   * 获取桌面实例状态
   */
  async DescribeInstancesStatus(
    req: DescribeInstancesStatusRequest,
    cb?: (error: string, rep: DescribeInstancesStatusResponse) => void
  ): Promise<DescribeInstancesStatusResponse> {
    return this.request("DescribeInstancesStatus", req, cb)
  }

  /**
   * 实例硬盘扩容
   */
  async ModifyDiskConfiguration(
    req: ModifyDiskConfigurationRequest,
    cb?: (error: string, rep: ModifyDiskConfigurationResponse) => void
  ): Promise<ModifyDiskConfigurationResponse> {
    return this.request("ModifyDiskConfiguration", req, cb)
  }

  /**
   * 拉取快照列表
   */
  async DescribeSnapshots(
    req: DescribeSnapshotsRequest,
    cb?: (error: string, rep: DescribeSnapshotsResponse) => void
  ): Promise<DescribeSnapshotsResponse> {
    return this.request("DescribeSnapshots", req, cb)
  }

  /**
   * 获取用户在各个区域云桌面实例个数
   */
  async DescribeInstanceRegionDistribution(
    req: DescribeInstanceRegionDistributionRequest,
    cb?: (error: string, rep: DescribeInstanceRegionDistributionResponse) => void
  ): Promise<DescribeInstanceRegionDistributionResponse> {
    return this.request("DescribeInstanceRegionDistribution", req, cb)
  }

  /**
   * 修改桌面实例属性
   */
  async ModifyInstanceBasicAttribute(
    req: ModifyInstanceBasicAttributeRequest,
    cb?: (error: string, rep: ModifyInstanceBasicAttributeResponse) => void
  ): Promise<ModifyInstanceBasicAttributeResponse> {
    return this.request("ModifyInstanceBasicAttribute", req, cb)
  }

  /**
   * 获取云桌面镜像详细信息
   */
  async DescribeImages(
    req: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 删除域名访问控制策略
   */
  async DeleteDomainControlPolicy(
    req: DeleteDomainControlPolicyRequest,
    cb?: (error: string, rep: DeleteDomainControlPolicyResponse) => void
  ): Promise<DeleteDomainControlPolicyResponse> {
    return this.request("DeleteDomainControlPolicy", req, cb)
  }

  /**
   * 拉取用户列表
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 拉取实例使用时长详情
   */
  async DescribeUsage(
    req: DescribeUsageRequest,
    cb?: (error: string, rep: DescribeUsageResponse) => void
  ): Promise<DescribeUsageResponse> {
    return this.request("DescribeUsage", req, cb)
  }

  /**
   * 卸载实例数据盘
   */
  async RemoveDataDisks(
    req: RemoveDataDisksRequest,
    cb?: (error: string, rep: RemoveDataDisksResponse) => void
  ): Promise<RemoveDataDisksResponse> {
    return this.request("RemoveDataDisks", req, cb)
  }

  /**
   * 拉取租户策略列表
   */
  async DescribePolicyDetail(
    req: DescribePolicyDetailRequest,
    cb?: (error: string, rep: DescribePolicyDetailResponse) => void
  ): Promise<DescribePolicyDetailResponse> {
    return this.request("DescribePolicyDetail", req, cb)
  }

  /**
   * 获取实例磁盘分区监控数据
   */
  async DescribeInstanceGraphData(
    req: DescribeInstanceGraphDataRequest,
    cb?: (error: string, rep: DescribeInstanceGraphDataResponse) => void
  ): Promise<DescribeInstanceGraphDataResponse> {
    return this.request("DescribeInstanceGraphData", req, cb)
  }

  /**
   * 获取云桌面实例详细信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 获取桌面实例绑定状态
   */
  async DescribeInstancesBindStatus(
    req: DescribeInstancesBindStatusRequest,
    cb?: (error: string, rep: DescribeInstancesBindStatusResponse) => void
  ): Promise<DescribeInstancesBindStatusResponse> {
    return this.request("DescribeInstancesBindStatus", req, cb)
  }

  /**
   * 查询指定云桌面上的任务列表。
   */
  async DescribeInvocations(
    req: DescribeInvocationsRequest,
    cb?: (error: string, rep: DescribeInvocationsResponse) => void
  ): Promise<DescribeInvocationsResponse> {
    return this.request("DescribeInvocations", req, cb)
  }

  /**
   * 调整实例私有网络
   */
  async ModifyInstancesVpc(
    req: ModifyInstancesVpcRequest,
    cb?: (error: string, rep: ModifyInstancesVpcResponse) => void
  ): Promise<ModifyInstancesVpcResponse> {
    return this.request("ModifyInstancesVpc", req, cb)
  }

  /**
   * 删除策略
   */
  async RemovePolicy(
    req: RemovePolicyRequest,
    cb?: (error: string, rep: RemovePolicyResponse) => void
  ): Promise<RemovePolicyResponse> {
    return this.request("RemovePolicy", req, cb)
  }

  /**
   * 拉取云桌面关联的安全组信息
   */
  async DescribeSecurityGroups(
    req: DescribeSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeSecurityGroupsResponse) => void
  ): Promise<DescribeSecurityGroupsResponse> {
    return this.request("DescribeSecurityGroups", req, cb)
  }

  /**
   * 创建批量脚本任务
   */
  async CreateCommandTask(
    req: CreateCommandTaskRequest,
    cb?: (error: string, rep: CreateCommandTaskResponse) => void
  ): Promise<CreateCommandTaskResponse> {
    return this.request("CreateCommandTask", req, cb)
  }

  /**
   * 用于删除一个或多个自定义镜像。单次最大删除5个。
   */
  async DeleteImages(
    req: DeleteImagesRequest,
    cb?: (error: string, rep: DeleteImagesResponse) => void
  ): Promise<DeleteImagesResponse> {
    return this.request("DeleteImages", req, cb)
  }

  /**
   * 注销或者断开机器当前会话
   */
  async StopSession(
    req: StopSessionRequest,
    cb?: (error: string, rep: StopSessionResponse) => void
  ): Promise<StopSessionResponse> {
    return this.request("StopSession", req, cb)
  }

  /**
   * 查询实例监控数据
   */
  async DescribeInstanceMonitorData(
    req: DescribeInstanceMonitorDataRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorDataResponse) => void
  ): Promise<DescribeInstanceMonitorDataResponse> {
    return this.request("DescribeInstanceMonitorData", req, cb)
  }

  /**
   * 开启实例
   */
  async StartInstances(
    req: StartInstancesRequest,
    cb?: (error: string, rep: StartInstancesResponse) => void
  ): Promise<StartInstancesResponse> {
    return this.request("StartInstances", req, cb)
  }

  /**
   * 创建自定义镜像。
   */
  async CreateImage(
    req: CreateImageRequest,
    cb?: (error: string, rep: CreateImageResponse) => void
  ): Promise<CreateImageResponse> {
    return this.request("CreateImage", req, cb)
  }

  /**
   * 获取指定实例的登录login信息
   */
  async DescribeInstanceLoginMsg(
    req: DescribeInstanceLoginMsgRequest,
    cb?: (error: string, rep: DescribeInstanceLoginMsgResponse) => void
  ): Promise<DescribeInstanceLoginMsgResponse> {
    return this.request("DescribeInstanceLoginMsg", req, cb)
  }

  /**
   * 实例新增数据盘
   */
  async CreateDataDisk(
    req: CreateDataDiskRequest,
    cb?: (error: string, rep: CreateDataDiskResponse) => void
  ): Promise<CreateDataDiskResponse> {
    return this.request("CreateDataDisk", req, cb)
  }

  /**
   * 关闭实例
   */
  async StopInstances(
    req: StopInstancesRequest,
    cb?: (error: string, rep: StopInstancesResponse) => void
  ): Promise<StopInstancesResponse> {
    return this.request("StopInstances", req, cb)
  }

  /**
   * 停止命令任务
   */
  async StopCommandTasks(
    req: StopCommandTasksRequest,
    cb?: (error: string, rep: StopCommandTasksResponse) => void
  ): Promise<StopCommandTasksResponse> {
    return this.request("StopCommandTasks", req, cb)
  }

  /**
   * 停止脚本任务的执行。
   */
  async StopInvocation(
    req: StopInvocationRequest,
    cb?: (error: string, rep: StopInvocationResponse) => void
  ): Promise<StopInvocationResponse> {
    return this.request("StopInvocation", req, cb)
  }

  /**
   * 更新策略
   */
  async UpdatePolicy(
    req: UpdatePolicyRequest,
    cb?: (error: string, rep: UpdatePolicyResponse) => void
  ): Promise<UpdatePolicyResponse> {
    return this.request("UpdatePolicy", req, cb)
  }

  /**
   * 查询脚本任务执行的详细情况。
   */
  async DescribeInvocationDetail(
    req: DescribeInvocationDetailRequest,
    cb?: (error: string, rep: DescribeInvocationDetailResponse) => void
  ): Promise<DescribeInvocationDetailResponse> {
    return this.request("DescribeInvocationDetail", req, cb)
  }

  /**
   * 安全组批量关联云桌面
   */
  async AssociateSecurityGroup(
    req?: AssociateSecurityGroupRequest,
    cb?: (error: string, rep: AssociateSecurityGroupResponse) => void
  ): Promise<AssociateSecurityGroupResponse> {
    return this.request("AssociateSecurityGroup", req, cb)
  }

  /**
     * 主动退还、销毁退还实例。 
<li>包年包月实例首次调用本接口，且参数DestroyImmediately为false时，实例进入隔离期，再次调用本接口，实例将被销毁，且不可恢复。</li>
<li>包年包月实例，如果参数DestroyImmediately为true来调用此接口，则实例将被直接销毁，且不可恢复。</li>
<li>按量计费实例调用本接口将被直接销毁，且不可恢复。</li>
     */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }

  /**
   * 修改镜像属性
   */
  async ModifyImageAttrs(
    req: ModifyImageAttrsRequest,
    cb?: (error: string, rep: ModifyImageAttrsResponse) => void
  ): Promise<ModifyImageAttrsResponse> {
    return this.request("ModifyImageAttrs", req, cb)
  }

  /**
   * 调整实例机型配置
   */
  async ModifyInstancesType(
    req: ModifyInstancesTypeRequest,
    cb?: (error: string, rep: ModifyInstancesTypeResponse) => void
  ): Promise<ModifyInstancesTypeResponse> {
    return this.request("ModifyInstancesType", req, cb)
  }

  /**
   * 实例重置
   */
  async ResetInstances(
    req: ResetInstancesRequest,
    cb?: (error: string, rep: ResetInstancesResponse) => void
  ): Promise<ResetInstancesResponse> {
    return this.request("ResetInstances", req, cb)
  }

  /**
   * 解除用户和机器绑定关系
   */
  async UnbindInstances(
    req: UnbindInstancesRequest,
    cb?: (error: string, rep: UnbindInstancesResponse) => void
  ): Promise<UnbindInstancesResponse> {
    return this.request("UnbindInstances", req, cb)
  }

  /**
   * 实例续费
   */
  async RenewInstances(
    req: RenewInstancesRequest,
    cb?: (error: string, rep: RenewInstancesResponse) => void
  ): Promise<RenewInstancesResponse> {
    return this.request("RenewInstances", req, cb)
  }

  /**
   * 安全组批量解关联云桌面
   */
  async DisassociateSecurityGroup(
    req?: DisassociateSecurityGroupRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupResponse) => void
  ): Promise<DisassociateSecurityGroupResponse> {
    return this.request("DisassociateSecurityGroup", req, cb)
  }

  /**
   * 新建域名访问控制策略
   */
  async CreateDomainControlPolicy(
    req: CreateDomainControlPolicyRequest,
    cb?: (error: string, rep: CreateDomainControlPolicyResponse) => void
  ): Promise<CreateDomainControlPolicyResponse> {
    return this.request("CreateDomainControlPolicy", req, cb)
  }

  /**
   * 删除命令任务
   */
  async DeleteCommandTasks(
    req: DeleteCommandTasksRequest,
    cb?: (error: string, rep: DeleteCommandTasksResponse) => void
  ): Promise<DeleteCommandTasksResponse> {
    return this.request("DeleteCommandTasks", req, cb)
  }

  /**
   * 在指定的云桌面实例上执行脚本任务。
   */
  async RunCommand(
    req: RunCommandRequest,
    cb?: (error: string, rep: RunCommandResponse) => void
  ): Promise<RunCommandResponse> {
    return this.request("RunCommand", req, cb)
  }

  /**
   * 重启实例
   */
  async RebootInstances(
    req: RebootInstancesRequest,
    cb?: (error: string, rep: RebootInstancesResponse) => void
  ): Promise<RebootInstancesResponse> {
    return this.request("RebootInstances", req, cb)
  }

  /**
   * 创建云桌面实例
   */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }

  /**
   * 创建策略
   */
  async CreatePolicy(
    req: CreatePolicyRequest,
    cb?: (error: string, rep: CreatePolicyResponse) => void
  ): Promise<CreatePolicyResponse> {
    return this.request("CreatePolicy", req, cb)
  }

  /**
   * 绑定桌面
   */
  async BindInstances(
    req: BindInstancesRequest,
    cb?: (error: string, rep: BindInstancesResponse) => void
  ): Promise<BindInstancesResponse> {
    return this.request("BindInstances", req, cb)
  }

  /**
   * 拉取命令任务详情
   */
  async DescribeCommandTasks(
    req: DescribeCommandTasksRequest,
    cb?: (error: string, rep: DescribeCommandTasksResponse) => void
  ): Promise<DescribeCommandTasksResponse> {
    return this.request("DescribeCommandTasks", req, cb)
  }

  /**
   * 获取指定实例的登录Fetch信息
   */
  async DescribeInstanceFetchMsg(
    req: DescribeInstanceFetchMsgRequest,
    cb?: (error: string, rep: DescribeInstanceFetchMsgResponse) => void
  ): Promise<DescribeInstanceFetchMsgResponse> {
    return this.request("DescribeInstanceFetchMsg", req, cb)
  }
}
