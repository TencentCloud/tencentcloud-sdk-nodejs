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
  DescribeDeviceSessionDetailsResponse,
  DeleteProjectRequest,
  License,
  PolicyInfo,
  ModifyDeviceResponse,
  GetLicensesRequest,
  DescribePolicyResponse,
  BatchDeleteDevicesRequest,
  SessionInfo,
  DescribeDeviceInfoRequest,
  DescribeSessionStatisticsByIntervalResponse,
  DescribeRecentSessionListRequest,
  RecentSessionInfo,
  DescribeProjectInfoRequest,
  ModifyPolicyRequest,
  DescribeDeviceInfoResponse,
  GetLicenseStatRequest,
  DescribeProjectListResponse,
  ModifyProjectResponse,
  BatchDeletePolicyResponse,
  GetLicenseStatResponse,
  DescribePolicyRequest,
  ModifyPolicyResponse,
  Device,
  DescribeSessionStatisticsRequest,
  BatchDeleteDevicesResponse,
  ModifyProjectRequest,
  DescribeRecentSessionListResponse,
  ModifyDeviceRequest,
  DescribeProjectListRequest,
  ProjectInfo,
  BatchDeletePolicyRequest,
  DescribeDeviceSessionListResponse,
  DescribeProjectInfoResponse,
  DescribeDeviceListResponse,
  BoundLicensesRequest,
  DeleteProjectResponse,
  DescribeDeviceListRequest,
  SessionDeviceDetail,
  GetDeviceLicenseResponse,
  CreateDeviceResponse,
  MultiNet,
  DescribeSessionStatisticsByIntervalRequest,
  CreateDeviceRequest,
  DescribeSessionStatisticsResponse,
  GetDevicesResponse,
  BoundLicensesResponse,
  DescribeDeviceSessionDetailsRequest,
  GetLicensesResponse,
  DeviceInfo,
  DescribeDeviceSessionListRequest,
  GetDevicesRequest,
  CreateProjectResponse,
  SessionIntervalStatistic,
  GetDeviceLicenseRequest,
  CreateProjectRequest,
} from "./trro_models"

/**
 * trro client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("trro.tencentcloudapi.com", "2022-03-25", clientConfig)
  }

  /**
   * 用于获取项目信息
   */
  async DescribeProjectInfo(
    req: DescribeProjectInfoRequest,
    cb?: (error: string, rep: DescribeProjectInfoResponse) => void
  ): Promise<DescribeProjectInfoResponse> {
    return this.request("DescribeProjectInfo", req, cb)
  }

  /**
   * 查询用户设备的授权绑定情况
   */
  async GetDevices(
    req: GetDevicesRequest,
    cb?: (error: string, rep: GetDevicesResponse) => void
  ): Promise<GetDevicesResponse> {
    return this.request("GetDevices", req, cb)
  }

  /**
   * 用于修改设备信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 用于查看权限配置
   */
  async DescribePolicy(
    req: DescribePolicyRequest,
    cb?: (error: string, rep: DescribePolicyResponse) => void
  ): Promise<DescribePolicyResponse> {
    return this.request("DescribePolicy", req, cb)
  }

  /**
   * 统计license类型数量
   */
  async GetLicenseStat(
    req?: GetLicenseStatRequest,
    cb?: (error: string, rep: GetLicenseStatResponse) => void
  ): Promise<GetLicenseStatResponse> {
    return this.request("GetLicenseStat", req, cb)
  }

  /**
   * 获取各时间段的会话统计值
   */
  async DescribeSessionStatisticsByInterval(
    req: DescribeSessionStatisticsByIntervalRequest,
    cb?: (error: string, rep: DescribeSessionStatisticsByIntervalResponse) => void
  ): Promise<DescribeSessionStatisticsByIntervalResponse> {
    return this.request("DescribeSessionStatisticsByInterval", req, cb)
  }

  /**
   * 为推流设备绑定license，优先绑定到期时间最近的，到期时间相同优先绑定月包
   */
  async BoundLicenses(
    req: BoundLicensesRequest,
    cb?: (error: string, rep: BoundLicensesResponse) => void
  ): Promise<BoundLicensesResponse> {
    return this.request("BoundLicenses", req, cb)
  }

  /**
   * 用于批量删除修改权限配置
   */
  async BatchDeletePolicy(
    req: BatchDeletePolicyRequest,
    cb?: (error: string, rep: BatchDeletePolicyResponse) => void
  ): Promise<BatchDeletePolicyResponse> {
    return this.request("BatchDeletePolicy", req, cb)
  }

  /**
   * 按授权查看license列表
   */
  async GetLicenses(
    req: GetLicensesRequest,
    cb?: (error: string, rep: GetLicensesResponse) => void
  ): Promise<GetLicensesResponse> {
    return this.request("GetLicenses", req, cb)
  }

  /**
   * 用于获取设备信息列表
   */
  async DescribeDeviceList(
    req: DescribeDeviceListRequest,
    cb?: (error: string, rep: DescribeDeviceListResponse) => void
  ): Promise<DescribeDeviceListResponse> {
    return this.request("DescribeDeviceList", req, cb)
  }

  /**
   * 用于修改项目信息
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 获取设备会话数据详单
   */
  async DescribeDeviceSessionDetails(
    req: DescribeDeviceSessionDetailsRequest,
    cb?: (error: string, rep: DescribeDeviceSessionDetailsResponse) => void
  ): Promise<DescribeDeviceSessionDetailsResponse> {
    return this.request("DescribeDeviceSessionDetails", req, cb)
  }

  /**
   * 用于修改权限配置
   */
  async ModifyPolicy(
    req: ModifyPolicyRequest,
    cb?: (error: string, rep: ModifyPolicyResponse) => void
  ): Promise<ModifyPolicyResponse> {
    return this.request("ModifyPolicy", req, cb)
  }

  /**
   * 用于创建设备
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 用于批量删除设备
   */
  async BatchDeleteDevices(
    req: BatchDeleteDevicesRequest,
    cb?: (error: string, rep: BatchDeleteDevicesResponse) => void
  ): Promise<BatchDeleteDevicesResponse> {
    return this.request("BatchDeleteDevices", req, cb)
  }

  /**
   * 获取会话统计值
   */
  async DescribeSessionStatistics(
    req: DescribeSessionStatisticsRequest,
    cb?: (error: string, rep: DescribeSessionStatisticsResponse) => void
  ): Promise<DescribeSessionStatisticsResponse> {
    return this.request("DescribeSessionStatistics", req, cb)
  }

  /**
   * 用于获取指定设备信息
   */
  async DescribeDeviceInfo(
    req: DescribeDeviceInfoRequest,
    cb?: (error: string, rep: DescribeDeviceInfoResponse) => void
  ): Promise<DescribeDeviceInfoResponse> {
    return this.request("DescribeDeviceInfo", req, cb)
  }

  /**
   * 获取设备会话列表
   */
  async DescribeDeviceSessionList(
    req: DescribeDeviceSessionListRequest,
    cb?: (error: string, rep: DescribeDeviceSessionListResponse) => void
  ): Promise<DescribeDeviceSessionListResponse> {
    return this.request("DescribeDeviceSessionList", req, cb)
  }

  /**
   * 用于创建项目
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 获取最新设备会话列表
   */
  async DescribeRecentSessionList(
    req: DescribeRecentSessionListRequest,
    cb?: (error: string, rep: DescribeRecentSessionListResponse) => void
  ): Promise<DescribeRecentSessionListResponse> {
    return this.request("DescribeRecentSessionList", req, cb)
  }

  /**
   * 获取设备已经绑定的可用授权数量
   */
  async GetDeviceLicense(
    req: GetDeviceLicenseRequest,
    cb?: (error: string, rep: GetDeviceLicenseResponse) => void
  ): Promise<GetDeviceLicenseResponse> {
    return this.request("GetDeviceLicense", req, cb)
  }

  /**
   * 用于删除项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 用于获取项目列表
   */
  async DescribeProjectList(
    req: DescribeProjectListRequest,
    cb?: (error: string, rep: DescribeProjectListResponse) => void
  ): Promise<DescribeProjectListResponse> {
    return this.request("DescribeProjectList", req, cb)
  }
}
