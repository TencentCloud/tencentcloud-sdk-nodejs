import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMeshResponse, DescribeMeshListRequest, DescribeMeshRequest, DescribeMeshListResponse } from "./tcm_models";
/**
 * tcm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询网格列表
     */
    DescribeMeshList(req: DescribeMeshListRequest, cb?: (error: string, rep: DescribeMeshListResponse) => void): Promise<DescribeMeshListResponse>;
    /**
     * 查询网格详情
     */
    DescribeMesh(req: DescribeMeshRequest, cb?: (error: string, rep: DescribeMeshResponse) => void): Promise<DescribeMeshResponse>;
}
