import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquiryPriceCreateCisResponse, DescribeContainerLogRequest, CreateContainerInstanceRequest, InquiryPriceCreateCisRequest, DescribeContainerInstancesResponse, DeleteContainerInstanceResponse, DescribeContainerInstancesRequest, CreateContainerInstanceResponse, DescribeContainerInstanceRequest, DescribeContainerInstanceResponse, DescribeContainerInstanceEventsResponse, DescribeContainerInstanceEventsRequest, DescribeContainerLogResponse, DeleteContainerInstanceRequest } from "./cis_models";
/**
 * cis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口（DescribeContainerInstances）查询容器实例列表
     */
    DescribeContainerInstances(req: DescribeContainerInstancesRequest, cb?: (error: string, rep: DescribeContainerInstancesResponse) => void): Promise<DescribeContainerInstancesResponse>;
    /**
     * 此接口（CreateContainerInstance）用于创建容器实例
     */
    CreateContainerInstance(req: CreateContainerInstanceRequest, cb?: (error: string, rep: CreateContainerInstanceResponse) => void): Promise<CreateContainerInstanceResponse>;
    /**
     * 此接口（InquiryPriceCreateCis）用于查询容器实例价格
     */
    InquiryPriceCreateCis(req: InquiryPriceCreateCisRequest, cb?: (error: string, rep: InquiryPriceCreateCisResponse) => void): Promise<InquiryPriceCreateCisResponse>;
    /**
     * 此接口（DescribeContainerInstance）用于获取容器实例详情
     */
    DescribeContainerInstance(req: DescribeContainerInstanceRequest, cb?: (error: string, rep: DescribeContainerInstanceResponse) => void): Promise<DescribeContainerInstanceResponse>;
    /**
     * 此接口（DescribeContainerInstanceEvents）用于查询容器实例事件列表
     */
    DescribeContainerInstanceEvents(req: DescribeContainerInstanceEventsRequest, cb?: (error: string, rep: DescribeContainerInstanceEventsResponse) => void): Promise<DescribeContainerInstanceEventsResponse>;
    /**
     * 此接口（DeleteContainerInstance）用于删除容器实例
     */
    DeleteContainerInstance(req: DeleteContainerInstanceRequest, cb?: (error: string, rep: DeleteContainerInstanceResponse) => void): Promise<DeleteContainerInstanceResponse>;
    /**
     * 此接口（DescribeContainerLog）用于获取容器日志信息
     */
    DescribeContainerLog(req: DescribeContainerLogRequest, cb?: (error: string, rep: DescribeContainerLogResponse) => void): Promise<DescribeContainerLogResponse>;
}
