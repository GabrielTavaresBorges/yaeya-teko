import * as _typescript_eslint_utils_ts_eslint from '@typescript-eslint/utils/ts-eslint';

interface PluginDocs {
    recommended?: boolean;
    requiresTypeChecking?: boolean;
}

type MESSAGE_IDS$2 = 'noImportingVitestGlobals' | 'noRequiringVitestGlobals';

type MESSAGE_IDS$1 = 'useToStrictEqual' | 'suggestReplaceWithStrictEqual';

type MESSAGE_IDS = 'tooManyArgs' | 'notEnoughArgs' | 'modifierUnknown' | 'matcherNotFound' | 'matcherNotCalled' | 'asyncMustBeAwaited' | 'promisesWithAsyncAssertionsMustBeAwaited';

type MessageIds$2 = 'noDoneCallback' | 'suggestWrappingInPromise' | 'useAwaitInsteadOfCallback';

type MESSAGE_ID$2 = 'missingFunction' | 'pending' | 'pendingSuite' | 'pendingTest' | 'disabledSuite' | 'disabledTest';

type Options$3 = [
    {
        max: number;
    }
];

type MESSAGE_ID$1 = 'restrictedViMethod' | 'restrictedViMethodWithMessage';
type Options$2 = [Record<string, string | null>];

declare enum UtilName {
    vi = "vi",
    vitest = "vitest"
}
declare enum TestCaseName {
    fit = "fit",
    it = "it",
    test = "test",
    xit = "xit",
    xtest = "xtest",
    bench = "bench"
}
declare enum HookName {
    beforeAll = "beforeAll",
    beforeEach = "beforeEach",
    afterAll = "afterAll",
    afterEach = "afterEach"
}

type MessageIds$1 = 'consistentMethod' | 'consistentMethodWithinDescribe';

type Options$1 = [
    Partial<{
        fixable: boolean;
    }>
];

type MESSAGE_ID = 'multipleTestTitle' | 'multipleDescribeTitle';

type Options = [
    {
        max: number;
    }
];

type MessageIds = 'lowerCaseTitle' | 'fullyLowerCaseTitle';

declare const plugin: {
    meta: {
        name: string;
        version: string;
    };
    rules: {
        "prefer-lowercase-title": _typescript_eslint_utils_ts_eslint.RuleModule<MessageIds, [Partial<{
            ignore: string[];
            allowedPrefixes: string[];
            ignoreTopLevelDescribe: boolean;
            lowercaseFirstCharacterOnly: boolean;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "max-nested-describe": _typescript_eslint_utils_ts_eslint.RuleModule<"maxNestedDescribe", Options, PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-identical-title": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_ID, [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-focused-tests": _typescript_eslint_utils_ts_eslint.RuleModule<"noFocusedTests", Options$1, PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-conditional-tests": _typescript_eslint_utils_ts_eslint.RuleModule<"noConditionalTests", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "expect-expect": _typescript_eslint_utils_ts_eslint.RuleModule<"noAssertions", [{
            assertFunctionNames: string[];
            additionalTestBlockFunctions: string[];
        }], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "consistent-test-it": _typescript_eslint_utils_ts_eslint.RuleModule<MessageIds$1, [Partial<{
            fn: TestCaseName.it | TestCaseName.test;
            withinDescribe: TestCaseName.it | TestCaseName.test;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "consistent-vitest-vi": _typescript_eslint_utils_ts_eslint.RuleModule<"consistentUtil", [Partial<{
            fn: UtilName;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-be": _typescript_eslint_utils_ts_eslint.RuleModule<"useToBe" | "useToBeUndefined" | "useToBeDefined" | "useToBeNull" | "useToBeNaN", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-hooks": _typescript_eslint_utils_ts_eslint.RuleModule<"unexpectedHook", [Partial<{
            allow: readonly HookName[];
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-restricted-vi-methods": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_ID$1, Options$2, PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "consistent-test-filename": _typescript_eslint_utils_ts_eslint.RuleModule<"consistentTestFilename", [Partial<{
            pattern: string;
            allTestPattern: string;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "max-expects": _typescript_eslint_utils_ts_eslint.RuleModule<"maxExpect", Options$3, PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-alias-methods": _typescript_eslint_utils_ts_eslint.RuleModule<"noAliasMethods", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-commented-out-tests": _typescript_eslint_utils_ts_eslint.RuleModule<"noCommentedOutTests", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-conditional-expect": _typescript_eslint_utils_ts_eslint.RuleModule<"noConditionalExpect", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-conditional-in-test": _typescript_eslint_utils_ts_eslint.RuleModule<"noConditionalInTest", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-disabled-tests": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_ID$2, [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-done-callback": _typescript_eslint_utils_ts_eslint.RuleModule<MessageIds$2, [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-duplicate-hooks": _typescript_eslint_utils_ts_eslint.RuleModule<"noDuplicateHooks", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-large-snapshots": _typescript_eslint_utils_ts_eslint.RuleModule<"noSnapShot" | "tooLongSnapShot", [{
            maxSize?: number;
            inlineMaxSize?: number;
            allowedSnapshots?: Record<string, Array<string | RegExp>>;
        }], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-interpolation-in-snapshots": _typescript_eslint_utils_ts_eslint.RuleModule<"noInterpolationInSnapshots", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-mocks-import": _typescript_eslint_utils_ts_eslint.RuleModule<"noMocksImport", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-restricted-matchers": _typescript_eslint_utils_ts_eslint.RuleModule<"restrictedChain" | "restrictedChainWithMessage", Record<string, string | null>[], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-standalone-expect": _typescript_eslint_utils_ts_eslint.RuleModule<"noStandaloneExpect", {
            additionalTestBlockFunctions?: string[];
        }[], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-test-prefixes": _typescript_eslint_utils_ts_eslint.RuleModule<"usePreferredName", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-test-return-statement": _typescript_eslint_utils_ts_eslint.RuleModule<"noTestReturnStatement", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-import-node-test": _typescript_eslint_utils_ts_eslint.RuleModule<"noImportNodeTest", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-called-with": _typescript_eslint_utils_ts_eslint.RuleModule<"preferCalledWith", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "valid-title": _typescript_eslint_utils_ts_eslint.RuleModule<"titleMustBeString" | "emptyTitle" | "duplicatePrefix" | "accidentalSpace" | "disallowedWord" | "mustNotMatch" | "mustMatch" | "mustNotMatchCustom" | "mustMatchCustom", {
            ignoreTypeOfDescribeName?: boolean;
            allowArguments?: boolean;
            disallowedWords?: string[];
            mustNotMatch?: Partial<Record<"test" | "describe" | "it", string | [matcher: string, message?: string | undefined]>> | [matcher: string, message?: string | undefined] | string;
            mustMatch?: Partial<Record<"test" | "describe" | "it", string | [matcher: string, message?: string | undefined]>> | [matcher: string, message?: string | undefined] | string;
        }[], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "valid-expect": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_IDS, [Partial<{
            alwaysAwait: boolean;
            asyncMatchers: string[];
            minArgs: number;
            maxArgs: number;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-be-falsy": _typescript_eslint_utils_ts_eslint.RuleModule<"preferToBeFalsy", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-be-object": _typescript_eslint_utils_ts_eslint.RuleModule<"preferToBeObject", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-be-truthy": _typescript_eslint_utils_ts_eslint.RuleModule<"preferToBeTruthy", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-have-length": _typescript_eslint_utils_ts_eslint.RuleModule<"preferToHaveLength", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-equality-matcher": _typescript_eslint_utils_ts_eslint.RuleModule<"useEqualityMatcher" | "suggestEqualityMatcher", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-strict-equal": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_IDS$1, [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-expect-resolves": _typescript_eslint_utils_ts_eslint.RuleModule<"expectResolves", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-each": _typescript_eslint_utils_ts_eslint.RuleModule<"preferEach", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-hooks-on-top": _typescript_eslint_utils_ts_eslint.RuleModule<"noHookOnTop", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-hooks-in-order": _typescript_eslint_utils_ts_eslint.RuleModule<"reorderHooks", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "require-local-test-context-for-concurrent-snapshots": _typescript_eslint_utils_ts_eslint.RuleModule<"requireLocalTestContext", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-mock-promise-shorthand": _typescript_eslint_utils_ts_eslint.RuleModule<"useMockShorthand", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-vi-mocked": _typescript_eslint_utils_ts_eslint.RuleModule<"useViMocked", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-snapshot-hint": _typescript_eslint_utils_ts_eslint.RuleModule<"missingHint", [("always" | "multi" | undefined)?], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "valid-describe-callback": _typescript_eslint_utils_ts_eslint.RuleModule<"nameAndCallback" | "secondArgumentMustBeFunction" | "unexpectedDescribeArgument" | "unexpectedReturnInDescribe", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "require-top-level-describe": _typescript_eslint_utils_ts_eslint.RuleModule<"unexpectedHook" | "tooManyDescribes" | "unexpectedTestCase", [Partial<{
            maxNumberOfTopLevelDescribes: number;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "require-to-throw-message": _typescript_eslint_utils_ts_eslint.RuleModule<"addErrorMessage", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "require-hook": _typescript_eslint_utils_ts_eslint.RuleModule<"useHook", [{
            allowedFunctionCalls?: readonly string[];
        }], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-todo": _typescript_eslint_utils_ts_eslint.RuleModule<"emptyTest" | "unimplementedTest", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-spy-on": _typescript_eslint_utils_ts_eslint.RuleModule<"useViSpayOn", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-comparison-matcher": _typescript_eslint_utils_ts_eslint.RuleModule<"useToBeComparison", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-describe-function-title": _typescript_eslint_utils_ts_eslint.RuleModule<"preferFunction", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-to-contain": _typescript_eslint_utils_ts_eslint.RuleModule<"useToContain", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-expect-assertions": _typescript_eslint_utils_ts_eslint.RuleModule<"hasAssertionsTakesNoArguments" | "assertionsRequiresOneArgument" | "assertionsRequiresNumberArgument" | "haveExpectAssertions" | "suggestAddingHasAssertions" | "suggestAddingAssertions" | "suggestRemovingExtraArguments", {
            onlyFunctionsWithAsyncKeyword?: boolean;
            onlyFunctionsWithExpectInLoop?: boolean;
            onlyFunctionsWithExpectInCallback?: boolean;
        }[], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-after-all-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-after-each-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-all": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-before-all-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-before-each-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-describe-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-expect-groups": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "padding-around-test-blocks": _typescript_eslint_utils_ts_eslint.RuleModule<"missingPadding", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "valid-expect-in-promise": _typescript_eslint_utils_ts_eslint.RuleModule<"expectInFloatingPromise", [Partial<{
            alwaysAwait: boolean;
            asyncMatchers: string[];
            minArgs: number;
            maxArgs: number;
        }>], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-strict-boolean-matchers": _typescript_eslint_utils_ts_eslint.RuleModule<"preferToBeTrue" | "preferToBeFalse", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "require-mock-type-parameters": _typescript_eslint_utils_ts_eslint.RuleModule<"noTypeParameter", {
            checkImportFunctions?: boolean;
        }[], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "no-importing-vitest-globals": _typescript_eslint_utils_ts_eslint.RuleModule<MESSAGE_IDS$2, [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-importing-vitest-globals": _typescript_eslint_utils_ts_eslint.RuleModule<"preferImportingVitestGlobals", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-called-once": _typescript_eslint_utils_ts_eslint.RuleModule<"preferCalledOnce", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "prefer-called-times": _typescript_eslint_utils_ts_eslint.RuleModule<"preferCalledTimes", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
        "warn-todo": _typescript_eslint_utils_ts_eslint.RuleModule<"warnTodo", [], PluginDocs, _typescript_eslint_utils_ts_eslint.RuleListener>;
    };
    environments: {
        env: {
            globals: {
                suite: boolean;
                test: boolean;
                describe: boolean;
                it: boolean;
                expectTypeOf: boolean;
                assertType: boolean;
                expect: boolean;
                assert: boolean;
                chai: boolean;
                vitest: boolean;
                vi: boolean;
                beforeAll: boolean;
                afterAll: boolean;
                beforeEach: boolean;
                afterEach: boolean;
                onTestFailed: boolean;
                onTestFinished: boolean;
            };
        };
    };
    configs: {
        'legacy-recommended': {
            plugins: string[];
            rules: {};
        };
        'legacy-all': {
            plugins: string[];
            rules: {};
        };
        recommended: {
            name: string;
            plugins: {
                readonly vitest: /*elided*/ any;
            };
            rules: {
                readonly "vitest/expect-expect": "error";
                readonly "vitest/no-identical-title": "error";
                readonly "vitest/no-commented-out-tests": "error";
                readonly "vitest/valid-title": "error";
                readonly "vitest/valid-expect": "error";
                readonly "vitest/valid-describe-callback": "error";
                readonly "vitest/require-local-test-context-for-concurrent-snapshots": "error";
                readonly "vitest/no-import-node-test": "error";
            };
        };
        all: {
            name: string;
            plugins: {
                readonly vitest: /*elided*/ any;
            };
            rules: {
                readonly "vitest/prefer-lowercase-title": "warn";
                readonly "vitest/max-nested-describe": "warn";
                readonly "vitest/no-focused-tests": "warn";
                readonly "vitest/no-conditional-tests": "warn";
                readonly "vitest/consistent-test-it": "warn";
                readonly "vitest/consistent-vitest-vi": "warn";
                readonly "vitest/no-hooks": "warn";
                readonly "vitest/no-restricted-vi-methods": "warn";
                readonly "vitest/consistent-test-filename": "warn";
                readonly "vitest/max-expects": "warn";
                readonly "vitest/no-alias-methods": "warn";
                readonly "vitest/no-conditional-expect": "warn";
                readonly "vitest/no-conditional-in-test": "warn";
                readonly "vitest/no-disabled-tests": "warn";
                readonly "vitest/no-done-callback": "warn";
                readonly "vitest/no-duplicate-hooks": "warn";
                readonly "vitest/no-large-snapshots": "warn";
                readonly "vitest/no-interpolation-in-snapshots": "warn";
                readonly "vitest/no-mocks-import": "warn";
                readonly "vitest/no-restricted-matchers": "warn";
                readonly "vitest/no-standalone-expect": "warn";
                readonly "vitest/no-test-prefixes": "warn";
                readonly "vitest/no-test-return-statement": "warn";
                readonly "vitest/prefer-called-with": "warn";
                readonly "vitest/prefer-to-be-falsy": "off";
                readonly "vitest/prefer-to-be-object": "warn";
                readonly "vitest/prefer-to-be-truthy": "off";
                readonly "vitest/prefer-to-have-length": "warn";
                readonly "vitest/prefer-equality-matcher": "warn";
                readonly "vitest/prefer-strict-equal": "warn";
                readonly "vitest/prefer-expect-resolves": "warn";
                readonly "vitest/prefer-each": "warn";
                readonly "vitest/prefer-hooks-on-top": "warn";
                readonly "vitest/prefer-hooks-in-order": "warn";
                readonly "vitest/prefer-mock-promise-shorthand": "warn";
                readonly "vitest/prefer-vi-mocked": "warn";
                readonly "vitest/prefer-snapshot-hint": "warn";
                readonly "vitest/require-top-level-describe": "warn";
                readonly "vitest/require-to-throw-message": "warn";
                readonly "vitest/require-hook": "warn";
                readonly "vitest/prefer-todo": "warn";
                readonly "vitest/prefer-spy-on": "warn";
                readonly "vitest/prefer-comparison-matcher": "warn";
                readonly "vitest/prefer-describe-function-title": "warn";
                readonly "vitest/prefer-to-contain": "warn";
                readonly "vitest/prefer-expect-assertions": "warn";
                readonly "vitest/prefer-to-be": "warn";
                readonly "vitest/padding-around-after-all-blocks": "warn";
                readonly "vitest/padding-around-after-each-blocks": "warn";
                readonly "vitest/padding-around-all": "warn";
                readonly "vitest/padding-around-before-all-blocks": "warn";
                readonly "vitest/padding-around-before-each-blocks": "warn";
                readonly "vitest/padding-around-describe-blocks": "warn";
                readonly "vitest/padding-around-expect-groups": "warn";
                readonly "vitest/padding-around-test-blocks": "warn";
                readonly "vitest/valid-expect-in-promise": "warn";
                readonly "vitest/expect-expect": "warn";
                readonly "vitest/no-identical-title": "warn";
                readonly "vitest/no-commented-out-tests": "warn";
                readonly "vitest/valid-title": "warn";
                readonly "vitest/valid-expect": "warn";
                readonly "vitest/valid-describe-callback": "warn";
                readonly "vitest/require-local-test-context-for-concurrent-snapshots": "warn";
                readonly "vitest/no-import-node-test": "warn";
                readonly "vitest/prefer-strict-boolean-matchers": "warn";
                readonly "vitest/require-mock-type-parameters": "warn";
                readonly "vitest/no-importing-vitest-globals": "off";
                readonly "vitest/prefer-importing-vitest-globals": "warn";
                readonly "vitest/prefer-called-once": "off";
                readonly "vitest/prefer-called-times": "warn";
            };
        };
        env: {
            name: string;
            languageOptions: {
                globals: {
                    suite: string;
                    test: string;
                    describe: string;
                    it: string;
                    expectTypeOf: string;
                    assertType: string;
                    expect: string;
                    assert: string;
                    chai: string;
                    vitest: string;
                    vi: string;
                    beforeAll: string;
                    afterAll: string;
                    beforeEach: string;
                    afterEach: string;
                    onTestFailed: string;
                    onTestFinished: string;
                };
            };
        };
    };
};

export = plugin;
