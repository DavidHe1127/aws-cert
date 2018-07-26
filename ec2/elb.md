## ELB Keys Points

* With Application Load Balancers and Network Load Balancers, you register targets in target groups, and route traffic to the target groups. With Classic Load Balancers, you register instances with the load balancer
* We recommend that you enable multiple Availability Zones
* If you register targets in an Availability Zone but do not enable the Availability Zone, these registered targets do not receive traffic
* After you disable an Availability Zone, the targets in that Availability Zone remain registered with the load balancer, but the load balancer will not route traffic to them
* The nodes for your load balancer distribute requests from clients to registered targets. When cross-zone load balancing is enabled, each load balancer node distributes traffic across the registered targets in all enabled Availability Zones. When cross-zone load balancing is disabled, each load balancer node distributes traffic across the registered targets in its Availability Zone only
* With Application Load Balancers, cross-zone load balancing is always enabled.


NOTE: COPY illustrated Diagram