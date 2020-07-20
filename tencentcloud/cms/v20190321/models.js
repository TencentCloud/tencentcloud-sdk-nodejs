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
 * 文本返回的自定义词库结果
 * @class
 */
class CustomResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命中的自定义关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 自定义库id
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 自定义词库名称
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 命中的自定义关键词的类型
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
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 文本识别结果详情
 * @class
 */
class TextData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否恶意 0：正常 1：可疑
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂
20105：广告引流 
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 消息类公共相关参数
         * @type {TextOutputComm || null}
         */
        this.Common = null;

        /**
         * 返回的自定义词库结果
         * @type {Array.<CustomResult> || null}
         */
        this.CustomResult = null;

        /**
         * 返回的详细结果
         * @type {Array.<DetailResult> || null}
         */
        this.DetailResult = null;

        /**
         * 消息类ID信息
         * @type {TextOutputID || null}
         */
        this.ID = null;

        /**
         * 消息类输出结果
         * @type {TextOutputRes || null}
         */
        this.Res = null;

        /**
         * 账号风险检测结果
         * @type {Array.<RiskDetails> || null}
         */
        this.RiskDetails = null;

        /**
         * 最终使用的BizType
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
         * @type {string || null}
         */
        this.EvilLabel = null;

        /**
         * 命中的关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 命中的模型分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 建议值,Block：打击,Review：待复审,Normal：正常
         * @type {string || null}
         */
        this.Suggestion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;

        if (params.Common) {
            let obj = new TextOutputComm();
            obj.deserialize(params.Common)
            this.Common = obj;
        }

        if (params.CustomResult) {
            this.CustomResult = new Array();
            for (let z in params.CustomResult) {
                let obj = new CustomResult();
                obj.deserialize(params.CustomResult[z]);
                this.CustomResult.push(obj);
            }
        }

        if (params.DetailResult) {
            this.DetailResult = new Array();
            for (let z in params.DetailResult) {
                let obj = new DetailResult();
                obj.deserialize(params.DetailResult[z]);
                this.DetailResult.push(obj);
            }
        }

        if (params.ID) {
            let obj = new TextOutputID();
            obj.deserialize(params.ID)
            this.ID = obj;
        }

        if (params.Res) {
            let obj = new TextOutputRes();
            obj.deserialize(params.Res)
            this.Res = obj;
        }

        if (params.RiskDetails) {
            this.RiskDetails = new Array();
            for (let z in params.RiskDetails) {
                let obj = new RiskDetails();
                obj.deserialize(params.RiskDetails[z]);
                this.RiskDetails.push(obj);
            }
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.EvilLabel = 'EvilLabel' in params ? params.EvilLabel : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

    }
}

/**
 * TextModeration请求参数结构体
 * @class
 */
class TextModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 设备相关信息
         * @type {Device || null}
         */
        this.Device = null;

        /**
         * 用户相关信息
         * @type {User || null}
         */
        this.User = null;

        /**
         * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * 数据ID，英文字母、下划线、-组成，不超过64个字符
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 业务应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * 文本返回的详细结果
 * @class
 */
class DetailResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
         * @type {string || null}
         */
        this.EvilLabel = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂
20105：广告引流 
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 该标签下命中的关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilLabel = 'EvilLabel' in params ? params.EvilLabel : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * ImageModeration返回参数结构体
 * @class
 */
class ImageModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {ImageData || null}
         */
        this.Data = null;

        /**
         * 业务返回码
         * @type {number || null}
         */
        this.BusinessCode = null;

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
            let obj = new ImageData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextModeration返回参数结构体
 * @class
 */
class TextModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {TextData || null}
         */
        this.Data = null;

        /**
         * 业务返回码
         * @type {number || null}
         */
        this.BusinessCode = null;

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
            let obj = new TextData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImageModeration请求参数结构体
 * @class
 */
class ImageModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件内容 Base64,与FileUrl必须二填一
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 文件MD5值
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 文件地址
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * CreateFileSample请求参数结构体
 * @class
 */
class CreateFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件类型结构数组
         * @type {Array.<FileSample> || null}
         */
        this.Contents = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
20105：广告引流
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * image：图片
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Contents) {
            this.Contents = new Array();
            for (let z in params.Contents) {
                let obj = new FileSample();
                obj.deserialize(params.Contents[z]);
                this.Contents.push(obj);
            }
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * 图片识别结果详情
 * @class
 */
class ImageData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否恶意 0：正常 1：可疑
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
20103：性感
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 图片二维码详情
         * @type {CodeDetect || null}
         */
        this.CodeDetect = null;

        /**
         * 图片性感详情
         * @type {ImageHotDetect || null}
         */
        this.HotDetect = null;

        /**
         * 图片违法详情
         * @type {ImageIllegalDetect || null}
         */
        this.IllegalDetect = null;

        /**
         * logo详情
         * @type {LogoDetail || null}
         */
        this.LogoDetect = null;

        /**
         * 图片OCR详情
         * @type {OCRDetect || null}
         */
        this.OCRDetect = null;

        /**
         * 手机检测详情
         * @type {PhoneDetect || null}
         */
        this.PhoneDetect = null;

        /**
         * 图片涉政详情
         * @type {ImagePolityDetect || null}
         */
        this.PolityDetect = null;

        /**
         * 图片涉黄详情
         * @type {ImagePornDetect || null}
         */
        this.PornDetect = null;

        /**
         * 图片相似度详情
         * @type {Similar || null}
         */
        this.Similar = null;

        /**
         * 图片暴恐详情
         * @type {ImageTerrorDetect || null}
         */
        this.TerrorDetect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;

        if (params.CodeDetect) {
            let obj = new CodeDetect();
            obj.deserialize(params.CodeDetect)
            this.CodeDetect = obj;
        }

        if (params.HotDetect) {
            let obj = new ImageHotDetect();
            obj.deserialize(params.HotDetect)
            this.HotDetect = obj;
        }

        if (params.IllegalDetect) {
            let obj = new ImageIllegalDetect();
            obj.deserialize(params.IllegalDetect)
            this.IllegalDetect = obj;
        }

        if (params.LogoDetect) {
            let obj = new LogoDetail();
            obj.deserialize(params.LogoDetect)
            this.LogoDetect = obj;
        }

        if (params.OCRDetect) {
            let obj = new OCRDetect();
            obj.deserialize(params.OCRDetect)
            this.OCRDetect = obj;
        }

        if (params.PhoneDetect) {
            let obj = new PhoneDetect();
            obj.deserialize(params.PhoneDetect)
            this.PhoneDetect = obj;
        }

        if (params.PolityDetect) {
            let obj = new ImagePolityDetect();
            obj.deserialize(params.PolityDetect)
            this.PolityDetect = obj;
        }

        if (params.PornDetect) {
            let obj = new ImagePornDetect();
            obj.deserialize(params.PornDetect)
            this.PornDetect = obj;
        }

        if (params.Similar) {
            let obj = new Similar();
            obj.deserialize(params.Similar)
            this.Similar = obj;
        }

        if (params.TerrorDetect) {
            let obj = new ImageTerrorDetect();
            obj.deserialize(params.TerrorDetect)
            this.TerrorDetect = obj;
        }

    }
}

/**
 * 图片涉黄详情
 * @class
 */
class ImagePornDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
20002：色情
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 色情标签：色情特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 色情分：分值范围 0-100，分数越高色情倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DeleteTextSample返回参数结构体
 * @class
 */
class DeleteTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文字样本信息
 * @class
 */
class TextSample extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 关键词
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 创建时间戳
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
20105：广告引流 
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 唯一标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

        /**
         * 任务状态
1：已完成
2：处理中
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateTextSample返回参数结构体
 * @class
 */
class CreateTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作样本失败时返回的错误信息示例：  "样本1":错误码，"样本2":错误码
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消息类输出ID参数
 * @class
 */
class TextOutputID extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入业务的唯一ID
         * @type {string || null}
         */
        this.MsgID = null;

        /**
         * 用户账号uin，对应请求协议里的Content.User.Uin。旁路结果有回带，串联结果无该字段
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MsgID = 'MsgID' in params ? params.MsgID : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * 用户相关信息
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 年龄 默认0 未知
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 性别 默认0 未知 1 男性 2 女性
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 用户等级，默认0 未知 1 低 2 中 3 高
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
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
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 文件样本返回信息
 * @class
 */
class FileSampleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 创建时间戳
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 文件的md5
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 唯一标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 文件压缩后云url
         * @type {string || null}
         */
        this.CompressFileUrl = null;

        /**
         * 文件的url
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * DescribeFileSample请求参数结构体
 * @class
 */
class DescribeFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过标签值进行筛选
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 数量限制，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 按某个字段排序，目前仅支持CreatedAt排序
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * 设备信息
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备指纹ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * IOS设备，Identifier For Advertising（广告标识符）
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
         * @type {string || null}
         */
        this.IDFV = null;

        /**
         * 设备序列号
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * 用户IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Mac地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 设备指纹Token
         * @type {string || null}
         */
        this.TokenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;

    }
}

/**
 * 图片二维码详情
 * @class
 */
class CodeDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从图片中检测到的二维码，可能为多个
         * @type {Array.<CodeDetail> || null}
         */
        this.ModerationDetail = null;

        /**
         * 检测是否成功，0：成功，-1：出错
         * @type {number || null}
         */
        this.ModerationCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModerationDetail) {
            this.ModerationDetail = new Array();
            for (let z in params.ModerationDetail) {
                let obj = new CodeDetail();
                obj.deserialize(params.ModerationDetail[z]);
                this.ModerationDetail.push(obj);
            }
        }
        this.ModerationCode = 'ModerationCode' in params ? params.ModerationCode : null;

    }
}

/**
 * 图片暴恐详情
 * @class
 */
class ImageTerrorDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 暴恐标签：返回暴恐特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 暴恐分：分值范围0--100，分数越高暴恐倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DescribeTextSample返回参数结构体
 * @class
 */
class DescribeTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的样本的信息
         * @type {Array.<TextSample> || null}
         */
        this.TextSampleSet = null;

        /**
         * 符合要求的样本的数量
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

        if (params.TextSampleSet) {
            this.TextSampleSet = new Array();
            for (let z in params.TextSampleSet) {
                let obj = new TextSample();
                obj.deserialize(params.TextSampleSet[z]);
                this.TextSampleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码在图片中的位置，由边界点的坐标表示
 * @class
 */
class CodePosition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码边界点X轴坐标
         * @type {number || null}
         */
        this.FloatX = null;

        /**
         * 二维码边界点Y轴坐标
         * @type {number || null}
         */
        this.FloatY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FloatX = 'FloatX' in params ? params.FloatX : null;
        this.FloatY = 'FloatY' in params ? params.FloatY : null;

    }
}

/**
 * DeleteFileSample返回参数结构体
 * @class
 */
class DeleteFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件类型样本
 * @class
 */
class FileSample extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件md5
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件url
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件压缩后云url
         * @type {string || null}
         */
        this.CompressFileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;

    }
}

/**
 * DescribeFileSample返回参数结构体
 * @class
 */
class DescribeFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的样本的信息
         * @type {Array.<FileSampleInfo> || null}
         */
        this.FileSampleSet = null;

        /**
         * 符合要求的样本的数量
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

        if (params.FileSampleSet) {
            this.FileSampleSet = new Array();
            for (let z in params.FileSampleSet) {
                let obj = new FileSampleInfo();
                obj.deserialize(params.FileSampleSet[z]);
                this.FileSampleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消息类输出结果参数
 * @class
 */
class TextOutputRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作人,信安处理人企业微信ID
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 恶意操作码，
删除（1）， 通过（2）， 先审后发（100012）
         * @type {number || null}
         */
        this.ResultCode = null;

        /**
         * 操作结果备注说明
         * @type {string || null}
         */
        this.ResultMsg = null;

        /**
         * 恶意类型，广告（10001）， 政治（20001）， 色情（20002）， 社会事件（20004）， 暴力（20011）， 低俗（20012）， 违法犯罪（20006）， 欺诈（20008）， 版权（20013）， 谣言（20104）， 其他（21000）
         * @type {number || null}
         */
        this.ResultType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ResultMsg = 'ResultMsg' in params ? params.ResultMsg : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;

    }
}

/**
 * 账号风险检测结果
 * @class
 */
class RiskDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预留字段，暂时不使用
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 风险类别，RiskAccount，RiskIP, RiskIMEI
         * @type {string || null}
         */
        this.Lable = null;

        /**
         * 风险等级，1:疑似，2：恶意
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Lable = 'Lable' in params ? params.Lable : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * CreateTextSample请求参数结构体
 * @class
 */
class CreateTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词数组
         * @type {Array.<string> || null}
         */
        this.Contents = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
20105：广告引流
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

        /**
         * 测试修改参数
         * @type {string || null}
         */
        this.Test = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Contents = 'Contents' in params ? params.Contents : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Test = 'Test' in params ? params.Test : null;

    }
}

/**
 * DeleteFileSample请求参数结构体
 * @class
 */
class DeleteFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一标识数组
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 筛选数据结构
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 需要过滤字段的值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * OCR识别结果详情
 * @class
 */
class OCRDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别到的详细信息
         * @type {Array.<OCRItem> || null}
         */
        this.Item = null;

        /**
         * 识别到的文本信息
         * @type {string || null}
         */
        this.TextInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Item) {
            this.Item = new Array();
            for (let z in params.Item) {
                let obj = new OCRItem();
                obj.deserialize(params.Item[z]);
                this.Item.push(obj);
            }
        }
        this.TextInfo = 'TextInfo' in params ? params.TextInfo : null;

    }
}

/**
 * 坐标
 * @class
 */
class Coordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角横坐标
         * @type {number || null}
         */
        this.Cx = null;

        /**
         * 左上角纵坐标
         * @type {number || null}
         */
        this.Cy = null;

        /**
         * 高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cx = 'Cx' in params ? params.Cx : null;
        this.Cy = 'Cy' in params ? params.Cy : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 相似度详情
 * @class
 */
class Similar extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：未匹配到 1：恶意 2：白样本
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 返回的种子url
         * @type {string || null}
         */
        this.SeedUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.SeedUrl = 'SeedUrl' in params ? params.SeedUrl : null;

    }
}

/**
 * 图片性感详情
 * @class
 */
class ImageHotDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
20103：性感
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 性感标签：性感特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 性感分：分值范围 0-100，分数越高性感倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 消息类输出公共参数
 * @class
 */
class TextOutputComm extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入业务的唯一ID
         * @type {number || null}
         */
        this.AppID = null;

        /**
         * 接口唯一ID，旁路调用接口返回有该字段，标识唯一接口
         * @type {number || null}
         */
        this.BUCtrlID = null;

        /**
         * 消息发送时间
         * @type {number || null}
         */
        this.SendTime = null;

        /**
         * 请求字段里的Common.Uin
         * @type {number || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppID = 'AppID' in params ? params.AppID : null;
        this.BUCtrlID = 'BUCtrlID' in params ? params.BUCtrlID : null;
        this.SendTime = 'SendTime' in params ? params.SendTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * DescribeTextSample请求参数结构体
 * @class
 */
class DescribeTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过标签值进行筛选
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 数量限制，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 按某个字段排序，目前仅支持CreatedAt排序
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * 从图片中检测到的二维码，可能为多个
 * @class
 */
class CodeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码在图片中的位置，由边界点的坐标表示
         * @type {Array.<CodePosition> || null}
         */
        this.CodePosition = null;

        /**
         * 二维码文本的编码格式
         * @type {string || null}
         */
        this.CodeCharset = null;

        /**
         * 二维码的文本内容
         * @type {string || null}
         */
        this.CodeText = null;

        /**
         * 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX
         * @type {number || null}
         */
        this.CodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CodePosition) {
            this.CodePosition = new Array();
            for (let z in params.CodePosition) {
                let obj = new CodePosition();
                obj.deserialize(params.CodePosition[z]);
                this.CodePosition.push(obj);
            }
        }
        this.CodeCharset = 'CodeCharset' in params ? params.CodeCharset : null;
        this.CodeText = 'CodeText' in params ? params.CodeText : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;

    }
}

/**
 * 图片涉政详情
 * @class
 */
class ImagePolityDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定  0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 命中的logo标签信息
         * @type {Array.<Logo> || null}
         */
        this.PolityLogoDetail = null;

        /**
         * 命中的人脸名称
         * @type {Array.<string> || null}
         */
        this.FaceNames = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 命中的政治物品名称
         * @type {Array.<string> || null}
         */
        this.PolityItems = null;

        /**
         * 政治（人脸）分：分值范围 0-100，分数越高可疑程度越高
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;

        if (params.PolityLogoDetail) {
            this.PolityLogoDetail = new Array();
            for (let z in params.PolityLogoDetail) {
                let obj = new Logo();
                obj.deserialize(params.PolityLogoDetail[z]);
                this.PolityLogoDetail.push(obj);
            }
        }
        this.FaceNames = 'FaceNames' in params ? params.FaceNames : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.PolityItems = 'PolityItems' in params ? params.PolityItems : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * OCR详情
 * @class
 */
class OCRItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本坐标信息
         * @type {Coordinate || null}
         */
        this.TextPosition = null;

        /**
         * 文本命中具体标签
         * @type {string || null}
         */
        this.EvilLabel = null;

        /**
         * 文本命中恶意违规类型
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 文本命中违规的关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 文本涉嫌违规分值
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 检测到的文本信息
         * @type {string || null}
         */
        this.TextContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TextPosition) {
            let obj = new Coordinate();
            obj.deserialize(params.TextPosition)
            this.TextPosition = obj;
        }
        this.EvilLabel = 'EvilLabel' in params ? params.EvilLabel : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.TextContent = 'TextContent' in params ? params.TextContent : null;

    }
}

/**
 * 图片违法详情
 * @class
 */
class ImageIllegalDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20006：涉毒违法
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 违法标签：返回违法特征中文描述，如赌桌，枪支
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 违法分：分值范围 0-100，分数越高违法倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * logo位置信息
 * @class
 */
class RrectF extends  AbstractModel {
    constructor(){
        super();

        /**
         * logo横坐标
         * @type {number || null}
         */
        this.Cx = null;

        /**
         * logo纵坐标
         * @type {number || null}
         */
        this.Cy = null;

        /**
         * logo图标高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * logo图标中心旋转度
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * logo图标宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cx = 'Cx' in params ? params.Cx : null;
        this.Cy = 'Cy' in params ? params.Cy : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * CreateFileSample返回参数结构体
 * @class
 */
class CreateFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LogoDetail
 * @class
 */
class LogoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命中的Applogo详情
         * @type {Array.<Logo> || null}
         */
        this.AppLogoDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppLogoDetail) {
            this.AppLogoDetail = new Array();
            for (let z in params.AppLogoDetail) {
                let obj = new Logo();
                obj.deserialize(params.AppLogoDetail[z]);
                this.AppLogoDetail.push(obj);
            }
        }

    }
}

/**
 * Logo
 * @class
 */
class Logo extends  AbstractModel {
    constructor(){
        super();

        /**
         * logo图标坐标信息
         * @type {RrectF || null}
         */
        this.RrectF = null;

        /**
         * logo图标置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * logo图标名称
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

        if (params.RrectF) {
            let obj = new RrectF();
            obj.deserialize(params.RrectF)
            this.RrectF = obj;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 手机模型识别检测
 * @class
 */
class PhoneDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 分值范围 0-100，分数越高倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DeleteTextSample请求参数结构体
 * @class
 */
class DeleteTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一标识数组，目前暂时只支持单个删除
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

module.exports = {
    CustomResult: CustomResult,
    TextData: TextData,
    TextModerationRequest: TextModerationRequest,
    DetailResult: DetailResult,
    ImageModerationResponse: ImageModerationResponse,
    TextModerationResponse: TextModerationResponse,
    ImageModerationRequest: ImageModerationRequest,
    CreateFileSampleRequest: CreateFileSampleRequest,
    ImageData: ImageData,
    ImagePornDetect: ImagePornDetect,
    DeleteTextSampleResponse: DeleteTextSampleResponse,
    TextSample: TextSample,
    CreateTextSampleResponse: CreateTextSampleResponse,
    TextOutputID: TextOutputID,
    User: User,
    FileSampleInfo: FileSampleInfo,
    DescribeFileSampleRequest: DescribeFileSampleRequest,
    Device: Device,
    CodeDetect: CodeDetect,
    ImageTerrorDetect: ImageTerrorDetect,
    DescribeTextSampleResponse: DescribeTextSampleResponse,
    CodePosition: CodePosition,
    DeleteFileSampleResponse: DeleteFileSampleResponse,
    FileSample: FileSample,
    DescribeFileSampleResponse: DescribeFileSampleResponse,
    TextOutputRes: TextOutputRes,
    RiskDetails: RiskDetails,
    CreateTextSampleRequest: CreateTextSampleRequest,
    DeleteFileSampleRequest: DeleteFileSampleRequest,
    Filter: Filter,
    OCRDetect: OCRDetect,
    Coordinate: Coordinate,
    Similar: Similar,
    ImageHotDetect: ImageHotDetect,
    TextOutputComm: TextOutputComm,
    DescribeTextSampleRequest: DescribeTextSampleRequest,
    CodeDetail: CodeDetail,
    ImagePolityDetect: ImagePolityDetect,
    OCRItem: OCRItem,
    ImageIllegalDetect: ImageIllegalDetect,
    RrectF: RrectF,
    CreateFileSampleResponse: CreateFileSampleResponse,
    LogoDetail: LogoDetail,
    Logo: Logo,
    PhoneDetect: PhoneDetect,
    DeleteTextSampleRequest: DeleteTextSampleRequest,

}
