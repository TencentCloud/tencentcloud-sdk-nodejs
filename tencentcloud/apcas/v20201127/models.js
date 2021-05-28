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
 * UploadId返回参数结构体
 * @class
 */
class UploadIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画像洞察任务ID等信息
         * @type {TaskData || null}
         */
        this.TaskData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskData) {
            let obj = new TaskData();
            obj.deserialize(params.TaskData)
            this.TaskData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCallDetails请求参数结构体
 * @class
 */
class QueryCallDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型 1:人群特征洞察统计 2:购车意向预测统计
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 开始时间戳（毫秒）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳（毫秒）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页个数
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
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 调用量统计信息，包括周/日/月/总调用量
 * @class
 */
class GeneralStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 今日调用量
         * @type {number || null}
         */
        this.TodayAmount = null;

        /**
         * 本周调用量
         * @type {number || null}
         */
        this.WeekAmount = null;

        /**
         * 本月调用量
         * @type {number || null}
         */
        this.MonthAmount = null;

        /**
         * 总调用量
         * @type {number || null}
         */
        this.TotalAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TodayAmount = 'TodayAmount' in params ? params.TodayAmount : null;
        this.WeekAmount = 'WeekAmount' in params ? params.WeekAmount : null;
        this.MonthAmount = 'MonthAmount' in params ? params.MonthAmount : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;

    }
}

/**
 * 标签数据
 * @class
 */
class LabelValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签覆盖率占比（在整个上传的ID列表中的覆盖率）
         * @type {number || null}
         */
        this.Proportion = null;

        /**
         * 标签大盘覆盖率占比
         * @type {number || null}
         */
        this.Market = null;

        /**
         * TGI指数，由Proportion除以Market得到
         * @type {number || null}
         */
        this.Tgi = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proportion = 'Proportion' in params ? params.Proportion : null;
        this.Market = 'Market' in params ? params.Market : null;
        this.Tgi = 'Tgi' in params ? params.Tgi : null;

    }
}

/**
 * GetTaskDetail返回参数结构体
 * @class
 */
class GetTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画像洞察任务TAG详细数据列表
         * @type {Array.<TaskDetailData> || null}
         */
        this.TaskDetailDataList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskDetailDataList) {
            this.TaskDetailDataList = new Array();
            for (let z in params.TaskDetailDataList) {
                let obj = new TaskDetailData();
                obj.deserialize(params.TaskDetailDataList[z]);
                this.TaskDetailDataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCallDetails返回参数结构体
 * @class
 */
class QueryCallDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用明细
         * @type {CallDetails || null}
         */
        this.CallDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CallDetails) {
            let obj = new CallDetails();
            obj.deserialize(params.CallDetails)
            this.CallDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadId请求参数结构体
 * @class
 */
class UploadIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * id标志的类型: 0:imei 7:IDFA 8:MD5(imei)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * ID列表（ID间使用换行符分割、然后使用Base64编码）
         * @type {string || null}
         */
        this.IdListBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.IdListBase64 = 'IdListBase64' in params ? params.IdListBase64 : null;

    }
}

/**
 * 画像标签详情数据对象
 * @class
 */
class LabelDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签数据对象
         * @type {LabelValue || null}
         */
        this.Value = null;

        /**
         * 标签表述，如"汽车资讯"、"游戏#手游"等
         * @type {string || null}
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

        if (params.Value) {
            let obj = new LabelValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * QueryGeneralStat返回参数结构体
 * @class
 */
class QueryGeneralStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用量信息
         * @type {GeneralStat || null}
         */
        this.GeneralStat = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GeneralStat) {
            let obj = new GeneralStat();
            obj.deserialize(params.GeneralStat)
            this.GeneralStat = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PredictRating请求参数结构体
 * @class
 */
class PredictRatingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID标志的类型，0:IMEI 7:IDFA 8:MD5(imei) 100: 手机号明文 101: 手机号md5加密
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 请求唯一标志ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * GetTaskList返回参数结构体
 * @class
 */
class GetTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表对象
         * @type {TaskListData || null}
         */
        this.TaskListData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskListData) {
            let obj = new TaskListData();
            obj.deserialize(params.TaskListData)
            this.TaskListData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 调用量统计item
 * @class
 */
class CallStatItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前统计量的时间段
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 当前时间段的调用量
         * @type {number || null}
         */
        this.Amount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Amount = 'Amount' in params ? params.Amount : null;

    }
}

/**
 * 调用明细结构体
 * @class
 */
class CallDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据类型 0 imei 1 qimei 2 qq 3 phone 7:IDFA 8:MD5(imei)
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * 有效数据量
         * @type {number || null}
         */
        this.ValidAmount = null;

        /**
         * 调用时间
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
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.ValidAmount = 'ValidAmount' in params ? params.ValidAmount : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * GetTaskList请求参数结构体
 * @class
 */
class GetTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询分页页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 查询分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询起始时间（13位数字的UNIX时间戳，单位毫秒 ）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间（13位数字的UNIX时间戳，单位毫秒 ）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 查询任务状态 0:默认状态 1:任务正在运行 2:任务运行成功 3:任务运行失败
         * @type {number || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * 任务列表对象
 * @class
 */
class TaskListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询分页页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 查询分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 任务列表总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务列表
         * @type {Array.<ListModel> || null}
         */
        this.TaskList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new ListModel();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }

    }
}

/**
 * GetTaskDetail请求参数结构体
 * @class
 */
class GetTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 调用明细返回数据体
 * @class
 */
class CallDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 调用明细数组
         * @type {Array.<CallDetailItem> || null}
         */
        this.CallDetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.CallDetailSet) {
            this.CallDetailSet = new Array();
            for (let z in params.CallDetailSet) {
                let obj = new CallDetailItem();
                obj.deserialize(params.CallDetailSet[z]);
                this.CallDetailSet.push(obj);
            }
        }

    }
}

/**
 * 画像任务详情对象
 * @class
 */
class TaskDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画像TAG ID
         * @type {number || null}
         */
        this.TagId = null;

        /**
         * 画像TAG描述（如“省份分布”）
         * @type {string || null}
         */
        this.TagDesc = null;

        /**
         * 画像Label对象列表（一个TAG对于N个Label，例如“省份分布”TAG对应“广东省”、“浙江省”等多个Label）
         * @type {Array.<LabelDetailData> || null}
         */
        this.LabelDetailDataList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.TagDesc = 'TagDesc' in params ? params.TagDesc : null;

        if (params.LabelDetailDataList) {
            this.LabelDetailDataList = new Array();
            for (let z in params.LabelDetailDataList) {
                let obj = new LabelDetailData();
                obj.deserialize(params.LabelDetailDataList[z]);
                this.LabelDetailDataList.push(obj);
            }
        }

    }
}

/**
 * 返回购车意向评级
 * @class
 */
class RatingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线索评级（取值：0、1、2、3分别代表无、低、中、高意愿）
         * @type {number || null}
         */
        this.Rank = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rank = 'Rank' in params ? params.Rank : null;

    }
}

/**
 * QueryCallStat返回参数结构体
 * @class
 */
class QueryCallStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用量数组
         * @type {Array.<CallStatItem> || null}
         */
        this.CallSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CallSet) {
            this.CallSet = new Array();
            for (let z in params.CallSet) {
                let obj = new CallStatItem();
                obj.deserialize(params.CallSet[z]);
                this.CallSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCallStat请求参数结构体
 * @class
 */
class QueryCallStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型 1:人群特征洞察统计 2:购车意向预测统计
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 开始时间戳（毫秒）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳（毫秒）
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
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 任务列表项Model
 * @class
 */
class ListModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务起始时间（13位数字的UNIX 时间戳，单位毫秒 ）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 任务状态 0:默认状态 1:任务正在运行 2:任务运行成功 3:任务运行失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 画像覆盖人数
         * @type {number || null}
         */
        this.Available = null;

        /**
         * 任务失败描述信息
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * 任务ID信息
 * @class
 */
class TaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画像洞察任务ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * QueryGeneralStat请求参数结构体
 * @class
 */
class QueryGeneralStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型:1,人群特征洞察统计 2购车意向预测统计
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * PredictRating返回参数结构体
 * @class
 */
class PredictRatingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意向评级
         * @type {RatingData || null}
         */
        this.RatingData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RatingData) {
            let obj = new RatingData();
            obj.deserialize(params.RatingData)
            this.RatingData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UploadIdResponse: UploadIdResponse,
    QueryCallDetailsRequest: QueryCallDetailsRequest,
    GeneralStat: GeneralStat,
    LabelValue: LabelValue,
    GetTaskDetailResponse: GetTaskDetailResponse,
    QueryCallDetailsResponse: QueryCallDetailsResponse,
    UploadIdRequest: UploadIdRequest,
    LabelDetailData: LabelDetailData,
    QueryGeneralStatResponse: QueryGeneralStatResponse,
    PredictRatingRequest: PredictRatingRequest,
    GetTaskListResponse: GetTaskListResponse,
    CallStatItem: CallStatItem,
    CallDetailItem: CallDetailItem,
    GetTaskListRequest: GetTaskListRequest,
    TaskListData: TaskListData,
    GetTaskDetailRequest: GetTaskDetailRequest,
    CallDetails: CallDetails,
    TaskDetailData: TaskDetailData,
    RatingData: RatingData,
    QueryCallStatResponse: QueryCallStatResponse,
    QueryCallStatRequest: QueryCallStatRequest,
    ListModel: ListModel,
    TaskData: TaskData,
    QueryGeneralStatRequest: QueryGeneralStatRequest,
    PredictRatingResponse: PredictRatingResponse,

}
