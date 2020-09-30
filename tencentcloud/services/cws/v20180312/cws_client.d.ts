import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySiteAttributeRequest, DescribeSitesResponse, DescribeMonitorsResponse, DeleteSitesRequest, DescribeConfigRequest, DescribeVulsRequest, ModifyConfigAttributeResponse, CreateSitesResponse, DescribeVulsNumberRequest, ModifyMonitorAttributeResponse, ModifySiteAttributeResponse, CreateVulsReportRequest, CreateSitesScansResponse, DescribeSiteQuotaResponse, DescribeVulsNumberResponse, CreateVulsMisinformationRequest, DescribeVulsNumberTimelineRequest, CreateSitesScansRequest, CreateMonitorsResponse, DescribeVulsResponse, VerifySitesResponse, CreateMonitorsRequest, DeleteMonitorsResponse, CreateVulsMisinformationResponse, VerifySitesRequest, ModifyMonitorAttributeRequest, DescribeVulsNumberTimelineResponse, CreateVulsReportResponse, CreateSitesRequest, ModifyConfigAttributeRequest, DescribeMonitorsRequest, DeleteSitesResponse, DeleteMonitorsRequest, DescribeSitesVerificationResponse, DescribeConfigResponse, DescribeSitesRequest, DescribeSiteQuotaRequest, DescribeSitesVerificationRequest } from "./cws_models";
/**
 * cws client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (CreateVulsReport) 用于生成漏洞报告并返回下载链接。
     */
    CreateVulsReport(req: CreateVulsReportRequest, cb?: (error: string, rep: CreateVulsReportResponse) => void): Promise<CreateVulsReportResponse>;
    /**
     * 本接口 (DescribeVuls) 用于查询一个或多个漏洞的详细信息。
     */
    DescribeVuls(req: DescribeVulsRequest, cb?: (error: string, rep: DescribeVulsResponse) => void): Promise<DescribeVulsResponse>;
    /**
     * 本接口 (ModifyMonitorAttribute) 用于修改监测任务的属性。
     */
    ModifyMonitorAttribute(req: ModifyMonitorAttributeRequest, cb?: (error: string, rep: ModifyMonitorAttributeResponse) => void): Promise<ModifyMonitorAttributeResponse>;
    /**
     * 本接口（CreateSitesScans）用于新增一个或多个站点的单次扫描任务。
     */
    CreateSitesScans(req: CreateSitesScansRequest, cb?: (error: string, rep: CreateSitesScansResponse) => void): Promise<CreateSitesScansResponse>;
    /**
     * 本接口（CreateSites）用于新增一个或多个站点。
     */
    CreateSites(req: CreateSitesRequest, cb?: (error: string, rep: CreateSitesResponse) => void): Promise<CreateSitesResponse>;
    /**
     * 本接口（CreateVulsMisinformation）可以用于新增一个或多个漏洞误报信息。
     */
    CreateVulsMisinformation(req: CreateVulsMisinformationRequest, cb?: (error: string, rep: CreateVulsMisinformationResponse) => void): Promise<CreateVulsMisinformationResponse>;
    /**
     * 本接口 (DescribeConfig) 用于查询用户配置的详细信息。
     */
    DescribeConfig(req?: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 本接口 (DescribeSites) 用于查询一个或多个站点的详细信息。
     */
    DescribeSites(req: DescribeSitesRequest, cb?: (error: string, rep: DescribeSitesResponse) => void): Promise<DescribeSitesResponse>;
    /**
     * 本接口 (DescribeSitesVerification) 用于查询一个或多个待验证站点的验证信息。
     */
    DescribeSitesVerification(req: DescribeSitesVerificationRequest, cb?: (error: string, rep: DescribeSitesVerificationResponse) => void): Promise<DescribeSitesVerificationResponse>;
    /**
     * 本接口 (ModifySiteAttribute) 用于修改站点的属性。
     */
    ModifySiteAttribute(req: ModifySiteAttributeRequest, cb?: (error: string, rep: ModifySiteAttributeResponse) => void): Promise<ModifySiteAttributeResponse>;
    /**
     * 本接口 (ModifyConfigAttribute) 用于修改用户配置的属性。
     */
    ModifyConfigAttribute(req: ModifyConfigAttributeRequest, cb?: (error: string, rep: ModifyConfigAttributeResponse) => void): Promise<ModifyConfigAttributeResponse>;
    /**
     * 本接口 (DescribeVulsNumberTimeline) 用于查询漏洞数随时间变化统计信息。
     */
    DescribeVulsNumberTimeline(req?: DescribeVulsNumberTimelineRequest, cb?: (error: string, rep: DescribeVulsNumberTimelineResponse) => void): Promise<DescribeVulsNumberTimelineResponse>;
    /**
     * 本接口 (VerifySites) 用于验证一个或多个待验证站点。
     */
    VerifySites(req: VerifySitesRequest, cb?: (error: string, rep: VerifySitesResponse) => void): Promise<VerifySitesResponse>;
    /**
     * 本接口 (DeleteMonitors) 用于删除用户监控任务。
     */
    DeleteMonitors(req: DeleteMonitorsRequest, cb?: (error: string, rep: DeleteMonitorsResponse) => void): Promise<DeleteMonitorsResponse>;
    /**
     * 本接口（CreateMonitors）用于新增一个或多个站点的监测任务。
     */
    CreateMonitors(req: CreateMonitorsRequest, cb?: (error: string, rep: CreateMonitorsResponse) => void): Promise<CreateMonitorsResponse>;
    /**
     * 本接口 (DeleteSites) 用于删除站点。
     */
    DeleteSites(req: DeleteSitesRequest, cb?: (error: string, rep: DeleteSitesResponse) => void): Promise<DeleteSitesResponse>;
    /**
     * 本接口 (DescribeVulsNumber) 用于查询用户网站的漏洞总计数量。
     */
    DescribeVulsNumber(req?: DescribeVulsNumberRequest, cb?: (error: string, rep: DescribeVulsNumberResponse) => void): Promise<DescribeVulsNumberResponse>;
    /**
     * 本接口 (DescribeMonitors) 用于查询一个或多个监控任务的详细信息。
     */
    DescribeMonitors(req: DescribeMonitorsRequest, cb?: (error: string, rep: DescribeMonitorsResponse) => void): Promise<DescribeMonitorsResponse>;
    /**
     * 本接口 (DescribeSiteQuota) 用于查询用户购买的扫描次数总数和已使用数。
     */
    DescribeSiteQuota(req?: DescribeSiteQuotaRequest, cb?: (error: string, rep: DescribeSiteQuotaResponse) => void): Promise<DescribeSiteQuotaResponse>;
}
