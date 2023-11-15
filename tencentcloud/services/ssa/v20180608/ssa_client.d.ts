import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAssetDetailRequest, DescribeSocCheckItemListResponse, DescribeAlarmStatResponse, SaEventPubRequest, DescribeConfigListResponse, DescribeCheckConfigDetailResponse, DescribeAssetListResponse, DescribeCheckConfigAssetListResponse, SaEventPubResponse, DescribeVulListRequest, DescribeLeakDetectionListRequest, DescribeSocAlertListRequest, DescribeConfigListRequest, DescribeComplianceDetailResponse, SaDivulgeScanRuleMutateRequest, DescribeAssetDetailListRequest, DescribeMappingResultsResponse, DescribeCheckConfigAssetListRequest, DescribeSocCheckResultListResponse, DescribeCheckConfigDetailRequest, DescribeAssetListRequest, DescribeComplianceAssetListRequest, DescribeEventDetailResponse, DescribeMappingResultsRequest, DescribeDomainListResponse, DescribeSocCspmComplianceRequest, DescribeComplianceListResponse, DescribeSocAlertDetailsResponse, DescribeSocCheckResultListRequest, DescribeSocAlertDetailsRequest, SaDivulgeScanRuleMutateResponse, DescribeSocCspmComplianceResponse, DescribeSocCheckItemListRequest, DescribeComplianceDetailRequest, DescribeVulListResponse, DescribeComplianceAssetListResponse, DescribeAlarmStatRequest, DescribeDomainListRequest, DescribeComplianceListRequest, DescribeLeakDetectionListResponse, DescribeAssetDetailListResponse, DescribeEventDetailRequest, DescribeVulDetailRequest, DescribeSocAlertListResponse, DescribeAssetDetailResponse, DescribeVulDetailResponse } from "./ssa_models";
/**
 * ssa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 资产条件查询
     */
    DescribeAssetDetailList(req: DescribeAssetDetailListRequest, cb?: (error: string, rep: DescribeAssetDetailListResponse) => void): Promise<DescribeAssetDetailListResponse>;
    /**
     * 云配置检查项总览页检查项列表
     */
    DescribeConfigList(req: DescribeConfigListRequest, cb?: (error: string, rep: DescribeConfigListResponse) => void): Promise<DescribeConfigListResponse>;
    /**
     * 获取泄露列表
     */
    DescribeLeakDetectionList(req: DescribeLeakDetectionListRequest, cb?: (error: string, rep: DescribeLeakDetectionListResponse) => void): Promise<DescribeLeakDetectionListResponse>;
    /**
     * 获取测绘列表
     */
    DescribeMappingResults(req: DescribeMappingResultsRequest, cb?: (error: string, rep: DescribeMappingResultsResponse) => void): Promise<DescribeMappingResultsResponse>;
    /**
     * 获取安全事件详情
     */
    DescribeEventDetail(req: DescribeEventDetailRequest, cb?: (error: string, rep: DescribeEventDetailResponse) => void): Promise<DescribeEventDetailResponse>;
    /**
     * 合规管理-资产列表
     */
    DescribeComplianceAssetList(req: DescribeComplianceAssetListRequest, cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void): Promise<DescribeComplianceAssetListResponse>;
    /**
     * 域名列表信息
     */
    DescribeDomainList(req: DescribeDomainListRequest, cb?: (error: string, rep: DescribeDomainListResponse) => void): Promise<DescribeDomainListResponse>;
    /**
     * 云安全配置检查项列表
     */
    DescribeSocCheckItemList(req: DescribeSocCheckItemListRequest, cb?: (error: string, rep: DescribeSocCheckItemListResponse) => void): Promise<DescribeSocCheckItemListResponse>;
    /**
     * 资产安全页资产详情
     */
    DescribeAssetDetail(req: DescribeAssetDetailRequest, cb?: (error: string, rep: DescribeAssetDetailResponse) => void): Promise<DescribeAssetDetailResponse>;
    /**
     * 安全事件通用字段
     */
    SaEventPub(req: SaEventPubRequest, cb?: (error: string, rep: SaEventPubResponse) => void): Promise<SaEventPubResponse>;
    /**
     * SaDivulgeScanRuleMutate
     */
    SaDivulgeScanRuleMutate(req: SaDivulgeScanRuleMutateRequest, cb?: (error: string, rep: SaDivulgeScanRuleMutateResponse) => void): Promise<SaDivulgeScanRuleMutateResponse>;
    /**
     * 合规管理总览页检查项列表
     */
    DescribeComplianceList(req: DescribeComplianceListRequest, cb?: (error: string, rep: DescribeComplianceListResponse) => void): Promise<DescribeComplianceListResponse>;
    /**
     * 资产安全资产列表
     */
    DescribeAssetList(req: DescribeAssetListRequest, cb?: (error: string, rep: DescribeAssetListResponse) => void): Promise<DescribeAssetListResponse>;
    /**
     * 云安全配置管理资产组列表
     */
    DescribeCheckConfigAssetList(req: DescribeCheckConfigAssetListRequest, cb?: (error: string, rep: DescribeCheckConfigAssetListResponse) => void): Promise<DescribeCheckConfigAssetListResponse>;
    /**
     * 漏洞管理页，获取漏洞列表
     */
    DescribeVulList(req: DescribeVulListRequest, cb?: (error: string, rep: DescribeVulListResponse) => void): Promise<DescribeVulListResponse>;
    /**
     * 云安全配置检查项结果列表
     */
    DescribeSocCheckResultList(req: DescribeSocCheckResultListRequest, cb?: (error: string, rep: DescribeSocCheckResultListResponse) => void): Promise<DescribeSocCheckResultListResponse>;
    /**
     * 返回告警详情
     */
    DescribeSocAlertDetails(req: DescribeSocAlertDetailsRequest, cb?: (error: string, rep: DescribeSocAlertDetailsResponse) => void): Promise<DescribeSocAlertDetailsResponse>;
    /**
     * 安全大屏-用户威胁告警信息
     */
    DescribeAlarmStat(req: DescribeAlarmStatRequest, cb?: (error: string, rep: DescribeAlarmStatResponse) => void): Promise<DescribeAlarmStatResponse>;
    /**
     * 合规详情项
     */
    DescribeSocCspmCompliance(req?: DescribeSocCspmComplianceRequest, cb?: (error: string, rep: DescribeSocCspmComplianceResponse) => void): Promise<DescribeSocCspmComplianceResponse>;
    /**
     * 拉取告警列表
     */
    DescribeSocAlertList(req: DescribeSocAlertListRequest, cb?: (error: string, rep: DescribeSocAlertListResponse) => void): Promise<DescribeSocAlertListResponse>;
    /**
     * 云安全配置检查项详情
     */
    DescribeCheckConfigDetail(req: DescribeCheckConfigDetailRequest, cb?: (error: string, rep: DescribeCheckConfigDetailResponse) => void): Promise<DescribeCheckConfigDetailResponse>;
    /**
     * 合规管理检查项详情
     */
    DescribeComplianceDetail(req: DescribeComplianceDetailRequest, cb?: (error: string, rep: DescribeComplianceDetailResponse) => void): Promise<DescribeComplianceDetailResponse>;
    /**
     * 漏洞列表页，获取漏洞详情信息
     */
    DescribeVulDetail(req: DescribeVulDetailRequest, cb?: (error: string, rep: DescribeVulDetailResponse) => void): Promise<DescribeVulDetailResponse>;
}
