import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDbAssetInfoResponse, DescribeDbAssetsRequest, DescribeScanReportListRequest, DescribeScanReportListResponse, AddNewBindRoleUserRequest, DescribeCVMAssetInfoResponse, DescribeVpcAssetsResponse, DescribeCVMAssetsRequest, DescribeSubnetAssetsResponse, DescribeDbAssetInfoRequest, DescribeVpcAssetsRequest, DescribeSubnetAssetsRequest, DescribeCVMAssetsResponse, DescribeDbAssetsResponse, AddNewBindRoleUserResponse, DescribeCVMAssetInfoRequest } from "./csip_models";
/**
 * csip client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取vpc列表
     */
    DescribeVpcAssets(req: DescribeVpcAssetsRequest, cb?: (error: string, rep: DescribeVpcAssetsResponse) => void): Promise<DescribeVpcAssetsResponse>;
    /**
     * db资产详情
     */
    DescribeDbAssetInfo(req: DescribeDbAssetInfoRequest, cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void): Promise<DescribeDbAssetInfoResponse>;
    /**
     * cvm列表
     */
    DescribeCVMAssets(req: DescribeCVMAssetsRequest, cb?: (error: string, rep: DescribeCVMAssetsResponse) => void): Promise<DescribeCVMAssetsResponse>;
    /**
     * csip角色授权绑定接口
     */
    AddNewBindRoleUser(req?: AddNewBindRoleUserRequest, cb?: (error: string, rep: AddNewBindRoleUserResponse) => void): Promise<AddNewBindRoleUserResponse>;
    /**
     * 获取扫描报告列表
     */
    DescribeScanReportList(req: DescribeScanReportListRequest, cb?: (error: string, rep: DescribeScanReportListResponse) => void): Promise<DescribeScanReportListResponse>;
    /**
     * 获取子网列表
     */
    DescribeSubnetAssets(req: DescribeSubnetAssetsRequest, cb?: (error: string, rep: DescribeSubnetAssetsResponse) => void): Promise<DescribeSubnetAssetsResponse>;
    /**
     * 资产列表
     */
    DescribeDbAssets(req: DescribeDbAssetsRequest, cb?: (error: string, rep: DescribeDbAssetsResponse) => void): Promise<DescribeDbAssetsResponse>;
    /**
     * cvm详情
     */
    DescribeCVMAssetInfo(req: DescribeCVMAssetInfoRequest, cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void): Promise<DescribeCVMAssetInfoResponse>;
}
