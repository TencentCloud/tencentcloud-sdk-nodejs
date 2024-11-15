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
  SegmentPortraitPicResponse,
  DetectBodyJointsResponse,
  Candidate,
  VideoBasicInformation,
  DeletePersonRequest,
  ModifyGroupResponse,
  TerminateSegmentationTaskResponse,
  BodyAttributeInfo,
  GetSummaryInfoRequest,
  GetGroupListResponse,
  GroupInfo,
  DescribeSegmentationTaskRequest,
  SegmentationOptions,
  UpperBodyClothTexture,
  TerminateSegmentationTaskRequest,
  ModifyGroupRequest,
  CreatePersonRequest,
  ModifyPersonInfoResponse,
  CreateSegmentationTaskResponse,
  DeleteGroupRequest,
  GetSummaryInfoResponse,
  ModifyPersonInfoRequest,
  Gender,
  SegmentCustomizedPortraitPicRequest,
  CreateGroupRequest,
  LowerBodyCloth,
  CreateSegmentationTaskRequest,
  TraceInfo,
  DeleteGroupResponse,
  BodyRect,
  DescribeSegmentationTaskResponse,
  DetectBodyRequest,
  Age,
  SearchTraceRequest,
  KeyPointInfo,
  DetectBodyResponse,
  PersonInfo,
  Bag,
  SegmentCustomizedPortraitPicResponse,
  Trace,
  DetectBodyJointsRequest,
  SegmentPortraitPicRequest,
  UpperBodyClothColor,
  GetGroupListRequest,
  ImageRect,
  BodyDetectResult,
  Orientation,
  BodyJointsResult,
  UpperBodyClothSleeve,
  UpperBodyCloth,
  LowerBodyClothLength,
  SearchTraceResponse,
  CreateTraceResponse,
  CreatePersonResponse,
  BoundRect,
  LowerBodyClothColor,
  GetPersonListResponse,
  GetPersonListRequest,
  LowerBodyClothType,
  CreateTraceRequest,
  DeletePersonResponse,
  AttributesOptions,
  CreateGroupResponse,
} from "./bda_models"

/**
 * bda client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bda.tencentcloudapi.com", "2020-03-24", clientConfig)
  }

  /**
     * 本接口用于对一组待识别的人体动作轨迹（Trace）图片，在人体库中识别出最相似的 TopK 人体，按照相似度从大到小排列。

人体动作轨迹（Trace）图片要求：图片中当且仅包含一个人体。人体完整、无遮挡。

> 请注意：
- 我们希望您的输入为严格符合动作轨迹图片要求的图片。如果您输入的图片不符合动作轨迹图片要求，会对最终效果产生较大负面影响；
- 人体动作轨迹，是一个包含1-5张图片的图片序列。您可以输入1张图片作为动作轨迹，也可以输入多张。单个动作轨迹中包含越多符合质量的图片，搜索效果越好。
- 构成人体动作轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
     */
  async SearchTrace(
    req: SearchTraceRequest,
    cb?: (error: string, rep: SearchTraceResponse) => void
  ): Promise<SearchTraceResponse> {
    return this.request("SearchTrace", req, cb)
  }

  /**
   * 终止指定视频人像分割处理任务
   */
  async TerminateSegmentationTask(
    req: TerminateSegmentationTaskRequest,
    cb?: (error: string, rep: TerminateSegmentationTaskResponse) => void
  ): Promise<TerminateSegmentationTaskResponse> {
    return this.request("TerminateSegmentationTask", req, cb)
  }

  /**
   * 获取人体库汇总信息。
   */
  async GetSummaryInfo(
    req?: GetSummaryInfoRequest,
    cb?: (error: string, rep: GetSummaryInfoResponse) => void
  ): Promise<GetSummaryInfoResponse> {
    return this.request("GetSummaryInfo", req, cb)
  }

  /**
     * 检测给定图片中的人体（Body）的位置信息及属性信息。

     */
  async DetectBody(
    req: DetectBodyRequest,
    cb?: (error: string, rep: DetectBodyResponse) => void
  ): Promise<DetectBodyResponse> {
    return this.request("DetectBody", req, cb)
  }

  /**
   * 即二分类人像分割，识别传入图片中人体的完整轮廓，进行抠像。
   */
  async SegmentPortraitPic(
    req: SegmentPortraitPicRequest,
    cb?: (error: string, rep: SegmentPortraitPicResponse) => void
  ): Promise<SegmentPortraitPicResponse> {
    return this.request("SegmentPortraitPic", req, cb)
  }

  /**
     * 检测图片中人体的14个关键点。建议用于人体图像清晰、无遮挡的场景。支持一张图片中存在多个人体的识别。

     */
  async DetectBodyJoints(
    req: DetectBodyJointsRequest,
    cb?: (error: string, rep: DetectBodyJointsResponse) => void
  ): Promise<DetectBodyJointsResponse> {
    return this.request("DetectBodyJoints", req, cb)
  }

  /**
     * 将一个人体动作轨迹添加到一个人员中。一个人员最多允许包含 5 个人体动作轨迹。同一人的人体动作轨迹越多，搜索识别效果越好。

>请注意：
- 我们希望您的输入为 严格符合动作轨迹图片 要求的图片。如果您输入的图片不符合动作轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯。
- 一个人体动作轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果。
- 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的动作轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关。
- 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
- 构成人体动作轨迹单张图片大小限制为2M，分辨率限制为1920*1080。
     */
  async CreateTrace(
    req: CreateTraceRequest,
    cb?: (error: string, rep: CreateTraceResponse) => void
  ): Promise<CreateTraceResponse> {
    return this.request("CreateTrace", req, cb)
  }

  /**
   * 删除该人体库及包含的所有的人员。
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
   * 删除人员。
   */
  async DeletePerson(
    req: DeletePersonRequest,
    cb?: (error: string, rep: DeletePersonResponse) => void
  ): Promise<DeletePersonResponse> {
    return this.request("DeletePerson", req, cb)
  }

  /**
   * 修改人员信息。
   */
  async ModifyPersonInfo(
    req: ModifyPersonInfoRequest,
    cb?: (error: string, rep: ModifyPersonInfoResponse) => void
  ): Promise<ModifyPersonInfoResponse> {
    return this.request("ModifyPersonInfo", req, cb)
  }

  /**
   * 修改人体库名称、备注。
   */
  async ModifyGroup(
    req: ModifyGroupRequest,
    cb?: (error: string, rep: ModifyGroupResponse) => void
  ): Promise<ModifyGroupResponse> {
    return this.request("ModifyGroup", req, cb)
  }

  /**
   * 获取人体库列表。
   */
  async GetGroupList(
    req: GetGroupListRequest,
    cb?: (error: string, rep: GetGroupListResponse) => void
  ): Promise<GetGroupListResponse> {
    return this.request("GetGroupList", req, cb)
  }

  /**
   * 可以查看单条任务的处理情况，包括处理状态，处理结果。
   */
  async DescribeSegmentationTask(
    req: DescribeSegmentationTaskRequest,
    cb?: (error: string, rep: DescribeSegmentationTaskResponse) => void
  ): Promise<DescribeSegmentationTaskResponse> {
    return this.request("DescribeSegmentationTask", req, cb)
  }

  /**
     * 用于创建一个空的人体库，如果人体库已存在返回错误。

1个APPID下最多有2000W个人体动作轨迹（Trace），最多1W个人体库（Group）。

单个人体库（Group）最多10W个人体动作轨迹（Trace）。

单个人员（Person）最多添加 5 个人体动作轨迹（Trace）。
     */
  async CreateGroup(
    req: CreateGroupRequest,
    cb?: (error: string, rep: CreateGroupResponse) => void
  ): Promise<CreateGroupResponse> {
    return this.request("CreateGroup", req, cb)
  }

  /**
     * 创建人员，添加对应人员的人体动作轨迹信息。

请注意：
- 我们希望您的输入为 严格符合动作轨迹图片 要求的图片。如果您输入的图片不符合动作轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯；
- 一个人体动作轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果；
- 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的动作轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关；
- 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
- 构成人体动作轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
     */
  async CreatePerson(
    req: CreatePersonRequest,
    cb?: (error: string, rep: CreatePersonResponse) => void
  ): Promise<CreatePersonResponse> {
    return this.request("CreatePerson", req, cb)
  }

  /**
   * 在前后景分割的基础上优化多分类分割，支持对头发、五官等的分割，既作为换发型、挂件等底层技术，也可用于抠人头、抠人脸等玩法
   */
  async SegmentCustomizedPortraitPic(
    req: SegmentCustomizedPortraitPicRequest,
    cb?: (error: string, rep: SegmentCustomizedPortraitPicResponse) => void
  ): Promise<SegmentCustomizedPortraitPicResponse> {
    return this.request("SegmentCustomizedPortraitPic", req, cb)
  }

  /**
   * 获取指定人体库中的人员列表。
   */
  async GetPersonList(
    req: GetPersonListRequest,
    cb?: (error: string, rep: GetPersonListResponse) => void
  ): Promise<GetPersonListResponse> {
    return this.request("GetPersonList", req, cb)
  }

  /**
   * 本接口为人像分割在线处理接口组中的提交任务接口，可以对提交的资源进行处理视频流/图片流识别视频作品中的人像区域，进行一键抠像、背景替换、人像虚化等后期处理。
   */
  async CreateSegmentationTask(
    req: CreateSegmentationTaskRequest,
    cb?: (error: string, rep: CreateSegmentationTaskResponse) => void
  ): Promise<CreateSegmentationTaskResponse> {
    return this.request("CreateSegmentationTask", req, cb)
  }
}
