## Key points

- Spot instance can be interrupted. Reserved Instance provides massive discount and needs at least **1 year** rental term.
- Max EBS IOPS is **64000*.
- S3 IA is suitable for data that is accessed infrequently but still needs an **immediate access**.
- Site-to-Site VPN Conn **DOES NOT** provide high bandwidth. Each AWS Site-to-Site VPN connection has two tunnels and each tunnel supports a maximum throughput of up to 1.25 Gbp. 
- Software VPN with clustering has **ONLY** one conn and hence isn't HA
- GP2 has **3 IOPS** per GB
- Use **public virtual interface** on a Direct Connect to transfer huge amount of data over the weekend