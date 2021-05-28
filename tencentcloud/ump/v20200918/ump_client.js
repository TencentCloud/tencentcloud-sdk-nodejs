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
const ModifyMultiBizConfigResponse = models.ModifyMultiBizConfigResponse;
const CreateMultiBizAlertResponse = models.CreateMultiBizAlertResponse;
const CameraConfig = models.CameraConfig;
const CreateServerStateResponse = models.CreateServerStateResponse;
const Polygon = models.Polygon;
const CreateCaptureResponse = models.CreateCaptureResponse;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DeleteTaskRequest = models.DeleteTaskRequest;
const CreateCameraAlertsRequest = models.CreateCameraAlertsRequest;
const CreateCameraAlertsResponse = models.CreateCameraAlertsResponse;
const DeleteMultiBizAlertRequest = models.DeleteMultiBizAlertRequest;
const ServerStateItem = models.ServerStateItem;
const DescribeZonesRequest = models.DescribeZonesRequest;
const Config = models.Config;
const TaskContent = models.TaskContent;
const SearchImageResponse = models.SearchImageResponse;
const CreateProgramStateResponse = models.CreateProgramStateResponse;
const ServiceRegisterInfo = models.ServiceRegisterInfo;
const DescribeTasksRequest = models.DescribeTasksRequest;
const SearchImageRequest = models.SearchImageRequest;
const DeleteMultiBizAlertResponse = models.DeleteMultiBizAlertResponse;
const ReportServiceRegisterRequest = models.ReportServiceRegisterRequest;
const DescribeImageResponse = models.DescribeImageResponse;
const CreateCameraAlertAlert = models.CreateCameraAlertAlert;
const ReportServiceRegisterResponse = models.ReportServiceRegisterResponse;
const DiskInfo = models.DiskInfo;
const CreateCameraStateResponse = models.CreateCameraStateResponse;
const CreateMultiBizAlertRequest = models.CreateMultiBizAlertRequest;
const CreateProgramStateRequest = models.CreateProgramStateRequest;
const DescribeMultiBizBaseImageRequest = models.DescribeMultiBizBaseImageRequest;
const MultiBizWarningInfo = models.MultiBizWarningInfo;
const Task = models.Task;
const ZoneConfig = models.ZoneConfig;
const ProgramStateItem = models.ProgramStateItem;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeCamerasRequest = models.DescribeCamerasRequest;
const DescribeMultiBizBaseImageResponse = models.DescribeMultiBizBaseImageResponse;
const DescribeImageRequest = models.DescribeImageRequest;
const ZoneArea = models.ZoneArea;
const SearchResult = models.SearchResult;
const CameraState = models.CameraState;
const CreateCaptureRequest = models.CreateCaptureRequest;
const CreateCameraAlertsMoveAlert = models.CreateCameraAlertsMoveAlert;
const CreateCameraStateRequest = models.CreateCameraStateRequest;
const DescribeCamerasResponse = models.DescribeCamerasResponse;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DeleteTaskResponse = models.DeleteTaskResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ModifyMultiBizConfigRequest = models.ModifyMultiBizConfigRequest;
const CameraZones = models.CameraZones;
const CreateCameraAlertsCoverAlert = models.CreateCameraAlertsCoverAlert;
const BunkZone = models.BunkZone;
const Point = models.Point;
const CreateServerStateRequest = models.CreateServerStateRequest;
const MultiBizWarning = models.MultiBizWarning;


/**
 * ump client
 * @class
 */
class UmpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ump.tencentcloudapi.com", "2020-09-18", credential, region, profile);
    }
    
    /**
     * 上报服务注册自身的服务地址作为回调地址, 用于信息回传。
     * @param {ReportServiceRegisterRequest} req
     * @param {function(string, ReportServiceRegisterResponse):void} cb
     * @public
     */
    ReportServiceRegister(req, cb) {
        let resp = new ReportServiceRegisterResponse();
        this.request("ReportServiceRegister", req, resp, cb);
    }

    /**
     * 集团广场的多经点位配置更新
     * @param {ModifyMultiBizConfigRequest} req
     * @param {function(string, ModifyMultiBizConfigResponse):void} cb
     * @public
     */
    ModifyMultiBizConfig(req, cb) {
        let resp = new ModifyMultiBizConfigResponse();
        this.request("ModifyMultiBizConfig", req, resp, cb);
    }

    /**
     * 上报相机移动、遮挡等告警信息


     * @param {CreateCameraAlertsRequest} req
     * @param {function(string, CreateCameraAlertsResponse):void} cb
     * @public
     */
    CreateCameraAlerts(req, cb) {
        let resp = new CreateCameraAlertsResponse();
        this.request("CreateCameraAlerts", req, resp, cb);
    }

    /**
     * 获取摄像头配置信息
mac不为空返回指定相机配置
mac为空返回对应GroupCode和MallId全量配置
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * 实时获取底图接口
     * @param {DescribeImageRequest} req
     * @param {function(string, DescribeImageResponse):void} cb
     * @public
     */
    DescribeImage(req, cb) {
        let resp = new DescribeImageResponse();
        this.request("DescribeImage", req, resp, cb);
    }

    /**
     * 集团广场的多经点位消警
     * @param {DeleteMultiBizAlertRequest} req
     * @param {function(string, DeleteMultiBizAlertResponse):void} cb
     * @public
     */
    DeleteMultiBizAlert(req, cb) {
        let resp = new DeleteMultiBizAlertResponse();
        this.request("DeleteMultiBizAlert", req, resp, cb);
    }

    /**
     * 获取集团广场对应的摄像头列表
     * @param {DescribeCamerasRequest} req
     * @param {function(string, DescribeCamerasResponse):void} cb
     * @public
     */
    DescribeCameras(req, cb) {
        let resp = new DescribeCamerasResponse();
        this.request("DescribeCameras", req, resp, cb);
    }

    /**
     * 获取集团广场的点位列表
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 删除集团广场对应的任务
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * 上报所有进程监控信息
     * @param {CreateProgramStateRequest} req
     * @param {function(string, CreateProgramStateResponse):void} cb
     * @public
     */
    CreateProgramState(req, cb) {
        let resp = new CreateProgramStateResponse();
        this.request("CreateProgramState", req, resp, cb);
    }

    /**
     * 查询集团广场对应的任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 集团广场的多经点位告警
     * @param {CreateMultiBizAlertRequest} req
     * @param {function(string, CreateMultiBizAlertResponse):void} cb
     * @public
     */
    CreateMultiBizAlert(req, cb) {
        let resp = new CreateMultiBizAlertResponse();
        this.request("CreateMultiBizAlert", req, resp, cb);
    }

    /**
     * 以图搜图
     * @param {SearchImageRequest} req
     * @param {function(string, SearchImageResponse):void} cb
     * @public
     */
    SearchImage(req, cb) {
        let resp = new SearchImageResponse();
        this.request("SearchImage", req, resp, cb);
    }

    /**
     * 上报所有服务器硬件监控信息
     * @param {CreateServerStateRequest} req
     * @param {function(string, CreateServerStateResponse):void} cb
     * @public
     */
    CreateServerState(req, cb) {
        let resp = new CreateServerStateResponse();
        this.request("CreateServerState", req, resp, cb);
    }

    /**
     * 获取多经点位底图
     * @param {DescribeMultiBizBaseImageRequest} req
     * @param {function(string, DescribeMultiBizBaseImageResponse):void} cb
     * @public
     */
    DescribeMultiBizBaseImage(req, cb) {
        let resp = new DescribeMultiBizBaseImageResponse();
        this.request("DescribeMultiBizBaseImage", req, resp, cb);
    }

    /**
     * 上报当前场内所有相机的当前状态
     * @param {CreateCameraStateRequest} req
     * @param {function(string, CreateCameraStateResponse):void} cb
     * @public
     */
    CreateCameraState(req, cb) {
        let resp = new CreateCameraStateResponse();
        this.request("CreateCameraState", req, resp, cb);
    }

    /**
     * 场内抓拍上报接口
     * @param {CreateCaptureRequest} req
     * @param {function(string, CreateCaptureResponse):void} cb
     * @public
     */
    CreateCapture(req, cb) {
        let resp = new CreateCaptureResponse();
        this.request("CreateCapture", req, resp, cb);
    }


}
module.exports = UmpClient;
