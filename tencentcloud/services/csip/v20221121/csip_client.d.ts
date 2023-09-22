import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDomainAssetsResponse, DeleteDomainAndIpRequest, DescribeDbAssetInfoResponse, DeleteRiskScanTaskRequest, DescribeScanReportListRequest, DescribeRiskCenterAssetViewVULRiskListRequest, CreateDomainAndIpRequest, DescribeSearchBugInfoResponse, StopRiskCenterTaskRequest, DescribeScanTaskListResponse, DescribeScanTaskListRequest, DescribeVpcAssetsResponse, CreateRiskCenterScanTaskRequest, DescribeTaskLogListResponse, DescribeScanReportListResponse, DescribeSearchBugInfoRequest, DescribeClusterPodAssetsRequest, DescribeSubnetAssetsRequest, AddNewBindRoleUserRequest, DescribeCVMAssetInfoResponse, DescribePublicIpAssetsResponse, DescribeTaskLogListRequest, DescribeDbAssetsRequest, DescribeRiskCenterAssetViewVULRiskListResponse, DescribeCVMAssetsRequest, DescribeListenerListResponse, DescribeTaskLogURLResponse, CreateRiskCenterScanTaskResponse, DescribeRiskCenterAssetViewPortRiskListResponse, DescribeSubnetAssetsResponse, DescribeDbAssetInfoRequest, DescribeRiskCenterAssetViewPortRiskListRequest, DescribeCVMAssetsResponse, DescribeVpcAssetsRequest, DeleteRiskScanTaskResponse, DescribeClusterPodAssetsResponse, DescribeListenerListRequest, DescribeDomainAssetsRequest, CreateDomainAndIpResponse, DescribePublicIpAssetsRequest, DeleteDomainAndIpResponse, DescribeDbAssetsResponse, AddNewBindRoleUserResponse, StopRiskCenterTaskResponse, DescribeCVMAssetInfoRequest, DescribeTaskLogURLRequest } from "./csip_models";
/**
 * csip client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除域名和ip请求
     */
    DeleteDomainAndIp(req: DeleteDomainAndIpRequest, cb?: (error: string, rep: DeleteDomainAndIpResponse) => void): Promise<DeleteDomainAndIpResponse>;
    /**
     * db资产详情
     */
    DescribeDbAssetInfo(req: DescribeDbAssetInfoRequest, cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void): Promise<DescribeDbAssetInfoResponse>;
    /**
     * 域名列表
     */
    DescribeDomainAssets(req: DescribeDomainAssetsRequest, cb?: (error: string, rep: DescribeDomainAssetsResponse) => void): Promise<DescribeDomainAssetsResponse>;
    /**
     * ip公网列表
     */
    DescribePublicIpAssets(req: DescribePublicIpAssetsRequest, cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void): Promise<DescribePublicIpAssetsResponse>;
    /**
     * csip角色授权绑定接口
     */
    AddNewBindRoleUser(req?: AddNewBindRoleUserRequest, cb?: (error: string, rep: AddNewBindRoleUserResponse) => void): Promise<AddNewBindRoleUserResponse>;
    /**
     * 查询clb监听器列表
     */
    DescribeListenerList(req: DescribeListenerListRequest, cb?: (error: string, rep: DescribeListenerListResponse) => void): Promise<DescribeListenerListResponse>;
    /**
     * 删除风险中心扫描任务
     */
    DeleteRiskScanTask(req: DeleteRiskScanTaskRequest, cb?: (error: string, rep: DeleteRiskScanTaskResponse) => void): Promise<DeleteRiskScanTaskResponse>;
    /**
     * 获取任务扫描报告列表
     */
    DescribeTaskLogList(req: DescribeTaskLogListRequest, cb?: (error: string, rep: DescribeTaskLogListResponse) => void): Promise<DescribeTaskLogListResponse>;
    /**
     * 获取资产视角的漏洞风险列表
     */
    DescribeRiskCenterAssetViewVULRiskList(req: DescribeRiskCenterAssetViewVULRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewVULRiskListResponse>;
    /**
     * 集群pod列表
     */
    DescribeClusterPodAssets(req: DescribeClusterPodAssetsRequest, cb?: (error: string, rep: DescribeClusterPodAssetsResponse) => void): Promise<DescribeClusterPodAssetsResponse>;
    /**
     * 获取vpc列表
     */
    DescribeVpcAssets(req: DescribeVpcAssetsRequest, cb?: (error: string, rep: DescribeVpcAssetsResponse) => void): Promise<DescribeVpcAssetsResponse>;
    /**
     * cvm列表
     */
    DescribeCVMAssets(req: DescribeCVMAssetsRequest, cb?: (error: string, rep: DescribeCVMAssetsResponse) => void): Promise<DescribeCVMAssetsResponse>;
    /**
     * 获取报告下载的临时链接
     */
    DescribeTaskLogURL(req: DescribeTaskLogURLRequest, cb?: (error: string, rep: DescribeTaskLogURLResponse) => void): Promise<DescribeTaskLogURLResponse>;
    /**
     * 创建风险中心扫描任务
     */
    CreateRiskCenterScanTask(req: CreateRiskCenterScanTaskRequest, cb?: (error: string, rep: CreateRiskCenterScanTaskResponse) => void): Promise<CreateRiskCenterScanTaskResponse>;
    /**
     * 立体防护中心查询漏洞信息
     */
    DescribeSearchBugInfo(req: DescribeSearchBugInfoRequest, cb?: (error: string, rep: DescribeSearchBugInfoResponse) => void): Promise<DescribeSearchBugInfoResponse>;
    /**
     * 获取扫描报告列表
     */
    DescribeScanReportList(req: DescribeScanReportListRequest, cb?: (error: string, rep: DescribeScanReportListResponse) => void): Promise<DescribeScanReportListResponse>;
    /**
     * 创建域名、ip相关信息
     */
    CreateDomainAndIp(req: CreateDomainAndIpRequest, cb?: (error: string, rep: CreateDomainAndIpResponse) => void): Promise<CreateDomainAndIpResponse>;
    /**
     * 获取扫描任务列表
     */
    DescribeScanTaskList(req: DescribeScanTaskListRequest, cb?: (error: string, rep: DescribeScanTaskListResponse) => void): Promise<DescribeScanTaskListResponse>;
    /**
     * 资产列表
     */
    DescribeDbAssets(req: DescribeDbAssetsRequest, cb?: (error: string, rep: DescribeDbAssetsResponse) => void): Promise<DescribeDbAssetsResponse>;
    /**
     * 获取资产视角的端口风险列表
     */
    DescribeRiskCenterAssetViewPortRiskList(req: DescribeRiskCenterAssetViewPortRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewPortRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewPortRiskListResponse>;
    /**
     * 停止扫风险中心扫描任务
     */
    StopRiskCenterTask(req: StopRiskCenterTaskRequest, cb?: (error: string, rep: StopRiskCenterTaskResponse) => void): Promise<StopRiskCenterTaskResponse>;
    /**
     * 获取子网列表
     */
    DescribeSubnetAssets(req: DescribeSubnetAssetsRequest, cb?: (error: string, rep: DescribeSubnetAssetsResponse) => void): Promise<DescribeSubnetAssetsResponse>;
    /**
     * cvm详情
     */
    DescribeCVMAssetInfo(req: DescribeCVMAssetInfoRequest, cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void): Promise<DescribeCVMAssetInfoResponse>;
}
