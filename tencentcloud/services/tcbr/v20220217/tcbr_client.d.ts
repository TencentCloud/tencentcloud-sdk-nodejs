import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudRunServersResponse, ReleaseGrayRequest, DescribeEnvBaseInfoResponse, CreateCloudRunServerRequest, DescribeServerManageTaskResponse, DescribeCloudRunEnvsResponse, DescribeCloudRunEnvsRequest, ReleaseGrayResponse, OperateServerManageRequest, UpdateCloudRunServerRequest, OperateServerManageResponse, DescribeCloudRunServerDetailRequest, DescribeCloudRunServersRequest, DescribeServerManageTaskRequest, DescribeCloudRunServerDetailResponse, CreateCloudRunEnvResponse, DescribeEnvBaseInfoRequest, CreateCloudRunServerResponse, UpdateCloudRunServerResponse, CreateCloudRunEnvRequest } from "./tcbr_models";
/**
 * tcbr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建云托管服务接口
     */
    CreateCloudRunServer(req: CreateCloudRunServerRequest, cb?: (error: string, rep: CreateCloudRunServerResponse) => void): Promise<CreateCloudRunServerResponse>;
    /**
     * 查询服务管理任务信息
     */
    DescribeServerManageTask(req: DescribeServerManageTaskRequest, cb?: (error: string, rep: DescribeServerManageTaskResponse) => void): Promise<DescribeServerManageTaskResponse>;
    /**
     * 查询环境基础信息
     */
    DescribeEnvBaseInfo(req: DescribeEnvBaseInfoRequest, cb?: (error: string, rep: DescribeEnvBaseInfoResponse) => void): Promise<DescribeEnvBaseInfoResponse>;
    /**
     * 查询云托管服务列表接口
     */
    DescribeCloudRunServers(req: DescribeCloudRunServersRequest, cb?: (error: string, rep: DescribeCloudRunServersResponse) => void): Promise<DescribeCloudRunServersResponse>;
    /**
     * 灰度发布
     */
    ReleaseGray(req: ReleaseGrayRequest, cb?: (error: string, rep: ReleaseGrayResponse) => void): Promise<ReleaseGrayResponse>;
    /**
     * 更新云托管服务
     */
    UpdateCloudRunServer(req: UpdateCloudRunServerRequest, cb?: (error: string, rep: UpdateCloudRunServerResponse) => void): Promise<UpdateCloudRunServerResponse>;
    /**
     * 创建云托管环境，并开通资源。
     */
    CreateCloudRunEnv(req: CreateCloudRunEnvRequest, cb?: (error: string, rep: CreateCloudRunEnvResponse) => void): Promise<CreateCloudRunEnvResponse>;
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    DescribeCloudRunEnvs(req: DescribeCloudRunEnvsRequest, cb?: (error: string, rep: DescribeCloudRunEnvsResponse) => void): Promise<DescribeCloudRunEnvsResponse>;
    /**
     * 操作发布单
     */
    OperateServerManage(req: OperateServerManageRequest, cb?: (error: string, rep: OperateServerManageResponse) => void): Promise<OperateServerManageResponse>;
    /**
     * 查询云托管服务详情
     */
    DescribeCloudRunServerDetail(req: DescribeCloudRunServerDetailRequest, cb?: (error: string, rep: DescribeCloudRunServerDetailResponse) => void): Promise<DescribeCloudRunServerDetailResponse>;
}
