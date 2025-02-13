import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, DescribeQuestionListRequest, ModifyRoomResponse, DescribeAppDetailResponse, DeleteSupervisorRequest, DeleteUserRequest, DescribeSupervisorsResponse, DeleteUserResponse, BatchDeleteRecordRequest, ModifyAppResponse, UnblockKickedUserResponse, BatchRegisterRequest, StartRecordRequest, DeleteRoomResponse, ModifyUserProfileRequest, CreateGroupWithMembersRequest, DescribeDocumentsByRoomRequest, BatchCreateGroupWithMembersResponse, GetRoomEventResponse, DeleteAppCustomContentRequest, SendRoomNotificationMessageResponse, BatchAddGroupMemberResponse, ModifyUserProfileResponse, GetWatermarkResponse, LoginOriginIdRequest, BatchRegisterResponse, BindDocumentToRoomResponse, StopRecordResponse, CreateGroupWithSubGroupRequest, DescribeRoomRequest, BatchDescribeDocumentRequest, RegisterUserRequest, BatchCreateRoomResponse, StartRecordResponse, UnbindDocumentFromRoomResponse, CreateDocumentResponse, DescribeMarqueeRequest, DescribeGroupResponse, SetAppCustomContentResponse, UnblockKickedUserRequest, LoginUserResponse, ModifyGroupRequest, DescribeAppDetailRequest, KickUserFromRoomResponse, DeleteGroupRequest, StartRoomRequest, AddGroupMemberRequest, DescribeGroupListRequest, GetRoomMessageRequest, DescribeDocumentsResponse, DescribeRecordRequest, DeleteDocumentResponse, DeleteRecordRequest, BatchDeleteGroupMemberResponse, CreateGroupWithSubGroupResponse, DescribeDocumentsRequest, GetRoomEventRequest, DescribeRecordResponse, DescribeDocumentResponse, DeleteGroupMemberResponse, DescribeGroupMemberListResponse, SetMarqueeRequest, ForbidSendMsgRequest, DescribeRoomForbiddenUserRequest, DescribeScoreListRequest, DescribeRecordStreamRequest, DeleteRecordResponse, DescribeAnswerListRequest, BatchCreateRoomRequest, DescribeGroupMemberListRequest, DescribeRoomForbiddenUserResponse, DescribeUserResponse, DescribeScoreListResponse, DescribeDocumentRequest, BatchDeleteRecordResponse, SetAppCustomContentRequest, DescribeUserRequest, RegisterUserResponse, StartRoomResponse, BindDocumentToRoomRequest, CreateDocumentRequest, GetRoomMessageResponse, BatchAddGroupMemberRequest, DescribeRoomResponse, DescribeRecordStreamResponse, DescribeCurrentMemberListRequest, SendRoomNotificationMessageRequest, DescribeSdkAppIdUsersResponse, DescribeAnswerListResponse, DescribeRoomStatisticsResponse, DeleteDocumentRequest, DescribeRecordTaskResponse, DescribeSupervisorsRequest, DescribeGroupRequest, EndRoomResponse, GetWatermarkRequest, EndRoomRequest, CreateGroupWithMembersResponse, BatchDeleteGroupMemberRequest, ModifyAppRequest, UnbindDocumentFromRoomRequest, LoginUserRequest, StopRecordRequest, SendRoomNormalMessageResponse, DeleteSupervisorResponse, SetWatermarkResponse, DescribeMarqueeResponse, DescribeRoomStatisticsRequest, DescribeDocumentsByRoomResponse, LoginOriginIdResponse, DescribeQuestionListResponse, GetRoomsResponse, SetMarqueeResponse, KickUserFromRoomRequest, SetWatermarkRequest, GetRoomsRequest, ForbidSendMsgResponse, SendRoomNormalMessageRequest, DescribeRecordTaskRequest, DescribeDeveloperRequest, BatchDescribeDocumentResponse, DeleteGroupResponse, CreateRoomResponse, DescribeSdkAppIdUsersRequest, AddGroupMemberResponse, CreateSupervisorResponse, DeleteRoomRequest, BatchCreateGroupWithMembersRequest, DeleteGroupMemberRequest, CreateSupervisorRequest, DeleteAppCustomContentResponse, DescribeCurrentMemberListResponse, ModifyGroupResponse, DescribeGroupListResponse, ModifyRoomRequest, DescribeDeveloperResponse } from "./lcic_models";
/**
 * lcic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取应用详情
     */
    DescribeAppDetail(req: DescribeAppDetailRequest, cb?: (error: string, rep: DescribeAppDetailResponse) => void): Promise<DescribeAppDetailResponse>;
    /**
     * 根据房间ID获取群组中被禁言的用户列表。
     */
    DescribeRoomForbiddenUser(req: DescribeRoomForbiddenUserRequest, cb?: (error: string, rep: DescribeRoomForbiddenUserResponse) => void): Promise<DescribeRoomForbiddenUserResponse>;
    /**
     * 获取房间统计信息，仅可在房间结束后调用。
     */
    DescribeRoomStatistics(req: DescribeRoomStatisticsRequest, cb?: (error: string, rep: DescribeRoomStatisticsResponse) => void): Promise<DescribeRoomStatisticsResponse>;
    /**
     * App 管理员可以通过该接口在群组中发送通知、公告等。目前仅支持文本消息。
     */
    SendRoomNotificationMessage(req: SendRoomNotificationMessageRequest, cb?: (error: string, rep: SendRoomNotificationMessageResponse) => void): Promise<SendRoomNotificationMessageResponse>;
    /**
     * 录制流查询
     */
    DescribeRecordStream(req: DescribeRecordStreamRequest, cb?: (error: string, rep: DescribeRecordStreamResponse) => void): Promise<DescribeRecordStreamResponse>;
    /**
     * 有新接口替换

批量获取文档信息（已废弃，替代接口BatchDescribeDocument）
     */
    DescribeDocuments(req: DescribeDocumentsRequest, cb?: (error: string, rep: DescribeDocumentsResponse) => void): Promise<DescribeDocumentsResponse>;
    /**
     * 此接口获取指定房间下课件列表
     */
    DescribeDocumentsByRoom(req: DescribeDocumentsByRoomRequest, cb?: (error: string, rep: DescribeDocumentsByRoomResponse) => void): Promise<DescribeDocumentsByRoomResponse>;
    /**
     * 修改房间
     */
    ModifyRoom(req: ModifyRoomRequest, cb?: (error: string, rep: ModifyRoomResponse) => void): Promise<ModifyRoomResponse>;
    /**
     * 删除设置自定义元素。如果参数scenes为空则删除所有自定义元素，否则删除指定的scene自定义元素。
     */
    DeleteAppCustomContent(req: DeleteAppCustomContentRequest, cb?: (error: string, rep: DeleteAppCustomContentResponse) => void): Promise<DeleteAppCustomContentResponse>;
    /**
     * 获取房间历史消息(房间历史消息保存7天)
     */
    GetRoomMessage(req: GetRoomMessageRequest, cb?: (error: string, rep: GetRoomMessageResponse) => void): Promise<GetRoomMessageResponse>;
    /**
     * 设置水印
     */
    SetWatermark(req: SetWatermarkRequest, cb?: (error: string, rep: SetWatermarkResponse) => void): Promise<SetWatermarkResponse>;
    /**
     * 此接口用于修改用户信息，例如头像、昵称（用户名）等。注意，课中的用户信息不会立即同步修改，需待下次上课时，修改后的信息才会更新显示。
     */
    ModifyUserProfile(req: ModifyUserProfileRequest, cb?: (error: string, rep: ModifyUserProfileResponse) => void): Promise<ModifyUserProfileResponse>;
    /**
     * 获取水印设置
     */
    GetWatermark(req: GetWatermarkRequest, cb?: (error: string, rep: GetWatermarkResponse) => void): Promise<GetWatermarkResponse>;
    /**
     * 此接口用于获取群组详情
     */
    DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse>;
    /**
     * 修改应用
     */
    ModifyApp(req: ModifyAppRequest, cb?: (error: string, rep: ModifyAppResponse) => void): Promise<ModifyAppResponse>;
    /**
     * 文档从房间解绑
     */
    UnbindDocumentFromRoom(req: UnbindDocumentFromRoomRequest, cb?: (error: string, rep: UnbindDocumentFromRoomResponse) => void): Promise<UnbindDocumentFromRoomResponse>;
    /**
     * 此接口用于获取指定应用ID下用户列表
     */
    DescribeSdkAppIdUsers(req: DescribeSdkAppIdUsersRequest, cb?: (error: string, rep: DescribeSdkAppIdUsersResponse) => void): Promise<DescribeSdkAppIdUsersResponse>;
    /**
     * 开始房间的直播。 说明：开始房间接口调用之前需要有用户进入课堂初始化课堂信息。
     */
    StartRoom(req: StartRoomRequest, cb?: (error: string, rep: StartRoomResponse) => void): Promise<StartRoomResponse>;
    /**
     * 此接口用于删除群组中指定成员
     */
    DeleteGroupMember(req: DeleteGroupMemberRequest, cb?: (error: string, rep: DeleteGroupMemberResponse) => void): Promise<DeleteGroupMemberResponse>;
    /**
     * 解禁从房间里面踢出的用户
     */
    UnblockKickedUser(req: UnblockKickedUserRequest, cb?: (error: string, rep: UnblockKickedUserResponse) => void): Promise<UnblockKickedUserResponse>;
    /**
     * 创建房间内可以使用的文档。
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 获取巡课列表
     */
    DescribeSupervisors(req: DescribeSupervisorsRequest, cb?: (error: string, rep: DescribeSupervisorsResponse) => void): Promise<DescribeSupervisorsResponse>;
    /**
     * 此接口用于删除指定群组，支持批量操作。
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 获取用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 此接口用于获取群组成员列表
     */
    DescribeGroupMemberList(req: DescribeGroupMemberListRequest, cb?: (error: string, rep: DescribeGroupMemberListResponse) => void): Promise<DescribeGroupMemberListResponse>;
    /**
     * 此接口修改群组信息
     */
    ModifyGroup(req: ModifyGroupRequest, cb?: (error: string, rep: ModifyGroupResponse) => void): Promise<ModifyGroupResponse>;
    /**
     * 如果批量注册的用户已存在，则会被覆盖。一次最多注册1000个用户。默认请求频率限制：10次/秒
     */
    BatchRegister(req: BatchRegisterRequest, cb?: (error: string, rep: BatchRegisterResponse) => void): Promise<BatchRegisterResponse>;
    /**
     * 删除巡课
     */
    DeleteSupervisor(req: DeleteSupervisorRequest, cb?: (error: string, rep: DeleteSupervisorResponse) => void): Promise<DeleteSupervisorResponse>;
    /**
     * 此接口用于批量删除成员列表到指定群组列表
     */
    BatchDeleteGroupMember(req: BatchDeleteGroupMemberRequest, cb?: (error: string, rep: BatchDeleteGroupMemberResponse) => void): Promise<BatchDeleteGroupMemberResponse>;
    /**
     * 获取房间事件,仅在课堂结束1小时内有效。
     */
    GetRoomEvent(req: GetRoomEventRequest, cb?: (error: string, rep: GetRoomEventResponse) => void): Promise<GetRoomEventResponse>;
    /**
     * 删除已注册用户。注：如果该成员已被添加到群组，请先在群组中删除该成员。
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 获取房间配置信息
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 删除指定房间的录制文件
     */
    DeleteRecord(req: DeleteRecordRequest, cb?: (error: string, rep: DeleteRecordResponse) => void): Promise<DeleteRecordResponse>;
    /**
     * 1、按照指定身份发送消息，目前支持表情消息、图片消息、文本消息。
     */
    SendRoomNormalMessage(req: SendRoomNormalMessageRequest, cb?: (error: string, rep: SendRoomNormalMessageResponse) => void): Promise<SendRoomNormalMessageResponse>;
    /**
     * 查询录制信息
     */
    DescribeRecord(req: DescribeRecordRequest, cb?: (error: string, rep: DescribeRecordResponse) => void): Promise<DescribeRecordResponse>;
    /**
     * 获取群组列表
     */
    DescribeGroupList(req: DescribeGroupListRequest, cb?: (error: string, rep: DescribeGroupListResponse) => void): Promise<DescribeGroupListResponse>;
    /**
     * 此接口用于批量添加成员列表到指定群组
     */
    BatchAddGroupMember(req: BatchAddGroupMemberRequest, cb?: (error: string, rep: BatchAddGroupMemberResponse) => void): Promise<BatchAddGroupMemberResponse>;
    /**
     * 此接口用于添加成员列表到指定群组
     */
    AddGroupMember(req: AddGroupMemberRequest, cb?: (error: string, rep: AddGroupMemberResponse) => void): Promise<AddGroupMemberResponse>;
    /**
     * 注册用户
     */
    RegisterUser(req: RegisterUserRequest, cb?: (error: string, rep: RegisterUserResponse) => void): Promise<RegisterUserResponse>;
    /**
     * 查询录制任务ID
     */
    DescribeRecordTask(req: DescribeRecordTaskRequest, cb?: (error: string, rep: DescribeRecordTaskResponse) => void): Promise<DescribeRecordTaskResponse>;
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
    BindDocumentToRoom(req: BindDocumentToRoomRequest, cb?: (error: string, rep: BindDocumentToRoomResponse) => void): Promise<BindDocumentToRoomResponse>;
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    LoginOriginId(req: LoginOriginIdRequest, cb?: (error: string, rep: LoginOriginIdResponse) => void): Promise<LoginOriginIdResponse>;
    /**
     * 禁止指定房间中某些用户在一段时间内发言。
取消对某些用户的禁言。
被禁言用户退出房间之后再进入同一房间，禁言仍然有效。
     */
    ForbidSendMsg(req: ForbidSendMsgRequest, cb?: (error: string, rep: ForbidSendMsgResponse) => void): Promise<ForbidSendMsgResponse>;
    /**
     * 登录
     */
    LoginUser(req: LoginUserRequest, cb?: (error: string, rep: LoginUserResponse) => void): Promise<LoginUserResponse>;
    /**
     * 此接口根据成员列表创建群组
     */
    CreateGroupWithMembers(req: CreateGroupWithMembersRequest, cb?: (error: string, rep: CreateGroupWithMembersResponse) => void): Promise<CreateGroupWithMembersResponse>;
    /**
     * 开发商信息获取
     */
    DescribeDeveloper(req?: DescribeDeveloperRequest, cb?: (error: string, rep: DescribeDeveloperResponse) => void): Promise<DescribeDeveloperResponse>;
    /**
     * 创建巡课
     */
    CreateSupervisor(req: CreateSupervisorRequest, cb?: (error: string, rep: CreateSupervisorResponse) => void): Promise<CreateSupervisorResponse>;
    /**
     * 获取房间提问列表
     */
    DescribeQuestionList(req: DescribeQuestionListRequest, cb?: (error: string, rep: DescribeQuestionListResponse) => void): Promise<DescribeQuestionListResponse>;
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    SetAppCustomContent(req: SetAppCustomContentRequest, cb?: (error: string, rep: SetAppCustomContentResponse) => void): Promise<SetAppCustomContentResponse>;
    /**
     * 批量获取文档详情
     */
    BatchDescribeDocument(req: BatchDescribeDocumentRequest, cb?: (error: string, rep: BatchDescribeDocumentResponse) => void): Promise<BatchDescribeDocumentResponse>;
    /**
     * 获取当前房间的成员列表，房间结束或过期后无法使用。
     */
    DescribeCurrentMemberList(req: DescribeCurrentMemberListRequest, cb?: (error: string, rep: DescribeCurrentMemberListResponse) => void): Promise<DescribeCurrentMemberListResponse>;
    /**
     * 批量创建房间接口
     */
    BatchCreateRoom(req: BatchCreateRoomRequest, cb?: (error: string, rep: BatchCreateRoomResponse) => void): Promise<BatchCreateRoomResponse>;
    /**
     * 获取房间答题详情
     */
    DescribeAnswerList(req: DescribeAnswerListRequest, cb?: (error: string, rep: DescribeAnswerListResponse) => void): Promise<DescribeAnswerListResponse>;
    /**
     * 删除文档
     */
    DeleteDocument(req: DeleteDocumentRequest, cb?: (error: string, rep: DeleteDocumentResponse) => void): Promise<DeleteDocumentResponse>;
    /**
     * 停止录制
     */
    StopRecord(req: StopRecordRequest, cb?: (error: string, rep: StopRecordResponse) => void): Promise<StopRecordResponse>;
    /**
     * 批量删除多个房间的录制文件
     */
    BatchDeleteRecord(req: BatchDeleteRecordRequest, cb?: (error: string, rep: BatchDeleteRecordResponse) => void): Promise<BatchDeleteRecordResponse>;
    /**
     * 结束房间的直播
     */
    EndRoom(req: EndRoomRequest, cb?: (error: string, rep: EndRoomResponse) => void): Promise<EndRoomResponse>;
    /**
     * 设置跑马灯参数设置
     */
    SetMarquee(req: SetMarqueeRequest, cb?: (error: string, rep: SetMarqueeResponse) => void): Promise<SetMarqueeResponse>;
    /**
     * 获取房间列表
     */
    GetRooms(req: GetRoomsRequest, cb?: (error: string, rep: GetRoomsResponse) => void): Promise<GetRoomsResponse>;
    /**
     * 从房间里面踢出用户
     */
    KickUserFromRoom(req: KickUserFromRoomRequest, cb?: (error: string, rep: KickUserFromRoomResponse) => void): Promise<KickUserFromRoomResponse>;
    /**
     * 删除房间
     */
    DeleteRoom(req: DeleteRoomRequest, cb?: (error: string, rep: DeleteRoomResponse) => void): Promise<DeleteRoomResponse>;
    /**
     * 获取文档信息
     */
    DescribeDocument(req: DescribeDocumentRequest, cb?: (error: string, rep: DescribeDocumentResponse) => void): Promise<DescribeDocumentResponse>;
    /**
     * 开始录制
     */
    StartRecord(req: StartRecordRequest, cb?: (error: string, rep: StartRecordResponse) => void): Promise<StartRecordResponse>;
    /**
     * 此接口会聚合子群组创建联合群组
     */
    CreateGroupWithSubGroup(req: CreateGroupWithSubGroupRequest, cb?: (error: string, rep: CreateGroupWithSubGroupResponse) => void): Promise<CreateGroupWithSubGroupResponse>;
    /**
     * 查询跑马灯配置
     */
    DescribeMarquee(req: DescribeMarqueeRequest, cb?: (error: string, rep: DescribeMarqueeResponse) => void): Promise<DescribeMarqueeResponse>;
    /**
     * 此接口用于批量创建群组
     */
    BatchCreateGroupWithMembers(req: BatchCreateGroupWithMembersRequest, cb?: (error: string, rep: BatchCreateGroupWithMembersResponse) => void): Promise<BatchCreateGroupWithMembersResponse>;
    /**
     * 获取课堂评分列表
     */
    DescribeScoreList(req: DescribeScoreListRequest, cb?: (error: string, rep: DescribeScoreListResponse) => void): Promise<DescribeScoreListResponse>;
    /**
     * 创建房间
     */
    CreateRoom(req: CreateRoomRequest, cb?: (error: string, rep: CreateRoomResponse) => void): Promise<CreateRoomResponse>;
}
