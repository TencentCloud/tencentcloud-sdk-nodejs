import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { BatchDescribeOrderCertificateRequest, BatchDescribeOrderImageResponse, DescribeImagesResponse, DescribeAuthUsersRequest, BatchDescribeOrderCertificateResponse, DescribeImageResponse, DescribeAuthUsersResponse, DescribeImageRequest, CreateOrderAndPayResponse, DescribeImagesRequest, CreateOrderAndPayRequest, BatchDescribeOrderImageRequest } from "./ape_models";
/**
 * ape client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 分页查询授权人列表
     */
    DescribeAuthUsers(req: DescribeAuthUsersRequest, cb?: (error: string, rep: DescribeAuthUsersResponse) => void): Promise<DescribeAuthUsersResponse>;
    /**
     * 批量获取授权书下载地址
     */
    BatchDescribeOrderCertificate(req: BatchDescribeOrderCertificateRequest, cb?: (error: string, rep: BatchDescribeOrderCertificateResponse) => void): Promise<BatchDescribeOrderCertificateResponse>;
    /**
     * 根据关键字搜索图片列表
     */
    DescribeImages(req: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 根据ID查询一张图片的详细信息
     */
    DescribeImage(req: DescribeImageRequest, cb?: (error: string, rep: DescribeImageResponse) => void): Promise<DescribeImageResponse>;
    /**
     * 购买一张图片并且支付
     */
    CreateOrderAndPay(req: CreateOrderAndPayRequest, cb?: (error: string, rep: CreateOrderAndPayResponse) => void): Promise<CreateOrderAndPayResponse>;
    /**
     * 批量获取图片下载地址
     */
    BatchDescribeOrderImage(req: BatchDescribeOrderImageRequest, cb?: (error: string, rep: BatchDescribeOrderImageResponse) => void): Promise<BatchDescribeOrderImageResponse>;
}
