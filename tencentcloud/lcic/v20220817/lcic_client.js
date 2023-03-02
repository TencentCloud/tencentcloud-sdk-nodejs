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
const CreateRoomRequest = models.CreateRoomRequest;
const ModifyRoomResponse = models.ModifyRoomResponse;
const DescribeAppDetailResponse = models.DescribeAppDetailResponse;
const BatchDeleteRecordRequest = models.BatchDeleteRecordRequest;
const BatchRegisterRequest = models.BatchRegisterRequest;
const DeleteRoomResponse = models.DeleteRoomResponse;
const ModifyUserProfileRequest = models.ModifyUserProfileRequest;
const CreateGroupWithMembersRequest = models.CreateGroupWithMembersRequest;
const DescribeDocumentsByRoomRequest = models.DescribeDocumentsByRoomRequest;
const BatchCreateGroupWithMembersResponse = models.BatchCreateGroupWithMembersResponse;
const CreateGroupWithMembersResponse = models.CreateGroupWithMembersResponse;
const BatchAddGroupMemberResponse = models.BatchAddGroupMemberResponse;
const ModifyUserProfileResponse = models.ModifyUserProfileResponse;
const ModifyAppResponse = models.ModifyAppResponse;
const LoginOriginIdRequest = models.LoginOriginIdRequest;
const BatchRegisterResponse = models.BatchRegisterResponse;
const BindDocumentToRoomResponse = models.BindDocumentToRoomResponse;
const CreateGroupWithSubGroupRequest = models.CreateGroupWithSubGroupRequest;
const SetWatermarkRequest = models.SetWatermarkRequest;
const DescribeRoomRequest = models.DescribeRoomRequest;
const BatchCreateRoomResponse = models.BatchCreateRoomResponse;
const UnbindDocumentFromRoomResponse = models.UnbindDocumentFromRoomResponse;
const CreateDocumentResponse = models.CreateDocumentResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const SetAppCustomContentResponse = models.SetAppCustomContentResponse;
const BatchUserRequest = models.BatchUserRequest;
const LoginUserResponse = models.LoginUserResponse;
const ModifyGroupRequest = models.ModifyGroupRequest;
const DescribeAppDetailRequest = models.DescribeAppDetailRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const AddGroupMemberRequest = models.AddGroupMemberRequest;
const DescribeGroupListRequest = models.DescribeGroupListRequest;
const GetRoomMessageRequest = models.GetRoomMessageRequest;
const DocumentInfo = models.DocumentInfo;
const GetWatermarkResponse = models.GetWatermarkResponse;
const DeleteDocumentResponse = models.DeleteDocumentResponse;
const DeleteRecordRequest = models.DeleteRecordRequest;
const BatchDeleteGroupMemberResponse = models.BatchDeleteGroupMemberResponse;
const CreateGroupWithSubGroupResponse = models.CreateGroupWithSubGroupResponse;
const GroupInfo = models.GroupInfo;
const DescribeDocumentResponse = models.DescribeDocumentResponse;
const DeleteGroupMemberResponse = models.DeleteGroupMemberResponse;
const DescribeGroupMemberListResponse = models.DescribeGroupMemberListResponse;
const AppConfig = models.AppConfig;
const DeleteRecordResponse = models.DeleteRecordResponse;
const BatchCreateRoomRequest = models.BatchCreateRoomRequest;
const DescribeGroupMemberListRequest = models.DescribeGroupMemberListRequest;
const UserInfo = models.UserInfo;
const DescribeUserResponse = models.DescribeUserResponse;
const DescribeDocumentRequest = models.DescribeDocumentRequest;
const BatchDeleteRecordResponse = models.BatchDeleteRecordResponse;
const WatermarkConfig = models.WatermarkConfig;
const SetAppCustomContentRequest = models.SetAppCustomContentRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const RegisterUserResponse = models.RegisterUserResponse;
const BindDocumentToRoomRequest = models.BindDocumentToRoomRequest;
const CreateDocumentRequest = models.CreateDocumentRequest;
const GetRoomMessageResponse = models.GetRoomMessageResponse;
const BatchUserInfo = models.BatchUserInfo;
const BatchAddGroupMemberRequest = models.BatchAddGroupMemberRequest;
const DescribeRoomResponse = models.DescribeRoomResponse;
const DescribeCurrentMemberListRequest = models.DescribeCurrentMemberListRequest;
const DescribeSdkAppIdUsersResponse = models.DescribeSdkAppIdUsersResponse;
const DescribeRoomStatisticsResponse = models.DescribeRoomStatisticsResponse;
const DeleteDocumentRequest = models.DeleteDocumentRequest;
const MessageList = models.MessageList;
const DeleteGroupMemberRequest = models.DeleteGroupMemberRequest;
const GetWatermarkRequest = models.GetWatermarkRequest;
const MemberRecord = models.MemberRecord;
const BatchDeleteGroupMemberRequest = models.BatchDeleteGroupMemberRequest;
const ModifyAppRequest = models.ModifyAppRequest;
const UnbindDocumentFromRoomRequest = models.UnbindDocumentFromRoomRequest;
const RegisterUserRequest = models.RegisterUserRequest;
const GroupBaseInfo = models.GroupBaseInfo;
const LoginUserRequest = models.LoginUserRequest;
const SetWatermarkResponse = models.SetWatermarkResponse;
const RoomInfo = models.RoomInfo;
const DescribeDocumentsByRoomResponse = models.DescribeDocumentsByRoomResponse;
const DescribeRoomStatisticsRequest = models.DescribeRoomStatisticsRequest;
const ModifyRoomRequest = models.ModifyRoomRequest;
const LoginOriginIdResponse = models.LoginOriginIdResponse;
const AppCustomContent = models.AppCustomContent;
const DeleteGroupResponse = models.DeleteGroupResponse;
const DescribeSdkAppIdUsersRequest = models.DescribeSdkAppIdUsersRequest;
const MessageItem = models.MessageItem;
const CreateSupervisorResponse = models.CreateSupervisorResponse;
const SceneItem = models.SceneItem;
const DeleteRoomRequest = models.DeleteRoomRequest;
const BatchCreateGroupWithMembersRequest = models.BatchCreateGroupWithMembersRequest;
const DescribeGroupRequest = models.DescribeGroupRequest;
const CreateSupervisorRequest = models.CreateSupervisorRequest;
const BackgroundPictureConfig = models.BackgroundPictureConfig;
const DescribeCurrentMemberListResponse = models.DescribeCurrentMemberListResponse;
const ModifyGroupResponse = models.ModifyGroupResponse;
const DescribeGroupListResponse = models.DescribeGroupListResponse;
const CreateRoomResponse = models.CreateRoomResponse;
const AddGroupMemberResponse = models.AddGroupMemberResponse;
const TextMarkConfig = models.TextMarkConfig;


/**
 * lcic client
 * @class
 */
class LcicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lcic.tencentcloudapi.com", "2022-08-17", credential, region, profile);
    }
    
    /**
     * 此接口用于添加成员列表到指定群组
     * @param {AddGroupMemberRequest} req
     * @param {function(string, AddGroupMemberResponse):void} cb
     * @public
     */
    AddGroupMember(req, cb) {
        let resp = new AddGroupMemberResponse();
        this.request("AddGroupMember", req, resp, cb);
    }

    /**
     * 获取房间历史消息(房间历史消息保存7天)
     * @param {GetRoomMessageRequest} req
     * @param {function(string, GetRoomMessageResponse):void} cb
     * @public
     */
    GetRoomMessage(req, cb) {
        let resp = new GetRoomMessageResponse();
        this.request("GetRoomMessage", req, resp, cb);
    }

    /**
     * 设置水印
     * @param {SetWatermarkRequest} req
     * @param {function(string, SetWatermarkResponse):void} cb
     * @public
     */
    SetWatermark(req, cb) {
        let resp = new SetWatermarkResponse();
        this.request("SetWatermark", req, resp, cb);
    }

    /**
     * 此接口获取指定房间下课件列表
     * @param {DescribeDocumentsByRoomRequest} req
     * @param {function(string, DescribeDocumentsByRoomResponse):void} cb
     * @public
     */
    DescribeDocumentsByRoom(req, cb) {
        let resp = new DescribeDocumentsByRoomResponse();
        this.request("DescribeDocumentsByRoom", req, resp, cb);
    }

    /**
     * 修改房间
     * @param {ModifyRoomRequest} req
     * @param {function(string, ModifyRoomResponse):void} cb
     * @public
     */
    ModifyRoom(req, cb) {
        let resp = new ModifyRoomResponse();
        this.request("ModifyRoom", req, resp, cb);
    }

    /**
     * 获取水印设置
     * @param {GetWatermarkRequest} req
     * @param {function(string, GetWatermarkResponse):void} cb
     * @public
     */
    GetWatermark(req, cb) {
        let resp = new GetWatermarkResponse();
        this.request("GetWatermark", req, resp, cb);
    }

    /**
     * 此接口用于获取群组详情
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * 修改应用
     * @param {ModifyAppRequest} req
     * @param {function(string, ModifyAppResponse):void} cb
     * @public
     */
    ModifyApp(req, cb) {
        let resp = new ModifyAppResponse();
        this.request("ModifyApp", req, resp, cb);
    }

    /**
     * 文档从房间解绑
     * @param {UnbindDocumentFromRoomRequest} req
     * @param {function(string, UnbindDocumentFromRoomResponse):void} cb
     * @public
     */
    UnbindDocumentFromRoom(req, cb) {
        let resp = new UnbindDocumentFromRoomResponse();
        this.request("UnbindDocumentFromRoom", req, resp, cb);
    }

    /**
     * 此接口用于获取指定应用ID下用户列表
     * @param {DescribeSdkAppIdUsersRequest} req
     * @param {function(string, DescribeSdkAppIdUsersResponse):void} cb
     * @public
     */
    DescribeSdkAppIdUsers(req, cb) {
        let resp = new DescribeSdkAppIdUsersResponse();
        this.request("DescribeSdkAppIdUsers", req, resp, cb);
    }

    /**
     * 此接口用于删除群组中指定成员
     * @param {DeleteGroupMemberRequest} req
     * @param {function(string, DeleteGroupMemberResponse):void} cb
     * @public
     */
    DeleteGroupMember(req, cb) {
        let resp = new DeleteGroupMemberResponse();
        this.request("DeleteGroupMember", req, resp, cb);
    }

    /**
     * 创建房间内可以使用的文档。
     * @param {CreateDocumentRequest} req
     * @param {function(string, CreateDocumentResponse):void} cb
     * @public
     */
    CreateDocument(req, cb) {
        let resp = new CreateDocumentResponse();
        this.request("CreateDocument", req, resp, cb);
    }

    /**
     * 此接口用于删除指定群组，支持批量操作。
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 获取用户信息
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * 此接口修改群组信息
     * @param {ModifyGroupRequest} req
     * @param {function(string, ModifyGroupResponse):void} cb
     * @public
     */
    ModifyGroup(req, cb) {
        let resp = new ModifyGroupResponse();
        this.request("ModifyGroup", req, resp, cb);
    }

    /**
     * 如果批量注册的用户已存在，则会被覆盖。一次最多注册1000个用户。默认请求频率限制：10次/秒
     * @param {BatchRegisterRequest} req
     * @param {function(string, BatchRegisterResponse):void} cb
     * @public
     */
    BatchRegister(req, cb) {
        let resp = new BatchRegisterResponse();
        this.request("BatchRegister", req, resp, cb);
    }

    /**
     * 此接口用于批量添加成员列表到指定群组
     * @param {BatchAddGroupMemberRequest} req
     * @param {function(string, BatchAddGroupMemberResponse):void} cb
     * @public
     */
    BatchAddGroupMember(req, cb) {
        let resp = new BatchAddGroupMemberResponse();
        this.request("BatchAddGroupMember", req, resp, cb);
    }

    /**
     * 此接口用于批量删除成员列表到指定群组列表
     * @param {BatchDeleteGroupMemberRequest} req
     * @param {function(string, BatchDeleteGroupMemberResponse):void} cb
     * @public
     */
    BatchDeleteGroupMember(req, cb) {
        let resp = new BatchDeleteGroupMemberResponse();
        this.request("BatchDeleteGroupMember", req, resp, cb);
    }

    /**
     * 获取房间信息
     * @param {DescribeRoomRequest} req
     * @param {function(string, DescribeRoomResponse):void} cb
     * @public
     */
    DescribeRoom(req, cb) {
        let resp = new DescribeRoomResponse();
        this.request("DescribeRoom", req, resp, cb);
    }

    /**
     * 删除指定房间的录制文件
     * @param {DeleteRecordRequest} req
     * @param {function(string, DeleteRecordResponse):void} cb
     * @public
     */
    DeleteRecord(req, cb) {
        let resp = new DeleteRecordResponse();
        this.request("DeleteRecord", req, resp, cb);
    }

    /**
     * 获取群组列表
     * @param {DescribeGroupListRequest} req
     * @param {function(string, DescribeGroupListResponse):void} cb
     * @public
     */
    DescribeGroupList(req, cb) {
        let resp = new DescribeGroupListResponse();
        this.request("DescribeGroupList", req, resp, cb);
    }

    /**
     * 此接口用于修改用户配置，如头像，昵称/用户名等。
     * @param {ModifyUserProfileRequest} req
     * @param {function(string, ModifyUserProfileResponse):void} cb
     * @public
     */
    ModifyUserProfile(req, cb) {
        let resp = new ModifyUserProfileResponse();
        this.request("ModifyUserProfile", req, resp, cb);
    }

    /**
     * 批量创建房间接口
     * @param {BatchCreateRoomRequest} req
     * @param {function(string, BatchCreateRoomResponse):void} cb
     * @public
     */
    BatchCreateRoom(req, cb) {
        let resp = new BatchCreateRoomResponse();
        this.request("BatchCreateRoom", req, resp, cb);
    }

    /**
     * 注册用户
     * @param {RegisterUserRequest} req
     * @param {function(string, RegisterUserResponse):void} cb
     * @public
     */
    RegisterUser(req, cb) {
        let resp = new RegisterUserResponse();
        this.request("RegisterUser", req, resp, cb);
    }

    /**
     * 获取房间统计信息，仅可在房间结束后调用。
     * @param {DescribeRoomStatisticsRequest} req
     * @param {function(string, DescribeRoomStatisticsResponse):void} cb
     * @public
     */
    DescribeRoomStatistics(req, cb) {
        let resp = new DescribeRoomStatisticsResponse();
        this.request("DescribeRoomStatistics", req, resp, cb);
    }

    /**
     * 绑定文档到房间
     * @param {BindDocumentToRoomRequest} req
     * @param {function(string, BindDocumentToRoomResponse):void} cb
     * @public
     */
    BindDocumentToRoom(req, cb) {
        let resp = new BindDocumentToRoomResponse();
        this.request("BindDocumentToRoom", req, resp, cb);
    }

    /**
     * 使用源账号登录，源账号为注册时填入的originId
     * @param {LoginOriginIdRequest} req
     * @param {function(string, LoginOriginIdResponse):void} cb
     * @public
     */
    LoginOriginId(req, cb) {
        let resp = new LoginOriginIdResponse();
        this.request("LoginOriginId", req, resp, cb);
    }

    /**
     * 登录
     * @param {LoginUserRequest} req
     * @param {function(string, LoginUserResponse):void} cb
     * @public
     */
    LoginUser(req, cb) {
        let resp = new LoginUserResponse();
        this.request("LoginUser", req, resp, cb);
    }

    /**
     * 此接口根据成员列表创建群组
     * @param {CreateGroupWithMembersRequest} req
     * @param {function(string, CreateGroupWithMembersResponse):void} cb
     * @public
     */
    CreateGroupWithMembers(req, cb) {
        let resp = new CreateGroupWithMembersResponse();
        this.request("CreateGroupWithMembers", req, resp, cb);
    }

    /**
     * 创建巡课
     * @param {CreateSupervisorRequest} req
     * @param {function(string, CreateSupervisorResponse):void} cb
     * @public
     */
    CreateSupervisor(req, cb) {
        let resp = new CreateSupervisorResponse();
        this.request("CreateSupervisor", req, resp, cb);
    }

    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     * @param {SetAppCustomContentRequest} req
     * @param {function(string, SetAppCustomContentResponse):void} cb
     * @public
     */
    SetAppCustomContent(req, cb) {
        let resp = new SetAppCustomContentResponse();
        this.request("SetAppCustomContent", req, resp, cb);
    }

    /**
     * 此接口用于获取群组成员列表
     * @param {DescribeGroupMemberListRequest} req
     * @param {function(string, DescribeGroupMemberListResponse):void} cb
     * @public
     */
    DescribeGroupMemberList(req, cb) {
        let resp = new DescribeGroupMemberListResponse();
        this.request("DescribeGroupMemberList", req, resp, cb);
    }

    /**
     * 获取当前房间的成员列表，房间结束或过期后无法使用。
     * @param {DescribeCurrentMemberListRequest} req
     * @param {function(string, DescribeCurrentMemberListResponse):void} cb
     * @public
     */
    DescribeCurrentMemberList(req, cb) {
        let resp = new DescribeCurrentMemberListResponse();
        this.request("DescribeCurrentMemberList", req, resp, cb);
    }

    /**
     * 获取应用详情
     * @param {DescribeAppDetailRequest} req
     * @param {function(string, DescribeAppDetailResponse):void} cb
     * @public
     */
    DescribeAppDetail(req, cb) {
        let resp = new DescribeAppDetailResponse();
        this.request("DescribeAppDetail", req, resp, cb);
    }

    /**
     * 删除文档
     * @param {DeleteDocumentRequest} req
     * @param {function(string, DeleteDocumentResponse):void} cb
     * @public
     */
    DeleteDocument(req, cb) {
        let resp = new DeleteDocumentResponse();
        this.request("DeleteDocument", req, resp, cb);
    }

    /**
     * 批量删除多个房间的录制文件
     * @param {BatchDeleteRecordRequest} req
     * @param {function(string, BatchDeleteRecordResponse):void} cb
     * @public
     */
    BatchDeleteRecord(req, cb) {
        let resp = new BatchDeleteRecordResponse();
        this.request("BatchDeleteRecord", req, resp, cb);
    }

    /**
     * 删除房间
     * @param {DeleteRoomRequest} req
     * @param {function(string, DeleteRoomResponse):void} cb
     * @public
     */
    DeleteRoom(req, cb) {
        let resp = new DeleteRoomResponse();
        this.request("DeleteRoom", req, resp, cb);
    }

    /**
     * 获取文档信息
     * @param {DescribeDocumentRequest} req
     * @param {function(string, DescribeDocumentResponse):void} cb
     * @public
     */
    DescribeDocument(req, cb) {
        let resp = new DescribeDocumentResponse();
        this.request("DescribeDocument", req, resp, cb);
    }

    /**
     * 此接口会聚合子群组创建联合群组
     * @param {CreateGroupWithSubGroupRequest} req
     * @param {function(string, CreateGroupWithSubGroupResponse):void} cb
     * @public
     */
    CreateGroupWithSubGroup(req, cb) {
        let resp = new CreateGroupWithSubGroupResponse();
        this.request("CreateGroupWithSubGroup", req, resp, cb);
    }

    /**
     * 此接口用于批量创建群组
     * @param {BatchCreateGroupWithMembersRequest} req
     * @param {function(string, BatchCreateGroupWithMembersResponse):void} cb
     * @public
     */
    BatchCreateGroupWithMembers(req, cb) {
        let resp = new BatchCreateGroupWithMembersResponse();
        this.request("BatchCreateGroupWithMembers", req, resp, cb);
    }

    /**
     * 创建房间
     * @param {CreateRoomRequest} req
     * @param {function(string, CreateRoomResponse):void} cb
     * @public
     */
    CreateRoom(req, cb) {
        let resp = new CreateRoomResponse();
        this.request("CreateRoom", req, resp, cb);
    }


}
module.exports = LcicClient;
