import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCRWorkInfoRequest, DescribeCRWorkInfoResponse, CreateCRRightRequest, CreateCRRightResponse, CreateCRBlockRequest, CreateCRBlockResponse, CreateCRCompanyVerifyResponse, CreateCRCompanyVerifyRequest } from "./bma_models";
/**
 * bma client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询作品基本信息
     */
    DescribeCRWorkInfo(req: DescribeCRWorkInfoRequest, cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void): Promise<DescribeCRWorkInfoResponse>;
    /**
     * 版权保护-新建发函接口
     */
    CreateCRRight(req: CreateCRRightRequest, cb?: (error: string, rep: CreateCRRightResponse) => void): Promise<CreateCRRightResponse>;
    /**
     * 版权保护-新建拦截接口
     */
    CreateCRBlock(req: CreateCRBlockRequest, cb?: (error: string, rep: CreateCRBlockResponse) => void): Promise<CreateCRBlockResponse>;
    /**
     * 品牌经营管家-版权保护模块企业认证接口
     */
    CreateCRCompanyVerify(req: CreateCRCompanyVerifyRequest, cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void): Promise<CreateCRCompanyVerifyResponse>;
}
