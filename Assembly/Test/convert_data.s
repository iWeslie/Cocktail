.global _start
.equ num, 20    @operate units count
.text
_start:
        mov     r2, #num
        ldr     r0, =0x9000     @begin address
        ldr     r4, =0x44332201
init_men:
        str     r4, [r0], #4
        subs    r2, r2, #1
        add     r4, r4, #1
        bne     init_men
        mov     r2, #num
        ldr     r0, =0x9000
conversion:
        ldr     r1, [r0]
        eor     r3, r1, r1, ror #16
        bic     r3, r3, #0x00FF0000
        mov     r1, r1, ror #8
        eor     r1, r1, r3, lsr #8
        str     r1, [r0], #4
        subs    r2, r2, #1
        bne     conversion
stop:   
        b       stop
.end

