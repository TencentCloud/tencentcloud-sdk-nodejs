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
 * 用户进出房间信息
 * @class
 */
class InOutTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进入房间时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 退出房间时间
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * DescribeApplicationData请求参数结构体
 * @class
 */
class DescribeApplicationDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 数据开始时间，格式为 年-月-日，如: 2018-07-13
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 数据结束时间，格式为 年-月-日，如: 2018-07-13
         * @type {string || null}
         */
        this.EndDate = null;

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
 * CreateScanUser返回参数结构体
 * @class
 */
class CreateScanUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealtimeScanConfig返回参数结构体
 * @class
 */
class DescribeRealtimeScanConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果码，0正常，非0失败
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 送检类型，0: 全量送审，1: 自定义送审
         * @type {number || null}
         */
        this.AuditType = null;

        /**
         * 用户号正则表达式
         * @type {Array.<string> || null}
         */
        this.UserIdRegex = null;

        /**
         * 房间号正则表达式
         * @type {Array.<string> || null}
         */
        this.RoomIdRegex = null;

        /**
         * 用户号字符串，逗号分隔，示例："0001,0002,0003"
         * @type {string || null}
         */
        this.UserIdString = null;

        /**
         * 房间号字符串，逗号分隔，示例："0001,0002,0003"
         * @type {string || null}
         */
        this.RoomIdString = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.AuditType = 'AuditType' in params ? params.AuditType : null;
        this.UserIdRegex = 'UserIdRegex' in params ? params.UserIdRegex : null;
        this.RoomIdRegex = 'RoomIdRegex' in params ? params.RoomIdRegex : null;
        this.UserIdString = 'UserIdString' in params ? params.UserIdString : null;
        this.RoomIdString = 'RoomIdString' in params ? params.RoomIdString : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 房间内用户信息
 * @class
 */
class RoomUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间id
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 房间里用户uin列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Uins = null;

        /**
         * 字符串房间id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrRoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

    }
}

/**
 * DescribeRoomInfo请求参数结构体
 * @class
 */
class DescribeRoomInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个）
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

        /**
         * 字符串类型房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个）
         * @type {Array.<string> || null}
         */
        this.StrRoomIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.StrRoomIds = 'StrRoomIds' in params ? params.StrRoomIds : null;

    }
}

/**
 * UpdateScanRooms请求参数结构体
 * @class
 */
class UpdateScanRoomsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 需要送检的所有房间号。多个房间号之间用","分隔。示例："0001,0002,0003"
         * @type {string || null}
         */
        this.RoomIdString = null;

        /**
         * 符合此正则表达式规则的房间号将被送检。示例：["^6.*"] 表示所有以6开头的房间号将被送检
         * @type {Array.<string> || null}
         */
        this.RoomIdRegex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.RoomIdString = 'RoomIdString' in params ? params.RoomIdString : null;
        this.RoomIdRegex = 'RoomIdRegex' in params ? params.RoomIdRegex : null;

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
 * DescribeRealtimeScanConfig请求参数结构体
 * @class
 */
class DescribeRealtimeScanConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;

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
 * CreateAgeDetectTask请求参数结构体
 * @class
 */
class CreateAgeDetectTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 语音检测子任务列表，列表最多支持100个检测子任务。结构体中包含：
<li>DataId：数据的唯一ID</li>
<li>Url：数据文件的url，为 urlencode 编码，流式则为拉流地址</li>
         * @type {Array.<AgeDetectTask> || null}
         */
        this.Tasks = null;

        /**
         * 任务结束时gme后台会自动触发回调
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new AgeDetectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Callback = 'Callback' in params ? params.Callback : null;

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
 * CreateScanUser请求参数结构体
 * @class
 */
class CreateScanUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录控制台 - 服务管理创建应用得到的AppID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 需要新增送检的用户号。示例：1234
         * @type {number || null}
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

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
 * 年龄语音识别子任务
 * @class
 */
class AgeDetectTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据唯一ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 数据文件的url，为 urlencode 编码,音频文件格式支持的类型：.wav、.m4a、.amr、.mp3、.aac、.wma、.ogg
         * @type {string || null}
         */
        this.Url = null;

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

    }
}

/**
 * DescribeAgeDetectTask返回参数结构体
 * @class
 */
class DescribeAgeDetectTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 语音检测返回。Results 字段是 JSON 数组，每一个元素包含：
DataId： 请求中对应的 DataId。
Url ：该请求中对应的 Url。
Status ：子任务状态，0:已创建，1:运行中，2:已完成，3:任务异常，4:任务超时。
Age ：子任务完成后的结果，0:成年人，1:未成年人，100:未知结果。
         * @type {Array.<AgeDetectTaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new AgeDetectTaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 应用统计数据
 * @class
 */
class ApplicationDataStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Dau统计项数目
         * @type {number || null}
         */
        this.DauDataNum = null;

        /**
         * 大陆地区Dau统计数据，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataMainland = null;

        /**
         * 海外地区Dau统计数据，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataOversea = null;

        /**
         * 大陆和海外地区Dau统计数据汇总，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataSum = null;

        /**
         * 实时语音时长统计项数目
         * @type {number || null}
         */
        this.DurationDataNum = null;

        /**
         * 大陆地区实时语音时长统计数据，单位分钟
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataMainland = null;

        /**
         * 海外地区实时语音时长统计数据，单位分钟
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataOversea = null;

        /**
         * 大陆和海外地区实时语音时长统计数据汇总，单位分钟
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataSum = null;

        /**
         * Pcu统计项数目
         * @type {number || null}
         */
        this.PcuDataNum = null;

        /**
         * 大陆地区Pcu统计数据，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataMainland = null;

        /**
         * 海外地区Pcu统计数据，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataOversea = null;

        /**
         * 大陆和海外地区Pcu统计数据汇总，单位人
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataSum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.DauDataNum = 'DauDataNum' in params ? params.DauDataNum : null;

        if (params.DauDataMainland) {
            this.DauDataMainland = new Array();
            for (let z in params.DauDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataMainland[z]);
                this.DauDataMainland.push(obj);
            }
        }

        if (params.DauDataOversea) {
            this.DauDataOversea = new Array();
            for (let z in params.DauDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataOversea[z]);
                this.DauDataOversea.push(obj);
            }
        }

        if (params.DauDataSum) {
            this.DauDataSum = new Array();
            for (let z in params.DauDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataSum[z]);
                this.DauDataSum.push(obj);
            }
        }
        this.DurationDataNum = 'DurationDataNum' in params ? params.DurationDataNum : null;

        if (params.DurationDataMainland) {
            this.DurationDataMainland = new Array();
            for (let z in params.DurationDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataMainland[z]);
                this.DurationDataMainland.push(obj);
            }
        }

        if (params.DurationDataOversea) {
            this.DurationDataOversea = new Array();
            for (let z in params.DurationDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataOversea[z]);
                this.DurationDataOversea.push(obj);
            }
        }

        if (params.DurationDataSum) {
            this.DurationDataSum = new Array();
            for (let z in params.DurationDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataSum[z]);
                this.DurationDataSum.push(obj);
            }
        }
        this.PcuDataNum = 'PcuDataNum' in params ? params.PcuDataNum : null;

        if (params.PcuDataMainland) {
            this.PcuDataMainland = new Array();
            for (let z in params.PcuDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataMainland[z]);
                this.PcuDataMainland.push(obj);
            }
        }

        if (params.PcuDataOversea) {
            this.PcuDataOversea = new Array();
            for (let z in params.PcuDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataOversea[z]);
                this.PcuDataOversea.push(obj);
            }
        }

        if (params.PcuDataSum) {
            this.PcuDataSum = new Array();
            for (let z in params.PcuDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataSum[z]);
                this.PcuDataSum.push(obj);
            }
        }

    }
}

/**
 * DeleteScanUser请求参数结构体
 * @class
 */
class DeleteScanUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录控制台 - 服务管理创建应用得到的AppID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 需要删除送检的用户号。示例：1234
         * @type {number || null}
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ModifyAppStatus接口输出参数
 * @class
 */
class ModifyAppStatusResp extends  AbstractModel {
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
 * DescribeAppStatistics返回参数结构体
 * @class
 */
class DescribeAppStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用用量统计数据
         * @type {DescribeAppStatisticsResp || null}
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
            let obj = new DescribeAppStatisticsResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateScanRooms返回参数结构体
 * @class
 */
class UpdateScanRoomsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationData返回参数结构体
 * @class
 */
class DescribeApplicationDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用统计数据
         * @type {ApplicationDataStatistics || null}
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
            let obj = new ApplicationDataStatistics();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteScanUser返回参数结构体
 * @class
 */
class DeleteScanUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateScanUsers返回参数结构体
 * @class
 */
class UpdateScanUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateApp的输出参数
 * @class
 */
class CreateAppResp extends  AbstractModel {
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
 * DescribeRoomInfo返回参数结构体
 * @class
 */
class DescribeRoomInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果, 0成功, 非0失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 房间用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RoomUser> || null}
         */
        this.RoomUsers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.RoomUsers) {
            this.RoomUsers = new Array();
            for (let z in params.RoomUsers) {
                let obj = new RoomUser();
                obj.deserialize(params.RoomUsers[z]);
                this.RoomUsers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgeDetectTask请求参数结构体
 * @class
 */
class DescribeAgeDetectTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 创建年龄语音识别任务时返回的taskid
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyRoomInfo请求参数结构体
 * @class
 */
class ModifyRoomInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间id
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 301 启动推流
302 停止推流
303 重置RTMP连接
         * @type {number || null}
         */
        this.OperationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;

    }
}

/**
 * DescribeUserInAndOutTime返回参数结构体
 * @class
 */
class DescribeUserInAndOutTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在房间得进出时间列表
         * @type {Array.<InOutTimeInfo> || null}
         */
        this.InOutList = null;

        /**
         * 用户在房间中总时长
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InOutList) {
            this.InOutList = new Array();
            for (let z in params.InOutList) {
                let obj = new InOutTimeInfo();
                obj.deserialize(params.InOutList[z]);
                this.InOutList.push(obj);
            }
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 年龄语音任务结果
 * @class
 */
class AgeDetectTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据唯一ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 数据文件的url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 任务状态，0: 已创建，1:运行中，2:正常结束，3:异常结束，4:运行超时
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务结果：0: 成年，1:未成年，100:未知
         * @type {number || null}
         */
        this.Age = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Age = 'Age' in params ? params.Age : null;

    }
}

/**
 * ModifyRoomInfo返回参数结构体
 * @class
 */
class ModifyRoomInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果, 0成功, 非0失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
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

        /**
         * 提交检测的应用 ID
         * @type {number || null}
         */
        this.BizId = null;

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
        this.BizId = 'BizId' in params ? params.BizId : null;

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
         * 过滤类型，1：色情，2：涉毒，3：谩骂
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
 * CreateAgeDetectTask返回参数结构体
 * @class
 */
class CreateAgeDetectTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次任务提交后唯一id，用于获取任务运行结果
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
         * 实时语音音质类型，取值：high-高音质
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
 * 获取应用用量统计数据输出参数
 * @class
 */
class DescribeAppStatisticsResp extends  AbstractModel {
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
 * CreateApp返回参数结构体
 * @class
 */
class CreateAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建应用返回数据
         * @type {CreateAppResp || null}
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
            let obj = new CreateAppResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAppStatus返回参数结构体
 * @class
 */
class ModifyAppStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改应用开关状态返回数据
         * @type {ModifyAppStatusResp || null}
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
            let obj = new ModifyAppStatusResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 语音检测场景，参数值目前要求为 default。 预留场景设置： 谩骂、色情、广告、违禁等场景，<a href="#Label_Value">具体取值见上述 Label 说明。</a>
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

        /**
         * 语言，目前jp代表日语
         * @type {string || null}
         */
        this.Lang = null;

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
        this.Lang = 'Lang' in params ? params.Lang : null;

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
 * UpdateScanUsers请求参数结构体
 * @class
 */
class UpdateScanUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 需要送检的所有用户号。多个用户号之间用","分隔。示例："0001,0002,0003"
         * @type {string || null}
         */
        this.UserIdString = null;

        /**
         * 符合此正则表达式规则的用户号将被送检。示例：["^6.*"] 表示所有以6开头的用户号将被送检
         * @type {Array.<string> || null}
         */
        this.UserIdRegex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.UserIdString = 'UserIdString' in params ? params.UserIdString : null;
        this.UserIdRegex = 'UserIdRegex' in params ? params.UserIdRegex : null;

    }
}

/**
 * 用量数据单元
 * @class
 */
class StatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期，格式为年-月-日，如2018-07-13
         * @type {string || null}
         */
        this.StatDate = null;

        /**
         * 统计值
         * @type {number || null}
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
        this.StatDate = 'StatDate' in params ? params.StatDate : null;
        this.Data = 'Data' in params ? params.Data : null;

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
 * DescribeUserInAndOutTime请求参数结构体
 * @class
 */
class DescribeUserInAndOutTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 房间ID
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 用户ID
         * @type {number || null}
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

module.exports = {
    ScanVoiceResponse: ScanVoiceResponse,
    AppStatisticsItem: AppStatisticsItem,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    InOutTimeInfo: InOutTimeInfo,
    DescribeScanResultListResponse: DescribeScanResultListResponse,
    DescribeApplicationDataRequest: DescribeApplicationDataRequest,
    VoiceFilterRequest: VoiceFilterRequest,
    CreateScanUserResponse: CreateScanUserResponse,
    DescribeRealtimeScanConfigResponse: DescribeRealtimeScanConfigResponse,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    RoomUser: RoomUser,
    DescribeRoomInfoRequest: DescribeRoomInfoRequest,
    UpdateScanRoomsRequest: UpdateScanRoomsRequest,
    DescribeFilterResultResponse: DescribeFilterResultResponse,
    DescribeRealtimeScanConfigRequest: DescribeRealtimeScanConfigRequest,
    DescribeScanResultListRequest: DescribeScanResultListRequest,
    CreateAgeDetectTaskRequest: CreateAgeDetectTaskRequest,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    CreateScanUserRequest: CreateScanUserRequest,
    VoiceFilterResponse: VoiceFilterResponse,
    Tag: Tag,
    AgeDetectTask: AgeDetectTask,
    DescribeAgeDetectTaskResponse: DescribeAgeDetectTaskResponse,
    VoiceMessageConf: VoiceMessageConf,
    ApplicationDataStatistics: ApplicationDataStatistics,
    DeleteScanUserRequest: DeleteScanUserRequest,
    ModifyAppStatusResp: ModifyAppStatusResp,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,
    UpdateScanRoomsResponse: UpdateScanRoomsResponse,
    DescribeApplicationDataResponse: DescribeApplicationDataResponse,
    Task: Task,
    DeleteScanUserResponse: DeleteScanUserResponse,
    UpdateScanUsersResponse: UpdateScanUsersResponse,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    CreateAppResp: CreateAppResp,
    DescribeRoomInfoResponse: DescribeRoomInfoResponse,
    DescribeAgeDetectTaskRequest: DescribeAgeDetectTaskRequest,
    ModifyRoomInfoRequest: ModifyRoomInfoRequest,
    DescribeUserInAndOutTimeResponse: DescribeUserInAndOutTimeResponse,
    VoiceFilterInfo: VoiceFilterInfo,
    AgeDetectTaskResult: AgeDetectTaskResult,
    ModifyRoomInfoResponse: ModifyRoomInfoResponse,
    DescribeScanResult: DescribeScanResult,
    DescribeFilterResultListRequest: DescribeFilterResultListRequest,
    VoiceFilter: VoiceFilter,
    ScanDetail: ScanDetail,
    DescribeFilterResultListResponse: DescribeFilterResultListResponse,
    CreateAgeDetectTaskResponse: CreateAgeDetectTaskResponse,
    CreateAppRequest: CreateAppRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    DescribeAppStatisticsResp: DescribeAppStatisticsResp,
    ScanVoiceResult: ScanVoiceResult,
    CreateAppResponse: CreateAppResponse,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    ScanPiece: ScanPiece,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    ScanVoiceRequest: ScanVoiceRequest,
    VoiceFilterConf: VoiceFilterConf,
    UpdateScanUsersRequest: UpdateScanUsersRequest,
    StatisticsItem: StatisticsItem,
    DescribeFilterResultRequest: DescribeFilterResultRequest,
    DescribeUserInAndOutTimeRequest: DescribeUserInAndOutTimeRequest,

}
