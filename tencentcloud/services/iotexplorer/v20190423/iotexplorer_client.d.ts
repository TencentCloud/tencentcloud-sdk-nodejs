import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteProjectRequest, DescribeModelDefinitionResponse, ModifyStudioProductResponse, DeleteStudioProductResponse, GetDeviceListResponse, ControlDeviceDataRequest, DeleteLoRaFrequencyResponse, DeleteTopicRuleResponse, ModifyModelDefinitionRequest, CreateStudioProductResponse, CallDeviceActionSyncRequest, EnableTopicRuleResponse, ModifyStudioProductRequest, CreateStudioProductRequest, ReleaseStudioProductRequest, SearchTopicRuleRequest, DescribeDeviceDataRequest, DescribeStudioProductResponse, DescribeProjectResponse, DescribeLoRaFrequencyRequest, DeleteDeviceRequest, DeleteLoRaFrequencyRequest, ListEventHistoryRequest, ReleaseStudioProductResponse, DeleteLoRaGatewayRequest, SearchTopicRuleResponse, DescribeTopicRuleRequest, CallDeviceActionSyncResponse, CreateLoRaGatewayRequest, CreateProjectResponse, ModifyTopicRuleRequest, DeleteProjectResponse, CallDeviceActionAsyncRequest, CreateDeviceResponse, CreateDeviceRequest, GetProjectListResponse, GetStudioProductListRequest, DisableTopicRuleResponse, CreateProjectRequest, DescribeDeviceResponse, GetStudioProductListResponse, PublishMessageRequest, GetDeviceListRequest, GetTopicRuleListResponse, DisableTopicRuleRequest, CallDeviceActionAsyncResponse, DescribeTopicRuleResponse, DescribeDeviceRequest, ModifyTopicRuleResponse, DescribeLoRaFrequencyResponse, SearchStudioProductResponse, GetLoRaGatewayListRequest, DescribeProjectRequest, DeleteTopicRuleRequest, CreateLoRaGatewayResponse, DeleteLoRaGatewayResponse, CreateLoRaFrequencyRequest, ControlDeviceDataResponse, DescribeDeviceDataHistoryRequest, DescribeStudioProductRequest, ModifyLoRaFrequencyRequest, ModifyModelDefinitionResponse, GetProjectListRequest, CreateLoRaFrequencyResponse, SearchStudioProductRequest, GetTopicRuleListRequest, ModifyProjectResponse, DeleteStudioProductRequest, ModifyProjectRequest, PublishMessageResponse, ModifyLoRaGatewayResponse, DescribeDeviceDataHistoryResponse, DescribeModelDefinitionRequest, GetLoRaGatewayListResponse, CreateTopicRuleResponse, DescribeDeviceDataResponse, CreateTopicRuleRequest, DeleteDeviceResponse, ModifyLoRaFrequencyResponse, ModifyLoRaGatewayRequest, ListEventHistoryResponse, EnableTopicRuleRequest } from "./iotexplorer_models";
/**
 * iotexplorer client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
     */
    ModifyStudioProduct(req: ModifyStudioProductRequest, cb?: (error: string, rep: ModifyStudioProductResponse) => void): Promise<ModifyStudioProductResponse>;
    /**
     * 提供删除某个项目下产品的能力
     */
    DeleteStudioProduct(req: DeleteStudioProductRequest, cb?: (error: string, rep: DeleteStudioProductResponse) => void): Promise<DeleteStudioProductResponse>;
    /**
     * 根据设备产品ID、设备名称，获取设备上报的属性数据。
     */
    DescribeDeviceData(req: DescribeDeviceDataRequest, cb?: (error: string, rep: DescribeDeviceDataResponse) => void): Promise<DescribeDeviceDataResponse>;
    /**
     * 删除  LoRa 网关的接口
     */
    DeleteLoRaGateway(req: DeleteLoRaGatewayRequest, cb?: (error: string, rep: DeleteLoRaGatewayResponse) => void): Promise<DeleteLoRaGatewayResponse>;
    /**
     * 为用户提供新建产品的能力，用于管理用户的设备
     */
    CreateStudioProduct(req: CreateStudioProductRequest, cb?: (error: string, rep: CreateStudioProductResponse) => void): Promise<CreateStudioProductResponse>;
    /**
     * 修改LoRa自定义频点
     */
    ModifyLoRaFrequency(req: ModifyLoRaFrequencyRequest, cb?: (error: string, rep: ModifyLoRaFrequencyResponse) => void): Promise<ModifyLoRaFrequencyResponse>;
    /**
     * 用于查看某个设备的详细信息
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 创建新 LoRa 网关设备接口
     */
    CreateLoRaGateway(req: CreateLoRaGatewayRequest, cb?: (error: string, rep: CreateLoRaGatewayResponse) => void): Promise<CreateLoRaGatewayResponse>;
    /**
     * 创建规则
     */
    CreateTopicRule(req: CreateTopicRuleRequest, cb?: (error: string, rep: CreateTopicRuleResponse) => void): Promise<CreateTopicRuleResponse>;
    /**
     * 创建 LoRa 自定义频点
     */
    CreateLoRaFrequency(req: CreateLoRaFrequencyRequest, cb?: (error: string, rep: CreateLoRaFrequencyResponse) => void): Promise<CreateLoRaFrequencyResponse>;
    /**
     * 修改 LoRa 网关信息
     */
    ModifyLoRaGateway(req: ModifyLoRaGatewayRequest, cb?: (error: string, rep: ModifyLoRaGatewayResponse) => void): Promise<ModifyLoRaGatewayResponse>;
    /**
     * 提供根据产品名称查找产品的能力
     */
    SearchStudioProduct(req: SearchStudioProductRequest, cb?: (error: string, rep: SearchStudioProductResponse) => void): Promise<SearchStudioProductResponse>;
    /**
     * 修改规则
     */
    ModifyTopicRule(req: ModifyTopicRuleRequest, cb?: (error: string, rep: ModifyTopicRuleResponse) => void): Promise<ModifyTopicRuleResponse>;
    /**
     * 提供查询用户所创建的项目列表查询功能。
     */
    GetProjectList(req: GetProjectListRequest, cb?: (error: string, rep: GetProjectListResponse) => void): Promise<GetProjectListResponse>;
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    DescribeDeviceDataHistory(req: DescribeDeviceDataHistoryRequest, cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void): Promise<DescribeDeviceDataHistoryResponse>;
    /**
     * 为用户提供同步调用设备行为的能力。
     */
    CallDeviceActionSync(req: CallDeviceActionSyncRequest, cb?: (error: string, rep: CallDeviceActionSyncResponse) => void): Promise<CallDeviceActionSyncResponse>;
    /**
     * 提供查看产品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
     */
    DescribeStudioProduct(req: DescribeStudioProductRequest, cb?: (error: string, rep: DescribeStudioProductResponse) => void): Promise<DescribeStudioProductResponse>;
    /**
     * 修改项目
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 提供删除LoRa自定义频点的能力
     */
    DeleteLoRaFrequency(req: DeleteLoRaFrequencyRequest, cb?: (error: string, rep: DeleteLoRaFrequencyResponse) => void): Promise<DeleteLoRaFrequencyResponse>;
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 用于查询某个产品下的设备列表
     */
    GetDeviceList(req: GetDeviceListRequest, cb?: (error: string, rep: GetDeviceListResponse) => void): Promise<GetDeviceListResponse>;
    /**
     * 创建设备
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 获取设备的历史事件
     */
    ListEventHistory(req: ListEventHistoryRequest, cb?: (error: string, rep: ListEventHistoryResponse) => void): Promise<ListEventHistoryResponse>;
    /**
     * 删除设备
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 获取 LoRa 网关列表接口
     */
    GetLoRaGatewayList(req: GetLoRaGatewayListRequest, cb?: (error: string, rep: GetLoRaGatewayListResponse) => void): Promise<GetLoRaGatewayListResponse>;
    /**
     * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
     */
    ReleaseStudioProduct(req: ReleaseStudioProductRequest, cb?: (error: string, rep: ReleaseStudioProductResponse) => void): Promise<ReleaseStudioProductResponse>;
    /**
     * 获取规则列表
     */
    GetTopicRuleList(req: GetTopicRuleListRequest, cb?: (error: string, rep: GetTopicRuleListResponse) => void): Promise<GetTopicRuleListResponse>;
    /**
     * 提供查询LoRa自定义频点详情的能力
     */
    DescribeLoRaFrequency(req: DescribeLoRaFrequencyRequest, cb?: (error: string, rep: DescribeLoRaFrequencyResponse) => void): Promise<DescribeLoRaFrequencyResponse>;
    /**
     * 搜索规则
     */
    SearchTopicRule(req: SearchTopicRuleRequest, cb?: (error: string, rep: SearchTopicRuleResponse) => void): Promise<SearchTopicRuleResponse>;
    /**
     * 提供查询某个项目下所有产品信息的能力。
     */
    GetStudioProductList(req: GetStudioProductListRequest, cb?: (error: string, rep: GetStudioProductListResponse) => void): Promise<GetStudioProductListResponse>;
    /**
     * 提供修改产品的数据模板的能力
     */
    ModifyModelDefinition(req: ModifyModelDefinitionRequest, cb?: (error: string, rep: ModifyModelDefinitionResponse) => void): Promise<ModifyModelDefinitionResponse>;
    /**
     * 查询项目详情
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 查询产品配置的数据模板信息
     */
    DescribeModelDefinition(req: DescribeModelDefinitionRequest, cb?: (error: string, rep: DescribeModelDefinitionResponse) => void): Promise<DescribeModelDefinitionResponse>;
    /**
     * 为用户提供新建项目的能力，用于集中管理产品和应用。
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 禁用规则
     */
    DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse>;
    /**
     * 提供给用户异步调用设备行为的能力
     */
    CallDeviceActionAsync(req: CallDeviceActionAsyncRequest, cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void): Promise<CallDeviceActionAsyncResponse>;
    /**
     * 启用规则
     */
    EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse>;
    /**
     * 提供删除某个项目的能力
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    ControlDeviceData(req: ControlDeviceDataRequest, cb?: (error: string, rep: ControlDeviceDataResponse) => void): Promise<ControlDeviceDataResponse>;
    /**
     * 获取规则信息
     */
    DescribeTopicRule(req: DescribeTopicRuleRequest, cb?: (error: string, rep: DescribeTopicRuleResponse) => void): Promise<DescribeTopicRuleResponse>;
    /**
     * 删除规则
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
}
