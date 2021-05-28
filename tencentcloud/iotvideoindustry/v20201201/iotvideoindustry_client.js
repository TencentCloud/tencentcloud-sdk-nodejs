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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DeleteTimeTemplateResponse = models.DeleteTimeTemplateResponse;
const GetTimeTemplatesRequest = models.GetTimeTemplatesRequest;
const ServerConfiguration = models.ServerConfiguration;
const GetRecordPlanByDevRequest = models.GetRecordPlanByDevRequest;
const GetRecordDatesByDevResponse = models.GetRecordDatesByDevResponse;
const DescribeDeviceStreamsResponse = models.DescribeDeviceStreamsResponse;
const DescribeSIPServerRequest = models.DescribeSIPServerRequest;
const GetRecordPlanByIdRequest = models.GetRecordPlanByIdRequest;
const GetRecordPlansRequest = models.GetRecordPlansRequest;
const DeviceItem = models.DeviceItem;
const DeleteDeviceGroupResponse = models.DeleteDeviceGroupResponse;
const DeleteRecordPlanResponse = models.DeleteRecordPlanResponse;
const UpdateDeviceGroupResponse = models.UpdateDeviceGroupResponse;
const GetVideoListByConRequest = models.GetVideoListByConRequest;
const DevGroupInfo = models.DevGroupInfo;
const DescribeSubGroupsRequest = models.DescribeSubGroupsRequest;
const DeleteRecordPlanRequest = models.DeleteRecordPlanRequest;
const CreateDeviceGroupResponse = models.CreateDeviceGroupResponse;
const GetVideoListByConResponse = models.GetVideoListByConResponse;
const DescribeStatisticDetailsResponse = models.DescribeStatisticDetailsResponse;
const GroupDeviceItem = models.GroupDeviceItem;
const DescribeStatisticSummaryRequest = models.DescribeStatisticSummaryRequest;
const GetRecordPlanByIdResponse = models.GetRecordPlanByIdResponse;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const UpdateDevicePassWordRequest = models.UpdateDevicePassWordRequest;
const CreateTimeTemplateRequest = models.CreateTimeTemplateRequest;
const DescribeAllDeviceListRequest = models.DescribeAllDeviceListRequest;
const DescribeDevicePassWordRequest = models.DescribeDevicePassWordRequest;
const RecordTaskItem = models.RecordTaskItem;
const GetRecordPlanByDevResponse = models.GetRecordPlanByDevResponse;
const UpdateRecordPlanRequest = models.UpdateRecordPlanRequest;
const GroupInfo = models.GroupInfo;
const DescribeStatisticDetailsRequest = models.DescribeStatisticDetailsRequest;
const CreateRecordPlanRequest = models.CreateRecordPlanRequest;
const DescribeRecordStreamData = models.DescribeRecordStreamData;
const CreateDeviceGroupRequest = models.CreateDeviceGroupRequest;
const UpdateTimeTemplateRequest = models.UpdateTimeTemplateRequest;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeStatisticSummaryResponse = models.DescribeStatisticSummaryResponse;
const DescribeRecordStreamRequest = models.DescribeRecordStreamRequest;
const GetTimeTemplateByIdResponse = models.GetTimeTemplateByIdResponse;
const ControlDevicePTZResponse = models.ControlDevicePTZResponse;
const TimeTemplateSpec = models.TimeTemplateSpec;
const ControlDevicePTZRequest = models.ControlDevicePTZRequest;
const UpdateDeviceGroupRequest = models.UpdateDeviceGroupRequest;
const DescribeGroupDevicesRequest = models.DescribeGroupDevicesRequest;
const DescribeGroupByIdRequest = models.DescribeGroupByIdRequest;
const UpdateDevicePassWordResponse = models.UpdateDevicePassWordResponse;
const DescribeDeviceStreamsRequest = models.DescribeDeviceStreamsRequest;
const DescribeRecordStreamResponse = models.DescribeRecordStreamResponse;
const CreateRecordPlanResponse = models.CreateRecordPlanResponse;
const AllDeviceInfo = models.AllDeviceInfo;
const DeleteDeviceGroupRequest = models.DeleteDeviceGroupRequest;
const DescribeDeviceGroupResponse = models.DescribeDeviceGroupResponse;
const ModifyDeviceDataRequest = models.ModifyDeviceDataRequest;
const GetRecordDatesByDevRequest = models.GetRecordDatesByDevRequest;
const GetTimeTemplatesResponse = models.GetTimeTemplatesResponse;
const DescribeDevicePassWordResponse = models.DescribeDevicePassWordResponse;
const UpdateTimeTemplateResponse = models.UpdateTimeTemplateResponse;
const DescribeAllDeviceListResponse = models.DescribeAllDeviceListResponse;
const DescribeSubGroupsResponse = models.DescribeSubGroupsResponse;
const DescribeGroupsResponse = models.DescribeGroupsResponse;
const DescribeDeviceStreamsData = models.DescribeDeviceStreamsData;
const BindGroupDevicesRequest = models.BindGroupDevicesRequest;
const CreateTimeTemplateResponse = models.CreateTimeTemplateResponse;
const StatisticItem = models.StatisticItem;
const DescribeSIPServerResponse = models.DescribeSIPServerResponse;
const DescribeGroupByPathRequest = models.DescribeGroupByPathRequest;
const UpdateRecordPlanResponse = models.UpdateRecordPlanResponse;
const TimeTemplateItem = models.TimeTemplateItem;
const DescribeDeviceGroupRequest = models.DescribeDeviceGroupRequest;
const RecordPlanItem = models.RecordPlanItem;
const DescribeGroupsRequest = models.DescribeGroupsRequest;
const GetRecordPlansResponse = models.GetRecordPlansResponse;
const DescribeGroupByIdResponse = models.DescribeGroupByIdResponse;
const GetTimeTemplateByIdRequest = models.GetTimeTemplateByIdRequest;
const GroupItem = models.GroupItem;
const DeleteTimeTemplateRequest = models.DeleteTimeTemplateRequest;
const DescribeVideoListResponse = models.DescribeVideoListResponse;
const BindGroupDevicesResponse = models.BindGroupDevicesResponse;
const DescribeVideoListRequest = models.DescribeVideoListRequest;
const ModifyDeviceDataResponse = models.ModifyDeviceDataResponse;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DescribeGroupByPathResponse = models.DescribeGroupByPathResponse;
const DescribeGroupDevicesResponse = models.DescribeGroupDevicesResponse;


/**
 * iotvideoindustry client
 * @class
 */
class IotvideoindustryClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotvideoindustry.tencentcloudapi.com", "2020-12-01", credential, region, profile);
    }
    
    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
     * @param {UpdateRecordPlanRequest} req
     * @param {function(string, UpdateRecordPlanResponse):void} cb
     * @public
     */
    UpdateRecordPlan(req, cb) {
        let resp = new UpdateRecordPlanResponse();
        this.request("UpdateRecordPlan", req, resp, cb);
    }

    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     * @param {DescribeSubGroupsRequest} req
     * @param {function(string, DescribeSubGroupsResponse):void} cb
     * @public
     */
    DescribeSubGroups(req, cb) {
        let resp = new DescribeSubGroupsResponse();
        this.request("DescribeSubGroups", req, resp, cb);
    }

    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     * @param {UpdateDeviceGroupRequest} req
     * @param {function(string, UpdateDeviceGroupResponse):void} cb
     * @public
     */
    UpdateDeviceGroup(req, cb) {
        let resp = new UpdateDeviceGroupResponse();
        this.request("UpdateDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     * @param {CreateDeviceGroupRequest} req
     * @param {function(string, CreateDeviceGroupResponse):void} cb
     * @public
     */
    CreateDeviceGroup(req, cb) {
        let resp = new CreateDeviceGroupResponse();
        this.request("CreateDeviceGroup", req, resp, cb);
    }

    /**
     * 获取回放视频流(NVR录制用)
RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     * @param {DescribeRecordStreamRequest} req
     * @param {function(string, DescribeRecordStreamResponse):void} cb
     * @public
     */
    DescribeRecordStream(req, cb) {
        let resp = new DescribeRecordStreamResponse();
        this.request("DescribeRecordStream", req, resp, cb);
    }

    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     * @param {DescribeStatisticSummaryRequest} req
     * @param {function(string, DescribeStatisticSummaryResponse):void} cb
     * @public
     */
    DescribeStatisticSummary(req, cb) {
        let resp = new DescribeStatisticSummaryResponse();
        this.request("DescribeStatisticSummary", req, resp, cb);
    }

    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
     * @param {GetVideoListByConRequest} req
     * @param {function(string, GetVideoListByConResponse):void} cb
     * @public
     */
    GetVideoListByCon(req, cb) {
        let resp = new GetVideoListByConResponse();
        this.request("GetVideoListByCon", req, resp, cb);
    }

    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     * @param {UpdateTimeTemplateRequest} req
     * @param {function(string, UpdateTimeTemplateResponse):void} cb
     * @public
     */
    UpdateTimeTemplate(req, cb) {
        let resp = new UpdateTimeTemplateResponse();
        this.request("UpdateTimeTemplate", req, resp, cb);
    }

    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     * @param {UpdateDevicePassWordRequest} req
     * @param {function(string, UpdateDevicePassWordResponse):void} cb
     * @public
     */
    UpdateDevicePassWord(req, cb) {
        let resp = new UpdateDevicePassWordResponse();
        this.request("UpdateDevicePassWord", req, resp, cb);
    }

    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     * @param {GetTimeTemplateByIdRequest} req
     * @param {function(string, GetTimeTemplateByIdResponse):void} cb
     * @public
     */
    GetTimeTemplateById(req, cb) {
        let resp = new GetTimeTemplateByIdResponse();
        this.request("GetTimeTemplateById", req, resp, cb);
    }

    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     * @param {DescribeDevicePassWordRequest} req
     * @param {function(string, DescribeDevicePassWordResponse):void} cb
     * @public
     */
    DescribeDevicePassWord(req, cb) {
        let resp = new DescribeDevicePassWordResponse();
        this.request("DescribeDevicePassWord", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     * @param {DescribeGroupDevicesRequest} req
     * @param {function(string, DescribeGroupDevicesResponse):void} cb
     * @public
     */
    DescribeGroupDevices(req, cb) {
        let resp = new DescribeGroupDevicesResponse();
        this.request("DescribeGroupDevices", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
     * @param {GetRecordPlansRequest} req
     * @param {function(string, GetRecordPlansResponse):void} cb
     * @public
     */
    GetRecordPlans(req, cb) {
        let resp = new GetRecordPlansResponse();
        this.request("GetRecordPlans", req, resp, cb);
    }

    /**
     * 本接口(DeleteDevice)用于删除设备。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 本接口(ModifyDeviceData)用于编辑设备信息。
     * @param {ModifyDeviceDataRequest} req
     * @param {function(string, ModifyDeviceDataResponse):void} cb
     * @public
     */
    ModifyDeviceData(req, cb) {
        let resp = new ModifyDeviceDataResponse();
        this.request("ModifyDeviceData", req, resp, cb);
    }

    /**
     * 根据分组路径查询分组
     * @param {DescribeGroupByPathRequest} req
     * @param {function(string, DescribeGroupByPathResponse):void} cb
     * @public
     */
    DescribeGroupByPath(req, cb) {
        let resp = new DescribeGroupByPathResponse();
        this.request("DescribeGroupByPath", req, resp, cb);
    }

    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
     * @param {GetRecordDatesByDevRequest} req
     * @param {function(string, GetRecordDatesByDevResponse):void} cb
     * @public
     */
    GetRecordDatesByDev(req, cb) {
        let resp = new GetRecordDatesByDevResponse();
        this.request("GetRecordDatesByDev", req, resp, cb);
    }

    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     * @param {GetTimeTemplatesRequest} req
     * @param {function(string, GetTimeTemplatesResponse):void} cb
     * @public
     */
    GetTimeTemplates(req, cb) {
        let resp = new GetTimeTemplatesResponse();
        this.request("GetTimeTemplates", req, resp, cb);
    }

    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
     * @param {DescribeDeviceStreamsRequest} req
     * @param {function(string, DescribeDeviceStreamsResponse):void} cb
     * @public
     */
    DescribeDeviceStreams(req, cb) {
        let resp = new DescribeDeviceStreamsResponse();
        this.request("DescribeDeviceStreams", req, resp, cb);
    }

    /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     * @param {DeleteRecordPlanRequest} req
     * @param {function(string, DeleteRecordPlanResponse):void} cb
     * @public
     */
    DeleteRecordPlan(req, cb) {
        let resp = new DeleteRecordPlanResponse();
        this.request("DeleteRecordPlan", req, resp, cb);
    }

    /**
     * 本接口(CreateDevice) 用于创建设备。
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
     * @param {GetRecordPlanByIdRequest} req
     * @param {function(string, GetRecordPlanByIdResponse):void} cb
     * @public
     */
    GetRecordPlanById(req, cb) {
        let resp = new GetRecordPlanByIdResponse();
        this.request("GetRecordPlanById", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.
     * @param {GetRecordPlanByDevRequest} req
     * @param {function(string, GetRecordPlanByDevResponse):void} cb
     * @public
     */
    GetRecordPlanByDev(req, cb) {
        let resp = new GetRecordPlanByDevResponse();
        this.request("GetRecordPlanByDev", req, resp, cb);
    }

    /**
     * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
     * @param {DescribeDeviceGroupRequest} req
     * @param {function(string, DescribeDeviceGroupResponse):void} cb
     * @public
     */
    DescribeDeviceGroup(req, cb) {
        let resp = new DescribeDeviceGroupResponse();
        this.request("DescribeDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     * @param {DescribeStatisticDetailsRequest} req
     * @param {function(string, DescribeStatisticDetailsResponse):void} cb
     * @public
     */
    DescribeStatisticDetails(req, cb) {
        let resp = new DescribeStatisticDetailsResponse();
        this.request("DescribeStatisticDetails", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     * @param {DescribeGroupsRequest} req
     * @param {function(string, DescribeGroupsResponse):void} cb
     * @public
     */
    DescribeGroups(req, cb) {
        let resp = new DescribeGroupsResponse();
        this.request("DescribeGroups", req, resp, cb);
    }

    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     * @param {DeleteTimeTemplateRequest} req
     * @param {function(string, DeleteTimeTemplateResponse):void} cb
     * @public
     */
    DeleteTimeTemplate(req, cb) {
        let resp = new DeleteTimeTemplateResponse();
        this.request("DeleteTimeTemplate", req, resp, cb);
    }

    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     * @param {DescribeSIPServerRequest} req
     * @param {function(string, DescribeSIPServerResponse):void} cb
     * @public
     */
    DescribeSIPServer(req, cb) {
        let resp = new DescribeSIPServerResponse();
        this.request("DescribeSIPServer", req, resp, cb);
    }

    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     * @param {DeleteDeviceGroupRequest} req
     * @param {function(string, DeleteDeviceGroupResponse):void} cb
     * @public
     */
    DeleteDeviceGroup(req, cb) {
        let resp = new DeleteDeviceGroupResponse();
        this.request("DeleteDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
     * @param {ControlDevicePTZRequest} req
     * @param {function(string, ControlDevicePTZResponse):void} cb
     * @public
     */
    ControlDevicePTZ(req, cb) {
        let resp = new ControlDevicePTZResponse();
        this.request("ControlDevicePTZ", req, resp, cb);
    }

    /**
     * 根据时间获取回放文件列表(云端录制用)
     * @param {DescribeVideoListRequest} req
     * @param {function(string, DescribeVideoListResponse):void} cb
     * @public
     */
    DescribeVideoList(req, cb) {
        let resp = new DescribeVideoListResponse();
        this.request("DescribeVideoList", req, resp, cb);
    }

    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
     * @param {DescribeAllDeviceListRequest} req
     * @param {function(string, DescribeAllDeviceListResponse):void} cb
     * @public
     */
    DescribeAllDeviceList(req, cb) {
        let resp = new DescribeAllDeviceListResponse();
        this.request("DescribeAllDeviceList", req, resp, cb);
    }

    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     * @param {BindGroupDevicesRequest} req
     * @param {function(string, BindGroupDevicesResponse):void} cb
     * @public
     */
    BindGroupDevices(req, cb) {
        let resp = new BindGroupDevicesResponse();
        this.request("BindGroupDevices", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     * @param {DescribeGroupByIdRequest} req
     * @param {function(string, DescribeGroupByIdResponse):void} cb
     * @public
     */
    DescribeGroupById(req, cb) {
        let resp = new DescribeGroupByIdResponse();
        this.request("DescribeGroupById", req, resp, cb);
    }

    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
     * @param {CreateRecordPlanRequest} req
     * @param {function(string, CreateRecordPlanResponse):void} cb
     * @public
     */
    CreateRecordPlan(req, cb) {
        let resp = new CreateRecordPlanResponse();
        this.request("CreateRecordPlan", req, resp, cb);
    }

    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     * @param {CreateTimeTemplateRequest} req
     * @param {function(string, CreateTimeTemplateResponse):void} cb
     * @public
     */
    CreateTimeTemplate(req, cb) {
        let resp = new CreateTimeTemplateResponse();
        this.request("CreateTimeTemplate", req, resp, cb);
    }


}
module.exports = IotvideoindustryClient;
