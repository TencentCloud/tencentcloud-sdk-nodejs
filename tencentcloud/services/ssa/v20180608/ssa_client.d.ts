import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMappingResultsResponse, DescribeAssetDetailRequest, DescribeSocCheckItemListResponse, DescribeVulListResponse, DescribeSocAlertDetailsRequest, DescribeComplianceAssetListResponse, DescribeSocCheckResultListResponse, DescribeCheckConfigAssetListRequest, SaDivulgeDataQueryPubRequest, DescribeComplianceListResponse, DescribeConfigListResponse, DescribeCheckConfigDetailResponse, DescribeAssetListResponse, DescribeSocAlertDetailsResponse, DescribeCheckConfigAssetListResponse, DescribeAssetListRequest, DescribeComplianceDetailResponse, DescribeAssetsMappingListResponse, DescribeSocAlertListResponse, DescribeComplianceListRequest, DescribeVulListRequest, DescribeLeakDetectionListRequest, DescribeEventDetailResponse, DescribeSafetyEventListResponse, DescribeSocCheckResultListRequest, DescribeSafetyEventListRequest, DescribeSocAlertListRequest, SaDivulgeDataQueryPubResponse, DescribeConfigListRequest, DescribeSocCspmComplianceResponse, DescribeMappingResultsRequest, DescribeCheckConfigDetailRequest, DescribeLeakDetectionListResponse, DescribeSocCheckItemListRequest, DescribeEventDetailRequest, DescribeVulDetailRequest, DescribeAssetsMappingListRequest, DescribeComplianceAssetListRequest, DescribeAssetDetailResponse, DescribeVulDetailResponse, DescribeSocCspmComplianceRequest, DescribeComplianceDetailRequest } from "./ssa_models";
/**
 * ssa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 合规管理总览页检查项列表
     */
    DescribeComplianceList(req: DescribeComplianceListRequest, cb?: (error: string, rep: DescribeComplianceListResponse) => void): Promise<DescribeComplianceListResponse>;
    /**
     * 云配置检查项总览页检查项列表
     */
    DescribeConfigList(req: DescribeConfigListRequest, cb?: (error: string, rep: DescribeConfigListResponse) => void): Promise<DescribeConfigListResponse>;
    /**
     * 资产安全资产列表
     */
    DescribeAssetList(req: DescribeAssetListRequest, cb?: (error: string, rep: DescribeAssetListResponse) => void): Promise<DescribeAssetListResponse>;
    /**
     * 获取安全事件详情
     */
    DescribeEventDetail(req: DescribeEventDetailRequest, cb?: (error: string, rep: DescribeEventDetailResponse) => void): Promise<DescribeEventDetailResponse>;
    /**
     * 查询【通用字段】【泄露监测数据列表】
     */
    SaDivulgeDataQueryPub(req: SaDivulgeDataQueryPubRequest, cb?: (error: string, rep: SaDivulgeDataQueryPubResponse) => void): Promise<SaDivulgeDataQueryPubResponse>;
    /**
     * 合规管理-资产列表
     */
    DescribeComplianceAssetList(req: DescribeComplianceAssetListRequest, cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void): Promise<DescribeComplianceAssetListResponse>;
    /**
     * 云安全配置管理资产组列表
     */
    DescribeCheckConfigAssetList(req: DescribeCheckConfigAssetListRequest, cb?: (error: string, rep: DescribeCheckConfigAssetListResponse) => void): Promise<DescribeCheckConfigAssetListResponse>;
    /**
     * 获取泄露列表
     */
    DescribeLeakDetectionList(req: DescribeLeakDetectionListRequest, cb?: (error: string, rep: DescribeLeakDetectionListResponse) => void): Promise<DescribeLeakDetectionListResponse>;
    /**
     * 资产测绘-测绘列表
     */
    DescribeAssetsMappingList(req: DescribeAssetsMappingListRequest, cb?: (error: string, rep: DescribeAssetsMappingListResponse) => void): Promise<DescribeAssetsMappingListResponse>;
    /**
     * 合规详情项
     */
    DescribeSocCspmCompliance(req?: DescribeSocCspmComplianceRequest, cb?: (error: string, rep: DescribeSocCspmComplianceResponse) => void): Promise<DescribeSocCspmComplianceResponse>;
    /**
     * 获取测绘列表
     */
    DescribeMappingResults(req: DescribeMappingResultsRequest, cb?: (error: string, rep: DescribeMappingResultsResponse) => void): Promise<DescribeMappingResultsResponse>;
    /**
     * 云安全配置检查项列表
     */
    DescribeSocCheckItemList(req: DescribeSocCheckItemListRequest, cb?: (error: string, rep: DescribeSocCheckItemListResponse) => void): Promise<DescribeSocCheckItemListResponse>;
    /**
     * 漏洞管理页，获取漏洞列表
     */
    DescribeVulList(req: DescribeVulListRequest, cb?: (error: string, rep: DescribeVulListResponse) => void): Promise<DescribeVulListResponse>;
    /**
     * 资产安全页资产详情
     */
    DescribeAssetDetail(req: DescribeAssetDetailRequest, cb?: (error: string, rep: DescribeAssetDetailResponse) => void): Promise<DescribeAssetDetailResponse>;
    /**
     * 云安全配置检查项详情
     */
    DescribeCheckConfigDetail(req: DescribeCheckConfigDetailRequest, cb?: (error: string, rep: DescribeCheckConfigDetailResponse) => void): Promise<DescribeCheckConfigDetailResponse>;
    /**
     * 合规管理检查项详情
     */
    DescribeComplianceDetail(req: DescribeComplianceDetailRequest, cb?: (error: string, rep: DescribeComplianceDetailResponse) => void): Promise<DescribeComplianceDetailResponse>;
    /**
     * 获取安全事件列表
     */
    DescribeSafetyEventList(req: DescribeSafetyEventListRequest, cb?: (error: string, rep: DescribeSafetyEventListResponse) => void): Promise<DescribeSafetyEventListResponse>;
    /**
     * 返回告警详情
     */
    DescribeSocAlertDetails(req: DescribeSocAlertDetailsRequest, cb?: (error: string, rep: DescribeSocAlertDetailsResponse) => void): Promise<DescribeSocAlertDetailsResponse>;
    /**
     * 拉取告警列表
     */
    DescribeSocAlertList(req: DescribeSocAlertListRequest, cb?: (error: string, rep: DescribeSocAlertListResponse) => void): Promise<DescribeSocAlertListResponse>;
    /**
     * 漏洞列表页，获取漏洞详情信息
     */
    DescribeVulDetail(req: DescribeVulDetailRequest, cb?: (error: string, rep: DescribeVulDetailResponse) => void): Promise<DescribeVulDetailResponse>;
    /**
     * 云安全配置检查项结果列表
     */
    DescribeSocCheckResultList(req: DescribeSocCheckResultListRequest, cb?: (error: string, rep: DescribeSocCheckResultListResponse) => void): Promise<DescribeSocCheckResultListResponse>;
}
