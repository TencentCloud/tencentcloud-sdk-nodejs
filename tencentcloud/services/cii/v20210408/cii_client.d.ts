import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeStructCompareDataResponse, DescribeStructureTaskResultRequest, DescribeStructureTaskResultTestResponse, CreateStructureTaskTestResponse, CreateStructureTaskRequest, DescribeStructureResultResponse, DescribeStructCompareDataRequest, CreateStructureTaskResponse, CreateStructureTaskTestRequest, DescribeStructureTaskResultResponse, DescribeStructureResultRequest, DescribeStructureTaskResultTestRequest } from "./cii_models";
/**
 * cii client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 依据任务ID获取结构化结果接口。
     */
    DescribeStructureTaskResult(req: DescribeStructureTaskResultRequest, cb?: (error: string, rep: DescribeStructureTaskResultResponse) => void): Promise<DescribeStructureTaskResultResponse>;
    /**
     * 本接口(CreateStructureTaskTest)基于提供的客户及保单信息，创建并启动结构化识别任务。用于路由到测试环境。
     */
    CreateStructureTaskTest(req: CreateStructureTaskTestRequest, cb?: (error: string, rep: CreateStructureTaskTestResponse) => void): Promise<CreateStructureTaskTestResponse>;
    /**
     * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
     */
    DescribeStructCompareData(req: DescribeStructCompareDataRequest, cb?: (error: string, rep: DescribeStructCompareDataResponse) => void): Promise<DescribeStructCompareDataResponse>;
    /**
     * 本接口(CreateStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     */
    CreateStructureTask(req: CreateStructureTaskRequest, cb?: (error: string, rep: CreateStructureTaskResponse) => void): Promise<CreateStructureTaskResponse>;
    /**
     * 本接口(DescribeStructureResult)用于查询结构化结果接口
     */
    DescribeStructureResult(req: DescribeStructureResultRequest, cb?: (error: string, rep: DescribeStructureResultResponse) => void): Promise<DescribeStructureResultResponse>;
    /**
     * 依据任务ID获取结构化结果接口，该接口用于路由到测试环境。
     */
    DescribeStructureTaskResultTest(req: DescribeStructureTaskResultTestRequest, cb?: (error: string, rep: DescribeStructureTaskResultTestResponse) => void): Promise<DescribeStructureTaskResultTestResponse>;
}
