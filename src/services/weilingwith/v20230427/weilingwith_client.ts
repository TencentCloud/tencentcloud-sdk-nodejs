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
  DescribeWorkSpaceBuildingCountAndAreaRequest,
  ApplicationList,
  SaveDeviceGroupRequest,
  DescribeGroupInfo,
  AlarmInfo,
  DeviceDataInfo,
  BuildingProfileRes,
  DescribeAlarmTypeListResponse,
  DescribeDeviceStatusStatRequest,
  ProductSet,
  Action,
  DescribeTenantBuildingCountAndAreaRequest,
  AddAlarmProcessRecordRequest,
  DescribeInterfaceListResponse,
  MessageProfile,
  ModifyDeviceTagInfo,
  ModifyDeviceNameResponse,
  DescribeEdgeApplicationTokenResponse,
  DeviceLocation,
  SsoUserResult,
  SsoTeamUser,
  AddDeviceInfo,
  EmptyRes,
  ApiContent,
  DescribeWorkspaceListResponse,
  SpaceDeviceRelationRes,
  ProductInfo,
  ApiInfo,
  DescribeModelListResponse,
  DescribeRuleDetailRequest,
  BatchCreateDeviceResponse,
  ElementPropertyRes,
  CreateApplicationTokenResponse,
  DescribeTenantUserListRequest,
  BatchReportAppMessageResponse,
  DescribeDeviceStatusListResponse,
  ModifyDeviceNameRequest,
  DeleteDeviceGroupResponse,
  DescribeAlarmStatusListRequest,
  DescribeFileDownloadURLResponse,
  DescribeRuleDetailResponse,
  ReportMsgRes,
  DescribeDeviceGroupListRes,
  DescribeSpaceInfoByDeviceIdResponse,
  DescribeApplicationListRequest,
  ElementProfileTreeNode,
  WorkspaceInfo,
  DescribeSceneListRequest,
  DescribeDeviceListRequest,
  DescribeSpaceRelationByDeviceIdRequest,
  AlarmTypeDetailInfo,
  ChangeAlarmStatusResponse,
  DescribeBuildingModelResponse,
  DescribeDeviceGroupListResponse,
  DescribeElementProfilePageRequest,
  DescribePropertyListResponse,
  DescribeSpaceDeviceRelationListRequest,
  FileUploadURL,
  DescribeApplicationListResponse,
  ElementProperty,
  BuildingListRes,
  DeviceSpaceInfo,
  DescribeFileDownloadURLRequest,
  DeviceStatusStatRes,
  HandlerPersonInfo,
  Event,
  StopVideoStreamingRequest,
  SpaceDataStats,
  DescribeSpaceTypeListRequest,
  SpaceInfo,
  DescribeModelListRequest,
  VideoCloudRecordRes,
  SsoDepartmentsResult,
  VideoRecordStreamRes,
  ControlDeviceRes,
  WorkspaceInfoList,
  BuildingModelRes,
  DescribeBuildingListResponse,
  BatchDeleteDeviceResponse,
  SpaceRelationRes,
  SsoTeamUserResult,
  DescribeWorkspaceUserListResponse,
  DescribePropertyListRequest,
  DescribeEventListRes,
  DescribeProductListRequest,
  ApplicationLogo,
  DescribeLinkRuleListRes,
  CreateDeviceFailed,
  ElementTranslate,
  ControlCameraPTZResponse,
  DescribeWorkspaceListRequest,
  ModifyDeviceFieldResponse,
  ControlDeviceRequest,
  DescribeDeviceTypeListResponse,
  AlarmStatusData,
  RecordInfo,
  DescribeVideoRecordStreamResponse,
  CreateDeviceSucceeded,
  SceneInfo,
  RuleDetailRes,
  DescribeAlarmLevelListRequest,
  BatchReportAppMessageRequest,
  DescribeDeviceStatusStatResponse,
  DeviceShadowRes,
  DescribeAlarmTypeListRes,
  DescribeBuildingModelRequest,
  SsoUser,
  AdministrativeDetail,
  BuildingModel,
  SpaceDeviceRelation,
  ControlCameraPTZRequest,
  AdministrationData,
  DescribeSpaceDeviceIdListResponse,
  DescribeElementProfileTreeResponse,
  ModifyDeviceFieldInfo,
  DescribeTenantDepartmentListRequest,
  StopVideoStreamingResponse,
  BatchReportAppMessageRes,
  DescribeBuildingProfileRequest,
  DescribeDeviceShadowListResponse,
  SpaceDataTotalStatsRes,
  DescribeCityWorkspaceListRes,
  DeviceTypeSet,
  DescribeBuildingListRequest,
  ModifyDeviceGroupInfo,
  StatLevel,
  DescribeWorkspaceUserListRequest,
  ControlDeviceSet,
  BatchCreateDeviceRes,
  DescribeVideoCloudRecordResponse,
  SaveDeviceGroupRes,
  DescribeDeviceListRes,
  DescribeSpaceDeviceRelationListResponse,
  UpdateWorkspaceParkAttributesRequest,
  ModifyDeviceTagRequest,
  ModifyDeviceGroupResponse,
  DescribeLinkRuleListResponse,
  DescribeSpaceTypeListResponse,
  BuildingProfile,
  ApplicationTokenInfo,
  DescribeAlarmLevelListResponse,
  AlarmLevelInfo,
  HandleRecordInfo,
  ElementProfileTreeRes,
  DeviceTagRes,
  BatchDeleteDeviceRequest,
  DescribeDeviceGroupListRequest,
  ActionDetail,
  DescribeAdministrationByTagRes,
  DescribeCityWorkspaceListRequest,
  UpdateWorkspaceParkAttributesResponse,
  DeleteDeviceGroupRequest,
  DescribeCityWorkspaceListResponse,
  BatchCreateDeviceRequest,
  BatchKillAlarmRequest,
  DescribeActionListRes,
  LinkRuleInfo,
  StatDeviceType,
  ModifyDeviceGroupRequest,
  DescribeElementProfileTreeRequest,
  DescribeLinkRuleListRequest,
  DescribeEventListResponse,
  DeviceTagInfo,
  DeviceType,
  DescribeDeviceTagListRequest,
  SpaceRelation,
  DescribeBuildingProfileResponse,
  FileInfo,
  ReportAppMessageRequest,
  SsoDepartment,
  ApplicationInfo,
  DescribeFileUploadURLRequest,
  DescribeDeviceStatusListRequest,
  DescribeDeviceTagListResponse,
  DescribeVideoCloudRecordRequest,
  ElementProfilePageRes,
  DescribeAdministrationByTagRequest,
  ReportImg,
  EventDetail,
  DeviceModifyInfo,
  ControlDeviceResponse,
  DescribeAlarmLevelListRes,
  DescribeAlarmListRes,
  CameraExtendInfoRes,
  CustomField,
  DescribeAlarmListResponse,
  DescribeSpaceRelationByDeviceIdResponse,
  AddAlarmProcessRecordResponse,
  DescribeActionListResponse,
  DescribeInterfaceListRequest,
  DeviceTypeOverview,
  DescribeProductListResponse,
  ReportAppMessage,
  DescribeVideoRecordStreamRequest,
  SceneListRes,
  ApiInfoList,
  DescribeAlarmStatusListResponse,
  CreateApplicationTokenRequest,
  DescribeFileUploadURLResponse,
  SaveDeviceGroupResponse,
  ElementProfile,
  DescribeTenantDepartmentListResponse,
  DescribeWorkSpaceBuildingCountAndAreaResponse,
  EventObj,
  CustomFieldInfo,
  AlarmTypeInfo,
  SpaceTypeListRes,
  ReportAppMessageResponse,
  DescribeAlarmListRequest,
  DescribeAdministrationByTagResponse,
  LinkRule,
  SpaceType,
  ActionObj,
  ModelInfo,
  DeviceStatusInfo,
  DeviceStatusRes,
  BatchKillAlarmResponse,
  DeviceShadowInfo,
  DeviceSpaceInfoRes,
  DescribeDeviceTypeListRequest,
  DescribeDeviceShadowListRequest,
  ProcessRecordInfo,
  DescribeSceneListResponse,
  DescribeDeviceListResponse,
  DescribeTenantBuildingCountAndAreaResponse,
  SpaceDataListStatsRes,
  RawInfo,
  FileDownloadURL,
  DescribeAlarmStatusListRes,
  ModifyDeviceTagResponse,
  DescribeVideoLiveStreamRequest,
  ModelSet,
  ChangeAlarmStatusRequest,
  DescribeAlarmTypeListRequest,
  DescribeCameraExtendInfoResponse,
  DescribeSpaceInfoByDeviceIdRequest,
  DescribeCameraExtendInfoRequest,
  ElementCoordinates,
  DescribeVideoLiveStreamResponse,
  DescribeTenantUserListResponse,
  SpaceDeviceIdListRes,
  DescribeEventListRequest,
  DescribeElementProfilePageResponse,
  DescribeSpaceDeviceIdListRequest,
  RelatedProduct,
  ModifyDeviceFieldRequest,
  DescribeActionListRequest,
  DescribeEdgeApplicationTokenRequest,
} from "./weilingwith_models"

/**
 * weilingwith client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("weilingwith.tencentcloudapi.com", "2023-04-27", clientConfig)
  }

  /**
   * 云录像接口
   */
  async DescribeVideoCloudRecord(
    req: DescribeVideoCloudRecordRequest,
    cb?: (error: string, rep: DescribeVideoCloudRecordResponse) => void
  ): Promise<DescribeVideoCloudRecordResponse> {
    return this.request("DescribeVideoCloudRecord", req, cb)
  }

  /**
   * 查询建筑信息
   */
  async DescribeBuildingProfile(
    req: DescribeBuildingProfileRequest,
    cb?: (error: string, rep: DescribeBuildingProfileResponse) => void
  ): Promise<DescribeBuildingProfileResponse> {
    return this.request("DescribeBuildingProfile", req, cb)
  }

  /**
   * 变更告警状态
   */
  async ChangeAlarmStatus(
    req: ChangeAlarmStatusRequest,
    cb?: (error: string, rep: ChangeAlarmStatusResponse) => void
  ): Promise<ChangeAlarmStatusResponse> {
    return this.request("ChangeAlarmStatus", req, cb)
  }

  /**
   * 联动规则列表查询
   */
  async DescribeLinkRuleList(
    req: DescribeLinkRuleListRequest,
    cb?: (error: string, rep: DescribeLinkRuleListResponse) => void
  ): Promise<DescribeLinkRuleListResponse> {
    return this.request("DescribeLinkRuleList", req, cb)
  }

  /**
   * 查询构件树
   */
  async DescribeElementProfileTree(
    req: DescribeElementProfileTreeRequest,
    cb?: (error: string, rep: DescribeElementProfileTreeResponse) => void
  ): Promise<DescribeElementProfileTreeResponse> {
    return this.request("DescribeElementProfileTree", req, cb)
  }

  /**
   * 用来查询系统中的告警状态列表
   */
  async DescribeAlarmStatusList(
    req: DescribeAlarmStatusListRequest,
    cb?: (error: string, rep: DescribeAlarmStatusListResponse) => void
  ): Promise<DescribeAlarmStatusListResponse> {
    return this.request("DescribeAlarmStatusList", req, cb)
  }

  /**
   * 设备状态统计
   */
  async DescribeDeviceStatusStat(
    req: DescribeDeviceStatusStatRequest,
    cb?: (error: string, rep: DescribeDeviceStatusStatResponse) => void
  ): Promise<DescribeDeviceStatusStatResponse> {
    return this.request("DescribeDeviceStatusStat", req, cb)
  }

  /**
   * 查询指定空间设备编号列表
   */
  async DescribeSpaceDeviceIdList(
    req: DescribeSpaceDeviceIdListRequest,
    cb?: (error: string, rep: DescribeSpaceDeviceIdListResponse) => void
  ): Promise<DescribeSpaceDeviceIdListResponse> {
    return this.request("DescribeSpaceDeviceIdList", req, cb)
  }

  /**
   * 实时流接口
   */
  async DescribeVideoLiveStream(
    req: DescribeVideoLiveStreamRequest,
    cb?: (error: string, rep: DescribeVideoLiveStreamResponse) => void
  ): Promise<DescribeVideoLiveStreamResponse> {
    return this.request("DescribeVideoLiveStream", req, cb)
  }

  /**
   * 查询租户组织部门列表
   */
  async DescribeTenantDepartmentList(
    req: DescribeTenantDepartmentListRequest,
    cb?: (error: string, rep: DescribeTenantDepartmentListResponse) => void
  ): Promise<DescribeTenantDepartmentListResponse> {
    return this.request("DescribeTenantDepartmentList", req, cb)
  }

  /**
   * 上报应用消息
   */
  async ReportAppMessage(
    req: ReportAppMessageRequest,
    cb?: (error: string, rep: ReportAppMessageResponse) => void
  ): Promise<ReportAppMessageResponse> {
    return this.request("ReportAppMessage", req, cb)
  }

  /**
   * 查询租户楼栋数量和楼栋建筑面积
   */
  async DescribeTenantBuildingCountAndArea(
    req: DescribeTenantBuildingCountAndAreaRequest,
    cb?: (error: string, rep: DescribeTenantBuildingCountAndAreaResponse) => void
  ): Promise<DescribeTenantBuildingCountAndAreaResponse> {
    return this.request("DescribeTenantBuildingCountAndArea", req, cb)
  }

  /**
   * 查询项目空间楼栋数量与建筑面积
   */
  async DescribeWorkSpaceBuildingCountAndArea(
    req: DescribeWorkSpaceBuildingCountAndAreaRequest,
    cb?: (error: string, rep: DescribeWorkSpaceBuildingCountAndAreaResponse) => void
  ): Promise<DescribeWorkSpaceBuildingCountAndAreaResponse> {
    return this.request("DescribeWorkSpaceBuildingCountAndArea", req, cb)
  }

  /**
   * 获取设备影子数据
   */
  async DescribeDeviceShadowList(
    req: DescribeDeviceShadowListRequest,
    cb?: (error: string, rep: DescribeDeviceShadowListResponse) => void
  ): Promise<DescribeDeviceShadowListResponse> {
    return this.request("DescribeDeviceShadowList", req, cb)
  }

  /**
   * 标签列表查询
   */
  async DescribeDeviceTagList(
    req: DescribeDeviceTagListRequest,
    cb?: (error: string, rep: DescribeDeviceTagListResponse) => void
  ): Promise<DescribeDeviceTagListResponse> {
    return this.request("DescribeDeviceTagList", req, cb)
  }

  /**
   * 设备分组列表
   */
  async DescribeDeviceGroupList(
    req: DescribeDeviceGroupListRequest,
    cb?: (error: string, rep: DescribeDeviceGroupListResponse) => void
  ): Promise<DescribeDeviceGroupListResponse> {
    return this.request("DescribeDeviceGroupList", req, cb)
  }

  /**
   * 告警类型获取
   */
  async DescribeAlarmTypeList(
    req: DescribeAlarmTypeListRequest,
    cb?: (error: string, rep: DescribeAlarmTypeListResponse) => void
  ): Promise<DescribeAlarmTypeListResponse> {
    return this.request("DescribeAlarmTypeList", req, cb)
  }

  /**
   * 查询空间分类
   */
  async DescribeSpaceTypeList(
    req: DescribeSpaceTypeListRequest,
    cb?: (error: string, rep: DescribeSpaceTypeListResponse) => void
  ): Promise<DescribeSpaceTypeListResponse> {
    return this.request("DescribeSpaceTypeList", req, cb)
  }

  /**
   * 批量修改设备组
   */
  async ModifyDeviceGroup(
    req: ModifyDeviceGroupRequest,
    cb?: (error: string, rep: ModifyDeviceGroupResponse) => void
  ): Promise<ModifyDeviceGroupResponse> {
    return this.request("ModifyDeviceGroup", req, cb)
  }

  /**
   * 拉取设备的设备类型列表
   */
  async DescribeDeviceTypeList(
    req: DescribeDeviceTypeListRequest,
    cb?: (error: string, rep: DescribeDeviceTypeListResponse) => void
  ): Promise<DescribeDeviceTypeListResponse> {
    return this.request("DescribeDeviceTypeList", req, cb)
  }

  /**
   * 查询设备绑定的空间信息
   */
  async DescribeSpaceInfoByDeviceId(
    req: DescribeSpaceInfoByDeviceIdRequest,
    cb?: (error: string, rep: DescribeSpaceInfoByDeviceIdResponse) => void
  ): Promise<DescribeSpaceInfoByDeviceIdResponse> {
    return this.request("DescribeSpaceInfoByDeviceId", req, cb)
  }

  /**
   * 获取租户下的空间列表
   */
  async DescribeWorkspaceList(
    req: DescribeWorkspaceListRequest,
    cb?: (error: string, rep: DescribeWorkspaceListResponse) => void
  ): Promise<DescribeWorkspaceListResponse> {
    return this.request("DescribeWorkspaceList", req, cb)
  }

  /**
   * 联动规则详情查询
   */
  async DescribeRuleDetail(
    req: DescribeRuleDetailRequest,
    cb?: (error: string, rep: DescribeRuleDetailResponse) => void
  ): Promise<DescribeRuleDetailResponse> {
    return this.request("DescribeRuleDetail", req, cb)
  }

  /**
   * 修改工作空间园区属性
   */
  async UpdateWorkspaceParkAttributes(
    req: UpdateWorkspaceParkAttributesRequest,
    cb?: (error: string, rep: UpdateWorkspaceParkAttributesResponse) => void
  ): Promise<UpdateWorkspaceParkAttributesResponse> {
    return this.request("UpdateWorkspaceParkAttributes", req, cb)
  }

  /**
   * 断流接口
   */
  async StopVideoStreaming(
    req: StopVideoStreamingRequest,
    cb?: (error: string, rep: StopVideoStreamingResponse) => void
  ): Promise<StopVideoStreamingResponse> {
    return this.request("StopVideoStreaming", req, cb)
  }

  /**
   * 模型列表查询/单个查询（产品模型/标准模型）
   */
  async DescribeModelList(
    req: DescribeModelListRequest,
    cb?: (error: string, rep: DescribeModelListResponse) => void
  ): Promise<DescribeModelListResponse> {
    return this.request("DescribeModelList", req, cb)
  }

  /**
   * 查询构件属性（详情）
   */
  async DescribePropertyList(
    req: DescribePropertyListRequest,
    cb?: (error: string, rep: DescribePropertyListResponse) => void
  ): Promise<DescribePropertyListResponse> {
    return this.request("DescribePropertyList", req, cb)
  }

  /**
   * 产品列表查询
   */
  async DescribeProductList(
    req: DescribeProductListRequest,
    cb?: (error: string, rep: DescribeProductListResponse) => void
  ): Promise<DescribeProductListResponse> {
    return this.request("DescribeProductList", req, cb)
  }

  /**
   * 批量删除设备
   */
  async BatchDeleteDevice(
    req: BatchDeleteDeviceRequest,
    cb?: (error: string, rep: BatchDeleteDeviceResponse) => void
  ): Promise<BatchDeleteDeviceResponse> {
    return this.request("BatchDeleteDevice", req, cb)
  }

  /**
   * 动作列表查询
   */
  async DescribeActionList(
    req: DescribeActionListRequest,
    cb?: (error: string, rep: DescribeActionListResponse) => void
  ): Promise<DescribeActionListResponse> {
    return this.request("DescribeActionList", req, cb)
  }

  /**
   * 查询场景列表
   */
  async DescribeSceneList(
    req: DescribeSceneListRequest,
    cb?: (error: string, rep: DescribeSceneListResponse) => void
  ): Promise<DescribeSceneListResponse> {
    return this.request("DescribeSceneList", req, cb)
  }

  /**
   * 查询设备绑定的空间层级关系
   */
  async DescribeSpaceRelationByDeviceId(
    req: DescribeSpaceRelationByDeviceIdRequest,
    cb?: (error: string, rep: DescribeSpaceRelationByDeviceIdResponse) => void
  ): Promise<DescribeSpaceRelationByDeviceIdResponse> {
    return this.request("DescribeSpaceRelationByDeviceId", req, cb)
  }

  /**
   * 设备列表查询/单个查询（支持通过筛选条件查询，设备类型、标签、PID、空间）
   */
  async DescribeDeviceList(
    req: DescribeDeviceListRequest,
    cb?: (error: string, rep: DescribeDeviceListResponse) => void
  ): Promise<DescribeDeviceListResponse> {
    return this.request("DescribeDeviceList", req, cb)
  }

  /**
   * 批量消警
   */
  async BatchKillAlarm(
    req: BatchKillAlarmRequest,
    cb?: (error: string, rep: BatchKillAlarmResponse) => void
  ): Promise<BatchKillAlarmResponse> {
    return this.request("BatchKillAlarm", req, cb)
  }

  /**
   * 查询项目空间人员列表
   */
  async DescribeWorkspaceUserList(
    req: DescribeWorkspaceUserListRequest,
    cb?: (error: string, rep: DescribeWorkspaceUserListResponse) => void
  ): Promise<DescribeWorkspaceUserListResponse> {
    return this.request("DescribeWorkspaceUserList", req, cb)
  }

  /**
   * 设备控制（单个、批量控制）
   */
  async ControlDevice(
    req: ControlDeviceRequest,
    cb?: (error: string, rep: ControlDeviceResponse) => void
  ): Promise<ControlDeviceResponse> {
    return this.request("ControlDevice", req, cb)
  }

  /**
   * 批量上报应用消息
   */
  async BatchReportAppMessage(
    req: BatchReportAppMessageRequest,
    cb?: (error: string, rep: BatchReportAppMessageResponse) => void
  ): Promise<BatchReportAppMessageResponse> {
    return this.request("BatchReportAppMessage", req, cb)
  }

  /**
   * 查询分页构件信息
   */
  async DescribeElementProfilePage(
    req: DescribeElementProfilePageRequest,
    cb?: (error: string, rep: DescribeElementProfilePageResponse) => void
  ): Promise<DescribeElementProfilePageResponse> {
    return this.request("DescribeElementProfilePage", req, cb)
  }

  /**
   * 批量修改设备名字
   */
  async ModifyDeviceName(
    req: ModifyDeviceNameRequest,
    cb?: (error: string, rep: ModifyDeviceNameResponse) => void
  ): Promise<ModifyDeviceNameResponse> {
    return this.request("ModifyDeviceName", req, cb)
  }

  /**
   * 事件列表查询
   */
  async DescribeEventList(
    req: DescribeEventListRequest,
    cb?: (error: string, rep: DescribeEventListResponse) => void
  ): Promise<DescribeEventListResponse> {
    return this.request("DescribeEventList", req, cb)
  }

  /**
   * 根据标签获取行政区划列表
   */
  async DescribeAdministrationByTag(
    req: DescribeAdministrationByTagRequest,
    cb?: (error: string, rep: DescribeAdministrationByTagResponse) => void
  ): Promise<DescribeAdministrationByTagResponse> {
    return this.request("DescribeAdministrationByTag", req, cb)
  }

  /**
   * 单个/批量新增设备
   */
  async BatchCreateDevice(
    req: BatchCreateDeviceRequest,
    cb?: (error: string, rep: BatchCreateDeviceResponse) => void
  ): Promise<BatchCreateDeviceResponse> {
    return this.request("BatchCreateDevice", req, cb)
  }

  /**
   * 批量修改设备标签
   */
  async ModifyDeviceTag(
    req: ModifyDeviceTagRequest,
    cb?: (error: string, rep: ModifyDeviceTagResponse) => void
  ): Promise<ModifyDeviceTagResponse> {
    return this.request("ModifyDeviceTag", req, cb)
  }

  /**
   * 获取视频扩展信息
   */
  async DescribeCameraExtendInfo(
    req: DescribeCameraExtendInfoRequest,
    cb?: (error: string, rep: DescribeCameraExtendInfoResponse) => void
  ): Promise<DescribeCameraExtendInfoResponse> {
    return this.request("DescribeCameraExtendInfo", req, cb)
  }

  /**
   * 获取文件下载URL
   */
  async DescribeFileDownloadURL(
    req: DescribeFileDownloadURLRequest,
    cb?: (error: string, rep: DescribeFileDownloadURLResponse) => void
  ): Promise<DescribeFileDownloadURLResponse> {
    return this.request("DescribeFileDownloadURL", req, cb)
  }

  /**
   * 通过城市id查询工作空间列表
   */
  async DescribeCityWorkspaceList(
    req: DescribeCityWorkspaceListRequest,
    cb?: (error: string, rep: DescribeCityWorkspaceListResponse) => void
  ): Promise<DescribeCityWorkspaceListResponse> {
    return this.request("DescribeCityWorkspaceList", req, cb)
  }

  /**
   * 查询边缘应用凭证
   */
  async DescribeEdgeApplicationToken(
    req: DescribeEdgeApplicationTokenRequest,
    cb?: (error: string, rep: DescribeEdgeApplicationTokenResponse) => void
  ): Promise<DescribeEdgeApplicationTokenResponse> {
    return this.request("DescribeEdgeApplicationToken", req, cb)
  }

  /**
   * 查询建筑三维模型
   */
  async DescribeBuildingModel(
    req: DescribeBuildingModelRequest,
    cb?: (error: string, rep: DescribeBuildingModelResponse) => void
  ): Promise<DescribeBuildingModelResponse> {
    return this.request("DescribeBuildingModel", req, cb)
  }

  /**
   * 删除设备分组
   */
  async DeleteDeviceGroup(
    req: DeleteDeviceGroupRequest,
    cb?: (error: string, rep: DeleteDeviceGroupResponse) => void
  ): Promise<DeleteDeviceGroupResponse> {
    return this.request("DeleteDeviceGroup", req, cb)
  }

  /**
   * 查询指定空间下设备与构件绑定关系列表
   */
  async DescribeSpaceDeviceRelationList(
    req: DescribeSpaceDeviceRelationListRequest,
    cb?: (error: string, rep: DescribeSpaceDeviceRelationListResponse) => void
  ): Promise<DescribeSpaceDeviceRelationListResponse> {
    return this.request("DescribeSpaceDeviceRelationList", req, cb)
  }

  /**
   * 查询建筑列表
   */
  async DescribeBuildingList(
    req: DescribeBuildingListRequest,
    cb?: (error: string, rep: DescribeBuildingListResponse) => void
  ): Promise<DescribeBuildingListResponse> {
    return this.request("DescribeBuildingList", req, cb)
  }

  /**
   * 设备分组新增/修改
   */
  async SaveDeviceGroup(
    req: SaveDeviceGroupRequest,
    cb?: (error: string, rep: SaveDeviceGroupResponse) => void
  ): Promise<SaveDeviceGroupResponse> {
    return this.request("SaveDeviceGroup", req, cb)
  }

  /**
   * 云台控制
   */
  async ControlCameraPTZ(
    req: ControlCameraPTZRequest,
    cb?: (error: string, rep: ControlCameraPTZResponse) => void
  ): Promise<ControlCameraPTZResponse> {
    return this.request("ControlCameraPTZ", req, cb)
  }

  /**
   * 查询接口列表
   */
  async DescribeInterfaceList(
    req: DescribeInterfaceListRequest,
    cb?: (error: string, rep: DescribeInterfaceListResponse) => void
  ): Promise<DescribeInterfaceListResponse> {
    return this.request("DescribeInterfaceList", req, cb)
  }

  /**
   * 历史流接口
   */
  async DescribeVideoRecordStream(
    req: DescribeVideoRecordStreamRequest,
    cb?: (error: string, rep: DescribeVideoRecordStreamResponse) => void
  ): Promise<DescribeVideoRecordStreamResponse> {
    return this.request("DescribeVideoRecordStream", req, cb)
  }

  /**
   * 告警列表查询
   */
  async DescribeAlarmList(
    req: DescribeAlarmListRequest,
    cb?: (error: string, rep: DescribeAlarmListResponse) => void
  ): Promise<DescribeAlarmListResponse> {
    return this.request("DescribeAlarmList", req, cb)
  }

  /**
   * 查询指定空间关联的应用列表
   */
  async DescribeApplicationList(
    req: DescribeApplicationListRequest,
    cb?: (error: string, rep: DescribeApplicationListResponse) => void
  ): Promise<DescribeApplicationListResponse> {
    return this.request("DescribeApplicationList", req, cb)
  }

  /**
   * 添加告警处理记录
   */
  async AddAlarmProcessRecord(
    req: AddAlarmProcessRecordRequest,
    cb?: (error: string, rep: AddAlarmProcessRecordResponse) => void
  ): Promise<AddAlarmProcessRecordResponse> {
    return this.request("AddAlarmProcessRecord", req, cb)
  }

  /**
   * 文件上传接口
   */
  async DescribeFileUploadURL(
    req: DescribeFileUploadURLRequest,
    cb?: (error: string, rep: DescribeFileUploadURLResponse) => void
  ): Promise<DescribeFileUploadURLResponse> {
    return this.request("DescribeFileUploadURL", req, cb)
  }

  /**
   * 查询租户人员列表
   */
  async DescribeTenantUserList(
    req: DescribeTenantUserListRequest,
    cb?: (error: string, rep: DescribeTenantUserListResponse) => void
  ): Promise<DescribeTenantUserListResponse> {
    return this.request("DescribeTenantUserList", req, cb)
  }

  /**
   * 告警级别枚举获取
   */
  async DescribeAlarmLevelList(
    req: DescribeAlarmLevelListRequest,
    cb?: (error: string, rep: DescribeAlarmLevelListResponse) => void
  ): Promise<DescribeAlarmLevelListResponse> {
    return this.request("DescribeAlarmLevelList", req, cb)
  }

  /**
   * 调用方应用，创建调用租户API的授权令牌。
   */
  async CreateApplicationToken(
    req: CreateApplicationTokenRequest,
    cb?: (error: string, rep: CreateApplicationTokenResponse) => void
  ): Promise<CreateApplicationTokenResponse> {
    return this.request("CreateApplicationToken", req, cb)
  }

  /**
   * 设备状态获取
   */
  async DescribeDeviceStatusList(
    req: DescribeDeviceStatusListRequest,
    cb?: (error: string, rep: DescribeDeviceStatusListResponse) => void
  ): Promise<DescribeDeviceStatusListResponse> {
    return this.request("DescribeDeviceStatusList", req, cb)
  }

  /**
   * 批量修改设备自定义字段值
   */
  async ModifyDeviceField(
    req: ModifyDeviceFieldRequest,
    cb?: (error: string, rep: ModifyDeviceFieldResponse) => void
  ): Promise<ModifyDeviceFieldResponse> {
    return this.request("ModifyDeviceField", req, cb)
  }
}
