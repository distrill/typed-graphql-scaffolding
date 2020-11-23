# typed-graphql-scaffolding

Probably somewhat over engineered but a reasonable starting point for a new graphql server.  

The goal is to annotate business logic code and build graphql types from that. The heavy lifting in this regard is done by the [typegraph project](https://typegraphql.com).

Code is centered around models, which are broken up as follows:  
`<name>_type:` Root graphql object. if there is a database table that underpins it, the fields should map to the columns, as this type can be used to type the base model for this table.  
`<name>_model:` Persistence access layer - taking advantage of `bh-modelbase` for basic crud operations. these models are injected as a service dependency into the resolvers   
`<name>_resolver:` This is where we define queries and edges and mutations. notably, this is also where fields that aren't in the database are defined - derived fields, as well as fields requiring their own resolution.  

