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
 * lcic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("lcic.tencentcloudapi.com", "2022-08-17", clientConfig);
    }
    /**
     * 此接口用于添加成员列表到指定群组
     */
    async AddGroupMember(req, cb) {
        return this.request("AddGroupMember", req, cb);
    }
    /**
     * 设置水印
     */
    async SetWatermark(req, cb) {
        return this.request("SetWatermark", req, cb);
    }
    /**
     * 此接口获取指定房间下课件列表
     */
    async DescribeDocumentsByRoom(req, cb) {
        return this.request("DescribeDocumentsByRoom", req, cb);
    }
    /**
     * 修改房间
     */
    async ModifyRoom(req, cb) {
        return this.request("ModifyRoom", req, cb);
    }
    /**
     * 获取水印设置
     */
    async GetWatermark(req, cb) {
        return this.request("GetWatermark", req, cb);
    }
    /**
     * 此接口用于获取群组详情
     */
    async DescribeGroup(req, cb) {
        return this.request("DescribeGroup", req, cb);
    }
    /**
     * 修改应用
     */
    async ModifyApp(req, cb) {
        return this.request("ModifyApp", req, cb);
    }
    /**
     * 文档从房间解绑
     */
    async UnbindDocumentFromRoom(req, cb) {
        return this.request("UnbindDocumentFromRoom", req, cb);
    }
    /**
     * 此接口用于获取指定应用ID下用户列表
     */
    async DescribeSdkAppIdUsers(req, cb) {
        return this.request("DescribeSdkAppIdUsers", req, cb);
    }
    /**
     * 此接口用于删除群组中指定成员
     */
    async DeleteGroupMember(req, cb) {
        return this.request("DeleteGroupMember", req, cb);
    }
    /**
     * 创建房间内可以使用的文档。
     */
    async CreateDocument(req, cb) {
        return this.request("CreateDocument", req, cb);
    }
    /**
     * 此接口用于删除指定群组，支持批量操作。
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 获取用户信息
     */
    async DescribeUser(req, cb) {
        return this.request("DescribeUser", req, cb);
    }
    /**
     * 此接口修改群组信息
     */
    async ModifyGroup(req, cb) {
        return this.request("ModifyGroup", req, cb);
    }
    /**
     * 如果批量注册的用户已存在，则会被覆盖。一次最多注册1000个用户。默认请求频率限制：10次/秒
     */
    async BatchRegister(req, cb) {
        return this.request("BatchRegister", req, cb);
    }
    /**
     * 此接口用于批量添加成员列表到指定群组
     */
    async BatchAddGroupMember(req, cb) {
        return this.request("BatchAddGroupMember", req, cb);
    }
    /**
     * 此接口用于批量删除成员列表到指定群组列表
     */
    async BatchDeleteGroupMember(req, cb) {
        return this.request("BatchDeleteGroupMember", req, cb);
    }
    /**
     * 获取房间信息
     */
    async DescribeRoom(req, cb) {
        return this.request("DescribeRoom", req, cb);
    }
    /**
     * 删除指定房间的录制文件
     */
    async DeleteRecord(req, cb) {
        return this.request("DeleteRecord", req, cb);
    }
    /**
     * 获取群组列表
     */
    async DescribeGroupList(req, cb) {
        return this.request("DescribeGroupList", req, cb);
    }
    /**
     * 此接口用于修改用户配置，如头像，昵称/用户名等。
     */
    async ModifyUserProfile(req, cb) {
        return this.request("ModifyUserProfile", req, cb);
    }
    /**
     * 批量创建房间接口
     */
    async BatchCreateRoom(req, cb) {
        return this.request("BatchCreateRoom", req, cb);
    }
    /**
     * 注册用户
     */
    async RegisterUser(req, cb) {
        return this.request("RegisterUser", req, cb);
    }
    /**
     * 获取房间统计信息，仅可在房间结束后调用。
     */
    async DescribeRoomStatistics(req, cb) {
        return this.request("DescribeRoomStatistics", req, cb);
    }
    /**
     * 绑定文档到房间
     */
    async BindDocumentToRoom(req, cb) {
        return this.request("BindDocumentToRoom", req, cb);
    }
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    async LoginOriginId(req, cb) {
        return this.request("LoginOriginId", req, cb);
    }
    /**
     * 登录
     */
    async LoginUser(req, cb) {
        return this.request("LoginUser", req, cb);
    }
    /**
     * 此接口根据成员列表创建群组
     */
    async CreateGroupWithMembers(req, cb) {
        return this.request("CreateGroupWithMembers", req, cb);
    }
    /**
     * 创建巡课
     */
    async CreateSupervisor(req, cb) {
        return this.request("CreateSupervisor", req, cb);
    }
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    async SetAppCustomContent(req, cb) {
        return this.request("SetAppCustomContent", req, cb);
    }
    /**
     * 此接口用于获取群组成员列表
     */
    async DescribeGroupMemberList(req, cb) {
        return this.request("DescribeGroupMemberList", req, cb);
    }
    /**
     * 获取当前房间的成员列表，房间结束或过期后无法使用。
     */
    async DescribeCurrentMemberList(req, cb) {
        return this.request("DescribeCurrentMemberList", req, cb);
    }
    /**
     * 获取应用详情
     */
    async DescribeAppDetail(req, cb) {
        return this.request("DescribeAppDetail", req, cb);
    }
    /**
     * 删除文档
     */
    async DeleteDocument(req, cb) {
        return this.request("DeleteDocument", req, cb);
    }
    /**
     * 批量删除多个房间的录制文件
     */
    async BatchDeleteRecord(req, cb) {
        return this.request("BatchDeleteRecord", req, cb);
    }
    /**
     * 删除房间
     */
    async DeleteRoom(req, cb) {
        return this.request("DeleteRoom", req, cb);
    }
    /**
     * 获取文档信息
     */
    async DescribeDocument(req, cb) {
        return this.request("DescribeDocument", req, cb);
    }
    /**
     * 此接口会聚合子群组创建联合群组
     */
    async CreateGroupWithSubGroup(req, cb) {
        return this.request("CreateGroupWithSubGroup", req, cb);
    }
    /**
     * 此接口用于批量创建群组
     */
    async BatchCreateGroupWithMembers(req, cb) {
        return this.request("BatchCreateGroupWithMembers", req, cb);
    }
    /**
     * 创建房间
     */
    async CreateRoom(req, cb) {
        return this.request("CreateRoom", req, cb);
    }
}
exports.Client = Client;
