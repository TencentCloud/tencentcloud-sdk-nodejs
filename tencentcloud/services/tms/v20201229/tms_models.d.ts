/**
 * 账号风险检测结果
 */
export interface RiskDetails {
    /**
      * 风险类别，RiskAccount，RiskIP, RiskIMEI
      */
    Label: string;
    /**
      * 风险等级，1:疑似，2：恶意
      */
    Level: number;
}
/**
 * TextModeration请求参数结构体
 */
export interface TextModerationRequest {
    /**
      * 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。
      */
    Content: string;
    /**
      * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。
      */
    BizType?: string;
    /**
      * 数据ID，英文字母、下划线、-组成，不超过64个字符
      */
    DataId?: string;
    /**
      * 账号相关信息字段，填入后可识别违规风险账号。
      */
    User?: User;
    /**
      * 设备相关信息字段，填入后可识别违规风险设备。
      */
    Device?: Device;
}
/**
 * 文本返回的详细结果
 */
export interface DetailResults {
    /**
      * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
      */
    Label: string;
    /**
      * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该标签下命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 该标签模型命中的分值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 仅当Label为Custom自定义关键词时有效，表示自定义关键词库类型，1:黑白库，2：自定义库
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibType: number;
    /**
      * 仅当Label为Custom自定义关键词时有效，表示自定义库id
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 仅当Labe为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
}
/**
 * 用户相关信息
 */
export interface User {
    /**
      * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
      */
    UserId?: string;
    /**
      * 用户昵称
      */
    Nickname?: string;
    /**
      * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
      */
    AccountType?: number;
    /**
      * 性别 默认0 未知 1 男性 2 女性
      */
    Gender?: number;
    /**
      * 年龄 默认0 未知
      */
    Age?: number;
    /**
      * 用户等级，默认0 未知 1 低 2 中 3 高
      */
    Level?: number;
    /**
      * 手机号
      */
    Phone?: string;
}
/**
 * 设备信息
 */
export interface Device {
    /**
      * 用户IP
      */
    IP?: string;
    /**
      * Mac地址
      */
    Mac?: string;
    /**
      * 设备指纹Token
      */
    TokenId?: string;
    /**
      * 设备指纹ID
      */
    DeviceId?: string;
    /**
      * 设备序列号
      */
    IMEI?: string;
    /**
      * IOS设备，Identifier For Advertising（广告标识符）
      */
    IDFA?: string;
    /**
      * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
      */
    IDFV?: string;
}
/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
    /**
      * 您在入参时所填入的Biztype参数。 -- 该字段暂未开放。
      */
    BizType?: string;
    /**
      * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
      */
    Label?: string;
    /**
      * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
      */
    Suggestion?: string;
    /**
      * 文本命中的关键词信息，用于提示您文本违规的具体原因，可能会返回多个命中的关键词。（如：加我微信）
如返回值为空，Score不为空，即识别结果（Label）是来自于语义模型判断的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords?: Array<string>;
    /**
      * 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。
（如：色情 99.99，则该样本属于色情的置信度非常高。）
      */
    Score?: number;
    /**
      * 接口识别样本后返回的详细结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DetailResults?: Array<DetailResults>;
    /**
      * 接口识别样本中存在违规账号风险的检测结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskDetails?: Array<RiskDetails>;
    /**
      * 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra?: string;
    /**
      * 请求参数中的DataId
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
