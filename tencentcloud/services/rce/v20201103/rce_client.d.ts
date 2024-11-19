import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNameListResponse, ManageMarketingRiskRequest, ModifyNameListDataRequest, CreateNameListRequest, DeleteNameListDataResponse, DescribeUserUsageCntRequest, ImportNameListDataResponse, DeleteNameListRequest, DescribeNameListDetailResponse, ManageMarketingRiskResponse, ModifyNameListRequest, DescribeNameListDetailRequest, DescribeNameListDataListResponse, DeleteNameListDataRequest, DescribeNameListDataListRequest, DescribeNameListRequest, CreateNameListResponse, ModifyNameListDataResponse, ModifyNameListResponse, ImportNameListDataRequest, DeleteNameListResponse, DescribeUserUsageCntResponse } from "./rce_models";
/**
 * rce client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改黑白名单列表详情 详情内容 开始和结束时间 状态 备注等
     */
    ModifyNameListData(req: ModifyNameListDataRequest, cb?: (error: string, rep: ModifyNameListDataResponse) => void): Promise<ModifyNameListDataResponse>;
    /**
     * 删除黑白名单数据
     */
    DeleteNameListData(req: DeleteNameListDataRequest, cb?: (error: string, rep: DeleteNameListDataResponse) => void): Promise<DeleteNameListDataResponse>;
    /**
     * 黑白名单详情数据展示 名单id 客户appid uin 数据内容 开始时间和结束时间 状态 描述
     */
    DescribeNameListDataList(req: DescribeNameListDataListRequest, cb?: (error: string, rep: DescribeNameListDataListResponse) => void): Promise<DescribeNameListDataListResponse>;
    /**
     * 查询黑白名单列表详情
     */
    DescribeNameListDetail(req: DescribeNameListDetailRequest, cb?: (error: string, rep: DescribeNameListDetailResponse) => void): Promise<DescribeNameListDetailResponse>;
    /**
     * 全栈式风控引擎（RiskControlEngine，RCE）是基于人工智能技术和腾讯20年风控实战沉淀，依托腾讯海量业务构建的风控引擎，以轻量级的 SaaS 服务方式接入，帮助您快速解决注册、登录、营销活动等关键场景遇到的欺诈问题，实时防御黑灰产作恶。
     */
    ManageMarketingRisk(req: ManageMarketingRiskRequest, cb?: (error: string, rep: ManageMarketingRiskResponse) => void): Promise<ManageMarketingRiskResponse>;
    /**
     * 修改列表数据 列表名称 列表类型 数据类型 状态 备注
     */
    ModifyNameList(req: ModifyNameListRequest, cb?: (error: string, rep: ModifyNameListResponse) => void): Promise<ModifyNameListResponse>;
    /**
     * 创建黑白名单，黑白名单数量上限为100
     */
    CreateNameList(req: CreateNameListRequest, cb?: (error: string, rep: CreateNameListResponse) => void): Promise<CreateNameListResponse>;
    /**
     * 修改黑白名单状态 关闭 开启 删除
     */
    DeleteNameList(req: DeleteNameListRequest, cb?: (error: string, rep: DeleteNameListResponse) => void): Promise<DeleteNameListResponse>;
    /**
     * RCE控制台预付费和后付费次数展示
     */
    DescribeUserUsageCnt(req?: DescribeUserUsageCntRequest, cb?: (error: string, rep: DescribeUserUsageCntResponse) => void): Promise<DescribeUserUsageCntResponse>;
    /**
     * 新增黑白名单数据，所有黑白名单数据总量上限为10000
     */
    ImportNameListData(req: ImportNameListDataRequest, cb?: (error: string, rep: ImportNameListDataResponse) => void): Promise<ImportNameListDataResponse>;
    /**
     * 列表展示黑白名单列表数据, 包含列表名称, 名单类型, 数据类型, 数据来源, 描述, 状态等
     */
    DescribeNameList(req: DescribeNameListRequest, cb?: (error: string, rep: DescribeNameListResponse) => void): Promise<DescribeNameListResponse>;
}
