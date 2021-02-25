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
 * ump client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ump.tencentcloudapi.com", "2020-09-18", clientConfig);
    }
    /**
     * 上报服务注册自身的服务地址作为回调地址, 用于信息回传。
     */
    async ReportServiceRegister(req, cb) {
        return this.request("ReportServiceRegister", req, cb);
    }
    /**
     * 集团广场的多经点位配置更新
     */
    async ModifyMultiBizConfig(req, cb) {
        return this.request("ModifyMultiBizConfig", req, cb);
    }
    /**
     * 上报相机移动、遮挡等告警信息


     */
    async CreateCameraAlerts(req, cb) {
        return this.request("CreateCameraAlerts", req, cb);
    }
    /**
     * 获取摄像头配置信息
mac不为空返回指定相机配置
mac为空返回对应GroupCode和MallId全量配置
     */
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
    /**
     * 实时获取底图接口
     */
    async DescribeImage(req, cb) {
        return this.request("DescribeImage", req, cb);
    }
    /**
     * 集团广场的多经点位消警
     */
    async DeleteMultiBizAlert(req, cb) {
        return this.request("DeleteMultiBizAlert", req, cb);
    }
    /**
     * 获取集团广场对应的摄像头列表
     */
    async DescribeCameras(req, cb) {
        return this.request("DescribeCameras", req, cb);
    }
    /**
     * 获取集团广场的点位列表
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 删除集团广场对应的任务
     */
    async DeleteTask(req, cb) {
        return this.request("DeleteTask", req, cb);
    }
    /**
     * 上报所有进程监控信息
     */
    async CreateProgramState(req, cb) {
        return this.request("CreateProgramState", req, cb);
    }
    /**
     * 查询集团广场对应的任务列表
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 集团广场的多经点位告警
     */
    async CreateMultiBizAlert(req, cb) {
        return this.request("CreateMultiBizAlert", req, cb);
    }
    /**
     * 以图搜图
     */
    async SearchImage(req, cb) {
        return this.request("SearchImage", req, cb);
    }
    /**
     * 上报所有服务器硬件监控信息
     */
    async CreateServerState(req, cb) {
        return this.request("CreateServerState", req, cb);
    }
    /**
     * 获取多经点位底图
     */
    async DescribeMultiBizBaseImage(req, cb) {
        return this.request("DescribeMultiBizBaseImage", req, cb);
    }
    /**
     * 上报当前场内所有相机的当前状态
     */
    async CreateCameraState(req, cb) {
        return this.request("CreateCameraState", req, cb);
    }
    /**
     * 场内抓拍上报接口
     */
    async CreateCapture(req, cb) {
        return this.request("CreateCapture", req, cb);
    }
}
exports.Client = Client;
