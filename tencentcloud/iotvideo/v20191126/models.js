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
 * UploadOtaVersion返回参数结构体
 * @class
 */
class UploadOtaVersionResponse extends  AbstractModel {
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

/**
 * CreateGencode返回参数结构体
 * @class
 */
class CreateGencodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的源代码(zip压缩后的base64编码)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZipCode = null;

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
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogs请求参数结构体
 * @class
 */
class DescribeLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 当前分页的最大条数,0<取值范围<=100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量,取值范围>0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 日志类型 1.在线状态变更 2.ProConst变更 3.ProWritable变更 4.Action控制 5.ProReadonly变更 6.Event事件
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * 查询的起始时间 UNIX时间戳，单位秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 物模型对象索引，用于模糊查询，字符长度<=255，每层节点的字符长度<=16
         * @type {string || null}
         */
        this.DataObject = null;

        /**
         * 查询的结束时间 UNIX时间戳，单位秒
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.DataObject = 'DataObject' in params ? params.DataObject : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateIotDataType请求参数结构体
 * @class
 */
class CreateIotDataTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义数据类型，json格式的字符串
         * @type {string || null}
         */
        this.IotDataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IotDataType = 'IotDataType' in params ? params.IotDataType : null;

    }
}

/**
 * DescribePubVersions请求参数结构体
 * @class
 */
class DescribePubVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeIotModel返回参数结构体
 * @class
 */
class DescribeIotModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物模型定义，json格式的字符串
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableDevice返回参数结构体
 * @class
 */
class DisableDeviceResponse extends  AbstractModel {
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

/**
 * DescribeRunLog请求参数结构体
 * @class
 */
class DescribeRunLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * DescribeProducts请求参数结构体
 * @class
 */
class DescribeProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页大小，当前页面中显示的最大数量，值范围 1-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 产器型号(APP产品,为APP包名)
         * @type {string || null}
         */
        this.ProductModel = null;

        /**
         * 开始时间 ，UNIX 时间戳，单位秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间 ，UNIX 时间戳，单位秒
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProductModel = 'ProductModel' in params ? params.ProductModel : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeleteTraceIds请求参数结构体
 * @class
 */
class DeleteTraceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * 物模型历史版本
 * @class
 */
class IotModelData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本号
         * @type {number || null}
         */
        this.Revision = null;

        /**
         * 发布时间
         * @type {number || null}
         */
        this.ReleaseTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Revision = 'Revision' in params ? params.Revision : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DevicesData> || null}
         */
        this.Data = null;

        /**
         * 设备总数
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DevicesData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProduct返回参数结构体
 * @class
 */
class ModifyProductResponse extends  AbstractModel {
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

/**
 * ModifyProduct请求参数结构体
 * @class
 */
class ModifyProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 主芯片产商ID
         * @type {string || null}
         */
        this.ChipManufactureId = null;

        /**
         * 主芯片ID
         * @type {string || null}
         */
        this.ChipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;

    }
}

/**
 * DisableDeviceStream请求参数结构体
 * @class
 */
class DisableDeviceStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * CreateIotModel请求参数结构体
 * @class
 */
class CreateIotModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 物模型json串
         * @type {string || null}
         */
        this.IotModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.IotModel = 'IotModel' in params ? params.IotModel : null;

    }
}

/**
 * DescribeTraceStatus返回参数结构体
 * @class
 */
class DescribeTraceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备追踪状态列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TraceStatus> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TraceStatus();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUploadPath请求参数结构体
 * @class
 */
class CreateUploadPathRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件文件名
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * CreateDevToken请求参数结构体
 * @class
 */
class CreateDevTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 设备TID列表,0<元素数量<=100
         * @type {Array.<string> || null}
         */
        this.Tids = null;

        /**
         * Token的TTL(time to alive)分钟数
         * @type {number || null}
         */
        this.TtlMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.Tids = 'Tids' in params ? params.Tids : null;
        this.TtlMinutes = 'TtlMinutes' in params ? params.TtlMinutes : null;

    }
}

/**
 * DeleteIotDataType请求参数结构体
 * @class
 */
class DeleteIotDataTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义数据类型的标识符
         * @type {string || null}
         */
        this.TypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;

    }
}

/**
 * DescribeMessageQueue请求参数结构体
 * @class
 */
class DescribeMessageQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DeleteAppUsr返回参数结构体
 * @class
 */
class DeleteAppUsrResponse extends  AbstractModel {
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

/**
 * DescribeRegistrationStatus返回参数结构体
 * @class
 */
class DescribeRegistrationStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户注册状态列表
         * @type {Array.<RegisteredStatus> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RegisteredStatus();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProduct请求参数结构体
 * @class
 */
class DescribeProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeProducts返回参数结构体
 * @class
 */
class DescribeProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProductData> || null}
         */
        this.Data = null;

        /**
         * 产品总数
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ProductData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAppUsr请求参数结构体
 * @class
 */
class CreateAppUsrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识用户的唯一ID，防止同一个用户多次注册
         * @type {string || null}
         */
        this.CunionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CunionId = 'CunionId' in params ? params.CunionId : null;

    }
}

/**
 * 设备证书及密钥
 * @class
 */
class DeviceCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 设备初始证书信息，base64编码
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 设备私钥下载地址
         * @type {string || null}
         */
        this.WhiteBoxSoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.WhiteBoxSoUrl = 'WhiteBoxSoUrl' in params ? params.WhiteBoxSoUrl : null;

    }
}

/**
 * UpgradeDevice请求参数结构体
 * @class
 */
class UpgradeDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 是否立即升级
         * @type {boolean || null}
         */
        this.UpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.UpgradeNow = 'UpgradeNow' in params ? params.UpgradeNow : null;

    }
}

/**
 * 设备日志信息
 * @class
 */
class LogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发生时间 UNIX时间戳，单位秒
         * @type {number || null}
         */
        this.Occurtime = null;

        /**
         * 日志类型 1在线状态变更 2FP变更 3SP变更 4CO控制 5ST变更 6EV事件
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * 物模型对象索引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataObject = null;

        /**
         * 物模型旧值  json串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * 物模型新值  json串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Occurtime = 'Occurtime' in params ? params.Occurtime : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.DataObject = 'DataObject' in params ? params.DataObject : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;

    }
}

/**
 * DescribeModelDataRet返回参数结构体
 * @class
 */
class DescribeModelDataRetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备响应结果
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunIotModel返回参数结构体
 * @class
 */
class RunIotModelResponse extends  AbstractModel {
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

/**
 * RunIotModel请求参数结构体
 * @class
 */
class RunIotModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 物模型定义，json格式的字符串
         * @type {string || null}
         */
        this.IotModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.IotModel = 'IotModel' in params ? params.IotModel : null;

    }
}

/**
 * 产品发布过的全部版本
 * @class
 */
class OtaPubHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 发布时间，unix时间戳，单位：秒
         * @type {number || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;

    }
}

/**
 * DeleteProduct请求参数结构体
 * @class
 */
class DeleteProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeBindUsr返回参数结构体
 * @class
 */
class DescribeBindUsrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 具有绑定关系的终端用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BindUsrInfo> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BindUsrInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备信息
 * @class
 */
class DeviceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 激活时间 0代表未激活
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveTime = null;

        /**
         * 设备是否被禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 固件版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 设备在线状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastOnlineTime = null;

        /**
         * 物模型json数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IotModel = null;

        /**
         * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备初始证书信息，base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 设备私钥下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WhiteBoxSoUrl = null;

        /**
         * 设备推流状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.StreamStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ActiveTime = 'ActiveTime' in params ? params.ActiveTime : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LastOnlineTime = 'LastOnlineTime' in params ? params.LastOnlineTime : null;
        this.IotModel = 'IotModel' in params ? params.IotModel : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.WhiteBoxSoUrl = 'WhiteBoxSoUrl' in params ? params.WhiteBoxSoUrl : null;
        this.StreamStatus = 'StreamStatus' in params ? params.StreamStatus : null;

    }
}

/**
 * SetMessageQueue请求参数结构体
 * @class
 */
class SetMessageQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 消息队列类型 1-CMQ; 2-Ckafka
         * @type {number || null}
         */
        this.MsgQueueType = null;

        /**
         * 消息类型,整型值（0-31）之间以“,”分隔
0：在线状态变更
1.固件版本变更
2.设置参数变更
3.控制状态变更
4.状态信息变更
5.事件发布
         * @type {string || null}
         */
        this.MsgType = null;

        /**
         * 消息队列主题，不超过32字符
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * kafka消息队列的实例名，不超过64字符
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 消息地域，不超过32字符
         * @type {string || null}
         */
        this.MsgRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.MsgQueueType = 'MsgQueueType' in params ? params.MsgQueueType : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.MsgRegion = 'MsgRegion' in params ? params.MsgRegion : null;

    }
}

/**
 * 设备绑定的终端用户
 * @class
 */
class BindUsrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IotVideo平台分配给终端用户的用户id
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 用户角色，owner：主人，guest：访客
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DeleteOtaVersion请求参数结构体
 * @class
 */
class DeleteOtaVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeIotDataType返回参数结构体
 * @class
 */
class DescribeIotDataTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义数据类型，json格式的字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品信息
 * @class
 */
class ProductData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 创建时间，UNIX 时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 物模型发布版本号,0代表物模型尚未发布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IotModelRevision = null;

        /**
         * 产品密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 设备功能码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 产器型号(APP产品,为APP包名)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductModel = null;

        /**
         * 主芯片厂商id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChipManufactureId = null;

        /**
         * 主芯片型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IotModelRevision = 'IotModelRevision' in params ? params.IotModelRevision : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.ProductModel = 'ProductModel' in params ? params.ProductModel : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;

    }
}

/**
 * CreateBinding请求参数结构体
 * @class
 */
class CreateBindingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 用户角色，owner：主人，guest：访客
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 是否踢掉之前的主人，true：踢掉；false：不踢掉。当role为guest时，可以不填
         * @type {boolean || null}
         */
        this.ForceBind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.ForceBind = 'ForceBind' in params ? params.ForceBind : null;

    }
}

/**
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * 布尔值，标识指定设备是否在白名单中
 * @class
 */
class TraceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 设备追踪状态
         * @type {boolean || null}
         */
        this.IsExist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.IsExist = 'IsExist' in params ? params.IsExist : null;

    }
}

/**
 * CreateDevToken返回参数结构体
 * @class
 */
class CreateDevTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户token列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DevTokenInfo> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DevTokenInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDeviceProperty请求参数结构体
 * @class
 */
class ModifyDevicePropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 如果设备处于休眠状态，是否唤醒设备
         * @type {boolean || null}
         */
        this.Wakeup = null;

        /**
         * 物模型的分支路径
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 写入的物模型数据，如果是json需要转义成字符串
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Value字段是否为数值（float、int）
         * @type {boolean || null}
         */
        this.IsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Wakeup = 'Wakeup' in params ? params.Wakeup : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.IsNum = 'IsNum' in params ? params.IsNum : null;

    }
}

/**
 * RunDeviceStream请求参数结构体
 * @class
 */
class RunDeviceStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID 列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * RunDevice返回参数结构体
 * @class
 */
class RunDeviceResponse extends  AbstractModel {
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

/**
 * DeleteIotDataType返回参数结构体
 * @class
 */
class DeleteIotDataTypeResponse extends  AbstractModel {
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

/**
 * DescribeTraceStatus请求参数结构体
 * @class
 */
class DescribeTraceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * CreateUsrToken返回参数结构体
 * @class
 */
class CreateUsrTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * IoT Video平台的AccessToken
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * Token的过期时间，单位秒(UTC时间)
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 终端ID
         * @type {string || null}
         */
        this.TerminalId = null;

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
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于终端用户临时访问设备的token授权信息
 * @class
 */
class DevTokenInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的终端用户在IotVideo上的唯一标识id
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * IotVideo平台的accessToken
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * Token的过期时间，单位秒(UTC时间)
         * @type {number || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * CreateTraceIds请求参数结构体
 * @class
 */
class CreateTraceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * DeleteMessageQueue返回参数结构体
 * @class
 */
class DeleteMessageQueueResponse extends  AbstractModel {
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

/**
 * DescribeOtaVersions请求参数结构体
 * @class
 */
class DescribeOtaVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量，0<取值范围<=100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 产品ID，为空时查询客户所有产品的版本信息
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 版本号，支持模糊匹配
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 版本类型 1未发布 2测试发布 3正式发布 4禁用
         * @type {number || null}
         */
        this.PubStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.PubStatus = 'PubStatus' in params ? params.PubStatus : null;

    }
}

/**
 * DescribeTraceIds返回参数结构体
 * @class
 */
class DescribeTraceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表，列表元素之间以“,”分隔
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProduct返回参数结构体
 * @class
 */
class CreateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详细信息
         * @type {ProductBase || null}
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

        if (params.Data) {
            let obj = new ProductBase();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegistrationStatus请求参数结构体
 * @class
 */
class DescribeRegistrationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户的唯一ID列表，0<元素数量<=100
         * @type {Array.<string> || null}
         */
        this.CunionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CunionIds = 'CunionIds' in params ? params.CunionIds : null;

    }
}

/**
 * CreateStorage请求参数结构体
 * @class
 */
class CreateStorageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存套餐ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 用户唯一标识，由厂商保证内部唯一性
         * @type {string || null}
         */
        this.UserTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.UserTag = 'UserTag' in params ? params.UserTag : null;

    }
}

/**
 * UpgradeDevice返回参数结构体
 * @class
 */
class UpgradeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备端返回的数据
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableOtaVersion返回参数结构体
 * @class
 */
class DisableOtaVersionResponse extends  AbstractModel {
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

/**
 * DescribeBindDev返回参数结构体
 * @class
 */
class DescribeBindDevResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的设备列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BindDevInfo> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BindDevInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProduct请求参数结构体
 * @class
 */
class CreateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产器型号(APP产品,为APP包名)
         * @type {string || null}
         */
        this.ProductModel = null;

        /**
         * 设备功能码（ypsxth:音频双向通话 ，spdxth:视频单向通话）
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 产品名称
仅支持中文、英文、数字、下划线，不超过32个字符
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品描述信息
不支持单引号、双引号、退格符、回车符、换行符、制表符、反斜杠、下划线、“%”、“#”、“$”，不超过128字符
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 主芯片产商ID
         * @type {string || null}
         */
        this.ChipManufactureId = null;

        /**
         * 主芯片ID
         * @type {string || null}
         */
        this.ChipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductModel = 'ProductModel' in params ? params.ProductModel : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;

    }
}

/**
 * RunTestOtaVersion返回参数结构体
 * @class
 */
class RunTestOtaVersionResponse extends  AbstractModel {
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

/**
 * RunTestOtaVersion请求参数结构体
 * @class
 */
class RunTestOtaVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 指定可升级的设备TID
         * @type {Array.<string> || null}
         */
        this.Tids = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.Tids = 'Tids' in params ? params.Tids : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeDevice返回参数结构体
 * @class
 */
class DescribeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeviceData || null}
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

        if (params.Data) {
            let obj = new DeviceData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetMessageQueue返回参数结构体
 * @class
 */
class SetMessageQueueResponse extends  AbstractModel {
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

/**
 * DeleteOtaVersion返回参数结构体
 * @class
 */
class DeleteOtaVersionResponse extends  AbstractModel {
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

/**
 * UploadOtaVersion请求参数结构体
 * @class
 */
class UploadOtaVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 固件版本URL
         * @type {string || null}
         */
        this.VersionUrl = null;

        /**
         * 文件大小，单位：byte
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件md5校验码（32字符）
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.VersionUrl = 'VersionUrl' in params ? params.VersionUrl : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeIotModels请求参数结构体
 * @class
 */
class DescribeIotModelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeModelDataRet请求参数结构体
 * @class
 */
class DescribeModelDataRetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateTraceIds返回参数结构体
 * @class
 */
class CreateTraceIdsResponse extends  AbstractModel {
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

/**
 * DeleteBinding请求参数结构体
 * @class
 */
class DeleteBindingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 用户角色，owner：主人，guest：访客
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeOtaVersions返回参数结构体
 * @class
 */
class DescribeOtaVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 版本详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VersionData> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VersionData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProduct返回参数结构体
 * @class
 */
class DeleteProductResponse extends  AbstractModel {
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

/**
 * RunOtaVersion请求参数结构体
 * @class
 */
class RunOtaVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 灰度值,取值范围0-100，为0时相当于暂停发布
         * @type {number || null}
         */
        this.GrayValue = null;

        /**
         * 指定的旧版本
         * @type {Array.<string> || null}
         */
        this.OldVersions = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.GrayValue = 'GrayValue' in params ? params.GrayValue : null;
        this.OldVersions = 'OldVersions' in params ? params.OldVersions : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * CreateDevices返回参数结构体
 * @class
 */
class CreateDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建设备的认证信息
         * @type {Array.<DeviceCertificate> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DeviceCertificate();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备物模型数据
 * @class
 */
class DeviceModelData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 物模型分支路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 物模型数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IotModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.IotModel = 'IotModel' in params ? params.IotModel : null;

    }
}

/**
 * DescribeIotDataType请求参数结构体
 * @class
 */
class DescribeIotDataTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义数据类型的标识符，为空则返回全量自定义类型的列表
         * @type {string || null}
         */
        this.TypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;

    }
}

/**
 * SendOnlineMsg请求参数结构体
 * @class
 */
class SendOnlineMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 如果设备处于休眠状态，是否唤醒设备
         * @type {boolean || null}
         */
        this.Wakeup = null;

        /**
         * 等待回应类型
0：不等待设备回应直接响应请求;
1：要求设备确认消息已接收,或等待超时后返回;
2：要求设备进行响应处理,收到设备的响应数据后,将设备响应数据回应给请求方;
         * @type {number || null}
         */
        this.WaitResp = null;

        /**
         * 消息主题
         * @type {string || null}
         */
        this.MsgTopic = null;

        /**
         * 消息内容，最大长度不超过8k字节
         * @type {string || null}
         */
        this.MsgContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Wakeup = 'Wakeup' in params ? params.Wakeup : null;
        this.WaitResp = 'WaitResp' in params ? params.WaitResp : null;
        this.MsgTopic = 'MsgTopic' in params ? params.MsgTopic : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;

    }
}

/**
 * DescribeDevice请求参数结构体
 * @class
 */
class DescribeDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * DescribeRunLog返回参数结构体
 * @class
 */
class DescribeRunLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备运行日志文本信息
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIotModel请求参数结构体
 * @class
 */
class DescribeIotModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 物模型版本号， -1表示最新编辑的（未发布）
         * @type {number || null}
         */
        this.Revision = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Revision = 'Revision' in params ? params.Revision : null;

    }
}

/**
 * DescribeTraceIds请求参数结构体
 * @class
 */
class DescribeTraceIdsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateAppUsr返回参数结构体
 * @class
 */
class CreateAppUsrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 厂商云标识用户的唯一ID
         * @type {string || null}
         */
        this.CunionId = null;

        /**
         * 客户的终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 用户是否为新创建
         * @type {boolean || null}
         */
        this.NewRegist = null;

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
        this.CunionId = 'CunionId' in params ? params.CunionId : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.NewRegist = 'NewRegist' in params ? params.NewRegist : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTraceIds返回参数结构体
 * @class
 */
class DeleteTraceIdsResponse extends  AbstractModel {
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

/**
 * DeleteMessageQueue请求参数结构体
 * @class
 */
class DeleteMessageQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * CreateUsrToken请求参数结构体
 * @class
 */
class CreateUsrTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 终端唯一ID，用于区分同一个用户的多个终端
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * Token的TTL(time to alive)分钟数
         * @type {number || null}
         */
        this.TtlMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.TtlMinutes = 'TtlMinutes' in params ? params.TtlMinutes : null;

    }
}

/**
 * RunDevice请求参数结构体
 * @class
 */
class RunDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TID列表 ≤100
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * DescribeDeviceModel返回参数结构体
 * @class
 */
class DescribeDeviceModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备物模型信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeviceModelData || null}
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

        if (params.Data) {
            let obj = new DeviceModelData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品信息摘要
 * @class
 */
class ProductBase extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产器型号(APP产品,为APP包名)
         * @type {string || null}
         */
        this.ProductModel = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品描述信息
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 创建时间，UNIX 时间戳，单位秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 物模型发布版本号,0代表物模型尚未发布
         * @type {number || null}
         */
        this.IotModelRevision = null;

        /**
         * 产品密钥
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductModel = 'ProductModel' in params ? params.ProductModel : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IotModelRevision = 'IotModelRevision' in params ? params.IotModelRevision : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * CreateGencode请求参数结构体
 * @class
 */
class CreateGencodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 物模型发布版本号，-1代表最新编辑（未发布）的版本
         * @type {number || null}
         */
        this.Revision = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Revision = 'Revision' in params ? params.Revision : null;

    }
}

/**
 * DescribePubVersions返回参数结构体
 * @class
 */
class DescribePubVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 历史发布的版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OtaPubHistory> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new OtaPubHistory();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDeviceAction请求参数结构体
 * @class
 */
class ModifyDeviceActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 如果设备处于休眠状态，是否唤醒设备
         * @type {boolean || null}
         */
        this.Wakeup = null;

        /**
         * 物模型的分支路径
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 写入的物模型数据，如果是json需要转义成字符串
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Value字段的类型是否为数值（float、int）
         * @type {boolean || null}
         */
        this.IsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Wakeup = 'Wakeup' in params ? params.Wakeup : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.IsNum = 'IsNum' in params ? params.IsNum : null;

    }
}

/**
 * CreateIotModel返回参数结构体
 * @class
 */
class CreateIotModelResponse extends  AbstractModel {
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

/**
 * 终端用户绑定的设备
 * @class
 */
class BindDevInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceModel = null;

        /**
         * 用户角色，owner：主人，guest：访客
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceModel = 'DeviceModel' in params ? params.DeviceModel : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeBindDev请求参数结构体
 * @class
 */
class DescribeBindDevRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;

    }
}

/**
 * 产品转发消息队列配置
 * @class
 */
class MsgQueueData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列类型 1：CMQ 2：kafka
         * @type {number || null}
         */
        this.MsgQueueType = null;

        /**
         * 消息类型列表，整型值（0-31）之间以“,”分隔
         * @type {string || null}
         */
        this.MsgType = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 消息地域
         * @type {string || null}
         */
        this.MsgRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MsgQueueType = 'MsgQueueType' in params ? params.MsgQueueType : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.MsgRegion = 'MsgRegion' in params ? params.MsgRegion : null;

    }
}

/**
 * 终端用户注册状态
 * @class
 */
class RegisteredStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户的唯一ID
         * @type {string || null}
         */
        this.CunionId = null;

        /**
         * 注册状态
         * @type {boolean || null}
         */
        this.IsRegisted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CunionId = 'CunionId' in params ? params.CunionId : null;
        this.IsRegisted = 'IsRegisted' in params ? params.IsRegisted : null;

    }
}

/**
 * RunDeviceStream返回参数结构体
 * @class
 */
class RunDeviceStreamResponse extends  AbstractModel {
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

/**
 * RunOtaVersion返回参数结构体
 * @class
 */
class RunOtaVersionResponse extends  AbstractModel {
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

/**
 * DescribeDeviceModel请求参数结构体
 * @class
 */
class DescribeDeviceModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 物模型的分支路径
         * @type {string || null}
         */
        this.Branch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Branch = 'Branch' in params ? params.Branch : null;

    }
}

/**
 * DescribeLogs返回参数结构体
 * @class
 */
class DescribeLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备日志信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogData> || null}
         */
        this.Data = null;

        /**
         * Data数组所包含的信息条数
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new LogData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDeviceAction返回参数结构体
 * @class
 */
class ModifyDeviceActionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备端的响应结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 任务ID
若设备端未能及时响应时，会返回此字段，用户可以通过DescribeModelDataRet获取设备的最终响应结果。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBinding返回参数结构体
 * @class
 */
class CreateBindingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问设备的AccessToken
         * @type {string || null}
         */
        this.AccessToken = null;

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
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备列表元素所包含的设备基本信息
 * @class
 */
class DevicesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 激活时间 0代表未激活
         * @type {number || null}
         */
        this.ActiveTime = null;

        /**
         * 设备是否被禁用
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 设备推流状态
         * @type {boolean || null}
         */
        this.StreamStatus = null;

        /**
         * 固件版本
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 设备在线状态
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒
         * @type {number || null}
         */
        this.LastOnlineTime = null;

        /**
         * 物模型json数据
         * @type {string || null}
         */
        this.IotModel = null;

        /**
         * 设备固件最新更新时间，UNIX时间戳，单位秒
         * @type {number || null}
         */
        this.LastUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ActiveTime = 'ActiveTime' in params ? params.ActiveTime : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.StreamStatus = 'StreamStatus' in params ? params.StreamStatus : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LastOnlineTime = 'LastOnlineTime' in params ? params.LastOnlineTime : null;
        this.IotModel = 'IotModel' in params ? params.IotModel : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;

    }
}

/**
 * CreateDevices请求参数结构体
 * @class
 */
class CreateDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 创建设备的数量，数量范围1-100
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 设备名称前缀，支持英文、数字，不超过10字符
         * @type {string || null}
         */
        this.NamePrefix = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.NamePrefix = 'NamePrefix' in params ? params.NamePrefix : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DisableDevice请求参数结构体
 * @class
 */
class DisableDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID ≤100
         * @type {Array.<string> || null}
         */
        this.Tids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tids = 'Tids' in params ? params.Tids : null;

    }
}

/**
 * DisableOtaVersion请求参数结构体
 * @class
 */
class DisableOtaVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeProduct返回参数结构体
 * @class
 */
class DescribeProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProductData || null}
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

        if (params.Data) {
            let obj = new ProductData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBindUsr请求参数结构体
 * @class
 */
class DescribeBindUsrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 设备主人的AccessId
         * @type {string || null}
         */
        this.AccessId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;

    }
}

/**
 * SendOnlineMsg返回参数结构体
 * @class
 */
class SendOnlineMsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 若返回此项则表明需要用户用此taskID进行查询请求是否成功(只有waitresp不等于0的情况下才可能会返回该taskID项)
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 设备响应信息
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAppUsr请求参数结构体
 * @class
 */
class DeleteAppUsrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的终端用户在IoT Video上的唯一标识ID
         * @type {string || null}
         */
        this.AccessId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessId = 'AccessId' in params ? params.AccessId : null;

    }
}

/**
 * DescribeIotModels返回参数结构体
 * @class
 */
class DescribeIotModelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 历史版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IotModelData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new IotModelData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMessageQueue返回参数结构体
 * @class
 */
class DescribeMessageQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MsgQueueData || null}
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

        if (params.Data) {
            let obj = new MsgQueueData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 是否返回全量数据
当该值为false时，返回值中的设备物模型、固件版本、在线状态、最后在线时间字段等字段，都将返回数据类型的零值。
         * @type {boolean || null}
         */
        this.ReturnModel = null;

        /**
         * 分页数量,0<取值范围<=100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移，取值＞0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 指定固件版本号，为空查询此产品下所有设备
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 设备名称，支持左前缀模糊匹配
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ReturnModel = 'ReturnModel' in params ? params.ReturnModel : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateIotDataType返回参数结构体
 * @class
 */
class CreateIotDataTypeResponse extends  AbstractModel {
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

/**
 * ModifyDeviceProperty返回参数结构体
 * @class
 */
class ModifyDevicePropertyResponse extends  AbstractModel {
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

/**
 * DeleteBinding返回参数结构体
 * @class
 */
class DeleteBindingResponse extends  AbstractModel {
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

/**
 * CreateStorage返回参数结构体
 * @class
 */
class CreateStorageResponse extends  AbstractModel {
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

/**
 * DisableDeviceStream返回参数结构体
 * @class
 */
class DisableDeviceStreamResponse extends  AbstractModel {
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

/**
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
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

/**
 * CreateUploadPath返回参数结构体
 * @class
 */
class CreateUploadPathResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件上传地址URL，用户可将本地的固件文件通过该URL以PUT的请求方式上传。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 固件版本详细信息
 * @class
 */
class VersionData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 版本类型 1未发布 2测试发布 3正式发布 4禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PubStatus = null;

        /**
         * 固件版本存储路径URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionUrl = null;

        /**
         * 文件大小，byte
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件校验码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 指定的允许升级的旧版本，PubStatus=3时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldVersions = null;

        /**
         * 指定的允许升级的旧设备id，PubStatus=2时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tids = null;

        /**
         * 灰度值（0-100）,PubStatus=3时有效，表示n%的升级总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GrayValue = null;

        /**
         * 最近一次发布时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublishTime = null;

        /**
         * 此版本激活的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveCount = null;

        /**
         * 此版本在线的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OnlineCount = null;

        /**
         * 上传固件文件的时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 发布记录的最后变更时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UploadTime = null;

        /**
         * 该固件版本发布的变更次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModifyTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OtaVersion = 'OtaVersion' in params ? params.OtaVersion : null;
        this.PubStatus = 'PubStatus' in params ? params.PubStatus : null;
        this.VersionUrl = 'VersionUrl' in params ? params.VersionUrl : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.OldVersions = 'OldVersions' in params ? params.OldVersions : null;
        this.Tids = 'Tids' in params ? params.Tids : null;
        this.GrayValue = 'GrayValue' in params ? params.GrayValue : null;
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;
        this.ActiveCount = 'ActiveCount' in params ? params.ActiveCount : null;
        this.OnlineCount = 'OnlineCount' in params ? params.OnlineCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UploadTime = 'UploadTime' in params ? params.UploadTime : null;
        this.ModifyTimes = 'ModifyTimes' in params ? params.ModifyTimes : null;

    }
}

module.exports = {
    UploadOtaVersionResponse: UploadOtaVersionResponse,
    CreateGencodeResponse: CreateGencodeResponse,
    DescribeLogsRequest: DescribeLogsRequest,
    CreateIotDataTypeRequest: CreateIotDataTypeRequest,
    DescribePubVersionsRequest: DescribePubVersionsRequest,
    DescribeIotModelResponse: DescribeIotModelResponse,
    DisableDeviceResponse: DisableDeviceResponse,
    DescribeRunLogRequest: DescribeRunLogRequest,
    DescribeProductsRequest: DescribeProductsRequest,
    DeleteTraceIdsRequest: DeleteTraceIdsRequest,
    IotModelData: IotModelData,
    DescribeDevicesResponse: DescribeDevicesResponse,
    ModifyProductResponse: ModifyProductResponse,
    ModifyProductRequest: ModifyProductRequest,
    DisableDeviceStreamRequest: DisableDeviceStreamRequest,
    CreateIotModelRequest: CreateIotModelRequest,
    DescribeTraceStatusResponse: DescribeTraceStatusResponse,
    CreateUploadPathRequest: CreateUploadPathRequest,
    CreateDevTokenRequest: CreateDevTokenRequest,
    DeleteIotDataTypeRequest: DeleteIotDataTypeRequest,
    DescribeMessageQueueRequest: DescribeMessageQueueRequest,
    DeleteAppUsrResponse: DeleteAppUsrResponse,
    DescribeRegistrationStatusResponse: DescribeRegistrationStatusResponse,
    DescribeProductRequest: DescribeProductRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    CreateAppUsrRequest: CreateAppUsrRequest,
    DeviceCertificate: DeviceCertificate,
    UpgradeDeviceRequest: UpgradeDeviceRequest,
    LogData: LogData,
    DescribeModelDataRetResponse: DescribeModelDataRetResponse,
    RunIotModelResponse: RunIotModelResponse,
    RunIotModelRequest: RunIotModelRequest,
    OtaPubHistory: OtaPubHistory,
    DeleteProductRequest: DeleteProductRequest,
    DescribeBindUsrResponse: DescribeBindUsrResponse,
    DeviceData: DeviceData,
    SetMessageQueueRequest: SetMessageQueueRequest,
    BindUsrInfo: BindUsrInfo,
    DeleteOtaVersionRequest: DeleteOtaVersionRequest,
    DescribeIotDataTypeResponse: DescribeIotDataTypeResponse,
    ProductData: ProductData,
    CreateBindingRequest: CreateBindingRequest,
    DeleteDeviceRequest: DeleteDeviceRequest,
    TraceStatus: TraceStatus,
    CreateDevTokenResponse: CreateDevTokenResponse,
    ModifyDevicePropertyRequest: ModifyDevicePropertyRequest,
    RunDeviceStreamRequest: RunDeviceStreamRequest,
    RunDeviceResponse: RunDeviceResponse,
    DeleteIotDataTypeResponse: DeleteIotDataTypeResponse,
    DescribeTraceStatusRequest: DescribeTraceStatusRequest,
    CreateUsrTokenResponse: CreateUsrTokenResponse,
    DevTokenInfo: DevTokenInfo,
    CreateTraceIdsRequest: CreateTraceIdsRequest,
    DeleteMessageQueueResponse: DeleteMessageQueueResponse,
    DescribeOtaVersionsRequest: DescribeOtaVersionsRequest,
    DescribeTraceIdsResponse: DescribeTraceIdsResponse,
    CreateProductResponse: CreateProductResponse,
    DescribeRegistrationStatusRequest: DescribeRegistrationStatusRequest,
    CreateStorageRequest: CreateStorageRequest,
    UpgradeDeviceResponse: UpgradeDeviceResponse,
    DisableOtaVersionResponse: DisableOtaVersionResponse,
    DescribeBindDevResponse: DescribeBindDevResponse,
    CreateProductRequest: CreateProductRequest,
    RunTestOtaVersionResponse: RunTestOtaVersionResponse,
    RunTestOtaVersionRequest: RunTestOtaVersionRequest,
    DescribeDeviceResponse: DescribeDeviceResponse,
    SetMessageQueueResponse: SetMessageQueueResponse,
    DeleteOtaVersionResponse: DeleteOtaVersionResponse,
    UploadOtaVersionRequest: UploadOtaVersionRequest,
    DescribeIotModelsRequest: DescribeIotModelsRequest,
    DescribeModelDataRetRequest: DescribeModelDataRetRequest,
    CreateTraceIdsResponse: CreateTraceIdsResponse,
    DeleteBindingRequest: DeleteBindingRequest,
    DescribeOtaVersionsResponse: DescribeOtaVersionsResponse,
    DeleteProductResponse: DeleteProductResponse,
    RunOtaVersionRequest: RunOtaVersionRequest,
    CreateDevicesResponse: CreateDevicesResponse,
    DeviceModelData: DeviceModelData,
    DescribeIotDataTypeRequest: DescribeIotDataTypeRequest,
    SendOnlineMsgRequest: SendOnlineMsgRequest,
    DescribeDeviceRequest: DescribeDeviceRequest,
    DescribeRunLogResponse: DescribeRunLogResponse,
    DescribeIotModelRequest: DescribeIotModelRequest,
    DescribeTraceIdsRequest: DescribeTraceIdsRequest,
    CreateAppUsrResponse: CreateAppUsrResponse,
    DeleteTraceIdsResponse: DeleteTraceIdsResponse,
    DeleteMessageQueueRequest: DeleteMessageQueueRequest,
    CreateUsrTokenRequest: CreateUsrTokenRequest,
    RunDeviceRequest: RunDeviceRequest,
    DescribeDeviceModelResponse: DescribeDeviceModelResponse,
    ProductBase: ProductBase,
    CreateGencodeRequest: CreateGencodeRequest,
    DescribePubVersionsResponse: DescribePubVersionsResponse,
    ModifyDeviceActionRequest: ModifyDeviceActionRequest,
    CreateIotModelResponse: CreateIotModelResponse,
    BindDevInfo: BindDevInfo,
    DescribeBindDevRequest: DescribeBindDevRequest,
    MsgQueueData: MsgQueueData,
    RegisteredStatus: RegisteredStatus,
    RunDeviceStreamResponse: RunDeviceStreamResponse,
    RunOtaVersionResponse: RunOtaVersionResponse,
    DescribeDeviceModelRequest: DescribeDeviceModelRequest,
    DescribeLogsResponse: DescribeLogsResponse,
    ModifyDeviceActionResponse: ModifyDeviceActionResponse,
    CreateBindingResponse: CreateBindingResponse,
    DevicesData: DevicesData,
    CreateDevicesRequest: CreateDevicesRequest,
    DisableDeviceRequest: DisableDeviceRequest,
    DisableOtaVersionRequest: DisableOtaVersionRequest,
    DescribeProductResponse: DescribeProductResponse,
    DescribeBindUsrRequest: DescribeBindUsrRequest,
    SendOnlineMsgResponse: SendOnlineMsgResponse,
    DeleteAppUsrRequest: DeleteAppUsrRequest,
    DescribeIotModelsResponse: DescribeIotModelsResponse,
    DescribeMessageQueueResponse: DescribeMessageQueueResponse,
    DescribeDevicesRequest: DescribeDevicesRequest,
    CreateIotDataTypeResponse: CreateIotDataTypeResponse,
    ModifyDevicePropertyResponse: ModifyDevicePropertyResponse,
    DeleteBindingResponse: DeleteBindingResponse,
    CreateStorageResponse: CreateStorageResponse,
    DisableDeviceStreamResponse: DisableDeviceStreamResponse,
    DeleteDeviceResponse: DeleteDeviceResponse,
    CreateUploadPathResponse: CreateUploadPathResponse,
    VersionData: VersionData,

}
