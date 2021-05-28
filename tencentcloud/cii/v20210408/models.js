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
 * DescribeStructCompareData返回参数结构体
 * @class
 */
class DescribeStructCompareDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保单号
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 主任务号
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 客户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerId = null;

        /**
         * 客户姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 复核时间
         * @type {string || null}
         */
        this.ReviewTime = null;

        /**
         * 算法识别结果
         * @type {string || null}
         */
        this.MachineResult = null;

        /**
         * 人工复核结果
         * @type {string || null}
         */
        this.ManualResult = null;

        /**
         * 结构化对比指标数据
         * @type {CompareMetricsData || null}
         */
        this.Metrics = null;

        /**
         * 新增项
         * @type {string || null}
         */
        this.NewItems = null;

        /**
         * 修改项
         * @type {string || null}
         */
        this.ModifyItems = null;

        /**
         * 子任务号
         * @type {string || null}
         */
        this.SubTaskId = null;

        /**
         * 所有的子任务
         * @type {Array.<ReviewDataTaskInfo> || null}
         */
        this.AllTasks = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.CustomerId = 'CustomerId' in params ? params.CustomerId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.ReviewTime = 'ReviewTime' in params ? params.ReviewTime : null;
        this.MachineResult = 'MachineResult' in params ? params.MachineResult : null;
        this.ManualResult = 'ManualResult' in params ? params.ManualResult : null;

        if (params.Metrics) {
            let obj = new CompareMetricsData();
            obj.deserialize(params.Metrics)
            this.Metrics = obj;
        }
        this.NewItems = 'NewItems' in params ? params.NewItems : null;
        this.ModifyItems = 'ModifyItems' in params ? params.ModifyItems : null;
        this.SubTaskId = 'SubTaskId' in params ? params.SubTaskId : null;

        if (params.AllTasks) {
            this.AllTasks = new Array();
            for (let z in params.AllTasks) {
                let obj = new ReviewDataTaskInfo();
                obj.deserialize(params.AllTasks[z]);
                this.AllTasks.push(obj);
            }
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStructureTaskResult请求参数结构体
 * @class
 */
class DescribeStructureTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结构化任务ID
         * @type {string || null}
         */
        this.MainTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;

    }
}

/**
 * CreateStructureTask请求参数结构体
 * @class
 */
class CreateStructureTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务类型
Structured 仅结构化
Underwrite 结构化+核保
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 创建任务时可以上传多个报告，后台生成多个识别子任务，子任务的详细信息
         * @type {Array.<CreateStructureTaskInfo> || null}
         */
        this.TaskInfos = null;

        /**
         * 保单号
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 核保触发方式
Auto 自动
Manual 手动
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * 险种，如果是体检报告类型，此参数是必填，类型说明如下：
CriticalDiseaseInsurance:重疾险
LifeInsurance：寿险
AccidentInsurance：意外险
         * @type {Array.<string> || null}
         */
        this.InsuranceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new CreateStructureTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.InsuranceTypes = 'InsuranceTypes' in params ? params.InsuranceTypes : null;

    }
}

/**
 * 结构化对比指标（准确率/召回率）数据
 * @class
 */
class CompareMetricsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短文准确率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShortStructAccuracy = null;

        /**
         * 短文召回率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShortStructRecall = null;

        /**
         * 长文结构化准确率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LongStructAccuracy = null;

        /**
         * 长文结构化召回率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LongStructRecall = null;

        /**
         * 长文提取准确率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LongContentAccuracy = null;

        /**
         * 长文提取召回率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LongContentRecall = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShortStructAccuracy = 'ShortStructAccuracy' in params ? params.ShortStructAccuracy : null;
        this.ShortStructRecall = 'ShortStructRecall' in params ? params.ShortStructRecall : null;
        this.LongStructAccuracy = 'LongStructAccuracy' in params ? params.LongStructAccuracy : null;
        this.LongStructRecall = 'LongStructRecall' in params ? params.LongStructRecall : null;
        this.LongContentAccuracy = 'LongContentAccuracy' in params ? params.LongContentAccuracy : null;
        this.LongContentRecall = 'LongContentRecall' in params ? params.LongContentRecall : null;

    }
}

/**
 * 用于返回结构化任务结果
 * @class
 */
class ResultObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片质量分
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * 由结构化算法结构化json转换的字符串，具体协议参见算法结构化结果协议
         * @type {string || null}
         */
        this.StructureResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.StructureResult = 'StructureResult' in params ? params.StructureResult : null;

    }
}

/**
 * DescribeStructCompareData请求参数结构体
 * @class
 */
class DescribeStructCompareDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主任务号
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 子任务号
         * @type {string || null}
         */
        this.SubTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.SubTaskId = 'SubTaskId' in params ? params.SubTaskId : null;

    }
}

/**
 * CreateStructureTask返回参数结构体
 * @class
 */
class CreateStructureTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的主任务号
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人工复核数据的子任务信息
 * @class
 */
class ReviewDataTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主任务号
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 子任务号
         * @type {string || null}
         */
        this.SubTaskId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型
         * @type {string || null}
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
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.SubTaskId = 'SubTaskId' in params ? params.SubTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeStructureTaskResult返回参数结构体
 * @class
 */
class DescribeStructureTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 结构化识别结果数组，每个数组元素对应一个图片的结构化结果，顺序和输入参数的ImageList或FileList对应。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResultObject> || null}
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
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ResultObject();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建结构化任务子任务信息
 * @class
 */
class CreateStructureTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可
         * @type {Array.<string> || null}
         */
        this.FileList = null;

        /**
         * 客户号
         * @type {string || null}
         */
        this.CustomerId = null;

        /**
         * 客户姓名
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列
         * @type {Array.<string> || null}
         */
        this.ImageList = null;

        /**
         * 报告年份
         * @type {string || null}
         */
        this.Year = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.FileList = 'FileList' in params ? params.FileList : null;
        this.CustomerId = 'CustomerId' in params ? params.CustomerId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.ImageList = 'ImageList' in params ? params.ImageList : null;
        this.Year = 'Year' in params ? params.Year : null;

    }
}

module.exports = {
    DescribeStructCompareDataResponse: DescribeStructCompareDataResponse,
    DescribeStructureTaskResultRequest: DescribeStructureTaskResultRequest,
    CreateStructureTaskRequest: CreateStructureTaskRequest,
    CompareMetricsData: CompareMetricsData,
    ResultObject: ResultObject,
    DescribeStructCompareDataRequest: DescribeStructCompareDataRequest,
    CreateStructureTaskResponse: CreateStructureTaskResponse,
    ReviewDataTaskInfo: ReviewDataTaskInfo,
    DescribeStructureTaskResultResponse: DescribeStructureTaskResultResponse,
    CreateStructureTaskInfo: CreateStructureTaskInfo,

}
