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
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制量，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 0：查询指定日期的录像；1：查询最近一天的录像；默认0
         * @type {number || null}
         */
        this.LatestDay = null;

        /**
         * 指定某天。取值【YYYY-MM-DD】
当LatestDay为空或为0时，本参数不允许为空。
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.LatestDay = 'LatestDay' in params ? params.LatestDay : null;
        this.Date = 'Date' in params ? params.Date : null;

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
         * 设备虚拟组信息，仅在创建NVR/VMS时返回该值
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
         * 设备类型 2:国标IPC设备; 3:NVR设备
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
         * 流失效时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 录像文件Id
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 录像流开始时间，当录像文件Id为空时有效
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 录像流结束时间，当录像文件Id为空时有效
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
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制量，默认200
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
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 是否全时录制，即7*24小时录制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAllWeek = null;

        /**
         * 是否为自定义模板
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
 * DescribeVideoList请求参数结构体
 * @class
 */
class DescribeVideoListRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

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
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果
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

module.exports = {
    DeleteTimeTemplateResponse: DeleteTimeTemplateResponse,
    GetTimeTemplatesRequest: GetTimeTemplatesRequest,
    ServerConfiguration: ServerConfiguration,
    GetRecordPlanByDevRequest: GetRecordPlanByDevRequest,
    GetRecordDatesByDevResponse: GetRecordDatesByDevResponse,
    DescribeDeviceStreamsResponse: DescribeDeviceStreamsResponse,
    DescribeSIPServerRequest: DescribeSIPServerRequest,
    GetRecordPlanByIdRequest: GetRecordPlanByIdRequest,
    GetRecordPlansRequest: GetRecordPlansRequest,
    DeviceItem: DeviceItem,
    DeleteDeviceGroupResponse: DeleteDeviceGroupResponse,
    DeleteRecordPlanResponse: DeleteRecordPlanResponse,
    UpdateDeviceGroupResponse: UpdateDeviceGroupResponse,
    GetVideoListByConRequest: GetVideoListByConRequest,
    DevGroupInfo: DevGroupInfo,
    DescribeSubGroupsRequest: DescribeSubGroupsRequest,
    DeleteRecordPlanRequest: DeleteRecordPlanRequest,
    CreateDeviceGroupResponse: CreateDeviceGroupResponse,
    GetVideoListByConResponse: GetVideoListByConResponse,
    DescribeStatisticDetailsResponse: DescribeStatisticDetailsResponse,
    GroupDeviceItem: GroupDeviceItem,
    DescribeStatisticSummaryRequest: DescribeStatisticSummaryRequest,
    GetRecordPlanByIdResponse: GetRecordPlanByIdResponse,
    DeleteDeviceRequest: DeleteDeviceRequest,
    UpdateDevicePassWordRequest: UpdateDevicePassWordRequest,
    CreateTimeTemplateRequest: CreateTimeTemplateRequest,
    DescribeAllDeviceListRequest: DescribeAllDeviceListRequest,
    DescribeDevicePassWordRequest: DescribeDevicePassWordRequest,
    RecordTaskItem: RecordTaskItem,
    GetRecordPlanByDevResponse: GetRecordPlanByDevResponse,
    UpdateRecordPlanRequest: UpdateRecordPlanRequest,
    GroupInfo: GroupInfo,
    DescribeStatisticDetailsRequest: DescribeStatisticDetailsRequest,
    CreateRecordPlanRequest: CreateRecordPlanRequest,
    DescribeRecordStreamData: DescribeRecordStreamData,
    CreateDeviceGroupRequest: CreateDeviceGroupRequest,
    UpdateTimeTemplateRequest: UpdateTimeTemplateRequest,
    CreateDeviceResponse: CreateDeviceResponse,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeStatisticSummaryResponse: DescribeStatisticSummaryResponse,
    DescribeRecordStreamRequest: DescribeRecordStreamRequest,
    GetTimeTemplateByIdResponse: GetTimeTemplateByIdResponse,
    ControlDevicePTZResponse: ControlDevicePTZResponse,
    TimeTemplateSpec: TimeTemplateSpec,
    ControlDevicePTZRequest: ControlDevicePTZRequest,
    UpdateDeviceGroupRequest: UpdateDeviceGroupRequest,
    DescribeGroupDevicesRequest: DescribeGroupDevicesRequest,
    DescribeGroupByIdRequest: DescribeGroupByIdRequest,
    UpdateDevicePassWordResponse: UpdateDevicePassWordResponse,
    DescribeDeviceStreamsRequest: DescribeDeviceStreamsRequest,
    DescribeRecordStreamResponse: DescribeRecordStreamResponse,
    CreateRecordPlanResponse: CreateRecordPlanResponse,
    AllDeviceInfo: AllDeviceInfo,
    DeleteDeviceGroupRequest: DeleteDeviceGroupRequest,
    DescribeDeviceGroupResponse: DescribeDeviceGroupResponse,
    ModifyDeviceDataRequest: ModifyDeviceDataRequest,
    GetRecordDatesByDevRequest: GetRecordDatesByDevRequest,
    GetTimeTemplatesResponse: GetTimeTemplatesResponse,
    DescribeDevicePassWordResponse: DescribeDevicePassWordResponse,
    UpdateTimeTemplateResponse: UpdateTimeTemplateResponse,
    DescribeAllDeviceListResponse: DescribeAllDeviceListResponse,
    DescribeSubGroupsResponse: DescribeSubGroupsResponse,
    DescribeGroupsResponse: DescribeGroupsResponse,
    DescribeDeviceStreamsData: DescribeDeviceStreamsData,
    BindGroupDevicesRequest: BindGroupDevicesRequest,
    CreateTimeTemplateResponse: CreateTimeTemplateResponse,
    StatisticItem: StatisticItem,
    DescribeSIPServerResponse: DescribeSIPServerResponse,
    DescribeGroupByPathRequest: DescribeGroupByPathRequest,
    UpdateRecordPlanResponse: UpdateRecordPlanResponse,
    TimeTemplateItem: TimeTemplateItem,
    DescribeDeviceGroupRequest: DescribeDeviceGroupRequest,
    RecordPlanItem: RecordPlanItem,
    DescribeGroupsRequest: DescribeGroupsRequest,
    GetRecordPlansResponse: GetRecordPlansResponse,
    DescribeGroupByIdResponse: DescribeGroupByIdResponse,
    GetTimeTemplateByIdRequest: GetTimeTemplateByIdRequest,
    GroupItem: GroupItem,
    DeleteTimeTemplateRequest: DeleteTimeTemplateRequest,
    DescribeVideoListResponse: DescribeVideoListResponse,
    BindGroupDevicesResponse: BindGroupDevicesResponse,
    DescribeVideoListRequest: DescribeVideoListRequest,
    ModifyDeviceDataResponse: ModifyDeviceDataResponse,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DescribeGroupByPathResponse: DescribeGroupByPathResponse,
    DescribeGroupDevicesResponse: DescribeGroupDevicesResponse,

}
