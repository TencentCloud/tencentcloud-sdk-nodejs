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
  CreatePrivilegeCodeRequest,
  DescribeDeviceHardwareInfoListRspData,
  DescribeDLPFileDetectResultRequest,
  RuleItem,
  DescribeSoftCensusListByDeviceData,
  DescribeLocalAccountAccountGroupsData,
  CreateDeviceVirtualGroupResponse,
  CreateDLPFileDetectionTaskData,
  DescribeSoftwareInformationResponse,
  ComplexRule,
  DescribeDeviceHardwareInfoListResponse,
  Sort,
  DescribeRootAccountGroupResponse,
  DescribeDeviceHardwareInfoItem,
  DescribeDLPFileDetectResultData,
  DescribeDeviceInfoResponse,
  DescribeDevicesResponse,
  CreatePrivilegeCodeRspData,
  DescribeDeviceInfoRequest,
  DescribeLocalAccountsResponse,
  DescribeAccountGroupsData,
  RuleExpression,
  DescribeRootAccountGroupRequest,
  SoftwareInformationData,
  DescribeAccountGroupsPageResp,
  DescribeAccountGroupsRequest,
  DescribeAccountGroupsResponse,
  DescribeDevicesPageRsp,
  DescribeSoftCensusListByDeviceResponse,
  FilterGroup,
  DescribeSoftCensusListByDevicePageData,
  DeviceNetworkInfo,
  DescribeLocalAccountsRequest,
  DescribeSoftwareInformationRequest,
  CreateDeviceVirtualGroupRequest,
  DescribeDevicesRequest,
  Paging,
  CreateDeviceTaskRequest,
  DeviceDetail,
  DescribeLocalAccountsData,
  DeviceServiceInfo,
  GetAccountGroupData,
  DescribeSoftCensusListByDeviceRequest,
  Filter,
  DeviceProcessInfo,
  DescribeDeviceInfoRspData,
  CreateDeviceTaskResponse,
  CreateDLPFileDetectionTaskResponse,
  DescribeLocalAccountsPage,
  DescribeSoftwareInformationPageData,
  DescribeDLPFileDetectResultResponse,
  Condition,
  CreateDLPFileDetectionTaskRequest,
  CreatePrivilegeCodeResponse,
  DescribeDeviceHardwareInfoListRequest,
  CreateDeviceVirtualGroupRspData,
  SimpleRule,
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
   * 创建终端自定义分组，私有化调用path为：/capi/Assets/Device/CreateDeviceVirtualGroup
   */
  async CreateDeviceVirtualGroup(
    req: CreateDeviceVirtualGroupRequest,
    cb?: (error: string, rep: CreateDeviceVirtualGroupResponse) => void
  ): Promise<CreateDeviceVirtualGroupResponse> {
    return this.request("CreateDeviceVirtualGroup", req, cb)
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
   * 生成特权码，私有化调用path为：capi/Assets/Device/CreatePrivilegeCode，生成的特权码、卸载码，仅对该设备当天有效
   */
  async CreatePrivilegeCode(
    req: CreatePrivilegeCodeRequest,
    cb?: (error: string, rep: CreatePrivilegeCodeResponse) => void
  ): Promise<CreatePrivilegeCodeResponse> {
    return this.request("CreatePrivilegeCode", req, cb)
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
   * 提交送检任务
   */
  async CreateDLPFileDetectionTask(
    req: CreateDLPFileDetectionTaskRequest,
    cb?: (error: string, rep: CreateDLPFileDetectionTaskResponse) => void
  ): Promise<CreateDLPFileDetectionTaskResponse> {
    return this.request("CreateDLPFileDetectionTask", req, cb)
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
   * 获取终端进程网络服务信息，私有化调用path为：capi/Assets/Device/DescribeDeviceInfo
   */
  async DescribeDeviceInfo(
    req: DescribeDeviceInfoRequest,
    cb?: (error: string, rep: DescribeDeviceInfoResponse) => void
  ): Promise<DescribeDeviceInfoResponse> {
    return this.request("DescribeDeviceInfo", req, cb)
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
   * 查询满足条件的查询终端硬件信息列表，私有化调用path为：/capi/Assets/Device/DescribeDeviceHardwareInfoList
   */
  async DescribeDeviceHardwareInfoList(
    req: DescribeDeviceHardwareInfoListRequest,
    cb?: (error: string, rep: DescribeDeviceHardwareInfoListResponse) => void
  ): Promise<DescribeDeviceHardwareInfoListResponse> {
    return this.request("DescribeDeviceHardwareInfoList", req, cb)
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
   * 查看终端树下的软件列表,私有化调用path为：capi/Software/DescribeSoftCensusListByDevice
   */
  async DescribeSoftCensusListByDevice(
    req: DescribeSoftCensusListByDeviceRequest,
    cb?: (error: string, rep: DescribeSoftCensusListByDeviceResponse) => void
  ): Promise<DescribeSoftCensusListByDeviceResponse> {
    return this.request("DescribeSoftCensusListByDevice", req, cb)
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
}
