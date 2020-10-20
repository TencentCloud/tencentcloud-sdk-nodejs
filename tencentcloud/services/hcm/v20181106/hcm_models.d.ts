/**
 * 识别出的算术式信息及评估结果
 */
export interface Item {
    /**
     * 识别的算式是否正确
     */
    Item: string;
    /**
     * 识别的算式
     */
    ItemString: string;
    /**
     * 识别的算式在图片上的位置信息
     */
    ItemCoord: ItemCoord;
    /**
     * 推荐的答案，暂不支持多个关系运算符、无关系运算符、单位换算错题的推荐答案返回。
     */
    Answer: string;
    /**
        * 算式题型编号，如加减乘除四则题型，具体题型及编号如下：1 加减乘除四则 2 加减乘除已知结果求运算因子3 判断大小 4 约等于估算 5 带余数除法 6 分数四则运算 7 单位换算 8 竖式加减法 9 竖式乘除法 10 脱式计算 11 解方程
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpressionType: string;
    /**
        * 文本行置信度
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemConf: number;
}
/**
 * Evaluation请求参数结构体
 */
export interface EvaluationRequest {
    /**
     * 图片唯一标识，一张图片一个SessionId；
     */
    SessionId: string;
    /**
     * 图片数据，需要使用base64对图片的二进制数据进行编码，与url参数二者填一即可；
     */
    Image?: string;
    /**
     * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 HcmAppid 可以在[控制台](https://console.cloud.tencent.com/hcm)【应用管理】下新建。
     */
    HcmAppid?: string;
    /**
     * 图片url，与Image参数二者填一即可；
     */
    Url?: string;
    /**
     * 横屏拍摄开关，若开启则支持传输横屏拍摄的图片；
     */
    SupportHorizontalImage?: boolean;
    /**
     * 拒绝非速算图（如风景图、人物图）开关，若开启，则遇到非速算图会快速返回拒绝的结果，但极端情况下可能会影响评估结果（比如算式截图贴到风景画里可能被判为非速算图直接返回了）。
     */
    RejectNonArithmeticImage?: boolean;
    /**
     * 异步模式标识，0：同步模式，1：异步模式。默认为同步模式
     */
    IsAsync?: number;
    /**
     * 是否展开耦合算式中的竖式计算
     */
    EnableDispRelatedVertical?: boolean;
    /**
     * 是否展示竖式算式的中间结果和格式控制字符
     */
    EnableDispMidresult?: boolean;
    /**
     * 是否开启pdf识别，默认开启
     */
    EnablePdfRecognize?: boolean;
    /**
     * pdf页码，从0开始，默认为0
     */
    PdfPageIndex?: number;
    /**
     * 是否返回LaTex，默认为0返回普通格式，设置成1返回LaTex格式
     */
    LaTex?: number;
}
/**
 * Evaluation返回参数结构体
 */
export interface EvaluationResponse {
    /**
     * 图片唯一标识，一张图片一个SessionId；
     */
    SessionId?: string;
    /**
        * 识别出的算式信息；
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Items?: Array<Item>;
    /**
     * 任务 id，用于查询接口
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 目标算式在图片上的坐标信息
 */
export interface ItemCoord {
    /**
     * 算式高度
     */
    Height: number;
    /**
     * 算式宽度
     */
    Width: number;
    /**
     * 算式图的左上角横坐标
     */
    X: number;
    /**
     * 算式图的左上角纵坐标
     */
    Y: number;
}
