記憶階層, 高速なものほど高価

![Memory Hierarchy](/blog/cs/memory-hierarchy.jpeg)
<img src="/blog/cs/memory-hierarchy.jpeg" alt="Memory Hierarchy" width="500" height="auto">
Classification of memory
    - RAM
        
        (rondom-access Memory), volatile(揮発性を持つ、電源を切ったらデータが消える)
        
        読み書きどちらも可能
        
        |  | **DRAM** | **SRAM** |
        | --- | --- | --- |
        | 使用する回路 | Condenser | Flipflop circuit |
        | Refresh | Necessary | Unnecessary |
        | Speed | Low | High |
        | Integration density | Hish | Low |
        | Price | Cheap | Expensive |
        | Often used in … | **Main Memory** | **Cache Memory** |
        
        ### DRAM
        
        コンデンサに電荷を蓄えてビット情報を記憶
        
        コンデンサは放っておくと電荷が抜けてしまう
        
        定期的にリフレッシュ動作が必要
        
        仕組みが単純なので集積度が高く、価格も安い。
        
        (dynamic) d-ra=M
        
        - 記憶構造
            
            メモリセル(回路)
            
            1つのコンデンサ(キャパシタ)と1つのトランジスタで情報保持。
            
            コンデンサに蓄えた電荷の有無で1ビットの情報を保持。
            
            電荷は時間が経つと放電してしまうので、リフレッシュ(定期的に情報を読み出し、再度書き込み)が必要。
            
        
        sramよりアクセスは低速だが、メモリセル構造が単純なので高集積化と低価格での大容量化が可能
        
        - SDRAM
        - DDR SDRAM
        - DDR2 SDRAM
        - DDR3 SDRAM
        - DDR4 SDRAM
        
        ### SRAM
        
        Flip-flop
        
        非常に高速だが、価格が高い、小容量のキャッシュメモリとして用いらられるメモリ。
        
        記憶内容を保持するのに、リフレッシュ動作は不要。
        
        一旦set側に1が入力されると、Reset側に1が入力されるまで延々と1を出力し続ける。
        
        ### Explanation of SRAM (Static RAM)
        
        **SRAM (Static RAM):**
        SRAM is used as a high-speed but expensive, low-capacity cache memory compared to DRAM. Unlike DRAM, SRAM does not require a refresh operation to retain its data.
        
        **Mechanism:**
        SRAM uses a circuit called a "flip-flop circuit" to store bit information.
        
        - When "1" is input on the "Set" side, it keeps outputting "1" until "1" is input on the "Reset" side.
        - Therefore, a refresh is unnecessary.
        
        ### Table: Summary of SRAM Characteristics
        
        | Used Circuit | Refresh Operation | Speed | Integration Level | Cost | Main Usage |
        | --- | --- | --- | --- | --- | --- |
        | Flip-Flop Circuit | Not Required | High | Low | High | Cache Memory |
        
        (static) s-ra=M
        
        - メモリセル(回路)
            
            フリップフロップ(複数のトランジスタ)で情報保持
            
            the structure is complex
            
            →高集積化しずらい/ビット単価が高い。
            
            でも、dramより高速アクセス可能
            
            高集積化:1つのチップの上に何層ものメモリセルを搭載し、より小さなチップで大容量化すること。
            
    - ROM
        
        理想を言えば、コンピュータでは不揮発性があった上で、読み書きできてほしい。かつて、不揮発性といえばROMしかない暗黒時代があった…必要な機能=CPUにとって必要な機能
        
        - BIOS
            
            The BIOS (Basic Input/Output System) is firmware stored on a small memory chip on the motherboard of a computer. It is the first software that runs when you start your computer. The BIOS performs the POST (Power-On Self Test) to check the computer's hardware components and ensure everything is working properly before loading the operating system from the hard drive into the computer's memory.
            Key functions of the BIOS include:
            
            - 1. System Initialization:
                
                It initializes and configures the hardware components like the CPU, RAM, and storage devices.
                
            - 2. **Boot Process Management:**
                
                The BIOS determines which device (e.g., hard drive, USB, CD/DVD) to boot from, loads the bootloader, and starts the operating system.
                
            - 3. **Hardware Configuration:**
                
                The BIOS provides a user interface (BIOS setup utility) where you can configure system settings, such as the boot order, system clock, and power management.
                
            - 4. **Device Communication:**
                
                It acts as an intermediary between the operating system and the hardware, providing low-level communication for the CPU, hard drives, and peripherals.
                
            
            Modern systems use UEFI (Unified Extensible Firmware Interface) as an advanced replacement for BIOS, offering more features, better security, and a graphical user interface.
            
        - ROM’s circuit
        
        (read-only Memory), non-volatile(揮発性を持たない、電源を切ってもデータが消えない)
        
        読み出しだけ可能（家電などに使われる）
        
        - Mask ROM
            
            mask ROM mask-ro=M
            
            [マスクROM](https://ja.m.wikipedia.org/wiki/%E3%83%9E%E3%82%B9%E3%82%AFROM)
            
            ↑「用途」に
            
        - PROM
            
            programmable-ro=M
            
            PROMは最初はデータがない。書き込み機（ライター）が必要。ライターは高くはないし自作もしようと思えばできる。ただ、トラブルを防ぐためにDIPスイッチでROMを再現することができたりする。
            
            - EPROM(**e**rasable **p**rogrammingable ROM)
            - EEPROM(**e**lectrically **e**rasable **p**rogrammable ROM)
                
                電気的にデータを消去して書き換えることができる
                
                - flash memory
                    
                    ブロック単位でデータを消去して書き換える。
                    
                    東芝の人が作った。
                    
                    **nand(every_page)**
                    
                    write: fast
                    
                    read: slow
                    
                    degree_of_integration: high
                    
                    - **memory method**
                        
                        SLC(single-level-cell)
                        
                        MLC(multiple-level-cell)
                        
                        TLC(triple-level-cell)
                        
                    
                    <aside>
                    📖 highly integratable→USB_memory, SSD, memory for cellphone
                    
                    </aside>
                    
                    **nor(every_byte)**
                    
                    write: slow
                    
                    read: fast
                    
                    degree_of_integration: low
                    
                    - **memory_method**
                        
                        
                    
                    <aside>
                    📖 high_reliability→firmware
                    
                    </aside>
                    
                    NAND and NOR Types
                    There are two main types of flash memory: NAND Flash Memory and NOR Flash Memory. The basic characteristics of each are as follows:

                    **NAND Type**
                        For details, refer to [NAND Flash Memory].
                        The unit of random access read/write is 1 block.
                        Reading speed is slower compared to the NOR type.
                        Writing speed is faster compared to the NOR type.
                        More advantageous for high-density integration compared to the NOR type.
                    **NOR Type**
                        For details, refer to [NOR Flash Memory].
                        The unit of random access read/write is 1 byte.
                        Reading speed is faster compared to the NAND type.
                        Writing speed is slower compared to the NAND type.
                        Less advantageous for high-density integration compared to the NAND type.
                    
            - UV-EPROM(**u**ltra-**v**iolet **e**rasable **p**rogrammable ROM)
                
                紫外線でデータを消去して書き換えることができる。
                
                ぎりぎり現役。
                
            
            FeRAM(ferroelectric RAM), votality-
            強誘電体材料が持つ分極メカニズムをデータ記憶に用いる。

            - Ｉ素
            - 書き換え可能回数:フラッシュメモリ多
            
            phase-change memory, non-volatile
            結晶状態/非結晶で情報を記憶
            
    
    ### Types of ROM and Their Characteristics
    
    | Type | Characteristics |
    | --- | --- |
    | Mask ROM | Read-only memory. Data is written at the factory and cannot be rewritten later. |
    | EPROM | Data is erased by exposure to ultraviolet light and can be rewritten. |
    | EEPROM | Data can be partially erased and rewritten by applying an electric charge. |
    | Flash Memory | A type of EEPROM where data is rewritten in blocks. |
    
    ### Comparison Between DRAM and SRAM
    
    |  | DRAM | SRAM |
    | --- | --- | --- |
    | Circuit | Capacitor | Flip-Flop Circuit |
    | Refresh Operation | Required | Not Required |
    | Integration Level | High | Low |
    | Cost | Low | High |
    | Speed | Slow | Fast |
    | Main Usage | Main Memory Device | Cache Memory |