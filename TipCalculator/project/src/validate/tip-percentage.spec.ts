import validate from "./tip-percentage"
import { INumericValidateResult } from "./_structure"

const invalidInputResult: INumericValidateResult = {errMsg: 'Invalid input'}

describe('validate-tip-perc', function() {

    it('validates empty string', function() {
        expect(validate('')).toEqual({errMsg: "No tip selected"})
    })

    it('validates 0', function() {
        expect(validate('0')).toEqual({result: 0})
        expect(validate('0%')).toEqual({result: 0})

        expect(validate('-.0')).toEqual({result: -0})
        expect(validate('-0.000%')).toEqual({result: -0})
    })

    it('validates positive', function() {
        expect(validate('112')).toEqual({result: 1.12})
        expect(validate('46')).toEqual({result: .46})

        expect(validate('54.6%')).toEqual({result: .546})
        expect(validate('73.265')).toEqual({result: .73265})
    })

    it('validates negative', function() {
        expect(validate('-100')).toEqual({result: -1})
        expect(validate('-30')).toEqual({result: -.3})
        expect(validate('-4.6')).toEqual({result: -.046})
    })

    it('validates out of range', function() {
        expect(validate('-112')).toEqual({errMsg: "Input out of range"})
        expect(validate('-172.873')).toEqual({errMsg: "Input out of range"})
        expect(validate('-256')).toEqual({errMsg: "Input out of range"})
    })

    it('validates invalid inputs', function() {
        expect(validate('x')).toEqual(invalidInputResult)
        expect(validate('%')).toEqual(invalidInputResult)
        expect(validate('-%')).toEqual(invalidInputResult)
        expect(validate('.8.8')).toEqual(invalidInputResult)
        expect(validate('--8')).toEqual(invalidInputResult)
        expect(validate('-.')).toEqual(invalidInputResult)
    })
})
