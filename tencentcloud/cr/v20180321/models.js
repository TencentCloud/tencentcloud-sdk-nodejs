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
 * QueryCallList请求参数结构体
 * @class
 */
class QueryCallListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：QueryCallList
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 业务日期
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 通过API或平台上传的文件完整名称
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * CreateBotTask请求参数结构体
 * @class
 */
class CreateBotTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：CreateTask
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 对话流ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 是否禁止拨打，默认Y
         * @type {string || null}
         */
        this.BanCall = null;

        /**
         * 拨打线路集合
         * @type {string || null}
         */
        this.PhoneCollection = null;

        /**
         * 产品拨打时间集合
         * @type {CallTimeDict || null}
         */
        this.CallTimeCollection = null;

        /**
         * 禁止拨打起始时间。默认130000
         * @type {string || null}
         */
        this.StartTimeBan = null;

        /**
         * 禁止拨打结束时间。默认140000
         * @type {string || null}
         */
        this.EndTimeBan = null;

        /**
         * 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G
         * @type {string || null}
         */
        this.CodeCollection = null;

        /**
         * 继续拨打次数
         * @type {number || null}
         */
        this.CallCount = null;

        /**
         * 拨打间隔
         * @type {number || null}
         */
        this.CallInterval = null;

        /**
         * 未接通引用短信签名ID
         * @type {string || null}
         */
        this.SmsSignId = null;

        /**
         * 未接通引用短信模板ID
         * @type {string || null}
         */
        this.SmsTemplateId = null;

        /**
         * 拨打方式。NORMAL - 正常拨打；TIMER - 定时拨打
         * @type {string || null}
         */
        this.CallType = null;

        /**
         * 拨打开始日期。CallType=TIMER时有值，yyyy-MM-dd
         * @type {string || null}
         */
        this.CallStartDate = null;

        /**
         * 拨打结束日期。CallType=PERIOD 时有值，yyyy-MM-dd
         * @type {string || null}
         */
        this.CallEndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.BanCall = 'BanCall' in params ? params.BanCall : null;
        this.PhoneCollection = 'PhoneCollection' in params ? params.PhoneCollection : null;

        if (params.CallTimeCollection) {
            let obj = new CallTimeDict();
            obj.deserialize(params.CallTimeCollection)
            this.CallTimeCollection = obj;
        }
        this.StartTimeBan = 'StartTimeBan' in params ? params.StartTimeBan : null;
        this.EndTimeBan = 'EndTimeBan' in params ? params.EndTimeBan : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.CodeCollection = 'CodeCollection' in params ? params.CodeCollection : null;
        this.CallCount = 'CallCount' in params ? params.CallCount : null;
        this.CallInterval = 'CallInterval' in params ? params.CallInterval : null;
        this.SmsSignId = 'SmsSignId' in params ? params.SmsSignId : null;
        this.SmsTemplateId = 'SmsTemplateId' in params ? params.SmsTemplateId : null;
        this.CallType = 'CallType' in params ? params.CallType : null;
        this.CallStartDate = 'CallStartDate' in params ? params.CallStartDate : null;
        this.CallEndDate = 'CallEndDate' in params ? params.CallEndDate : null;

    }
}

/**
 * ChangeBotTaskStatus返回参数结构体
 * @class
 */
class ChangeBotTaskStatusResponse extends  AbstractModel {
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
 * UploadFile请求参数结构体
 * @class
 */
class UploadFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件日期
         * @type {string || null}
         */
        this.FileDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileDate = 'FileDate' in params ? params.FileDate : null;

    }
}

/**
 * 机器人对话流信息
 * @class
 */
class BotFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对话流ID
         * @type {string || null}
         */
        this.BotFlowId = null;

        /**
         * 对话流名称
         * @type {string || null}
         */
        this.BotFlowName = null;

        /**
         * 号码组信息列表
         * @type {Array.<PhonePool> || null}
         */
        this.PhonePoolList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotFlowId = 'BotFlowId' in params ? params.BotFlowId : null;
        this.BotFlowName = 'BotFlowName' in params ? params.BotFlowName : null;

        if (params.PhonePoolList) {
            this.PhonePoolList = new Array();
            for (let z in params.PhonePoolList) {
                let obj = new PhonePool();
                obj.deserialize(params.PhonePoolList[z]);
                this.PhonePoolList.push(obj);
            }
        }

    }
}

/**
 * UploadFile返回参数结构体
 * @class
 */
class UploadFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * UploadDataJson返回参数结构体
 * @class
 */
class UploadDataJsonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应报文信息
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
 * DescribeBotFlow返回参数结构体
 * @class
 */
class DescribeBotFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人对话流列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotFlow> || null}
         */
        this.BotFlowList = null;

        /**
         * 短信签名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SmsSign> || null}
         */
        this.SmsSignList = null;

        /**
         * 短信模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SmsTemplate> || null}
         */
        this.SmsTemplateList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotFlowList) {
            this.BotFlowList = new Array();
            for (let z in params.BotFlowList) {
                let obj = new BotFlow();
                obj.deserialize(params.BotFlowList[z]);
                this.BotFlowList.push(obj);
            }
        }

        if (params.SmsSignList) {
            this.SmsSignList = new Array();
            for (let z in params.SmsSignList) {
                let obj = new SmsSign();
                obj.deserialize(params.SmsSignList[z]);
                this.SmsSignList.push(obj);
            }
        }

        if (params.SmsTemplateList) {
            this.SmsTemplateList = new Array();
            for (let z in params.SmsTemplateList) {
                let obj = new SmsTemplate();
                obj.deserialize(params.SmsTemplateList[z]);
                this.SmsTemplateList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>任务结果：</p><ul style="margin-bottom:0px;"><li>处理中："Uploading Data."</li><li>上传成功："File Uploading Task Success."</li><li>上传失败：具体失败原因</li></ul>
         * @type {string || null}
         */
        this.TaskResult = null;

        /**
         * <p>任务类型：</p><ul style="margin-bottom:0px;"><li>到期/逾期提醒数据上传：002</li><li>到期/逾期提醒停拨数据上传：003</li><li>回访数据上传：004</li><li>回访停拨数据上传：005</li></ul>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 过滤文件下载链接，有过滤数据时才存在。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskFileUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskResult = 'TaskResult' in params ? params.TaskResult : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskFileUrl = 'TaskFileUrl' in params ? params.TaskFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBlackListData请求参数结构体
 * @class
 */
class QueryBlackListDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块:AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作:QueryBlackListData
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始日期
         * @type {string || null}
         */
        this.StartBizDate = null;

        /**
         * 结束日期
         * @type {string || null}
         */
        this.EndBizDate = null;

        /**
         * 电话号码、手机
         * @type {string || null}
         */
        this.BlackValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartBizDate = 'StartBizDate' in params ? params.StartBizDate : null;
        this.EndBizDate = 'EndBizDate' in params ? params.EndBizDate : null;
        this.BlackValue = 'BlackValue' in params ? params.BlackValue : null;

    }
}

/**
 * DownloadBotRecord请求参数结构体
 * @class
 */
class DownloadBotRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作：DownloadRecord
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 业务日期
         * @type {string || null}
         */
        this.BizDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;

    }
}

/**
 * DownloadReport请求参数结构体
 * @class
 */
class DownloadReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Report
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：DownloadReport
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 报告日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.ReportDate = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例。
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ReportDate = 'ReportDate' in params ? params.ReportDate : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * ApplyCreditAudit返回参数结构体
 * @class
 */
class ApplyCreditAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求日期
         * @type {string || null}
         */
        this.RequestDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestDate = 'RequestDate' in params ? params.RequestDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadDataFile返回参数结构体
 * @class
 */
class UploadDataFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {string || null}
         */
        this.DataResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataResId = 'DataResId' in params ? params.DataResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadRecordList请求参数结构体
 * @class
 */
class DownloadRecordListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Record
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：DownloadList
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 录音日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * 作业信息
 * @class
 */
class CallInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务日期
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 状态 WAIT：待执行；DOING：执行中；ERROR：执行错误；DONE：已完成；
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 成功总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型 I：呼叫文件 R：停拨文件
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 作业唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.CallId = 'CallId' in params ? params.CallId : null;

    }
}

/**
 * 机器人文件结构
 * @class
 */
class BotFileData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件类型 A 拨打结果 T 记录详情
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件地址
         * @type {string || null}
         */
        this.CosUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;

    }
}

/**
 * DescribeFileModel请求参数结构体
 * @class
 */
class DescribeFileModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：DescribeFileModel
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 模板文件类型，输入input，停拨stop
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * QueryInstantData返回参数结构体
 * @class
 */
class QueryInstantDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回内容
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品拨打时间集合
 * @class
 */
class CallTimeDict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周一
         * @type {CallTimeInfo || null}
         */
        this.Monday = null;

        /**
         * 周二
         * @type {CallTimeInfo || null}
         */
        this.Tuesday = null;

        /**
         * 周三
         * @type {CallTimeInfo || null}
         */
        this.Wednesday = null;

        /**
         * 周四
         * @type {CallTimeInfo || null}
         */
        this.Thursday = null;

        /**
         * 周五
         * @type {CallTimeInfo || null}
         */
        this.Friday = null;

        /**
         * 周六
         * @type {CallTimeInfo || null}
         */
        this.Saturday = null;

        /**
         * 周日
         * @type {CallTimeInfo || null}
         */
        this.Sunday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Monday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Monday)
            this.Monday = obj;
        }

        if (params.Tuesday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Tuesday)
            this.Tuesday = obj;
        }

        if (params.Wednesday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Wednesday)
            this.Wednesday = obj;
        }

        if (params.Thursday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Thursday)
            this.Thursday = obj;
        }

        if (params.Friday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Friday)
            this.Friday = obj;
        }

        if (params.Saturday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Saturday)
            this.Saturday = obj;
        }

        if (params.Sunday) {
            let obj = new CallTimeInfo();
            obj.deserialize(params.Sunday)
            this.Sunday = obj;
        }

    }
}

/**
 * UploadBotFile返回参数结构体
 * @class
 */
class UploadBotFileResponse extends  AbstractModel {
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
 * QueryBlackListData返回参数结构体
 * @class
 */
class QueryBlackListDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 黑名单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BlackListData> || null}
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
                let obj = new BlackListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品拨打时间信息
 * @class
 */
class CallTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品开始拨打时间，HHmmss格式,默认090000
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 产品结束拨打时间，HHmmss格式.默认200000
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 黑名单申请信息
 * @class
 */
class BlackListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单类型，01代表手机号码。
         * @type {string || null}
         */
        this.BlackType = null;

        /**
         * 操作类型，A为新增，D为删除。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperType = null;

        /**
         * 黑名单值，BlackType为01时，填写11位手机号码。
         * @type {string || null}
         */
        this.BlackValue = null;

        /**
         * 备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlackDescription = null;

        /**
         * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlackValidDate = null;

        /**
         * 黑名单加入日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlackAddDate = null;

        /**
         * 0-生效 1-失效
         * @type {string || null}
         */
        this.BlackStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackType = 'BlackType' in params ? params.BlackType : null;
        this.OperType = 'OperType' in params ? params.OperType : null;
        this.BlackValue = 'BlackValue' in params ? params.BlackValue : null;
        this.BlackDescription = 'BlackDescription' in params ? params.BlackDescription : null;
        this.BlackValidDate = 'BlackValidDate' in params ? params.BlackValidDate : null;
        this.BlackAddDate = 'BlackAddDate' in params ? params.BlackAddDate : null;
        this.BlackStatus = 'BlackStatus' in params ? params.BlackStatus : null;

    }
}

/**
 * DescribeCreditResult返回参数结构体
 * @class
 */
class DescribeCreditResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>呼叫结果，取值范围：</p><ul style="margin-bottom:0px;"><li>NON：接通</li><li>DBU：号码忙</li><li>DRF：不在服务区</li><li>ANA：欠费未接听</li><li>REJ：拒接</li><li>SHU：关机</li><li>NAN：空号</li><li>HAL：停机</li><li>DAD：未接听</li><li>EXE：其他异常</li></ul>
         * @type {string || null}
         */
        this.ResultCode = null;

        /**
         * 客户标识代码，多个标识码以英文逗号分隔，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientCode = null;

        /**
         * 开始振铃时间，ResultCode为NON或DAD时才有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RingStartTime = null;

        /**
         * 振铃时长
         * @type {number || null}
         */
        this.RingDuration = null;

        /**
         * 接通时长
         * @type {number || null}
         */
        this.AnswerDuration = null;

        /**
         * JSON格式的扩展信息字段，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContextValue = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ClientCode = 'ClientCode' in params ? params.ClientCode : null;
        this.RingStartTime = 'RingStartTime' in params ? params.RingStartTime : null;
        this.RingDuration = 'RingDuration' in params ? params.RingDuration : null;
        this.AnswerDuration = 'AnswerDuration' in params ? params.AnswerDuration : null;
        this.ContextValue = 'ContextValue' in params ? params.ContextValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadBotData请求参数结构体
 * @class
 */
class UploadBotDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：UploadData
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务数据。JSON格式
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * DownloadDialogueText返回参数结构体
 * @class
 */
class DownloadDialogueTextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对话文本下载地址
         * @type {string || null}
         */
        this.TextReportUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TextReportUrl = 'TextReportUrl' in params ? params.TextReportUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBotFlow请求参数结构体
 * @class
 */
class DescribeBotFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：GetFlow
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * 黑名单申请信息
 * @class
 */
class SingleBlackApply extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单类型，01代表手机号码。
         * @type {string || null}
         */
        this.BlackType = null;

        /**
         * 操作类型，A为新增，D为删除。
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 黑名单值，BlackType为01时，填写11位手机号码。
         * @type {string || null}
         */
        this.BlackValue = null;

        /**
         * 备注。
         * @type {string || null}
         */
        this.BlackDescription = null;

        /**
         * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
         * @type {string || null}
         */
        this.BlackValidDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackType = 'BlackType' in params ? params.BlackType : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.BlackValue = 'BlackValue' in params ? params.BlackValue : null;
        this.BlackDescription = 'BlackDescription' in params ? params.BlackDescription : null;
        this.BlackValidDate = 'BlackValidDate' in params ? params.BlackValidDate : null;

    }
}

/**
 * 机器人列表
 * @class
 */
class BotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 机器人名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 机器人状态。0-停用 1-启用 2-待审核
         * @type {string || null}
         */
        this.BotStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BotStatus = 'BotStatus' in params ? params.BotStatus : null;

    }
}

/**
 * ApplyBlackList返回参数结构体
 * @class
 */
class ApplyBlackListResponse extends  AbstractModel {
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
 * DescribeRecords请求参数结构体
 * @class
 */
class DescribeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Record
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：List
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 案件编号
         * @type {string || null}
         */
        this.AccountNum = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.CalledPhone = null;

        /**
         * 查询起始日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.StartBizDate = null;

        /**
         * 查询结束日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.EndBizDate = null;

        /**
         * 分页参数，索引，默认为0
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 分页参数，页长，默认为20
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.AccountNum = 'AccountNum' in params ? params.AccountNum : null;
        this.CalledPhone = 'CalledPhone' in params ? params.CalledPhone : null;
        this.StartBizDate = 'StartBizDate' in params ? params.StartBizDate : null;
        this.EndBizDate = 'EndBizDate' in params ? params.EndBizDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * QueryBotList请求参数结构体
 * @class
 */
class QueryBotListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名：QueryBotList
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * QueryRecordList请求参数结构体
 * @class
 */
class QueryRecordListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。QueryRecordList
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 偏移位移，最大20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.CalledPhone = null;

        /**
         * 开始日期
         * @type {string || null}
         */
        this.StartBizDate = null;

        /**
         * 结束日期
         * @type {string || null}
         */
        this.EndBizDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.CalledPhone = 'CalledPhone' in params ? params.CalledPhone : null;
        this.StartBizDate = 'StartBizDate' in params ? params.StartBizDate : null;
        this.EndBizDate = 'EndBizDate' in params ? params.EndBizDate : null;

    }
}

/**
 * ExportBotData返回参数结构体
 * @class
 */
class ExportBotDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件列表
         * @type {Array.<BotFileData> || null}
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
                let obj = new BotFileData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录音信息
 * @class
 */
class SingleRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 案件编号。
         * @type {string || null}
         */
        this.AccountNum = null;

        /**
         * 外呼日期。
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 开始呼叫时间。
         * @type {string || null}
         */
        this.CallStartTime = null;

        /**
         * 主叫号码。
         * @type {string || null}
         */
        this.CallerPhone = null;

        /**
         * 呼叫方向，O为呼出，I为呼入。
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 通话时长。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 产品ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 录音下载链接。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordCosUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountNum = 'AccountNum' in params ? params.AccountNum : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.CallStartTime = 'CallStartTime' in params ? params.CallStartTime : null;
        this.CallerPhone = 'CallerPhone' in params ? params.CallerPhone : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RecordCosUrl = 'RecordCosUrl' in params ? params.RecordCosUrl : null;

    }
}

/**
 * QueryRecordList返回参数结构体
 * @class
 */
class QueryRecordListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音列表。
         * @type {Array.<RecordInfo> || null}
         */
        this.RecordList = null;

        /**
         * 总数
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

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new RecordInfo();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryInstantData请求参数结构体
 * @class
 */
class QueryInstantDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Data
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：Query
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询类型：callRecord 通话记录
         * @type {string || null}
         */
        this.QueryModel = null;

        /**
         * 查询参数
         * @type {string || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.QueryModel = 'QueryModel' in params ? params.QueryModel : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * ExportBotData请求参数结构体
 * @class
 */
class ExportBotDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：ExportBotData
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 业务日期。YYYY-MM-DD
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * ApplyBlackListData请求参数结构体
 * @class
 */
class ApplyBlackListDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，ApplyBlackListData
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 黑名单列表
         * @type {Array.<BlackListData> || null}
         */
        this.BlackList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

        if (params.BlackList) {
            this.BlackList = new Array();
            for (let z in params.BlackList) {
                let obj = new BlackListData();
                obj.deserialize(params.BlackList[z]);
                this.BlackList.push(obj);
            }
        }

    }
}

/**
 * ChangeBotCallStatus返回参数结构体
 * @class
 */
class ChangeBotCallStatusResponse extends  AbstractModel {
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
 * ApplyBlackList请求参数结构体
 * @class
 */
class ApplyBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：account
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：ApplyBlackList
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 黑名单列表
         * @type {Array.<SingleBlackApply> || null}
         */
        this.BlackList = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

        if (params.BlackList) {
            this.BlackList = new Array();
            for (let z in params.BlackList) {
                let obj = new SingleBlackApply();
                obj.deserialize(params.BlackList[z]);
                this.BlackList.push(obj);
            }
        }
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * ApplyBlackListData返回参数结构体
 * @class
 */
class ApplyBlackListDataResponse extends  AbstractModel {
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
 * ApplyCreditAudit请求参数结构体
 * @class
 */
class ApplyCreditAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Credit
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：Apply
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstId = null;

        /**
         * 产品ID，形如P******。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 信审任务ID，同一天内，同一InstId下，同一CaseId只能调用一次。
         * @type {string || null}
         */
        this.CaseId = null;

        /**
         * 回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * JSON格式的业务字段。
         * @type {string || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstId = 'InstId' in params ? params.InstId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.CaseId = 'CaseId' in params ? params.CaseId : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * DownloadReport返回参数结构体
 * @class
 */
class DownloadReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 到期/逾期提醒日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DailyReportUrl = null;

        /**
         * 到期/逾期提醒结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultReportUrl = null;

        /**
         * 到期/逾期提醒明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DetailReportUrl = null;

        /**
         * 回访日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackDailyReportUrl = null;

        /**
         * 回访结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackResultReportUrl = null;

        /**
         * 回访明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackDetailReportUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DailyReportUrl = 'DailyReportUrl' in params ? params.DailyReportUrl : null;
        this.ResultReportUrl = 'ResultReportUrl' in params ? params.ResultReportUrl : null;
        this.DetailReportUrl = 'DetailReportUrl' in params ? params.DetailReportUrl : null;
        this.CallbackDailyReportUrl = 'CallbackDailyReportUrl' in params ? params.CallbackDailyReportUrl : null;
        this.CallbackResultReportUrl = 'CallbackResultReportUrl' in params ? params.CallbackResultReportUrl : null;
        this.CallbackDetailReportUrl = 'CallbackDetailReportUrl' in params ? params.CallbackDetailReportUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信模板信息
 * @class
 */
class SmsTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 短信模板名称
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

    }
}

/**
 * 录音文件详情
 * @class
 */
class RecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 任务日期
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.CalledPhone = null;

        /**
         * 开始通话时间
         * @type {string || null}
         */
        this.CallStartTime = null;

        /**
         * 通话时长
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 录音文件地址
         * @type {string || null}
         */
        this.CosUrl = null;

        /**
         * 对话日志。JSON格式
         * @type {string || null}
         */
        this.DialogueLog = null;

        /**
         * 录音文件名
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.CalledPhone = 'CalledPhone' in params ? params.CalledPhone : null;
        this.CallStartTime = 'CallStartTime' in params ? params.CallStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.DialogueLog = 'DialogueLog' in params ? params.DialogueLog : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * 号码组信息
 * @class
 */
class PhonePool extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号码组ID
         * @type {string || null}
         */
        this.PoolId = null;

        /**
         * 号码组名称
         * @type {string || null}
         */
        this.PoolName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PoolId = 'PoolId' in params ? params.PoolId : null;
        this.PoolName = 'PoolName' in params ? params.PoolName : null;

    }
}

/**
 * UpdateBotTask返回参数结构体
 * @class
 */
class UpdateBotTaskResponse extends  AbstractModel {
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
 * UploadBotData返回参数结构体
 * @class
 */
class UploadBotDataResponse extends  AbstractModel {
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
 * ChangeBotTaskStatus请求参数结构体
 * @class
 */
class ChangeBotTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：ChangeBotTaskStatus
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 作业变更状态
SUSPEND：暂停；EXECUTE：恢复；
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * DownloadRecordList返回参数结构体
 * @class
 */
class DownloadRecordListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音列表下载地址
         * @type {string || null}
         */
        this.RecordListUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordListUrl = 'RecordListUrl' in params ? params.RecordListUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBotTask返回参数结构体
 * @class
 */
class CreateBotTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人任务Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateBotTask请求参数结构体
 * @class
 */
class UpdateBotTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：UpdateTask
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 产品拨打时间集合
         * @type {CallTimeDict || null}
         */
        this.CallTimeCollection = null;

        /**
         * 是否禁止拨打，默认Y
         * @type {string || null}
         */
        this.BanCall = null;

        /**
         * 禁止拨打起始时间。默认130000
         * @type {string || null}
         */
        this.StartTimeBan = null;

        /**
         * 禁止拨打结束时间。默认140000
         * @type {string || null}
         */
        this.EndTimeBan = null;

        /**
         * 拨打线路集合
         * @type {string || null}
         */
        this.PhoneCollection = null;

        /**
         * 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G
         * @type {string || null}
         */
        this.CodeCollection = null;

        /**
         * 继续拨打次数
         * @type {number || null}
         */
        this.CallCount = null;

        /**
         * 拨打间隔
         * @type {number || null}
         */
        this.CallInterval = null;

        /**
         * 未接通引用短信签名ID
         * @type {string || null}
         */
        this.SmsSignId = null;

        /**
         * 未接通引用短信模板ID
         * @type {string || null}
         */
        this.SmsTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BotId = 'BotId' in params ? params.BotId : null;

        if (params.CallTimeCollection) {
            let obj = new CallTimeDict();
            obj.deserialize(params.CallTimeCollection)
            this.CallTimeCollection = obj;
        }
        this.BanCall = 'BanCall' in params ? params.BanCall : null;
        this.StartTimeBan = 'StartTimeBan' in params ? params.StartTimeBan : null;
        this.EndTimeBan = 'EndTimeBan' in params ? params.EndTimeBan : null;
        this.PhoneCollection = 'PhoneCollection' in params ? params.PhoneCollection : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.CodeCollection = 'CodeCollection' in params ? params.CodeCollection : null;
        this.CallCount = 'CallCount' in params ? params.CallCount : null;
        this.CallInterval = 'CallInterval' in params ? params.CallInterval : null;
        this.SmsSignId = 'SmsSignId' in params ? params.SmsSignId : null;
        this.SmsTemplateId = 'SmsTemplateId' in params ? params.SmsTemplateId : null;

    }
}

/**
 * DescribeCreditResult请求参数结构体
 * @class
 */
class DescribeCreditResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Credit
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：Get
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstId = null;

        /**
         * 产品ID，形如P******。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 信审任务ID
         * @type {string || null}
         */
        this.CaseId = null;

        /**
         * 请求日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.RequestDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstId = 'InstId' in params ? params.InstId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.CaseId = 'CaseId' in params ? params.CaseId : null;
        this.RequestDate = 'RequestDate' in params ? params.RequestDate : null;

    }
}

/**
 * UploadBotFile请求参数结构体
 * @class
 */
class UploadBotFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：Upload
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 文件类型，输入input，停拨stop
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件链接
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * UploadDataFile请求参数结构体
 * @class
 */
class UploadDataFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Data
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：Upload
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * <p>上传类型，不填默认到期/逾期提醒文件，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒文件</li><li>repay：到期/逾期提醒停拨文件</li><li>callback：回访文件</li><li>callstop：回访停拨文件</li><li>blacklist：黑名单文件</li></ul>
         * @type {string || null}
         */
        this.UploadModel = null;

        /**
         * 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。
         * @type {binary || null}
         */
        this.File = null;

        /**
         * 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例。
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.UploadModel = 'UploadModel' in params ? params.UploadModel : null;
        this.File = 'File' in params ? params.File : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * UploadDataJson请求参数结构体
 * @class
 */
class UploadDataJsonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Data
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：UploadJson
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 报文信息
         * @type {string || null}
         */
        this.Data = null;

        /**
         * <p>上传类型，不填默认到期/逾期提醒数据，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒数据</li><li>repay：到期/逾期提醒停拨数据</li></ul>
         * @type {string || null}
         */
        this.UploadModel = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例。
         * @type {string || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.UploadModel = 'UploadModel' in params ? params.UploadModel : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeFileModel返回参数结构体
 * @class
 */
class DescribeFileModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板下载链接
         * @type {string || null}
         */
        this.CosUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBotList返回参数结构体
 * @class
 */
class QueryBotListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表。
         * @type {Array.<BotInfo> || null}
         */
        this.BotList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotList) {
            this.BotList = new Array();
            for (let z in params.BotList) {
                let obj = new BotInfo();
                obj.deserialize(params.BotList[z]);
                this.BotList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Task
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：DescribeTaskStatus
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务ID，"上传文件"接口返回的DataResId，形如abc-xyz123
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 实例ID，不传默认为系统分配的初始实例。
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

/**
 * ChangeBotCallStatus请求参数结构体
 * @class
 */
class ChangeBotCallStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：AiApi
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：ChangeBotCallStatus
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 作业变更状态
SUSPEND：暂停；EXECUTE：恢复；
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 作业唯一标识
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 业务日期
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 任务ID，二者必填一个
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 任务名称，二者必填一个
         * @type {string || null}
         */
        this.BotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.BizDate = 'BizDate' in params ? params.BizDate : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;

    }
}

/**
 * QueryProducts接口对应数据结构。产品对应的相关信息。
 * @class
 */
class ProductQueryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 产品状态 0 禁用 1 启用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductStatus = null;

        /**
         * 场景类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ProductStatus = 'ProductStatus' in params ? params.ProductStatus : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

    }
}

/**
 * DownloadBotRecord返回参数结构体
 * @class
 */
class DownloadBotRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音地址。请求后30分钟内有效
         * @type {string || null}
         */
        this.RecordCosUrl = null;

        /**
         * 文本地址。请求后30分钟内有效
         * @type {string || null}
         */
        this.TextCosUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordCosUrl = 'RecordCosUrl' in params ? params.RecordCosUrl : null;
        this.TextCosUrl = 'TextCosUrl' in params ? params.TextCosUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryProducts请求参数结构体
 * @class
 */
class QueryProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名。默认值（固定）：Product
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名。默认值（固定）：QueryProducts
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例Id。
         * @type {string || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * QueryCallList返回参数结构体
 * @class
 */
class QueryCallListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务作业状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CallInfo> || null}
         */
        this.CallList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CallList) {
            this.CallList = new Array();
            for (let z in params.CallList) {
                let obj = new CallInfo();
                obj.deserialize(params.CallList[z]);
                this.CallList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信签名信息
 * @class
 */
class SmsSign extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信签名ID
         * @type {string || null}
         */
        this.SignId = null;

        /**
         * 短信签名名称
         * @type {string || null}
         */
        this.SignName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignName = 'SignName' in params ? params.SignName : null;

    }
}

/**
 * QueryProducts返回参数结构体
 * @class
 */
class QueryProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息。
         * @type {Array.<ProductQueryInfo> || null}
         */
        this.ProductList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProductList) {
            this.ProductList = new Array();
            for (let z in params.ProductList) {
                let obj = new ProductQueryInfo();
                obj.deserialize(params.ProductList[z]);
                this.ProductList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecords返回参数结构体
 * @class
 */
class DescribeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SingleRecord> || null}
         */
        this.RecordList = null;

        /**
         * 录音总量。
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

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new SingleRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadDialogueText请求参数结构体
 * @class
 */
class DownloadDialogueTextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：Report
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：DownloadTextReport
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 报告日期，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.ReportDate = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ReportDate = 'ReportDate' in params ? params.ReportDate : null;
        this.InstId = 'InstId' in params ? params.InstId : null;

    }
}

module.exports = {
    QueryCallListRequest: QueryCallListRequest,
    CreateBotTaskRequest: CreateBotTaskRequest,
    ChangeBotTaskStatusResponse: ChangeBotTaskStatusResponse,
    UploadFileRequest: UploadFileRequest,
    BotFlow: BotFlow,
    UploadFileResponse: UploadFileResponse,
    UploadDataJsonResponse: UploadDataJsonResponse,
    DescribeBotFlowResponse: DescribeBotFlowResponse,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    QueryBlackListDataRequest: QueryBlackListDataRequest,
    DownloadBotRecordRequest: DownloadBotRecordRequest,
    DownloadReportRequest: DownloadReportRequest,
    ApplyCreditAuditResponse: ApplyCreditAuditResponse,
    UploadDataFileResponse: UploadDataFileResponse,
    DownloadRecordListRequest: DownloadRecordListRequest,
    CallInfo: CallInfo,
    BotFileData: BotFileData,
    DescribeFileModelRequest: DescribeFileModelRequest,
    QueryInstantDataResponse: QueryInstantDataResponse,
    CallTimeDict: CallTimeDict,
    UploadBotFileResponse: UploadBotFileResponse,
    QueryBlackListDataResponse: QueryBlackListDataResponse,
    CallTimeInfo: CallTimeInfo,
    BlackListData: BlackListData,
    DescribeCreditResultResponse: DescribeCreditResultResponse,
    UploadBotDataRequest: UploadBotDataRequest,
    DownloadDialogueTextResponse: DownloadDialogueTextResponse,
    DescribeBotFlowRequest: DescribeBotFlowRequest,
    SingleBlackApply: SingleBlackApply,
    BotInfo: BotInfo,
    ApplyBlackListResponse: ApplyBlackListResponse,
    DescribeRecordsRequest: DescribeRecordsRequest,
    QueryBotListRequest: QueryBotListRequest,
    QueryRecordListRequest: QueryRecordListRequest,
    ExportBotDataResponse: ExportBotDataResponse,
    SingleRecord: SingleRecord,
    QueryRecordListResponse: QueryRecordListResponse,
    QueryInstantDataRequest: QueryInstantDataRequest,
    ExportBotDataRequest: ExportBotDataRequest,
    ApplyBlackListDataRequest: ApplyBlackListDataRequest,
    ChangeBotCallStatusResponse: ChangeBotCallStatusResponse,
    ApplyBlackListRequest: ApplyBlackListRequest,
    ApplyBlackListDataResponse: ApplyBlackListDataResponse,
    ApplyCreditAuditRequest: ApplyCreditAuditRequest,
    DownloadReportResponse: DownloadReportResponse,
    SmsTemplate: SmsTemplate,
    RecordInfo: RecordInfo,
    PhonePool: PhonePool,
    UpdateBotTaskResponse: UpdateBotTaskResponse,
    UploadBotDataResponse: UploadBotDataResponse,
    ChangeBotTaskStatusRequest: ChangeBotTaskStatusRequest,
    DownloadRecordListResponse: DownloadRecordListResponse,
    CreateBotTaskResponse: CreateBotTaskResponse,
    UpdateBotTaskRequest: UpdateBotTaskRequest,
    DescribeCreditResultRequest: DescribeCreditResultRequest,
    UploadBotFileRequest: UploadBotFileRequest,
    UploadDataFileRequest: UploadDataFileRequest,
    UploadDataJsonRequest: UploadDataJsonRequest,
    DescribeFileModelResponse: DescribeFileModelResponse,
    QueryBotListResponse: QueryBotListResponse,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    ChangeBotCallStatusRequest: ChangeBotCallStatusRequest,
    ProductQueryInfo: ProductQueryInfo,
    DownloadBotRecordResponse: DownloadBotRecordResponse,
    QueryProductsRequest: QueryProductsRequest,
    QueryCallListResponse: QueryCallListResponse,
    SmsSign: SmsSign,
    QueryProductsResponse: QueryProductsResponse,
    DescribeRecordsResponse: DescribeRecordsResponse,
    DownloadDialogueTextRequest: DownloadDialogueTextRequest,

}
