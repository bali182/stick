// This grammar is meant to describe a chord transition.
grammar wbp2;

chordReference: 'C' | 'N';
direction: 'U' | 'D';
sign: '+' | '-';
chordTone: 'R' | 'T' | 'F';
signedInt: sign INTEGER;
chordToneReference: chordTone signedInt?;
step: chordReference ',' chordToneReference (',' direction)?;
transition: step ('->' step)*;

INTEGER: [0-9]+;
WS: [ \t\r\n]+ -> skip;