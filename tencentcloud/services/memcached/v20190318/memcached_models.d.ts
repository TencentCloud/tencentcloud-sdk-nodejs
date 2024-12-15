/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 枚举范围： AddTimeStamp, InstanceName, ProjectId
     */
    OrderBy?: string;
    /**
     * 查找的关键字
     */
    SearchKeys?: Array<string>;
    /**
     * 子网ID列表
     */
    UniqSubnetIds?: Array<string>;
    /**
     * VIP列表
     */
    Vips?: Array<string>;
    /**
     * 0倒序，1正序，默认倒序
     */
    OrderType?: number;
    /**
     * 实例名称列表
     */
    InstanceNames?: Array<string>;
    /**
     * VPC ID列表
     */
    UniqVpcIds?: Array<string>;
    /**
     * 项目ID列表
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 偏移量，取Limit整数倍
     */
    Offset?: number;
    /**
     * 实例列表的大小，参数默认值100
     */
    Limit?: number;
    /**
     * 实例ID列表
     */
    InstanceIds?: Array<string>;
}
/**
 * 标签信息
 */
export interface TagInfo {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 实例详细信息列表
     */
    InstanceList?: Array<InstanceListInfo>;
    /**
     * 实例数量
     */
    TotalNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例详细信息列表
 */
export interface InstanceListInfo {
    /**
     * 实例修改时间
     */
    ModTimeStamp?: string;
    /**
     * 实例隔离时间
     */
    IsolateTimeStamp?: string;
    /**
     * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
     */
    AutoRenewFlag?: number;
    /**
     * 仓库ID
     */
    SetId?: number;
    /**
     * 实例当前状态，0：发货中；1：运行中；2：创建失败；4：销毁中；5：隔离中；6：下线中
     */
    Status?: number;
    /**
     * 实例内置ID
     */
    CmemId?: number;
    /**
     * 实例关联的标签信息
     */
    Tags?: Array<TagInfo>;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国   25--日本
     */
    RegionId?: number;
    /**
     * 实例描述信息
     */
    InstanceDesc?: string;
    /**
     * 过期策略
     */
    Expire?: number;
    /**
     * vpc网络下子网id 如：46315
     */
    SubnetId?: number;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 实例创建时间
     */
    AddTimeStamp?: string;
    /**
     * 区域ID
     */
    ZoneId?: number;
    /**
     * 计费模式：0-按量计费，1-包年包月
     */
    PayMode?: number;
    /**
     * vpc网络id 如：75101
     */
    VpcId?: number;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 实例截止时间
     */
    DeadlineTimeStamp?: string;
    /**
     * vpc网络id 如：vpc-fk33jsf43kgv
     */
    UniqVpcId?: string;
    /**
     * 实例vip
     */
    Vip?: string;
    /**
     * vpc网络下子网id 如：subnet-fd3j6l35mm0
     */
    UniqSubnetId?: string;
    /**
     * 用户AppID
     */
    AppId?: number;
    /**
     * 实例端口号
     */
    Vport?: number;
}
