/**
 * DescribeLogs请求参数结构体
 */
export interface DescribeLogsRequest {
    /**
      * 查询哪个服务的事件（可选值为TRAIN, NOTEBOOK, INFER）
      */
    Service: string;
    /**
      * 查询哪个Pod的日志（支持结尾通配符*)
      */
    PodName: string;
    /**
      * 日志查询开始时间（RFC3339格式的时间字符串），默认值为当前时间的前一个小时
      */
    StartTime?: string;
    /**
      * 日志查询结束时间（RFC3339格式的时间字符串），默认值为当前时间
      */
    EndTime?: string;
    /**
      * 日志查询条数，默认值100，最大值100
      */
    Limit?: number;
    /**
      * 排序方向（可选值为ASC, DESC ），默认为DESC
      */
    Order?: string;
    /**
      * 按哪个字段排序（可选值为Timestamp），默认值为Timestamp
      */
    OrderField?: string;
    /**
      * 日志查询上下文，查询下一页的时候需要回传这个字段，该字段来自本接口的返回
      */
    Context?: string;
    /**
      * 过滤条件
注意:
1. Filter.Name：目前只支持Key（也就是按关键字过滤日志）
2. Filter.Values：表示过滤日志的关键字；Values为多个的时候表示同时满足
3. Filter. Negative和Filter. Fuzzy没有使用
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteTrainingModelVersion返回参数结构体
 */
export interface DeleteTrainingModelVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 点信息描述
 */
export interface PointInfo {
    /**
      * X坐标值
注意：此字段可能返回 null，表示取不到有效值。
      */
    X: number;
    /**
      * Y坐标值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y: number;
}
/**
 * StartTrainingTask请求参数结构体
 */
export interface StartTrainingTaskRequest {
    /**
      * 训练任务ID
      */
    Id: string;
}
/**
 * DescribeDatasetDetailStructured返回参数结构体
 */
export interface DescribeDatasetDetailStructuredResponse {
    /**
      * 数据总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 表格头信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColumnNames: Array<string>;
    /**
      * 表格内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    RowItems: Array<RowItem>;
    /**
      * 文本内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    RowTexts: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBillingResourceGroups请求参数结构体
 */
export interface DescribeBillingResourceGroupsRequest {
    /**
      * 资源组类型; 枚举值 TRAIN:训练 INFERENCE:推理
      */
    Type: string;
    /**
      * Filter.Name: 枚举值: ResourceGroupId (资源组id列表)
                    ResourceGroupName (资源组名称列表)
Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为5，Filter.Values的上限为100
      */
    Filters?: Array<Filter>;
    /**
      * 标签过滤
      */
    TagFilters?: Array<TagFilter>;
    /**
      * 偏移量，默认为0；分页查询起始位置，如：Limit为100，第一页Offset为0，第二页OffSet为100....即每页左边为闭区间
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为30;
注意：小于0则默认为20；大于30则默认为30
      */
    Limit?: number;
    /**
      * 支持模糊查找资源组id和资源组名
      */
    SearchWord?: string;
    /**
      * 是否不展示节点列表;
true: 不展示，false 展示；
默认为false
      */
    DontShowInstanceSet?: boolean;
}
/**
 * DescribeTrainingFrameworks返回参数结构体
 */
export interface DescribeTrainingFrameworksResponse {
    /**
      * 框架信息列表
      */
    FrameworkInfos: Array<FrameworkInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrainingModelVersions请求参数结构体
 */
export interface DescribeTrainingModelVersionsRequest {
    /**
      * 模型ID
      */
    TrainingModelId: string;
    /**
      * 过滤条件
Filter.Name: 枚举值:
    TrainingModelVersionId (模型版本ID)
    ModelVersionType (模型版本类型) 其值支持: NORMAL(通用) ACCELERATE (加速)
    ModelFormat（模型格式）其值Filter.Values支持：
TORCH_SCRIPT/PYTORCH/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML
    AlgorithmFramework (算法框架) 其值Filter.Values支持：TENSORFLOW/PYTORCH/DETECTRON2
Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
      */
    Filters?: Array<Filter>;
}
/**
 * 计费项询价单元
 */
export interface SpecUnit {
    /**
      * 计费项名称
      */
    SpecName: string;
    /**
      * 计费项数量,建议不超过100万
      */
    SpecCount: number;
}
/**
 * CreateDataset返回参数结构体
 */
export interface CreateDatasetResponse {
    /**
      * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrainingTasks请求参数结构体
 */
export interface DescribeTrainingTasksRequest {
    /**
      * 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]

取值范围：
Name（名称）：task1
Id（task ID）：train-23091792777383936
Status（状态）：STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILED
ChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）
CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止）
      */
    Filters?: Array<Filter>;
    /**
      * 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }]
      */
    TagFilters?: Array<TagFilter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为10，最大为50
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
      */
    OrderField?: string;
}
/**
 * DescribeDatasetDetailUnstructured请求参数结构体
 */
export interface DescribeDatasetDetailUnstructuredRequest {
    /**
      * 数据集ID
      */
    DatasetId?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回个数，默认20，目前最大支持2000条数据
      */
    Limit?: number;
    /**
      * 标签过滤参数，对应标签值
      */
    LabelList?: Array<string>;
    /**
      * 标注状态过滤参数:
STATUS_ANNOTATED，已标注
STATUS_NON_ANNOTATED，未标注
STATUS_ALL，全部
默认为STATUS_ALL
      */
    AnnotationStatus?: string;
    /**
      * 数据集ID列表
      */
    DatasetIds?: Array<string>;
}
/**
 * cos的路径信息
 */
export interface CosPathInfo {
    /**
      * 存储桶
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bucket: string;
    /**
      * 所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 路径列表，目前只支持单个
注意：此字段可能返回 null，表示取不到有效值。
      */
    Paths: Array<string>;
}
/**
 * DescribeBillingResourceGroups返回参数结构体
 */
export interface DescribeBillingResourceGroupsResponse {
    /**
      * 资源组总数； 注意接口是分页拉取的，total是指资源组总数，不是本次返回中ResourceGroupSet数组的大小
      */
    TotalCount: number;
    /**
      * 资源组详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupSet: Array<ResourceGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 计费项询价结果
 */
export interface SpecPrice {
    /**
      * 计费项名称
      */
    SpecName: string;
    /**
      * 原价，单位：分。最大值42亿，超过则返回0
      */
    TotalCost: number;
    /**
      * 优惠后的价格，单位：分
      */
    RealTotalCost: number;
}
/**
 * DescribeTrainingMetrics请求参数结构体
 */
export interface DescribeTrainingMetricsRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeTrainingTaskPods请求参数结构体
 */
export interface DescribeTrainingTaskPodsRequest {
    /**
      * 训练任务ID
      */
    Id: string;
}
/**
 * DescribeTrainingModelVersion请求参数结构体
 */
export interface DescribeTrainingModelVersionRequest {
    /**
      * 模型版本ID
      */
    TrainingModelVersionId: string;
}
/**
 * DescribeLatestTrainingMetrics返回参数结构体
 */
export interface DescribeLatestTrainingMetricsResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 最近一次上报的训练指标.每个Metric中只有一个点的数据, 即len(Values) = len(Timestamps) = 1
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metrics: Array<TrainingMetric>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatasetDetailUnstructured返回参数结构体
 */
export interface DescribeDatasetDetailUnstructuredResponse {
    /**
      * 已标注数据量
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotatedTotalCount: number;
    /**
      * 没有标注数据量
注意：此字段可能返回 null，表示取不到有效值。
      */
    NonAnnotatedTotalCount: number;
    /**
      * 过滤数据总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterTotalCount: number;
    /**
      * 过滤数据详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterLabelList: Array<FilterLabelInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 图片列表查询结果详情
 */
export interface FilterLabelInfo {
    /**
      * 数据集id
      */
    DatasetId: string;
    /**
      * 文件ID
      */
    FileId: string;
    /**
      * 文件路径
      */
    FileName: string;
    /**
      * 分类标签结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClassificationLabels: Array<string>;
    /**
      * 检测标签结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    DetectionLabels: Array<DetectionLabelInfo>;
    /**
      * 分割标签结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    SegmentationLabels: Array<SegmentationInfo>;
    /**
      * RGB 图片路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    RGBPath: string;
    /**
      * 标签模板类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    LabelTemplateType: string;
    /**
      * 下载url链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 缩略图下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadThumbnailUrl: string;
    /**
      * 分割结果图片下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadRGBUrl: string;
    /**
      * OCR场景
IDENTITY：识别
STRUCTURE：智能结构化
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrScene: string;
    /**
      * OCR场景标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrLabels: Array<OcrLabelInfo>;
}
/**
 * CFS存储的配置
 */
export interface CFSConfig {
    /**
      * cfs的实例的ID
      */
    Id: string;
    /**
      * 存储的路径
      */
    Path: string;
}
/**
 * PushTrainingMetrics请求参数结构体
 */
export interface PushTrainingMetricsRequest {
    /**
      * 指标数据
      */
    Data?: Array<MetricData>;
}
/**
 * 推理镜像详情
 */
export interface InferTemplate {
    /**
      * 模板ID
      */
    InferTemplateId: string;
    /**
      * 模板镜像
      */
    InferTemplateImage: string;
}
/**
 * 框架版本以及对应的训练模式
 */
export interface FrameworkVersion {
    /**
      * 框架版本
      */
    Version: string;
    /**
      * 训练模式
      */
    TrainingModes: Array<string>;
}
/**
 * 数据点
 */
export interface DataPoint {
    /**
      * 指标名字
      */
    Name: string;
    /**
      * 值
      */
    Value: number;
}
/**
 * CreateTrainingModel请求参数结构体
 */
export interface CreateTrainingModelRequest {
    /**
      * 导入方式（MODEL/VERSION）
      */
    ImportMethod: string;
    /**
      * 模型来源cos目录，以/结尾
      */
    TrainingModelCosPath: CosPathInfo;
    /**
      * 推理环境来源（SYSTEM/CUSTOM）
      */
    ReasoningEnvironmentSource: string;
    /**
      * 模型名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
      */
    TrainingModelName?: string;
    /**
      * 标签配置
      */
    Tags?: Array<Tag>;
    /**
      * 训练任务名称
      */
    TrainingJobName?: string;
    /**
      * 算法框架 （PYTORCH/TENSORFLOW/DETECTRON2/PMML)
      */
    AlgorithmFramework?: string;
    /**
      * 推理环境
      */
    ReasoningEnvironment?: string;
    /**
      * 训练指标，最多支持1000字符
      */
    TrainingModelIndex?: string;
    /**
      * 模型版本
      */
    TrainingModelVersion?: string;
    /**
      * 自定义推理环境
      */
    ReasoningImageInfo?: ImageInfo;
    /**
      * 模型移动方式（CUT/COPY）
      */
    ModelMoveMode?: string;
    /**
      * 训练任务ID
      */
    TrainingJobId?: string;
    /**
      * 模型ID（导入新模型不需要，导入新版本需要）
      */
    TrainingModelId?: string;
    /**
      * 模型存储cos目录
      */
    ModelOutputPath?: CosPathInfo;
    /**
      * 模型来源 （JOB/COS/AUTO_ML）
      */
    TrainingModelSource?: string;
    /**
      * 模型偏好
      */
    TrainingPreference?: string;
    /**
      * 自动学习任务ID
      */
    AutoMLTaskId?: string;
    /**
      * 任务版本
      */
    TrainingJobVersion?: string;
    /**
      * 模型版本类型；
枚举值：NORMAL(通用)  ACCELERATE(加速)
注意:  默认为NORMAL
      */
    ModelVersionType?: string;
    /**
      * 模型格式 （PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML）
      */
    ModelFormat?: string;
}
/**
 * DescribeTrainingModelVersions返回参数结构体
 */
export interface DescribeTrainingModelVersionsResponse {
    /**
      * 模型版本列表
      */
    TrainingModelVersions: Array<TrainingModelVersionDTO>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 启动命令信息
 */
export interface StartCmdInfo {
    /**
      * 启动命令
      */
    StartCmd?: string;
    /**
      * ps启动命令
      */
    PsStartCmd?: string;
    /**
      * worker启动命令
      */
    WorkerStartCmd?: string;
}
/**
 * DescribeTrainingModels返回参数结构体
 */
export interface DescribeTrainingModelsResponse {
    /**
      * 模型列表
      */
    TrainingModels: Array<TrainingModelDTO>;
    /**
      * 模型总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源配置
 */
export interface ResourceConfigInfo {
    /**
      * 角色，eg：PS、WORKER、DRIVER、EXECUTOR
      */
    Role: string;
    /**
      * cpu核数，1000=1核
      */
    Cpu?: number;
    /**
      * 内存，单位为MB
      */
    Memory?: number;
    /**
      * gpu卡类型
      */
    GpuType?: string;
    /**
      * gpu数
      */
    Gpu?: number;
    /**
      * 算力规格ID
计算规格 (for后付费)，可选值如下：
TI.S.LARGE.POST: 4C8G
TI.S.2XLARGE16.POST:  8C16G
TI.S.2XLARGE32.POST:  8C32G
TI.S.4XLARGE32.POST:  16C32G
TI.S.4XLARGE64.POST:  16C64G
TI.S.6XLARGE48.POST:  24C48G
TI.S.6XLARGE96.POST:  24C96G
TI.S.8XLARGE64.POST:  32C64G
TI.S.8XLARGE128.POST : 32C128G
TI.GN10.2XLARGE40.POST: 8C40G V100*1
TI.GN10.5XLARGE80.POST:  18C80G V100*2
TI.GN10.10XLARGE160.POST :  32C160G V100*4
TI.GN10.20XLARGE320.POST :  72C320G V100*8
TI.GN7.8XLARGE128.POST: 32C128G T4*1
TI.GN7.10XLARGE160.POST: 40C160G T4*2
TI.GN7.20XLARGE320.POST: 80C32
      */
    InstanceType?: string;
    /**
      * 计算节点数
      */
    InstanceNum?: number;
    /**
      * 算力规格名称
计算规格 (for后付费)，可选值如下：
4C8G
8C16G
8C32G
16C32G
6C64G
24C48G
24C96G
32C64G
32C128G
8C40G V100*1
8C80G V100*2
32C160G V100*4
72C320G V100*8
32C128G T4*1
40C160G T4*2
80C32
      */
    InstanceTypeAlias?: string;
}
/**
 * 训练指标
 */
export interface TrainingMetric {
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 数据值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Values: Array<TrainingDataPoint>;
    /**
      * 上报的Epoch. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Epochs: Array<TrainingDataPoint>;
    /**
      * 上报的Step. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Steps: Array<TrainingDataPoint>;
    /**
      * 上报的TotalSteps. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSteps: Array<TrainingDataPoint>;
}
/**
 * 描述腾讯云标签
 */
export interface Tag {
    /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKey: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue: string;
}
/**
 * DescribeDatasets请求参数结构体
 */
export interface DescribeDatasetsRequest {
    /**
      * 数据集id列表
      */
    DatasetIds?: Array<string>;
    /**
      * 数据集查询过滤条件，多个Filter之间的关系为逻辑与（AND）关系，过滤字段Filter.Name，类型为String
DatasetName，数据集名称
DatasetScope，数据集范围，SCOPE_DATASET_PRIVATE或SCOPE_DATASET_PUBLIC
      */
    Filters?: Array<Filter>;
    /**
      * 标签过滤条件
      */
    TagFilters?: Array<TagFilter>;
    /**
      * 排序值，支持Asc或Desc，默认Desc
      */
    Order?: string;
    /**
      * 排序字段，支持CreateTime或UpdateTime，默认CreateTime
      */
    OrderField?: string;
    /**
      * 偏移值
      */
    Offset?: number;
    /**
      * 返回数据个数，默认20，最大支持200
      */
    Limit?: number;
}
/**
 * DeleteTrainingModel返回参数结构体
 */
export interface DeleteTrainingModelResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInferTemplates返回参数结构体
 */
export interface DescribeInferTemplatesResponse {
    /**
      * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkTemplates: Array<InferTemplateGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInferTemplates请求参数结构体
 */
export declare type DescribeInferTemplatesRequest = null;
/**
 * gpu 详情
 */
export interface GpuDetail {
    /**
      * GPU 显卡类型；枚举值: V100 A100 T4
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * GPU 显卡数；单位为1/100卡，比如100代表1卡
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: number;
}
/**
 * DescribeTrainingFrameworks请求参数结构体
 */
export declare type DescribeTrainingFrameworksRequest = null;
/**
 * 图像检测参数信息
 */
export interface DetectionLabelInfo {
    /**
      * 点坐标列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points: Array<PointInfo>;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<string>;
    /**
      * 类别
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameType: string;
}
/**
 * 推理镜像组
 */
export interface InferTemplateGroup {
    /**
      * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
      */
    Framework: string;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkVersion: string;
    /**
      * 支持的训练框架集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    Groups: Array<string>;
    /**
      * 镜像模板参数列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    InferTemplates: Array<InferTemplate>;
}
/**
 * 数据集详情
 */
export interface DatasetInfo {
    /**
      * 数据集id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetId: string;
    /**
      * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetName: string;
    /**
      * 数据集创建者
注意：此字段可能返回 null，表示取不到有效值。
      */
    Creator: string;
    /**
      * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetVersion: string;
    /**
      * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetType: string;
    /**
      * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetTags: Array<Tag>;
    /**
      * 数据集对应标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetAnnotationTaskName: string;
    /**
      * 数据集对应标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetAnnotationTaskId: string;
    /**
      * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Process: number;
    /**
      * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetStatus: string;
    /**
      * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 数据集创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 数据集更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 外部任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExternalTaskType: string;
    /**
      * 数据集存储大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetSize: string;
    /**
      * 数据集数据数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileNum: number;
    /**
      * 数据集源cos 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageDataPath: CosPathInfo;
    /**
      * 数据集输出cos路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageLabelPath: CosPathInfo;
    /**
      * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationStatus: string;
    /**
      * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationType: string;
    /**
      * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationFormat: string;
    /**
      * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetScope: string;
}
/**
 * Tag过滤参数
 */
export interface TagFilter {
    /**
      * 标签键
      */
    TagKey?: string;
    /**
      * 多个标签值
      */
    TagValues?: Array<string>;
}
/**
 * 镜像描述信息
 */
export interface ImageInfo {
    /**
      * 镜像类型：TCR为腾讯云TCR镜像; CCR为腾讯云TCR个人版镜像，PreSet为平台预置镜像
      */
    ImageType: string;
    /**
      * 镜像地址
      */
    ImageUrl: string;
    /**
      * TCR镜像对应的地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryRegion?: string;
    /**
      * TCR镜像对应的实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryId?: string;
}
/**
 * CreateTrainingTask返回参数结构体
 */
export interface CreateTrainingTaskResponse {
    /**
      * 训练任务ID
      */
    Id: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTrainingTask请求参数结构体
 */
export interface CreateTrainingTaskRequest {
    /**
      * 训练任务名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
      */
    Name: string;
    /**
      * 训练模式，通过DescribeTrainingFrameworks接口查询，eg：PS_WORKER、DDP、MPI、HOROVOD
      */
    TrainingMode: string;
    /**
      * 计费模式，eg：PREPAID预付费，即包年包月；POSTPAID_BY_HOUR按小时后付费
      */
    ChargeType: string;
    /**
      * 资源配置，需填写对应算力规格ID和节点数量，算力规格ID查询接口为DescribeBillingSpecsPrice，eg：[{"Role":"WORKER", "InstanceType": "TI.S.MEDIUM.POST", "InstanceNum": 1}]
      */
    ResourceConfigInfos: Array<ResourceConfigInfo>;
    /**
      * COS代码包路径
      */
    CodePackagePath: CosPathInfo;
    /**
      * COS训练输出路径
      */
    Output: CosPathInfo;
    /**
      * 是否上报日志
      */
    LogEnable: boolean;
    /**
      * 训练框架名称，通过DescribeTrainingFrameworks接口查询，eg：SPARK、TENSORFLOW、PYTORCH、LIGHT
      */
    FrameworkName?: string;
    /**
      * 训练框架版本，通过DescribeTrainingFrameworks接口查询，eg：1.15-py3.6-cpu、1.9-py3.6-cuda11.1-gpu
      */
    FrameworkVersion?: string;
    /**
      * 预付费专用资源组ID，通过DescribeBillingResourceGroups接口查询
      */
    ResourceGroupId?: string;
    /**
      * 标签配置
      */
    Tags?: Array<Tag>;
    /**
      * 自定义镜像信息
      */
    ImageInfo?: ImageInfo;
    /**
      * 启动命令信息，默认为sh start.sh
      */
    StartCmdInfo?: StartCmdInfo;
    /**
      * 数据来源，eg：DATASET、COS、CFS、HDFS
      */
    DataSource?: string;
    /**
      * 数据配置
      */
    DataConfigs?: Array<DataConfig>;
    /**
      * VPC Id
      */
    VpcId?: string;
    /**
      * 子网Id
      */
    SubnetId?: string;
    /**
      * CLS日志配置
      */
    LogConfig?: LogConfig;
    /**
      * 调优参数
      */
    TuningParameters?: string;
    /**
      * 备注，最多500个字
      */
    Remark?: string;
}
/**
 * DescribeDatasets返回参数结构体
 */
export interface DescribeDatasetsResponse {
    /**
      * 数据集总量（名称维度）
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 数据集按照数据集名称聚合的分组
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetGroups: Array<DatasetGroup>;
    /**
      * 数据集ID总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetIdNums: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBillingSpecsPrice请求参数结构体
 */
export interface DescribeBillingSpecsPriceRequest {
    /**
      * 询价参数，支持批量询价
      */
    SpecsParam: Array<SpecUnit>;
}
/**
 * 资源组节点信息
 */
export interface Instance {
    /**
      * 资源组节点id
      */
    InstanceId: string;
    /**
      * 节点已用资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsedResource: ResourceInfo;
    /**
      * 节点总资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalResource: ResourceInfo;
    /**
      * 节点状态
注意：此字段为枚举值
说明:
DEPLOYING: 部署中
RUNNING: 运行中
DEPLOY_FAILED: 部署失败
 RELEASING 释放中
RELEASED：已释放
EXCEPTION：异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceStatus: string;
    /**
      * 创建人
      */
    SubUin: string;
    /**
      * 创建时间:
注意：北京时间，比如: 2021-12-01 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 到期时间
注意：北京时间，比如：2021-12-11 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 自动续费标识
注意：此字段为枚举值
说明：
NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期通知
NOTIFY_AND_AUTO_RENEW：自动续费且到期通知
DISABLE_NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期不通知
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoRenewFlag: string;
    /**
      * 计费项ID
      */
    SpecId: string;
    /**
      * 计费项别名
      */
    SpecAlias: string;
}
/**
 * DeleteTrainingModel请求参数结构体
 */
export interface DeleteTrainingModelRequest {
    /**
      * 模型ID
      */
    TrainingModelId: string;
}
/**
 * DeleteTrainingTask返回参数结构体
 */
export interface DeleteTrainingTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据集组
 */
export interface DatasetGroup {
    /**
      * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetId: string;
    /**
      * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetName: string;
    /**
      * 创建者
注意：此字段可能返回 null，表示取不到有效值。
      */
    Creator: string;
    /**
      * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetVersion: string;
    /**
      * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetType: string;
    /**
      * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetTags: Array<Tag>;
    /**
      * 数据集标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetAnnotationTaskName: string;
    /**
      * 数据集标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetAnnotationTaskId: string;
    /**
      * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Process: number;
    /**
      * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetStatus: string;
    /**
      * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 外部关联TASKType
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExternalTaskType: string;
    /**
      * 数据集大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetSize: string;
    /**
      * 数据集数据量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileNum: number;
    /**
      * 数据集源COS路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageDataPath: CosPathInfo;
    /**
      * 数据集标签存储路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageLabelPath: CosPathInfo;
    /**
      * 数据集版本聚合详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetVersions: Array<DatasetInfo>;
    /**
      * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationStatus: string;
    /**
      * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationType: string;
    /**
      * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnnotationFormat: string;
    /**
      * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasetScope: string;
}
/**
 * 训练数据
 */
export declare type TrainingDataPoint = null;
/**
 * DescribeLatestTrainingMetrics请求参数结构体
 */
export interface DescribeLatestTrainingMetricsRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * 描述资源信息
 */
export interface ResourceInfo {
    /**
      * 处理器资源, 单位为1/1000核
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu: number;
    /**
      * 内存资源, 单位为1M
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: number;
    /**
      * Gpu卡个数资源, 单位为0.01单位的GpuType.
Gpu=100表示使用了“一张”gpu卡, 但此处的“一张”卡有可能是虚拟化后的1/4卡, 也有可能是整张卡. 取决于实例的机型
例1 实例的机型带有1张虚拟gpu卡, 每张虚拟gpu卡对应1/4张实际T4卡, 则此时 GpuType=T4, Gpu=100, RealGpu=25.
例2 实例的机型带有4张gpu整卡, 每张卡对应1张实际T4卡, 则 此时 GpuType=T4, Gpu=400, RealGpu=400.
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gpu?: number;
    /**
      * Gpu卡型号 T4或者V100
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuType?: string;
    /**
      * 创建或更新时无需填写，仅展示需要关注
后付费非整卡实例对应的实际的Gpu卡资源, 表示gpu资源对应实际的gpu卡个数.
RealGpu=100表示实际使用了一张gpu卡, 对应实际的实例机型, 有可能代表带有1/4卡的实例4个, 或者带有1/2卡的实例2个, 或者带有1卡的实力1个.
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealGpu?: number;
}
/**
 * 资源信息
 */
export interface GroupResource {
    /**
      * CPU核数; 单位为1/1000核，比如100表示0.1核
      */
    Cpu: number;
    /**
      * 内存；单位为MB
      */
    Memory: number;
    /**
      * 总卡数；GPUDetail 显卡数之和；单位为1/100卡，比如100代表1卡
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gpu: number;
    /**
      * Gpu详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuDetailSet: Array<GpuDetail>;
}
/**
 * 数据集结构体
 */
export interface DataSetConfig {
    /**
      * 数据集ID
      */
    Id: string;
}
/**
 * DeleteTrainingTask请求参数结构体
 */
export interface DeleteTrainingTaskRequest {
    /**
      * 训练任务ID
      */
    Id: string;
}
/**
 * 过滤器
 */
export interface Filter {
    /**
      * 过滤字段名称
      */
    Name?: string;
    /**
      * 过滤字段取值
      */
    Values?: Array<string>;
    /**
      * 是否开启反向查询
      */
    Negative?: boolean;
    /**
      * 是否开启模糊匹配
      */
    Fuzzy?: boolean;
}
/**
 * CreateDataset请求参数结构体
 */
export interface CreateDatasetRequest {
    /**
      * 数据集名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
      */
    DatasetName: string;
    /**
      * 数据集类型:
TYPE_DATASET_TEXT，文本
TYPE_DATASET_IMAGE，图片
TYPE_DATASET_TABLE，表格
TYPE_DATASET_OTHER，其他
      */
    DatasetType: string;
    /**
      * 数据源cos路径
      */
    StorageDataPath: CosPathInfo;
    /**
      * 数据集标签cos存储路径
      */
    StorageLabelPath: CosPathInfo;
    /**
      * 数据集标签
      */
    DatasetTags?: Array<Tag>;
    /**
      * 数据集标注状态:
STATUS_NON_ANNOTATED，未标注
STATUS_ANNOTATED，已标注
      */
    AnnotationStatus?: string;
    /**
      * 标注类型:
ANNOTATION_TYPE_CLASSIFICATION，图片分类
ANNOTATION_TYPE_DETECTION，目标检测
ANNOTATION_TYPE_SEGMENTATION，图片分割
ANNOTATION_TYPE_TRACKING，目标跟踪
      */
    AnnotationType?: string;
    /**
      * 标注格式:
ANNOTATION_FORMAT_TI，TI平台格式
ANNOTATION_FORMAT_PASCAL，Pascal Voc
ANNOTATION_FORMAT_COCO，COCO
ANNOTATION_FORMAT_FILE，文件目录结构
      */
    AnnotationFormat?: string;
    /**
      * 表头信息
      */
    SchemaInfos?: Array<SchemaInfo>;
    /**
      * 数据是否存在表头
      */
    IsSchemaExisted?: boolean;
}
/**
 * 模型列表
 */
export interface TrainingModelDTO {
    /**
      * 模型id
      */
    TrainingModelId: string;
    /**
      * 模型名称
      */
    TrainingModelName: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 模型创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * 自定义指标
 */
export interface CustomTrainingData {
    /**
      * 指标名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName?: string;
    /**
      * 指标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metrics?: Array<CustomTrainingMetric>;
}
/**
 * 文本行信息
 */
export interface RowItem {
    /**
      * rowValue 数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Values: Array<RowValue>;
}
/**
 * CreateTrainingModel返回参数结构体
 */
export interface CreateTrainingModelResponse {
    /**
      * 模型ID，TrainingModel ID
      */
    Id: string;
    /**
      * 模型版本ID
      */
    TrainingModelVersionId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单条日志数据结构
 */
export interface LogIdentity {
    /**
      * 单条日志的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 单条日志的内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 这条日志对应的Pod名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodName: string;
    /**
      * 日志的时间戳（RFC3339格式的时间字符串）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp: string;
}
/**
 * DescribeDatasetDetailStructured请求参数结构体
 */
export interface DescribeDatasetDetailStructuredRequest {
    /**
      * 数据集ID
      */
    DatasetId: string;
    /**
      * 偏移值
      */
    Offset?: number;
    /**
      * 返回数据条数，默认20，目前最大支持2000条数据
      */
    Limit?: number;
}
/**
 * 图片分割参数信息
 */
export interface SegmentationInfo {
    /**
      * 点坐标数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points: Array<PointInfo>;
    /**
      * 分割标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 灰度值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gray: number;
    /**
      * 颜色
注意：此字段可能返回 null，表示取不到有效值。
      */
    Color: string;
}
/**
 * DeleteDataset返回参数结构体
 */
export interface DeleteDatasetResponse {
    /**
      * 删除的datasetId
      */
    DatasetId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 自定义训练指标数据点
 */
export interface CustomTrainingPoint {
    /**
      * X值
      */
    XValue?: number;
    /**
      * Y值
      */
    YValue?: number;
}
/**
 * 训练任务详情
 */
export interface TrainingTaskDetail {
    /**
      * 训练任务ID
      */
    Id: string;
    /**
      * 训练任务名称
      */
    Name: string;
    /**
      * 主账号uin
      */
    Uin: string;
    /**
      * 子账号uin
      */
    SubUin: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 训练框架名称，eg：SPARK、TENSORFLOW、PYTORCH、LIGHT
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkName: string;
    /**
      * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkVersion: string;
    /**
      * 训练模式，eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingMode: string;
    /**
      * 计费模式
      */
    ChargeType: string;
    /**
      * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupId: string;
    /**
      * 资源配置
      */
    ResourceConfigInfos: Array<ResourceConfigInfo>;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageInfo: ImageInfo;
    /**
      * 代码包
      */
    CodePackagePath: CosPathInfo;
    /**
      * 启动命令信息
      */
    StartCmdInfo: StartCmdInfo;
    /**
      * 数据来源，eg：DATASET、COS
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSource: string;
    /**
      * 数据配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataConfigs: Array<DataConfig>;
    /**
      * 调优参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TuningParameters: string;
    /**
      * 训练输出
      */
    Output: CosPathInfo;
    /**
      * 是否上报日志
      */
    LogEnable: boolean;
    /**
      * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogConfig: LogConfig;
    /**
      * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 任务状态
      */
    Status: string;
    /**
      * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuntimeInSeconds: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
      */
    ChargeStatus: string;
    /**
      * 最近一次实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestInstanceId: string;
    /**
      * TensorBoard ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TensorBoardId: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureReason: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 计费金额信息，eg：2.00元/小时 (for后付费)
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillingInfo: string;
    /**
      * 预付费专用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupName: string;
}
/**
 * DescribeTrainingTasks返回参数结构体
 */
export interface DescribeTrainingTasksResponse {
    /**
      * 训练任务集
      */
    TrainingTaskSet: Array<TrainingTaskSetItem>;
    /**
      * 数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 框架信息列表
 */
export interface FrameworkInfo {
    /**
      * 框架名称
      */
    Name: string;
    /**
      * 框架版本以及对应的训练模式
      */
    VersionInfos: Array<FrameworkVersion>;
}
/**
 * DescribeLogs返回参数结构体
 */
export interface DescribeLogsResponse {
    /**
      * 分页的游标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Context: string;
    /**
      * 日志数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<LogIdentity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模型版本列表
 */
export interface TrainingModelVersionDTO {
    /**
      * 模型id
      */
    TrainingModelId: string;
    /**
      * 模型版本id
      */
    TrainingModelVersionId: string;
    /**
      * 模型版本
      */
    TrainingModelVersion: string;
    /**
      * 模型来源
      */
    TrainingModelSource: string;
    /**
      * 创建时间
      */
    TrainingModelCreateTime: string;
    /**
      * 创建人uin
      */
    TrainingModelCreator: string;
    /**
      * 算法框架
      */
    AlgorithmFramework: string;
    /**
      * 推理环境
      */
    ReasoningEnvironment: string;
    /**
      * 推理环境来源
      */
    ReasoningEnvironmentSource: string;
    /**
      * 模型指标
      */
    TrainingModelIndex: string;
    /**
      * 训练任务名称
      */
    TrainingJobName: string;
    /**
      * 模型cos路径
      */
    TrainingModelCosPath: CosPathInfo;
    /**
      * 模型名称
      */
    TrainingModelName: string;
    /**
      * 训练任务id
      */
    TrainingJobId: string;
    /**
      * 自定义推理环境
      */
    ReasoningImageInfo: ImageInfo;
    /**
      * 模型版本创建时间
      */
    CreateTime: string;
    /**
      * 模型处理状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingModelStatus: string;
    /**
      * 模型处理进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingModelProgress: number;
    /**
      * 模型错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingModelErrorMsg: string;
    /**
      * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingModelFormat: string;
}
/**
 * DescribeTrainingTask请求参数结构体
 */
export interface DescribeTrainingTaskRequest {
    /**
      * 训练任务ID
      */
    Id: string;
}
/**
 * 文件行信息
 */
export interface RowValue {
    /**
      * 列名
      */
    Name: string;
    /**
      * 列值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 出参类型
 */
export interface TrainingTaskSetItem {
    /**
      * 训练任务ID
      */
    Id: string;
    /**
      * 训练任务名称
      */
    Name: string;
    /**
      * 框架名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkName: string;
    /**
      * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameworkVersion: string;
    /**
      * 训练模式eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrainingMode: string;
    /**
      * 计费模式
      */
    ChargeType: string;
    /**
      * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
      */
    ChargeStatus: string;
    /**
      * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupId: string;
    /**
      * 资源配置
      */
    ResourceConfigInfos: Array<ResourceConfigInfo>;
    /**
      * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 任务状态
      */
    Status: string;
    /**
      * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuntimeInSeconds: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 训练输出
      */
    Output: CosPathInfo;
    /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureReason: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 计费金额信息，eg：2.00元/小时 (for后付费)
      */
    BillingInfo: string;
    /**
      * 预付费专用资源组名称
      */
    ResourceGroupName: string;
    /**
      * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageInfo: ImageInfo;
}
/**
 * 表格数据集表头信息
 */
export interface SchemaInfo {
    /**
      * 长度30字符内
      */
    Name: string;
    /**
      * 数据类型
      */
    Type: string;
}
/**
 * DeleteDataset请求参数结构体
 */
export interface DeleteDatasetRequest {
    /**
      * 数据集id
      */
    DatasetId: string;
    /**
      * 是否删除cos标签文件
      */
    DeleteLabelEnable: boolean;
}
/**
 * 自定义指标
 */
export interface CustomTrainingMetric {
    /**
      * X轴数据类型: TIMESTAMP; EPOCH; STEP
      */
    XType?: string;
    /**
      * 数据点
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points?: Array<CustomTrainingPoint>;
}
/**
 * 数据配置
 */
export interface DataConfig {
    /**
      * 映射路径
      */
    MappingPath: string;
    /**
      * DATASET、COS、CFS、HDFS
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSourceType: string;
    /**
      * 来自数据集的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSetSource: DataSetConfig;
    /**
      * 来自cos的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    COSSource: CosPathInfo;
    /**
      * 来自CFS的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    CFSSource: CFSConfig;
    /**
      * 来自HDFS的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    HDFSSource: HDFSConfig;
}
/**
 * PushTrainingMetrics返回参数结构体
 */
export interface PushTrainingMetricsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopTrainingTask返回参数结构体
 */
export interface StopTrainingTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * HDFS的参数配置
 */
export interface HDFSConfig {
    /**
      * 集群实例ID,实例ID形如: emr-xxxxxxxx
      */
    Id: string;
    /**
      * 路径
      */
    Path: string;
}
/**
 * DescribeTrainingMetrics返回参数结构体
 */
export interface DescribeTrainingMetricsResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 训练指标数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<CustomTrainingData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrainingTaskPods返回参数结构体
 */
export interface DescribeTrainingTaskPodsResponse {
    /**
      * pod名称列表
      */
    PodNames: Array<string>;
    /**
      * 数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OCR场景标签列表
 */
export interface OcrLabelInfo {
    /**
      * 坐标点围起来的框
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points: Array<PointInfo>;
    /**
      * 框的形状：
FRAME_TYPE_RECTANGLE
FRAME_TYPE_POLYGON
注意：此字段可能返回 null，表示取不到有效值。
      */
    FrameType: string;
    /**
      * 智能结构化：key区域对应的内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 智能结构化：上述key的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyId: string;
    /**
      * 识别：框区域的内容
智能结构化：value区域对应的内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 智能结构化：value区域所关联的key 区域的keyID的集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyIdsForValue: Array<string>;
    /**
      * key或者value区域内容的方向：
DIRECTION_VERTICAL
DIRECTION_HORIZONTAL
注意：此字段可能返回 null，表示取不到有效值。
      */
    Direction: string;
}
/**
 * DescribeTrainingModels请求参数结构体
 */
export interface DescribeTrainingModelsRequest {
    /**
      * 过滤器
Filter.Name: 枚举值:
    keyword (模型名称)
    TrainingModelId (模型ID)
    ModelVersionType (模型版本类型) 其值Filter.Values支持: NORMAL(通用) ACCELERATE (加速)
    TrainingModelSource (模型来源)  其值Filter.Values支持： JOB/COS/AUTO_ML
    AlgorithmFramework (算法框架) 其值Filter.Values支持：TENSORFLOW/PYTORCH/DETECTRON2
    ModelFormat（模型格式）其值Filter.Values支持：
TORCH_SCRIPT/PYTORCH/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML
Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
Filter.Fuzzy取值：true/false，是否支持模糊匹配
      */
    Filters?: Array<Filter>;
    /**
      * 排序字段，默认CreateTime
      */
    OrderField?: string;
    /**
      * 排序方式，ASC/DESC，默认DESC
      */
    Order?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回结果数量
      */
    Limit?: number;
    /**
      * 标签过滤
      */
    TagFilters?: Array<TagFilter>;
}
/**
 * 资源组
 */
export interface ResourceGroup {
    /**
      * 资源组id
      */
    ResourceGroupId: string;
    /**
      * 资源组名称
      */
    ResourceGroupName: string;
    /**
      * 可用节点个数(运行中的节点)
      */
    FreeInstance: number;
    /**
      * 总节点个数(所有节点)
      */
    TotalInstance: number;
    /**
      * 资资源组已用的资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsedResource: GroupResource;
    /**
      * 资源组总资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalResource: GroupResource;
    /**
      * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceSet: Array<Instance>;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
}
/**
 * DescribeTrainingTask返回参数结构体
 */
export interface DescribeTrainingTaskResponse {
    /**
      * 训练任务详情
      */
    TrainingTaskDetail: TrainingTaskDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 指标数据
 */
export interface MetricData {
    /**
      * 训练任务id
      */
    TaskId: string;
    /**
      * 时间戳.unix timestamp,单位为秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: number;
    /**
      * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uin?: string;
    /**
      * 本次上报数据所处的训练周期数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Epoch?: number;
    /**
      * 本次上报数据所处的训练迭代次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Step?: number;
    /**
      * 训练停止所需的迭代总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSteps?: number;
    /**
      * 数据点。数组元素为不同指标的数据。数组长度不超过10。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points?: Array<DataPoint>;
}
/**
 * DeleteTrainingModelVersion请求参数结构体
 */
export interface DeleteTrainingModelVersionRequest {
    /**
      * 模型版本ID
      */
    TrainingModelVersionId: string;
}
/**
 * DescribeBillingSpecsPrice返回参数结构体
 */
export interface DescribeBillingSpecsPriceResponse {
    /**
      * 计费项价格，支持批量返回
      */
    SpecsPrice: Array<SpecPrice>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrainingModelVersion返回参数结构体
 */
export interface DescribeTrainingModelVersionResponse {
    /**
      * 模型版本
      */
    TrainingModelVersion: TrainingModelVersionDTO;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopTrainingTask请求参数结构体
 */
export interface StopTrainingTaskRequest {
    /**
      * 训练任务ID
      */
    Id: string;
}
/**
 * 日志配置
 */
export interface LogConfig {
    /**
      * 日志需要投递到cls的日志集
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogsetId: string;
    /**
      * 日志需要投递到cls的主题
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicId: string;
}
/**
 * StartTrainingTask返回参数结构体
 */
export interface StartTrainingTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
