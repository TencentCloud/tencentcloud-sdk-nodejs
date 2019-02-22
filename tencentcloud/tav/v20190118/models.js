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
 * GetLocalEngine返回参数结构体
 * @class
 */
class GetLocalEngineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用状态，成功返回200，失败返回400
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 本地引擎下载地址
         * @type {string || null}
         */
        this.Data = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanFileHash返回参数结构体
 * @class
 */
class ScanFileHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用状态，成功返回200，失败返回400
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 云查实际结果信息，包括md5、return_state、virus_state、virus_name字符逗号间隔；        
return_state查询状态：-1/0代表失败、1/2代表成功；
virus_state文状件态：0文件不存在、1白、2黑、3未知、4感染性、5低可信白；
         * @type {string || null}
         */
        this.Data = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanFileHash请求参数结构体
 * @class
 */
class ScanFileHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买服务后获得的授权信息，用于保证请求有效性
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 需要查询的md5值（支持单个和多个，多个md5间用逗号分格）
         * @type {string || null}
         */
        this.Md5s = null;

        /**
         * 保留字段默认填0
         * @type {string || null}
         */
        this.WithCategory = null;

        /**
         * 松严规则控制字段默认填10（5-松、10-标准、15-严）
         * @type {string || null}
         */
        this.SensitiveLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Md5s = 'Md5s' in params ? params.Md5s : null;
        this.WithCategory = 'WithCategory' in params ? params.WithCategory : null;
        this.SensitiveLevel = 'SensitiveLevel' in params ? params.SensitiveLevel : null;

    }
}

/**
 * ScanFile返回参数结构体
 * @class
 */
class ScanFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用状态，成功返回200，失败返回400
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 接口调用描述信息，成功返回"success"，失败返回"invalid request"
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 异步扫描任务提交成功返回success
         * @type {string || null}
         */
        this.Data = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetScanResult返回参数结构体
 * @class
 */
class GetScanResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用状态，成功返回200，失败返回400
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 实际结果信息，包括md5、scan_status、virus_name三个字段；virus_name报毒名："torjan.**":黑样本的报毒名、".":样本不报毒、"" :样本无检出信息，需上传扫描；
scan_status样本状态：-1无检出信息需上传扫描、0样本扫描中、1样本扫描结束且不报毒、2样本扫描结束且报黑、3样本下载失败；
         * @type {string || null}
         */
        this.Data = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetLocalEngine请求参数结构体
 * @class
 */
class GetLocalEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买服务后获得的授权信息，用于保证请求有效性
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * GetScanResult请求参数结构体
 * @class
 */
class GetScanResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买服务后获得的授权信息，用于保证请求有效性
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 需要获取扫描接口的md5（只允许单个md5）
         * @type {string || null}
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * ScanFile请求参数结构体
 * @class
 */
class ScanFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买服务后获得的授权信息，用于保证请求有效性
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 文件下载url地址
         * @type {string || null}
         */
        this.Sample = null;

        /**
         * 文件的md5值
         * @type {string || null}
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sample = 'Sample' in params ? params.Sample : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

module.exports = {
    GetLocalEngineResponse: GetLocalEngineResponse,
    ScanFileHashResponse: ScanFileHashResponse,
    ScanFileHashRequest: ScanFileHashRequest,
    ScanFileResponse: ScanFileResponse,
    GetScanResultResponse: GetScanResultResponse,
    GetLocalEngineRequest: GetLocalEngineRequest,
    GetScanResultRequest: GetScanResultRequest,
    ScanFileRequest: ScanFileRequest,

}
