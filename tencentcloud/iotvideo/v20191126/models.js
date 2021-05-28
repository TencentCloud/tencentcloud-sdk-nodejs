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
 * DescribeRechargeRecords返回参数结构体
 * @class
 */
class DescribeRechargeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型 1:设备接入 2:云存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 充值记录列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RechargeRecord> || null}
         */
        this.Records = null;

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
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new RechargeRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * RefundStorageService返回参数结构体
 * @class
 */
class RefundStorageServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 云存服务所在的区域
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 终端用户在IoT Video平台的注册ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 服务开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 服务失效时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 有效云存定单列表
         * @type {Array.<StorageOrder> || null}
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StorageOrder();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateStorageService请求参数结构体
 * @class
 */
class CreateStorageServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存套餐ID：
yc1m3d ： 全时3天存储月套餐。
yc1m7d ： 全时7天存储月套餐。
yc1m30d ：全时30天存储月套餐。
yc1y3d ：全时3天存储年套餐。
yc1y7d ：全时7天存储年套餐。
yc1y30d ：全时30天存储年套餐。
ye1m3d ：事件3天存储月套餐。
ye1m7d ：事件7天存储月套餐。
ye1m30d ：事件30天存储月套餐 。
ye1y3d ：事件3天存储年套餐。
ye1y7d ：事件7天存储年套餐。
ye1y30d ：事件30天存储年套餐。
yc1w7d : 全时7天存储周套餐。
ye1w7d : 事件7天存储周套餐。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 订单数量,可一次性创建多个订单
         * @type {number || null}
         */
        this.OrderCount = null;

        /**
         * 云存服务所在的区域,如ap-guangzhou,ap-singapore, na-siliconvalley, eu-frankfurt
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 服务生效时间,若不指定此参数，服务立即生效
         * @type {number || null}
         */
        this.EnableTime = null;

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
        this.OrderCount = 'OrderCount' in params ? params.OrderCount : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.EnableTime = 'EnableTime' in params ? params.EnableTime : null;

    }
}

/**
 * DescribeOsList返回参数结构体
 * @class
 */
class DescribeOsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SystemType || null}
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
            let obj = new SystemType();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
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
 * DescribeStorageService返回参数结构体
 * @class
 */
class DescribeStorageServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 云存服务所在的区域
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 终端用户在IoT Video平台的注册ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 服务开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 服务失效时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 云存定单列表
         * @type {Array.<StorageOrder> || null}
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StorageOrder();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeRechargeRecords请求参数结构体
 * @class
 */
class DescribeRechargeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型 1:设备接入 2:云存。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 从第几条记录开始显示, 默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 总共查询多少条记录，默认为值50。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyVerContent返回参数结构体
 * @class
 */
class ModifyVerContentResponse extends  AbstractModel {
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
 * 操作系统信息
 * @class
 */
class OsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 芯片型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChipId = null;

        /**
         * 芯片厂商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChipManufacture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChipId = 'ChipId' in params ? params.ChipId : null;
        this.ChipManufacture = 'ChipManufacture' in params ? params.ChipManufacture : null;

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
 * DescribeStream请求参数结构体
 * @class
 */
class DescribeStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 终端用户ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 直播协议, 可选值：RTSP、RTMP、HLS、HLS-fmp4
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 音视频流地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 设备访问token，访问用户未绑定的设备时，需提供该参数
         * @type {string || null}
         */
        this.AccessToken = null;

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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;

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

        /**
         * 产品类别，0：普通视频设备；1：NVR设备
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductCate = null;

        /**
         * 产品地区
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductRegion = null;

        /**
         * 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccessMode = null;

        /**
         * linux,android,liteos
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Os = null;

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
        this.ProductCate = 'ProductCate' in params ? params.ProductCate : null;
        this.ProductRegion = 'ProductRegion' in params ? params.ProductRegion : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Os = 'Os' in params ? params.Os : null;

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

        /**
         * 设备昵称，最多不超过64个字符
         * @type {string || null}
         */
        this.Nick = null;

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
        this.Nick = 'Nick' in params ? params.Nick : null;

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

        /**
         * 用于小程序关联手机号
         * @type {string || null}
         */
        this.Mobile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CunionId = 'CunionId' in params ? params.CunionId : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

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
 * ClearDeviceActiveCode返回参数结构体
 * @class
 */
class ClearDeviceActiveCodeResponse extends  AbstractModel {
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
         * 设备功能码（ypsxth:音频双向通话 ，spdxth:视频单向通话）
         * @type {Array.<string> || null}
         */
        this.Features = null;

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

        /**
         * 地域：
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
         * @type {string || null}
         */
        this.ProductRegion = null;

        /**
         * 设备类型, 0-普通视频设备，1-NVR设备
         * @type {number || null}
         */
        this.ProductCate = null;

        /**
         * 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入
         * @type {number || null}
         */
        this.AccessMode = null;

        /**
         * Linux,Android,Liteos等系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 芯片架构，只是针对操作系统为android的
         * @type {string || null}
         */
        this.ChipArch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductModel = 'ProductModel' in params ? params.ProductModel : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;
        this.ProductRegion = 'ProductRegion' in params ? params.ProductRegion : null;
        this.ProductCate = 'ProductCate' in params ? params.ProductCate : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.ChipArch = 'ChipArch' in params ? params.ChipArch : null;

    }
}

/**
 * 系统类型
 * @class
 */
class SystemType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安卓系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OsData> || null}
         */
        this.Android = null;

        /**
         * linux系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OsData> || null}
         */
        this.Linux = null;

        /**
         * LiteOs系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OsData> || null}
         */
        this.LiteOs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Android) {
            this.Android = new Array();
            for (let z in params.Android) {
                let obj = new OsData();
                obj.deserialize(params.Android[z]);
                this.Android.push(obj);
            }
        }

        if (params.Linux) {
            this.Linux = new Array();
            for (let z in params.Linux) {
                let obj = new OsData();
                obj.deserialize(params.Linux[z]);
                this.Linux.push(obj);
            }
        }

        if (params.LiteOs) {
            this.LiteOs = new Array();
            for (let z in params.LiteOs) {
                let obj = new OsData();
                obj.deserialize(params.LiteOs[z]);
                this.LiteOs.push(obj);
            }
        }

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

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

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
 * 版本发布的描述信息，需要国际化，可以为空
 * @class
 */
class Contents extends  AbstractModel {
    constructor(){
        super();

        /**
         * 英文，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.En = null;

        /**
         * 中文简体，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cn = null;

        /**
         * 中文繁体(Traditional Chinese)，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tc = null;

        /**
         * 默认语言，最多不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Default = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.En = 'En' in params ? params.En : null;
        this.Cn = 'Cn' in params ? params.Cn : null;
        this.Tc = 'Tc' in params ? params.Tc : null;
        this.Default = 'Default' in params ? params.Default : null;

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

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 版本发布的描述信息，需要国际化，可以为空
         * @type {Contents || null}
         */
        this.Contents = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Contents) {
            let obj = new Contents();
            obj.deserialize(params.Contents)
            this.Contents = obj;
        }

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
 * ModifyVerContent请求参数结构体
 * @class
 */
class ModifyVerContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 需要修改的版本号
         * @type {string || null}
         */
        this.OtaVersion = null;

        /**
         * 操作人,字符长度<=64
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 版本发布的描述信息，需要国际化，可以为空
         * @type {Contents || null}
         */
        this.Contents = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Contents) {
            let obj = new Contents();
            obj.deserialize(params.Contents)
            this.Contents = obj;
        }

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

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 版本发布的描述信息，需要国际化，可以为空
         * @type {Contents || null}
         */
        this.Contents = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Contents) {
            let obj = new Contents();
            obj.deserialize(params.Contents)
            this.Contents = obj;
        }

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
0.设备在线状态变更
1.常亮属性(ProConst)变更
2.可写属性(ProWritable)变更
3.只读属性(ProReadonly)变更
4.设备控制(Action)
5.设备事件(Event)
6.系统事件(System)
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
 * CreateStorageService返回参数结构体
 * @class
 */
class CreateStorageServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标志是否为续订
         * @type {boolean || null}
         */
        this.IsRenew = null;

        /**
         * 云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 云存服务所在的区域
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 终端用户在IoT Video平台的注册ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 服务开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 服务失效时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 新增的云存定单列表
         * @type {Array.<StorageOrder> || null}
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
        this.IsRenew = 'IsRenew' in params ? params.IsRenew : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StorageOrder();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 接口DescribeStream输出参数
 * @class
 */
class Data extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 流媒体播放地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.URI = null;

        /**
         * 流媒体地址过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 视频编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoCodec = null;

        /**
         * 音频编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AudioCodec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.URI = 'URI' in params ? params.URI : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.VideoCodec = 'VideoCodec' in params ? params.VideoCodec : null;
        this.AudioCodec = 'AudioCodec' in params ? params.AudioCodec : null;

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
 * DeliverStorageService返回参数结构体
 * @class
 */
class DeliverStorageServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被转出的云存服务ID
         * @type {string || null}
         */
        this.SrcServiceId = null;

        /**
         * 被转入的云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 云存服务所在的区域
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 终端用户在IoT Video平台的注册ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 服务开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 服务失效时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 新增的云存定单列表
         * @type {Array.<StorageOrder> || null}
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
        this.SrcServiceId = 'SrcServiceId' in params ? params.SrcServiceId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StorageOrder();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
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

        /**
         * 旧的AccessToken。续期Token时，此参数为必须。
         * @type {string || null}
         */
        this.OldAccessToken = null;

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
        this.OldAccessToken = 'OldAccessToken' in params ? params.OldAccessToken : null;

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
 * ModifyDevice请求参数结构体
 * @class
 */
class ModifyDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * 设备昵称，最多不超过64个字符
         * @type {string || null}
         */
        this.Nick = null;

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
        this.Nick = 'Nick' in params ? params.Nick : null;

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
 * DescribeStorageService请求参数结构体
 * @class
 */
class DescribeStorageServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 是否返回已结束的订单信息(已过期/已退订/已转移)
         * @type {boolean || null}
         */
        this.GetFinishedOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.GetFinishedOrder = 'GetFinishedOrder' in params ? params.GetFinishedOrder : null;

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

        /**
         * 设备功能码
ypsxth : 音频双向通话;	
spdxth : 视频单向通话(监控);
NVR0824 : NVR设备,大于8路，小于等于24路;
WifiKeepalive : Wifi保活(低功耗产品);
Alexa : Alexa接入;
Google : Google接入;
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FuncCode = null;

        /**
         * 产品类别，0 : 普通视频设备；1 : NVR设备
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductCate = null;

        /**
         * 产品地域
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductRegion = null;

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
        this.FuncCode = 'FuncCode' in params ? params.FuncCode : null;
        this.ProductCate = 'ProductCate' in params ? params.ProductCate : null;
        this.ProductRegion = 'ProductRegion' in params ? params.ProductRegion : null;

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
         * 物模型发布版本号,-1代表未发布的，保存的是草稿箱的版本。1代表已发布的物模型。
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
 * ClearDeviceActiveCode请求参数结构体
 * @class
 */
class ClearDeviceActiveCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备TID列表，0<元素数量<=100
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
 * 云存订单信息
 * @class
 */
class StorageOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定单唯一性ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 云存套餐ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 定单服务状态
1;订单正在使用。
2:订单未开始。
3:订单已经使用过，现在暂时未开始使用(该订单从其他服务转移而来)。
4:订单已过期。
5:订单已被退订。
6:定单已被转移到其他云存服务。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 定单服务生效时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 定单服务失效时间
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
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * CreateAnonymousAccessToken请求参数结构体
 * @class
 */
class CreateAnonymousAccessTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token的TTL(time to alive)分钟数,最大值1440(即24小时)
         * @type {number || null}
         */
        this.TtlMinutes = null;

        /**
         * 设备ID。创建Token时, 此参数为必须项
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 旧的AccessToken。续期Token时，此参数为必须
         * @type {string || null}
         */
        this.OldAccessToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TtlMinutes = 'TtlMinutes' in params ? params.TtlMinutes : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.OldAccessToken = 'OldAccessToken' in params ? params.OldAccessToken : null;

    }
}

/**
 * DeliverStorageService请求参数结构体
 * @class
 */
class DeliverStorageServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待转移的源云存服务ID
         * @type {string || null}
         */
        this.SrcServiceId = null;

        /**
         * 设备TID
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
         * @type {number || null}
         */
        this.ChnNum = null;

        /**
         * 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致
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
        this.SrcServiceId = 'SrcServiceId' in params ? params.SrcServiceId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ChnNum = 'ChnNum' in params ? params.ChnNum : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;

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
 * ModifyDevice返回参数结构体
 * @class
 */
class ModifyDeviceResponse extends  AbstractModel {
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
 * DescribeAccountBalance请求参数结构体
 * @class
 */
class DescribeAccountBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型 1:设备接入 2:云存
         * @type {number || null}
         */
        this.AccountType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

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
 * DescribeStream返回参数结构体
 * @class
 */
class DescribeStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回参数结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Data || null}
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
            let obj = new Data();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountBalance返回参数结构体
 * @class
 */
class DescribeAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型 1=设备接入;2=云存。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 余额, 单位 : 分(人民币)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 账户状态，1=正常；8=冻结；9=销户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 最后修改时间，UTC值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastUpdateTime = null;

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
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.State = 'State' in params ? params.State : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateAnonymousAccessToken返回参数结构体
 * @class
 */
class CreateAnonymousAccessTokenResponse extends  AbstractModel {
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
 * DescribeOsList请求参数结构体
 * @class
 */
class DescribeOsListRequest extends  AbstractModel {
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
 * RefundStorageService请求参数结构体
 * @class
 */
class RefundStorageServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 云存子订单ID。如果指定子订单ID,则仅退订该子订单，如果未指定子定单ID，则退订所有子订单
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

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
 * 充值记录列表
 * @class
 */
class RechargeRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流水记录号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WaterId = null;

        /**
         * 充值前的余额，单位0.01元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BalanceBeforeRecharge = null;

        /**
         * 充值金额，单位0.01元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Money = null;

        /**
         * 充值时间, UTC值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterId = 'WaterId' in params ? params.WaterId : null;
        this.BalanceBeforeRecharge = 'BalanceBeforeRecharge' in params ? params.BalanceBeforeRecharge : null;
        this.Money = 'Money' in params ? params.Money : null;
        this.OperateTime = 'OperateTime' in params ? params.OperateTime : null;

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

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 版本发布的描述信息，需要国际化，可以为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Contents || null}
         */
        this.Contents = null;

        /**
         * 月活设备数，当月第一天开始有上线的设备数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AliveInMonthCnt = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Contents) {
            let obj = new Contents();
            obj.deserialize(params.Contents)
            this.Contents = obj;
        }
        this.AliveInMonthCnt = 'AliveInMonthCnt' in params ? params.AliveInMonthCnt : null;

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

module.exports = {
    DescribeRechargeRecordsResponse: DescribeRechargeRecordsResponse,
    UploadOtaVersionResponse: UploadOtaVersionResponse,
    CreateGencodeResponse: CreateGencodeResponse,
    DescribeLogsRequest: DescribeLogsRequest,
    CreateIotDataTypeRequest: CreateIotDataTypeRequest,
    DescribePubVersionsRequest: DescribePubVersionsRequest,
    RefundStorageServiceResponse: RefundStorageServiceResponse,
    DescribeIotModelResponse: DescribeIotModelResponse,
    DisableDeviceResponse: DisableDeviceResponse,
    DescribeRunLogRequest: DescribeRunLogRequest,
    DescribeProductsRequest: DescribeProductsRequest,
    DeleteTraceIdsRequest: DeleteTraceIdsRequest,
    IotModelData: IotModelData,
    CreateStorageServiceRequest: CreateStorageServiceRequest,
    DescribeOsListResponse: DescribeOsListResponse,
    ModifyProductResponse: ModifyProductResponse,
    ModifyProductRequest: ModifyProductRequest,
    DisableDeviceStreamRequest: DisableDeviceStreamRequest,
    CreateIotModelRequest: CreateIotModelRequest,
    DescribeTraceStatusResponse: DescribeTraceStatusResponse,
    CreateUploadPathRequest: CreateUploadPathRequest,
    CreateDevTokenRequest: CreateDevTokenRequest,
    DescribeStorageServiceResponse: DescribeStorageServiceResponse,
    DeleteIotDataTypeRequest: DeleteIotDataTypeRequest,
    DescribeRechargeRecordsRequest: DescribeRechargeRecordsRequest,
    ModifyVerContentResponse: ModifyVerContentResponse,
    DescribeMessageQueueRequest: DescribeMessageQueueRequest,
    DeleteAppUsrResponse: DeleteAppUsrResponse,
    DescribeRegistrationStatusResponse: DescribeRegistrationStatusResponse,
    DescribeProductRequest: DescribeProductRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    OsData: OsData,
    DeviceCertificate: DeviceCertificate,
    UpgradeDeviceRequest: UpgradeDeviceRequest,
    LogData: LogData,
    DescribeModelDataRetResponse: DescribeModelDataRetResponse,
    CreateDevTokenResponse: CreateDevTokenResponse,
    RunIotModelResponse: RunIotModelResponse,
    RunIotModelRequest: RunIotModelRequest,
    OtaPubHistory: OtaPubHistory,
    DeleteProductRequest: DeleteProductRequest,
    DescribeBindUsrResponse: DescribeBindUsrResponse,
    DeviceData: DeviceData,
    DescribeStreamRequest: DescribeStreamRequest,
    BindUsrInfo: BindUsrInfo,
    DeleteOtaVersionRequest: DeleteOtaVersionRequest,
    DescribeIotDataTypeResponse: DescribeIotDataTypeResponse,
    ProductData: ProductData,
    CreateBindingRequest: CreateBindingRequest,
    DeleteDeviceRequest: DeleteDeviceRequest,
    TraceStatus: TraceStatus,
    CreateAppUsrRequest: CreateAppUsrRequest,
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
    ClearDeviceActiveCodeResponse: ClearDeviceActiveCodeResponse,
    CreateProductResponse: CreateProductResponse,
    DescribeRegistrationStatusRequest: DescribeRegistrationStatusRequest,
    CreateStorageRequest: CreateStorageRequest,
    UpgradeDeviceResponse: UpgradeDeviceResponse,
    DisableOtaVersionResponse: DisableOtaVersionResponse,
    DescribeBindDevResponse: DescribeBindDevResponse,
    CreateProductRequest: CreateProductRequest,
    SystemType: SystemType,
    RunTestOtaVersionResponse: RunTestOtaVersionResponse,
    RunTestOtaVersionRequest: RunTestOtaVersionRequest,
    DescribeDeviceResponse: DescribeDeviceResponse,
    SetMessageQueueResponse: SetMessageQueueResponse,
    Contents: Contents,
    DeleteOtaVersionResponse: DeleteOtaVersionResponse,
    UploadOtaVersionRequest: UploadOtaVersionRequest,
    DescribeIotModelsRequest: DescribeIotModelsRequest,
    DescribeModelDataRetRequest: DescribeModelDataRetRequest,
    CreateTraceIdsResponse: CreateTraceIdsResponse,
    DescribeDevicesResponse: DescribeDevicesResponse,
    ModifyVerContentRequest: ModifyVerContentRequest,
    DeleteBindingRequest: DeleteBindingRequest,
    DescribeOtaVersionsResponse: DescribeOtaVersionsResponse,
    DeleteProductResponse: DeleteProductResponse,
    RunOtaVersionRequest: RunOtaVersionRequest,
    CreateDevicesResponse: CreateDevicesResponse,
    DeviceModelData: DeviceModelData,
    SetMessageQueueRequest: SetMessageQueueRequest,
    CreateStorageServiceResponse: CreateStorageServiceResponse,
    DescribeIotDataTypeRequest: DescribeIotDataTypeRequest,
    SendOnlineMsgRequest: SendOnlineMsgRequest,
    Data: Data,
    DescribeDeviceRequest: DescribeDeviceRequest,
    DescribeRunLogResponse: DescribeRunLogResponse,
    DeliverStorageServiceResponse: DeliverStorageServiceResponse,
    DescribeIotModelRequest: DescribeIotModelRequest,
    DescribeTraceIdsRequest: DescribeTraceIdsRequest,
    CreateAppUsrResponse: CreateAppUsrResponse,
    DeleteTraceIdsResponse: DeleteTraceIdsResponse,
    DeleteMessageQueueRequest: DeleteMessageQueueRequest,
    CreateUsrTokenRequest: CreateUsrTokenRequest,
    RunDeviceRequest: RunDeviceRequest,
    RunOtaVersionResponse: RunOtaVersionResponse,
    ModifyDeviceRequest: ModifyDeviceRequest,
    DescribeDeviceModelResponse: DescribeDeviceModelResponse,
    DescribeStorageServiceRequest: DescribeStorageServiceRequest,
    ProductBase: ProductBase,
    CreateGencodeRequest: CreateGencodeRequest,
    DescribePubVersionsResponse: DescribePubVersionsResponse,
    ClearDeviceActiveCodeRequest: ClearDeviceActiveCodeRequest,
    ModifyDeviceActionRequest: ModifyDeviceActionRequest,
    CreateIotModelResponse: CreateIotModelResponse,
    BindDevInfo: BindDevInfo,
    DescribeBindDevRequest: DescribeBindDevRequest,
    StorageOrder: StorageOrder,
    MsgQueueData: MsgQueueData,
    RegisteredStatus: RegisteredStatus,
    CreateAnonymousAccessTokenRequest: CreateAnonymousAccessTokenRequest,
    DeliverStorageServiceRequest: DeliverStorageServiceRequest,
    RunDeviceStreamResponse: RunDeviceStreamResponse,
    ModifyDeviceResponse: ModifyDeviceResponse,
    DescribeDeviceModelRequest: DescribeDeviceModelRequest,
    DescribeLogsResponse: DescribeLogsResponse,
    ModifyDeviceActionResponse: ModifyDeviceActionResponse,
    CreateBindingResponse: CreateBindingResponse,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    CreateDevicesRequest: CreateDevicesRequest,
    DisableDeviceRequest: DisableDeviceRequest,
    DescribeStreamResponse: DescribeStreamResponse,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    DisableOtaVersionRequest: DisableOtaVersionRequest,
    DescribeProductResponse: DescribeProductResponse,
    CreateAnonymousAccessTokenResponse: CreateAnonymousAccessTokenResponse,
    DescribeBindUsrRequest: DescribeBindUsrRequest,
    SendOnlineMsgResponse: SendOnlineMsgResponse,
    DeleteAppUsrRequest: DeleteAppUsrRequest,
    DescribeIotModelsResponse: DescribeIotModelsResponse,
    DescribeMessageQueueResponse: DescribeMessageQueueResponse,
    DescribeOsListRequest: DescribeOsListRequest,
    DescribeDevicesRequest: DescribeDevicesRequest,
    CreateIotDataTypeResponse: CreateIotDataTypeResponse,
    ModifyDevicePropertyResponse: ModifyDevicePropertyResponse,
    DeleteBindingResponse: DeleteBindingResponse,
    RefundStorageServiceRequest: RefundStorageServiceRequest,
    CreateStorageResponse: CreateStorageResponse,
    DisableDeviceStreamResponse: DisableDeviceStreamResponse,
    DeleteDeviceResponse: DeleteDeviceResponse,
    CreateUploadPathResponse: CreateUploadPathResponse,
    RechargeRecord: RechargeRecord,
    VersionData: VersionData,
    DevicesData: DevicesData,

}
