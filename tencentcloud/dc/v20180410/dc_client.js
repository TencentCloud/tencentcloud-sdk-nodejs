/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeInternetAddressQuotaRequest = models.DescribeInternetAddressQuotaRequest;
const BgpPeer = models.BgpPeer;
const DirectConnectTunnelRoute = models.DirectConnectTunnelRoute;
const RejectDirectConnectTunnelRequest = models.RejectDirectConnectTunnelRequest;
const Coordinate = models.Coordinate;
const CreateDirectConnectResponse = models.CreateDirectConnectResponse;
const DescribeDirectConnectTunnelExtraRequest = models.DescribeDirectConnectTunnelExtraRequest;
const DescribePublicDirectConnectTunnelRoutesRequest = models.DescribePublicDirectConnectTunnelRoutesRequest;
const DirectConnect = models.DirectConnect;
const InternetAddressDetail = models.InternetAddressDetail;
const DescribeAccessPointsResponse = models.DescribeAccessPointsResponse;
const DeleteDirectConnectTunnelRequest = models.DeleteDirectConnectTunnelRequest;
const AcceptDirectConnectTunnelRequest = models.AcceptDirectConnectTunnelRequest;
const ReleaseInternetAddressRequest = models.ReleaseInternetAddressRequest;
const DescribeDirectConnectTunnelExtraResponse = models.DescribeDirectConnectTunnelExtraResponse;
const ModifyDirectConnectTunnelAttributeResponse = models.ModifyDirectConnectTunnelAttributeResponse;
const RouteFilterPrefix = models.RouteFilterPrefix;
const ApplyInternetAddressResponse = models.ApplyInternetAddressResponse;
const BGPStatus = models.BGPStatus;
const DirectConnectTunnelExtra = models.DirectConnectTunnelExtra;
const Tag = models.Tag;
const CreateDirectConnectTunnelRequest = models.CreateDirectConnectTunnelRequest;
const DeleteDirectConnectResponse = models.DeleteDirectConnectResponse;
const ModifyDirectConnectTunnelExtraResponse = models.ModifyDirectConnectTunnelExtraResponse;
const EnableInternetAddressResponse = models.EnableInternetAddressResponse;
const ApplyInternetAddressRequest = models.ApplyInternetAddressRequest;
const DescribeDirectConnectsResponse = models.DescribeDirectConnectsResponse;
const DescribeAccessPointsRequest = models.DescribeAccessPointsRequest;
const AcceptDirectConnectTunnelResponse = models.AcceptDirectConnectTunnelResponse;
const DescribeDirectConnectTunnelsRequest = models.DescribeDirectConnectTunnelsRequest;
const ModifyDirectConnectAttributeRequest = models.ModifyDirectConnectAttributeRequest;
const DescribeInternetAddressResponse = models.DescribeInternetAddressResponse;
const ModifyDirectConnectTunnelAttributeRequest = models.ModifyDirectConnectTunnelAttributeRequest;
const Filter = models.Filter;
const DisableInternetAddressResponse = models.DisableInternetAddressResponse;
const DescribeInternetAddressStatisticsRequest = models.DescribeInternetAddressStatisticsRequest;
const InternetAddressStatistics = models.InternetAddressStatistics;
const CreateDirectConnectRequest = models.CreateDirectConnectRequest;
const EnableInternetAddressRequest = models.EnableInternetAddressRequest;
const ModifyDirectConnectAttributeResponse = models.ModifyDirectConnectAttributeResponse;
const ModifyDirectConnectTunnelExtraRequest = models.ModifyDirectConnectTunnelExtraRequest;
const RejectDirectConnectTunnelResponse = models.RejectDirectConnectTunnelResponse;
const CreateDirectConnectTunnelResponse = models.CreateDirectConnectTunnelResponse;
const DescribeDirectConnectsRequest = models.DescribeDirectConnectsRequest;
const DeleteDirectConnectTunnelResponse = models.DeleteDirectConnectTunnelResponse;
const BFDInfo = models.BFDInfo;
const DeleteDirectConnectRequest = models.DeleteDirectConnectRequest;
const DescribeDirectConnectTunnelsResponse = models.DescribeDirectConnectTunnelsResponse;
const AccessPoint = models.AccessPoint;
const DescribeInternetAddressStatisticsResponse = models.DescribeInternetAddressStatisticsResponse;
const NQAInfo = models.NQAInfo;
const DescribeInternetAddressRequest = models.DescribeInternetAddressRequest;
const DescribePublicDirectConnectTunnelRoutesResponse = models.DescribePublicDirectConnectTunnelRoutesResponse;
const DescribeInternetAddressQuotaResponse = models.DescribeInternetAddressQuotaResponse;
const ReleaseInternetAddressResponse = models.ReleaseInternetAddressResponse;
const DirectConnectTunnel = models.DirectConnectTunnel;
const DisableInternetAddressRequest = models.DisableInternetAddressRequest;


/**
 * dc client
 * @class
 */
class DcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dc.tencentcloudapi.com", "2018-04-10", credential, region, profile);
    }
    
    /**
     * 本接口（ModifyDirectConnectTunnelExtra）用于修改专用通道扩展信息
     * @param {ModifyDirectConnectTunnelExtraRequest} req
     * @param {function(string, ModifyDirectConnectTunnelExtraResponse):void} cb
     * @public
     */
    ModifyDirectConnectTunnelExtra(req, cb) {
        let resp = new ModifyDirectConnectTunnelExtraResponse();
        this.request("ModifyDirectConnectTunnelExtra", req, resp, cb);
    }

    /**
     * 停用用户申请的公网互联网地址
     * @param {DisableInternetAddressRequest} req
     * @param {function(string, DisableInternetAddressResponse):void} cb
     * @public
     */
    DisableInternetAddress(req, cb) {
        let resp = new DisableInternetAddressResponse();
        this.request("DisableInternetAddress", req, resp, cb);
    }

    /**
     * 本接口（DescribePublicDirectConnectTunnelRoutes）用于查询互联网通道路由列表
     * @param {DescribePublicDirectConnectTunnelRoutesRequest} req
     * @param {function(string, DescribePublicDirectConnectTunnelRoutesResponse):void} cb
     * @public
     */
    DescribePublicDirectConnectTunnelRoutes(req, cb) {
        let resp = new DescribePublicDirectConnectTunnelRoutesResponse();
        this.request("DescribePublicDirectConnectTunnelRoutes", req, resp, cb);
    }

    /**
     * 查询物理专线接入点

     * @param {DescribeAccessPointsRequest} req
     * @param {function(string, DescribeAccessPointsResponse):void} cb
     * @public
     */
    DescribeAccessPoints(req, cb) {
        let resp = new DescribeAccessPointsResponse();
        this.request("DescribeAccessPoints", req, resp, cb);
    }

    /**
     * 修改物理专线的属性。
     * @param {ModifyDirectConnectAttributeRequest} req
     * @param {function(string, ModifyDirectConnectAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectAttribute(req, cb) {
        let resp = new ModifyDirectConnectAttributeResponse();
        this.request("ModifyDirectConnectAttribute", req, resp, cb);
    }

    /**
     * 用于创建专用通道的接口
     * @param {CreateDirectConnectTunnelRequest} req
     * @param {function(string, CreateDirectConnectTunnelResponse):void} cb
     * @public
     */
    CreateDirectConnectTunnel(req, cb) {
        let resp = new CreateDirectConnectTunnelResponse();
        this.request("CreateDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 本接口（DescribeDirectConnectTunnelExtra）用于查询专用通道扩展信息
     * @param {DescribeDirectConnectTunnelExtraRequest} req
     * @param {function(string, DescribeDirectConnectTunnelExtraResponse):void} cb
     * @public
     */
    DescribeDirectConnectTunnelExtra(req, cb) {
        let resp = new DescribeDirectConnectTunnelExtraResponse();
        this.request("DescribeDirectConnectTunnelExtra", req, resp, cb);
    }

    /**
     * 删除物理专线。
只能删除处于已连接状态的物理专线。
     * @param {DeleteDirectConnectRequest} req
     * @param {function(string, DeleteDirectConnectResponse):void} cb
     * @public
     */
    DeleteDirectConnect(req, cb) {
        let resp = new DeleteDirectConnectResponse();
        this.request("DeleteDirectConnect", req, resp, cb);
    }

    /**
     * 接受专用通道申请
     * @param {AcceptDirectConnectTunnelRequest} req
     * @param {function(string, AcceptDirectConnectTunnelResponse):void} cb
     * @public
     */
    AcceptDirectConnectTunnel(req, cb) {
        let resp = new AcceptDirectConnectTunnelResponse();
        this.request("AcceptDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 获取用户互联网公网地址分配统计信息
     * @param {DescribeInternetAddressStatisticsRequest} req
     * @param {function(string, DescribeInternetAddressStatisticsResponse):void} cb
     * @public
     */
    DescribeInternetAddressStatistics(req, cb) {
        let resp = new DescribeInternetAddressStatisticsResponse();
        this.request("DescribeInternetAddressStatistics", req, resp, cb);
    }

    /**
     * 删除专用通道
     * @param {DeleteDirectConnectTunnelRequest} req
     * @param {function(string, DeleteDirectConnectTunnelResponse):void} cb
     * @public
     */
    DeleteDirectConnectTunnel(req, cb) {
        let resp = new DeleteDirectConnectTunnelResponse();
        this.request("DeleteDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 申请互联网CIDR地址
     * @param {ApplyInternetAddressRequest} req
     * @param {function(string, ApplyInternetAddressResponse):void} cb
     * @public
     */
    ApplyInternetAddress(req, cb) {
        let resp = new ApplyInternetAddressResponse();
        this.request("ApplyInternetAddress", req, resp, cb);
    }

    /**
     * 启用已停用的互联网公网地址
     * @param {EnableInternetAddressRequest} req
     * @param {function(string, EnableInternetAddressResponse):void} cb
     * @public
     */
    EnableInternetAddress(req, cb) {
        let resp = new EnableInternetAddressResponse();
        this.request("EnableInternetAddress", req, resp, cb);
    }

    /**
     * 获取用户互联网公网地址配额
     * @param {DescribeInternetAddressQuotaRequest} req
     * @param {function(string, DescribeInternetAddressQuotaResponse):void} cb
     * @public
     */
    DescribeInternetAddressQuota(req, cb) {
        let resp = new DescribeInternetAddressQuotaResponse();
        this.request("DescribeInternetAddressQuota", req, resp, cb);
    }

    /**
     * 获取用户互联网公网地址信息
     * @param {DescribeInternetAddressRequest} req
     * @param {function(string, DescribeInternetAddressResponse):void} cb
     * @public
     */
    DescribeInternetAddress(req, cb) {
        let resp = new DescribeInternetAddressResponse();
        this.request("DescribeInternetAddress", req, resp, cb);
    }

    /**
     * 用于查询专用通道列表。
     * @param {DescribeDirectConnectTunnelsRequest} req
     * @param {function(string, DescribeDirectConnectTunnelsResponse):void} cb
     * @public
     */
    DescribeDirectConnectTunnels(req, cb) {
        let resp = new DescribeDirectConnectTunnelsResponse();
        this.request("DescribeDirectConnectTunnels", req, resp, cb);
    }

    /**
     * 申请物理专线接入。
调用该接口时，请注意：
账号要进行实名认证，否则不允许申请物理专线；
若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
     * @param {CreateDirectConnectRequest} req
     * @param {function(string, CreateDirectConnectResponse):void} cb
     * @public
     */
    CreateDirectConnect(req, cb) {
        let resp = new CreateDirectConnectResponse();
        this.request("CreateDirectConnect", req, resp, cb);
    }

    /**
     * 拒绝专用通道申请
     * @param {RejectDirectConnectTunnelRequest} req
     * @param {function(string, RejectDirectConnectTunnelResponse):void} cb
     * @public
     */
    RejectDirectConnectTunnel(req, cb) {
        let resp = new RejectDirectConnectTunnelResponse();
        this.request("RejectDirectConnectTunnel", req, resp, cb);
    }

    /**
     * 查询物理专线列表。
     * @param {DescribeDirectConnectsRequest} req
     * @param {function(string, DescribeDirectConnectsResponse):void} cb
     * @public
     */
    DescribeDirectConnects(req, cb) {
        let resp = new DescribeDirectConnectsResponse();
        this.request("DescribeDirectConnects", req, resp, cb);
    }

    /**
     * 释放已申请的互联网地址
     * @param {ReleaseInternetAddressRequest} req
     * @param {function(string, ReleaseInternetAddressResponse):void} cb
     * @public
     */
    ReleaseInternetAddress(req, cb) {
        let resp = new ReleaseInternetAddressResponse();
        this.request("ReleaseInternetAddress", req, resp, cb);
    }

    /**
     * 修改专用通道属性
     * @param {ModifyDirectConnectTunnelAttributeRequest} req
     * @param {function(string, ModifyDirectConnectTunnelAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectTunnelAttribute(req, cb) {
        let resp = new ModifyDirectConnectTunnelAttributeResponse();
        this.request("ModifyDirectConnectTunnelAttribute", req, resp, cb);
    }


}
module.exports = DcClient;
