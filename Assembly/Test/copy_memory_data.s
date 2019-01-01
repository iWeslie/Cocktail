.global _start
.text
.equ num, 20
_start:
        ldr     r0, =src
        ldr     r1, =dst
        mov     r2, #num
        mov     sp, #0x0c700000
blockcopy:
        movs    r3, r2, lsr#3
        beq     copywords
        stmfd   sp!, {r4-r11}
octcopy:
        ldmia   r0!, {r4-r11}
        stmia   r1!, {r4-r11}
        subs    r3,  r3, #1
        bne     octcopy

        ldmfd   sp!, {r4-r11}
copywords:
        ands    r2, r2, #7
        beq     stop
workcopy:
        ldr     r3, [r0], #4
        str     r3, [r1], #4
        subs    r2, r2, #1
        bne     workcopy
stop:
        b stop
.ltorg
src:
        .long       1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4
dst:
        .long       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
.end