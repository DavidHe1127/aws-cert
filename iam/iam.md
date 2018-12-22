### Why do we need to assume role?

We need to let `AWS` to assume `PhotoProcessorFunctionIamRole` created by us to have permission to execute our lambda with two policies `AllPrivsForPhotoAlbumUserfilesBucket` and `AllPrivsForDynamo`. These policies basically define what role is allowed to do.

Role assuming is needed here is because - we want `AWS` to trigger lambda when an image is created in `S3` bucket. You can think of `AWS` as another account to request for access to our resource that is lambda in this example.

```yml
Resources:
    PhotoProcessorFunctionIamRole: 
        Type: "AWS::IAM::Role"
        Properties:
            AssumeRolePolicyDocument:
                Version: "2012-10-17"
                Statement:
                    - 
                        Effect: Allow
                        Principal:
                            Service: [lambda.amazonaws.com]
                        Action: ["sts:AssumeRole"]
            ManagedPolicyArns: ["arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"]
            Path: "/"
            Policies: 
                - 
                    PolicyName: "AllPrivsForPhotoAlbumUserfilesBucket"
                    PolicyDocument: 
                        Version: "2012-10-17"
                        Statement: 
                            -
                                Effect: "Allow"
                                Action: "s3:*"
                                Resource: !Join ["/", [!Ref S3UserfilesBucketArn, "*"]]

                - 
                    PolicyName: "AllPrivsForDynamo"
                    PolicyDocument: 
                        Version: "2012-10-17"
                        Statement: 
                            -
                                Effect: "Allow"
                                Action: "dynamodb:*"
                                Resource: 
                                    - !Ref DynamoDBPhotosTableArn
```
