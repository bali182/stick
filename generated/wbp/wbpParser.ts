// Generated from wbp.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class wbpParser extends Parser {
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
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly INTEGER = 25;
	public static readonly WS = 26;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_chordReference = 0;
	public static readonly RULE_direction = 1;
	public static readonly RULE_sign = 2;
	public static readonly RULE_chordTone = 3;
	public static readonly RULE_chordType = 4;
	public static readonly RULE_signedInt = 5;
	public static readonly RULE_chordToneReference = 6;
	public static readonly RULE_step = 7;
	public static readonly RULE_steps = 8;
	public static readonly RULE_sourceChord = 9;
	public static readonly RULE_targetChord = 10;
	public static readonly RULE_transition = 11;
	public static readonly literalNames: (string | null)[] = [ null, "'C'", 
                                                            "'N'", "'U'", 
                                                            "'D'", "'+'", 
                                                            "'-'", "'R'", 
                                                            "'T'", "'F'", 
                                                            "'S'", "'?'", 
                                                            "'M'", "'m'", 
                                                            "'dom7'", "'maj7'", 
                                                            "'m7'", "'dim'", 
                                                            "'m7b5'", "'dim7'", 
                                                            "'aug'", "'aug7'", 
                                                            "','", "'->'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "INTEGER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chordReference", "direction", "sign", "chordTone", "chordType", "signedInt", 
		"chordToneReference", "step", "steps", "sourceChord", "targetChord", "transition",
	];
	public get grammarFileName(): string { return "wbp.g4"; }
	public get literalNames(): (string | null)[] { return wbpParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return wbpParser.symbolicNames; }
	public get ruleNames(): string[] { return wbpParser.ruleNames; }
	public get serializedATN(): number[] { return wbpParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, wbpParser._ATN, wbpParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public chordReference(): ChordReferenceContext {
		let localctx: ChordReferenceContext = new ChordReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, wbpParser.RULE_chordReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public direction(): DirectionContext {
		let localctx: DirectionContext = new DirectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, wbpParser.RULE_direction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===4)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sign(): SignContext {
		let localctx: SignContext = new SignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, wbpParser.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chordTone(): ChordToneContext {
		let localctx: ChordToneContext = new ChordToneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, wbpParser.RULE_chordTone);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 30;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chordType(): ChordTypeContext {
		let localctx: ChordTypeContext = new ChordTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, wbpParser.RULE_chordType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4192256) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signedInt(): SignedIntContext {
		let localctx: SignedIntContext = new SignedIntContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, wbpParser.RULE_signedInt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			this.sign();
			this.state = 35;
			this.match(wbpParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chordToneReference(): ChordToneReferenceContext {
		let localctx: ChordToneReferenceContext = new ChordToneReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, wbpParser.RULE_chordToneReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this.chordTone();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===6) {
				{
				this.state = 38;
				this.signedInt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public step(): StepContext {
		let localctx: StepContext = new StepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, wbpParser.RULE_step);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this.chordReference();
			this.state = 42;
			this.match(wbpParser.T__21);
			this.state = 43;
			this.chordToneReference();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 44;
				this.match(wbpParser.T__21);
				this.state = 45;
				this.direction();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public steps(): StepsContext {
		let localctx: StepsContext = new StepsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, wbpParser.RULE_steps);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.step();
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 49;
				this.match(wbpParser.T__22);
				this.state = 50;
				this.step();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceChord(): SourceChordContext {
		let localctx: SourceChordContext = new SourceChordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, wbpParser.RULE_sourceChord);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(wbpParser.T__9);
			this.state = 56;
			this.chordType();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 57;
				this.match(wbpParser.T__21);
				this.state = 58;
				this.chordType();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public targetChord(): TargetChordContext {
		let localctx: TargetChordContext = new TargetChordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, wbpParser.RULE_targetChord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(wbpParser.T__7);
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 6:
				{
				this.state = 65;
				this.signedInt();
				}
				break;
			case 11:
				{
				this.state = 66;
				this.match(wbpParser.T__10);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transition(): TransitionContext {
		let localctx: TransitionContext = new TransitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, wbpParser.RULE_transition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.sourceChord();
			this.state = 70;
			this.match(wbpParser.T__23);
			this.state = 71;
			this.targetChord();
			this.state = 72;
			this.match(wbpParser.T__23);
			this.state = 73;
			this.steps();
			this.state = 74;
			this.match(wbpParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,26,77,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,
	6,1,6,3,6,40,8,6,1,7,1,7,1,7,1,7,1,7,3,7,47,8,7,1,8,1,8,1,8,4,8,52,8,8,
	11,8,12,8,53,1,9,1,9,1,9,1,9,5,9,60,8,9,10,9,12,9,63,9,9,1,10,1,10,1,10,
	3,10,68,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,
	12,14,16,18,20,22,0,5,1,0,1,2,1,0,3,4,1,0,5,6,1,0,7,10,1,0,11,21,69,0,24,
	1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,30,1,0,0,0,8,32,1,0,0,0,10,34,1,0,0,
	0,12,37,1,0,0,0,14,41,1,0,0,0,16,48,1,0,0,0,18,55,1,0,0,0,20,64,1,0,0,0,
	22,69,1,0,0,0,24,25,7,0,0,0,25,1,1,0,0,0,26,27,7,1,0,0,27,3,1,0,0,0,28,
	29,7,2,0,0,29,5,1,0,0,0,30,31,7,3,0,0,31,7,1,0,0,0,32,33,7,4,0,0,33,9,1,
	0,0,0,34,35,3,4,2,0,35,36,5,25,0,0,36,11,1,0,0,0,37,39,3,6,3,0,38,40,3,
	10,5,0,39,38,1,0,0,0,39,40,1,0,0,0,40,13,1,0,0,0,41,42,3,0,0,0,42,43,5,
	22,0,0,43,46,3,12,6,0,44,45,5,22,0,0,45,47,3,2,1,0,46,44,1,0,0,0,46,47,
	1,0,0,0,47,15,1,0,0,0,48,51,3,14,7,0,49,50,5,23,0,0,50,52,3,14,7,0,51,49,
	1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,17,1,0,0,0,55,56,5,
	10,0,0,56,61,3,8,4,0,57,58,5,22,0,0,58,60,3,8,4,0,59,57,1,0,0,0,60,63,1,
	0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,19,1,0,0,0,63,61,1,0,0,0,64,67,5,8,
	0,0,65,68,3,10,5,0,66,68,5,11,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,21,1,0,
	0,0,69,70,3,18,9,0,70,71,5,24,0,0,71,72,3,20,10,0,72,73,5,24,0,0,73,74,
	3,16,8,0,74,75,5,24,0,0,75,23,1,0,0,0,5,39,46,53,61,67];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wbpParser.__ATN) {
			wbpParser.__ATN = new ATNDeserializer().deserialize(wbpParser._serializedATN);
		}

		return wbpParser.__ATN;
	}


	static DecisionsToDFA = wbpParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ChordReferenceContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_chordReference;
	}
}


export class DirectionContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_direction;
	}
}


export class SignContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_sign;
	}
}


export class ChordToneContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_chordTone;
	}
}


export class ChordTypeContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_chordType;
	}
}


export class SignedIntContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(wbpParser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_signedInt;
	}
}


export class ChordToneReferenceContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chordTone(): ChordToneContext {
		return this.getTypedRuleContext(ChordToneContext, 0) as ChordToneContext;
	}
	public signedInt(): SignedIntContext {
		return this.getTypedRuleContext(SignedIntContext, 0) as SignedIntContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_chordToneReference;
	}
}


export class StepContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chordReference(): ChordReferenceContext {
		return this.getTypedRuleContext(ChordReferenceContext, 0) as ChordReferenceContext;
	}
	public chordToneReference(): ChordToneReferenceContext {
		return this.getTypedRuleContext(ChordToneReferenceContext, 0) as ChordToneReferenceContext;
	}
	public direction(): DirectionContext {
		return this.getTypedRuleContext(DirectionContext, 0) as DirectionContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_step;
	}
}


export class StepsContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public step_list(): StepContext[] {
		return this.getTypedRuleContexts(StepContext) as StepContext[];
	}
	public step(i: number): StepContext {
		return this.getTypedRuleContext(StepContext, i) as StepContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_steps;
	}
}


export class SourceChordContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chordType_list(): ChordTypeContext[] {
		return this.getTypedRuleContexts(ChordTypeContext) as ChordTypeContext[];
	}
	public chordType(i: number): ChordTypeContext {
		return this.getTypedRuleContext(ChordTypeContext, i) as ChordTypeContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_sourceChord;
	}
}


export class TargetChordContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedInt(): SignedIntContext {
		return this.getTypedRuleContext(SignedIntContext, 0) as SignedIntContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_targetChord;
	}
}


export class TransitionContext extends ParserRuleContext {
	constructor(parser?: wbpParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceChord(): SourceChordContext {
		return this.getTypedRuleContext(SourceChordContext, 0) as SourceChordContext;
	}
	public targetChord(): TargetChordContext {
		return this.getTypedRuleContext(TargetChordContext, 0) as TargetChordContext;
	}
	public steps(): StepsContext {
		return this.getTypedRuleContext(StepsContext, 0) as StepsContext;
	}
    public get ruleIndex(): number {
    	return wbpParser.RULE_transition;
	}
}
