.equ    Undef_Mode, 0x1B
.equ    Mode_Mask, 0x1F
.equ    NOINT, 0xC0
.global_start
.text
_start:
    MRS     R0, CPSR, @read CPSR 
    BIC     R0, R0, #Mode_Mask
    ORR     R1, R0, #Undef_Mode | NOINT @modify
    MSR     CPSR_cxsf, R1   @enter Undef_Mode
Stop:
    B       Stop    @stop here to see the result
.end


.global     symbol
.extern     symbol 

.byte   
.hword
.short

.word
.int
.long

.quad 
.octa

.ascii
.asciz
.string

.float
.single
.double

.ltorg

.arm
.code 32
.thumb
.code 16

.section .text

// start of a section 
.text // save code
.data // save global var 
.bss // save unsigned global var 


.align
.balign

.org // directive 

.include "file_name"

.if logical_expression 
// code section A 
{.else
// code section B
} .
.endif


.macro
{ macroname }
// code 
.endm
; comment 

{ operation } { command } {; comment }

; eight 
8_3777
; char const 
'A'
'\n'
""
$$

; expression 
LEN
CHR 
STR 
LEFT ; get the left part of the string
RIGHT
CC ; combain chars 

abc     SETS "one""double quote"
improb  SETS "literal":CC:(abc:LEFT:4)
