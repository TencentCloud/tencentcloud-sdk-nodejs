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
 * BatchSendEmail请求参数结构体
 * @class
 */
class BatchSendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com。如需填写发件人说明，请按照
发信人 &lt;邮件地址&gt; 的方式填写，例如：
腾讯云团队 &lt;noreply@mail.qcloud.com&gt;
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * 收件人列表ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 邮件主题
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * 任务类型 1: 立即发送 2: 定时发送 3: 周期（频率）发送
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * 使用模板发送时，填写的模板相关参数
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 已废弃
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * 需要发送附件时，填写附件相关参数（暂未支持）
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * 周期发送任务的必要参数
         * @type {CycleEmailParam || null}
         */
        this.CycleParam = null;

        /**
         * 定时发送任务的必要参数
         * @type {TimedEmailParam || null}
         */
        this.TimedParam = null;

        /**
         * 退订选项 1: 加入退订链接 0: 不加入退订链接
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * 是否添加广告标识 0:不添加 1:添加到subject前面，2:添加到subject后面
         * @type {number || null}
         */
        this.ADLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ReplyToAddresses = 'ReplyToAddresses' in params ? params.ReplyToAddresses : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Simple) {
            let obj = new Simple();
            obj.deserialize(params.Simple)
            this.Simple = obj;
        }

        if (params.Attachments) {
            this.Attachments = new Array();
            for (let z in params.Attachments) {
                let obj = new Attachment();
                obj.deserialize(params.Attachments[z]);
                this.Attachments.push(obj);
            }
        }

        if (params.CycleParam) {
            let obj = new CycleEmailParam();
            obj.deserialize(params.CycleParam)
            this.CycleParam = obj;
        }

        if (params.TimedParam) {
            let obj = new TimedEmailParam();
            obj.deserialize(params.TimedParam)
            this.TimedParam = obj;
        }
        this.Unsubscribe = 'Unsubscribe' in params ? params.Unsubscribe : null;
        this.ADLocation = 'ADLocation' in params ? params.ADLocation : null;

    }
}

/**
 * GetEmailTemplate请求参数结构体
 * @class
 */
class GetEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

    }
}

/**
 * ListSendTasks返回参数结构体
 * @class
 */
class ListSendTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据记录
         * @type {Array.<SendTaskData> || null}
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
                let obj = new SendTaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReceiver返回参数结构体
 * @class
 */
class CreateReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表id，后续根据收件人列表id上传收件人地址
         * @type {number || null}
         */
        this.ReceiverId = null;

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
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmailTemplate请求参数结构体
 * @class
 */
class CreateEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 模板内容
         * @type {TemplateContent || null}
         */
        this.TemplateContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }

    }
}

/**
 * ListEmailAddress返回参数结构体
 * @class
 */
class ListEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信地址列表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EmailSender> || null}
         */
        this.EmailSenders = null;

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

        if (params.EmailSenders) {
            this.EmailSenders = new Array();
            for (let z in params.EmailSenders) {
                let obj = new EmailSender();
                obj.deserialize(params.EmailSenders[z]);
                this.EmailSenders.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEmailAddress请求参数结构体
 * @class
 */
class ListEmailAddressRequest extends  AbstractModel {
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
 * UpdateEmailSmtpPassWord返回参数结构体
 * @class
 */
class UpdateEmailSmtpPassWordResponse extends  AbstractModel {
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
 * ListReceivers请求参数结构体
 * @class
 */
class ListReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，整型，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目，整型，不超过100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 列表状态(1 待上传 2 上传中  3传完成)，若查询所有就不传这个字段
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 列表名称的关键字，模糊查询
         * @type {string || null}
         */
        this.KeyWord = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;

    }
}

/**
 * GetEmailIdentity返回参数结构体
 * @class
 */
class GetEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证类型。固定值：DOMAIN
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * 是否已通过验证
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * DNS配置详情
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListBlackEmailAddress请求参数结构体
 * @class
 */
class ListBlackEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 规范，配合Offset使用
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 规范，配合Limit使用，Limit最大取值为100
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 可以指定邮箱进行查询
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 可以指定任务ID进行查询
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * 附件结构，包含附件名和base64之后的附件内容。
 * @class
 */
class Attachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 附件名称，最大支持255个字符长度，不支持部分附件类型，详情请参考[附件类型](https://cloud.tencent.com/document/product/1288/51951)。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Base64之后的附件内容，你可以发送的附件大小上限为4M。注意：腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍。应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 接口会返回错误。
         * @type {string || null}
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 模板发送相关信息，包含模板ID，模板变量参数等信息
 * @class
 */
class Template extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。如果没有模板，请先新建一个
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。
注意：参数值不能是html等复杂类型的数据。
示例：{"name":"xxx","age":"xx"}
         * @type {string || null}
         */
        this.TemplateData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.TemplateData = 'TemplateData' in params ? params.TemplateData : null;

    }
}

/**
 * ListSendTasks请求参数结构体
 * @class
 */
class ListSendTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，整型，从0开始，0代表跳过0行
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目，整型,不超过100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 任务状态 1 待开始 5 发送中 6 今日暂停发送  7 发信异常 10 发送完成。查询所有状态，则不传这个字段
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 收件人列表ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 任务类型 1即时 2定时 3周期，查询所有类型则不传这个字段
         * @type {number || null}
         */
        this.TaskType = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * GetSendEmailStatus返回参数结构体
 * @class
 */
class GetSendEmailStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邮件发送状态列表
         * @type {Array.<SendEmailStatus> || null}
         */
        this.EmailStatusList = null;

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

        if (params.EmailStatusList) {
            this.EmailStatusList = new Array();
            for (let z in params.EmailStatusList) {
                let obj = new SendEmailStatus();
                obj.deserialize(params.EmailStatusList[z]);
                this.EmailStatusList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendEmail请求参数结构体
 * @class
 */
class SendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com
如需填写发件人说明，请按照如下方式： 
别名 <邮箱地址>
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * 收信人邮箱地址，最多支持群发50人。注意：邮件内容会显示所有收件人地址，非群发邮件请多次调用API发送。
         * @type {Array.<string> || null}
         */
        this.Destination = null;

        /**
         * 邮件主题
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * 使用模板发送时，填写的模板相关参数。因 Simple 已经废除使用，Template 为必填项
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 已废弃
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * 需要发送附件时，填写附件相关参数。腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍，应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 时接口会返回错误
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * 退订选项 1: 加入退订链接 0: 不加入退订链接
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * 邮件触发类型 0:非触发类，默认类型，营销类邮件、非即时类邮件等选择此类型  1:触发类，验证码等即时发送类邮件，若邮件超过一定大小，系统会自动选择非触发类型通道
         * @type {number || null}
         */
        this.TriggerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.ReplyToAddresses = 'ReplyToAddresses' in params ? params.ReplyToAddresses : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Simple) {
            let obj = new Simple();
            obj.deserialize(params.Simple)
            this.Simple = obj;
        }

        if (params.Attachments) {
            this.Attachments = new Array();
            for (let z in params.Attachments) {
                let obj = new Attachment();
                obj.deserialize(params.Attachments[z]);
                this.Attachments.push(obj);
            }
        }
        this.Unsubscribe = 'Unsubscribe' in params ? params.Unsubscribe : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;

    }
}

/**
 * DeleteBlackList请求参数结构体
 * @class
 */
class DeleteBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要清除的黑名单邮箱列表，数组长度至少为1
         * @type {Array.<string> || null}
         */
        this.EmailAddressList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddressList = 'EmailAddressList' in params ? params.EmailAddressList : null;

    }
}

/**
 * 用于描述发件人相关信息
 * @class
 */
class EmailSender extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信地址
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 发信人别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EmailSenderName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreatedTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.EmailSenderName = 'EmailSenderName' in params ? params.EmailSenderName : null;
        this.CreatedTimestamp = 'CreatedTimestamp' in params ? params.CreatedTimestamp : null;

    }
}

/**
 * BatchSendEmail返回参数结构体
 * @class
 */
class BatchSendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送任务ID
         * @type {number || null}
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
 * DeleteEmailIdentity请求参数结构体
 * @class
 */
class DeleteEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信域名
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * UpdateEmailIdentity请求参数结构体
 * @class
 */
class UpdateEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求验证的域名
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * GetEmailIdentity请求参数结构体
 * @class
 */
class GetEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信域名
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * DeleteEmailIdentity返回参数结构体
 * @class
 */
class DeleteEmailIdentityResponse extends  AbstractModel {
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
 * GetStatisticsReport请求参数结构体
 * @class
 */
class GetStatisticsReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始日期
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 发信域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 收件方邮箱类型，例如gmail.com
         * @type {string || null}
         */
        this.ReceivingMailboxType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ReceivingMailboxType = 'ReceivingMailboxType' in params ? params.ReceivingMailboxType : null;

    }
}

/**
 * CreateReceiver请求参数结构体
 * @class
 */
class CreateReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表名称
         * @type {string || null}
         */
        this.ReceiversName = null;

        /**
         * 收件人列表描述
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * 发送任务数据
 * @class
 */
class SendTaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 发信地址
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * 收件人列表Id
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 任务状态 1 待开始 5 发送中 6 今日暂停发送  7 发信异常 10 发送完成
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 任务类型 1 即时 2 定时 3 周期
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务请求发信数量
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * 已经发送数量
         * @type {number || null}
         */
        this.SendCount = null;

        /**
         * 缓存数量
         * @type {number || null}
         */
        this.CacheCount = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 邮件主题
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * 模板和模板数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 周期任务参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CycleEmailParam || null}
         */
        this.CycleParam = null;

        /**
         * 定时任务参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimedEmailParam || null}
         */
        this.TimedParam = null;

        /**
         * 任务异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 收件人列表名称
         * @type {string || null}
         */
        this.ReceiversName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.SendCount = 'SendCount' in params ? params.SendCount : null;
        this.CacheCount = 'CacheCount' in params ? params.CacheCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Subject = 'Subject' in params ? params.Subject : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.CycleParam) {
            let obj = new CycleEmailParam();
            obj.deserialize(params.CycleParam)
            this.CycleParam = obj;
        }

        if (params.TimedParam) {
            let obj = new TimedEmailParam();
            obj.deserialize(params.TimedParam)
            this.TimedParam = obj;
        }
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;

    }
}

/**
 * 模板列表结构
 * @class
 */
class TemplatesMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreatedTimestamp = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 模板状态。1-审核中|0-已通过|2-拒绝|其它-不可用
         * @type {number || null}
         */
        this.TemplateStatus = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * 审核原因
         * @type {string || null}
         */
        this.ReviewReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreatedTimestamp = 'CreatedTimestamp' in params ? params.CreatedTimestamp : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateStatus = 'TemplateStatus' in params ? params.TemplateStatus : null;
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.ReviewReason = 'ReviewReason' in params ? params.ReviewReason : null;

    }
}

/**
 * DeleteEmailTemplate返回参数结构体
 * @class
 */
class DeleteEmailTemplateResponse extends  AbstractModel {
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
 * 统计数据的结构体
 * @class
 */
class Volume extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SendDate = null;

        /**
         * 邮件请求数量
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * 腾讯云通过数量
         * @type {number || null}
         */
        this.AcceptedCount = null;

        /**
         * 送达数量
         * @type {number || null}
         */
        this.DeliveredCount = null;

        /**
         * 打开邮件的用户数量，根据收件人去重
         * @type {number || null}
         */
        this.OpenedCount = null;

        /**
         * 点击了邮件中的链接数量用户数量
         * @type {number || null}
         */
        this.ClickedCount = null;

        /**
         * 退信数量
         * @type {number || null}
         */
        this.BounceCount = null;

        /**
         * 取消订阅的用户数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnsubscribeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDate = 'SendDate' in params ? params.SendDate : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.AcceptedCount = 'AcceptedCount' in params ? params.AcceptedCount : null;
        this.DeliveredCount = 'DeliveredCount' in params ? params.DeliveredCount : null;
        this.OpenedCount = 'OpenedCount' in params ? params.OpenedCount : null;
        this.ClickedCount = 'ClickedCount' in params ? params.ClickedCount : null;
        this.BounceCount = 'BounceCount' in params ? params.BounceCount : null;
        this.UnsubscribeCount = 'UnsubscribeCount' in params ? params.UnsubscribeCount : null;

    }
}

/**
 * CreateEmailIdentity请求参数结构体
 * @class
 */
class CreateEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您的发信域名，建议使用三级以上域名。例如：mail.qcloud.com。
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * UpdateEmailSmtpPassWord请求参数结构体
 * @class
 */
class UpdateEmailSmtpPassWordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * smtp密码，长度限制64
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 发信邮箱,长度限制128
         * @type {string || null}
         */
        this.EmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;

    }
}

/**
 * 收件人列表数据类型
 * @class
 */
class ReceiverData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 收件人列表名称
         * @type {string || null}
         */
        this.ReceiversName = null;

        /**
         * 收件人地址总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 收件人列表描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 列表状态(1 待上传 2 上传中 3 上传完成)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReceiversStatus = null;

        /**
         * 创建时间,如:2021-09-28 16:40:35
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ReceiversStatus = 'ReceiversStatus' in params ? params.ReceiversStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * UpdateEmailIdentity返回参数结构体
 * @class
 */
class UpdateEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证类型。固定值：DOMAIN
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * 是否已通过验证
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * 需要配置的DNS信息
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEmailTemplate请求参数结构体
 * @class
 */
class DeleteEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

    }
}

/**
 * DeleteBlackList返回参数结构体
 * @class
 */
class DeleteBlackListResponse extends  AbstractModel {
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
 * UpdateEmailTemplate请求参数结构体
 * @class
 */
class UpdateEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板内容
         * @type {TemplateContent || null}
         */
        this.TemplateContent = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * 模板名字
         * @type {string || null}
         */
        this.TemplateName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

    }
}

/**
 * 描述邮件发送状态
 * @class
 */
class SendEmailStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * SendEmail返回的MessageId
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 收件人邮箱
         * @type {string || null}
         */
        this.ToEmailAddress = null;

        /**
         * 发件人邮箱
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * 腾讯云处理状态
0: 处理成功
1001: 内部系统异常
1002: 内部系统异常
1003: 内部系统异常
1003: 内部系统异常
1004: 发信超时
1005: 内部系统异常
1006: 触发频率控制，短时间内对同一地址发送过多邮件
1007: 邮件地址在黑名单中
1008: 域名被收件人拒收
1009: 内部系统异常
1010: 超出了每日发送限制
1011: 无发送自定义内容权限，必须使用模板
1013: 域名被收件人取消订阅
2001: 找不到相关记录
3007: 模板ID无效或者不可用
3008: 被收信域名临时封禁
3009: 无权限使用该模板
3010: TemplateData字段格式不正确 
3014: 发件域名没有经过认证，无法发送
3020: 收件方邮箱类型在黑名单
3024: 邮箱地址格式预检查失败
3030: 退信率过高，临时限制发送
3033: 余额不足，账号欠费等
         * @type {number || null}
         */
        this.SendStatus = null;

        /**
         * 收件方处理状态
0: 请求成功被腾讯云接受，进入发送队列
1: 邮件递送成功，DeliverTime表示递送成功的时间
2: 邮件因某种原因被丢弃，DeliverMessage表示丢弃原因
3: 收件方ESP拒信，一般原因为邮箱地址不存在，或其它原因
8: 邮件被ESP因某些原因延迟递送，DeliverMessage表示延迟原因
         * @type {number || null}
         */
        this.DeliverStatus = null;

        /**
         * 收件方处理状态描述
         * @type {string || null}
         */
        this.DeliverMessage = null;

        /**
         * 请求到达腾讯云时间戳
         * @type {number || null}
         */
        this.RequestTime = null;

        /**
         * 腾讯云执行递送时间戳
         * @type {number || null}
         */
        this.DeliverTime = null;

        /**
         * 用户是否打开该邮件
         * @type {boolean || null}
         */
        this.UserOpened = null;

        /**
         * 用户是否点击该邮件中的链接
         * @type {boolean || null}
         */
        this.UserClicked = null;

        /**
         * 用户是否取消该发送者的订阅
         * @type {boolean || null}
         */
        this.UserUnsubscribed = null;

        /**
         * 用户是否举报该发送者
         * @type {boolean || null}
         */
        this.UserComplainted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ToEmailAddress = 'ToEmailAddress' in params ? params.ToEmailAddress : null;
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.SendStatus = 'SendStatus' in params ? params.SendStatus : null;
        this.DeliverStatus = 'DeliverStatus' in params ? params.DeliverStatus : null;
        this.DeliverMessage = 'DeliverMessage' in params ? params.DeliverMessage : null;
        this.RequestTime = 'RequestTime' in params ? params.RequestTime : null;
        this.DeliverTime = 'DeliverTime' in params ? params.DeliverTime : null;
        this.UserOpened = 'UserOpened' in params ? params.UserOpened : null;
        this.UserClicked = 'UserClicked' in params ? params.UserClicked : null;
        this.UserUnsubscribed = 'UserUnsubscribed' in params ? params.UserUnsubscribed : null;
        this.UserComplainted = 'UserComplainted' in params ? params.UserComplainted : null;

    }
}

/**
 * ListEmailTemplates请求参数结构体
 * @class
 */
class ListEmailTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取模板数据量，用于分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 获取模板偏移值，用于分页
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateReceiverDetailWithData返回参数结构体
 * @class
 */
class CreateReceiverDetailWithDataResponse extends  AbstractModel {
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
 * 收件人明细输入参数，包含收件人邮箱，以及模板参数
 * @class
 */
class ReceiverInputData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。
注意：参数值不能是html等复杂类型的数据。TemplateData (整个 JSON 结构) 总长度限制为 800 bytes。
         * @type {string || null}
         */
        this.TemplateData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Email = 'Email' in params ? params.Email : null;
        this.TemplateData = 'TemplateData' in params ? params.TemplateData : null;

    }
}

/**
 * CreateReceiverDetail返回参数结构体
 * @class
 */
class CreateReceiverDetailResponse extends  AbstractModel {
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
 * ListEmailTemplates返回参数结构体
 * @class
 */
class ListEmailTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邮件模板列表
         * @type {Array.<TemplatesMetadata> || null}
         */
        this.TemplatesMetadata = null;

        /**
         * 模板总数量
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

        if (params.TemplatesMetadata) {
            this.TemplatesMetadata = new Array();
            for (let z in params.TemplatesMetadata) {
                let obj = new TemplatesMetadata();
                obj.deserialize(params.TemplatesMetadata[z]);
                this.TemplatesMetadata.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendEmail返回参数结构体
 * @class
 */
class SendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接受消息生成的唯一消息标识符。
         * @type {string || null}
         */
        this.MessageId = null;

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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListBlackEmailAddress返回参数结构体
 * @class
 */
class ListBlackEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单列表
         * @type {Array.<BlackEmailAddress> || null}
         */
        this.BlackList = null;

        /**
         * 黑名单总数
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

        if (params.BlackList) {
            this.BlackList = new Array();
            for (let z in params.BlackList) {
                let obj = new BlackEmailAddress();
                obj.deserialize(params.BlackList[z]);
                this.BlackList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSendEmailStatus请求参数结构体
 * @class
 */
class GetSendEmailStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送的日期，必填。仅支持查询某个日期，不支持范围查询。
         * @type {string || null}
         */
        this.RequestDate = null;

        /**
         * 偏移量。默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取最大条数，最多 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * SendMail接口返回的MessageId字段。
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 收件人邮箱。
         * @type {string || null}
         */
        this.ToEmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestDate = 'RequestDate' in params ? params.RequestDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ToEmailAddress = 'ToEmailAddress' in params ? params.ToEmailAddress : null;

    }
}

/**
 * 邮件发送的内容，可以是纯文本(TEXT)，也可以是纯代码(HTML)，或者纯文本+HTML的组合(建议方式)
 * @class
 */
class Simple extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64之后的Html代码。需要包含所有的代码信息，不要包含外部css，否则会导致显示格式错乱
         * @type {string || null}
         */
        this.Html = null;

        /**
         * base64之后的纯文本信息，如果没有Html，邮件中会直接显示纯文本；如果有Html，它代表邮件的纯文本样式
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Html = 'Html' in params ? params.Html : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * DeleteReceiver请求参数结构体
 * @class
 */
class DeleteReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表id，创建收件人列表时会返回
         * @type {number || null}
         */
        this.ReceiverId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;

    }
}

/**
 * ListEmailIdentities返回参数结构体
 * @class
 */
class ListEmailIdentitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信域名列表
         * @type {Array.<EmailIdentity> || null}
         */
        this.EmailIdentities = null;

        /**
         * 最大信誉等级
         * @type {number || null}
         */
        this.MaxReputationLevel = null;

        /**
         * 单域名最高日发送量
         * @type {number || null}
         */
        this.MaxDailyQuota = null;

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

        if (params.EmailIdentities) {
            this.EmailIdentities = new Array();
            for (let z in params.EmailIdentities) {
                let obj = new EmailIdentity();
                obj.deserialize(params.EmailIdentities[z]);
                this.EmailIdentities.push(obj);
            }
        }
        this.MaxReputationLevel = 'MaxReputationLevel' in params ? params.MaxReputationLevel : null;
        this.MaxDailyQuota = 'MaxDailyQuota' in params ? params.MaxDailyQuota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReceiver返回参数结构体
 * @class
 */
class DeleteReceiverResponse extends  AbstractModel {
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
 * 模板内容，TEXT和HTML必须至少存在一项，建议使用TEXT和HTML的组合
 * @class
 */
class TemplateContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64之后的Html代码
         * @type {string || null}
         */
        this.Html = null;

        /**
         * base64之后的文本内容
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Html = 'Html' in params ? params.Html : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * GetStatisticsReport返回参数结构体
 * @class
 */
class GetStatisticsReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信统计报告，按天
         * @type {Array.<Volume> || null}
         */
        this.DailyVolumes = null;

        /**
         * 发信统计报告，总览
         * @type {Volume || null}
         */
        this.OverallVolume = null;

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

        if (params.DailyVolumes) {
            this.DailyVolumes = new Array();
            for (let z in params.DailyVolumes) {
                let obj = new Volume();
                obj.deserialize(params.DailyVolumes[z]);
                this.DailyVolumes.push(obj);
            }
        }

        if (params.OverallVolume) {
            let obj = new Volume();
            obj.deserialize(params.OverallVolume)
            this.OverallVolume = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEmailAddress请求参数结构体
 * @class
 */
class DeleteEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信地址
         * @type {string || null}
         */
        this.EmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;

    }
}

/**
 * 发信域名验证列表结构体
 * @class
 */
class EmailIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发信域名
         * @type {string || null}
         */
        this.IdentityName = null;

        /**
         * 验证类型，固定为DOMAIN
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * 是否已通过验证
         * @type {boolean || null}
         */
        this.SendingEnabled = null;

        /**
         * 当前信誉等级
         * @type {number || null}
         */
        this.CurrentReputationLevel = null;

        /**
         * 当日最高发信量
         * @type {number || null}
         */
        this.DailyQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityName = 'IdentityName' in params ? params.IdentityName : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.SendingEnabled = 'SendingEnabled' in params ? params.SendingEnabled : null;
        this.CurrentReputationLevel = 'CurrentReputationLevel' in params ? params.CurrentReputationLevel : null;
        this.DailyQuota = 'DailyQuota' in params ? params.DailyQuota : null;

    }
}

/**
 * 邮箱黑名单结构，包含被拉黑的邮箱地址和被拉黑时间
 * @class
 */
class BlackEmailAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邮箱被拉黑时间
         * @type {string || null}
         */
        this.BounceTime = null;

        /**
         * 被拉黑的邮箱地址
         * @type {string || null}
         */
        this.EmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BounceTime = 'BounceTime' in params ? params.BounceTime : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;

    }
}

/**
 * 创建重复周期发送邮件任务的参数
 * @class
 */
class CycleEmailParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 任务周期 小时维度
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 是否终止周期，用于任务更新 0否1是
         * @type {number || null}
         */
        this.TermCycle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.TermCycle = 'TermCycle' in params ? params.TermCycle : null;

    }
}

/**
 * DeleteEmailAddress返回参数结构体
 * @class
 */
class DeleteEmailAddressResponse extends  AbstractModel {
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
 * CreateEmailIdentity返回参数结构体
 * @class
 */
class CreateEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证类型。固定值：DOMAIN
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * 是否已通过验证
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * 需要配置的DNS信息
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmailAddress请求参数结构体
 * @class
 */
class CreateEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您的发信地址（发信地址总数上限为10个）
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 发件人别名
         * @type {string || null}
         */
        this.EmailSenderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.EmailSenderName = 'EmailSenderName' in params ? params.EmailSenderName : null;

    }
}

/**
 * CreateReceiverDetail请求参数结构体
 * @class
 */
class CreateReceiverDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 邮箱
         * @type {Array.<string> || null}
         */
        this.Emails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.Emails = 'Emails' in params ? params.Emails : null;

    }
}

/**
 * CreateEmailTemplate返回参数结构体
 * @class
 */
class CreateEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {number || null}
         */
        this.TemplateID = null;

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
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListReceivers返回参数结构体
 * @class
 */
class ListReceiversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据记录
         * @type {Array.<ReceiverData> || null}
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
                let obj = new ReceiverData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmailAddress返回参数结构体
 * @class
 */
class CreateEmailAddressResponse extends  AbstractModel {
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
 * UpdateEmailTemplate返回参数结构体
 * @class
 */
class UpdateEmailTemplateResponse extends  AbstractModel {
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
 * CreateReceiverDetailWithData请求参数结构体
 * @class
 */
class CreateReceiverDetailWithDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人列表ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * 收信人邮箱以及模板参数，数组形式。收件人个数限制20000个以内。
         * @type {Array.<ReceiverInputData> || null}
         */
        this.Datas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new ReceiverInputData();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }

    }
}

/**
 * 创建定时发送邮件任务时，设置的定时参数，比如开始时间之类
 * @class
 */
class TimedEmailParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时发送邮件的开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;

    }
}

/**
 * 用于描述DNS记录的域名、记录类型、期望得到的值、目前配置的值
 * @class
 */
class DNSAttributes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录类型 CNAME | A | TXT | MX
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.SendDomain = null;

        /**
         * 需要配置的值
         * @type {string || null}
         */
        this.ExpectedValue = null;

        /**
         * 腾讯云目前检测到的值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 检测是否通过，创建时默认为false
         * @type {boolean || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SendDomain = 'SendDomain' in params ? params.SendDomain : null;
        this.ExpectedValue = 'ExpectedValue' in params ? params.ExpectedValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * GetEmailTemplate返回参数结构体
 * @class
 */
class GetEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板内容数据
         * @type {TemplateContent || null}
         */
        this.TemplateContent = null;

        /**
         * 模板状态 0-审核通过 1-待审核 2-审核拒绝
         * @type {number || null}
         */
        this.TemplateStatus = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

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

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }
        this.TemplateStatus = 'TemplateStatus' in params ? params.TemplateStatus : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEmailIdentities请求参数结构体
 * @class
 */
class ListEmailIdentitiesRequest extends  AbstractModel {
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

module.exports = {
    BatchSendEmailRequest: BatchSendEmailRequest,
    GetEmailTemplateRequest: GetEmailTemplateRequest,
    ListSendTasksResponse: ListSendTasksResponse,
    CreateReceiverResponse: CreateReceiverResponse,
    CreateEmailTemplateRequest: CreateEmailTemplateRequest,
    ListEmailAddressResponse: ListEmailAddressResponse,
    ListEmailAddressRequest: ListEmailAddressRequest,
    UpdateEmailSmtpPassWordResponse: UpdateEmailSmtpPassWordResponse,
    ListReceiversRequest: ListReceiversRequest,
    GetEmailIdentityResponse: GetEmailIdentityResponse,
    ListBlackEmailAddressRequest: ListBlackEmailAddressRequest,
    Attachment: Attachment,
    Template: Template,
    ListSendTasksRequest: ListSendTasksRequest,
    GetSendEmailStatusResponse: GetSendEmailStatusResponse,
    SendEmailRequest: SendEmailRequest,
    DeleteBlackListRequest: DeleteBlackListRequest,
    EmailSender: EmailSender,
    BatchSendEmailResponse: BatchSendEmailResponse,
    DeleteEmailIdentityRequest: DeleteEmailIdentityRequest,
    UpdateEmailIdentityRequest: UpdateEmailIdentityRequest,
    GetEmailIdentityRequest: GetEmailIdentityRequest,
    DeleteEmailIdentityResponse: DeleteEmailIdentityResponse,
    GetStatisticsReportRequest: GetStatisticsReportRequest,
    CreateReceiverRequest: CreateReceiverRequest,
    SendTaskData: SendTaskData,
    TemplatesMetadata: TemplatesMetadata,
    DeleteEmailTemplateResponse: DeleteEmailTemplateResponse,
    Volume: Volume,
    CreateEmailIdentityRequest: CreateEmailIdentityRequest,
    UpdateEmailSmtpPassWordRequest: UpdateEmailSmtpPassWordRequest,
    ReceiverData: ReceiverData,
    UpdateEmailIdentityResponse: UpdateEmailIdentityResponse,
    DeleteEmailTemplateRequest: DeleteEmailTemplateRequest,
    DeleteBlackListResponse: DeleteBlackListResponse,
    UpdateEmailTemplateRequest: UpdateEmailTemplateRequest,
    SendEmailStatus: SendEmailStatus,
    ListEmailTemplatesRequest: ListEmailTemplatesRequest,
    CreateReceiverDetailWithDataResponse: CreateReceiverDetailWithDataResponse,
    ReceiverInputData: ReceiverInputData,
    CreateReceiverDetailResponse: CreateReceiverDetailResponse,
    ListEmailTemplatesResponse: ListEmailTemplatesResponse,
    SendEmailResponse: SendEmailResponse,
    ListBlackEmailAddressResponse: ListBlackEmailAddressResponse,
    GetSendEmailStatusRequest: GetSendEmailStatusRequest,
    Simple: Simple,
    DeleteReceiverRequest: DeleteReceiverRequest,
    ListEmailIdentitiesResponse: ListEmailIdentitiesResponse,
    DeleteReceiverResponse: DeleteReceiverResponse,
    TemplateContent: TemplateContent,
    GetStatisticsReportResponse: GetStatisticsReportResponse,
    DeleteEmailAddressRequest: DeleteEmailAddressRequest,
    EmailIdentity: EmailIdentity,
    BlackEmailAddress: BlackEmailAddress,
    CycleEmailParam: CycleEmailParam,
    DeleteEmailAddressResponse: DeleteEmailAddressResponse,
    CreateEmailIdentityResponse: CreateEmailIdentityResponse,
    CreateEmailAddressRequest: CreateEmailAddressRequest,
    CreateReceiverDetailRequest: CreateReceiverDetailRequest,
    CreateEmailTemplateResponse: CreateEmailTemplateResponse,
    ListReceiversResponse: ListReceiversResponse,
    CreateEmailAddressResponse: CreateEmailAddressResponse,
    UpdateEmailTemplateResponse: UpdateEmailTemplateResponse,
    CreateReceiverDetailWithDataRequest: CreateReceiverDetailWithDataRequest,
    TimedEmailParam: TimedEmailParam,
    DNSAttributes: DNSAttributes,
    GetEmailTemplateResponse: GetEmailTemplateResponse,
    ListEmailIdentitiesRequest: ListEmailIdentitiesRequest,

}
