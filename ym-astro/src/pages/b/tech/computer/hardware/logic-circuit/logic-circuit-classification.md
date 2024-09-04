# 役割による分類
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