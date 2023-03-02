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
 * DescribeFlySecMiniAppReportUrl请求参数结构体
 * @class
 */
class DescribeFlySecMiniAppReportUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 小程序appid
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 诊断方式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 诊断报告类型 0:基础诊断报告，1:总裁版诊断报告，2:诊断报告json结果
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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;

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
         * 任务来源, -1:所有, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
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
 * DescribeFlySecMiniAppScanTaskParam请求参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * 翼扬安全资源使用情况
 * @class
 */
class ResourceUsageInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称, 具体名称请查看产品配置
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资源未使用次数
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
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 小程序名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 小程序版本
         * @type {string || null}
         */
        this.AppVersion = null;

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
         * 公司邮箱
         * @type {string || null}
         */
        this.Email = null;

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
        this.AppPackage = 'AppPackage' in params ? params.AppPackage : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.TelNumber = 'TelNumber' in params ? params.TelNumber : null;
        this.CorpName = 'CorpName' in params ? params.CorpName : null;
        this.SalesPerson = 'SalesPerson' in params ? params.SalesPerson : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * 翼扬诊断小程序的诊断报告风险数据
 * @class
 */
class FlySecMiniAppRiskItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代码防护(基础诊断)
         * @type {number || null}
         */
        this.RiskItem1Score = null;

        /**
         * 开发测试信息泄露(基础诊断)
         * @type {number || null}
         */
        this.RiskItem2Score = null;

        /**
         * 编码规范(基础诊断)
         * @type {number || null}
         */
        this.RiskItem3Score = null;

        /**
         * 配置风险(基础诊断)
         * @type {number || null}
         */
        this.RiskItem4Score = null;

        /**
         * 账号安全(基础诊断)
         * @type {number || null}
         */
        this.RiskItem5Score = null;

        /**
         * 用户信息安全(基础诊断)
         * @type {number || null}
         */
        this.RiskItem6Score = null;

        /**
         * 内部信息泄露(基础诊断)
         * @type {number || null}
         */
        this.RiskItem7Score = null;

        /**
         * 其他安全(基础诊断)
         * @type {number || null}
         */
        this.RiskItem8Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskItem1Score = 'RiskItem1Score' in params ? params.RiskItem1Score : null;
        this.RiskItem2Score = 'RiskItem2Score' in params ? params.RiskItem2Score : null;
        this.RiskItem3Score = 'RiskItem3Score' in params ? params.RiskItem3Score : null;
        this.RiskItem4Score = 'RiskItem4Score' in params ? params.RiskItem4Score : null;
        this.RiskItem5Score = 'RiskItem5Score' in params ? params.RiskItem5Score : null;
        this.RiskItem6Score = 'RiskItem6Score' in params ? params.RiskItem6Score : null;
        this.RiskItem7Score = 'RiskItem7Score' in params ? params.RiskItem7Score : null;
        this.RiskItem8Score = 'RiskItem8Score' in params ? params.RiskItem8Score : null;

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
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Platform = 'Platform' in params ? params.Platform : null;

    }
}

/**
 * DescribeBasicDiagnosisResourceUsageInfo返回参数结构体
 * @class
 */
class DescribeBasicDiagnosisResourceUsageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 资源类型
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资源未使用次数
         * @type {number || null}
         */
        this.UnusedCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.UnusedCount = 'UnusedCount' in params ? params.UnusedCount : null;
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

/**
 * DescribeBasicDiagnosisResourceUsageInfo请求参数结构体
 * @class
 */
class DescribeBasicDiagnosisResourceUsageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断模式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

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
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 安全资源数据列表
         * @type {Array.<ResourceUsageInfoData> || null}
         */
        this.Data = null;

        /**
         * 安全资源数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceUsageInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 诊断报告/堆栈信息下载链接
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 诊断报告/堆栈名称
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
 * DescribeFlySecMiniAppScanTaskStatus请求参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * CreateFlySecMiniAppScanTask返回参数结构体
 * @class
 */
class CreateFlySecMiniAppScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

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
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFlySecMiniAppProfessionalScanTask请求参数结构体
 * @class
 */
class CreateFlySecMiniAppProfessionalScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 小程序名称
         * @type {string || null}
         */
        this.MiniAppName = null;

        /**
         * 诊断模式 2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 公司名称
         * @type {string || null}
         */
        this.CorpName = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 电子邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.MiniAppName = 'MiniAppName' in params ? params.MiniAppName : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.CorpName = 'CorpName' in params ? params.CorpName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CreateFlySecMiniAppProfessionalScanTask返回参数结构体
 * @class
 */
class CreateFlySecMiniAppProfessionalScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlySecMiniAppScanTaskList请求参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断方式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 诊断状态 -1:查询全部, 0:排队中, 1:成功, 2:失败, 3:进行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 查询数量, 0:查询所有, 其他值:最近几次的诊断数量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 小程序appid(为空的时候,则查询当前用户诊断的所有小程序)
         * @type {string || null}
         */
        this.MiniAppID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;

    }
}

/**
 * DescribeFlySecMiniAppScanReportList请求参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanReportListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 诊断方式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 诊断状态 -1:查询全部, 0:排队中, 1:成功, 2:失败, 3:进行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 查询数量, 0:查询所有, 其他值:最近几次的诊断数量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 小程序版本
         * @type {string || null}
         */
        this.MiniAppVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.MiniAppVersion = 'MiniAppVersion' in params ? params.MiniAppVersion : null;

    }
}

/**
 * DescribeFlySecMiniAppScanTaskParam返回参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 诊断模式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 小程序测试账号(自有账号体系需提供,其他情况不需要)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MiniAppTestAccount = null;

        /**
         * 小程序测试密码(自有账号体系需提供,其他情况不需要)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MiniAppTestPwd = null;

        /**
         * 诊断扫描版本 0:正式版 1:体验版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.MiniAppTestAccount = 'MiniAppTestAccount' in params ? params.MiniAppTestAccount : null;
        this.MiniAppTestPwd = 'MiniAppTestPwd' in params ? params.MiniAppTestPwd : null;
        this.ScanVersion = 'ScanVersion' in params ? params.ScanVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFlySecMiniAppScanTaskRepeat请求参数结构体
 * @class
 */
class CreateFlySecMiniAppScanTaskRepeatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 诊断模式 1:基础诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 原任务id
         * @type {string || null}
         */
        this.OrgTaskID = null;

        /**
         * 小程序测试账号(自有账号体系需提供,其他情况不需要)
         * @type {string || null}
         */
        this.MiniAppTestAccount = null;

        /**
         * 小程序测试密码(自有账号体系需提供,其他情况不需要)
         * @type {string || null}
         */
        this.MiniAppTestPwd = null;

        /**
         * 诊断扫描版本 0:正式版 1:体验版
         * @type {number || null}
         */
        this.ScanVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.OrgTaskID = 'OrgTaskID' in params ? params.OrgTaskID : null;
        this.MiniAppTestAccount = 'MiniAppTestAccount' in params ? params.MiniAppTestAccount : null;
        this.MiniAppTestPwd = 'MiniAppTestPwd' in params ? params.MiniAppTestPwd : null;
        this.ScanVersion = 'ScanVersion' in params ? params.ScanVersion : null;

    }
}

/**
 * CreateFlySecMiniAppScanTask请求参数结构体
 * @class
 */
class CreateFlySecMiniAppScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 诊断模式 1:基础诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 小程序测试账号(自有账号体系需提供,其他情况不需要)
         * @type {string || null}
         */
        this.MiniAppTestAccount = null;

        /**
         * 小程序测试密码(自有账号体系需提供,其他情况不需要)
         * @type {string || null}
         */
        this.MiniAppTestPwd = null;

        /**
         * 小程序所属行业
         * @type {string || null}
         */
        this.Industry = null;

        /**
         * 小程序调查问卷json字符串
         * @type {string || null}
         */
        this.SurveyContent = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 邮箱地址
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 商务合作接口人
         * @type {string || null}
         */
        this.SalesPerson = null;

        /**
         * 诊断扫描版本 0:正式版 1:体验版
         * @type {number || null}
         */
        this.ScanVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.MiniAppTestAccount = 'MiniAppTestAccount' in params ? params.MiniAppTestAccount : null;
        this.MiniAppTestPwd = 'MiniAppTestPwd' in params ? params.MiniAppTestPwd : null;
        this.Industry = 'Industry' in params ? params.Industry : null;
        this.SurveyContent = 'SurveyContent' in params ? params.SurveyContent : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.SalesPerson = 'SalesPerson' in params ? params.SalesPerson : null;
        this.ScanVersion = 'ScanVersion' in params ? params.ScanVersion : null;

    }
}

/**
 * CreateAppScanTaskRepeat请求参数结构体
 * @class
 */
class CreateAppScanTaskRepeatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型, 0:基础版, 1:专家版, 2:本地化
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 小程序AppID
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 原诊断任务ID
         * @type {string || null}
         */
        this.OrgTaskID = null;

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
        this.AppPackage = 'AppPackage' in params ? params.AppPackage : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.OrgTaskID = 'OrgTaskID' in params ? params.OrgTaskID : null;

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
         * 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 应用平台, 0:android, 1:ios, 2:小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 报告类型, 0:诊断报告, 1:堆栈报告(预留), 2:视频证据(预留), 3:报告json结果
         * @type {number || null}
         */
        this.ReportType = null;

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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

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
 * DescribeFlySecMiniAppScanTaskList返回参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FlySecMiniAppTaskData> || null}
         */
        this.Data = null;

        /**
         * 诊断任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new FlySecMiniAppTaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 翼扬诊断小程序任务数据
 * @class
 */
class FlySecMiniAppTaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 小程序appid
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 小程序名称
         * @type {string || null}
         */
        this.MiniAppName = null;

        /**
         * 小程序版本
         * @type {string || null}
         */
        this.MiniAppVersion = null;

        /**
         * 诊断模式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 诊断时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 诊断失败错误码
         * @type {number || null}
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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.MiniAppName = 'MiniAppName' in params ? params.MiniAppName : null;
        this.MiniAppVersion = 'MiniAppVersion' in params ? params.MiniAppVersion : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Error = 'Error' in params ? params.Error : null;

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

/**
 * DescribeFlySecMiniAppReportUrl返回参数结构体
 * @class
 */
class DescribeFlySecMiniAppReportUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppTaskData> || null}
         */
        this.Data = null;

        /**
         * 任务总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AppTaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 隐私合规应用信息
 * @class
 */
class AppInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序apiiid
         * @type {string || null}
         */
        this.AppPackage = null;

        /**
         * 小程序应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 小程序应用版本
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
         * 小程序隐私诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 小程序隐私诊断报告名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportTitle = null;

        /**
         * 小程序隐私诊断堆栈报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BehaviorUrl = null;

        /**
         * 小程序隐私诊断堆栈报告名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BehaviorTitle = null;

        /**
         * 诊断风险项数量
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
 * DescribeFlySecMiniAppScanTaskStatus返回参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 诊断失败错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Errno = null;

        /**
         * 小程序名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MiniAppName = null;

        /**
         * 小程序版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MiniAppVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Errno = 'Errno' in params ? params.Errno : null;
        this.MiniAppName = 'MiniAppName' in params ? params.MiniAppName : null;
        this.MiniAppVersion = 'MiniAppVersion' in params ? params.MiniAppVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlySecMiniAppScanReportList返回参数结构体
 * @class
 */
class DescribeFlySecMiniAppScanReportListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

        /**
         * 诊断报告数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FlySecMiniAppReportData> || null}
         */
        this.Data = null;

        /**
         * 诊断任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ret = 'Ret' in params ? params.Ret : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new FlySecMiniAppReportData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFlySecMiniAppScanTaskRepeat返回参数结构体
 * @class
 */
class CreateFlySecMiniAppScanTaskRepeatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值, 0:成功, 其他值请查看“返回值”定义
         * @type {number || null}
         */
        this.Ret = null;

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
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
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
 * 应用隐私合规诊断任务数据
 * @class
 */
class AppTaskData extends  AbstractModel {
    constructor(){
        super();

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
         * 任务来源,0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android);
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
 * 翼扬诊断小程序报告数据
 * @class
 */
class FlySecMiniAppReportData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 小程序appid
         * @type {string || null}
         */
        this.MiniAppID = null;

        /**
         * 小程序名称
         * @type {string || null}
         */
        this.MiniAppName = null;

        /**
         * 小程序版本
         * @type {string || null}
         */
        this.MiniAppVersion = null;

        /**
         * 诊断模式 1:基础诊断，2:深度诊断
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 诊断时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 诊断得分
         * @type {string || null}
         */
        this.RiskScore = null;

        /**
         * 诊断风险等级 1:高风险 2:中风险 3:低风险
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * 诊断8大维度得分情况(每项总分100分)
         * @type {FlySecMiniAppRiskItems || null}
         */
        this.RiskItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.MiniAppID = 'MiniAppID' in params ? params.MiniAppID : null;
        this.MiniAppName = 'MiniAppName' in params ? params.MiniAppName : null;
        this.MiniAppVersion = 'MiniAppVersion' in params ? params.MiniAppVersion : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.RiskItems) {
            let obj = new FlySecMiniAppRiskItems();
            obj.deserialize(params.RiskItems)
            this.RiskItems = obj;
        }

    }
}

/**
 * DescribeResourceUsageInfo请求参数结构体
 * @class
 */
class DescribeResourceUsageInfoRequest extends  AbstractModel {
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

module.exports = {
    DescribeFlySecMiniAppReportUrlRequest: DescribeFlySecMiniAppReportUrlRequest,
    DescribeScanTaskListRequest: DescribeScanTaskListRequest,
    DescribeFlySecMiniAppScanTaskParamRequest: DescribeFlySecMiniAppScanTaskParamRequest,
    ResourceUsageInfoData: ResourceUsageInfoData,
    CreateAppScanTaskRequest: CreateAppScanTaskRequest,
    FlySecMiniAppRiskItems: FlySecMiniAppRiskItems,
    DescribeScanTaskStatusRequest: DescribeScanTaskStatusRequest,
    DescribeBasicDiagnosisResourceUsageInfoResponse: DescribeBasicDiagnosisResourceUsageInfoResponse,
    CreateAppScanTaskRepeatResponse: CreateAppScanTaskRepeatResponse,
    DescribeBasicDiagnosisResourceUsageInfoRequest: DescribeBasicDiagnosisResourceUsageInfoRequest,
    DescribeResourceUsageInfoResponse: DescribeResourceUsageInfoResponse,
    DescribeScanTaskReportUrlResponse: DescribeScanTaskReportUrlResponse,
    DescribeFlySecMiniAppScanTaskStatusRequest: DescribeFlySecMiniAppScanTaskStatusRequest,
    CreateFlySecMiniAppScanTaskResponse: CreateFlySecMiniAppScanTaskResponse,
    CreateFlySecMiniAppProfessionalScanTaskRequest: CreateFlySecMiniAppProfessionalScanTaskRequest,
    CreateFlySecMiniAppProfessionalScanTaskResponse: CreateFlySecMiniAppProfessionalScanTaskResponse,
    DescribeFlySecMiniAppScanTaskListRequest: DescribeFlySecMiniAppScanTaskListRequest,
    DescribeFlySecMiniAppScanReportListRequest: DescribeFlySecMiniAppScanReportListRequest,
    DescribeFlySecMiniAppScanTaskParamResponse: DescribeFlySecMiniAppScanTaskParamResponse,
    CreateFlySecMiniAppScanTaskRepeatRequest: CreateFlySecMiniAppScanTaskRepeatRequest,
    CreateFlySecMiniAppScanTaskRequest: CreateFlySecMiniAppScanTaskRequest,
    CreateAppScanTaskRepeatRequest: CreateAppScanTaskRepeatRequest,
    DescribeScanTaskReportUrlRequest: DescribeScanTaskReportUrlRequest,
    TaskFlowStepsInfo: TaskFlowStepsInfo,
    DescribeFlySecMiniAppScanTaskListResponse: DescribeFlySecMiniAppScanTaskListResponse,
    FlySecMiniAppTaskData: FlySecMiniAppTaskData,
    CreateAppScanTaskResponse: CreateAppScanTaskResponse,
    DescribeFlySecMiniAppReportUrlResponse: DescribeFlySecMiniAppReportUrlResponse,
    DescribeScanTaskListResponse: DescribeScanTaskListResponse,
    AppInfoItem: AppInfoItem,
    DescribeFlySecMiniAppScanTaskStatusResponse: DescribeFlySecMiniAppScanTaskStatusResponse,
    DescribeFlySecMiniAppScanReportListResponse: DescribeFlySecMiniAppScanReportListResponse,
    CreateFlySecMiniAppScanTaskRepeatResponse: CreateFlySecMiniAppScanTaskRepeatResponse,
    DescribeScanTaskStatusResponse: DescribeScanTaskStatusResponse,
    AppTaskData: AppTaskData,
    FlySecMiniAppReportData: FlySecMiniAppReportData,
    DescribeResourceUsageInfoRequest: DescribeResourceUsageInfoRequest,

}
