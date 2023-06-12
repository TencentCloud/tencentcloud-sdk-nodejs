/**
 * DescribeStructCompareData返回参数结构体
 */
export interface DescribeStructCompareDataResponse {
    /**
     * 保单号
     */
    PolicyId?: string;
    /**
     * 结构化任务ID
     */
    TaskId?: string;
    /**
     * 客户号
     */
    CustomerId?: string;
    /**
     * 客户姓名
     */
    CustomerName?: string;
    /**
     * 复核时间
     */
    ReviewTime?: string;
    /**
     * 算法识别结果
     */
    MachineResult?: string;
    /**
     * 人工复核结果
     */
    ManualResult?: string;
    /**
     * 结构化对比指标数据
     */
    Metrics?: CompareMetricsData;
    /**
     * 新增项
     */
    NewItems?: string;
    /**
     * 修改项
     */
    ModifyItems?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStructureTaskResult请求参数结构体
 */
export interface DescribeStructureTaskResultRequest {
    /**
     * 结构化任务ID
     */
    TaskId: string;
}
/**
 * CreateStructureTask请求参数结构体
 */
export interface CreateStructureTaskRequest {
    /**
     * 保单号
     */
    PolicyId: string;
    /**
     * 客户号
     */
    CustomerId: string;
    /**
     * 客户姓名
     */
    CustomerName: string;
    /**
     * 文件类型，目前只支持体检报告类型，对应的值为：HealthReport
     */
    TaskType: string;
    /**
     * 报告年份
     */
    Year: string;
    /**
     * 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可
     */
    FileList: Array<string>;
    /**
     * 险种，如果是体检报告类型，此参数是必填，类型说明如下：
  CriticalDiseaseInsurance:重疾险
  LifeInsurance：寿险
  AccidentInsurance：意外险
     */
    InsuranceTypes?: Array<string>;
    /**
     * 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列
     */
    ImageList?: Array<string>;
}
/**
 * 结构化对比指标（准确率/召回率）数据
 */
export interface CompareMetricsData {
    /**
     * 短文准确率
     */
    ShortStructAccuracy: string;
    /**
     * 短文召回率
     */
    ShortStructRecall: string;
    /**
     * 长文结构化准确率
     */
    LongStructAccuracy: string;
    /**
     * 长文结构化召回率
     */
    LongStructRecall: string;
    /**
     * 长文提取准确率
     */
    LongContentAccuracy: string;
    /**
     * 长文提取召回率
     */
    LongContentRecall: string;
}
/**
 * 用于返回结构化任务结果
 */
export interface ResultObject {
    /**
     * 图片质量分
     */
    Quality: number;
    /**
     * 由结构化算法结构化json转换的字符串，具体协议参见算法结构化结果协议
     */
    StructureResult: string;
}
/**
 * DescribeStructCompareData请求参数结构体
 */
export interface DescribeStructCompareDataRequest {
    /**
     * 结构化任务ID
     */
    TaskId: string;
}
/**
 * CreateStructureTask返回参数结构体
 */
export interface CreateStructureTaskResponse {
    /**
     * 本次结构化任务的ID
     */
    TaskId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStructureTaskResult返回参数结构体
 */
export interface DescribeStructureTaskResultResponse {
    /**
     * 结果状态：
  0：返回成功
  1：结果未生成
  2：结果生成失败
     */
    Status: number;
    /**
     * 结构化识别结果数组，每个数组元素对应一个图片的结构化结果，顺序和输入参数的ImageList或FileList对应。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results: Array<ResultObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
