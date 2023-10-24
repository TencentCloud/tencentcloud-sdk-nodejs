import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { MatchKBPURLListResponse, DescribeKBComponentVulnerabilityRequest, DescribeKBComponentVersionListRequest, DescribeKBComponentVulnerabilityResponse, SearchKBComponentRequest, DescribeKBVulnerabilityResponse, DescribeKBLicenseResponse, MatchKBPURLListRequest, DescribeKBVulnerabilityRequest, DescribeKBComponentResponse, DescribeKBComponentVersionListResponse, DescribeKBLicenseRequest, DescribeKBComponentRequest, SearchKBComponentResponse } from "./bsca_models";
/**
 * bsca client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据输入的组件名、组件类型搜索相应的组件，返回符合条件的组件列表
     */
    SearchKBComponent(req: SearchKBComponentRequest, cb?: (error: string, rep: SearchKBComponentResponse) => void): Promise<SearchKBComponentResponse>;
    /**
     * 查询特定组件的版本列表
     */
    DescribeKBComponentVersionList(req: DescribeKBComponentVersionListRequest, cb?: (error: string, rep: DescribeKBComponentVersionListResponse) => void): Promise<DescribeKBComponentVersionListResponse>;
    /**
     * 本接口(DescribeKBComponent)用于在知识库中查询开源组件信息。本接口根据用户输入的PURL在知识库中寻找对应的开源组件，其中Name为必填字段。
     */
    DescribeKBComponent(req: DescribeKBComponentRequest, cb?: (error: string, rep: DescribeKBComponentResponse) => void): Promise<DescribeKBComponentResponse>;
    /**
     * 本接口(DescribeKBLicense)用于在知识库中查询许可证信息。
     */
    DescribeKBLicense(req: DescribeKBLicenseRequest, cb?: (error: string, rep: DescribeKBLicenseResponse) => void): Promise<DescribeKBLicenseResponse>;
    /**
     * 本接口(MatchKBPURLList)用于在知识库中匹配与特征对应的开源组件列表。
     */
    MatchKBPURLList(req: MatchKBPURLListRequest, cb?: (error: string, rep: MatchKBPURLListResponse) => void): Promise<MatchKBPURLListResponse>;
    /**
     * 本接口(DescribeKBComponentVulnerability)用于在知识库中查询开源组件的漏洞信息。
     */
    DescribeKBComponentVulnerability(req: DescribeKBComponentVulnerabilityRequest, cb?: (error: string, rep: DescribeKBComponentVulnerabilityResponse) => void): Promise<DescribeKBComponentVulnerabilityResponse>;
    /**
     * 本接口(DescribeKBVulnerability)用于在知识库中查询漏洞详细信息，支持根据CVE、Vul ID、CNVD ID、CNNVD ID查询。
     */
    DescribeKBVulnerability(req: DescribeKBVulnerabilityRequest, cb?: (error: string, rep: DescribeKBVulnerabilityResponse) => void): Promise<DescribeKBVulnerabilityResponse>;
}
