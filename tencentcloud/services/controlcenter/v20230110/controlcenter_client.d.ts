import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateAccountFactoryBaselineResponse, ListAccountFactoryBaselineItemsRequest, BatchApplyAccountBaselinesResponse, UpdateAccountFactoryBaselineRequest, ListDeployStepTasksRequest, BatchApplyAccountBaselinesRequest, GetAccountFactoryBaselineResponse, ListAccountFactoryBaselineItemsResponse, GetAccountFactoryBaselineRequest, ListDeployStepTasksResponse } from "./controlcenter_models";
/**
 * controlcenter client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取某个基线项历史应用信息
     */
    ListDeployStepTasks(req: ListDeployStepTasksRequest, cb?: (error: string, rep: ListDeployStepTasksResponse) => void): Promise<ListDeployStepTasksResponse>;
    /**
     * 获取用户基线配置数据
     */
    GetAccountFactoryBaseline(req?: GetAccountFactoryBaselineRequest, cb?: (error: string, rep: GetAccountFactoryBaselineResponse) => void): Promise<GetAccountFactoryBaselineResponse>;
    /**
     * 更新用户当前基线项配置，基线配置会覆盖更新为当前配置。新增基线项时需要将新增的基线配置加到现有配置，删除基线项时需要将删除的基线配置从现有配置移除，然后保存最新基线配置。
     */
    UpdateAccountFactoryBaseline(req: UpdateAccountFactoryBaselineRequest, cb?: (error: string, rep: UpdateAccountFactoryBaselineResponse) => void): Promise<UpdateAccountFactoryBaselineResponse>;
    /**
     * 批量对存量账号应用基线
     */
    BatchApplyAccountBaselines(req: BatchApplyAccountBaselinesRequest, cb?: (error: string, rep: BatchApplyAccountBaselinesResponse) => void): Promise<BatchApplyAccountBaselinesResponse>;
    /**
     * 获取账号工厂系统基线项
     */
    ListAccountFactoryBaselineItems(req: ListAccountFactoryBaselineItemsRequest, cb?: (error: string, rep: ListAccountFactoryBaselineItemsResponse) => void): Promise<ListAccountFactoryBaselineItemsResponse>;
}
