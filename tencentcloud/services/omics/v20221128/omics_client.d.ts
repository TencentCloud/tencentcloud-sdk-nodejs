import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRunsRequest, RunApplicationResponse, DescribeRunGroupsRequest, GetRunCallsResponse, GetRunStatusRequest, DescribeRunsResponse, ImportTableFileResponse, DescribeRunGroupsResponse, RunApplicationRequest, ImportTableFileRequest, GetRunStatusResponse, GetRunCallsRequest } from "./omics_models";
/**
 * omics client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询作业详情。
     */
    GetRunCalls(req: GetRunCallsRequest, cb?: (error: string, rep: GetRunCallsResponse) => void): Promise<GetRunCallsResponse>;
    /**
     * 导入表格文件。
     */
    ImportTableFile(req: ImportTableFileRequest, cb?: (error: string, rep: ImportTableFileResponse) => void): Promise<ImportTableFileResponse>;
    /**
     * 运行应用。
     */
    RunApplication(req: RunApplicationRequest, cb?: (error: string, rep: RunApplicationResponse) => void): Promise<RunApplicationResponse>;
    /**
     * 查询任务列表。
     */
    DescribeRuns(req: DescribeRunsRequest, cb?: (error: string, rep: DescribeRunsResponse) => void): Promise<DescribeRunsResponse>;
    /**
     * 查询任务批次列表。
     */
    DescribeRunGroups(req: DescribeRunGroupsRequest, cb?: (error: string, rep: DescribeRunGroupsResponse) => void): Promise<DescribeRunGroupsResponse>;
    /**
     * 查询任务详情。
     */
    GetRunStatus(req: GetRunStatusRequest, cb?: (error: string, rep: GetRunStatusResponse) => void): Promise<GetRunStatusResponse>;
}
