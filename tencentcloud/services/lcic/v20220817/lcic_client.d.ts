import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, SetAppCustomContentRequest, UnbindDocumentFromRoomResponse, DescribeUserRequest, CreateDocumentResponse, DescribeRoomStatisticsRequest, BindDocumentToRoomRequest, CreateDocumentRequest, SetAppCustomContentResponse, LoginOriginIdResponse, LoginUserResponse, DescribeAppDetailRequest, ModifyAppResponse, DescribeRoomResponse, DeleteRoomResponse, DescribeRoomStatisticsResponse, CreateSupervisorResponse, DeleteRoomRequest, RegisterUserResponse, DescribeAppDetailResponse, ModifyAppRequest, CreateSupervisorRequest, UnbindDocumentFromRoomRequest, LoginOriginIdRequest, LoginUserRequest, BindDocumentToRoomResponse, CreateRoomResponse, DescribeUserResponse, DescribeRoomRequest, RegisterUserRequest } from "./lcic_models";
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
     * 创建房间内可以使用的文档。
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    SetAppCustomContent(req: SetAppCustomContentRequest, cb?: (error: string, rep: SetAppCustomContentResponse) => void): Promise<SetAppCustomContentResponse>;
    /**
     * 获取房间统计信息，仅可在房间结束后调用。
     */
    DescribeRoomStatistics(req: DescribeRoomStatisticsRequest, cb?: (error: string, rep: DescribeRoomStatisticsResponse) => void): Promise<DescribeRoomStatisticsResponse>;
    /**
     * 删除房间
     */
    DeleteRoom(req: DeleteRoomRequest, cb?: (error: string, rep: DeleteRoomResponse) => void): Promise<DeleteRoomResponse>;
    /**
     * 文档从房间解绑
     */
    UnbindDocumentFromRoom(req: UnbindDocumentFromRoomRequest, cb?: (error: string, rep: UnbindDocumentFromRoomResponse) => void): Promise<UnbindDocumentFromRoomResponse>;
    /**
     * 绑定文档到房间
     */
    BindDocumentToRoom(req: BindDocumentToRoomRequest, cb?: (error: string, rep: BindDocumentToRoomResponse) => void): Promise<BindDocumentToRoomResponse>;
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    LoginOriginId(req: LoginOriginIdRequest, cb?: (error: string, rep: LoginOriginIdResponse) => void): Promise<LoginOriginIdResponse>;
    /**
     * 获取用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 修改应用
     */
    ModifyApp(req: ModifyAppRequest, cb?: (error: string, rep: ModifyAppResponse) => void): Promise<ModifyAppResponse>;
    /**
     * 登录
     */
    LoginUser(req: LoginUserRequest, cb?: (error: string, rep: LoginUserResponse) => void): Promise<LoginUserResponse>;
    /**
     * 创建巡课
     */
    CreateSupervisor(req?: CreateSupervisorRequest, cb?: (error: string, rep: CreateSupervisorResponse) => void): Promise<CreateSupervisorResponse>;
    /**
     * 注册用户
     */
    RegisterUser(req: RegisterUserRequest, cb?: (error: string, rep: RegisterUserResponse) => void): Promise<RegisterUserResponse>;
    /**
     * 获取房间信息
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 创建房间
     */
    CreateRoom(req: CreateRoomRequest, cb?: (error: string, rep: CreateRoomResponse) => void): Promise<CreateRoomResponse>;
}
