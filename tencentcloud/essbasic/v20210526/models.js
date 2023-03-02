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
 * SyncProxyOrganization返回参数结构体
 * @class
 */
class SyncProxyOrganizationResponse extends  AbstractModel {
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
 * ChannelCreateConvertTaskApi返回参数结构体
 * @class
 */
class ChannelCreateConvertTaskApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * ChannelCreateFlowReminds返回参数结构体
 * @class
 */
class ChannelCreateFlowRemindsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同催办详情信息
         * @type {Array.<RemindFlowRecords> || null}
         */
        this.RemindFlowRecords = null;

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

        if (params.RemindFlowRecords) {
            this.RemindFlowRecords = new Array();
            for (let z in params.RemindFlowRecords) {
                let obj = new RemindFlowRecords();
                obj.deserialize(params.RemindFlowRecords[z]);
                this.RemindFlowRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelDeleteSealPolicies请求参数结构体
 * @class
 */
class ChannelDeleteSealPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 指定印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 指定用户ID数组
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 组织机构信息，不用传
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

        /**
         * 操作人（用户）信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelBatchCancelFlows返回参数结构体
 * @class
 */
class ChannelBatchCancelFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程批量撤销失败原因，错误信息与流程Id一一对应，成功为“”,失败则对应失败消息
         * @type {Array.<string> || null}
         */
        this.FailMessages = null;

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
        this.FailMessages = 'FailMessages' in params ? params.FailMessages : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 渠道版员工部门信息
 * @class
 */
class Department extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部门id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DepartmentId = null;

        /**
         * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DepartmentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DepartmentId = 'DepartmentId' in params ? params.DepartmentId : null;
        this.DepartmentName = 'DepartmentName' in params ? params.DepartmentName : null;

    }
}

/**
 * ChannelCreateFlowSignReview请求参数结构体
 * @class
 */
class ChannelCreateFlowSignReviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 企业内部审核结果
PASS: 通过
REJECT: 拒绝
SIGN_REJECT:拒签(流程结束)
         * @type {string || null}
         */
        this.ReviewType = null;

        /**
         * 审核原因 
当ReviewType 是REJECT 时此字段必填,字符串长度不超过200
         * @type {string || null}
         */
        this.ReviewMessage = null;

        /**
         * 签署节点审核时需要指定
         * @type {string || null}
         */
        this.RecipientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.ReviewType = 'ReviewType' in params ? params.ReviewType : null;
        this.ReviewMessage = 'ReviewMessage' in params ? params.ReviewMessage : null;
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;

    }
}

/**
 * 授权出错信息
 * @class
 */
class AuthFailMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合作企业Id
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

        /**
         * 出错信息
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeFlowDetailInfo请求参数结构体
 * @class
 */
class DescribeFlowDetailInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 合同(流程)编号数组，最多支持100个。
（备注：该参数和合同组编号必须二选一）
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 合同组编号（备注：该参数和合同(流程)编号数组必须二选一）
         * @type {string || null}
         */
        this.FlowGroupId = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.FlowGroupId = 'FlowGroupId' in params ? params.FlowGroupId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ModifyExtendedService请求参数结构体
 * @class
 */
class ModifyExtendedServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。

注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         *   扩展服务类型
  AUTO_SIGN             企业静默签（自动签署）
  OVERSEA_SIGN          企业与港澳台居民*签署合同
  MOBILE_CHECK_APPROVER 使用手机号验证签署方身份
  PAGING_SEAL           骑缝章
  DOWNLOAD_FLOW         授权渠道下载合同 
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 操作类型 
OPEN:开通 
CLOSE:关闭
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * DescribeResourceUrlsByFlows请求参数结构体
 * @class
 */
class DescribeResourceUrlsByFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。
此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 查询资源所对应的签署流程Id，最多支持50个
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 操作者的信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 催办接口返回详细信息
 * @class
 */
class RemindFlowRecords extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否能够催办
         * @type {boolean || null}
         */
        this.CanRemind = null;

        /**
         * 合同id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 催办详情
         * @type {string || null}
         */
        this.RemindMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CanRemind = 'CanRemind' in params ? params.CanRemind : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RemindMessage = 'RemindMessage' in params ? params.RemindMessage : null;

    }
}

/**
 * ChannelCreateFlowSignUrl返回参数结构体
 * @class
 */
class ChannelCreateFlowSignUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人签署链接信息
         * @type {Array.<FlowApproverUrlInfo> || null}
         */
        this.FlowApproverUrlInfos = null;

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

        if (params.FlowApproverUrlInfos) {
            this.FlowApproverUrlInfos = new Array();
            for (let z in params.FlowApproverUrlInfos) {
                let obj = new FlowApproverUrlInfo();
                obj.deserialize(params.FlowApproverUrlInfos[z]);
                this.FlowApproverUrlInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSealByImage返回参数结构体
 * @class
 */
class CreateSealByImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 印章id
         * @type {string || null}
         */
        this.SealId = null;

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
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OperateChannelTemplate返回参数结构体
 * @class
 */
class OperateChannelTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯电子签颁发给渠道的应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 渠道方模板库模板唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 全部成功-"all-success",部分成功-"part-success", 全部失败-"fail"失败的会在FailMessageList中展示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperateResult = null;

        /**
         * 模板可见性, 全部可见-"all", 部分可见-"part"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthTag = null;

        /**
         * 合作企业方第三方机构唯一标识数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ProxyOrganizationOpenIds = null;

        /**
         * 操作失败信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthFailMessage> || null}
         */
        this.FailMessageList = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.OperateResult = 'OperateResult' in params ? params.OperateResult : null;
        this.AuthTag = 'AuthTag' in params ? params.AuthTag : null;
        this.ProxyOrganizationOpenIds = 'ProxyOrganizationOpenIds' in params ? params.ProxyOrganizationOpenIds : null;

        if (params.FailMessageList) {
            this.FailMessageList = new Array();
            for (let z in params.FailMessageList) {
                let obj = new AuthFailMessage();
                obj.deserialize(params.FailMessageList[z]);
                this.FailMessageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 合同组中每个子合同的发起信息
 * @class
 */
class FlowFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署文件资源Id列表，目前仅支持单个文件
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 签署流程名称，长度不超过200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署流程签约方列表，最多不超过5个参与方
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApprovers = null;

        /**
         * 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 签署流程的描述，长度不超过1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 签署流程的类型，长度不超过255个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 签署流程回调地址，长度不超过255个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
         * @type {string || null}
         */
        this.CustomerData = null;

        /**
         * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
         * @type {string || null}
         */
        this.CustomShowMap = null;

        /**
         * 本企业(发起方企业)是否需要签署审批
         * @type {boolean || null}
         */
        this.NeedSignReview = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.FlowApprovers) {
            this.FlowApprovers = new Array();
            for (let z in params.FlowApprovers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.FlowApprovers[z]);
                this.FlowApprovers.push(obj);
            }
        }
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.CustomerData = 'CustomerData' in params ? params.CustomerData : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.CustomShowMap = 'CustomShowMap' in params ? params.CustomShowMap : null;
        this.NeedSignReview = 'NeedSignReview' in params ? params.NeedSignReview : null;

    }
}

/**
 * CreateConsoleLoginUrl返回参数结构体
 * @class
 */
class CreateConsoleLoginUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子客Web控制台url注意事项：
1. 所有类型的链接在企业未认证/员工未认证完成时，只要在有效期内（一年）都可以访问
2. 若企业认证完成且员工认证完成后，重新获取pc端的链接5分钟之内有效，且只能访问一次
3. 若企业认证完成且员工认证完成后，重新获取H5/APP的链接只要在有效期内（一年）都可以访问
4. 此链接仅单次有效，使用后需要再次创建新的链接（部分聊天软件，如企业微信默认会对链接进行解析，此时需要使用类似“代码片段”的方式或者放到txt文件里发送链接）
5. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义
         * @type {string || null}
         */
        this.ConsoleUrl = null;

        /**
         * 渠道子客企业是否已开通腾讯电子签
         * @type {boolean || null}
         */
        this.IsActivated = null;

        /**
         * 当前经办人是否已认证（false:未认证 true:已认证）
         * @type {boolean || null}
         */
        this.ProxyOperatorIsVerified = null;

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
        this.ConsoleUrl = 'ConsoleUrl' in params ? params.ConsoleUrl : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.ProxyOperatorIsVerified = 'ProxyOperatorIsVerified' in params ? params.ProxyOperatorIsVerified : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncProxyOrganization请求参数结构体
 * @class
 */
class SyncProxyOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
此接口Agent.AppId、Agent.ProxyOrganizationOpenId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 渠道侧合作企业名称，最大长度64个字符
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
         * @type {string || null}
         */
        this.BusinessLicense = null;

        /**
         * 渠道侧合作企业统一社会信用代码，最大长度200个字符
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * 渠道侧合作企业法人/负责人姓名
         * @type {string || null}
         */
        this.ProxyLegalName = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;
        this.BusinessLicense = 'BusinessLicense' in params ? params.BusinessLicense : null;
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.ProxyLegalName = 'ProxyLegalName' in params ? params.ProxyLegalName : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * CreateSealByImage请求参数结构体
 * @class
 */
class CreateSealByImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 印章名称，最大长度不超过50字符
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 印章图片base64，大小不超过10M（原始图片不超过7.6M）
         * @type {string || null}
         */
        this.SealImage = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.SealImage = 'SealImage' in params ? params.SealImage : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelCreateFlowReminds请求参数结构体
 * @class
 */
class ChannelCreateFlowRemindsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程Id数组，最多100个，超过100不处理
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

    }
}

/**
 * ChannelCreateSealPolicy返回参数结构体
 * @class
 */
class ChannelCreateSealPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最终授权成功的用户ID数组。其他的跳过的是已经授权了的
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

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
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCancelFlow返回参数结构体
 * @class
 */
class ChannelCancelFlowResponse extends  AbstractModel {
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
 * 签署流程下载信息
 * @class
 */
class DownloadFlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件夹名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 签署流程的标识数组
         * @type {Array.<string> || null}
         */
        this.FlowIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FlowIdList = 'FlowIdList' in params ? params.FlowIdList : null;

    }
}

/**
 * 签署人签署链接信息
 * @class
 */
class FlowApproverUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署链接，注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
         * @type {string || null}
         */
        this.SignUrl = null;

        /**
         * 签署人手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署人姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 签署人类型 PERSON-个人
         * @type {string || null}
         */
        this.ApproverType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignUrl = 'SignUrl' in params ? params.SignUrl : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;

    }
}

/**
 * ChannelCreateConvertTaskApi请求参数结构体
 * @class
 */
class ChannelCreateConvertTaskApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 资源类型 取值范围doc,docx,html,xls,xlsx之一
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，长度限制为256字符
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源Id，通过UploadFiles获取
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 调用方用户信息，不用传
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 暂未开放
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

    }
}

/**
 * ChannelCreateFlowByFiles请求参数结构体
 * @class
 */
class ChannelCreateFlowByFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程名称，长度不超过200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署流程签约方列表，最多不超过5个参与方
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApprovers = null;

        /**
         * 签署文件资源Id列表，目前仅支持单个文件
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 签署文件中的发起方的填写控件，需要在发起的时候进行填充
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 签署流程回调地址，长度不超过255个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署。有序签署时以传入FlowApprovers数组的顺序作为签署顺序
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 签署流程的类型，长度不超过255个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 签署流程的描述，长度不超过1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
         * @type {string || null}
         */
        this.CustomShowMap = null;

        /**
         * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
         * @type {string || null}
         */
        this.CustomerData = null;

        /**
         * 发起方企业的签署人进行签署操作是否需要企业内部审批。 若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。  注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
         * @type {boolean || null}
         */
        this.NeedSignReview = null;

        /**
         * 签署人校验方式
VerifyCheck: 人脸识别（默认）
MobileCheck：手机号验证
参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
         * @type {string || null}
         */
        this.ApproverVerifyType = null;

        /**
         * 标识是否允许发起后添加控件。0为不允许1为允许。如果为1，创建的时候不能有签署控件，只能创建后添加。注意发起后添加控件功能不支持添加骑缝章和签批控件
         * @type {number || null}
         */
        this.SignBeanTag = null;

        /**
         * 操作者的信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.FlowApprovers) {
            this.FlowApprovers = new Array();
            for (let z in params.FlowApprovers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.FlowApprovers[z]);
                this.FlowApprovers.push(obj);
            }
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.CustomShowMap = 'CustomShowMap' in params ? params.CustomShowMap : null;
        this.CustomerData = 'CustomerData' in params ? params.CustomerData : null;
        this.NeedSignReview = 'NeedSignReview' in params ? params.NeedSignReview : null;
        this.ApproverVerifyType = 'ApproverVerifyType' in params ? params.ApproverVerifyType : null;
        this.SignBeanTag = 'SignBeanTag' in params ? params.SignBeanTag : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 应用相关信息
 * @class
 */
class Agent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的唯一标识。不同的业务系统可以采用不同的AppId，不同AppId下的数据是隔离的。可以由控制台开发者中心-应用集成自主生成。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 渠道平台自定义，对于渠道子客企业的唯一标识。一个渠道子客企业主体与子客企业ProxyOrganizationOpenId是一一对应的，不可更改，不可重复使用。（例如，可以使用企业名称的hash值，或者社会统一信用代码的hash值，或者随机hash值，需要渠道平台保存），最大64位字符串
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

        /**
         * 渠道子客企业中的员工/经办人，通过渠道平台进入电子签完成实名、且被赋予相关权限后，可以参与到企业资源的管理或签署流程中。
         * @type {UserInfo || null}
         */
        this.ProxyOperator = null;

        /**
         * 在子客企业开通电子签后，会生成唯一的子客应用Id（ProxyAppId）用于代理调用时的鉴权，在子客开通的回调中获取。
         * @type {string || null}
         */
        this.ProxyAppId = null;

        /**
         * 内部参数，暂未开放使用
         * @type {string || null}
         */
        this.ProxyOrganizationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;

        if (params.ProxyOperator) {
            let obj = new UserInfo();
            obj.deserialize(params.ProxyOperator)
            this.ProxyOperator = obj;
        }
        this.ProxyAppId = 'ProxyAppId' in params ? params.ProxyAppId : null;
        this.ProxyOrganizationId = 'ProxyOrganizationId' in params ? params.ProxyOrganizationId : null;

    }
}

/**
 * 签署人的流程信息明细
 * @class
 */
class FlowApproverDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板配置时候的签署人id,与控件绑定
         * @type {string || null}
         */
        this.ReceiptId = null;

        /**
         * 渠道侧企业的第三方id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

        /**
         * 渠道侧企业操作人的第三方id
         * @type {string || null}
         */
        this.ProxyOperatorOpenId = null;

        /**
         * 渠道侧企业名称
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 签署人手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署人签署顺序
         * @type {number || null}
         */
        this.SignOrder = null;

        /**
         * 签署人姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveName = null;

        /**
         * 当前签署人的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveStatus = null;

        /**
         * 签署人信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveMessage = null;

        /**
         * 签署人签署时间
         * @type {number || null}
         */
        this.ApproveTime = null;

        /**
         * 参与者类型 (ORGANIZATION企业/PERSON个人)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiptId = 'ReceiptId' in params ? params.ReceiptId : null;
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;
        this.ProxyOperatorOpenId = 'ProxyOperatorOpenId' in params ? params.ProxyOperatorOpenId : null;
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.SignOrder = 'SignOrder' in params ? params.SignOrder : null;
        this.ApproveName = 'ApproveName' in params ? params.ApproveName : null;
        this.ApproveStatus = 'ApproveStatus' in params ? params.ApproveStatus : null;
        this.ApproveMessage = 'ApproveMessage' in params ? params.ApproveMessage : null;
        this.ApproveTime = 'ApproveTime' in params ? params.ApproveTime : null;
        this.ApproveType = 'ApproveType' in params ? params.ApproveType : null;

    }
}

/**
 * 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。
 * @class
 */
class RelieveInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解除理由，最大支持200个字
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 解除后仍然有效的条款，保留条款，最大支持200个字
         * @type {string || null}
         */
        this.RemainInForceItem = null;

        /**
         * 原合同事项处理-费用结算，最大支持200个字
         * @type {string || null}
         */
        this.OriginalExpenseSettlement = null;

        /**
         * 原合同事项处理-其他事项，最大支持200个字
         * @type {string || null}
         */
        this.OriginalOtherSettlement = null;

        /**
         * 其他约定，最大支持200个字
         * @type {string || null}
         */
        this.OtherDeals = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.RemainInForceItem = 'RemainInForceItem' in params ? params.RemainInForceItem : null;
        this.OriginalExpenseSettlement = 'OriginalExpenseSettlement' in params ? params.OriginalExpenseSettlement : null;
        this.OriginalOtherSettlement = 'OriginalOtherSettlement' in params ? params.OriginalOtherSettlement : null;
        this.OtherDeals = 'OtherDeals' in params ? params.OtherDeals : null;

    }
}

/**
 * ChannelCreateFlowGroupByFiles请求参数结构体
 * @class
 */
class ChannelCreateFlowGroupByFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个子合同的发起所需的信息，数量限制2-100
         * @type {Array.<FlowFileInfo> || null}
         */
        this.FlowFileInfos = null;

        /**
         * 合同组名称，长度不超过200个字符
         * @type {string || null}
         */
        this.FlowGroupName = null;

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署人校验方式
VerifyCheck: 人脸识别（默认）
MobileCheck：手机号验证
参数说明：若选择后者，未实名的个人签署方查看合同时，无需进行人脸识别实名认证（但签署合同时仍然需要人脸实名），该能力仅适用于个人签署方。
         * @type {string || null}
         */
        this.ApproverVerifyType = null;

        /**
         * 操作者的信息，此参数不用传
         * @type {UserInfo || null}
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

        if (params.FlowFileInfos) {
            this.FlowFileInfos = new Array();
            for (let z in params.FlowFileInfos) {
                let obj = new FlowFileInfo();
                obj.deserialize(params.FlowFileInfos[z]);
                this.FlowFileInfos.push(obj);
            }
        }
        this.FlowGroupName = 'FlowGroupName' in params ? params.FlowGroupName : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ApproverVerifyType = 'ApproverVerifyType' in params ? params.ApproverVerifyType : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * DescribeFlowDetailInfo返回参数结构体
 * @class
 */
class DescribeFlowDetailInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道侧应用号Id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 渠道侧企业第三方Id
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

        /**
         * 合同(签署流程)的具体详细描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FlowDetailInfo> || null}
         */
        this.FlowInfo = null;

        /**
         * 合同组编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowGroupId = null;

        /**
         * 合同组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowGroupName = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;

        if (params.FlowInfo) {
            this.FlowInfo = new Array();
            for (let z in params.FlowInfo) {
                let obj = new FlowDetailInfo();
                obj.deserialize(params.FlowInfo[z]);
                this.FlowInfo.push(obj);
            }
        }
        this.FlowGroupId = 'FlowGroupId' in params ? params.FlowGroupId : null;
        this.FlowGroupName = 'FlowGroupName' in params ? params.FlowGroupName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源链接信息
 * @class
 */
class ResourceUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源链接地址，过期时间5分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 创建签署流程签署人入参。

其中签署方FlowApproverInfo需要传递的参数
非单C、单B、B2C合同，ApproverType、RecipientId（模板发起合同时）必传，建议都传。其他身份标识
1-个人：Name、Mobile必传
2-渠道子客企业指定经办人：OpenId必传，OrgName必传、OrgOpenId必传；
3-渠道合作企业不指定经办人：OrgName必传、OrgOpenId必传；
4-非渠道合作企业：Name、Mobile必传，OrgName必传，且NotChannelOrganization=True。

RecipientId参数：
从DescribeTemplates接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId
 * @class
 */
class FlowApproverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人姓名，最大长度50个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 签署人身份证件类型
1.ID_CARD 居民身份证
2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 签署人证件号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号。
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符；
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 指定签署人非渠道企业下员工，在ApproverType为ORGANIZATION时指定。
默认为false，即签署人位于同一个渠道应用号下；
         * @type {boolean || null}
         */
        this.NotChannelOrganization = null;

        /**
         * 用户侧第三方id，最大长度64个字符
当签署方为同一渠道下的员工时，该字段若不指定，则发起【待领取】的流程
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 企业签署方在同一渠道下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符；
         * @type {string || null}
         */
        this.OrganizationOpenId = null;

        /**
         * 签署人类型
PERSON-个人/自然人；
PERSON_AUTO_SIGN-个人自动签（定制化场景下使用）；
ORGANIZATION-企业（企业签署方或模板发起时的企业静默签）；
ENTERPRISESERVER-企业静默签（文件发起时的企业静默签字）。
         * @type {string || null}
         */
        this.ApproverType = null;

        /**
         * 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置；
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 签署截止时间，默认一年
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 签署完回调url，最大长度1000个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 使用PDF文件直接发起合同时，签署人指定的签署控件
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 个人签署方指定签署控件类型，目前支持：OCR_ESIGN -AI智慧手写签名
HANDWRITE -手写签名
         * @type {Array.<string> || null}
         */
        this.ComponentLimitType = null;

        /**
         * 合同的强制预览时间：3~300s，未指定则按合同页数计算
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 签署完前端跳转的url，暂未使用
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 签署人个性化能力值
         * @type {ApproverOption || null}
         */
        this.ApproverOption = null;

        /**
         * 当前签署方进行签署操作是否需要企业内部审批，true 则为需要
         * @type {boolean || null}
         */
        this.ApproverNeedSignReview = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.NotChannelOrganization = 'NotChannelOrganization' in params ? params.NotChannelOrganization : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.ComponentLimitType = 'ComponentLimitType' in params ? params.ComponentLimitType : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.ApproverOption) {
            let obj = new ApproverOption();
            obj.deserialize(params.ApproverOption)
            this.ApproverOption = obj;
        }
        this.ApproverNeedSignReview = 'ApproverNeedSignReview' in params ? params.ApproverNeedSignReview : null;

    }
}

/**
 * PrepareFlows返回参数结构体
 * @class
 */
class PrepareFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待发起文件确认页
         * @type {string || null}
         */
        this.ConfirmUrl = null;

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
        this.ConfirmUrl = 'ConfirmUrl' in params ? params.ConfirmUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。
 * @class
 */
class TemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板名字
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 模板描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 模板控件信息结构
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 模板中的流程参与人信息
         * @type {Array.<Recipient> || null}
         */
        this.Recipients = null;

        /**
         * 签署区模板信息结构
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 模板类型：1-静默签；3-普通模板
         * @type {number || null}
         */
        this.TemplateType = null;

        /**
         * 是否是发起人 ,已弃用
         * @type {boolean || null}
         */
        this.IsPromoter = null;

        /**
         * 模板的创建者信息
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 模板创建的时间戳（精确到秒）
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 模板的H5预览链接,可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * 渠道版-模板PDF文件链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PdfUrl = null;

        /**
         * 关联的渠道模板ID
         * @type {string || null}
         */
        this.ChannelTemplateId = null;

        /**
         * 关联的渠道模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelTemplateName = null;

        /**
         * 0-需要渠道子客手动领取渠道的模板(默认); 1-渠道自动设置子客模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChannelAutoSave = null;

        /**
         * 模板版本，全数字字符。默认为空，初始版本为yyyyMMdd001。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }

        if (params.Recipients) {
            this.Recipients = new Array();
            for (let z in params.Recipients) {
                let obj = new Recipient();
                obj.deserialize(params.Recipients[z]);
                this.Recipients.push(obj);
            }
        }

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;
        this.IsPromoter = 'IsPromoter' in params ? params.IsPromoter : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.PdfUrl = 'PdfUrl' in params ? params.PdfUrl : null;
        this.ChannelTemplateId = 'ChannelTemplateId' in params ? params.ChannelTemplateId : null;
        this.ChannelTemplateName = 'ChannelTemplateName' in params ? params.ChannelTemplateName : null;
        this.ChannelAutoSave = 'ChannelAutoSave' in params ? params.ChannelAutoSave : null;
        this.TemplateVersion = 'TemplateVersion' in params ? params.TemplateVersion : null;

    }
}

/**
 * GetDownloadFlowUrl返回参数结构体
 * @class
 */
class GetDownloadFlowUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同（流程）下载地址
         * @type {string || null}
         */
        this.DownLoadUrl = null;

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
        this.DownLoadUrl = 'DownLoadUrl' in params ? params.DownLoadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署参与者信息
 * @class
 */
class Recipient extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人唯一标识
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 签署方类型：ENTERPRISE-企业INDIVIDUAL-自然人
         * @type {string || null}
         */
        this.RecipientType = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 签署方备注信息
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 是否需要校验
         * @type {boolean || null}
         */
        this.RequireValidation = null;

        /**
         * 是否必须填写
         * @type {boolean || null}
         */
        this.RequireSign = null;

        /**
         * 签署类型
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * 签署顺序：数字越小优先级越高
         * @type {number || null}
         */
        this.RoutingOrder = null;

        /**
         * 是否是发起方
         * @type {boolean || null}
         */
        this.IsPromoter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.RecipientType = 'RecipientType' in params ? params.RecipientType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RequireValidation = 'RequireValidation' in params ? params.RequireValidation : null;
        this.RequireSign = 'RequireSign' in params ? params.RequireSign : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.RoutingOrder = 'RoutingOrder' in params ? params.RoutingOrder : null;
        this.IsPromoter = 'IsPromoter' in params ? params.IsPromoter : null;

    }
}

/**
 * DescribeTemplates返回参数结构体
 * @class
 */
class DescribeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板详情
         * @type {Array.<TemplateInfo> || null}
         */
        this.Templates = null;

        /**
         * 查询总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询起始偏移
         * @type {number || null}
         */
        this.Offset = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new TemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 渠道版员工角色信息
 * @class
 */
class StaffRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * ChannelVerifyPdf请求参数结构体
 * @class
 */
class ChannelVerifyPdfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同Id，流程Id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * CreateChannelFlowEvidenceReport请求参数结构体
 * @class
 */
class CreateChannelFlowEvidenceReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelVerifyPdf返回参数结构体
 * @class
 */
class ChannelVerifyPdfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误
         * @type {number || null}
         */
        this.VerifyResult = null;

        /**
         * 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域
；5-文件签名格式错误
         * @type {Array.<PdfVerifyResult> || null}
         */
        this.PdfVerifyResults = null;

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
        this.VerifyResult = 'VerifyResult' in params ? params.VerifyResult : null;

        if (params.PdfVerifyResults) {
            this.PdfVerifyResults = new Array();
            for (let z in params.PdfVerifyResults) {
                let obj = new PdfVerifyResult();
                obj.deserialize(params.PdfVerifyResults[z]);
                this.PdfVerifyResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConsoleLoginUrl请求参数结构体
 * @class
 */
class CreateConsoleLoginUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 渠道子客企业名称，最大长度64个字符
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 渠道子客企业经办人的姓名，最大长度50个字符
         * @type {string || null}
         */
        this.ProxyOperatorName = null;

        /**
         * PC控制台指定模块，文件/合同管理:"DOCUMENT"，模板管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息"。 EndPoint为"CHANNEL"/"APP"只支持"SEAL"-印章管理
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 控制台指定模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 渠道子客企业统一社会信用代码，最大长度200个字符
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * 是否展示左侧菜单栏 是：ENABLE（默认） 否：DISABLE
         * @type {string || null}
         */
        this.MenuStatus = null;

        /**
         * 链接跳转类型："PC"-PC控制台，“CHANNEL”-H5跳转到电子签小程序；“APP”-第三方APP或小程序跳转电子签小程序，默认为PC控制台
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 触发自动跳转事件，仅对App类型有效，"VERIFIED":企业认证完成/员工认证完成后跳回原App/小程序
         * @type {string || null}
         */
        this.AutoJumpBackEvent = null;

        /**
         * 支持的授权方式,授权方式: "1" - 上传授权书认证  "2" - 法定代表人认证
         * @type {Array.<number> || null}
         */
        this.AuthorizationTypes = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;
        this.ProxyOperatorName = 'ProxyOperatorName' in params ? params.ProxyOperatorName : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.MenuStatus = 'MenuStatus' in params ? params.MenuStatus : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.AutoJumpBackEvent = 'AutoJumpBackEvent' in params ? params.AutoJumpBackEvent : null;
        this.AuthorizationTypes = 'AuthorizationTypes' in params ? params.AuthorizationTypes : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 机构信息
 * @class
 */
class OrganizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在渠道的机构编号
         * @type {string || null}
         */
        this.OrganizationOpenId = null;

        /**
         * 用户真实的IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 机构的代理IP
         * @type {string || null}
         */
        this.ProxyIp = null;

        /**
         * 机构在平台的编号
         * @type {string || null}
         */
        this.OrganizationId = null;

        /**
         * 用户渠道
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ProxyIp = 'ProxyIp' in params ? params.ProxyIp : null;
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 合同文件验签单个结果结构体
 * @class
 */
class PdfVerifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验签结果
         * @type {number || null}
         */
        this.VerifyResult = null;

        /**
         * 签署平台
         * @type {string || null}
         */
        this.SignPlatform = null;

        /**
         * 签署人名称
         * @type {string || null}
         */
        this.SignerName = null;

        /**
         * 签署时间
         * @type {number || null}
         */
        this.SignTime = null;

        /**
         * 签名算法
         * @type {string || null}
         */
        this.SignAlgorithm = null;

        /**
         * 签名证书序列号
         * @type {string || null}
         */
        this.CertSn = null;

        /**
         * 证书起始时间
         * @type {number || null}
         */
        this.CertNotBefore = null;

        /**
         * 证书过期时间
         * @type {number || null}
         */
        this.CertNotAfter = null;

        /**
         * 签名类型
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * 签名域横坐标
         * @type {number || null}
         */
        this.ComponentPosX = null;

        /**
         * 签名域纵坐标
         * @type {number || null}
         */
        this.ComponentPosY = null;

        /**
         * 签名域宽度
         * @type {number || null}
         */
        this.ComponentWidth = null;

        /**
         * 签名域高度
         * @type {number || null}
         */
        this.ComponentHeight = null;

        /**
         * 签名域所在页码
         * @type {number || null}
         */
        this.ComponentPage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerifyResult = 'VerifyResult' in params ? params.VerifyResult : null;
        this.SignPlatform = 'SignPlatform' in params ? params.SignPlatform : null;
        this.SignerName = 'SignerName' in params ? params.SignerName : null;
        this.SignTime = 'SignTime' in params ? params.SignTime : null;
        this.SignAlgorithm = 'SignAlgorithm' in params ? params.SignAlgorithm : null;
        this.CertSn = 'CertSn' in params ? params.CertSn : null;
        this.CertNotBefore = 'CertNotBefore' in params ? params.CertNotBefore : null;
        this.CertNotAfter = 'CertNotAfter' in params ? params.CertNotAfter : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;

    }
}

/**
 * ChannelCancelMultiFlowSignQRCode请求参数结构体
 * @class
 */
class ChannelCancelMultiFlowSignQRCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 二维码id
         * @type {string || null}
         */
        this.QrCodeId = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.QrCodeId = 'QrCodeId' in params ? params.QrCodeId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * UploadFiles请求参数结构体
 * @class
 */
class UploadFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息，若是渠道版调用 appid 和proxyappid 必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 文件对应业务类型
1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 上传文件内容数组，最多支持20个文件
         * @type {Array.<UploadFile> || null}
         */
        this.FileInfos = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new UploadFile();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelDescribeOrganizationSeals请求参数结构体
 * @class
 */
class ChannelDescribeOrganizationSealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 返回最大数量，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0，最大为20000
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询信息类型，为1时返回授权用户，为其他值时不返回
         * @type {number || null}
         */
        this.InfoType = null;

        /**
         * 印章id（没有输入返回所有）
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 印章类型列表（都是组织机构印章）。
为空时查询所有类型的印章。
目前支持以下类型：
OFFICIAL：企业公章；
CONTRACT：合同专用章；
ORGANIZATION_SEAL：企业印章(图片上传创建)；
LEGAL_PERSON_SEAL：法定代表人章
         * @type {Array.<string> || null}
         */
        this.SealTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealTypes = 'SealTypes' in params ? params.SealTypes : null;

    }
}

/**
 * DescribeUsage请求参数结构体
 * @class
 */
class DescribeUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息，此接口Agent.AppId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 开始时间，例如：2021-03-21
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束时间，例如：2021-06-21；
开始时间到结束时间的区间长度小于等于90天。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 是否汇总数据，默认不汇总。
不汇总：返回在统计区间内渠道下所有企业的每日明细，即每个企业N条数据，N为统计天数；
汇总：返回在统计区间内渠道下所有企业的汇总后数据，即每个企业一条数据；
         * @type {boolean || null}
         */
        this.NeedAggregate = null;

        /**
         * 单次返回的最多条目数量。默认为1000，且不能超过1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认是0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.NeedAggregate = 'NeedAggregate' in params ? params.NeedAggregate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * DescribeExtendedServiceAuthInfo请求参数结构体
 * @class
 */
class DescribeExtendedServiceAuthInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填

注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId

         * @type {Agent || null}
         */
        this.Agent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * 此结构 (FormField) 用于描述内容控件填充结构。

 * @class
 */
class FormField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 表单域或控件的ID，跟ComponentName二选一，不能全为空；
CreateFlowsByTemplates 接口不使用此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 控件的名字，跟ComponentId二选一，不能全为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComponentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentValue = 'ComponentValue' in params ? params.ComponentValue : null;
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;

    }
}

/**
 * 此结构体 (FlowInfo) 用于描述签署流程信息。

【数据表格传参说明】
当模板的 ComponentType='DYNAMIC_TABLE'时（渠道版或集成版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
输入示例1：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```

输入示例2（表格表头宽度比例配置）：

```
{
    "headers":[
        {
            "content":"head1",
            "widthPercent": 30
        },
        {
            "content":"head2",
            "widthPercent": 30
        },
        {
            "content":"head3",
            "widthPercent": 40
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```
表格参数说明

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| headers             | Array   | 表头：不超过10列，不支持单元格合并，字数不超过100 |
| rowCount            | Integer | 表格内容最大行数                                  |
| cells.N.rowStart    | Integer | 单元格坐标：行起始index                           |
| cells.N.rowEnd      | Integer | 单元格坐标：行结束index                           |
| cells.N.columnStart | Integer | 单元格坐标：列起始index                           |
| cells.N.columnEnd   | Integer | 单元格坐标：列结束index                           |
| cells.N.content     | String  | 单元格内容，字数不超过100                         |

表格参数headers说明

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| widthPercent   | Integer | 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35                    |
| content    | String  | 表头单元格内容，字数不超过100                         |

 * @class
 */
class FlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同名字，最大长度200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署截止时间戳，超过有效签署时间则该签署流程失败，默认一年
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 多个签署人信息，最大支持50个签署方
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApprovers = null;

        /**
         * 表单K-V对列表
         * @type {Array.<FormField> || null}
         */
        this.FormFields = null;

        /**
         * 回调地址，最大长度1000个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 合同类型，如：1. “劳务”；2. “销售”；3. “租赁”；4. “其他”，最大长度200个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 合同描述，最大长度1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
         * @type {string || null}
         */
        this.CustomerData = null;

        /**
         * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
         * @type {string || null}
         */
        this.CustomShowMap = null;

        /**
         * 被抄送人的信息列表，抄送功能暂不开放
         * @type {Array.<CcInfo> || null}
         */
        this.CcInfos = null;

        /**
         * 发起方企业的签署人进行签署操作是否需要企业内部审批。
若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
         * @type {boolean || null}
         */
        this.NeedSignReview = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.FlowApprovers) {
            this.FlowApprovers = new Array();
            for (let z in params.FlowApprovers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.FlowApprovers[z]);
                this.FlowApprovers.push(obj);
            }
        }

        if (params.FormFields) {
            this.FormFields = new Array();
            for (let z in params.FormFields) {
                let obj = new FormField();
                obj.deserialize(params.FormFields[z]);
                this.FormFields.push(obj);
            }
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.CustomerData = 'CustomerData' in params ? params.CustomerData : null;
        this.CustomShowMap = 'CustomShowMap' in params ? params.CustomShowMap : null;

        if (params.CcInfos) {
            this.CcInfos = new Array();
            for (let z in params.CcInfos) {
                let obj = new CcInfo();
                obj.deserialize(params.CcInfos[z]);
                this.CcInfos.push(obj);
            }
        }
        this.NeedSignReview = 'NeedSignReview' in params ? params.NeedSignReview : null;

    }
}

/**
 * 接口调用者信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道平台自定义，对渠道子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要渠道平台保存），最大64位字符串
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 内部参数，暂未开放使用
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 内部参数，暂未开放使用
         * @type {string || null}
         */
        this.CustomUserId = null;

        /**
         * 内部参数，暂未开放使用
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 内部参数，暂未开放使用
         * @type {string || null}
         */
        this.ProxyIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.CustomUserId = 'CustomUserId' in params ? params.CustomUserId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ProxyIp = 'ProxyIp' in params ? params.ProxyIp : null;

    }
}

/**
 * 复杂文档合成任务的任务信息
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合成任务Id，可以通过 ChannelGetTaskResultApi 接口获取任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态：READY - 任务已完成；NOTREADY - 任务未完成；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * DescribeUsage返回参数结构体
 * @class
 */
class DescribeUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用量明细条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用量明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsageDetail> || null}
         */
        this.Details = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new UsageDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业员工信息
 * @class
 */
class Staff extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工在电子签平台的id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 显示的员工名
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 员工手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 员工邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 员工在第三方平台id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 员工角色
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StaffRole> || null}
         */
        this.Roles = null;

        /**
         * 员工部门
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Department || null}
         */
        this.Department = null;

        /**
         * 员工是否实名
         * @type {boolean || null}
         */
        this.Verified = null;

        /**
         * 员工创建时间戳
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 员工实名时间戳
         * @type {number || null}
         */
        this.VerifiedOn = null;

        /**
         * 员工是否离职：0-未离职，1-离职
         * @type {number || null}
         */
        this.QuiteJob = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

        if (params.Roles) {
            this.Roles = new Array();
            for (let z in params.Roles) {
                let obj = new StaffRole();
                obj.deserialize(params.Roles[z]);
                this.Roles.push(obj);
            }
        }

        if (params.Department) {
            let obj = new Department();
            obj.deserialize(params.Department)
            this.Department = obj;
        }
        this.Verified = 'Verified' in params ? params.Verified : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.VerifiedOn = 'VerifiedOn' in params ? params.VerifiedOn : null;
        this.QuiteJob = 'QuiteJob' in params ? params.QuiteJob : null;

    }
}

/**
 * ChannelCreateBoundFlows请求参数结构体
 * @class
 */
class ChannelCreateBoundFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 领取的合同id列表
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelDescribeEmployees请求参数结构体
 * @class
 */
class ChannelDescribeEmployeesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回最大数量，最大为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
查询离职员工时，Key为Status，Values为["QuiteJob"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0，最大为20000
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 授权用户
 * @class
 */
class AuthorizedUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户openid
         * @type {string || null}
         */
        this.OpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * DescribeResourceUrlsByFlows返回参数结构体
 * @class
 */
class DescribeResourceUrlsByFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程资源对应链接信息
         * @type {Array.<FlowResourceUrlInfo> || null}
         */
        this.FlowResourceUrlInfos = null;

        /**
         * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
         * @type {Array.<string> || null}
         */
        this.ErrorMessages = null;

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

        if (params.FlowResourceUrlInfos) {
            this.FlowResourceUrlInfos = new Array();
            for (let z in params.FlowResourceUrlInfos) {
                let obj = new FlowResourceUrlInfo();
                obj.deserialize(params.FlowResourceUrlInfos[z]);
                this.FlowResourceUrlInfos.push(obj);
            }
        }
        this.ErrorMessages = 'ErrorMessages' in params ? params.ErrorMessages : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncProxyOrganizationOperators请求参数结构体
 * @class
 */
class SyncProxyOrganizationOperatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.AppId 和 Agent.ProxyOrganizationOpenId必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN"
         * @type {string || null}
         */
        this.OperatorType = null;

        /**
         * 经办人信息列表，最大长度200
         * @type {Array.<ProxyOrganizationOperator> || null}
         */
        this.ProxyOrganizationOperators = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.OperatorType = 'OperatorType' in params ? params.OperatorType : null;

        if (params.ProxyOrganizationOperators) {
            this.ProxyOrganizationOperators = new Array();
            for (let z in params.ProxyOrganizationOperators) {
                let obj = new ProxyOrganizationOperator();
                obj.deserialize(params.ProxyOrganizationOperators[z]);
                this.ProxyOrganizationOperators.push(obj);
            }
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * CreateSignUrls请求参数结构体
 * @class
 */
class CreateSignUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程编号数组，最多支持100个。(备注：该参数和合同组编号必须二选一)
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 合同组编号(备注：该参数和合同(流程)编号数组必须二选一)
         * @type {string || null}
         */
        this.FlowGroupId = null;

        /**
         * 签署链接类型：“WEIXINAPP”-短链直接跳小程序；“CHANNEL”-跳转H5页面；“APP”-第三方APP或小程序跳转电子签小程序；"LONGURL2WEIXINAPP"-长链接跳转小程序；默认“WEIXINAPP”类型，即跳转至小程序；
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 签署链接生成类型，默认是 "ALL"；
"ALL"：全部签署方签署链接，此时不会给自动签署的签署方创建签署链接；
"CHANNEL"：渠道合作企业；
"NOT_CHANNEL"：非渠道合作企业；
"PERSON"：个人；
"FOLLOWER"：关注方，目前是合同抄送方；
         * @type {string || null}
         */
        this.GenerateType = null;

        /**
         * 非渠道合作企业参与方的企业名称，GenerateType为"NOT_CHANNEL"时必填
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 参与人姓名，GenerateType为"PERSON"时必填
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参与人手机号；
GenerateType为"PERSON"或"FOLLOWER"时必填
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 渠道合作企业的企业Id，GenerateType为"CHANNEL"时必填
         * @type {string || null}
         */
        this.OrganizationOpenId = null;

        /**
         * 渠道合作企业参与人OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人, 仅展示已经实名的经办人信息
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序
         * @type {boolean || null}
         */
        this.AutoJumpBack = null;

        /**
         * 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.FlowGroupId = 'FlowGroupId' in params ? params.FlowGroupId : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.GenerateType = 'GenerateType' in params ? params.GenerateType : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.AutoJumpBack = 'AutoJumpBack' in params ? params.AutoJumpBack : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelCreateMultiFlowSignQRCode请求参数结构体
 * @class
 */
class ChannelCreateMultiFlowSignQRCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。
此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 模版ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 签署流程名称，最大长度200个字符。
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 最大可发起签署流程份数，默认5份；发起签署流程数量超过此上限后，二维码自动失效。
         * @type {number || null}
         */
        this.MaxFlowNum = null;

        /**
         * 签署流程有效天数 默认7天 最高设置不超过30天
         * @type {number || null}
         */
        this.FlowEffectiveDay = null;

        /**
         * 二维码有效天数 默认7天 最高设置不超过90天
         * @type {number || null}
         */
        this.QrEffectiveDay = null;

        /**
         * 限制二维码用户条件
         * @type {Array.<ApproverRestriction> || null}
         */
        this.Restrictions = null;

        /**
         * 回调地址，最大长度1000个字符
不传默认使用渠道应用号配置的回调地址
回调时机:用户通过签署二维码发起合同时，企业额度不足导致失败
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 限制二维码用户条件（已弃用）
         * @type {ApproverRestriction || null}
         */
        this.ApproverRestrictions = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.MaxFlowNum = 'MaxFlowNum' in params ? params.MaxFlowNum : null;
        this.FlowEffectiveDay = 'FlowEffectiveDay' in params ? params.FlowEffectiveDay : null;
        this.QrEffectiveDay = 'QrEffectiveDay' in params ? params.QrEffectiveDay : null;

        if (params.Restrictions) {
            this.Restrictions = new Array();
            for (let z in params.Restrictions) {
                let obj = new ApproverRestriction();
                obj.deserialize(params.Restrictions[z]);
                this.Restrictions.push(obj);
            }
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.ApproverRestrictions) {
            let obj = new ApproverRestriction();
            obj.deserialize(params.ApproverRestrictions)
            this.ApproverRestrictions = obj;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 一码多扫签署二维码对象
 * @class
 */
class SignQrCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码id
         * @type {string || null}
         */
        this.QrCodeId = null;

        /**
         * 二维码url
         * @type {string || null}
         */
        this.QrCodeUrl = null;

        /**
         * 二维码过期时间
         * @type {number || null}
         */
        this.ExpiredTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QrCodeId = 'QrCodeId' in params ? params.QrCodeId : null;
        this.QrCodeUrl = 'QrCodeUrl' in params ? params.QrCodeUrl : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

    }
}

/**
 * ChannelGetTaskResultApi请求参数结构体
 * @class
 */
class ChannelGetTaskResultApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 任务Id，通过ChannelCreateConvertTaskApi接口获得
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 操作者的信息，不用传
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 暂未开放
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

    }
}

/**
 * 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息
 * @class
 */
class FlowDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同(流程)的Id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 合同(流程)的名字
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 合同(流程)的类型
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 合同(流程)的状态
         * @type {string || null}
         */
        this.FlowStatus = null;

        /**
         * 合同(流程)的信息
         * @type {string || null}
         */
        this.FlowMessage = null;

        /**
         * 合同(流程)的创建时间戳
         * @type {number || null}
         */
        this.CreateOn = null;

        /**
         * 合同(流程)的签署截止时间戳
         * @type {number || null}
         */
        this.DeadLine = null;

        /**
         * 用户自定义数据
         * @type {string || null}
         */
        this.CustomData = null;

        /**
         * 合同(流程)的签署人数组
         * @type {Array.<FlowApproverDetail> || null}
         */
        this.FlowApproverInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.FlowStatus = 'FlowStatus' in params ? params.FlowStatus : null;
        this.FlowMessage = 'FlowMessage' in params ? params.FlowMessage : null;
        this.CreateOn = 'CreateOn' in params ? params.CreateOn : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.CustomData = 'CustomData' in params ? params.CustomData : null;

        if (params.FlowApproverInfos) {
            this.FlowApproverInfos = new Array();
            for (let z in params.FlowApproverInfos) {
                let obj = new FlowApproverDetail();
                obj.deserialize(params.FlowApproverInfos[z]);
                this.FlowApproverInfos.push(obj);
            }
        }

    }
}

/**
 * CreateFlowsByTemplates返回参数结构体
 * @class
 */
class CreateFlowsByTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个合同ID
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 渠道的业务信息，限制1024字符
         * @type {Array.<string> || null}
         */
        this.CustomerData = null;

        /**
         * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
         * @type {Array.<string> || null}
         */
        this.ErrorMessages = null;

        /**
         * 预览模式下返回的预览文件url数组
         * @type {Array.<string> || null}
         */
        this.PreviewUrls = null;

        /**
         * 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；
如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情；
         * @type {Array.<TaskInfo> || null}
         */
        this.TaskInfos = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.CustomerData = 'CustomerData' in params ? params.CustomerData : null;
        this.ErrorMessages = 'ErrorMessages' in params ? params.ErrorMessages : null;
        this.PreviewUrls = 'PreviewUrls' in params ? params.PreviewUrls : null;

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new TaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChannelFlowEvidenceReport请求参数结构体
 * @class
 */
class DescribeChannelFlowEvidenceReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 出证报告编号
         * @type {string || null}
         */
        this.ReportId = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ReportId = 'ReportId' in params ? params.ReportId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * SyncProxyOrganizationOperators返回参数结构体
 * @class
 */
class SyncProxyOrganizationOperatorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status 同步状态,全部同步失败接口会直接报错
1-成功 
2-部分成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 同步失败经办人及其失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SyncFailReason> || null}
         */
        this.FailedList = null;

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

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new SyncFailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署链接内容
 * @class
 */
class SignUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署链接，过期时间为30天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignUrl = null;

        /**
         * 合同过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SignOrder = null;

        /**
         * 签署人编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignId = null;

        /**
         * 自定义用户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomUserId = null;

        /**
         * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户手机号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署参与者机构名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 参与者类型:
ORGANIZATION 企业经办人
PERSON 自然人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproverType = null;

        /**
         * 经办人身份证号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 签署链接对应流程Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 企业经办人 用户在渠道的编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 合同组签署链接对应的合同组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignUrl = 'SignUrl' in params ? params.SignUrl : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.SignOrder = 'SignOrder' in params ? params.SignOrder : null;
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.CustomUserId = 'CustomUserId' in params ? params.CustomUserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.FlowGroupId = 'FlowGroupId' in params ? params.FlowGroupId : null;

    }
}

/**
 * 流程对应资源链接信息
 * @class
 */
class FlowResourceUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程对应Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程对应资源链接信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceUrlInfo> || null}
         */
        this.ResourceUrlInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.ResourceUrlInfos) {
            this.ResourceUrlInfos = new Array();
            for (let z in params.ResourceUrlInfos) {
                let obj = new ResourceUrlInfo();
                obj.deserialize(params.ResourceUrlInfos[z]);
                this.ResourceUrlInfos.push(obj);
            }
        }

    }
}

/**
 * 此结构体 (UploadFile) 用于描述多文件上传的文件信息。
 * @class
 */
class UploadFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64编码后的文件内容
         * @type {string || null}
         */
        this.FileBody = null;

        /**
         * 文件名
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
        this.FileBody = 'FileBody' in params ? params.FileBody : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * 企业扩展服务授权信息
 * @class
 */
class ExtentServiceAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩展服务类型
  AUTO_SIGN             企业静默签（自动签署）
  OVERSEA_SIGN          企业与港澳台居民*签署合同
  MOBILE_CHECK_APPROVER 使用手机号验证签署方身份
  PAGING_SEAL           骑缝章
  DOWNLOAD_FLOW         授权渠道下载合同 
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 扩展服务名称 
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 服务状态 
ENABLE 开启 
DISABLE 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 最近操作人openid（经办人openid）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorOpenId = null;

        /**
         * 最近操作时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperateOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OperatorOpenId = 'OperatorOpenId' in params ? params.OperatorOpenId : null;
        this.OperateOn = 'OperateOn' in params ? params.OperateOn : null;

    }
}

/**
 * 此结构体 (Filter) 用于描述查询过滤条件。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询过滤条件的Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询过滤条件的Value列表
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 解除协议的签署人，如不指定，默认使用待解除流程（即原流程）中的签署人。
注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该签署人。

如果需要指定B端（机构身份类型）签署人，其中ReleasedApprover需要传递的参数如下：
ApproverNumber, OrganizationName, ApproverType必传。
对于其他身份标识
- 渠道子客企业指定经办人：OpenId必传，OrganizationOpenId必传；
- 非渠道合作企业：Name、Mobile必传。
 * @class
 */
class ReleasedApprover extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 签署人在原流程中的签署人列表中的顺序序号（从0开始，按顺序依次递增），如果不清楚原流程中的签署人列表，可以通过DescribeFlows接口查看
         * @type {number || null}
         */
        this.ApproverNumber = null;

        /**
         * 签署人类型，目前仅支持
ORGANIZATION-企业
         * @type {string || null}
         */
        this.ApproverType = null;

        /**
         * 签署人姓名，最大长度50个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 签署人身份证件类型
1.ID_CARD 居民身份证
2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 签署人证件号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 企业签署方在同一渠道下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符
         * @type {string || null}
         */
        this.OrganizationOpenId = null;

        /**
         * 用户侧第三方id，最大长度64个字符
当签署方为同一渠道下的员工时，该字必传
         * @type {string || null}
         */
        this.OpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.ApproverNumber = 'ApproverNumber' in params ? params.ApproverNumber : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * CreateSignUrls返回参数结构体
 * @class
 */
class CreateSignUrlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署参与者签署H5链接信息数组
         * @type {Array.<SignUrlInfo> || null}
         */
        this.SignUrlInfos = null;

        /**
         * 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致
         * @type {Array.<string> || null}
         */
        this.ErrorMessages = null;

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

        if (params.SignUrlInfos) {
            this.SignUrlInfos = new Array();
            for (let z in params.SignUrlInfos) {
                let obj = new SignUrlInfo();
                obj.deserialize(params.SignUrlInfos[z]);
                this.SignUrlInfos.push(obj);
            }
        }
        this.ErrorMessages = 'ErrorMessages' in params ? params.ErrorMessages : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadFiles返回参数结构体
 * @class
 */
class UploadFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件id数组，有效期一个小时；有效期内此文件id可以反复使用
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 上传成功文件数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 文件Url
         * @type {Array.<string> || null}
         */
        this.FileUrls = null;

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
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.FileUrls = 'FileUrls' in params ? params.FileUrls : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCreateBatchCancelFlowUrl请求参数结构体
 * @class
 */
class ChannelCreateBatchCancelFlowUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程Id数组
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 指定签署人限制项
 * @class
 */
class ApproverRestriction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定签署人名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 指定签署人手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 指定签署人证件类型
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 指定签署人证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;

    }
}

/**
 * PrepareFlows请求参数结构体
 * @class
 */
class PrepareFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 多个合同（签署流程）信息，最大支持20个签署流程。
         * @type {Array.<FlowInfo> || null}
         */
        this.FlowInfos = null;

        /**
         * 操作完成后的跳转地址，最大长度200
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.FlowInfos) {
            this.FlowInfos = new Array();
            for (let z in params.FlowInfos) {
                let obj = new FlowInfo();
                obj.deserialize(params.FlowInfos[z]);
                this.FlowInfos.push(obj);
            }
        }
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelCreateFlowByFiles返回参数结构体
 * @class
 */
class ChannelCreateFlowByFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同签署流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCreateFlowSignReview返回参数结构体
 * @class
 */
class ChannelCreateFlowSignReviewResponse extends  AbstractModel {
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
 * ChannelDescribeOrganizationSeals返回参数结构体
 * @class
 */
class ChannelDescribeOrganizationSealsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询到的印章结果数组
         * @type {Array.<OccupiedSeal> || null}
         */
        this.Seals = null;

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

        if (params.Seals) {
            this.Seals = new Array();
            for (let z in params.Seals) {
                let obj = new OccupiedSeal();
                obj.deserialize(params.Seals[z]);
                this.Seals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCancelMultiFlowSignQRCode返回参数结构体
 * @class
 */
class ChannelCancelMultiFlowSignQRCodeResponse extends  AbstractModel {
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
 * ChannelCreateReleaseFlow请求参数结构体
 * @class
 */
class ChannelCreateReleaseFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 待解除的流程编号（即原流程的编号）
         * @type {string || null}
         */
        this.NeedRelievedFlowId = null;

        /**
         * 解除协议内容
         * @type {RelieveInfo || null}
         */
        this.ReliveInfo = null;

        /**
         * 非必须，解除协议的本企业签署人列表，默认使用原流程的签署人列表；当解除协议的签署人与原流程的签署人不能相同时（例如原流程签署人离职了），需要指定本企业的其他签署人来替换原流程中的原签署人，注意需要指明ApproverNumber来代表需要替换哪一个签署人，解除协议的签署人数量不能多于原流程的签署人数量
         * @type {Array.<ReleasedApprover> || null}
         */
        this.ReleasedApprovers = null;

        /**
         * 签署完回调url，最大长度1000个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 暂未开放
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.NeedRelievedFlowId = 'NeedRelievedFlowId' in params ? params.NeedRelievedFlowId : null;

        if (params.ReliveInfo) {
            let obj = new RelieveInfo();
            obj.deserialize(params.ReliveInfo)
            this.ReliveInfo = obj;
        }

        if (params.ReleasedApprovers) {
            this.ReleasedApprovers = new Array();
            for (let z in params.ReleasedApprovers) {
                let obj = new ReleasedApprover();
                obj.deserialize(params.ReleasedApprovers[z]);
                this.ReleasedApprovers.push(obj);
            }
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelCreateFlowGroupByFiles返回参数结构体
 * @class
 */
class ChannelCreateFlowGroupByFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowGroupId = null;

        /**
         * 子合同ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

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
        this.FlowGroupId = 'FlowGroupId' in params ? params.FlowGroupId : null;
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCreateMultiFlowSignQRCode返回参数结构体
 * @class
 */
class ChannelCreateMultiFlowSignQRCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署二维码对象
         * @type {SignQrCode || null}
         */
        this.QrCode = null;

        /**
         * 签署链接对象
         * @type {SignUrl || null}
         */
        this.SignUrls = null;

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

        if (params.QrCode) {
            let obj = new SignQrCode();
            obj.deserialize(params.QrCode)
            this.QrCode = obj;
        }

        if (params.SignUrls) {
            let obj = new SignUrl();
            obj.deserialize(params.SignUrls)
            this.SignUrls = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署人个性化能力信息
 * @class
 */
class ApproverOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否隐藏一键签署 false-不隐藏,默认 true-隐藏
         * @type {boolean || null}
         */
        this.HideOneKeySign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HideOneKeySign = 'HideOneKeySign' in params ? params.HideOneKeySign : null;

    }
}

/**
 * ChannelCreateBoundFlows返回参数结构体
 * @class
 */
class ChannelCreateBoundFlowsResponse extends  AbstractModel {
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
 * 合作企业经办人列表信息
 * @class
 */
class ProxyOrganizationOperator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应Agent-ProxyOperator-OpenId。渠道平台自定义，对渠道子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要渠道平台保存），最大64位字符串
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 经办人姓名，最大长度50个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 经办人身份证件类型
1.ID_CARD 居民身份证
2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 经办人证件号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 经办人手机号，大陆手机号输入11位，暂不支持海外手机号。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

    }
}

/**
 * ModifyExtendedService返回参数结构体
 * @class
 */
class ModifyExtendedServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作跳转链接，有效期24小时
若操作时没有返回跳转链接，表示无需跳转操作，此时会直接开通/关闭服务。

当操作类型是 OPEN 且 扩展服务类型是  AUTO_SIGN 或 DOWNLOAD_FLOW 或者 OVERSEA_SIGN 时返回操作链接，
返回的链接需要平台方自行触达超管或法人，超管或法人点击链接完成服务开通操作。
         * @type {string || null}
         */
        this.OperateUrl = null;

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
        this.OperateUrl = 'OperateUrl' in params ? params.OperateUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelGetTaskResultApi返回参数结构体
 * @class
 */
class ChannelGetTaskResultApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态，需要关注的状态
0  :NeedTranform   - 任务已提交
4  :Processing     - 文档转换中
8  :TaskEnd        - 任务处理完成
-2 :DownloadFailed - 下载失败
-6 :ProcessFailed  - 转换失败
-13:ProcessTimeout - 转换文件超时
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 状态描述，需要关注的状态
NeedTranform   - 任务已提交
Processing     - 文档转换中
TaskEnd        - 任务处理完成
DownloadFailed - 下载失败
ProcessFailed  - 转换失败
ProcessTimeout - 转换文件超时
         * @type {string || null}
         */
        this.TaskMessage = null;

        /**
         * 资源Id，也是FileId，用于文件发起使用
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 预览文件Url，有效期30分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreviewUrl = null;

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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelDeleteSealPolicies返回参数结构体
 * @class
 */
class ChannelDeleteSealPoliciesResponse extends  AbstractModel {
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
 * 此结构体 (Component) 用于描述控件属性。

在通过文件发起合同时，对应的component有三种定位方式
1. 绝对定位方式
2. 表单域(FIELD)定位方式
3. 关键字(KEYWORD)定位方式
可以参考官网说明
https://cloud.tencent.com/document/product/1323/78346#component-.E4.B8.89.E7.A7.8D.E5.AE.9A.E4.BD.8D.E6.96.B9.E5.BC.8F.E8.AF.B4.E6.98.8E
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控件编号

CreateFlowByTemplates发起合同时优先以ComponentId（不为空）填充；否则以ComponentName填充

注：
当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。
例：
当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。

创建控件时，此值为空
查询时返回完整结构
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件，输入文本字符串；
MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；
CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；
FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；
DYNAMIC_TABLE - 动态表格控件；
ATTACHMENT - 附件控件,ComponentValue 填写福建图片的资源 ID列表，以逗号分割；
SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；
DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；
DISTRICT - 省市区行政区划控件，ComponentValue填写省市区行政区划字符串内容；

如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；
SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight
SIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认;
SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。

表单域的控件不能作为印章和签名控件
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 控件简称，不能超过30个字符
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 定义控件是否为必填项，默认为false
         * @type {boolean || null}
         */
        this.ComponentRequired = null;

        /**
         * 控件关联的签署方id
         * @type {string || null}
         */
        this.ComponentRecipientId = null;

        /**
         * 控件所属文件的序号 (文档中文件的排列序号，从0开始)
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * 控件生成的方式：
NORMAL - 普通控件
FIELD - 表单域
KEYWORD - 关键字
         * @type {string || null}
         */
        this.GenerateMode = null;

        /**
         * 参数控件宽度，默认100，单位px
表单域和关键字转换控件不用填
         * @type {number || null}
         */
        this.ComponentWidth = null;

        /**
         * 参数控件高度，默认100，单位px
表单域和关键字转换控件不用填
         * @type {number || null}
         */
        this.ComponentHeight = null;

        /**
         * 参数控件所在页码，从1开始
         * @type {number || null}
         */
        this.ComponentPage = null;

        /**
         * 参数控件X位置，单位px
         * @type {number || null}
         */
        this.ComponentPosX = null;

        /**
         * 参数控件Y位置，单位px
         * @type {number || null}
         */
        this.ComponentPosY = null;

        /**
         * 参数控件样式，json格式表述

不同类型的控件会有部分非通用参数

TEXT/MULTI_LINE_TEXT控件可以指定
1 Font：目前只支持黑体、宋体
2 FontSize： 范围12-72
3 FontAlign： Left/Right/Center，左对齐/居中/右对齐
例如：{"FontSize":12}

ComponentType为FILL_IMAGE时，支持以下参数：
NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中
FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放

ComponentType为SIGN_SIGNATURE类型可以控制签署方式
{“ComponentTypeLimit”: [“xxx”]}
xxx可以为：
HANDWRITE – 手写签名
BORDERLESS_ESIGN – 自动生成无边框腾讯体
OCR_ESIGN -- AI智能识别手写签名
ESIGN -- 个人印章类型
如：{“ComponentTypeLimit”: [“BORDERLESS_ESIGN”]}
         * @type {string || null}
         */
        this.ComponentExtra = null;

        /**
         * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DATE - 默认是格式化为xxxx年xx月xx日
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
SIGN_SEAL - 印章ID
SIGN_PAGING_SEAL - 可以指定印章ID

控件值约束说明：
企业全称控件：
  约束：企业名称中文字符中文括号
  检查正则表达式：/^[\u3400-\u4dbf\u4e00-\u9fa5（）]+$/

统一社会信用代码控件：
  检查正则表达式：/^[A-Z0-9]{1,18}$/

法人名称控件：
  约束：最大50个字符，2到25个汉字或者1到50个字母
  检查正则表达式：/^([\u3400-\u4dbf\u4e00-\u9fa5.·]{2,25}|[a-zA-Z·,\s-]{1,50})$/

签署意见控件：
  约束：签署意见最大长度为50字符

签署人手机号控件：
  约束：国内手机号 13,14,15,16,17,18,19号段长度11位

签署人身份证控件：
  约束：合法的身份证号码检查

控件名称：
  约束：控件名称最大长度为20字符

单行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

多行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

勾选框控件：
  约束：选择填字符串true，不选填字符串false

选择器控件：
  约束：同单行文本控件约束，填写选择值中的字符串

数字控件：
  约束：请输入有效的数字(可带小数点) 
  检查正则表达式：/^(-|\+)?\d+(\.\d+)?$/

日期控件：
  约束：格式：yyyy年mm月dd日

附件控件：
  约束：JPG或PNG图片，上传数量限制，1到6个，最大6个附件

图片控件：
  约束：JPG或PNG图片，填写上传的图片资源ID

邮箱控件：
  约束：请输入有效的邮箱地址, w3c标准
  检查正则表达式：/^([A-Za-z0-9_\-.!#$%&])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  参考：https://emailregex.com/

地址控件：
  同单行文本控件约束

省市区控件：
  同单行文本控件约束

性别控件：
  同单行文本控件约束，填写选择值中的字符串

学历控件：
  同单行文本控件约束，填写选择值中的字符串
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 日期签署控件的字号，默认为 12

签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小
         * @type {number || null}
         */
        this.ComponentDateFontSize = null;

        /**
         * 控件所属文档的Id, 模块相关接口为空值
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 控件描述，不能超过30个字符
         * @type {string || null}
         */
        this.ComponentDescription = null;

        /**
         * 指定关键字时横坐标偏移量，单位pt
         * @type {number || null}
         */
        this.OffsetX = null;

        /**
         * 指定关键字时纵坐标偏移量，单位pt
         * @type {number || null}
         */
        this.OffsetY = null;

        /**
         * 渠道控件ID。
如果不为空，属于渠道预设控件；
         * @type {string || null}
         */
        this.ChannelComponentId = null;

        /**
         * 指定关键字排序规则，Positive-正序，Reverse-倒序。传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。
传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。
         * @type {string || null}
         */
        this.KeywordOrder = null;

        /**
         * 指定关键字页码，可选参数，指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来
         * @type {number || null}
         */
        this.KeywordPage = null;

        /**
         * 关键字位置模式，Middle-居中，Below-正下方，Right-正右方，LowerRight-右上角，UpperRight-右下角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方
         * @type {string || null}
         */
        this.RelativeLocation = null;

        /**
         * 关键字索引，可选参数，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。示例[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
         * @type {Array.<number> || null}
         */
        this.KeywordIndexes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentRequired = 'ComponentRequired' in params ? params.ComponentRequired : null;
        this.ComponentRecipientId = 'ComponentRecipientId' in params ? params.ComponentRecipientId : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.GenerateMode = 'GenerateMode' in params ? params.GenerateMode : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.ComponentExtra = 'ComponentExtra' in params ? params.ComponentExtra : null;
        this.ComponentValue = 'ComponentValue' in params ? params.ComponentValue : null;
        this.ComponentDateFontSize = 'ComponentDateFontSize' in params ? params.ComponentDateFontSize : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.ComponentDescription = 'ComponentDescription' in params ? params.ComponentDescription : null;
        this.OffsetX = 'OffsetX' in params ? params.OffsetX : null;
        this.OffsetY = 'OffsetY' in params ? params.OffsetY : null;
        this.ChannelComponentId = 'ChannelComponentId' in params ? params.ChannelComponentId : null;
        this.KeywordOrder = 'KeywordOrder' in params ? params.KeywordOrder : null;
        this.KeywordPage = 'KeywordPage' in params ? params.KeywordPage : null;
        this.RelativeLocation = 'RelativeLocation' in params ? params.RelativeLocation : null;
        this.KeywordIndexes = 'KeywordIndexes' in params ? params.KeywordIndexes : null;

    }
}

/**
 * GetDownloadFlowUrl请求参数结构体
 * @class
 */
class GetDownloadFlowUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 文件夹数组，签署流程总数不能超过50个，一个文件夹下，不能超过20个签署流程
         * @type {Array.<DownloadFlowInfo> || null}
         */
        this.DownLoadFlows = null;

        /**
         * 操作者的信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.DownLoadFlows) {
            this.DownLoadFlows = new Array();
            for (let z in params.DownLoadFlows) {
                let obj = new DownloadFlowInfo();
                obj.deserialize(params.DownLoadFlows[z]);
                this.DownLoadFlows.push(obj);
            }
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelBatchCancelFlows请求参数结构体
 * @class
 */
class ChannelBatchCancelFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 签署流程Id数组，最多100个，超过100不处理
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 撤销理由
         * @type {string || null}
         */
        this.CancelMessage = null;

        /**
         * 撤销理由自定义格式；选项：
0 默认格式
1 只保留身份信息：展示为【发起方】
2 保留身份信息+企业名称：展示为【发起方xxx公司】
3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】
         * @type {number || null}
         */
        this.CancelMessageFormat = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.CancelMessage = 'CancelMessage' in params ? params.CancelMessage : null;
        this.CancelMessageFormat = 'CancelMessageFormat' in params ? params.CancelMessageFormat : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ChannelUpdateSealStatus请求参数结构体
 * @class
 */
class ChannelUpdateSealStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作的印章状态，DISABLE-停用印章
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 更新印章状态原因说明
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SealId = 'SealId' in params ? params.SealId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * 一码多扫签署二维码签署信息
 * @class
 */
class SignUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序签署链接
         * @type {string || null}
         */
        this.AppSignUrl = null;

        /**
         * 签署链接有效时间
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 移动端签署链接
         * @type {string || null}
         */
        this.HttpSignUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppSignUrl = 'AppSignUrl' in params ? params.AppSignUrl : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.HttpSignUrl = 'HttpSignUrl' in params ? params.HttpSignUrl : null;

    }
}

/**
 * ChannelCancelFlow请求参数结构体
 * @class
 */
class ChannelCancelFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 撤回原因，最大不超过200字符
         * @type {string || null}
         */
        this.CancelMessage = null;

        /**
         * 撤销理由自定义格式；选项：
0 默认格式
1 只保留身份信息：展示为【发起方】
2 保留身份信息+企业名称：展示为【发起方xxx公司】
3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】
         * @type {number || null}
         */
        this.CancelMessageFormat = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.CancelMessage = 'CancelMessage' in params ? params.CancelMessage : null;
        this.CancelMessageFormat = 'CancelMessageFormat' in params ? params.CancelMessageFormat : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * DescribeTemplates请求参数结构体
 * @class
 */
class DescribeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 模板唯一标识，查询单个模板时使用
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 查询内容：0-模板列表及详情（默认），1-仅模板列表
         * @type {number || null}
         */
        this.ContentType = null;

        /**
         * 查询个数，默认20，最大100；在查询列表的时候有效
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询偏移位置，默认0；在查询列表的时候有效
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否返回所有组件信息。默认false，只返回发起方控件；true，返回所有签署方控件
         * @type {boolean || null}
         */
        this.QueryAllComponents = null;

        /**
         * 模糊搜索模板名称，最大长度200
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 是否获取模板预览链接
         * @type {boolean || null}
         */
        this.WithPreviewUrl = null;

        /**
         * 是否获取模板的PDF文件链接-渠道版需要开启白名单时才能使用。
         * @type {boolean || null}
         */
        this.WithPdfUrl = null;

        /**
         * 渠道模板ID
         * @type {string || null}
         */
        this.ChannelTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.QueryAllComponents = 'QueryAllComponents' in params ? params.QueryAllComponents : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.WithPreviewUrl = 'WithPreviewUrl' in params ? params.WithPreviewUrl : null;
        this.WithPdfUrl = 'WithPdfUrl' in params ? params.WithPdfUrl : null;
        this.ChannelTemplateId = 'ChannelTemplateId' in params ? params.ChannelTemplateId : null;

    }
}

/**
 * ChannelCreateSealPolicy请求参数结构体
 * @class
 */
class ChannelCreateSealPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 指定印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 指定待授权的用户ID数组
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 企业机构信息，不用传
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

        /**
         * 操作人（用户）信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 持有的电子印章信息
 * @class
 */
class OccupiedSeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子印章编号
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 电子印章授权时间戳
         * @type {number || null}
         */
        this.CreateOn = null;

        /**
         * 电子印章授权人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 电子印章策略Id
         * @type {string || null}
         */
        this.SealPolicyId = null;

        /**
         * 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止）
         * @type {string || null}
         */
        this.SealStatus = null;

        /**
         * 审核失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 印章图片url，5分钟内有效
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 印章类型
         * @type {string || null}
         */
        this.SealType = null;

        /**
         * 用印申请是否为永久授权
         * @type {boolean || null}
         */
        this.IsAllTime = null;

        /**
         * 授权人列表
         * @type {Array.<AuthorizedUser> || null}
         */
        this.AuthorizedUsers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.CreateOn = 'CreateOn' in params ? params.CreateOn : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.SealPolicyId = 'SealPolicyId' in params ? params.SealPolicyId : null;
        this.SealStatus = 'SealStatus' in params ? params.SealStatus : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SealType = 'SealType' in params ? params.SealType : null;
        this.IsAllTime = 'IsAllTime' in params ? params.IsAllTime : null;

        if (params.AuthorizedUsers) {
            this.AuthorizedUsers = new Array();
            for (let z in params.AuthorizedUsers) {
                let obj = new AuthorizedUser();
                obj.deserialize(params.AuthorizedUsers[z]);
                this.AuthorizedUsers.push(obj);
            }
        }

    }
}

/**
 * CreateFlowsByTemplates请求参数结构体
 * @class
 */
class CreateFlowsByTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 多个合同（签署流程）信息，最多支持20个
         * @type {Array.<FlowInfo> || null}
         */
        this.FlowInfos = null;

        /**
         * 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，不会发起合同，会返回PreviewUrls；
预览链接有效期300秒；
同时，如果预览的文件中指定了动态表格控件，需要进行异步合成；此时此接口返回的是合成前的文档预览链接，而合成完成后的文档预览链接会通过：回调通知的方式、或使用返回的TaskInfo中的TaskId通过ChannelGetTaskResultApi接口查询；
         * @type {boolean || null}
         */
        this.NeedPreview = null;

        /**
         * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
         * @type {number || null}
         */
        this.PreviewType = null;

        /**
         * 操作者的信息，不用传
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.FlowInfos) {
            this.FlowInfos = new Array();
            for (let z in params.FlowInfos) {
                let obj = new FlowInfo();
                obj.deserialize(params.FlowInfos[z]);
                this.FlowInfos.push(obj);
            }
        }
        this.NeedPreview = 'NeedPreview' in params ? params.NeedPreview : null;
        this.PreviewType = 'PreviewType' in params ? params.PreviewType : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 用量明细
 * @class
 */
class UsageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道侧合作企业唯一标识
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

        /**
         * 渠道侧合作企业名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 日期，当需要汇总数据时日期为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 消耗数量
         * @type {number || null}
         */
        this.Usage = null;

        /**
         * 撤回数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cancel = null;

        /**
         * 消耗渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Cancel = 'Cancel' in params ? params.Cancel : null;
        this.FlowChannel = 'FlowChannel' in params ? params.FlowChannel : null;

    }
}

/**
 * ChannelCreateBatchCancelFlowUrl返回参数结构体
 * @class
 */
class ChannelCreateBatchCancelFlowUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量撤销url
         * @type {string || null}
         */
        this.BatchCancelFlowUrl = null;

        /**
         * 签署流程批量撤销失败原因
         * @type {Array.<string> || null}
         */
        this.FailMessages = null;

        /**
         * 签署撤销url过期时间-年月日-时分秒
         * @type {string || null}
         */
        this.UrlExpireOn = null;

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
        this.BatchCancelFlowUrl = 'BatchCancelFlowUrl' in params ? params.BatchCancelFlowUrl : null;
        this.FailMessages = 'FailMessages' in params ? params.FailMessages : null;
        this.UrlExpireOn = 'UrlExpireOn' in params ? params.UrlExpireOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OperateChannelTemplate请求参数结构体
 * @class
 */
class OperateChannelTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作类型，查询:"SELECT"，删除:"DELETE"，更新:"UPDATE"
         * @type {string || null}
         */
        this.OperateType = null;

        /**
         * 渠道方模板库模板唯一标识
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 合作企业方第三方机构唯一标识数据，支持多个， 用","进行分隔
         * @type {string || null}
         */
        this.ProxyOrganizationOpenIds = null;

        /**
         * 模板可见性, 全部可见-"all", 部分可见-"part"
         * @type {string || null}
         */
        this.AuthTag = null;

        /**
         * 暂未开放
         * @type {UserInfo || null}
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.OperateType = 'OperateType' in params ? params.OperateType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.ProxyOrganizationOpenIds = 'ProxyOrganizationOpenIds' in params ? params.ProxyOrganizationOpenIds : null;
        this.AuthTag = 'AuthTag' in params ? params.AuthTag : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * CreateChannelFlowEvidenceReport返回参数结构体
 * @class
 */
class CreateChannelFlowEvidenceReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出证报告 ID，用于查询出证报告接口DescribeChannelFlowEvidenceReport时用到
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportId = null;

        /**
         * 执行中：EvidenceStatusExecuting
成功：EvidenceStatusSuccess
失败：EvidenceStatusFailed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 废除，字段无效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportUrl = null;

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
        this.ReportId = 'ReportId' in params ? params.ReportId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 同步经办人失败原因
 * @class
 */
class SyncFailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经办人Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 失败原因
例如：Id不符合规范、证件号码不合法等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ChannelDescribeEmployees返回参数结构体
 * @class
 */
class ChannelDescribeEmployeesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Staff> || null}
         */
        this.Employees = null;

        /**
         * 偏移量，默认为0，最大为20000
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，最大为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 符合条件的员工数量
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

        if (params.Employees) {
            this.Employees = new Array();
            for (let z in params.Employees) {
                let obj = new Staff();
                obj.deserialize(params.Employees[z]);
                this.Employees.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelCreateReleaseFlow返回参数结构体
 * @class
 */
class ChannelCreateReleaseFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解除协议流程编号
         * @type {string || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChannelFlowEvidenceReport返回参数结构体
 * @class
 */
class DescribeChannelFlowEvidenceReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出证报告 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 执行中：EvidenceStatusExecuting
成功：EvidenceStatusSuccess
失败：EvidenceStatusFailed
         * @type {string || null}
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
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChannelUpdateSealStatus返回参数结构体
 * @class
 */
class ChannelUpdateSealStatusResponse extends  AbstractModel {
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
 * ChannelCreateFlowSignUrl请求参数结构体
 * @class
 */
class ChannelCreateFlowSignUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程签署人，其中Name和Mobile必传，其他可不传，ApproverType目前只支持PERSON类型的签署人，如果不传默认为该值。还需注意签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApproverInfos = null;

        /**
         * 用户信息，暂未开放
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 机构信息，暂未开放
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.FlowApproverInfos) {
            this.FlowApproverInfos = new Array();
            for (let z in params.FlowApproverInfos) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.FlowApproverInfos[z]);
                this.FlowApproverInfos.push(obj);
            }
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

    }
}

/**
 * DescribeExtendedServiceAuthInfo返回参数结构体
 * @class
 */
class DescribeExtendedServiceAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业扩展服务授权信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExtentServiceAuthInfo> || null}
         */
        this.AuthInfo = null;

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

        if (params.AuthInfo) {
            this.AuthInfo = new Array();
            for (let z in params.AuthInfo) {
                let obj = new ExtentServiceAuthInfo();
                obj.deserialize(params.AuthInfo[z]);
                this.AuthInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 抄送信息
 * @class
 */
class CcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被抄送人手机号，大陆11位手机号
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
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

    }
}

module.exports = {
    SyncProxyOrganizationResponse: SyncProxyOrganizationResponse,
    ChannelCreateConvertTaskApiResponse: ChannelCreateConvertTaskApiResponse,
    ChannelCreateFlowRemindsResponse: ChannelCreateFlowRemindsResponse,
    ChannelDeleteSealPoliciesRequest: ChannelDeleteSealPoliciesRequest,
    ChannelBatchCancelFlowsResponse: ChannelBatchCancelFlowsResponse,
    Department: Department,
    ChannelCreateFlowSignReviewRequest: ChannelCreateFlowSignReviewRequest,
    AuthFailMessage: AuthFailMessage,
    DescribeFlowDetailInfoRequest: DescribeFlowDetailInfoRequest,
    ModifyExtendedServiceRequest: ModifyExtendedServiceRequest,
    DescribeResourceUrlsByFlowsRequest: DescribeResourceUrlsByFlowsRequest,
    RemindFlowRecords: RemindFlowRecords,
    ChannelCreateFlowSignUrlResponse: ChannelCreateFlowSignUrlResponse,
    CreateSealByImageResponse: CreateSealByImageResponse,
    OperateChannelTemplateResponse: OperateChannelTemplateResponse,
    FlowFileInfo: FlowFileInfo,
    CreateConsoleLoginUrlResponse: CreateConsoleLoginUrlResponse,
    SyncProxyOrganizationRequest: SyncProxyOrganizationRequest,
    CreateSealByImageRequest: CreateSealByImageRequest,
    ChannelCreateFlowRemindsRequest: ChannelCreateFlowRemindsRequest,
    ChannelCreateSealPolicyResponse: ChannelCreateSealPolicyResponse,
    ChannelCancelFlowResponse: ChannelCancelFlowResponse,
    DownloadFlowInfo: DownloadFlowInfo,
    FlowApproverUrlInfo: FlowApproverUrlInfo,
    ChannelCreateConvertTaskApiRequest: ChannelCreateConvertTaskApiRequest,
    ChannelCreateFlowByFilesRequest: ChannelCreateFlowByFilesRequest,
    Agent: Agent,
    FlowApproverDetail: FlowApproverDetail,
    RelieveInfo: RelieveInfo,
    ChannelCreateFlowGroupByFilesRequest: ChannelCreateFlowGroupByFilesRequest,
    DescribeFlowDetailInfoResponse: DescribeFlowDetailInfoResponse,
    ResourceUrlInfo: ResourceUrlInfo,
    FlowApproverInfo: FlowApproverInfo,
    PrepareFlowsResponse: PrepareFlowsResponse,
    TemplateInfo: TemplateInfo,
    GetDownloadFlowUrlResponse: GetDownloadFlowUrlResponse,
    Recipient: Recipient,
    DescribeTemplatesResponse: DescribeTemplatesResponse,
    StaffRole: StaffRole,
    ChannelVerifyPdfRequest: ChannelVerifyPdfRequest,
    CreateChannelFlowEvidenceReportRequest: CreateChannelFlowEvidenceReportRequest,
    ChannelVerifyPdfResponse: ChannelVerifyPdfResponse,
    CreateConsoleLoginUrlRequest: CreateConsoleLoginUrlRequest,
    OrganizationInfo: OrganizationInfo,
    PdfVerifyResult: PdfVerifyResult,
    ChannelCancelMultiFlowSignQRCodeRequest: ChannelCancelMultiFlowSignQRCodeRequest,
    UploadFilesRequest: UploadFilesRequest,
    ChannelDescribeOrganizationSealsRequest: ChannelDescribeOrganizationSealsRequest,
    DescribeUsageRequest: DescribeUsageRequest,
    DescribeExtendedServiceAuthInfoRequest: DescribeExtendedServiceAuthInfoRequest,
    FormField: FormField,
    FlowInfo: FlowInfo,
    UserInfo: UserInfo,
    TaskInfo: TaskInfo,
    DescribeUsageResponse: DescribeUsageResponse,
    Staff: Staff,
    ChannelCreateBoundFlowsRequest: ChannelCreateBoundFlowsRequest,
    ChannelDescribeEmployeesRequest: ChannelDescribeEmployeesRequest,
    AuthorizedUser: AuthorizedUser,
    DescribeResourceUrlsByFlowsResponse: DescribeResourceUrlsByFlowsResponse,
    SyncProxyOrganizationOperatorsRequest: SyncProxyOrganizationOperatorsRequest,
    CreateSignUrlsRequest: CreateSignUrlsRequest,
    ChannelCreateMultiFlowSignQRCodeRequest: ChannelCreateMultiFlowSignQRCodeRequest,
    SignQrCode: SignQrCode,
    ChannelGetTaskResultApiRequest: ChannelGetTaskResultApiRequest,
    FlowDetailInfo: FlowDetailInfo,
    CreateFlowsByTemplatesResponse: CreateFlowsByTemplatesResponse,
    DescribeChannelFlowEvidenceReportRequest: DescribeChannelFlowEvidenceReportRequest,
    SyncProxyOrganizationOperatorsResponse: SyncProxyOrganizationOperatorsResponse,
    SignUrlInfo: SignUrlInfo,
    FlowResourceUrlInfo: FlowResourceUrlInfo,
    UploadFile: UploadFile,
    ExtentServiceAuthInfo: ExtentServiceAuthInfo,
    Filter: Filter,
    ReleasedApprover: ReleasedApprover,
    CreateSignUrlsResponse: CreateSignUrlsResponse,
    UploadFilesResponse: UploadFilesResponse,
    ChannelCreateBatchCancelFlowUrlRequest: ChannelCreateBatchCancelFlowUrlRequest,
    ApproverRestriction: ApproverRestriction,
    PrepareFlowsRequest: PrepareFlowsRequest,
    ChannelCreateFlowByFilesResponse: ChannelCreateFlowByFilesResponse,
    ChannelCreateFlowSignReviewResponse: ChannelCreateFlowSignReviewResponse,
    ChannelDescribeOrganizationSealsResponse: ChannelDescribeOrganizationSealsResponse,
    ChannelCancelMultiFlowSignQRCodeResponse: ChannelCancelMultiFlowSignQRCodeResponse,
    ChannelCreateReleaseFlowRequest: ChannelCreateReleaseFlowRequest,
    ChannelCreateFlowGroupByFilesResponse: ChannelCreateFlowGroupByFilesResponse,
    ChannelCreateMultiFlowSignQRCodeResponse: ChannelCreateMultiFlowSignQRCodeResponse,
    ApproverOption: ApproverOption,
    ChannelCreateBoundFlowsResponse: ChannelCreateBoundFlowsResponse,
    ProxyOrganizationOperator: ProxyOrganizationOperator,
    ModifyExtendedServiceResponse: ModifyExtendedServiceResponse,
    ChannelGetTaskResultApiResponse: ChannelGetTaskResultApiResponse,
    ChannelDeleteSealPoliciesResponse: ChannelDeleteSealPoliciesResponse,
    Component: Component,
    GetDownloadFlowUrlRequest: GetDownloadFlowUrlRequest,
    ChannelBatchCancelFlowsRequest: ChannelBatchCancelFlowsRequest,
    ChannelUpdateSealStatusRequest: ChannelUpdateSealStatusRequest,
    SignUrl: SignUrl,
    ChannelCancelFlowRequest: ChannelCancelFlowRequest,
    DescribeTemplatesRequest: DescribeTemplatesRequest,
    ChannelCreateSealPolicyRequest: ChannelCreateSealPolicyRequest,
    OccupiedSeal: OccupiedSeal,
    CreateFlowsByTemplatesRequest: CreateFlowsByTemplatesRequest,
    UsageDetail: UsageDetail,
    ChannelCreateBatchCancelFlowUrlResponse: ChannelCreateBatchCancelFlowUrlResponse,
    OperateChannelTemplateRequest: OperateChannelTemplateRequest,
    CreateChannelFlowEvidenceReportResponse: CreateChannelFlowEvidenceReportResponse,
    SyncFailReason: SyncFailReason,
    ChannelDescribeEmployeesResponse: ChannelDescribeEmployeesResponse,
    ChannelCreateReleaseFlowResponse: ChannelCreateReleaseFlowResponse,
    DescribeChannelFlowEvidenceReportResponse: DescribeChannelFlowEvidenceReportResponse,
    ChannelUpdateSealStatusResponse: ChannelUpdateSealStatusResponse,
    ChannelCreateFlowSignUrlRequest: ChannelCreateFlowSignUrlRequest,
    DescribeExtendedServiceAuthInfoResponse: DescribeExtendedServiceAuthInfoResponse,
    CcInfo: CcInfo,

}
