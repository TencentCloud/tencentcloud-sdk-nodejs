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
 * ScanVoice返回参数结构体
 * @class
 */
class ScanVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音检测返回。Data 字段是 JSON 数组，每一个元素包含：<li>DataId： 请求中对应的 DataId。</li>
<li>TaskID ：该检测任务的 ID，用于轮询语音检测结果。</li>
         * @type {Array.<ScanVoiceResult> || null}
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
                let obj = new ScanVoiceResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用用量统计数据
 * @class
 */
class AppStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时语音统计数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RealTimeSpeechStatisticsItem || null}
         */
        this.RealtimeSpeechStatisticsItem = null;

        /**
         * 语音消息统计数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VoiceMessageStatisticsItem || null}
         */
        this.VoiceMessageStatisticsItem = null;

        /**
         * 语音过滤统计数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VoiceFilterStatisticsItem || null}
         */
        this.VoiceFilterStatisticsItem = null;

        /**
         * 统计时间
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RealtimeSpeechStatisticsItem) {
            let obj = new RealTimeSpeechStatisticsItem();
            obj.deserialize(params.RealtimeSpeechStatisticsItem)
            this.RealtimeSpeechStatisticsItem = obj;
        }

        if (params.VoiceMessageStatisticsItem) {
            let obj = new VoiceMessageStatisticsItem();
            obj.deserialize(params.VoiceMessageStatisticsItem)
            this.VoiceMessageStatisticsItem = obj;
        }

        if (params.VoiceFilterStatisticsItem) {
            let obj = new VoiceFilterStatisticsItem();
            obj.deserialize(params.VoiceFilterStatisticsItem)
            this.VoiceFilterStatisticsItem = obj;
        }
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * ModifyAppStatus请求参数结构体
 * @class
 */
class ModifyAppStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，创建应用后由后台生成并返回。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 应用状态，取值：open/close
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeScanResultList返回参数结构体
 * @class
 */
class DescribeScanResultListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的语音检测任务的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeScanResult> || null}
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
                let obj = new DescribeScanResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VoiceFilter请求参数结构体
 * @class
 */
class VoiceFilterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 文件ID，表示文件唯一ID
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件url，urlencode编码，FileUrl和FileContent二选一
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件内容，base64编码，FileUrl和FileContent二选一
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 用户ID
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * 语音消息用量统计信息
 * @class
 */
class VoiceMessageStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 离线语音DAU
         * @type {number || null}
         */
        this.Dau = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dau = 'Dau' in params ? params.Dau : null;

    }
}

/**
 * DescribeScanResultList请求参数结构体
 * @class
 */
class DescribeScanResultListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 查询的任务 ID 列表，任务 ID 列表最多支持 100 个。
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * 任务返回结果数量，默认10，上限500。大文件任务忽略此参数，返回全量结果
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 实时语音用量统计数据
 * @class
 */
class RealTimeSpeechStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大陆地区DAU
         * @type {number || null}
         */
        this.MainLandDau = null;

        /**
         * 大陆地区PCU
         * @type {number || null}
         */
        this.MainLandPcu = null;

        /**
         * 大陆地区总使用时长，单位为min
         * @type {number || null}
         */
        this.MainLandDuration = null;

        /**
         * 海外地区DAU
         * @type {number || null}
         */
        this.OverseaDau = null;

        /**
         * 海外地区PCU
         * @type {number || null}
         */
        this.OverseaPcu = null;

        /**
         * 海外地区总使用时长，单位为min
         * @type {number || null}
         */
        this.OverseaDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainLandDau = 'MainLandDau' in params ? params.MainLandDau : null;
        this.MainLandPcu = 'MainLandPcu' in params ? params.MainLandPcu : null;
        this.MainLandDuration = 'MainLandDuration' in params ? params.MainLandDuration : null;
        this.OverseaDau = 'OverseaDau' in params ? params.OverseaDau : null;
        this.OverseaPcu = 'OverseaPcu' in params ? params.OverseaPcu : null;
        this.OverseaDuration = 'OverseaDuration' in params ? params.OverseaDuration : null;

    }
}

/**
 * VoiceFilter返回参数结构体
 * @class
 */
class VoiceFilterResponse extends  AbstractModel {
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
 * 标签列表
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * 离线语音服务配置数据
 * @class
 */
class VoiceMessageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 离线语音服务开关，取值：open/close
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 离线语音支持语种，取值： all-全部，cnen-中英文。默认为中英文
         * @type {string || null}
         */
        this.Language = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Language = 'Language' in params ? params.Language : null;

    }
}

/**
 * DescribeFilterResultList返回参数结构体
 * @class
 */
class DescribeFilterResultListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤结果总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前分页过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VoiceFilterInfo> || null}
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
                let obj = new VoiceFilterInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取应用用量统计数据输出参数
 * @class
 */
class DescribeAppStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用用量统计数据
         * @type {Array.<AppStatisticsItem> || null}
         */
        this.AppStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppStatistics) {
            this.AppStatistics = new Array();
            for (let z in params.AppStatistics) {
                let obj = new AppStatisticsItem();
                obj.deserialize(params.AppStatistics[z]);
                this.AppStatistics.push(obj);
            }
        }

    }
}

/**
 * 语音检测任务列表
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据的唯一ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 数据文件的url，为 urlencode 编码，流式则为拉流地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * gme实时语音房间ID，通过gme实时语音进行语音分析时输入
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * gme实时语音用户ID，通过gme实时语音进行语音分析时输入
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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * 语音过滤用量统计数据
 * @class
 */
class VoiceFilterStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音过滤总时长
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 语音文件过滤详情
 * @class
 */
class VoiceFilterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 文件ID，表示文件唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 数据创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VoiceFilter> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VoiceFilter();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeFilterResult返回参数结构体
 * @class
 */
class DescribeFilterResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VoiceFilterInfo || null}
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
            let obj = new VoiceFilterInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音检测结果返回
 * @class
 */
class DescribeScanResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务返回码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 数据唯一 ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 检测完成的时间戳
         * @type {number || null}
         */
        this.ScanFinishTime = null;

        /**
         * 是否违规
         * @type {boolean || null}
         */
        this.HitFlag = null;

        /**
         * 是否为流
         * @type {boolean || null}
         */
        this.Live = null;

        /**
         * 业务返回描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 检测结果，Code 为 0 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScanPiece> || null}
         */
        this.ScanPiece = null;

        /**
         * 提交检测的时间戳
         * @type {number || null}
         */
        this.ScanStartTime = null;

        /**
         * 语音检测场景，对应请求时的 Scene
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * 语音检测任务 ID，由后台分配
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 文件或接流地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 检测任务执行结果状态，分别为：
<li>Start: 任务开始</li>
<li>Success: 成功结束</li>
<li>Error: 异常</li>
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
        this.Code = 'Code' in params ? params.Code : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.ScanFinishTime = 'ScanFinishTime' in params ? params.ScanFinishTime : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Live = 'Live' in params ? params.Live : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

        if (params.ScanPiece) {
            this.ScanPiece = new Array();
            for (let z in params.ScanPiece) {
                let obj = new ScanPiece();
                obj.deserialize(params.ScanPiece[z]);
                this.ScanPiece.push(obj);
            }
        }
        this.ScanStartTime = 'ScanStartTime' in params ? params.ScanStartTime : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeFilterResultList请求参数结构体
 * @class
 */
class DescribeFilterResultListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 开始时间，格式为 年-月-日，如: 2018-07-11
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束时间，格式为 年-月-日，如: 2018-07-11
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 过滤结果
 * @class
 */
class VoiceFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤类型，1：政治，2：色情，3：涉毒，4：谩骂
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 过滤命中关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * 语音检测详情
 * @class
 */
class ScanDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 违规场景，参照<a href="https://cloud.tencent.com/document/product/607/37622#Label_Value">Label</a>定义
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该场景下概率[0.00,100.00],分值越大违规概率越高
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 违规关键字
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * 关键字在音频的开始时间，从0开始的偏移量，单位为毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 关键字在音频的结束时间，从0开始的偏移量,，单位为毫秒
         * @type {number || null}
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
        this.Label = 'Label' in params ? params.Label : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateApp请求参数结构体
 * @class
 */
class CreateAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 腾讯云项目ID，默认为0，表示默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 需要支持的引擎列表，默认全选。
         * @type {Array.<string> || null}
         */
        this.EngineList = null;

        /**
         * 服务区域列表，默认全选。
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * 实时语音服务配置数据
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * 语音消息及转文本服务配置数据
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * 语音分析服务配置数据
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

        /**
         * 需要添加的标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EngineList = 'EngineList' in params ? params.EngineList : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;

        if (params.RealtimeSpeechConf) {
            let obj = new RealtimeSpeechConf();
            obj.deserialize(params.RealtimeSpeechConf)
            this.RealtimeSpeechConf = obj;
        }

        if (params.VoiceMessageConf) {
            let obj = new VoiceMessageConf();
            obj.deserialize(params.VoiceMessageConf)
            this.VoiceMessageConf = obj;
        }

        if (params.VoiceFilterConf) {
            let obj = new VoiceFilterConf();
            obj.deserialize(params.VoiceFilterConf)
            this.VoiceFilterConf = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 实时语音配置数据
 * @class
 */
class RealtimeSpeechConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时语音服务开关，取值：open/close
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实时语音音质类型，取值：high-高音质，ordinary-普通音质。默认高音质。普通音质仅白名单开放，如需要普通音质，请联系腾讯云商务。
         * @type {string || null}
         */
        this.Quality = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Quality = 'Quality' in params ? params.Quality : null;

    }
}

/**
 * 语音检测返回结果
 * @class
 */
class ScanVoiceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 任务ID
         * @type {string || null}
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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateApp的输出参数
 * @class
 */
class CreateAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，由后台自动生成。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 应用名称，透传输入参数的AppName
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 项目ID，透传输入的ProjectId
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 应用密钥，GME SDK初始化时使用
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 服务创建时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 实时语音服务配置数据
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * 语音消息及转文本服务配置数据
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * 语音分析服务配置数据
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RealtimeSpeechConf) {
            let obj = new RealtimeSpeechConf();
            obj.deserialize(params.RealtimeSpeechConf)
            this.RealtimeSpeechConf = obj;
        }

        if (params.VoiceMessageConf) {
            let obj = new VoiceMessageConf();
            obj.deserialize(params.VoiceMessageConf)
            this.VoiceMessageConf = obj;
        }

        if (params.VoiceFilterConf) {
            let obj = new VoiceFilterConf();
            obj.deserialize(params.VoiceFilterConf)
            this.VoiceFilterConf = obj;
        }

    }
}

/**
 * DescribeAppStatistics请求参数结构体
 * @class
 */
class DescribeAppStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * GME应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 数据开始时间，东八区时间，格式: 年-月-日，如: 2018-07-13
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 数据结束时间，东八区时间，格式: 年-月-日，如: 2018-07-13
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 要查询的服务列表，取值：RealTimeSpeech/VoiceMessage/VoiceFilter
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * 语音检测结果，Code 为 0 时返回
 * @class
 */
class ScanPiece extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流检测时返回，音频转存地址，保留30min
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DumpUrl = null;

        /**
         * 是否违规
         * @type {boolean || null}
         */
        this.HitFlag = null;

        /**
         * 违规主要类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainType = null;

        /**
         * 语音检测详情
         * @type {Array.<ScanDetail> || null}
         */
        this.ScanDetail = null;

        /**
         * gme实时语音房间ID，透传任务传入时的RoomId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * gme实时语音用户ID，透传任务传入时的OpenId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 流检测时分片在流中的偏移时间，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 流检测时分片时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 分片开始检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PieceStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DumpUrl = 'DumpUrl' in params ? params.DumpUrl : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.MainType = 'MainType' in params ? params.MainType : null;

        if (params.ScanDetail) {
            this.ScanDetail = new Array();
            for (let z in params.ScanDetail) {
                let obj = new ScanDetail();
                obj.deserialize(params.ScanDetail[z]);
                this.ScanDetail.push(obj);
            }
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.PieceStartTime = 'PieceStartTime' in params ? params.PieceStartTime : null;

    }
}

/**
 * ModifyAppStatus接口输出参数
 * @class
 */
class ModifyAppStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * GME应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 应用状态，取值：open/close
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeFilterResult请求参数结构体
 * @class
 */
class DescribeFilterResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 文件ID
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * 语音过滤服务配置数据
 * @class
 */
class VoiceFilterConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音过滤服务开关，取值：open/close
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ScanVoice请求参数结构体
 * @class
 */
class ScanVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 语音检测场景，参数值目前要求为 default。 预留场景设置： 谩骂、色情、涉政、广告、暴恐、违禁等场景，<a href="#Label_Value">具体取值见上述 Label 说明。</a>
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * 是否为直播流。值为 false 时表示普通语音文件检测；为 true 时表示语音流检测。
         * @type {boolean || null}
         */
        this.Live = null;

        /**
         * 语音检测任务列表，列表最多支持100个检测任务。结构体中包含：
<li>DataId：数据的唯一ID</li>
<li>Url：数据文件的url，为 urlencode 编码，流式则为拉流地址</li>
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * 异步检测结果回调地址，具体见上述<a href="#Callback_Declare">回调相关说明</a>。（说明：该字段为空时，必须通过接口(查询语音检测结果)获取检测结果）。
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;
        this.Live = 'Live' in params ? params.Live : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

module.exports = {
    ScanVoiceResponse: ScanVoiceResponse,
    AppStatisticsItem: AppStatisticsItem,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    DescribeScanResultListResponse: DescribeScanResultListResponse,
    VoiceFilterRequest: VoiceFilterRequest,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    DescribeScanResultListRequest: DescribeScanResultListRequest,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    VoiceFilterResponse: VoiceFilterResponse,
    Tag: Tag,
    VoiceMessageConf: VoiceMessageConf,
    DescribeFilterResultListResponse: DescribeFilterResultListResponse,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,
    Task: Task,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    VoiceFilterInfo: VoiceFilterInfo,
    DescribeFilterResultResponse: DescribeFilterResultResponse,
    DescribeScanResult: DescribeScanResult,
    DescribeFilterResultListRequest: DescribeFilterResultListRequest,
    VoiceFilter: VoiceFilter,
    ScanDetail: ScanDetail,
    CreateAppRequest: CreateAppRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    ScanVoiceResult: ScanVoiceResult,
    CreateAppResponse: CreateAppResponse,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    ScanPiece: ScanPiece,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    DescribeFilterResultRequest: DescribeFilterResultRequest,
    VoiceFilterConf: VoiceFilterConf,
    ScanVoiceRequest: ScanVoiceRequest,

}
