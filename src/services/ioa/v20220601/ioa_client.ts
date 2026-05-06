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
  CreatePrivilegeCodeRequest,
  DescribeDeviceHardwareInfoListRspData,
  DescribeAccountResourcesData,
  ModifyVirtualDeviceGroupsReqItem,
  DescribeDeviceDetailListResponse,
  DescribeAggrSoftDeviceListRequest,
  ComplexRule,
  DescribeDeviceHardwareInfoListResponse,
  DescribeResourceGrantedAccountsRequest,
  DescribeDeviceHardwareInfoItem,
  DescribeResourceGrantedAccountGroupsRequest,
  RulePayloadItem,
  DescribeDeviceDetailListData,
  DescribeDevicesResponse,
  DescribeAggrSoftDeviceListData,
  GrantResourcesByVirtualGroupsRequest,
  DescribeAccountGroupsData,
  DescribeDirectAccountGroupResourcesResponse,
  DescribeDeviceVirtualGroupsResponse,
  CreateBusinessResourceResponse,
  DescribeAggrSoftCategorySoftListRequest,
  DeviceNetworkInfo,
  CreateDeviceVirtualGroupRequest,
  DescribeLocalAccountsData,
  CreateDeviceTaskRequest,
  DeviceDetail,
  DescribeSoftCensusListByDeviceRequest,
  GrantedAccountItem,
  DescribeResourceGrantedAccountGroupsData,
  DescribeResourceGrantedAccountsResponse,
  DescribeResourceGrantedAccountGroupsResponse,
  DescribeResourceGrantedVirtualGroupsResponse,
  DescribeLocalAccountsRequest,
  CreateDeviceTaskResponse,
  GrantResourcesByAccountGroupsRequest,
  DescribeLocalAccountsPage,
  DescribeSoftwareInformationPageData,
  ModifyDeviceTrustStatusResponse,
  CreateDLPFileDetectionTaskRequest,
  ExportDeviceDownloadTaskRequest,
  DescribeSoftCensusListByDeviceData,
  CreateBusinessResourceRequest,
  DescribeDeviceInfoRequest,
  CreateBusinessResourceData,
  GrantResourcesByAccountsRequest,
  DescribeDLPFileDetectTaskResult,
  DescribeDLPFileDetectResultData,
  DescribeDeviceVirtualGroupsRequest,
  DescribeDeviceChildGroupsRequest,
  AggrCategorySoftDetailRow,
  DescribeDeviceInfoResponse,
  CreatePrivilegeCodeRspData,
  DescribeBusinessResourceData,
  DescribeAccountGroupsPageResp,
  DescribeDLPEdgeNodesResponse,
  ExportSoftwareInformationListResponse,
  DescribeResourceGrantedVirtualGroupsRequest,
  FilterGroup,
  DescribeBusinessResourcesRequest,
  DescribeSoftwareInformationRequest,
  DescribeAggrSoftCategorySoftListData,
  GrantResourceOperationByAccounts,
  DescribeDLPEdgeNodesPageData,
  RulePayload,
  DescribeDLPFileDetectTaskResultResponse,
  CreateDLPFileDetectTaskResponse,
  CreateDLPFileDetectTaskData,
  DescribeDLPEdgeNodesRequest,
  Paging,
  GrantResourcesByAccountsResponse,
  SoftwareInformationData,
  DescribeBusinessResourcesResponse,
  DescribeBusinessResourcePageRsp,
  DescribeAggrSoftDetailRequest,
  CreateDeviceVirtualGroupRspData,
  DescribeDLPEdgeNodeGroupsRequest,
  DescribeVirtualDevicesResponse,
  DescribeResourceGrantedAccountsData,
  DescribeAccountResourcesItems,
  CreateDLPFileDetectTaskRequest,
  DescribeDLPFileDetectResultRequest,
  RuleItem,
  CreateDeviceVirtualGroupResponse,
  CreateDLPFileDetectionTaskData,
  DescribeDeviceVirtualGroupsPageRsp,
  GrantedVirtualGroupItem,
  AggrSoftDeviceRow,
  SoftVersionAndNum,
  ExportDeviceDownloadTaskResponse,
  DescribeDeviceDetailListPageData,
  DescribeSoftwareInformationResponse,
  GrantResourcesByAccountGroupsResponse,
  ModifyVirtualDeviceGroupsResponse,
  DescribeLocalAccountsResponse,
  DescribeVirtualDevicesPageRsp,
  Condition,
  DescribeAccountGroupsResponse,
  DeviceVirtualDeviceGroupsDetail,
  DescribeDevicesPageRsp,
  DescribeSoftCensusListByDeviceResponse,
  DescribeDLPEdgeNodesRspItem,
  DescribeDLPEdgeNodeGroupsRspItem,
  DescribeDLPEdgeNodeGroupsResponse,
  Filter,
  GrantResourcesByVirtualGroupsResponse,
  ModifyDeviceTrustStatusRequest,
  DescribeAggrSoftDeviceListResponse,
  DescribeRootAccountGroupResponse,
  DescribeAccountGroupsRequest,
  SimpleRule,
  DescribeDLPFileDetectTaskResultRequest,
  DescribeDeviceDetailListRequest,
  DeviceServiceInfo,
  DescribeLocalAccountAccountGroupsData,
  ExportSoftwareInformationListRequest,
  DescribeDeviceInfoRspData,
  ModifyVirtualDeviceGroupsRequest,
  GetAccountGroupData,
  Sort,
  DescribeDLPEdgeNodeGroupsRspData,
  DescribeDirectAccountGroupResourcesRequest,
  DeviceProcessInfo,
  ExportSoftwareDownloadUrlRspData,
  DescribeResourceGrantedVirtualGroupsData,
  RuleExpression,
  DescribeRootAccountGroupRequest,
  DescribeDeviceChildGroupsRspData,
  DeviceDownloadTask,
  DeviceGroupDetail,
  DescribeSoftCensusListByDevicePageData,
  DescribeDevicesRequest,
  DescribeAggrSoftCategorySoftListResponse,
  DescribeAggrSoftDetailResponse,
  CreateDLPFileDetectionTaskResponse,
  DescribeDeviceChildGroupsResponse,
  GrantResourceOperationByVirtualGroups,
  DescribeDLPFileDetectResultResponse,
  DescribeVirtualDevicesRequest,
  CreatePrivilegeCodeResponse,
  DescribeDeviceHardwareInfoListRequest,
  DescribeAggrSoftDetailData,
  GrantResourceOperationByAccountGroups,
  GrantedAccountGroupItem,
} from "./ioa_models"

/**
 * ioa client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ioa.tencentcloudapi.com", "2022-06-01", clientConfig)
  }

  /**
   * 聚合软件的已安装终端列表
   */
  async DescribeAggrSoftDeviceList(
    req: DescribeAggrSoftDeviceListRequest,
    cb?: (error: string, rep: DescribeAggrSoftDeviceListResponse) => void
  ): Promise<DescribeAggrSoftDeviceListResponse> {
    return this.request("DescribeAggrSoftDeviceList", req, cb)
  }

  /**
   * 添加资源授权到账号组
   */
  async GrantResourcesByAccounts(
    req: GrantResourcesByAccountsRequest,
    cb?: (error: string, rep: GrantResourcesByAccountsResponse) => void
  ): Promise<GrantResourcesByAccountsResponse> {
    return this.request("GrantResourcesByAccounts", req, cb)
  }

  /**
   * 创建终端导出任务，私有化调用path为：capi/Assets/Device/ExportDeviceDownloadTask
   */
  async ExportDeviceDownloadTask(
    req: ExportDeviceDownloadTaskRequest,
    cb?: (error: string, rep: ExportDeviceDownloadTaskResponse) => void
  ): Promise<ExportDeviceDownloadTaskResponse> {
    return this.request("ExportDeviceDownloadTask", req, cb)
  }

  /**
   * 创建获取终端进程网络服务信息任务，私有化调用path为：capi/Assets/Device/DescribeDeviceInfo
   */
  async CreateDeviceTask(
    req: CreateDeviceTaskRequest,
    cb?: (error: string, rep: CreateDeviceTaskResponse) => void
  ): Promise<CreateDeviceTaskResponse> {
    return this.request("CreateDeviceTask", req, cb)
  }

  /**
   * 查看指定终端的软件详情列表,私有化调用path为：capi/Software/DescribeSoftwareInformation
   */
  async DescribeSoftwareInformation(
    req: DescribeSoftwareInformationRequest,
    cb?: (error: string, rep: DescribeSoftwareInformationResponse) => void
  ): Promise<DescribeSoftwareInformationResponse> {
    return this.request("DescribeSoftwareInformation", req, cb)
  }

  /**
   * 列表账户组直接关联的资源，私有化调用path为：capi/NGN/DescribeResourceGrantedAccounts
   */
  async DescribeResourceGrantedAccountGroups(
    req: DescribeResourceGrantedAccountGroupsRequest,
    cb?: (error: string, rep: DescribeResourceGrantedAccountGroupsResponse) => void
  ): Promise<DescribeResourceGrantedAccountGroupsResponse> {
    return this.request("DescribeResourceGrantedAccountGroups", req, cb)
  }

  /**
   * 创建文件鉴定任务，私有化调用path为：capi/DlpOpenApi/CreateDLPFileDetectTask
   */
  async CreateDLPFileDetectTask(
    req: CreateDLPFileDetectTaskRequest,
    cb?: (error: string, rep: CreateDLPFileDetectTaskResponse) => void
  ): Promise<CreateDLPFileDetectTaskResponse> {
    return this.request("CreateDLPFileDetectTask", req, cb)
  }

  /**
   * 创建终端自定义分组，私有化调用path为：/capi/Assets/Device/CreateDeviceVirtualGroup
   */
  async CreateDeviceVirtualGroup(
    req: CreateDeviceVirtualGroupRequest,
    cb?: (error: string, rep: CreateDeviceVirtualGroupResponse) => void
  ): Promise<CreateDeviceVirtualGroupResponse> {
    return this.request("CreateDeviceVirtualGroup", req, cb)
  }

  /**
   * 查询文件鉴定任务结果
   */
  async DescribeDLPFileDetectTaskResult(
    req: DescribeDLPFileDetectTaskResultRequest,
    cb?: (error: string, rep: DescribeDLPFileDetectTaskResultResponse) => void
  ): Promise<DescribeDLPFileDetectTaskResultResponse> {
    return this.request("DescribeDLPFileDetectTaskResult", req, cb)
  }

  /**
   * 展示自定义分组终端列表，私有化调用path为：/capi/Assets/DescribeVirtualDevices
   */
  async DescribeVirtualDevices(
    req: DescribeVirtualDevicesRequest,
    cb?: (error: string, rep: DescribeVirtualDevicesResponse) => void
  ): Promise<DescribeVirtualDevicesResponse> {
    return this.request("DescribeVirtualDevices", req, cb)
  }

  /**
   * 导出基于指定终端查看软件信息详情列表查询,私有化调用path为：capi/Software/ExportSoftwareInformationList
   */
  async ExportSoftwareInformationList(
    req: ExportSoftwareInformationListRequest,
    cb?: (error: string, rep: ExportSoftwareInformationListResponse) => void
  ): Promise<ExportSoftwareInformationListResponse> {
    return this.request("ExportSoftwareInformationList", req, cb)
  }

  /**
   * 提交送检任务
   */
  async CreateDLPFileDetectionTask(
    req: CreateDLPFileDetectionTaskRequest,
    cb?: (error: string, rep: CreateDLPFileDetectionTaskResponse) => void
  ): Promise<CreateDLPFileDetectionTaskResponse> {
    return this.request("CreateDLPFileDetectionTask", req, cb)
  }

  /**
   * 生成特权码，私有化调用path为：capi/Assets/Device/CreatePrivilegeCode，生成的特权码、卸载码，仅对该设备当天有效
   */
  async CreatePrivilegeCode(
    req: CreatePrivilegeCodeRequest,
    cb?: (error: string, rep: CreatePrivilegeCodeResponse) => void
  ): Promise<CreatePrivilegeCodeResponse> {
    return this.request("CreatePrivilegeCode", req, cb)
  }

  /**
   * 查询账号根分组详情。对应“用户与授权管理”里内置不可见的全网根账号组，所有新建的目录，都挂在该全网根账号组下。
   */
  async DescribeRootAccountGroup(
    req?: DescribeRootAccountGroupRequest,
    cb?: (error: string, rep: DescribeRootAccountGroupResponse) => void
  ): Promise<DescribeRootAccountGroupResponse> {
    return this.request("DescribeRootAccountGroup", req, cb)
  }

  /**
   * webservice查询文件检测结果
   */
  async DescribeDLPFileDetectResult(
    req: DescribeDLPFileDetectResultRequest,
    cb?: (error: string, rep: DescribeDLPFileDetectResultResponse) => void
  ): Promise<DescribeDLPFileDetectResultResponse> {
    return this.request("DescribeDLPFileDetectResult", req, cb)
  }

  /**
   * 列表账户组直接关联的资源，私有化调用path为：capi/NGN/DescribeResourceGrantedAccounts
   */
  async DescribeResourceGrantedAccounts(
    req: DescribeResourceGrantedAccountsRequest,
    cb?: (error: string, rep: DescribeResourceGrantedAccountsResponse) => void
  ): Promise<DescribeResourceGrantedAccountsResponse> {
    return this.request("DescribeResourceGrantedAccounts", req, cb)
  }

  /**
   * 聚合的分类软件列表
   */
  async DescribeAggrSoftCategorySoftList(
    req: DescribeAggrSoftCategorySoftListRequest,
    cb?: (error: string, rep: DescribeAggrSoftCategorySoftListResponse) => void
  ): Promise<DescribeAggrSoftCategorySoftListResponse> {
    return this.request("DescribeAggrSoftCategorySoftList", req, cb)
  }

  /**
   * 查询边缘节点列表，私有化调用path为：capi/DlpOpenApi/DescribeDLPEdgeNodes
   */
  async DescribeDLPEdgeNodes(
    req: DescribeDLPEdgeNodesRequest,
    cb?: (error: string, rep: DescribeDLPEdgeNodesResponse) => void
  ): Promise<DescribeDLPEdgeNodesResponse> {
    return this.request("DescribeDLPEdgeNodes", req, cb)
  }

  /**
   * 列表账户组直接关联的资源，私有化调用path为：capi/Assets/DescribeDirectAccountGroupResources
   */
  async DescribeDirectAccountGroupResources(
    req: DescribeDirectAccountGroupResourcesRequest,
    cb?: (error: string, rep: DescribeDirectAccountGroupResourcesResponse) => void
  ): Promise<DescribeDirectAccountGroupResourcesResponse> {
    return this.request("DescribeDirectAccountGroupResources", req, cb)
  }

  /**
   * 添加资源授权到账号组
   */
  async GrantResourcesByAccountGroups(
    req: GrantResourcesByAccountGroupsRequest,
    cb?: (error: string, rep: GrantResourcesByAccountGroupsResponse) => void
  ): Promise<GrantResourcesByAccountGroupsResponse> {
    return this.request("GrantResourcesByAccountGroups", req, cb)
  }

  /**
   * 创建业务资源，会对一些必填参数进行校验和参数合法性校验，创建业务资源时，先调用下校验相同业务资源接口，看资源是不是有冲突。创建时也会做校验，但没有返回对应的异常信息，私有化调用path为：capi/GatewayResource/CreateBusinessResource
   */
  async CreateBusinessResource(
    req: CreateBusinessResourceRequest,
    cb?: (error: string, rep: CreateBusinessResourceResponse) => void
  ): Promise<CreateBusinessResourceResponse> {
    return this.request("CreateBusinessResource", req, cb)
  }

  /**
   * 聚合的软件详情
   */
  async DescribeAggrSoftDetail(
    req: DescribeAggrSoftDetailRequest,
    cb?: (error: string, rep: DescribeAggrSoftDetailResponse) => void
  ): Promise<DescribeAggrSoftDetailResponse> {
    return this.request("DescribeAggrSoftDetail", req, cb)
  }

  /**
   * 获取终端进程网络服务信息，私有化调用path为：capi/Assets/Device/DescribeDeviceInfo
   */
  async DescribeDeviceInfo(
    req: DescribeDeviceInfoRequest,
    cb?: (error: string, rep: DescribeDeviceInfoResponse) => void
  ): Promise<DescribeDeviceInfoResponse> {
    return this.request("DescribeDeviceInfo", req, cb)
  }

  /**
   * 查询满足条件的查询终端硬件信息列表，私有化调用path为：/capi/Assets/Device/DescribeDeviceHardwareInfoList
   */
  async DescribeDeviceHardwareInfoList(
    req: DescribeDeviceHardwareInfoListRequest,
    cb?: (error: string, rep: DescribeDeviceHardwareInfoListResponse) => void
  ): Promise<DescribeDeviceHardwareInfoListResponse> {
    return this.request("DescribeDeviceHardwareInfoList", req, cb)
  }

  /**
   * 查询设备组子分组详情，私有化调用path为：capi/Assets/Device/DescribeDeviceChildGroups
   */
  async DescribeDeviceChildGroups(
    req: DescribeDeviceChildGroupsRequest,
    cb?: (error: string, rep: DescribeDeviceChildGroupsResponse) => void
  ): Promise<DescribeDeviceChildGroupsResponse> {
    return this.request("DescribeDeviceChildGroups", req, cb)
  }

  /**
   * 以分页的方式查询账号分组列表，私有化调用path为：/capi/Assets/DescribeAccountGroups
   */
  async DescribeAccountGroups(
    req: DescribeAccountGroupsRequest,
    cb?: (error: string, rep: DescribeAccountGroupsResponse) => void
  ): Promise<DescribeAccountGroupsResponse> {
    return this.request("DescribeAccountGroups", req, cb)
  }

  /**
   * 基于软件查看终端详情列表,私有化调用path为：capi/Software/DescribeDeviceDetailList
   */
  async DescribeDeviceDetailList(
    req: DescribeDeviceDetailListRequest,
    cb?: (error: string, rep: DescribeDeviceDetailListResponse) => void
  ): Promise<DescribeDeviceDetailListResponse> {
    return this.request("DescribeDeviceDetailList", req, cb)
  }

  /**
   * 给接入设备加黑加白,私有化调用path为：capi/NGN/ModifyDeviceTrustStatus
   */
  async ModifyDeviceTrustStatus(
    req: ModifyDeviceTrustStatusRequest,
    cb?: (error: string, rep: ModifyDeviceTrustStatusResponse) => void
  ): Promise<ModifyDeviceTrustStatusResponse> {
    return this.request("ModifyDeviceTrustStatus", req, cb)
  }

  /**
   * 获取账号列表，支持分页，模糊搜索，私有化调用path为：/capi/Assets/Account/DescribeLocalAccounts
   */
  async DescribeLocalAccounts(
    req: DescribeLocalAccountsRequest,
    cb?: (error: string, rep: DescribeLocalAccountsResponse) => void
  ): Promise<DescribeLocalAccountsResponse> {
    return this.request("DescribeLocalAccounts", req, cb)
  }

  /**
   * 查询边缘节点分组，私有化调用path为：capi/Connectors/DescribeDLPEdgeNodeGroups
   */
  async DescribeDLPEdgeNodeGroups(
    req: DescribeDLPEdgeNodeGroupsRequest,
    cb?: (error: string, rep: DescribeDLPEdgeNodeGroupsResponse) => void
  ): Promise<DescribeDLPEdgeNodeGroupsResponse> {
    return this.request("DescribeDLPEdgeNodeGroups", req, cb)
  }

  /**
   * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 查询终端自定义分组列表，私有化调用path为：/capi/Assets/Device/DescribeDeviceVirtualGroups
   */
  async DescribeDeviceVirtualGroups(
    req: DescribeDeviceVirtualGroupsRequest,
    cb?: (error: string, rep: DescribeDeviceVirtualGroupsResponse) => void
  ): Promise<DescribeDeviceVirtualGroupsResponse> {
    return this.request("DescribeDeviceVirtualGroups", req, cb)
  }

  /**
   * 添加资源授权到账号组
   */
  async GrantResourcesByVirtualGroups(
    req: GrantResourcesByVirtualGroupsRequest,
    cb?: (error: string, rep: GrantResourcesByVirtualGroupsResponse) => void
  ): Promise<GrantResourcesByVirtualGroupsResponse> {
    return this.request("GrantResourcesByVirtualGroups", req, cb)
  }

  /**
   * 查看终端树下的软件列表,私有化调用path为：capi/Software/DescribeSoftCensusListByDevice
   */
  async DescribeSoftCensusListByDevice(
    req: DescribeSoftCensusListByDeviceRequest,
    cb?: (error: string, rep: DescribeSoftCensusListByDeviceResponse) => void
  ): Promise<DescribeSoftCensusListByDeviceResponse> {
    return this.request("DescribeSoftCensusListByDevice", req, cb)
  }

  /**
   * 终端自定义分组增减终端，私有化调用path为：/capi/Assets/Device/ModifyVirtualDeviceGroups
   */
  async ModifyVirtualDeviceGroups(
    req: ModifyVirtualDeviceGroupsRequest,
    cb?: (error: string, rep: ModifyVirtualDeviceGroupsResponse) => void
  ): Promise<ModifyVirtualDeviceGroupsResponse> {
    return this.request("ModifyVirtualDeviceGroups", req, cb)
  }

  /**
   * 获取业务资源列表,支持分页，如果分页信息不传递会有默认分页，支持排序，不传排序字段，按业务资源创建时间排序,私有化调用path为：capi/GatewayResource/DescribeBusinessResources
   */
  async DescribeBusinessResources(
    req: DescribeBusinessResourcesRequest,
    cb?: (error: string, rep: DescribeBusinessResourcesResponse) => void
  ): Promise<DescribeBusinessResourcesResponse> {
    return this.request("DescribeBusinessResources", req, cb)
  }

  /**
   * 列表账户组直接关联的资源，私有化调用path为：capi/NGN/DescribeResourceGrantedVirtualGroups
   */
  async DescribeResourceGrantedVirtualGroups(
    req: DescribeResourceGrantedVirtualGroupsRequest,
    cb?: (error: string, rep: DescribeResourceGrantedVirtualGroupsResponse) => void
  ): Promise<DescribeResourceGrantedVirtualGroupsResponse> {
    return this.request("DescribeResourceGrantedVirtualGroups", req, cb)
  }
}
