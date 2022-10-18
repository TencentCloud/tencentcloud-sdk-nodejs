import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, RegisterUserResponse, DeleteRoomRequest, CreateSupervisorRequest, DescribeRoomResponse, RegisterUserRequest, LoginOriginIdRequest, DescribeUserRequest, DeleteRoomResponse, CreateDocumentResponse, LoginUserRequest, CreateSupervisorResponse, SetAppCustomContentResponse, CreateDocumentRequest, CreateRoomResponse, DescribeUserResponse, SetAppCustomContentRequest, DescribeRoomRequest, LoginOriginIdResponse, LoginUserResponse } from "./lcic_models";
/**
 * lcic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建房间内可以使用的文档。
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
     */
    SetAppCustomContent(req: SetAppCustomContentRequest, cb?: (error: string, rep: SetAppCustomContentResponse) => void): Promise<SetAppCustomContentResponse>;
    /**
     * 获取用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    LoginOriginId(req: LoginOriginIdRequest, cb?: (error: string, rep: LoginOriginIdResponse) => void): Promise<LoginOriginIdResponse>;
    /**
     * 删除房间
     */
    DeleteRoom(req: DeleteRoomRequest, cb?: (error: string, rep: DeleteRoomResponse) => void): Promise<DeleteRoomResponse>;
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
