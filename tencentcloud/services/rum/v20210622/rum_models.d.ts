/**
 * CreateTawInstance请求参数结构体
 */
export interface CreateTawInstanceRequest {
    /**
     * 片区Id，(至少大于0)
     */
    AreaId: number;
    /**
     * 计费类型, (1=后付费)
     */
    ChargeType: number;
    /**
     * 数据保存时间，(至少大于0)
     */
    DataRetentionDays: number;
    /**
     * 实例名称，(最大长度不超过255字节)
     */
    InstanceName: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
    /**
     * 实例描述，(最大长度不超过1024字节)
     */
    InstanceDesc?: string;
    /**
     * 每天数据上报量，（不作量级限制）
     */
    CountNum?: string;
    /**
     * 数据存储时长计费
     */
    PeriodRetain?: string;
    /**
     * 实例购买渠道("cdn" 等)
     */
    BuyingChannel?: string;
    /**
     * 预付费资源包类型(仅预付费需要)
     */
    ResourcePackageType?: number;
    /**
     * 预付费资源包数量(仅预付费需要)
     */
    ResourcePackageNum?: number;
    /**
     * 实例类型 1:原web相关类型 2:app端类型
     */
    InstanceType?: number;
}
/**
 * DescribeDataFetchProject请求参数结构体
 */
export interface DescribeDataFetchProjectRequest {
    /**
     * 开始时间，示例值：1625454840
     */
    StartTime: number;
    /**
     * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间，示例值：1625454840
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误）
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
    /**
     * httpcode响应码
     */
    Status?: string;
    /**
     * retcode
     */
    Ret?: string;
}
/**
 * DescribeData返回参数结构体
 */
export interface DescribeDataResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTawInstance返回参数结构体
 */
export interface CreateTawInstanceResponse {
    /**
     * 实例Id
     */
    InstanceId?: string;
    /**
     * 预付费订单 ，预付费不为null，后付费为null
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
    /**
     * 需要删除的项目 ID
     */
    ID: number;
}
/**
 * DescribeProjectLimits返回参数结构体
 */
export interface DescribeProjectLimitsResponse {
    /**
     * 上报率数组列表
     */
    ProjectLimitSet?: Array<ProjectLimit>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRumLogList返回参数结构体
 */
export interface DescribeRumLogListResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAppMetricsData请求参数结构体
 */
export interface DescribeAppMetricsDataRequest {
    /**
     * app 项目ID
     */
    ProjectID: number;
    /**
     * 查询的表名
     */
    From: string;
    /**
     * 查询指标 field
     */
    Fields: string;
    /**
     * 查询的过滤条件
     */
    Filter: string;
    /**
     * 查询简单过滤条件
     */
    FilterSimple?: string;
    /**
     * group by 条件
     */
    GroupBy?: Array<string>;
    /**
     * order by 条件
     */
    OrderBy?: Array<string>;
    /**
     * limit 参数
     */
    Limit?: number;
    /**
     * offset 参数
     */
    Offset?: number;
    /**
     * group by 参数
     */
    GroupByModifier?: string;
}
/**
 * DescribeDataPvUrlInfo返回参数结构体
 */
export interface DescribeDataPvUrlInfoResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopProject返回参数结构体
 */
export interface StopProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataFetchUrl返回参数结构体
 */
export interface DescribeDataFetchUrlResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeError请求参数结构体
 */
export interface DescribeErrorRequest {
    /**
     * 日期
     */
    Date: string;
    /**
     * 项目ID
     */
    ID: number;
}
/**
 * StopInstance请求参数结构体
 */
export interface StopInstanceRequest {
    /**
     * 需要停止的实例id
     */
    InstanceId: string;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
     * 要修改的实例id
     */
    InstanceId: string;
    /**
     * 新的实例名称(长度最大不超过255)
     */
    InstanceName?: string;
    /**
     * 新的实例描述(长度最大不超过1024)
     */
    InstanceDesc?: string;
}
/**
 * DescribeError返回参数结构体
 */
export interface DescribeErrorResponse {
    /**
     * 内容
     */
    Content?: string;
    /**
     * 项目ID
     */
    ID?: number;
    /**
     * 时间
     */
    CreateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAppMetricsData返回参数结构体
 */
export interface DescribeAppMetricsDataResponse {
    /**
     * 查询数据返回
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAppSingleCaseDetailList返回参数结构体
 */
export interface DescribeAppSingleCaseDetailListResponse {
    /**
     * 查询数据返回
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWhitelist返回参数结构体
 */
export interface DeleteWhitelistResponse {
    /**
     * 消息success
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePvList返回参数结构体
 */
export interface DescribePvListResponse {
    /**
     * pv列表
     */
    ProjectPvSet?: Array<RumPvInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RumUv 访问量
 */
export interface RumUvInfo {
    /**
     * 项目ID
     */
    ProjectId: number;
    /**
     * uv访问量
     */
    Uv: string;
    /**
     * 创建时间
     */
    CreateTime: string;
}
/**
 * DescribeScores请求参数结构体
 */
export interface DescribeScoresRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 项目ID
     */
    ID?: number;
    /**
     * 该参数已废弃
     * @deprecated
     */
    IsDemo?: number;
}
/**
 * DescribeDataReportCount请求参数结构体
 */
export interface DescribeDataReportCountRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID?: number;
    /**
     * 上报类型（custom，event，log，miniProgramData，performance，pv，speed，webvitals）
     */
    ReportType?: string;
    /**
     * 实例ID
     */
    InstanceID?: string;
}
/**
 * DescribeReleaseFiles请求参数结构体
 */
export interface DescribeReleaseFilesRequest {
    /**
     * 项目 id
     */
    ProjectID: number;
    /**
     * 文件版本
     */
    FileVersion?: string;
    /**
     * 查询过滤条件（根据sourcemap的文件名模糊匹配）
     */
    FileName?: string;
}
/**
 * CreateReleaseFile请求参数结构体
 */
export interface CreateReleaseFileRequest {
    /**
     * 项目 id
     */
    ProjectID: number;
    /**
     * 文件信息列表
     */
    Files: Array<ReleaseFile>;
}
/**
 * DescribeDataCustomUrl请求参数结构体
 */
export interface DescribeDataCustomUrlRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 自定义测速的key的值
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeUvList返回参数结构体
 */
export interface DescribeUvListResponse {
    /**
     * uv列表
     */
    ProjectUvSet: Array<RumUvInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签key
     */
    Key: string;
    /**
     * 标签value
     */
    Value: string;
}
/**
 * DescribeRumGroupLog返回参数结构体
 */
export interface DescribeRumGroupLogResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataStaticUrl请求参数结构体
 */
export interface DescribeDataStaticUrlRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteStarProject请求参数结构体
 */
export interface DeleteStarProjectRequest {
    /**
     * 实例ID：****-1792
     */
    InstanceID: string;
    /**
     * 项目ID
     */
    ID: number;
}
/**
 * DescribeWhitelists请求参数结构体
 */
export interface DescribeWhitelistsRequest {
    /**
     * 实例instance-ID
     */
    InstanceID: string;
}
/**
 * DescribeUvList请求参数结构体
 */
export interface DescribeUvListRequest {
    /**
     * ID
     */
    ProjectId: number;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 获取day：d，   min:m
     */
    Dimension?: string;
}
/**
 * DescribeTawAreas返回参数结构体
 */
export interface DescribeTawAreasResponse {
    /**
     * 片区总数
     */
    TotalCount?: number;
    /**
     * 片区列表
     */
    AreaSet?: Array<RumAreaInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeData请求参数结构体
 */
export interface DescribeDataRequest {
    /**
     * 查询字符串
     */
    Query: string;
    /**
     * 项目ID
     */
    ID: number;
}
/**
 * StopProject请求参数结构体
 */
export interface StopProjectRequest {
    /**
     * 项目 id
     */
    ProjectId: number;
}
/**
 * ResumeProject返回参数结构体
 */
export interface ResumeProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyProjectLimit请求参数结构体
 */
export interface ModifyProjectLimitRequest {
    /**
     * 项目ID
     */
    ProjectID: number;
    /**
     * 取值为[log speed performance webvitals pv event custom miniProgramData]其中之一
     */
    ProjectInterface?: string;
    /**
     * 上报比例   10代表10%
     */
    ReportRate?: number;
    /**
     * 上报类型 1：比例  2：上报量
     */
    ReportType?: number;
    /**
     * 主键ID
     */
    ID?: number;
}
/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAppSingleCaseList返回参数结构体
 */
export interface DescribeAppSingleCaseListResponse {
    /**
     * 查询数据返回
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataPerformancePage请求参数结构体
 */
export interface DescribeDataPerformancePageRequest {
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * pagepv：pv视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
     */
    Type: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 环境变量
     */
    Env?: string;
    /**
     * 网络状态
     */
    NetStatus?: string;
}
/**
 * DeleteReleaseFile请求参数结构体
 */
export interface DeleteReleaseFileRequest {
    /**
     * 文件 id
     */
    ID: number;
}
/**
 * ResumeInstance请求参数结构体
 */
export interface ResumeInstanceRequest {
    /**
     * 需要恢复的实例id
     */
    InstanceId: string;
}
/**
 * DescribeDataFetchUrl请求参数结构体
 */
export interface DescribeDataFetchUrlRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * allcount：性能视图，pagepv：pv视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
    /**
     * httpcode响应码
     */
    Status?: string;
    /**
     * retcode
     */
    Ret?: string;
    /**
     * 网络状态
     */
    NetStatus?: string;
}
/**
 * DescribeRumLogExport请求参数结构体
 */
export interface DescribeRumLogExportRequest {
    /**
     * 导出标识name
     */
    Name: string;
    /**
     * 开始时间（必填）
     */
    StartTime: string;
    /**
     * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
     */
    Query: string;
    /**
     * 结束时间（必填）
     */
    EndTime: string;
    /**
     * 项目ID（必填）
     */
    ID: number;
    /**
     * field条件
     */
    Fields?: Array<string>;
}
/**
 * DescribeDataLogUrlStatistics返回参数结构体
 */
export interface DescribeDataLogUrlStatisticsResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
     * 项目 id
     */
    ID?: number;
    /**
     * 项目唯一key
     */
    Key?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopInstance返回参数结构体
 */
export interface StopInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectLimits请求参数结构体
 */
export interface DescribeProjectLimitsRequest {
    /**
     * 项目ID
     */
    ProjectID: number;
}
/**
 * CreateStarProject返回参数结构体
 */
export interface CreateStarProjectResponse {
    /**
     * 接口返回信息
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
    /**
     * 操作信息
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataPvUrlStatistics请求参数结构体
 */
export interface DescribeDataPvUrlStatisticsRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 环境
     */
    Env?: string;
    /**
     * group by 参数值枚举1:1m  2:5m  3:30m  4:1h
   5:1d
     */
    GroupByType?: number;
    /**
     * 1: 查询智研
  0: 走旧逻辑，已下线，勿使用
     */
    IsNewData?: number;
}
/**
 * 发布文件列表(SOURCEMAP)
 */
export interface ReleaseFile {
    /**
     * 文件版本
     */
    Version?: string;
    /**
     * 文件唯一 key
     */
    FileKey?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件哈希值
     */
    FileHash?: string;
    /**
     * 文件 id
     */
    ID?: number;
}
/**
 * ModifyProjectLimit返回参数结构体
 */
export interface ModifyProjectLimitResponse {
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
 * DescribeRumLogExports返回参数结构体
 */
export interface DescribeRumLogExportsResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataStaticProject请求参数结构体
 */
export interface DescribeDataStaticProjectRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误）
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: Array<string>;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeRumStatsLogList请求参数结构体
 */
export interface DescribeRumStatsLogListRequest {
    /**
     * 开始时间（必填）
     */
    StartTime: string;
    /**
     * 单次查询返回的原始日志条数，最大值为100（必填）
     */
    Limit: number;
    /**
     * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
     */
    Query: string;
    /**
     * 结束时间（必填）
     */
    EndTime: string;
    /**
     * 项目ID（必填）
     */
    ID: number;
}
/**
 * 旁路kafka配置
 */
export interface Kafka {
    /**
     * 1：开启
  0：关闭
     */
    EnableKafka?: number;
    /**
     * host地址
     */
    KafkaHost?: string;
    /**
     * topic
     */
    KafkaTopic?: string;
    /**
     * 版本
     */
    KafkaVersion?: string;
    /**
     * username
     */
    SaslUserName?: string;
    /**
     * password
     */
    SaslPassword?: string;
    /**
     * ssl
     */
    SaslMechanism?: string;
    /**
     * 默认算子id为0新增算子
  一旦算子新增成功会返回正确的算子id值
     */
    SinkId?: number;
}
/**
 * 项目接口限制类型
 */
export interface ProjectLimit {
    /**
     * 接口
     */
    ProjectInterface: string;
    /**
     * 上报率
     */
    ReportRate: number;
    /**
     * 上报类型 1：上报率  2：上报量限制
     */
    ReportType: number;
    /**
     * 主键ID
     */
    ID?: number;
    /**
     * 项目ID
     */
    ProjectID?: number;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
     * 应用名称(不为空且最长为 200)
     */
    Name: string;
    /**
     * 业务系统 ID
     */
    InstanceID: string;
    /**
     * 项目抽样率(大于等于 0)
     */
    Rate: string;
    /**
     * 是否开启聚类
     */
    EnableURLGroup: number;
    /**
     * 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
     */
    Type: string;
    /**
     * 项目对应仓库地址(可选，最长为 256)
     */
    Repo?: string;
    /**
     * 项目对应网页地址(可选，最长为 256)
     */
    URL?: string;
    /**
     * 应用描述(可选，最长为 1000)
     */
    Desc?: string;
}
/**
 * DescribeRumStatsLogList返回参数结构体
 */
export interface DescribeRumStatsLogListResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWhitelist请求参数结构体
 */
export interface CreateWhitelistRequest {
    /**
     * 实例ID：taw-123
     */
    InstanceID: string;
    /**
     * 备注（暂未作字节数限制）
     */
    Remark: string;
    /**
     * uin：业务方标识
     */
    WhitelistUin: string;
    /**
     * 业务方标识
     */
    Aid?: string;
}
/**
 * DescribeDataPvUrlStatistics返回参数结构体
 */
export interface DescribeDataPvUrlStatisticsResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataLogUrlInfo请求参数结构体
 */
export interface DescribeDataLogUrlInfoRequest {
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 时间戳
     */
    StartTime: number;
    /**
     * 时间戳
     */
    EndTime: number;
}
/**
 * DescribeDataCustomUrl返回参数结构体
 */
export interface DescribeDataCustomUrlResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Rum片区信息
 */
export interface RumAreaInfo {
    /**
     * 片区Id
     */
    AreaId: number;
    /**
     * 片区状态(1=有效，2=无效)
     */
    AreaStatus: number;
    /**
     * 片区名称
     */
    AreaName: string;
    /**
     * 片区Key
     */
    AreaKey: string;
    /**
     * 地域码表 id
     */
    AreaRegionID: string;
    /**
     * 地域码表 code 如 ap-xxx（xxx 为地域词）
     */
    AreaRegionCode: string;
    /**
     * 地域缩写
     */
    AreaAbbr: string;
}
/**
 * DescribeDataSetUrlStatistics请求参数结构体
 */
export interface DescribeDataSetUrlStatisticsRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * allcount：性能视图，data：小程序，component：小程序相关，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算
     */
    CostType?: string;
    /**
     * 环境
     */
    Env?: string;
    /**
     * 获取package
     */
    PackageType?: string;
}
/**
 * ResumeInstance返回参数结构体
 */
export interface ResumeInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataStaticProject返回参数结构体
 */
export interface DescribeDataStaticProjectResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateStarProject请求参数结构体
 */
export interface CreateStarProjectRequest {
    /**
     * 实例ID：taw-123
     */
    InstanceID: string;
    /**
     * 项目ID
     */
    ID: number;
}
/**
 * DescribeAppSingleCaseList请求参数结构体
 */
export interface DescribeAppSingleCaseListRequest {
    /**
     * app 项目 ID
     */
    ProjectID: number;
    /**
     * 查询的表名
     */
    From: string;
    /**
     * 查询指标 field
     */
    Fields: string;
    /**
     * 查询的过滤条件
     */
    Filter: string;
    /**
     * 查询简单过滤条件
     */
    FilterSimple?: string;
    /**
     * group by 条件
     */
    GroupBy?: Array<string>;
    /**
     * order by 条件
     */
    OrderBy?: Array<string>;
    /**
     * limit 参数
     */
    Limit?: number;
    /**
     * offset 参数
     */
    Offset?: number;
}
/**
 * DescribeReleaseFileSign请求参数结构体
 */
export interface DescribeReleaseFileSignRequest {
    /**
     * 超时时间，不填默认是 5 分钟
     */
    Timeout?: number;
    /**
     * bucket类型，不填默认1:web，2:app
     */
    FileType?: number;
    /**
     * 获取临时签名的bucket是国内站还是国际站（1表示国际站，其它表示国内站）
     */
    Site?: number;
    /**
     * ProjectID
     */
    ID?: number;
}
/**
 * DeleteWhitelist请求参数结构体
 */
export interface DeleteWhitelistRequest {
    /**
     * 实例ID
     */
    InstanceID: string;
    /**
     * 名单ID
     */
    ID: string;
}
/**
 * DescribeDataLogUrlInfo返回参数结构体
 */
export interface DescribeDataLogUrlInfoResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * rum 日志对象
 */
export interface RumPvInfo {
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * pv访问量
     */
    Pv?: string;
    /**
     * 时间
     */
    CreateTime?: string;
}
/**
 * DeleteReleaseFile返回参数结构体
 */
export interface DeleteReleaseFileResponse {
    /**
     * 接口请求返回字符串
     */
    Msg: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScores返回参数结构体
 */
export interface DescribeScoresResponse {
    /**
     * 数组
     */
    ScoreSet?: Array<ScoreInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataLogUrlStatistics请求参数结构体
 */
export interface DescribeDataLogUrlStatisticsRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 环境区分
     */
    Env?: string;
    /**
     * js异常信息
     */
    ErrorMsg?: string;
}
/**
 * DescribeReleaseFileSign返回参数结构体
 */
export interface DescribeReleaseFileSignResponse {
    /**
     * 临时密钥key
     */
    SecretKey?: string;
    /**
     * 临时密钥 id
     */
    SecretID?: string;
    /**
     * 临时密钥临时 token
     */
    SessionToken?: string;
    /**
     * 开始时间戳
     */
    StartTime?: number;
    /**
     * 过期时间戳
     */
    ExpiredTime?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTawInstances请求参数结构体
 */
export interface DescribeTawInstancesRequest {
    /**
     * 计费状态
     */
    ChargeStatuses?: Array<number | bigint>;
    /**
     * 计费类型
     */
    ChargeTypes?: Array<number | bigint>;
    /**
     * 分页Limit
     */
    Limit?: number;
    /**
     * 分页Offset
     */
    Offset?: number;
    /**
     * 片区Id
     */
    AreaIds?: Array<number | bigint>;
    /**
     * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁), 该参数已废弃，请在Filters内注明
     * @deprecated
     */
    InstanceStatuses?: Array<number | bigint>;
    /**
     * 实例Id, 该参数已废弃，请在Filters内注明
     * @deprecated
     */
    InstanceIds?: Array<string>;
    /**
     * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
     */
    Filters?: Array<Filter>;
    /**
     * 该参数已废弃，demo模式请在Filters内注明
     * @deprecated
     */
    IsDemo?: number;
}
/**
 * DescribeTawAreas请求参数结构体
 */
export interface DescribeTawAreasRequest {
    /**
     * 片区Id
     */
    AreaIds?: Array<number | bigint>;
    /**
     * 片区Key
     */
    AreaKeys?: Array<string>;
    /**
     * 分页Limit，默认根据AreaKeys和AreaStatuses参数查询所有。
     */
    Limit?: number;
    /**
     * 片区状态(1=有效，2=无效)
     */
    AreaStatuses?: Array<number | bigint>;
    /**
     * 分页Offset，默认根据AreaKeys和AreaStatuses参数查询所有。
     */
    Offset?: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
     * 一个或者多个过滤值。
     */
    Values?: Array<string>;
    /**
     * 过滤键的名称。
     */
    Name?: string;
}
/**
 * DeleteStarProject返回参数结构体
 */
export interface DeleteStarProjectResponse {
    /**
     * 返回消息,请求成功才会返回，出现异常默认为null
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataPerformancePage返回参数结构体
 */
export interface DescribeDataPerformancePageResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
    /**
     * 需要删除的实例id
     */
    InstanceId: string;
}
/**
 * DescribeDataStaticResource返回参数结构体
 */
export interface DescribeDataStaticResourceResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataEventUrl返回参数结构体
 */
export interface DescribeDataEventUrlResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataWebVitalsPage请求参数结构体
 */
export interface DescribeDataWebVitalsPageRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 类型暂无
     */
    Type?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算
     */
    CostType?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeDataFetchUrlInfo请求参数结构体
 */
export interface DescribeDataFetchUrlInfoRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 类型
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeDataFetchUrlInfo返回参数结构体
 */
export interface DescribeDataFetchUrlInfoResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReleaseFiles返回参数结构体
 */
export interface DescribeReleaseFilesResponse {
    /**
     * 文件信息列表
     */
    Files?: Array<ReleaseFile>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataStaticUrl返回参数结构体
 */
export interface DescribeDataStaticUrlResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWhitelist返回参数结构体
 */
export interface CreateWhitelistResponse {
    /**
     * 消息
     */
    Msg?: string;
    /**
     * 白名单ID
     */
    ID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * project Score分数实体
 */
export interface ScoreInfo {
    /**
     * duration
     */
    StaticDuration?: string;
    /**
     * pv
     */
    PagePv?: string;
    /**
     * 失败
     */
    ApiFail?: string;
    /**
     * 请求
     */
    ApiNum?: string;
    /**
     * fail
     */
    StaticFail?: string;
    /**
     * 项目id
     */
    ProjectID?: number;
    /**
     * uv
     */
    PageUv?: string;
    /**
     * 请求次数
     */
    ApiDuration?: string;
    /**
     * 项目总分
     */
    Score?: string;
    /**
     * error
     */
    PageError?: string;
    /**
     * num
     */
    StaticNum?: string;
    /**
     * num
     */
    RecordNum?: number;
    /**
     * Duration
     */
    PageDuration?: string;
    /**
     * 时间
     */
    CreateTime?: string;
    /**
     * 页面性能评分
     */
    PagePerformanceScore?: string;
    /**
     * js错误评分
     */
    JsErrorScore?: string;
    /**
     * API性能评分
     */
    ApiPerformanceScore?: string;
    /**
     * API可用性评分
     */
    ApiAvaliableScore?: string;
    /**
     * 静态资源性能评分
     */
    StaticPerformanceScore?: string;
    /**
     * 静态资源可用性评分
     */
    StaticAvaliableScore?: string;
}
/**
 * DescribeDataWebVitalsPage返回参数结构体
 */
export interface DescribeDataWebVitalsPageResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
    /**
     * 分页每页数目，整型
     */
    Limit: number;
    /**
     * 分页页码，整型
     */
    Offset: number;
    /**
     * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
     */
    Filters?: Array<Filter>;
    /**
     * 该参数已废弃，demo模式请在Filters内注明
     * @deprecated
     */
    IsDemo?: number;
}
/**
 * DescribeDataEventUrl请求参数结构体
 */
export interface DescribeDataEventUrlRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 筛选条件
     */
    Name?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeAppDimensionMetrics返回参数结构体
 */
export interface DescribeAppDimensionMetricsResponse {
    /**
     * 查询数据返回
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResumeProject请求参数结构体
 */
export interface ResumeProjectRequest {
    /**
     * 项目 id
     */
    ProjectId: number;
}
/**
 * DescribeAppSingleCaseDetailList请求参数结构体
 */
export interface DescribeAppSingleCaseDetailListRequest {
    /**
     * app 项目ID
     */
    ProjectID: number;
    /**
     * 查询的表名
     */
    From: string;
    /**
     * 查询指标 field
     */
    Fields: string;
    /**
     * 查询的过滤条件
     */
    Filter: string;
    /**
     * 查询简单过滤条件
     */
    FilterSimple?: string;
    /**
     * group by 条件
     */
    GroupBy?: Array<string>;
    /**
     * order by 条件
     */
    OrderBy?: Array<string>;
    /**
     * limit 参数
     */
    Limit?: number;
    /**
     * offset 参数
     */
    Offset?: number;
}
/**
 * DescribeRumGroupLog请求参数结构体
 */
export interface DescribeRumGroupLogRequest {
    /**
     * 排序方式  desc  asc（必填）
     */
    OrderBy: string;
    /**
     * 开始时间（必填）
     */
    StartTime: string;
    /**
     * 单次查询返回的原始日志条数，最大值为100（必填）
     */
    Limit: number;
    /**
     * 页数，第几页
     */
    Page: number;
    /**
     * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
     */
    Query: string;
    /**
     * 结束时间（必填）
     */
    EndTime: string;
    /**
     * 项目ID（必填）
     */
    ID: number;
    /**
     * 聚合字段
     */
    GroupField: string;
}
/**
 * DescribeWhitelists返回参数结构体
 */
export interface DescribeWhitelistsResponse {
    /**
     * 白名单列表
     */
    WhitelistSet: Array<Whitelist>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
    /**
     * 列表总数
     */
    TotalCount?: number;
    /**
     * 项目列表
     */
    ProjectSet?: Array<RumProject>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
    /**
     * 操作信息
     */
    Msg?: string;
    /**
     * 项目id
     */
    ID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataReportCount返回参数结构体
 */
export interface DescribeDataReportCountResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRumLogExport返回参数结构体
 */
export interface DescribeRumLogExportResponse {
    /**
     * 返回字符串
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRumLogExports请求参数结构体
 */
export interface DescribeRumLogExportsRequest {
    /**
     * 页面大小
     */
    PageSize: number;
    /**
     * 页数，第几页
     */
    PageNum: number;
    /**
     * 项目ID（必填）
     */
    ID: number;
}
/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
    /**
     * 项目 id
     */
    ID: number;
    /**
     * 应用名称(可选，不为空且最长为 200字符)
     */
    Name?: string;
    /**
     * 项目网页地址(可选，最长为 256)
     */
    URL?: string;
    /**
     * 项目仓库地址(可选，最长为 256)
     */
    Repo?: string;
    /**
     * 项目需要转移到的实例 id(可选)
     */
    InstanceID?: string;
    /**
     * 项目采样率(可选)
     */
    Rate?: string;
    /**
     * 是否开启聚类(可选)
     */
    EnableURLGroup?: number;
    /**
     * 项目类型(可接受值为 "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
     */
    Type?: string;
    /**
     * 应用描述(可选，最长为 1000字符)
     */
    Desc?: string;
}
/**
 * DescribeRumLogList请求参数结构体
 */
export interface DescribeRumLogListRequest {
    /**
     * 排序方式  desc  asc（必填）
     */
    OrderBy: string;
    /**
     * 开始时间（必填）格式为时间戳 毫秒
     */
    StartTime: string;
    /**
     * 单次查询返回的原始日志条数，最大值为100（必填）
     */
    Limit: number;
    /**
     * 页数，第几页
     */
    Page: number;
    /**
     * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
     */
    Query: string;
    /**
     * 结束时间（必填）格式为时间戳 毫秒
     */
    EndTime: string;
    /**
     * 项目ID（必填）
     */
    ID: number;
}
/**
 * DescribeDataStaticResource请求参数结构体
 */
export interface DescribeDataStaticResourceRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 耗时计算方式
     */
    CostType?: string;
    /**
     * 来源
     */
    Url?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * DescribeTawInstances返回参数结构体
 */
export interface DescribeTawInstancesResponse {
    /**
     * 实例列表
     */
    InstanceSet?: Array<RumInstanceInfo>;
    /**
     * 实例总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePvList请求参数结构体
 */
export interface DescribePvListRequest {
    /**
     * ID
     */
    ProjectId: number;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 对PV指标的查询维度。获取day：d，   获取min则不填。
     */
    Dimension?: string;
}
/**
 * DescribeDataPvUrlInfo请求参数结构体
 */
export interface DescribeDataPvUrlInfoRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 类型
     */
    Type: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 项目ID
     */
    ID: number;
    /**
     * 自定义2
     */
    ExtSecond?: string;
    /**
     * 浏览器引擎
     */
    Engine?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 来源页面
     */
    From?: string;
    /**
     * 日志等级
     */
    Level?: string;
    /**
     * 品牌
     */
    Brand?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 版本
     */
    VersionNum?: string;
    /**
     * 平台
     */
    Platform?: string;
    /**
     * 自定义3
     */
    ExtThird?: string;
    /**
     * 自定义1
     */
    ExtFirst?: string;
    /**
     * 网络类型
     */
    NetType?: string;
    /**
     * 机型
     */
    Device?: string;
    /**
     * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
     */
    IsAbroad?: string;
    /**
     * 操作系统
     */
    Os?: string;
    /**
     * 浏览器
     */
    Browser?: string;
    /**
     * 环境
     */
    Env?: string;
}
/**
 * CreateReleaseFile返回参数结构体
 */
export interface CreateReleaseFileResponse {
    /**
     * 调用结果
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataFetchProject返回参数结构体
 */
export interface DescribeDataFetchProjectResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 白名单
 */
export interface Whitelist {
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 实例ID
     */
    InstanceID?: string;
    /**
     * 截止时间
     */
    Ttl?: string;
    /**
     * 白名单自增ID
     */
    ID?: string;
    /**
     * 业务唯一标识
     */
    WhitelistUin?: string;
    /**
     * 创建者ID
     */
    CreateUser?: string;
    /**
     * aid标识
     */
    Aid?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
}
/**
 * Rum 项目信息
 */
export interface RumProject {
    /**
     * 项目名
     */
    Name?: string;
    /**
     * 创建者 id
     */
    Creator?: string;
    /**
     * 实例 id
     */
    InstanceID?: string;
    /**
     * 项目类型
     */
    Type?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 项目仓库地址
     */
    Repo?: string;
    /**
     * 项目网址地址
     */
    URL?: string;
    /**
     * 项目采样频率
     */
    Rate?: string;
    /**
     * 项目唯一key（长度 12 位）
     */
    Key?: string;
    /**
     * 是否开启url聚类
     */
    EnableURLGroup?: number;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 项目 ID
     */
    ID?: number;
    /**
     * 实例 key
     */
    InstanceKey?: string;
    /**
     * 项目描述
     */
    Desc?: string;
    /**
     * 是否星标  1:是 0:否
     */
    IsStar?: number;
    /**
     * 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁)
     */
    ProjectStatus?: number;
    /**
     * 日志接入点，用户忽略。
     */
    AccessPoint?: string;
    /**
     * kafka旁路配置信息
     */
    Kafka?: Kafka;
}
/**
 * DescribeDataSetUrlStatistics返回参数结构体
 */
export interface DescribeDataSetUrlStatisticsResponse {
    /**
     * 返回值
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAppDimensionMetrics请求参数结构体
 */
export interface DescribeAppDimensionMetricsRequest {
    /**
     * app 项目ID
     */
    ProjectID: number;
    /**
     * 查询的表名
     */
    From: string;
    /**
     * 查询指标 fields
     */
    Fields: string;
    /**
     * 查询的过滤条件
     */
    Filter: string;
    /**
     * 查询简单过滤条件
     */
    FilterSimple?: string;
    /**
     * group by 条件
     */
    GroupBy?: Array<string>;
    /**
     * order by 条件
     */
    OrderBy?: Array<string>;
    /**
     * limit 参数
     */
    Limit?: number;
    /**
     * offset 参数
     */
    Offset?: number;
    /**
     * 业务上下文参数
     */
    BusinessContext?: string;
}
/**
 * Rum实例信息
 */
export interface RumInstanceInfo {
    /**
     * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=已删除)
     */
    InstanceStatus?: number;
    /**
     * 片区Id
     */
    AreaId?: number;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
    /**
     * 实例Id
     */
    InstanceId?: string;
    /**
     * 集群Id
     */
    ClusterId?: number;
    /**
     * 实例描述
     */
    InstanceDesc?: string;
    /**
     * 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败)
     */
    ChargeStatus?: number;
    /**
     * 计费类型(1=免费版，2=预付费，3=后付费)
     */
    ChargeType?: number;
    /**
     * 更新时间
     */
    UpdatedAt?: string;
    /**
     * 数据保留时间(天)
     */
    DataRetentionDays?: number;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 实例类型 1:原web相关类型 2:app端类型
     */
    InstanceType?: number;
}
