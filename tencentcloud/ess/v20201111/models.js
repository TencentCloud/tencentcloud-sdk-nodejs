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
         * 返回的电子文档ID
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 返回合同文件的预览地址 5分钟内有效。仅当NeedPreview为true 时返回
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
 * StartFlow请求参数结构体
 * @class
 */
class StartFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 客户端Token，保持接口幂等性
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

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
 * CreateDocument请求参数结构体
 * @class
 */
class CreateDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 用户上传的模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 文件名列表
         * @type {Array.<string> || null}
         */
        this.FileNames = null;

        /**
         * 内容控件信息数组
         * @type {Array.<FormField> || null}
         */
        this.FormFields = null;

        /**
         * 应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 客户端Token，保持接口幂等性
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否需要生成预览文件 默认不生成；
预览链接有效期300秒；
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FileNames = 'FileNames' in params ? params.FileNames : null;

        if (params.FormFields) {
            this.FormFields = new Array();
            for (let z in params.FormFields) {
                let obj = new FormField();
                obj.deserialize(params.FormFields[z]);
                this.FormFields.push(obj);
            }
        }

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.NeedPreview = 'NeedPreview' in params ? params.NeedPreview : null;

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
         * 操作人信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 流程的名字, 长度不能超过200，中文字母数字下划线
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 参与者信息
         * @type {Array.<FlowCreateApprover> || null}
         */
        this.Approvers = null;

        /**
         * 流程的描述, 长度不能超过1000
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 发送类型(true为无序签,false为顺序签)
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 流程的种类(如销售合同/入职合同等)
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 过期时间戳,如果是0则为不过期
         * @type {number || null}
         */
        this.DeadLine = null;

        /**
         * 执行结果的回调URL(需要以http://或者https://)开头
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 用户自定义字段(需进行base64 encode),回调的时候会进行透传, 长度需要小于20480
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 客户端Token，保持接口幂等性
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
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FlowCreateApprover();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.UserData = 'UserData' in params ? params.UserData : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

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
         * 调用方用户信息，参考通用结构
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 调用方渠道信息，参考通用结构
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 跳转页面 1: 小程序合同详情 2: 小程序合同列表页 0: 不传, 默认主页
         * @type {number || null}
         */
        this.PathType = null;

        /**
         * 合同详情 id (PathType=1时必传)
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 链接类型
HTTP：跳转电子签小程序的http_url，
APP：第三方APP或小程序跳转电子签小程序的path。
默认为HTTP类型
         * @type {string || null}
         */
        this.EndPoint = null;

        /**
         * 是否自动回跳 true：是， false：否。该参数只针对"APP" 类型的签署链接有效
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.PathType = 'PathType' in params ? params.PathType : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.EndPoint = 'EndPoint' in params ? params.EndPoint : null;
        this.AutoJumpBack = 'AutoJumpBack' in params ? params.AutoJumpBack : null;

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
         * AuthCode 值
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
 * UploadFiles请求参数结构体
 * @class
 */
class UploadFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模板； 文件类型：.pdf/.html
2. DOCUMENT - 签署过程及签署后的合同文档 文件类型：.pdf/.html
3. FLOW - 签署过程 文件类型：.pdf/.html
4. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
5. BUSINESSLICENSE - 营业执照 文件类型：.jpg/.jpeg/.png
6. IDCARD - 身份证 文件类型：.jpg/.jpeg/.png
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 上传文件内容数组，最多支持20个文件
         * @type {Array.<UploadFile> || null}
         */
        this.FileInfos = null;

        /**
         * 上传文件链接数组，最多支持20个URL
         * @type {string || null}
         */
        this.FileUrls = null;

        /**
         * 是否将pdf灰色矩阵置白
true--是，处理置白
false--否，不处理
         * @type {boolean || null}
         */
        this.CoverRect = null;

        /**
         * 特殊文件类型需要指定文件类型：
HTML-- .html文件
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 用户自定义ID数组，与上传文件一一对应
         * @type {Array.<string> || null}
         */
        this.CustomIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
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
        this.FileUrls = 'FileUrls' in params ? params.FileUrls : null;
        this.CoverRect = 'CoverRect' in params ? params.CoverRect : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.CustomIds = 'CustomIds' in params ? params.CustomIds : null;

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
         * 操作用户id
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 流程id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 撤销原因
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
 * 模板控件信息
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果是 Component 控件类型，则可选类型为：
TEXT - 内容文本控件
DATE - 内容日期控件
SELECT - 勾选框控件
如果是 SignComponent 控件类型，则可选类型为：
SIGN_SEAL - 签署印章控件
SIGN_DATE - 签署日期控件
SIGN_SIGNATURE - 手写签名控件
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 参数控件宽度，单位pt
         * @type {number || null}
         */
        this.ComponentWidth = null;

        /**
         * 参数控件高度，单位pt
         * @type {number || null}
         */
        this.ComponentHeight = null;

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
         * 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N）
         * @type {number || null}
         */
        this.FileIndex = null;

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
         * 扩展参数：
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
         * 控件关联的签署人ID
         * @type {string || null}
         */
        this.ComponentRecipientId = null;

        /**
         * 控件所填写的内容
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 是否是表单域类型，默认不存在
         * @type {boolean || null}
         */
        this.IsFormType = null;

        /**
         * NORMAL 正常模式，使用坐标制定签署控件位置
FIELD 表单域，需使用ComponentName指定表单域名称
KEYWORD 关键字，使用ComponentId指定关键字
         * @type {string || null}
         */
        this.GenerateMode = null;

        /**
         * 日期控件类型字号
         * @type {number || null}
         */
        this.ComponentDateFontSize = null;

        /**
         * 指定关键字时横坐标偏移量
         * @type {number || null}
         */
        this.OffsetX = null;

        /**
         * 指定关键字时纵坐标偏移量
         * @type {number || null}
         */
        this.OffsetY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentRequired = 'ComponentRequired' in params ? params.ComponentRequired : null;
        this.ComponentExtra = 'ComponentExtra' in params ? params.ComponentExtra : null;
        this.ComponentRecipientId = 'ComponentRecipientId' in params ? params.ComponentRecipientId : null;
        this.ComponentValue = 'ComponentValue' in params ? params.ComponentValue : null;
        this.IsFormType = 'IsFormType' in params ? params.IsFormType : null;
        this.GenerateMode = 'GenerateMode' in params ? params.GenerateMode : null;
        this.ComponentDateFontSize = 'ComponentDateFontSize' in params ? params.ComponentDateFontSize : null;
        this.OffsetX = 'OffsetX' in params ? params.OffsetX : null;
        this.OffsetY = 'OffsetY' in params ? params.OffsetY : null;

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
 * CreateFlowByFiles返回参数结构体
 * @class
 */
class CreateFlowByFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 合同预览链接
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
 * DescribeFlowBriefs请求参数结构体
 * @class
 */
class DescribeFlowBriefsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 需要查询的流程ID列表
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

        /**
         * 代理商信息
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
 * DescribeFileUrls请求参数结构体
 * @class
 */
class DescribeFileUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件对应的业务类型，目前支持：
- 模板 "TEMPLATE"
- 文档 "DOCUMENT"
- 印章  “SEAL”
- 流程 "FLOW"
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 操作者信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 业务编号的数组，如模板编号、文档编号、印章编号
         * @type {Array.<string> || null}
         */
        this.BusinessIds = null;

        /**
         * 文件类型，"JPG", "PDF","ZIP"等
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 下载后的文件命名，只有fileType为zip的时候生效
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 指定资源起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 指定资源数量，查询全部资源则传入-1
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 下载url过期时间，0: 按默认值5分钟，允许范围：1s~24*60*60s(1天)
         * @type {number || null}
         */
        this.UrlTtl = null;

        /**
         * 流程校验发送邮件权限
         * @type {string || null}
         */
        this.CcToken = null;

        /**
         * 场景
         * @type {string || null}
         */
        this.Scene = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.BusinessIds = 'BusinessIds' in params ? params.BusinessIds : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.UrlTtl = 'UrlTtl' in params ? params.UrlTtl : null;
        this.CcToken = 'CcToken' in params ? params.CcToken : null;
        this.Scene = 'Scene' in params ? params.Scene : null;

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
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
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
         * 本环节操作人签署控件配置，为企业静默签署时，只允许类型为SIGN_SEAL（印章）和SIGN_DATE（日期）控件，并且传入印章编号。
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
         * 下属机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 经办人的用户ID
         * @type {string || null}
         */
        this.OperatorId = null;

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
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.OperatorId = 'OperatorId' in params ? params.OperatorId : null;

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
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
         * @type {number || null}
         */
        this.ApproverType = null;

        /**
         * 如果签署方为企业，需要填入企业全称
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 是否需要签署
- `false`: 不需要签署
-  `true`:  需要签署
         * @type {boolean || null}
         */
        this.Required = null;

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
         * 签署方经办人证件号码
         * @type {string || null}
         */
        this.ApproverIdCardNumber = null;

        /**
         * 签署方经办人证件类型ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
         * @type {string || null}
         */
        this.ApproverIdCardType = null;

        /**
         * 签署方经办人在模板中的角色ID
         * @type {string || null}
         */
        this.RecipientId = null;

        /**
         * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 签署前置条件：是否需要阅读全文，默认为不需要
         * @type {boolean || null}
         */
        this.IsFullText = null;

        /**
         * 签署前置条件：阅读时长限制，默认为不需要
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 是否发送短信，sms--短信通知，none--不通知，默认为sms
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * 签署意愿确认渠道,WEIXINAPP:人脸识别
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

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
        this.Required = 'Required' in params ? params.Required : null;
        this.ApproverName = 'ApproverName' in params ? params.ApproverName : null;
        this.ApproverMobile = 'ApproverMobile' in params ? params.ApproverMobile : null;
        this.ApproverIdCardNumber = 'ApproverIdCardNumber' in params ? params.ApproverIdCardNumber : null;
        this.ApproverIdCardType = 'ApproverIdCardType' in params ? params.ApproverIdCardType : null;
        this.RecipientId = 'RecipientId' in params ? params.RecipientId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsFullText = 'IsFullText' in params ? params.IsFullText : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;

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
 * CreateFlowByFiles请求参数结构体
 * @class
 */
class CreateFlowByFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方用户信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 流程名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署pdf文件的资源编号列表
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 签署参与者信息
         * @type {Array.<ApproverInfo> || null}
         */
        this.Approvers = null;

        /**
         * 流程描述
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签）
         * @type {boolean || null}
         */
        this.Unordered = null;

        /**
         * 流程的类型
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 流程的签署截止时间
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 应用号信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 经办人内容控件配置。可选类型为：
TEXT - 内容文本控件
MULTI_LINE_TEXT - 多行文本控件
注：默认字体大小为 字号12
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 被抄送人的信息列表
         * @type {Array.<CcInfo> || null}
         */
        this.CcInfos = null;

        /**
         * 是否需要预览，true：预览模式，false：非预览（默认）
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

        if (params.Operator) {
            let obj = new UserInfo();
            obj.deserialize(params.Operator)
            this.Operator = obj;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new ApproverInfo();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.Unordered = 'Unordered' in params ? params.Unordered : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }

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
         * 流程编号
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
 * 应用相关信息
 * @class
 */
class Agent extends  AbstractModel {
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
 * 电子文档的控件填充信息
 * @class
 */
class FormField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控件填充value
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 控件id
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 控件名字
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
 * DescribeFlowTemplates请求参数结构体
 * @class
 */
class DescribeFlowTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人信息
         * @type {UserInfo || null}
         */
        this.Operator = null;

        /**
         * 查询偏移位置，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询个数，默认20，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 应用相关信息
         * @type {Agent || null}
         */
        this.Agent = null;

        /**
         * 暂未开放
         * @type {number || null}
         */
        this.GenerateSource = null;

        /**
         * 查询内容：0-模版列表及详情（默认），1-仅模版列表
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

        if (params.Agent) {
            let obj = new Agent();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.GenerateSource = 'GenerateSource' in params ? params.GenerateSource : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

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
- `1` 未签署
- `2`  部分签署
- `3`  已退回
- `4`  完成签署
- `5`  已过期
- `6`  已取消
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

module.exports = {
    UploadFile: UploadFile,
    DescribeFileUrlsResponse: DescribeFileUrlsResponse,
    TemplateInfo: TemplateInfo,
    CreateDocumentResponse: CreateDocumentResponse,
    StartFlowRequest: StartFlowRequest,
    CancelFlowResponse: CancelFlowResponse,
    CreateDocumentRequest: CreateDocumentRequest,
    CreateFlowRequest: CreateFlowRequest,
    CreateSchemeUrlRequest: CreateSchemeUrlRequest,
    FileUrl: FileUrl,
    DescribeThirdPartyAuthCodeRequest: DescribeThirdPartyAuthCodeRequest,
    UploadFilesRequest: UploadFilesRequest,
    CancelFlowRequest: CancelFlowRequest,
    DescribeFlowBriefsResponse: DescribeFlowBriefsResponse,
    Component: Component,
    UploadFilesResponse: UploadFilesResponse,
    DescribeThirdPartyAuthCodeResponse: DescribeThirdPartyAuthCodeResponse,
    CreateFlowByFilesResponse: CreateFlowByFilesResponse,
    DescribeFlowBriefsRequest: DescribeFlowBriefsRequest,
    Recipient: Recipient,
    DescribeFileUrlsRequest: DescribeFileUrlsRequest,
    ApproverInfo: ApproverInfo,
    Caller: Caller,
    DescribeFlowTemplatesResponse: DescribeFlowTemplatesResponse,
    Filter: Filter,
    FileInfo: FileInfo,
    FlowCreateApprover: FlowCreateApprover,
    StartFlowResponse: StartFlowResponse,
    CreateSchemeUrlResponse: CreateSchemeUrlResponse,
    CreateFlowByFilesRequest: CreateFlowByFilesRequest,
    CreateFlowResponse: CreateFlowResponse,
    Agent: Agent,
    FormField: FormField,
    DescribeFlowTemplatesRequest: DescribeFlowTemplatesRequest,
    UserInfo: UserInfo,
    FlowBrief: FlowBrief,
    CcInfo: CcInfo,

}
