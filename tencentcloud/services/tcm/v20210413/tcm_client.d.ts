import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMeshResponse, ModifyMeshResponse, CreateMeshResponse, DeleteMeshResponse, DeleteMeshRequest, DescribeMeshRequest, CreateMeshRequest, DescribeMeshListRequest, ModifyMeshRequest, DescribeMeshListResponse } from "./tcm_models";
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
     * 创建网格
     */
    CreateMesh(req: CreateMeshRequest, cb?: (error: string, rep: CreateMeshResponse) => void): Promise<CreateMeshResponse>;
    /**
     * 修改网格
     */
    ModifyMesh(req: ModifyMeshRequest, cb?: (error: string, rep: ModifyMeshResponse) => void): Promise<ModifyMeshResponse>;
    /**
     * 查询网格详情
     */
    DescribeMesh(req: DescribeMeshRequest, cb?: (error: string, rep: DescribeMeshResponse) => void): Promise<DescribeMeshResponse>;
    /**
     * 查询网格列表
     */
    DescribeMeshList(req: DescribeMeshListRequest, cb?: (error: string, rep: DescribeMeshListResponse) => void): Promise<DescribeMeshListResponse>;
}
