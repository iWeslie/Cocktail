/** 代码演示  - les.s **/
.text
.global _start
.code 32
 
@ 定义三个控制led灯的GPIO寄存器
.equ GPIOC_OUT,         0xc001c000
.equ GPIOC_OUTENB,      0xc001c004
.equ GPIOC_ALTFN0,      0xc001c020
 
_start:
        @ 功能选择 FUNCTION1
        ldr r0, =GPIOC_ALTFN0    @ r0=0xc001c020
        ldr r1, [r0]             @ r0放到r1作为缓存
        mov r2, #0x03
        bic r1, r1, r2, lsl #24  @ clear r1 [25:24]
        mov r2, #1
        orr r1, r1, r2, lsl #24  @ set r1 [24]
        str r1, [r0]             @ 写回r0寄存器GPIOC_ALFN0
        
        @ 配置为输出功能
        ldr r0, =GPIOC_OUTENB    @ r0=0xc001c004
        ldr r1, [r0]
        mov r2, #1
        orr r1, r1, r2, lsl #12  @ set r1 [12]
        str r1, [r0]             @ 写回r0寄存器GPIOC_OUTENB
        
        mov r2, #1
loop:
        @ 亮灯
        ldr r0, =GPIOC_OUT       @ r0=0xc001c000
        ldr r1, [r0]
        bic r1, r1, r2, lsl #12  @ clear r1 [12]
        str r1, [r0]
 
        bl delay                 @ 调用函数delay
 
        @ 灭灯
        ldr r0, =GPIOC_OUT       @ r0=0xc001c000
        ldr r1, [r0]
        orr r1, r1, r2, lsl #12  @ set r1 [12]
        str r1, [r0]
 
        bl delay
 
        b loop                   @ b跳转loop循环 - led间歇闪烁
 
delay:
        mov r0, #0x8000000       @ 设置延时，值较C语言大，因速度快
 
delay_loop:
        sub r0, r0, #1                   @ r0=r0-1
        cmp r0, #0                               @ 比较 r0 与 0
        bne delay_loop                   @ 不相等，b跳转自身循环继续--
 
        mov pc, lr                               @ bx lr 压栈
 
.end
/** ------------------------------------------------------- **/

