import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteAclsRequest, DeleteUsersRequest, DescribeDasbImageIdsResponse, CreateUserResponse, DescribeDevicesResponse, CreateAclRequest, ModifyAclResponse, ModifyUserResponse, DescribeDasbImageIdsRequest, CreateAclResponse, DescribeAclsResponse, DescribeDevicesRequest, ModifyAclRequest, CreateUserRequest, DeleteUsersResponse, DescribeUsersRequest, DescribeUsersResponse, DeleteAclsResponse, ModifyUserRequest, DescribeAclsRequest } from "./dasb_models";
/**
 * dasb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除用户
     */
    DeleteUsers(req: DeleteUsersRequest, cb?: (error: string, rep: DeleteUsersResponse) => void): Promise<DeleteUsersResponse>;
    /**
     * 新建访问权限
     */
    CreateAcl(req: CreateAclRequest, cb?: (error: string, rep: CreateAclResponse) => void): Promise<CreateAclResponse>;
    /**
     * 获取镜像列表
     */
    DescribeDasbImageIds(req?: DescribeDasbImageIdsRequest, cb?: (error: string, rep: DescribeDasbImageIdsResponse) => void): Promise<DescribeDasbImageIdsResponse>;
    /**
     * 修改用户信息
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 删除访问权限
     */
    DeleteAcls(req: DeleteAclsRequest, cb?: (error: string, rep: DeleteAclsResponse) => void): Promise<DeleteAclsResponse>;
    /**
     * 查询资产列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 查询访问权限列表
     */
    DescribeAcls(req: DescribeAclsRequest, cb?: (error: string, rep: DescribeAclsResponse) => void): Promise<DescribeAclsResponse>;
    /**
     * 新建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 查询用户列表
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 修改访问权限
     */
    ModifyAcl(req: ModifyAclRequest, cb?: (error: string, rep: ModifyAclResponse) => void): Promise<ModifyAclResponse>;
}
