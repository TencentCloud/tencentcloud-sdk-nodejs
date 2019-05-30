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
 * CreateLiveSnapshotRule请求参数结构体
 * @class
 */
class CreateLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * EnableLiveDomain返回参数结构体
 * @class
 */
class EnableLiveDomainResponse extends  AbstractModel {
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
 * CreateLiveCert请求参数结构体
 * @class
 */
class CreateLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书类型。0-用户添加证书；1-腾讯云托管证书。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 证书内容，即公钥。
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * 私钥。
         * @type {string || null}
         */
        this.HttpsKey = null;

        /**
         * 证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 描述。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.HttpsKey = 'HttpsKey' in params ? params.HttpsKey : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeLiveCallbackTemplates请求参数结构体
 * @class
 */
class DescribeLiveCallbackTemplatesRequest extends  AbstractModel {
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
 * DeleteLiveRecordRule请求参数结构体
 * @class
 */
class DeleteLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * ResumeLiveStream请求参数结构体
 * @class
 */
class ResumeLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveTranscodeTemplate返回参数结构体
 * @class
 */
class DeleteLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * 转码模板信息
 * @class
 */
class TemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频编码：
h264/h265。
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * 视频码率。100-8000kbps
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 音频编码：aac/mp3
aac/mp3。
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * 音频码率。0-500
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 宽。0-3000
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高。0-3000
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 帧率。0-200
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 关键帧间隔，单位：秒。1-50
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 旋转角度。0 90 180 270
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 编码质量：
baseline/main/high。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 是否不超过原始码率。0：否，1：是。
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * 是否不超过原始高度。0：否，1：是。
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * 是否不超过原始帧率。0：否，1：是。
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * 是否保留视频。0：否，1：是。
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * 是否保留音频。0：否，1：是。
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 模板描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteLiveCallbackRule返回参数结构体
 * @class
 */
class DeleteLiveCallbackRuleResponse extends  AbstractModel {
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
 * ResumeDelayLiveStream请求参数结构体
 * @class
 */
class ResumeDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveWatermarkRules返回参数结构体
 * @class
 */
class DescribeLiveWatermarkRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCallbackTemplate返回参数结构体
 * @class
 */
class DescribeLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调模板信息。
         * @type {CallBackTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new CallBackTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveSnapshotTemplate请求参数结构体
 * @class
 */
class DeleteLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * 推流鉴权key信息
 * @class
 */
class PushAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 主鉴权key。
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * 备鉴权key。
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * ModifyPullStreamStatus请求参数结构体
 * @class
 */
class ModifyPullStreamStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id列表。
         * @type {Array.<string> || null}
         */
        this.ConfigIds = null;

        /**
         * 目标状态。0无效，2正在运行，4暂停。
         * @type {string || null}
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
        this.ConfigIds = 'ConfigIds' in params ? params.ConfigIds : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeLiveStreamOnlineInfo返回参数结构体
 * @class
 */
class DescribeLiveStreamOnlineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 流信息列表。
         * @type {Array.<StreamInfo> || null}
         */
        this.StreamInfoList = null;

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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.StreamInfoList) {
            this.StreamInfoList = new Array();
            for (let z in params.StreamInfoList) {
                let obj = new StreamInfo();
                obj.deserialize(params.StreamInfoList[z]);
                this.StreamInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveRecordTemplate请求参数结构体
 * @class
 */
class DeleteLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
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
 * DescribeLivePlayAuthKey请求参数结构体
 * @class
 */
class DescribeLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamOnlineList返回参数结构体
 * @class
 */
class DescribeLiveStreamOnlineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页显示的条数。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 正在推送流的信息列表。
         * @type {Array.<StreamOnlineInfo> || null}
         */
        this.OnlineInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.OnlineInfo) {
            this.OnlineInfo = new Array();
            for (let z in params.OnlineInfo) {
                let obj = new StreamOnlineInfo();
                obj.deserialize(params.OnlineInfo[z]);
                this.OnlineInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLivePlayAuthKey请求参数结构体
 * @class
 */
class ModifyLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 鉴权key。
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * 鉴权backkey。
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * 域名证书信息
 * @class
 */
class DomainCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间，UTC格式。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * 证书类型。
0：腾讯云托管证书
1：用户添加证书。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 证书过期时间，UTC格式。
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * 使用此证书的域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 证书状态
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 录制模板信息
 * @class
 */
class RecordTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Flv录制参数。
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * Hls录制参数。
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * Mp4录制参数。
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * Aac录制参数。
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * 0：普通直播，
1：慢直播。
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * HLS录制定制参数
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

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

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

    }
}

/**
 * DeleteLiveTranscodeRule返回参数结构体
 * @class
 */
class DeleteLiveTranscodeRuleResponse extends  AbstractModel {
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
 * DescribeStreamPlayInfoList返回参数结构体
 * @class
 */
class DescribeStreamPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计信息列表。
         * @type {Array.<DayStreamPlayInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new DayStreamPlayInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLiveSnapshotTemplate返回参数结构体
 * @class
 */
class ModifyLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * ModifyLivePushAuthKey请求参数结构体
 * @class
 */
class ModifyLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 主鉴权key。
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * 备鉴权key。
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * DeleteLiveCallbackTemplate请求参数结构体
 * @class
 */
class DeleteLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * DescribeLiveStreamState请求参数结构体
 * @class
 */
class DescribeLiveStreamStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLivePlayAuthKey返回参数结构体
 * @class
 */
class DescribeLivePlayAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放鉴权key信息。
         * @type {PlayAuthKeyInfo || null}
         */
        this.PlayAuthKeyInfo = null;

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

        if (params.PlayAuthKeyInfo) {
            let obj = new PlayAuthKeyInfo();
            obj.deserialize(params.PlayAuthKeyInfo)
            this.PlayAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate请求参数结构体
 * @class
 */
class DescribeLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * 直播域名信息
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播域名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 域名类型。0-推流，1-播放
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 域名状态。0-停用，1-启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 添加时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否有CName到固定规则域名。0-否，1-是
         * @type {number || null}
         */
        this.BCName = null;

        /**
         * cname对应的域名
         * @type {string || null}
         */
        this.TargetDomain = null;

        /**
         * 播放区域，只在Type=1时该参数有意义。
1-国内，2-全球，3-海外。
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * 0：普通直播，
1：慢直播。
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BCName = 'BCName' in params ? params.BCName : null;
        this.TargetDomain = 'TargetDomain' in params ? params.TargetDomain : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * DescribeLiveTranscodeRules请求参数结构体
 * @class
 */
class DescribeLiveTranscodeRulesRequest extends  AbstractModel {
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
 * DeleteLiveSnapshotRule请求参数结构体
 * @class
 */
class DeleteLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * ModifyPullStreamConfig请求参数结构体
 * @class
 */
class ModifyPullStreamConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域id,1-深圳,2-上海，3-天津,4-香港。如有改动，需同时传入IspId。
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 运营商id,1-电信,2-移动,3-联通,4-其他,AreaId为4的时候,IspId只能为其他。如有改动，需同时传入AreaId。
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。

使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.FromUrl = 'FromUrl' in params ? params.FromUrl : null;
        this.ToUrl = 'ToUrl' in params ? params.ToUrl : null;
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.IspId = 'IspId' in params ? params.IspId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeLiveSnapshotRules返回参数结构体
 * @class
 */
class DescribeLiveSnapshotRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeDetailInfo返回参数结构体
 * @class
 */
class DescribeLiveTranscodeDetailInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计数据列表。
         * @type {Array.<TranscodeDetailInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * 页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TranscodeDetailInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomain请求参数结构体
 * @class
 */
class DescribeLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamPublishedList请求参数结构体
 * @class
 */
class DescribeLiveStreamPublishedListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您的域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 结束时间。
UTC 格式，例如：2016-06-30T19:00:00Z。
不超过当前时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 起始时间。 
UTC 格式，例如：2016-06-29T19:00:00Z。
和当前时间相隔不超过7天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 取得第几页。
默认值：1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页大小。
最大值：100。
取值范围：1~100 之前的任意整数。
默认值：10。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteLiveTranscodeRule请求参数结构体
 * @class
 */
class DeleteLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
域名维度转码，域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 模板ID。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，比如AppName为空也需要传空字符串进行强匹配。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * CreateLiveRecordRule请求参数结构体
 * @class
 */
class CreateLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveSnapshotTemplates请求参数结构体
 * @class
 */
class DescribeLiveSnapshotTemplatesRequest extends  AbstractModel {
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
 * AddLiveWatermark返回参数结构体
 * @class
 */
class AddLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomainCert返回参数结构体
 * @class
 */
class DescribeLiveDomainCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书信息。
         * @type {DomainCertInfo || null}
         */
        this.DomainCertInfo = null;

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

        if (params.DomainCertInfo) {
            let obj = new DomainCertInfo();
            obj.deserialize(params.DomainCertInfo)
            this.DomainCertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveRecordTemplate请求参数结构体
 * @class
 */
class DescribeLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * ModifyLiveDomainCert请求参数结构体
 * @class
 */
class ModifyLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 状态，0：关闭  1：打开。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 查询当前正在推流的信息
 * @class
 */
class StreamOnlineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流时间列表
         * @type {Array.<PublishTime> || null}
         */
        this.PublishTimeList = null;

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

        if (params.PublishTimeList) {
            this.PublishTimeList = new Array();
            for (let z in params.PublishTimeList) {
                let obj = new PublishTime();
                obj.deserialize(params.PublishTimeList[z]);
                this.PublishTimeList.push(obj);
            }
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * CreateLiveWatermarkRule返回参数结构体
 * @class
 */
class CreateLiveWatermarkRuleResponse extends  AbstractModel {
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
 * ForbidLiveStream请求参数结构体
 * @class
 */
class ForbidLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：默认禁播90天，且最长支持禁播90天。
         * @type {string || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * 推流信息
 * @class
 */
class StreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流所属应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 创建模式
         * @type {string || null}
         */
        this.CreateMode = null;

        /**
         * 创建时间，如: 2018-07-13 14:48:23
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 流状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 流id
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 流名称
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 水印id
         * @type {string || null}
         */
        this.WaterMarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.WaterMarkId = 'WaterMarkId' in params ? params.WaterMarkId : null;

    }
}

/**
 * AddLiveWatermark请求参数结构体
 * @class
 */
class AddLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * 显示位置,X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置,Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * ModifyLiveRecordTemplate返回参数结构体
 * @class
 */
class ModifyLiveRecordTemplateResponse extends  AbstractModel {
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
 * ModifyLivePlayDomain请求参数结构体
 * @class
 */
class ModifyLivePlayDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 拉流域名类型。1-国内；2-全球；3-境外
         * @type {number || null}
         */
        this.PlayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;

    }
}

/**
 * DeleteLiveRecordTemplate返回参数结构体
 * @class
 */
class DeleteLiveRecordTemplateResponse extends  AbstractModel {
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
 * DescribeLiveWatermark请求参数结构体
 * @class
 */
class DescribeLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * 日志url信息
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志名称。
         * @type {string || null}
         */
        this.LogName = null;

        /**
         * 日志Url。
         * @type {string || null}
         */
        this.LogUrl = null;

        /**
         * 日志生成时间
         * @type {string || null}
         */
        this.LogTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogName = 'LogName' in params ? params.LogName : null;
        this.LogUrl = 'LogUrl' in params ? params.LogUrl : null;
        this.LogTime = 'LogTime' in params ? params.LogTime : null;

    }
}

/**
 * AddDelayLiveStream请求参数结构体
 * @class
 */
class AddDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 延播时间，单位：秒，上限：600秒。
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 延播设置的过期时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：默认7天后过期，且最长支持7天内生效。
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeLiveDomainCert请求参数结构体
 * @class
 */
class DescribeLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamEventList请求参数结构体
 * @class
 */
class DescribeLiveStreamEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间。 
UTC 格式，例如：2018-12-29T19:00:00Z。
支持查询60天内的历史记录。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
UTC 格式，例如：2018-12-29T20:00:00Z。
不超过当前时间，且和起始时间相差不得超过30天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称，不支持通配符（*）查询，默认模糊匹配。
可使用IsStrict字段改为精确查询。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 取得第几页。
默认值：1。
注： 目前只支持10000条内的查询。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页大小。
最大值：100。
取值范围：1~100 之前的任意整数。
默认值：10。
注： 目前只支持10000条内的查询。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 是否过滤，默认不过滤。
0：不进行任何过滤。
1：过滤掉开播失败的，只返回开播成功的。
         * @type {number || null}
         */
        this.IsFilter = null;

        /**
         * 是否精确查询，默认模糊匹配。
0：模糊匹配。
1：精确查询。
注：使用StreamName时该参数生效。
         * @type {number || null}
         */
        this.IsStrict = null;

        /**
         * 是否按结束时间正序显示，默认逆序。
0：逆序。
1：正序。
         * @type {number || null}
         */
        this.IsAsc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.IsFilter = 'IsFilter' in params ? params.IsFilter : null;
        this.IsStrict = 'IsStrict' in params ? params.IsStrict : null;
        this.IsAsc = 'IsAsc' in params ? params.IsAsc : null;

    }
}

/**
 * DescribePullStreamConfigs请求参数结构体
 * @class
 */
class DescribePullStreamConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id。
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 回调模板信息
 * @class
 */
class CallBackTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 开播回调URL。
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * 断流回调URL。
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * 混流回调URL。
         * @type {string || null}
         */
        this.StreamMixNotifyUrl = null;

        /**
         * 录制回调URL。
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * 截图回调URL。
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * 鉴黄回调URL。
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * 回调的鉴权key
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.StreamMixNotifyUrl = 'StreamMixNotifyUrl' in params ? params.StreamMixNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * UnBindLiveDomainCert请求参数结构体
 * @class
 */
class UnBindLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DeleteLiveRecord返回参数结构体
 * @class
 */
class DeleteLiveRecordResponse extends  AbstractModel {
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
 * DescribeLiveDomains返回参数结构体
 * @class
 */
class DescribeLiveDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * 域名详细信息列表
         * @type {Array.<DomainInfo> || null}
         */
        this.DomainList = null;

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
        this.AllCount = 'AllCount' in params ? params.AllCount : null;

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new DomainInfo();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 拉流配置
 * @class
 */
class PullStreamConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流配置Id。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域名。
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * 运营商名。
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 开始时间。
UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。

UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 0无效，1初始状态，2正在运行，3拉起失败，4暂停。
         * @type {string || null}
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.FromUrl = 'FromUrl' in params ? params.FromUrl : null;
        this.ToUrl = 'ToUrl' in params ? params.ToUrl : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateLiveRecord返回参数结构体
 * @class
 */
class CreateLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，全局唯一标识录制任务。
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
 * 规则信息
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * UpdateLiveWatermark返回参数结构体
 * @class
 */
class UpdateLiveWatermarkResponse extends  AbstractModel {
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
 * CreateLiveTranscodeTemplate返回参数结构体
 * @class
 */
class CreateLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流播放信息
 * @class
 */
class DayStreamPlayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间点，格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 带宽（单位Mbps）。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 流量 （单位MB）。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 请求数。
         * @type {number || null}
         */
        this.Request = null;

        /**
         * 在线人数。
         * @type {number || null}
         */
        this.Online = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Online = 'Online' in params ? params.Online : null;

    }
}

/**
 * ModifyPullStreamStatus返回参数结构体
 * @class
 */
class ModifyPullStreamStatusResponse extends  AbstractModel {
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
 * ModifyLivePlayDomain返回参数结构体
 * @class
 */
class ModifyLivePlayDomainResponse extends  AbstractModel {
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
 * ForbidLiveDomain返回参数结构体
 * @class
 */
class ForbidLiveDomainResponse extends  AbstractModel {
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
 * DescribeLiveCerts返回参数结构体
 * @class
 */
class DescribeLiveCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书信息列表。
         * @type {Array.<CertInfo> || null}
         */
        this.CertInfoSet = null;

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

        if (params.CertInfoSet) {
            this.CertInfoSet = new Array();
            for (let z in params.CertInfoSet) {
                let obj = new CertInfo();
                obj.deserialize(params.CertInfoSet[z]);
                this.CertInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProvinceIspPlayInfoList返回参数结构体
 * @class
 */
class DescribeProvinceIspPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放信息列表。
         * @type {Array.<PlayStatInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * 统计的类型，和输入参数保持一致。
         * @type {string || null}
         */
        this.StatType = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlayStatInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveRecordTemplates返回参数结构体
 * @class
 */
class DescribeLiveRecordTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制模板信息列表。
         * @type {Array.<RecordTemplateInfo> || null}
         */
        this.Templates = null;

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
                let obj = new RecordTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCert请求参数结构体
 * @class
 */
class DescribeLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DeleteLiveWatermark返回参数结构体
 * @class
 */
class DeleteLiveWatermarkResponse extends  AbstractModel {
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
 * ModifyLivePlayAuthKey返回参数结构体
 * @class
 */
class ModifyLivePlayAuthKeyResponse extends  AbstractModel {
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
 * CreateLiveCallbackTemplate请求参数结构体
 * @class
 */
class CreateLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称。非空的字符串
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 开播回调URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * 断流回调URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * 录制回调URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * 截图回调URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * 鉴黄回调URL，
相关协议文档：[事件消息通知](/document/product/267/32741)。
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * 回调key，回调URL公用，鉴权回调说明详见回调格式文档
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DropLiveStream返回参数结构体
 * @class
 */
class DropLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveStreamState返回参数结构体
 * @class
 */
class DescribeLiveStreamStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流状态，
active：活跃，
inactive：非活跃，
forbid：禁播。
         * @type {string || null}
         */
        this.StreamState = null;

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
        this.StreamState = 'StreamState' in params ? params.StreamState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLiveRecord请求参数结构体
 * @class
 */
class StopLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 任务ID，全局唯一标识录制任务。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeletePullStreamConfig返回参数结构体
 * @class
 */
class DeletePullStreamConfigResponse extends  AbstractModel {
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
 * DeleteLiveWatermarkRule请求参数结构体
 * @class
 */
class DeleteLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * 推断流事件信息。
 * @class
 */
class StreamEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流开始时间。
UTC格式时间，
例如：2019-01-07T12:00:00Z。
         * @type {string || null}
         */
        this.StreamStartTime = null;

        /**
         * 推流结束时间。
UTC格式时间，
例如：2019-01-07T15:00:00Z。
         * @type {string || null}
         */
        this.StreamEndTime = null;

        /**
         * 停止原因。
         * @type {string || null}
         */
        this.StopReason = null;

        /**
         * 推流持续时长，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 主播IP。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 分辨率。
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeLiveWatermarks请求参数结构体
 * @class
 */
class DescribeLiveWatermarksRequest extends  AbstractModel {
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
 * CreateLiveTranscodeRule请求参数结构体
 * @class
 */
class CreateLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 指定已有的模板Id。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveWatermarkRules请求参数结构体
 * @class
 */
class DescribeLiveWatermarkRulesRequest extends  AbstractModel {
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
 * DropLiveStream请求参数结构体
 * @class
 */
class DropLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * CreateLiveCert返回参数结构体
 * @class
 */
class CreateLiveCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {number || null}
         */
        this.CertId = null;

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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 推流数据信息
 * @class
 */
class PushDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流路径。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流客户端ip。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 接流服务器ip。
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 推流视频帧率，单位是Hz。
         * @type {number || null}
         */
        this.VideoFps = null;

        /**
         * 推流视频码率，单位是bps。
         * @type {number || null}
         */
        this.VideoSpeed = null;

        /**
         * 推流音频帧率，单位是Hz。
         * @type {number || null}
         */
        this.AudioFps = null;

        /**
         * 推流音频码率，单位是bps。
         * @type {number || null}
         */
        this.AudioSpeed = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * 推流开始时间。
         * @type {string || null}
         */
        this.BeginPushTime = null;

        /**
         * 音频编码格式，
例："AAC"。
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * 视频编码格式，
例："H264"。
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * 分辨率。
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.VideoFps = 'VideoFps' in params ? params.VideoFps : null;
        this.VideoSpeed = 'VideoSpeed' in params ? params.VideoSpeed : null;
        this.AudioFps = 'AudioFps' in params ? params.AudioFps : null;
        this.AudioSpeed = 'AudioSpeed' in params ? params.AudioSpeed : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.BeginPushTime = 'BeginPushTime' in params ? params.BeginPushTime : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * ModifyLiveCert返回参数结构体
 * @class
 */
class ModifyLiveCertResponse extends  AbstractModel {
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
 * DescribeStreamDayPlayInfoList请求参数结构体
 * @class
 */
class DescribeStreamDayPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期，
格式：YYYY-mm-dd。
         * @type {string || null}
         */
        this.DayTime = null;

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * 页号，范围[1,10]，默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围[100,1000]，默认值是1000。
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
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 转码详细信息
 * @class
 */
class TranscodeDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 开始时间，北京时间，
格式：yyyy-mm-dd HH:MM。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，北京时间，
格式：yyyy-mm-dd HH:MM。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 转码时长，单位：分钟。
注意：因推流过程中可能有中断重推情况，此处时长为真实转码时长累加值，并非结束时间和开始时间的间隔。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 编码方式，带模块，
示例：
liveprocessor_H264 =》直播转码-H264，
liveprocessor_H265 =》 直播转码-H265，
topspeed_H264 =》极速高清-H264，
topspeed_H265 =》极速高清-H265。
         * @type {string || null}
         */
        this.ModuleCodec = null;

        /**
         * 码率。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 类型，包含：转码(Transcode)，混流(MixStream)，水印(WaterMark)。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ModuleCodec = 'ModuleCodec' in params ? params.ModuleCodec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate返回参数结构体
 * @class
 */
class DescribeLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截图模板信息。
         * @type {SnapshotTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new SnapshotTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeRules返回参数结构体
 * @class
 */
class DescribeLiveTranscodeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveDomain请求参数结构体
 * @class
 */
class AddLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 域名类型，
0：推流域名，
1：播放域名。
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * 拉流域名类型：
1：国内，
2：全球，
3：境外。
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * 默认 0 ：普通直播，
1：慢直播。
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * 流名称列表
 * @class
 */
class StreamName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * CreatePullStreamConfig请求参数结构体
 * @class
 */
class CreatePullStreamConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url，目前限制该目标地址为腾讯域名。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域id,1-深圳,2-上海，3-天津,4-香港。
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 运营商id,1-电信,2-移动,3-联通,4-其他,AreaId为4的时候,IspId只能为其他。
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromUrl = 'FromUrl' in params ? params.FromUrl : null;
        this.ToUrl = 'ToUrl' in params ? params.ToUrl : null;
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.IspId = 'IspId' in params ? params.IspId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeLiveCerts请求参数结构体
 * @class
 */
class DescribeLiveCertsRequest extends  AbstractModel {
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
 * DescribeLiveCert返回参数结构体
 * @class
 */
class DescribeLiveCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书信息。
         * @type {CertInfo || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            let obj = new CertInfo();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveDomain返回参数结构体
 * @class
 */
class AddLiveDomainResponse extends  AbstractModel {
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
 * ModifyPullStreamConfig返回参数结构体
 * @class
 */
class ModifyPullStreamConfigResponse extends  AbstractModel {
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
 * DescribeProvinceIspPlayInfoList请求参数结构体
 * @class
 */
class DescribeProvinceIspPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，当前使用北京时间，
例：2019-02-21 10:00:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，当前使用北京时间，
例：2019-02-21 12:00:00。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 支持如下粒度：
1：1分钟粒度（跨度不支持超过1天）
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * 统计指标类型：
“Bandwidth”：带宽
“FluxPerSecond”：平均流量
“Flux”：流量
“Request”：请求数
“Online”：并发连接数
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 播放域名列表。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 非必传参数，要查询的省份（地区）英文名称列表，如 Beijing
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * 非必传参数，要查询的运营商英文名称列表，如 China Mobile ，如果为空，查询所有运营商的数据
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.ProvinceNames = 'ProvinceNames' in params ? params.ProvinceNames : null;
        this.IspNames = 'IspNames' in params ? params.IspNames : null;

    }
}

/**
 * DeleteLiveCallbackTemplate返回参数结构体
 * @class
 */
class DeleteLiveCallbackTemplateResponse extends  AbstractModel {
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
 * DescribeLiveForbidStreamList返回参数结构体
 * @class
 */
class DescribeLiveForbidStreamListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页显示的条数。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 禁推流列表。
         * @type {Array.<ForbidStreamInfo> || null}
         */
        this.ForbidStreamList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.ForbidStreamList) {
            this.ForbidStreamList = new Array();
            for (let z in params.ForbidStreamList) {
                let obj = new ForbidStreamInfo();
                obj.deserialize(params.ForbidStreamList[z]);
                this.ForbidStreamList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveWatermark返回参数结构体
 * @class
 */
class DescribeLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印信息。
         * @type {WatermarkInfo || null}
         */
        this.Watermark = null;

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

        if (params.Watermark) {
            let obj = new WatermarkInfo();
            obj.deserialize(params.Watermark)
            this.Watermark = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeLiveStream返回参数结构体
 * @class
 */
class ResumeLiveStreamResponse extends  AbstractModel {
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
 * DeletePullStreamConfig请求参数结构体
 * @class
 */
class DeletePullStreamConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id。
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DescribeLiveStreamPushInfoList请求参数结构体
 * @class
 */
class DescribeLiveStreamPushInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 页数，
范围[1,10000]，
默认值：1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，
范围：[1,1000]，
默认值： 200。
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
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeLiveWatermarks返回参数结构体
 * @class
 */
class DescribeLiveWatermarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 水印信息列表。
         * @type {Array.<WatermarkInfo> || null}
         */
        this.WatermarkList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new WatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 水印信息

 * @class
 */
class WatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 显示位置，X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置，Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * 当前状态。0：未使用，1:使用中。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 添加时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 水印宽
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 水印高
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeLiveForbidStreamList请求参数结构体
 * @class
 */
class DescribeLiveForbidStreamListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取得第几页，默认1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小，最大100。 
取值：1~100之前的任意整数。
默认值：10。
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * CreatePullStreamConfig返回参数结构体
 * @class
 */
class CreatePullStreamConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置成功后的id。
         * @type {string || null}
         */
        this.ConfigId = null;

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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindLiveDomainCert请求参数结构体
 * @class
 */
class BindLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 状态，0： 关闭  1：打开。
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 获取省份/运营商的播放信息
 * @class
 */
class ProIspPlaySumInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份/运营商。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 总流量，单位：MB。
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * 总请求数。
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * 平均下载流量，单位：MB/s
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;

    }
}

/**
 * CreateLiveCallbackRule请求参数结构体
 * @class
 */
class CreateLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 模板ID。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveWatermarkRule返回参数结构体
 * @class
 */
class DeleteLiveWatermarkRuleResponse extends  AbstractModel {
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
 * 推流时间
 * @class
 */
class PublishTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流时间
UTC 格式，例如：2018-06-29T19:00:00Z。
         * @type {string || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate返回参数结构体
 * @class
 */
class ModifyLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeDetailInfo请求参数结构体
 * @class
 */
class DescribeLiveTranscodeDetailInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，北京时间，
格式：yyyymmdd。
注意：当前只支持查询近30天内某天的详细数据。
         * @type {string || null}
         */
        this.DayTime = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 页数，默认1，
不超过100页。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，默认20，
范围：[10,1000]。
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
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteLiveWatermark请求参数结构体
 * @class
 */
class DeleteLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * DescribeLiveDomains请求参数结构体
 * @class
 */
class DescribeLiveDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名状态过滤。0-停用，1-启用
         * @type {number || null}
         */
        this.DomainStatus = null;

        /**
         * 域名类型过滤。0-推流，1-播放
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * 分页大小，范围：10~100。默认10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 取第几页，范围：1~100000。默认1
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 0 普通直播 1慢直播 默认0
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * UpdateLiveWatermark请求参数结构体
 * @class
 */
class UpdateLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 显示位置，X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置，Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DeleteLiveSnapshotRule返回参数结构体
 * @class
 */
class DeleteLiveSnapshotRuleResponse extends  AbstractModel {
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
 * CreateLiveRecord请求参数结构体
 * @class
 */
class CreateLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。多域名推流必须设置。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 录制开始时间。中国标准时间，需要URLEncode。如 2017-01-01 10:10:01，编码为：2017-01-01+10%3a10%3a01。
定时录制模式，必须设置该字段；实时视频录制模式，忽略该字段。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 录制结束时间。中国标准时间，需要URLEncode。如 2017-01-01 10:30:01，编码为：2017-01-01+10%3a30%3a01。
定时录制模式，必须设置该字段；实时录制模式，为可选字段。如果通过Highlight参数，设置录制为实时视频录制模式，其设置的结束时间不应超过当前时间+30分钟，如果设置的结束时间超过当前时间+30分钟或者小于当前时间或者不设置该参数，则实际结束时间为当前时间+30分钟。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 录制类型。
“video” : 音视频录制【默认】。
“audio” : 纯音频录制。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 录制文件格式。其值为：
“flv”,“hls”,”mp4”,“aac”,”mp3”，默认“flv”。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * 开启实时视频录制模式标志。0：不开启实时视频录制模式，即采用定时录制模式【默认】；1：开启实时视频录制模式。
         * @type {number || null}
         */
        this.Highlight = null;

        /**
         * 开启A+B=C混流C流录制标志。0：不开启A+B=C混流C流录制【默认】；1：开启A+B=C混流C流录制。
在定时录制模式或实时视频录制模式下，该参数均有效。
         * @type {number || null}
         */
        this.MixStream = null;

        /**
         * 录制流参数。当前支持以下参数：
record_interval - 录制分片时长，单位 秒，1800 - 7200
storage_time - 录制文件存储时长，单位 秒
eg. record_interval=3600&storage_time=2592000
注：参数需要url encode。
在定时录制模式或实时视频录制模式下，该参数均有效。
         * @type {string || null}
         */
        this.StreamParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.FileFormat = 'FileFormat' in params ? params.FileFormat : null;
        this.Highlight = 'Highlight' in params ? params.Highlight : null;
        this.MixStream = 'MixStream' in params ? params.MixStream : null;
        this.StreamParam = 'StreamParam' in params ? params.StreamParam : null;

    }
}

/**
 * ForbidLiveStream返回参数结构体
 * @class
 */
class ForbidLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveSnapshotTemplates返回参数结构体
 * @class
 */
class DescribeLiveSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截图模板列表。
         * @type {Array.<SnapshotTemplateInfo> || null}
         */
        this.Templates = null;

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
                let obj = new SnapshotTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogDownloadList返回参数结构体
 * @class
 */
class DescribeLogDownloadListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志信息列表。
         * @type {Array.<LogInfo> || null}
         */
        this.LogInfoList = null;

        /**
         * 总条数。
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.LogInfoList) {
            this.LogInfoList = new Array();
            for (let z in params.LogInfoList) {
                let obj = new LogInfo();
                obj.deserialize(params.LogInfoList[z]);
                this.LogInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 证书信息
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间，UTC格式。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * 证书类型。
0：腾讯云托管证书
1：用户添加证书。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 证书过期时间，UTC格式。
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * 使用此证书的域名列表。
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;

    }
}

/**
 * ModifyLivePushAuthKey返回参数结构体
 * @class
 */
class ModifyLivePushAuthKeyResponse extends  AbstractModel {
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
 * DeleteLiveTranscodeTemplate请求参数结构体
 * @class
 */
class DeleteLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * DescribeLiveCallbackRules请求参数结构体
 * @class
 */
class DescribeLiveCallbackRulesRequest extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplate返回参数结构体
 * @class
 */
class DescribeLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板信息。
         * @type {TemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new TemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotTemplate返回参数结构体
 * @class
 */
class CreateLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLiveCert请求参数结构体
 * @class
 */
class ModifyLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书类型。0-用户添加证书；1-腾讯云托管证书。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 证书内容，即公钥。
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * 私钥。
         * @type {string || null}
         */
        this.HttpsKey = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.HttpsKey = 'HttpsKey' in params ? params.HttpsKey : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeProIspPlaySumInfoList请求参数结构体
 * @class
 */
class DescribeProIspPlaySumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计的类型，可选值包括”Province”，”Isp”
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 不填则为总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 页号，
范围是[1,1000]，
默认值是1
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，
默认值是20
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * UnBindLiveDomainCert返回参数结构体
 * @class
 */
class UnBindLiveDomainCertResponse extends  AbstractModel {
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
 * ForbidLiveDomain请求参数结构体
 * @class
 */
class ForbidLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停用的直播域名
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveRecordRules请求参数结构体
 * @class
 */
class DescribeLiveRecordRulesRequest extends  AbstractModel {
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
 * CreateLiveRecordTemplate返回参数结构体
 * @class
 */
class CreateLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录制模板参数
 * @class
 */
class RecordParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制间隔。
单位秒，默认值1800。
取值范围:300-7200。
此参数对 HLS 无效，当录制 HLS 时从推流到断流生成一个文件。
         * @type {number || null}
         */
        this.RecordInterval = null;

        /**
         * 录制存储时长。
单位秒，取值范围： 0-5184000。
0表示永久存储。
         * @type {number || null}
         */
        this.StorageTime = null;

        /**
         * 是否开启当前格式录制，0 否 1是。默认值0。
         * @type {number || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordInterval = 'RecordInterval' in params ? params.RecordInterval : null;
        this.StorageTime = 'StorageTime' in params ? params.StorageTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ModifyLiveRecordTemplate请求参数结构体
 * @class
 */
class ModifyLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Flv录制参数，开启Flv录制时设置。
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * Hls录制参数，开启hls录制时设置。
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * Mp4录制参数，开启Mp4录制时设置。
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * Aac录制参数，开启Aac录制时设置。
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * HLS录制定制参数
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

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

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

    }
}

/**
 * DescribeLiveStreamOnlineInfo请求参数结构体
 * @class
 */
class DescribeLiveStreamOnlineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取得第几页。
默认值：1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页大小。
最大值：100。
取值范围：1~100 之前的任意整数。
默认值：10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 0:未开始推流 1:正在推流
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveRecord请求参数结构体
 * @class
 */
class DeleteLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 任务ID，全局唯一标识录制任务。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeLiveStreamPushInfoList返回参数结构体
 * @class
 */
class DescribeLiveStreamPushInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流的统计信息列表。
         * @type {Array.<PushDataInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * 所有在线流的总数量。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 当前数据所在页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页的在线流的个数。
         * @type {number || null}
         */
        this.PageSize = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PushDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPlayInfoList请求参数结构体
 * @class
 */
class DescribeStreamPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，北京时间，格式为yyyy-mm-dd HH:MM:SS，
当前时间 和 开始时间 间隔不超过30天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，北京时间，格式为yyyy-mm-dd HH:MM:SS，
结束时间 和 开始时间  必须在同一天内。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 播放域名，
若不填，则为查询所有播放域名的在线流数据。
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * 流名称，精确匹配。
若不填，则为查询总体播放数据。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。精确匹配，不支持。
若不填，则为查询总体播放数据。
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * CreateLiveTranscodeTemplate请求参数结构体
 * @class
 */
class CreateLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称，例：900 900p 仅支持字母和数字的组合。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 视频码率。范围：100-8000。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 视频编码：h264/h265，默认h264。
注意：当前该参数未生效，待后续支持！
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * 音频编码：aac，默认原始音频格式。
注意：当前该参数未生效，待后续支持！
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * 音频码率：默认0。0-500。
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 模板描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 宽，默认0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 是否保留视频，0：否，1：是。默认1。
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * 是否保留音频，0：否，1：是。默认1。
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * 高，默认0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 帧率，默认0。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 关键帧间隔，单位：秒。默认原始的间隔
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 是否旋转，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 编码质量：
baseline/main/high。默认baseline
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 是否不超过原始码率，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * 是否不超过原始高，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * 是否不超过原始帧率，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.FpsToOrig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;

    }
}

/**
 * DescribeLiveStreamPublishedList返回参数结构体
 * @class
 */
class DescribeLiveStreamPublishedListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流记录信息。
         * @type {Array.<StreamName> || null}
         */
        this.PublishInfo = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.PublishInfo) {
            this.PublishInfo = new Array();
            for (let z in params.PublishInfo) {
                let obj = new StreamName();
                obj.deserialize(params.PublishInfo[z]);
                this.PublishInfo.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveDomain请求参数结构体
 * @class
 */
class DeleteLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的域名
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 类型。0-推流，1-播放
         * @type {number || null}
         */
        this.DomainType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;

    }
}

/**
 * AddDelayLiveStream返回参数结构体
 * @class
 */
class AddDelayLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplates返回参数结构体
 * @class
 */
class DescribeLiveTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板列表。
         * @type {Array.<TemplateInfo> || null}
         */
        this.Templates = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveCallbackRule请求参数结构体
 * @class
 */
class DeleteLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * 播放鉴权key信息
 * @class
 */
class PlayAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 鉴权key。
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * 鉴权BackKey。
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate请求参数结构体
 * @class
 */
class ModifyLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 视频编码：
h264/h265。
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * 音频编码：
aac/mp3。
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * 音频码率，默认0。0-500
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 模板描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 视频码率。100-8000
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 宽。0-3000
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 是否保留视频，0：否，1：是。默认1。
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * 是否保留音频，0：否，1：是。默认1。
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * 高。0-3000
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 帧率。0-200
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 关键帧间隔，单位：秒。0-50
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 旋转角度。0 90 180 270
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 编码质量：
baseline/main/high。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 是否不超过原始码率。0：否，1：是。默认0。
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * 是否不超过原始高。0：否，1：是。默认0。
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * 是否不超过原始帧率。0：否，1：是。默认0。
         * @type {number || null}
         */
        this.FpsToOrig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;

    }
}

/**
 * ModifyLiveDomainCert返回参数结构体
 * @class
 */
class ModifyLiveDomainCertResponse extends  AbstractModel {
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
 * ModifyLiveCallbackTemplate返回参数结构体
 * @class
 */
class ModifyLiveCallbackTemplateResponse extends  AbstractModel {
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
 * EnableLiveDomain请求参数结构体
 * @class
 */
class EnableLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待启用的直播域名
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveSnapshotRules请求参数结构体
 * @class
 */
class DescribeLiveSnapshotRulesRequest extends  AbstractModel {
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
 * CreateLiveTranscodeRule返回参数结构体
 * @class
 */
class CreateLiveTranscodeRuleResponse extends  AbstractModel {
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
 * SetLiveWatermarkStatus返回参数结构体
 * @class
 */
class SetLiveWatermarkStatusResponse extends  AbstractModel {
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
 * CreateLiveCallbackRule返回参数结构体
 * @class
 */
class CreateLiveCallbackRuleResponse extends  AbstractModel {
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
 * DescribeLiveRecordTemplate返回参数结构体
 * @class
 */
class DescribeLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制模板信息。
         * @type {RecordTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new RecordTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindLiveDomainCert返回参数结构体
 * @class
 */
class BindLiveDomainCertResponse extends  AbstractModel {
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
 * 规则信息
 * @class
 */
class CallBackRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径。
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeLiveTranscodeTemplates请求参数结构体
 * @class
 */
class DescribeLiveTranscodeTemplatesRequest extends  AbstractModel {
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
 * HLS专属录制参数
 * @class
 */
class HlsSpecialParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS续流超时时间。
         * @type {number || null}
         */
        this.FlowContinueDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowContinueDuration = 'FlowContinueDuration' in params ? params.FlowContinueDuration : null;

    }
}

/**
 * DescribeLiveRecordRules返回参数结构体
 * @class
 */
class DescribeLiveRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotTemplate请求参数结构体
 * @class
 */
class CreateLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称。非空的字符串。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Cos AppId。
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * Cos Bucket名称。
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * Cos地区。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 截图间隔，单位s，默认10s。
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * 截图宽度。默认：0（原始宽）。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 截图高度。默认：0（原始高）。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 是否开启鉴黄，0：不开启，1：开启。默认：0。
         * @type {number || null}
         */
        this.PornFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;

    }
}

/**
 * SetLiveWatermarkStatus请求参数结构体
 * @class
 */
class SetLiveWatermarkStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 状态。0：停用，1:启用
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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeLiveStreamOnlineList请求参数结构体
 * @class
 */
class DescribeLiveStreamOnlineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 取得第几页，默认1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小，最大100。 
取值：10~100之间的任意整数。
默认值：10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 流名称，用于精确查询。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveSnapshotTemplate返回参数结构体
 * @class
 */
class DeleteLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * ModifyLiveCallbackTemplate请求参数结构体
 * @class
 */
class ModifyLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 开播回调URL。
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * 断流回调URL。
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * 录制回调URL。
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * 截图回调URL。
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * 鉴黄回调URL。
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * 回调key，回调URL公用，鉴权回调说明详见回调格式文档
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DeleteLiveCert返回参数结构体
 * @class
 */
class DeleteLiveCertResponse extends  AbstractModel {
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
 * CreateLiveCallbackTemplate返回参数结构体
 * @class
 */
class CreateLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveRecordTemplate请求参数结构体
 * @class
 */
class CreateLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名。非空的字符串
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Flv录制参数，开启Flv录制时设置。
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * Hls录制参数，开启hls录制时设置。
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * Mp4录制参数，开启Mp4录制时设置。
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * Aac录制参数，开启Aac录制时设置。
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * 0：普通直播，
1：慢直播。
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * HLS专属录制参数。
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

    }
}

/**
 * 按省份运营商查询的播放信息
 * @class
 */
class PlayStatInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间点。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 带宽/流量/请求数/并发连接数/下载速度的值，若没数据返回时该值为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeLiveCallbackTemplate请求参数结构体
 * @class
 */
class DescribeLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * ModifyLiveSnapshotTemplate请求参数结构体
 * @class
 */
class ModifyLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 截图时间间隔
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * 截图宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 截图高度。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 是否开启鉴黄，0：不开启，1：开启。
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * Cos AppId。
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * Cos Bucket名称。
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * Cos 地域。
         * @type {string || null}
         */
        this.CosRegion = null;

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
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;

    }
}

/**
 * CreateLiveRecordRule返回参数结构体
 * @class
 */
class CreateLiveRecordRuleResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplate请求参数结构体
 * @class
 */
class DescribeLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
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
 * DescribeLogDownloadList请求参数结构体
 * @class
 */
class DescribeLogDownloadListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注意：结束时间 - 开始时间 <=7天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 域名列表。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;

    }
}

/**
 * DescribeLiveCallbackTemplates返回参数结构体
 * @class
 */
class DescribeLiveCallbackTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板信息列表。
         * @type {Array.<CallBackTemplateInfo> || null}
         */
        this.Templates = null;

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
                let obj = new CallBackTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLivePushAuthKey返回参数结构体
 * @class
 */
class DescribeLivePushAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流鉴权key信息。
         * @type {PushAuthKeyInfo || null}
         */
        this.PushAuthKeyInfo = null;

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

        if (params.PushAuthKeyInfo) {
            let obj = new PushAuthKeyInfo();
            obj.deserialize(params.PushAuthKeyInfo)
            this.PushAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveWatermarkRule请求参数结构体
 * @class
 */
class CreateLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 水印Id，即调用[AddLiveWatermark](/document/product/267/30154)接口返回的WatermarkId。
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveRecordTemplates请求参数结构体
 * @class
 */
class DescribeLiveRecordTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否属于慢直播模板
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * DescribeLiveDomain返回参数结构体
 * @class
 */
class DescribeLiveDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息。
         * @type {DomainInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流维度的播放信息
 * @class
 */
class PlayDataInfoByStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 总流量（单位MB）。
         * @type {number || null}
         */
        this.TotalFlux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;

    }
}

/**
 * StopLiveRecord返回参数结构体
 * @class
 */
class StopLiveRecordResponse extends  AbstractModel {
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
 * DescribeStreamDayPlayInfoList返回参数结构体
 * @class
 */
class DescribeStreamDayPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放数据信息列表。
         * @type {Array.<PlayDataInfoByStream> || null}
         */
        this.DataInfoList = null;

        /**
         * 总数量。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 当前数据所处页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数。
         * @type {number || null}
         */
        this.PageSize = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlayDataInfoByStream();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotRule返回参数结构体
 * @class
 */
class CreateLiveSnapshotRuleResponse extends  AbstractModel {
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
 * DescribeLiveStreamEventList返回参数结构体
 * @class
 */
class DescribeLiveStreamEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推断流事件列表。
         * @type {Array.<StreamEventInfo> || null}
         */
        this.EventList = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new StreamEventInfo();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePullStreamConfigs返回参数结构体
 * @class
 */
class DescribePullStreamConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流配置。
         * @type {Array.<PullStreamConfig> || null}
         */
        this.PullStreamConfigs = null;

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

        if (params.PullStreamConfigs) {
            this.PullStreamConfigs = new Array();
            for (let z in params.PullStreamConfigs) {
                let obj = new PullStreamConfig();
                obj.deserialize(params.PullStreamConfigs[z]);
                this.PullStreamConfigs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCallbackRules返回参数结构体
 * @class
 */
class DescribeLiveCallbackRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息列表。
         * @type {Array.<CallBackRuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CallBackRuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 禁推流列表
 * @class
 */
class ForbidStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 禁推过期时间。
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ResumeDelayLiveStream返回参数结构体
 * @class
 */
class ResumeDelayLiveStreamResponse extends  AbstractModel {
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
 * DeleteLiveDomain返回参数结构体
 * @class
 */
class DeleteLiveDomainResponse extends  AbstractModel {
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
 * DescribeLivePushAuthKey请求参数结构体
 * @class
 */
class DescribeLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeProIspPlaySumInfoList返回参数结构体
 * @class
 */
class DescribeProIspPlaySumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总流量。
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * 总请求数。
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * 统计的类型。
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 每页的记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页号
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 省份或运营商汇总数据列表
         * @type {Array.<ProIspPlaySumInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * 平均带宽
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

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
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ProIspPlaySumInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveCert请求参数结构体
 * @class
 */
class DeleteLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书Id。
         * @type {number || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * 截图模板信息
 * @class
 */
class SnapshotTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 截图时间间隔。5-300
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * 截图宽度。0-3000 0原始宽度并适配原始比例
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 截图高度。0-2000 0原始高度并适配原始比例
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 是否开启鉴黄，0：不开启，1：开启。
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * Cos AppId。
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * Cos Bucket名称。
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * Cos 地域。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 模板描述
         * @type {string || null}
         */
        this.Description = null;

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
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteLiveRecordRule返回参数结构体
 * @class
 */
class DeleteLiveRecordRuleResponse extends  AbstractModel {
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
    CreateLiveSnapshotRuleRequest: CreateLiveSnapshotRuleRequest,
    EnableLiveDomainResponse: EnableLiveDomainResponse,
    CreateLiveCertRequest: CreateLiveCertRequest,
    DescribeLiveCallbackTemplatesRequest: DescribeLiveCallbackTemplatesRequest,
    DeleteLiveRecordRuleRequest: DeleteLiveRecordRuleRequest,
    ResumeLiveStreamRequest: ResumeLiveStreamRequest,
    DeleteLiveTranscodeTemplateResponse: DeleteLiveTranscodeTemplateResponse,
    TemplateInfo: TemplateInfo,
    DeleteLiveCallbackRuleResponse: DeleteLiveCallbackRuleResponse,
    ResumeDelayLiveStreamRequest: ResumeDelayLiveStreamRequest,
    DescribeLiveWatermarkRulesResponse: DescribeLiveWatermarkRulesResponse,
    DescribeLiveCallbackTemplateResponse: DescribeLiveCallbackTemplateResponse,
    DeleteLiveSnapshotTemplateRequest: DeleteLiveSnapshotTemplateRequest,
    PushAuthKeyInfo: PushAuthKeyInfo,
    ModifyPullStreamStatusRequest: ModifyPullStreamStatusRequest,
    DescribeLiveStreamOnlineInfoResponse: DescribeLiveStreamOnlineInfoResponse,
    DeleteLiveRecordTemplateRequest: DeleteLiveRecordTemplateRequest,
    DescribeLivePlayAuthKeyRequest: DescribeLivePlayAuthKeyRequest,
    DescribeLiveStreamOnlineListResponse: DescribeLiveStreamOnlineListResponse,
    ModifyLivePlayAuthKeyRequest: ModifyLivePlayAuthKeyRequest,
    DomainCertInfo: DomainCertInfo,
    RecordTemplateInfo: RecordTemplateInfo,
    DeleteLiveTranscodeRuleResponse: DeleteLiveTranscodeRuleResponse,
    DescribeStreamPlayInfoListResponse: DescribeStreamPlayInfoListResponse,
    ModifyLiveSnapshotTemplateResponse: ModifyLiveSnapshotTemplateResponse,
    ModifyLivePushAuthKeyRequest: ModifyLivePushAuthKeyRequest,
    DeleteLiveCallbackTemplateRequest: DeleteLiveCallbackTemplateRequest,
    DescribeLiveStreamStateRequest: DescribeLiveStreamStateRequest,
    DescribeLivePlayAuthKeyResponse: DescribeLivePlayAuthKeyResponse,
    DescribeLiveSnapshotTemplateRequest: DescribeLiveSnapshotTemplateRequest,
    DomainInfo: DomainInfo,
    DescribeLiveTranscodeRulesRequest: DescribeLiveTranscodeRulesRequest,
    DeleteLiveSnapshotRuleRequest: DeleteLiveSnapshotRuleRequest,
    ModifyPullStreamConfigRequest: ModifyPullStreamConfigRequest,
    DescribeLiveSnapshotRulesResponse: DescribeLiveSnapshotRulesResponse,
    DescribeLiveTranscodeDetailInfoResponse: DescribeLiveTranscodeDetailInfoResponse,
    DescribeLiveDomainRequest: DescribeLiveDomainRequest,
    DescribeLiveStreamPublishedListRequest: DescribeLiveStreamPublishedListRequest,
    DeleteLiveTranscodeRuleRequest: DeleteLiveTranscodeRuleRequest,
    CreateLiveRecordRuleRequest: CreateLiveRecordRuleRequest,
    DescribeLiveSnapshotTemplatesRequest: DescribeLiveSnapshotTemplatesRequest,
    AddLiveWatermarkResponse: AddLiveWatermarkResponse,
    DescribeLiveDomainCertResponse: DescribeLiveDomainCertResponse,
    DescribeLiveRecordTemplateRequest: DescribeLiveRecordTemplateRequest,
    ModifyLiveDomainCertRequest: ModifyLiveDomainCertRequest,
    StreamOnlineInfo: StreamOnlineInfo,
    CreateLiveWatermarkRuleResponse: CreateLiveWatermarkRuleResponse,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    StreamInfo: StreamInfo,
    AddLiveWatermarkRequest: AddLiveWatermarkRequest,
    ModifyLiveRecordTemplateResponse: ModifyLiveRecordTemplateResponse,
    ModifyLivePlayDomainRequest: ModifyLivePlayDomainRequest,
    DeleteLiveRecordTemplateResponse: DeleteLiveRecordTemplateResponse,
    DescribeLiveWatermarkRequest: DescribeLiveWatermarkRequest,
    LogInfo: LogInfo,
    AddDelayLiveStreamRequest: AddDelayLiveStreamRequest,
    DescribeLiveDomainCertRequest: DescribeLiveDomainCertRequest,
    DescribeLiveStreamEventListRequest: DescribeLiveStreamEventListRequest,
    DescribePullStreamConfigsRequest: DescribePullStreamConfigsRequest,
    CallBackTemplateInfo: CallBackTemplateInfo,
    UnBindLiveDomainCertRequest: UnBindLiveDomainCertRequest,
    DeleteLiveRecordResponse: DeleteLiveRecordResponse,
    DescribeLiveDomainsResponse: DescribeLiveDomainsResponse,
    PullStreamConfig: PullStreamConfig,
    CreateLiveRecordResponse: CreateLiveRecordResponse,
    RuleInfo: RuleInfo,
    UpdateLiveWatermarkResponse: UpdateLiveWatermarkResponse,
    CreateLiveTranscodeTemplateResponse: CreateLiveTranscodeTemplateResponse,
    DayStreamPlayInfo: DayStreamPlayInfo,
    ModifyPullStreamStatusResponse: ModifyPullStreamStatusResponse,
    ModifyLivePlayDomainResponse: ModifyLivePlayDomainResponse,
    ForbidLiveDomainResponse: ForbidLiveDomainResponse,
    DescribeLiveCertsResponse: DescribeLiveCertsResponse,
    DescribeProvinceIspPlayInfoListResponse: DescribeProvinceIspPlayInfoListResponse,
    DescribeLiveRecordTemplatesResponse: DescribeLiveRecordTemplatesResponse,
    DescribeLiveCertRequest: DescribeLiveCertRequest,
    DeleteLiveWatermarkResponse: DeleteLiveWatermarkResponse,
    ModifyLivePlayAuthKeyResponse: ModifyLivePlayAuthKeyResponse,
    CreateLiveCallbackTemplateRequest: CreateLiveCallbackTemplateRequest,
    DropLiveStreamResponse: DropLiveStreamResponse,
    DescribeLiveStreamStateResponse: DescribeLiveStreamStateResponse,
    StopLiveRecordRequest: StopLiveRecordRequest,
    DeletePullStreamConfigResponse: DeletePullStreamConfigResponse,
    DeleteLiveWatermarkRuleRequest: DeleteLiveWatermarkRuleRequest,
    StreamEventInfo: StreamEventInfo,
    DescribeLiveWatermarksRequest: DescribeLiveWatermarksRequest,
    CreateLiveTranscodeRuleRequest: CreateLiveTranscodeRuleRequest,
    DescribeLiveWatermarkRulesRequest: DescribeLiveWatermarkRulesRequest,
    DropLiveStreamRequest: DropLiveStreamRequest,
    CreateLiveCertResponse: CreateLiveCertResponse,
    PushDataInfo: PushDataInfo,
    ModifyLiveCertResponse: ModifyLiveCertResponse,
    DescribeStreamDayPlayInfoListRequest: DescribeStreamDayPlayInfoListRequest,
    TranscodeDetailInfo: TranscodeDetailInfo,
    DescribeLiveSnapshotTemplateResponse: DescribeLiveSnapshotTemplateResponse,
    DescribeLiveTranscodeRulesResponse: DescribeLiveTranscodeRulesResponse,
    AddLiveDomainRequest: AddLiveDomainRequest,
    StreamName: StreamName,
    CreatePullStreamConfigRequest: CreatePullStreamConfigRequest,
    DescribeLiveCertsRequest: DescribeLiveCertsRequest,
    DescribeLiveCertResponse: DescribeLiveCertResponse,
    AddLiveDomainResponse: AddLiveDomainResponse,
    ModifyPullStreamConfigResponse: ModifyPullStreamConfigResponse,
    DescribeProvinceIspPlayInfoListRequest: DescribeProvinceIspPlayInfoListRequest,
    DeleteLiveCallbackTemplateResponse: DeleteLiveCallbackTemplateResponse,
    DescribeLiveForbidStreamListResponse: DescribeLiveForbidStreamListResponse,
    DescribeLiveWatermarkResponse: DescribeLiveWatermarkResponse,
    ResumeLiveStreamResponse: ResumeLiveStreamResponse,
    DeletePullStreamConfigRequest: DeletePullStreamConfigRequest,
    DescribeLiveStreamPushInfoListRequest: DescribeLiveStreamPushInfoListRequest,
    DescribeLiveWatermarksResponse: DescribeLiveWatermarksResponse,
    WatermarkInfo: WatermarkInfo,
    DescribeLiveForbidStreamListRequest: DescribeLiveForbidStreamListRequest,
    CreatePullStreamConfigResponse: CreatePullStreamConfigResponse,
    BindLiveDomainCertRequest: BindLiveDomainCertRequest,
    ProIspPlaySumInfo: ProIspPlaySumInfo,
    CreateLiveCallbackRuleRequest: CreateLiveCallbackRuleRequest,
    DeleteLiveWatermarkRuleResponse: DeleteLiveWatermarkRuleResponse,
    PublishTime: PublishTime,
    ModifyLiveTranscodeTemplateResponse: ModifyLiveTranscodeTemplateResponse,
    DescribeLiveTranscodeDetailInfoRequest: DescribeLiveTranscodeDetailInfoRequest,
    DeleteLiveWatermarkRequest: DeleteLiveWatermarkRequest,
    DescribeLiveDomainsRequest: DescribeLiveDomainsRequest,
    UpdateLiveWatermarkRequest: UpdateLiveWatermarkRequest,
    DeleteLiveSnapshotRuleResponse: DeleteLiveSnapshotRuleResponse,
    CreateLiveRecordRequest: CreateLiveRecordRequest,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    DescribeLiveSnapshotTemplatesResponse: DescribeLiveSnapshotTemplatesResponse,
    DescribeLogDownloadListResponse: DescribeLogDownloadListResponse,
    CertInfo: CertInfo,
    ModifyLivePushAuthKeyResponse: ModifyLivePushAuthKeyResponse,
    DeleteLiveTranscodeTemplateRequest: DeleteLiveTranscodeTemplateRequest,
    DescribeLiveCallbackRulesRequest: DescribeLiveCallbackRulesRequest,
    DescribeLiveTranscodeTemplateResponse: DescribeLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateResponse: CreateLiveSnapshotTemplateResponse,
    ModifyLiveCertRequest: ModifyLiveCertRequest,
    DescribeProIspPlaySumInfoListRequest: DescribeProIspPlaySumInfoListRequest,
    UnBindLiveDomainCertResponse: UnBindLiveDomainCertResponse,
    ForbidLiveDomainRequest: ForbidLiveDomainRequest,
    DescribeLiveRecordRulesRequest: DescribeLiveRecordRulesRequest,
    CreateLiveRecordTemplateResponse: CreateLiveRecordTemplateResponse,
    RecordParam: RecordParam,
    ModifyLiveRecordTemplateRequest: ModifyLiveRecordTemplateRequest,
    DescribeLiveStreamOnlineInfoRequest: DescribeLiveStreamOnlineInfoRequest,
    DeleteLiveRecordRequest: DeleteLiveRecordRequest,
    DescribeLiveStreamPushInfoListResponse: DescribeLiveStreamPushInfoListResponse,
    DescribeStreamPlayInfoListRequest: DescribeStreamPlayInfoListRequest,
    CreateLiveTranscodeTemplateRequest: CreateLiveTranscodeTemplateRequest,
    DescribeLiveStreamPublishedListResponse: DescribeLiveStreamPublishedListResponse,
    DeleteLiveDomainRequest: DeleteLiveDomainRequest,
    AddDelayLiveStreamResponse: AddDelayLiveStreamResponse,
    DescribeLiveTranscodeTemplatesResponse: DescribeLiveTranscodeTemplatesResponse,
    DeleteLiveCallbackRuleRequest: DeleteLiveCallbackRuleRequest,
    PlayAuthKeyInfo: PlayAuthKeyInfo,
    ModifyLiveTranscodeTemplateRequest: ModifyLiveTranscodeTemplateRequest,
    ModifyLiveDomainCertResponse: ModifyLiveDomainCertResponse,
    ModifyLiveCallbackTemplateResponse: ModifyLiveCallbackTemplateResponse,
    EnableLiveDomainRequest: EnableLiveDomainRequest,
    DescribeLiveSnapshotRulesRequest: DescribeLiveSnapshotRulesRequest,
    CreateLiveTranscodeRuleResponse: CreateLiveTranscodeRuleResponse,
    SetLiveWatermarkStatusResponse: SetLiveWatermarkStatusResponse,
    CreateLiveCallbackRuleResponse: CreateLiveCallbackRuleResponse,
    DescribeLiveRecordTemplateResponse: DescribeLiveRecordTemplateResponse,
    BindLiveDomainCertResponse: BindLiveDomainCertResponse,
    CallBackRuleInfo: CallBackRuleInfo,
    DescribeLiveTranscodeTemplatesRequest: DescribeLiveTranscodeTemplatesRequest,
    HlsSpecialParam: HlsSpecialParam,
    DescribeLiveRecordRulesResponse: DescribeLiveRecordRulesResponse,
    CreateLiveSnapshotTemplateRequest: CreateLiveSnapshotTemplateRequest,
    SetLiveWatermarkStatusRequest: SetLiveWatermarkStatusRequest,
    DescribeLiveStreamOnlineListRequest: DescribeLiveStreamOnlineListRequest,
    DeleteLiveSnapshotTemplateResponse: DeleteLiveSnapshotTemplateResponse,
    ModifyLiveCallbackTemplateRequest: ModifyLiveCallbackTemplateRequest,
    DeleteLiveCertResponse: DeleteLiveCertResponse,
    CreateLiveCallbackTemplateResponse: CreateLiveCallbackTemplateResponse,
    CreateLiveRecordTemplateRequest: CreateLiveRecordTemplateRequest,
    PlayStatInfo: PlayStatInfo,
    DescribeLiveCallbackTemplateRequest: DescribeLiveCallbackTemplateRequest,
    ModifyLiveSnapshotTemplateRequest: ModifyLiveSnapshotTemplateRequest,
    CreateLiveRecordRuleResponse: CreateLiveRecordRuleResponse,
    DescribeLiveTranscodeTemplateRequest: DescribeLiveTranscodeTemplateRequest,
    DescribeLogDownloadListRequest: DescribeLogDownloadListRequest,
    DescribeLiveCallbackTemplatesResponse: DescribeLiveCallbackTemplatesResponse,
    DescribeLivePushAuthKeyResponse: DescribeLivePushAuthKeyResponse,
    CreateLiveWatermarkRuleRequest: CreateLiveWatermarkRuleRequest,
    DescribeLiveRecordTemplatesRequest: DescribeLiveRecordTemplatesRequest,
    DescribeLiveDomainResponse: DescribeLiveDomainResponse,
    PlayDataInfoByStream: PlayDataInfoByStream,
    StopLiveRecordResponse: StopLiveRecordResponse,
    DescribeStreamDayPlayInfoListResponse: DescribeStreamDayPlayInfoListResponse,
    CreateLiveSnapshotRuleResponse: CreateLiveSnapshotRuleResponse,
    DescribeLiveStreamEventListResponse: DescribeLiveStreamEventListResponse,
    DescribePullStreamConfigsResponse: DescribePullStreamConfigsResponse,
    DescribeLiveCallbackRulesResponse: DescribeLiveCallbackRulesResponse,
    ForbidStreamInfo: ForbidStreamInfo,
    ResumeDelayLiveStreamResponse: ResumeDelayLiveStreamResponse,
    DeleteLiveDomainResponse: DeleteLiveDomainResponse,
    DescribeLivePushAuthKeyRequest: DescribeLivePushAuthKeyRequest,
    DescribeProIspPlaySumInfoListResponse: DescribeProIspPlaySumInfoListResponse,
    DeleteLiveCertRequest: DeleteLiveCertRequest,
    SnapshotTemplateInfo: SnapshotTemplateInfo,
    DeleteLiveRecordRuleResponse: DeleteLiveRecordRuleResponse,

}
