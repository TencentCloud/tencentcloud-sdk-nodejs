import { Response } from "node-fetch";
/**
 * @inner
 */
export declare class HttpConnection {
    static doRequest({ method, url, data, timeout, headers, }: {
        method: string;
        url: string;
        data: any;
        timeout: number;
        headers?: Record<string, string>;
    }): Promise<Response>;
    static doRequestWithSign3({ method, url, data, service, action, region, version, secretId, secretKey, multipart, timeout, token, requestClient, language, headers, }: {
        method: string;
        url: string;
        data: any;
        service: string;
        action: string;
        region: string;
        version: string;
        secretId: string;
        secretKey: string;
        multipart?: boolean;
        timeout?: number;
        token: string;
        requestClient: string;
        language: string;
        headers?: Record<string, string>;
    }): Promise<Response>;
}
