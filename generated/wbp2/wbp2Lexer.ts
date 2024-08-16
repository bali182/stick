// Generated from wbp2.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class wbp2Lexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly INTEGER = 12;
	public static readonly WS = 13;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'C'", 
                                                            "'N'", "'U'", 
                                                            "'D'", "'+'", 
                                                            "'-'", "'R'", 
                                                            "'T'", "'F'", 
                                                            "','", "'->'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "INTEGER", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "INTEGER", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, wbp2Lexer._ATN, wbp2Lexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "wbp2.g4"; }

	public get literalNames(): (string | null)[] { return wbp2Lexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return wbp2Lexer.symbolicNames; }
	public get ruleNames(): string[] { return wbp2Lexer.ruleNames; }

	public get serializedATN(): number[] { return wbp2Lexer._serializedATN; }

	public get channelNames(): string[] { return wbp2Lexer.channelNames; }

	public get modeNames(): string[] { return wbp2Lexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,13,62,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
	1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,11,4,11,52,8,11,
	11,11,12,11,53,1,12,4,12,57,8,12,11,12,12,12,58,1,12,1,12,0,0,13,1,1,3,
	2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,1,0,2,1,0,48,
	57,3,0,9,10,13,13,32,32,63,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
	0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
	1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,29,1,0,0,
	0,5,31,1,0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,11,37,1,0,0,0,13,39,1,0,0,0,15,
	41,1,0,0,0,17,43,1,0,0,0,19,45,1,0,0,0,21,47,1,0,0,0,23,51,1,0,0,0,25,56,
	1,0,0,0,27,28,5,67,0,0,28,2,1,0,0,0,29,30,5,78,0,0,30,4,1,0,0,0,31,32,5,
	85,0,0,32,6,1,0,0,0,33,34,5,68,0,0,34,8,1,0,0,0,35,36,5,43,0,0,36,10,1,
	0,0,0,37,38,5,45,0,0,38,12,1,0,0,0,39,40,5,82,0,0,40,14,1,0,0,0,41,42,5,
	84,0,0,42,16,1,0,0,0,43,44,5,70,0,0,44,18,1,0,0,0,45,46,5,44,0,0,46,20,
	1,0,0,0,47,48,5,45,0,0,48,49,5,62,0,0,49,22,1,0,0,0,50,52,7,0,0,0,51,50,
	1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,24,1,0,0,0,55,57,7,
	1,0,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,60,1,0,
	0,0,60,61,6,12,0,0,61,26,1,0,0,0,3,0,53,58,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wbp2Lexer.__ATN) {
			wbp2Lexer.__ATN = new ATNDeserializer().deserialize(wbp2Lexer._serializedATN);
		}

		return wbp2Lexer.__ATN;
	}


	static DecisionsToDFA = wbp2Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}