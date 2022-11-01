import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnlinkPrometheusResponse, DescribeMeshResponse, UnlinkClusterResponse, LinkClusterListResponse, ModifyMeshResponse, CreateMeshResponse, LinkClusterListRequest, UnlinkPrometheusRequest, LinkPrometheusRequest, DeleteMeshResponse, DeleteMeshRequest, LinkPrometheusResponse, DescribeMeshRequest, CreateMeshRequest, DescribeMeshListRequest, UnlinkClusterRequest, ModifyMeshRequest, DescribeMeshListResponse } from "./tcm_models";
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
     * 解关联集群
     */
    UnlinkCluster(req: UnlinkClusterRequest, cb?: (error: string, rep: UnlinkClusterResponse) => void): Promise<UnlinkClusterResponse>;
    /**
     * 解除关联Prometheus
     */
    UnlinkPrometheus(req: UnlinkPrometheusRequest, cb?: (error: string, rep: UnlinkPrometheusResponse) => void): Promise<UnlinkPrometheusResponse>;
    /**
     * 修改网格
     */
    ModifyMesh(req: ModifyMeshRequest, cb?: (error: string, rep: ModifyMeshResponse) => void): Promise<ModifyMeshResponse>;
    /**
     * 创建网格
     */
    CreateMesh(req: CreateMeshRequest, cb?: (error: string, rep: CreateMeshResponse) => void): Promise<CreateMeshResponse>;
    /**
     * 查询网格详情
     */
    DescribeMesh(req: DescribeMeshRequest, cb?: (error: string, rep: DescribeMeshResponse) => void): Promise<DescribeMeshResponse>;
}
