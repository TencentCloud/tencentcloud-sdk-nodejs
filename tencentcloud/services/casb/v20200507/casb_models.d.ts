/**
 * CopyCryptoColumnPolicy请求参数结构体
 */
export interface CopyCryptoColumnPolicyRequest {
    /**
      * 实例Id
      */
    CasbId: string;
    /**
      * 元数据id
      */
    MetaDataId: string;
    /**
      * 目标实例Id 如果和实例Id相同则为同CasbId下的策略复制
      */
    DstCasbId: string;
    /**
      * 目标实例Id 如果和[元数据id]相同则为同元数据下的策略复制
      */
    DstMetaDataId: string;
    /**
      * 筛选来源数据库的表
      */
    SrcTableFilter?: Array<CryptoCopyColumnPolicyTableFilter>;
    /**
      * 复制同元数据下的策略，需要填写目标数据库名
      */
    DstDatabaseName?: string;
}
/**
 * 策略迁移表信息筛选
 */
export interface CryptoCopyColumnPolicyTableFilter {
    /**
      * 数据库名称
      */
    DatabaseName: string;
    /**
      * 表名称
      */
    TableNameSet?: Array<string>;
}
/**
 * CopyCryptoColumnPolicy返回参数结构体
 */
export interface CopyCryptoColumnPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
