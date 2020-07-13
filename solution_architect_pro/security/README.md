## Security

### Concepts

#### Auth workflow

![OAuth](./OAuth.png)
![auth](./auth.png)

#### SAML vs OAuth vs OpenID

![saml-oauth-openid](./saml-oauth-openid.png)

### Multi-Account Management

#### Identity Account Structure

- Use cross-account roles. Create a role and make it use another aws account as trusted entity. i.e specify `development` account id to as trusted entity to use a role that's created under `production` account. That way `development` has the permissions that's granted to `production` account

![trusted-identity-structure](trusted-identity-structure.png)

#### Logging Account Structure
![logging-account-structure](logging-account-structure.png)

#### Publishing Account Structure
![publishing-account-structure](publishing-account-structure.png)

#### Credential and Access Management
![ad-connector-simple-ad](ad-connector-simple-ad.png)




