## Cost Management

Appropriate Provisioning
![Appropriate Provisioning](./appropriate-provisioning.png)

Right Sizing
![Right Sizing](./right-sizing.png)

Purchase Options
![Purchase Options](./purchase-options.png)

Geo Selection
![geo-selection](./geo-selection.png)

Managed Services
![managed-services](./managed-services.png)

Optimized Data Transfer
![optimized-data-transfer](./optimized-data-transfer.png)


### Tagging

- Tagging strategies can be used for Cost Allocation, Security, Automation and many other uses.

For example, we can use a tag in an IAM policy to implement access controls to certain resources

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "arn:aws:ec2:*:*:instance/*",
            "Condition": {
                "StringEquals": {"ec2:ResourceTag/Owner": "${aws:username}"}
            }
        },
        {
            "Effect": "Allow",
            "Action": "ec2:DescribeInstances",
            "Resource": "*"
        }
    ]
}
```
As shown above, ec2s are restricted to be accessed by current user which is tagged as `Owner` on them.

- Enforcing standardized tagging can be done via AWS Config Rules or custom scripts.

For example, EC2 instances not propery tagged are
stopped or terminated nightly

- Most resources can have up to 50 tags.

### Resource Groups

- Resource Group are groupings of AWS assets defined by tags
- Create custom consoles to consolidate metrics, alarms and config details around given tags

![resource-groups](./resource-groups.png)

### Spot/Reserved Instances

Reserved Instances
![reserved instances](reserved-instance.png)

Reserved Instances Attrs
![reserved instances attr](reserved-instances-attrs.png)

Reserved Instances
![reserved instances 2](reserved-instances-2.png)

Spot Instances
![spot instances](spot-instance.png)

### Dedicated host/instance

![dedicated-host-dedicated-instance.png]

### Cost Management Tool

Consolidated Billing
![consolidated-billing](consolidated-billing.png)

Trusted Advisory
![trusted-advisory](trusted-advisory.png)
