// Generated from wbp2.g4 by ANTLR 4.13.2
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

export default class wbp2Parser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_chordReference = 0;
	public static readonly RULE_direction = 1;
	public static readonly RULE_sign = 2;
	public static readonly RULE_chordTone = 3;
	public static readonly RULE_signedInt = 4;
	public static readonly RULE_chordToneReference = 5;
	public static readonly RULE_step = 6;
	public static readonly RULE_transition = 7;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chordReference", "direction", "sign", "chordTone", "signedInt", "chordToneReference", 
		"step", "transition",
	];
	public get grammarFileName(): string { return "wbp2.g4"; }
	public get literalNames(): (string | null)[] { return wbp2Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return wbp2Parser.symbolicNames; }
	public get ruleNames(): string[] { return wbp2Parser.ruleNames; }
	public get serializedATN(): number[] { return wbp2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, wbp2Parser._ATN, wbp2Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public chordReference(): ChordReferenceContext {
		let localctx: ChordReferenceContext = new ChordReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, wbp2Parser.RULE_chordReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 16;
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
		this.enterRule(localctx, 2, wbp2Parser.RULE_direction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
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
		this.enterRule(localctx, 4, wbp2Parser.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
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
		this.enterRule(localctx, 6, wbp2Parser.RULE_chordTone);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
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
		this.enterRule(localctx, 8, wbp2Parser.RULE_signedInt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			this.sign();
			this.state = 25;
			this.match(wbp2Parser.INTEGER);
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
		this.enterRule(localctx, 10, wbp2Parser.RULE_chordToneReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 27;
			this.chordTone();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===6) {
				{
				this.state = 28;
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
		this.enterRule(localctx, 12, wbp2Parser.RULE_step);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this.chordReference();
			this.state = 32;
			this.match(wbp2Parser.T__9);
			this.state = 33;
			this.chordToneReference();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 34;
				this.match(wbp2Parser.T__9);
				this.state = 35;
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
	public transition(): TransitionContext {
		let localctx: TransitionContext = new TransitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, wbp2Parser.RULE_transition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.step();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 39;
				this.match(wbp2Parser.T__10);
				this.state = 40;
				this.step();
				}
				}
				this.state = 45;
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

	public static readonly _serializedATN: number[] = [4,1,13,47,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,
	2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,5,3,5,30,8,5,1,6,1,6,1,6,1,6,1,6,3,6,37,
	8,6,1,7,1,7,1,7,5,7,42,8,7,10,7,12,7,45,9,7,1,7,0,0,8,0,2,4,6,8,10,12,14,
	0,4,1,0,1,2,1,0,3,4,1,0,5,6,1,0,7,9,41,0,16,1,0,0,0,2,18,1,0,0,0,4,20,1,
	0,0,0,6,22,1,0,0,0,8,24,1,0,0,0,10,27,1,0,0,0,12,31,1,0,0,0,14,38,1,0,0,
	0,16,17,7,0,0,0,17,1,1,0,0,0,18,19,7,1,0,0,19,3,1,0,0,0,20,21,7,2,0,0,21,
	5,1,0,0,0,22,23,7,3,0,0,23,7,1,0,0,0,24,25,3,4,2,0,25,26,5,12,0,0,26,9,
	1,0,0,0,27,29,3,6,3,0,28,30,3,8,4,0,29,28,1,0,0,0,29,30,1,0,0,0,30,11,1,
	0,0,0,31,32,3,0,0,0,32,33,5,10,0,0,33,36,3,10,5,0,34,35,5,10,0,0,35,37,
	3,2,1,0,36,34,1,0,0,0,36,37,1,0,0,0,37,13,1,0,0,0,38,43,3,12,6,0,39,40,
	5,11,0,0,40,42,3,12,6,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,
	1,0,0,0,44,15,1,0,0,0,45,43,1,0,0,0,3,29,36,43];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wbp2Parser.__ATN) {
			wbp2Parser.__ATN = new ATNDeserializer().deserialize(wbp2Parser._serializedATN);
		}

		return wbp2Parser.__ATN;
	}


	static DecisionsToDFA = wbp2Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ChordReferenceContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbp2Parser.RULE_chordReference;
	}
}


export class DirectionContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbp2Parser.RULE_direction;
	}
}


export class SignContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbp2Parser.RULE_sign;
	}
}


export class ChordToneContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wbp2Parser.RULE_chordTone;
	}
}


export class SignedIntContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(wbp2Parser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return wbp2Parser.RULE_signedInt;
	}
}


export class ChordToneReferenceContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return wbp2Parser.RULE_chordToneReference;
	}
}


export class StepContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return wbp2Parser.RULE_step;
	}
}


export class TransitionContext extends ParserRuleContext {
	constructor(parser?: wbp2Parser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return wbp2Parser.RULE_transition;
	}
}
