export const version: "4.2.0";
declare namespace _Syntax {
    export const AssignmentExpression: string;
    export const AssignmentPattern: string;
    export const ArrayExpression: string;
    export const ArrayPattern: string;
    export const ArrowFunctionExpression: string;
    export const AwaitExpression: string;
    export const BlockStatement: string;
    export const BinaryExpression: string;
    export const BreakStatement: string;
    export const CallExpression: string;
    export const CatchClause: string;
    export const ClassBody: string;
    export const ClassDeclaration: string;
    export const ClassExpression: string;
    export const ComprehensionBlock: string;
    export const ComprehensionExpression: string;
    export const ConditionalExpression: string;
    export const ContinueStatement: string;
    export const DebuggerStatement: string;
    export const DirectiveStatement: string;
    export const DoWhileStatement: string;
    export const EmptyStatement: string;
    export const ExportAllDeclaration: string;
    export const ExportDefaultDeclaration: string;
    export const ExportNamedDeclaration: string;
    export const ExportSpecifier: string;
    export const ExpressionStatement: string;
    export const ForStatement: string;
    export const ForInStatement: string;
    export const ForOfStatement: string;
    export const FunctionDeclaration: string;
    export const FunctionExpression: string;
    export const GeneratorExpression: string;
    export const Identifier: string;
    export const IfStatement: string;
    export const ImportDeclaration: string;
    export const ImportDefaultSpecifier: string;
    export const ImportNamespaceSpecifier: string;
    export const ImportSpecifier: string;
    export const Literal: string;
    export const LabeledStatement: string;
    export const LogicalExpression: string;
    export const MemberExpression: string;
    export const MetaProperty: string;
    export const MethodDefinition: string;
    export const ModuleSpecifier: string;
    export const NewExpression: string;
    export const ObjectExpression: string;
    export const ObjectPattern: string;
    export const Program: string;
    export const Property: string;
    export const RestElement: string;
    export const ReturnStatement: string;
    export const SequenceExpression: string;
    export const SpreadElement: string;
    export const Super: string;
    export const SwitchStatement: string;
    export const SwitchCase: string;
    export const TaggedTemplateExpression: string;
    export const TemplateElement: string;
    export const TemplateLiteral: string;
    export const ThisExpression: string;
    export const ThrowStatement: string;
    export const TryStatement: string;
    export const UnaryExpression: string;
    export const UpdateExpression: string;
    export const VariableDeclaration: string;
    export const VariableDeclarator: string;
    export const WhileStatement: string;
    export const WithStatement: string;
    export const YieldExpression: string;
}
declare function _traverse(root: any, visitor: any): void;
declare function _replace(root: any, visitor: any): any;
declare function _attachComments(tree: any, providedComments: any, tokens: any): any;
declare namespace _VisitorKeys {
    const AssignmentExpression_1: string[];
    export { AssignmentExpression_1 as AssignmentExpression };
    const AssignmentPattern_1: string[];
    export { AssignmentPattern_1 as AssignmentPattern };
    const ArrayExpression_1: string[];
    export { ArrayExpression_1 as ArrayExpression };
    const ArrayPattern_1: string[];
    export { ArrayPattern_1 as ArrayPattern };
    const ArrowFunctionExpression_1: string[];
    export { ArrowFunctionExpression_1 as ArrowFunctionExpression };
    const AwaitExpression_1: string[];
    export { AwaitExpression_1 as AwaitExpression };
    const BlockStatement_1: string[];
    export { BlockStatement_1 as BlockStatement };
    const BinaryExpression_1: string[];
    export { BinaryExpression_1 as BinaryExpression };
    const BreakStatement_1: string[];
    export { BreakStatement_1 as BreakStatement };
    const CallExpression_1: string[];
    export { CallExpression_1 as CallExpression };
    const CatchClause_1: string[];
    export { CatchClause_1 as CatchClause };
    const ClassBody_1: string[];
    export { ClassBody_1 as ClassBody };
    const ClassDeclaration_1: string[];
    export { ClassDeclaration_1 as ClassDeclaration };
    const ClassExpression_1: string[];
    export { ClassExpression_1 as ClassExpression };
    const ComprehensionBlock_1: string[];
    export { ComprehensionBlock_1 as ComprehensionBlock };
    const ComprehensionExpression_1: string[];
    export { ComprehensionExpression_1 as ComprehensionExpression };
    const ConditionalExpression_1: string[];
    export { ConditionalExpression_1 as ConditionalExpression };
    const ContinueStatement_1: string[];
    export { ContinueStatement_1 as ContinueStatement };
    const DebuggerStatement_1: never[];
    export { DebuggerStatement_1 as DebuggerStatement };
    const DirectiveStatement_1: never[];
    export { DirectiveStatement_1 as DirectiveStatement };
    const DoWhileStatement_1: string[];
    export { DoWhileStatement_1 as DoWhileStatement };
    const EmptyStatement_1: never[];
    export { EmptyStatement_1 as EmptyStatement };
    const ExportAllDeclaration_1: string[];
    export { ExportAllDeclaration_1 as ExportAllDeclaration };
    const ExportDefaultDeclaration_1: string[];
    export { ExportDefaultDeclaration_1 as ExportDefaultDeclaration };
    const ExportNamedDeclaration_1: string[];
    export { ExportNamedDeclaration_1 as ExportNamedDeclaration };
    const ExportSpecifier_1: string[];
    export { ExportSpecifier_1 as ExportSpecifier };
    const ExpressionStatement_1: string[];
    export { ExpressionStatement_1 as ExpressionStatement };
    const ForStatement_1: string[];
    export { ForStatement_1 as ForStatement };
    const ForInStatement_1: string[];
    export { ForInStatement_1 as ForInStatement };
    const ForOfStatement_1: string[];
    export { ForOfStatement_1 as ForOfStatement };
    const FunctionDeclaration_1: string[];
    export { FunctionDeclaration_1 as FunctionDeclaration };
    const FunctionExpression_1: string[];
    export { FunctionExpression_1 as FunctionExpression };
    const GeneratorExpression_1: string[];
    export { GeneratorExpression_1 as GeneratorExpression };
    const Identifier_1: never[];
    export { Identifier_1 as Identifier };
    const IfStatement_1: string[];
    export { IfStatement_1 as IfStatement };
    const ImportDeclaration_1: string[];
    export { ImportDeclaration_1 as ImportDeclaration };
    const ImportDefaultSpecifier_1: string[];
    export { ImportDefaultSpecifier_1 as ImportDefaultSpecifier };
    const ImportNamespaceSpecifier_1: string[];
    export { ImportNamespaceSpecifier_1 as ImportNamespaceSpecifier };
    const ImportSpecifier_1: string[];
    export { ImportSpecifier_1 as ImportSpecifier };
    const Literal_1: never[];
    export { Literal_1 as Literal };
    const LabeledStatement_1: string[];
    export { LabeledStatement_1 as LabeledStatement };
    const LogicalExpression_1: string[];
    export { LogicalExpression_1 as LogicalExpression };
    const MemberExpression_1: string[];
    export { MemberExpression_1 as MemberExpression };
    const MetaProperty_1: string[];
    export { MetaProperty_1 as MetaProperty };
    const MethodDefinition_1: string[];
    export { MethodDefinition_1 as MethodDefinition };
    const ModuleSpecifier_1: never[];
    export { ModuleSpecifier_1 as ModuleSpecifier };
    const NewExpression_1: string[];
    export { NewExpression_1 as NewExpression };
    const ObjectExpression_1: string[];
    export { ObjectExpression_1 as ObjectExpression };
    const ObjectPattern_1: string[];
    export { ObjectPattern_1 as ObjectPattern };
    const Program_1: string[];
    export { Program_1 as Program };
    const Property_1: string[];
    export { Property_1 as Property };
    const RestElement_1: string[];
    export { RestElement_1 as RestElement };
    const ReturnStatement_1: string[];
    export { ReturnStatement_1 as ReturnStatement };
    const SequenceExpression_1: string[];
    export { SequenceExpression_1 as SequenceExpression };
    const SpreadElement_1: string[];
    export { SpreadElement_1 as SpreadElement };
    const Super_1: never[];
    export { Super_1 as Super };
    const SwitchStatement_1: string[];
    export { SwitchStatement_1 as SwitchStatement };
    const SwitchCase_1: string[];
    export { SwitchCase_1 as SwitchCase };
    const TaggedTemplateExpression_1: string[];
    export { TaggedTemplateExpression_1 as TaggedTemplateExpression };
    const TemplateElement_1: never[];
    export { TemplateElement_1 as TemplateElement };
    const TemplateLiteral_1: string[];
    export { TemplateLiteral_1 as TemplateLiteral };
    const ThisExpression_1: never[];
    export { ThisExpression_1 as ThisExpression };
    const ThrowStatement_1: string[];
    export { ThrowStatement_1 as ThrowStatement };
    const TryStatement_1: string[];
    export { TryStatement_1 as TryStatement };
    const UnaryExpression_1: string[];
    export { UnaryExpression_1 as UnaryExpression };
    const UpdateExpression_1: string[];
    export { UpdateExpression_1 as UpdateExpression };
    const VariableDeclaration_1: string[];
    export { VariableDeclaration_1 as VariableDeclaration };
    const VariableDeclarator_1: string[];
    export { VariableDeclarator_1 as VariableDeclarator };
    const WhileStatement_1: string[];
    export { WhileStatement_1 as WhileStatement };
    const WithStatement_1: string[];
    export { WithStatement_1 as WithStatement };
    const YieldExpression_1: string[];
    export { YieldExpression_1 as YieldExpression };
}
declare namespace _VisitorOption {
    export { BREAK as Break };
    export { SKIP as Skip };
    export { REMOVE as Remove };
}
declare const _Controller: typeof Controller;
declare var BREAK: any;
declare var SKIP: any;
declare var REMOVE: any;
declare function Controller(): void;
declare class Controller {
    path(): any[] | null;
    type(): any;
    parents(): any[];
    current(): any;
    __execute(callback: any, element: any): any;
    __current: any;
    __state: any;
    notify(flag: any): void;
    skip(): void;
    break(): void;
    remove(): void;
    __initialize(root: any, visitor: any): void;
    visitor: any;
    root: any;
    __worklist: any[] | undefined;
    __leavelist: any[] | undefined;
    __fallback: any;
    __keys: any;
    traverse(root: any, visitor: any): void;
    replace(root: any, visitor: any): any;
}
export { _Syntax as Syntax, _traverse as traverse, _replace as replace, _attachComments as attachComments, _VisitorKeys as VisitorKeys, _VisitorOption as VisitorOption, _Controller as Controller };