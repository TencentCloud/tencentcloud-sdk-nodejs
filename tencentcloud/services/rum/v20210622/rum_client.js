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
 * rum client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("rum.tencentcloudapi.com", "2021-06-22", clientConfig);
    }
    /**
     * 查询片区信息
     */
    async DescribeTawAreas(req, cb) {
        return this.request("DescribeTawAreas", req, cb);
    }
    /**
     * 创建对应项目的文件记录
     */
    async CreateReleaseFile(req, cb) {
        return this.request("CreateReleaseFile", req, cb);
    }
    /**
     * 获取首页分数列表
     */
    async DescribeScores(req, cb) {
        return this.request("DescribeScores", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeTawInstances(req, cb) {
        return this.request("DescribeTawInstances", req, cb);
    }
    /**
     * 获取PerformancePage信息
     */
    async DescribeDataPerformancePage(req, cb) {
        return this.request("DescribeDataPerformancePage", req, cb);
    }
    /**
     * 获取LogUrlStatistics信息
     */
    async DescribeDataLogUrlStatistics(req, cb) {
        return this.request("DescribeDataLogUrlStatistics", req, cb);
    }
    /**
     * 获取DescribeDataFetchProject信息
     */
    async DescribeDataFetchProject(req, cb) {
        return this.request("DescribeDataFetchProject", req, cb);
    }
    /**
     * 删除实例，谨慎操作，不可恢复
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 删除用户名下的星标项目
     */
    async DeleteStarProject(req, cb) {
        return this.request("DeleteStarProject", req, cb);
    }
    /**
     * 恢复实例
     */
    async ResumeInstance(req, cb) {
        return this.request("ResumeInstance", req, cb);
    }
    /**
     * 获取PerformanceProject信息
     */
    async DescribeDataPerformanceProject(req, cb) {
        return this.request("DescribeDataPerformanceProject", req, cb);
    }
    /**
     * 获取首页错误信息
     */
    async DescribeError(req, cb) {
        return this.request("DescribeError", req, cb);
    }
    /**
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     */
    async DescribeLogList(req, cb) {
        return this.request("DescribeLogList", req, cb);
    }
    /**
     * 获取对应离线日志
     */
    async DescribeOfflineLogs(req, cb) {
        return this.request("DescribeOfflineLogs", req, cb);
    }
    /**
     * 创建Rum实例
     */
    async CreateTawInstance(req, cb) {
        return this.request("CreateTawInstance", req, cb);
    }
    /**
     * 获取项目下的PV列表
     */
    async DescribePvList(req, cb) {
        return this.request("DescribePvList", req, cb);
    }
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于获取日志下载任务列表

默认接口请求频率限制：20次/秒
     */
    async DescribeLogExports(req, cb) {
        return this.request("DescribeLogExports", req, cb);
    }
    /**
     * 获取DescribeDataWebVitalsPage信息，用户核心活动信息
页面加载性能之Web Vitals。性能关键点
     */
    async DescribeDataWebVitalsPage(req, cb) {
        return this.request("DescribeDataWebVitalsPage", req, cb);
    }
    /**
     * 获取DescribeDataStaticUrl信息
     */
    async DescribeDataStaticUrl(req, cb) {
        return this.request("DescribeDataStaticUrl", req, cb);
    }
    /**
     * 新增修改限流
     */
    async ModifyProjectLimit(req, cb) {
        return this.request("ModifyProjectLimit", req, cb);
    }
    /**
     * 获取DescribeDataPvUrlStatistics信息
     */
    async DescribeDataPvUrlStatistics(req, cb) {
        return this.request("DescribeDataPvUrlStatistics", req, cb);
    }
    /**
     * 获取上传文件存储的临时密钥
     */
    async DescribeReleaseFileSign(req, cb) {
        return this.request("DescribeReleaseFileSign", req, cb);
    }
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于创建日志下载任务

默认接口请求频率限制：20次/秒。
     */
    async CreateLogExport(req, cb) {
        return this.request("CreateLogExport", req, cb);
    }
    /**
     * 获取DescribeDataSetUrlStatistics信息
     */
    async DescribeDataSetUrlStatistics(req, cb) {
        return this.request("DescribeDataSetUrlStatistics", req, cb);
    }
    /**
     * 修改实例信息
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 获取DescribeDataStaticResource信息
     */
    async DescribeDataStaticResource(req, cb) {
        return this.request("DescribeDataStaticResource", req, cb);
    }
    /**
     * 获取项目上报率列表
     */
    async DescribeProjectLimits(req, cb) {
        return this.request("DescribeProjectLimits", req, cb);
    }
    /**
     * 获取DescribeDataCustomUrl信息
     */
    async DescribeDataCustomUrl(req, cb) {
        return this.request("DescribeDataCustomUrl", req, cb);
    }
    /**
     * 创建白名单
     */
    async CreateWhitelist(req, cb) {
        return this.request("CreateWhitelist", req, cb);
    }
    /**
     * 获取项目列表（实例创建的团队下的项目列表）
     */
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    /**
     * 个人用户添加星标项目
     */
    async CreateStarProject(req, cb) {
        return this.request("CreateStarProject", req, cb);
    }
    /**
     * 删除白名单
     */
    async DeleteWhitelist(req, cb) {
        return this.request("DeleteWhitelist", req, cb);
    }
    /**
     * 获取DescribeDataFetchUrlInfo信息
     */
    async DescribeDataFetchUrlInfo(req, cb) {
        return this.request("DescribeDataFetchUrlInfo", req, cb);
    }
    /**
     * 停止实例
     */
    async StopInstance(req, cb) {
        return this.request("StopInstance", req, cb);
    }
    /**
     * 修改 rum 项目信息
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 获取项目对应sourcemap文件列表
     */
    async DescribeReleaseFiles(req, cb) {
        return this.request("DescribeReleaseFiles", req, cb);
    }
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于删除日志下载任务

默认接口请求频率限制：20次/秒。
     */
    async DeleteLogExport(req, cb) {
        return this.request("DeleteLogExport", req, cb);
    }
    /**
     * 获取白名单列表
     */
    async DescribeWhitelists(req, cb) {
        return this.request("DescribeWhitelists", req, cb);
    }
    /**
     * 获取DescribeDataEventUrl信息
     */
    async DescribeDataEventUrl(req, cb) {
        return this.request("DescribeDataEventUrl", req, cb);
    }
    /**
     * 删除对应的离线日志记录
     */
    async DeleteOfflineLogRecord(req, cb) {
        return this.request("DeleteOfflineLogRecord", req, cb);
    }
    /**
     * 获取设置的离线日志监听配置 - 返回设置的用户唯一标识
     */
    async DescribeOfflineLogConfigs(req, cb) {
        return this.request("DescribeOfflineLogConfigs", req, cb);
    }
    /**
     * 获取loginfo信息
     */
    async DescribeDataLogUrlInfo(req, cb) {
        return this.request("DescribeDataLogUrlInfo", req, cb);
    }
    /**
     * 创建项目（归属于某个团队）
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 获取项目上报量
     */
    async DescribeDataReportCount(req, cb) {
        return this.request("DescribeDataReportCount", req, cb);
    }
    /**
     * 获取PvUrlInfo信息
     */
    async DescribeDataPvUrlInfo(req, cb) {
        return this.request("DescribeDataPvUrlInfo", req, cb);
    }
    /**
     * 获取DescribeDataStaticProject信息
     */
    async DescribeDataStaticProject(req, cb) {
        return this.request("DescribeDataStaticProject", req, cb);
    }
    /**
     * 删除给定的 rum 的项目
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 获取所有离线日志记录(最多100条)
     */
    async DescribeOfflineLogRecords(req, cb) {
        return this.request("DescribeOfflineLogRecords", req, cb);
    }
    /**
     * 获取项目下的UV列表
     */
    async DescribeUvList(req, cb) {
        return this.request("DescribeUvList", req, cb);
    }
    /**
     * 删除 rum 离线日志监听 - 对应用户的离线日志将不会上报
     */
    async DeleteOfflineLogConfig(req, cb) {
        return this.request("DeleteOfflineLogConfig", req, cb);
    }
    /**
     * 将对应 sourcemap 文件删除
     */
    async DeleteReleaseFile(req, cb) {
        return this.request("DeleteReleaseFile", req, cb);
    }
    /**
     * 创建离线日志监听，对应用户的离线日志将上报
     */
    async CreateOfflineLogConfig(req, cb) {
        return this.request("CreateOfflineLogConfig", req, cb);
    }
    /**
     * 获取DescribeDataFetchUrl信息
     */
    async DescribeDataFetchUrl(req, cb) {
        return this.request("DescribeDataFetchUrl", req, cb);
    }
    /**
     * 转发monitor查询
     */
    async DescribeData(req, cb) {
        return this.request("DescribeData", req, cb);
    }
}
exports.Client = Client;
