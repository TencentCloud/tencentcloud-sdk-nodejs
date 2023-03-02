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
 * CancelFlow返回参数结构体
 * @class
 */
class CancelFlowResponse extends  AbstractModel {
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
 * DescribeFlowEvidenceReport请求参数结构体
 * @class
 */
class DescribeFlowEvidenceReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 出证报告编号
         * @type {string || null}
         */
        this.ReportId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.ReportId = 'ReportId' in params ? params.ReportId : null;

    }
}

/**
 * 集成版员工部门信息
 * @class
 */
class Department extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部门id
         * @type {string || null}
         */
        this.DepartmentId = null;

        /**
         * 部门名称
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
 * CreateSchemeUrl请求参数结构体
 * @class
 */
class CreateSchemeUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 姓名,最大长度50个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号，大陆手机号11位
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 链接类型
HTTP：跳转电子签小程序的http_url，
APP：第三方APP或小程序跳转电子签小程序的path。
默认为HTTP类型
         * @type {string || null}
         */
        this.EndPoint = null;

        /**
         * 签署流程编号 (PathType=1时必传)
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 跳转页面 1: 小程序合同详情 2: 小程序合同列表页 0: 不传, 默认主页
         * @type {number || null}
         */
        this.PathType = null;

        /**
         * 是否自动回跳 true：是， false：否。该参数只针对"APP" 类型的签署链接有效
         * @type {boolean || null}
         */
        this.AutoJumpBack = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.EndPoint = 'EndPoint' in params ? params.EndPoint : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.PathType = 'PathType' in params ? params.PathType : null;
        this.AutoJumpBack = 'AutoJumpBack' in params ? params.AutoJumpBack : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * 二期接口返回的模板中文件的信息结构
 * @class
 */
class FileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件Id
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件大小，单位为Byte
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件上传时间，10位时间戳（精确到秒）
         * @type {number || null}
         */
        this.CreatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

    }
}

/**
 * CreateFlowApprovers返回参数结构体
 * @class
 */
class CreateFlowApproversResponse extends  AbstractModel {
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
 * DescribeIntegrationMainOrganizationUser请求参数结构体
 * @class
 */
class DescribeIntegrationMainOrganizationUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息，userId必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * ModifyApplicationCallbackInfo返回参数结构体
 * @class
 */
class ModifyApplicationCallbackInfoResponse extends  AbstractModel {
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
 * CreateMultiFlowSignQRCode返回参数结构体
 * @class
 */
class CreateMultiFlowSignQRCodeResponse extends  AbstractModel {
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
 * 创建流程的签署方信息
 * @class
 */
class FlowCreateApprover extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。
         * @type {number || null}
         */
        this.ApproverType = null;

        /**
         * 如果签署方为企业，需要填入企业全称
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 签署方经办人姓名
         * @type {string || null}
         */
        this.ApproverName = null;

        /**
         * 签署方经办人手机号码
         * @type {string || null}
         */
        this.ApproverMobile = null;

        /**
         * 签署方经办人证件类型ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
         * @type {string || null}
         */
        this.ApproverIdCardType = null;

        /**
         * 签署方经办人证件号码
         * @type {string || null}
         */
        this.ApproverIdCardNumber = null;

        /**
         * 签署方经办人在模板中的角色ID
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 签署意愿确认渠道,WEIXINAPP:人脸识别
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

        /**
         * 是否发送短信，sms--短信通知，none--不通知，默认为sms；发起方=签署方时不发送短信
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * 签署前置条件：是否需要阅读全文，默认为不需要
         * @type {boolean || null}
         */
        this.IsFullText = null;

        /**
         * 签署前置条件：阅读时长限制，单位秒，默认为不需要
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 当前只支持true，默认为true
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * 签署人用户来源,企微侧用户请传入：WEWORKAPP
         * @type {string || null}
         */
        this.ApproverSource = null;

        /**
         * 客户自定义签署人标识，64位长度，保证唯一。非企微场景不使用此字段
         * @type {string || null}
         */
        this.CustomApproverTag = null;

        /**
         * 快速注册相关信息，目前暂未开放！
         * @type {RegisterInfo || null}
         */
        this.RegisterInfo = null;

        /**
         * 签署人个性化能力值
         * @type {ApproverOption || null}
         */
        this.ApproverOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.ApproverName = 'ApproverName' in params ? params.ApproverName : null;
        this.ApproverMobile = 'ApproverMobile' in params ? params.ApproverMobile : null;
        this.ApproverIdCardType = 'ApproverIdCardType' in params ? params.ApproverIdCardType : null;
        this.ApproverIdCardNumber = 'ApproverIdCardNumber' in params ? params.ApproverIdCardNumber : null;
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.IsFullText = 'IsFullText' in params ? params.IsFullText : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.ApproverSource = 'ApproverSource' in params ? params.ApproverSource : null;
        this.CustomApproverTag = 'CustomApproverTag' in params ? params.CustomApproverTag : null;

        if (params.RegisterInfo) {
            let obj = new RegisterInfo();
            obj.deserialize(params.RegisterInfo)
            this.RegisterInfo = obj;
        }

        if (params.ApproverOption) {
            let obj = new ApproverOption();
            obj.deserialize(params.ApproverOption)
            this.ApproverOption = obj;
        }

    }
}

/**
 * DescribeThirdPartyAuthCode返回参数结构体
 * @class
 */
class DescribeThirdPartyAuthCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名
         * @type {string || null}
         */
        this.VerifyStatus = null;

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
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntegrationEmployees请求参数结构体
 * @class
 */
class CreateIntegrationEmployeesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息，userId必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 待创建员工的信息，Mobile和DisplayName必填
         * @type {Array.<Staff> || null}
         */
        this.Employees = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Employees) {
            this.Employees = new Array();
            for (let z in params.Employees) {
                let obj = new Staff();
                obj.deserialize(params.Employees[z]);
                this.Employees.push(obj);
            }
        }

    }
}

/**
 * CreateFlowEvidenceReport请求参数结构体
 * @class
 */
class CreateFlowEvidenceReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * StartFlow返回参数结构体
 * @class
 */
class StartFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回描述，START-发起成功， REVIEW-提交审核成功，EXECUTING-已提交发起任务
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集成版企业角色信息
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
 * 签署链接信息
 * @class
 */
class FlowApproverUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署链接，注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignUrl = null;

        /**
         * 签署人手机号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproverMobile = null;

        /**
         * 签署人姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproverName = null;

        /**
         * 签署人类型 1-个人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.ApproverMobile = 'ApproverMobile' in params ? params.ApproverMobile : null;
        this.ApproverName = 'ApproverName' in params ? params.ApproverName : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;

    }
}

/**
 * CreateConvertTaskApi请求参数结构体
 * @class
 */
class CreateConvertTaskApiRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 应用号信息
         * @type {Agent || null}
         */
        this.Agent = null;

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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

    }
}

/**
 * CreateFlowReminds返回参数结构体
 * @class
 */
class CreateFlowRemindsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署连接过期时间字符串：年月日-时分秒
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
 * DescribeOrganizationGroupOrganizations请求参数结构体
 * @class
 */
class DescribeOrganizationGroupOrganizationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息，userId必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 单次查询成员企业最大返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页面偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询成员企业的企业名，模糊匹配
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 成员企业加入集团的当前状态:1-待授权;2-已授权待激活;3-拒绝授权;4-已解除;5-已加入
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否到处当前成员企业数据
         * @type {boolean || null}
         */
        this.Export = null;

        /**
         * 成员企业id
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Export = 'Export' in params ? params.Export : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 代理相关应用信息，如集团主企业代子企业操作
 * @class
 */
class Agent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理机构的应用编号,32位字符串，一般不用传
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 被代理机构的应用号，一般不用传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyAppId = null;

        /**
         * 被代理机构在电子签平台的机构编号，集团代理下场景必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyOrganizationId = null;

        /**
         * 被代理机构的经办人，一般不用传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyOperator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProxyAppId = 'ProxyAppId' in params ? params.ProxyAppId : null;
        this.ProxyOrganizationId = 'ProxyOrganizationId' in params ? params.ProxyOrganizationId : null;
        this.ProxyOperator = 'ProxyOperator' in params ? params.ProxyOperator : null;

    }
}

/**
 * 签署人详情信息
 * @class
 */
class FlowApproverDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveMessage = null;

        /**
         * 签署人名字
         * @type {string || null}
         */
        this.ApproveName = null;

        /**
         * 签署人的状态
0：还没有发起
1：流程中 没有开始处理
2：待处理
3：签署态
4：拒绝态
5：过期没人处理
6：取消态
7：还没有预发起
8：待填写
9：因为各种原因而终止
         * @type {number || null}
         */
        this.ApproveStatus = null;

        /**
         * 模板配置时候的签署人id,与控件绑定
         * @type {string || null}
         */
        this.ReceiptId = null;

        /**
         * 客户自定义userId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomUserId = null;

        /**
         * 签署人手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署顺序
         * @type {number || null}
         */
        this.SignOrder = null;

        /**
         * 签署人签署时间
         * @type {number || null}
         */
        this.ApproveTime = null;

        /**
         * 参与者类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveType = null;

        /**
         * 签署人侧用户来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproverSource = null;

        /**
         * 客户自定义签署人标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomApproverTag = null;

        /**
         * 签署人企业Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationId = null;

        /**
         * 签署人企业名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApproveMessage = 'ApproveMessage' in params ? params.ApproveMessage : null;
        this.ApproveName = 'ApproveName' in params ? params.ApproveName : null;
        this.ApproveStatus = 'ApproveStatus' in params ? params.ApproveStatus : null;
        this.ReceiptId = 'ReceiptId' in params ? params.ReceiptId : null;
        this.CustomUserId = 'CustomUserId' in params ? params.CustomUserId : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.SignOrder = 'SignOrder' in params ? params.SignOrder : null;
        this.ApproveTime = 'ApproveTime' in params ? params.ApproveTime : null;
        this.ApproveType = 'ApproveType' in params ? params.ApproveType : null;
        this.ApproverSource = 'ApproverSource' in params ? params.ApproverSource : null;
        this.CustomApproverTag = 'CustomApproverTag' in params ? params.CustomApproverTag : null;
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;

    }
}

/**
 * DescribeFlowTemplates请求参数结构体
 * @class
 */
class DescribeFlowTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 企业组织相关信息，一般不用填
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 查询偏移位置，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询个数，默认20，最大200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 这个参数跟下面的IsChannel参数配合使用。
IsChannel=false时，ApplicationId参数不起任何作用。
IsChannel=true时，ApplicationId为空，查询所有渠道模板列表；ApplicationId不为空，查询指定渠道下的模板列表
ApplicationId为空，查询渠道模板列表
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 默认为false，查询SaaS模板库列表；
为true，查询渠道模板库管理列表
         * @type {boolean || null}
         */
        this.IsChannel = null;

        /**
         * 暂未开放
         * @type {number || null}
         */
        this.GenerateSource = null;

        /**
         * 查询内容：0-模板列表及详情（默认），1-仅模板列表
         * @type {number || null}
         */
        this.ContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.IsChannel = 'IsChannel' in params ? params.IsChannel : null;
        this.GenerateSource = 'GenerateSource' in params ? params.GenerateSource : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * DescribeFlowEvidenceReport返回参数结构体
 * @class
 */
class DescribeFlowEvidenceReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告 URL
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
 * 二期接口返回的模板的信息结构
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
         * 模板关联的资源IDs
         * @type {Array.<string> || null}
         */
        this.DocumentResourceIds = null;

        /**
         * 返回的文件信息结构
         * @type {Array.<FileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * 附件关联的资源ID是
         * @type {Array.<string> || null}
         */
        this.AttachmentResourceIds = null;

        /**
         * 签署顺序
         * @type {Array.<number> || null}
         */
        this.SignOrder = null;

        /**
         * 签署参与者的信息
         * @type {Array.<Recipient> || null}
         */
        this.Recipients = null;

        /**
         * 模板信息结构
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 签署区模板信息结构
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 模板状态(-1:不可用；0:草稿态；1:正式态)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 模板的创建人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 模板创建的时间戳（精确到秒）
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 发起人角色信息
         * @type {Recipient || null}
         */
        this.Promoter = null;

        /**
         * 模板创建组织id
         * @type {string || null}
         */
        this.OrganizationId = null;

        /**
         * 模板预览链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * 模板版本。默认为空时，全数字字符，初始版本为yyyyMMdd001。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateVersion = null;

        /**
         * 模板是否已发布。true-已发布；false-未发布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Published = null;

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
        this.DocumentResourceIds = 'DocumentResourceIds' in params ? params.DocumentResourceIds : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new FileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }
        this.AttachmentResourceIds = 'AttachmentResourceIds' in params ? params.AttachmentResourceIds : null;
        this.SignOrder = 'SignOrder' in params ? params.SignOrder : null;

        if (params.Recipients) {
            this.Recipients = new Array();
            for (let z in params.Recipients) {
                let obj = new Recipient();
                obj.deserialize(params.Recipients[z]);
                this.Recipients.push(obj);
            }
        }

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

        if (params.Promoter) {
            let obj = new Recipient();
            obj.deserialize(params.Promoter)
            this.Promoter = obj;
        }
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.TemplateVersion = 'TemplateVersion' in params ? params.TemplateVersion : null;
        this.Published = 'Published' in params ? params.Published : null;

    }
}

/**
 * CreateDocument返回参数结构体
 * @class
 */
class CreateDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程电子文档ID
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 签署流程文件的预览地址, 5分钟内有效。仅当NeedPreview为true 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreviewFileUrl = null;

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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.PreviewFileUrl = 'PreviewFileUrl' in params ? params.PreviewFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationEmployees请求参数结构体
 * @class
 */
class DescribeIntegrationEmployeesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息，userId必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 返回最大数量，最大为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0，最大为20000
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateFlow请求参数结构体
 * @class
 */
class CreateFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程名称,最大长度200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署流程参与者信息，最大限制50方
         * @type {Array.<FlowCreateApprover> || null}
         */
        this.Approvers = null;

        /**
         * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 客户端Token，保持接口幂等性,最大长度64个字符
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 暂未开放
         * @type {string || null}
         */
        this.RelatedFlowId = null;

        /**
         * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
         * @type {number || null}
         */
        this.DeadLine = null;

        /**
         * 用户自定义字段，回调的时候会进行透传，长度需要小于20480
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 签署流程描述,最大长度1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签），请和模板中的配置保持一致
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
         * @type {string || null}
         */
        this.CustomShowMap = null;

        /**
         * 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。
若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
         * @type {boolean || null}
         */
        this.NeedSignReview = null;

        /**
         * 暂未开放
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 被抄送人的信息列表。
注: 此功能为白名单功能，若有需要，请联系电子签客服开白使用。
         * @type {Array.<CcInfo> || null}
         */
        this.CcInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FlowCreateApprover();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.RelatedFlowId = 'RelatedFlowId' in params ? params.RelatedFlowId : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.CustomShowMap = 'CustomShowMap' in params ? params.CustomShowMap : null;
        this.NeedSignReview = 'NeedSignReview' in params ? params.NeedSignReview : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.CcInfos) {
            this.CcInfos = new Array();
            for (let z in params.CcInfos) {
                let obj = new CcInfo();
                obj.deserialize(params.CcInfos[z]);
                this.CcInfos.push(obj);
            }
        }

    }
}

/**
 * 下载文件的URL信息
 * @class
 */
class FileUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载文件的URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 下载文件的附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * DescribeThirdPartyAuthCode请求参数结构体
 * @class
 */
class DescribeThirdPartyAuthCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子签小程序跳转客户小程序时携带的授权查看码
         * @type {string || null}
         */
        this.AuthCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthCode = 'AuthCode' in params ? params.AuthCode : null;

    }
}

/**
 * DescribeFlowInfo请求参数结构体
 * @class
 */
class DescribeFlowInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的流程ID列表，限制最大100个
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 调用方用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * DeleteSealPolicies返回参数结构体
 * @class
 */
class DeleteSealPoliciesResponse extends  AbstractModel {
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
 * 机构信息
 * @class
 */
class OrganizationInfo extends  AbstractModel {
    constructor(){
        super();

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ProxyIp = 'ProxyIp' in params ? params.ProxyIp : null;

    }
}

/**
 * 补充签署人信息
 * @class
 */
class FillApproverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人签署Id
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 签署人来源
WEWORKAPP: 企业微信
         * @type {string || null}
         */
        this.ApproverSource = null;

        /**
         * 企业自定义账号Id
WEWORKAPP场景下指企业自有应用获取企微明文的userid
         * @type {string || null}
         */
        this.CustomUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.ApproverSource = 'ApproverSource' in params ? params.ApproverSource : null;
        this.CustomUserId = 'CustomUserId' in params ? params.CustomUserId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 删除员工失败数据
 * @class
 */
class FailedDeleteStaffData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工在电子签的userId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 员工在第三方平台的openId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 失败原因
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

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
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;

    }
}

/**
 * CreateBatchCancelFlowUrl返回参数结构体
 * @class
 */
class CreateBatchCancelFlowUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量撤回签署流程链接
         * @type {string || null}
         */
        this.BatchCancelFlowUrl = null;

        /**
         * 签署流程撤回失败信息
         * @type {Array.<string> || null}
         */
        this.FailMessages = null;

        /**
         * 签署连接过期时间字符串：年月日-时分秒
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
 * CreateSealPolicy返回参数结构体
 * @class
 */
class CreateSealPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最终授权成功的。其他的跳过的是已经授权了的
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
 * DescribeIntegrationEmployees返回参数结构体
 * @class
 */
class DescribeIntegrationEmployeesResponse extends  AbstractModel {
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
 * 删除员工的成功数据
 * @class
 */
class SuccessDeleteStaffData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工名
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 员工手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 员工在电子签平台的id
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateConvertTaskApi返回参数结构体
 * @class
 */
class CreateConvertTaskApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转换任务Id
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
 * CreateFlowSignReview请求参数结构体
 * @class
 */
class CreateFlowSignReviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 企业内部审核结果
PASS: 通过 
REJECT: 拒绝
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
         * 应用相关信息
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.ReviewType = 'ReviewType' in params ? params.ReviewType : null;
        this.ReviewMessage = 'ReviewMessage' in params ? params.ReviewMessage : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * 创建员工的失败数据
 * @class
 */
class FailedCreateStaffData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工名
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 员工手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 失败原因
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
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * CreateFlowByFiles请求参数结构体
 * @class
 */
class CreateFlowByFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程名称,最大长度200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署参与者信息，最大限制50方
         * @type {Array.<ApproverInfo> || null}
         */
        this.Approvers = null;

        /**
         * 签署pdf文件的资源编号列表，通过UploadFiles接口获取，暂时仅支持单文件发起
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 经办人内容控件配置
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 被抄送人的信息列表。
注:此功能为白名单功能，若有需要，请联系电子签客服开白使用
         * @type {Array.<CcInfo> || null}
         */
        this.CcInfos = null;

        /**
         * 是否需要预览，true：预览模式，false：非预览（默认）；
预览链接有效期300秒；

注：如果使用“预览模式”，出参会返回合同预览链接 PreviewUrl，不会正式发起合同，且出参不会返回签署流程编号 FlowId；如果使用“非预览”，则会正常返回签署流程编号 FlowId，不会生成合同预览链接 PreviewUrl。
         * @type {boolean || null}
         */
        this.NeedPreview = null;

        /**
         * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
         * @type {number || null}
         */
        this.PreviewType = null;

        /**
         * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签）
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
         * @type {string || null}
         */
        this.CustomShowMap = null;

        /**
         * 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。
若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
         * @type {boolean || null}
         */
        this.NeedSignReview = null;

        /**
         * 用户自定义字段，回调的时候会进行透传，长度需要小于20480
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 签署人校验方式
VerifyCheck: 人脸识别（默认）
MobileCheck：手机号验证
参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
         * @type {string || null}
         */
        this.ApproverVerifyType = null;

        /**
         * 签署流程描述,最大长度1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 标识是否允许发起后添加控件。0为不允许1为允许。如果为1，创建的时候不能有签署控件，只能创建后添加。注意发起后添加控件功能不支持添加骑缝章和签批控件
         * @type {number || null}
         */
        this.SignBeanTag = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new ApproverInfo();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }

        if (params.CcInfos) {
            this.CcInfos = new Array();
            for (let z in params.CcInfos) {
                let obj = new CcInfo();
                obj.deserialize(params.CcInfos[z]);
                this.CcInfos.push(obj);
            }
        }
        this.NeedPreview = 'NeedPreview' in params ? params.NeedPreview : null;
        this.PreviewType = 'PreviewType' in params ? params.PreviewType : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.CustomShowMap = 'CustomShowMap' in params ? params.CustomShowMap : null;
        this.NeedSignReview = 'NeedSignReview' in params ? params.NeedSignReview : null;
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.ApproverVerifyType = 'ApproverVerifyType' in params ? params.ApproverVerifyType : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.SignBeanTag = 'SignBeanTag' in params ? params.SignBeanTag : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * CreateFlowSignUrl返回参数结构体
 * @class
 */
class CreateFlowSignUrlResponse extends  AbstractModel {
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
 * DescribeFileUrls请求参数结构体
 * @class
 */
class DescribeFileUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，UserId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 文件对应的业务类型，目前支持：
- 流程 "FLOW"，如需下载合同文件请选择此项
- 模板 "TEMPLATE"
- 文档 "DOCUMENT"
- 印章  “SEAL”
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 业务编号的数组，如流程编号、模板编号、文档编号、印章编号。如需下载合同文件请传入FlowId
最大支持20个资源
         * @type {Array.<string> || null}
         */
        this.BusinessIds = null;

        /**
         * 下载后的文件命名，只有FileType为zip的时候生效
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型，"JPG", "PDF","ZIP"等
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 指定资源起始偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 指定资源数量，查询全部资源则传入-1
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下载url过期时间，单位秒。0: 按默认值5分钟，允许范围：1s~24x60x60s(1天)
         * @type {number || null}
         */
        this.UrlTtl = null;

        /**
         * 暂不开放
         * @type {string || null}
         */
        this.CcToken = null;

        /**
         * 暂不开放
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 应用相关信息
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.BusinessIds = 'BusinessIds' in params ? params.BusinessIds : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.UrlTtl = 'UrlTtl' in params ? params.UrlTtl : null;
        this.CcToken = 'CcToken' in params ? params.CcToken : null;
        this.Scene = 'Scene' in params ? params.Scene : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * 电子文档的控件填充信息。按照控件类型进行相应的填充。

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
widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35
content String 表头单元格内容，字数不超过100
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
         * 控件id，和ComponentName选择一项传入即可
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可
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
 * 用户信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在平台的编号
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户的来源渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 用户在渠道的编号
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 用户真实IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 用户代理IP
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ProxyIp = 'ProxyIp' in params ? params.ProxyIp : null;

    }
}

/**
 * CreateFlowApprovers请求参数结构体
 * @class
 */
class CreateFlowApproversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 补充签署人信息
         * @type {Array.<FillApproverInfo> || null}
         */
        this.Approvers = null;

        /**
         * 企微消息中的发起人
         * @type {string || null}
         */
        this.Initiator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FillApproverInfo();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.Initiator = 'Initiator' in params ? params.Initiator : null;

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
         * 用户在电子签平台的id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 显示的用户名/昵称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 用户邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户在第三方平台id
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VerifiedOn = null;

        /**
         * 员工是否离职：0-未离职，1-离职
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateFlowEvidenceReport返回参数结构体
 * @class
 */
class CreateFlowEvidenceReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出证报告 ID，用于查询出证报告DescribeFlowEvidenceReport接口时用到
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
 * DescribeFileUrls返回参数结构体
 * @class
 */
class DescribeFileUrlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL信息
         * @type {Array.<FileUrl> || null}
         */
        this.FileUrls = null;

        /**
         * URL数量
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

        if (params.FileUrls) {
            this.FileUrls = new Array();
            for (let z in params.FileUrls) {
                let obj = new FileUrl();
                obj.deserialize(params.FileUrls[z]);
                this.FileUrls.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 用户id
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateDocument请求参数结构体
 * @class
 */
class CreateDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程编号,由CreateFlow接口返回
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 用户上传的模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起
         * @type {Array.<string> || null}
         */
        this.FileNames = null;

        /**
         * 内容控件信息数组
         * @type {Array.<FormField> || null}
         */
        this.FormFields = null;

        /**
         * 是否需要生成预览文件 默认不生成；
预览链接有效期300秒；
         * @type {boolean || null}
         */
        this.NeedPreview = null;

        /**
         * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
         * @type {number || null}
         */
        this.PreviewType = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 客户端Token，保持接口幂等性,最大长度64个字符
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.FileNames = 'FileNames' in params ? params.FileNames : null;

        if (params.FormFields) {
            this.FormFields = new Array();
            for (let z in params.FormFields) {
                let obj = new FormField();
                obj.deserialize(params.FormFields[z]);
                this.FormFields.push(obj);
            }
        }
        this.NeedPreview = 'NeedPreview' in params ? params.NeedPreview : null;
        this.PreviewType = 'PreviewType' in params ? params.PreviewType : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

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
 * DescribeOrganizationSeals返回参数结构体
 * @class
 */
class DescribeOrganizationSealsResponse extends  AbstractModel {
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
 * DeleteIntegrationEmployees请求参数结构体
 * @class
 */
class DeleteIntegrationEmployeesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息，userId必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 待移除员工的信息，userId和openId二选一，必填一个
         * @type {Array.<Staff> || null}
         */
        this.Employees = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Employees) {
            this.Employees = new Array();
            for (let z in params.Employees) {
                let obj = new Staff();
                obj.deserialize(params.Employees[z]);
                this.Employees.push(obj);
            }
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
 * GetTaskResultApi请求参数结构体
 * @class
 */
class GetTaskResultApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id，通过CreateConvertTaskApi得到
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 操作人信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 应用号信息
         * @type {Agent || null}
         */
        this.Agent = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.Organization) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.Organization)
            this.Organization = obj;
        }

    }
}

/**
 * 发起流程快速注册相关信息
 * @class
 */
class RegisterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 法人姓名
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 社会统一信用代码
         * @type {string || null}
         */
        this.Uscc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.Uscc = 'Uscc' in params ? params.Uscc : null;

    }
}

/**
 * 成员企业信息
 * @class
 */
class GroupOrganization extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员企业名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 成员企业别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 成员企业id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationId = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 成员企业状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否为集团主企业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsMainOrganization = null;

        /**
         * 企业社会信用代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 企业超管信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Admin || null}
         */
        this.AdminInfo = null;

        /**
         * 企业许可证
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.License = null;

        /**
         * 企业许可证过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LicenseExpireTime = null;

        /**
         * 成员企业加入集团时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JoinTime = null;

        /**
         * 是否可以使用审批流引擎
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.FlowEngineEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsMainOrganization = 'IsMainOrganization' in params ? params.IsMainOrganization : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;

        if (params.AdminInfo) {
            let obj = new Admin();
            obj.deserialize(params.AdminInfo)
            this.AdminInfo = obj;
        }
        this.License = 'License' in params ? params.License : null;
        this.LicenseExpireTime = 'LicenseExpireTime' in params ? params.LicenseExpireTime : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.FlowEngineEnable = 'FlowEngineEnable' in params ? params.FlowEngineEnable : null;

    }
}

/**
 * CreateFlowSignUrl请求参数结构体
 * @class
 */
class CreateFlowSignUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程签署人，其中ApproverName，ApproverMobile和ApproverType必传，其他可不传，ApproverType目前只支持个人类型的签署人。还需注意签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。
         * @type {Array.<FlowCreateApprover> || null}
         */
        this.FlowApproverInfos = null;

        /**
         * 机构信息，暂未开放
         * @type {OrganizationInfo || null}
         */
        this.Organization = null;

        /**
         * 用户信息，此结构体UserId必填
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

        if (params.FlowApproverInfos) {
            this.FlowApproverInfos = new Array();
            for (let z in params.FlowApproverInfos) {
                let obj = new FlowCreateApprover();
                obj.deserialize(params.FlowApproverInfos[z]);
                this.FlowApproverInfos.push(obj);
            }
        }

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
 * CreateIntegrationEmployees返回参数结构体
 * @class
 */
class CreateIntegrationEmployeesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建员工的结果
         * @type {CreateStaffResult || null}
         */
        this.CreateEmployeeResult = null;

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

        if (params.CreateEmployeeResult) {
            let obj = new CreateStaffResult();
            obj.deserialize(params.CreateEmployeeResult)
            this.CreateEmployeeResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 合同(流程)的状态
1：未签署
2：部分签署
3：已退回
4：完成签署
5：已过期
6：已取消
         * @type {number || null}
         */
        this.FlowStatus = null;

        /**
         * 合同(流程)的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowMessage = null;

        /**
         * 流程的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 合同(流程)的创建时间戳
         * @type {number || null}
         */
        this.CreatedOn = null;

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
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

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
 * CreateFlowByFiles返回参数结构体
 * @class
 */
class CreateFlowByFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程编号。

注：如入参 是否需要预览 NeedPreview 设置为 true，不会正式发起合同，此处不会有值返回；如入参 是否需要预览 NeedPreview 设置为 false，此处会正常返回签署流程编号 FlowId。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 合同预览链接。

注：如入参 是否需要预览 NeedPreview 设置为 true，会开启“预览模式”，此处会返回预览链接；如入参 是否需要预览 NeedPreview 设置为 false，此处不会有值返回。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
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
         * 文件id数组
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 上传成功文件数量
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
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建员工的成功数据
 * @class
 */
class SuccessCreateStaffData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工名
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 员工手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 员工在电子签平台的id
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

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
         * 签署参与者ID
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 参与者类型（ENTERPRISE/INDIVIDUAL）
         * @type {string || null}
         */
        this.RecipientType = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 是否需要验证，默认为false
         * @type {boolean || null}
         */
        this.RequireValidation = null;

        /**
         * 是否需要签署，默认为true
         * @type {boolean || null}
         */
        this.RequireSign = null;

        /**
         * 添加序列
         * @type {number || null}
         */
        this.RoutingOrder = null;

        /**
         * 是否需要发送，默认为true
         * @type {boolean || null}
         */
        this.RequireDelivery = null;

        /**
         * 邮箱地址
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 关联的用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 发送方式（EMAIL/MOBILE）
         * @type {string || null}
         */
        this.DeliveryMethod = null;

        /**
         * 附属信息
         * @type {string || null}
         */
        this.RecipientExtra = null;

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
        this.RoutingOrder = 'RoutingOrder' in params ? params.RoutingOrder : null;
        this.RequireDelivery = 'RequireDelivery' in params ? params.RequireDelivery : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.DeliveryMethod = 'DeliveryMethod' in params ? params.DeliveryMethod : null;
        this.RecipientExtra = 'RecipientExtra' in params ? params.RecipientExtra : null;

    }
}

/**
 * VerifyPdf请求参数结构体
 * @class
 */
class VerifyPdfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同Id，流程Id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 调用方用户信息，userId 必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

    }
}

/**
 * 参与者信息
 * @class
 */
class ApproverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。
         * @type {number || null}
         */
        this.ApproverType = null;

        /**
         * 本环节需要操作人的名字
         * @type {string || null}
         */
        this.ApproverName = null;

        /**
         * 本环节需要操作人的手机号
         * @type {string || null}
         */
        this.ApproverMobile = null;

        /**
         * 本环节操作人签署控件配置
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 如果是企业,则为企业的名字
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ApproverIdCardNumber = null;

        /**
         * 证件类型 
ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
         * @type {string || null}
         */
        this.ApproverIdCardType = null;

        /**
         * sms--短信，none--不通知
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * 1--收款人、2--开具人、3--见证人
         * @type {number || null}
         */
        this.ApproverRole = null;

        /**
         * 签署意愿确认渠道,WEIXINAPP:人脸识别
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

        /**
         * 合同的强制预览时间：3~300s，未指定则按合同页数计算
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 签署人userId，传此字段则不用传姓名、手机号
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 签署人用户来源,企微侧用户请传入：WEWORKAPP
         * @type {string || null}
         */
        this.ApproverSource = null;

        /**
         * 客户自定义签署人标识，64位长度，保证唯一，非企微场景不使用此字段
         * @type {string || null}
         */
        this.CustomApproverTag = null;

        /**
         * 签署人个性化能力值
         * @type {ApproverOption || null}
         */
        this.ApproverOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.ApproverName = 'ApproverName' in params ? params.ApproverName : null;
        this.ApproverMobile = 'ApproverMobile' in params ? params.ApproverMobile : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.ApproverIdCardNumber = 'ApproverIdCardNumber' in params ? params.ApproverIdCardNumber : null;
        this.ApproverIdCardType = 'ApproverIdCardType' in params ? params.ApproverIdCardType : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.ApproverRole = 'ApproverRole' in params ? params.ApproverRole : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ApproverSource = 'ApproverSource' in params ? params.ApproverSource : null;
        this.CustomApproverTag = 'CustomApproverTag' in params ? params.CustomApproverTag : null;

        if (params.ApproverOption) {
            let obj = new ApproverOption();
            obj.deserialize(params.ApproverOption)
            this.ApproverOption = obj;
        }

    }
}

/**
 * CreateFlowSignReview返回参数结构体
 * @class
 */
class CreateFlowSignReviewResponse extends  AbstractModel {
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
 * 查询过滤条件
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
 * 创建员工的结果
 * @class
 */
class CreateStaffResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建员工的成功列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SuccessCreateStaffData> || null}
         */
        this.SuccessEmployeeData = null;

        /**
         * 创建员工的失败列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailedCreateStaffData> || null}
         */
        this.FailedEmployeeData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SuccessEmployeeData) {
            this.SuccessEmployeeData = new Array();
            for (let z in params.SuccessEmployeeData) {
                let obj = new SuccessCreateStaffData();
                obj.deserialize(params.SuccessEmployeeData[z]);
                this.SuccessEmployeeData.push(obj);
            }
        }

        if (params.FailedEmployeeData) {
            this.FailedEmployeeData = new Array();
            for (let z in params.FailedEmployeeData) {
                let obj = new FailedCreateStaffData();
                obj.deserialize(params.FailedEmployeeData[z]);
                this.FailedEmployeeData.push(obj);
            }
        }

    }
}

/**
 * DescribeIntegrationMainOrganizationUser返回参数结构体
 * @class
 */
class DescribeIntegrationMainOrganizationUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主企业员工账号信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntegrationMainOrganizationUser || null}
         */
        this.IntegrationMainOrganizationUser = null;

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

        if (params.IntegrationMainOrganizationUser) {
            let obj = new IntegrationMainOrganizationUser();
            obj.deserialize(params.IntegrationMainOrganizationUser)
            this.IntegrationMainOrganizationUser = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSchemeUrl返回参数结构体
 * @class
 */
class CreateSchemeUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序链接地址
         * @type {string || null}
         */
        this.SchemeUrl = null;

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
        this.SchemeUrl = 'SchemeUrl' in params ? params.SchemeUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteSealPolicies请求参数结构体
 * @class
 */
class DeleteSealPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作撤销的用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

        /**
         * 应用相关
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 待授权的员工ID
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * CreatePrepareFlow返回参数结构体
 * @class
 */
class CreatePrepareFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快速发起预览链接
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTaskResultApi返回参数结构体
 * @class
 */
class GetTaskResultApiResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelMultiFlowSignQRCode请求参数结构体
 * @class
 */
class CancelMultiFlowSignQRCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 二维码id
         * @type {string || null}
         */
        this.QrCodeId = null;

        /**
         * 应用信息
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.QrCodeId = 'QrCodeId' in params ? params.QrCodeId : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * ModifyApplicationCallbackInfo请求参数结构体
 * @class
 */
class ModifyApplicationCallbackInfoRequest extends  AbstractModel {
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
 * 主企业员工账号信息
 * @class
 */
class IntegrationMainOrganizationUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主企业id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainOrganizationId = null;

        /**
         * 主企业员工UserId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainUserId = null;

        /**
         * 主企业员工名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainOrganizationId = 'MainOrganizationId' in params ? params.MainOrganizationId : null;
        this.MainUserId = 'MainUserId' in params ? params.MainUserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * StartFlow请求参数结构体
 * @class
 */
class StartFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程编号，由CreateFlow接口返回
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 客户端Token，保持接口幂等性,最大长度64个字符
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * CreatePrepareFlow请求参数结构体
 * @class
 */
class CreatePrepareFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 资源Id，通过多文件上传（UploadFiles）接口获得
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 合同名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 是否顺序签署(true:无序签,false:顺序签)
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 用户自定义合同类型
         * @type {string || null}
         */
        this.UserFlowTypeId = null;

        /**
         * 签署流程参与者信息，最大限制50方
         * @type {Array.<FlowCreateApprover> || null}
         */
        this.Approvers = null;

        /**
         * 打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE")
         * @type {string || null}
         */
        this.IntelligentStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.UserFlowTypeId = 'UserFlowTypeId' in params ? params.UserFlowTypeId : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FlowCreateApprover();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.IntelligentStatus = 'IntelligentStatus' in params ? params.IntelligentStatus : null;

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
         * 是否可以拒签 false-可以拒签,默认 true-不可以拒签
         * @type {boolean || null}
         */
        this.NoRefuse = null;

        /**
         * 是否可以转发 false-可以转发,默认 true-不可以转发
         * @type {boolean || null}
         */
        this.NoTransfer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoRefuse = 'NoRefuse' in params ? params.NoRefuse : null;
        this.NoTransfer = 'NoTransfer' in params ? params.NoTransfer : null;

    }
}

/**
 * CreateSealPolicy请求参数结构体
 * @class
 */
class CreateSealPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权发起人在平台信息，具体参考UserInfo结构体
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 用户在电子文件签署平台标识信息，具体参考UserInfo结构体。可跟下面的UserIds可叠加起作用
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

        /**
         * 印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 授权有效期。时间戳秒级
         * @type {number || null}
         */
        this.Expired = null;

        /**
         * 印章授权内容
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * 应用相关
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.Expired = 'Expired' in params ? params.Expired : null;
        this.Policy = 'Policy' in params ? params.Policy : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * DescribeOrganizationSeals请求参数结构体
 * @class
 */
class DescribeOrganizationSealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

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
         * 查询信息类型，为0时不返回授权用户，为1时返回
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

        /**
         * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealTypes = 'SealTypes' in params ? params.SealTypes : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * CancelFlow请求参数结构体
 * @class
 */
class CancelFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署流程id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 撤销原因，最长200个字符；
         * @type {string || null}
         */
        this.CancelMessage = null;

        /**
         * 应用相关信息
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.CancelMessage = 'CancelMessage' in params ? params.CancelMessage : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
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
         * 文件名，最大长度不超过200字符
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
 * 模板控件信息
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

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
SIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认；
SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。

表单域的控件不能作为印章和签名控件
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N）
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * 参数控件高度，单位pt
         * @type {number || null}
         */
        this.ComponentHeight = null;

        /**
         * 参数控件宽度，单位pt
         * @type {number || null}
         */
        this.ComponentWidth = null;

        /**
         * 参数控件所在页码，取值为：1-N
         * @type {number || null}
         */
        this.ComponentPage = null;

        /**
         * 参数控件X位置，单位pt
         * @type {number || null}
         */
        this.ComponentPosX = null;

        /**
         * 参数控件Y位置，单位pt
         * @type {number || null}
         */
        this.ComponentPosY = null;

        /**
         * GenerateMode==KEYWORD 指定关键字
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * GenerateMode==FIELD 指定表单域名称
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 是否必选，默认为false
         * @type {boolean || null}
         */
        this.ComponentRequired = null;

        /**
         * 控件关联的签署人ID
         * @type {string || null}
         */
        this.ComponentRecipientId = null;

        /**
         * 扩展参数：
为JSON格式。

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
         * 是否是表单域类型，默认不存在
         * @type {boolean || null}
         */
        this.IsFormType = null;

        /**
         * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
DATE - 默认是格式化为xxxx年xx月xx日
SIGN_SEAL - 印章ID，于控制台查询获取
SIGN_PAGING_SEAL - 可以指定印章ID，于控制台查询获取

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
         * NORMAL 正常模式，使用坐标制定签署控件位置
FIELD 表单域，需使用ComponentName指定表单域名称
KEYWORD 关键字，使用ComponentId指定关键字
         * @type {string || null}
         */
        this.GenerateMode = null;

        /**
         * 日期签署控件的字号，默认为 12
         * @type {number || null}
         */
        this.ComponentDateFontSize = null;

        /**
         * 渠道版控件 id 标识
         * @type {string || null}
         */
        this.ChannelComponentId = null;

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
         * //渠道子客控件来源。0-渠道指定；1-用户自定义
         * @type {number || null}
         */
        this.ChannelComponentSource = null;

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
         * 关键字索引，可选参数，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。示例：[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
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
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentRequired = 'ComponentRequired' in params ? params.ComponentRequired : null;
        this.ComponentRecipientId = 'ComponentRecipientId' in params ? params.ComponentRecipientId : null;
        this.ComponentExtra = 'ComponentExtra' in params ? params.ComponentExtra : null;
        this.IsFormType = 'IsFormType' in params ? params.IsFormType : null;
        this.ComponentValue = 'ComponentValue' in params ? params.ComponentValue : null;
        this.GenerateMode = 'GenerateMode' in params ? params.GenerateMode : null;
        this.ComponentDateFontSize = 'ComponentDateFontSize' in params ? params.ComponentDateFontSize : null;
        this.ChannelComponentId = 'ChannelComponentId' in params ? params.ChannelComponentId : null;
        this.OffsetX = 'OffsetX' in params ? params.OffsetX : null;
        this.OffsetY = 'OffsetY' in params ? params.OffsetY : null;
        this.ChannelComponentSource = 'ChannelComponentSource' in params ? params.ChannelComponentSource : null;
        this.KeywordOrder = 'KeywordOrder' in params ? params.KeywordOrder : null;
        this.KeywordPage = 'KeywordPage' in params ? params.KeywordPage : null;
        this.RelativeLocation = 'RelativeLocation' in params ? params.RelativeLocation : null;
        this.KeywordIndexes = 'KeywordIndexes' in params ? params.KeywordIndexes : null;

    }
}

/**
 * CreateFlowReminds请求参数结构体
 * @class
 */
class CreateFlowRemindsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 需要执行催办的签署流程id数组，最多100个
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

    }
}

/**
 * DescribeFlowBriefs请求参数结构体
 * @class
 */
class DescribeFlowBriefsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 需要查询的流程ID列表，限制最大20个
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 应用相关信息
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

    }
}

/**
 * DeleteIntegrationEmployees返回参数结构体
 * @class
 */
class DeleteIntegrationEmployeesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 员工删除数据
         * @type {DeleteStaffsResult || null}
         */
        this.DeleteEmployeeResult = null;

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

        if (params.DeleteEmployeeResult) {
            let obj = new DeleteStaffsResult();
            obj.deserialize(params.DeleteEmployeeResult)
            this.DeleteEmployeeResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * VerifyPdf返回参数结构体
 * @class
 */
class VerifyPdfResponse extends  AbstractModel {
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
         * 验签序列号
         * @type {string || null}
         */
        this.VerifySerialNo = null;

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
        this.VerifySerialNo = 'VerifySerialNo' in params ? params.VerifySerialNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 删除员工结果
 * @class
 */
class DeleteStaffsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除员工的成功数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SuccessDeleteStaffData> || null}
         */
        this.SuccessEmployeeData = null;

        /**
         * 删除员工的失败数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailedDeleteStaffData> || null}
         */
        this.FailedEmployeeData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SuccessEmployeeData) {
            this.SuccessEmployeeData = new Array();
            for (let z in params.SuccessEmployeeData) {
                let obj = new SuccessDeleteStaffData();
                obj.deserialize(params.SuccessEmployeeData[z]);
                this.SuccessEmployeeData.push(obj);
            }
        }

        if (params.FailedEmployeeData) {
            this.FailedEmployeeData = new Array();
            for (let z in params.FailedEmployeeData) {
                let obj = new FailedDeleteStaffData();
                obj.deserialize(params.FailedEmployeeData[z]);
                this.FailedEmployeeData.push(obj);
            }
        }

    }
}

/**
 * DescribeFlowBriefs返回参数结构体
 * @class
 */
class DescribeFlowBriefsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程列表
         * @type {Array.<FlowBrief> || null}
         */
        this.FlowBriefs = null;

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

        if (params.FlowBriefs) {
            this.FlowBriefs = new Array();
            for (let z in params.FlowBriefs) {
                let obj = new FlowBrief();
                obj.deserialize(params.FlowBriefs[z]);
                this.FlowBriefs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业超管信息
 * @class
 */
class Admin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超管名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 超管手机号
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

    }
}

/**
 * 此结构体 (Caller) 用于描述调用方属性。
 * @class
 */
class Caller extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用号
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 主机构ID
         * @type {string || null}
         */
        this.OrganizationId = null;

        /**
         * 经办人的用户ID
         * @type {string || null}
         */
        this.OperatorId = null;

        /**
         * 下属机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.OperatorId = 'OperatorId' in params ? params.OperatorId : null;
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;

    }
}

/**
 * DescribeFlowTemplates返回参数结构体
 * @class
 */
class DescribeFlowTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板详情列表
         * @type {Array.<TemplateInfo> || null}
         */
        this.Templates = null;

        /**
         * 查询到的总个数
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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new TemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 文件对应业务类型
1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html
3. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 调用方信息，其中OperatorId为必填字段，即用户的UserId
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 上传文件内容数组，最多支持20个文件
         * @type {Array.<UploadFile> || null}
         */
        this.FileInfos = null;

        /**
         * 文件类型， 默认通过文件内容解析得到文件类型，客户可以显示的说明上传文件的类型。
如：PDF 表示上传的文件 xxx.pdf的文件类型是 PDF
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 此参数只对 PDF 文件有效。是否将pdf灰色矩阵置白
true--是，处理置白
默认为false--否，不处理
         * @type {boolean || null}
         */
        this.CoverRect = null;

        /**
         * 用户自定义ID数组，与上传文件一一对应
         * @type {Array.<string> || null}
         */
        this.CustomIds = null;

        /**
         * 不再使用，上传文件链接数组，最多支持20个URL
         * @type {string || null}
         */
        this.FileUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new UploadFile();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.CoverRect = 'CoverRect' in params ? params.CoverRect : null;
        this.CustomIds = 'CustomIds' in params ? params.CustomIds : null;
        this.FileUrls = 'FileUrls' in params ? params.FileUrls : null;

    }
}

/**
 * CreateBatchCancelFlowUrl请求参数结构体
 * @class
 */
class CreateBatchCancelFlowUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息，userId 必填
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 需要执行撤回的签署流程id数组，最多100个
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

    }
}

/**
 * CreateMultiFlowSignQRCode请求参数结构体
 * @class
 */
class CreateMultiFlowSignQRCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 签署流程名称，最大长度不超过200字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 最大可发起签署流程份数，默认5份 
发起流程数量超过此上限后二维码自动失效
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
         * 用户自定义字段，回调的时候会进行透传，长度需要小于20480
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 回调地址,最大长度1000字符串
回调时机：
用户通过签署二维码发起签署流程时，企业额度不足导致失败
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 应用信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 限制二维码用户条件（已弃用）
         * @type {ApproverRestriction || null}
         */
        this.ApproverRestrictions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
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
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

        if (params.ApproverRestrictions) {
            let obj = new ApproverRestriction();
            obj.deserialize(params.ApproverRestrictions)
            this.ApproverRestrictions = obj;
        }

    }
}

/**
 * DescribeFlowInfo返回参数结构体
 * @class
 */
class DescribeFlowInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程信息
         * @type {Array.<FlowDetailInfo> || null}
         */
        this.FlowDetailInfos = null;

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

        if (params.FlowDetailInfos) {
            this.FlowDetailInfos = new Array();
            for (let z in params.FlowDetailInfos) {
                let obj = new FlowDetailInfo();
                obj.deserialize(params.FlowDetailInfos[z]);
                this.FlowDetailInfos.push(obj);
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
         * 被抄送人手机号
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

/**
 * CreateFlow返回参数结构体
 * @class
 */
class CreateFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署流程编号
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
 * 流程信息摘要
 * @class
 */
class FlowBrief extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程的编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程的名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 流程的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 流程的类型
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 流程状态
- `0`  还没有发起
- `1`  未签署
- `2`  部分签署
- `3`  已退回
- `4`  完成签署
- `5`  已过期
- `6`  已取消
- `7`  还没有预发起
- `8`  等待填写
- `9`  部分填写
- `10`  拒填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowStatus = null;

        /**
         * 流程创建的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 拒签或者取消的原因描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowMessage = null;

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
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.FlowStatus = 'FlowStatus' in params ? params.FlowStatus : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.FlowMessage = 'FlowMessage' in params ? params.FlowMessage : null;

    }
}

/**
 * DescribeOrganizationGroupOrganizations返回参数结构体
 * @class
 */
class DescribeOrganizationGroupOrganizationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的符合条件的成员企业总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 已授权待激活的企业数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JoinedTotal = null;

        /**
         * 已加入的企业数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivedTotal = null;

        /**
         * 导出文件的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExportUrl = null;

        /**
         * 成员企业信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupOrganization> || null}
         */
        this.List = null;

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
        this.JoinedTotal = 'JoinedTotal' in params ? params.JoinedTotal : null;
        this.ActivedTotal = 'ActivedTotal' in params ? params.ActivedTotal : null;
        this.ExportUrl = 'ExportUrl' in params ? params.ExportUrl : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new GroupOrganization();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelMultiFlowSignQRCode返回参数结构体
 * @class
 */
class CancelMultiFlowSignQRCodeResponse extends  AbstractModel {
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
    CancelFlowResponse: CancelFlowResponse,
    DescribeFlowEvidenceReportRequest: DescribeFlowEvidenceReportRequest,
    Department: Department,
    CreateSchemeUrlRequest: CreateSchemeUrlRequest,
    FileInfo: FileInfo,
    CreateFlowApproversResponse: CreateFlowApproversResponse,
    DescribeIntegrationMainOrganizationUserRequest: DescribeIntegrationMainOrganizationUserRequest,
    ModifyApplicationCallbackInfoResponse: ModifyApplicationCallbackInfoResponse,
    CreateMultiFlowSignQRCodeResponse: CreateMultiFlowSignQRCodeResponse,
    FlowCreateApprover: FlowCreateApprover,
    DescribeThirdPartyAuthCodeResponse: DescribeThirdPartyAuthCodeResponse,
    CreateIntegrationEmployeesRequest: CreateIntegrationEmployeesRequest,
    CreateFlowEvidenceReportRequest: CreateFlowEvidenceReportRequest,
    StartFlowResponse: StartFlowResponse,
    StaffRole: StaffRole,
    FlowApproverUrlInfo: FlowApproverUrlInfo,
    CreateConvertTaskApiRequest: CreateConvertTaskApiRequest,
    CreateFlowRemindsResponse: CreateFlowRemindsResponse,
    DescribeOrganizationGroupOrganizationsRequest: DescribeOrganizationGroupOrganizationsRequest,
    Agent: Agent,
    FlowApproverDetail: FlowApproverDetail,
    DescribeFlowTemplatesRequest: DescribeFlowTemplatesRequest,
    DescribeFlowEvidenceReportResponse: DescribeFlowEvidenceReportResponse,
    TemplateInfo: TemplateInfo,
    CreateDocumentResponse: CreateDocumentResponse,
    DescribeIntegrationEmployeesRequest: DescribeIntegrationEmployeesRequest,
    CreateFlowRequest: CreateFlowRequest,
    FileUrl: FileUrl,
    DescribeThirdPartyAuthCodeRequest: DescribeThirdPartyAuthCodeRequest,
    DescribeFlowInfoRequest: DescribeFlowInfoRequest,
    DeleteSealPoliciesResponse: DeleteSealPoliciesResponse,
    OrganizationInfo: OrganizationInfo,
    FillApproverInfo: FillApproverInfo,
    OccupiedSeal: OccupiedSeal,
    FailedDeleteStaffData: FailedDeleteStaffData,
    PdfVerifyResult: PdfVerifyResult,
    CreateBatchCancelFlowUrlResponse: CreateBatchCancelFlowUrlResponse,
    CreateSealPolicyResponse: CreateSealPolicyResponse,
    DescribeIntegrationEmployeesResponse: DescribeIntegrationEmployeesResponse,
    SuccessDeleteStaffData: SuccessDeleteStaffData,
    CreateConvertTaskApiResponse: CreateConvertTaskApiResponse,
    CreateFlowSignReviewRequest: CreateFlowSignReviewRequest,
    FailedCreateStaffData: FailedCreateStaffData,
    CreateFlowByFilesRequest: CreateFlowByFilesRequest,
    CreateFlowSignUrlResponse: CreateFlowSignUrlResponse,
    DescribeFileUrlsRequest: DescribeFileUrlsRequest,
    FormField: FormField,
    UserInfo: UserInfo,
    CreateFlowApproversRequest: CreateFlowApproversRequest,
    Staff: Staff,
    CreateFlowEvidenceReportResponse: CreateFlowEvidenceReportResponse,
    DescribeFileUrlsResponse: DescribeFileUrlsResponse,
    AuthorizedUser: AuthorizedUser,
    CreateDocumentRequest: CreateDocumentRequest,
    RemindFlowRecords: RemindFlowRecords,
    DescribeOrganizationSealsResponse: DescribeOrganizationSealsResponse,
    DeleteIntegrationEmployeesRequest: DeleteIntegrationEmployeesRequest,
    SignQrCode: SignQrCode,
    GetTaskResultApiRequest: GetTaskResultApiRequest,
    RegisterInfo: RegisterInfo,
    GroupOrganization: GroupOrganization,
    CreateFlowSignUrlRequest: CreateFlowSignUrlRequest,
    CreateIntegrationEmployeesResponse: CreateIntegrationEmployeesResponse,
    FlowDetailInfo: FlowDetailInfo,
    CreateFlowByFilesResponse: CreateFlowByFilesResponse,
    UploadFilesResponse: UploadFilesResponse,
    SuccessCreateStaffData: SuccessCreateStaffData,
    Recipient: Recipient,
    VerifyPdfRequest: VerifyPdfRequest,
    ApproverInfo: ApproverInfo,
    CreateFlowSignReviewResponse: CreateFlowSignReviewResponse,
    Filter: Filter,
    CreateStaffResult: CreateStaffResult,
    DescribeIntegrationMainOrganizationUserResponse: DescribeIntegrationMainOrganizationUserResponse,
    CreateSchemeUrlResponse: CreateSchemeUrlResponse,
    ApproverRestriction: ApproverRestriction,
    DeleteSealPoliciesRequest: DeleteSealPoliciesRequest,
    CreatePrepareFlowResponse: CreatePrepareFlowResponse,
    GetTaskResultApiResponse: GetTaskResultApiResponse,
    CancelMultiFlowSignQRCodeRequest: CancelMultiFlowSignQRCodeRequest,
    ModifyApplicationCallbackInfoRequest: ModifyApplicationCallbackInfoRequest,
    IntegrationMainOrganizationUser: IntegrationMainOrganizationUser,
    StartFlowRequest: StartFlowRequest,
    CreatePrepareFlowRequest: CreatePrepareFlowRequest,
    ApproverOption: ApproverOption,
    CreateSealPolicyRequest: CreateSealPolicyRequest,
    DescribeOrganizationSealsRequest: DescribeOrganizationSealsRequest,
    CancelFlowRequest: CancelFlowRequest,
    UploadFile: UploadFile,
    Component: Component,
    CreateFlowRemindsRequest: CreateFlowRemindsRequest,
    DescribeFlowBriefsRequest: DescribeFlowBriefsRequest,
    DeleteIntegrationEmployeesResponse: DeleteIntegrationEmployeesResponse,
    SignUrl: SignUrl,
    VerifyPdfResponse: VerifyPdfResponse,
    DeleteStaffsResult: DeleteStaffsResult,
    DescribeFlowBriefsResponse: DescribeFlowBriefsResponse,
    Admin: Admin,
    Caller: Caller,
    DescribeFlowTemplatesResponse: DescribeFlowTemplatesResponse,
    UploadFilesRequest: UploadFilesRequest,
    CreateBatchCancelFlowUrlRequest: CreateBatchCancelFlowUrlRequest,
    CreateMultiFlowSignQRCodeRequest: CreateMultiFlowSignQRCodeRequest,
    DescribeFlowInfoResponse: DescribeFlowInfoResponse,
    CcInfo: CcInfo,
    CreateFlowResponse: CreateFlowResponse,
    FlowBrief: FlowBrief,
    DescribeOrganizationGroupOrganizationsResponse: DescribeOrganizationGroupOrganizationsResponse,
    CancelMultiFlowSignQRCodeResponse: CancelMultiFlowSignQRCodeResponse,

}
