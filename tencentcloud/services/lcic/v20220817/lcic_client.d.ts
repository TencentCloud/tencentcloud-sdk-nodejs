import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, BatchCreateRoomResponse, SetAppCustomContentRequest, SetWatermarkResponse, ModifyRoomResponse, UnbindDocumentFromRoomResponse, DescribeUserRequest, ModifyRoomRequest, CreateDocumentResponse, DescribeAppDetailResponse, BindDocumentToRoomRequest, CreateDocumentRequest, DescribeDocumentsByRoomResponse, SetAppCustomContentResponse, LoginOriginIdResponse, BatchDeleteRecordRequest, LoginUserResponse, DescribeAppDetailRequest, ModifyAppResponse, BatchRegisterRequest, DescribeRoomResponse, DeleteRoomResponse, ModifyUserProfileRequest, DescribeDocumentsByRoomRequest, DescribeCurrentMemberListRequest, DescribeSdkAppIdUsersResponse, GetWatermarkResponse, DeleteDocumentResponse, DeleteRecordRequest, DescribeRoomStatisticsResponse, DeleteDocumentRequest, DescribeSdkAppIdUsersRequest, DescribeUserResponse, DescribeDocumentResponse, ModifyUserProfileResponse, GetWatermarkRequest, CreateSupervisorResponse, DeleteRoomRequest, RegisterUserResponse, DescribeRoomStatisticsRequest, ModifyAppRequest, CreateSupervisorRequest, UnbindDocumentFromRoomRequest, LoginOriginIdRequest, BatchRegisterResponse, DescribeCurrentMemberListResponse, LoginUserRequest, BatchCreateRoomRequest, BindDocumentToRoomResponse, SetWatermarkRequest, CreateRoomResponse, DeleteRecordResponse, DescribeRoomRequest, DescribeDocumentRequest, RegisterUserRequest, BatchDeleteRecordResponse } from "./lcic_models";
/**
 * lcic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置水印
     */
    SetWatermark(req: SetWatermarkRequest, cb?: (error: string, rep: SetWatermarkResponse) => void): Promise<SetWatermarkResponse>;
    /**
     * 此接口获取指定房间下课件列表
     */
    DescribeDocumentsByRoom(req: DescribeDocumentsByRoomRequest, cb?: (error: string, rep: DescribeDocumentsByRoomResponse) => void): Promise<DescribeDocumentsByRoomResponse>;
    /**
     * 获取水印设置
     */
    GetWatermark(req: GetWatermarkRequest, cb?: (error: string, rep: GetWatermarkResponse) => void): Promise<GetWatermarkResponse>;
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
     * 创建房间内可以使用的文档。
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 修改房间
     */
    ModifyRoom(req: ModifyRoomRequest, cb?: (error: string, rep: ModifyRoomResponse) => void): Promise<ModifyRoomResponse>;
    /**
     * 获取用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 如果批量注册的用户已存在，则会被覆盖。一次最多注册1000个用户。默认请求频率限制：10次/秒
     */
    BatchRegister(req: BatchRegisterRequest, cb?: (error: string, rep: BatchRegisterResponse) => void): Promise<BatchRegisterResponse>;
    /**
     * 此接口用于修改用户配置，如头像，昵称/用户名等。
     */
    ModifyUserProfile(req: ModifyUserProfileRequest, cb?: (error: string, rep: ModifyUserProfileResponse) => void): Promise<ModifyUserProfileResponse>;
    /**
     * 获取房间信息
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 删除指定房间的录制文件
     */
    DeleteRecord(req: DeleteRecordRequest, cb?: (error: string, rep: DeleteRecordResponse) => void): Promise<DeleteRecordResponse>;
    /**
     * 批量创建房间接口
     */
    BatchCreateRoom(req: BatchCreateRoomRequest, cb?: (error: string, rep: BatchCreateRoomResponse) => void): Promise<BatchCreateRoomResponse>;
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
     * 创建巡课
     */
    CreateSupervisor(req?: CreateSupervisorRequest, cb?: (error: string, rep: CreateSupervisorResponse) => void): Promise<CreateSupervisorResponse>;
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    SetAppCustomContent(req: SetAppCustomContentRequest, cb?: (error: string, rep: SetAppCustomContentResponse) => void): Promise<SetAppCustomContentResponse>;
    /**
     * 获取当前房间的成员列表，房间结束或过期后无法使用。
     */
    DescribeCurrentMemberList(req: DescribeCurrentMemberListRequest, cb?: (error: string, rep: DescribeCurrentMemberListResponse) => void): Promise<DescribeCurrentMemberListResponse>;
    /**
     * 获取应用详情
     */
    DescribeAppDetail(req: DescribeAppDetailRequest, cb?: (error: string, rep: DescribeAppDetailResponse) => void): Promise<DescribeAppDetailResponse>;
    /**
     * 删除文档
     */
    DeleteDocument(req: DeleteDocumentRequest, cb?: (error: string, rep: DeleteDocumentResponse) => void): Promise<DeleteDocumentResponse>;
    /**
     * 批量删除多个房间的录制文件
     */
    BatchDeleteRecord(req: BatchDeleteRecordRequest, cb?: (error: string, rep: BatchDeleteRecordResponse) => void): Promise<BatchDeleteRecordResponse>;
    /**
     * 删除房间
     */
    DeleteRoom(req: DeleteRoomRequest, cb?: (error: string, rep: DeleteRoomResponse) => void): Promise<DeleteRoomResponse>;
    /**
     * 获取文档信息
     */
    DescribeDocument(req: DescribeDocumentRequest, cb?: (error: string, rep: DescribeDocumentResponse) => void): Promise<DescribeDocumentResponse>;
    /**
     * 创建房间
     */
    CreateRoom(req: CreateRoomRequest, cb?: (error: string, rep: CreateRoomResponse) => void): Promise<CreateRoomResponse>;
}
