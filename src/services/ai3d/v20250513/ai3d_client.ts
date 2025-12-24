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
  Convert3DFormatRequest,
  DescribeReduceFaceJobResponse,
  SubmitReduceFaceJobResponse,
  Convert3DFormatResponse,
  QueryHunyuanTo3DProJobRequest,
  QueryHunyuan3DPartJobResponse,
  QueryHunyuanTo3DRapidJobResponse,
  SubmitTextureTo3DJobRequest,
  DescribeReduceFaceJobRequest,
  SubmitHunyuanTo3DRapidJobResponse,
  SubmitHunyuanTo3DUVJobRequest,
  File3D,
  DescribeTextureTo3DJobResponse,
  InputFile3D,
  ViewImage,
  SubmitHunyuanTo3DRapidJobRequest,
  SubmitHunyuanTo3DUVJobResponse,
  SubmitHunyuan3DPartJobResponse,
  SubmitHunyuanTo3DProJobRequest,
  DescribeHunyuanTo3DUVJobResponse,
  SubmitReduceFaceJobRequest,
  DescribeTextureTo3DJobRequest,
  DescribeHunyuanTo3DUVJobRequest,
  SubmitHunyuan3DPartJobRequest,
  SubmitHunyuanTo3DProJobResponse,
  SubmitTextureTo3DJobResponse,
  Image,
  QueryHunyuanTo3DProJobResponse,
  QueryHunyuan3DPartJobRequest,
  QueryHunyuanTo3DRapidJobRequest,
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
     * 混元生3D接口，输入单几何模型和参考图或文字描述后，可生成对应的纹理贴图。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitTextureTo3DJob(
    req: SubmitTextureTo3DJobRequest,
    cb?: (error: string, rep: SubmitTextureTo3DJobResponse) => void
  ): Promise<SubmitTextureTo3DJobResponse> {
    return this.request("SubmitTextureTo3DJob", req, cb)
  }

  /**
     * 混元生3D接口，采用 Polygon 1.5模型，输入3D 高模后，可生成布线规整，较低面数的3D 模型。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitReduceFaceJob(
    req: SubmitReduceFaceJobRequest,
    cb?: (error: string, rep: SubmitReduceFaceJobResponse) => void
  ): Promise<SubmitReduceFaceJobResponse> {
    return this.request("SubmitReduceFaceJob", req, cb)
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
  async SubmitHunyuanTo3DRapidJob(
    req: SubmitHunyuanTo3DRapidJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DRapidJobResponse) => void
  ): Promise<SubmitHunyuanTo3DRapidJobResponse> {
    return this.request("SubmitHunyuanTo3DRapidJob", req, cb)
  }

  /**
   * 输入模型后，可根据模型纹理进行UV展开，输出对应UV贴图。
   */
  async SubmitHunyuanTo3DUVJob(
    req: SubmitHunyuanTo3DUVJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DUVJobResponse) => void
  ): Promise<SubmitHunyuanTo3DUVJobResponse> {
    return this.request("SubmitHunyuanTo3DUVJob", req, cb)
  }

  /**
   * 输入3D模型文件后，根据模型结构自动进行组件识别生成。
   */
  async SubmitHunyuan3DPartJob(
    req: SubmitHunyuan3DPartJobRequest,
    cb?: (error: string, rep: SubmitHunyuan3DPartJobResponse) => void
  ): Promise<SubmitHunyuan3DPartJobResponse> {
    return this.request("SubmitHunyuan3DPartJob", req, cb)
  }

  /**
     * 混元生3D接口，采用 Polygon 1.5模型，输入3D 高模后，可生成布线规整，较低面数的3D 模型。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async DescribeReduceFaceJob(
    req: DescribeReduceFaceJobRequest,
    cb?: (error: string, rep: DescribeReduceFaceJobResponse) => void
  ): Promise<DescribeReduceFaceJobResponse> {
    return this.request("DescribeReduceFaceJob", req, cb)
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
   * 查询组件生成任务。
   */
  async QueryHunyuan3DPartJob(
    req: QueryHunyuan3DPartJobRequest,
    cb?: (error: string, rep: QueryHunyuan3DPartJobResponse) => void
  ): Promise<QueryHunyuan3DPartJobResponse> {
    return this.request("QueryHunyuan3DPartJob", req, cb)
  }

  /**
     * 混元生3D接口，输入单几何模型和参考图或文字描述后，可生成对应的纹理贴图。
默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async DescribeTextureTo3DJob(
    req: DescribeTextureTo3DJobRequest,
    cb?: (error: string, rep: DescribeTextureTo3DJobResponse) => void
  ): Promise<DescribeTextureTo3DJobResponse> {
    return this.request("DescribeTextureTo3DJob", req, cb)
  }

  /**
   * 查询组件拆分任务。
   */
  async DescribeHunyuanTo3DUVJob(
    req: DescribeHunyuanTo3DUVJobRequest,
    cb?: (error: string, rep: DescribeHunyuanTo3DUVJobResponse) => void
  ): Promise<DescribeHunyuanTo3DUVJobResponse> {
    return this.request("DescribeHunyuanTo3DUVJob", req, cb)
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
   * 输入3D模型文件后，可进行3D模型文件格式转换。
   */
  async Convert3DFormat(
    req: Convert3DFormatRequest,
    cb?: (error: string, rep: Convert3DFormatResponse) => void
  ): Promise<Convert3DFormatResponse> {
    return this.request("Convert3DFormat", req, cb)
  }
}
