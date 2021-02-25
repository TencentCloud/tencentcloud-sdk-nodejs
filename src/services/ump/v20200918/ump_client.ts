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
  ModifyMultiBizConfigResponse,
  CreateMultiBizAlertResponse,
  CameraConfig,
  CreateServerStateResponse,
  Polygon,
  CreateCaptureResponse,
  DescribeConfigRequest,
  DeleteTaskRequest,
  CreateCameraAlertsRequest,
  CreateCameraAlertsResponse,
  DeleteMultiBizAlertRequest,
  ServerStateItem,
  DescribeZonesRequest,
  Config,
  TaskContent,
  SearchImageResponse,
  CreateProgramStateResponse,
  ServiceRegisterInfo,
  DescribeTasksRequest,
  SearchImageRequest,
  DeleteMultiBizAlertResponse,
  ReportServiceRegisterRequest,
  DescribeImageResponse,
  CreateCameraAlertAlert,
  ReportServiceRegisterResponse,
  DiskInfo,
  CreateCameraStateResponse,
  CreateMultiBizAlertRequest,
  CreateProgramStateRequest,
  DescribeMultiBizBaseImageRequest,
  MultiBizWarningInfo,
  Task,
  ZoneConfig,
  ProgramStateItem,
  DescribeTasksResponse,
  DescribeCamerasRequest,
  DescribeMultiBizBaseImageResponse,
  DescribeImageRequest,
  ZoneArea,
  SearchResult,
  CameraState,
  CreateCaptureRequest,
  CreateCameraAlertsMoveAlert,
  CreateCameraStateRequest,
  DescribeCamerasResponse,
  DescribeConfigResponse,
  DeleteTaskResponse,
  DescribeZonesResponse,
  ModifyMultiBizConfigRequest,
  CameraZones,
  CreateCameraAlertsCoverAlert,
  BunkZone,
  Point,
  CreateServerStateRequest,
  MultiBizWarning,
} from "./ump_models"

/**
 * ump client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ump.tencentcloudapi.com", "2020-09-18", clientConfig)
  }

  /**
   * 上报服务注册自身的服务地址作为回调地址, 用于信息回传。
   */
  async ReportServiceRegister(
    req: ReportServiceRegisterRequest,
    cb?: (error: string, rep: ReportServiceRegisterResponse) => void
  ): Promise<ReportServiceRegisterResponse> {
    return this.request("ReportServiceRegister", req, cb)
  }

  /**
   * 集团广场的多经点位配置更新
   */
  async ModifyMultiBizConfig(
    req: ModifyMultiBizConfigRequest,
    cb?: (error: string, rep: ModifyMultiBizConfigResponse) => void
  ): Promise<ModifyMultiBizConfigResponse> {
    return this.request("ModifyMultiBizConfig", req, cb)
  }

  /**
     * 上报相机移动、遮挡等告警信息


     */
  async CreateCameraAlerts(
    req: CreateCameraAlertsRequest,
    cb?: (error: string, rep: CreateCameraAlertsResponse) => void
  ): Promise<CreateCameraAlertsResponse> {
    return this.request("CreateCameraAlerts", req, cb)
  }

  /**
     * 获取摄像头配置信息
mac不为空返回指定相机配置
mac为空返回对应GroupCode和MallId全量配置
     */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 实时获取底图接口
   */
  async DescribeImage(
    req: DescribeImageRequest,
    cb?: (error: string, rep: DescribeImageResponse) => void
  ): Promise<DescribeImageResponse> {
    return this.request("DescribeImage", req, cb)
  }

  /**
   * 集团广场的多经点位消警
   */
  async DeleteMultiBizAlert(
    req: DeleteMultiBizAlertRequest,
    cb?: (error: string, rep: DeleteMultiBizAlertResponse) => void
  ): Promise<DeleteMultiBizAlertResponse> {
    return this.request("DeleteMultiBizAlert", req, cb)
  }

  /**
   * 获取集团广场对应的摄像头列表
   */
  async DescribeCameras(
    req: DescribeCamerasRequest,
    cb?: (error: string, rep: DescribeCamerasResponse) => void
  ): Promise<DescribeCamerasResponse> {
    return this.request("DescribeCameras", req, cb)
  }

  /**
   * 获取集团广场的点位列表
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 删除集团广场对应的任务
   */
  async DeleteTask(
    req: DeleteTaskRequest,
    cb?: (error: string, rep: DeleteTaskResponse) => void
  ): Promise<DeleteTaskResponse> {
    return this.request("DeleteTask", req, cb)
  }

  /**
   * 上报所有进程监控信息
   */
  async CreateProgramState(
    req: CreateProgramStateRequest,
    cb?: (error: string, rep: CreateProgramStateResponse) => void
  ): Promise<CreateProgramStateResponse> {
    return this.request("CreateProgramState", req, cb)
  }

  /**
   * 查询集团广场对应的任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 集团广场的多经点位告警
   */
  async CreateMultiBizAlert(
    req: CreateMultiBizAlertRequest,
    cb?: (error: string, rep: CreateMultiBizAlertResponse) => void
  ): Promise<CreateMultiBizAlertResponse> {
    return this.request("CreateMultiBizAlert", req, cb)
  }

  /**
   * 以图搜图
   */
  async SearchImage(
    req: SearchImageRequest,
    cb?: (error: string, rep: SearchImageResponse) => void
  ): Promise<SearchImageResponse> {
    return this.request("SearchImage", req, cb)
  }

  /**
   * 上报所有服务器硬件监控信息
   */
  async CreateServerState(
    req: CreateServerStateRequest,
    cb?: (error: string, rep: CreateServerStateResponse) => void
  ): Promise<CreateServerStateResponse> {
    return this.request("CreateServerState", req, cb)
  }

  /**
   * 获取多经点位底图
   */
  async DescribeMultiBizBaseImage(
    req: DescribeMultiBizBaseImageRequest,
    cb?: (error: string, rep: DescribeMultiBizBaseImageResponse) => void
  ): Promise<DescribeMultiBizBaseImageResponse> {
    return this.request("DescribeMultiBizBaseImage", req, cb)
  }

  /**
   * 上报当前场内所有相机的当前状态
   */
  async CreateCameraState(
    req: CreateCameraStateRequest,
    cb?: (error: string, rep: CreateCameraStateResponse) => void
  ): Promise<CreateCameraStateResponse> {
    return this.request("CreateCameraState", req, cb)
  }

  /**
   * 场内抓拍上报接口
   */
  async CreateCapture(
    req: CreateCaptureRequest,
    cb?: (error: string, rep: CreateCaptureResponse) => void
  ): Promise<CreateCaptureResponse> {
    return this.request("CreateCapture", req, cb)
  }
}
