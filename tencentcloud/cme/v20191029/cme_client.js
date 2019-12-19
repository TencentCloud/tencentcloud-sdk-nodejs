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
const AudioStreamInfo = models.AudioStreamInfo;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DeleteProjectRequest = models.DeleteProjectRequest;
const ImportMediaToProjectResponse = models.ImportMediaToProjectResponse;
const DescribeLoginStatusRequest = models.DescribeLoginStatusRequest;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeLoginStatusResponse = models.DescribeLoginStatusResponse;
const DeleteLoginStatusResponse = models.DeleteLoginStatusResponse;
const MaterialBaseInfo = models.MaterialBaseInfo;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const ExportVideoEditProjectRequest = models.ExportVideoEditProjectRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const VideoStreamInfo = models.VideoStreamInfo;
const DescribeTasksResponse = models.DescribeTasksResponse;
const ProjectInfo = models.ProjectInfo;
const LoginStatusInfo = models.LoginStatusInfo;
const ExportVideoEditProjectResponse = models.ExportVideoEditProjectResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const MediaMetaData = models.MediaMetaData;
const DeleteProjectResponse = models.DeleteProjectResponse;
const TaskBaseInfo = models.TaskBaseInfo;
const DeleteLoginStatusRequest = models.DeleteLoginStatusRequest;
const CMEExportInfo = models.CMEExportInfo;
const Entity = models.Entity;
const ImportMediaToProjectRequest = models.ImportMediaToProjectRequest;
const VODExportInfo = models.VODExportInfo;
const VideoEditProjectOutput = models.VideoEditProjectOutput;
const CreateProjectRequest = models.CreateProjectRequest;


/**
 * cme client
 * @class
 */
class CmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cme.tencentcloudapi.com", "2019-10-29", credential, region, profile);
    }
    
    /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 导出视频编辑项目，支持指定输出的模板。
     * @param {ExportVideoEditProjectRequest} req
     * @param {function(string, ExportVideoEditProjectResponse):void} cb
     * @public
     */
    ExportVideoEditProject(req, cb) {
        let resp = new ExportVideoEditProjectResponse();
        this.request("ExportVideoEditProject", req, resp, cb);
    }

    /**
     * 将云点播中的媒资添加到素材库中，提供给后续的视频编辑。
     * @param {ImportMediaToProjectRequest} req
     * @param {function(string, ImportMediaToProjectResponse):void} cb
     * @public
     */
    ImportMediaToProject(req, cb) {
        let resp = new ImportMediaToProjectResponse();
        this.request("ImportMediaToProject", req, resp, cb);
    }

    /**
     * 创建云剪的编辑项目，支持创建视频剪辑及直播剪辑两大类项目。

     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 删除用户登录态，使用户登出云剪平台。
     * @param {DeleteLoginStatusRequest} req
     * @param {function(string, DeleteLoginStatusResponse):void} cb
     * @public
     */
    DeleteLoginStatus(req, cb) {
        let resp = new DeleteLoginStatusResponse();
        this.request("DeleteLoginStatus", req, resp, cb);
    }

    /**
     * 支持根据多种条件过滤出项目列表。
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 查询指定用户的登录态。
     * @param {DescribeLoginStatusRequest} req
     * @param {function(string, DescribeLoginStatusResponse):void} cb
     * @public
     */
    DescribeLoginStatus(req, cb) {
        let resp = new DescribeLoginStatusResponse();
        this.request("DescribeLoginStatus", req, resp, cb);
    }

    /**
     * 删除云剪编辑项目。
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * 支持各种条件筛选，返回对应的任务基础信息列表。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 修改云剪编辑项目的信息。
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }


}
module.exports = CmeClient;
