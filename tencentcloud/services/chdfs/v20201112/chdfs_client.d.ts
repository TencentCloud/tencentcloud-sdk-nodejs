import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateFileSystemResponse, ModifyResourceTagsRequest, DescribeAccessRulesRequest, ModifyFileSystemResponse, AssociateAccessGroupsRequest, ModifyAccessGroupRequest, DescribeFileSystemsResponse, DescribeFileSystemRequest, CreateMountPointRequest, DescribeAccessGroupsResponse, DescribeMountPointRequest, DescribeAccessGroupsRequest, CreateMountPointResponse, CreateFileSystemRequest, DisassociateAccessGroupsRequest, ModifyFileSystemRequest, CreateAccessGroupResponse, ModifyMountPointRequest, DescribeFileSystemResponse, DisassociateAccessGroupsResponse, DescribeAccessRulesResponse, DescribeFileSystemsRequest, ModifyResourceTagsResponse, DescribeMountPointsResponse, DescribeAccessGroupResponse, DescribeAccessGroupRequest, AssociateAccessGroupsResponse, DescribeMountPointsRequest, ModifyAccessGroupResponse, ModifyMountPointResponse, CreateAccessGroupRequest, DescribeMountPointResponse } from "./chdfs_models";
/**
 * chdfs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 给挂载点解绑多个权限组。
     */
    DisassociateAccessGroups(req: DisassociateAccessGroupsRequest, cb?: (error: string, rep: DisassociateAccessGroupsResponse) => void): Promise<DisassociateAccessGroupsResponse>;
    /**
     * 查看挂载点详细信息。
     */
    DescribeMountPoint(req: DescribeMountPointRequest, cb?: (error: string, rep: DescribeMountPointResponse) => void): Promise<DescribeMountPointResponse>;
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     */
    ModifyFileSystem(req: ModifyFileSystemRequest, cb?: (error: string, rep: ModifyFileSystemResponse) => void): Promise<ModifyFileSystemResponse>;
    /**
     * 查看文件系统详细信息。
     */
    DescribeFileSystem(req: DescribeFileSystemRequest, cb?: (error: string, rep: DescribeFileSystemResponse) => void): Promise<DescribeFileSystemResponse>;
    /**
     * 给挂载点绑定多个权限组。
     */
    AssociateAccessGroups(req: AssociateAccessGroupsRequest, cb?: (error: string, rep: AssociateAccessGroupsResponse) => void): Promise<AssociateAccessGroupsResponse>;
    /**
     * 修改资源标签列表，全量覆盖。
     */
    ModifyResourceTags(req: ModifyResourceTagsRequest, cb?: (error: string, rep: ModifyResourceTagsResponse) => void): Promise<ModifyResourceTagsResponse>;
    /**
     * 修改挂载点属性。
     */
    ModifyMountPoint(req: ModifyMountPointRequest, cb?: (error: string, rep: ModifyMountPointResponse) => void): Promise<ModifyMountPointResponse>;
    /**
     * 查看文件系统列表。
     */
    DescribeFileSystems(req?: DescribeFileSystemsRequest, cb?: (error: string, rep: DescribeFileSystemsResponse) => void): Promise<DescribeFileSystemsResponse>;
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     */
    CreateMountPoint(req: CreateMountPointRequest, cb?: (error: string, rep: CreateMountPointResponse) => void): Promise<CreateMountPointResponse>;
    /**
     * 查看挂载点列表。
     */
    DescribeMountPoints(req: DescribeMountPointsRequest, cb?: (error: string, rep: DescribeMountPointsResponse) => void): Promise<DescribeMountPointsResponse>;
    /**
     * 修改权限组属性。
     */
    ModifyAccessGroup(req: ModifyAccessGroupRequest, cb?: (error: string, rep: ModifyAccessGroupResponse) => void): Promise<ModifyAccessGroupResponse>;
    /**
     * 查看权限组详细信息。
     */
    DescribeAccessGroup(req: DescribeAccessGroupRequest, cb?: (error: string, rep: DescribeAccessGroupResponse) => void): Promise<DescribeAccessGroupResponse>;
    /**
     * 查看权限组列表。
     */
    DescribeAccessGroups(req: DescribeAccessGroupsRequest, cb?: (error: string, rep: DescribeAccessGroupsResponse) => void): Promise<DescribeAccessGroupsResponse>;
    /**
     * 创建权限组。
     */
    CreateAccessGroup(req: CreateAccessGroupRequest, cb?: (error: string, rep: CreateAccessGroupResponse) => void): Promise<CreateAccessGroupResponse>;
    /**
     * 创建文件系统（异步）。
     */
    CreateFileSystem(req: CreateFileSystemRequest, cb?: (error: string, rep: CreateFileSystemResponse) => void): Promise<CreateFileSystemResponse>;
    /**
     * 通过权限组ID查看权限规则列表。
     */
    DescribeAccessRules(req: DescribeAccessRulesRequest, cb?: (error: string, rep: DescribeAccessRulesResponse) => void): Promise<DescribeAccessRulesResponse>;
}
