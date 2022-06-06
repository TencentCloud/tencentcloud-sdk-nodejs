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
 * 请求参数Vagrant
 * @class
 */
class ReqMetadataVagrant extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 获取成员列表回包Industry
 * @class
 */
class GetIndustryV1HomeMembersRespIndustry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 行业名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndustryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.IndustryName = 'IndustryName' in params ? params.IndustryName : null;

    }
}

/**
 * 请求的Metadata
 * @class
 */
class ReqMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道
         * @type {string || null}
         */
        this.ChannelID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.BusinessName = null;

        /**
         * 无
         * @type {string || null}
         */
        this.GUID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * 位置定位服务
         * @type {ReqMetadataLBS || null}
         */
        this.LBS = null;

        /**
         * 透传字段
         * @type {Array.<ReqMetadataVagrant> || null}
         */
        this.Vagrants = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelID = 'ChannelID' in params ? params.ChannelID : null;
        this.BusinessName = 'BusinessName' in params ? params.BusinessName : null;
        this.GUID = 'GUID' in params ? params.GUID : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;

        if (params.LBS) {
            let obj = new ReqMetadataLBS();
            obj.deserialize(params.LBS)
            this.LBS = obj;
        }

        if (params.Vagrants) {
            this.Vagrants = new Array();
            for (let z in params.Vagrants) {
                let obj = new ReqMetadataVagrant();
                obj.deserialize(params.Vagrants[z]);
                this.Vagrants.push(obj);
            }
        }

    }
}

/**
 * 获取成员列表回包DataList
 * @class
 */
class GetIndustryV1HomeMembersRespData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EditTime = null;

        /**
         * 功能列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GetIndustryV1HomeMembersRespFeature || null}
         */
        this.FeatureList = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 用户行业分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndustryType = null;

        /**
         * 子用户数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemberNum = null;

        /**
         * 机器人列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GetIndustryV1HomeMembersRespProduct || null}
         */
        this.ProductList = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 功能列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GetIndustryV1HomeMembersRespType || null}
         */
        this.TypeList = null;

        /**
         * 用户账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EditTime = 'EditTime' in params ? params.EditTime : null;

        if (params.FeatureList) {
            let obj = new GetIndustryV1HomeMembersRespFeature();
            obj.deserialize(params.FeatureList)
            this.FeatureList = obj;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.IndustryType = 'IndustryType' in params ? params.IndustryType : null;
        this.MemberNum = 'MemberNum' in params ? params.MemberNum : null;

        if (params.ProductList) {
            let obj = new GetIndustryV1HomeMembersRespProduct();
            obj.deserialize(params.ProductList)
            this.ProductList = obj;
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.TypeList) {
            let obj = new GetIndustryV1HomeMembersRespType();
            obj.deserialize(params.TypeList)
            this.TypeList = obj;
        }
        this.UserAccount = 'UserAccount' in params ? params.UserAccount : null;

    }
}

/**
 * GetIndustryV1HomeMembers请求参数结构体
 * @class
 */
class GetIndustryV1HomeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {GetIndustryV1HomeMembersReqPayload || null}
         */
        this.Payload = null;

        /**
         * 无
         * @type {ReqMetadata || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Payload) {
            let obj = new GetIndustryV1HomeMembersReqPayload();
            obj.deserialize(params.Payload)
            this.Payload = obj;
        }

        if (params.Metadata) {
            let obj = new ReqMetadata();
            obj.deserialize(params.Metadata)
            this.Metadata = obj;
        }

    }
}

/**
 * 获取成员列表接口回包Feature
 * @class
 */
class GetIndustryV1HomeMembersRespFeature extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FeatureName = null;

        /**
         * 功能ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FeatureName = 'FeatureName' in params ? params.FeatureName : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * 获取成员列表入参payload
 * @class
 */
class GetIndustryV1HomeMembersReqPayload extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * 获取成员列表接口回包ProductList
 * @class
 */
class GetIndustryV1HomeMembersRespProduct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 编辑时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EditTime = null;

        /**
         * 机器人ID（AppKey信息）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * 机器人图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 行业信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GetIndustryV1HomeMembersRespIndustry> || null}
         */
        this.Industry = null;

        /**
         * 操作员列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorList = null;

        /**
         * 机器人名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EditTime = 'EditTime' in params ? params.EditTime : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.Industry) {
            this.Industry = new Array();
            for (let z in params.Industry) {
                let obj = new GetIndustryV1HomeMembersRespIndustry();
                obj.deserialize(params.Industry[z]);
                this.Industry.push(obj);
            }
        }
        this.OperatorList = 'OperatorList' in params ? params.OperatorList : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TemplateList = 'TemplateList' in params ? params.TemplateList : null;

    }
}

/**
 * 回包的meta data
 * @class
 */
class RspMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SessionDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.SessionDelta = 'SessionDelta' in params ? params.SessionDelta : null;

    }
}

/**
 * 获取成员列表回包Payload
 * @class
 */
class GetIndustryV1HomeMembersRespPayload extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountLevel = null;

        /**
         * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GetIndustryV1HomeMembersRespData> || null}
         */
        this.DataList = null;

        /**
         * 每页数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，从0开始
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用户总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountLevel = 'AccountLevel' in params ? params.AccountLevel : null;

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new GetIndustryV1HomeMembersRespData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * GetIndustryV1HomeMembers返回参数结构体
 * @class
 */
class GetIndustryV1HomeMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RspMetadata || null}
         */
        this.Metadata = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GetIndustryV1HomeMembersRespPayload || null}
         */
        this.Payload = null;

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

        if (params.Metadata) {
            let obj = new RspMetadata();
            obj.deserialize(params.Metadata)
            this.Metadata = obj;
        }

        if (params.Payload) {
            let obj = new GetIndustryV1HomeMembersRespPayload();
            obj.deserialize(params.Payload)
            this.Payload = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 请求参数的lbs
 * @class
 */
class ReqMetadataLBS extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纬度
         * @type {number || null}
         */
        this.Latitude = null;

        /**
         * 经度
         * @type {number || null}
         */
        this.Longitude = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;

    }
}

/**
 * 获取成员列表接口回包TypeList
 * @class
 */
class GetIndustryV1HomeMembersRespType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

    }
}

module.exports = {
    ReqMetadataVagrant: ReqMetadataVagrant,
    GetIndustryV1HomeMembersRespIndustry: GetIndustryV1HomeMembersRespIndustry,
    ReqMetadata: ReqMetadata,
    GetIndustryV1HomeMembersRespData: GetIndustryV1HomeMembersRespData,
    GetIndustryV1HomeMembersRequest: GetIndustryV1HomeMembersRequest,
    GetIndustryV1HomeMembersRespFeature: GetIndustryV1HomeMembersRespFeature,
    GetIndustryV1HomeMembersReqPayload: GetIndustryV1HomeMembersReqPayload,
    GetIndustryV1HomeMembersRespProduct: GetIndustryV1HomeMembersRespProduct,
    RspMetadata: RspMetadata,
    GetIndustryV1HomeMembersRespPayload: GetIndustryV1HomeMembersRespPayload,
    GetIndustryV1HomeMembersResponse: GetIndustryV1HomeMembersResponse,
    ReqMetadataLBS: ReqMetadataLBS,
    GetIndustryV1HomeMembersRespType: GetIndustryV1HomeMembersRespType,

}
