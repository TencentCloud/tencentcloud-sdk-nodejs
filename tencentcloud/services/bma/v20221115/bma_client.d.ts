import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateBPFakeAPPResponse, CreateBPFakeAPPRequest, CreateBPFakeAPPListRequest, CreateBPFakeURLRequest, CreateBPFakeAPPListResponse, CreateBPFakeURLResponse, CreateBPFakeURLsRequest, CreateBPFakeURLsResponse } from "./bma_models";
/**
 * bma client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 仿冒应用举报
     */
    CreateBPFakeAPP(req: CreateBPFakeAPPRequest, cb?: (error: string, rep: CreateBPFakeAPPResponse) => void): Promise<CreateBPFakeAPPResponse>;
    /**
     * 仿冒网址举报
     */
    CreateBPFakeURL(req: CreateBPFakeURLRequest, cb?: (error: string, rep: CreateBPFakeURLResponse) => void): Promise<CreateBPFakeURLResponse>;
    /**
     * 批量仿冒网址举报
     */
    CreateBPFakeURLs(req: CreateBPFakeURLsRequest, cb?: (error: string, rep: CreateBPFakeURLsResponse) => void): Promise<CreateBPFakeURLsResponse>;
    /**
     * 批量仿冒应用举报
     */
    CreateBPFakeAPPList(req: CreateBPFakeAPPListRequest, cb?: (error: string, rep: CreateBPFakeAPPListResponse) => void): Promise<CreateBPFakeAPPListResponse>;
}
