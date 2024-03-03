import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteVolumeDataRequest, RetryRunsResponse, RunApplicationResponse, GetRunStatusRequest, DescribeRunsResponse, ImportTableFileResponse, RunApplicationRequest, GetRunMetadataFileResponse, CreateVolumeResponse, DeleteEnvironmentResponse, GetRunCallsRequest, RunWorkflowRequest, DescribeRunsRequest, CreateVolumeRequest, DescribeTablesRowsRequest, DescribeEnvironmentsResponse, ModifyVolumeResponse, DescribeTablesResponse, RetryRunsRequest, ImportTableFileRequest, DeleteVolumeResponse, TerminateRunGroupResponse, DescribeVolumesResponse, DeleteVolumeRequest, DeleteEnvironmentRequest, GetRunCallsResponse, DescribeRunGroupsResponse, TerminateRunGroupRequest, DescribeTablesRowsResponse, CreateEnvironmentResponse, GetRunMetadataFileRequest, RunWorkflowResponse, ModifyVolumeRequest, DescribeRunGroupsRequest, GetRunStatusResponse, DescribeTablesRequest, DeleteVolumeDataResponse, DescribeEnvironmentsRequest, DescribeVolumesRequest, CreateEnvironmentRequest } from "./omics_models";
/**
 * omics client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 导入表格文件。
     */
    ImportTableFile(req: ImportTableFileRequest, cb?: (error: string, rep: ImportTableFileResponse) => void): Promise<ImportTableFileResponse>;
    /**
     * 查询任务批次列表。
     */
    DescribeRunGroups(req: DescribeRunGroupsRequest, cb?: (error: string, rep: DescribeRunGroupsResponse) => void): Promise<DescribeRunGroupsResponse>;
    /**
     * 查询表格行数据。
     */
    DescribeTablesRows(req: DescribeTablesRowsRequest, cb?: (error: string, rep: DescribeTablesRowsResponse) => void): Promise<DescribeTablesRowsResponse>;
    /**
     * 删除缓存卷数据。
     */
    DeleteVolumeData(req: DeleteVolumeDataRequest, cb?: (error: string, rep: DeleteVolumeDataResponse) => void): Promise<DeleteVolumeDataResponse>;
    /**
     * 查询环境列表。
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 获取任务详情文件。
     */
    GetRunMetadataFile(req: GetRunMetadataFileRequest, cb?: (error: string, rep: GetRunMetadataFileResponse) => void): Promise<GetRunMetadataFileResponse>;
    /**
     * 创建缓存卷。
     */
    CreateVolume(req: CreateVolumeRequest, cb?: (error: string, rep: CreateVolumeResponse) => void): Promise<CreateVolumeResponse>;
    /**
     * 查询缓存卷列表。
     */
    DescribeVolumes(req: DescribeVolumesRequest, cb?: (error: string, rep: DescribeVolumesResponse) => void): Promise<DescribeVolumesResponse>;
    /**
     * 查询任务详情。
     */
    GetRunStatus(req: GetRunStatusRequest, cb?: (error: string, rep: GetRunStatusResponse) => void): Promise<GetRunStatusResponse>;
    /**
     * 运行应用。
     */
    RunApplication(req: RunApplicationRequest, cb?: (error: string, rep: RunApplicationResponse) => void): Promise<RunApplicationResponse>;
    /**
     * 运行工作流。
     */
    RunWorkflow(req: RunWorkflowRequest, cb?: (error: string, rep: RunWorkflowResponse) => void): Promise<RunWorkflowResponse>;
    /**
     * 创建组学平台计算环境。
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 重试任务。
     */
    RetryRuns(req: RetryRunsRequest, cb?: (error: string, rep: RetryRunsResponse) => void): Promise<RetryRunsResponse>;
    /**
     * 终止任务批次。
     */
    TerminateRunGroup(req: TerminateRunGroupRequest, cb?: (error: string, rep: TerminateRunGroupResponse) => void): Promise<TerminateRunGroupResponse>;
    /**
     * 查询任务列表。
     */
    DescribeRuns(req: DescribeRunsRequest, cb?: (error: string, rep: DescribeRunsResponse) => void): Promise<DescribeRunsResponse>;
    /**
     * 删除缓存卷。
     */
    DeleteVolume(req: DeleteVolumeRequest, cb?: (error: string, rep: DeleteVolumeResponse) => void): Promise<DeleteVolumeResponse>;
    /**
     * 修改缓存卷。
     */
    ModifyVolume(req: ModifyVolumeRequest, cb?: (error: string, rep: ModifyVolumeResponse) => void): Promise<ModifyVolumeResponse>;
    /**
     * 删除环境。
     */
    DeleteEnvironment(req: DeleteEnvironmentRequest, cb?: (error: string, rep: DeleteEnvironmentResponse) => void): Promise<DeleteEnvironmentResponse>;
    /**
     * 查询表格。
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
    /**
     * 查询作业详情。
     */
    GetRunCalls(req: GetRunCallsRequest, cb?: (error: string, rep: GetRunCallsResponse) => void): Promise<GetRunCallsResponse>;
}
