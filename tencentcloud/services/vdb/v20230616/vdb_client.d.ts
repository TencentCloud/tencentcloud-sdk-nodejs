import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AssociateSecurityGroupsResponse, DescribeDBSecurityGroupsRequest, DescribeInstancesRequest, AssociateSecurityGroupsRequest, DisassociateSecurityGroupsRequest, DescribeInstanceNodesResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeDBSecurityGroupsResponse, DisassociateSecurityGroupsResponse, DescribeInstanceNodesRequest, DescribeInstancesResponse, ModifyDBInstanceSecurityGroupsRequest } from "./vdb_models";
/**
 * vdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 查询实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 实例节点列表
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
}
