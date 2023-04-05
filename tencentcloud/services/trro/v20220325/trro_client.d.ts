import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDeviceSessionDetailsResponse, DeleteProjectRequest, ModifyDeviceResponse, GetLicensesRequest, DescribePolicyResponse, BatchDeleteDevicesRequest, DescribeDeviceInfoRequest, DescribeSessionStatisticsByIntervalResponse, DescribeRecentSessionListRequest, DescribeProjectInfoRequest, ModifyPolicyRequest, DescribeDeviceInfoResponse, GetLicenseStatRequest, DescribeProjectListResponse, ModifyProjectResponse, BatchDeletePolicyResponse, GetLicenseStatResponse, DescribePolicyRequest, ModifyPolicyResponse, DescribeSessionStatisticsRequest, BatchDeleteDevicesResponse, ModifyProjectRequest, DescribeRecentSessionListResponse, ModifyDeviceRequest, DescribeProjectListRequest, BatchDeletePolicyRequest, DescribeDeviceSessionListResponse, DescribeProjectInfoResponse, DescribeDeviceListResponse, BoundLicensesRequest, DeleteProjectResponse, DescribeDeviceListRequest, GetDeviceLicenseResponse, CreateDeviceResponse, DescribeSessionStatisticsByIntervalRequest, CreateDeviceRequest, DescribeSessionStatisticsResponse, GetDevicesResponse, BoundLicensesResponse, DescribeDeviceSessionDetailsRequest, GetLicensesResponse, DescribeDeviceSessionListRequest, GetDevicesRequest, CreateProjectResponse, GetDeviceLicenseRequest, CreateProjectRequest } from "./trro_models";
/**
 * trro client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于获取项目信息
     */
    DescribeProjectInfo(req: DescribeProjectInfoRequest, cb?: (error: string, rep: DescribeProjectInfoResponse) => void): Promise<DescribeProjectInfoResponse>;
    /**
     * 查询用户设备的授权绑定情况
     */
    GetDevices(req: GetDevicesRequest, cb?: (error: string, rep: GetDevicesResponse) => void): Promise<GetDevicesResponse>;
    /**
     * 用于修改设备信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 用于查看权限配置
     */
    DescribePolicy(req: DescribePolicyRequest, cb?: (error: string, rep: DescribePolicyResponse) => void): Promise<DescribePolicyResponse>;
    /**
     * 统计license类型数量
     */
    GetLicenseStat(req?: GetLicenseStatRequest, cb?: (error: string, rep: GetLicenseStatResponse) => void): Promise<GetLicenseStatResponse>;
    /**
     * 获取各时间段的会话统计值
     */
    DescribeSessionStatisticsByInterval(req: DescribeSessionStatisticsByIntervalRequest, cb?: (error: string, rep: DescribeSessionStatisticsByIntervalResponse) => void): Promise<DescribeSessionStatisticsByIntervalResponse>;
    /**
     * 为推流设备绑定license，优先绑定到期时间最近的，到期时间相同优先绑定月包
     */
    BoundLicenses(req: BoundLicensesRequest, cb?: (error: string, rep: BoundLicensesResponse) => void): Promise<BoundLicensesResponse>;
    /**
     * 用于批量删除修改权限配置
     */
    BatchDeletePolicy(req: BatchDeletePolicyRequest, cb?: (error: string, rep: BatchDeletePolicyResponse) => void): Promise<BatchDeletePolicyResponse>;
    /**
     * 按授权查看license列表
     */
    GetLicenses(req: GetLicensesRequest, cb?: (error: string, rep: GetLicensesResponse) => void): Promise<GetLicensesResponse>;
    /**
     * 用于获取设备信息列表
     */
    DescribeDeviceList(req: DescribeDeviceListRequest, cb?: (error: string, rep: DescribeDeviceListResponse) => void): Promise<DescribeDeviceListResponse>;
    /**
     * 用于修改项目信息
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 获取设备会话数据详单
     */
    DescribeDeviceSessionDetails(req: DescribeDeviceSessionDetailsRequest, cb?: (error: string, rep: DescribeDeviceSessionDetailsResponse) => void): Promise<DescribeDeviceSessionDetailsResponse>;
    /**
     * 用于修改权限配置
     */
    ModifyPolicy(req: ModifyPolicyRequest, cb?: (error: string, rep: ModifyPolicyResponse) => void): Promise<ModifyPolicyResponse>;
    /**
     * 用于创建设备
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 用于批量删除设备
     */
    BatchDeleteDevices(req: BatchDeleteDevicesRequest, cb?: (error: string, rep: BatchDeleteDevicesResponse) => void): Promise<BatchDeleteDevicesResponse>;
    /**
     * 获取会话统计值
     */
    DescribeSessionStatistics(req: DescribeSessionStatisticsRequest, cb?: (error: string, rep: DescribeSessionStatisticsResponse) => void): Promise<DescribeSessionStatisticsResponse>;
    /**
     * 用于获取指定设备信息
     */
    DescribeDeviceInfo(req: DescribeDeviceInfoRequest, cb?: (error: string, rep: DescribeDeviceInfoResponse) => void): Promise<DescribeDeviceInfoResponse>;
    /**
     * 获取设备会话列表
     */
    DescribeDeviceSessionList(req: DescribeDeviceSessionListRequest, cb?: (error: string, rep: DescribeDeviceSessionListResponse) => void): Promise<DescribeDeviceSessionListResponse>;
    /**
     * 用于创建项目
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 获取最新设备会话列表
     */
    DescribeRecentSessionList(req: DescribeRecentSessionListRequest, cb?: (error: string, rep: DescribeRecentSessionListResponse) => void): Promise<DescribeRecentSessionListResponse>;
    /**
     * 获取设备已经绑定的可用授权数量
     */
    GetDeviceLicense(req: GetDeviceLicenseRequest, cb?: (error: string, rep: GetDeviceLicenseResponse) => void): Promise<GetDeviceLicenseResponse>;
    /**
     * 用于删除项目
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 用于获取项目列表
     */
    DescribeProjectList(req: DescribeProjectListRequest, cb?: (error: string, rep: DescribeProjectListResponse) => void): Promise<DescribeProjectListResponse>;
}
