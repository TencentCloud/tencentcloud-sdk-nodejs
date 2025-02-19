/**
 * GetMonitorData返回参数结构体
 */
export interface GetMonitorDataResponse {
    /**
     * 统计周期
     */
    Period?: number;
    /**
     * 指标名
     */
    MetricName?: string;
    /**
     * 数据点数组
     */
    DataPoints?: Array<DataPoint>;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 返回信息
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 计算算子
 */
export interface Expr {
    /**
     * 算子名称
     */
    Function?: string;
    /**
     * 算子入参值
     */
    N?: number;
}
/**
 * GetMonitorData请求参数结构体
 */
export interface GetMonitorDataRequest {
    /**
     * 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
     */
    Namespace: string;
    /**
     * 指标名称，如CPUUsage，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName
     */
    MetricName: string;
    /**
     * 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取10个实例的监控数据。
     */
    Instances: Array<Instance>;
    /**
     * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期。单请求的数据点数限制为1440个。
     */
    Period?: number;
    /**
     * 起始时间，如2018-09-22T19:51:23+08:00
     */
    StartTime?: string;
    /**
     * 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间。 EndTime不能小于StartTime
     */
    EndTime?: string;
    /**
     * 计算算子
     */
    Expr?: Expr;
}
/**
 * 实例维度组合数组
 */
export interface Instance {
    /**
     * 实例的维度组合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dimensions: Array<Dimension>;
}
/**
 * 监控数据点
 */
export interface DataPoint {
    /**
     * 实例对象维度组合
     */
    Dimensions?: Array<Dimension>;
    /**
     * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
     */
    Timestamps?: Array<number>;
    /**
     * 监控值数组，该数组和Timestamps一一对应
     */
    Values?: Array<number>;
}
/**
 * 实例对象的维度组合
 */
export interface Dimension {
    /**
     * 实例维度名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 实例维度值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
}
