// This grammar is meant to describe a chord transition. W = Walking B = Bass P = Path.
grammar wbp;

chordReference: 'C' | 'N';
direction: 'U' | 'D';
sign: '+' | '-';
chordTone: 'R' | 'T' | 'F' | 'S';
chordType:
	'?'
	| 'M'
	| 'm'
	| 'dom7'
	| 'maj7'
	| 'm7'
	| 'dim'
	| 'm7b5'
	| 'dim7'
	| 'aug'
	| 'aug7';
signedInt: sign INTEGER;
chordToneReference: chordTone signedInt?;
step: chordReference ',' chordToneReference (',' direction)?;
steps: step ('->' step)+;
sourceChord: 'S' chordType (',' chordType)*;
targetChord: 'T' signedInt | '?';
transition: sourceChord ';' targetChord ';' steps ';';

INTEGER: [0-9]+;
WS: [ \t\r\n]+ -> skip;