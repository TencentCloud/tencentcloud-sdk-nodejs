import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateFileSystemResponse, ModifyDataRepositoryBandwidthResponse, DescribeClusterRoleTokenRequest, DescribeFileSystemsResponse, ExpandCapacityResponse, DescribeClusterRoleTokenResponse, BatchDeleteClientNodesResponse, QueryCrossVpcSubnetSupportForClientNodeRequest, DeleteCrossVpcSubnetSupportForClientNodeRequest, AttachFileSystemBucketRequest, DeleteFileSystemRequest, DescribeFileSystemBucketsRequest, BatchAddClientNodesResponse, AttachFileSystemBucketResponse, CreateFileSystemRequest, DeleteFileSystemResponse, ExpandCapacityRequest, DetachFileSystemBucketRequest, QueryDataRepositoryBandwidthResponse, QueryDataRepositoryBandwidthRequest, BatchDeleteClientNodesRequest, QueryCrossVpcSubnetSupportForClientNodeResponse, DescribeFileSystemsRequest, DescribeClusterClientTokenRequest, AddCrossVpcSubnetSupportForClientNodeResponse, CreateDataRepositoryTaskResponse, DescribeClusterRolesResponse, DeleteCrossVpcSubnetSupportForClientNodeResponse, DescribeDataRepositoryTaskStatusResponse, BatchAddClientNodesRequest, AddCrossVpcSubnetSupportForClientNodeRequest, DetachFileSystemBucketResponse, DescribeFileSystemBucketsResponse, DescribeClientNodesRequest, ModifyDataRepositoryBandwidthRequest, DescribeClusterRolesRequest, CreateDataRepositoryTaskRequest, DescribeClientNodesResponse, DescribeDataRepositoryTaskStatusRequest, DescribeClusterClientTokenResponse } from "./goosefs_models";
/**
 * goosefs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询GooseFS集群角色
     */
    DescribeClusterRoles(req: DescribeClusterRolesRequest, cb?: (error: string, rep: DescribeClusterRolesResponse) => void): Promise<DescribeClusterRolesResponse>;
    /**
     * 删除文件系统
     */
    DeleteFileSystem(req: DeleteFileSystemRequest, cb?: (error: string, rep: DeleteFileSystemResponse) => void): Promise<DeleteFileSystemResponse>;
    /**
     * 为客户端节点添加跨vpc或子网访问能力
     */
    AddCrossVpcSubnetSupportForClientNode(req: AddCrossVpcSubnetSupportForClientNodeRequest, cb?: (error: string, rep: AddCrossVpcSubnetSupportForClientNodeResponse) => void): Promise<AddCrossVpcSubnetSupportForClientNodeResponse>;
    /**
     * 批量添加客户端节点
     */
    BatchAddClientNodes(req: BatchAddClientNodesRequest, cb?: (error: string, rep: BatchAddClientNodesResponse) => void): Promise<BatchAddClientNodesResponse>;
    /**
     * 解绑文件系统与Bucket的映射
     */
    DetachFileSystemBucket(req: DetachFileSystemBucketRequest, cb?: (error: string, rep: DetachFileSystemBucketResponse) => void): Promise<DetachFileSystemBucketResponse>;
    /**
     * 列出所有的文件系统
     */
    DescribeFileSystems(req: DescribeFileSystemsRequest, cb?: (error: string, rep: DescribeFileSystemsResponse) => void): Promise<DescribeFileSystemsResponse>;
    /**
     * 查询数据流动带宽
     */
    QueryDataRepositoryBandwidth(req: QueryDataRepositoryBandwidthRequest, cb?: (error: string, rep: QueryDataRepositoryBandwidthResponse) => void): Promise<QueryDataRepositoryBandwidthResponse>;
    /**
     * 罗列文件系统关联的Bucket映射
     */
    DescribeFileSystemBuckets(req: DescribeFileSystemBucketsRequest, cb?: (error: string, rep: DescribeFileSystemBucketsResponse) => void): Promise<DescribeFileSystemBucketsResponse>;
    /**
     * 列出集群中所有的客户端节点
     */
    DescribeClientNodes(req: DescribeClientNodesRequest, cb?: (error: string, rep: DescribeClientNodesResponse) => void): Promise<DescribeClientNodesResponse>;
    /**
     * 获取数据流通任务实时状态，用作客户端控制
     */
    DescribeDataRepositoryTaskStatus(req: DescribeDataRepositoryTaskStatusRequest, cb?: (error: string, rep: DescribeDataRepositoryTaskStatusResponse) => void): Promise<DescribeDataRepositoryTaskStatusResponse>;
    /**
     * 为客户端节点删除跨vpc子网访问能力
     */
    DeleteCrossVpcSubnetSupportForClientNode(req: DeleteCrossVpcSubnetSupportForClientNodeRequest, cb?: (error: string, rep: DeleteCrossVpcSubnetSupportForClientNodeResponse) => void): Promise<DeleteCrossVpcSubnetSupportForClientNodeResponse>;
    /**
     * 修改数据流动带宽
     */
    ModifyDataRepositoryBandwidth(req: ModifyDataRepositoryBandwidthRequest, cb?: (error: string, rep: ModifyDataRepositoryBandwidthResponse) => void): Promise<ModifyDataRepositoryBandwidthResponse>;
    /**
     * 为文件系统关联Bucket
     */
    AttachFileSystemBucket(req: AttachFileSystemBucketRequest, cb?: (error: string, rep: AttachFileSystemBucketResponse) => void): Promise<AttachFileSystemBucketResponse>;
    /**
     * 批量删除客户端节点
     */
    BatchDeleteClientNodes(req: BatchDeleteClientNodesRequest, cb?: (error: string, rep: BatchDeleteClientNodesResponse) => void): Promise<BatchDeleteClientNodesResponse>;
    /**
     * 查询客户端节点跨vpc子网访问能力
     */
    QueryCrossVpcSubnetSupportForClientNode(req: QueryCrossVpcSubnetSupportForClientNodeRequest, cb?: (error: string, rep: QueryCrossVpcSubnetSupportForClientNodeResponse) => void): Promise<QueryCrossVpcSubnetSupportForClientNodeResponse>;
    /**
     * 查询GooseFS集群客户端凭证
     */
    DescribeClusterClientToken(req: DescribeClusterClientTokenRequest, cb?: (error: string, rep: DescribeClusterClientTokenResponse) => void): Promise<DescribeClusterClientTokenResponse>;
    /**
     * 创建文件系统
     */
    CreateFileSystem(req: CreateFileSystemRequest, cb?: (error: string, rep: CreateFileSystemResponse) => void): Promise<CreateFileSystemResponse>;
    /**
     * 扩展文件系统容量
     */
    ExpandCapacity(req: ExpandCapacityRequest, cb?: (error: string, rep: ExpandCapacityResponse) => void): Promise<ExpandCapacityResponse>;
    /**
     * 查询GooseFS集群角色凭证
     */
    DescribeClusterRoleToken(req: DescribeClusterRoleTokenRequest, cb?: (error: string, rep: DescribeClusterRoleTokenResponse) => void): Promise<DescribeClusterRoleTokenResponse>;
    /**
     * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
     */
    CreateDataRepositoryTask(req: CreateDataRepositoryTaskRequest, cb?: (error: string, rep: CreateDataRepositoryTaskResponse) => void): Promise<CreateDataRepositoryTaskResponse>;
}
