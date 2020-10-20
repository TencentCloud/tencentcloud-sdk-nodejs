import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMigrationTaskRequest, ModifyMigrationTaskBelongToProjectRequest, ModifyMigrationTaskStatusResponse, ListMigrationTaskRequest, DeregisterMigrationTaskResponse, ModifyMigrationTaskBelongToProjectResponse, ListMigrationProjectResponse, RegisterMigrationTaskResponse, ModifyMigrationTaskStatusRequest, ListMigrationProjectRequest, DeregisterMigrationTaskRequest, ListMigrationTaskResponse, DescribeMigrationTaskResponse, RegisterMigrationTaskRequest } from "./msp_models";
/**
 * msp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取迁移任务列表
     */
    ListMigrationTask(req: ListMigrationTaskRequest, cb?: (error: string, rep: ListMigrationTaskResponse) => void): Promise<ListMigrationTaskResponse>;
    /**
     * 注册迁移任务
     */
    RegisterMigrationTask(req: RegisterMigrationTaskRequest, cb?: (error: string, rep: RegisterMigrationTaskResponse) => void): Promise<RegisterMigrationTaskResponse>;
    /**
     * 更新迁移任务状态
     */
    ModifyMigrationTaskStatus(req: ModifyMigrationTaskStatusRequest, cb?: (error: string, rep: ModifyMigrationTaskStatusResponse) => void): Promise<ModifyMigrationTaskStatusResponse>;
    /**
     * 取消注册迁移任务
     */
    DeregisterMigrationTask(req: DeregisterMigrationTaskRequest, cb?: (error: string, rep: DeregisterMigrationTaskResponse) => void): Promise<DeregisterMigrationTaskResponse>;
    /**
     * 获取指定迁移任务详情
     */
    DescribeMigrationTask(req: DescribeMigrationTaskRequest, cb?: (error: string, rep: DescribeMigrationTaskResponse) => void): Promise<DescribeMigrationTaskResponse>;
    /**
     * 更改迁移任务所属项目
     */
    ModifyMigrationTaskBelongToProject(req: ModifyMigrationTaskBelongToProjectRequest, cb?: (error: string, rep: ModifyMigrationTaskBelongToProjectResponse) => void): Promise<ModifyMigrationTaskBelongToProjectResponse>;
    /**
     * 获取迁移项目名称列表
     */
    ListMigrationProject(req: ListMigrationProjectRequest, cb?: (error: string, rep: ListMigrationProjectResponse) => void): Promise<ListMigrationProjectResponse>;
}
