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
 * 创建流程签署人入参
 * @class
 */
class FlowApproverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署人姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 经办人身份证号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 签署人手机号，脱敏显示
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署完前端跳转的url，暂未使用
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 签署截止时间
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 签署完回调url
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 签署人类型，PERSON-个人；ORGANIZATION-企业；
ENTERPRISESERVER-企业静默签;
注：ENTERPRISESERVER 类型仅用于使用文件创建流程（ChannelCreateFlowByFiles）接口；并且仅能指定发起方企业签署方为静默签署；
         * @type {string || null}
         */
        this.ApproverType = null;

        /**
         * 用户侧第三方id
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 合同的强制预览时间：3~300s，未指定则按合同页数计算
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 个人签署方指定签署控件类型，目前仅支持：OCR_ESIGN(AI智慧手写签名)
         * @type {Array.<string> || null}
         */
        this.ComponentLimitType = null;

        /**
         * 流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在流程中的位置；
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传；
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 企业签署方在同一渠道下的其他合作企业OpenId，签署方为非发起方企业场景下必传；
         * @type {string || null}
         */
        this.OrganizationOpenId = null;

        /**
         * 指定签署人非渠道企业下员工，在ApproverType为ORGANIZATION时指定。
默认为false，即签署人位于同一个渠道应用号下；
         * @type {boolean || null}
         */
        this.NotChannelOrganization = null;

        /**
         * 使用PDF文件直接发起合同时，签署人指定的签署控件
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ApproverType = 'ApproverType' in params ? params.ApproverType : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.ComponentLimitType = 'ComponentLimitType' in params ? params.ComponentLimitType : null;
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationOpenId = 'OrganizationOpenId' in params ? params.OrganizationOpenId : null;
        this.NotChannelOrganization = 'NotChannelOrganization' in params ? params.NotChannelOrganization : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }

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
 * 合作企业经办人列表信息
 * @class
 */
class ProxyOrganizationOperator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经办人ID（渠道颁发）
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 经办人姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 经办人身份证件类型
用户证件类型：默认ID_CARD
1. ID_CARD - 居民身份证
2. HOUSEHOLD_REGISTER - 户口本
3. TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 经办人身份证号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 经办人手机号
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
         * 签署区模板信息结构
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

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
         * 模板类型：1-静默签；2-静默签授权；3-普通模板
         * @type {number || null}
         */
        this.TemplateType = null;

        /**
         * 模板中的流程参与人信息
         * @type {Array.<Recipient> || null}
         */
        this.Recipients = null;

        /**
         * 是否是发起人
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

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;

        if (params.Recipients) {
            this.Recipients = new Array();
            for (let z in params.Recipients) {
                let obj = new Recipient();
                obj.deserialize(params.Recipients[z]);
                this.Recipients.push(obj);
            }
        }
        this.IsPromoter = 'IsPromoter' in params ? params.IsPromoter : null;

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
 * DescribeResourceUrlsByFlows返回参数结构体
 * @class
 */
class DescribeResourceUrlsByFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程资源对应链接信息
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
 * CreateSignUrls请求参数结构体
 * @class
 */
class CreateSignUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 所签署合同ID数组
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署链接类型，默认：“WEIXINAPP”-直接跳小程序; “CHANNEL”-跳转H5页面; “APP”-第三方APP或小程序跳转电子签小程序;
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序
         * @type {boolean || null}
         */
        this.AutoJumpBack = null;

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
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.AutoJumpBack = 'AutoJumpBack' in params ? params.AutoJumpBack : null;

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
         * 应用信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 合同(流程)编号数组
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

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
         * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模板； 文件类型：.pdf
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.jpg/.png
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 应用相关信息，若是渠道版调用 appid 和proxyappid 必填
         * @type {Agent || null}
         */
        this.Agent = null;

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
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

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
 * DescribeResourceUrlsByFlows请求参数结构体
 * @class
 */
class DescribeResourceUrlsByFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 查询资源所对应的流程Id
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

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
 * 此结构体 (Component) 用于描述控件属性。
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控件编号

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
TEXT - 普通文本控件；
DATE - 普通日期控件；跟TEXT相比会有校验逻辑
如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件；

表单域的控件不能作为印章和签名控件
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 控件简称
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 定义控件是否为必填项，默认为false
         * @type {boolean || null}
         */
        this.ComponentRequired = null;

        /**
         * 控件所属文件的序号 (文档中文件的排列序号)
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
         * 参数控件所在页码
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
TEXT控件可以指定字体
例如：{"FontSize":12}
         * @type {string || null}
         */
        this.ComponentExtra = null;

        /**
         * 印章 ID，传参 DEFAULT_COMPANY_SEAL 表示使用默认印章。
控件填入内容，印章控件里面，如果是手写签名内容为PNG图片格式的base64编码
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
         * 控件描述
         * @type {string || null}
         */
        this.ComponentDescription = null;

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
         * 应用信息
此接口Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 文件夹数组，合同（流程）总数不能超过50个，一个文件夹下，不能超过20个合同（流程），
         * @type {Array.<DownloadFlowInfo> || null}
         */
        this.DownLoadFlows = null;

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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }

        if (params.DownLoadFlows) {
            this.DownLoadFlows = new Array();
            for (let z in params.DownLoadFlows) {
                let obj = new DownloadFlowInfo();
                obj.deserialize(params.DownLoadFlows[z]);
                this.DownLoadFlows.push(obj);
            }
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
 * CreateConsoleLoginUrl请求参数结构体
 * @class
 */
class CreateConsoleLoginUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
此接口Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 渠道侧合作企业名称
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 渠道侧合作企业统一社会信用代码
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * 渠道侧合作企业经办人的姓名
         * @type {string || null}
         */
        this.ProxyOperatorName = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 控制台指定模块，文件/合同管理:"DOCUMENT"，模板管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 控制台指定模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

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
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.ProxyOperatorName = 'ProxyOperatorName' in params ? params.ProxyOperatorName : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 多个合同（流程）信息
         * @type {Array.<FlowInfo> || null}
         */
        this.FlowInfos = null;

        /**
         * 操作完成后的跳转地址
         * @type {string || null}
         */
        this.JumpUrl = null;

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
 * DescribeTemplates请求参数结构体
 * @class
 */
class DescribeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 模板唯一标识
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 查询内容：0-模版列表及详情（默认），1-仅模版列表
         * @type {number || null}
         */
        this.ContentType = null;

        /**
         * 查询个数，默认20，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询偏移位置，默认0
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN"
         * @type {string || null}
         */
        this.OperatorType = null;

        /**
         * 应用信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 经办人信息列表
         * @type {Array.<ProxyOrganizationOperator> || null}
         */
        this.ProxyOrganizationOperators = null;

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
        this.OperatorType = 'OperatorType' in params ? params.OperatorType : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

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
 * CreateConsoleLoginUrl返回参数结构体
 * @class
 */
class CreateConsoleLoginUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控制台url，此链接5分钟内有效，且只能访问一次
         * @type {string || null}
         */
        this.ConsoleUrl = null;

        /**
         * 渠道合作企业是否认证开通腾讯电子签。
当渠道合作企业未完成认证开通腾讯电子签,建议先调用同步企业信息(SyncProxyOrganization)和同步经办人信息(SyncProxyOrganizationOperators)接口成功后再跳转到登录页面。
         * @type {boolean || null}
         */
        this.IsActivated = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 多个合同（流程）信息
         * @type {Array.<FlowInfo> || null}
         */
        this.FlowInfos = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，则返回PreviewUrls；
         * @type {boolean || null}
         */
        this.NeedPreview = null;

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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.NeedPreview = 'NeedPreview' in params ? params.NeedPreview : null;

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
此接口Agent.ProxyOrganizationOpenId必填
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 渠道侧合作企业名称
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

        /**
         * 渠道侧合作企业统一社会信用代码
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
         * @type {string || null}
         */
        this.BusinessLicense = null;

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
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.BusinessLicense = 'BusinessLicense' in params ? params.BusinessLicense : null;

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
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 印章图片base64
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
 * 接口调用者信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义用户编号
         * @type {string || null}
         */
        this.CustomUserId = null;

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
        this.CustomUserId = 'CustomUserId' in params ? params.CustomUserId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ProxyIp = 'ProxyIp' in params ? params.ProxyIp : null;

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
         * 消耗量
         * @type {number || null}
         */
        this.Usage = null;

        /**
         * 日期，当需要汇总数据时日期为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 渠道侧合作企业名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyOrganizationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.ProxyOrganizationName = 'ProxyOrganizationName' in params ? params.ProxyOrganizationName : null;

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
 * OperateChannelTemplate请求参数结构体
 * @class
 */
class OperateChannelTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 渠道方模板库模板唯一标识
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 操作类型，查询:"SELECT"，删除:"DELETE"，更新:"UPDATE"
         * @type {string || null}
         */
        this.OperateType = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 模板可见性, 全部可见-"all", 部分可见-"part"
         * @type {string || null}
         */
        this.AuthTag = null;

        /**
         * 合作企业方第三方机构唯一标识数据，支持多个， 用","进行分隔
         * @type {string || null}
         */
        this.ProxyOrganizationOpenIds = null;

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
        this.OperateType = 'OperateType' in params ? params.OperateType : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.AuthTag = 'AuthTag' in params ? params.AuthTag : null;
        this.ProxyOrganizationOpenIds = 'ProxyOrganizationOpenIds' in params ? params.ProxyOrganizationOpenIds : null;

    }
}

/**
 * 合同（流程）下载信息
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
         * 合同（流程）的标识数组
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
 * DescribeUsage请求参数结构体
 * @class
 */
class DescribeUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 开始时间 eg:2021-03-21
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束时间 eg:2021-06-21 
开始时间到结束时间的区间长度小于等于90天
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 是否汇总数据，默认不汇总
不汇总:返回在统计区间内渠道下所有企业的每日明细，即每个企业N条数据，N为统计天数
汇总:返回在统计区间内渠道下所有企业的汇总后数据，即每个企业一条数据
         * @type {boolean || null}
         */
        this.NeedAggregate = null;

        /**
         * 单次返回的最多条目数量,默认为1000,且不能超过1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量,默认是0
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.NeedAggregate = 'NeedAggregate' in params ? params.NeedAggregate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 渠道应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 操作者的信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 签署文件资源Id列表，目前仅支持单个文件
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 流程名称，长度不超过200个字符
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 流程截止时间，十位数时间戳，最大值为33162419560，即3020年
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 流程的描述，长度不超过1000个字符
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 流程的类型，长度不超过255个字符
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 流程回调地址，长度不超过255个字符
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 流程签约方列表，最多不超过5个参与方
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApprovers = null;

        /**
         * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 签署文件中的控件，如：填写控件等
         * @type {Array.<Component> || null}
         */
        this.Components = null;

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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.FlowApprovers) {
            this.FlowApprovers = new Array();
            for (let z in params.FlowApprovers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.FlowApprovers[z]);
                this.FlowApprovers.push(obj);
            }
        }
        this.Unordered = 'Unordered' in params ? params.Unordered : null;

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
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
         * 合同流程ID
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
 * 应用相关信息
 * @class
 */
class Agent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯电子签颁发给渠道的应用ID，32位字符串
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 腾讯电子签颁发给渠道侧合作企业的企业ID
         * @type {string || null}
         */
        this.ProxyOrganizationId = null;

        /**
         * 腾讯电子签颁发给渠道侧合作企业的应用ID
         * @type {string || null}
         */
        this.ProxyAppId = null;

        /**
         * 渠道/平台合作企业经办人（操作员）
         * @type {UserInfo || null}
         */
        this.ProxyOperator = null;

        /**
         * 渠道/平台合作企业的企业ID
         * @type {string || null}
         */
        this.ProxyOrganizationOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProxyOrganizationId = 'ProxyOrganizationId' in params ? params.ProxyOrganizationId : null;
        this.ProxyAppId = 'ProxyAppId' in params ? params.ProxyAppId : null;

        if (params.ProxyOperator) {
            let obj = new UserInfo();
            obj.deserialize(params.ProxyOperator)
            this.ProxyOperator = obj;
        }
        this.ProxyOrganizationOpenId = 'ProxyOrganizationOpenId' in params ? params.ProxyOrganizationOpenId : null;

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
         * 表单域或控件的Value
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 表单域或控件的ID，跟ComponentName二选一，不能全为空
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
 * 此结构体 (FlowInfo) 用于描述流程信息。
 * @class
 */
class FlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同名字
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
         * 合同类型：
1. “劳务”
2. “销售”
3. “租赁”
4. “其他”
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 多个签署人信息，渠道侧目前不支持超过5个签署方信息
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.FlowApprovers = null;

        /**
         * 表单K-V对列表
         * @type {Array.<FormField> || null}
         */
        this.FormFields = null;

        /**
         * 合同描述
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 渠道的业务信息，限制1024字符
         * @type {string || null}
         */
        this.CustomerData = null;

        /**
         * 被抄送人的信息列表，抄送功能暂不开放
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
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

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
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.CustomerData = 'CustomerData' in params ? params.CustomerData : null;

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
 * 签署链接内容
 * @class
 */
class SignUrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignUrl = null;

        /**
         * 链接失效时间,默认30分钟
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
         * 合同(流程)的具体详细描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FlowDetailInfo> || null}
         */
        this.FlowInfo = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ResourceUrlInfo: ResourceUrlInfo,
    SyncProxyOrganizationResponse: SyncProxyOrganizationResponse,
    FlowApproverInfo: FlowApproverInfo,
    PrepareFlowsResponse: PrepareFlowsResponse,
    ProxyOrganizationOperator: ProxyOrganizationOperator,
    TemplateInfo: TemplateInfo,
    GetDownloadFlowUrlResponse: GetDownloadFlowUrlResponse,
    DescribeResourceUrlsByFlowsResponse: DescribeResourceUrlsByFlowsResponse,
    Recipient: Recipient,
    DescribeTemplatesResponse: DescribeTemplatesResponse,
    OperateChannelTemplateResponse: OperateChannelTemplateResponse,
    CreateSignUrlsRequest: CreateSignUrlsRequest,
    AuthFailMessage: AuthFailMessage,
    DescribeFlowDetailInfoRequest: DescribeFlowDetailInfoRequest,
    UploadFilesRequest: UploadFilesRequest,
    DescribeResourceUrlsByFlowsRequest: DescribeResourceUrlsByFlowsRequest,
    UploadFile: UploadFile,
    Component: Component,
    GetDownloadFlowUrlRequest: GetDownloadFlowUrlRequest,
    FlowDetailInfo: FlowDetailInfo,
    CreateConsoleLoginUrlRequest: CreateConsoleLoginUrlRequest,
    CreateFlowsByTemplatesResponse: CreateFlowsByTemplatesResponse,
    PrepareFlowsRequest: PrepareFlowsRequest,
    SyncProxyOrganizationOperatorsResponse: SyncProxyOrganizationOperatorsResponse,
    CreateSealByImageResponse: CreateSealByImageResponse,
    FlowResourceUrlInfo: FlowResourceUrlInfo,
    DescribeTemplatesRequest: DescribeTemplatesRequest,
    SyncProxyOrganizationOperatorsRequest: SyncProxyOrganizationOperatorsRequest,
    CreateConsoleLoginUrlResponse: CreateConsoleLoginUrlResponse,
    CreateFlowsByTemplatesRequest: CreateFlowsByTemplatesRequest,
    SyncProxyOrganizationRequest: SyncProxyOrganizationRequest,
    CreateSealByImageRequest: CreateSealByImageRequest,
    UserInfo: UserInfo,
    UsageDetail: UsageDetail,
    CreateSignUrlsResponse: CreateSignUrlsResponse,
    OperateChannelTemplateRequest: OperateChannelTemplateRequest,
    DownloadFlowInfo: DownloadFlowInfo,
    CcInfo: CcInfo,
    SyncFailReason: SyncFailReason,
    DescribeUsageRequest: DescribeUsageRequest,
    ChannelCreateFlowByFilesRequest: ChannelCreateFlowByFilesRequest,
    ChannelCreateFlowByFilesResponse: ChannelCreateFlowByFilesResponse,
    UploadFilesResponse: UploadFilesResponse,
    Agent: Agent,
    FormField: FormField,
    FlowApproverDetail: FlowApproverDetail,
    FlowInfo: FlowInfo,
    SignUrlInfo: SignUrlInfo,
    DescribeUsageResponse: DescribeUsageResponse,
    DescribeFlowDetailInfoResponse: DescribeFlowDetailInfoResponse,

}
