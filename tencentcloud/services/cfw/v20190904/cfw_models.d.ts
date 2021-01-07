/**
 * DescribeVpcRuleOverview返回参数结构体
 */
export interface DescribeVpcRuleOverviewResponse {
    /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyNum?: number;
    /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartRuleNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSyncAssetStatus返回参数结构体
 */
export interface DescribeSyncAssetStatusResponse {
    /**
      * 1-更新中 2-更新完成 3、4-更新失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAllSwitchStatus请求参数结构体
 */
export interface ModifyAllSwitchStatusRequest {
    /**
      * 状态，0：关闭，1：开启
      */
    Status: number;
    /**
      * 0: 互联网边界防火墙开关，1：vpc防火墙开关
      */
    Type?: number;
    /**
      * 选中的防火墙开关Id
      */
    Ids?: Array<string>;
    /**
      * NAT开关切换类型，1,单个子网，2，同开同关，3，全部
      */
    ChangeType?: number;
    /**
      * NAT实例所在地域
      */
    Area?: string;
}
/**
 * ModifyAllRuleStatus返回参数结构体
 */
export interface ModifyAllRuleStatusResponse {
    /**
      * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRuleOverview返回参数结构体
 */
export interface DescribeRuleOverviewResponse {
    /**
      * 规则总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllTotal?: number;
    /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyNum?: number;
    /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartRuleNum?: number;
    /**
      * 停用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StopRuleNum?: number;
    /**
      * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
      */
    RemainingNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSecurityGroupApiRules请求参数结构体
 */
export interface CreateSecurityGroupApiRulesRequest {
    /**
      * 创建规则数据
      */
    Data: Array<SecurityGroupApiRuleData>;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 0：后插，1：前插，2：中插
      */
    Type?: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area?: string;
}
/**
 * DescribeSecurityGroupList返回参数结构体
 */
export interface DescribeSecurityGroupListResponse {
    /**
      * 列表当前规则总条数
      */
    Total?: number;
    /**
      * 安全组规则列表数据
      */
    Data?: Array<SecurityGroupListData>;
    /**
      * 不算筛选条数的总条数
      */
    AllTotal?: number;
    /**
      * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 访问控制列表对象
 */
export interface AcListsData {
    /**
      * 规则id
      */
    Id: number;
    /**
      * 访问源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceIp: string;
    /**
      * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetIp: string;
    /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: string;
    /**
      * 策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    Strategy: number;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail: string;
    /**
      * 命中次数
      */
    Count: number;
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 告警规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogId: string;
}
/**
 * 执行顺序对象
 */
export interface SequenceData {
    /**
      * 规则Id值
      */
    Id: number;
    /**
      * 修改前执行顺序
      */
    OrderIndex: number;
    /**
      * 修改后执行顺序
      */
    NewOrderIndex: number;
}
/**
 * ModifyItemSwitchStatus返回参数结构体
 */
export interface ModifyItemSwitchStatusResponse {
    /**
      * 修改成功与否状态值 0：修改成功，非 0：修改失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSecurityGroupApiRules返回参数结构体
 */
export interface CreateSecurityGroupApiRulesResponse {
    /**
      * 状态值，0:添加成功，非0：添加失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAcRule返回参数结构体
 */
export interface ModifyAcRuleResponse {
    /**
      * 状态值，0:操作成功，非0：操作失败
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySequenceRules返回参数结构体
 */
export interface ModifySequenceRulesResponse {
    /**
      * 0: 修改成功, 非0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTableStatus返回参数结构体
 */
export interface DescribeTableStatusResponse {
    /**
      * 0：正常，其它：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAcRule返回参数结构体
 */
export interface DeleteAcRuleResponse {
    /**
      * 状态值 0: 删除成功, !0: 删除失败
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySequenceRules请求参数结构体
 */
export interface ModifySequenceRulesRequest {
    /**
      * 边Id值
      */
    EdgeId?: string;
    /**
      * 修改数据
      */
    Data?: Array<SequenceData>;
    /**
      * NAT地域
      */
    Area?: string;
    /**
      * 方向，0：出向，1：入向
      */
    Direction?: number;
}
/**
 * 添加安全组Api规则对象
 */
export interface SecurityGroupApiRuleData {
    /**
      * 访问源，入站时为Ip/Cidr，默认为0.0.0.0/0； 出站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
      */
    SourceId: string;
    /**
      * 访问目的，出站时为Ip/Cidr，默认为0.0.0.0/0；入站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
      */
    TargetId: string;
    /**
      * 协议，支持ANY/TCP/UDP/ICMP
      */
    Protocol: string;
    /**
      * 端口, 当Protocol为ANY或ICMP时，Port为-1/-1
      */
    Port: string;
    /**
      * 策略, 1：阻断，2：放行
      */
    Strategy: string;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 规则类型，1：VpcId+Ip/Cidr, 2: 实例ID，入站时为访问目的类型，出站时为访问源类型
      */
    RuleType: number;
    /**
      * 执行顺序，中间插入必传，前插、后插非必传
      */
    OrderIndex?: number;
    /**
      * 私有网络ID，当RuleType为1时必传
      */
    VpcId?: string;
}
/**
 * DescribeSwitchLists返回参数结构体
 */
export interface DescribeSwitchListsResponse {
    /**
      * 总条数
      */
    Total?: number;
    /**
      * 列表数据
      */
    Data?: Array<SwitchListsData>;
    /**
      * 区域列表
      */
    AreaLists?: Array<string>;
    /**
      * 打开个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OnNum?: number;
    /**
      * 关闭个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSyncAssetStatus请求参数结构体
 */
export interface DescribeSyncAssetStatusRequest {
    /**
      * 0: 互联网防火墙开关，1：vpc 防火墙开关
      */
    Type?: number;
}
/**
 * DeleteAllAccessControlRule请求参数结构体
 */
export interface DeleteAllAccessControlRuleRequest {
    /**
      * 方向，0：出站，1：入站  默认值是 0
      */
    Direction?: number;
    /**
      * VPC间防火墙开关ID  全部删除 EdgeId和Area只填写一个，不填写则不删除vpc间防火墙开关 ，默认值为‘’
      */
    EdgeId?: string;
    /**
      * nat地域 全部删除 EdgeId和Area只填写一个，不填写则不删除nat防火墙开关 默认值为‘’
      */
    Area?: string;
}
/**
 * RunSyncAsset返回参数结构体
 */
export interface RunSyncAssetResponse {
    /**
      * 0：同步成功，1：资产更新中，2：后台同步调用失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RunSyncAsset请求参数结构体
 */
export interface RunSyncAssetRequest {
    /**
      * 0: 互联网防火墙开关，1：vpc 防火墙开关
      */
    Type?: number;
}
/**
 * DeleteSecurityGroupRule请求参数结构体
 */
export interface DeleteSecurityGroupRuleRequest {
    /**
      * 所需要删除规则的ID
      */
    Id: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area: string;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 是否删除反向规则，0：否，1：是
      */
    IsDelReverse?: number;
}
/**
 * ModifyTableStatus返回参数结构体
 */
export interface ModifyTableStatusResponse {
    /**
      * 0：正常，-1：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyItemSwitchStatus请求参数结构体
 */
export interface ModifyItemSwitchStatusRequest {
    /**
      * id值
      */
    Id: number;
    /**
      * 状态值，0: 关闭 ,1:开启
      */
    Status: number;
    /**
      * 0: 互联网边界边界防火墙开关，1：vpc防火墙开关
      */
    Type?: number;
}
/**
 * DescribeRuleOverview请求参数结构体
 */
export interface DescribeRuleOverviewRequest {
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
}
/**
 * DescribeVpcRuleOverview请求参数结构体
 */
export interface DescribeVpcRuleOverviewRequest {
    /**
      * EdgeId值两个vpc间的边id  不是必填项可以为空，就是所有vpc间的访问控制规则
      */
    EdgeId: string;
}
/**
 * DescribeAcLists请求参数结构体
 */
export interface DescribeAcListsRequest {
    /**
      * 协议
      */
    Protocol?: string;
    /**
      * 策略
      */
    Strategy?: string;
    /**
      * 搜索值
      */
    SearchValue?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 偏移值
      */
    Offset?: number;
    /**
      * 出站还是入站，0：入站，1：出站
      */
    Direction?: number;
    /**
      * EdgeId值
      */
    EdgeId?: string;
    /**
      * 规则是否开启，'0': 未开启，'1': 开启, 默认为'0'
      */
    Status?: string;
    /**
      * 地域
      */
    Area?: string;
    /**
      * 实例ID
      */
    InstanceId?: string;
}
/**
 * DescribeTableStatus请求参数结构体
 */
export interface DescribeTableStatusRequest {
    /**
      * EdgeId值两个vpc间的边id vpc填Edgeid，不要填Area；
      */
    EdgeId?: string;
    /**
      * 状态值，0：检查表的状态 确实只有一个默认值
      */
    Status?: number;
    /**
      * Nat所在地域 NAT填Area，不要填Edgeid；
      */
    Area?: string;
    /**
      * 方向，0：出站，1：入站 默认值为 0
      */
    Direction?: number;
}
/**
 * CreateAcRules返回参数结构体
 */
export interface CreateAcRulesResponse {
    /**
      * 状态值，0:操作成功
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAssociatedInstanceList返回参数结构体
 */
export interface DescribeAssociatedInstanceListResponse {
    /**
      * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<AssociatedInstanceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 企业安全组关联实例信息
 */
export interface AssociatedInstanceInfo {
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcName: string;
    /**
      * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp: string;
    /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 关联安全组数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityGroupCount: number;
}
/**
 * DescribeAssociatedInstanceList请求参数结构体
 */
export interface DescribeAssociatedInstanceListRequest {
    /**
      * 列表偏移量
      */
    Offset: number;
    /**
      * 每页记录条数
      */
    Limit: number;
    /**
      * 地域代码（例：ap-guangzhou）,支持腾讯云全地域
      */
    Area: string;
    /**
      * 额外检索条件（JSON字符串）
      */
    SearchValue?: string;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式（asc:升序,desc:降序）
      */
    Order?: string;
    /**
      * 安全组ID
      */
    SecurityGroupId?: string;
    /**
      * 实例类型,'3'是cvm实例,'4'是clb实例,'5'是eni实例,'6'是云数据库
      */
    Type?: string;
}
/**
 * ModifyAcRule请求参数结构体
 */
export interface ModifyAcRuleRequest {
    /**
      * 规则数组
      */
    Data: Array<RuleInfoData>;
    /**
      * EdgeId值
      */
    EdgeId?: string;
    /**
      * 访问规则状态
      */
    Enable?: number;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * DescribeNatRuleOverview返回参数结构体
 */
export interface DescribeNatRuleOverviewResponse {
    /**
      * 实例ID
      */
    InstanceId?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 弹性IP列表
      */
    EipList?: Array<string>;
    /**
      * 端口转发规则数量
      */
    DnatNum?: number;
    /**
      * 访问控制规则总数
      */
    TotalNum?: number;
    /**
      * 访问控制规则剩余配额
      */
    RemainNum?: number;
    /**
      * 阻断规则条数
      */
    BlockNum?: number;
    /**
      * 启用规则条数
      */
    EnableNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAcRule请求参数结构体
 */
export interface DeleteAcRuleRequest {
    /**
      * 删除规则对应的id值 669872
      */
    Id: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * EdgeId值两个vpc间的边id
      */
    EdgeId?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * DeleteAllAccessControlRule返回参数结构体
 */
export interface DeleteAllAccessControlRuleResponse {
    /**
      * 状态值 0: 修改成功, !0: 修改失败
      */
    Status?: number;
    /**
      * 删除了几条访问控制规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecurityGroupAllRule返回参数结构体
 */
export interface DeleteSecurityGroupAllRuleResponse {
    /**
      * 0: 操作成功，非0：操作失败
      */
    Status?: number;
    /**
      * 返回数据的json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupAllRuleStatus返回参数结构体
 */
export interface ModifySecurityGroupAllRuleStatusResponse {
    /**
      * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组列表数据
 */
export interface SecurityGroupListData {
    /**
      * 规则ID
      */
    Id: number;
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 访问源
      */
    SourceId: string;
    /**
      * 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB
      */
    SourceType: number;
    /**
      * 访问目的
      */
    TargetId: string;
    /**
      * 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB
      */
    TargetType: number;
    /**
      * 协议
      */
    Protocol: string;
    /**
      * 目的端口
      */
    Port: string;
    /**
      * 策略, 1：阻断，2：放行
      */
    Strategy: number;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 是否开关开启，0：未开启，1：开启
      */
    Status: number;
    /**
      * 是否是正常规则，0：正常，1：异常
      */
    IsNew: number;
    /**
      * 单/双向下发，0:单向下发，1：双向下发
      */
    BothWay: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 公网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp: string;
    /**
      * 内网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIp: string;
    /**
      * 掩码地址，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cidr: string;
}
/**
 * CreateAcRules请求参数结构体
 */
export interface CreateAcRulesRequest {
    /**
      * 创建规则数据
      */
    Data: Array<RuleInfoData>;
    /**
      * 0：添加（默认），1：插入
      */
    Type?: number;
    /**
      * 边id
      */
    EdgeId?: string;
    /**
      * 访问控制规则状态
      */
    Enable?: number;
    /**
      * 0：添加，1：覆盖
      */
    Overwrite?: number;
    /**
      * NAT实例ID, 参数Area存在的时候这个必传
      */
    InstanceId?: string;
    /**
      * portScan: 来自于端口扫描, patchImport: 来自于批量导入
      */
    From?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * DescribeSecurityGroupList请求参数结构体
 */
export interface DescribeSecurityGroupListRequest {
    /**
      * 0: 出站规则，1：入站规则
      */
    Direction: number;
    /**
      * 地域代码（例: ap-guangzhou),支持腾讯云全部地域
      */
    Area: string;
    /**
      * 搜索值
      */
    SearchValue?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 偏移值
      */
    Offset?: number;
    /**
      * '': 全部，'0'：筛选停用规则，'1'：筛选启用规则
      */
    Status?: string;
    /**
      * 0: 不过滤，1：过滤掉正常规则，保留下发异常规则
      */
    Filter?: number;
}
/**
 * DescribeSwitchLists请求参数结构体
 */
export interface DescribeSwitchListsRequest {
    /**
      * 防火墙状态  0: 关闭，1：开启
      */
    Status?: number;
    /**
      * 资产类型 CVM/NAT/VPN/CLB/其它
      */
    Type?: string;
    /**
      * 地域 上海/重庆/广州，等等
      */
    Area?: string;
    /**
      * 搜索值  例子："{"common":"106.54.189.45"}"
      */
    SearchValue?: string;
    /**
      * 条数  默认值:10
      */
    Limit?: number;
    /**
      * 偏移值 默认值: 0
      */
    Offset?: number;
    /**
      * 排序，desc：降序，asc：升序
      */
    Order?: string;
    /**
      * 排序字段 PortTimes(风险端口数)
      */
    By?: string;
}
/**
 * ModifyTableStatus请求参数结构体
 */
export interface ModifyTableStatusRequest {
    /**
      * EdgeId值两个vpc间的边id
      */
    EdgeId?: string;
    /**
      * 状态值，1：锁表，2：解锁表
      */
    Status?: number;
    /**
      * Nat所在地域
      */
    Area?: string;
    /**
      * 0： 出向，1：入向
      */
    Direction?: number;
}
/**
 * DeleteSecurityGroupRule返回参数结构体
 */
export interface DeleteSecurityGroupRuleResponse {
    /**
      * 状态值
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatRuleOverview请求参数结构体
 */
export interface DescribeNatRuleOverviewRequest {
    /**
      * 方向，0：出站，1：入站 默认值：0
      */
    Direction?: number;
    /**
      * NAT地域  这个是必填项，填入相关的英文，'ap-beijing-fsi': '北京金融',
        'ap-beijing': '北京',
        'ap-changsha-ec': '长沙EC',
        'ap-chengdu': '成都',
        'ap-chongqing': '重庆',
        'ap-fuzhou-ec': '福州EC',
        'ap-guangzhou-open': '广州Open',
        'ap-guangzhou': '广州',
        'ap-hangzhou-ec': '杭州EC',
        'ap-jinan-ec': '济南EC',
        'ap-nanjing': '南京',
        'ap-shanghai-fsi': '上海金融',
        'ap-shanghai': '上海',
        'ap-shenzhen-fsi': '深圳金融',
        'ap-shenzhen': '深圳',
        'ap-wuhan-ec': '武汉EC'
      */
    Area?: string;
}
/**
 * ModifySecurityGroupAllRuleStatus请求参数结构体
 */
export interface ModifySecurityGroupAllRuleStatusRequest {
    /**
      * 列表规则状态，0：全部停用，1：全部启用
      */
    Status: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
    /**
      * Edge ID值
      */
    EdgeId?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * DeleteSecurityGroupAllRule请求参数结构体
 */
export interface DeleteSecurityGroupAllRuleRequest {
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area: string;
}
/**
 * ModifyAllRuleStatus请求参数结构体
 */
export interface ModifyAllRuleStatusRequest {
    /**
      * 状态，0：全部停用，1：全部启用
      */
    Status: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
    /**
      * Edge ID值
      */
    EdgeId?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * 规则输入对象
 */
export interface RuleInfoData {
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 访问源
      */
    SourceIp: string;
    /**
      * 访问目的
      */
    TargetIp: string;
    /**
      * 协议
      */
    Protocol: string;
    /**
      * 策略
      */
    Strategy: string;
    /**
      * 访问源类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
      */
    SourceType: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 访问目的类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
      */
    TargetType: number;
    /**
      * 端口
      */
    Port?: string;
    /**
      * id值
      */
    Id?: number;
    /**
      * 日志id，从告警处创建必传，其它为空
      */
    LogId?: string;
    /**
      * 城市Code
      */
    City?: number;
    /**
      * 国家Code
      */
    Country?: number;
    /**
      * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅中国香港及海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
      */
    CloudCode?: string;
    /**
      * 是否为地域
      */
    IsRegion?: number;
    /**
      * 城市名
      */
    CityName?: string;
    /**
      * 国家名
      */
    CountryName?: string;
}
/**
 * DescribeAcLists返回参数结构体
 */
export interface DescribeAcListsResponse {
    /**
      * 总条数
      */
    Total?: number;
    /**
      * 访问控制列表数据
      */
    Data?: Array<AcListsData>;
    /**
      * 不算筛选条数的总条数
      */
    AllTotal?: number;
    /**
      * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 防火墙开关列表对象
 */
export interface SwitchListsData {
    /**
      * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp: string;
    /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntranetIp: string;
    /**
      * 实例名
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 资产类型
      */
    AssetType: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Area: string;
    /**
      * 防火墙开关
      */
    Switch: number;
    /**
      * id值
      */
    Id: number;
    /**
      * 公网 IP 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpType: number;
    /**
      * 风险端口数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PortTimes: number;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastTime: string;
    /**
      * 扫描深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanMode: string;
    /**
      * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanStatus: number;
}
/**
 * ModifyAllSwitchStatus返回参数结构体
 */
export interface ModifyAllSwitchStatusResponse {
    /**
      * 修改成功与否的状态值 0：修改成功，非 0：修改失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
