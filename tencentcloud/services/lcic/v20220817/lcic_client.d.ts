import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoomRequest, CreateSupervisorRequest, DescribeRoomResponse, RegisterUserRequest, LoginOriginIdRequest, DescribeUserRequest, RegisterUserResponse, LoginUserRequest, CreateSupervisorResponse, CreateRoomResponse, DescribeUserResponse, DescribeRoomRequest, LoginOriginIdResponse, LoginUserResponse } from "./lcic_models";
/**
 * lcic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    LoginOriginId(req: LoginOriginIdRequest, cb?: (error: string, rep: LoginOriginIdResponse) => void): Promise<LoginOriginIdResponse>;
    /**
     * 注册用户
     */
    RegisterUser(req: RegisterUserRequest, cb?: (error: string, rep: RegisterUserResponse) => void): Promise<RegisterUserResponse>;
    /**
     * 登录
     */
    LoginUser(req: LoginUserRequest, cb?: (error: string, rep: LoginUserResponse) => void): Promise<LoginUserResponse>;
    /**
     * 创建巡课
     */
    CreateSupervisor(req?: CreateSupervisorRequest, cb?: (error: string, rep: CreateSupervisorResponse) => void): Promise<CreateSupervisorResponse>;
    /**
     * 获取房间信息
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 创建房间
     */
    CreateRoom(req: CreateRoomRequest, cb?: (error: string, rep: CreateRoomResponse) => void): Promise<CreateRoomResponse>;
}
