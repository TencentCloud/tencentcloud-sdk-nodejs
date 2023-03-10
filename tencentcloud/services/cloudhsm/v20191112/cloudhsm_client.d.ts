import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSubnetRequest, DescribeVsmsResponse, DescribeSupportedHsmResponse, InquiryPriceBuyVsmRequest, DescribeVpcResponse, ModifyVsmAttributesRequest, GetAlarmEventResponse, ModifyAlarmEventRequest, DescribeSubnetResponse, GetVsmMonitorInfoResponse, DescribeSupportedHsmRequest, GetAlarmEventRequest, DescribeHSMByVpcIdResponse, DescribeUsgRuleResponse, DescribeVpcRequest, DescribeUsgRequest, DescribeVsmAttributesResponse, DescribeHSMByVpcIdRequest, ModifyAlarmEventResponse, InquiryPriceBuyVsmResponse, DescribeHSMBySubnetIdResponse, GetVsmMonitorInfoRequest, DescribeUsgResponse, DescribeHSMBySubnetIdRequest, DescribeVsmsRequest, DescribeUsgRuleRequest, ModifyVsmAttributesResponse, DescribeVsmAttributesRequest } from "./cloudhsm_models";
/**
 * cloudhsm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取告警事件
     */
    GetAlarmEvent(req?: GetAlarmEventRequest, cb?: (error: string, rep: GetAlarmEventResponse) => void): Promise<GetAlarmEventResponse>;
    /**
     * 修改VSM属性
     */
    ModifyVsmAttributes(req: ModifyVsmAttributesRequest, cb?: (error: string, rep: ModifyVsmAttributesResponse) => void): Promise<ModifyVsmAttributesResponse>;
    /**
     * 获取VSM属性
     */
    DescribeVsmAttributes(req: DescribeVsmAttributesRequest, cb?: (error: string, rep: DescribeVsmAttributesResponse) => void): Promise<DescribeVsmAttributesResponse>;
    /**
     * 获取用户VSM列表
     */
    DescribeVsms(req: DescribeVsmsRequest, cb?: (error: string, rep: DescribeVsmsResponse) => void): Promise<DescribeVsmsResponse>;
    /**
     * 查询用户的私有网络列表
     */
    DescribeVpc(req: DescribeVpcRequest, cb?: (error: string, rep: DescribeVpcResponse) => void): Promise<DescribeVpcResponse>;
    /**
     * 通过VpcId获取Hsm资源数
     */
    DescribeHSMByVpcId(req: DescribeHSMByVpcIdRequest, cb?: (error: string, rep: DescribeHSMByVpcIdResponse) => void): Promise<DescribeHSMByVpcIdResponse>;
    /**
     * 获取VSM监控信息
     */
    GetVsmMonitorInfo(req: GetVsmMonitorInfoRequest, cb?: (error: string, rep: GetVsmMonitorInfoResponse) => void): Promise<GetVsmMonitorInfoResponse>;
    /**
     * 通过SubnetId获取Hsm资源数
     */
    DescribeHSMBySubnetId(req: DescribeHSMBySubnetIdRequest, cb?: (error: string, rep: DescribeHSMBySubnetIdResponse) => void): Promise<DescribeHSMBySubnetIdResponse>;
    /**
     * 根据用户的AppId获取用户安全组列表
     */
    DescribeUsg(req: DescribeUsgRequest, cb?: (error: string, rep: DescribeUsgResponse) => void): Promise<DescribeUsgResponse>;
    /**
     * 查询子网列表
     */
    DescribeSubnet(req: DescribeSubnetRequest, cb?: (error: string, rep: DescribeSubnetResponse) => void): Promise<DescribeSubnetResponse>;
    /**
     * 修改告警事件
     */
    ModifyAlarmEvent(req: ModifyAlarmEventRequest, cb?: (error: string, rep: ModifyAlarmEventResponse) => void): Promise<ModifyAlarmEventResponse>;
    /**
     * 获取当前地域所支持的设备列表
     */
    DescribeSupportedHsm(req: DescribeSupportedHsmRequest, cb?: (error: string, rep: DescribeSupportedHsmResponse) => void): Promise<DescribeSupportedHsmResponse>;
    /**
     * 购买询价接口
     */
    InquiryPriceBuyVsm(req: InquiryPriceBuyVsmRequest, cb?: (error: string, rep: InquiryPriceBuyVsmResponse) => void): Promise<InquiryPriceBuyVsmResponse>;
    /**
     * 获取安全组详情
     */
    DescribeUsgRule(req: DescribeUsgRuleRequest, cb?: (error: string, rep: DescribeUsgRuleResponse) => void): Promise<DescribeUsgRuleResponse>;
}
