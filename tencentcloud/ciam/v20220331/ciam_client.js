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
const UpdateUserRequest = models.UpdateUserRequest;
const DescribeUserByIdRequest = models.DescribeUserByIdRequest;
const ListUserRequest = models.ListUserRequest;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ErrorDetails = models.ErrorDetails;
const DescribeUserRequest = models.DescribeUserRequest;
const DeleteUsersRequest = models.DeleteUsersRequest;
const ImportUser = models.ImportUser;
const UpdateUserStatusResponse = models.UpdateUserStatusResponse;
const FailedUsers = models.FailedUsers;
const ListUserByPropertyRequest = models.ListUserByPropertyRequest;
const CreateUserResponse = models.CreateUserResponse;
const Filter = models.Filter;
const SetPasswordResponse = models.SetPasswordResponse;
const ListUserByPropertyResponse = models.ListUserByPropertyResponse;
const ListJobsRequest = models.ListJobsRequest;
const DescribeUserByIdResponse = models.DescribeUserByIdResponse;
const Job = models.Job;
const CreateFileExportUserJobRequest = models.CreateFileExportUserJobRequest;
const User = models.User;
const Sort = models.Sort;
const Pageable = models.Pageable;
const ResetPasswordResponse = models.ResetPasswordResponse;
const UpdateUserResponse = models.UpdateUserResponse;
const SetPasswordRequest = models.SetPasswordRequest;
const SaltLocation = models.SaltLocation;
const UpdateUserStatusRequest = models.UpdateUserStatusRequest;
const ListJobsResponse = models.ListJobsResponse;
const ExportPropertyMap = models.ExportPropertyMap;
const LinkAccountResponse = models.LinkAccountResponse;
const CreateUserRequest = models.CreateUserRequest;
const Salt = models.Salt;
const DeleteUsersResponse = models.DeleteUsersResponse;
const CreateApiImportUserJobRequest = models.CreateApiImportUserJobRequest;
const CreateFileExportUserJobResponse = models.CreateFileExportUserJobResponse;
const CreateApiImportUserJobResponse = models.CreateApiImportUserJobResponse;
const LinkAccountRequest = models.LinkAccountRequest;
const ListLogMessageByConditionRequest = models.ListLogMessageByConditionRequest;
const SaltLocationRule = models.SaltLocationRule;
const MemberMap = models.MemberMap;
const QueryUserFilter = models.QueryUserFilter;
const DescribeUserResponse = models.DescribeUserResponse;
const ListUserResponse = models.ListUserResponse;
const LogMessage = models.LogMessage;
const ListLogMessageByConditionResponse = models.ListLogMessageByConditionResponse;


/**
 * ciam client
 * @class
 */
class CiamClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ciam.tencentcloudapi.com", "2022-03-31", credential, region, profile);
    }
    
    /**
     * 批量删除用户
     * @param {DeleteUsersRequest} req
     * @param {function(string, DeleteUsersResponse):void} cb
     * @public
     */
    DeleteUsers(req, cb) {
        let resp = new DeleteUsersResponse();
        this.request("DeleteUsers", req, resp, cb);
    }

    /**
     * 查询任务详情
     * @param {ListJobsRequest} req
     * @param {function(string, ListJobsResponse):void} cb
     * @public
     */
    ListJobs(req, cb) {
        let resp = new ListJobsResponse();
        this.request("ListJobs", req, resp, cb);
    }

    /**
     * 更新用户
     * @param {UpdateUserRequest} req
     * @param {function(string, UpdateUserResponse):void} cb
     * @public
     */
    UpdateUser(req, cb) {
        let resp = new UpdateUserResponse();
        this.request("UpdateUser", req, resp, cb);
    }

    /**
     * 多条件查询用户信息
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * 查询用户列表
     * @param {ListUserRequest} req
     * @param {function(string, ListUserResponse):void} cb
     * @public
     */
    ListUser(req, cb) {
        let resp = new ListUserResponse();
        this.request("ListUser", req, resp, cb);
    }

    /**
     * 更新用户状态
     * @param {UpdateUserStatusRequest} req
     * @param {function(string, UpdateUserStatusResponse):void} cb
     * @public
     */
    UpdateUserStatus(req, cb) {
        let resp = new UpdateUserStatusResponse();
        this.request("UpdateUserStatus", req, resp, cb);
    }

    /**
     * 根据属性查询用户列表
     * @param {ListUserByPropertyRequest} req
     * @param {function(string, ListUserByPropertyResponse):void} cb
     * @public
     */
    ListUserByProperty(req, cb) {
        let resp = new ListUserByPropertyResponse();
        this.request("ListUserByProperty", req, resp, cb);
    }

    /**
     * 查询日志信息
     * @param {ListLogMessageByConditionRequest} req
     * @param {function(string, ListLogMessageByConditionResponse):void} cb
     * @public
     */
    ListLogMessageByCondition(req, cb) {
        let resp = new ListLogMessageByConditionResponse();
        this.request("ListLogMessageByCondition", req, resp, cb);
    }

    /**
     * 根据ID查询用户信息
     * @param {DescribeUserByIdRequest} req
     * @param {function(string, DescribeUserByIdResponse):void} cb
     * @public
     */
    DescribeUserById(req, cb) {
        let resp = new DescribeUserByIdResponse();
        this.request("DescribeUserById", req, resp, cb);
    }

    /**
     * 创建用户
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * 设置用户密码
     * @param {SetPasswordRequest} req
     * @param {function(string, SetPasswordResponse):void} cb
     * @public
     */
    SetPassword(req, cb) {
        let resp = new SetPasswordResponse();
        this.request("SetPassword", req, resp, cb);
    }

    /**
     * 新建文件导出用户任务
     * @param {CreateFileExportUserJobRequest} req
     * @param {function(string, CreateFileExportUserJobResponse):void} cb
     * @public
     */
    CreateFileExportUserJob(req, cb) {
        let resp = new CreateFileExportUserJobResponse();
        this.request("CreateFileExportUserJob", req, resp, cb);
    }

    /**
     * 新建接口导入用户任务
     * @param {CreateApiImportUserJobRequest} req
     * @param {function(string, CreateApiImportUserJobResponse):void} cb
     * @public
     */
    CreateApiImportUserJob(req, cb) {
        let resp = new CreateApiImportUserJobResponse();
        this.request("CreateApiImportUserJob", req, resp, cb);
    }

    /**
     * 账号融合
     * @param {LinkAccountRequest} req
     * @param {function(string, LinkAccountResponse):void} cb
     * @public
     */
    LinkAccount(req, cb) {
        let resp = new LinkAccountResponse();
        this.request("LinkAccount", req, resp, cb);
    }

    /**
     * 重置用户密码
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }


}
module.exports = CiamClient;
