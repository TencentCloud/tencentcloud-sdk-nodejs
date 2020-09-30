import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CheckDomainResponse, DescribeDomainPriceListRequest, DescribeDomainBaseInfoResponse, CreateDomainBatchRequest, CheckBatchStatusRequest, CheckBatchStatusResponse, DescribeTemplateListResponse, DescribeDomainBaseInfoRequest, DescribeTemplateListRequest, CreateDomainBatchResponse, DescribeDomainNameListRequest, DescribeDomainNameListResponse, DescribeDomainPriceListResponse, CheckDomainRequest } from "./domain_models";
/**
 * domain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
       * 本接口 (  DescribeDomainNameList ) 获取域名列表。
  
  默认接口请求频率限制：20次/秒。
  
       */
    DescribeDomainNameList(req: DescribeDomainNameListRequest, cb?: (error: string, rep: DescribeDomainNameListResponse) => void): Promise<DescribeDomainNameListResponse>;
    /**
       * 本接口 ( CreateDomainBatch ) 用于批量注册域名 。
  
  默认接口请求频率限制：20次/秒。
       */
    CreateDomainBatch(req: CreateDomainBatchRequest, cb?: (error: string, rep: CreateDomainBatchResponse) => void): Promise<CreateDomainBatchResponse>;
    /**
       * 本接口 (  DescribeDomainBaseInfo) 获取域名基础信息。
  
  默认接口请求频率限制：20次/秒。
  
       */
    DescribeDomainBaseInfo(req: DescribeDomainBaseInfoRequest, cb?: (error: string, rep: DescribeDomainBaseInfoResponse) => void): Promise<DescribeDomainBaseInfoResponse>;
    /**
       * 本接口 (DescribeTemplateList) 用于获取模板列表。
  
  默认接口请求频率限制：20次/秒。
  
       */
    DescribeTemplateList(req: DescribeTemplateListRequest, cb?: (error: string, rep: DescribeTemplateListResponse) => void): Promise<DescribeTemplateListResponse>;
    /**
     * 按照域名后缀获取对应的价格列表
     */
    DescribeDomainPriceList(req: DescribeDomainPriceListRequest, cb?: (error: string, rep: DescribeDomainPriceListResponse) => void): Promise<DescribeDomainPriceListResponse>;
    /**
       * 本接口 ( CheckBatchStatus ) 用于检查批量任务状态 。
  
  默认接口请求频率限制：20次/秒。
       */
    CheckBatchStatus(req: CheckBatchStatusRequest, cb?: (error: string, rep: CheckBatchStatusResponse) => void): Promise<CheckBatchStatusResponse>;
    /**
     * 检查域名是否可以注册。
     */
    CheckDomain(req: CheckDomainRequest, cb?: (error: string, rep: CheckDomainResponse) => void): Promise<CheckDomainResponse>;
}
