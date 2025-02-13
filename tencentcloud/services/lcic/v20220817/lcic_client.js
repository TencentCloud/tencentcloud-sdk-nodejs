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
     * 获取应用详情
     */
    async DescribeAppDetail(req, cb) {
        return this.request("DescribeAppDetail", req, cb);
    }
    /**
     * 根据房间ID获取群组中被禁言的用户列表。
     */
    async DescribeRoomForbiddenUser(req, cb) {
        return this.request("DescribeRoomForbiddenUser", req, cb);
    }
    /**
     * 获取房间统计信息，仅可在房间结束后调用。
     */
    async DescribeRoomStatistics(req, cb) {
        return this.request("DescribeRoomStatistics", req, cb);
    }
    /**
     * App 管理员可以通过该接口在群组中发送通知、公告等。目前仅支持文本消息。
     */
    async SendRoomNotificationMessage(req, cb) {
        return this.request("SendRoomNotificationMessage", req, cb);
    }
    /**
     * 录制流查询
     */
    async DescribeRecordStream(req, cb) {
        return this.request("DescribeRecordStream", req, cb);
    }
    /**
     * 有新接口替换

批量获取文档信息（已废弃，替代接口BatchDescribeDocument）
     */
    async DescribeDocuments(req, cb) {
        return this.request("DescribeDocuments", req, cb);
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
     * 删除设置自定义元素。如果参数scenes为空则删除所有自定义元素，否则删除指定的scene自定义元素。
     */
    async DeleteAppCustomContent(req, cb) {
        return this.request("DeleteAppCustomContent", req, cb);
    }
    /**
     * 获取房间历史消息(房间历史消息保存7天)
     */
    async GetRoomMessage(req, cb) {
        return this.request("GetRoomMessage", req, cb);
    }
    /**
     * 设置水印
     */
    async SetWatermark(req, cb) {
        return this.request("SetWatermark", req, cb);
    }
    /**
     * 此接口用于修改用户信息，例如头像、昵称（用户名）等。注意，课中的用户信息不会立即同步修改，需待下次上课时，修改后的信息才会更新显示。
     */
    async ModifyUserProfile(req, cb) {
        return this.request("ModifyUserProfile", req, cb);
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
     * 开始房间的直播。 说明：开始房间接口调用之前需要有用户进入课堂初始化课堂信息。
     */
    async StartRoom(req, cb) {
        return this.request("StartRoom", req, cb);
    }
    /**
     * 此接口用于删除群组中指定成员
     */
    async DeleteGroupMember(req, cb) {
        return this.request("DeleteGroupMember", req, cb);
    }
    /**
     * 解禁从房间里面踢出的用户
     */
    async UnblockKickedUser(req, cb) {
        return this.request("UnblockKickedUser", req, cb);
    }
    /**
     * 创建房间内可以使用的文档。
     */
    async CreateDocument(req, cb) {
        return this.request("CreateDocument", req, cb);
    }
    /**
     * 获取巡课列表
     */
    async DescribeSupervisors(req, cb) {
        return this.request("DescribeSupervisors", req, cb);
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
     * 此接口用于获取群组成员列表
     */
    async DescribeGroupMemberList(req, cb) {
        return this.request("DescribeGroupMemberList", req, cb);
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
     * 删除巡课
     */
    async DeleteSupervisor(req, cb) {
        return this.request("DeleteSupervisor", req, cb);
    }
    /**
     * 此接口用于批量删除成员列表到指定群组列表
     */
    async BatchDeleteGroupMember(req, cb) {
        return this.request("BatchDeleteGroupMember", req, cb);
    }
    /**
     * 获取房间事件,仅在课堂结束1小时内有效。
     */
    async GetRoomEvent(req, cb) {
        return this.request("GetRoomEvent", req, cb);
    }
    /**
     * 删除已注册用户。注：如果该成员已被添加到群组，请先在群组中删除该成员。
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 获取房间配置信息
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
     * 1、按照指定身份发送消息，目前支持表情消息、图片消息、文本消息。
     */
    async SendRoomNormalMessage(req, cb) {
        return this.request("SendRoomNormalMessage", req, cb);
    }
    /**
     * 查询录制信息
     */
    async DescribeRecord(req, cb) {
        return this.request("DescribeRecord", req, cb);
    }
    /**
     * 获取群组列表
     */
    async DescribeGroupList(req, cb) {
        return this.request("DescribeGroupList", req, cb);
    }
    /**
     * 此接口用于批量添加成员列表到指定群组
     */
    async BatchAddGroupMember(req, cb) {
        return this.request("BatchAddGroupMember", req, cb);
    }
    /**
     * 此接口用于添加成员列表到指定群组
     */
    async AddGroupMember(req, cb) {
        return this.request("AddGroupMember", req, cb);
    }
    /**
     * 注册用户
     */
    async RegisterUser(req, cb) {
        return this.request("RegisterUser", req, cb);
    }
    /**
     * 查询录制任务ID
     */
    async DescribeRecordTask(req, cb) {
        return this.request("DescribeRecordTask", req, cb);
    }
    /**
     * 功能概述
本接口提供教学场景下的课程文档预绑定能力，支持将课件课堂ID进行关联映射，实现课件的自动化预加载。

应用场景建议

绑定时机
推荐在创建课堂预约阶段同步完成文档绑定操作，确保课件资源在课堂开始前完成上传。

接口限制与频控策略

频控维度
开发者账号维度限频
默认频控阈值为20 QPS（每秒请求次数）

最佳实践建议

重试策略
当触发限频错误时，建议采用以下策略：
启用退避重试机制（建议使用指数退避算法）
初始重试间隔不低于500ms
最大重试次数不超过3次
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
     * 禁止指定房间中某些用户在一段时间内发言。
取消对某些用户的禁言。
被禁言用户退出房间之后再进入同一房间，禁言仍然有效。
     */
    async ForbidSendMsg(req, cb) {
        return this.request("ForbidSendMsg", req, cb);
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
     * 开发商信息获取
     */
    async DescribeDeveloper(req, cb) {
        return this.request("DescribeDeveloper", req, cb);
    }
    /**
     * 创建巡课
     */
    async CreateSupervisor(req, cb) {
        return this.request("CreateSupervisor", req, cb);
    }
    /**
     * 获取房间提问列表
     */
    async DescribeQuestionList(req, cb) {
        return this.request("DescribeQuestionList", req, cb);
    }
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    async SetAppCustomContent(req, cb) {
        return this.request("SetAppCustomContent", req, cb);
    }
    /**
     * 批量获取文档详情
     */
    async BatchDescribeDocument(req, cb) {
        return this.request("BatchDescribeDocument", req, cb);
    }
    /**
     * 获取当前房间的成员列表，房间结束或过期后无法使用。
     */
    async DescribeCurrentMemberList(req, cb) {
        return this.request("DescribeCurrentMemberList", req, cb);
    }
    /**
     * 批量创建房间接口
     */
    async BatchCreateRoom(req, cb) {
        return this.request("BatchCreateRoom", req, cb);
    }
    /**
     * 获取房间答题详情
     */
    async DescribeAnswerList(req, cb) {
        return this.request("DescribeAnswerList", req, cb);
    }
    /**
     * 删除文档
     */
    async DeleteDocument(req, cb) {
        return this.request("DeleteDocument", req, cb);
    }
    /**
     * 停止录制
     */
    async StopRecord(req, cb) {
        return this.request("StopRecord", req, cb);
    }
    /**
     * 批量删除多个房间的录制文件
     */
    async BatchDeleteRecord(req, cb) {
        return this.request("BatchDeleteRecord", req, cb);
    }
    /**
     * 结束房间的直播
     */
    async EndRoom(req, cb) {
        return this.request("EndRoom", req, cb);
    }
    /**
     * 设置跑马灯参数设置
     */
    async SetMarquee(req, cb) {
        return this.request("SetMarquee", req, cb);
    }
    /**
     * 获取房间列表
     */
    async GetRooms(req, cb) {
        return this.request("GetRooms", req, cb);
    }
    /**
     * 从房间里面踢出用户
     */
    async KickUserFromRoom(req, cb) {
        return this.request("KickUserFromRoom", req, cb);
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
     * 开始录制
     */
    async StartRecord(req, cb) {
        return this.request("StartRecord", req, cb);
    }
    /**
     * 此接口会聚合子群组创建联合群组
     */
    async CreateGroupWithSubGroup(req, cb) {
        return this.request("CreateGroupWithSubGroup", req, cb);
    }
    /**
     * 查询跑马灯配置
     */
    async DescribeMarquee(req, cb) {
        return this.request("DescribeMarquee", req, cb);
    }
    /**
     * 此接口用于批量创建群组
     */
    async BatchCreateGroupWithMembers(req, cb) {
        return this.request("BatchCreateGroupWithMembers", req, cb);
    }
    /**
     * 获取课堂评分列表
     */
    async DescribeScoreList(req, cb) {
        return this.request("DescribeScoreList", req, cb);
    }
    /**
     * 创建房间
     */
    async CreateRoom(req, cb) {
        return this.request("CreateRoom", req, cb);
    }
}
exports.Client = Client;
