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
  BatchCreateRoomResponse,
  SetAppCustomContentRequest,
  RoomInfo,
  SetWatermarkResponse,
  ModifyRoomResponse,
  UnbindDocumentFromRoomResponse,
  DescribeUserRequest,
  ModifyRoomRequest,
  CreateDocumentResponse,
  DescribeAppDetailResponse,
  BindDocumentToRoomRequest,
  CreateDocumentRequest,
  DescribeDocumentsByRoomResponse,
  BatchUserInfo,
  SetAppCustomContentResponse,
  LoginOriginIdResponse,
  BatchUserRequest,
  BatchDeleteRecordRequest,
  LoginUserResponse,
  DescribeAppDetailRequest,
  ModifyAppResponse,
  BatchRegisterRequest,
  DescribeRoomResponse,
  DeleteRoomResponse,
  ModifyUserProfileRequest,
  DescribeDocumentsByRoomRequest,
  DescribeCurrentMemberListRequest,
  DescribeSdkAppIdUsersResponse,
  GetWatermarkResponse,
  DeleteDocumentResponse,
  DeleteRecordRequest,
  AppCustomContent,
  DescribeRoomStatisticsResponse,
  DeleteDocumentRequest,
  DescribeSdkAppIdUsersRequest,
  DescribeUserResponse,
  DescribeDocumentResponse,
  ModifyUserProfileResponse,
  TextMarkConfig,
  GetWatermarkRequest,
  CreateSupervisorResponse,
  SceneItem,
  DeleteRoomRequest,
  RegisterUserResponse,
  WatermarkConfig,
  DescribeRoomStatisticsRequest,
  DocumentInfo,
  MemberRecord,
  ModifyAppRequest,
  CreateSupervisorRequest,
  BackgroundPictureConfig,
  UnbindDocumentFromRoomRequest,
  LoginOriginIdRequest,
  AppConfig,
  BatchRegisterResponse,
  DescribeCurrentMemberListResponse,
  LoginUserRequest,
  BatchCreateRoomRequest,
  BindDocumentToRoomResponse,
  UserInfo,
  SetWatermarkRequest,
  CreateRoomResponse,
  DeleteRecordResponse,
  DescribeRoomRequest,
  DescribeDocumentRequest,
  RegisterUserRequest,
  BatchDeleteRecordResponse,
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
   * 设置水印
   */
  async SetWatermark(
    req: SetWatermarkRequest,
    cb?: (error: string, rep: SetWatermarkResponse) => void
  ): Promise<SetWatermarkResponse> {
    return this.request("SetWatermark", req, cb)
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
   * 获取水印设置
   */
  async GetWatermark(
    req: GetWatermarkRequest,
    cb?: (error: string, rep: GetWatermarkResponse) => void
  ): Promise<GetWatermarkResponse> {
    return this.request("GetWatermark", req, cb)
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
   * 创建房间内可以使用的文档。
   */
  async CreateDocument(
    req: CreateDocumentRequest,
    cb?: (error: string, rep: CreateDocumentResponse) => void
  ): Promise<CreateDocumentResponse> {
    return this.request("CreateDocument", req, cb)
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
   * 获取用户信息
   */
  async DescribeUser(
    req: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
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
   * 此接口用于修改用户配置，如头像，昵称/用户名等。
   */
  async ModifyUserProfile(
    req: ModifyUserProfileRequest,
    cb?: (error: string, rep: ModifyUserProfileResponse) => void
  ): Promise<ModifyUserProfileResponse> {
    return this.request("ModifyUserProfile", req, cb)
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
   * 批量创建房间接口
   */
  async BatchCreateRoom(
    req: BatchCreateRoomRequest,
    cb?: (error: string, rep: BatchCreateRoomResponse) => void
  ): Promise<BatchCreateRoomResponse> {
    return this.request("BatchCreateRoom", req, cb)
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
   * 创建巡课
   */
  async CreateSupervisor(
    req?: CreateSupervisorRequest,
    cb?: (error: string, rep: CreateSupervisorResponse) => void
  ): Promise<CreateSupervisorResponse> {
    return this.request("CreateSupervisor", req, cb)
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
   * 获取当前房间的成员列表，房间结束或过期后无法使用。
   */
  async DescribeCurrentMemberList(
    req: DescribeCurrentMemberListRequest,
    cb?: (error: string, rep: DescribeCurrentMemberListResponse) => void
  ): Promise<DescribeCurrentMemberListResponse> {
    return this.request("DescribeCurrentMemberList", req, cb)
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
   * 创建房间
   */
  async CreateRoom(
    req: CreateRoomRequest,
    cb?: (error: string, rep: CreateRoomResponse) => void
  ): Promise<CreateRoomResponse> {
    return this.request("CreateRoom", req, cb)
  }
}
