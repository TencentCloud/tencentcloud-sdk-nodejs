import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListEisConnectorsRequest, ListEisConnectorOperationsResponse, DescribeEisConnectorConfigResponse, ListEisConnectorOperationsRequest, DescribeEisConnectorConfigRequest, ListEisConnectorsResponse } from "./eis_models";
/**
 * eis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取连接器操作列表
     */
    ListEisConnectorOperations(req: ListEisConnectorOperationsRequest, cb?: (error: string, rep: ListEisConnectorOperationsResponse) => void): Promise<ListEisConnectorOperationsResponse>;
    /**
     * 连接器列表
     */
    ListEisConnectors(req: ListEisConnectorsRequest, cb?: (error: string, rep: ListEisConnectorsResponse) => void): Promise<ListEisConnectorsResponse>;
    /**
     * 获取连接器配置参数
     */
    DescribeEisConnectorConfig(req: DescribeEisConnectorConfigRequest, cb?: (error: string, rep: DescribeEisConnectorConfigResponse) => void): Promise<DescribeEisConnectorConfigResponse>;
}
