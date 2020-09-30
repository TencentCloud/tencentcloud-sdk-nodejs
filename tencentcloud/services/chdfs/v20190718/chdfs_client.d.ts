import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateFileSystemResponse, DescribeFileSystemResponse, ModifyFileSystemResponse, ModifyAccessGroupRequest, DescribeFileSystemsResponse, DescribeFileSystemRequest, CreateMountPointRequest, DeleteAccessGroupRequest, DeleteFileSystemRequest, DescribeMountPointRequest, DescribeAccessGroupsRequest, DeleteAccessGroupResponse, DeleteMountPointResponse, CreateMountPointResponse, CreateFileSystemRequest, ModifyFileSystemRequest, DescribeMountPointsResponse, DeleteMountPointRequest, DeleteFileSystemResponse, CreateAccessGroupResponse, ModifyMountPointRequest, DescribeAccessGroupsResponse, CreateAccessRulesResponse, DeleteAccessRulesRequest, DescribeAccessRulesResponse, DescribeFileSystemsRequest, CreateAccessRulesRequest, DeleteAccessRulesResponse, DescribeAccessRulesRequest, ModifyAccessRulesResponse, DescribeMountPointsRequest, ModifyAccessGroupResponse, ModifyMountPointResponse, ModifyAccessRulesRequest, CreateAccessGroupRequest, DescribeMountPointResponse } from "./chdfs_models";
/**
 * chdfs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看挂载点详细信息。
     */
    DescribeMountPoint(req: DescribeMountPointRequest, cb?: (error: string, rep: DescribeMountPointResponse) => void): Promise<DescribeMountPointResponse>;
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     */
    ModifyFileSystem(req: ModifyFileSystemRequest, cb?: (error: string, rep: ModifyFileSystemResponse) => void): Promise<ModifyFileSystemResponse>;
    /**
     * 删除文件系统，不允许删除非空文件系统。
     */
    DeleteFileSystem(req: DeleteFileSystemRequest, cb?: (error: string, rep: DeleteFileSystemResponse) => void): Promise<DeleteFileSystemResponse>;
    /**
     * 批量删除权限规则。
     */
    DeleteAccessRules(req: DeleteAccessRulesRequest, cb?: (error: string, rep: DeleteAccessRulesResponse) => void): Promise<DeleteAccessRulesResponse>;
    /**
     * 查看文件系统详细信息。
     */
    DescribeFileSystem(req: DescribeFileSystemRequest, cb?: (error: string, rep: DescribeFileSystemResponse) => void): Promise<DescribeFileSystemResponse>;
    /**
     * 查看权限组列表。
     */
    DescribeAccessGroups(req: DescribeAccessGroupsRequest, cb?: (error: string, rep: DescribeAccessGroupsResponse) => void): Promise<DescribeAccessGroupsResponse>;
    /**
     * 通过权限组ID查看权限规则列表。
     */
    DescribeAccessRules(req: DescribeAccessRulesRequest, cb?: (error: string, rep: DescribeAccessRulesResponse) => void): Promise<DescribeAccessRulesResponse>;
    /**
     * 查看文件系统列表。
     */
    DescribeFileSystems(req: DescribeFileSystemsRequest, cb?: (error: string, rep: DescribeFileSystemsResponse) => void): Promise<DescribeFileSystemsResponse>;
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     */
    CreateMountPoint(req: CreateMountPointRequest, cb?: (error: string, rep: CreateMountPointResponse) => void): Promise<CreateMountPointResponse>;
    /**
     * 通过文件系统ID或者权限组ID查看挂载点列表。
     */
    DescribeMountPoints(req: DescribeMountPointsRequest, cb?: (error: string, rep: DescribeMountPointsResponse) => void): Promise<DescribeMountPointsResponse>;
    /**
     * 修改权限组属性。
     */
    ModifyAccessGroup(req: ModifyAccessGroupRequest, cb?: (error: string, rep: ModifyAccessGroupResponse) => void): Promise<ModifyAccessGroupResponse>;
    /**
     * 批量修改权限规则属性，需要指定权限规则ID。
     */
    ModifyAccessRules(req: ModifyAccessRulesRequest, cb?: (error: string, rep: ModifyAccessRulesResponse) => void): Promise<ModifyAccessRulesResponse>;
    /**
     * 删除权限组。
     */
    DeleteAccessGroup(req: DeleteAccessGroupRequest, cb?: (error: string, rep: DeleteAccessGroupResponse) => void): Promise<DeleteAccessGroupResponse>;
    /**
     * 修改挂载点属性。
     */
    ModifyMountPoint(req: ModifyMountPointRequest, cb?: (error: string, rep: ModifyMountPointResponse) => void): Promise<ModifyMountPointResponse>;
    /**
     * 创建文件系统（异步）。
     */
    CreateFileSystem(req: CreateFileSystemRequest, cb?: (error: string, rep: CreateFileSystemResponse) => void): Promise<CreateFileSystemResponse>;
    /**
     * 创建权限组。
     */
    CreateAccessGroup(req: CreateAccessGroupRequest, cb?: (error: string, rep: CreateAccessGroupResponse) => void): Promise<CreateAccessGroupResponse>;
    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     */
    CreateAccessRules(req: CreateAccessRulesRequest, cb?: (error: string, rep: CreateAccessRulesResponse) => void): Promise<CreateAccessRulesResponse>;
    /**
     * 删除挂载点。
     */
    DeleteMountPoint(req: DeleteMountPointRequest, cb?: (error: string, rep: DeleteMountPointResponse) => void): Promise<DeleteMountPointResponse>;
}
