import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMaterialListResponse, FuseFaceUltraRequest, FuseFaceUltraResponse, FuseFaceResponse, FuseFaceRequest, DescribeMaterialListRequest } from "./facefusion_models";
/**
 * facefusion client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通常通过腾讯云人脸融合的控制台可以查看到素材相关的参数数据，可以满足使用。本接口返回活动的素材数据，包括素材状态等。用于用户通过Api查看素材相关数据，方便使用。
     */
    DescribeMaterialList(req: DescribeMaterialListRequest, cb?: (error: string, rep: DescribeMaterialListResponse) => void): Promise<DescribeMaterialListResponse>;
    /**
     * 本接口用于单脸、多脸、选脸融合，上传人脸图片，得到与素材模板融合后的人脸图片。支持为融合结果图添加标识。查看 <a href="https://cloud.tencent.com/document/product/670/38247" target="_blank">融合接入指引</a>。

>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    FuseFace(req: FuseFaceRequest, cb?: (error: string, rep: FuseFaceResponse) => void): Promise<FuseFaceResponse>;
    /**
     * 图片人脸融合（专业版）为同步接口，支持自定义美颜、人脸增强、牙齿增强、拉脸等参数，最高支持8K分辨率，有多个模型类型供选择。查看 <a href="https://cloud.tencent.com/document/product/670/38247" target="_blank">融合接入指引</a>。
     */
    FuseFaceUltra(req: FuseFaceUltraRequest, cb?: (error: string, rep: FuseFaceUltraResponse) => void): Promise<FuseFaceUltraResponse>;
}
