import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateFileSystemResponse, ModifyResourceTagsRequest, DescribeAccessRulesRequest, DescribeFileSystemResponse, ModifyFileSystemResponse, ModifyFileSystemRequest, DescribeLifeCycleRulesRequest, AssociateAccessGroupsRequest, ModifyAccessGroupRequest, DescribeFileSystemsResponse, DescribeFileSystemRequest, CreateMountPointRequest, DeleteAccessGroupRequest, ModifyLifeCycleRulesRequest, CreateRestoreTasksResponse, DeleteFileSystemRequest, DescribeMountPointsRequest, DescribeMountPointRequest, DescribeAccessGroupsRequest, DeleteAccessGroupResponse, ModifyLifeCycleRulesResponse, DeleteMountPointResponse, CreateMountPointResponse, CreateFileSystemRequest, DisassociateAccessGroupsRequest, DescribeResourceTagsResponse, DescribeAccessGroupsResponse, DeleteMountPointRequest, DeleteFileSystemResponse, CreateLifeCycleRulesRequest, CreateAccessRulesResponse, DeleteLifeCycleRulesRequest, ModifyMountPointRequest, DescribeAccessRulesResponse, DeleteLifeCycleRulesResponse, CreateRestoreTasksRequest, DescribeRestoreTasksResponse, DescribeLifeCycleRulesResponse, CreateAccessGroupResponse, DisassociateAccessGroupsResponse, DeleteAccessRulesRequest, DeleteAccessRulesResponse, DescribeFileSystemsRequest, DescribeResourceTagsRequest, ModifyResourceTagsResponse, CreateAccessRulesRequest, DescribeAccessGroupResponse, DescribeMountPointsResponse, DescribeRestoreTasksRequest, DescribeAccessGroupRequest, AssociateAccessGroupsResponse, ModifyAccessRulesResponse, CreateLifeCycleRulesResponse, ModifyAccessGroupResponse, ModifyMountPointResponse, ModifyAccessRulesRequest, CreateAccessGroupRequest, DescribeMountPointResponse } from "./chdfs_models";
/**
 * chdfs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量创建回热任务，回热任务ID、状态和创建时间无需填写。
     */
    CreateRestoreTasks(req: CreateRestoreTasksRequest, cb?: (error: string, rep: CreateRestoreTasksResponse) => void): Promise<CreateRestoreTasksResponse>;
    /**
     * 批量创建生命周期规则，生命周期规则ID和创建时间无需填写。
     */
    CreateLifeCycleRules(req: CreateLifeCycleRulesRequest, cb?: (error: string, rep: CreateLifeCycleRulesResponse) => void): Promise<CreateLifeCycleRulesResponse>;
    /**
     * 修改挂载点属性。
     */
    ModifyMountPoint(req: ModifyMountPointRequest, cb?: (error: string, rep: ModifyMountPointResponse) => void): Promise<ModifyMountPointResponse>;
    /**
     * 批量修改权限规则属性，需要指定权限规则ID，支持修改权限规则地址、访问模式和优先级。
     */
    ModifyAccessRules(req: ModifyAccessRulesRequest, cb?: (error: string, rep: ModifyAccessRulesResponse) => void): Promise<ModifyAccessRulesResponse>;
    /**
     * 通过权限组ID查看权限规则列表。
     */
    DescribeAccessRules(req: DescribeAccessRulesRequest, cb?: (error: string, rep: DescribeAccessRulesResponse) => void): Promise<DescribeAccessRulesResponse>;
    /**
     * 删除挂载点。
     */
    DeleteMountPoint(req: DeleteMountPointRequest, cb?: (error: string, rep: DeleteMountPointResponse) => void): Promise<DeleteMountPointResponse>;
    /**
     * 查看挂载点详细信息。
     */
    DescribeMountPoint(req: DescribeMountPointRequest, cb?: (error: string, rep: DescribeMountPointResponse) => void): Promise<DescribeMountPointResponse>;
    /**
     * 批量删除权限规则。
     */
    DeleteAccessRules(req: DeleteAccessRulesRequest, cb?: (error: string, rep: DeleteAccessRulesResponse) => void): Promise<DeleteAccessRulesResponse>;
    /**
     * 通过文件系统ID查看资源标签列表。
     */
    DescribeResourceTags(req: DescribeResourceTagsRequest, cb?: (error: string, rep: DescribeResourceTagsResponse) => void): Promise<DescribeResourceTagsResponse>;
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     */
    CreateMountPoint(req: CreateMountPointRequest, cb?: (error: string, rep: CreateMountPointResponse) => void): Promise<CreateMountPointResponse>;
    /**
     * 批量修改生命周期规则属性，需要指定生命周期规则ID，支持修改生命周期规则名称、路径、转换列表和状态。
     */
    ModifyLifeCycleRules(req: ModifyLifeCycleRulesRequest, cb?: (error: string, rep: ModifyLifeCycleRulesResponse) => void): Promise<ModifyLifeCycleRulesResponse>;
    /**
     * 查看权限组列表。
     */
    DescribeAccessGroups(req: DescribeAccessGroupsRequest, cb?: (error: string, rep: DescribeAccessGroupsResponse) => void): Promise<DescribeAccessGroupsResponse>;
    /**
     * 给挂载点解绑多个权限组。
     */
    DisassociateAccessGroups(req: DisassociateAccessGroupsRequest, cb?: (error: string, rep: DisassociateAccessGroupsResponse) => void): Promise<DisassociateAccessGroupsResponse>;
    /**
     * 删除文件系统，不允许删除非空文件系统。
     */
    DeleteFileSystem(req: DeleteFileSystemRequest, cb?: (error: string, rep: DeleteFileSystemResponse) => void): Promise<DeleteFileSystemResponse>;
    /**
     * 查看文件系统详细信息。
     */
    DescribeFileSystem(req: DescribeFileSystemRequest, cb?: (error: string, rep: DescribeFileSystemResponse) => void): Promise<DescribeFileSystemResponse>;
    /**
     * 创建文件系统（异步）。
     */
    CreateFileSystem(req: CreateFileSystemRequest, cb?: (error: string, rep: CreateFileSystemResponse) => void): Promise<CreateFileSystemResponse>;
    /**
     * 查看权限组详细信息。
     */
    DescribeAccessGroup(req: DescribeAccessGroupRequest, cb?: (error: string, rep: DescribeAccessGroupResponse) => void): Promise<DescribeAccessGroupResponse>;
    /**
     * 批量删除生命周期规则。
     */
    DeleteLifeCycleRules(req: DeleteLifeCycleRulesRequest, cb?: (error: string, rep: DeleteLifeCycleRulesResponse) => void): Promise<DeleteLifeCycleRulesResponse>;
    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     */
    CreateAccessRules(req: CreateAccessRulesRequest, cb?: (error: string, rep: CreateAccessRulesResponse) => void): Promise<CreateAccessRulesResponse>;
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     */
    ModifyFileSystem(req: ModifyFileSystemRequest, cb?: (error: string, rep: ModifyFileSystemResponse) => void): Promise<ModifyFileSystemResponse>;
    /**
     * 给挂载点绑定多个权限组。
     */
    AssociateAccessGroups(req: AssociateAccessGroupsRequest, cb?: (error: string, rep: AssociateAccessGroupsResponse) => void): Promise<AssociateAccessGroupsResponse>;
    /**
     * 查看文件系统列表。
     */
    DescribeFileSystems(req?: DescribeFileSystemsRequest, cb?: (error: string, rep: DescribeFileSystemsResponse) => void): Promise<DescribeFileSystemsResponse>;
    /**
     * 查看挂载点列表。
     */
    DescribeMountPoints(req: DescribeMountPointsRequest, cb?: (error: string, rep: DescribeMountPointsResponse) => void): Promise<DescribeMountPointsResponse>;
    /**
     * 修改权限组属性。
     */
    ModifyAccessGroup(req: ModifyAccessGroupRequest, cb?: (error: string, rep: ModifyAccessGroupResponse) => void): Promise<ModifyAccessGroupResponse>;
    /**
     * 通过文件系统ID查看回热任务列表。
     */
    DescribeRestoreTasks(req: DescribeRestoreTasksRequest, cb?: (error: string, rep: DescribeRestoreTasksResponse) => void): Promise<DescribeRestoreTasksResponse>;
    /**
     * 修改资源标签列表，全量覆盖。
     */
    ModifyResourceTags(req: ModifyResourceTagsRequest, cb?: (error: string, rep: ModifyResourceTagsResponse) => void): Promise<ModifyResourceTagsResponse>;
    /**
     * 通过文件系统ID查看生命周期规则列表。
     */
    DescribeLifeCycleRules(req: DescribeLifeCycleRulesRequest, cb?: (error: string, rep: DescribeLifeCycleRulesResponse) => void): Promise<DescribeLifeCycleRulesResponse>;
    /**
     * 删除权限组。
     */
    DeleteAccessGroup(req: DeleteAccessGroupRequest, cb?: (error: string, rep: DeleteAccessGroupResponse) => void): Promise<DeleteAccessGroupResponse>;
    /**
     * 创建权限组。
     */
    CreateAccessGroup(req: CreateAccessGroupRequest, cb?: (error: string, rep: CreateAccessGroupResponse) => void): Promise<CreateAccessGroupResponse>;
}
