import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListConnectionsResponse, GetEventBusResponse, ListConnectionsRequest, DeleteRuleRequest, UpdateRuleResponse, CreateTargetRequest, DeleteTargetResponse, ListRulesResponse, CreateTargetResponse, CheckRuleRequest, GetRuleResponse, CreateConnectionResponse, ListTargetsRequest, ListRulesRequest, UpdateTransformationResponse, UpdateEventBusRequest, CreateEventBusRequest, PutEventsResponse, CreateRuleRequest, DeleteConnectionResponse, DeleteRuleResponse, GetTransformationResponse, CreateTransformationRequest, PublishEventRequest, CheckTransformationResponse, ListTargetsResponse, ListEventBusesResponse, CheckRuleResponse, UpdateTargetResponse, CreateConnectionRequest, DeleteEventBusRequest, ListEventBusesRequest, PublishEventResponse, CreateTransformationResponse, PutEventsRequest, DeleteEventBusResponse, GetTransformationRequest, CreateEventBusResponse, DeleteConnectionRequest, UpdateTransformationRequest, CreateRuleResponse, DeleteTransformationResponse, DeleteTransformationRequest, GetEventBusRequest, UpdateConnectionRequest, DeleteTargetRequest, UpdateRuleRequest, CheckTransformationRequest, UpdateConnectionResponse, GetRuleRequest, UpdateTargetRequest, UpdateEventBusResponse } from "./eb_models";
/**
 * eb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除事件集
     */
    DeleteEventBus(req: DeleteEventBusRequest, cb?: (error: string, rep: DeleteEventBusResponse) => void): Promise<DeleteEventBusResponse>;
    /**
     * 用于创建转换器
     */
    CreateTransformation(req: CreateTransformationRequest, cb?: (error: string, rep: CreateTransformationResponse) => void): Promise<CreateTransformationResponse>;
    /**
     * 用于创建事件集
     */
    CreateEventBus(req: CreateEventBusRequest, cb?: (error: string, rep: CreateEventBusResponse) => void): Promise<CreateEventBusResponse>;
    /**
     * 创建事件规则
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 删除事件目标
     */
    DeleteTarget(req: DeleteTargetRequest, cb?: (error: string, rep: DeleteTargetResponse) => void): Promise<DeleteTargetResponse>;
    /**
     * 获取事件目标列表
     */
    ListTargets(req: ListTargetsRequest, cb?: (error: string, rep: ListTargetsResponse) => void): Promise<ListTargetsResponse>;
    /**
     * 检验规则
     */
    CheckRule(req?: CheckRuleRequest, cb?: (error: string, rep: CheckRuleResponse) => void): Promise<CheckRuleResponse>;
    /**
     * （已废弃）用于Event事件投递
     */
    PublishEvent(req: PublishEventRequest, cb?: (error: string, rep: PublishEventResponse) => void): Promise<PublishEventResponse>;
    /**
     * 用于Event事件投递
     */
    PutEvents(req: PutEventsRequest, cb?: (error: string, rep: PutEventsResponse) => void): Promise<PutEventsResponse>;
    /**
     * 更新事件目标
     */
    UpdateTarget(req: UpdateTargetRequest, cb?: (error: string, rep: UpdateTargetResponse) => void): Promise<UpdateTargetResponse>;
    /**
     * 用于获取转换器详情
     */
    GetTransformation(req: GetTransformationRequest, cb?: (error: string, rep: GetTransformationResponse) => void): Promise<GetTransformationResponse>;
    /**
     * 获取事件规则列表
     */
    ListRules(req: ListRulesRequest, cb?: (error: string, rep: ListRulesResponse) => void): Promise<ListRulesResponse>;
    /**
     * 删除事件规则
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 更新事件集
     */
    UpdateEventBus(req: UpdateEventBusRequest, cb?: (error: string, rep: UpdateEventBusResponse) => void): Promise<UpdateEventBusResponse>;
    /**
     * 创建事件目标
     */
    CreateTarget(req: CreateTargetRequest, cb?: (error: string, rep: CreateTargetResponse) => void): Promise<CreateTargetResponse>;
    /**
     * 更新事件规则
     */
    UpdateRule(req: UpdateRuleRequest, cb?: (error: string, rep: UpdateRuleResponse) => void): Promise<UpdateRuleResponse>;
    /**
     * 用于删除转换器
     */
    DeleteTransformation(req: DeleteTransformationRequest, cb?: (error: string, rep: DeleteTransformationResponse) => void): Promise<DeleteTransformationResponse>;
    /**
     * 创建事件连接器
     */
    CreateConnection(req: CreateConnectionRequest, cb?: (error: string, rep: CreateConnectionResponse) => void): Promise<CreateConnectionResponse>;
    /**
     * 获取事件规则详情
     */
    GetRule(req: GetRuleRequest, cb?: (error: string, rep: GetRuleResponse) => void): Promise<GetRuleResponse>;
    /**
     * 删除事件连接器
     */
    DeleteConnection(req: DeleteConnectionRequest, cb?: (error: string, rep: DeleteConnectionResponse) => void): Promise<DeleteConnectionResponse>;
    /**
     * 获取事件集列表
     */
    ListEventBuses(req: ListEventBusesRequest, cb?: (error: string, rep: ListEventBusesResponse) => void): Promise<ListEventBusesResponse>;
    /**
     * 获取事件集详情
     */
    GetEventBus(req: GetEventBusRequest, cb?: (error: string, rep: GetEventBusResponse) => void): Promise<GetEventBusResponse>;
    /**
     * 用于更新转换器
     */
    UpdateTransformation(req: UpdateTransformationRequest, cb?: (error: string, rep: UpdateTransformationResponse) => void): Promise<UpdateTransformationResponse>;
    /**
     * 用于在ETL配置页面, 测试规则和数据.
     */
    CheckTransformation(req: CheckTransformationRequest, cb?: (error: string, rep: CheckTransformationResponse) => void): Promise<CheckTransformationResponse>;
    /**
     * 获取事件连接器列表
     */
    ListConnections(req: ListConnectionsRequest, cb?: (error: string, rep: ListConnectionsResponse) => void): Promise<ListConnectionsResponse>;
    /**
     * 更新事件连接器
     */
    UpdateConnection(req: UpdateConnectionRequest, cb?: (error: string, rep: UpdateConnectionResponse) => void): Promise<UpdateConnectionResponse>;
}
