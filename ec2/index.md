* [Elastic IP](#eip)
* [EC2 Reserved vs. on-demand instances](#ec2-reserved-on-demand-instance)
* [CIDR and subnet mask notation](#cidr-subnet-mask-notation)
* [EC2 instance AMI and EBS volume snapshot](#ec2-instance-ami-vs-ebs-volume-snapshot)
* [RAID](#raid)
* [Load balancer](#load-balancer)

### eip
An Elastic IP address, is an address that you request from AWS and is allocated to you until you choose to release it back to AWS. This means that only you can use this IP address.

The benefits of an Elastic IP address over an auto-assigned Public IP address are:

It's constant, meaning it won't change.
It's movable, meaning you can move it from instance to instance as you need to.
It's constant

If you don't use an Elastic IP address for your EC2 instance, then either it won't have a Public IP address, or it's Public IP address will change if the instance is stopped.

When using an Elastic IP address, then your EC2 instance can keep it's internet-facing IP address forever.

If you need to put your EC2 instance's IP address in DNS, the use an Elastic IP address.

It's movable

If your instance fails, you can move the Elastic IP address to another EC2 instance and your users and DNS entries won't have to change anything. They will simply start working with the new EC2 instance.

To address your questions:

>> If launch an instance in EC2-Classic, EIP = Public IP?

No. An Elastic IP is never the same as an auto-assigned Public IP.

>> If launch an instance in EC2-VPC, the public IP of an instance can be the NAT address?

If your EC2 instance is in a public subnet in your VPC, it can have it's own IP address (Elastic IP or Public IP) for internet connections through your VPC's Internet Gateway.

If your EC2 instance is in a private subnet in your VPC, then it can use your NAT to make outbound connections. The outside world would see it's IP address as your NAT's IP address, but the NAT's IP address would never "be" the Public IP address of the instance

### ec2-reserved-on-demand-instance

* The ONLY difference is in billing and availability
* If you do not expect to change the EC2 Instance type, or its availability zone over the time period, then purchasing a Reserved Instance type offers the best value for your investment.
* If you know you are only going to use a particular server part-time – say, 8 hours a day, 5 days a week – we recommend purchasing On-Demand Instances for those servers
* We recommend that you purchase Reserved Instances only when you know you are going to use it close to 24x7 (or at least more than 75% of the time)

### cidr-subnet-mask-notation

`cidr prefix` - */xx* denotes how many bits it masks.

```js
0.0.0.0/0         // 0 bit
128.0.0.0/1       // 1 bit  10000000 => 128
192.0.0.0/2       // 2 bits 11000000 => 192
255.0.0.0/8       // 8 bits 11111111 => 255
255.255.255.0/24  // 24 bits 11111111 11111111 11111111 => 255.255.255
```

### ec2-instance-ami-vs-ebs-volume-snapshot
EBS volume - hard disk on your ec2 instance
EBS volume snapshot - a copy of your volume with state/data at a certain point. It can be replicated onto new volumes to have the same state/data.
AMI - a snapshot of root EBS volume - normally where OS resides

### raid
`Redundant Array of Independent Disks` - basically it is a way to bundle up multiple volume into a single one volume.
Use case scenario is when volume is provisioned with max size and it still does meet your `iops` requirement. Then you need a `raid`.


### load-balancer
`Health Check` will look for the file configured as ping path during health check setup. If the file isn't here, it will result in instace status being `out of service`. If the file is there, then status will be `in service`
 

