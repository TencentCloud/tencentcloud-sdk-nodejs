import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnbindEipAclsRequest, ModifyEipChargeResponse, ModifyEipAclResponse, DescribeEipsResponse, ModifyEipAclRequest, UnbindVpcIpRequest, BindRsResponse, BindEipAclsResponse, CreateEipRequest, UnbindHostedResponse, DeleteEipAclRequest, UnbindEipAclsResponse, DescribeEipAclsResponse, ModifyEipNameResponse, DescribeEipQuotaResponse, UnbindRsResponse, BindRsRequest, UnbindHostedRequest, UnbindRsListResponse, BindVpcIpResponse, DescribeEipsRequest, ModifyEipNameRequest, DeleteEipResponse, BindHostedResponse, BindVpcIpRequest, CreateEipAclRequest, CreateEipResponse, BindHostedRequest, DescribeEipTaskResponse, ModifyEipChargeRequest, DescribeEipQuotaRequest, DeleteEipRequest, UnbindRsListRequest, DeleteEipAclResponse, DescribeEipAclsRequest, BindEipAclsRequest, DescribeEipTaskRequest, UnbindRsRequest, UnbindVpcIpResponse, CreateEipAclResponse } from "./bmeip_models";
/**
 * bmeip client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解绑黑石EIP
     */
    UnbindRs(req: UnbindRsRequest, cb?: (error: string, rep: UnbindRsResponse) => void): Promise<UnbindRsResponse>;
    /**
     * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
     */
    BindHosted(req: BindHostedRequest, cb?: (error: string, rep: BindHostedResponse) => void): Promise<BindHostedResponse>;
    /**
     * 创建黑石弹性公网 EIP ACL
     */
    CreateEipAcl(req: CreateEipAclRequest, cb?: (error: string, rep: CreateEipAclResponse) => void): Promise<CreateEipAclResponse>;
    /**
     * 创建黑石弹性公网IP
     */
    CreateEip(req: CreateEipRequest, cb?: (error: string, rep: CreateEipResponse) => void): Promise<CreateEipResponse>;
    /**
     * 修改弹性公网IP ACL
     */
    ModifyEipAcl(req: ModifyEipAclRequest, cb?: (error: string, rep: ModifyEipAclResponse) => void): Promise<ModifyEipAclResponse>;
    /**
     * 查询黑石EIP 限额
     */
    DescribeEipQuota(req?: DescribeEipQuotaRequest, cb?: (error: string, rep: DescribeEipQuotaResponse) => void): Promise<DescribeEipQuotaResponse>;
    /**
     * 绑定黑石EIP
     */
    BindRs(req: BindRsRequest, cb?: (error: string, rep: BindRsResponse) => void): Promise<BindRsResponse>;
    /**
     * 黑石EIP查询任务状态
     */
    DescribeEipTask(req: DescribeEipTaskRequest, cb?: (error: string, rep: DescribeEipTaskResponse) => void): Promise<DescribeEipTaskResponse>;
    /**
     * UnbindHosted接口用于解绑托管机器上的EIP
     */
    UnbindHosted(req: UnbindHostedRequest, cb?: (error: string, rep: UnbindHostedResponse) => void): Promise<UnbindHostedResponse>;
    /**
     * 黑石EIP解绑VPCIP
     */
    UnbindVpcIp(req: UnbindVpcIpRequest, cb?: (error: string, rep: UnbindVpcIpResponse) => void): Promise<UnbindVpcIpResponse>;
    /**
     * 释放黑石弹性公网IP
     */
    DeleteEip(req: DeleteEipRequest, cb?: (error: string, rep: DeleteEipResponse) => void): Promise<DeleteEipResponse>;
    /**
     * 黑石EIP修改计费方式
     */
    ModifyEipCharge(req: ModifyEipChargeRequest, cb?: (error: string, rep: ModifyEipChargeResponse) => void): Promise<ModifyEipChargeResponse>;
    /**
     * 更新黑石EIP名称
     */
    ModifyEipName(req: ModifyEipNameRequest, cb?: (error: string, rep: ModifyEipNameResponse) => void): Promise<ModifyEipNameResponse>;
    /**
     * 此接口用于为某个 EIP 关联 ACL。
     */
    BindEipAcls(req: BindEipAclsRequest, cb?: (error: string, rep: BindEipAclsResponse) => void): Promise<BindEipAclsResponse>;
    /**
     * 删除弹性公网IP ACL
     */
    DeleteEipAcl(req: DeleteEipAclRequest, cb?: (error: string, rep: DeleteEipAclResponse) => void): Promise<DeleteEipAclResponse>;
    /**
     * 解绑弹性公网IP ACL
     */
    UnbindEipAcls(req: UnbindEipAclsRequest, cb?: (error: string, rep: UnbindEipAclsResponse) => void): Promise<UnbindEipAclsResponse>;
    /**
     * 黑石EIP查询接口
     */
    DescribeEips(req: DescribeEipsRequest, cb?: (error: string, rep: DescribeEipsResponse) => void): Promise<DescribeEipsResponse>;
    /**
     * 黑石EIP绑定VPC IP
     */
    BindVpcIp(req: BindVpcIpRequest, cb?: (error: string, rep: BindVpcIpResponse) => void): Promise<BindVpcIpResponse>;
    /**
     * 批量解绑物理机弹性公网IP接口
     */
    UnbindRsList(req: UnbindRsListRequest, cb?: (error: string, rep: UnbindRsListResponse) => void): Promise<UnbindRsListResponse>;
    /**
     * 查询弹性公网IP ACL
     */
    DescribeEipAcls(req: DescribeEipAclsRequest, cb?: (error: string, rep: DescribeEipAclsResponse) => void): Promise<DescribeEipAclsResponse>;
}
