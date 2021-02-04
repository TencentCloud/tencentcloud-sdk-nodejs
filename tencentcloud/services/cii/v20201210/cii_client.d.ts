import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeStructCompareDataResponse, DescribeStructureTaskResultRequest, CreateStructureTaskRequest, DescribeStructCompareDataRequest, CreateStructureTaskResponse, DescribeStructureTaskResultResponse } from "./cii_models";
/**
 * cii client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
     */
    DescribeStructCompareData(req: DescribeStructCompareDataRequest, cb?: (error: string, rep: DescribeStructCompareDataResponse) => void): Promise<DescribeStructCompareDataResponse>;
    /**
     * 依据任务ID获取结构化结果接口。
     */
    DescribeStructureTaskResult(req: DescribeStructureTaskResultRequest, cb?: (error: string, rep: DescribeStructureTaskResultResponse) => void): Promise<DescribeStructureTaskResultResponse>;
    /**
     * 基于提供的客户及保单信息，启动结构化识别任务。
     */
    CreateStructureTask(req: CreateStructureTaskRequest, cb?: (error: string, rep: CreateStructureTaskResponse) => void): Promise<CreateStructureTaskResponse>;
}
