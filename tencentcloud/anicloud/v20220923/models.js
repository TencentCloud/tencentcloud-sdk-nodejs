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
 * CheckAppidExist请求参数结构体
 * @class
 */
class CheckAppidExistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务的appid
         * @type {string || null}
         */
        this.SDKAppid = null;

        /**
         * sub product code
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SDKAppid = 'SDKAppid' in params ? params.SDKAppid : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * QueryResourceInfo返回参数结构体
 * @class
 */
class QueryResourceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Resource || null}
         */
        this.Resource = null;

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

        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckAppidExist返回参数结构体
 * @class
 */
class CheckAppidExistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * appid是否存在
         * @type {boolean || null}
         */
        this.Exist = null;

        /**
         * 请求是否成功
         * @type {boolean || null}
         */
        this.HasError = null;

        /**
         * 出错消息
         * @type {string || null}
         */
        this.Msg = null;

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
        this.Exist = 'Exist' in params ? params.Exist : null;
        this.HasError = 'HasError' in params ? params.HasError : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 购买详情
 * @class
 */
class GoodsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照四层接入的产品需要传入产品标签,例如:p_cvm
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 四层定义的子产品标签,例如:sp_cvm_s1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 资源数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GoodsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;

    }
}

/**
 * QueryResourceInfo请求参数结构体
 * @class
 */
class QueryResourceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * QueryResource返回参数结构体
 * @class
 */
class QueryResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * 总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryResource请求参数结构体
 * @class
 */
class QueryResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: sdk 1:material
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 分页起始页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 资源信息
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源拥有者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UIN = null;

        /**
         * 云平台应用ID，一般来说与uin存在一一对应的关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 资源id，会展示到通知内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 资源状态，1正常，2隔离，3销毁(如果资源已经删除或销毁，不需要返回)，4冻结/封禁
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资源隔离时间，未隔离传"0000-00-00 00:00:00"，资源由隔离变回正常传"0000-00-00 00:00:00"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTimestamp = null;

        /**
         * 资源创建时间，用于更新新购订单的资源开始时间，按时长退费时的资源结束时间取自订单的资源结束时间，
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 0后付费 1预付费 2预留实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 资源名称，账单中资源别名，生命周期通知中的资源名称，不返回则通知中展示为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 购买详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GoodsDetail || null}
         */
        this.GoodsDetail = null;

        /**
         * 预付费必填 ，自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * （仅预付费）资源到期时间，无到期概念传"0000-00-00 00:00:00"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Region = null;

        /**
         * sdk appid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * app名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app的package名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 资源链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.URL = null;

        /**
         * app的entry
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Entry = null;

        /**
         * 0：sdk 1：素材
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstType = null;

        /**
         * license的秘钥
注意：此字段可能返回 null，表示取不到有效值。
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
        this.UIN = 'UIN' in params ? params.UIN : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsolatedTimestamp = 'IsolatedTimestamp' in params ? params.IsolatedTimestamp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

        if (params.GoodsDetail) {
            let obj = new GoodsDetail();
            obj.deserialize(params.GoodsDetail)
            this.GoodsDetail = obj;
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Entry = 'Entry' in params ? params.Entry : null;
        this.InstType = 'InstType' in params ? params.InstType : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

module.exports = {
    CheckAppidExistRequest: CheckAppidExistRequest,
    QueryResourceInfoResponse: QueryResourceInfoResponse,
    CheckAppidExistResponse: CheckAppidExistResponse,
    GoodsDetail: GoodsDetail,
    QueryResourceInfoRequest: QueryResourceInfoRequest,
    QueryResourceResponse: QueryResourceResponse,
    QueryResourceRequest: QueryResourceRequest,
    Resource: Resource,

}
