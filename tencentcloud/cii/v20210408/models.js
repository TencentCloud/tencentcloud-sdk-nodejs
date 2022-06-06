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
 * 报告分类信息
 * @class
 */
class ClassifyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级分类
         * @type {string || null}
         */
        this.FirstClass = null;

        /**
         * 二级分类
         * @type {string || null}
         */
        this.SecondClass = null;

        /**
         * 三级分类
         * @type {string || null}
         */
        this.ThirdClass = null;

        /**
         * 一级分类序号
         * @type {number || null}
         */
        this.FirstClassId = null;

        /**
         * 二级分类序号
         * @type {number || null}
         */
        this.SecondClassId = null;

        /**
         * 三级分类序号
         * @type {number || null}
         */
        this.ThirdClassId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstClass = 'FirstClass' in params ? params.FirstClass : null;
        this.SecondClass = 'SecondClass' in params ? params.SecondClass : null;
        this.ThirdClass = 'ThirdClass' in params ? params.ThirdClass : null;
        this.FirstClassId = 'FirstClassId' in params ? params.FirstClassId : null;
        this.SecondClassId = 'SecondClassId' in params ? params.SecondClassId : null;
        this.ThirdClassId = 'ThirdClassId' in params ? params.ThirdClassId : null;

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
 * 机器核保输出
 * @class
 */
class MachineUnderwriteOutput extends  AbstractModel {
    constructor(){
        super();

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
         * 各个险种的结果
         * @type {Array.<InsuranceResult> || null}
         */
        this.Results = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerId = 'CustomerId' in params ? params.CustomerId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new InsuranceResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

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

        /**
         * 回调地址，接收Post请求传送结果
         * @type {string || null}
         */
        this.CallbackUrl = null;

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
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * 核保结果输出
 * @class
 */
class UnderwriteOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户ID
         * @type {string || null}
         */
        this.CustomerId = null;

        /**
         * 客户姓名
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 结果
         * @type {Array.<InsuranceResult> || null}
         */
        this.Results = null;

        /**
         * 复核时间
         * @type {string || null}
         */
        this.ReviewTime = null;

        /**
         * 人工复核结果
         * @type {Array.<UnderwriteConclusion> || null}
         */
        this.ManualDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerId = 'CustomerId' in params ? params.CustomerId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new InsuranceResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.ReviewTime = 'ReviewTime' in params ? params.ReviewTime : null;

        if (params.ManualDetail) {
            this.ManualDetail = new Array();
            for (let z in params.ManualDetail) {
                let obj = new UnderwriteConclusion();
                obj.deserialize(params.ManualDetail[z]);
                this.ManualDetail.push(obj);
            }
        }

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
 * AddSubStructureTasks返回参数结构体
 * @class
 */
class AddSubStructureTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增量子任务id数组
         * @type {Array.<string> || null}
         */
        this.SubTaskIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubTaskIds = 'SubTaskIds' in params ? params.SubTaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 包含险种的各个核保结论
 * @class
 */
class InsuranceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 险种:CriticalDiseaseInsurance(重疾险);LifeInsurance(寿险);AccidentInsurance(意外险);MedicalInsurance(医疗险)
         * @type {string || null}
         */
        this.InsuranceType = null;

        /**
         * 对应险种的机器核保结果
         * @type {Array.<MachinePredict> || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InsuranceType = 'InsuranceType' in params ? params.InsuranceType : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new MachinePredict();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }

    }
}

/**
 * 核保结论 机器结论和人工结论统一数据结构
 * @class
 */
class UnderwriteConclusion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结论
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * 解释
         * @type {string || null}
         */
        this.Explanation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;
        this.Explanation = 'Explanation' in params ? params.Explanation : null;

    }
}

/**
 * DescribeStructureDifference返回参数结构体
 * @class
 */
class DescribeStructureDifferenceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主任务号
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 差异的结果数组
         * @type {Array.<PerStructDifference> || null}
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
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new PerStructDifference();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUnderwriteTaskById请求参数结构体
 * @class
 */
class CreateUnderwriteTaskByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主任务ID数组，
         * @type {Array.<string> || null}
         */
        this.MainTaskIds = null;

        /**
         * 回调地址，可不传（提供轮询机制）。
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainTaskIds = 'MainTaskIds' in params ? params.MainTaskIds : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * UploadMedicalFile返回参数结构体
 * @class
 */
class UploadMedicalFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件存储的key，可以用来创建结构化任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 复核差异接口的每一份报告的差异结果
 * @class
 */
class PerStructDifference extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务ID
         * @type {string || null}
         */
        this.SubTaskId = null;

        /**
         * 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历)
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 修改的项
         * @type {Array.<StructureModifyItem> || null}
         */
        this.ModifyItems = null;

        /**
         * 新增的项
         * @type {Array.<StructureOneItem> || null}
         */
        this.NewItems = null;

        /**
         * 删除的项
         * @type {Array.<StructureOneItem> || null}
         */
        this.RemoveItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubTaskId = 'SubTaskId' in params ? params.SubTaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.ModifyItems) {
            this.ModifyItems = new Array();
            for (let z in params.ModifyItems) {
                let obj = new StructureModifyItem();
                obj.deserialize(params.ModifyItems[z]);
                this.ModifyItems.push(obj);
            }
        }

        if (params.NewItems) {
            this.NewItems = new Array();
            for (let z in params.NewItems) {
                let obj = new StructureOneItem();
                obj.deserialize(params.NewItems[z]);
                this.NewItems.push(obj);
            }
        }

        if (params.RemoveItems) {
            this.RemoveItems = new Array();
            for (let z in params.RemoveItems) {
                let obj = new StructureOneItem();
                obj.deserialize(params.RemoveItems[z]);
                this.RemoveItems.push(obj);
            }
        }

    }
}

/**
 * UploadMedicalFile请求参数结构体
 * @class
 */
class UploadMedicalFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件的字节内容。File与FileURL有一个不为空即可，若FileURL参数也存在，会只取File的内容。
         * @type {binary || null}
         */
        this.File = null;

        /**
         * 文件的URL地址。File与FileURL不能同时为空，若File参数也存在，会只取File的内容。
         * @type {string || null}
         */
        this.FileURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.File = 'File' in params ? params.File : null;
        this.FileURL = 'FileURL' in params ? params.FileURL : null;

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
 * 复核差异接口的新增或者删除的项
 * @class
 */
class StructureOneItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新字段的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 字段的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateAutoClassifyStructureTask请求参数结构体
 * @class
 */
class CreateAutoClassifyStructureTaskRequest extends  AbstractModel {
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
         * @type {Array.<CreateAutoClassifyStructureTaskInfo> || null}
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

        /**
         * 回调地址，接收Post请求传送结果
         * @type {string || null}
         */
        this.CallbackUrl = null;

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
                let obj = new CreateAutoClassifyStructureTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.InsuranceTypes = 'InsuranceTypes' in params ? params.InsuranceTypes : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * DescribeMachineUnderwrite请求参数结构体
 * @class
 */
class DescribeMachineUnderwriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核保任务ID
         * @type {string || null}
         */
        this.UnderwriteTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnderwriteTaskId = 'UnderwriteTaskId' in params ? params.UnderwriteTaskId : null;

    }
}

/**
 * DescribeQualityScore请求参数结构体
 * @class
 */
class DescribeQualityScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件二进制数据
         * @type {binary || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.File = 'File' in params ? params.File : null;

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
         * 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历)
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
 * DescribeUnderwriteTask返回参数结构体
 * @class
 */
class DescribeUnderwriteTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云主账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 操作人子账户ID
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 保单ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 主任务ID
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 核保任务ID
         * @type {string || null}
         */
        this.UnderwriteTaskId = null;

        /**
         * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 核保结果
         * @type {Array.<UnderwriteOutput> || null}
         */
        this.UnderwriteResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.UnderwriteTaskId = 'UnderwriteTaskId' in params ? params.UnderwriteTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.UnderwriteResults) {
            this.UnderwriteResults = new Array();
            for (let z in params.UnderwriteResults) {
                let obj = new UnderwriteOutput();
                obj.deserialize(params.UnderwriteResults[z]);
                this.UnderwriteResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStructureResult请求参数结构体
 * @class
 */
class DescribeStructureResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建任务时返回的主任务ID
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
 * DescribeReportClassify请求参数结构体
 * @class
 */
class DescribeReportClassifyRequest extends  AbstractModel {
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
         * 文件地址数组
         * @type {Array.<string> || null}
         */
        this.FileList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.FileList = 'FileList' in params ? params.FileList : null;

    }
}

/**
 * 机器核保结论子项
 * @class
 */
class UnderwriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 结果
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 风险值或者说明
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Range = null;

        /**
         * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ReportDate = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 检查项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InspectProject = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 原名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 阴阳性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.YinYang = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Range = 'Range' in params ? params.Range : null;
        this.ReportDate = 'ReportDate' in params ? params.ReportDate : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.InspectProject = 'InspectProject' in params ? params.InspectProject : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.YinYang = 'YinYang' in params ? params.YinYang : null;

    }
}

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
 * 机器核保预测结果
 * @class
 */
class MachinePredict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核保引擎名称
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 核保结论：加费、承保、拒保、延期、除外、加费+除外
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * AI决策树解释
         * @type {Array.<UnderwriteItem> || null}
         */
        this.Explanation = null;

        /**
         * 疾病指标
         * @type {Array.<UnderwriteItem> || null}
         */
        this.Disease = null;

        /**
         * 检查异常
         * @type {Array.<UnderwriteItem> || null}
         */
        this.Laboratory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;

        if (params.Explanation) {
            this.Explanation = new Array();
            for (let z in params.Explanation) {
                let obj = new UnderwriteItem();
                obj.deserialize(params.Explanation[z]);
                this.Explanation.push(obj);
            }
        }

        if (params.Disease) {
            this.Disease = new Array();
            for (let z in params.Disease) {
                let obj = new UnderwriteItem();
                obj.deserialize(params.Disease[z]);
                this.Disease.push(obj);
            }
        }

        if (params.Laboratory) {
            this.Laboratory = new Array();
            for (let z in params.Laboratory) {
                let obj = new UnderwriteItem();
                obj.deserialize(params.Laboratory[z]);
                this.Laboratory.push(obj);
            }
        }

    }
}

/**
 * DescribeQualityScore返回参数结构体
 * @class
 */
class DescribeQualityScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量分
         * @type {number || null}
         */
        this.QualityScore = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QualityScore = 'QualityScore' in params ? params.QualityScore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnderwriteTask请求参数结构体
 * @class
 */
class DescribeUnderwriteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.UnderwriteTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnderwriteTaskId = 'UnderwriteTaskId' in params ? params.UnderwriteTaskId : null;

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

        /**
         * 报告分类信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassifyInfo> || null}
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
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.StructureResult = 'StructureResult' in params ? params.StructureResult : null;

        if (params.ReportType) {
            this.ReportType = new Array();
            for (let z in params.ReportType) {
                let obj = new ClassifyInfo();
                obj.deserialize(params.ReportType[z]);
                this.ReportType.push(obj);
            }
        }

    }
}

/**
 * DescribeStructureResult返回参数结构体
 * @class
 */
class DescribeStructureResultResponse extends  AbstractModel {
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
         * 结构化结果
         * @type {Array.<StructureResultObject> || null}
         */
        this.Results = null;

        /**
         * 主任务ID
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
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new StructureResultObject();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStructureDifference请求参数结构体
 * @class
 */
class DescribeStructureDifferenceRequest extends  AbstractModel {
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
         * 创建的主任务号，用于查询结果
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
 * 报告分类结果
 * @class
 */
class ClassifiedReports extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告类型
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * 文件列表
         * @type {Array.<string> || null}
         */
        this.FileList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.FileList = 'FileList' in params ? params.FileList : null;

    }
}

/**
 * DescribeMachineUnderwrite返回参数结构体
 * @class
 */
class DescribeMachineUnderwriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云主账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 操作人子账户ID
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 保单ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 主任务ID
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 核保任务ID
         * @type {string || null}
         */
        this.UnderwriteTaskId = null;

        /**
         * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 机器核保结果
         * @type {Array.<MachineUnderwriteOutput> || null}
         */
        this.UnderwriteResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;
        this.UnderwriteTaskId = 'UnderwriteTaskId' in params ? params.UnderwriteTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.UnderwriteResults) {
            this.UnderwriteResults = new Array();
            for (let z in params.UnderwriteResults) {
                let obj = new MachineUnderwriteOutput();
                obj.deserialize(params.UnderwriteResults[z]);
                this.UnderwriteResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAutoClassifyStructureTask返回参数结构体
 * @class
 */
class CreateAutoClassifyStructureTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的主任务号，用于查询结果
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
 * DescribeReportClassify返回参数结构体
 * @class
 */
class DescribeReportClassifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告分类结果
         * @type {Array.<ClassifiedReports> || null}
         */
        this.Reports = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Reports) {
            this.Reports = new Array();
            for (let z in params.Reports) {
                let obj = new ClassifiedReports();
                obj.deserialize(params.Reports[z]);
                this.Reports.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUnderwriteTaskById返回参数结构体
 * @class
 */
class CreateUnderwriteTaskByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核保任务ID数据
         * @type {Array.<string> || null}
         */
        this.UnderwriteTaskIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnderwriteTaskIds = 'UnderwriteTaskIds' in params ? params.UnderwriteTaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 结构化结果
 * @class
 */
class StructureResultObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0表示正常返回；1代表结果未生成；2代表任务执行失败
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 报告类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历)
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 结构化结果
         * @type {string || null}
         */
        this.StructureResult = null;

        /**
         * 子任务ID
         * @type {string || null}
         */
        this.SubTaskId = null;

        /**
         * 任务文件列表
         * @type {Array.<string> || null}
         */
        this.TaskFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.StructureResult = 'StructureResult' in params ? params.StructureResult : null;
        this.SubTaskId = 'SubTaskId' in params ? params.SubTaskId : null;
        this.TaskFiles = 'TaskFiles' in params ? params.TaskFiles : null;

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
         * 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历)
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

/**
 * AddSubStructureTasks请求参数结构体
 * @class
 */
class AddSubStructureTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主任务id
         * @type {string || null}
         */
        this.MainTaskId = null;

        /**
         * 子任务信息数组
         * @type {Array.<CreateStructureTaskInfo> || null}
         */
        this.TaskInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainTaskId = 'MainTaskId' in params ? params.MainTaskId : null;

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new CreateStructureTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }

    }
}

/**
 * 创建自动分类的结构化任务子任务信息
 * @class
 */
class CreateAutoClassifyStructureTaskInfo extends  AbstractModel {
    constructor(){
        super();

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileList = 'FileList' in params ? params.FileList : null;
        this.CustomerId = 'CustomerId' in params ? params.CustomerId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.ImageList = 'ImageList' in params ? params.ImageList : null;

    }
}

/**
 * 结构化复核差异接口的修改的项
 * @class
 */
class StructureModifyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改的字段的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 机器结果的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 人工结果的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Manual = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.Manual = 'Manual' in params ? params.Manual : null;

    }
}

module.exports = {
    ClassifyInfo: ClassifyInfo,
    DescribeStructureTaskResultRequest: DescribeStructureTaskResultRequest,
    MachineUnderwriteOutput: MachineUnderwriteOutput,
    CreateStructureTaskRequest: CreateStructureTaskRequest,
    UnderwriteOutput: UnderwriteOutput,
    DescribeStructCompareDataRequest: DescribeStructCompareDataRequest,
    AddSubStructureTasksResponse: AddSubStructureTasksResponse,
    InsuranceResult: InsuranceResult,
    UnderwriteConclusion: UnderwriteConclusion,
    DescribeStructureDifferenceResponse: DescribeStructureDifferenceResponse,
    CreateUnderwriteTaskByIdRequest: CreateUnderwriteTaskByIdRequest,
    UploadMedicalFileResponse: UploadMedicalFileResponse,
    PerStructDifference: PerStructDifference,
    UploadMedicalFileRequest: UploadMedicalFileRequest,
    CompareMetricsData: CompareMetricsData,
    StructureOneItem: StructureOneItem,
    CreateAutoClassifyStructureTaskRequest: CreateAutoClassifyStructureTaskRequest,
    DescribeMachineUnderwriteRequest: DescribeMachineUnderwriteRequest,
    DescribeQualityScoreRequest: DescribeQualityScoreRequest,
    ReviewDataTaskInfo: ReviewDataTaskInfo,
    DescribeUnderwriteTaskResponse: DescribeUnderwriteTaskResponse,
    DescribeStructureResultRequest: DescribeStructureResultRequest,
    DescribeReportClassifyRequest: DescribeReportClassifyRequest,
    UnderwriteItem: UnderwriteItem,
    DescribeStructCompareDataResponse: DescribeStructCompareDataResponse,
    MachinePredict: MachinePredict,
    DescribeQualityScoreResponse: DescribeQualityScoreResponse,
    DescribeUnderwriteTaskRequest: DescribeUnderwriteTaskRequest,
    ResultObject: ResultObject,
    DescribeStructureResultResponse: DescribeStructureResultResponse,
    DescribeStructureDifferenceRequest: DescribeStructureDifferenceRequest,
    CreateStructureTaskResponse: CreateStructureTaskResponse,
    DescribeStructureTaskResultResponse: DescribeStructureTaskResultResponse,
    ClassifiedReports: ClassifiedReports,
    DescribeMachineUnderwriteResponse: DescribeMachineUnderwriteResponse,
    CreateAutoClassifyStructureTaskResponse: CreateAutoClassifyStructureTaskResponse,
    DescribeReportClassifyResponse: DescribeReportClassifyResponse,
    CreateUnderwriteTaskByIdResponse: CreateUnderwriteTaskByIdResponse,
    StructureResultObject: StructureResultObject,
    CreateStructureTaskInfo: CreateStructureTaskInfo,
    AddSubStructureTasksRequest: AddSubStructureTasksRequest,
    CreateAutoClassifyStructureTaskInfo: CreateAutoClassifyStructureTaskInfo,
    StructureModifyItem: StructureModifyItem,

}
