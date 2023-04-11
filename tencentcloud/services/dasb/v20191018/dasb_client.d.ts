import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ResetDeviceAccountPasswordResponse, DescribeLoginEventRequest, BindDeviceAccountPasswordRequest, DeleteAclsRequest, DeleteDeviceGroupsResponse, DescribeDeviceGroupsResponse, DeleteCmdTemplatesResponse, DeleteDevicesResponse, BindDeviceAccountPasswordResponse, ResetDeviceAccountPasswordRequest, AddUserGroupMembersRequest, DescribeDevicesResponse, ResetUserResponse, DeleteUserGroupMembersRequest, DeleteAclsResponse, DeleteUserGroupsResponse, ModifyDeviceRequest, SearchFileRequest, SearchCommandRequest, ImportExternalDeviceRequest, SearchSessionRequest, BindDeviceResourceResponse, DeleteUserGroupMembersResponse, CreateUserGroupRequest, BindDeviceAccountPrivateKeyResponse, SearchCommandBySidRequest, CreateDeviceGroupResponse, DescribeUserGroupMembersRequest, CreateUserResponse, DescribeAssetSyncStatusResponse, CreateAclRequest, DescribeLoginEventResponse, DeleteDeviceGroupMembersRequest, CreateDeviceGroupRequest, CreateAclResponse, DescribeAclsResponse, CreateCmdTemplateResponse, ModifyAclRequest, SearchAuditLogRequest, SearchCommandResponse, DeleteUsersResponse, SearchCommandBySidResponse, DescribeResourcesResponse, DescribeUsersRequest, DeployResourceRequest, SearchSessionResponse, CreateCmdTemplateRequest, ResetDeviceAccountPrivateKeyRequest, CreateAssetSyncJobResponse, BindDeviceAccountPrivateKeyRequest, CreateAssetSyncJobRequest, DescribeAssetSyncStatusRequest, ResetDeviceAccountPrivateKeyResponse, DeleteUsersRequest, DeleteDeviceAccountsRequest, DeleteDeviceGroupMembersResponse, ModifyDeviceGroupResponse, DescribeUserGroupMembersResponse, ImportExternalDeviceResponse, SearchSessionCommandResponse, DeleteUserGroupsRequest, ResetUserRequest, DescribeDasbImageIdsRequest, CreateDeviceAccountResponse, ModifyDeviceGroupRequest, DescribeUsersResponse, DeployResourceResponse, CreateUserRequest, SearchFileBySidResponse, DescribeOperationEventRequest, ModifyDeviceResponse, ModifyUserResponse, DescribeCmdTemplatesResponse, CreateDeviceAccountRequest, AddDeviceGroupMembersResponse, DeleteCmdTemplatesRequest, DescribeUserGroupsResponse, AddUserGroupMembersResponse, DescribeDeviceAccountsRequest, DescribeDasbImageIdsResponse, DescribeCmdTemplatesRequest, CreateUserGroupResponse, DeleteDevicesRequest, DescribeDeviceAccountsResponse, ModifyUserRequest, ModifyAclResponse, DescribeResourcesRequest, DeleteDeviceGroupsRequest, DescribeDeviceGroupMembersResponse, SearchAuditLogResponse, BindDeviceResourceRequest, DescribeDevicesRequest, DescribeDeviceGroupsRequest, SearchSessionCommandRequest, SearchFileBySidRequest, DescribeOperationEventResponse, DescribeUserGroupsRequest, DescribeDeviceGroupMembersRequest, DescribeAclsRequest, AddDeviceGroupMembersRequest, DeleteDeviceAccountsResponse, SearchFileResponse } from "./dasb_models";
/**
 * dasb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改资产组
     */
    ModifyDeviceGroup(req: ModifyDeviceGroupRequest, cb?: (error: string, rep: ModifyDeviceGroupResponse) => void): Promise<ModifyDeviceGroupResponse>;
    /**
     * 查询资产组成员列表
     */
    DescribeDeviceGroupMembers(req: DescribeDeviceGroupMembersRequest, cb?: (error: string, rep: DescribeDeviceGroupMembersResponse) => void): Promise<DescribeDeviceGroupMembersResponse>;
    /**
     * 查询登录日志
     */
    DescribeLoginEvent(req: DescribeLoginEventRequest, cb?: (error: string, rep: DescribeLoginEventResponse) => void): Promise<DescribeLoginEventResponse>;
    /**
     * 新建资产组
     */
    CreateDeviceGroup(req: CreateDeviceGroupRequest, cb?: (error: string, rep: CreateDeviceGroupResponse) => void): Promise<CreateDeviceGroupResponse>;
    /**
     * 查询主机账号列表
     */
    DescribeDeviceAccounts(req: DescribeDeviceAccountsRequest, cb?: (error: string, rep: DescribeDeviceAccountsResponse) => void): Promise<DescribeDeviceAccountsResponse>;
    /**
     * 重置用户
     */
    ResetUser(req: ResetUserRequest, cb?: (error: string, rep: ResetUserResponse) => void): Promise<ResetUserResponse>;
    /**
     * 删除主机
     */
    DeleteDevices(req: DeleteDevicesRequest, cb?: (error: string, rep: DeleteDevicesResponse) => void): Promise<DeleteDevicesResponse>;
    /**
     * 添加用户组成员
     */
    AddUserGroupMembers(req: AddUserGroupMembersRequest, cb?: (error: string, rep: AddUserGroupMembersResponse) => void): Promise<AddUserGroupMembersResponse>;
    /**
     * 查询用户组列表
     */
    DescribeUserGroups(req: DescribeUserGroupsRequest, cb?: (error: string, rep: DescribeUserGroupsResponse) => void): Promise<DescribeUserGroupsResponse>;
    /**
     * 开通服务，初始化资源，只针对新购资源
     */
    DeployResource(req: DeployResourceRequest, cb?: (error: string, rep: DeployResourceResponse) => void): Promise<DeployResourceResponse>;
    /**
     * 修改资产信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 修改资产绑定的堡垒机服务
     */
    BindDeviceResource(req: BindDeviceResourceRequest, cb?: (error: string, rep: BindDeviceResourceResponse) => void): Promise<BindDeviceResourceResponse>;
    /**
     * 绑定主机账号密码
     */
    BindDeviceAccountPassword(req: BindDeviceAccountPasswordRequest, cb?: (error: string, rep: BindDeviceAccountPasswordResponse) => void): Promise<BindDeviceAccountPasswordResponse>;
    /**
     * 文件传输检索
     */
    SearchFile(req: SearchFileRequest, cb?: (error: string, rep: SearchFileResponse) => void): Promise<SearchFileResponse>;
    /**
     * 搜索会话
     */
    SearchSession(req: SearchSessionRequest, cb?: (error: string, rep: SearchSessionResponse) => void): Promise<SearchSessionResponse>;
    /**
     * 删除访问权限
     */
    DeleteAcls(req: DeleteAclsRequest, cb?: (error: string, rep: DeleteAclsResponse) => void): Promise<DeleteAclsResponse>;
    /**
     * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
     */
    DescribeResources(req: DescribeResourcesRequest, cb?: (error: string, rep: DescribeResourcesResponse) => void): Promise<DescribeResourcesResponse>;
    /**
     * 删除用户组成员
     */
    DeleteUserGroupMembers(req: DeleteUserGroupMembersRequest, cb?: (error: string, rep: DeleteUserGroupMembersResponse) => void): Promise<DeleteUserGroupMembersResponse>;
    /**
     * 创建手工资产同步任务
     */
    CreateAssetSyncJob(req: CreateAssetSyncJobRequest, cb?: (error: string, rep: CreateAssetSyncJobResponse) => void): Promise<CreateAssetSyncJobResponse>;
    /**
     * 查询访问权限列表
     */
    DescribeAcls(req: DescribeAclsRequest, cb?: (error: string, rep: DescribeAclsResponse) => void): Promise<DescribeAclsResponse>;
    /**
     * 清除设备账号绑定密码
     */
    ResetDeviceAccountPassword(req: ResetDeviceAccountPasswordRequest, cb?: (error: string, rep: ResetDeviceAccountPasswordResponse) => void): Promise<ResetDeviceAccountPasswordResponse>;
    /**
     * 根据会话Id搜索Command
     */
    SearchCommandBySid(req: SearchCommandBySidRequest, cb?: (error: string, rep: SearchCommandBySidResponse) => void): Promise<SearchCommandBySidResponse>;
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
     * 新建主机账号
     */
    CreateDeviceAccount(req: CreateDeviceAccountRequest, cb?: (error: string, rep: CreateDeviceAccountResponse) => void): Promise<CreateDeviceAccountResponse>;
    /**
     * 搜索审计日志
     */
    SearchAuditLog(req: SearchAuditLogRequest, cb?: (error: string, rep: SearchAuditLogResponse) => void): Promise<SearchAuditLogResponse>;
    /**
     * 删除资产组成员
     */
    DeleteDeviceGroupMembers(req: DeleteDeviceGroupMembersRequest, cb?: (error: string, rep: DeleteDeviceGroupMembersResponse) => void): Promise<DeleteDeviceGroupMembersResponse>;
    /**
     * 查询操作日志
     */
    DescribeOperationEvent(req: DescribeOperationEventRequest, cb?: (error: string, rep: DescribeOperationEventResponse) => void): Promise<DescribeOperationEventResponse>;
    /**
     * 删除主机账号
     */
    DeleteDeviceAccounts(req: DeleteDeviceAccountsRequest, cb?: (error: string, rep: DeleteDeviceAccountsResponse) => void): Promise<DeleteDeviceAccountsResponse>;
    /**
     * 删除用户组
     */
    DeleteUserGroups(req: DeleteUserGroupsRequest, cb?: (error: string, rep: DeleteUserGroupsResponse) => void): Promise<DeleteUserGroupsResponse>;
    /**
     * 新建高危命令模板
     */
    CreateCmdTemplate(req: CreateCmdTemplateRequest, cb?: (error: string, rep: CreateCmdTemplateResponse) => void): Promise<CreateCmdTemplateResponse>;
    /**
     * 修改用户信息
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 查询命令模板列表
     */
    DescribeCmdTemplates(req: DescribeCmdTemplatesRequest, cb?: (error: string, rep: DescribeCmdTemplatesResponse) => void): Promise<DescribeCmdTemplatesResponse>;
    /**
     * 删除高危命令模板
     */
    DeleteCmdTemplates(req: DeleteCmdTemplatesRequest, cb?: (error: string, rep: DeleteCmdTemplatesResponse) => void): Promise<DeleteCmdTemplatesResponse>;
    /**
     * 查询资产同步状态
     */
    DescribeAssetSyncStatus(req: DescribeAssetSyncStatusRequest, cb?: (error: string, rep: DescribeAssetSyncStatusResponse) => void): Promise<DescribeAssetSyncStatusResponse>;
    /**
     * 查询资产组列表
     */
    DescribeDeviceGroups(req: DescribeDeviceGroupsRequest, cb?: (error: string, rep: DescribeDeviceGroupsResponse) => void): Promise<DescribeDeviceGroupsResponse>;
    /**
     * 查询用户列表
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 查询资产列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 查询用户组成员列表
     */
    DescribeUserGroupMembers(req: DescribeUserGroupMembersRequest, cb?: (error: string, rep: DescribeUserGroupMembersResponse) => void): Promise<DescribeUserGroupMembersResponse>;
    /**
     * 搜索文件传输会话下文件操作列表
     */
    SearchFileBySid(req: SearchFileBySidRequest, cb?: (error: string, rep: SearchFileBySidResponse) => void): Promise<SearchFileBySidResponse>;
    /**
     * 导入外部资产信息
     */
    ImportExternalDevice(req: ImportExternalDeviceRequest, cb?: (error: string, rep: ImportExternalDeviceResponse) => void): Promise<ImportExternalDeviceResponse>;
    /**
     * 添加资产组成员
     */
    AddDeviceGroupMembers(req: AddDeviceGroupMembersRequest, cb?: (error: string, rep: AddDeviceGroupMembersResponse) => void): Promise<AddDeviceGroupMembersResponse>;
    /**
     * 新建用户组
     */
    CreateUserGroup(req: CreateUserGroupRequest, cb?: (error: string, rep: CreateUserGroupResponse) => void): Promise<CreateUserGroupResponse>;
    /**
     * 清除设备账号绑定的密钥
     */
    ResetDeviceAccountPrivateKey(req: ResetDeviceAccountPrivateKeyRequest, cb?: (error: string, rep: ResetDeviceAccountPrivateKeyResponse) => void): Promise<ResetDeviceAccountPrivateKeyResponse>;
    /**
     * 新建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 绑定主机账号私钥
     */
    BindDeviceAccountPrivateKey(req: BindDeviceAccountPrivateKeyRequest, cb?: (error: string, rep: BindDeviceAccountPrivateKeyResponse) => void): Promise<BindDeviceAccountPrivateKeyResponse>;
    /**
     * 命令执行检索
     */
    SearchCommand(req: SearchCommandRequest, cb?: (error: string, rep: SearchCommandResponse) => void): Promise<SearchCommandResponse>;
    /**
     * 命令检索
     */
    SearchSessionCommand(req: SearchSessionCommandRequest, cb?: (error: string, rep: SearchSessionCommandResponse) => void): Promise<SearchSessionCommandResponse>;
}
