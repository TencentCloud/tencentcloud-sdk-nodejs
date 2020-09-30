import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProjectResponse, CheckStaffChUserRequest, DescribeResourceTemplateHeadersResponse, DeleteProjectRequest, ReplenishProjectStockResponse, SendWxTouchTaskResponse, DescribeCustomersRequest, DescribeProjectsRequest, ModifyProjectRequest, OffLineProjectRequest, DescribeSubProjectRequest, ExpireFlowRequest, CopyActivityChannelRequest, CopyActivityChannelResponse, DescribeProjectsResponse, ReplenishProjectStockRequest, DescribeProjectStockResponse, CheckStaffChUserResponse, DescribeCustomerRequest, CreateSubProjectResponse, DescribeCustomerResponse, DescribeCustomersResponse, CreateSubProjectRequest, ModifyProjectResponse, CreateProjectResponse, DescribeProjectStockRequest, DeleteProjectResponse, SendWxTouchTaskRequest, DescribeProjectRequest, OffLineProjectResponse, DescribeResourceTemplateHeadersRequest, ExpireFlowResponse, DescribeSubProjectResponse, CreateProjectRequest } from "./solar_models";
/**
 * solar client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 子项目详情
     */
    DescribeSubProject(req: DescribeSubProjectRequest, cb?: (error: string, rep: DescribeSubProjectResponse) => void): Promise<DescribeSubProjectResponse>;
    /**
     * 项目库存详情
     */
    DescribeProjectStock(req: DescribeProjectStockRequest, cb?: (error: string, rep: DescribeProjectStockResponse) => void): Promise<DescribeProjectStockResponse>;
    /**
     * 项目详情展示
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 素材查询服务号模板的列表（样例）
     */
    DescribeResourceTemplateHeaders(req: DescribeResourceTemplateHeadersRequest, cb?: (error: string, rep: DescribeResourceTemplateHeadersResponse) => void): Promise<DescribeResourceTemplateHeadersResponse>;
    /**
     * 查询客户档案列表
     */
    DescribeCustomers(req: DescribeCustomersRequest, cb?: (error: string, rep: DescribeCustomersResponse) => void): Promise<DescribeCustomersResponse>;
    /**
     * 发送企业微信触达任务
     */
    SendWxTouchTask(req: SendWxTouchTaskRequest, cb?: (error: string, rep: SendWxTouchTaskResponse) => void): Promise<SendWxTouchTaskResponse>;
    /**
     * 创建项目
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 补充子项目库存
     */
    ReplenishProjectStock(req: ReplenishProjectStockRequest, cb?: (error: string, rep: ReplenishProjectStockResponse) => void): Promise<ReplenishProjectStockResponse>;
    /**
     * 项目列表展示
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 下线项目
     */
    OffLineProject(req: OffLineProjectRequest, cb?: (error: string, rep: OffLineProjectResponse) => void): Promise<OffLineProjectResponse>;
    /**
     * 把审批中的工单置为已失效
     */
    ExpireFlow(req: ExpireFlowRequest, cb?: (error: string, rep: ExpireFlowResponse) => void): Promise<ExpireFlowResponse>;
    /**
     * 删除项目
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 员工渠道更改员工状态
     */
    CheckStaffChUser(req: CheckStaffChUserRequest, cb?: (error: string, rep: CheckStaffChUserResponse) => void): Promise<CheckStaffChUserResponse>;
    /**
     * 客户档案查询客户详情
     */
    DescribeCustomer(req: DescribeCustomerRequest, cb?: (error: string, rep: DescribeCustomerResponse) => void): Promise<DescribeCustomerResponse>;
    /**
     * 修改项目
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 创建子项目
     */
    CreateSubProject(req: CreateSubProjectRequest, cb?: (error: string, rep: CreateSubProjectResponse) => void): Promise<CreateSubProjectResponse>;
    /**
     * 复制活动渠道的策略
     */
    CopyActivityChannel(req: CopyActivityChannelRequest, cb?: (error: string, rep: CopyActivityChannelResponse) => void): Promise<CopyActivityChannelResponse>;
}
