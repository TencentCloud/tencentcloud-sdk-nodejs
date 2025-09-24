/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  SubmitHunyuanTo3DRapidJobResponse,
  SubmitHunyuanTo3DRapidJobRequest,
  SubmitHunyuanTo3DProJobResponse,
  SubmitHunyuanTo3DJobResponse,
  QueryHunyuanTo3DJobRequest,
  SubmitHunyuanTo3DProJobRequest,
  QueryHunyuanTo3DProJobRequest,
  File3D,
  QueryHunyuanTo3DRapidJobResponse,
  ViewImage,
  QueryHunyuanTo3DProJobResponse,
  SubmitHunyuanTo3DJobRequest,
  QueryHunyuanTo3DRapidJobRequest,
  QueryHunyuanTo3DJobResponse,
} from "./ai3d_models"

/**
 * ai3d client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ai3d.tencentcloudapi.com", "2025-05-13", clientConfig)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async QueryHunyuanTo3DJob(
    req: QueryHunyuanTo3DJobRequest,
    cb?: (error: string, rep: QueryHunyuanTo3DJobResponse) => void
  ): Promise<QueryHunyuanTo3DJobResponse> {
    return this.request("QueryHunyuanTo3DJob", req, cb)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供3个并发，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitHunyuanTo3DProJob(
    req: SubmitHunyuanTo3DProJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DProJobResponse) => void
  ): Promise<SubmitHunyuanTo3DProJobResponse> {
    return this.request("SubmitHunyuanTo3DProJob", req, cb)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async QueryHunyuanTo3DRapidJob(
    req: QueryHunyuanTo3DRapidJobRequest,
    cb?: (error: string, rep: QueryHunyuanTo3DRapidJobResponse) => void
  ): Promise<QueryHunyuanTo3DRapidJobResponse> {
    return this.request("QueryHunyuanTo3DRapidJob", req, cb)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitHunyuanTo3DJob(
    req: SubmitHunyuanTo3DJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DJobResponse) => void
  ): Promise<SubmitHunyuanTo3DJobResponse> {
    return this.request("SubmitHunyuanTo3DJob", req, cb)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供3个并发，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async QueryHunyuanTo3DProJob(
    req: QueryHunyuanTo3DProJobRequest,
    cb?: (error: string, rep: QueryHunyuanTo3DProJobResponse) => void
  ): Promise<QueryHunyuanTo3DProJobResponse> {
    return this.request("QueryHunyuanTo3DProJob", req, cb)
  }

  /**
     * 混元生3D接口，基于混元大模型，根据输入的文本描述/图片智能生成3D。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitHunyuanTo3DRapidJob(
    req: SubmitHunyuanTo3DRapidJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DRapidJobResponse) => void
  ): Promise<SubmitHunyuanTo3DRapidJobResponse> {
    return this.request("SubmitHunyuanTo3DRapidJob", req, cb)
  }
}
