import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnlinkPrometheusResponse, ModifyTracingConfigResponse, DescribeMeshResponse, ModifyAccessLogConfigRequest, UnlinkClusterResponse, LinkClusterListResponse, ModifyAccessLogConfigResponse, CreateMeshResponse, LinkClusterListRequest, UnlinkPrometheusRequest, DescribeMeshRequest, DescribeAccessLogConfigResponse, LinkPrometheusRequest, DeleteMeshResponse, DeleteMeshRequest, LinkPrometheusResponse, DescribeAccessLogConfigRequest, CreateMeshRequest, DescribeMeshListRequest, ModifyMeshResponse, UnlinkClusterRequest, ModifyTracingConfigRequest, ModifyMeshRequest, DescribeMeshListResponse } from "./tcm_models";
/**
 * tcm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除网格
     */
    DeleteMesh(req: DeleteMeshRequest, cb?: (error: string, rep: DeleteMeshResponse) => void): Promise<DeleteMeshResponse>;
    /**
     * 获取AccessLog配置
     */
    DescribeAccessLogConfig(req: DescribeAccessLogConfigRequest, cb?: (error: string, rep: DescribeAccessLogConfigResponse) => void): Promise<DescribeAccessLogConfigResponse>;
    /**
     * 关联集群
     */
    LinkClusterList(req: LinkClusterListRequest, cb?: (error: string, rep: LinkClusterListResponse) => void): Promise<LinkClusterListResponse>;
    /**
     * 关联Prometheus
     */
    LinkPrometheus(req: LinkPrometheusRequest, cb?: (error: string, rep: LinkPrometheusResponse) => void): Promise<LinkPrometheusResponse>;
    /**
     * 查询网格列表
     */
    DescribeMeshList(req: DescribeMeshListRequest, cb?: (error: string, rep: DescribeMeshListResponse) => void): Promise<DescribeMeshListResponse>;
    /**
     * 修改网格
     */
    ModifyMesh(req: ModifyMeshRequest, cb?: (error: string, rep: ModifyMeshResponse) => void): Promise<ModifyMeshResponse>;
    /**
     * 解关联集群
     */
    UnlinkCluster(req: UnlinkClusterRequest, cb?: (error: string, rep: UnlinkClusterResponse) => void): Promise<UnlinkClusterResponse>;
    /**
     * 修改 Tracing 配置
     */
    ModifyTracingConfig(req: ModifyTracingConfigRequest, cb?: (error: string, rep: ModifyTracingConfigResponse) => void): Promise<ModifyTracingConfigResponse>;
    /**
     * 修改访问日志配置
     */
    ModifyAccessLogConfig(req: ModifyAccessLogConfigRequest, cb?: (error: string, rep: ModifyAccessLogConfigResponse) => void): Promise<ModifyAccessLogConfigResponse>;
    /**
     * 创建网格
     */
    CreateMesh(req: CreateMeshRequest, cb?: (error: string, rep: CreateMeshResponse) => void): Promise<CreateMeshResponse>;
    /**
     * 查询网格详情
     */
    DescribeMesh(req: DescribeMeshRequest, cb?: (error: string, rep: DescribeMeshResponse) => void): Promise<DescribeMeshResponse>;
    /**
     * 解除关联Prometheus
     */
    UnlinkPrometheus(req: UnlinkPrometheusRequest, cb?: (error: string, rep: UnlinkPrometheusResponse) => void): Promise<UnlinkPrometheusResponse>;
}
