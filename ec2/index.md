* [Elastic IP](#eip)

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
