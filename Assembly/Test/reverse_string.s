.global _start
.text
_start:
        ldr     r0, =SrcString
        ldr     r1, =DstString
StrCopyDes:
        mov     r4, #0          @string length
Strcpydes_L1:                   @calculate string length
        ldrb    r2, [r0], #1
        add     r4, r4, #1
        tst     r2, #0xFF       @test if the byte is 0
        bne     Strcpydes_L1
        sub     r4, r4, #1
        add     r0, r0, r4      @r0 point to the last of string 
        mov     r3, r1          @r3 point to the target string 
Strcpydes_L2:
        ldrb    r2, [r0], #-1   @copy string by char
        strb    r2, [r3], #1
        subs    r4, r4, #1
        bne     Strcpydes_L2
Strcpydes_L3:
        strb    r4, [r3]        
# append '\0' to string, r4 = 0
stop:
        b       stop
.data
SrcString:
        .string "Hello World!"
DstString:
        .string ""
.end
