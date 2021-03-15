import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteAttackDownloadRecordRequest, AddCustomRuleRequest, ModifyCustomRuleStatusRequest, DescribeCustomRulesRequest, DeleteSessionRequest, DeleteDownloadRecordResponse, DescribeCustomRulesResponse, DeleteDownloadRecordRequest, ModifyCustomRuleStatusResponse, DescribeUserClbWafRegionsRequest, DescribeUserClbWafRegionsResponse, DeleteAttackDownloadRecordResponse, CreateAttackDownloadTaskRequest, CreateAttackDownloadTaskResponse, DeleteSessionResponse, AddCustomRuleResponse } from "./waf_models";
/**
 * waf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除攻击日志下载任务记录
     */
    DeleteAttackDownloadRecord(req: DeleteAttackDownloadRecordRequest, cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void): Promise<DeleteAttackDownloadRecordResponse>;
    /**
     * 开启或禁用自定义策略
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 获取防护配置中的自定义策略列表
     */
    DescribeCustomRules(req: DescribeCustomRulesRequest, cb?: (error: string, rep: DescribeCustomRulesResponse) => void): Promise<DescribeCustomRulesResponse>;
    /**
     * 删除访问日志下载记录
     */
    DeleteDownloadRecord(req: DeleteDownloadRecordRequest, cb?: (error: string, rep: DeleteDownloadRecordResponse) => void): Promise<DeleteDownloadRecordResponse>;
    /**
     * 增加自定义策略
     */
    AddCustomRule(req: AddCustomRuleRequest, cb?: (error: string, rep: AddCustomRuleResponse) => void): Promise<AddCustomRuleResponse>;
    /**
     * 删除CC攻击的session设置
     */
    DeleteSession(req: DeleteSessionRequest, cb?: (error: string, rep: DeleteSessionResponse) => void): Promise<DeleteSessionResponse>;
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserClbWafRegions(req?: DescribeUserClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void): Promise<DescribeUserClbWafRegionsResponse>;
    /**
     * 创建攻击日志下载任务
     */
    CreateAttackDownloadTask(req: CreateAttackDownloadTaskRequest, cb?: (error: string, rep: CreateAttackDownloadTaskResponse) => void): Promise<CreateAttackDownloadTaskResponse>;
}
