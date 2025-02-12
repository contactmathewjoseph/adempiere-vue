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

// utils and helper methods
import { isEmptyValue } from '@/utils/ADempiere/valueUtils.js'
import { isDisplayedField, isMandatoryField } from '@/utils/ADempiere/dictionary/process.js'
import { isNumberField } from '@/utils/ADempiere/references.js'

/**
 * Dictionary Report Getters
 */
export default {
  getStoredReport: (state) => (reportUuid) => {
    return state.storedReports[reportUuid]
  },

  getStoredFieldsFromReport: (state, getters) => (reportUuid) => {
    const report = getters.getStoredReport(reportUuid)
    if (!isEmptyValue(report)) {
      return report.fieldsList
    }
    return undefined
  },

  getStoredReportExportTypes: (state, getters) => (reportUuid) => {
    const report = getters.getStoredReport(reportUuid)
    if (!isEmptyValue(report)) {
      return report.reportExportTypes
    }
    return []
  },

  /**
   * Determinate if panel is ready to send, all fields mandatory and displayed with values
   * @param {string}  containerUuid
   * @param {object}  row, data to compare if is table
   * @returns {object}
   */
  getReportParametersEmptyMandatory: (state, getters, rootState, rootGetters) => ({
    containerUuid,
    fieldsList,
    formatReturn = 'name'
  }) => {
    if (isEmptyValue(fieldsList)) {
      fieldsList = getters.getStoredFieldsFromProcess(containerUuid)
    }

    const fieldsEmpty = fieldsList.filter(fieldItem => {
      const isMandatory = isMandatoryField(fieldItem)
      const isDisplayed = isDisplayedField(fieldItem)

      if (!(isDisplayed && isMandatory)) {
        return false
      }

      const value = rootGetters.getValueOfField({
        containerUuid,
        columnName: fieldItem.columnName
      })

      if (!isEmptyValue(value)) {
        return false
      }

      // displayed or madatory and empty
      return true
    })

    if (formatReturn) {
      return fieldsEmpty.map(fieldItem => {
        // fieldItem.name by default
        return fieldItem[formatReturn]
      })
    }

    return fieldsEmpty
  },

  /**
   * Getter converter params with value format
   * @param {String} containerUuid
   * @param {Array<Object>} fieldsList
   * @returns {Array<Object>} [{ columnName: name key, value: value to send }]
   */
  getReportParameters: (state, getters, rootState, rootGetters) => ({
    containerUuid,
    fieldsList = []
  }) => {
    if (isEmptyValue(fieldsList)) {
      fieldsList = getters.getStoredFieldsFromReport(containerUuid)
    }

    const reportParameters = []

    fieldsList.forEach(fieldItem => {
      const { columnName } = fieldItem
      const isMandatory = isMandatoryField(fieldItem)
      // evaluate displayed fields
      const isDisplayed = isDisplayedField(fieldItem) &&
        (fieldItem.isShowedFromUser || isMandatory)

      if (!isDisplayed) {
        return
      }

      const value = rootGetters.getValueOfField({
        containerUuid,
        columnName
      })

      if (fieldItem.isRange && !isNumberField(fieldItem.displayType)) {
        const valueTo = rootGetters.getValueOfField({
          containerUuid,
          columnName: fieldItem.columnNameTo
        })
        if (!isEmptyValue(valueTo)) {
          reportParameters.push({
            columnName: fieldItem.columnNameTo,
            value: valueTo
          })
        }
      }

      if (!isEmptyValue(value)) {
        reportParameters.push({
          columnName,
          value
        })
      }
    })

    return reportParameters
  }

}
