import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDefaultAlarmThresholdRequest, DescribeListBGPIPInstancesResponse, DescribeBlackWhiteIpListResponse, CreateBoundIPRequest, DescribeListSchedulingDomainRequest, CreateWaterPrintConfigRequest, CreateBlackWhiteIpListResponse, ModifyDDoSGeoIPBlockConfigRequest, DescribeL7RulesBySSLCertIdResponse, DescribeListDDoSSpeedLimitConfigRequest, DescribeListProtocolBlockConfigResponse, DescribeListBGPInstancesRequest, DeleteDDoSSpeedLimitConfigRequest, CreatePacketFilterConfigResponse, DescribeListWaterPrintConfigRequest, CreateL7RuleCertsRequest, DeleteDDoSGeoIPBlockConfigRequest, CreateIPAlarmThresholdConfigRequest, DescribeDefaultAlarmThresholdResponse, CreateDDoSAIRequest, DescribeListProtectThresholdConfigRequest, CreateWaterPrintConfigResponse, DescribeListBGPIPInstancesRequest, DescribeL7RulesBySSLCertIdRequest, DescribeListPacketFilterConfigResponse, DeleteBlackWhiteIpListResponse, CreateSchedulingDomainRequest, DisassociateDDoSEipAddressResponse, DeleteBlackWhiteIpListRequest, ModifyDomainUsrNameResponse, DisassociateDDoSEipAddressRequest, DeleteWaterPrintKeyResponse, DescribeListPacketFilterConfigRequest, ModifyPacketFilterConfigResponse, DescribeListDDoSGeoIPBlockConfigRequest, CreateDDoSSpeedLimitConfigRequest, CreateDDoSGeoIPBlockConfigRequest, CreateProtocolBlockConfigRequest, DeleteWaterPrintKeyRequest, AssociateDDoSEipAddressResponse, ModifyPacketFilterConfigRequest, DescribeBlackWhiteIpListRequest, ModifyDomainUsrNameRequest, CreateDDoSSpeedLimitConfigResponse, DeletePacketFilterConfigRequest, ModifyL7RulesEdgeRequest, DescribeListDDoSGeoIPBlockConfigResponse, DescribeBasicDeviceStatusResponse, DescribeListListenerRequest, DeleteWaterPrintConfigResponse, DeletePacketFilterConfigResponse, CreateProtocolBlockConfigResponse, CreateIPAlarmThresholdConfigResponse, DeleteWaterPrintConfigRequest, DescribeListBlackWhiteIpListResponse, DescribeListDDoSSpeedLimitConfigResponse, CreateDDoSGeoIPBlockConfigResponse, DescribeBasicDeviceStatusRequest, DescribeListListenerResponse, ModifyL7RulesEdgeResponse, CreateL7RuleCertsResponse, AssociateDDoSEipLoadBalancerRequest, DescribeListProtectThresholdConfigResponse, CreateDefaultAlarmThresholdResponse, DescribeListIPAlarmConfigResponse, DescribeListBGPInstancesResponse, DescribeListDDoSAIRequest, DescribeListIPAlarmConfigRequest, SwitchWaterPrintConfigResponse, CreateWaterPrintKeyRequest, DescribeListDDoSAIResponse, ModifyDDoSSpeedLimitConfigRequest, AssociateDDoSEipAddressRequest, AssociateDDoSEipLoadBalancerResponse, CreateBlackWhiteIpListRequest, DescribeBizTrendResponse, CreateBoundIPResponse, SwitchWaterPrintConfigRequest, DescribeListSchedulingDomainResponse, DescribeCCTrendResponse, CreateSchedulingDomainResponse, CreateDDoSAIResponse, DescribeListProtocolBlockConfigRequest, DescribeDDoSTrendRequest, ModifyDDoSGeoIPBlockConfigResponse, DescribeBizTrendRequest, DescribeListWaterPrintConfigResponse, DeleteDDoSSpeedLimitConfigResponse, CreateWaterPrintKeyResponse, DeleteDDoSGeoIPBlockConfigResponse, DescribeDDoSTrendResponse, DescribeListBlackWhiteIpListRequest, ModifyDDoSSpeedLimitConfigResponse, DescribeDefaultAlarmThresholdRequest, CreatePacketFilterConfigRequest, DescribeCCTrendRequest } from "./antiddos_models";
/**
 * antiddos client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     */
    AssociateDDoSEipAddress(req: AssociateDDoSEipAddressRequest, cb?: (error: string, rep: AssociateDDoSEipAddressResponse) => void): Promise<AssociateDDoSEipAddressResponse>;
    /**
     * 修改智能解析域名名称
     */
    ModifyDomainUsrName(req: ModifyDomainUsrNameRequest, cb?: (error: string, rep: ModifyDomainUsrNameResponse) => void): Promise<ModifyDomainUsrNameResponse>;
    /**
     * 获取DDoS防护的水印防护配置列表
     */
    DescribeListWaterPrintConfig(req: DescribeListWaterPrintConfigRequest, cb?: (error: string, rep: DescribeListWaterPrintConfigResponse) => void): Promise<DescribeListWaterPrintConfigResponse>;
    /**
     * 删除DDoS防护的访问限速配置
     */
    DeleteDDoSSpeedLimitConfig(req: DeleteDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DeleteDDoSSpeedLimitConfigResponse) => void): Promise<DeleteDDoSSpeedLimitConfigResponse>;
    /**
     * 修改DDoS防护的访问限速配置
     */
    ModifyDDoSSpeedLimitConfig(req: ModifyDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: ModifyDDoSSpeedLimitConfigResponse) => void): Promise<ModifyDDoSSpeedLimitConfigResponse>;
    /**
     * 获取业务流量曲线
     */
    DescribeBizTrend(req: DescribeBizTrendRequest, cb?: (error: string, rep: DescribeBizTrendResponse) => void): Promise<DescribeBizTrendResponse>;
    /**
     * 删除DDoS防护的区域封禁配置
     */
    DeleteDDoSGeoIPBlockConfig(req: DeleteDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: DeleteDDoSGeoIPBlockConfigResponse) => void): Promise<DeleteDDoSGeoIPBlockConfigResponse>;
    /**
     * 修改DDoS防护的特征过滤规则
     */
    ModifyPacketFilterConfig(req: ModifyPacketFilterConfigRequest, cb?: (error: string, rep: ModifyPacketFilterConfigResponse) => void): Promise<ModifyPacketFilterConfigResponse>;
    /**
     * 添加DDoS防护的特征过滤规则
     */
    CreatePacketFilterConfig(req: CreatePacketFilterConfigRequest, cb?: (error: string, rep: CreatePacketFilterConfigResponse) => void): Promise<CreatePacketFilterConfigResponse>;
    /**
     * 获取单IP告警阈值配置列表
     */
    DescribeListIPAlarmConfig(req: DescribeListIPAlarmConfigRequest, cb?: (error: string, rep: DescribeListIPAlarmConfigResponse) => void): Promise<DescribeListIPAlarmConfigResponse>;
    /**
     * 获取高防IP资产实例列表

     */
    DescribeListBGPIPInstances(req: DescribeListBGPIPInstancesRequest, cb?: (error: string, rep: DescribeListBGPIPInstancesResponse) => void): Promise<DescribeListBGPIPInstancesResponse>;
    /**
     * 获取单IP默认告警阈值配置
     */
    DescribeDefaultAlarmThreshold(req: DescribeDefaultAlarmThresholdRequest, cb?: (error: string, rep: DescribeDefaultAlarmThresholdResponse) => void): Promise<DescribeDefaultAlarmThresholdResponse>;
    /**
     * 获取DDoS防护的IP黑白名单列表
     */
    DescribeListBlackWhiteIpList(req: DescribeListBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeListBlackWhiteIpListResponse) => void): Promise<DescribeListBlackWhiteIpListResponse>;
    /**
     * 获取DDoS防护的区域封禁配置列表
     */
    DescribeListDDoSGeoIPBlockConfig(req: DescribeListDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: DescribeListDDoSGeoIPBlockConfigResponse) => void): Promise<DescribeListDDoSGeoIPBlockConfigResponse>;
    /**
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     */
    DisassociateDDoSEipAddress(req: DisassociateDDoSEipAddressRequest, cb?: (error: string, rep: DisassociateDDoSEipAddressResponse) => void): Promise<DisassociateDDoSEipAddressResponse>;
    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    CreateBoundIP(req: CreateBoundIPRequest, cb?: (error: string, rep: CreateBoundIPResponse) => void): Promise<CreateBoundIPResponse>;
    /**
     * 获取智能调度域名列表
     */
    DescribeListSchedulingDomain(req: DescribeListSchedulingDomainRequest, cb?: (error: string, rep: DescribeListSchedulingDomainResponse) => void): Promise<DescribeListSchedulingDomainResponse>;
    /**
     * 删除DDoS防护的水印防护密钥
     */
    DeleteWaterPrintKey(req: DeleteWaterPrintKeyRequest, cb?: (error: string, rep: DeleteWaterPrintKeyResponse) => void): Promise<DeleteWaterPrintKeyResponse>;
    /**
     * 设置单IP默认告警阈值配置
     */
    CreateDefaultAlarmThreshold(req: CreateDefaultAlarmThresholdRequest, cb?: (error: string, rep: CreateDefaultAlarmThresholdResponse) => void): Promise<CreateDefaultAlarmThresholdResponse>;
    /**
     * 添加DDoS防护的水印防护配置
     */
    CreateWaterPrintConfig(req: CreateWaterPrintConfigRequest, cb?: (error: string, rep: CreateWaterPrintConfigResponse) => void): Promise<CreateWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的IP黑白名单
     */
    DescribeBlackWhiteIpList(req: DescribeBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeBlackWhiteIpListResponse) => void): Promise<DescribeBlackWhiteIpListResponse>;
    /**
     * 获取DDoS防护的AI防护开关列表
     */
    DescribeListDDoSAI(req: DescribeListDDoSAIRequest, cb?: (error: string, rep: DescribeListDDoSAIResponse) => void): Promise<DescribeListDDoSAIResponse>;
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
     */
    DescribeCCTrend(req: DescribeCCTrendRequest, cb?: (error: string, rep: DescribeCCTrendResponse) => void): Promise<DescribeCCTrendResponse>;
    /**
     * 设置单IP告警阈值配置
     */
    CreateIPAlarmThresholdConfig(req: CreateIPAlarmThresholdConfigRequest, cb?: (error: string, rep: CreateIPAlarmThresholdConfigResponse) => void): Promise<CreateIPAlarmThresholdConfigResponse>;
    /**
     * 查询与证书ID对于域名匹配的七层规则
     */
    DescribeL7RulesBySSLCertId(req: DescribeL7RulesBySSLCertIdRequest, cb?: (error: string, rep: DescribeL7RulesBySSLCertIdResponse) => void): Promise<DescribeL7RulesBySSLCertIdResponse>;
    /**
     * 获取DDoS防护的特征过滤规则列表
     */
    DescribeListPacketFilterConfig(req: DescribeListPacketFilterConfigRequest, cb?: (error: string, rep: DescribeListPacketFilterConfigResponse) => void): Promise<DescribeListPacketFilterConfigResponse>;
    /**
     * 获取DDoS防护的访问限速配置列表
     */
    DescribeListDDoSSpeedLimitConfig(req: DescribeListDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DescribeListDDoSSpeedLimitConfigResponse) => void): Promise<DescribeListDDoSSpeedLimitConfigResponse>;
    /**
     * 获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     */
    DescribeListProtectThresholdConfig(req: DescribeListProtectThresholdConfigRequest, cb?: (error: string, rep: DescribeListProtectThresholdConfigResponse) => void): Promise<DescribeListProtectThresholdConfigResponse>;
    /**
     * 添加DDoS防护的访问限速配置
     */
    CreateDDoSSpeedLimitConfig(req: CreateDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: CreateDDoSSpeedLimitConfigResponse) => void): Promise<CreateDDoSSpeedLimitConfigResponse>;
    /**
     * 获取基础防护攻击状态
     */
    DescribeBasicDeviceStatus(req: DescribeBasicDeviceStatusRequest, cb?: (error: string, rep: DescribeBasicDeviceStatusResponse) => void): Promise<DescribeBasicDeviceStatusResponse>;
    /**
     * 获取高防包资产实例列表

     */
    DescribeListBGPInstances(req: DescribeListBGPInstancesRequest, cb?: (error: string, rep: DescribeListBGPInstancesResponse) => void): Promise<DescribeListBGPInstancesResponse>;
    /**
     * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
     */
    AssociateDDoSEipLoadBalancer(req: AssociateDDoSEipLoadBalancerRequest, cb?: (error: string, rep: AssociateDDoSEipLoadBalancerResponse) => void): Promise<AssociateDDoSEipLoadBalancerResponse>;
    /**
     * 添加DDoS防护的IP黑白名单
     */
    CreateBlackWhiteIpList(req: CreateBlackWhiteIpListRequest, cb?: (error: string, rep: CreateBlackWhiteIpListResponse) => void): Promise<CreateBlackWhiteIpListResponse>;
    /**
     * 修改边界防护L7转发规则
     */
    ModifyL7RulesEdge(req: ModifyL7RulesEdgeRequest, cb?: (error: string, rep: ModifyL7RulesEdgeResponse) => void): Promise<ModifyL7RulesEdgeResponse>;
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    DescribeDDoSTrend(req: DescribeDDoSTrendRequest, cb?: (error: string, rep: DescribeDDoSTrendResponse) => void): Promise<DescribeDDoSTrendResponse>;
    /**
     * 删除DDoS防护的IP黑白名单
     */
    DeleteBlackWhiteIpList(req: DeleteBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteBlackWhiteIpListResponse) => void): Promise<DeleteBlackWhiteIpListResponse>;
    /**
     * 添加DDoS防护的区域封禁配置
     */
    CreateDDoSGeoIPBlockConfig(req: CreateDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: CreateDDoSGeoIPBlockConfigResponse) => void): Promise<CreateDDoSGeoIPBlockConfigResponse>;
    /**
     * 删除DDoS防护的水印防护配置
     */
    DeleteWaterPrintConfig(req: DeleteWaterPrintConfigRequest, cb?: (error: string, rep: DeleteWaterPrintConfigResponse) => void): Promise<DeleteWaterPrintConfigResponse>;
    /**
     * 设置DDoS防护的AI防护开关
     */
    CreateDDoSAI(req: CreateDDoSAIRequest, cb?: (error: string, rep: CreateDDoSAIResponse) => void): Promise<CreateDDoSAIResponse>;
    /**
     * 删除DDoS防护的特征过滤规则
     */
    DeletePacketFilterConfig(req: DeletePacketFilterConfigRequest, cb?: (error: string, rep: DeletePacketFilterConfigResponse) => void): Promise<DeletePacketFilterConfigResponse>;
    /**
     * 开启或关闭DDoS防护的水印防护配置
     */
    SwitchWaterPrintConfig(req: SwitchWaterPrintConfigRequest, cb?: (error: string, rep: SwitchWaterPrintConfigResponse) => void): Promise<SwitchWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的协议封禁配置列表
     */
    DescribeListProtocolBlockConfig(req: DescribeListProtocolBlockConfigRequest, cb?: (error: string, rep: DescribeListProtocolBlockConfigResponse) => void): Promise<DescribeListProtocolBlockConfigResponse>;
    /**
     * 创建一个域名，可用于在封堵时调度切换IP
     */
    CreateSchedulingDomain(req?: CreateSchedulingDomainRequest, cb?: (error: string, rep: CreateSchedulingDomainResponse) => void): Promise<CreateSchedulingDomainResponse>;
    /**
     * 添加DDoS防护的水印防护密钥
     */
    CreateWaterPrintKey(req: CreateWaterPrintKeyRequest, cb?: (error: string, rep: CreateWaterPrintKeyResponse) => void): Promise<CreateWaterPrintKeyResponse>;
    /**
     * 设置DDoS防护的协议封禁配置
     */
    CreateProtocolBlockConfig(req: CreateProtocolBlockConfigRequest, cb?: (error: string, rep: CreateProtocolBlockConfigResponse) => void): Promise<CreateProtocolBlockConfigResponse>;
    /**
     * 批量配置L7转发规则的证书供SSL测调用
     */
    CreateL7RuleCerts(req: CreateL7RuleCertsRequest, cb?: (error: string, rep: CreateL7RuleCertsResponse) => void): Promise<CreateL7RuleCertsResponse>;
    /**
     * 修改DDoS防护的区域封禁配置
     */
    ModifyDDoSGeoIPBlockConfig(req: ModifyDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: ModifyDDoSGeoIPBlockConfigResponse) => void): Promise<ModifyDDoSGeoIPBlockConfigResponse>;
    /**
     * 获取转发监听器列表
     */
    DescribeListListener(req?: DescribeListListenerRequest, cb?: (error: string, rep: DescribeListListenerResponse) => void): Promise<DescribeListListenerResponse>;
}
