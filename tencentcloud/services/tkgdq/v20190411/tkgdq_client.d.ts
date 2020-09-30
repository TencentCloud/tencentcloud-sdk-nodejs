import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEntityRequest, DescribeTripleRequest, DescribeTripleResponse, DescribeRelationResponse, DescribeRelationRequest, DescribeEntityResponse } from "./tkgdq_models";
/**
 * tkgdq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 输入实体名称，返回实体相关的信息如实体别名、实体英文名、实体详细信息、相关实体等
     */
    DescribeEntity(req: DescribeEntityRequest, cb?: (error: string, rep: DescribeEntityResponse) => void): Promise<DescribeEntityResponse>;
    /**
     * 三元组查询，主要分为两类，SP查询和PO查询。SP查询表示已知主语和谓语查询宾语，PO查询表示已知宾语和谓语查询主语。每一个SP或PO查询都是一个可独立执行的查询，TQL支持SP查询的嵌套查询，即主语可以是一个嵌套的子查询。其他复杂的三元组查询方法，请参考官网API文档示例。
     */
    DescribeTriple(req: DescribeTripleRequest, cb?: (error: string, rep: DescribeTripleResponse) => void): Promise<DescribeTripleResponse>;
    /**
     * 输入两个实体，返回两个实体间的关系，例如马化腾与腾讯公司不仅是相关实体，二者还存在隶属关系（马化腾属于腾讯公司）。
     */
    DescribeRelation(req: DescribeRelationRequest, cb?: (error: string, rep: DescribeRelationResponse) => void): Promise<DescribeRelationResponse>;
}
