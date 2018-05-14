* signature
When you sign up for Amazon, you can create yourself a key pair (Amazon calls those access key ID and secret access key).

Those two are used to sign requests to Amazon's webservices. Amazon re-calculates the signature and compares if it matches the one that was contained in your request. That way the secret access key never needs to be transmitted over the network.
