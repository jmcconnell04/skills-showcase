# Overview

The following is commands to run Mongo DB as a container. This assumes docker deamon (Docker Desktop or docker runing natively in OS) is already configured and ready to accept commands

# Commands

We will be running mongodb locally as a container to simulate cloud conditions where mongo is deployed to a cluster.

**MONGODB_VERSION** variable is mostly for convenience, it can be replaced or added anyway you like. This just makes it easier to ensure multiple containers are all on the same version.

```bash
$MONGODB_VERSION=6.0-ubi8
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass -v $pwd/data:/data/db mongodb/mongodb-community-server:$MONGODB_VERSION
```

# Notes

We are using a VS 2022 Powershell which comes with Visual Studio when you install. You can use any windows supported Powershell terminal to run commands.
