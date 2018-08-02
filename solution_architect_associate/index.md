# AWS Solution Architect Associate Exam tips and notes

### Services Overview
  * An `AZ` is simply a data center - designed as redundancies to protect data center from natural disasters for example.
  * `Edge locations` are endpoints for AWS which are used for content caching. Typically this consists of CloudFront - AWS CDN.
  * `Region` is geographic locations in the world which consists of **2 or more AZs**.
  
  * `Glacier` for files archival
  * `RedShift` for data warehousing/business intelligence
  * Direct connect is a way of running a dedicated line from your data center or corporate head office directly into VPC.
  * `CloudTrail` - log changes to your aws environment i.e create a new EC2 instance, IAM.
  * `Trusted Advisor` - give you adivce on your security, how to save your money when using aws.
  * `Elastic Map Reduce` - big data
  
### IAM
### S3/CDN/Glacier/CloudFront
### EC2
### Route53
  * No pre-defined IPv4 address on ELB. It only has a public DNS name
  * Major difference between `Alias record` and `CNAME record` is: `Alias record` can resolve individual aws server
    Another difference is `Alias record` is free while `CNAME record` costs money
    Always choose `Alias Record` over a `CNAME record`
  * Different routing policies
    * Simple
    * Weighted - A/B Testing. New site takes 20% traffic and old site takes 80% traffic
    * Latency - Server with the lowest latency will be used to serve traffic
    * Failover - DR site only comes online when health check on production site fails
    * Geolocation - fulfil traffic based on end users geolocations

### Database
### VPC
  * 1 subnet = 1 az. Subnet cannot span across multiple azs. But one az can have multiple subnets
  * All available AZs will be pre-defined for a particular region. VPC that resides in that region will span over all those AZs and you can later on create a subnet and specify which AZ it sits inside.
  ![](./vpc_with_azs.png)

  * Each VPC can only allow one `Internet Gateway`
  * Default VPC has one default route table, internet gateway. Each EC2 instance has both a public and private ip address
  * The *first four* ip addresses and the *last* ip address in each subnet CIDR block are not available for you to use
  * No Transitive peering
    In this diagram, `A` can peer into `B` and `C`. But `B` cannot peer into `C`. For them to peer each other, peering needs to be established between `B` and `C`
    ```
              VPC C
               |
      VPC B - VPC A - VPC E
               |
              VPC D

    ```

    #### Security Group & Access Control Lists
      * Security Groups are stateful - outbound port automatically turned on when inbound port has been specified
        Access Control Lists are stateless - need to turn ports on for both inbound and outbound
      * Security Group does not span across multiple vpcs. You must specify the VPC the security group is created in

    #### NAT instance
      * You must disable source/destination checks on the `NAT instance`
      * Use `NAT instance` as a bastion server
      * NAT instances **must be** in a public subnet
      * There **must be** a route out of the private subnet to the `NAT instance` in order for this to work
      * The amount of traffic that `NAT instances` can support depends on the instance size. If you are bottlenecking, increate the instance size
      * `NAT instances` are behind a security group

    #### NAT gateway key points
       * Not associated with security groups
       * Scale up to `10Gbps` automatically
       * Automatically assigned a public ip address
       * No need to disable Source/Destination Checks
       * No need to patch - aws manages it for us
       * NAT gateway *must be* in a public subnet with a route table that routes internet traffic to an internet gateway
       * Instances that need internet access *must be* in a private subnet with a route table that routes internet traffic
          to the NAT gateway
       * In summary, two key points - `NAT Gateway` needs to be in public subnet **AND** it needs to be added to the main route table
       * Internet traffic flow:
       ```
        Private instances ---> NAT Gateway(in public subnet) ---> Internet Gateway
       ```
       * ![NAT Gateway](./NAT_gateway.png)

    #### Network Access Control Lists
       * Each subnet **MUST BE** associated with a NACL. If not explicitly done, default NACL will be associated with your subnet
       * One NACL can be associated with multiple subnets. But one subnet can be associated with only one NACL at a time. When you associate a network ACL with a subnet, the previous association is removed
       * NACL can span across multiple AZs
       * NACL contain a numbered list of rules that is evaluated in order, starting with lowest numbered rule
       * Block IP addresses using NACL not security groups

       |  | Default NACL | Nondefault NACL |
       | --- | --- | --- |
       | traffic  | Allow all inbound and outbound traffic | Denies all inbound and outbound traffic until you add rules |

    #### Security Groups
       * Act as a firewall for associated EC2 instances, controlling both inbound and outbound traffic at the instance level

    #### Security Groups vs Network ACL

       | Security Group | Network ACL |
       | --- | --- |
       | Operates at the instance level | Operates at the subnet level |
       | Supports allow rules only | Supports allow rules and deny rules |
       | stateful | stateless |
       | We evaluate all rules before deciding whether to allow traffic | We process rules in numbered order when deciding whether to allow traffic |
       | Applies to an instance only if someone specifies the security group when launching the instance, or associates the security group with instance later on | Automatically applies to all instances in the subnets it's associated with (therefore, you don't have to rely on users to specify the security group) |

       * ![Security Diagram](./security.png)

    #### ELB
       * When creating a VPC, you need your application load balancers to always be in at least two AZs and they **must be** public.





### Application Services
  #### SQS
  #### SWF
  #### SNS
  #### Elastic Transcoder
  #### API Gateway
  #### Kinesis 101



