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
 * 状态节点
 * @class
 */
class StatusNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点id
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 节点类型 1:审批节点 2:执行节点 3:条件节点
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 下一个节点
         * @type {string || null}
         */
        this.NextNode = null;

        /**
         * 审批意见模型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApproveOpinion || null}
         */
        this.Opinion = null;

        /**
         * scf函数名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScfName = null;

        /**
         * 状态（0：待审批，1：审批通过，2：拒绝，3：scf执行失败，4：scf执行成功）18: 外部审批中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubStatus = null;

        /**
         * 审批节点审批人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ApprovedUin = null;

        /**
         * 审批时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 审批意见信息 审批节点:审批人意见  执行节点:scf函数执行日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 有权限审批该节点的uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApproveUser || null}
         */
        this.Users = null;

        /**
         * 是否有权限审批该节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsApprove = null;

        /**
         * 审批id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveId = null;

        /**
         * 审批方式 0或签 1会签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApproveMethod = null;

        /**
         * 审批节点审批类型，1人工审批 2自动通过 3自动决绝 4外部审批scf
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApproveType = null;

        /**
         * 外部审批类型 scf:0或null ; CKafka:1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CallMethod = null;

        /**
         * CKafka - 接入资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataHubId = null;

        /**
         * CKafka - 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * CKafka - 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CKafkaRegion = null;

        /**
         * 外部审批Url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NextNode = 'NextNode' in params ? params.NextNode : null;

        if (params.Opinion) {
            let obj = new ApproveOpinion();
            obj.deserialize(params.Opinion)
            this.Opinion = obj;
        }
        this.ScfName = 'ScfName' in params ? params.ScfName : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.ApprovedUin = 'ApprovedUin' in params ? params.ApprovedUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

        if (params.Users) {
            let obj = new ApproveUser();
            obj.deserialize(params.Users)
            this.Users = obj;
        }
        this.IsApprove = 'IsApprove' in params ? params.IsApprove : null;
        this.ApproveId = 'ApproveId' in params ? params.ApproveId : null;
        this.ApproveMethod = 'ApproveMethod' in params ? params.ApproveMethod : null;
        this.ApproveType = 'ApproveType' in params ? params.ApproveType : null;
        this.CallMethod = 'CallMethod' in params ? params.CallMethod : null;
        this.DataHubId = 'DataHubId' in params ? params.DataHubId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.CKafkaRegion = 'CKafkaRegion' in params ? params.CKafkaRegion : null;
        this.ExternalUrl = 'ExternalUrl' in params ? params.ExternalUrl : null;

    }
}

/**
 * 云函数SCF
 * @class
 */
class Scf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scf函数地域id
         * @type {string || null}
         */
        this.ScfRegion = null;

        /**
         * Scf函数地域
         * @type {string || null}
         */
        this.ScfRegionName = null;

        /**
         * Scf函数名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScfName = null;

        /**
         * Scf函数入参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScfParam> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScfRegion = 'ScfRegion' in params ? params.ScfRegion : null;
        this.ScfRegionName = 'ScfRegionName' in params ? params.ScfRegionName : null;
        this.ScfName = 'ScfName' in params ? params.ScfName : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ScfParam();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * 审批意见
 * @class
 */
class ApproveOpinion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方式 1:输入文字反馈  2:预设选项
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 审批意见
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * OutApproveBpaasApplication返回参数结构体
 * @class
 */
class OutApproveBpaasApplicationResponse extends  AbstractModel {
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
 * GetBpaasApproveDetail请求参数结构体
 * @class
 */
class GetBpaasApproveDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审批id
         * @type {number || null}
         */
        this.ApproveId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApproveId = 'ApproveId' in params ? params.ApproveId : null;

    }
}

/**
 * 审批人
 * @class
 */
class ApproveUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户uin
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 用户类型 (1:用户  2:用户组)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 用户昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * 动态获取Scf
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Scf || null}
         */
        this.Scf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Nick = 'Nick' in params ? params.Nick : null;

        if (params.Scf) {
            let obj = new Scf();
            obj.deserialize(params.Scf)
            this.Scf = obj;
        }

    }
}

/**
 * GetBpaasApproveDetail返回参数结构体
 * @class
 */
class GetBpaasApproveDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请人uin
         * @type {number || null}
         */
        this.ApplyUin = null;

        /**
         * 申请人主账号
         * @type {number || null}
         */
        this.ApplyOwnUin = null;

        /**
         * 申请人昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyUinNick = null;

        /**
         * 审批流id
         * @type {number || null}
         */
        this.BpaasId = null;

        /**
         * 审批流名称
         * @type {string || null}
         */
        this.BpaasName = null;

        /**
         * 申请参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplyParam> || null}
         */
        this.ApplicationParams = null;

        /**
         * 申请原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 申请单状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StatusNode> || null}
         */
        this.Nodes = null;

        /**
         * 正在审批的节点id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApprovingNodeId = null;

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
        this.ApplyUin = 'ApplyUin' in params ? params.ApplyUin : null;
        this.ApplyOwnUin = 'ApplyOwnUin' in params ? params.ApplyOwnUin : null;
        this.ApplyUinNick = 'ApplyUinNick' in params ? params.ApplyUinNick : null;
        this.BpaasId = 'BpaasId' in params ? params.BpaasId : null;
        this.BpaasName = 'BpaasName' in params ? params.BpaasName : null;

        if (params.ApplicationParams) {
            this.ApplicationParams = new Array();
            for (let z in params.ApplicationParams) {
                let obj = new ApplyParam();
                obj.deserialize(params.ApplicationParams[z]);
                this.ApplicationParams.push(obj);
            }
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new StatusNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.ApprovingNodeId = 'ApprovingNodeId' in params ? params.ApprovingNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OutApproveBpaasApplication请求参数结构体
 * @class
 */
class OutApproveBpaasApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态  1:通过  2:拒绝
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 审批单id
         * @type {number || null}
         */
        this.ApproveId = null;

        /**
         * 审批意见
         * @type {string || null}
         */
        this.Msg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ApproveId = 'ApproveId' in params ? params.ApproveId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

    }
}

/**
 * Scf函数入参
 * @class
 */
class ScfParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 参数类型 1用户输入 2预设参数 3表单参数
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 参数值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * bpaas申请入参
 * @class
 */
class ApplyParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审批流中表单唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 表单value
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

        /**
         * 表单参数描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

module.exports = {
    StatusNode: StatusNode,
    Scf: Scf,
    ApproveOpinion: ApproveOpinion,
    OutApproveBpaasApplicationResponse: OutApproveBpaasApplicationResponse,
    GetBpaasApproveDetailRequest: GetBpaasApproveDetailRequest,
    ApproveUser: ApproveUser,
    GetBpaasApproveDetailResponse: GetBpaasApproveDetailResponse,
    OutApproveBpaasApplicationRequest: OutApproveBpaasApplicationRequest,
    ScfParam: ScfParam,
    ApplyParam: ApplyParam,

}
