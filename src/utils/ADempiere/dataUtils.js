// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com www.erpya.com
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

export const OPERATOR_EQUAL = {
  operator: 'EQUAL',
  symbol: '='
}

export const OPERATOR_NOT_EQUAL = {
  operator: 'NOT_EQUAL',
  symbol: '<>'
}

export const OPERATOR_LIKE = {
  operator: 'LIKE',
  symbol: '%'
}

export const OPERATOR_NOT_LIKE = {
  operator: 'NOT_LIKE',
  symbol: '!%'
}

export const OPERATOR_GREATER = {
  operator: 'GREATER',
  symbol: '>'
}

export const OPERATOR_GREATER_EQUAL = {
  operator: 'GREATER_EQUAL',
  symbol: '>='
}

export const OPERATOR_LESS = {
  operator: 'LESS',
  symbol: '<'
}

export const OPERATOR_LESS_EQUAL = {
  operator: 'LESS_EQUAL',
  symbol: '<='
}

export const OPERATOR_BETWEEN = {
  operator: 'BETWEEN',
  symbol: '>-<'
}

export const OPERATOR_NULL = {
  operator: 'NULL',
  symbol: ''
}

export const OPERATOR_NOT_NULL = {
  operator: 'NOT_NULL',
  symbol: ''
}

export const OPERATOR_IN = {
  operator: 'IN',
  symbol: '()'
}

export const OPERATOR_NOT_IN = {
  operator: 'NOT_IN',
  symbol: '!()'
}

const STANDARD_OPERATORS_LIST = [
  OPERATOR_EQUAL.operator,
  OPERATOR_NOT_EQUAL.operator,
  OPERATOR_NULL.operator,
  OPERATOR_NOT_NULL.operator
]

const MULTIPLE_OPERATORS_LIST = [
  OPERATOR_IN.operator,
  OPERATOR_NOT_IN.operator
]

const TEXT_OPERATORS_LIST = [
  OPERATOR_LIKE.operator,
  OPERATOR_NOT_LIKE.operator
]

const RANGE_OPERATORS_LIST = [
  OPERATOR_GREATER.operator,
  OPERATOR_GREATER_EQUAL.operator,
  OPERATOR_LESS.operator,
  OPERATOR_LESS_EQUAL.operator
]

export const OPERATORS_LIST = [
  OPERATOR_EQUAL,
  OPERATOR_NOT_EQUAL,
  OPERATOR_LIKE,
  OPERATOR_NOT_LIKE,
  OPERATOR_GREATER,
  OPERATOR_LESS,
  OPERATOR_LESS_EQUAL,
  OPERATOR_BETWEEN,
  OPERATOR_NOT_NULL,
  OPERATOR_NULL,
  OPERATOR_IN,
  OPERATOR_NOT_IN
]

export const OPERATORS_FIELD_AMOUNT = {
  componentPath: 'FieldAmount',
  isRange: true,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...RANGE_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_DATE = {
  componentPath: 'FieldDate',
  isRange: true,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...RANGE_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_NUMBER = {
  componentPath: 'FieldNumber',
  isRange: true,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...RANGE_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_SELECT = {
  componentPath: 'FieldSelect',
  isRange: false,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_TEXT = {
  componentPath: 'FieldText',
  isRange: false,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...TEXT_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_TEXT_LONG = {
  componentPath: 'FieldTextLong',
  isRange: false,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...TEXT_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_URL = {
  componentPath: 'FieldUrl',
  isRange: false,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...TEXT_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_TIME = {
  componentPath: 'FieldTime',
  isRange: true,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST,
    ...RANGE_OPERATORS_LIST,
    ...MULTIPLE_OPERATORS_LIST
  ]
}

export const OPERATORS_FIELD_YES_NO = {
  componentPath: 'FieldYesNo',
  isRange: false,
  operatorsList: [
    ...STANDARD_OPERATORS_LIST
  ]
}

// Components associated with search componentPath
export const FIELD_OPERATORS_LIST = [
  OPERATORS_FIELD_AMOUNT,
  OPERATORS_FIELD_DATE,
  OPERATORS_FIELD_NUMBER,
  OPERATORS_FIELD_SELECT,
  OPERATORS_FIELD_TEXT,
  OPERATORS_FIELD_TEXT_LONG,
  OPERATORS_FIELD_URL,
  OPERATORS_FIELD_TIME,
  OPERATORS_FIELD_YES_NO
]

export const OPERATORS_MULTIPLE_VALUES = [
  OPERATOR_IN.operator,
  OPERATOR_NOT_IN.operator
]

export const OPERATORS_IGNORE_VALUE = [
  OPERATOR_NULL.operator,
  OPERATOR_NOT_NULL.operator
]
