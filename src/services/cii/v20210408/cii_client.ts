/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ClassifyInfo,
  DescribeStructureTaskResultRequest,
  MachineUnderwriteOutput,
  CreateStructureTaskRequest,
  UnderwriteOutput,
  DescribeStructCompareDataRequest,
  Location,
  AddSubStructureTasksResponse,
  InsuranceResult,
  UnderwriteConclusion,
  DescribeStructureDifferenceResponse,
  CreateUnderwriteTaskByIdRequest,
  UploadMedicalFileResponse,
  PerStructDifference,
  UploadMedicalFileRequest,
  CompareMetricsData,
  StructureOneItem,
  CreateAutoClassifyStructureTaskRequest,
  DescribeMachineUnderwriteRequest,
  DescribeQualityScoreRequest,
  ReviewDataTaskInfo,
  DescribeUnderwriteTaskResponse,
  DescribeStructureResultRequest,
  DescribeReportClassifyRequest,
  UnderwriteItem,
  DescribeStructCompareDataResponse,
  MachinePredict,
  DescribeQualityScoreResponse,
  DescribeUnderwriteTaskRequest,
  ResultObject,
  DescribeStructureResultResponse,
  DescribeStructureDifferenceRequest,
  CreateStructureTaskResponse,
  DescribeStructureTaskResultResponse,
  ClassifiedReports,
  DescribeMachineUnderwriteResponse,
  OcrRecognise,
  CreateAutoClassifyStructureTaskResponse,
  Point,
  DescribeReportClassifyResponse,
  CreateUnderwriteTaskByIdResponse,
  StructureResultObject,
  CreateStructureTaskInfo,
  AddSubStructureTasksRequest,
  CreateAutoClassifyStructureTaskInfo,
  StructureModifyItem,
} from "./cii_models"

/**
 * cii client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cii.tencentcloudapi.com", "2021-04-08", clientConfig)
  }

  /**
   * 结构化复核差异查询接口，对比结构化复核前后数据差异，返回差异的部分。
   */
  async DescribeStructureDifference(
    req: DescribeStructureDifferenceRequest,
    cb?: (error: string, rep: DescribeStructureDifferenceResponse) => void
  ): Promise<DescribeStructureDifferenceResponse> {
    return this.request("DescribeStructureDifference", req, cb)
  }

  /**
   * 依据任务ID获取结构化结果接口。
   */
  async DescribeStructureTaskResult(
    req: DescribeStructureTaskResultRequest,
    cb?: (error: string, rep: DescribeStructureTaskResultResponse) => void
  ): Promise<DescribeStructureTaskResultResponse> {
    return this.request("DescribeStructureTaskResult", req, cb)
  }

  /**
   * 上传医疗影像文件，可以用来做结构化。
   */
  async UploadMedicalFile(
    req: UploadMedicalFileRequest,
    cb?: (error: string, rep: UploadMedicalFileResponse) => void
  ): Promise<UploadMedicalFileResponse> {
    let options = {
      multipart: true,
    }
    return this.request("UploadMedicalFile", req, cb)
  }

  /**
   * 本接口(CreateUnderwriteTaskById)用于根据结构化任务ID创建核保任务
   */
  async CreateUnderwriteTaskById(
    req: CreateUnderwriteTaskByIdRequest,
    cb?: (error: string, rep: CreateUnderwriteTaskByIdResponse) => void
  ): Promise<CreateUnderwriteTaskByIdResponse> {
    return this.request("CreateUnderwriteTaskById", req, cb)
  }

  /**
   * 本接口(DescribeUnderwriteTask)用于查询核保任务结果
   */
  async DescribeUnderwriteTask(
    req: DescribeUnderwriteTaskRequest,
    cb?: (error: string, rep: DescribeUnderwriteTaskResponse) => void
  ): Promise<DescribeUnderwriteTaskResponse> {
    return this.request("DescribeUnderwriteTask", req, cb)
  }

  /**
   * 本接口(DescribeMachineUnderwrite)用于查询机器核保任务数据
   */
  async DescribeMachineUnderwrite(
    req: DescribeMachineUnderwriteRequest,
    cb?: (error: string, rep: DescribeMachineUnderwriteResponse) => void
  ): Promise<DescribeMachineUnderwriteResponse> {
    return this.request("DescribeMachineUnderwrite", req, cb)
  }

  /**
   * 本接口(CreateStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
   */
  async CreateStructureTask(
    req: CreateStructureTaskRequest,
    cb?: (error: string, rep: CreateStructureTaskResponse) => void
  ): Promise<CreateStructureTaskResponse> {
    return this.request("CreateStructureTask", req, cb)
  }

  /**
   * 本接口(CreateAutoClassifyStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
   */
  async CreateAutoClassifyStructureTask(
    req: CreateAutoClassifyStructureTaskRequest,
    cb?: (error: string, rep: CreateAutoClassifyStructureTaskResponse) => void
  ): Promise<CreateAutoClassifyStructureTaskResponse> {
    return this.request("CreateAutoClassifyStructureTask", req, cb)
  }

  /**
   * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
   */
  async DescribeStructCompareData(
    req: DescribeStructCompareDataRequest,
    cb?: (error: string, rep: DescribeStructCompareDataResponse) => void
  ): Promise<DescribeStructCompareDataResponse> {
    return this.request("DescribeStructCompareData", req, cb)
  }

  /**
   * 获取图片质量分
   */
  async DescribeQualityScore(
    req: DescribeQualityScoreRequest,
    cb?: (error: string, rep: DescribeQualityScoreResponse) => void
  ): Promise<DescribeQualityScoreResponse> {
    let options = {
      multipart: true,
    }
    return this.request("DescribeQualityScore", req, cb)
  }

  /**
   * 本接口(DescribeStructureResult)用于查询结构化结果接口
   */
  async DescribeStructureResult(
    req: DescribeStructureResultRequest,
    cb?: (error: string, rep: DescribeStructureResultResponse) => void
  ): Promise<DescribeStructureResultResponse> {
    return this.request("DescribeStructureResult", req, cb)
  }

  /**
   * 辅助用户对批量报告自动分类
   */
  async DescribeReportClassify(
    req: DescribeReportClassifyRequest,
    cb?: (error: string, rep: DescribeReportClassifyResponse) => void
  ): Promise<DescribeReportClassifyResponse> {
    return this.request("DescribeReportClassify", req, cb)
  }

  /**
   * 如果主任务下的报告不满足需求，可以基于主任务批量添加子任务
   */
  async AddSubStructureTasks(
    req: AddSubStructureTasksRequest,
    cb?: (error: string, rep: AddSubStructureTasksResponse) => void
  ): Promise<AddSubStructureTasksResponse> {
    return this.request("AddSubStructureTasks", req, cb)
  }
}
