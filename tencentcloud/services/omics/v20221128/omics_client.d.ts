import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RetryRunsResponse, RunApplicationResponse, GetRunStatusRequest, DescribeRunsResponse, ImportTableFileResponse, DeleteEnvironmentResponse, GetRunCallsRequest, DescribeRunsRequest, DescribeTablesRowsRequest, DescribeEnvironmentsResponse, DescribeTablesResponse, RetryRunsRequest, ImportTableFileRequest, RunApplicationRequest, DeleteEnvironmentRequest, GetRunCallsResponse, DescribeRunGroupsResponse, DescribeTablesRowsResponse, CreateEnvironmentResponse, DescribeRunGroupsRequest, GetRunStatusResponse, DescribeTablesRequest, DescribeEnvironmentsRequest, CreateEnvironmentRequest } from "./omics_models";
/**
 * omics client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询表格行数据。
     */
    DescribeTablesRows(req: DescribeTablesRowsRequest, cb?: (error: string, rep: DescribeTablesRowsResponse) => void): Promise<DescribeTablesRowsResponse>;
    /**
     * 查询环境列表。
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 导入表格文件。
     */
    ImportTableFile(req: ImportTableFileRequest, cb?: (error: string, rep: ImportTableFileResponse) => void): Promise<ImportTableFileResponse>;
    /**
     * 查询任务详情。
     */
    GetRunStatus(req: GetRunStatusRequest, cb?: (error: string, rep: GetRunStatusResponse) => void): Promise<GetRunStatusResponse>;
    /**
     * 运行应用。
     */
    RunApplication(req: RunApplicationRequest, cb?: (error: string, rep: RunApplicationResponse) => void): Promise<RunApplicationResponse>;
    /**
     * 创建组学平台计算环境。
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 重试任务。
     */
    RetryRuns(req: RetryRunsRequest, cb?: (error: string, rep: RetryRunsResponse) => void): Promise<RetryRunsResponse>;
    /**
     * 查询任务列表。
     */
    DescribeRuns(req: DescribeRunsRequest, cb?: (error: string, rep: DescribeRunsResponse) => void): Promise<DescribeRunsResponse>;
    /**
     * 查询任务批次列表。
     */
    DescribeRunGroups(req: DescribeRunGroupsRequest, cb?: (error: string, rep: DescribeRunGroupsResponse) => void): Promise<DescribeRunGroupsResponse>;
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
