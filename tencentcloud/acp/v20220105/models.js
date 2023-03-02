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
 * CreateAppScanTaskRepeat请求参数结构体
 * @class
 */
class CreateAppScanTaskRepeatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 原诊断任务ID
         * @type {string || null}
         */
        this.OrgTaskID = null;

        /**
         * App包名
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * 上传的文件ID(任务来源为1时必填)
         * @type {string || null}
         */
        this.FileID = null;

        /**
         * 软件下载链接地址(任务来源为2时必填)
         * @type {string || null}
         */
        this.AppDownloadUrl = null;

        /**
         * 隐私文本下载地址(任务来源为2时必填)
         * @type {string || null}
         */
        this.PrivacyTextUrl = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 隐私申明文件名称
         * @type {string || null}
         */
        this.PrivacyTextName = null;

        /**
         * 软件Sha1值(PrivacyTextMD5不为空时必填)
         * @type {string || null}
         */
        this.AppSha1 = null;

        /**
         * 隐私申明文本md5(AppSha1不为空时必填)
         * @type {string || null}
         */
        this.PrivacyTextMD5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.OrgTaskID = 'OrgTaskID' in params ? params.OrgTaskID : null;
        this.AppPackage = 'AppPackage' in params ? params.AppPackage : null;
        this.FileID = 'FileID' in params ? params.FileID : null;
        this.AppDownloadUrl = 'AppDownloadUrl' in params ? params.AppDownloadUrl : null;
        this.PrivacyTextUrl = 'PrivacyTextUrl' in params ? params.PrivacyTextUrl : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PrivacyTextName = 'PrivacyTextName' in params ? params.PrivacyTextName : null;
        this.AppSha1 = 'AppSha1' in params ? params.AppSha1 : null;
        this.PrivacyTextMD5 = 'PrivacyTextMD5' in params ? params.PrivacyTextMD5 : null;

    }
}

/**
 * DescribeScanTaskList返回参数结构体
 * @class
 */
class DescribeScanTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 任务总数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppTaskData> || null}
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
        this.Result = 'Result' in params ? params.Result : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AppTaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用合规隐私诊断任务应用数据信息
 * @class
 */
class AppInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * App包名
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * App名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * App版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * App隐私诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * App隐私诊断报告名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportTitle = null;

        /**
         * App诊断堆栈报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BehaviorUrl = null;

        /**
         * App诊断堆栈报告名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BehaviorTitle = null;

        /**
         * 诊断高风险项数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HighRiskCount = null;

        /**
         * 隐私申明文件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivacyTextName = null;

        /**
         * 软件MD5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SoftwareMD5 = null;

        /**
         * 隐私文本MD5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivacyTextMD5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppPackage = 'AppPackage' in params ? params.AppPackage : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.ReportTitle = 'ReportTitle' in params ? params.ReportTitle : null;
        this.BehaviorUrl = 'BehaviorUrl' in params ? params.BehaviorUrl : null;
        this.BehaviorTitle = 'BehaviorTitle' in params ? params.BehaviorTitle : null;
        this.HighRiskCount = 'HighRiskCount' in params ? params.HighRiskCount : null;
        this.PrivacyTextName = 'PrivacyTextName' in params ? params.PrivacyTextName : null;
        this.SoftwareMD5 = 'SoftwareMD5' in params ? params.SoftwareMD5 : null;
        this.PrivacyTextMD5 = 'PrivacyTextMD5' in params ? params.PrivacyTextMD5 : null;

    }
}

/**
 * DescribeResourceUsageInfo返回参数结构体
 * @class
 */
class DescribeResourceUsageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义，暂时未定
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 资源使用信息
         * @type {ResourceUsageInfoData || null}
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
        this.Result = 'Result' in params ? params.Result : null;

        if (params.Data) {
            let obj = new ResourceUsageInfoData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanTaskList请求参数结构体
 * @class
 */
class DescribeScanTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, -1:所有, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务状态,可多值查询,例如:"1,2,3" 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
         * @type {string || null}
         */
        this.TaskStatuses = null;

        /**
         * 任务类型,可多值查询,采用逗号分隔,例如:"0,1" 0:基础版, 1:专家版, 2:本地化
         * @type {string || null}
         */
        this.TaskTypes = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 页码大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 应用名称或小程序名称(可选参数)
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 查询时间范围, 查询开始时间(2021-09-30 或 2021-09-30 10:57:34)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询时间范围, 查询结束时间(2021-09-30 或 2021-09-30 10:57:34)
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
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskStatuses = 'TaskStatuses' in params ? params.TaskStatuses : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 资源使用情况信息
 * @class
 */
class ResourceUsageInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源计费项名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 未使用资源数
         * @type {number || null}
         */
        this.UnusedCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.UnusedCount = 'UnusedCount' in params ? params.UnusedCount : null;

    }
}

/**
 * 任务流步骤详情
 * @class
 */
class TaskFlowStepsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowNo = null;

        /**
         * 流程名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 流程状态, 其他值:进行中, 2:成功, 3:失败
         * @type {number || null}
         */
        this.FlowStatus = null;

        /**
         * 流程状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowStateDesc = null;

        /**
         * 流程启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流程完成时间
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
        this.FlowNo = 'FlowNo' in params ? params.FlowNo : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.FlowStatus = 'FlowStatus' in params ? params.FlowStatus : null;
        this.FlowStateDesc = 'FlowStateDesc' in params ? params.FlowStateDesc : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateAppScanTask请求参数结构体
 * @class
 */
class CreateAppScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * App包名
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * App名称(任务来源为2时必填)
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * App版本
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 上传的软件文件ID(任务来源为1时必填)
         * @type {string || null}
         */
        this.FileID = null;

        /**
         * 软件下载链接地址(任务来源为2时必填)
         * @type {string || null}
         */
        this.AppDownloadUrl = null;

        /**
         * 隐私文本下载地址(任务来源为2时必填)
         * @type {string || null}
         */
        this.PrivacyTextUrl = null;

        /**
         * 联系人信息
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * 联系电话
         * @type {string || null}
         */
        this.TelNumber = null;

        /**
         * 公司邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 公司名称
         * @type {string || null}
         */
        this.CorpName = null;

        /**
         * 商务对接人员
         * @type {string || null}
         */
        this.SalesPerson = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否同意隐私条款，0:不同意(默认), 1:同意
         * @type {number || null}
         */
        this.IsAgreePrivacy = null;

        /**
         * 隐私申明文件名称
         * @type {string || null}
         */
        this.PrivacyTextName = null;

        /**
         * 软件Sha1值(PrivacyTextMD5不为空时必填)
         * @type {string || null}
         */
        this.AppSha1 = null;

        /**
         * 隐私申明文本md5(AppSha1不为空时必填)
         * @type {string || null}
         */
        this.PrivacyTextMD5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.AppPackage = 'AppPackage' in params ? params.AppPackage : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.FileID = 'FileID' in params ? params.FileID : null;
        this.AppDownloadUrl = 'AppDownloadUrl' in params ? params.AppDownloadUrl : null;
        this.PrivacyTextUrl = 'PrivacyTextUrl' in params ? params.PrivacyTextUrl : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.TelNumber = 'TelNumber' in params ? params.TelNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CorpName = 'CorpName' in params ? params.CorpName : null;
        this.SalesPerson = 'SalesPerson' in params ? params.SalesPerson : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.IsAgreePrivacy = 'IsAgreePrivacy' in params ? params.IsAgreePrivacy : null;
        this.PrivacyTextName = 'PrivacyTextName' in params ? params.PrivacyTextName : null;
        this.AppSha1 = 'AppSha1' in params ? params.AppSha1 : null;
        this.PrivacyTextMD5 = 'PrivacyTextMD5' in params ? params.PrivacyTextMD5 : null;

    }
}

/**
 * DescribeChannelTaskReportUrl返回参数结构体
 * @class
 */
class DescribeChannelTaskReportUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 诊断报告/堆栈信息/报告json结果下载链接
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 诊断报告/堆栈/报告json结果的名称
         * @type {string || null}
         */
        this.ReportTitle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.ReportTitle = 'ReportTitle' in params ? params.ReportTitle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileTicket返回参数结构体
 * @class
 */
class DescribeFileTicketResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 上传url(任务来源为2时:Post方法（100:apk,101:txt）, 任务来源为1时:put方法)
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * 上传url鉴权信息(任务来源为1时上传需要, Authorization参数值)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadSign = null;

        /**
         * 上传文件ID(任务来源为1时提交诊断任务需要)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FildID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;
        this.UploadSign = 'UploadSign' in params ? params.UploadSign : null;
        this.FildID = 'FildID' in params ? params.FildID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanTaskStatus返回参数结构体
 * @class
 */
class DescribeScanTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 0:默认值(待检测/待咨询), 1.检测中,  4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 诊断失败的错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 任务流详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskFlowStepsInfo> || null}
         */
        this.FlowSteps = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.FlowSteps) {
            this.FlowSteps = new Array();
            for (let z in params.FlowSteps) {
                let obj = new TaskFlowStepsInfo();
                obj.deserialize(params.FlowSteps[z]);
                this.FlowSteps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanTaskReportUrl请求参数结构体
 * @class
 */
class DescribeScanTaskReportUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 报告类型, 0:诊断报告, 1:堆栈报告, 2:视频证据(预留), 3:报告json结果
         * @type {number || null}
         */
        this.ReportType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;

    }
}

/**
 * DescribeChannelTaskReportUrl请求参数结构体
 * @class
 */
class DescribeChannelTaskReportUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1: iOS，2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 报告类型, 0:诊断报告, 1:堆栈报告, 2:视频证据(预留), 3:报告json结果
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * 子渠道APP MD5值
         * @type {string || null}
         */
        this.AppMD5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.AppMD5 = 'AppMD5' in params ? params.AppMD5 : null;

    }
}

/**
 * 应用合规隐私诊断任务数据
 * @class
 */
class AppTaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskErrMsg = null;

        /**
         * 任务来源,0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android)
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用信息
         * @type {AppInfoItem || null}
         */
        this.AppInfo = null;

        /**
         * 任务启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务完成时间(更新时间)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 联系人信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskErrMsg = 'TaskErrMsg' in params ? params.TaskErrMsg : null;
        this.Source = 'Source' in params ? params.Source : null;

        if (params.AppInfo) {
            let obj = new AppInfoItem();
            obj.deserialize(params.AppInfo)
            this.AppInfo = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;

    }
}

/**
 * DescribeScanTaskStatus请求参数结构体
 * @class
 */
class DescribeScanTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeFileTicket请求参数结构体
 * @class
 */
class DescribeFileTicketRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Platform = 'Platform' in params ? params.Platform : null;

    }
}

/**
 * CreateAppScanTask返回参数结构体
 * @class
 */
class CreateAppScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceUsageInfo请求参数结构体
 * @class
 */
class DescribeResourceUsageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源计费项名称(为空时，则根据Source，TaskType和Platform进行查询)
         * @type {string || null}
         */
        this.PriceName = null;

        /**
         * 任务类型, 0:基础版, 1:专家版
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 应用平台, 0:android
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android), 3:app漏洞扫描;
         * @type {number || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PriceName = 'PriceName' in params ? params.PriceName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * DescribeScanTaskReportUrl返回参数结构体
 * @class
 */
class DescribeScanTaskReportUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 诊断报告/堆栈信息/报告json结果下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 诊断报告/堆栈/报告json结果的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportTitle = null;

        /**
         * 诊断json结果内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.ReportTitle = 'ReportTitle' in params ? params.ReportTitle : null;
        this.ReportResult = 'ReportResult' in params ? params.ReportResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAppScanTaskRepeat返回参数结构体
 * @class
 */
class CreateAppScanTaskRepeatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateAppScanTaskRepeatRequest: CreateAppScanTaskRepeatRequest,
    DescribeScanTaskListResponse: DescribeScanTaskListResponse,
    AppInfoItem: AppInfoItem,
    DescribeResourceUsageInfoResponse: DescribeResourceUsageInfoResponse,
    DescribeScanTaskListRequest: DescribeScanTaskListRequest,
    ResourceUsageInfoData: ResourceUsageInfoData,
    TaskFlowStepsInfo: TaskFlowStepsInfo,
    CreateAppScanTaskRequest: CreateAppScanTaskRequest,
    DescribeChannelTaskReportUrlResponse: DescribeChannelTaskReportUrlResponse,
    DescribeFileTicketResponse: DescribeFileTicketResponse,
    DescribeScanTaskStatusResponse: DescribeScanTaskStatusResponse,
    DescribeScanTaskReportUrlRequest: DescribeScanTaskReportUrlRequest,
    DescribeChannelTaskReportUrlRequest: DescribeChannelTaskReportUrlRequest,
    AppTaskData: AppTaskData,
    DescribeScanTaskStatusRequest: DescribeScanTaskStatusRequest,
    DescribeFileTicketRequest: DescribeFileTicketRequest,
    CreateAppScanTaskResponse: CreateAppScanTaskResponse,
    DescribeResourceUsageInfoRequest: DescribeResourceUsageInfoRequest,
    DescribeScanTaskReportUrlResponse: DescribeScanTaskReportUrlResponse,
    CreateAppScanTaskRepeatResponse: CreateAppScanTaskRepeatResponse,

}
