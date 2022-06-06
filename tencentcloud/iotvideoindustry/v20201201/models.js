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
 * DescribePresetList请求参数结构体
 * @class
 */
class DescribePresetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * ControlRecordStream请求参数结构体
 * @class
 */
class ControlRecordStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备Id，设备的唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 流Id，流的唯一标识
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * |控制参数，CmdJson结构转义的json字符串。| Action  | string  |是|控制动作，play(用于暂停后恢复播放)、pause（暂停）、teardown(停止)、jump(拖动播放)
| Offset  | uint  |否|拖动播放时的时间偏移量（相对于起始时间）,单位：秒
目前支持的command：
"Command": "{"Action":"PAUSE"}" 暂停
"Command": "{"Action":"PLAY"}" 暂停恢复
"Command": "{"Action":"PLAY","Offset":"15"}" 位置偏移，可以替代jump操作
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * CreateRecordingPlan返回参数结构体
 * @class
 */
class CreateRecordingPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubscriptionStatus请求参数结构体
 * @class
 */
class ModifySubscriptionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 订阅状态 1：关闭订阅 2：开启订阅
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 订阅类型 Alarm:告警订阅 Catalog:目录订阅 MobilePosition:移动位置订阅
         * @type {string || null}
         */
        this.SubscriptionItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubscriptionItem = 'SubscriptionItem' in params ? params.SubscriptionItem : null;

    }
}

/**
 * CreateScene返回参数结构体
 * @class
 */
class CreateSceneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTimeTemplate返回参数结构体
 * @class
 */
class DeleteTimeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果，OK：成功，其他：失败
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeMonitorDataByDate请求参数结构体
 * @class
 */
class DescribeMonitorDataByDateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳 最多显示30天数据
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
 * ModifyLiveChannel返回参数结构体
 * @class
 */
class ModifyLiveChannelResponse extends  AbstractModel {
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
 * SIIP服务器相关配置项
 * @class
 */
class ServerConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * SIP服务器地址
         * @type {string || null}
         */
        this.Host = null;

        /**
         * SIP服务器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * SIP服务器编码
         * @type {string || null}
         */
        this.Serial = null;

        /**
         * SIP服务器域
         * @type {string || null}
         */
        this.Realm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Serial = 'Serial' in params ? params.Serial : null;
        this.Realm = 'Realm' in params ? params.Realm : null;

    }
}

/**
 * DescribeLiveVideoList请求参数结构体
 * @class
 */
class DescribeLiveVideoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 直播频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 开始录制开始时间
         * @type {number || null}
         */
        this.StartRecordTime = null;

        /**
         * 开始录制结束时间
         * @type {number || null}
         */
        this.EndRecordTime = null;

        /**
         * 过期开始时间
         * @type {number || null}
         */
        this.StartExpireTime = null;

        /**
         * 过期结束时间
         * @type {number || null}
         */
        this.EndExpireTime = null;

        /**
         * 文件大小范围 Byte
         * @type {number || null}
         */
        this.StartFileSize = null;

        /**
         * 文件大小范围 Byte
         * @type {number || null}
         */
        this.EndFileSize = null;

        /**
         * 录制状态，5: 录制回写完
         * @type {number || null}
         */
        this.IsRecording = null;

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
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.StartRecordTime = 'StartRecordTime' in params ? params.StartRecordTime : null;
        this.EndRecordTime = 'EndRecordTime' in params ? params.EndRecordTime : null;
        this.StartExpireTime = 'StartExpireTime' in params ? params.StartExpireTime : null;
        this.EndExpireTime = 'EndExpireTime' in params ? params.EndExpireTime : null;
        this.StartFileSize = 'StartFileSize' in params ? params.StartFileSize : null;
        this.EndFileSize = 'EndFileSize' in params ? params.EndFileSize : null;
        this.IsRecording = 'IsRecording' in params ? params.IsRecording : null;

    }
}

/**
 * GetRecordPlanByDev请求参数结构体
 * @class
 */
class GetRecordPlanByDevRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * GetRecordDatesByDev返回参数结构体
 * @class
 */
class GetRecordDatesByDevResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 含有录像文件的日期列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Dates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dates = 'Dates' in params ? params.Dates : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ControlChannelPTZ返回参数结构体
 * @class
 */
class ControlChannelPTZResponse extends  AbstractModel {
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
 * DescribeChannels请求参数结构体
 * @class
 */
class DescribeChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 限制，默认0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 通道类型  0: 未知类型 1: 视频通道 2:  音频通道 3: 告警通道
         * @type {Array.<number> || null}
         */
        this.ChannelTypes = null;

        /**
         * 录制计划ID， 当为"null"值时未绑定录制计划
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 告警联动场景ID， 当为 -1 值时未绑定场景
         * @type {number || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ChannelTypes = 'ChannelTypes' in params ? params.ChannelTypes : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * DescribeLiveChannel请求参数结构体
 * @class
 */
class DescribeLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;

    }
}

/**
 * DescribeRecordDatesByChannel返回参数结构体
 * @class
 */
class DescribeRecordDatesByChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 含有录像文件的日期列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Dates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dates = 'Dates' in params ? params.Dates : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordDatesByChannel请求参数结构体
 * @class
 */
class DescribeRecordDatesByChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 1: 云端录制 2: 本地录制
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 限制量，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeVideoListByChannel请求参数结构体
 * @class
 */
class DescribeVideoListByChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 1: 云端录制 2: 本地录制
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 指定某天。取值【YYYY-MM-DD】
为空时默认查询最近一天的记录
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 限制量，默认2000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyPreset返回参数结构体
 * @class
 */
class ModifyPresetResponse extends  AbstractModel {
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
 * DescribeGroupByPath返回参数结构体
 * @class
 */
class DescribeGroupByPathResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组信息详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GroupItem || null}
         */
        this.Group = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Group) {
            let obj = new GroupItem();
            obj.deserialize(params.Group)
            this.Group = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalEvents请求参数结构体
 * @class
 */
class DescribeAbnormalEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
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
 * ModifyPreset请求参数结构体
 * @class
 */
class ModifyPresetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 预置位编码 范围1-8
         * @type {number || null}
         */
        this.PresetId = null;

        /**
         * 预制位名称
         * @type {string || null}
         */
        this.PresetName = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.PresetId = 'PresetId' in params ? params.PresetId : null;
        this.PresetName = 'PresetName' in params ? params.PresetName : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * DescribeSubscriptionStatus返回参数结构体
 * @class
 */
class DescribeSubscriptionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备GB28181报警订阅状态 1：未开启订阅；2：已开启订阅
         * @type {number || null}
         */
        this.AlarmStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScenes返回参数结构体
 * @class
 */
class DescribeScenesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 场景列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SceneItem> || null}
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SceneItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordingPlan请求参数结构体
 * @class
 */
class DeleteRecordingPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * DescribeBindSceneChannels返回参数结构体
 * @class
 */
class DescribeBindSceneChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 通道列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChannelItem> || null}
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ChannelItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSIPServer请求参数结构体
 * @class
 */
class DescribeSIPServerRequest extends  AbstractModel {
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
 * DescribeVideoListByChannel返回参数结构体
 * @class
 */
class DescribeVideoListByChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录像详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordTaskItem> || null}
         */
        this.VideoList = null;

        /**
         * 录像总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.VideoList) {
            this.VideoList = new Array();
            for (let z in params.VideoList) {
                let obj = new RecordTaskItem();
                obj.deserialize(params.VideoList[z]);
                this.VideoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveRecordPlan返回参数结构体
 * @class
 */
class CreateLiveRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRecordPlans请求参数结构体
 * @class
 */
class GetRecordPlansRequest extends  AbstractModel {
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
 * 用于描述唯一一个设备
 * @class
 */
class DeviceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DeleteDeviceGroup返回参数结构体
 * @class
 */
class DeleteDeviceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应结果
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeWarnings返回参数结构体
 * @class
 */
class DescribeWarningsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 告警列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WarningsData> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new WarningsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordPlan返回参数结构体
 * @class
 */
class DeleteRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果，OK：成功，其他：失败
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
 * DeleteMessageForward返回参数结构体
 * @class
 */
class DeleteMessageForwardResponse extends  AbstractModel {
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
 * GetTimeTemplates请求参数结构体
 * @class
 */
class GetTimeTemplatesRequest extends  AbstractModel {
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
 * UpdateDeviceGroup返回参数结构体
 * @class
 */
class UpdateDeviceGroupResponse extends  AbstractModel {
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
 * ModifyRecordingPlan请求参数结构体
 * @class
 */
class ModifyRecordingPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 计划名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TimeTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;

    }
}

/**
 * DescribeDeviceEvent请求参数结构体
 * @class
 */
class DescribeDeviceEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，秒级时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，秒级时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 默认为全部 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断
         * @type {Array.<number> || null}
         */
        this.EventTypes = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * limit限制值
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.EventTypes = 'EventTypes' in params ? params.EventTypes : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetVideoListByCon请求参数结构体
 * @class
 */
class GetVideoListByConRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 0：查询指定日期的录像；1：查询最近一天的录像；默认0
         * @type {number || null}
         */
        this.LatestDay = null;

        /**
         * 指定某天。取值【YYYY-MM-DD】
为空时默认查询最近一天的记录
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 1: 云端录制 2: 本地录制
         * @type {number || null}
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.LatestDay = 'LatestDay' in params ? params.LatestDay : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ResetWarning请求参数结构体
 * @class
 */
class ResetWarningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Es中告警ID
         * @type {string || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DescribeDeviceMonitorData返回参数结构体
 * @class
 */
class DescribeDeviceMonitorDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询设备统计monitor信息列表
         * @type {Array.<DeviceMonitorValue> || null}
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
                let obj = new DeviceMonitorValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备所在分组信息
 * @class
 */
class DevGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组路径
         * @type {string || null}
         */
        this.GroupPath = null;

        /**
         * 父分组ID
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 设备错误，仅在用户没权限或者设备已删除时返回具体结果
         * @type {string || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupPath = 'GroupPath' in params ? params.GroupPath : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * DescribeDeviceList请求参数结构体
 * @class
 */
class DescribeDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 设备名前缀
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
         * @type {Array.<number> || null}
         */
        this.DeviceTypes = null;

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
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.DeviceTypes = 'DeviceTypes' in params ? params.DeviceTypes : null;

    }
}

/**
 * DescribeRecordingPlans返回参数结构体
 * @class
 */
class DescribeRecordingPlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划详情·列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordPlanDetail> || null}
         */
        this.Plans = null;

        /**
         * 录制计划总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Plans) {
            this.Plans = new Array();
            for (let z in params.Plans) {
                let obj = new RecordPlanDetail();
                obj.deserialize(params.Plans[z]);
                this.Plans.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ControlHomePosition返回参数结构体
 * @class
 */
class ControlHomePositionResponse extends  AbstractModel {
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
 * DescribeLiveRecordPlanById请求参数结构体
 * @class
 */
class DescribeLiveRecordPlanByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * 直播录制计划详情
 * @class
 */
class LiveRecordPlanItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 计划名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlanName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;

    }
}

/**
 * DescribeVideoList返回参数结构体
 * @class
 */
class DescribeVideoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 已废弃
         * @type {RecordTaskItem || null}
         */
        this.VideoList = null;

        /**
         * 录像详情列表
         * @type {Array.<RecordTaskItem> || null}
         */
        this.RecordList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VideoList) {
            let obj = new RecordTaskItem();
            obj.deserialize(params.VideoList)
            this.VideoList = obj;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new RecordTaskItem();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录制计划详情
 * @class
 */
class RecordPlanDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 计划名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeTemplateId = null;

        /**
         * 时间模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeTemplateName = null;

        /**
         * 绑定的通道列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChannelItem> || null}
         */
        this.Channels = null;

        /**
         * 存储周期（天）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordStorageTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;
        this.TimeTemplateName = 'TimeTemplateName' in params ? params.TimeTemplateName : null;

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelItem();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }
        this.RecordStorageTime = 'RecordStorageTime' in params ? params.RecordStorageTime : null;

    }
}

/**
 * 普通设备的录像详情
 * @class
 */
class RecordTaskItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录像任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordTaskId = null;

        /**
         * 录制计划ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordPlanId = null;

        /**
         * 本录制片段开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 本录制片段结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 录制模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 本录制片段对应的录制文件URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 本录制片段当前的录制状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordStatus = null;

        /**
         * 场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 告警ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarnId = null;

        /**
         * 录制id，NVR下属设备有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordTaskId = 'RecordTaskId' in params ? params.RecordTaskId : null;
        this.RecordPlanId = 'RecordPlanId' in params ? params.RecordPlanId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.RecordStatus = 'RecordStatus' in params ? params.RecordStatus : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.WarnId = 'WarnId' in params ? params.WarnId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;

    }
}

/**
 * GB28181通道
 * @class
 */
class ChannelItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DescribeIPCChannels请求参数结构体
 * @class
 */
class DescribeIPCChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制，默认0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道类型  0: 未知类型 1: 视频通道 2:  音频通道 3: 告警通道
         * @type {Array.<number> || null}
         */
        this.ChannelTypes = null;

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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelTypes = 'ChannelTypes' in params ? params.ChannelTypes : null;

    }
}

/**
 * DescribeSubGroups请求参数结构体
 * @class
 */
class DescribeSubGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名称，根据名称模糊匹配子分组时为必填
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否统计子分组下的设备数，0：统计，1：不统计
         * @type {number || null}
         */
        this.OnlyGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OnlyGroup = 'OnlyGroup' in params ? params.OnlyGroup : null;

    }
}

/**
 * UpdateTimeTemplate请求参数结构体
 * @class
 */
class UpdateTimeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 时间模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否全时录制，即7*24小时录制。
0：非全时录制；1：全时录制。默认1
         * @type {number || null}
         */
        this.IsAllWeek = null;

        /**
         * 录制时间片段
         * @type {Array.<TimeTemplateSpec> || null}
         */
        this.TimeTemplateSpecs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsAllWeek = 'IsAllWeek' in params ? params.IsAllWeek : null;

        if (params.TimeTemplateSpecs) {
            this.TimeTemplateSpecs = new Array();
            for (let z in params.TimeTemplateSpecs) {
                let obj = new TimeTemplateSpec();
                obj.deserialize(params.TimeTemplateSpecs[z]);
                this.TimeTemplateSpecs.push(obj);
            }
        }

    }
}

/**
 * DeleteRecordPlan请求参数结构体
 * @class
 */
class DeleteRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * CreateDeviceGroup返回参数结构体
 * @class
 */
class CreateDeviceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应结果，“OK”为成功，其他为失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetVideoListByCon返回参数结构体
 * @class
 */
class GetVideoListByConResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录像详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordTaskItem> || null}
         */
        this.VideoList = null;

        /**
         * 录像总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.VideoList) {
            this.VideoList = new Array();
            for (let z in params.VideoList) {
                let obj = new RecordTaskItem();
                obj.deserialize(params.VideoList[z]);
                this.VideoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCurrentDeviceData请求参数结构体
 * @class
 */
class DescribeCurrentDeviceDataRequest extends  AbstractModel {
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
 * 直播录制详情item
 * @class
 */
class LiveRecordItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制文件自增ID
         * @type {number || null}
         */
        this.IntID = null;

        /**
         * 直播频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpectDeleteTime = null;

        /**
         * 录制时长
         * @type {number || null}
         */
        this.RecordTimeLen = null;

        /**
         * 文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 录制文件url
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.RecordPlanId = null;

        /**
         * 录制开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 录制结束时间
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
        this.IntID = 'IntID' in params ? params.IntID : null;
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.ExpectDeleteTime = 'ExpectDeleteTime' in params ? params.ExpectDeleteTime : null;
        this.RecordTimeLen = 'RecordTimeLen' in params ? params.RecordTimeLen : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.RecordPlanId = 'RecordPlanId' in params ? params.RecordPlanId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeIPCChannels返回参数结构体
 * @class
 */
class DescribeIPCChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 通道详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupDeviceItem> || null}
         */
        this.DeviceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeviceList) {
            this.DeviceList = new Array();
            for (let z in params.DeviceList) {
                let obj = new GroupDeviceItem();
                obj.deserialize(params.DeviceList[z]);
                this.DeviceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRecordPlan请求参数结构体
 * @class
 */
class UpdateRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 计划名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TimeTemplateId = null;

        /**
         * 触发录制的事件 1：全部
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 录制设备列表
         * @type {Array.<DeviceItem> || null}
         */
        this.Devices = null;

        /**
         * 是否更新绑定此录制计划的设备列表
0 - 不更新
1 - 更新，如果Devices参数为空则清空设备列表，Devices不为空则全量更新设备列表
         * @type {number || null}
         */
        this.IsModifyDevices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.IsModifyDevices = 'IsModifyDevices' in params ? params.IsModifyDevices : null;

    }
}

/**
 * DescribeRecordingPlanById请求参数结构体
 * @class
 */
class DescribeRecordingPlanByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * ModifyDeviceData返回参数结构体
 * @class
 */
class ModifyDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果,“OK”表示成功，其他表示失败。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeStatisticDetails返回参数结构体
 * @class
 */
class DescribeStatisticDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StatisticItem> || null}
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
                let obj = new StatisticItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWarnMod返回参数结构体
 * @class
 */
class DescribeWarnModResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分组下设备信息
 * @class
 */
class GroupDeviceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 设备状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInformation = null;

        /**
         * 设备类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * rtsp地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RTSPUrl = null;

        /**
         * 设备编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceCode = null;

        /**
         * 是否存在录像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRecord = null;

        /**
         * 该设备是否可录制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Recordable = null;

        /**
         * 设备接入协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备通道总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChannelNum = null;

        /**
         * 设备视频通道总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VideoChannelNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExtraInformation = 'ExtraInformation' in params ? params.ExtraInformation : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.RTSPUrl = 'RTSPUrl' in params ? params.RTSPUrl : null;
        this.DeviceCode = 'DeviceCode' in params ? params.DeviceCode : null;
        this.IsRecord = 'IsRecord' in params ? params.IsRecord : null;
        this.Recordable = 'Recordable' in params ? params.Recordable : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChannelNum = 'ChannelNum' in params ? params.ChannelNum : null;
        this.VideoChannelNum = 'VideoChannelNum' in params ? params.VideoChannelNum : null;

    }
}

/**
 * DescribeSubGroups返回参数结构体
 * @class
 */
class DescribeSubGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子分组详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupItem> || null}
         */
        this.GroupList = null;

        /**
         * 子分组总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new GroupItem();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChannelStreamURL返回参数结构体
 * @class
 */
class DescribeChannelStreamURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备实时流地址列表
         * @type {DescribeDeviceStreamsData || null}
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
            let obj = new DescribeDeviceStreamsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStatisticDetails请求参数结构体
 * @class
 */
class DescribeStatisticDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始日期，格式【YYYY-MM-DD】
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式【YYYY-MM-DD】
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 统计项。取值范围：
1.录制设备数：RecordingDevice
2.非录制设备数：NonRecordingDevice
3.观看流量总数：WatchFlux
4.已用存储容量总数：StorageUsage
5. X-P2P分享流量: P2PFluxTotal
6. X-P2P峰值带宽: P2PPeakValue
7. RTMP推流路数(直播推流): LivePushTotal
         * @type {string || null}
         */
        this.StatisticField = null;

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
        this.StatisticField = 'StatisticField' in params ? params.StatisticField : null;

    }
}

/**
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * UpdateDevicePassWord请求参数结构体
 * @class
 */
class UpdateDevicePassWordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * DescribeMessageForward请求参数结构体
 * @class
 */
class DescribeMessageForwardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {number || null}
         */
        this.IntId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;

    }
}

/**
 * CreateTimeTemplate请求参数结构体
 * @class
 */
class CreateTimeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否为每周全时录制（即7*24h录制），0：非全时录制，1；全时录制，默认0
         * @type {number || null}
         */
        this.IsAllWeek = null;

        /**
         * 当IsAllWeek为0时必选，用于描述模板的各个时间片段
         * @type {Array.<TimeTemplateSpec> || null}
         */
        this.TimeTemplateSpecs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IsAllWeek = 'IsAllWeek' in params ? params.IsAllWeek : null;

        if (params.TimeTemplateSpecs) {
            this.TimeTemplateSpecs = new Array();
            for (let z in params.TimeTemplateSpecs) {
                let obj = new TimeTemplateSpec();
                obj.deserialize(params.TimeTemplateSpecs[z]);
                this.TimeTemplateSpecs.push(obj);
            }
        }

    }
}

/**
 * ModifyBindSceneChannels返回参数结构体
 * @class
 */
class ModifyBindSceneChannelsResponse extends  AbstractModel {
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
 * CreateMessageForward请求参数结构体
 * @class
 */
class CreateMessageForwardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * json数组， 转发类型 1: 告警 2:GPS
         * @type {string || null}
         */
        this.MessageType = null;

        /**
         * kafka topic id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * kafka topic 名称
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 分组信息
 * @class
 */
class GroupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 父分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupPath = null;

        /**
         * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupDescribe = null;

        /**
         * 分组绑定设备数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeviceNum = null;

        /**
         * 子分组数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubGroupNum = null;

        /**
         * 分组附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInformation = null;

        /**
         * 分组类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 分组状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupPath = 'GroupPath' in params ? params.GroupPath : null;
        this.GroupDescribe = 'GroupDescribe' in params ? params.GroupDescribe : null;
        this.DeviceNum = 'DeviceNum' in params ? params.DeviceNum : null;
        this.SubGroupNum = 'SubGroupNum' in params ? params.SubGroupNum : null;
        this.ExtraInformation = 'ExtraInformation' in params ? params.ExtraInformation : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupStatus = 'GroupStatus' in params ? params.GroupStatus : null;

    }
}

/**
 * DeleteWarning请求参数结构体
 * @class
 */
class DeleteWarningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 告警索引
         * @type {string || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * ModifyBindPlanLiveChannel请求参数结构体
 * @class
 */
class ModifyBindPlanLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 1: 绑定 2: 解绑
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 直播频道ID列表
         * @type {Array.<string> || null}
         */
        this.LiveChannelIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LiveChannelIds = 'LiveChannelIds' in params ? params.LiveChannelIds : null;

    }
}

/**
 * DescribeLiveStream请求参数结构体
 * @class
 */
class DescribeLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 过期时间
         * @type {number || null}
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
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ModifyMessageForward请求参数结构体
 * @class
 */
class ModifyMessageForwardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * json数组， 转发类型 1: 告警 2:GPS
         * @type {string || null}
         */
        this.MessageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;

    }
}

/**
 * ModifyLiveRecordPlan返回参数结构体
 * @class
 */
class ModifyLiveRecordPlanResponse extends  AbstractModel {
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
 * DescribeXP2PData返回参数结构体
 * @class
 */
class DescribeXP2PDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * [log_time,cdn_bytes , p2p_bytes, online_people, stuck_times, stuck_people,request,request_success,request_fail,play_fail]
[时间戳,cdn流量(字节) , p2p流量(字节), 在线人数, 卡播次数, 卡播人数,起播请求次数,起播成功次数,起播失败次数,播放失败次数, pcdn cdn流量（字节), pcdn路由流量(字节), 上传流量(字节)]
[1481016480, 46118502414, 75144943171, 61691, 3853, 0,0,0,0,0, 0, 0, 0]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceEvent返回参数结构体
 * @class
 */
class DescribeDeviceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Events> || null}
         */
        this.Events = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Events();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 大盘统计-录像存储统计 出参Value
 * @class
 */
class RecordStatisticValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 期望执行时间 秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpectTimeLen = null;

        /**
         * 实际执行时间 秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordTimeLen = null;

        /**
         * 存储大小 G
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ExpectTimeLen = 'ExpectTimeLen' in params ? params.ExpectTimeLen : null;
        this.RecordTimeLen = 'RecordTimeLen' in params ? params.RecordTimeLen : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

    }
}

/**
 * ModifyScene请求参数结构体
 * @class
 */
class ModifySceneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 场景名称
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * 触发条件
         * @type {string || null}
         */
        this.SceneTrigger = null;

        /**
         * 录制时长(秒)
         * @type {number || null}
         */
        this.RecordDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.SceneTrigger = 'SceneTrigger' in params ? params.SceneTrigger : null;
        this.RecordDuration = 'RecordDuration' in params ? params.RecordDuration : null;

    }
}

/**
 * DescribeAllDeviceList请求参数结构体
 * @class
 */
class DescribeAllDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 设备名称，需要模糊匹配设备名称时为必填
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * DeviceId列表，需要精确查找设备时为必填
         * @type {Array.<string> || null}
         */
        this.DeviceIds = null;

        /**
         * 设备类型过滤，设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
         * @type {Array.<number> || null}
         */
        this.DeviceTypes = null;

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
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.DeviceIds = 'DeviceIds' in params ? params.DeviceIds : null;
        this.DeviceTypes = 'DeviceTypes' in params ? params.DeviceTypes : null;

    }
}

/**
 * DescribeRecordDatesByLive请求参数结构体
 * @class
 */
class DescribeRecordDatesByLiveRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 分页值，本地录制时参数无效
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制值，本地录制时参数无效
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
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDevicePassWord请求参数结构体
 * @class
 */
class DescribeDevicePassWordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * GetRecordPlanById请求参数结构体
 * @class
 */
class GetRecordPlanByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * ModifyRecordingPlan返回参数结构体
 * @class
 */
class ModifyRecordingPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果
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
 * DescribeLiveChannelList请求参数结构体
 * @class
 */
class DescribeLiveChannelListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 直播频道类型，1：固定直播；2：移动直播
         * @type {number || null}
         */
        this.LiveChannelType = null;

        /**
         * 直播录制计划ID, null: 直播录制计划为空
         * @type {string || null}
         */
        this.RecordPlanId = null;

        /**
         * 频道名称 (支持模糊搜索)
         * @type {string || null}
         */
        this.LiveChannelName = null;

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
        this.LiveChannelType = 'LiveChannelType' in params ? params.LiveChannelType : null;
        this.RecordPlanId = 'RecordPlanId' in params ? params.RecordPlanId : null;
        this.LiveChannelName = 'LiveChannelName' in params ? params.LiveChannelName : null;

    }
}

/**
 * GetRecordPlanByDev返回参数结构体
 * @class
 */
class GetRecordPlanByDevResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RecordPlanItem || null}
         */
        this.Plan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Plan) {
            let obj = new RecordPlanItem();
            obj.deserialize(params.Plan)
            this.Plan = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVideoList请求参数结构体
 * @class
 */
class DeleteVideoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频ID列表长度限制100内
         * @type {Array.<number> || null}
         */
        this.InitIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitIDs = 'InitIDs' in params ? params.InitIDs : null;

    }
}

/**
 * 分组信息详情
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组类型
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 分组路径
         * @type {string || null}
         */
        this.GroupPath = null;

        /**
         * 父分组ID
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 分组描述
         * @type {string || null}
         */
        this.GroupDescribe = null;

        /**
         * 扩展信息
         * @type {string || null}
         */
        this.ExtraInformation = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 分组状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupStatus = null;

        /**
         * 设备不存在时产生的错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.GroupPath = 'GroupPath' in params ? params.GroupPath : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.GroupDescribe = 'GroupDescribe' in params ? params.GroupDescribe : null;
        this.ExtraInformation = 'ExtraInformation' in params ? params.ExtraInformation : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupStatus = 'GroupStatus' in params ? params.GroupStatus : null;
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * ControlPreset请求参数结构体
 * @class
 */
class ControlPresetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 控制命令：
Set-设置当前位置为预置位
Del-删除指定的预置位
Call-调用指定的预置位
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 预置位编码 范围1-8
         * @type {number || null}
         */
        this.PresetId = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.PresetId = 'PresetId' in params ? params.PresetId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * CreateRecordPlan请求参数结构体
 * @class
 */
class CreateRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TimeTemplateId = null;

        /**
         * 触发录制的事件类别 1:全部
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 该录制计划绑定的设备列表
         * @type {Array.<DeviceItem> || null}
         */
        this.Devices = null;

        /**
         * 存储周期
         * @type {number || null}
         */
        this.RecordStorageTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RecordStorageTime = 'RecordStorageTime' in params ? params.RecordStorageTime : null;

    }
}

/**
 * DescribeRecordStreamData 复杂类型
 * @class
 */
class DescribeRecordStreamData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rtsp地址
         * @type {string || null}
         */
        this.RtspAddr = null;

        /**
         * Rtmp地址
         * @type {string || null}
         */
        this.RtmpAddr = null;

        /**
         * Hls地址
         * @type {string || null}
         */
        this.HlsAddr = null;

        /**
         * Flv地址
         * @type {string || null}
         */
        this.FlvAddr = null;

        /**
         * 流Id
         * @type {string || null}
         */
        this.StreamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RtspAddr = 'RtspAddr' in params ? params.RtspAddr : null;
        this.RtmpAddr = 'RtmpAddr' in params ? params.RtmpAddr : null;
        this.HlsAddr = 'HlsAddr' in params ? params.HlsAddr : null;
        this.FlvAddr = 'FlvAddr' in params ? params.FlvAddr : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;

    }
}

/**
 * DeleteRecordingPlan返回参数结构体
 * @class
 */
class DeleteRecordingPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果，OK：成功，其他：失败
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
 * CreateDeviceGroup请求参数结构体
 * @class
 */
class CreateDeviceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 父分组ID
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 分组描述
         * @type {string || null}
         */
        this.GroupDescribe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.GroupDescribe = 'GroupDescribe' in params ? params.GroupDescribe : null;

    }
}

/**
 * 场景列表元素
 * @class
 */
class SceneItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * 触发规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneTrigger = null;

        /**
         * 录制时长 秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordDuration = null;

        /**
         * 存储时长 天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StoreDuration = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.SceneTrigger = 'SceneTrigger' in params ? params.SceneTrigger : null;
        this.RecordDuration = 'RecordDuration' in params ? params.RecordDuration : null;
        this.StoreDuration = 'StoreDuration' in params ? params.StoreDuration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyBindSceneChannels请求参数结构体
 * @class
 */
class ModifyBindSceneChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 1: 绑定 2: 解绑
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 通道列表
         * @type {Array.<ChannelItem> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelItem();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }

    }
}

/**
 * DescribeLiveRecordPlanIds返回参数结构体
 * @class
 */
class DescribeLiveRecordPlanIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 计划数组
         * @type {Array.<LiveRecordPlanItem> || null}
         */
        this.Plans = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Plans) {
            this.Plans = new Array();
            for (let z in params.Plans) {
                let obj = new LiveRecordPlanItem();
                obj.deserialize(params.Plans[z]);
                this.Plans.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBindSceneDevice请求参数结构体
 * @class
 */
class ModifyBindSceneDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 1: 绑定 2: 解绑
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 设备列表
         * @type {Array.<DeviceItem> || null}
         */
        this.Devices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }

    }
}

/**
 * CreateDevice返回参数结构体
 * @class
 */
class CreateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceCode = null;

        /**
         * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备虚拟组信息，仅在创建NVR时返回该值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceCode = 'DeviceCode' in params ? params.DeviceCode : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.VirtualGroupId = 'VirtualGroupId' in params ? params.VirtualGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDevice请求参数结构体
 * @class
 */
class CreateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 设备密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 设备需要绑定的分组ID，参数为空则默认绑定到根分组
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 告警列表出参
 * @class
 */
class WarningsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 告警通道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarnChannel = null;

        /**
         * 告警级别 1: "一级警情", 2: "二级警情", 3: "三级警情", 4: "四级警情",
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarnLevel = null;

        /**
         * 告警级别名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarnLevelName = null;

        /**
         * 告警方式 2 设备报警 5 视频报警 6 设备故障报警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarnMode = null;

        /**
         * 告警方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarnModeName = null;

        /**
         * 告警类型  2: {
			Name: "设备报警",
			WarnType: map[int]string{
				1: "视频丢失报警",
				2: "设备防拆报警",
				3: "存储设备磁盘满报警",
				4: "设备高温报警",
				5: "设备低温报警",
			},
		},
		5: {
			Name: "视频报警",
			WarnType: map[int]string{
				1:  "人工视频报警",
				2:  "运动目标检测报警",
				3:  "遗留物检测报警",
				4:  "物体移除检测报警",
				5:  "绊线检测报警",
				6:  "入侵检测报警",
				7:  "逆行检测报警",
				8:  "徘徊检测报警",
				9:  "流量统计报警",
				10: "密度检测报警",
				11: "视频异常检测报警",
				12: "快速移动报警",
			},
		},
		6: {
			Name: "设备故障报警",
			WarnType: map[int]string{
				1: "存储设备磁盘故障报警",
				2: "存储设备风扇故障报警",
			},
		}
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarnType = null;

        /**
         * 是否删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Del = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.WarnChannel = 'WarnChannel' in params ? params.WarnChannel : null;
        this.WarnLevel = 'WarnLevel' in params ? params.WarnLevel : null;
        this.WarnLevelName = 'WarnLevelName' in params ? params.WarnLevelName : null;
        this.WarnMode = 'WarnMode' in params ? params.WarnMode : null;
        this.WarnModeName = 'WarnModeName' in params ? params.WarnModeName : null;
        this.WarnType = 'WarnType' in params ? params.WarnType : null;
        this.Del = 'Del' in params ? params.Del : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeStatisticSummary返回参数结构体
 * @class
 */
class DescribeStatisticSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordingDevice = null;

        /**
         * 非录制设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NonRecordingDevice = null;

        /**
         * 观看流量总数。为直播观看流量与点播观看流量之和。单位：GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WatchFlux = null;

        /**
         * 累计有效存储容量总数。单位：GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageUsage = null;

        /**
         * X-P2P分享流量。单位 Byte
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.P2PFluxTotal = null;

        /**
         * X-P2P峰值带宽。 单位bps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.P2PPeakValue = null;

        /**
         * RTMP推流路数 ( 直播推流)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LivePushTotal = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordingDevice = 'RecordingDevice' in params ? params.RecordingDevice : null;
        this.NonRecordingDevice = 'NonRecordingDevice' in params ? params.NonRecordingDevice : null;
        this.WatchFlux = 'WatchFlux' in params ? params.WatchFlux : null;
        this.StorageUsage = 'StorageUsage' in params ? params.StorageUsage : null;
        this.P2PFluxTotal = 'P2PFluxTotal' in params ? params.P2PFluxTotal : null;
        this.P2PPeakValue = 'P2PPeakValue' in params ? params.P2PPeakValue : null;
        this.LivePushTotal = 'LivePushTotal' in params ? params.LivePushTotal : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBindPlanLiveChannel返回参数结构体
 * @class
 */
class ModifyBindPlanLiveChannelResponse extends  AbstractModel {
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
 * DescribeRecordStream请求参数结构体
 * @class
 */
class DescribeRecordStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 流失效时间，UNIX时间戳，30天内
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 录像文件ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 录像流开始时间，当录像文件ID为空时有效，UNIX时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 录像流结束时间，当录像文件iD为空时有效，UNIX时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 通道唯一标识（此接口升级为必填字段）
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * 预置位结构出参
 * @class
 */
class PresetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预置位ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PresetId = null;

        /**
         * 预置位名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PresetName = null;

        /**
         * 预置位状态 0:未设置预置位 1:已设置预置位 2:已设置预置位&看守位
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 预置位启用时的自动归位时间
         * @type {number || null}
         */
        this.ResetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PresetId = 'PresetId' in params ? params.PresetId : null;
        this.PresetName = 'PresetName' in params ? params.PresetName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ResetTime = 'ResetTime' in params ? params.ResetTime : null;

    }
}

/**
 * BindGroupDevices请求参数结构体
 * @class
 */
class BindGroupDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 设备唯一标识列表
         * @type {Array.<string> || null}
         */
        this.DeviceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DeviceList = 'DeviceList' in params ? params.DeviceList : null;

    }
}

/**
 * ControlHomePosition请求参数结构体
 * @class
 */
class ControlHomePositionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 看守位使能 0-停用看守位 1-启用看守位
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 预置位编码 范围1-8，启用看守位时必填
         * @type {number || null}
         */
        this.PresetId = null;

        /**
         * 看守位自动归位时间， 启用看守位时必填
         * @type {number || null}
         */
        this.ResetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.PresetId = 'PresetId' in params ? params.PresetId : null;
        this.ResetTime = 'ResetTime' in params ? params.ResetTime : null;

    }
}

/**
 * ModifyLiveRecordPlan请求参数结构体
 * @class
 */
class ModifyLiveRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 录制计划名
         * @type {string || null}
         */
        this.PlanName = null;

        /**
         * 时间模板ID，固定直播时为必填
         * @type {string || null}
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
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeScene返回参数结构体
 * @class
 */
class DescribeSceneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 录制时长(秒)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordDuration = null;

        /**
         * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * 场景触发规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneTrigger = null;

        /**
         * 存储时长 (天)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StoreDuration = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.RecordDuration = 'RecordDuration' in params ? params.RecordDuration : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.SceneTrigger = 'SceneTrigger' in params ? params.SceneTrigger : null;
        this.StoreDuration = 'StoreDuration' in params ? params.StoreDuration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevice返回参数结构体
 * @class
 */
class DescribeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备详情信息
         * @type {AllDeviceInfo || null}
         */
        this.Device = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Device) {
            let obj = new AllDeviceInfo();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTimeTemplateById返回参数结构体
 * @class
 */
class GetTimeTemplateByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimeTemplateItem || null}
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
            let obj = new TimeTemplateItem();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveChannel返回参数结构体
 * @class
 */
class DescribeLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 频道名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveChannelName = null;

        /**
         * 直播频道类型 1：固定直播；2：移动直播
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveChannelType = null;

        /**
         * 通道直播状态：1: 未推流，2: 推流中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveStatus = null;

        /**
         * 推流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PushStreamAddress = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UpdateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.LiveChannelName = 'LiveChannelName' in params ? params.LiveChannelName : null;
        this.LiveChannelType = 'LiveChannelType' in params ? params.LiveChannelType : null;
        this.LiveStatus = 'LiveStatus' in params ? params.LiveStatus : null;
        this.PushStreamAddress = 'PushStreamAddress' in params ? params.PushStreamAddress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChannels返回参数结构体
 * @class
 */
class DescribeChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 通道详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChannelDetail> || null}
         */
        this.Channels = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelDetail();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询设备统计返回值
 * @class
 */
class DeviceMonitorValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 统计时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeMessageForwards请求参数结构体
 * @class
 */
class DescribeMessageForwardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移
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
 * ControlDevicePTZ返回参数结构体
 * @class
 */
class ControlDevicePTZResponse extends  AbstractModel {
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
 * DescribeRecordingPlans请求参数结构体
 * @class
 */
class DescribeRecordingPlansRequest extends  AbstractModel {
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
 * 在操作时间模板时，用于描述各个时间片段
 * @class
 */
class TimeTemplateSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一周中的周几
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DayofWeek = null;

        /**
         * 时间片段的开始时分。格式【HH:MM】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 时间片段的结束时分。格式【HH:MM】
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DayofWeek = 'DayofWeek' in params ? params.DayofWeek : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ControlDevicePTZ请求参数结构体
 * @class
 */
class ControlDevicePTZRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * PTZ控制命令类型：
stop - 停止当前PTZ信令
left - 向左移动
right - 向右移动
up - 向上移动
down - 向下移动
leftUp - 左上移动
leftDown - 左下移动
rightUp - 右上移动
rightDown - 右下移动
zoomOut - 镜头缩小
zoomIn - 镜头放大
irisIn - 光圈缩小
irisOut - 光圈放大
focusIn - 焦距变近
focusOut - 焦距变远
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * UpdateDeviceGroup请求参数结构体
 * @class
 */
class UpdateDeviceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组描述
         * @type {string || null}
         */
        this.GroupDescribe = null;

        /**
         * 新父分组ID，用于修改分组路径
         * @type {string || null}
         */
        this.NewParentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupDescribe = 'GroupDescribe' in params ? params.GroupDescribe : null;
        this.NewParentId = 'NewParentId' in params ? params.NewParentId : null;

    }
}

/**
 * DescribeChannelsByLiveRecordPlan返回参数结构体
 * @class
 */
class DescribeChannelsByLiveRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 通道详情数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LiveChannelItem> || null}
         */
        this.LiveChannels = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LiveChannels) {
            this.LiveChannels = new Array();
            for (let z in params.LiveChannels) {
                let obj = new LiveChannelItem();
                obj.deserialize(params.LiveChannels[z]);
                this.LiveChannels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroupDevices请求参数结构体
 * @class
 */
class DescribeGroupDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制值，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 设备名称，根据设备名称模糊匹配时必填
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 过滤不可录制设备
         * @type {number || null}
         */
        this.Recordable = null;

        /**
         * 当Group是普通组的时候，支持根据DeviceTypes筛选类型，
 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
         * @type {Array.<number> || null}
         */
        this.DeviceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.Recordable = 'Recordable' in params ? params.Recordable : null;
        this.DeviceTypes = 'DeviceTypes' in params ? params.DeviceTypes : null;

    }
}

/**
 * DescribeGroupById请求参数结构体
 * @class
 */
class DescribeGroupByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 设备事件列表
 * @class
 */
class Events extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventTime = null;

        /**
         * 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventType = null;

        /**
         * 事件描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventDesc = null;

        /**
         * 设备类型
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 设备地址
         * @type {string || null}
         */
        this.DeviceAddress = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道Id
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 事件日志
         * @type {string || null}
         */
        this.EventLog = null;

        /**
         * 设备备注名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.EventDesc = 'EventDesc' in params ? params.EventDesc : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.DeviceAddress = 'DeviceAddress' in params ? params.DeviceAddress : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.EventLog = 'EventLog' in params ? params.EventLog : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * UpdateDevicePassWord返回参数结构体
 * @class
 */
class UpdateDevicePassWordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果，“OK”表示成功，其他表示失败。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeLiveRecordPlanById返回参数结构体
 * @class
 */
class DescribeLiveRecordPlanByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划名称
         * @type {string || null}
         */
        this.PlanName = null;

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 存储时间
         * @type {number || null}
         */
        this.RecordStorageTime = null;

        /**
         * 计划类型
         * @type {number || null}
         */
        this.PlanType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.RecordStorageTime = 'RecordStorageTime' in params ? params.RecordStorageTime : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteChannel请求参数结构体
 * @class
 */
class DeleteChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DescribeXP2PData请求参数结构体
 * @class
 */
class DescribeXP2PDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * P2P应用ID
         * @type {string || null}
         */
        this.P2PAppId = null;

        /**
         * 查询开始时间，时间戳秒
         * @type {number || null}
         */
        this.From = null;

        /**
         * 查询结束时间，时间戳秒
         * @type {number || null}
         */
        this.To = null;

        /**
         * P2P通路ID
         * @type {string || null}
         */
        this.P2PChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.P2PAppId = 'P2PAppId' in params ? params.P2PAppId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.P2PChannelId = 'P2PChannelId' in params ? params.P2PChannelId : null;

    }
}

/**
 * UpdateTimeTemplate返回参数结构体
 * @class
 */
class UpdateTimeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果，“OK”表示成功，其他表示失败。
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
 * DescribeSubscriptionStatus请求参数结构体
 * @class
 */
class DescribeSubscriptionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * DescribeDeviceStreams请求参数结构体
 * @class
 */
class DescribeDeviceStreamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 流地址失效时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 通道唯一标识（接口升级字段为必填）
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DescribeRecordStream返回参数结构体
 * @class
 */
class DescribeRecordStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {DescribeRecordStreamData || null}
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
            let obj = new DescribeRecordStreamData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordPlan返回参数结构体
 * @class
 */
class CreateRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWarnings请求参数结构体
 * @class
 */
class DescribeWarningsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1:创建时间倒序 2：创建时间升序 3：level倒序 4：leve升序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 可选设备id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 如果不传则查询所有，取值参见配置
         * @type {Array.<number> || null}
         */
        this.WarnLevelArray = null;

        /**
         * 如果不传则查询所有，取值参见配置
         * @type {Array.<number> || null}
         */
        this.WarnModeArray = null;

        /**
         * 不传认为是0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 不传认为是20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 形似：2021-05-21 00:00:00 .取值在当前日前30天内，不传默认是当前日前30天日期
         * @type {string || null}
         */
        this.DateBegin = null;

        /**
         * 形似：2021-05-21 23:59:59 .取值在当前日前30天内，不传默认是当前日前30天日期
         * @type {string || null}
         */
        this.DateEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.WarnLevelArray = 'WarnLevelArray' in params ? params.WarnLevelArray : null;
        this.WarnModeArray = 'WarnModeArray' in params ? params.WarnModeArray : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DateBegin = 'DateBegin' in params ? params.DateBegin : null;
        this.DateEnd = 'DateEnd' in params ? params.DateEnd : null;

    }
}

/**
 * CreateScene请求参数结构体
 * @class
 */
class CreateSceneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景名称
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * 场景触发规则
         * @type {string || null}
         */
        this.SceneTrigger = null;

        /**
         * 录制时长 (秒)
         * @type {number || null}
         */
        this.RecordDuration = null;

        /**
         * 录像存储时长(天)
         * @type {number || null}
         */
        this.StoreDuration = null;

        /**
         * 设备列表(不推荐使用)
         * @type {Array.<DeviceItem> || null}
         */
        this.Devices = null;

        /**
         * 通道列表
         * @type {Array.<ChannelItem> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.SceneTrigger = 'SceneTrigger' in params ? params.SceneTrigger : null;
        this.RecordDuration = 'RecordDuration' in params ? params.RecordDuration : null;
        this.StoreDuration = 'StoreDuration' in params ? params.StoreDuration : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelItem();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }

    }
}

/**
 * 查询全部设备出参
 * @class
 */
class AllDeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备类型；2：IPC
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 设备状态；0：设备不在线；1：设备在线；2：设备隔离中；3：设备未注册
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备扩展属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInformation = null;

        /**
         * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 设备绑定分组路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupPath = null;

        /**
         * 设备编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceCode = null;

        /**
         * 是否存在录像,，0:不存在；1：存在
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRecord = null;

        /**
         * 该设备是否可录制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Recordable = null;

        /**
         * 设备接入协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExtraInformation = 'ExtraInformation' in params ? params.ExtraInformation : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.GroupPath = 'GroupPath' in params ? params.GroupPath : null;
        this.DeviceCode = 'DeviceCode' in params ? params.DeviceCode : null;
        this.IsRecord = 'IsRecord' in params ? params.IsRecord : null;
        this.Recordable = 'Recordable' in params ? params.Recordable : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DescribeAbnormalEvents返回参数结构体
 * @class
 */
class DescribeAbnormalEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异动事件走势列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AbnormalEvents> || null}
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
                let obj = new AbnormalEvents();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceStreams返回参数结构体
 * @class
 */
class DescribeDeviceStreamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备实时流地址列表
         * @type {DescribeDeviceStreamsData || null}
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
            let obj = new DescribeDeviceStreamsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveVideoList返回参数结构体
 * @class
 */
class DescribeLiveVideoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总的条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 录制任务详情数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LiveRecordItem> || null}
         */
        this.RecordList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new LiveRecordItem();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDeviceGroup请求参数结构体
 * @class
 */
class DeleteDeviceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeScene请求参数结构体
 * @class
 */
class DescribeSceneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.IntId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;

    }
}

/**
 * DescribeDevice请求参数结构体
 * @class
 */
class DescribeDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * ControlPreset返回参数结构体
 * @class
 */
class ControlPresetResponse extends  AbstractModel {
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
 * DescribeDeviceGroup返回参数结构体
 * @class
 */
class DescribeDeviceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备所在分组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DevGroupInfo> || null}
         */
        this.DevGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DevGroups) {
            this.DevGroups = new Array();
            for (let z in params.DevGroups) {
                let obj = new DevGroupInfo();
                obj.deserialize(params.DevGroups[z]);
                this.DevGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteChannel返回参数结构体
 * @class
 */
class DeleteChannelResponse extends  AbstractModel {
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
 * ModifySubscriptionStatus返回参数结构体
 * @class
 */
class ModifySubscriptionStatusResponse extends  AbstractModel {
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
 * 消息转发配置信息
 * @class
 */
class MessageForward extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * json数组， 转发类型 1: 告警 2:GPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageType = null;

        /**
         * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 区域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * kafka topic id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * topic 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * ResetWarning返回参数结构体
 * @class
 */
class ResetWarningResponse extends  AbstractModel {
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
 * ModifyDeviceData请求参数结构体
 * @class
 */
class ModifyDeviceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.NickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.NickName = 'NickName' in params ? params.NickName : null;

    }
}

/**
 * DeleteScene返回参数结构体
 * @class
 */
class DeleteSceneResponse extends  AbstractModel {
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
 * GetRecordDatesByDev请求参数结构体
 * @class
 */
class GetRecordDatesByDevRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 限制量，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 1: 云端录制 2: 本地录制
         * @type {number || null}
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeLiveChannelList返回参数结构体
 * @class
 */
class DescribeLiveChannelListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 频道信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LiveChannelInfo> || null}
         */
        this.LiveChannels = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LiveChannels) {
            this.LiveChannels = new Array();
            for (let z in params.LiveChannels) {
                let obj = new LiveChannelInfo();
                obj.deserialize(params.LiveChannels[z]);
                this.LiveChannels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTimeTemplates返回参数结构体
 * @class
 */
class GetTimeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimeTemplateItem> || null}
         */
        this.Templates = null;

        /**
         * 时间模板总数
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
                let obj = new TimeTemplateItem();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveChannel返回参数结构体
 * @class
 */
class CreateLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播频道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 直播频道推流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PushStreamAddress = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.PushStreamAddress = 'PushStreamAddress' in params ? params.PushStreamAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVideoList返回参数结构体
 * @class
 */
class DeleteVideoListResponse extends  AbstractModel {
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
 * ModifyLiveVideo返回参数结构体
 * @class
 */
class ModifyLiveVideoResponse extends  AbstractModel {
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
 * DescribeChannelStreamURL请求参数结构体
 * @class
 */
class DescribeChannelStreamURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识，必填参数
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 流地址失效时间，固定值填写0，其他参数无效，必填参数
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 通道唯一标识（接口升级字段为必填），必填参数
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DescribeAllDeviceList返回参数结构体
 * @class
 */
class DescribeAllDeviceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AllDeviceInfo> || null}
         */
        this.Devices = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new AllDeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStatisticSummary请求参数结构体
 * @class
 */
class DescribeStatisticSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定日期。格式【YYYY-MM-DD】
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
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeGroups返回参数结构体
 * @class
 */
class DescribeGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfo> || null}
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 国标通道详细信息
 * @class
 */
class ChannelDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 通道类型 0：未知；1：视频通道；2：音频通道；3：告警通道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChannelType = null;

        /**
         * 20位国标通道编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelCode = null;

        /**
         * 通道扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInformation = null;

        /**
         * 通道在线状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 通道是否存在录像标识 0：无录像；1：有录像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRecord = null;

        /**
         * 通道所属设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道所属虚拟组织的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelType = 'ChannelType' in params ? params.ChannelType : null;
        this.ChannelCode = 'ChannelCode' in params ? params.ChannelCode : null;
        this.ExtraInformation = 'ExtraInformation' in params ? params.ExtraInformation : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsRecord = 'IsRecord' in params ? params.IsRecord : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.BusinessGroupId = 'BusinessGroupId' in params ? params.BusinessGroupId : null;

    }
}

/**
 * DescribeChannelLiveStreamURL返回参数结构体
 * @class
 */
class DescribeChannelLiveStreamURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备实时流地址列表
         * @type {DescribeDeviceStreamsData || null}
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
            let obj = new DescribeDeviceStreamsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceStreams的出参复杂类型
 * @class
 */
class DescribeDeviceStreamsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * rtsp地址
         * @type {string || null}
         */
        this.RtspAddr = null;

        /**
         * rtmp地址
         * @type {string || null}
         */
        this.RtmpAddr = null;

        /**
         * hls地址
         * @type {string || null}
         */
        this.HlsAddr = null;

        /**
         * flv地址
         * @type {string || null}
         */
        this.FlvAddr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RtspAddr = 'RtspAddr' in params ? params.RtspAddr : null;
        this.RtmpAddr = 'RtmpAddr' in params ? params.RtmpAddr : null;
        this.HlsAddr = 'HlsAddr' in params ? params.HlsAddr : null;
        this.FlvAddr = 'FlvAddr' in params ? params.FlvAddr : null;

    }
}

/**
 * DeleteLiveRecordPlan请求参数结构体
 * @class
 */
class DeleteLiveRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * ModifyBindRecordingPlan请求参数结构体
 * @class
 */
class ModifyBindRecordingPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型： 1-绑定设备 ；2-解绑设备
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 录制通道列表
         * @type {Array.<ChannelItem> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelItem();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }

    }
}

/**
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果 OK-成功； 其他-失败
注意：此字段可能返回 null，表示取不到有效值。
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
 * DeleteLiveVideoList返回参数结构体
 * @class
 */
class DeleteLiveVideoListResponse extends  AbstractModel {
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
 * DescribeDeviceMonitorData请求参数结构体
 * @class
 */
class DescribeDeviceMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 类型 支持 OnlineChannels/OnlineDevices/RecordingChannels
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间粒度 目前只支持 1h
         * @type {string || null}
         */
        this.TimesSpec = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.TimesSpec = 'TimesSpec' in params ? params.TimesSpec : null;

    }
}

/**
 * CreateTimeTemplate返回参数结构体
 * @class
 */
class CreateTimeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
         * @type {string || null}
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
 * DeleteLiveChannel请求参数结构体
 * @class
 */
class DeleteLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;

    }
}

/**
 * 某天的统计数额
 * @class
 */
class StatisticItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期。格式【YYYY-MM-DD】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 统计数额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Sum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Sum = 'Sum' in params ? params.Sum : null;

    }
}

/**
 * DescribeChannelLiveStreamURL请求参数结构体
 * @class
 */
class DescribeChannelLiveStreamURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识，必填参数
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识（接口升级字段为必填），必填参数
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * DescribeSIPServer返回参数结构体
 * @class
 */
class DescribeSIPServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SIP服务器相关配置项
         * @type {ServerConfiguration || null}
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
            let obj = new ServerConfiguration();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroupByPath请求参数结构体
 * @class
 */
class DescribeGroupByPathRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组路径，格式为/aaa(/bbb/ccc)
         * @type {string || null}
         */
        this.GroupPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupPath = 'GroupPath' in params ? params.GroupPath : null;

    }
}

/**
 * DescribeRecordDatesByLive返回参数结构体
 * @class
 */
class DescribeRecordDatesByLiveResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制日期数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Dates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dates = 'Dates' in params ? params.Dates : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRecordPlan返回参数结构体
 * @class
 */
class UpdateRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果
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
 * ModifyBindSceneDevice返回参数结构体
 * @class
 */
class ModifyBindSceneDeviceResponse extends  AbstractModel {
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
 * 异动事件走势元素
 * @class
 */
class AbnormalEventsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Key = null;

        /**
         * 类型总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 时间模板详情
 * @class
 */
class TimeTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否全时录制，即7*24小时录制 0-否 1-是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAllWeek = null;

        /**
         * 是否为自定义模板 0-否 1-是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 时间片段详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimeTemplateSpec> || null}
         */
        this.TimeTemplateSpecs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsAllWeek = 'IsAllWeek' in params ? params.IsAllWeek : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TimeTemplateSpecs) {
            this.TimeTemplateSpecs = new Array();
            for (let z in params.TimeTemplateSpecs) {
                let obj = new TimeTemplateSpec();
                obj.deserialize(params.TimeTemplateSpecs[z]);
                this.TimeTemplateSpecs.push(obj);
            }
        }

    }
}

/**
 * 异动事件走势列表
 * @class
 */
class AbnormalEvents extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应查询日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AbnormalEventsInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new AbnormalEventsInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * DescribeDeviceGroup请求参数结构体
 * @class
 */
class DescribeDeviceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识列表
         * @type {Array.<string> || null}
         */
        this.DeviceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceIds = 'DeviceIds' in params ? params.DeviceIds : null;

    }
}

/**
 * 频道信息
 * @class
 */
class LiveChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 频道名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveChannelName = null;

        /**
         * 频道类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveChannelType = null;

        /**
         * 通道直播状态：1: 未推流，2: 推流中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveStatus = null;

        /**
         * 推流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PushStreamAddress = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.LiveChannelName = 'LiveChannelName' in params ? params.LiveChannelName : null;
        this.LiveChannelType = 'LiveChannelType' in params ? params.LiveChannelType : null;
        this.LiveStatus = 'LiveStatus' in params ? params.LiveStatus : null;
        this.PushStreamAddress = 'PushStreamAddress' in params ? params.PushStreamAddress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 直播频道详情
 * @class
 */
class LiveChannelItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 频道名称
         * @type {string || null}
         */
        this.ChannelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

    }
}

/**
 * DescribeGroups请求参数结构体
 * @class
 */
class DescribeGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID列表
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

    }
}

/**
 * ControlChannelPTZ请求参数结构体
 * @class
 */
class ControlChannelPTZRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * PTZ控制命令类型：
stop - 停止当前PTZ信令
left - 向左移动
right - 向右移动
up - 向上移动
down - 向下移动
leftUp - 左上移动
leftDown - 左下移动
rightUp - 右上移动
rightDown - 右下移动
zoomOut - 镜头缩小
zoomIn - 镜头放大
irisIn - 光圈缩小
irisOut - 光圈放大
focusIn - 焦距变近
focusOut - 焦距变远
         * @type {string || null}
         */
        this.Command = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Command = 'Command' in params ? params.Command : null;

    }
}

/**
 * GetRecordPlans返回参数结构体
 * @class
 */
class GetRecordPlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划详情·列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordPlanItem> || null}
         */
        this.Plans = null;

        /**
         * 录制计划总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Plans) {
            this.Plans = new Array();
            for (let z in params.Plans) {
                let obj = new RecordPlanItem();
                obj.deserialize(params.Plans[z]);
                this.Plans.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChannelsByLiveRecordPlan请求参数结构体
 * @class
 */
class DescribeChannelsByLiveRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
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
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ControlChannelLocalRecord请求参数结构体
 * @class
 */
class ControlChannelLocalRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 流Id，流的唯一标识
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 控制参数，转义的json字符串

目前支持的command：
"Command": "{"Action":"PAUSE"}" 暂停
"Command": "{"Action":"PLAY"}" 暂停恢复
"Command": "{"Action":"PLAY","Offset":"15"}" 基于文件起始时间点的位置偏移，单位秒
         * @type {string || null}
         */
        this.Command = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Command = 'Command' in params ? params.Command : null;

    }
}

/**
 * ControlChannelLocalRecord返回参数结构体
 * @class
 */
class ControlChannelLocalRecordResponse extends  AbstractModel {
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
 * GetTimeTemplateById请求参数结构体
 * @class
 */
class GetTimeTemplateByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
         * @type {string || null}
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
 * 录制计划详情
 * @class
 */
class RecordPlanItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 计划名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeTemplateId = null;

        /**
         * 时间模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeTemplateName = null;

        /**
         * 录制类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 绑定的设备列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceItem> || null}
         */
        this.Devices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;
        this.TimeTemplateName = 'TimeTemplateName' in params ? params.TimeTemplateName : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }

    }
}

/**
 * DescribeMessageForwards返回参数结构体
 * @class
 */
class DescribeMessageForwardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MessageForward> || null}
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new MessageForward();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVideoInfo请求参数结构体
 * @class
 */
class ModifyVideoInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频ID列表长度限制100内
         * @type {Array.<number> || null}
         */
        this.InitIDs = null;

        /**
         * 过期时间 时间戳 -1: 永不过期 0: 无效值
         * @type {number || null}
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
        this.InitIDs = 'InitIDs' in params ? params.InitIDs : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeCurrentDeviceData返回参数结构体
 * @class
 */
class DescribeCurrentDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道数
         * @type {number || null}
         */
        this.Channels = null;

        /**
         * 设备数
         * @type {number || null}
         */
        this.Devices = null;

        /**
         * 在线通道数
         * @type {number || null}
         */
        this.OnlineChannels = null;

        /**
         * 在线设备数
         * @type {number || null}
         */
        this.OnlineDevices = null;

        /**
         * 正在录制通道数
         * @type {number || null}
         */
        this.RecordingChannels = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Channels = 'Channels' in params ? params.Channels : null;
        this.Devices = 'Devices' in params ? params.Devices : null;
        this.OnlineChannels = 'OnlineChannels' in params ? params.OnlineChannels : null;
        this.OnlineDevices = 'OnlineDevices' in params ? params.OnlineDevices : null;
        this.RecordingChannels = 'RecordingChannels' in params ? params.RecordingChannels : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRecordPlanById返回参数结构体
 * @class
 */
class GetRecordPlanByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RecordPlanItem || null}
         */
        this.Plan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Plan) {
            let obj = new RecordPlanItem();
            obj.deserialize(params.Plan)
            this.Plan = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTimeTemplate请求参数结构体
 * @class
 */
class DeleteTimeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
         * @type {string || null}
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
 * DeleteWarning返回参数结构体
 * @class
 */
class DeleteWarningResponse extends  AbstractModel {
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
 * ModifyLiveChannel请求参数结构体
 * @class
 */
class ModifyLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播频道ID
         * @type {string || null}
         */
        this.LiveChannelId = null;

        /**
         * 直播频道名
         * @type {string || null}
         */
        this.LiveChannelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelId = 'LiveChannelId' in params ? params.LiveChannelId : null;
        this.LiveChannelName = 'LiveChannelName' in params ? params.LiveChannelName : null;

    }
}

/**
 * DescribeMessageForward返回参数结构体
 * @class
 */
class DescribeMessageForwardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 区域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 配置ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * json数组， 转发类型 1: 告警 2:GPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageType = null;

        /**
         * kafka topic id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 配置创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户Uin信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * kafka topic 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordingPlanById返回参数结构体
 * @class
 */
class DescribeRecordingPlanByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RecordPlanDetail || null}
         */
        this.Plan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Plan) {
            let obj = new RecordPlanDetail();
            obj.deserialize(params.Plan)
            this.Plan = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWarnMod请求参数结构体
 * @class
 */
class DescribeWarnModRequest extends  AbstractModel {
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
 * ModifyBindRecordingPlan返回参数结构体
 * @class
 */
class ModifyBindRecordingPlanResponse extends  AbstractModel {
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
 * DescribeLiveRecordPlanIds请求参数结构体
 * @class
 */
class DescribeLiveRecordPlanIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteLiveVideoList请求参数结构体
 * @class
 */
class DeleteLiveVideoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频ID 列表, 大小限制(100)
         * @type {Array.<number> || null}
         */
        this.IntIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntIDs = 'IntIDs' in params ? params.IntIDs : null;

    }
}

/**
 * ModifyVideoInfo返回参数结构体
 * @class
 */
class ModifyVideoInfoResponse extends  AbstractModel {
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
 * ModifyMessageForward返回参数结构体
 * @class
 */
class ModifyMessageForwardResponse extends  AbstractModel {
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
 * DescribeDeviceList返回参数结构体
 * @class
 */
class DescribeDeviceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AllDeviceInfo> || null}
         */
        this.Devices = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new AllDeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScenes请求参数结构体
 * @class
 */
class DescribeScenesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移
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
 * DeleteLiveRecordPlan返回参数结构体
 * @class
 */
class DeleteLiveRecordPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除状态描述
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
 * DescribeBindSceneChannels请求参数结构体
 * @class
 */
class DescribeBindSceneChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条数限制最大不能超过1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 场景ID
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 偏移值
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
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribePresetList返回参数结构体
 * @class
 */
class DescribePresetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PresetItem> || null}
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
                let obj = new PresetItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroupById返回参数结构体
 * @class
 */
class DescribeGroupByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组信息详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GroupItem || null}
         */
        this.Group = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Group) {
            let obj = new GroupItem();
            obj.deserialize(params.Group)
            this.Group = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ControlRecordStream返回参数结构体
 * @class
 */
class ControlRecordStreamResponse extends  AbstractModel {
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
 * DeleteMessageForward请求参数结构体
 * @class
 */
class DeleteMessageForwardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {number || null}
         */
        this.IntId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;

    }
}

/**
 * DeleteLiveChannel返回参数结构体
 * @class
 */
class DeleteLiveChannelResponse extends  AbstractModel {
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
 * 拉流地址，只有在推流情况下才有

 * @class
 */
class StreamAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * rtsp流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RtspAddr = null;

        /**
         * rtmp流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RtmpAddr = null;

        /**
         * hls流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HlsAddr = null;

        /**
         * flv流地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlvAddr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.RtspAddr = 'RtspAddr' in params ? params.RtspAddr : null;
        this.RtmpAddr = 'RtmpAddr' in params ? params.RtmpAddr : null;
        this.HlsAddr = 'HlsAddr' in params ? params.HlsAddr : null;
        this.FlvAddr = 'FlvAddr' in params ? params.FlvAddr : null;

    }
}

/**
 * BindGroupDevices返回参数结构体
 * @class
 */
class BindGroupDevicesResponse extends  AbstractModel {
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
 * DescribeChannelLocalRecordURL返回参数结构体
 * @class
 */
class DescribeChannelLocalRecordURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {DescribeRecordStreamData || null}
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
            let obj = new DescribeRecordStreamData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 大盘统计-录像存储统计 出参RecordStatistic
 * @class
 */
class RecordStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RecordStatisticValue || null}
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

        if (params.Value) {
            let obj = new RecordStatisticValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * DescribeVideoList请求参数结构体
 * @class
 */
class DescribeVideoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始时间戳，秒级
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳，秒级
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 开始录制范围 开始
         * @type {number || null}
         */
        this.StartRecordTime = null;

        /**
         * 开始录制范围 结束
         * @type {number || null}
         */
        this.EndRecordTime = null;

        /**
         * 过期时间范围 开始
         * @type {number || null}
         */
        this.StartExpireTime = null;

        /**
         * 过期时间范围 结束
         * @type {number || null}
         */
        this.EndExpireTime = null;

        /**
         * 文件大小范围 开始 单位byte
         * @type {number || null}
         */
        this.StartFileSize = null;

        /**
         * 文件大小范围 结束 单位byte
         * @type {number || null}
         */
        this.EndFileSize = null;

        /**
         * 录制状态 99: 录制方已经回写状态 1: 开始录制了，等待回写 2: 已经到了时间模板的停止时间，在等待录制方回写
         * @type {number || null}
         */
        this.IsRecording = null;

        /**
         * 通道ID默认必传
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 录制计划ID
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 场景ID
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 告警ID
         * @type {number || null}
         */
        this.WarnId = null;

        /**
         * 录制类型 1: 联动计划录制 2: 告警录制
         * @type {Array.<number> || null}
         */
        this.RecordType = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.StartRecordTime = 'StartRecordTime' in params ? params.StartRecordTime : null;
        this.EndRecordTime = 'EndRecordTime' in params ? params.EndRecordTime : null;
        this.StartExpireTime = 'StartExpireTime' in params ? params.StartExpireTime : null;
        this.EndExpireTime = 'EndExpireTime' in params ? params.EndExpireTime : null;
        this.StartFileSize = 'StartFileSize' in params ? params.StartFileSize : null;
        this.EndFileSize = 'EndFileSize' in params ? params.EndFileSize : null;
        this.IsRecording = 'IsRecording' in params ? params.IsRecording : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.WarnId = 'WarnId' in params ? params.WarnId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;

    }
}

/**
 * CreateLiveRecordPlan请求参数结构体
 * @class
 */
class CreateLiveRecordPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制计划名
         * @type {string || null}
         */
        this.PlanName = null;

        /**
         * 计划类型 1：固定直播 2：移动直播
         * @type {number || null}
         */
        this.PlanType = null;

        /**
         * 时间模板ID,固定直播时为必填
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 录制文件存储时长，单位天，默认30天
         * @type {number || null}
         */
        this.RecordStorageTime = null;

        /**
         * 绑定的直播频道ID列表
         * @type {Array.<string> || null}
         */
        this.LiveChannelIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RecordStorageTime = 'RecordStorageTime' in params ? params.RecordStorageTime : null;
        this.LiveChannelIds = 'LiveChannelIds' in params ? params.LiveChannelIds : null;

    }
}

/**
 * DescribeDevicePassWord返回参数结构体
 * @class
 */
class DescribeDevicePassWordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyScene返回参数结构体
 * @class
 */
class ModifySceneResponse extends  AbstractModel {
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
 * DescribeBindSceneDevices请求参数结构体
 * @class
 */
class DescribeBindSceneDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 条数限制最大不能超过1000
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
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeBindSceneDevices返回参数结构体
 * @class
 */
class DescribeBindSceneDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 设备列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceItem> || null}
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DeviceItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitorDataByDate返回参数结构体
 * @class
 */
class DescribeMonitorDataByDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordStatistic> || null}
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
                let obj = new RecordStatistic();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLiveVideo请求参数结构体
 * @class
 */
class ModifyLiveVideoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频ID 列表, 大小限制(100)
         * @type {Array.<number> || null}
         */
        this.IntIDs = null;

        /**
         * 过期时间 秒 (-1: 为永不过期)
         * @type {number || null}
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
        this.IntIDs = 'IntIDs' in params ? params.IntIDs : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeChannelLocalRecordURL请求参数结构体
 * @class
 */
class DescribeChannelLocalRecordURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一标识
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 通道唯一标识
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 录像文件Id，通过获取本地录像返回
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * UNIX 时间戳，30天内，URL失效时间，如180s无人观看此流则URL提前失效
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 录像文件推送的开始时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 录像文件推送的结束时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateMessageForward返回参数结构体
 * @class
 */
class CreateMessageForwardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveChannel请求参数结构体
 * @class
 */
class CreateLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播频道名称
         * @type {string || null}
         */
        this.LiveChannelName = null;

        /**
         * 直播频道类型 1：固定直播；2：移动直播
         * @type {number || null}
         */
        this.LiveChannelType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveChannelName = 'LiveChannelName' in params ? params.LiveChannelName : null;
        this.LiveChannelType = 'LiveChannelType' in params ? params.LiveChannelType : null;

    }
}

/**
 * DescribeGroupDevices返回参数结构体
 * @class
 */
class DescribeGroupDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组绑定的设备数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupDeviceItem> || null}
         */
        this.DeviceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeviceList) {
            this.DeviceList = new Array();
            for (let z in params.DeviceList) {
                let obj = new GroupDeviceItem();
                obj.deserialize(params.DeviceList[z]);
                this.DeviceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteScene请求参数结构体
 * @class
 */
class DeleteSceneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {number || null}
         */
        this.IntId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntId = 'IntId' in params ? params.IntId : null;

    }
}

/**
 * CreateRecordingPlan请求参数结构体
 * @class
 */
class CreateRecordingPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计划名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间模板ID
         * @type {string || null}
         */
        this.TimeTemplateId = null;

        /**
         * 该录制计划绑定的通道列表
         * @type {Array.<ChannelItem> || null}
         */
        this.Channels = null;

        /**
         * 存储周期(天)；默认存储30天
         * @type {number || null}
         */
        this.RecordStorageTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TimeTemplateId = 'TimeTemplateId' in params ? params.TimeTemplateId : null;

        if (params.Channels) {
            this.Channels = new Array();
            for (let z in params.Channels) {
                let obj = new ChannelItem();
                obj.deserialize(params.Channels[z]);
                this.Channels.push(obj);
            }
        }
        this.RecordStorageTime = 'RecordStorageTime' in params ? params.RecordStorageTime : null;

    }
}

/**
 * DescribeLiveStream返回参数结构体
 * @class
 */
class DescribeLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流地址，只有在推流情况下才有
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamAddress || null}
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
            let obj = new StreamAddress();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribePresetListRequest: DescribePresetListRequest,
    ControlRecordStreamRequest: ControlRecordStreamRequest,
    CreateRecordingPlanResponse: CreateRecordingPlanResponse,
    ModifySubscriptionStatusRequest: ModifySubscriptionStatusRequest,
    CreateSceneResponse: CreateSceneResponse,
    DeleteTimeTemplateResponse: DeleteTimeTemplateResponse,
    DescribeMonitorDataByDateRequest: DescribeMonitorDataByDateRequest,
    ModifyLiveChannelResponse: ModifyLiveChannelResponse,
    ServerConfiguration: ServerConfiguration,
    DescribeLiveVideoListRequest: DescribeLiveVideoListRequest,
    GetRecordPlanByDevRequest: GetRecordPlanByDevRequest,
    GetRecordDatesByDevResponse: GetRecordDatesByDevResponse,
    ControlChannelPTZResponse: ControlChannelPTZResponse,
    DescribeChannelsRequest: DescribeChannelsRequest,
    DescribeLiveChannelRequest: DescribeLiveChannelRequest,
    DescribeRecordDatesByChannelResponse: DescribeRecordDatesByChannelResponse,
    DescribeRecordDatesByChannelRequest: DescribeRecordDatesByChannelRequest,
    DescribeVideoListByChannelRequest: DescribeVideoListByChannelRequest,
    ModifyPresetResponse: ModifyPresetResponse,
    DescribeGroupByPathResponse: DescribeGroupByPathResponse,
    DescribeAbnormalEventsRequest: DescribeAbnormalEventsRequest,
    ModifyPresetRequest: ModifyPresetRequest,
    DescribeSubscriptionStatusResponse: DescribeSubscriptionStatusResponse,
    DescribeScenesResponse: DescribeScenesResponse,
    DeleteRecordingPlanRequest: DeleteRecordingPlanRequest,
    DescribeBindSceneChannelsResponse: DescribeBindSceneChannelsResponse,
    DescribeSIPServerRequest: DescribeSIPServerRequest,
    DescribeVideoListByChannelResponse: DescribeVideoListByChannelResponse,
    CreateLiveRecordPlanResponse: CreateLiveRecordPlanResponse,
    GetRecordPlansRequest: GetRecordPlansRequest,
    DeviceItem: DeviceItem,
    DeleteDeviceGroupResponse: DeleteDeviceGroupResponse,
    DescribeWarningsResponse: DescribeWarningsResponse,
    DeleteRecordPlanResponse: DeleteRecordPlanResponse,
    DeleteMessageForwardResponse: DeleteMessageForwardResponse,
    GetTimeTemplatesRequest: GetTimeTemplatesRequest,
    UpdateDeviceGroupResponse: UpdateDeviceGroupResponse,
    ModifyRecordingPlanRequest: ModifyRecordingPlanRequest,
    DescribeDeviceEventRequest: DescribeDeviceEventRequest,
    GetVideoListByConRequest: GetVideoListByConRequest,
    ResetWarningRequest: ResetWarningRequest,
    DescribeDeviceMonitorDataResponse: DescribeDeviceMonitorDataResponse,
    DevGroupInfo: DevGroupInfo,
    DescribeDeviceListRequest: DescribeDeviceListRequest,
    DescribeRecordingPlansResponse: DescribeRecordingPlansResponse,
    ControlHomePositionResponse: ControlHomePositionResponse,
    DescribeLiveRecordPlanByIdRequest: DescribeLiveRecordPlanByIdRequest,
    LiveRecordPlanItem: LiveRecordPlanItem,
    DescribeVideoListResponse: DescribeVideoListResponse,
    RecordPlanDetail: RecordPlanDetail,
    RecordTaskItem: RecordTaskItem,
    ChannelItem: ChannelItem,
    DescribeIPCChannelsRequest: DescribeIPCChannelsRequest,
    DescribeSubGroupsRequest: DescribeSubGroupsRequest,
    UpdateTimeTemplateRequest: UpdateTimeTemplateRequest,
    DeleteRecordPlanRequest: DeleteRecordPlanRequest,
    CreateDeviceGroupResponse: CreateDeviceGroupResponse,
    GetVideoListByConResponse: GetVideoListByConResponse,
    DescribeCurrentDeviceDataRequest: DescribeCurrentDeviceDataRequest,
    LiveRecordItem: LiveRecordItem,
    DescribeIPCChannelsResponse: DescribeIPCChannelsResponse,
    UpdateRecordPlanRequest: UpdateRecordPlanRequest,
    DescribeRecordingPlanByIdRequest: DescribeRecordingPlanByIdRequest,
    ModifyDeviceDataResponse: ModifyDeviceDataResponse,
    DescribeStatisticDetailsResponse: DescribeStatisticDetailsResponse,
    DescribeWarnModResponse: DescribeWarnModResponse,
    GroupDeviceItem: GroupDeviceItem,
    DescribeSubGroupsResponse: DescribeSubGroupsResponse,
    DescribeChannelStreamURLResponse: DescribeChannelStreamURLResponse,
    DescribeStatisticDetailsRequest: DescribeStatisticDetailsRequest,
    DeleteDeviceRequest: DeleteDeviceRequest,
    UpdateDevicePassWordRequest: UpdateDevicePassWordRequest,
    DescribeMessageForwardRequest: DescribeMessageForwardRequest,
    CreateTimeTemplateRequest: CreateTimeTemplateRequest,
    ModifyBindSceneChannelsResponse: ModifyBindSceneChannelsResponse,
    CreateMessageForwardRequest: CreateMessageForwardRequest,
    GroupItem: GroupItem,
    DeleteWarningRequest: DeleteWarningRequest,
    ModifyBindPlanLiveChannelRequest: ModifyBindPlanLiveChannelRequest,
    DescribeLiveStreamRequest: DescribeLiveStreamRequest,
    ModifyMessageForwardRequest: ModifyMessageForwardRequest,
    ModifyLiveRecordPlanResponse: ModifyLiveRecordPlanResponse,
    DescribeXP2PDataResponse: DescribeXP2PDataResponse,
    DescribeDeviceEventResponse: DescribeDeviceEventResponse,
    RecordStatisticValue: RecordStatisticValue,
    ModifySceneRequest: ModifySceneRequest,
    DescribeAllDeviceListRequest: DescribeAllDeviceListRequest,
    DescribeRecordDatesByLiveRequest: DescribeRecordDatesByLiveRequest,
    DescribeDevicePassWordRequest: DescribeDevicePassWordRequest,
    GetRecordPlanByIdRequest: GetRecordPlanByIdRequest,
    ModifyRecordingPlanResponse: ModifyRecordingPlanResponse,
    DescribeLiveChannelListRequest: DescribeLiveChannelListRequest,
    GetRecordPlanByDevResponse: GetRecordPlanByDevResponse,
    DeleteVideoListRequest: DeleteVideoListRequest,
    GroupInfo: GroupInfo,
    ControlPresetRequest: ControlPresetRequest,
    CreateRecordPlanRequest: CreateRecordPlanRequest,
    DescribeRecordStreamData: DescribeRecordStreamData,
    DeleteRecordingPlanResponse: DeleteRecordingPlanResponse,
    CreateDeviceGroupRequest: CreateDeviceGroupRequest,
    SceneItem: SceneItem,
    ModifyBindSceneChannelsRequest: ModifyBindSceneChannelsRequest,
    DescribeLiveRecordPlanIdsResponse: DescribeLiveRecordPlanIdsResponse,
    ModifyBindSceneDeviceRequest: ModifyBindSceneDeviceRequest,
    CreateDeviceResponse: CreateDeviceResponse,
    CreateDeviceRequest: CreateDeviceRequest,
    WarningsData: WarningsData,
    DescribeStatisticSummaryResponse: DescribeStatisticSummaryResponse,
    ModifyBindPlanLiveChannelResponse: ModifyBindPlanLiveChannelResponse,
    DescribeRecordStreamRequest: DescribeRecordStreamRequest,
    PresetItem: PresetItem,
    BindGroupDevicesRequest: BindGroupDevicesRequest,
    ControlHomePositionRequest: ControlHomePositionRequest,
    ModifyLiveRecordPlanRequest: ModifyLiveRecordPlanRequest,
    DescribeSceneResponse: DescribeSceneResponse,
    DescribeDeviceResponse: DescribeDeviceResponse,
    GetTimeTemplateByIdResponse: GetTimeTemplateByIdResponse,
    DescribeLiveChannelResponse: DescribeLiveChannelResponse,
    DescribeChannelsResponse: DescribeChannelsResponse,
    DeviceMonitorValue: DeviceMonitorValue,
    DescribeMessageForwardsRequest: DescribeMessageForwardsRequest,
    ControlDevicePTZResponse: ControlDevicePTZResponse,
    DescribeRecordingPlansRequest: DescribeRecordingPlansRequest,
    TimeTemplateSpec: TimeTemplateSpec,
    ControlDevicePTZRequest: ControlDevicePTZRequest,
    UpdateDeviceGroupRequest: UpdateDeviceGroupRequest,
    DescribeChannelsByLiveRecordPlanResponse: DescribeChannelsByLiveRecordPlanResponse,
    DescribeGroupDevicesRequest: DescribeGroupDevicesRequest,
    DescribeGroupByIdRequest: DescribeGroupByIdRequest,
    Events: Events,
    UpdateDevicePassWordResponse: UpdateDevicePassWordResponse,
    DescribeLiveRecordPlanByIdResponse: DescribeLiveRecordPlanByIdResponse,
    DeleteChannelRequest: DeleteChannelRequest,
    DescribeXP2PDataRequest: DescribeXP2PDataRequest,
    UpdateTimeTemplateResponse: UpdateTimeTemplateResponse,
    DescribeSubscriptionStatusRequest: DescribeSubscriptionStatusRequest,
    DescribeDeviceStreamsRequest: DescribeDeviceStreamsRequest,
    DescribeRecordStreamResponse: DescribeRecordStreamResponse,
    CreateRecordPlanResponse: CreateRecordPlanResponse,
    DescribeWarningsRequest: DescribeWarningsRequest,
    CreateSceneRequest: CreateSceneRequest,
    AllDeviceInfo: AllDeviceInfo,
    DescribeAbnormalEventsResponse: DescribeAbnormalEventsResponse,
    DescribeDeviceStreamsResponse: DescribeDeviceStreamsResponse,
    DescribeLiveVideoListResponse: DescribeLiveVideoListResponse,
    DeleteDeviceGroupRequest: DeleteDeviceGroupRequest,
    DescribeSceneRequest: DescribeSceneRequest,
    DescribeDeviceRequest: DescribeDeviceRequest,
    ControlPresetResponse: ControlPresetResponse,
    DescribeDeviceGroupResponse: DescribeDeviceGroupResponse,
    DeleteChannelResponse: DeleteChannelResponse,
    ModifySubscriptionStatusResponse: ModifySubscriptionStatusResponse,
    MessageForward: MessageForward,
    ResetWarningResponse: ResetWarningResponse,
    ModifyDeviceDataRequest: ModifyDeviceDataRequest,
    DeleteSceneResponse: DeleteSceneResponse,
    GetRecordDatesByDevRequest: GetRecordDatesByDevRequest,
    DescribeLiveChannelListResponse: DescribeLiveChannelListResponse,
    GetTimeTemplatesResponse: GetTimeTemplatesResponse,
    CreateLiveChannelResponse: CreateLiveChannelResponse,
    DeleteVideoListResponse: DeleteVideoListResponse,
    ModifyLiveVideoResponse: ModifyLiveVideoResponse,
    DescribeChannelStreamURLRequest: DescribeChannelStreamURLRequest,
    DescribeAllDeviceListResponse: DescribeAllDeviceListResponse,
    DescribeStatisticSummaryRequest: DescribeStatisticSummaryRequest,
    DescribeGroupsResponse: DescribeGroupsResponse,
    ChannelDetail: ChannelDetail,
    DescribeChannelLiveStreamURLResponse: DescribeChannelLiveStreamURLResponse,
    DescribeDeviceStreamsData: DescribeDeviceStreamsData,
    DeleteLiveRecordPlanRequest: DeleteLiveRecordPlanRequest,
    ModifyBindRecordingPlanRequest: ModifyBindRecordingPlanRequest,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeleteLiveVideoListResponse: DeleteLiveVideoListResponse,
    DescribeDeviceMonitorDataRequest: DescribeDeviceMonitorDataRequest,
    CreateTimeTemplateResponse: CreateTimeTemplateResponse,
    DeleteLiveChannelRequest: DeleteLiveChannelRequest,
    StatisticItem: StatisticItem,
    DescribeChannelLiveStreamURLRequest: DescribeChannelLiveStreamURLRequest,
    DescribeSIPServerResponse: DescribeSIPServerResponse,
    DescribeGroupByPathRequest: DescribeGroupByPathRequest,
    DescribeRecordDatesByLiveResponse: DescribeRecordDatesByLiveResponse,
    UpdateRecordPlanResponse: UpdateRecordPlanResponse,
    ModifyBindSceneDeviceResponse: ModifyBindSceneDeviceResponse,
    AbnormalEventsInfo: AbnormalEventsInfo,
    TimeTemplateItem: TimeTemplateItem,
    AbnormalEvents: AbnormalEvents,
    DescribeDeviceGroupRequest: DescribeDeviceGroupRequest,
    LiveChannelInfo: LiveChannelInfo,
    LiveChannelItem: LiveChannelItem,
    DescribeGroupsRequest: DescribeGroupsRequest,
    ControlChannelPTZRequest: ControlChannelPTZRequest,
    GetRecordPlansResponse: GetRecordPlansResponse,
    DescribeChannelsByLiveRecordPlanRequest: DescribeChannelsByLiveRecordPlanRequest,
    ControlChannelLocalRecordRequest: ControlChannelLocalRecordRequest,
    ControlChannelLocalRecordResponse: ControlChannelLocalRecordResponse,
    GetTimeTemplateByIdRequest: GetTimeTemplateByIdRequest,
    RecordPlanItem: RecordPlanItem,
    DescribeMessageForwardsResponse: DescribeMessageForwardsResponse,
    ModifyVideoInfoRequest: ModifyVideoInfoRequest,
    DescribeCurrentDeviceDataResponse: DescribeCurrentDeviceDataResponse,
    GetRecordPlanByIdResponse: GetRecordPlanByIdResponse,
    DeleteTimeTemplateRequest: DeleteTimeTemplateRequest,
    DeleteWarningResponse: DeleteWarningResponse,
    ModifyLiveChannelRequest: ModifyLiveChannelRequest,
    DescribeMessageForwardResponse: DescribeMessageForwardResponse,
    DescribeRecordingPlanByIdResponse: DescribeRecordingPlanByIdResponse,
    DescribeWarnModRequest: DescribeWarnModRequest,
    ModifyBindRecordingPlanResponse: ModifyBindRecordingPlanResponse,
    DescribeLiveRecordPlanIdsRequest: DescribeLiveRecordPlanIdsRequest,
    DeleteLiveVideoListRequest: DeleteLiveVideoListRequest,
    ModifyVideoInfoResponse: ModifyVideoInfoResponse,
    ModifyMessageForwardResponse: ModifyMessageForwardResponse,
    DescribeDeviceListResponse: DescribeDeviceListResponse,
    DescribeScenesRequest: DescribeScenesRequest,
    DeleteLiveRecordPlanResponse: DeleteLiveRecordPlanResponse,
    DescribeBindSceneChannelsRequest: DescribeBindSceneChannelsRequest,
    DescribePresetListResponse: DescribePresetListResponse,
    DescribeGroupByIdResponse: DescribeGroupByIdResponse,
    ControlRecordStreamResponse: ControlRecordStreamResponse,
    DeleteMessageForwardRequest: DeleteMessageForwardRequest,
    DeleteLiveChannelResponse: DeleteLiveChannelResponse,
    StreamAddress: StreamAddress,
    BindGroupDevicesResponse: BindGroupDevicesResponse,
    DescribeChannelLocalRecordURLResponse: DescribeChannelLocalRecordURLResponse,
    RecordStatistic: RecordStatistic,
    DescribeVideoListRequest: DescribeVideoListRequest,
    CreateLiveRecordPlanRequest: CreateLiveRecordPlanRequest,
    DescribeDevicePassWordResponse: DescribeDevicePassWordResponse,
    ModifySceneResponse: ModifySceneResponse,
    DescribeBindSceneDevicesRequest: DescribeBindSceneDevicesRequest,
    DescribeBindSceneDevicesResponse: DescribeBindSceneDevicesResponse,
    DescribeMonitorDataByDateResponse: DescribeMonitorDataByDateResponse,
    ModifyLiveVideoRequest: ModifyLiveVideoRequest,
    DescribeChannelLocalRecordURLRequest: DescribeChannelLocalRecordURLRequest,
    CreateMessageForwardResponse: CreateMessageForwardResponse,
    CreateLiveChannelRequest: CreateLiveChannelRequest,
    DescribeGroupDevicesResponse: DescribeGroupDevicesResponse,
    DeleteSceneRequest: DeleteSceneRequest,
    CreateRecordingPlanRequest: CreateRecordingPlanRequest,
    DescribeLiveStreamResponse: DescribeLiveStreamResponse,

}
