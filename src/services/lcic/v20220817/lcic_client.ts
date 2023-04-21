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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CreateRoomRequest,
  DescribeQuestionListRequest,
  ModifyRoomResponse,
  DescribeAppDetailResponse,
  DeleteSupervisorRequest,
  DescribeSupervisorsResponse,
  BatchDeleteRecordRequest,
  ModifyAppResponse,
  BatchRegisterRequest,
  DeleteRoomResponse,
  ModifyUserProfileRequest,
  CreateGroupWithMembersRequest,
  DescribeDocumentsByRoomRequest,
  BatchCreateGroupWithMembersResponse,
  GetRoomEventResponse,
  BatchCreateRoomResponse,
  MemberRecord,
  DeleteAppCustomContentRequest,
  BatchAddGroupMemberResponse,
  ModifyUserProfileResponse,
  GetWatermarkResponse,
  LoginOriginIdRequest,
  BatchRegisterResponse,
  BindDocumentToRoomResponse,
  CreateGroupWithSubGroupRequest,
  RoomItem,
  SetWatermarkRequest,
  DescribeRoomRequest,
  BatchDescribeDocumentRequest,
  EndRoomRequest,
  UnbindDocumentFromRoomResponse,
  CreateDocumentResponse,
  DescribeGroupResponse,
  SetAppCustomContentResponse,
  BatchUserRequest,
  LoginUserResponse,
  ModifyGroupRequest,
  DescribeAppDetailRequest,
  DeleteGroupRequest,
  StartRoomRequest,
  AddGroupMemberRequest,
  DescribeGroupListRequest,
  GetRoomMessageRequest,
  DescribeDocumentsResponse,
  DocumentInfo,
  DeleteDocumentResponse,
  DeleteRecordRequest,
  BatchDeleteGroupMemberResponse,
  CreateGroupWithSubGroupResponse,
  DescribeDocumentsRequest,
  MessageItem,
  GroupInfo,
  GetRoomEventRequest,
  DescribeDocumentResponse,
  DeleteGroupMemberResponse,
  DescribeGroupMemberListResponse,
  EventInfo,
  AppConfig,
  DeleteRecordResponse,
  DescribeAnswerListRequest,
  BatchCreateRoomRequest,
  DescribeGroupMemberListRequest,
  UserInfo,
  DescribeUserResponse,
  DescribeDocumentRequest,
  BatchDeleteRecordResponse,
  WatermarkConfig,
  SetAppCustomContentRequest,
  DescribeUserRequest,
  RegisterUserResponse,
  StartRoomResponse,
  BindDocumentToRoomRequest,
  CreateDocumentRequest,
  GetRoomMessageResponse,
  BatchUserInfo,
  BatchAddGroupMemberRequest,
  DescribeRoomResponse,
  DescribeCurrentMemberListRequest,
  DescribeSdkAppIdUsersResponse,
  EventDataInfo,
  DescribeAnswerListResponse,
  DescribeRoomStatisticsResponse,
  DeleteDocumentRequest,
  DescribeSupervisorsRequest,
  MessageList,
  DeleteGroupMemberRequest,
  EndRoomResponse,
  GetWatermarkRequest,
  CreateGroupWithMembersResponse,
  BatchDeleteGroupMemberRequest,
  ModifyAppRequest,
  UnbindDocumentFromRoomRequest,
  RegisterUserRequest,
  GroupBaseInfo,
  LoginUserRequest,
  AnswerStat,
  DeleteSupervisorResponse,
  SetWatermarkResponse,
  RoomInfo,
  ModifyRoomRequest,
  AnswerInfo,
  DescribeRoomStatisticsRequest,
  DescribeDocumentsByRoomResponse,
  LoginOriginIdResponse,
  DescribeQuestionListResponse,
  GetRoomsResponse,
  QuestionInfo,
  GetRoomsRequest,
  DescribeDeveloperRequest,
  AppCustomContent,
  BatchDescribeDocumentResponse,
  DeleteGroupResponse,
  DescribeSdkAppIdUsersRequest,
  AddGroupMemberResponse,
  CreateSupervisorResponse,
  SceneItem,
  DeleteRoomRequest,
  BatchCreateGroupWithMembersRequest,
  DescribeGroupRequest,
  CreateSupervisorRequest,
  BackgroundPictureConfig,
  DeleteAppCustomContentResponse,
  DescribeCurrentMemberListResponse,
  ModifyGroupResponse,
  DescribeGroupListResponse,
  CreateRoomResponse,
  DescribeDeveloperResponse,
  TextMarkConfig,
} from "./lcic_models"

/**
 * lcic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lcic.tencentcloudapi.com", "2022-08-17", clientConfig)
  }

  /**
   * 获取应用详情
   */
  async DescribeAppDetail(
    req: DescribeAppDetailRequest,
    cb?: (error: string, rep: DescribeAppDetailResponse) => void
  ): Promise<DescribeAppDetailResponse> {
    return this.request("DescribeAppDetail", req, cb)
  }

  /**
   * 获取房间历史消息(房间历史消息保存7天)
   */
  async GetRoomMessage(
    req: GetRoomMessageRequest,
    cb?: (error: string, rep: GetRoomMessageResponse) => void
  ): Promise<GetRoomMessageResponse> {
    return this.request("GetRoomMessage", req, cb)
  }

  /**
     * 有新接口替换

批量获取文档信息（已废弃，替代接口BatchDescribeDocument）
     */
  async DescribeDocuments(
    req: DescribeDocumentsRequest,
    cb?: (error: string, rep: DescribeDocumentsResponse) => void
  ): Promise<DescribeDocumentsResponse> {
    return this.request("DescribeDocuments", req, cb)
  }

  /**
   * 此接口获取指定房间下课件列表
   */
  async DescribeDocumentsByRoom(
    req: DescribeDocumentsByRoomRequest,
    cb?: (error: string, rep: DescribeDocumentsByRoomResponse) => void
  ): Promise<DescribeDocumentsByRoomResponse> {
    return this.request("DescribeDocumentsByRoom", req, cb)
  }

  /**
   * 修改房间
   */
  async ModifyRoom(
    req: ModifyRoomRequest,
    cb?: (error: string, rep: ModifyRoomResponse) => void
  ): Promise<ModifyRoomResponse> {
    return this.request("ModifyRoom", req, cb)
  }

  /**
   * 删除设置自定义元素。如果参数scenes为空则删除所有自定义元素，否则删除指定的scene自定义元素。
   */
  async DeleteAppCustomContent(
    req: DeleteAppCustomContentRequest,
    cb?: (error: string, rep: DeleteAppCustomContentResponse) => void
  ): Promise<DeleteAppCustomContentResponse> {
    return this.request("DeleteAppCustomContent", req, cb)
  }

  /**
   * 设置水印
   */
  async SetWatermark(
    req: SetWatermarkRequest,
    cb?: (error: string, rep: SetWatermarkResponse) => void
  ): Promise<SetWatermarkResponse> {
    return this.request("SetWatermark", req, cb)
  }

  /**
   * 此接口用于修改用户配置，如头像，昵称/用户名等。
   */
  async ModifyUserProfile(
    req: ModifyUserProfileRequest,
    cb?: (error: string, rep: ModifyUserProfileResponse) => void
  ): Promise<ModifyUserProfileResponse> {
    return this.request("ModifyUserProfile", req, cb)
  }

  /**
   * 获取水印设置
   */
  async GetWatermark(
    req: GetWatermarkRequest,
    cb?: (error: string, rep: GetWatermarkResponse) => void
  ): Promise<GetWatermarkResponse> {
    return this.request("GetWatermark", req, cb)
  }

  /**
   * 此接口用于获取群组详情
   */
  async DescribeGroup(
    req: DescribeGroupRequest,
    cb?: (error: string, rep: DescribeGroupResponse) => void
  ): Promise<DescribeGroupResponse> {
    return this.request("DescribeGroup", req, cb)
  }

  /**
   * 修改应用
   */
  async ModifyApp(
    req: ModifyAppRequest,
    cb?: (error: string, rep: ModifyAppResponse) => void
  ): Promise<ModifyAppResponse> {
    return this.request("ModifyApp", req, cb)
  }

  /**
   * 文档从房间解绑
   */
  async UnbindDocumentFromRoom(
    req: UnbindDocumentFromRoomRequest,
    cb?: (error: string, rep: UnbindDocumentFromRoomResponse) => void
  ): Promise<UnbindDocumentFromRoomResponse> {
    return this.request("UnbindDocumentFromRoom", req, cb)
  }

  /**
   * 此接口用于获取指定应用ID下用户列表
   */
  async DescribeSdkAppIdUsers(
    req: DescribeSdkAppIdUsersRequest,
    cb?: (error: string, rep: DescribeSdkAppIdUsersResponse) => void
  ): Promise<DescribeSdkAppIdUsersResponse> {
    return this.request("DescribeSdkAppIdUsers", req, cb)
  }

  /**
   * 开始房间的直播。 说明：开始房间接口调用之前需要有用户进入课堂初始化课堂信息。
   */
  async StartRoom(
    req: StartRoomRequest,
    cb?: (error: string, rep: StartRoomResponse) => void
  ): Promise<StartRoomResponse> {
    return this.request("StartRoom", req, cb)
  }

  /**
   * 此接口用于删除群组中指定成员
   */
  async DeleteGroupMember(
    req: DeleteGroupMemberRequest,
    cb?: (error: string, rep: DeleteGroupMemberResponse) => void
  ): Promise<DeleteGroupMemberResponse> {
    return this.request("DeleteGroupMember", req, cb)
  }

  /**
   * 创建房间内可以使用的文档。
   */
  async CreateDocument(
    req: CreateDocumentRequest,
    cb?: (error: string, rep: CreateDocumentResponse) => void
  ): Promise<CreateDocumentResponse> {
    return this.request("CreateDocument", req, cb)
  }

  /**
   * 获取巡课列表
   */
  async DescribeSupervisors(
    req: DescribeSupervisorsRequest,
    cb?: (error: string, rep: DescribeSupervisorsResponse) => void
  ): Promise<DescribeSupervisorsResponse> {
    return this.request("DescribeSupervisors", req, cb)
  }

  /**
   * 此接口用于删除指定群组，支持批量操作。
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
   * 获取用户信息
   */
  async DescribeUser(
    req: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
  }

  /**
   * 此接口用于获取群组成员列表
   */
  async DescribeGroupMemberList(
    req: DescribeGroupMemberListRequest,
    cb?: (error: string, rep: DescribeGroupMemberListResponse) => void
  ): Promise<DescribeGroupMemberListResponse> {
    return this.request("DescribeGroupMemberList", req, cb)
  }

  /**
   * 此接口修改群组信息
   */
  async ModifyGroup(
    req: ModifyGroupRequest,
    cb?: (error: string, rep: ModifyGroupResponse) => void
  ): Promise<ModifyGroupResponse> {
    return this.request("ModifyGroup", req, cb)
  }

  /**
   * 如果批量注册的用户已存在，则会被覆盖。一次最多注册1000个用户。默认请求频率限制：10次/秒
   */
  async BatchRegister(
    req: BatchRegisterRequest,
    cb?: (error: string, rep: BatchRegisterResponse) => void
  ): Promise<BatchRegisterResponse> {
    return this.request("BatchRegister", req, cb)
  }

  /**
   * 删除巡课
   */
  async DeleteSupervisor(
    req: DeleteSupervisorRequest,
    cb?: (error: string, rep: DeleteSupervisorResponse) => void
  ): Promise<DeleteSupervisorResponse> {
    return this.request("DeleteSupervisor", req, cb)
  }

  /**
   * 此接口用于批量删除成员列表到指定群组列表
   */
  async BatchDeleteGroupMember(
    req: BatchDeleteGroupMemberRequest,
    cb?: (error: string, rep: BatchDeleteGroupMemberResponse) => void
  ): Promise<BatchDeleteGroupMemberResponse> {
    return this.request("BatchDeleteGroupMember", req, cb)
  }

  /**
   * 获取房间事件,仅在课堂结束1小时内有效。
   */
  async GetRoomEvent(
    req: GetRoomEventRequest,
    cb?: (error: string, rep: GetRoomEventResponse) => void
  ): Promise<GetRoomEventResponse> {
    return this.request("GetRoomEvent", req, cb)
  }

  /**
   * 获取房间信息
   */
  async DescribeRoom(
    req: DescribeRoomRequest,
    cb?: (error: string, rep: DescribeRoomResponse) => void
  ): Promise<DescribeRoomResponse> {
    return this.request("DescribeRoom", req, cb)
  }

  /**
   * 删除指定房间的录制文件
   */
  async DeleteRecord(
    req: DeleteRecordRequest,
    cb?: (error: string, rep: DeleteRecordResponse) => void
  ): Promise<DeleteRecordResponse> {
    return this.request("DeleteRecord", req, cb)
  }

  /**
   * 获取群组列表
   */
  async DescribeGroupList(
    req: DescribeGroupListRequest,
    cb?: (error: string, rep: DescribeGroupListResponse) => void
  ): Promise<DescribeGroupListResponse> {
    return this.request("DescribeGroupList", req, cb)
  }

  /**
   * 此接口用于批量添加成员列表到指定群组
   */
  async BatchAddGroupMember(
    req: BatchAddGroupMemberRequest,
    cb?: (error: string, rep: BatchAddGroupMemberResponse) => void
  ): Promise<BatchAddGroupMemberResponse> {
    return this.request("BatchAddGroupMember", req, cb)
  }

  /**
   * 此接口用于添加成员列表到指定群组
   */
  async AddGroupMember(
    req: AddGroupMemberRequest,
    cb?: (error: string, rep: AddGroupMemberResponse) => void
  ): Promise<AddGroupMemberResponse> {
    return this.request("AddGroupMember", req, cb)
  }

  /**
   * 注册用户
   */
  async RegisterUser(
    req: RegisterUserRequest,
    cb?: (error: string, rep: RegisterUserResponse) => void
  ): Promise<RegisterUserResponse> {
    return this.request("RegisterUser", req, cb)
  }

  /**
   * 获取房间统计信息，仅可在房间结束后调用。
   */
  async DescribeRoomStatistics(
    req: DescribeRoomStatisticsRequest,
    cb?: (error: string, rep: DescribeRoomStatisticsResponse) => void
  ): Promise<DescribeRoomStatisticsResponse> {
    return this.request("DescribeRoomStatistics", req, cb)
  }

  /**
   * 绑定文档到房间
   */
  async BindDocumentToRoom(
    req: BindDocumentToRoomRequest,
    cb?: (error: string, rep: BindDocumentToRoomResponse) => void
  ): Promise<BindDocumentToRoomResponse> {
    return this.request("BindDocumentToRoom", req, cb)
  }

  /**
   * 使用源账号登录，源账号为注册时填入的originId
   */
  async LoginOriginId(
    req: LoginOriginIdRequest,
    cb?: (error: string, rep: LoginOriginIdResponse) => void
  ): Promise<LoginOriginIdResponse> {
    return this.request("LoginOriginId", req, cb)
  }

  /**
   * 登录
   */
  async LoginUser(
    req: LoginUserRequest,
    cb?: (error: string, rep: LoginUserResponse) => void
  ): Promise<LoginUserResponse> {
    return this.request("LoginUser", req, cb)
  }

  /**
   * 此接口根据成员列表创建群组
   */
  async CreateGroupWithMembers(
    req: CreateGroupWithMembersRequest,
    cb?: (error: string, rep: CreateGroupWithMembersResponse) => void
  ): Promise<CreateGroupWithMembersResponse> {
    return this.request("CreateGroupWithMembers", req, cb)
  }

  /**
   * 服务商信息获取
   */
  async DescribeDeveloper(
    req?: DescribeDeveloperRequest,
    cb?: (error: string, rep: DescribeDeveloperResponse) => void
  ): Promise<DescribeDeveloperResponse> {
    return this.request("DescribeDeveloper", req, cb)
  }

  /**
   * 创建巡课
   */
  async CreateSupervisor(
    req: CreateSupervisorRequest,
    cb?: (error: string, rep: CreateSupervisorResponse) => void
  ): Promise<CreateSupervisorResponse> {
    return this.request("CreateSupervisor", req, cb)
  }

  /**
   * 获取房间提问列表
   */
  async DescribeQuestionList(
    req: DescribeQuestionListRequest,
    cb?: (error: string, rep: DescribeQuestionListResponse) => void
  ): Promise<DescribeQuestionListResponse> {
    return this.request("DescribeQuestionList", req, cb)
  }

  /**
   * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
   */
  async SetAppCustomContent(
    req: SetAppCustomContentRequest,
    cb?: (error: string, rep: SetAppCustomContentResponse) => void
  ): Promise<SetAppCustomContentResponse> {
    return this.request("SetAppCustomContent", req, cb)
  }

  /**
   * 批量获取文档详情
   */
  async BatchDescribeDocument(
    req: BatchDescribeDocumentRequest,
    cb?: (error: string, rep: BatchDescribeDocumentResponse) => void
  ): Promise<BatchDescribeDocumentResponse> {
    return this.request("BatchDescribeDocument", req, cb)
  }

  /**
   * 获取当前房间的成员列表，房间结束或过期后无法使用。
   */
  async DescribeCurrentMemberList(
    req: DescribeCurrentMemberListRequest,
    cb?: (error: string, rep: DescribeCurrentMemberListResponse) => void
  ): Promise<DescribeCurrentMemberListResponse> {
    return this.request("DescribeCurrentMemberList", req, cb)
  }

  /**
   * 批量创建房间接口
   */
  async BatchCreateRoom(
    req: BatchCreateRoomRequest,
    cb?: (error: string, rep: BatchCreateRoomResponse) => void
  ): Promise<BatchCreateRoomResponse> {
    return this.request("BatchCreateRoom", req, cb)
  }

  /**
   * 获取房间答题详情
   */
  async DescribeAnswerList(
    req: DescribeAnswerListRequest,
    cb?: (error: string, rep: DescribeAnswerListResponse) => void
  ): Promise<DescribeAnswerListResponse> {
    return this.request("DescribeAnswerList", req, cb)
  }

  /**
   * 删除文档
   */
  async DeleteDocument(
    req: DeleteDocumentRequest,
    cb?: (error: string, rep: DeleteDocumentResponse) => void
  ): Promise<DeleteDocumentResponse> {
    return this.request("DeleteDocument", req, cb)
  }

  /**
   * 批量删除多个房间的录制文件
   */
  async BatchDeleteRecord(
    req: BatchDeleteRecordRequest,
    cb?: (error: string, rep: BatchDeleteRecordResponse) => void
  ): Promise<BatchDeleteRecordResponse> {
    return this.request("BatchDeleteRecord", req, cb)
  }

  /**
   * 结束房间的直播
   */
  async EndRoom(
    req: EndRoomRequest,
    cb?: (error: string, rep: EndRoomResponse) => void
  ): Promise<EndRoomResponse> {
    return this.request("EndRoom", req, cb)
  }

  /**
   * 获取房间列表
   */
  async GetRooms(
    req: GetRoomsRequest,
    cb?: (error: string, rep: GetRoomsResponse) => void
  ): Promise<GetRoomsResponse> {
    return this.request("GetRooms", req, cb)
  }

  /**
   * 删除房间
   */
  async DeleteRoom(
    req: DeleteRoomRequest,
    cb?: (error: string, rep: DeleteRoomResponse) => void
  ): Promise<DeleteRoomResponse> {
    return this.request("DeleteRoom", req, cb)
  }

  /**
   * 获取文档信息
   */
  async DescribeDocument(
    req: DescribeDocumentRequest,
    cb?: (error: string, rep: DescribeDocumentResponse) => void
  ): Promise<DescribeDocumentResponse> {
    return this.request("DescribeDocument", req, cb)
  }

  /**
   * 此接口会聚合子群组创建联合群组
   */
  async CreateGroupWithSubGroup(
    req: CreateGroupWithSubGroupRequest,
    cb?: (error: string, rep: CreateGroupWithSubGroupResponse) => void
  ): Promise<CreateGroupWithSubGroupResponse> {
    return this.request("CreateGroupWithSubGroup", req, cb)
  }

  /**
   * 此接口用于批量创建群组
   */
  async BatchCreateGroupWithMembers(
    req: BatchCreateGroupWithMembersRequest,
    cb?: (error: string, rep: BatchCreateGroupWithMembersResponse) => void
  ): Promise<BatchCreateGroupWithMembersResponse> {
    return this.request("BatchCreateGroupWithMembers", req, cb)
  }

  /**
   * 创建房间
   */
  async CreateRoom(
    req: CreateRoomRequest,
    cb?: (error: string, rep: CreateRoomResponse) => void
  ): Promise<CreateRoomResponse> {
    return this.request("CreateRoom", req, cb)
  }
}
