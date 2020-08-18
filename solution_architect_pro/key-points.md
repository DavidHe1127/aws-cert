## Key points 21

### Autoscaling

### Business Continuity

- Spot instance can be interrupted. Reserved Instance provides massive discount and needs at least **1 year** rental term.
- Use DLQ (dead letter queue) for failed transactions reprocess

### Cost Management

### Migration

- Cert produced by AWS Cert Manager cannot be cross-region

### Data Store

- Max EBS IOPS is **64000*.
- S3 IA is suitable for data that is accessed infrequently but still needs an **immediate access**.
- GP2 has **3 IOPS** per GB
- EFS has **higher latency** than EBS provisioned IOPS

### Deployment and operation management



### Networking

- Site-to-Site VPN Conn **DOES NOT** provide high bandwidth. Each AWS Site-to-Site VPN connection has two tunnels and each tunnel supports a maximum throughput of up to **1.25 Gbp**.
- Software VPN with clustering has **ONLY** one conn and hence isn't HA
- Use **public virtual interface** on a Direct Connect to transfer huge amount of data over the weekend
- When being asked about data movement, choose `Public virtual interface` on a Direct Connect connection.
- max limit **125** peering conns per vpc
- VPN requires internet and does not unfold source ip

### Security

- Use AWS Org and add accounts from departments to an O(rg) (U)nit when seeing **autonomy/service isolations**.






