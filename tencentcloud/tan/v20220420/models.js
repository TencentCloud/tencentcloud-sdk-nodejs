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
 * CreateBlockNodeRecords请求参数结构体
 * @class
 */
class CreateBlockNodeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 盘查组id，可在“盘查组概览”功能中获取。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 节点id，可在“数据接入管理”中获取。
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点数据json，具体demo请参考输入示例，其中key为数据接入管理中节点内创建的属性变量名，value为期望的推送值。
         * @type {string || null}
         */
        this.Records = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Records = 'Records' in params ? params.Records : null;

    }
}

/**
 * CreateBlockNodeRecords返回参数结构体
 * @class
 */
class CreateBlockNodeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateBlockNodeRecordsRequest: CreateBlockNodeRecordsRequest,
    CreateBlockNodeRecordsResponse: CreateBlockNodeRecordsResponse,

}
