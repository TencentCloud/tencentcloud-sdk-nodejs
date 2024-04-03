"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * weilingwith client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("weilingwith.tencentcloudapi.com", "2023-04-27", clientConfig);
    }
    /**
     * 云录像接口
     */
    async DescribeVideoCloudRecord(req, cb) {
        return this.request("DescribeVideoCloudRecord", req, cb);
    }
    /**
     * 查询建筑信息
     */
    async DescribeBuildingProfile(req, cb) {
        return this.request("DescribeBuildingProfile", req, cb);
    }
    /**
     * 变更告警状态
     */
    async ChangeAlarmStatus(req, cb) {
        return this.request("ChangeAlarmStatus", req, cb);
    }
    /**
     * 联动规则列表查询
     */
    async DescribeLinkRuleList(req, cb) {
        return this.request("DescribeLinkRuleList", req, cb);
    }
    /**
     * 查询构件树
     */
    async DescribeElementProfileTree(req, cb) {
        return this.request("DescribeElementProfileTree", req, cb);
    }
    /**
     * 用来查询系统中的告警状态列表
     */
    async DescribeAlarmStatusList(req, cb) {
        return this.request("DescribeAlarmStatusList", req, cb);
    }
    /**
     * 设备状态统计
     */
    async DescribeDeviceStatusStat(req, cb) {
        return this.request("DescribeDeviceStatusStat", req, cb);
    }
    /**
     * 查询指定空间设备编号列表
     */
    async DescribeSpaceDeviceIdList(req, cb) {
        return this.request("DescribeSpaceDeviceIdList", req, cb);
    }
    /**
     * 实时流接口
     */
    async DescribeVideoLiveStream(req, cb) {
        return this.request("DescribeVideoLiveStream", req, cb);
    }
    /**
     * 查询租户组织部门列表
     */
    async DescribeTenantDepartmentList(req, cb) {
        return this.request("DescribeTenantDepartmentList", req, cb);
    }
    /**
     * 上报应用消息
     */
    async ReportAppMessage(req, cb) {
        return this.request("ReportAppMessage", req, cb);
    }
    /**
     * 查询租户楼栋数量和楼栋建筑面积
     */
    async DescribeTenantBuildingCountAndArea(req, cb) {
        return this.request("DescribeTenantBuildingCountAndArea", req, cb);
    }
    /**
     * 查询项目空间楼栋数量与建筑面积
     */
    async DescribeWorkSpaceBuildingCountAndArea(req, cb) {
        return this.request("DescribeWorkSpaceBuildingCountAndArea", req, cb);
    }
    /**
     * 获取设备影子数据
     */
    async DescribeDeviceShadowList(req, cb) {
        return this.request("DescribeDeviceShadowList", req, cb);
    }
    /**
     * 标签列表查询
     */
    async DescribeDeviceTagList(req, cb) {
        return this.request("DescribeDeviceTagList", req, cb);
    }
    /**
     * 设备分组列表
     */
    async DescribeDeviceGroupList(req, cb) {
        return this.request("DescribeDeviceGroupList", req, cb);
    }
    /**
     * 告警类型获取
     */
    async DescribeAlarmTypeList(req, cb) {
        return this.request("DescribeAlarmTypeList", req, cb);
    }
    /**
     * 查询空间分类
     */
    async DescribeSpaceTypeList(req, cb) {
        return this.request("DescribeSpaceTypeList", req, cb);
    }
    /**
     * 批量修改设备组
     */
    async ModifyDeviceGroup(req, cb) {
        return this.request("ModifyDeviceGroup", req, cb);
    }
    /**
     * 拉取设备的设备类型列表
     */
    async DescribeDeviceTypeList(req, cb) {
        return this.request("DescribeDeviceTypeList", req, cb);
    }
    /**
     * 查询设备绑定的空间信息
     */
    async DescribeSpaceInfoByDeviceId(req, cb) {
        return this.request("DescribeSpaceInfoByDeviceId", req, cb);
    }
    /**
     * 获取租户下的空间列表
     */
    async DescribeWorkspaceList(req, cb) {
        return this.request("DescribeWorkspaceList", req, cb);
    }
    /**
     * 联动规则详情查询
     */
    async DescribeRuleDetail(req, cb) {
        return this.request("DescribeRuleDetail", req, cb);
    }
    /**
     * 修改工作空间园区属性
     */
    async UpdateWorkspaceParkAttributes(req, cb) {
        return this.request("UpdateWorkspaceParkAttributes", req, cb);
    }
    /**
     * 断流接口
     */
    async StopVideoStreaming(req, cb) {
        return this.request("StopVideoStreaming", req, cb);
    }
    /**
     * 模型列表查询/单个查询（产品模型/标准模型）
     */
    async DescribeModelList(req, cb) {
        return this.request("DescribeModelList", req, cb);
    }
    /**
     * 查询构件属性（详情）
     */
    async DescribePropertyList(req, cb) {
        return this.request("DescribePropertyList", req, cb);
    }
    /**
     * 产品列表查询
     */
    async DescribeProductList(req, cb) {
        return this.request("DescribeProductList", req, cb);
    }
    /**
     * 批量删除设备
     */
    async BatchDeleteDevice(req, cb) {
        return this.request("BatchDeleteDevice", req, cb);
    }
    /**
     * 动作列表查询
     */
    async DescribeActionList(req, cb) {
        return this.request("DescribeActionList", req, cb);
    }
    /**
     * 查询场景列表
     */
    async DescribeSceneList(req, cb) {
        return this.request("DescribeSceneList", req, cb);
    }
    /**
     * 查询设备绑定的空间层级关系
     */
    async DescribeSpaceRelationByDeviceId(req, cb) {
        return this.request("DescribeSpaceRelationByDeviceId", req, cb);
    }
    /**
     * 设备列表查询/单个查询（支持通过筛选条件查询，设备类型、标签、PID、空间）
     */
    async DescribeDeviceList(req, cb) {
        return this.request("DescribeDeviceList", req, cb);
    }
    /**
     * 批量消警
     */
    async BatchKillAlarm(req, cb) {
        return this.request("BatchKillAlarm", req, cb);
    }
    /**
     * 查询项目空间人员列表
     */
    async DescribeWorkspaceUserList(req, cb) {
        return this.request("DescribeWorkspaceUserList", req, cb);
    }
    /**
     * 设备控制（单个、批量控制）
     */
    async ControlDevice(req, cb) {
        return this.request("ControlDevice", req, cb);
    }
    /**
     * 批量上报应用消息
     */
    async BatchReportAppMessage(req, cb) {
        return this.request("BatchReportAppMessage", req, cb);
    }
    /**
     * 查询分页构件信息
     */
    async DescribeElementProfilePage(req, cb) {
        return this.request("DescribeElementProfilePage", req, cb);
    }
    /**
     * 批量修改设备名字
     */
    async ModifyDeviceName(req, cb) {
        return this.request("ModifyDeviceName", req, cb);
    }
    /**
     * 事件列表查询
     */
    async DescribeEventList(req, cb) {
        return this.request("DescribeEventList", req, cb);
    }
    /**
     * 根据标签获取行政区划列表
     */
    async DescribeAdministrationByTag(req, cb) {
        return this.request("DescribeAdministrationByTag", req, cb);
    }
    /**
     * 单个/批量新增设备
     */
    async BatchCreateDevice(req, cb) {
        return this.request("BatchCreateDevice", req, cb);
    }
    /**
     * 批量修改设备标签
     */
    async ModifyDeviceTag(req, cb) {
        return this.request("ModifyDeviceTag", req, cb);
    }
    /**
     * 获取视频扩展信息
     */
    async DescribeCameraExtendInfo(req, cb) {
        return this.request("DescribeCameraExtendInfo", req, cb);
    }
    /**
     * 获取文件下载URL
     */
    async DescribeFileDownloadURL(req, cb) {
        return this.request("DescribeFileDownloadURL", req, cb);
    }
    /**
     * 通过城市id查询工作空间列表
     */
    async DescribeCityWorkspaceList(req, cb) {
        return this.request("DescribeCityWorkspaceList", req, cb);
    }
    /**
     * 查询边缘应用凭证
     */
    async DescribeEdgeApplicationToken(req, cb) {
        return this.request("DescribeEdgeApplicationToken", req, cb);
    }
    /**
     * 查询建筑三维模型
     */
    async DescribeBuildingModel(req, cb) {
        return this.request("DescribeBuildingModel", req, cb);
    }
    /**
     * 删除设备分组
     */
    async DeleteDeviceGroup(req, cb) {
        return this.request("DeleteDeviceGroup", req, cb);
    }
    /**
     * 查询指定空间下设备与构件绑定关系列表
     */
    async DescribeSpaceDeviceRelationList(req, cb) {
        return this.request("DescribeSpaceDeviceRelationList", req, cb);
    }
    /**
     * 查询建筑列表
     */
    async DescribeBuildingList(req, cb) {
        return this.request("DescribeBuildingList", req, cb);
    }
    /**
     * 设备分组新增/修改
     */
    async SaveDeviceGroup(req, cb) {
        return this.request("SaveDeviceGroup", req, cb);
    }
    /**
     * 云台控制
     */
    async ControlCameraPTZ(req, cb) {
        return this.request("ControlCameraPTZ", req, cb);
    }
    /**
     * 查询接口列表
     */
    async DescribeInterfaceList(req, cb) {
        return this.request("DescribeInterfaceList", req, cb);
    }
    /**
     * 历史流接口
     */
    async DescribeVideoRecordStream(req, cb) {
        return this.request("DescribeVideoRecordStream", req, cb);
    }
    /**
     * 告警列表查询
     */
    async DescribeAlarmList(req, cb) {
        return this.request("DescribeAlarmList", req, cb);
    }
    /**
     * 查询指定空间关联的应用列表
     */
    async DescribeApplicationList(req, cb) {
        return this.request("DescribeApplicationList", req, cb);
    }
    /**
     * 添加告警处理记录
     */
    async AddAlarmProcessRecord(req, cb) {
        return this.request("AddAlarmProcessRecord", req, cb);
    }
    /**
     * 文件上传接口
     */
    async DescribeFileUploadURL(req, cb) {
        return this.request("DescribeFileUploadURL", req, cb);
    }
    /**
     * 查询租户人员列表
     */
    async DescribeTenantUserList(req, cb) {
        return this.request("DescribeTenantUserList", req, cb);
    }
    /**
     * 告警级别枚举获取
     */
    async DescribeAlarmLevelList(req, cb) {
        return this.request("DescribeAlarmLevelList", req, cb);
    }
    /**
     * 调用方应用，创建调用租户API的授权令牌。
     */
    async CreateApplicationToken(req, cb) {
        return this.request("CreateApplicationToken", req, cb);
    }
    /**
     * 设备状态获取
     */
    async DescribeDeviceStatusList(req, cb) {
        return this.request("DescribeDeviceStatusList", req, cb);
    }
    /**
     * 批量修改设备自定义字段值
     */
    async ModifyDeviceField(req, cb) {
        return this.request("ModifyDeviceField", req, cb);
    }
}
exports.Client = Client;
