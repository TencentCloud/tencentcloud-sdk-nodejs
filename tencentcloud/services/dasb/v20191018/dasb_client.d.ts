import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDeviceGroupResponse, DeleteAclsRequest, AddDeviceGroupMembersResponse, ModifyUserRequest, DeleteUsersRequest, DeleteDeviceGroupMembersResponse, AddUserGroupMembersResponse, DescribeDasbImageIdsResponse, CreateUserResponse, ModifyUserResponse, AddUserGroupMembersRequest, DescribeUserGroupsRequest, DescribeUserGroupMembersResponse, CreateUserGroupResponse, DescribeDevicesResponse, DescribeUserGroupMembersRequest, CreateAclRequest, DeleteUserGroupsRequest, ModifyAclResponse, DescribeAclsRequest, DeleteDeviceGroupsRequest, DeleteUserGroupMembersRequest, DescribeDasbImageIdsRequest, DeleteDeviceGroupMembersRequest, DeleteUserGroupsResponse, BindDeviceResourceRequest, CreateDeviceGroupRequest, CreateAclResponse, DescribeAclsResponse, DescribeUsersResponse, DescribeDevicesRequest, DescribeDeviceGroupsRequest, ModifyAclRequest, DescribeResourcesRequest, BindDeviceResourceResponse, CreateUserRequest, DeleteUsersResponse, DescribeDeviceGroupsResponse, DescribeResourcesResponse, DescribeUsersRequest, DeleteUserGroupMembersResponse, DescribeUserGroupsResponse, DescribeDeviceGroupMembersResponse, DeleteAclsResponse, DescribeDeviceGroupMembersRequest, DeleteDeviceGroupsResponse, CreateUserGroupRequest, AddDeviceGroupMembersRequest } from "./dasb_models";
/**
 * dasb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询资产组成员列表
     */
    DescribeDeviceGroupMembers(req: DescribeDeviceGroupMembersRequest, cb?: (error: string, rep: DescribeDeviceGroupMembersResponse) => void): Promise<DescribeDeviceGroupMembersResponse>;
    /**
     * 新建资产组
     */
    CreateDeviceGroup(req: CreateDeviceGroupRequest, cb?: (error: string, rep: CreateDeviceGroupResponse) => void): Promise<CreateDeviceGroupResponse>;
    /**
     * 添加用户组成员
     */
    AddUserGroupMembers(req: AddUserGroupMembersRequest, cb?: (error: string, rep: AddUserGroupMembersResponse) => void): Promise<AddUserGroupMembersResponse>;
    /**
     * 查询用户列表
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 修改资产绑定的堡垒机服务
     */
    BindDeviceResource(req: BindDeviceResourceRequest, cb?: (error: string, rep: BindDeviceResourceResponse) => void): Promise<BindDeviceResourceResponse>;
    /**
     * 删除访问权限
     */
    DeleteAcls(req: DeleteAclsRequest, cb?: (error: string, rep: DeleteAclsResponse) => void): Promise<DeleteAclsResponse>;
    /**
     * 查询用户组列表
     */
    DescribeUserGroups(req: DescribeUserGroupsRequest, cb?: (error: string, rep: DescribeUserGroupsResponse) => void): Promise<DescribeUserGroupsResponse>;
    /**
     * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
     */
    DescribeResources(req: DescribeResourcesRequest, cb?: (error: string, rep: DescribeResourcesResponse) => void): Promise<DescribeResourcesResponse>;
    /**
     * 删除用户组成员
     */
    DeleteUserGroupMembers(req: DeleteUserGroupMembersRequest, cb?: (error: string, rep: DeleteUserGroupMembersResponse) => void): Promise<DeleteUserGroupMembersResponse>;
    /**
     * 删除资产组
     */
    DeleteDeviceGroups(req: DeleteDeviceGroupsRequest, cb?: (error: string, rep: DeleteDeviceGroupsResponse) => void): Promise<DeleteDeviceGroupsResponse>;
    /**
     * 修改访问权限
     */
    ModifyAcl(req: ModifyAclRequest, cb?: (error: string, rep: ModifyAclResponse) => void): Promise<ModifyAclResponse>;
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
     * 查询访问权限列表
     */
    DescribeAcls(req: DescribeAclsRequest, cb?: (error: string, rep: DescribeAclsResponse) => void): Promise<DescribeAclsResponse>;
    /**
     * 删除资产组成员
     */
    DeleteDeviceGroupMembers(req: DeleteDeviceGroupMembersRequest, cb?: (error: string, rep: DeleteDeviceGroupMembersResponse) => void): Promise<DeleteDeviceGroupMembersResponse>;
    /**
     * 删除用户组
     */
    DeleteUserGroups(req: DeleteUserGroupsRequest, cb?: (error: string, rep: DeleteUserGroupsResponse) => void): Promise<DeleteUserGroupsResponse>;
    /**
     * 修改用户信息
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 查询资产组列表
     */
    DescribeDeviceGroups(req: DescribeDeviceGroupsRequest, cb?: (error: string, rep: DescribeDeviceGroupsResponse) => void): Promise<DescribeDeviceGroupsResponse>;
    /**
     * 查询资产列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 查询用户组成员列表
     */
    DescribeUserGroupMembers(req: DescribeUserGroupMembersRequest, cb?: (error: string, rep: DescribeUserGroupMembersResponse) => void): Promise<DescribeUserGroupMembersResponse>;
    /**
     * 添加资产组成员
     */
    AddDeviceGroupMembers(req: AddDeviceGroupMembersRequest, cb?: (error: string, rep: AddDeviceGroupMembersResponse) => void): Promise<AddDeviceGroupMembersResponse>;
    /**
     * 新建用户组
     */
    CreateUserGroup(req: CreateUserGroupRequest, cb?: (error: string, rep: CreateUserGroupResponse) => void): Promise<CreateUserGroupResponse>;
    /**
     * 新建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
}
