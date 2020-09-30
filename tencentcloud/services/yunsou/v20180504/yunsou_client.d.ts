import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DataSearchResponse, DataSearchRequest, DataManipulationRequest, DataManipulationResponse } from "./yunsou_models";
/**
 * yunsou client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 上传云搜数据的API接口
     */
    DataManipulation(req: DataManipulationRequest, cb?: (error: string, rep: DataManipulationResponse) => void): Promise<DataManipulationResponse>;
    /**
     * 用于检索云搜中的数据
     */
    DataSearch(req: DataSearchRequest, cb?: (error: string, rep: DataSearchResponse) => void): Promise<DataSearchResponse>;
}
