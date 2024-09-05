---
layout: '@layout/Layout.astro'
---


# 集積度による分類
集積度**小**

1. SSI
2. MSI
3. LSI
4. VLSI
5. ULSI

集積度**大**

System LSI

- 演算処理LSI
- 記憶用LSI
- グラフィック機能用LSI
- 特定用途向けLSI

複数の機能を一つの半導体製品にまとめたSoC

SiP: 複数のLSIを一つのパッケージ

# カスタマイザビリティによる分類
市販↔カスタム
## カスタム
Custom IC(市販のICを組み合わせて目的の機能を作るのではなく、自身の設計した回路をそのままICとして製造したもの)
ASIC(この中で、特定の用途に絞ったもの)
## Semi-custom IC
PLD (Programmable Logic Device)
1. PLD(Programmable Logic Device)
    1. 設計した回路を電気的に書き込むことができるIC。リーズナブル(自由にオリジナルの回路を作ることができる。再度書き換えを行うだけ)
    2. FPGA(Field Programmable Gate Array)
    3. PLD typically stands for "Programmable Logic Device," which refers to a type of electronic component used to build reconfigurable digital circuits. Here’s an enumeration of some common types of PLDs:
    4. **Simple Programmable Logic Devices (SPLD)**   - Includes Programmable Array Logic (PAL), Generic Array Logic (GAL), and Programmable Logic Array (PLA).
    5. **Complex Programmable Logic Devices (CPLD)**   - Combines multiple SPLDs on a single chip and offers a larger capacity and more complex logic functions.
    6. **Field-Programmable Gate Arrays (FPGA)**   - Contains an array of programmable logic blocks and a hierarchy of reconfigurable interconnects, allowing complex designs.
    7. **Field-Programmable Interconnect (FPI)**   - Provides programmable interconnections to customize the configuration of a circuit.
    8. **Field-Programmable System-on-Chip (FPSoC)**   - Integrates FPGA fabric with a processor core, allowing software and hardware to be designed concurrently.
    9. These devices are widely used in applications that require flexibility, such as embedded systems, digital signal processing, and telecommunications.
- SPLD (Simple Programmable Logic Device)
- CPLD (Complex Programmable Logic Device)
- FPGA (Field-Programmable Gate Array)
## 市販general-purpose, off-the-shelf ICs.




# 組み合わせ回路と順序回路がある
The main differences between 組み合わせ回路 (combinational circuits) and 順序回路 (sequential circuits) are:
### メモリ:
組み合わせ回路はメモリを持たない。出力は入力のみに依存する。
順序回路はフリップフロップ回路のようにメモリを持っている。静的情報を保持できる。
### 出力依存性
組み合わせ回路では、出力は現在入力値のみに依存する。
順序回路では、出力が現在の入力と過去の入力（状態）どちらもに依存する。
### Applications: Used in creating memory elements, control systems, and for implementing complex digital behaviors.
In your hardware-home.md file, while feedback loops aren't explicitly mentioned, they are implicit in the sequential circuits like registers and counters that are listed under the logic circuit section.
### 組み合わせ回路にはフィードバックループがないが、順序回路は大抵フィードバックパスがあり、アウトプットがインプットとして使われる。
### Timing:
組み合わせ回路はクロックシグナルに頼らないが、順序回路状態変化にクロック周波を使う。
### Examples:
組み合わせ回路: Adders, multiplexers, decoders.
順序回路: Counters, registers, finite state machines.
### Complexity:

Column: Feedback
"mechanism where the output of a system is routed back to become an input, influencing future outputs. This creates a cycle of cause and effect.
Key points about feedback loops:
Purpose: They allow circuits to maintain state or memory. Common in sequential circuits: Found in flip-flops, latches, and more complex systems like state machines.
Not present in combinational circuits: Combinational circuits have no memory or state, so they don't use feedback.
Examples:
In an SR latch, the outputs Q and Q̅ are fed back to the inputs of the NAND gates.
In a counter, the current count is fed back to determine the next count.
Timing considerations: Feedback loops introduce timing dependencies, often requiring clock signals to manage state changes properly.
Stability: Proper design is crucial to avoid unstable oscillations or race conditions.

組み合わせ回路: Generally simpler in design.
順序回路: More complex due to state-holding elements and timing considerations.
    

## Sequential circuits

半加算器の時と同じ2つの入力に加えて、下の桁の繰り上がりがあった場合の入力$C’$を設ける。

C: c of carry桁あがりした2桁目の数に当たる出力

S: SumのS.1桁目の数に当たる出力

$$
\text{Input(A,B,C')}\longmapsto \text{Full Adder} \longmapsto \text{Output(C,S)}
$$

最大出力は$1+1=11$である。よって、出力は2つでも大丈夫。

### **Registers**

- **Definition**: Registers are small storage devices that hold data. They are made up of a group of flip-flops, each storing a single bit of information.
- **Function**: Registers temporarily hold data, such as the intermediate results of computations, instructions, or addresses. They are a fundamental component in the architecture of CPUs and other digital systems.
- **Types**: Common types include data registers, address registers, and special-purpose registers like instruction registers.

### **Counters**

- **Definition**: Counters are a type of sequential circuit that goes through a prescribed sequence of states upon the application of input pulses.
- **Function**: Counters are used to count the number of occurrences of an event. They can count up, count down, or both. They are widely used in digital clocks, timers, and in the control units of processors.
- **Types**: There are various types of counters, such as binary counters, decade counters, and ring counters.

### **Shift Registers**

- **Definition**: Shift registers are a type of register where the stored data can be shifted left or right. They are made up of a series of flip-flops connected in a chain.
- **Function**: Shift registers are used to store data and move it to the left or right. They are commonly used for data serialization, data transfer, and in various digital communication systems.
- **Types**: Shift registers can be classified as serial-in-serial-out (SISO), serial-in-parallel-out (SIPO), parallel-in-serial-out (PISO), or parallel-in-parallel-out (PIPO).

### **Finite State Machines (FSMs)**

- **Definition**: A Finite State Machine (FSM) is a computational model used to design sequential logic circuits. It consists of a finite number of states, transitions between those states, and actions.
- **Function**: FSMs are used to model systems that can be in exactly one of a finite number of states at any given time. FSMs are integral in designing control logic in hardware, software protocols, and more.
- **Types**: There are two main types of FSMs:
    - **Mealy Machine**: Output depends on both the current state and the input.
    - **Moore Machine**: Output depends only on the current state.

### **Latches**

Yes, there are several types of latches other than the SR latch. Here are the most common ones:

### 1. **D Latch (Data or Delay Latch)**

- **Description**: The D latch is a modification of the SR latch that ensures the inputs S and R are never equal simultaneously. It has a single data input (D) and a clock or enable signal (often labeled as E or CLK).
- **Function**: When the enable signal is active, the output Q takes the value of the data input (D). When the enable signal is inactive, the output remains unchanged.
- **Application**: The D latch is commonly used to store a single bit of data and is often used in memory devices and flip-flops.

### 2. **JK Latch**

- **Description**: The JK latch is a refinement of the SR latch that eliminates the indeterminate state. It has two inputs, labeled J and K, as well as a clock or enable input.
- **Function**: Depending on the values of J and K:
    - If J = 1 and K = 0, the latch sets (Q = 1).
    - If J = 0 and K = 1, the latch resets (Q = 0).
    - If J = 1 and K = 1, the latch toggles its current state.
    - If J = 0 and K = 0, the latch retains its current state.
- **Application**: The JK latch is used in digital circuits where toggling behavior is needed, such as in counters and flip-flops.

### 3. **T Latch (Toggle Latch)**

- **Description**: The T latch is derived from the JK latch by tying the J and K inputs together to form a single input, called T.
- **Function**: When the T input is 1 and the enable signal is active, the output toggles (switches between 0 and 1). If T = 0, the latch retains its current state.
- **Application**: The T latch is used in applications requiring a toggling action, such as in binary counters.

### 4. **Gated SR Latch**

- **Description**: A gated SR latch is an extension of the basic SR latch with an additional enable or clock input. This ensures that the latch only changes state when the enable signal is active.
- **Function**: The output changes according to the S and R inputs only when the enable signal is active; otherwise, it holds its state.
- **Application**: This is used in situations where control over when the latch can change is required.

This circuit is called an "SR latch." Specifically, it is an SR latch that uses NAND gates.

These latches serve as the foundation for more complex storage elements in digital electronics, such as flip-flops, which are edge-triggered versions of latches.

- **S (Set)**: When the input is 1, the output Q becomes 1 (set).
- **R (Reset)**: When the input is 1, the output Q becomes 0 (reset).
This latch retains or changes its output depending on the S and R inputs, but it has the characteristic that when both S and R are 1 simultaneously, the output becomes indeterminate.
    
    ```mermaid
    graph TB
        S((S)) --> A[NOR]
        R((R)) --> B[NOR]
        A -- Q --> D((Q))
        B -- Qnot --> E((Q̅))
        A -- feedback1 --> B
        B -- feedback2 --> A
        style A fill:#f9f,stroke:#333,stroke-width:2px;
        style B fill:#f9f,stroke:#333,stroke-width:2px;
    ```
    
- **Definition**: Latches are basic storage elements that store one bit of data. Unlike flip-flops, latches are level-triggered devices.
- **Function**: A latch maintains its output state until the input changes, effectively "latching" onto a value. They are used in circuits where data needs to be stored temporarily, but the timing of when the data is captured is not critical.
- **Types**: Common types of latches include the SR (Set-Reset) latch, D (Data) latch, and JK latch.

### RS Flip-flop

使う時のイメージ

1. SetかResetを入力。あるいはどちらも入力しない。どちらも入力しない、というのはしないという同意がある（どちらも入力したら値が定まらないため）。
2. そのまま($Q$)か否定($\bar{Q}$)かを出力
    1. Setを入力→$Q$
    2. Resetを入力→$\bar{Q}$

Reset, Setという二つのsignal-patternで、記憶させる値を切り替える。

| S | R | Q | Q̅ |
| --- | --- | --- | --- |
| 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 0 | Q | Holds Value |
| 1 | 1 | ? | Undefined |

```mermaid
graph TB
    S((Set)) --> A[NOT]
    R((Reset)) --> B[NOT]
    A --> C[NAND] 
    B --> D[NAND]
    C -- Q --> E((Q))
    D -- Qnot --> F((Q̅))
    C -- feedback1 --> D
    D -- feedback2 --> C

    style A fill:#f9f,stroke:#333,stroke-width:2px;
    style B fill:#f9f,stroke:#333,stroke-width:2px;
    style C fill:#bbf,stroke:#333,stroke-width:2px;
    style D fill:#bbf,stroke:#333,stroke-width:2px;
```
For the first image:

- **S = 1, R = 0**

```mermaid
graph TB
    S1((S = 1)) --> A1[NOT]
    R0((R = 0)) --> B1[NOT]
    A1 --> C1[NAND]
    B1 --> D1[NAND]
    C1 -- "Q = 1" --> E1((Q = 1))
    D1 -- "Q̅ = 0" --> F1((Q̅ = 0))
    C1 -- feedback1 --> D1
    D1 -- feedback2 --> C1

    style A1 fill:#f9f,stroke:#333,stroke-width:2px;
    style B1 fill:#f9f,stroke:#333,stroke-width:2px;
    style C1 fill:#bbf,stroke:#333,stroke-width:2px;
    style D1 fill:#bbf,stroke:#333,stroke-width:2px;

```

For the second image:

- **S = 0, R = 1**

```mermaid
graph TB
    S0((S = 0)) --> A2[NOT]
    R1((R = 1)) --> B2[NOT]
    A2 --> C2[NAND]
    B2 --> D2[NAND]
    C2 -- "Q = 0" --> E2((Q = 0))
    D2 -- "Q̅ = 1" --> F2((Q̅ = 1))
    C2 -- feedback1 --> D2
    D2 -- feedback2 --> C2

    style A2 fill:#f9f,stroke:#333,stroke-width:2px;
    style B2 fill:#f9f,stroke:#333,stroke-width:2px;
    style C2 fill:#bbf,stroke:#333,stroke-width:2px;
    style D2 fill:#bbf,stroke:#333,stroke-width:2px;

```

### English Translation:

- **S = 1, R = 0:**
    - Set (`S`) input is `1`.
    - Reset (`R`) input is `0`.
    - Output `Q` is `1`.
    - Output `Q̅` (Q bar) is `0`.
- **S = 0, R = 1:**
    - Set (`S`) input is `0`.
    - Reset (`R`) input is `1`.
    - Output `Q` is `0`.
    - Output `Q̅` (Q bar) is `1`.