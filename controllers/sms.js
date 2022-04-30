'use strict';
const tencentcloud = require("tencentcloud-sdk-nodejs")
const SmsClient = tencentcloud.sms.v20210111.Client;

/**
 * stripe.js controller
 *
 * @description: A set of functions called "actions" of the `stripe` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  

  send:async(ctx)=>{
      const {PhoneNumberSet,verificationCode}=ctx.request.body
    const clientConfig = {
        credential: {
          secretId: "AKID97pGRLxLTKuDF0UhcGdiW3JHyPZS5RVI",
          secretKey: "XnmVy93f04rNnwpQknZ4IFuIPFqENFrF",
        },
        region: "ap-guangzhou",
        profile: {
          httpProfile: {
            endpoint: "sms.tencentcloudapi.com",
          },
        },
      };
      
      const client = new SmsClient(clientConfig);
      const params = {
        PhoneNumberSet,
          "SmsSdkAppId": "1400655010",
          "SignName": "四川舍予人玉商贸有限公司",
          "TemplateId": "1353736",
          "TemplateParamSet": [
            verificationCode,
              "10"
          ]
      };
      client.SendSms(params).then(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.error("error", err);
        }
      );
  }
};
