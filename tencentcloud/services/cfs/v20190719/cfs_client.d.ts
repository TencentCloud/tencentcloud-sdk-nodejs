import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteCfsFileSystemResponse, UpdateCfsRuleRequest, DescribeCfsFileSystemsRequest, DeleteMountTargetRequest, CreateCfsRuleRequest, DescribeAvailableZoneInfoResponse, UpdateCfsFileSystemNameResponse, UpdateCfsFileSystemNameRequest, DescribeCfsPGroupsResponse, DescribeCfsFileSystemClientsResponse, DeleteMountTargetResponse, DescribeMountTargetsResponse, DeleteCfsRuleResponse, DeleteCfsRuleRequest, UpdateCfsPGroupRequest, UpdateCfsRuleResponse, DescribeCfsFileSystemsResponse, CreateCfsFileSystemResponse, DescribeCfsPGroupsRequest, DescribeCfsFileSystemClientsRequest, CreateCfsPGroupRequest, DeleteCfsPGroupResponse, UpdateCfsFileSystemSizeLimitResponse, DescribeAvailableZoneInfoRequest, CreateCfsFileSystemRequest, DescribeMountTargetsRequest, CreateCfsPGroupResponse, SignUpCfsServiceRequest, DescribeCfsServiceStatusRequest, SignUpCfsServiceResponse, UpdateCfsFileSystemPGroupRequest, DescribeCfsServiceStatusResponse, CreateCfsRuleResponse, DescribeCfsRulesRequest, DeleteCfsPGroupRequest, UpdateCfsFileSystemSizeLimitRequest, DeleteCfsFileSystemRequest, UpdateCfsPGroupResponse, DescribeCfsRulesResponse, UpdateCfsFileSystemPGroupResponse } from "./cfs_models";
/**
 * cfs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于添加新文件系统
     */
    CreateCfsFileSystem(req: CreateCfsFileSystemRequest, cb?: (error: string, rep: CreateCfsFileSystemResponse) => void): Promise<CreateCfsFileSystemResponse>;
    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     */
    DescribeCfsPGroups(req?: DescribeCfsPGroupsRequest, cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void): Promise<DescribeCfsPGroupsResponse>;
    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     */
    DescribeCfsRules(req: DescribeCfsRulesRequest, cb?: (error: string, rep: DescribeCfsRulesResponse) => void): Promise<DescribeCfsRulesResponse>;
    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     */
    UpdateCfsFileSystemPGroup(req: UpdateCfsFileSystemPGroupRequest, cb?: (error: string, rep: UpdateCfsFileSystemPGroupResponse) => void): Promise<UpdateCfsFileSystemPGroupResponse>;
    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     */
    DescribeAvailableZoneInfo(req?: DescribeAvailableZoneInfoRequest, cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void): Promise<DescribeAvailableZoneInfoResponse>;
    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     */
    UpdateCfsFileSystemName(req: UpdateCfsFileSystemNameRequest, cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void): Promise<UpdateCfsFileSystemNameResponse>;
    /**
     * 用于删除文件系统
     */
    DeleteCfsFileSystem(req: DeleteCfsFileSystemRequest, cb?: (error: string, rep: DeleteCfsFileSystemResponse) => void): Promise<DeleteCfsFileSystemResponse>;
    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     */
    UpdateCfsFileSystemSizeLimit(req: UpdateCfsFileSystemSizeLimitRequest, cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void): Promise<UpdateCfsFileSystemSizeLimitResponse>;
    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     */
    CreateCfsPGroup(req: CreateCfsPGroupRequest, cb?: (error: string, rep: CreateCfsPGroupResponse) => void): Promise<CreateCfsPGroupResponse>;
    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     */
    UpdateCfsRule(req: UpdateCfsRuleRequest, cb?: (error: string, rep: UpdateCfsRuleResponse) => void): Promise<UpdateCfsRuleResponse>;
    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     */
    DescribeCfsServiceStatus(req?: DescribeCfsServiceStatusRequest, cb?: (error: string, rep: DescribeCfsServiceStatusResponse) => void): Promise<DescribeCfsServiceStatusResponse>;
    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     */
    DescribeCfsFileSystems(req: DescribeCfsFileSystemsRequest, cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void): Promise<DescribeCfsFileSystemsResponse>;
    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     */
    SignUpCfsService(req?: SignUpCfsServiceRequest, cb?: (error: string, rep: SignUpCfsServiceResponse) => void): Promise<SignUpCfsServiceResponse>;
    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     */
    CreateCfsRule(req: CreateCfsRuleRequest, cb?: (error: string, rep: CreateCfsRuleResponse) => void): Promise<CreateCfsRuleResponse>;
    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     */
    DeleteCfsPGroup(req: DeleteCfsPGroupRequest, cb?: (error: string, rep: DeleteCfsPGroupResponse) => void): Promise<DeleteCfsPGroupResponse>;
    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     */
    DescribeMountTargets(req: DescribeMountTargetsRequest, cb?: (error: string, rep: DescribeMountTargetsResponse) => void): Promise<DescribeMountTargetsResponse>;
    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     */
    UpdateCfsPGroup(req: UpdateCfsPGroupRequest, cb?: (error: string, rep: UpdateCfsPGroupResponse) => void): Promise<UpdateCfsPGroupResponse>;
    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     */
    DeleteCfsRule(req: DeleteCfsRuleRequest, cb?: (error: string, rep: DeleteCfsRuleResponse) => void): Promise<DeleteCfsRuleResponse>;
    /**
     * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
     */
    DescribeCfsFileSystemClients(req: DescribeCfsFileSystemClientsRequest, cb?: (error: string, rep: DescribeCfsFileSystemClientsResponse) => void): Promise<DescribeCfsFileSystemClientsResponse>;
    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     */
    DeleteMountTarget(req: DeleteMountTargetRequest, cb?: (error: string, rep: DeleteMountTargetResponse) => void): Promise<DeleteMountTargetResponse>;
}
