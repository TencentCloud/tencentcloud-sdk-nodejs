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
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateDataRepositoryTask请求参数结构体
 * @class
 */
class CreateDataRepositoryTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * COS存储桶名
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据
         * @type {string || null}
         */
        this.TaskPath = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 文件列表下载地址，以http开头
         * @type {string || null}
         */
        this.TextLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.TaskPath = 'TaskPath' in params ? params.TaskPath : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.TextLocation = 'TextLocation' in params ? params.TextLocation : null;

    }
}

/**
 * CreateDataRepositoryTask返回参数结构体
 * @class
 */
class CreateDataRepositoryTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 * @class
 */
class DescribeDataRepositoryTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * task id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * file system id
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 * @class
 */
class DescribeDataRepositoryTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateDataRepositoryTaskRequest: CreateDataRepositoryTaskRequest,
    CreateDataRepositoryTaskResponse: CreateDataRepositoryTaskResponse,
    DescribeDataRepositoryTaskStatusRequest: DescribeDataRepositoryTaskStatusRequest,
    DescribeDataRepositoryTaskStatusResponse: DescribeDataRepositoryTaskStatusResponse,

}
