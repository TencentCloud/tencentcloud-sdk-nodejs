/**
 * QueryActivityLiveCodeList请求参数结构体
 */
export interface QueryActivityLiveCodeListRequest {
    /**
      * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
      */
    Cursor?: string;
    /**
      * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
      */
    Limit?: number;
}
/**
 * QueryActivityLiveCodeList返回参数结构体
 */
export interface QueryActivityLiveCodeListResponse {
    /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextCursor: string;
    /**
      * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageData: Array<LiveCodeDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 活动活码详情
 */
export interface LiveCodeDetail {
    /**
      * 活码id
      */
    LiveCodeId: number;
    /**
      * 活码名称
      */
    LiveCodeName: string;
    /**
      * 短链url
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShortChainAddress: string;
    /**
      * 活码二维码
注意：此字段可能返回 null，表示取不到有效值。
      */
    LiveCodePreview: string;
    /**
      * 活动id
      */
    ActivityId: number;
    /**
      * 活动名称
      */
    ActivityName: string;
    /**
      * 活码状态，-1：删除，0：启用，1禁用，默认为0
      */
    LiveCodeState: number;
    /**
      * 活码参数，每个活码参数都是不一样的， 这个的值对应的是字符串json类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    LiveCodeData: string;
    /**
      * 创建时间戳，单位为秒
      */
    CreateTime: number;
    /**
      * 更新时间戳，单位为秒
      */
    UpdateTime: number;
}
