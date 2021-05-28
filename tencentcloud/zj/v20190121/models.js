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
 * ModifySmsTemplate返回参数结构体
 * @class
 */
class ModifySmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回
         * @type {ModifySmsTemplateDataStruct || null}
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
            let obj = new ModifySmsTemplateDataStruct();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 添加短信人群包信息接口返回
 * @class
 */
class SmsAddCrowdPackInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人群包id
         * @type {number || null}
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
 * PushMmsContent返回参数结构体
 * @class
 */
class PushMmsContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推送短信返回信息
         * @type {PushMmsContentResp || null}
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
            let obj = new PushMmsContentResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信模板创建接口返回
 * @class
 */
class AddSmsTemplateDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信模板ID
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeMmsInstanceList请求参数结构体
 * @class
 */
class DescribeMmsInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 业务代码
         * @type {string || null}
         */
        this.AppSubId = null;

        /**
         * 实例标题
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AppSubId = 'AppSubId' in params ? params.AppSubId : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * DescribeMmsInstanceInfo返回参数结构体
 * @class
 */
class DescribeMmsInstanceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 彩信实例信息
         * @type {MmsInstanceInfo || null}
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
            let obj = new MmsInstanceInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 发送短信返回
 * @class
 */
class SendSmsPaasDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送流水号
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 计费条数
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * OK为成功
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 短信请求错误码描述
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
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * AddCrowdPackInfo返回参数结构体
 * @class
 */
class AddCrowdPackInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回
         * @type {SmsAddCrowdPackInfoResponse || null}
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
            let obj = new SmsAddCrowdPackInfoResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddSmsSign请求参数结构体
 * @class
 */
class AddSmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司（0，1，2，3）。
1：APP（0，1，2，3，4） 。
2：网站（0，1，2，3，5）。
3：公众号或者小程序（0，1，2，3，6）。
4：商标（7）。
5：政府/机关事业单位/其他机构（2，3）。
注：必须按照对应关系选择证明类型，否则会审核失败。
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书
         * @type {number || null}
         */
        this.DocumentType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 资质图片url
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * 签名内容
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 签名备注，比如申请原因，使用场景等,可以填空
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
        this.License = 'License' in params ? params.License : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.International = 'International' in params ? params.International : null;
        this.ProofImage = 'ProofImage' in params ? params.ProofImage : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AddSmsSign返回参数结构体
 * @class
 */
class AddSmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名id数组
         * @type {PaasCreateSignResp || null}
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
            let obj = new PaasCreateSignResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSmsCampaignStatus请求参数结构体
 * @class
 */
class GetSmsCampaignStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 活动ID
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * DescribeSmsTemplateList返回参数结构体
 * @class
 */
class DescribeSmsTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据信息
         * @type {Array.<DescribeSmsTemplateListDataStruct> || null}
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
                let obj = new DescribeSmsTemplateListDataStruct();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 彩信实例状态列表
 * @class
 */
class MmsInstanceInfoList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数据量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 彩信实例状态信息列表
         * @type {Array.<MmsInstanceInfo> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new MmsInstanceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * GetCrowdPackList返回参数结构体
 * @class
 */
class GetCrowdPackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人群包信息列表
         * @type {SmsGetCrowdPackListResponse || null}
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
            let obj = new SmsGetCrowdPackListResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建超级短信样例返回结果
 * @class
 */
class CreateMmsInstanceResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码：0-成功 其它-失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 返回信息
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 样例id
         * @type {number || null}
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
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * AddSmsTemplate请求参数结构体
 * @class
 */
class AddSmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信签名，创建签名时返回
         * @type {number || null}
         */
        this.SignID = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 短信内容，动态内容使用占位符{1}，{2}等表示
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * 短信类型：{0:普通短信，1:营销短信}
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 短信模板标签
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 发送短信活动时配置的落地链接地址,仅用作短信活动
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 发送短信活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号
         * @type {Array.<number> || null}
         */
        this.CommonParams = null;

        /**
         * 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动
         * @type {Array.<number> || null}
         */
        this.UrlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.SignID = 'SignID' in params ? params.SignID : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.CommonParams = 'CommonParams' in params ? params.CommonParams : null;
        this.UrlParams = 'UrlParams' in params ? params.UrlParams : null;

    }
}

/**
 * DescribeMmsInstanceInfo请求参数结构体
 * @class
 */
class DescribeMmsInstanceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 彩信实例id
         * @type {number || null}
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
        this.License = 'License' in params ? params.License : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateCampaign返回参数结构体
 * @class
 */
class CreateCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动信息
         * @type {SmsCreateCampaignResponse || null}
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
            let obj = new SmsCreateCampaignResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 发送超级短信返回
 * @class
 */
class PushMmsContentResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码：0-成功 其它-失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 返回信息
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 消息回执id
         * @type {number || null}
         */
        this.MessageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;

    }
}

/**
 * 接口返回给服务商的COS路径等信息
 * @class
 */
class UploadFansInfoCosInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS路径
         * @type {string || null}
         */
        this.Key = null;

        /**
         * COS区域
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * CreateCampaign请求参数结构体
 * @class
 */
class CreateCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信活动发送时间
         * @type {number || null}
         */
        this.SendTime = null;

        /**
         * 短信活动名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 发送策略
         * @type {Array.<PaasStrategy> || null}
         */
        this.Strategies = null;

        /**
         * 废弃
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 废弃
         * @type {number || null}
         */
        this.CrowdID = null;

        /**
         * 活动类型(0-短信,1-超短,不填默认为超短)
         * @type {number || null}
         */
        this.SmsType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.SendTime = 'SendTime' in params ? params.SendTime : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Strategies) {
            this.Strategies = new Array();
            for (let z in params.Strategies) {
                let obj = new PaasStrategy();
                obj.deserialize(params.Strategies[z]);
                this.Strategies.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.CrowdID = 'CrowdID' in params ? params.CrowdID : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;

    }
}

/**
 * 短信子账号额度接口出参
 * @class
 */
class SmsAmountDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信活动配额
         * @type {number || null}
         */
        this.SmsCampaignAmount = null;

        /**
         * 短信活动消耗配额
         * @type {number || null}
         */
        this.SmsCampaignConsume = null;

        /**
         * 短信发送额度
         * @type {number || null}
         */
        this.SmsSendAmount = null;

        /**
         * 短信发送消耗额度
         * @type {number || null}
         */
        this.SmsSendConsume = null;

        /**
         * 超短活动额度
         * @type {number || null}
         */
        this.MmsCampaignAmount = null;

        /**
         * 超短活动消耗额度
         * @type {number || null}
         */
        this.MmsCampaignConsume = null;

        /**
         * 超短短信额度
         * @type {number || null}
         */
        this.MmsSendAmount = null;

        /**
         * 超短短信消耗额度
         * @type {number || null}
         */
        this.MmsSendConsume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SmsCampaignAmount = 'SmsCampaignAmount' in params ? params.SmsCampaignAmount : null;
        this.SmsCampaignConsume = 'SmsCampaignConsume' in params ? params.SmsCampaignConsume : null;
        this.SmsSendAmount = 'SmsSendAmount' in params ? params.SmsSendAmount : null;
        this.SmsSendConsume = 'SmsSendConsume' in params ? params.SmsSendConsume : null;
        this.MmsCampaignAmount = 'MmsCampaignAmount' in params ? params.MmsCampaignAmount : null;
        this.MmsCampaignConsume = 'MmsCampaignConsume' in params ? params.MmsCampaignConsume : null;
        this.MmsSendAmount = 'MmsSendAmount' in params ? params.MmsSendAmount : null;
        this.MmsSendConsume = 'MmsSendConsume' in params ? params.MmsSendConsume : null;

    }
}

/**
 * AddCrowdPackInfo请求参数结构体
 * @class
 */
class AddCrowdPackInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 人群包名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人群包文件名称,人群包文件必须为utf8编码，动态参数只能是汉字、数字、英文字母的组合，不能包含其他字符
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 人群包描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 已经上传好的人群包cos地址
         * @type {string || null}
         */
        this.CosUrl = null;

        /**
         * 人群包手机号数量
         * @type {number || null}
         */
        this.PhoneNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;

    }
}

/**
 * 短信api成功返回信息
 * @class
 */
class SmsSuccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功返回信息
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
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 短信人群包返回信息
 * @class
 */
class SmsGetCrowdPackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人群包总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 人群包返回数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SmsGetCrowdPackList> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SmsGetCrowdPackList();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * 获取短信模板状态返回
 * @class
 */
class DescribeSmsTemplateListDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 申请签名状态。其中：
0：表示审核通过。
-1：表示审核未通过或审核失败。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 提交审核时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DeleteMmsInstance返回参数结构体
 * @class
 */
class DeleteMmsInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除信息返回
         * @type {DelMmsInstanceData || null}
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
            let obj = new DelMmsInstanceData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySmsTemplate请求参数结构体
 * @class
 */
class ModifySmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信模板id
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 短信签名，创建签名时返回
         * @type {number || null}
         */
        this.SignID = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 短信内容，动态内容使用占位符{1}，{2}等表示
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * 短信类型：{0:普通短信，1:营销短信}
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 短信模板标签
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 发送短信活动时配置的落地链接地址,仅用作短信活动
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 发送短信活动时用于展示人群包动态参数模板占位符序号,仅用作短信活动
         * @type {Array.<number> || null}
         */
        this.CommonParams = null;

        /**
         * 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动
         * @type {Array.<number> || null}
         */
        this.UrlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SignID = 'SignID' in params ? params.SignID : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.CommonParams = 'CommonParams' in params ? params.CommonParams : null;
        this.UrlParams = 'UrlParams' in params ? params.UrlParams : null;

    }
}

/**
 * 彩信实例审核状态
 * @class
 */
class MmsInstanceStateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 审核状态：0未审核，1审核通过，2审核拒绝
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * 取消活动的返回值Data部分
 * @class
 */
class CancelActivityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功返回时的文字描述
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
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * SendSms返回参数结构体
 * @class
 */
class SendSmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出参数据
         * @type {Array.<SendSmsPaasDataStruct> || null}
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
                let obj = new SendSmsPaasDataStruct();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信发送人群包策略
 * @class
 */
class PaasStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人群包id
         * @type {number || null}
         */
        this.CrowdID = null;

        /**
         * 待选素材数组
         * @type {Array.<PaasStrategyItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CrowdID = 'CrowdID' in params ? params.CrowdID : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new PaasStrategyItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * CancelCampaign返回参数结构体
 * @class
 */
class CancelCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理结果
         * @type {CancelActivityData || null}
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
            let obj = new CancelActivityData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信活动统计人群包数据
 * @class
 */
class SmsCampaignStatisticsCrowdData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人群包id
         * @type {number || null}
         */
        this.CrowdId = null;

        /**
         * 人群包名称
         * @type {string || null}
         */
        this.CrowdName = null;

        /**
         * 人群包目标触达总数
         * @type {number || null}
         */
        this.CrowdCount = null;

        /**
         * 模板列表
         * @type {Array.<SmsCampaignStatisticsTemplateData> || null}
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
        this.CrowdId = 'CrowdId' in params ? params.CrowdId : null;
        this.CrowdName = 'CrowdName' in params ? params.CrowdName : null;
        this.CrowdCount = 'CrowdCount' in params ? params.CrowdCount : null;

        if (params.TemplateList) {
            this.TemplateList = new Array();
            for (let z in params.TemplateList) {
                let obj = new SmsCampaignStatisticsTemplateData();
                obj.deserialize(params.TemplateList[z]);
                this.TemplateList.push(obj);
            }
        }

    }
}

/**
 * DescribeSmsSignList请求参数结构体
 * @class
 */
class DescribeSmsSignListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 签名ID数组
         * @type {Array.<number> || null}
         */
        this.SignIdSet = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.SignIdSet = 'SignIdSet' in params ? params.SignIdSet : null;
        this.International = 'International' in params ? params.International : null;

    }
}

/**
 * GetCrowdUploadInfo返回参数结构体
 * @class
 */
class GetCrowdUploadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
         * @type {SmsGetCrowdUploadInfoResponse || null}
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
            let obj = new SmsGetCrowdUploadInfoResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信获取人群包列表的返回数据信息
 * @class
 */
class SmsGetCrowdPackList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 人群包id
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 人群包名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人群包状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 人群包手机号数量
         * @type {number || null}
         */
        this.PhoneNum = null;

        /**
         * 人群包标签信息
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人群包md5
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * 人群包文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 人群包描述
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
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * GetSmsAmountInfo返回参数结构体
 * @class
 */
class GetSmsAmountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信账号额度接口
         * @type {SmsAmountDataStruct || null}
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
            let obj = new SmsAmountDataStruct();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取普通短信签名信息返回信息
 * @class
 */
class DescribeSmsSignListDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名Id
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 申请签名状态。其中：
0：表示审核通过。
-1：表示审核未通过或审核失败。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * 签名名称。
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 提交审核时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
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
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * GetCrowdPackList请求参数结构体
 * @class
 */
class GetCrowdPackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 人群包名称，用于过滤人群包
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人群包状态，默认-1，用于过滤人群包
         * @type {number || null}
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
        this.License = 'License' in params ? params.License : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AddSmsTemplate返回参数结构体
 * @class
 */
class AddSmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信模板创建接口返回
         * @type {AddSmsTemplateDataStruct || null}
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
            let obj = new AddSmsTemplateDataStruct();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建签名返回结构
 * @class
 */
class PaasCreateSignResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名id
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * 拉取活动状态返回
 * @class
 */
class PaasSmsCampaignStatusResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0-未发送 1-发送中 2-发送结束 3-发送取消
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DelCrowdPack返回参数结构体
 * @class
 */
class DelCrowdPackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回
         * @type {SmsSuccessResponse || null}
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
            let obj = new SmsSuccessResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DelCrowdPack请求参数结构体
 * @class
 */
class DelCrowdPackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 人群包id
         * @type {number || null}
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
        this.License = 'License' in params ? params.License : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * CreateMmsInstance返回参数结构体
 * @class
 */
class CreateMmsInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建样例返回信息
         * @type {CreateMmsInstanceResp || null}
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
            let obj = new CreateMmsInstanceResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsTemplateList请求参数结构体
 * @class
 */
class DescribeSmsTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信模板id数组
         * @type {Array.<number> || null}
         */
        this.TemplateIdSet = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.TemplateIdSet = 'TemplateIdSet' in params ? params.TemplateIdSet : null;
        this.International = 'International' in params ? params.International : null;

    }
}

/**
 * DeleteMmsInstance请求参数结构体
 * @class
 */
class DeleteMmsInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 超级短信样例id
         * @type {number || null}
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
        this.License = 'License' in params ? params.License : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 删除超短样例响应
 * @class
 */
class DelMmsInstanceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 样例id
         * @type {number || null}
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
 * 短信活动策略元素
 * @class
 */
class PaasStrategyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信模板id或超级短信样例id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 素材类型 0-普短 1-超短
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
        this.Id = 'Id' in params ? params.Id : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * GetSmsAmountInfo请求参数结构体
 * @class
 */
class GetSmsAmountInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;

    }
}

/**
 * DelTemplate请求参数结构体
 * @class
 */
class DelTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信模板ID
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
        this.License = 'License' in params ? params.License : null;
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

    }
}

/**
 * 创建短信活动返回结构
 * @class
 */
class SmsCreateCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * 短信模板编辑接口出参
 * @class
 */
class ModifySmsTemplateDataStruct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * PushMmsContent请求参数结构体
 * @class
 */
class PushMmsContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 素材样例id
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Tel = null;

        /**
         * 附带数据字段
         * @type {string || null}
         */
        this.Session = null;

        /**
         * 动态参数key(即申请样例时设置的u_或p_开头的动态参数,要求序号有序)
         * @type {Array.<string> || null}
         */
        this.DynamicParaKey = null;

        /**
         * 动态参数值,和DynamicParaKey对应
         * @type {Array.<string> || null}
         */
        this.DynamicParaValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Tel = 'Tel' in params ? params.Tel : null;
        this.Session = 'Session' in params ? params.Session : null;
        this.DynamicParaKey = 'DynamicParaKey' in params ? params.DynamicParaKey : null;
        this.DynamicParaValue = 'DynamicParaValue' in params ? params.DynamicParaValue : null;

    }
}

/**
 * DescribeMmsInstanceList返回参数结构体
 * @class
 */
class DescribeMmsInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 彩信实例信息列表返回
         * @type {MmsInstanceInfoList || null}
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
            let obj = new MmsInstanceInfoList();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建样例时候content元素
 * @class
 */
class CreateMmsInstanceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材类型：1-文本 2-图片 3-视频 4-音频
         * @type {number || null}
         */
        this.ContentType = null;

        /**
         * 素材内容：如果素材是文本类型，直接填写文本内容，否则填写素材文件上传到cos后的url地址
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
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * GetCrowdUploadInfo请求参数结构体
 * @class
 */
class GetCrowdUploadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 上传文件名称
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
        this.License = 'License' in params ? params.License : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * CancelCampaign请求参数结构体
 * @class
 */
class CancelCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 短信活动id
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * 短信活动统计响应
 * @class
 */
class SmsCampaignStatisticsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动Id
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * 统计数据
         * @type {Array.<SmsCampaignStatisticsCrowdData> || null}
         */
        this.Statistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

        if (params.Statistics) {
            this.Statistics = new Array();
            for (let z in params.Statistics) {
                let obj = new SmsCampaignStatisticsCrowdData();
                obj.deserialize(params.Statistics[z]);
                this.Statistics.push(obj);
            }
        }

    }
}

/**
 * 彩信实例信息
InstanceId   int
	InstanceName string
	Status       int
	StatusInfo   string
	AppSubId     string
	Title        string
	Sign         string
	Contents     string
	CreatedAt    string
 * @class
 */
class MmsInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 彩信实例id
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 彩信实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 状态是否通知
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例审核状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MmsInstanceStateInfo> || null}
         */
        this.StatusInfo = null;

        /**
         * 业务码
         * @type {string || null}
         */
        this.AppSubId = null;

        /**
         * 彩信标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 签名
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 彩信内容
         * @type {string || null}
         */
        this.Contents = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 样例配置的链接地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 机型列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PhoneType = null;

        /**
         * 普通参数序号数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.CommonParams = null;

        /**
         * 链接参数序号数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UrlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StatusInfo) {
            this.StatusInfo = new Array();
            for (let z in params.StatusInfo) {
                let obj = new MmsInstanceStateInfo();
                obj.deserialize(params.StatusInfo[z]);
                this.StatusInfo.push(obj);
            }
        }
        this.AppSubId = 'AppSubId' in params ? params.AppSubId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.Contents = 'Contents' in params ? params.Contents : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.PhoneType = 'PhoneType' in params ? params.PhoneType : null;
        this.CommonParams = 'CommonParams' in params ? params.CommonParams : null;
        this.UrlParams = 'UrlParams' in params ? params.UrlParams : null;

    }
}

/**
 * DelTemplate返回参数结构体
 * @class
 */
class DelTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回
         * @type {SmsSuccessResponse || null}
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
            let obj = new SmsSuccessResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取短信人群包上传信息返回
 * @class
 */
class SmsGetCrowdUploadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 会话token
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 临时密钥id
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * cos信息
         * @type {UploadFansInfoCosInfo || null}
         */
        this.CosInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;

        if (params.CosInfo) {
            let obj = new UploadFansInfoCosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

    }
}

/**
 * CreateMmsInstance请求参数结构体
 * @class
 */
class CreateMmsInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 样例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 签名
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 素材内容
         * @type {Array.<CreateMmsInstanceItem> || null}
         */
        this.Contents = null;

        /**
         * 样例中链接动态变量对应的链接，和占位符顺序一致
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 机型列表
         * @type {Array.<number> || null}
         */
        this.PhoneType = null;

        /**
         * 发送超短活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号
         * @type {Array.<number> || null}
         */
        this.CommonParams = null;

        /**
         * 发送超短活动时用于展示短连接模板占位符序号,仅用作超短活动
         * @type {Array.<number> || null}
         */
        this.UrlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Sign = 'Sign' in params ? params.Sign : null;

        if (params.Contents) {
            this.Contents = new Array();
            for (let z in params.Contents) {
                let obj = new CreateMmsInstanceItem();
                obj.deserialize(params.Contents[z]);
                this.Contents.push(obj);
            }
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.PhoneType = 'PhoneType' in params ? params.PhoneType : null;
        this.CommonParams = 'CommonParams' in params ? params.CommonParams : null;
        this.UrlParams = 'UrlParams' in params ? params.UrlParams : null;

    }
}

/**
 * DescribeSmsSignList返回参数结构体
 * @class
 */
class DescribeSmsSignListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据
         * @type {Array.<DescribeSmsSignListDataStruct> || null}
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
                let obj = new DescribeSmsSignListDataStruct();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsCampaignStatistics返回参数结构体
 * @class
 */
class DescribeSmsCampaignStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应数据
         * @type {SmsCampaignStatisticsData || null}
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
            let obj = new SmsCampaignStatisticsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSmsCampaignStatus返回参数结构体
 * @class
 */
class GetSmsCampaignStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动状态
         * @type {PaasSmsCampaignStatusResp || null}
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
            let obj = new PaasSmsCampaignStatusResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsCampaignStatistics请求参数结构体
 * @class
 */
class DescribeSmsCampaignStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.License = 'License' in params ? params.License : null;

    }
}

/**
 * SendSms请求参数结构体
 * @class
 */
class SendSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户证书
         * @type {string || null}
         */
        this.License = null;

        /**
         * 手机号码,采用 e.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号,如:+8613800138000
         * @type {Array.<string> || null}
         */
        this.Phone = null;

        /**
         * 短信模板id(推荐使用模板id发送,使用内容发送时模板id留空)
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板参数，若无模板参数，则设置为空。
         * @type {Array.<string> || null}
         */
        this.Params = null;

        /**
         * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名。注：国内短信为必填参数。
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 国际/港澳台短信 senderid，国内短信填空
         * @type {string || null}
         */
        this.SenderId = null;

        /**
         * 短信类型：{0:普通短信，1:营销短信}，使用内容发送时必填
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。使用内容发送时必填
         * @type {number || null}
         */
        this.International = null;

        /**
         * 发送使用的模板内容,如果有占位符,此处也包括占位符,占位符的实际内容通过Params参数传递,使用模板id发送时此字段为空
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
        this.License = 'License' in params ? params.License : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Params = 'Params' in params ? params.Params : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.SenderId = 'SenderId' in params ? params.SenderId : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 短信活动统计模板展示结构
 * @class
 */
class SmsCampaignStatisticsTemplateData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板或样例id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板内容
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * 触达成功数
         * @type {number || null}
         */
        this.SendCount = null;

        /**
         * 短链点击数
         * @type {number || null}
         */
        this.ClickCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SendCount = 'SendCount' in params ? params.SendCount : null;
        this.ClickCount = 'ClickCount' in params ? params.ClickCount : null;

    }
}

module.exports = {
    ModifySmsTemplateResponse: ModifySmsTemplateResponse,
    SmsAddCrowdPackInfoResponse: SmsAddCrowdPackInfoResponse,
    PushMmsContentResponse: PushMmsContentResponse,
    AddSmsTemplateDataStruct: AddSmsTemplateDataStruct,
    DescribeMmsInstanceListRequest: DescribeMmsInstanceListRequest,
    DescribeMmsInstanceInfoResponse: DescribeMmsInstanceInfoResponse,
    SendSmsPaasDataStruct: SendSmsPaasDataStruct,
    AddCrowdPackInfoResponse: AddCrowdPackInfoResponse,
    AddSmsSignRequest: AddSmsSignRequest,
    AddSmsSignResponse: AddSmsSignResponse,
    GetSmsCampaignStatusRequest: GetSmsCampaignStatusRequest,
    DescribeSmsTemplateListResponse: DescribeSmsTemplateListResponse,
    MmsInstanceInfoList: MmsInstanceInfoList,
    GetCrowdPackListResponse: GetCrowdPackListResponse,
    CreateMmsInstanceResp: CreateMmsInstanceResp,
    AddSmsTemplateRequest: AddSmsTemplateRequest,
    DescribeMmsInstanceInfoRequest: DescribeMmsInstanceInfoRequest,
    CreateCampaignResponse: CreateCampaignResponse,
    PushMmsContentResp: PushMmsContentResp,
    UploadFansInfoCosInfo: UploadFansInfoCosInfo,
    CreateCampaignRequest: CreateCampaignRequest,
    SmsAmountDataStruct: SmsAmountDataStruct,
    AddCrowdPackInfoRequest: AddCrowdPackInfoRequest,
    SmsSuccessResponse: SmsSuccessResponse,
    SmsGetCrowdPackListResponse: SmsGetCrowdPackListResponse,
    DescribeSmsTemplateListDataStruct: DescribeSmsTemplateListDataStruct,
    DeleteMmsInstanceResponse: DeleteMmsInstanceResponse,
    ModifySmsTemplateRequest: ModifySmsTemplateRequest,
    MmsInstanceStateInfo: MmsInstanceStateInfo,
    CancelActivityData: CancelActivityData,
    SendSmsResponse: SendSmsResponse,
    PaasStrategy: PaasStrategy,
    CancelCampaignResponse: CancelCampaignResponse,
    SmsCampaignStatisticsCrowdData: SmsCampaignStatisticsCrowdData,
    DescribeSmsSignListRequest: DescribeSmsSignListRequest,
    GetCrowdUploadInfoResponse: GetCrowdUploadInfoResponse,
    SmsGetCrowdPackList: SmsGetCrowdPackList,
    GetSmsAmountInfoResponse: GetSmsAmountInfoResponse,
    DescribeSmsSignListDataStruct: DescribeSmsSignListDataStruct,
    GetCrowdPackListRequest: GetCrowdPackListRequest,
    AddSmsTemplateResponse: AddSmsTemplateResponse,
    PaasCreateSignResp: PaasCreateSignResp,
    PaasSmsCampaignStatusResp: PaasSmsCampaignStatusResp,
    DelCrowdPackResponse: DelCrowdPackResponse,
    DelCrowdPackRequest: DelCrowdPackRequest,
    CreateMmsInstanceResponse: CreateMmsInstanceResponse,
    DescribeSmsTemplateListRequest: DescribeSmsTemplateListRequest,
    DeleteMmsInstanceRequest: DeleteMmsInstanceRequest,
    DelMmsInstanceData: DelMmsInstanceData,
    PaasStrategyItem: PaasStrategyItem,
    GetSmsAmountInfoRequest: GetSmsAmountInfoRequest,
    DelTemplateRequest: DelTemplateRequest,
    SmsCreateCampaignResponse: SmsCreateCampaignResponse,
    ModifySmsTemplateDataStruct: ModifySmsTemplateDataStruct,
    PushMmsContentRequest: PushMmsContentRequest,
    DescribeMmsInstanceListResponse: DescribeMmsInstanceListResponse,
    CreateMmsInstanceItem: CreateMmsInstanceItem,
    GetCrowdUploadInfoRequest: GetCrowdUploadInfoRequest,
    CancelCampaignRequest: CancelCampaignRequest,
    SmsCampaignStatisticsData: SmsCampaignStatisticsData,
    MmsInstanceInfo: MmsInstanceInfo,
    DelTemplateResponse: DelTemplateResponse,
    SmsGetCrowdUploadInfoResponse: SmsGetCrowdUploadInfoResponse,
    CreateMmsInstanceRequest: CreateMmsInstanceRequest,
    DescribeSmsSignListResponse: DescribeSmsSignListResponse,
    DescribeSmsCampaignStatisticsResponse: DescribeSmsCampaignStatisticsResponse,
    GetSmsCampaignStatusResponse: GetSmsCampaignStatusResponse,
    DescribeSmsCampaignStatisticsRequest: DescribeSmsCampaignStatisticsRequest,
    SendSmsRequest: SendSmsRequest,
    SmsCampaignStatisticsTemplateData: SmsCampaignStatisticsTemplateData,

}
