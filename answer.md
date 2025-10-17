
## Task 1: Build a Custom Node.js App Image 

```bash
sudo docker build -t myapp:latest .
```

```bash 
sudo docker run --name server-express  -p 3000:3000 -t myapp:latest
```
### Task 2: Persistent Data with Volumes


```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root123 -v mysql_data:/var/lib/mysql -d mysql:latest
```

### Task 3: Bind Mount in Node.js App

```bash
sudo docker run --mount type=bind,src=.,dst=/home/node/app  -p 3000:3000 -t myapp:latest
```

### Task 4: Custom Bridge Network

```bash
sudo docker network create -d bridge my_network
```

```bash 
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root123 --network=my_network -v mysql_data:/var/lib/mysql -d mysql:latest
```

```bash 
sudo docker run --mount type=bind,src=.,dst=/home/node/app --network=my_network  -p 3000:3000 -t myapp:latest
```



### The command  to list all networks

```bash
docker network ls
```

### Inspect a docker network

```bash
docker network inspect my_network
```

```json
[

    {

        "Name": "my_network",

        "Id": "d42d34327b71ed32a87aa91a17072b6ffdba89a9aa61a8954a02cb3be6f948ea",

        "Created": "2025-10-17T11:08:22.925695963Z",

        "Scope": "local",

        "Driver": "bridge",

        "EnableIPv4": true,

        "EnableIPv6": false,

        "IPAM": {

            "Driver": "default",

            "Options": {},

            "Config": [

                {

                    "Subnet": "172.18.0.0/16",

                    "Gateway": "172.18.0.1"

                }

            ]

        },

        "Internal": false,

        "Attachable": false,

        "Ingress": false,

        "ConfigFrom": {

            "Network": ""

        },

        "ConfigOnly": false,

        "Containers": {

            "0626923477b3bdaabdb3dbd9d9edeaa8b19343c105271f90194363e1384199db": {

                "Name": "server-express",

                "EndpointID": "db5e309d58c2eada7d2dbf0c2bcdecc0e93b70ab1c7371b4e529af6b0a5792c6",

                "MacAddress": "86:8e:c9:23:d1:b2",

                "IPv4Address": "172.18.0.2/16",

                "IPv6Address": ""

            },

            "accfdd02334d6c673765a4b62f6d8cc2892f7e9853d7fcec61569db323bfea99": {

                "Name": "mysql",

                "EndpointID": "84b710d8daff1ccae34080c86628fdac37202aa06f39115f85997f76d089cadb",

                "MacAddress": "e6:af:df:57:f3:20",

                "IPv4Address": "172.18.0.3/16",

                "IPv6Address": ""

            }

        },

        "Options": {

            "com.docker.network.enable_ipv4": "true",

            "com.docker.network.enable_ipv6": "false"

        },

        "Labels": {}

    }

]
```


The Bridge driver allows us to put different container in the same network 

- Bridge is network inter container 
- Host is network between container and host

