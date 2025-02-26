import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeKnowledgeSetListRequest, UploadKnowledgeDocumentSetRequest, UpdateKnowledgeSetResponse, SearchDocListRequest, DescribeKnowledgeDocumentSetListResponse, SearchDocListResponse, DeleteKnowledgeSetResponse, UpdateKnowledgeSetRequest, DescribeKnowledgeDocumentSetDetailRequest, CreateKnowledgeSetResponse, DeleteKnowledgeSetRequest, DescribeKnowledgeDocumentSetListRequest, DescribeDataSourceListRequest, DeleteKnowledgeDocumentSetRequest, DescribeKnowledgeSetListResponse, DescribeDataSourceListResponse, UploadKnowledgeDocumentSetResponse, DeleteKnowledgeDocumentSetResponse, CreateKnowledgeSetRequest, DescribeKnowledgeDocumentSetDetailResponse } from "./lowcode_models";
/**
 * lowcode client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建知识库
     */
    CreateKnowledgeSet(req: CreateKnowledgeSetRequest, cb?: (error: string, rep: CreateKnowledgeSetResponse) => void): Promise<CreateKnowledgeSetResponse>;
    /**
     * 更新知识库
     */
    UpdateKnowledgeSet(req: UpdateKnowledgeSetRequest, cb?: (error: string, rep: UpdateKnowledgeSetResponse) => void): Promise<UpdateKnowledgeSetResponse>;
    /**
     * 知识库文档搜索接口
     */
    SearchDocList(req: SearchDocListRequest, cb?: (error: string, rep: SearchDocListResponse) => void): Promise<SearchDocListResponse>;
    /**
     * 查询知识库
     */
    DescribeKnowledgeSetList(req: DescribeKnowledgeSetListRequest, cb?: (error: string, rep: DescribeKnowledgeSetListResponse) => void): Promise<DescribeKnowledgeSetListResponse>;
    /**
     * 获取数据源详情列表
     */
    DescribeDataSourceList(req: DescribeDataSourceListRequest, cb?: (error: string, rep: DescribeDataSourceListResponse) => void): Promise<DescribeDataSourceListResponse>;
    /**
     * 删除知识库下文档
     */
    DeleteKnowledgeDocumentSet(req: DeleteKnowledgeDocumentSetRequest, cb?: (error: string, rep: DeleteKnowledgeDocumentSetResponse) => void): Promise<DeleteKnowledgeDocumentSetResponse>;
    /**
     * 获取知识库下文档详情
     */
    DescribeKnowledgeDocumentSetDetail(req: DescribeKnowledgeDocumentSetDetailRequest, cb?: (error: string, rep: DescribeKnowledgeDocumentSetDetailResponse) => void): Promise<DescribeKnowledgeDocumentSetDetailResponse>;
    /**
     * 更新知识库
     */
    UploadKnowledgeDocumentSet(req: UploadKnowledgeDocumentSetRequest, cb?: (error: string, rep: UploadKnowledgeDocumentSetResponse) => void): Promise<UploadKnowledgeDocumentSetResponse>;
    /**
     * 查询知识库下文件集合
     */
    DescribeKnowledgeDocumentSetList(req: DescribeKnowledgeDocumentSetListRequest, cb?: (error: string, rep: DescribeKnowledgeDocumentSetListResponse) => void): Promise<DescribeKnowledgeDocumentSetListResponse>;
    /**
     * 删除知识库
     */
    DeleteKnowledgeSet(req: DeleteKnowledgeSetRequest, cb?: (error: string, rep: DeleteKnowledgeSetResponse) => void): Promise<DeleteKnowledgeSetResponse>;
}
