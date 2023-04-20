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

/**
 * CreateDataRepositoryTask请求参数结构体
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)
   */
  TaskType: string

  /**
   * COS存储桶名
   */
  Bucket: string

  /**
   * 文件系统ID
   */
  FileSystemId: string

  /**
   * 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据
   */
  TaskPath: string

  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载
   */
  RepositoryType?: string

  /**
   * 文件列表下载地址，以http开头
   */
  TextLocation?: string
}

/**
 * CreateDataRepositoryTask返回参数结构体
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * 任务ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 */
export interface DescribeDataRepositoryTaskStatusRequest {
  /**
   * task id
   */
  TaskId: string

  /**
   * file system id
   */
  FileSystemId: string
}

/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 */
export interface DescribeDataRepositoryTaskStatusResponse {
  /**
   * 任务id
   */
  TaskId?: string

  /**
   * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
   */
  Status?: number

  /**
   * 已完成的文件数量
   */
  FinishedFileNumber?: number

  /**
   * 已完成的数据量
   */
  FinishedCapacity?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
