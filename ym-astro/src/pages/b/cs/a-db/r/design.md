---
layout: '@layout/Layout.astro'
---
## 概念設計(3-Step Database Design Process)
現実世界→（データ構造抽出、モデル化）→概念モデル

## 論理設計
概念モデル→データベースで表現可能な形式にする→論理モデル
## 物理設計
論理モデル→実装する具体的な設計→物理モデル
				
# E-R model
概念データモデルの作成
実世界のデータをその意味や関係を崩さず、
1. **External Schema (View Level)**: 
   - Represents how different user groups or applications view the data. Each external schema provides a tailored view of the database, including only the data relevant to a specific user group or application. This level offers data abstraction and security by hiding certain data from certain users.
   
2. **Conceptual Schema (Logical Level)**:
   - Provides a community user view. This level describes the logical structure of the entire database, including the entities, attributes, and relationships. It abstracts the database structure from the underlying physical storage details and focuses on the data requirements and constraints of the organization.

3. **Internal Schema (Physical Level)**:
   - Describes how the data is physically stored in the database. This level deals with physical storage structures, access methods, file organization, indexing, and other low-level details necessary for efficient data storage and retrieval.

**3-layer schema architecture**
**3-step database design process**

### 3-Layer Schema Architecture(also known as the **ANSI/SPARC architecture** (proposed by the American National Standards Institute's Standards Planning and Requirements Committee)



The process of designing a database typically involves three steps:

1. **Conceptual Design**:
   - This step involves creating a high-level data model that captures the main entities, attributes, and relationships in the database. The output of this stage is typically an **Entity-Relationship (ER) diagram** or an equivalent representation. The conceptual design corresponds to the **Conceptual Schema (Logical Level)** in the 3-layer schema architecture.

2. **Logical Design**:
   - The logical design step refines the conceptual model into a logical schema. This schema is a detailed representation that includes table structures, primary and foreign keys, normalization of the database, and constraints but still remains independent of the specific database management system (DBMS) or physical considerations. The logical design is aligned with the **Conceptual Schema (Logical Level)**, similar to the conceptual design, but goes deeper into defining the logical details.
> Standardisation

3. **Physical Design**:
   - In the physical design step, the logical schema is transformed into a physical schema that defines how the data will be stored in a specific DBMS. This includes decisions on file organization, indexing strategies, partitioning, clustering, and other performance optimization techniques. The physical design corresponds to the **Internal Schema (Physical Level)** of the 3-layer schema architecture.

### How They Correspond:

- **External Schema ↔ Not directly tied to a specific design step**: While the external schema represents different views of the database for different users or applications, it is not directly linked to a specific step in the 3-step design process. Instead, external schemas are derived from the conceptual or logical schema to meet specific user or application requirements.
  
- **Conceptual Schema (Logical Level) ↔ Conceptual and Logical Design**: Both the conceptual and logical design steps are focused on defining what data needs to be stored and how it should be logically structured. The conceptual schema in the 3-layer architecture encapsulates the results of these steps.

- **Internal Schema (Physical Level) ↔ Physical Design**: The internal schema is directly aligned with the physical design step. This step focuses on the actual implementation details that dictate how the database will be physically created and stored on the disk.

### Summary
Yes, the 3-layer schema architecture corresponds to the steps in the 3-step database design process:

- The **Conceptual Schema** aligns with both **Conceptual Design** and **Logical Design**.
- The **Internal Schema** corresponds to **Physical Design**.
- The **External Schema** represents various views derived from the conceptual and logical schemas, serving specific user needs.
