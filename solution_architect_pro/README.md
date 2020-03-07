- [General Concepts](#general-concepts)
- [Data Store](#./data_store.md)

### General Concepts

Data Persistance

- Persistant Data Store - Data is durable and sticks around after reboots, restarts or power cycles. i.e Glacier, RDS
- Transient Data Store - Data is just temporarily stored and passed along to another process or persistent store. i.e SQS, SNS
- Ephemeral Data Store - Data is lost when stopped. i.e EC2 Instance Store, Memcached

IOPS vs Throughput

- Input/Output Operations per Second (IOPS) - Measure of how fast we can read and write to a device. i.e Porche 911
- Throughput - Measure of how much data can be moved at a time. i.e dump truck. move slower than sports car but with larger amount of contents

Consistency Models - ACID & BASE

- ACID (does not scale well i.e a lot of contentions, row locking)
  - (A)tomic - Transactions are "all or nothing"
  - (C)onsistent - Transactions msut be valid
  - (I)solated - Transactions can't mess with on another
  - (D)urable - Completed transaction must stick around

- BASE (scale well)
  - (B)asic (A)vailability - values availability even if stale. Stale state is information in an object that does not reflect reality. i.e an object's members are filled with information from a database, but the underlying data in the database has changed since the object was filled.
  - (S)oft-state - might not be instantly consistent across stores
  - (E)ventual Consistency - will achieve consistency at some point - i.e DynamoDB eventual write consistency
