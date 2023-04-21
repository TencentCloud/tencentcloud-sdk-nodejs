import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, DescribeQuestionListRequest, ModifyRoomResponse, DescribeAppDetailResponse, DeleteSupervisorRequest, DescribeSupervisorsResponse, BatchDeleteRecordRequest, ModifyAppResponse, BatchRegisterRequest, DeleteRoomResponse, ModifyUserProfileRequest, CreateGroupWithMembersRequest, DescribeDocumentsByRoomRequest, BatchCreateGroupWithMembersResponse, GetRoomEventResponse, BatchCreateRoomResponse, DeleteAppCustomContentRequest, BatchAddGroupMemberResponse, ModifyUserProfileResponse, GetWatermarkResponse, LoginOriginIdRequest, BatchRegisterResponse, BindDocumentToRoomResponse, CreateGroupWithSubGroupRequest, SetWatermarkRequest, DescribeRoomRequest, BatchDescribeDocumentRequest, EndRoomRequest, UnbindDocumentFromRoomResponse, CreateDocumentResponse, DescribeGroupResponse, SetAppCustomContentResponse, LoginUserResponse, ModifyGroupRequest, DescribeAppDetailRequest, DeleteGroupRequest, StartRoomRequest, AddGroupMemberRequest, DescribeGroupListRequest, GetRoomMessageRequest, DescribeDocumentsResponse, DeleteDocumentResponse, DeleteRecordRequest, BatchDeleteGroupMemberResponse, CreateGroupWithSubGroupResponse, DescribeDocumentsRequest, GetRoomEventRequest, DescribeDocumentResponse, DeleteGroupMemberResponse, DescribeGroupMemberListResponse, DeleteRecordResponse, DescribeAnswerListRequest, BatchCreateRoomRequest, DescribeGroupMemberListRequest, DescribeUserResponse, DescribeDocumentRequest, BatchDeleteRecordResponse, SetAppCustomContentRequest, DescribeUserRequest, RegisterUserResponse, StartRoomResponse, BindDocumentToRoomRequest, CreateDocumentRequest, GetRoomMessageResponse, BatchAddGroupMemberRequest, DescribeRoomResponse, DescribeCurrentMemberListRequest, DescribeSdkAppIdUsersResponse, DescribeAnswerListResponse, DescribeRoomStatisticsResponse, DeleteDocumentRequest, DescribeSupervisorsRequest, DeleteGroupMemberRequest, EndRoomResponse, GetWatermarkRequest, CreateGroupWithMembersResponse, BatchDeleteGroupMemberRequest, ModifyAppRequest, UnbindDocumentFromRoomRequest, RegisterUserRequest, LoginUserRequest, DeleteSupervisorResponse, SetWatermarkResponse, ModifyRoomRequest, DescribeRoomStatisticsRequest, DescribeDocumentsByRoomResponse, LoginOriginIdResponse, DescribeQuestionListResponse, GetRoomsResponse, GetRoomsRequest, DescribeDeveloperRequest, BatchDescribeDocumentResponse, DeleteGroupResponse, DescribeSdkAppIdUsersRequest, AddGroupMemberResponse, CreateSupervisorResponse, DeleteRoomRequest, BatchCreateGroupWithMembersRequest, DescribeGroupRequest, CreateSupervisorRequest, DeleteAppCustomContentResponse, DescribeCurrentMemberListResponse, ModifyGroupResponse, DescribeGroupListResponse, CreateRoomResponse, DescribeDeveloperResponse } from "./lcic_models";
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
     * 获取房间历史消息(房间历史消息保存7天)
     */
    GetRoomMessage(req: GetRoomMessageRequest, cb?: (error: string, rep: GetRoomMessageResponse) => void): Promise<GetRoomMessageResponse>;
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
     * 设置水印
     */
    SetWatermark(req: SetWatermarkRequest, cb?: (error: string, rep: SetWatermarkResponse) => void): Promise<SetWatermarkResponse>;
    /**
     * 此接口用于修改用户配置，如头像，昵称/用户名等。
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
     * 获取房间信息
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 删除指定房间的录制文件
     */
    DeleteRecord(req: DeleteRecordRequest, cb?: (error: string, rep: DeleteRecordResponse) => void): Promise<DeleteRecordResponse>;
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
     * 获取房间统计信息，仅可在房间结束后调用。
     */
    DescribeRoomStatistics(req: DescribeRoomStatisticsRequest, cb?: (error: string, rep: DescribeRoomStatisticsResponse) => void): Promise<DescribeRoomStatisticsResponse>;
    /**
     * 绑定文档到房间
     */
    BindDocumentToRoom(req: BindDocumentToRoomRequest, cb?: (error: string, rep: BindDocumentToRoomResponse) => void): Promise<BindDocumentToRoomResponse>;
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    LoginOriginId(req: LoginOriginIdRequest, cb?: (error: string, rep: LoginOriginIdResponse) => void): Promise<LoginOriginIdResponse>;
    /**
     * 登录
     */
    LoginUser(req: LoginUserRequest, cb?: (error: string, rep: LoginUserResponse) => void): Promise<LoginUserResponse>;
    /**
     * 此接口根据成员列表创建群组
     */
    CreateGroupWithMembers(req: CreateGroupWithMembersRequest, cb?: (error: string, rep: CreateGroupWithMembersResponse) => void): Promise<CreateGroupWithMembersResponse>;
    /**
     * 服务商信息获取
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
     * 批量删除多个房间的录制文件
     */
    BatchDeleteRecord(req: BatchDeleteRecordRequest, cb?: (error: string, rep: BatchDeleteRecordResponse) => void): Promise<BatchDeleteRecordResponse>;
    /**
     * 结束房间的直播
     */
    EndRoom(req: EndRoomRequest, cb?: (error: string, rep: EndRoomResponse) => void): Promise<EndRoomResponse>;
    /**
     * 获取房间列表
     */
    GetRooms(req: GetRoomsRequest, cb?: (error: string, rep: GetRoomsResponse) => void): Promise<GetRoomsResponse>;
    /**
     * 删除房间
     */
    DeleteRoom(req: DeleteRoomRequest, cb?: (error: string, rep: DeleteRoomResponse) => void): Promise<DeleteRoomResponse>;
    /**
     * 获取文档信息
     */
    DescribeDocument(req: DescribeDocumentRequest, cb?: (error: string, rep: DescribeDocumentResponse) => void): Promise<DescribeDocumentResponse>;
    /**
     * 此接口会聚合子群组创建联合群组
     */
    CreateGroupWithSubGroup(req: CreateGroupWithSubGroupRequest, cb?: (error: string, rep: CreateGroupWithSubGroupResponse) => void): Promise<CreateGroupWithSubGroupResponse>;
    /**
     * 此接口用于批量创建群组
     */
    BatchCreateGroupWithMembers(req: BatchCreateGroupWithMembersRequest, cb?: (error: string, rep: BatchCreateGroupWithMembersResponse) => void): Promise<BatchCreateGroupWithMembersResponse>;
    /**
     * 创建房间
     */
    CreateRoom(req: CreateRoomRequest, cb?: (error: string, rep: CreateRoomResponse) => void): Promise<CreateRoomResponse>;
}
