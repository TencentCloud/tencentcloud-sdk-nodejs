import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeStructureTaskResultRequest, CreateStructureTaskRequest, DescribeStructCompareDataRequest, AddSubStructureTasksResponse, DescribeStructureDifferenceResponse, CreateUnderwriteTaskByIdRequest, UploadMedicalFileResponse, UploadMedicalFileRequest, CreateAutoClassifyStructureTaskRequest, DescribeMachineUnderwriteRequest, DescribeQualityScoreRequest, DescribeUnderwriteTaskResponse, DescribeStructureResultRequest, DescribeReportClassifyRequest, DescribeStructCompareDataResponse, DescribeQualityScoreResponse, DescribeUnderwriteTaskRequest, DescribeStructureResultResponse, DescribeStructureDifferenceRequest, CreateStructureTaskResponse, DescribeStructureTaskResultResponse, DescribeMachineUnderwriteResponse, CreateAutoClassifyStructureTaskResponse, DescribeReportClassifyResponse, CreateUnderwriteTaskByIdResponse, AddSubStructureTasksRequest } from "./cii_models";
/**
 * cii client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 结构化复核差异查询接口，对比结构化复核前后数据差异，返回差异的部分。
     */
    DescribeStructureDifference(req: DescribeStructureDifferenceRequest, cb?: (error: string, rep: DescribeStructureDifferenceResponse) => void): Promise<DescribeStructureDifferenceResponse>;
    /**
     * 依据任务ID获取结构化结果接口。
     */
    DescribeStructureTaskResult(req: DescribeStructureTaskResultRequest, cb?: (error: string, rep: DescribeStructureTaskResultResponse) => void): Promise<DescribeStructureTaskResultResponse>;
    /**
     * 上传医疗影像文件，可以用来做结构化。
     */
    UploadMedicalFile(req: UploadMedicalFileRequest, cb?: (error: string, rep: UploadMedicalFileResponse) => void): Promise<UploadMedicalFileResponse>;
    /**
     * 本接口(CreateUnderwriteTaskById)用于根据结构化任务ID创建核保任务
     */
    CreateUnderwriteTaskById(req: CreateUnderwriteTaskByIdRequest, cb?: (error: string, rep: CreateUnderwriteTaskByIdResponse) => void): Promise<CreateUnderwriteTaskByIdResponse>;
    /**
     * 本接口(DescribeUnderwriteTask)用于查询核保任务结果
     */
    DescribeUnderwriteTask(req: DescribeUnderwriteTaskRequest, cb?: (error: string, rep: DescribeUnderwriteTaskResponse) => void): Promise<DescribeUnderwriteTaskResponse>;
    /**
     * 本接口(DescribeMachineUnderwrite)用于查询机器核保任务数据
     */
    DescribeMachineUnderwrite(req: DescribeMachineUnderwriteRequest, cb?: (error: string, rep: DescribeMachineUnderwriteResponse) => void): Promise<DescribeMachineUnderwriteResponse>;
    /**
     * 本接口(CreateStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     */
    CreateStructureTask(req: CreateStructureTaskRequest, cb?: (error: string, rep: CreateStructureTaskResponse) => void): Promise<CreateStructureTaskResponse>;
    /**
     * 本接口(CreateAutoClassifyStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     */
    CreateAutoClassifyStructureTask(req: CreateAutoClassifyStructureTaskRequest, cb?: (error: string, rep: CreateAutoClassifyStructureTaskResponse) => void): Promise<CreateAutoClassifyStructureTaskResponse>;
    /**
     * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
     */
    DescribeStructCompareData(req: DescribeStructCompareDataRequest, cb?: (error: string, rep: DescribeStructCompareDataResponse) => void): Promise<DescribeStructCompareDataResponse>;
    /**
     * 获取图片质量分
     */
    DescribeQualityScore(req: DescribeQualityScoreRequest, cb?: (error: string, rep: DescribeQualityScoreResponse) => void): Promise<DescribeQualityScoreResponse>;
    /**
     * 本接口(DescribeStructureResult)用于查询结构化结果接口
     */
    DescribeStructureResult(req: DescribeStructureResultRequest, cb?: (error: string, rep: DescribeStructureResultResponse) => void): Promise<DescribeStructureResultResponse>;
    /**
     * 辅助用户对批量报告自动分类
     */
    DescribeReportClassify(req: DescribeReportClassifyRequest, cb?: (error: string, rep: DescribeReportClassifyResponse) => void): Promise<DescribeReportClassifyResponse>;
    /**
     * 如果主任务下的报告不满足需求，可以基于主任务批量添加子任务
     */
    AddSubStructureTasks(req: AddSubStructureTasksRequest, cb?: (error: string, rep: AddSubStructureTasksResponse) => void): Promise<AddSubStructureTasksResponse>;
}
