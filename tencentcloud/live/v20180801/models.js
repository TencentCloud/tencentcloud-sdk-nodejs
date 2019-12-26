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
 * 带宽和流量信息
 * @class
 */
class BillDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 带宽，单位是Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 流量，单位是MB。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 峰值时间点，格式为yyyy-mm-dd HH:MM:SS，原始数据为5分钟粒度，如果查询小时和天粒度数据，则返回对应粒度内的带宽峰值时间点。
         * @type {string || null}
         */
        this.PeakTime = null;

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
        this.PeakTime = 'PeakTime' in params ? params.PeakTime : null;

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
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
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
 * CreateLiveSnapshotTemplate请求参数结构体
 * @class
 */
class CreateLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称，非空的字符串。
长度上限：255字节。
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
长度上限：1024字节。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 截图间隔，单位s，默认10s。
范围： 5s ~ 600s。
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

        /**
         * 是否是急速高清模板，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * 急速高清相比VideoBitrate少多少码率，0.1到0.5
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

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
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

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
 * DescribeGroupProIspPlayInfoList返回参数结构体
 * @class
 */
class DescribeGroupProIspPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容。
         * @type {Array.<GroupProIspDataInfo> || null}
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
                let obj = new GroupProIspDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 多个域名信息列表
 * @class
 */
class DomainInfoList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 明细信息。
         * @type {Array.<DomainDetailInfo> || null}
         */
        this.DetailInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.DetailInfoList) {
            this.DetailInfoList = new Array();
            for (let z in params.DetailInfoList) {
                let obj = new DomainDetailInfo();
                obj.deserialize(params.DetailInfoList[z]);
                this.DetailInfoList.push(obj);
            }
        }

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
 * 某条流的推流质量详情数据。
 * @class
 */
class PushQualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间，格式是%Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

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
         * 开始推流时间，格式是%Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。
         * @type {string || null}
         */
        this.BeginPushTime = null;

        /**
         * 分辨率信息。
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 视频编码格式。
         * @type {string || null}
         */
        this.VCodec = null;

        /**
         * 音频编码格式。
         * @type {string || null}
         */
        this.ACodec = null;

        /**
         * 推流序列号，用来唯一的标志一次推流。
         * @type {string || null}
         */
        this.Sequence = null;

        /**
         * 视频帧率。
         * @type {number || null}
         */
        this.VideoFps = null;

        /**
         * 视频码率，单位是bps。
         * @type {number || null}
         */
        this.VideoRate = null;

        /**
         * 音频帧率。
         * @type {number || null}
         */
        this.AudioFps = null;

        /**
         * 音频码率，单位是bps。
         * @type {number || null}
         */
        this.AudioRate = null;

        /**
         * 本地流逝时间，单位是ms，音视频流逝时间与本地流逝时间的差距越大表示推流质量越差，上行卡顿越严重。
         * @type {number || null}
         */
        this.LocalTs = null;

        /**
         * 视频流逝时间，单位是ms。
         * @type {number || null}
         */
        this.VideoTs = null;

        /**
         * 音频流逝时间，单位是ms。
         * @type {number || null}
         */
        this.AudioTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.BeginPushTime = 'BeginPushTime' in params ? params.BeginPushTime : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.VCodec = 'VCodec' in params ? params.VCodec : null;
        this.ACodec = 'ACodec' in params ? params.ACodec : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;
        this.VideoFps = 'VideoFps' in params ? params.VideoFps : null;
        this.VideoRate = 'VideoRate' in params ? params.VideoRate : null;
        this.AudioFps = 'AudioFps' in params ? params.AudioFps : null;
        this.AudioRate = 'AudioRate' in params ? params.AudioRate : null;
        this.LocalTs = 'LocalTs' in params ? params.LocalTs : null;
        this.VideoTs = 'VideoTs' in params ? params.VideoTs : null;
        this.AudioTs = 'AudioTs' in params ? params.AudioTs : null;

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
 * DescribeLiveDelayInfoList请求参数结构体
 * @class
 */
class DescribeLiveDelayInfoListRequest extends  AbstractModel {
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

        /**
         * Mp3录制参数。
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

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

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
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

        /**
         * 当前客户使用的cname信息
         * @type {string || null}
         */
        this.CurrentCName = null;

        /**
         * 是否租用域名
         * @type {number || null}
         */
        this.RentTag = null;

        /**
         * 租用域名过期时间
         * @type {string || null}
         */
        this.RentExpireTime = null;

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
        this.CurrentCName = 'CurrentCName' in params ? params.CurrentCName : null;
        this.RentTag = 'RentTag' in params ? params.RentTag : null;
        this.RentExpireTime = 'RentExpireTime' in params ? params.RentExpireTime : null;

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
 * DescribePlayErrorCodeDetailInfoList请求参数结构体
 * @class
 */
class DescribePlayErrorCodeDetailInfoListRequest extends  AbstractModel {
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
         * 查询粒度：
1-1分钟粒度。
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * 是，可选值包括”4xx”,”5xx”，支持”4xx,5xx”等这种混合模式。
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 播放域名列表。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * DescribeBillBandwidthAndFluxList请求参数结构体
 * @class
 */
class DescribeBillBandwidthAndFluxListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 直播播放域名，若不填，表示总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据。
默认：查询国内+国外的数据。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
60：1小时粒度（跨度不支持超过一个月），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
         * @type {number || null}
         */
        this.Granularity = null;

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
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

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
         * 您的推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 结束时间。
UTC 格式，例如：2016-06-30T19:00:00Z。
不超过当前时间。
注意：EndTime和StartTime相差不可超过30天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 起始时间。 
UTC 格式，例如：2016-06-29T19:00:00Z。
最长支持查询60天内数据。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。不支持模糊匹配。
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

        /**
         * 流名称，支持模糊匹配。
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
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

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
域名维度转码，域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 流名称。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 模板ID。
域名+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
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
         * 您的推流域名。
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
注意：
1. 默认禁播7天，且最长支持禁播90天。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         * @type {string || null}
         */
        this.ResumeTime = null;

        /**
         * 禁推原因。
注明：请务必填写禁推原因，防止误操作。
长度限制：2048字节。
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * 各状态码的总次数，支持大多数的http协议返回码
 * @class
 */
class PlayCodeTotalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP code，可选值包括400,403,404,500,502,503,504
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 总次数
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Num = 'Num' in params ? params.Num : null;

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

        /**
         * 文件大小
         * @type {number || null}
         */
        this.FileSize = null;

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
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

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
注意：
1. 默认7天后过期，且最长支持7天内生效。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * DescribePlayErrorCodeSumInfoList返回参数结构体
 * @class
 */
class DescribePlayErrorCodeSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分省份分运营商错误码为4或5开头的状态码数据信息。
         * @type {Array.<ProIspPlayCodeDataInfo> || null}
         */
        this.ProIspInfoList = null;

        /**
         * 所有状态码的加和的次数。
         * @type {number || null}
         */
        this.TotalCodeAll = null;

        /**
         * 状态码为4开头的总次数。
         * @type {number || null}
         */
        this.TotalCode4xx = null;

        /**
         * 状态码为5开头的总次数。
         * @type {number || null}
         */
        this.TotalCode5xx = null;

        /**
         * 各状态码的总次数。
         * @type {Array.<PlayCodeTotalInfo> || null}
         */
        this.TotalCodeList = null;

        /**
         * 页号。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 总记录数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 状态码为2开头的总次数。
         * @type {number || null}
         */
        this.TotalCode2xx = null;

        /**
         * 状态码为3开头的总次数。
         * @type {number || null}
         */
        this.TotalCode3xx = null;

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

        if (params.ProIspInfoList) {
            this.ProIspInfoList = new Array();
            for (let z in params.ProIspInfoList) {
                let obj = new ProIspPlayCodeDataInfo();
                obj.deserialize(params.ProIspInfoList[z]);
                this.ProIspInfoList.push(obj);
            }
        }
        this.TotalCodeAll = 'TotalCodeAll' in params ? params.TotalCodeAll : null;
        this.TotalCode4xx = 'TotalCode4xx' in params ? params.TotalCode4xx : null;
        this.TotalCode5xx = 'TotalCode5xx' in params ? params.TotalCode5xx : null;

        if (params.TotalCodeList) {
            this.TotalCodeList = new Array();
            for (let z in params.TotalCodeList) {
                let obj = new PlayCodeTotalInfo();
                obj.deserialize(params.TotalCodeList[z]);
                this.TotalCodeList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalCode2xx = 'TotalCode2xx' in params ? params.TotalCode2xx : null;
        this.TotalCode3xx = 'TotalCode3xx' in params ? params.TotalCode3xx : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。

UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * DescribeVisitTopSumInfoList请求参数结构体
 * @class
 */
class DescribeVisitTopSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在(0,4小时]，支持最近1天数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 峰值指标，可选值包括”Domain”，”StreamId”。
         * @type {string || null}
         */
        this.TopIndex = null;

        /**
         * 播放域名，默认为不填，表示求总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 页号，
范围是[1,1000]，
默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，
默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 排序指标，可选值包括” AvgFluxPerSecond”，”TotalRequest”（默认）,“TotalFlux”。
         * @type {string || null}
         */
        this.OrderParam = null;

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
        this.TopIndex = 'TopIndex' in params ? params.TopIndex : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;

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
 * 某省份某运营商在某段时间内的带宽，流量，请求数和并发数
 * @class
 */
class GroupProIspDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份。
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * 运营商。
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 分钟维度的明细数据。
         * @type {Array.<CdnPlayStatData> || null}
         */
        this.DetailInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;

        if (params.DetailInfoList) {
            this.DetailInfoList = new Array();
            for (let z in params.DetailInfoList) {
                let obj = new CdnPlayStatData();
                obj.deserialize(params.DetailInfoList[z]);
                this.DetailInfoList.push(obj);
            }
        }

    }
}

/**
 * DescribePlayErrorCodeSumInfoList请求参数结构体
 * @class
 */
class DescribePlayErrorCodeSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 播放域名列表，不填表示总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 页数，范围[1,1000]，默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围：[1,1000]，默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * 分组参数，可选值：CountryProIsp（默认值），Country（国家），默认是按照国家+省份+运营商来进行分组；目前国外的省份和运营商暂时无法识别。
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 输出字段使用的语言，可选值：Chinese（默认值），English，目前国家，省份和运营商支持多语言。
         * @type {string || null}
         */
        this.OutLanguage = null;

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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

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
         * 模板名称，非空的字符串。
长度上限：255字节。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
长度上限：1024字节。
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
 * DescribeTopClientIpSumInfoList返回参数结构体
 * @class
 */
class DescribeTopClientIpSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页号，范围是[1,1000]，默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 排序指标，可选值包括”TotalRequest”，”FailedRequest”,“TotalFlux”。
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 记录总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 数据内容。
         * @type {Array.<ClientIpPlaySumInfo> || null}
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ClientIpPlaySumInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 流名称。如果只绑定域名或路径，则此处填空。
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

        /**
         * 采样率。
         * @type {number || null}
         */
        this.AsampleRate = null;

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
        this.AsampleRate = 'AsampleRate' in params ? params.AsampleRate : null;

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
 * DescribeGroupProIspPlayInfoList请求参数结构体
 * @class
 */
class DescribeGroupProIspPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在（0,3小时]，支持最近1个月数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 播放域名，默认为不填，表示求总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 省份列表，默认不填，则返回各省份的数据。
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * 运营商列表，默认不填，则返回个运营商的数据。
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

        /**
         * 国内还是国外，如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.ProvinceNames = 'ProvinceNames' in params ? params.ProvinceNames : null;
        this.IspNames = 'IspNames' in params ? params.IspNames : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

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
默认值：1。
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * 是否是慢直播：
0： 普通直播，
1 ：慢直播 。
默认值： 0。
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
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

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
         * 源Url。目前可支持直播流及点播文件。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url，目前限制该目标地址为腾讯域名。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 选择完成转拉推的服务所在区域:
1-深圳，
2-上海，
3-天津，
4-中国香港。
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 选择完成转拉推服务使用的运营商网络：
1-电信，
2-移动，
3-联通，
4-其他。
注：AreaId为4的时候,IspId只能为其他。
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * DescribeHttpStatusInfoList请求参数结构体
 * @class
 */
class DescribeHttpStatusInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
StartTime不能为3个月前。
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
         * 播放域名列表。
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
         * 要查询的省份（地区）英文名称列表，如 Beijing。
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * 要查询的运营商英文名称列表，如 China Mobile ，如果为空，查询所有运营商的数据。
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

        /**
         * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

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
 * DescribeStreamPushInfoList请求参数结构体
 * @class
 */
class DescribeStreamPushInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，最大时间跨度支持6小时，支持最近6天数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.PushDomain = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

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

        /**
         * Mp3录制参数，开启Mp3录制时设置。
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

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

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }

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
         * 区域id：
1-深圳，
2-上海，
3-天津，
4-中国香港。
如有改动，需同时传入IspId。
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
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * DescribeStreamPushInfoList返回参数结构体
 * @class
 */
class DescribeStreamPushInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据列表。
         * @type {Array.<PushQualityData> || null}
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
                let obj = new PushQualityData();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeLiveDomainPlayInfoList请求参数结构体
 * @class
 */
class DescribeLiveDomainPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放域名列表。
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
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;

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
         * 证书Id。使用添加证书接口获取证书Id。
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
 * DescribeTopClientIpSumInfoList请求参数结构体
 * @class
 */
class DescribeTopClientIpSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在[0,4小时]，支持最近1天数据查询。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 播放域名，默认为不填，表示求总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 页号，范围是[1,1000]，默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 排序指标，可选值包括TotalRequest（默认值），FailedRequest,TotalFlux。
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
         * @type {string || null}
         */
        this.OutLanguage = null;

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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

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
         * 查询时间，北京时间，
格式：yyyymmdd。
注意：支持查询近3个月内某天的详细数据。
         * @type {string || null}
         */
        this.DayTime = null;

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

        /**
         * 起始天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近3个月内的详细数据。
         * @type {string || null}
         */
        this.StartDayTime = null;

        /**
         * 结束天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近3个月内的详细数据，注意DayTime 与（StartDayTime，EndDayTime）必须要传一个，如果都传，会以DayTime为准 。
         * @type {string || null}
         */
        this.EndDayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StartDayTime = 'StartDayTime' in params ? params.StartDayTime : null;
        this.EndDayTime = 'EndDayTime' in params ? params.EndDayTime : null;

    }
}

/**
 * 播放错误码信息
 * @class
 */
class ProIspPlayCodeDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家或地区。
         * @type {string || null}
         */
        this.CountryAreaName = null;

        /**
         * 省份。
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * 运营商。
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 错误码为2开头的次数。
         * @type {number || null}
         */
        this.Code2xx = null;

        /**
         * 错误码为3开头的次数。
         * @type {number || null}
         */
        this.Code3xx = null;

        /**
         * 错误码为4开头的次数。
         * @type {number || null}
         */
        this.Code4xx = null;

        /**
         * 错误码为5开头的次数。
         * @type {number || null}
         */
        this.Code5xx = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CountryAreaName = 'CountryAreaName' in params ? params.CountryAreaName : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.Code2xx = 'Code2xx' in params ? params.Code2xx : null;
        this.Code3xx = 'Code3xx' in params ? params.Code3xx : null;
        this.Code4xx = 'Code4xx' in params ? params.Code4xx : null;
        this.Code5xx = 'Code5xx' in params ? params.Code5xx : null;

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

        /**
         * 域名前缀
         * @type {string || null}
         */
        this.DomainPrefix = null;

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
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

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
         * 省份/运营商/国家或地区。
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
         * 截图时间间隔。5-300秒。
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
         * 录制开始时间。中国标准时间，需要URLEncode(rfc3986)。如 2017-01-01 10:10:01，编码为：2017-01-01+10%3a10%3a01。
定时录制模式，必须设置该字段；实时视频录制模式，忽略该字段。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 录制结束时间。中国标准时间，需要URLEncode(rfc3986)。如 2017-01-01 10:30:01，编码为：2017-01-01+10%3a30%3a01。
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
“flv”【默认】,“hls”,”mp4”,“aac”,”mp3”。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * 开启实时视频录制模式标志。
0：不开启实时视频录制模式，即定时录制模式【默认】。见[示例一](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
1：开启实时视频录制模式。见[示例二](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
         * @type {number || null}
         */
        this.Highlight = null;

        /**
         * 开启A+B=C混流C流录制标志。
0：不开启A+B=C混流C流录制【默认】。
1：开启A+B=C混流C流录制。
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
 * DescribeLiveDelayInfoList返回参数结构体
 * @class
 */
class DescribeLiveDelayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 延播信息列表。
         * @type {Array.<DelayInfo> || null}
         */
        this.DelayInfoList = null;

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

        if (params.DelayInfoList) {
            this.DelayInfoList = new Array();
            for (let z in params.DelayInfoList) {
                let obj = new DelayInfo();
                obj.deserialize(params.DelayInfoList[z]);
                this.DelayInfoList.push(obj);
            }
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
 * 客户端ip播放汇总信息
 * @class
 */
class ClientIpPlaySumInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端ip，点分型。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 客户端所在省份。
         * @type {string || null}
         */
        this.Province = null;

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
         * 总失败请求数。
         * @type {number || null}
         */
        this.TotalFailedRequest = null;

        /**
         * 客户端所在国家。
         * @type {string || null}
         */
        this.CountryArea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.TotalFailedRequest = 'TotalFailedRequest' in params ? params.TotalFailedRequest : null;
        this.CountryArea = 'CountryArea' in params ? params.CountryArea : null;

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
         * 统计的类型，可选值：”Province”，”Isp”，“CountryOrArea”。
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 不填则为总体数据。
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * 页号，范围是[1,1000]，默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
         * @type {string || null}
         */
        this.OutLanguage = null;

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
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

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
         * 待停用的直播域名。
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
 * DescribePlayErrorCodeDetailInfoList返回参数结构体
 * @class
 */
class DescribePlayErrorCodeDetailInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计信息列表。
         * @type {Array.<HttpCodeInfo> || null}
         */
        this.HttpCodeList = null;

        /**
         * 统计类型。
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

        if (params.HttpCodeList) {
            this.HttpCodeList = new Array();
            for (let z in params.HttpCodeList) {
                let obj = new HttpCodeInfo();
                obj.deserialize(params.HttpCodeList[z]);
                this.HttpCodeList.push(obj);
            }
        }
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
单位秒，取值范围： 0-93312000。
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
 * 每个域名的统计信息
 * @class
 */
class DomainDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国内还是国外，可选值包括Mainland和Oversea，如果为“Mainland”，表示国内数据；如果为“Oversea”，表示国外数据。
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * 带宽，单位是Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 流量，单位是MB。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 人数。
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 请求数。
         * @type {number || null}
         */
        this.Request = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.Request = 'Request' in params ? params.Request : null;

    }
}

/**
 * 播放错误码信息
 * @class
 */
class HttpStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放HTTP状态码。
         * @type {string || null}
         */
        this.HttpStatus = null;

        /**
         * 个数。
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpStatus = 'HttpStatus' in params ? params.HttpStatus : null;
        this.Num = 'Num' in params ? params.Num : null;

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
 * 播放错误码信息
 * @class
 */
class HttpStatusData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间点，
格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 播放状态码详细信息。
         * @type {Array.<HttpStatusInfo> || null}
         */
        this.HttpStatusInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;

        if (params.HttpStatusInfoList) {
            this.HttpStatusInfoList = new Array();
            for (let z in params.HttpStatusInfoList) {
                let obj = new HttpStatusInfo();
                obj.deserialize(params.HttpStatusInfoList[z]);
                this.HttpStatusInfoList.push(obj);
            }
        }

    }
}

/**
 * HTTP返回码和统计数据
 * @class
 */
class HttpCodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP协议返回码。
例："2xx", "3xx", "4xx", "5xx"。
         * @type {string || null}
         */
        this.HttpCode = null;

        /**
         * 统计信息，对于无数据的时间点，会补0。
         * @type {Array.<HttpCodeValue> || null}
         */
        this.ValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;

        if (params.ValueList) {
            this.ValueList = new Array();
            for (let z in params.ValueList) {
                let obj = new HttpCodeValue();
                obj.deserialize(params.ValueList[z]);
                this.ValueList.push(obj);
            }
        }

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
注意：按AppName查询，需要联系客服同学提单支持。
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
注意：码率必须是100的倍数。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 视频编码：h264/h265，默认h264。
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

        /**
         * 是否是急速高清模板，0：否，1：是。默认0。
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * 急速高清相比VideoBitrate少多少码率，0.1到0.5
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

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
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

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

        /**
         * 急速高清相比VideoBitrate少多少码率，0.1到0.5
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

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
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

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
 * DescribeVisitTopSumInfoList返回参数结构体
 * @class
 */
class DescribeVisitTopSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页号，
范围是[1,1000]，
默认值是1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页个数，范围是[1,1000]，
默认值是20。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 峰值指标，可选值包括”Domain”，”StreamId”。
         * @type {string || null}
         */
        this.TopIndex = null;

        /**
         * 排序指标，可选值包括” AvgFluxPerSecond”，”TotalRequest”（默认）,“TotalFlux”。
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 记录总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 数据内容。
         * @type {Array.<PlaySumStatInfo> || null}
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TopIndex = 'TopIndex' in params ? params.TopIndex : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlaySumStatInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
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
 * 播放汇总统计信息
 * @class
 */
class PlaySumStatInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名或流id。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 平均下载速度，单位是MB/s，计算公式是每分钟的下载速度求平均值。
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

        /**
         * 总流量，单位是MB。
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * 总请求数。
         * @type {number || null}
         */
        this.TotalRequest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;

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
 * DescribeBillBandwidthAndFluxList返回参数结构体
 * @class
 */
class DescribeBillBandwidthAndFluxListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.PeakBandwidthTime = null;

        /**
         * 峰值带宽，单位是Mbps。
         * @type {number || null}
         */
        this.PeakBandwidth = null;

        /**
         * 95峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.P95PeakBandwidthTime = null;

        /**
         * 95峰值带宽，单位是Mbps。
         * @type {number || null}
         */
        this.P95PeakBandwidth = null;

        /**
         * 总流量，单位是MB。
         * @type {number || null}
         */
        this.SumFlux = null;

        /**
         * 明细数据信息。
         * @type {Array.<BillDataInfo> || null}
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
        this.PeakBandwidthTime = 'PeakBandwidthTime' in params ? params.PeakBandwidthTime : null;
        this.PeakBandwidth = 'PeakBandwidth' in params ? params.PeakBandwidth : null;
        this.P95PeakBandwidthTime = 'P95PeakBandwidthTime' in params ? params.P95PeakBandwidthTime : null;
        this.P95PeakBandwidth = 'P95PeakBandwidth' in params ? params.P95PeakBandwidth : null;
        this.SumFlux = 'SumFlux' in params ? params.SumFlux : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new BillDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomainPlayInfoList返回参数结构体
 * @class
 */
class DescribeLiveDomainPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 实时总带宽。
         * @type {number || null}
         */
        this.TotalBandwidth = null;

        /**
         * 实时总流量。
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * 总请求数。
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * 实时总连接数。
         * @type {number || null}
         */
        this.TotalOnline = null;

        /**
         * 分域名的数据情况。
         * @type {Array.<DomainInfoList> || null}
         */
        this.DomainInfoList = null;

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
        this.Time = 'Time' in params ? params.Time : null;
        this.TotalBandwidth = 'TotalBandwidth' in params ? params.TotalBandwidth : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.TotalOnline = 'TotalOnline' in params ? params.TotalOnline : null;

        if (params.DomainInfoList) {
            this.DomainInfoList = new Array();
            for (let z in params.DomainInfoList) {
                let obj = new DomainInfoList();
                obj.deserialize(params.DomainInfoList[z]);
                this.DomainInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP返回码数据信息
 * @class
 */
class HttpCodeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间，格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 次数。
         * @type {number || null}
         */
        this.Numbers = null;

        /**
         * 占比。
         * @type {number || null}
         */
        this.Percentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Numbers = 'Numbers' in params ? params.Numbers : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;

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
         * 回调key，回调URL公用，鉴权回调说明详见回调格式文档。
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
长度上限：255字节。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 描述信息。
长度上限：1024字节。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 截图间隔，单位s，默认10s。
范围： 5s ~ 600s。
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
 * 下行播放统计指标
 * @class
 */
class CdnPlayStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点，格式为yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 带宽，（单位Mbps）。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 流量，（单位MB）。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 新增请求数。
         * @type {number || null}
         */
        this.Request = null;

        /**
         * 并发连接数。
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
 * 延播信息
 * @class
 */
class DelayInfo extends  AbstractModel {
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

        /**
         * 延播时间，单位：秒。
         * @type {number || null}
         */
        this.DelayInterval = null;

        /**
         * 创建时间，UTC时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间，UTC时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 当前状态，
-1：已过期，
1： 生效中。
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayInterval = 'DelayInterval' in params ? params.DelayInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * Mp3录制参数，开启Mp3录制时设置。
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

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

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }

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
         * 每页的记录数。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页号。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 总记录数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 省份，运营商，国家或地区汇总数据列表。
         * @type {Array.<ProIspPlaySumInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * 平均带宽。
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
 * DescribeHttpStatusInfoList返回参数结构体
 * @class
 */
class DescribeHttpStatusInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放状态码列表。
         * @type {Array.<HttpStatusData> || null}
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
                let obj = new HttpStatusData();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    BillDataInfo: BillDataInfo,
    EnableLiveDomainResponse: EnableLiveDomainResponse,
    CreateLiveCertRequest: CreateLiveCertRequest,
    DescribeLiveCallbackTemplatesRequest: DescribeLiveCallbackTemplatesRequest,
    DeleteLiveRecordRuleRequest: DeleteLiveRecordRuleRequest,
    ResumeLiveStreamRequest: ResumeLiveStreamRequest,
    DeleteLiveTranscodeTemplateResponse: DeleteLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateRequest: CreateLiveSnapshotTemplateRequest,
    TemplateInfo: TemplateInfo,
    DeleteLiveCallbackRuleResponse: DeleteLiveCallbackRuleResponse,
    ResumeDelayLiveStreamRequest: ResumeDelayLiveStreamRequest,
    DescribeLiveWatermarkRulesResponse: DescribeLiveWatermarkRulesResponse,
    DescribeLiveCallbackTemplateResponse: DescribeLiveCallbackTemplateResponse,
    DeleteLiveSnapshotTemplateRequest: DeleteLiveSnapshotTemplateRequest,
    DescribeGroupProIspPlayInfoListResponse: DescribeGroupProIspPlayInfoListResponse,
    PushAuthKeyInfo: PushAuthKeyInfo,
    DomainInfoList: DomainInfoList,
    DeleteLiveRecordTemplateRequest: DeleteLiveRecordTemplateRequest,
    DeleteLiveCallbackTemplateResponse: DeleteLiveCallbackTemplateResponse,
    DescribeLiveStreamOnlineListResponse: DescribeLiveStreamOnlineListResponse,
    PushQualityData: PushQualityData,
    ModifyLivePlayAuthKeyRequest: ModifyLivePlayAuthKeyRequest,
    DescribeLiveDelayInfoListRequest: DescribeLiveDelayInfoListRequest,
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
    DescribePlayErrorCodeDetailInfoListRequest: DescribePlayErrorCodeDetailInfoListRequest,
    DescribeBillBandwidthAndFluxListRequest: DescribeBillBandwidthAndFluxListRequest,
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
    PlayCodeTotalInfo: PlayCodeTotalInfo,
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
    DescribePlayErrorCodeSumInfoListResponse: DescribePlayErrorCodeSumInfoListResponse,
    UnBindLiveDomainCertRequest: UnBindLiveDomainCertRequest,
    DeleteLiveRecordResponse: DeleteLiveRecordResponse,
    DescribeLiveDomainsResponse: DescribeLiveDomainsResponse,
    PullStreamConfig: PullStreamConfig,
    CreateLiveRecordResponse: CreateLiveRecordResponse,
    RuleInfo: RuleInfo,
    UpdateLiveWatermarkResponse: UpdateLiveWatermarkResponse,
    CreateLiveTranscodeTemplateResponse: CreateLiveTranscodeTemplateResponse,
    DescribeVisitTopSumInfoListRequest: DescribeVisitTopSumInfoListRequest,
    DayStreamPlayInfo: DayStreamPlayInfo,
    ModifyPullStreamStatusResponse: ModifyPullStreamStatusResponse,
    ModifyLivePlayDomainResponse: ModifyLivePlayDomainResponse,
    GroupProIspDataInfo: GroupProIspDataInfo,
    DescribePlayErrorCodeSumInfoListRequest: DescribePlayErrorCodeSumInfoListRequest,
    DescribeLiveCertsResponse: DescribeLiveCertsResponse,
    DescribeProvinceIspPlayInfoListResponse: DescribeProvinceIspPlayInfoListResponse,
    DescribeLiveRecordTemplatesResponse: DescribeLiveRecordTemplatesResponse,
    DescribeLiveCertRequest: DescribeLiveCertRequest,
    DeleteLiveWatermarkResponse: DeleteLiveWatermarkResponse,
    ModifyLivePlayAuthKeyResponse: ModifyLivePlayAuthKeyResponse,
    CreateLiveCallbackTemplateRequest: CreateLiveCallbackTemplateRequest,
    DescribeTopClientIpSumInfoListResponse: DescribeTopClientIpSumInfoListResponse,
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
    DescribeGroupProIspPlayInfoListRequest: DescribeGroupProIspPlayInfoListRequest,
    ModifyPullStreamStatusRequest: ModifyPullStreamStatusRequest,
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
    DescribeHttpStatusInfoListRequest: DescribeHttpStatusInfoListRequest,
    ModifyPullStreamConfigResponse: ModifyPullStreamConfigResponse,
    DescribeProvinceIspPlayInfoListRequest: DescribeProvinceIspPlayInfoListRequest,
    DescribeLivePlayAuthKeyRequest: DescribeLivePlayAuthKeyRequest,
    DescribeLiveForbidStreamListResponse: DescribeLiveForbidStreamListResponse,
    DescribeStreamPushInfoListRequest: DescribeStreamPushInfoListRequest,
    DescribeLiveWatermarkResponse: DescribeLiveWatermarkResponse,
    ResumeLiveStreamResponse: ResumeLiveStreamResponse,
    ModifyLiveRecordTemplateRequest: ModifyLiveRecordTemplateRequest,
    DeletePullStreamConfigRequest: DeletePullStreamConfigRequest,
    ModifyPullStreamConfigRequest: ModifyPullStreamConfigRequest,
    DescribeStreamPushInfoListResponse: DescribeStreamPushInfoListResponse,
    DescribeLiveStreamPushInfoListRequest: DescribeLiveStreamPushInfoListRequest,
    DescribeLiveWatermarksResponse: DescribeLiveWatermarksResponse,
    WatermarkInfo: WatermarkInfo,
    DescribeLiveForbidStreamListRequest: DescribeLiveForbidStreamListRequest,
    DescribeLiveDomainPlayInfoListRequest: DescribeLiveDomainPlayInfoListRequest,
    CreatePullStreamConfigResponse: CreatePullStreamConfigResponse,
    BindLiveDomainCertRequest: BindLiveDomainCertRequest,
    DescribeTopClientIpSumInfoListRequest: DescribeTopClientIpSumInfoListRequest,
    CreateLiveCallbackRuleRequest: CreateLiveCallbackRuleRequest,
    DeleteLiveWatermarkRuleResponse: DeleteLiveWatermarkRuleResponse,
    PublishTime: PublishTime,
    ModifyLiveTranscodeTemplateResponse: ModifyLiveTranscodeTemplateResponse,
    DescribeLiveTranscodeDetailInfoRequest: DescribeLiveTranscodeDetailInfoRequest,
    ProIspPlayCodeDataInfo: ProIspPlayCodeDataInfo,
    DeleteLiveWatermarkRequest: DeleteLiveWatermarkRequest,
    DescribeLiveDomainsRequest: DescribeLiveDomainsRequest,
    ProIspPlaySumInfo: ProIspPlaySumInfo,
    SnapshotTemplateInfo: SnapshotTemplateInfo,
    DeleteLiveSnapshotRuleResponse: DeleteLiveSnapshotRuleResponse,
    CreateLiveRecordRequest: CreateLiveRecordRequest,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    DescribeLiveSnapshotTemplatesResponse: DescribeLiveSnapshotTemplatesResponse,
    DescribeLogDownloadListResponse: DescribeLogDownloadListResponse,
    UpdateLiveWatermarkRequest: UpdateLiveWatermarkRequest,
    CertInfo: CertInfo,
    ModifyLivePushAuthKeyResponse: ModifyLivePushAuthKeyResponse,
    DescribeLiveDelayInfoListResponse: DescribeLiveDelayInfoListResponse,
    DeleteLiveTranscodeTemplateRequest: DeleteLiveTranscodeTemplateRequest,
    DescribeLiveCallbackRulesRequest: DescribeLiveCallbackRulesRequest,
    ClientIpPlaySumInfo: ClientIpPlaySumInfo,
    DescribeLiveTranscodeTemplateResponse: DescribeLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateResponse: CreateLiveSnapshotTemplateResponse,
    ModifyLiveCertRequest: ModifyLiveCertRequest,
    DescribeProIspPlaySumInfoListRequest: DescribeProIspPlaySumInfoListRequest,
    UnBindLiveDomainCertResponse: UnBindLiveDomainCertResponse,
    ForbidLiveDomainRequest: ForbidLiveDomainRequest,
    DescribeLiveRecordRulesRequest: DescribeLiveRecordRulesRequest,
    DescribePlayErrorCodeDetailInfoListResponse: DescribePlayErrorCodeDetailInfoListResponse,
    CreateLiveRecordTemplateResponse: CreateLiveRecordTemplateResponse,
    RecordParam: RecordParam,
    DomainDetailInfo: DomainDetailInfo,
    HttpStatusInfo: HttpStatusInfo,
    DeleteLiveRecordRequest: DeleteLiveRecordRequest,
    DescribeLiveStreamPushInfoListResponse: DescribeLiveStreamPushInfoListResponse,
    HttpStatusData: HttpStatusData,
    HttpCodeInfo: HttpCodeInfo,
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
    ForbidLiveDomainResponse: ForbidLiveDomainResponse,
    DescribeLiveSnapshotRulesRequest: DescribeLiveSnapshotRulesRequest,
    CreateLiveTranscodeRuleResponse: CreateLiveTranscodeRuleResponse,
    CreateLiveCallbackRuleResponse: CreateLiveCallbackRuleResponse,
    DescribeLiveRecordTemplateResponse: DescribeLiveRecordTemplateResponse,
    DescribeVisitTopSumInfoListResponse: DescribeVisitTopSumInfoListResponse,
    BindLiveDomainCertResponse: BindLiveDomainCertResponse,
    CallBackRuleInfo: CallBackRuleInfo,
    PlaySumStatInfo: PlaySumStatInfo,
    DescribeLiveTranscodeTemplatesRequest: DescribeLiveTranscodeTemplatesRequest,
    HlsSpecialParam: HlsSpecialParam,
    DescribeLiveRecordRulesResponse: DescribeLiveRecordRulesResponse,
    DescribeBillBandwidthAndFluxListResponse: DescribeBillBandwidthAndFluxListResponse,
    DescribeLiveDomainPlayInfoListResponse: DescribeLiveDomainPlayInfoListResponse,
    HttpCodeValue: HttpCodeValue,
    DescribeLiveStreamOnlineListRequest: DescribeLiveStreamOnlineListRequest,
    DeleteLiveSnapshotTemplateResponse: DeleteLiveSnapshotTemplateResponse,
    ModifyLiveCallbackTemplateRequest: ModifyLiveCallbackTemplateRequest,
    DeleteLiveCertResponse: DeleteLiveCertResponse,
    CreateLiveCallbackTemplateResponse: CreateLiveCallbackTemplateResponse,
    DescribeLivePushAuthKeyRequest: DescribeLivePushAuthKeyRequest,
    PlayStatInfo: PlayStatInfo,
    DescribeLiveCallbackTemplateRequest: DescribeLiveCallbackTemplateRequest,
    ModifyLiveSnapshotTemplateRequest: ModifyLiveSnapshotTemplateRequest,
    CdnPlayStatData: CdnPlayStatData,
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
    DelayInfo: DelayInfo,
    DescribeLiveStreamEventListResponse: DescribeLiveStreamEventListResponse,
    DescribePullStreamConfigsResponse: DescribePullStreamConfigsResponse,
    DescribeLiveCallbackRulesResponse: DescribeLiveCallbackRulesResponse,
    ForbidStreamInfo: ForbidStreamInfo,
    ResumeDelayLiveStreamResponse: ResumeDelayLiveStreamResponse,
    DeleteLiveDomainResponse: DeleteLiveDomainResponse,
    CreateLiveRecordTemplateRequest: CreateLiveRecordTemplateRequest,
    DescribeProIspPlaySumInfoListResponse: DescribeProIspPlaySumInfoListResponse,
    DeleteLiveCertRequest: DeleteLiveCertRequest,
    DescribeHttpStatusInfoListResponse: DescribeHttpStatusInfoListResponse,
    DeleteLiveRecordRuleResponse: DeleteLiveRecordRuleResponse,

}
