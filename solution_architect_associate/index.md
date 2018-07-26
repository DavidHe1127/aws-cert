# This is exam tips and notes

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
### Application Services
  #### SQS
  #### SWF
  #### SNS
  #### Elastic Transcoder
  #### API Gateway
  #### Kinesis 101



