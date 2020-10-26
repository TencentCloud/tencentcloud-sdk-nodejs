import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RefreshDomainResponse, DeleteDomainRequest, DescribeNoticeInfoRequest, ModifyDomainTagsResponse, DescribeDomainCertsRequest, RefreshDomainRequest, ResolveDomainRequest, DescribeNoticeInfoResponse, CreateDomainRequest, ResolveDomainResponse, ModifyDomainTagsRequest, DescribeDashboardResponse, DescribeDomainTagsResponse, DescribeDashboardRequest, DescribeDomainsResponse, DescribeDomainCertsResponse, DeleteDomainResponse, CreateDomainResponse, DescribeDomainTagsRequest, DescribeDomainsRequest } from "./sslpod_models";
/**
 * sslpod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取通知额度信息
     */
    DescribeNoticeInfo(req?: DescribeNoticeInfoRequest, cb?: (error: string, rep: DescribeNoticeInfoResponse) => void): Promise<DescribeNoticeInfoResponse>;
    /**
     * 强制重新检测域名
     */
    RefreshDomain(req: RefreshDomainRequest, cb?: (error: string, rep: RefreshDomainResponse) => void): Promise<RefreshDomainResponse>;
    /**
     * 修改域名tag
     */
    ModifyDomainTags(req: ModifyDomainTagsRequest, cb?: (error: string, rep: ModifyDomainTagsResponse) => void): Promise<ModifyDomainTagsResponse>;
    /**
     * 获取账号下所有tag
     */
    DescribeDomainTags(req?: DescribeDomainTagsRequest, cb?: (error: string, rep: DescribeDomainTagsResponse) => void): Promise<DescribeDomainTagsResponse>;
    /**
     * 获取域名关联证书
     */
    DescribeDomainCerts(req: DescribeDomainCertsRequest, cb?: (error: string, rep: DescribeDomainCertsResponse) => void): Promise<DescribeDomainCertsResponse>;
    /**
     * 获取仪表盘数据
     */
    DescribeDashboard(req?: DescribeDashboardRequest, cb?: (error: string, rep: DescribeDashboardResponse) => void): Promise<DescribeDashboardResponse>;
    /**
     * 通过searchType搜索已经添加的域名
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * 通过域名ID删除监控的域名
     */
    DeleteDomain(req: DeleteDomainRequest, cb?: (error: string, rep: DeleteDomainResponse) => void): Promise<DeleteDomainResponse>;
    /**
     * 通过域名端口添加监控
     */
    CreateDomain(req: CreateDomainRequest, cb?: (error: string, rep: CreateDomainResponse) => void): Promise<CreateDomainResponse>;
    /**
     * 解析域名获得多个IP地址
     */
    ResolveDomain(req: ResolveDomainRequest, cb?: (error: string, rep: ResolveDomainResponse) => void): Promise<ResolveDomainResponse>;
}
