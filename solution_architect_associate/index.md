# AWS Solution Architect Associate Exam tips and notes

### Services Overview
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
    
    #### NAT gateway key points  
       * NAT gateway *must be* in a public subnet with a route table that routes internet traffic to an internet gateway
       * Instances that need internet access *must be* in a private subnet with a route table that routes internet traffic
          to the NAT gateway
       * In summary, two key points - `NAT Gateway` needs to be in public subnet AND it needs to be added to the main route table
       * ![NAT Gateway](./NAT_gateway.png)



### Application Services
  #### SQS
  #### SWF
  #### SNS
  #### Elastic Transcoder
  #### API Gateway
  #### Kinesis 101



